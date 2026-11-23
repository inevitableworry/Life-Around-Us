// Live data for the globe: earthquakes, the ISS, today's clouds, city photos,
// live city webcams and headlines. Everything degrades quietly when offline.
//
// Sources
//   Earthquakes  USGS GeoJSON feed (public domain), M6.0+ in the last 24 h
//   Storms       GDACS tropical cyclones, 209 km/h+ in the last 18 h
//   ISS          wheretheiss.at (position + ground track)
//   Clouds       EUMETSAT global IR composite (every 3 h); matteason as fallback
//   Photos       Wikipedia / Wikimedia Commons (credit + licence shown)
//   Webcams      app/data/city_cams.txt (each camera's own terms apply)
//   Headlines    Google News RSS, through the shell (no CORS), calm-mode filtered

// ---------------------------------------------------------------- shell fetch
// The Windows shell fetches allow-listed hosts for us (see Program.cs).
const pending = new Map();
let seq = 0;
const host = () => window.chrome?.webview;
host()?.addEventListener("message", (e) => {
  const m = e.data;
  if (m?.cmd !== "fetchResult" && m?.cmd !== "icyResult") return;
  const p = pending.get(m.id);
  if (!p) return;
  pending.delete(m.id);
  m.ok ? p.resolve(m) : p.reject(new Error(m.error || `HTTP ${m.status}`));
});
export function shellFetch(url, opts = {}) {
  if (!host()) return Promise.reject(new Error("no shell"));
  const id = `f${++seq}`;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    host().postMessage({ cmd: "fetch", id, url, ...opts });
    setTimeout(() => { if (pending.delete(id)) reject(new Error("timeout")); }, 30000);
  });
}

// Erupting volcanoes, VEI 3 and up (owner's call): the volcanoes NASA EONET
// lists as erupting now (open volcano events, cross-site allowed), each
// matched to its latest eruption in the Smithsonian Global Volcanism
// Program's database for its size (the Volcanic Explosivity Index; fetched
// by the shell, no cross-site access there). Matched by name, else by
// position (within ~15 km). [{ id, name, lat, lon, vei }]
const VOLCANO_FEED = "https://eonet.gsfc.nasa.gov/api/v3/events?category=volcanoes&status=open&limit=100";
const GVP_ERUPTIONS = "https://webservices.volcano.si.edu/geoserver/GVP-VOTW/ows?service=WFS&version=2.0.0&request=GetFeature"
  + "&typeName=GVP-VOTW:Smithsonian_VOTW_Holocene_Eruptions&outputFormat=application/json&count=5000"
  + "&propertyName=Volcano_Name,ExplosivityIndexMax,StartDateYear,StartDateMonth,GeoLocation&CQL_FILTER=StartDateYear%20%3E%3D%201990";
const volcanoWords = (s) => (s || "").normalize("NFD").replace(/\p{M}/gu, "").toLowerCase()
  .replace(/volcano.*$/, "").split(/[^a-z]+/).filter((w) => w.length >= 4 && !["group", "volcanic", "field", "island", "mount"].includes(w));
export async function fetchVolcanoes({ minVei = 3 } = {}) {
  const data = await getJSON(VOLCANO_FEED);
  const gvp = JSON.parse((await shellFetch(GVP_ERUPTIONS)).text || "{}").features || [];
  const eruptions = gvp.map((f) => ({ words: volcanoWords(f.properties.Volcano_Name), lon: f.geometry?.coordinates?.[0], lat: f.geometry?.coordinates?.[1],
    when: (f.properties.StartDateYear || 0) * 100 + (f.properties.StartDateMonth || 0), vei: f.properties.ExplosivityIndexMax }));
  const out = [];
  for (const e of data.events || []) {
    const g = (e.geometry || []).filter((x) => x.type === "Point").pop();
    if (!g || !Array.isArray(g.coordinates)) continue;
    const [lon, lat] = g.coordinates;
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
    const words = volcanoWords(e.title);
    let best = null;
    for (const r of eruptions) {
      const d = Math.hypot(r.lat - lat, (r.lon - lon) * Math.cos((lat * Math.PI) / 180));
      const named = r.words.some((w) => words.includes(w)) && d < 1.0;
      if (!(named || d < 0.13)) continue;
      const score = (named ? 1e7 : 0) + r.when;
      if (!best || score > best.score) best = { ...r, score };
    }
    const vei = best?.vei;
    if (Number.isFinite(vei) && vei >= minVei) out.push({ id: e.id, name: e.title, lat, lon, vei });
  }
  return out;
}

