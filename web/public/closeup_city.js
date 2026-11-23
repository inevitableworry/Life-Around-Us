// City close-ups (Options > Settings > Globe > City Close-Up; config.js
// cityCloseUp): at each city the camera drops to a low, oblique view and
// slowly circles it over sharp satellite imagery with 3D relief; see main.js
// "city close-up".
//
// High-resolution Web-Mercator tiles on curved patches that sit on the globe:
// six nested rings (900 km down to 26 km) fade in as the camera descends,
// each feathered at its edges so there are no visible seams. Day and night tiles are blended by the real sun
// position, using the same shading as the globe.
import * as THREE from "./vendor/three.module.min.js";
import { latLonToVec3 } from "./sun.js";

const TILE = 256;
const EARTH_KM = 40075;
// extentKm: approx. width of the patch. showBelow/fullBelow: camera altitude
// (Earth radii) at which the level starts / finishes fading in.
const LEVELS = [
  // Each ring is half the size of the one around it and one zoom sharper (a
  // clipmap), so the picture's detail falls off evenly with distance instead
  // of jumping 4x at a ring's edge (the first prototype's 900/170/42 km).
  // lightDetail: how much of the night lights are drawn from the daytime
  // picture's streets (1) rather than the night map itself (0). Below about
  // 50 m a pixel the streets show; the coarse outer rings (200-900 m a pixel)
  // would light up clouds and snow as glowing blobs, so they use the night map.
  { extentKm: 900, n: 4, showBelow: 0.30,  fullBelow: 0.14,  seg: 96,  lightDetail: 0 },
  { extentKm: 416, n: 8, showBelow: 0.16,  fullBelow: 0.08,  seg: 128, lightDetail: 0 },
  { extentKm: 208, n: 8, showBelow: 0.08,  fullBelow: 0.04,  seg: 128, lightDetail: 0.6 },
  { extentKm: 104, n: 8, showBelow: 0.04,  fullBelow: 0.02,  seg: 160, lightDetail: 1 },
  { extentKm: 52,  n: 8, showBelow: 0.02,  fullBelow: 0.01,  seg: 160, lightDetail: 1 },
  { extentKm: 26,  n: 8, showBelow: 0.012, fullBelow: 0.007, seg: 160, lightDetail: 1 },
];
// Real relief: the patches are raised by the ground's height (Terrain Tiles,
// "terrarium" PNGs: height = R * 256 + G + B / 256 - 32768 m), a little
// exaggerated so hills read from 30 km up. The sea stays at 0.
const RELIEF_EXAGGERATION = 1.6;
const PATCH_R = 1.00003;                     // a hair over the globe's own facets
const EARTH_M = 6371000;
// Each finer level sits this much higher than the one under it, so where both
// are drawn the sharper one always wins (their reliefs, sampled at different
// spacings, differ by up to a few hundred metres on steep ground). Not
// visible from 30 km up.
const LEVEL_LIFT_M = 150;

const lonToX = (lon, z) => ((lon + 180) / 360) * 2 ** z;
const latToY = (lat, z) => {
  const r = (lat * Math.PI) / 180;
  return ((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * 2 ** z;
};
const xToLon = (x, z) => (x / 2 ** z) * 360 - 180;
const yToLat = (y, z) => (Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / 2 ** z))) * 180) / Math.PI;

