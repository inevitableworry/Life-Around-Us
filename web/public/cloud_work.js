// Web worker (module): the heavy pixel work behind the live clouds, off the
// page's main thread so the globe never stalls while it runs (reading back a
// 2048 x 1024 picture and walking every pixel took the page 300-450 ms in
// one go, a visible freeze, most often right at start-up).
//
//   { cmd: "clouds", url, lastSig }  -> { bmp, cells, sig } or { same: true }
//   { cmd: "sea", W, H }             -> { m } (255 = sea, 0 = land, row 0 = north)
//
// Infrared brightness (cold = bright) to cloud cover (white on black). The
// clear ground is estimated locally: in boxes of about 5.6 deg, separately for
// land and for sea (the land/sea mask is the globe's own specular map), the
// 25th percentile is the clear surface there. Whatever is colder than its own
// local ground counts as cloud, so low warm clouds over the sea show up while
// a cool desert (Arabia, the Sahara at night) or a cold plain stays clear.
// Pure white is "no data" (beyond the satellites' view, near the poles):
// none there, faded off from 70 deg.
const CLOUD_CURVE = { off: 3, scale: 42, gamma: 0.55, box: 32, pct: 0.25 };

const seaMasks = new Map();                       // by size
function seaMask(W, H) {
  const key = `${W}x${H}`;
  if (!seaMasks.has(key)) seaMasks.set(key, (async () => {
    const r = await fetch(new URL("assets/earth/original-specular.png", self.location.href));
    if (!r.ok) throw new Error(`land/sea map HTTP ${r.status}`);
    const bmp = await createImageBitmap(await r.blob());
    const cv = new OffscreenCanvas(W, H), g = cv.getContext("2d", { willReadFrequently: true });
    g.imageSmoothingQuality = "high"; g.drawImage(bmp, 0, 0, W, H); bmp.close();
    const d = g.getImageData(0, 0, W, H).data, m = new Uint8Array(W * H);
    for (let i = 0; i < W * H; i++) m[i] = d[i * 4] > 127 ? 1 : 0;
    return m;
  })().catch((e) => { seaMasks.delete(key); throw e; }));
  return seaMasks.get(key);
}

// One coarse grid of clear-ground values for one surface (land or sea).
function groundGrid(ir, valid, sea, want, W, H, B, pct) {
  const gw = Math.floor(W / B), gh = Math.floor(H / B), g = new Float32Array(gw * gh).fill(NaN);
  const hist = new Uint32Array(256);
  for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) {
    hist.fill(0); let n = 0;
    for (let y = j * B; y < (j + 1) * B; y++) for (let x = i * B, k = y * W + x; x < (i + 1) * B; x++, k++)
      if (valid[k] && sea[k] === want) { hist[ir[k]]++; n++; }
    if (n <= B * B * 0.15) continue;
    for (let v = 0, c = 0; v < 256; v++) { c += hist[v]; if (c >= n * pct) { g[j * gw + i] = v; break; } }
  }
  for (let pass = 0; pass < 6; pass++) {                 // fill empty boxes from their neighbours
    const src = g.slice(); let left = 0;
    for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) {
      if (!Number.isNaN(src[j * gw + i])) continue;
      let acc = 0, cnt = 0;
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        const jj = j + dj; if (jj < 0 || jj >= gh) continue;
        const v = src[jj * gw + ((i + di + gw) % gw)];
        if (!Number.isNaN(v)) { acc += v; cnt++; }
      }
      if (cnt) g[j * gw + i] = acc / cnt; else left++;
    }
    if (!left) break;
  }
  for (let j = 0; j < gh; j++) {                         // still empty: the row's median (or nothing)
    const row = []; for (let i = 0; i < gw; i++) if (!Number.isNaN(g[j * gw + i])) row.push(g[j * gw + i]);
    row.sort((a, b) => a - b);
    const med = row.length ? row[row.length >> 1] : 255;
    for (let i = 0; i < gw; i++) if (Number.isNaN(g[j * gw + i])) g[j * gw + i] = med;
  }
  return { g, gw, gh };
}
function sampleGrid({ g, gw, gh }, x, y, W, H) {        // bilinear, wrapping east-west
  const fx = ((x + 0.5) * gw) / W - 0.5, fy = Math.min(gh - 1, Math.max(0, ((y + 0.5) * gh) / H - 0.5));
  const x0 = Math.floor(fx), y0 = Math.floor(fy), tx = fx - x0, ty = fy - y0;
  const xa = (x0 + gw) % gw, xb = (x0 + 1) % gw, y1 = Math.min(gh - 1, y0 + 1);
  const a = g[y0 * gw + xa] * (1 - tx) + g[y0 * gw + xb] * tx, b = g[y1 * gw + xa] * (1 - tx) + g[y1 * gw + xb] * tx;
  return a * (1 - ty) + b * ty;
}