// Live radio: the most popular stations around a place, from the open Radio
// Browser directory (radio-browser.info, cross-site allowed): stations
// within 60 km (150 km if that finds few), ranked by listeners' votes and
// recent plays, keeping only streams the app can play (https, MP3 / AAC /
// Ogg, not HLS playlists), one per station name. [{ name, tags, url, logo }]
// Talk rather than music: news, talk, sports, public/community speech,
// religious talk, multilingual programming.
const TALK = /\b(news|talk|sports?|public radio|information|politics|spoken|multicultural|multilingual|religio\w*|sermon|christian talk|comedy|podcast)\b/i;
const RADIO_SERVERS = ["de1", "de2", "fi1", "nl1", "at1"].map((s) => `https://${s}.api.radio-browser.info`);
const cleanStation = (n) => {
  const q = /"([^"]{3,})"?/.exec(n);                        // CKNG-FM "The Chuck 92.5" Edmonton, AB -> The Chuck 92.5 (a missing closing quote too)
  return (q ? q[1] : n).replace(/\s*[-–|,]\s*(live|online|stream|radio online)\s*$/i, "").replace(/\s+/g, " ").trim();
};
export async function fetchRadioStations({ lat, lon, max = 12 } = {}) {
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) throw new Error("no location");
  let last = null;
  for (const base of RADIO_SERVERS) {
    try {
      const pick = async (km) => {
        const r = await fetch(`${base}/json/stations/search?geo_lat=${lat.toFixed(4)}&geo_long=${lon.toFixed(4)}&geo_distance=${km * 1000}`
          + "&hidebroken=true&order=votes&reverse=true&limit=150", { cache: "no-store" });
        if (!r.ok) throw new Error(`radio HTTP ${r.status}`);
        return r.json();
      };
      let list = await pick(60);
      const playable = (s) => /^https:/i.test(s.url_resolved || "") && !s.hls && !/\.m3u8(\?|$)/i.test(s.url_resolved)
        && /^(MP3|AAC|AAC\+|OGG)$/i.test(s.codec || "") && s.lastcheckok !== 0;
      // Music stations, and one talk station (owner's call): when the area
      // has few music stations, look further out for more.
      const isTalk = (st) => TALK.test(`${st.tags || ""} ${st.name || ""}`);
      if (list.filter((st) => playable(st) && !isTalk(st)).length < 6) {
        const wider = await pick(150), seen = new Set(list.map((st) => st.stationuuid));
        list = list.concat(wider.filter((st) => !seen.has(st.stationuuid)));
      }
      const byName = new Map();
      for (const s of list.filter(playable)) {
        const name = cleanStation(s.name || "");
        if (!name) continue;
        const score = (s.votes || 0) + (s.clickcount || 0) * 10 + (/MP3/i.test(s.codec) ? 0.5 : 0) + (s.bitrate || 0) / 1000;
        const prev = byName.get(name.toLowerCase());
        if (!prev || score > prev.score) byName.set(name.toLowerCase(), {
          name, score, url: s.url_resolved, talk: isTalk(s),
          tags: (s.tags || "").split(",").map((t) => t.trim()).filter((t) => t && t.length < 24 && !/^(fm|am|radio|corus|rogers)/i.test(t)),
          logo: /^https?:\/\//i.test(s.favicon || "") ? s.favicon.replace(/^http:/i, "https:") : "",
        });
      }
      // the same station listed twice under slightly different names ("Sunny 94"
      // and "CJUV-FM 94.1 Sunny 94"): keep the more popular one
      const key = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      const ranked = [];
      for (const st of [...byName.values()].sort((a, b) => b.score - a.score)) {
        const k = key(st.name);
        if (!ranked.some((o) => key(o.name).includes(k) || k.includes(key(o.name)))) ranked.push(st);
      }
      const music = ranked.filter((st) => !st.talk), talk = ranked.find((st) => st.talk);
      // the talk station sits among the music by its popularity
      return (talk ? [...music.slice(0, max - 1), talk].sort((a, b) => b.score - a.score) : music.slice(0, max));
    } catch (e) { last = e; }
  }
  throw last || new Error("radio directory unavailable");
}