// Every tile is kept on this PC (the page's Cache Storage, which lives in the
// app's data folder and survives restarts), so a city's imagery is read from
// disk, not the network: prefetchAll() fills it for every city in the
// background from the first start on.
// In the app, the shell keeps the tiles itself (shell/TileStore.cs: the
// setup's tiles.pack with every city, else downloaded once into the app's
// data folder) and serves them at tiles.app.local; the page cache below is
// only for running the page in a plain browser.
const IN_SHELL = !!globalThis.chrome?.webview;
const DISK = "lau-closeup-tiles-v1";
let diskP = null;
const disk = () => (diskP ??= (globalThis.caches ? caches.open(DISK).catch(() => null) : Promise.resolve(null)));
// A close-up asks for a few hundred tiles at once; starting all those
// requests in one go cost the page ~50 ms in a single frame (a hitch as a
// hand zoom dived in). At most 24 are under way at a time, the rest wait.
const tileSlots = { busy: 0, wait: [] };
function tileSlot() {
  if (tileSlots.busy < 24) { tileSlots.busy++; return Promise.resolve(); }
  return new Promise((r) => tileSlots.wait.push(r));
}
function tileSlotDone() {
  const next = tileSlots.wait.shift();
  if (next) next(); else tileSlots.busy--;
}
async function fetchTile(url) {
  await tileSlot();
  try { return await fetchTileNow(url); } finally { tileSlotDone(); }
}
async function fetchTileNow(url) {              // the tile's bytes, from disk or the network (then kept)
  if (IN_SHELL) { const r = await fetch(url); if (!r.ok) throw new Error(`tile ${r.status}`); return r.blob(); }
  const c = await disk();
  const hit = c && await c.match(url).catch(() => null);
  if (hit) return hit.blob();
  const r = await fetch(url, { mode: "cors" });
  if (!r.ok) throw new Error(`tile ${r.status}`);
  if (c) c.put(url, r.clone()).catch(() => {});
  return r.blob();
}
const tileCache = new Map(); // url -> Promise<ImageBitmap|null> (decoded, recently used)
function loadTile(url) {
  if (!tileCache.has(url)) {
    tileCache.set(url, fetchTile(url).then((b) => createImageBitmap(b)).catch(() => { tileCache.delete(url); return null; }));
    if (tileCache.size > 600) {                  // decoded tiles are 256 KB each: keep the memory bounded
      const old = tileCache.keys().next().value;
      tileCache.get(old)?.then((bm) => bm?.close?.()); tileCache.delete(old);
    }
  }
  return tileCache.get(url);
}
const tileUrl = (src, z, x, y) => {
  const m = 2 ** z, xw = ((x % m) + m) % m;
  if (IN_SHELL && src.key) return `https://tiles.app.local/${src.key}/${z}/${xw}/${y}.${src.url.split(".").pop()}`;
  return src.url.replace("{z}", z).replace("{x}", xw).replace("{y}", y);
};

// Paint the area covered by tiles [x0, x0+n) x [y0, y0+n) at zoom z into a
// canvas, using source tiles at zoom zs <= z (upscaled when zs < z).
function paint(draw, px, source, z, x0, y0, n) {
  const zs = Math.min(z, source.maxZoom);
  const s = 2 ** (z - zs);
  const k = px / (n * TILE);           // canvas px per target-tile px
  const sx0 = Math.floor(x0 / s), sx1 = Math.floor((x0 + n - 1) / s);
  const sy0 = Math.floor(y0 / s), sy1 = Math.floor((y0 + n - 1) / s);
  const jobs = [];
  for (let sy = sy0; sy <= sy1; sy++) {
    if (sy < 0 || sy >= 2 ** zs) continue;
    for (let sx = sx0; sx <= sx1; sx++) {
      jobs.push(loadTile(tileUrl(source, zs, sx, sy)).then((img) => {
        if (!img) return;
        draw(img, (sx * s - x0) * TILE * k, (sy * s - y0) * TILE * k, TILE * s * k);
      }));
    }
  }
  return Promise.all(jobs);
}