// Thunderstorms: the coldest cloud tops (deep convection) between 45 S and
// 45 N, one per ~4 deg at most, strongest first -- where the lightning
// flashes (effects.js). s: 0..1 how cold.
function findStormCells(ir, valid, W, H) {
  const best = new Map();
  for (const th of [205, 195]) {
    best.clear();
    for (let y = 0; y < H; y++) {
      const lat = 90 - ((y + 0.5) * 180) / H;
      if (Math.abs(lat) > 45) continue;
      for (let x = 0, k = y * W; x < W; x++, k++) {
        if (!valid[k] || ir[k] < th) continue;
        const key = Math.floor((lat + 90) / 2) * 1000 + Math.floor(((x + 0.5) * 360) / W / 2);
        const cur = best.get(key);
        if (!cur || ir[k] > cur.v) best.set(key, { v: ir[k], lat, lon: ((x + 0.5) * 360) / W - 180 });
      }
    }
    if (best.size >= 6) break;
  }
  const cells = [...best.values()].sort((a, b) => b.v - a.v), out = [];
  for (const c of cells) {
    if (out.length >= 40) break;
    const near = (o) => Math.abs(o.lat - c.lat) < 4 && Math.abs(((o.lon - c.lon + 540) % 360) - 180) < 4 / Math.max(0.3, Math.cos((c.lat * Math.PI) / 180));
    if (out.some(near)) continue;
    out.push({ lat: c.lat, lon: c.lon, s: Math.min(1, Math.max(0, (c.v - 190) / 40)) });
  }
  return out;
}

async function clouds(url, lastSig) {
  const r = await fetch(url, { cache: "no-store" });
  if (!r.ok) throw new Error(`clouds HTTP ${r.status}`);
  const blob = await r.blob();
  const bytes = new Uint8Array(await blob.arrayBuffer());
  let h = 2166136261;
  for (let i = 0; i < bytes.length; i += 61) h = Math.imul(h ^ bytes[i], 16777619);
  const sig = `${bytes.length}:${h >>> 0}`;
  if (sig === lastSig) return { same: true };
  const bmp = await createImageBitmap(blob);
  const W = bmp.width, H = bmp.height;
  const cv = new OffscreenCanvas(W, H), g = cv.getContext("2d", { willReadFrequently: true });
  g.drawImage(bmp, 0, 0); bmp.close();
  const img = g.getImageData(0, 0, W, H), d = img.data;
  const ir = new Uint8Array(W * H), valid = new Uint8Array(W * H);
  for (let k = 0; k < W * H; k++) { ir[k] = d[k * 4]; valid[k] = ir[k] < 255 ? 1 : 0; }
  const sea = await seaMask(W, H);
  let cells = [];
  try { cells = findStormCells(ir, valid, W, H); } catch (e) { /* none */ }
  const { off, scale, gamma, box, pct } = CLOUD_CURVE;
  const land = groundGrid(ir, valid, sea, 0, W, H, box, pct), water = groundGrid(ir, valid, sea, 1, W, H, box, pct);
  let covered = 0;
  for (let y = 0; y < H; y++) {
    const lat = 90 - ((y + 0.5) * 180) / H;
    const fade = 1 - Math.min(1, Math.max(0, (Math.abs(lat) - 70) / 8));
    for (let x = 0, k = y * W; x < W; x++, k++) {
      let c = 0;
      if (valid[k] && fade > 0) {
        const base = sampleGrid(sea[k] ? water : land, x, y, W, H);
        c = Math.min(1, Math.max(0, (ir[k] - base - off) / scale));
        c = Math.pow(c, gamma) * fade;
      }
      if (c > 0.05) covered++;
      const o = k * 4; d[o] = d[o + 1] = d[o + 2] = Math.round(c * 255); d[o + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  if (covered < W * H * 0.05) throw new Error("clouds: the satellite map came back empty");
  // flipped as loadTex's images are (WebGL ignores flipY for bitmaps)
  const out = await createImageBitmap(cv, { imageOrientation: "flipY" });
  return { bmp: out, cells, sig };
}

self.onmessage = async (e) => {
  const { id, cmd } = e.data;
  try {
    if (cmd === "clouds") {
      const r = await clouds(e.data.url, e.data.lastSig);
      self.postMessage({ id, ok: true, ...r }, r.bmp ? [r.bmp] : []);
    } else if (cmd === "sea") {
      const m = (await seaMask(e.data.W, e.data.H)).map((v) => (v ? 255 : 0));   // a texture-ready copy (the worker keeps its own)
      self.postMessage({ id, ok: true, m }, [m.buffer]);
    }
  } catch (err) {
    self.postMessage({ id, ok: false, error: String(err?.message || err) });
  }
};