// What a radio stream is playing now ("Artist - Title"), read by the shell
// from the stream's in-band ICY metadata; "" when it does not say.
export function icyTitle(url) {
  if (!host()) return Promise.reject(new Error("no shell"));
  const id = `i${++seq}`;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve: (m) => resolve(m.title || ""), reject });
    host().postMessage({ cmd: "icy", id, url });
    setTimeout(() => { if (pending.delete(id)) reject(new Error("timeout")); }, 12000);
  });
}

async function getJSON(url) {
  const r = await fetch(url, { cache: "no-store" });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

// ---------------------------------------------------------------- earthquakes
const QUAKE_FEED = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson";
export async function fetchQuakes({ minMag = 6.0, hours = 24 } = {}) {
  const data = await getJSON(QUAKE_FEED);
  const now = Date.now();
  return (data.features || [])
    .map((f) => {
      const p = f.properties || {}, g = f.geometry?.coordinates || [];
      return { id: f.id, kind: "quake", mag: p.mag, place: p.place || "Unknown location",
        time: p.time, lon: g[0], lat: g[1], depth: g[2] };
    })
    .filter((q) => q.mag >= minMag && now - q.time <= hours * 3600e3 && Number.isFinite(q.lat))
    .sort((a, b) => b.mag - a.mag)
    .slice(0, 10);
}

// ---------------------------------------------------------------- storms
// Strong tropical storms from GDACS (same rules as the PS3 port's
// update_city_info.py: last 18 h, winds 209 km/h and up, strongest 8).
const STORM_FEED = "https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtype=TC";
function stormKind(kmh, lat, lon) {
  if (kmh < 119) return "Tropical Storm";
  if (lon >= 100 && lat >= 0) return "Typhoon";
  if (lat < 0 || (lon >= 40 && lon < 100)) return "Cyclone";
  return "Hurricane";
}
async function getJSONAny(url) {
  try { return await getJSON(url); }
  catch (e) {                                   // no CORS: ask the shell
    const r = await shellFetch(url);
    return JSON.parse(r.text || "{}");
  }
}
export async function fetchStorms({ minKmh = 209, hours = 18 } = {}) {
  const data = await getJSONAny(STORM_FEED);
  const now = Date.now();
  const titleCase = (t) => t.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
  return (data.features || [])
    .filter((f) => f.properties?.Class === "Point_Centroid" && f.geometry?.type === "Point")
    .map((f) => {
      const p = f.properties, [lon, lat] = f.geometry.coordinates;
      const kmh = Number(p.severitydata?.severity) || 0;
      const time = Date.parse(/Z|[+-]\d\d:?\d\d$/.test(p.todate || "") ? p.todate : `${p.todate}Z`);
      const name = titleCase(String(p.eventname || p.name || "Storm").replace(/-\d+$/, "").replace(/-/g, " ").trim());
      const cat = 1 + [154, 178, 209, 252].filter((v) => kmh >= v).length;
      return { id: `tc${p.eventid}`, name, kind: stormKind(kmh, lat, lon), cat, kmh, lat, lon, time,
        near: p.country || "" };
    })
    .filter((t) => t.kmh >= minKmh && Number.isFinite(t.lat) && Number.isFinite(t.time) && now - t.time <= hours * 3600e3)
    .sort((a, b) => b.kmh - a.kmh)
    .slice(0, 8);
}

// ---------------------------------------------------------------- ISS
const ISS_API = "https://api.wheretheiss.at/v1/satellites/25544";
export async function fetchIssNow() {
  const d = await getJSON(ISS_API);
  return { lat: d.latitude, lon: d.longitude, altKm: d.altitude, speedKmh: d.velocity, visibility: d.visibility };
}
// The ISS's path for the next few hours (refresh + 1 h), a point every
// 120 s, as the old project's update_city_info.py iss_track(): the API takes
// up to 10 times a call and allows about one call a second.
export async function fetchIssTrack(hours = 4) {
  const now = Math.floor(Date.now() / 1000), ts = [];
  for (let t = now; t <= now + hours * 3600; t += 120) ts.push(t);
  const pts = [];
  for (let i = 0; i < ts.length; i += 10) {
    const d = await getJSON(`${ISS_API}/positions?timestamps=${ts.slice(i, i + 10).join(",")}&units=kilometers`);
    for (const p of d) pts.push([p.timestamp * 1000, p.latitude, p.longitude, p.altitude]);
    await new Promise((r) => setTimeout(r, 1200));
  }
  return pts.sort((a, b) => a[0] - b[0]);
}
export const ISS_PHOTO = "International_Space_Station_after_undocking_of_STS-132.jpg";   // NASA, public domain

// ---------------------------------------------------------------- clouds
// The cloud cover itself: EUMETSAT's Geostationary Ring IR10.8 composite
// (Meteosat, GOES, Himawari together, the whole globe every 3 hours; open
// EUMETView WMS, cross-site allowed), turned into a cloud map by
// cloudMapFromIR below. The earlier source, matteason/live-cloud-maps,
// stopped updating in May 2026 (its cron disabled) and drew cool deserts
// such as Arabia as cloud: it stays only as a fallback.
export const EUMETSAT_IR_URL = "https://view.eumetsat.int/geoserver/ows?service=WMS&request=GetMap&version=1.3.0"
  + "&layers=mumi:worldcloudmap_ir108&styles=&crs=EPSG:4326&bbox=-90,-180,90,180&width=2048&height=1024&format=image/png";
export const LIVE_CLOUDS_URL = "https://clouds.matteason.co.uk/images/2048x1024/clouds.jpg";

// The cloud map is made in a worker (cloud_work.js: turning the infrared
// picture into cloud cover, finding the thunderstorms), so the globe never
// stalls while it runs. The land/sea map for the close-ups' glitter comes
// from there too.
let worker = null, workSeq = 0;
const workWaits = new Map();
function work(msg) {
  if (!worker) {
    worker = new Worker(new URL("./cloud_work.js", import.meta.url), { type: "module" });
    worker.onmessage = (e) => {
      const w = workWaits.get(e.data.id);
      if (!w) return;
      workWaits.delete(e.data.id);
      e.data.ok ? w.resolve(e.data) : w.reject(new Error(e.data.error));
    };
    worker.onerror = (e) => { for (const w of workWaits.values()) w.reject(new Error(e.message || "cloud worker failed")); workWaits.clear(); };
  }
  const id = ++workSeq;
  return new Promise((resolve, reject) => { workWaits.set(id, { resolve, reject }); worker.postMessage({ id, ...msg }); });
}
export async function seaMask(W, H) { return (await work({ cmd: "sea", W, H })).m; }   // 255 = sea, 0 = land
// Thunderstorms: the coldest cloud tops on the latest satellite map ({lat,
// lon, s 0..1}), where the lightning flashes (effects.js).
export let stormCells = [];
let lastIRSig = "";
// The cloud map as an ImageBitmap; null when the satellite picture hasn't
// changed since last time (it is new every 3 hours; checked hourly).
export async function cloudMapFromIR(url) {
  const r = await work({ cmd: "clouds", url, lastSig: lastIRSig });
  if (r.same) return null;
  stormCells = r.cells || [];
  lastIRSig = r.sig;
  return r.bmp;
}

// ---------------------------------------------------------------- photos
// Wikipedia article titles and chosen photos (from the owner's city list).
const WIKI = {"San Jose": "San José, Costa Rica", "Santiago": "Santiago", "Lima": "Lima",
  "Washington": "Washington, D.C.", "New York": "New York City", "Hong Kong": "Hong Kong",
  "Vancouver": "Vancouver", "Ottawa": "Ottawa", "Bogota": "Bogotá", "Rome": "Rome",
  "Lagos": "Lagos", "Gaza": "Gaza City", "Medina": "Medina", "Mecca": "Mecca",
  "Kyiv": "Kyiv", "Wellington": "Wellington", "Manila": "Manila",
  "Regina": "Regina, Saskatchewan", "Halifax": "Halifax, Nova Scotia",
  "St. John's": "St. John's, Newfoundland and Labrador", "Tripoli": "Tripoli, Libya",
  "Yaounde": "Yaoundé", "Sanaa": "Sana'a", "Singapore": "Singapore",
  "Salem": "Salem, Oregon", "Boise": "Boise, Idaho", "Santa Fe": "Santa Fe, New Mexico",
  "Phoenix": "Phoenix, Arizona", "Helena": "Helena, Montana", "Bismarck": "Bismarck, North Dakota",
  "Pierre": "Pierre, South Dakota", "Lincoln": "Lincoln, Nebraska", "La Paz": "La Paz",
  "Athens": "Athens", "Sofia": "Sofia", "Monaco": "Monaco", "Delhi": "Delhi",
  "Kandahar": "Kandahar", "Colombo": "Colombo", "Perth": "Perth", "Malé": "Malé",
  "Kingston": "Kingston, Jamaica", "Santo Domingo": "Santo Domingo", "Miami": "Miami",
  "Cape Town": "Cape Town", "Denver": "Denver", "Marrakesh": "Marrakesh"};
const PHOTO = {"Bangui": "The_Bangui_City.jpg",
  "Hong Kong": "Hong_Kong_Skyline_view_from_the_peak_2017.jpg",
  "San Jose": "Downtown_San_José_City_(Costa_Rica).jpg",
  "Singapore": "Marina_Bay,_Financial_District_and_Singapore_River_(35622190292).jpg",
  "Honolulu": "2022_Views_from_Diamond_Head_02.jpg",
  "Kingston": "PortofKingston.jpg",
  "Brasília": "Brasilia_aerea_eixo_monumental.jpg"};
const NOT_PHOTO = /montage|collage|mosaic|composite|compilation|collection|flag|coat.of.arms|seal|emblem|logo|(?<![a-z])maps?(?![a-z])|locator|location|banner|icon|\.svg$|\.gif$|\.tiff?$|\.webm$|\.ogg$|\.ogv$|\.pdf$/i;
const CITY_VIEW = /skyline|panorama|cityscape|downtown|aerial|overview|city.view|view.of|_city|at.night/i;

const photoCache = new Map();
// Saved between runs (localStorage in the app profile), so a restart has every
// city's headlines and photo details at once: a city's photo is kept for good
// (the old project: "a photo does not change"), headlines for
// newsRefreshHours (main.js).
const stored = (key) => { try { return JSON.parse(localStorage.getItem(key) || "{}") || {}; } catch { return {}; } };
const savers = {};
const store = (key, obj) => {             // written at most once a second
  clearTimeout(savers[key]);
  // In idle time right after a frame, so the write (a few hundred KB) never
  // pushes a frame past its 1/60 s.
  const write = () => { try { localStorage.setItem(key, JSON.stringify(obj)); } catch { /* full */ } };
  savers[key] = setTimeout(() => (window.requestIdleCallback ? requestIdleCallback(write, { timeout: 2000 }) : write()), 1000);
};
const PHOTO_KEY = "photo-cache-v2", NEWS_KEY = "news-cache-v1";
const photoSaved = stored(PHOTO_KEY);
for (const [name, e] of Object.entries(photoSaved))
  if (e && e.info) photoCache.set(name, Promise.resolve(e.info));
const strip = (h) => { const d = document.createElement("div"); d.innerHTML = h || ""; return d.textContent.trim(); };

async function commonsInfo(file) {
  const u = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&prop=imageinfo` +
    `&iiprop=url|size|extmetadata&iiurlwidth=480&titles=File:${encodeURIComponent(file)}`;
  const d = await getJSON(u);
  const page = Object.values(d.query?.pages || {})[0];
  const ii = page?.imageinfo?.[0];
  if (!ii) return null;
  const md = ii.extmetadata || {};
  return {
    url: ii.thumburl || ii.url, width: ii.thumbwidth || ii.width, height: ii.thumbheight || ii.height,
    credit: [strip(md.Artist?.value), md.LicenseShortName?.value].filter(Boolean).join(" · ") + " · Wikimedia Commons",
  };
}

// A specific Commons file (used for the ISS photo).
export const commonsPhoto = (file) => commonsInfo(file).catch(() => null);

// One landscape photo of the city, as the old project's update_city_info.py
// (wiki_image): the owner's pick, else the first single landscape photo
// (width >= 1.15 x height) among the article's first 40 pictures, views of the
// city first, trying at most 12.
// First choice: the old project's own finished picture of the city
// (data/city_photos/<slug>.jpg: the 240x180 thumbnails its update_city_info.py
// made, copied from the installed v1.5; for the camera cities, the photo it
// kept for when the camera is down). The search below is only for a city
// that has none.
export const citySlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
const localPhotos = new Map();
function localPhoto(city) {
  if (!localPhotos.has(city.name)) {
    const url = `data/city_photos/${citySlug(city.name)}.jpg`;
    localPhotos.set(city.name, fetch(url, { method: "HEAD" }).then((r) => (r.ok ? { url, width: 240, height: 180, credit: "" } : null)).catch(() => null));
  }
  return localPhotos.get(city.name);
}
export async function cityPhoto(city) {
  const own = await localPhoto(city);
  if (own) return own;
  if (photoCache.has(city.name)) return photoCache.get(city.name);
  const job = (async () => {
    if (PHOTO[city.name]) return commonsInfo(PHOTO[city.name]);
    const title = encodeURIComponent((WIKI[city.name] || city.name).replace(/ /g, "_"));
    const list = await getJSON(`https://en.wikipedia.org/api/rest_v1/page/media-list/${title}`);
    const files = (list.items || []).slice(0, 40)
      .filter((it) => it.type === "image" && !NOT_PHOTO.test(it.title || ""))
      .map((it) => it.title.replace(/^File:/, ""))
      .sort((a, b) => (CITY_VIEW.test(b) ? 1 : 0) - (CITY_VIEW.test(a) ? 1 : 0));
    for (const f of files.slice(0, 12)) {
      const info = await commonsInfo(f).catch(() => null);
      if (info && info.width >= info.height * 1.15) return info;
    }
    return null;
  })().catch(() => undefined);              // undefined: failed (not saved, tried again next time)
  photoCache.set(city.name, job);
  job.then((info) => {
    if (info === undefined) { photoCache.delete(city.name); return; }
    photoSaved[city.name] = { at: Date.now(), info }; store(PHOTO_KEY, photoSaved);
  });
  return job.then((info) => info ?? null);
}