// (Typed arrays, and the sphere's own normals until the relief arrives: built
// with plain arrays and computeVertexNormals it took ~50 ms for the six rings,
// a hitch each time the tour left a city.)
function patchGeometry(z, x0, y0, n, seg = 48) {
  const nv = (seg + 1) * (seg + 1);
  const pos = new Float32Array(nv * 3), uv = new Float32Array(nv * 2), dir = new Float32Array(nv * 3);
  const idx = new Uint32Array(seg * seg * 6);
  for (let j = 0, k = 0; j <= seg; j++) {
    const lat = yToLat(y0 + (j / seg) * n, z);
    for (let i = 0; i <= seg; i++, k++) {
      const p = latLonToVec3(lat, xToLon(x0 + (i / seg) * n, z), 1);
      dir[k * 3] = p[0]; dir[k * 3 + 1] = p[1]; dir[k * 3 + 2] = p[2];
      pos[k * 3] = p[0] * PATCH_R; pos[k * 3 + 1] = p[1] * PATCH_R; pos[k * 3 + 2] = p[2] * PATCH_R;
      uv[k * 2] = i / seg; uv[k * 2 + 1] = 1 - j / seg;
    }
  }
  for (let j = 0, o = 0; j < seg; j++) {
    for (let i = 0; i < seg; i++) {
      const a = j * (seg + 1) + i, b = a + 1, c = a + seg + 1, d = c + 1;
      idx[o++] = a; idx[o++] = c; idx[o++] = b; idx[o++] = b; idx[o++] = c; idx[o++] = d;
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  g.setAttribute("normal", new THREE.BufferAttribute(dir.slice(), 3));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.userData = { dir, seg };
  return g;
}

// Per vertex of a ring: 1 well inside the next finer ring's opaque middle
// (its edges fade out over their outer 20 %), 0 elsewhere.
function sinkWeights(seg, me, inner) {
  const w = new Float32Array((seg + 1) * (seg + 1));
  if (!inner) return w;
  const k = 2 ** (inner.z - me.z);
  for (let j = 0; j <= seg; j++) {
    for (let i = 0; i <= seg; i++) {
      const uf = ((me.x0 + (i / seg) * me.n) * k - inner.x0) / inner.n;
      const vf = ((me.y0 + (j / seg) * me.n) * k - inner.y0) / inner.n;
      const e = Math.min(uf, 1 - uf, vf, 1 - vf);
      w[j * (seg + 1) + i] = THREE.MathUtils.smoothstep(e, 0.25, 0.29);
    }
  }
  return w;
}

// Raise the patch by the heights painted (unsmoothed) into `canvas`.
function applyRelief(g, canvas, liftM = 0) {
  const { dir, seg } = g.userData;
  const W = canvas.width, H = canvas.height;
  const px = canvas.getContext("2d").getImageData(0, 0, W, H).data;
  const pos = g.attributes.position;
  for (let j = 0; j <= seg; j++) {
    for (let i = 0; i <= seg; i++) {
      const k = j * (seg + 1) + i;
      const x = Math.min(W - 1, Math.round((i / seg) * (W - 1))), y = Math.min(H - 1, Math.round((j / seg) * (H - 1)));
      const o = (y * W + x) * 4;
      // only whole (opaque) pixels are heights; the sea and anything odd stay at 0
      const h = px[o + 3] === 255 ? Math.min(8900, Math.max(0, px[o] * 256 + px[o + 1] + px[o + 2] / 256 - 32768)) : 0;
      const r = PATCH_R + (h * RELIEF_EXAGGERATION + liftM) / EARTH_M;
      pos.setXYZ(k, dir[k * 3] * r, dir[k * 3 + 1] * r, dir[k * 3 + 2] * r);
    }
  }
  pos.needsUpdate = true;
  g.computeVertexNormals();
  g.computeBoundingSphere();
}

// Where the next finer ring lies fully opaque on top, a ring's ground is
// sunk out of the way (sinkK, while that ring is fully shown): in hills and
// mountains a coarse ring's smoother terrain otherwise stood higher than the
// fine ring's valleys and poked through it, its blurry picture (and, at night,
// its orange smear) showing in patches among the sharp parts.
const vertexShader = /* glsl */ `
  attribute float sinkK; uniform float sink;
  varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPos; varying vec3 vRelief;
  void main() {
    vUv = uv;
    vNormal = normalize(position);
    vRelief = normal;
    vec3 p = position - vNormal * (sinkK * sink * ${(6000 / 6371000).toFixed(9)});   // 6 km down
    vec4 wp = modelMatrix * vec4(p, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`;
const fragmentShader = /* glsl */ `
  uniform sampler2D dayMap; uniform sampler2D nightMap;
  uniform vec3 sunDir; uniform float fade; uniform vec4 nightK; uniform vec2 texel; uniform vec4 GRADE; uniform float lightDetail; uniform vec4 dayXf; uniform vec4 nightXf; uniform vec2 glitter; uniform sampler2D seaMap;
  varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPos; varying vec3 vRelief;
  float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
  float vnoise3(vec3 p) {
    vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x), mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x), mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y), f.z);
  }
  void main() {
    vec3 n = normalize(vNormal);
    vec3 rn = normalize(vRelief); rn = dot(rn, n) < 0.0 ? -rn : rn;
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    float d = dot(n, normalize(sunDir));
    vec2 duv = dayXf.xy + vUv * dayXf.zw, nuv = nightXf.xy + vUv * nightXf.zw;
    vec4 day = texture2D(dayMap, duv);
    vec4 night = texture2D(nightMap, nuv);
    float slope = dot(rn, normalize(sunDir)) - d;                    // 0 on flat ground
    vec3 dayCol = day.rgb * (0.28 + 1.0 * smoothstep(-0.05, 0.6, d)) * clamp(1.0 + slope * 1.8, 0.35, 1.7);
    // The sun's colour from its height at this spot (the city's local time):
    // white at midday, golden then deep orange as it nears the horizon, a
    // rosy afterglow just after sunset. d = sine of the sun's elevation.
    float low = 1.0 - smoothstep(0.02, 0.42, d);                       // below ~25 deg
    vec3 sunTint = mix(vec3(1.0), vec3(1.0, 0.70, 0.42), low);
    sunTint = mix(sunTint, vec3(1.0, 0.50, 0.30), (1.0 - smoothstep(-0.02, 0.10, d)) * smoothstep(-0.14, -0.02, d));
    sunTint = mix(sunTint, vec3(0.86, 0.62, 0.78), 1.0 - smoothstep(-0.12, -0.02, d));   // afterglow
    dayCol *= sunTint;
    // Night: the free night imagery (Black Marble) is ~500 m a pixel, far too
    // coarse this low. It only says WHERE the lights are and how bright; the
    // lights themselves are drawn on the 10 m daytime picture's built-up
    // areas (bright, grey: streets, blocks, docks), so they follow the real
    // city. The rest is the daytime picture in faint blue moonlight.
    float dl = dot(day.rgb, vec3(0.299, 0.587, 0.114));
    float sat = max(max(day.r, day.g), day.b) - min(min(day.r, day.g), day.b);
    float bm = dot(night.rgb, vec3(0.3333));
    // Built-up land is busy at 10 m (streets, roofs, yards); fields, woods and
    // water are smooth. The local spread of brightness finds it; the pixels
    // brighter than their neighbours (streets, lit roofs) are the lights.
    vec2 tx = texel;
    float l1 = dot(texture2D(dayMap, duv + vec2(tx.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
    float l2 = dot(texture2D(dayMap, duv - vec2(tx.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
    float l3 = dot(texture2D(dayMap, duv + vec2(0.0, tx.y)).rgb, vec3(0.299, 0.587, 0.114));
    float l4 = dot(texture2D(dayMap, duv - vec2(0.0, tx.y)).rgb, vec3(0.299, 0.587, 0.114));
    float m = 0.25 * (l1 + l2 + l3 + l4);
    float spread = 0.25 * ((l1 - dl) * (l1 - dl) + (l2 - dl) * (l2 - dl) + (l3 - dl) * (l3 - dl) + (l4 - dl) * (l4 - dl));
    // Clouds, snow and glaciers (white, and busy at their edges) are not city:
    // very bright pixels are left out, or they lit up as glowing blobs.
    float built = smoothstep(0.0006, 0.006, spread) * (1.0 - smoothstep(0.10, 0.24, sat)) * smoothstep(0.08, 0.2, dl)
                * (1.0 - smoothstep(0.42, 0.70, dl));
    float spark = smoothstep(0.02, 0.12, dl - m);
    float gate = smoothstep(0.10, 0.60, bm);
    float lit = gate * built * (0.30 + 1.2 * spark);
    float hot = gate * smoothstep(0.25, 0.8, bm) * built * spark * spark;
    vec3 lights = vec3(1.0, 0.36, 0.07) * pow(lit, 1.2) * nightK.x + vec3(1.0, 0.78, 0.45) * hot * nightK.y
                + vec3(1.0, 0.36, 0.08) * gate * gate * 0.02 * (0.15 + 0.85 * smoothstep(0.0, 0.6, built));   // a faint haze on the built-up parts only (the night map is 600 m a pixel: soft)
    vec3 nightCol = day.rgb * vec3(0.035, 0.050, 0.085) * nightK.z + lights * lightDetail
                  + pow(night.rgb, vec3(2.0)) * vec3(1.0, 0.72, 0.45) * nightK.w;   // a faint glow over the lit area
    // High up the street-level lights are too fine to show: there the night map's
    // own glow (in the globe's orange) carries the lights, so the globe's
    // lights flow straight into the close-up's as the camera comes down. The
    // coarse outer rings use it at any height.
    float camAltKm = max(length(cameraPosition) - 1.0, 1e-5) * 6371.0;
    float mapLights = max((1.0 - lightDetail) * 0.55, smoothstep(log(150.0), log(1200.0), log(camAltKm)));
    nightCol += pow(night.rgb, vec3(1.6)) * vec3(1.0, 0.62, 0.29) * 1.1 * mapLights;
    // Dusk: the lights come on area by area (each neighbourhood at its own sun
    // height, from 3 deg above the horizon to 7 deg below; irregular patches
    // from smooth noise, ~2 km and ~400 m) and show over the last of the
    // daylight instead of only fading in with the dark.
    vec3 wp = vWorldPos * 6371.0;                                       // km
    float bh = clamp((0.62 * vnoise3(wp / 2.2) + 0.38 * vnoise3(wp / 0.4 + 17.0) - 0.5) * 1.6 + 0.5, 0.0, 1.0);
    float th = mix(0.05, -0.12, bh);
    float on = 1.0 - smoothstep(th - 0.012, th + 0.012, d);
    nightCol = day.rgb * vec3(0.035, 0.050, 0.085) * nightK.z + (nightCol - day.rgb * vec3(0.035, 0.050, 0.085) * nightK.z) * on;
    float dayMix = smoothstep(-0.16, 0.14, d);
    vec3 col = mix(nightCol, dayCol, dayMix);
    col += lights * lightDetail * on * dayMix * 0.55 * (1.0 - smoothstep(0.02, 0.14, d));   // switched-on lights in the twilight
    float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
    col += vec3(0.38, 0.62, 1.0) * fres * (0.04 + 0.68 * smoothstep(-0.25, 0.5, d));
    // Sun glitter on water (dark, bluish, smooth in the daytime picture): each
    // few tens of metres of the surface tilted a little by moving noise, so the
    // waves sparkle along the sun's reflection.
    if (glitter.y > 0.0 && d > 0.0) {
      float water = (1.0 - smoothstep(0.03, 0.08, dl)) * smoothstep(-0.01, 0.03, day.b - day.r) * (1.0 - smoothstep(0.0004, 0.003, spread));
      // ... and only out on the sea (the land/sea map), never on dark bluish land
      vec3 gp = normalize(vWorldPos);
      vec2 seaUv = vec2(atan(-gp.z, gp.x) / 6.2831853 + 0.5, 0.5 - asin(clamp(gp.y, -1.0, 1.0)) / 3.1415927);
      water *= smoothstep(0.4, 0.8, texture2D(seaMap, seaUv).r);
      vec3 H = normalize(normalize(sunDir) + viewDir);
      float path = max(dot(n, H), 0.0);
      if (water > 0.01 && path > 0.9) {
        vec3 q = wp * 30.0;                                             // ~33 m cells
        vec3 tilt = vec3(vnoise3(q + vec3(0.0, 0.0, glitter.x * 1.3)), vnoise3(q.yzx + vec3(5.2, 1.3, glitter.x * 1.1)),
                         vnoise3(q.zxy + vec3(2.7, 8.1, glitter.x * 1.5))) - 0.5;
        float facet = max(dot(normalize(n + 0.12 * tilt), H), 0.0);
        float sparkle = pow(facet, 1400.0) * 6.0 + pow(path, 220.0) * 0.25;
        col += sunTint * vec3(1.0, 0.96, 0.88) * sparkle * water * dayMix * glitter.y;
      }
    }
    float a = mix(night.a, day.a, dayMix);
    float e = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
    a *= smoothstep(0.0, 0.2, e) * fade;
    gl_FragColor = vec4(col, a);
    vec3 untoned = gl_FragColor.rgb;
    #include <tonemapping_fragment>
    gl_FragColor.rgb = mix(untoned, gl_FragColor.rgb, dayMix);
    #include <colorspace_fragment>
    // From the globe into the close-up without a jump: high up, the daytime
    // picture is graded to the globe's own look there (its dim, earthy colours
    // and dark seas: 35 % saturation, gains 0.59 / 0.51 / 0.31 -- fitted to
    // the globe at Tokyo, Hong Kong, Sydney and Bangkok, rms 12/255), and it
    // eases into its own colours evenly over the descent (GRADE.w: how far
    // through it, in time -- by height it would rush through the middle).
    float gradeK = GRADE.x * (1.0 - smoothstep(0.25, 1.0, GRADE.w)) * dayMix;
    vec3 gc = gl_FragColor.rgb;
    float gl = dot(gc, vec3(0.299, 0.587, 0.114));
    vec3 globeLook = (vec3(gl) + 0.35 * (gc - gl)) * vec3(0.587, 0.513, 0.306) + vec3(2.1, 4.8, 6.8) / 255.0;
    gl_FragColor.rgb = mix(gc, globeLook, gradeK);
  }`;

// The globe-matching grade: x strength, w how far through the descent (main.js).
export const CU_GRADE = { value: new THREE.Vector4(1, 0, 0, 0) };
// Sun glitter on water: x seconds, y strength (main.js sets it each frame).
export const CU_GLITTER = { value: new THREE.Vector2(0, 1) };
// Land/sea for the glitter: the globe's own specular map (white = sea) as a
// 4096 x 2048 texture, north row first (main.js fills it in at start-up;
// until then all white, so the colour test alone decides).
export const CU_SEA = { value: (() => { const t = new THREE.DataTexture(new Uint8Array([255]), 1, 1, THREE.RedFormat); t.needsUpdate = true; return t; })() };

// Night lights: x warm light, y white-hot cores, z moonlight, w soft glow.
export const NIGHT_K = { value: new THREE.Vector4(3.6, 2.2, 0.22, 0.0) };

// The relief needs about 200 heights across a patch (its mesh), so its tiles
// come three zooms coarser than the picture's (1/64 of the downloads).
const terrainSource = (src, z) => ({ ...src, maxZoom: Math.min(src.maxZoom, Math.max(1, z - 3)) });

// The tile URLs a city's close-up uses (the same sums as prepare()).
// three.js deletes a shader program once no material uses it, so every time
// one close-up replaced another (and the old one went first) the close-up
// program was compiled and linked all over again: a 50 ms freeze as a hand
// zoom dived in. This one never-disposed material keeps it alive, compiled at
// start-up.
let keeper = null;
export function keepCloseUpProgram(renderer, camera) {
  if (keeper) return;
  const px = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1); px.needsUpdate = true;
  keeper = new THREE.ShaderMaterial({
    uniforms: { dayMap: { value: px }, nightMap: { value: px }, dayXf: { value: new THREE.Vector4(0, 0, 1, 1) }, nightXf: { value: new THREE.Vector4(0, 0, 1, 1) },
      sunDir: { value: new THREE.Vector3(1, 0, 0) }, fade: { value: 0 }, nightK: NIGHT_K, GRADE: CU_GRADE, glitter: CU_GLITTER, seaMap: CU_SEA,
      lightDetail: { value: 1 }, sink: { value: 0 }, texel: { value: new THREE.Vector2(1, 1) } },
    vertexShader, fragmentShader,
    transparent: true, depthWrite: true, depthTest: true, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -4,
  });
  const geo = patchGeometry(10, 500, 380, 1, 2);
  geo.setAttribute("sinkK", new THREE.Float32BufferAttribute(new Float32Array(geo.attributes.position.count), 1));
  const sc = new THREE.Scene();
  sc.add(new THREE.Mesh(geo, keeper));
  renderer.compile(sc, camera);
}

export function cityTileUrls(city, cfg) {
  const urls = [];
  const cosLat = Math.max(0.2, Math.cos((city.lat * Math.PI) / 180));
  for (const L of LEVELS) {
    const z = Math.min(cfg.day.maxZoom, Math.round(Math.log2((EARTH_KM * cosLat * L.n) / L.extentKm)));
    const x0 = Math.round(lonToX(city.lon, z) - L.n / 2), y0 = Math.round(latToY(city.lat, z) - L.n / 2);
    for (const src of [cfg.day, cfg.night, cfg.terrain && terrainSource(cfg.terrain, z)]) {
      if (!src) continue;
      const zs = Math.min(z, src.maxZoom), s = 2 ** (z - zs);
      for (let sy = Math.floor(y0 / s); sy <= Math.floor((y0 + L.n - 1) / s); sy++) {
        if (sy < 0 || sy >= 2 ** zs) continue;
        for (let sx = Math.floor(x0 / s); sx <= Math.floor((x0 + L.n - 1) / s); sx++) urls.push(tileUrl(src, zs, sx, sy));
      }
    }
  }
  return urls;
}

// Fill the disk cache with every city's tiles, city by city in tour order,
// a few downloads at a time (gentle on the free tile services). Only what is
// missing is fetched, so after the first run it finishes in seconds.
// progress(done, total) after each city.
export async function prefetchAll(cities, cfg, progress = () => {}, parallel = 8) {
  if (IN_SHELL) {
    // The setup brought every city's tiles: nothing to fetch.
    const st = await fetch("https://tiles.app.local/status").then((r) => r.json()).catch(() => null);
    if (st?.pack > 0) { progress(cities.length, cities.length); return; }
  }
  const c = IN_SHELL ? { match: async () => null, put: async () => {} } : await disk();   // in the app the shell keeps what it fetches
  if (!c) return;
  navigator.storage?.persist?.().catch(() => {});   // ask the browser not to clear it when space runs low
  let done = 0;
  for (const city of cities) {
    const urls = [...new Set(cityTileUrls(city, cfg))];
    let i = 0;
    const worker = async () => {
      while (i < urls.length) {
        const u = urls[i++];
        try { if (!(await c.match(u))) { const r = await fetch(u, { mode: "cors" }); if (r.ok) await c.put(u, r); } } catch { /* next time */ }
      }
    };
    await Promise.all(Array.from({ length: parallel }, worker));
    progress(++done, cities.length);
  }
}

export class CityCloseUp {
  constructor(scene, sunDirUniform, cfg, maxAniso = 8, renderer = null) {
    this.scene = scene;
    this.renderer = renderer;
    this.queue = [];
    this.sun = sunDirUniform;
    this.cfg = cfg;
    this.maxAniso = maxAniso;
    this.group = null;
    this.city = null;
  }

  // Build patches for a city (starts tile downloads immediately).
  prepare(city) {
    if (this.city === city) return;
    this.dispose();
    this.city = city;
    this.group = new THREE.Group();
    const dayJobs = [];
    this.isReady = false;
    const cosLat = Math.max(0.2, Math.cos((city.lat * Math.PI) / 180));
    const places = LEVELS.map((L) => {
      const z = Math.min(this.cfg.day.maxZoom, Math.round(Math.log2((EARTH_KM * cosLat * L.n) / L.extentKm)));
      return { z, x0: Math.round(lonToX(city.lon, z) - L.n / 2), y0: Math.round(latToY(city.lat, z) - L.n / 2), n: L.n };
    });
    this.levels = LEVELS.map((L, i) => {
      const { z, x0, y0 } = places[i];
      // Each picture lives only on the GPU and is filled tile by tile, each
      // tile decoded straight from its file and copied in 1:1 (update() does a
      // few each frame). Painting tiles into 2048 x 2048 canvases and uploading
      // those took 70-90 ms a time (a stutter each time a ring came on during
      // the dive), and drawing into small canvases first stalled the GPU.
      const day = this.tileTexture(this.cfg.day, z, x0, y0, L.n);
      const night = this.tileTexture(this.cfg.night, z, x0, y0, L.n);
      dayJobs.push(day.job);
      const mat = new THREE.ShaderMaterial({
        uniforms: { dayMap: { value: day.t }, nightMap: { value: night.t }, dayXf: { value: day.xf }, nightXf: { value: night.xf }, sunDir: this.sun, fade: { value: 0 }, nightK: NIGHT_K, GRADE: CU_GRADE, glitter: CU_GLITTER, seaMap: CU_SEA, lightDetail: { value: L.lightDetail ?? 1 }, sink: { value: 0 }, texel: { value: new THREE.Vector2(1 / day.w, 1 / day.h) } },
        vertexShader, fragmentShader,
        transparent: true, depthWrite: true, depthTest: true,
        polygonOffset: true, polygonOffsetFactor: -1 - i, polygonOffsetUnits: -4 * (i + 1),
      });
      const geo = patchGeometry(z, x0, y0, L.n, L.seg);
      geo.setAttribute("sinkK", new THREE.Float32BufferAttribute(sinkWeights(L.seg, { z, x0, y0, n: L.n }, places[i + 1]), 1));
      const mesh = new THREE.Mesh(geo, mat);
      // The relief: height tiles for the same area, drawn without smoothing
      // (each pixel's colour is a code) and applied once they have all arrived.
      if (this.cfg.terrain) {
        // One canvas pixel per height-tile pixel, so every tile lands on whole
        // pixels: a tile edge blended into its neighbour decodes to nonsense
        // heights (a wall standing up out of the sea).
        const tsrc = terrainSource(this.cfg.terrain, z);
        const hs = 2 ** (z - Math.min(z, tsrc.maxZoom));
        const hpx = Math.min(2048, (L.n * TILE) / hs);
        const hc = document.createElement("canvas"); hc.width = hc.height = hpx;
        const hctx = hc.getContext("2d", { willReadFrequently: true }); hctx.imageSmoothingEnabled = false;
        const city0 = this.city;
        paint((img, x, y, sz) => hctx.drawImage(img, x, y, sz, sz), hpx, tsrc, z, x0, y0, L.n).then(() => { if (this.city === city0 && mesh.geometry === geo) applyRelief(geo, hc, LEVEL_LIFT_M * i); });
      }
      mesh.renderOrder = 1 + i;
      mesh.visible = false;
      this.group.add(mesh);
      return { ...L, mesh, mat, tex: [day.t, night.t] };
    });
    this.scene.add(this.group);
    const me = this.group;
    Promise.all(dayJobs).then(() => { if (this.group === me) this.isReady = true; });
  }

  // All of this spot's daytime imagery has arrived and been uploaded.
  settled() {
    return !!this.levels && this.isReady && !this.queue.length && !this.dirty?.size;
  }

  // A texture holding the source's tiles that cover tiles [x0, x0+n) x
  // [y0, y0+n) at zoom z, at the source's own zoom (zs <= z), one texel per
  // tile pixel. xf maps the patch's uv into it (offset xy, scale zw).
  tileTexture(src, z, x0, y0, n) {
    const zs = Math.min(z, src.maxZoom), s = 2 ** (z - zs);
    const sx0 = Math.floor(x0 / s), sx1 = Math.floor((x0 + n - 1) / s);
    const sy0 = Math.floor(y0 / s), sy1 = Math.floor((y0 + n - 1) / s);
    const cols = sx1 - sx0 + 1, rows = sy1 - sy0 + 1, w = cols * TILE, h = rows * TILE;
    const t = new THREE.DataTexture(null, w, h, THREE.RGBAFormat, THREE.UnsignedByteType);
    t.source.dataReady = false;                  // storage only: the tiles fill it
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = this.maxAniso;
    t.generateMipmaps = true;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.needsUpdate = true;
    const B = n / s / rows;
    const xf = new THREE.Vector4((x0 / s - sx0) / cols, 1 - (y0 / s - sy0) / rows - B, n / s / cols, B);
    const group = this.group, jobs = [];
    for (let sy = sy0; sy <= sy1; sy++) {
      if (sy < 0 || sy >= 2 ** zs) continue;
      for (let sx = sx0; sx <= sx1; sx++) {
        jobs.push(fetchTile(tileUrl(src, zs, sx, sy))
          .then((b) => createImageBitmap(b, { imageOrientation: "flipY", premultiplyAlpha: "none", colorSpaceConversion: "none" }))
          .then((bmp) => {
            if (this.group !== group) { bmp.close(); return; }
            // GL rows run bottom up: the tile's row from the top is flipped.
            this.queue.push({ t, bmp, x: (sx - sx0) * TILE, y: (rows - 1 - (sy - sy0)) * TILE });
          })
          .catch(() => {}));
      }
    }
    return { t, xf, w, h, job: Promise.all(jobs) };
  }

  // altitude in Earth radii; master in [0,1] fades everything (e.g. during travel).
  update(altitude, master) {
    if (!this.levels) return 0;
    // Copy queued tiles into their textures, at most 6 tiles or about 1.5 ms of work a frame at
    // most, then rebuild the mipmaps of each texture touched (on the GPU).
    // Plain GL calls: three's copyTextureToTexture reads five GL parameters
    // per copy, each a round trip to the GPU process (300 ms over a city's tiles).
    if (this.queue.length && this.renderer) {
      const r = this.renderer, gl = r.getContext(), t0 = performance.now();
      let n = 0;
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
      gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
      const touched = this.dirty ??= new Map();       // texture -> when its mipmaps were last rebuilt
      while (this.queue.length && n < 6 && (n < 2 || performance.now() - t0 < 1.5)) {
        const q = this.queue.shift(); n++;
        if (!q.t.userData.ready) { r.initTexture(q.t); q.t.userData.ready = true; }   // storage only
        r.state.bindTexture(gl.TEXTURE_2D, r.properties.get(q.t).__webglTexture);
        gl.texSubImage2D(gl.TEXTURE_2D, 0, q.x, q.y, TILE, TILE, gl.RGBA, gl.UNSIGNED_BYTE, q.bmp);
        q.bmp.close();
        if (!touched.has(q.t)) touched.set(q.t, performance.now());
      }
      r.state.unbindTexture();
    }
    // Rebuilding a big texture's mipmaps is real GPU work (a 4096 px texture is
    // 22 MB of filtering): at most one texture a frame, once all its tiles are
    // in -- or every 0.3 s while a visible one is still filling -- instead of
    // every texture every frame (the hitches when diving into a city).
    if (this.dirty?.size && this.renderer) {
      const r = this.renderer, gl = r.getContext(), now = performance.now();
      for (const [t, since] of this.dirty) {
        const waiting = this.queue.some((q) => q.t === t);
        if (waiting && (!this.shown || now - since < 300)) continue;
        r.state.bindTexture(gl.TEXTURE_2D, r.properties.get(t).__webglTexture);
        gl.generateMipmap(gl.TEXTURE_2D);
        r.state.unbindTexture();
        if (waiting) this.dirty.set(t, now); else this.dirty.delete(t);
        break;
      }
    }
    let top = 0;
    for (const L of this.levels) {
      const f = THREE.MathUtils.smoothstep(L.showBelow - altitude, 0, L.showBelow - L.fullBelow) * master;
      L.mat.uniforms.fade.value = f;
      L.mesh.visible = f > 0.002;
      if (L.mesh.visible) top = f;
      this.shown = this.shown || L.mesh.visible;
    }
    this.levels.forEach((L, i) => {
      const next = this.levels[i + 1];
      L.mat.uniforms.sink.value = next ? THREE.MathUtils.smoothstep(next.mat.uniforms.fade.value, 0.97, 1.0) : 0;
    });
    return top;
  }

  dispose() {
    for (const q of this.queue) q.bmp.close();
    this.queue = [];
    this.dirty?.clear(); this.shown = false;
    if (!this.group) return;
    this.scene.remove(this.group);
    for (const L of this.levels) {
      L.mesh.geometry.dispose();
      L.mat.dispose();
      L.tex.forEach((t) => t.dispose());
    }
    this.group = null;
    this.levels = null;
    this.city = null;
  }
}