// ---------------------------------------------------------------- webcams
// city_cams.txt: "City = url | crop=a-b | maxage=h | referer=url | dated=1"
let camList = null;
export async function loadCams() {
  if (camList) return camList;
  camList = {};
  try {
    const txt = await (await fetch("data/city_cams.txt")).text();
    for (const line of txt.split(/\r?\n/)) {
      if (!line.includes("=") || line.trimStart().startsWith("#")) continue;
      const i = line.indexOf("=");
      const [url, ...rest] = line.slice(i + 1).split("|").map((s) => s.trim());
      if (!url) continue;
      const opts = {};
      for (const r of rest) { const j = r.indexOf("="); if (j > 0) opts[r.slice(0, j).trim().toLowerCase()] = r.slice(j + 1).trim(); }
      camList[line.slice(0, i).trim().toLowerCase()] = { url, opts };
    }
  } catch { /* no list */ }
  return camList;
}

export async function hasCam(city) { return !!(await loadCams())[city.name.toLowerCase()]; }

// A live camera picture, as the old project's fetch_cam + save_thumb: refused
// when it is older than maxage hours (Last-Modified, or the date in a
// Roundshot URL), undated with dated=1, or under 5000 bytes (an "offline"
// placeholder); cropped to its crop=a-b slice; then made into the 240x180
// panel picture (centre crop) with the red LIVE badge drawn into its
// bottom-left corner. Null when the camera is down or stale (the city's
// photo is shown instead).
export async function cityCam(city) {
  const cams = await loadCams();
  const cam = cams[city.name.toLowerCase()];
  if (!cam || !host()) return null;
  try {
    // A YouTube live stream (youtube=<video id>): its preview picture
    // (i.ytimg.com .../hqdefault_live.jpg) follows the stream every few
    // minutes, but carries no date, so the stream must be live right now;
    // when it has ended or moved, the city shows its photo instead.
    if (cam.opts.youtube) {
      const w = await shellFetch(`https://www.youtube.com/watch?v=${encodeURIComponent(cam.opts.youtube)}`);
      if (!/"isLiveNow":\s*true/.test(w.text || "")) return null;
    }
    const r = await shellFetch(cam.url, cam.opts.referer ? { referer: cam.opts.referer } : {});
    if (!r.dataUrl) return null;
    let when = r.lastModified ?? null;
    const m = /\/(\d{4})-(\d\d)-(\d\d)\/(\d\d)-(\d\d)-(\d\d)\//.exec(r.finalUrl || "");
    if (when == null && m) when = Date.UTC(+m[1], m[2] - 1, +m[3], +m[4], +m[5], +m[6]) + 14 * 3600e3;
    if (when == null && cam.opts.dated === "1") return null;
    const maxAge = parseFloat(cam.opts.maxage || "6") * 3600e3;
    if (when != null && Date.now() - when > maxAge) return null;
    const b64 = r.dataUrl.slice(r.dataUrl.indexOf(",") + 1);
    if (Math.floor(b64.length * 3 / 4) - (b64.endsWith("==") ? 2 : b64.endsWith("=") ? 1 : 0) < 5000) return null;
    // A picture that has not changed since the last refresh (3 h ago) is a
    // frozen camera or a stream whose preview stopped updating: stale.
    const sig = `${b64.length}:${b64.slice(-64)}`, prev = camSeen[city.name];
    camSeen[city.name] = { sig, at: prev && prev.sig === sig ? prev.at : Date.now() };
    store(CAM_KEY, camSeen);
    if (prev && prev.sig === sig && Date.now() - prev.at > 2.5 * 3600e3) return null;
    // YouTube's 4:3 preview has the 16:9 picture letterboxed: use the middle.
    const src = await camThumb(r.dataUrl, cam.opts.crop, cam.opts.youtube ? 0.125 : 0);
    return src ? { src, live: true, credit: `Live camera · ${new URL(cam.url).host}` } : null;
  } catch { return null; }
}

// save_thumb(raw, crop, live=True) of the old project: the crop=a-b slice,
// scaled to cover 240x180 and centre-cropped, and _live_badge at that size
// (k = max(240/960, 0.3) = 0.3): a rounded black box (alpha 150/255, radius
// 2, 3 px in from the left and bottom, 13 px tall), a red (235,30,30) dot of
// 4 px and "LIVE" in Arial Bold 9 px, white.
const CAM_KEY = "cam-seen-v1", camSeen = stored(CAM_KEY);
function camThumb(src, crop, bars = 0) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let sx = 0, sw = img.width;
      if (crop) { const [a, b] = crop.split("-").map(Number); sx = Math.round(img.width * a); sw = Math.max(1, Math.round(img.width * b) - sx); }
      const sy = Math.round(img.height * bars), sh = img.height - 2 * sy;   // letterbox bars left out
      const TW = 240, TH = 180, s = Math.max(TW / sw, TH / sh);
      const w = Math.max(TW, Math.round(sw * s)), h = Math.max(TH, Math.round(sh * s));
      const c = document.createElement("canvas"); c.width = TW; c.height = TH;
      const g = c.getContext("2d");
      g.imageSmoothingEnabled = true; g.imageSmoothingQuality = "high";
      const l = Math.floor((w - TW) / 2), t = Math.floor((h - TH) / 2);
      g.drawImage(img, sx, sy, sw, sh, -l, -t, w, h);
      const k = 0.3, pad = Math.round(10 * k), dot = Math.round(12 * k);
      g.font = `bold ${Math.max(9, Math.round(26 * k))}px Arial`;
      const tw = g.measureText("LIVE").width;
      const bw = Math.round(tw + dot + pad * 3), bh = Math.round(26 * k + pad * 1.6);
      const x0 = pad, y0 = TH - pad - bh, cy = y0 + bh / 2;
      g.fillStyle = "rgba(0,0,0,0.588)";
      g.beginPath(); g.roundRect(x0, y0, bw, bh, Math.round(6 * k)); g.fill();
      g.fillStyle = "rgb(235,30,30)";
      g.beginPath(); g.ellipse(x0 + pad + dot / 2, cy, dot / 2, dot / 2, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = "#fff"; g.textBaseline = "middle"; g.textAlign = "left";
      g.fillText("LIVE", x0 + pad * 2 + dot, cy);
      resolve(c.toDataURL("image/jpeg", 0.9));
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

// ---------------------------------------------------------------- headlines
// Calm mode leaves out disaster, war, crime and medical-fear headlines.
const CALM_BLOCK = /\b(homicide|homicides|manslaughter|slain|slaying|missing|passe[sd] away|obituar\w*|mourn\w*|grief|kill|killed|killing|dead|death|deaths|die[sd]?|dying|murder|shoot|shooting|shot|stab|stabbing|bomb|bombing|blast|explosion|attack|attacks|war|wars|missile|airstrike|strike[sd]?|troops|army|military|terror|terrorist|hostage|crash|crashes|collision|disaster|earthquake|flood|floods|wildfire|fire|hurricane|typhoon|cyclone|tornado|storm|victim|victims|injur\w*|wound\w*|assault|rape|abuse|arrest\w*|police|crime|criminal|prison|jail|court|trial|guilty|sentenced|lawsuit|fraud|scandal|protest\w*|riot\w*|clash\w*|violence|violent|gun|guns|weapon\w*|cancer|virus|outbreak|epidemic|pandemic|disease|hospital|overdose|suicide|funeral|tragedy|tragic|fatal|emergency|evacuat\w*|threat\w*|crisis|famine|refugee\w*|genocide|massacre|conflict|invasion|sanction\w*)\b/i;
export const BREAKING = /(?<![-\w])(breaking|just in|live updates?|developing|urgent)(?![-\w])/i;

// News search phrases where the plain city name is ambiguous (from the globe-app city list).
const NEWS_QUERY = {"Reykjavík": "Reykjavik Iceland", "Rome": "Rome Italy", "Lagos": "Lagos Nigeria", "Nairobi": "Nairobi Kenya", "Kathmandu": "Kathmandu Nepal", "Honolulu": "Honolulu Hawaii", "Vancouver": "Vancouver BC", "New York": "New York City", "Lima": "Lima Peru"};

const newsSaved = stored(NEWS_KEY);
const newsCache = new Map(Object.entries(newsSaved));
export async function cityNews(city, { calm = true, count = 3, refreshHours = 3 } = {}) {
  const hit = newsCache.get(city.name);
  if (hit && Date.now() - hit.at < refreshHours * 3600e3) return hit.items;   // a city's headlines are kept this long
  const q = encodeURIComponent(`${city.news || NEWS_QUERY[city.name] || city.name} when:1d`);
  const r = await shellFetch(`https://news.google.com/rss/search?q=${q}&hl=en-US&gl=US&ceid=US:en`);
  const xml = new DOMParser().parseFromString(r.text || "", "text/xml");
  let items = [...xml.querySelectorAll("item")].map((it) => {
    const full = it.querySelector("title")?.textContent?.trim() || "";
    const cut = full.lastIndexOf(" - ");                        // "Headline - Source"
    return { title: cut > 0 ? full.slice(0, cut) : full, source: cut > 0 ? full.slice(cut + 3) : "",
      when: Date.parse(it.querySelector("pubDate")?.textContent || "") || 0 };
  }).filter((x) => x.title);
  // The old project (v1.2): headlines marked Breaking, Just in, Live updates,
  // Developing or Urgent go to the top, then the newest. Calm mode still
  // leaves out disaster, war, crime and medical-fear stories.
  if (calm) items = items.filter((x) => !CALM_BLOCK.test(x.title));
  items.sort((a, b) => (BREAKING.test(a.title) ? 0 : 1) - (BREAKING.test(b.title) ? 0 : 1) || b.when - a.when);
  items = items.slice(0, count);   // the strip trims long lines with an ellipsis
  newsCache.set(city.name, { at: Date.now(), items });
  newsSaved[city.name] = { at: Date.now(), items }; store(NEWS_KEY, newsSaved);
  return items;
}
