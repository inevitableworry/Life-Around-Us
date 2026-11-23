// Radio (the owner's design, 2026-11-19): press the DualSense touchpad (or R
// on the keyboard) and the picture blurs behind a row of square tiles along
// the top -- the chosen one framed in white, arrows at either end, Cross
// "Confirm" / Triangle "Volume (High)" beside it -- with an L1 / R1 bar
// showing where you are in the list, and the name and details underneath.
// White text with a black outline in the owner's font (ArtDeco Condensed
// Bold).
//
// Two lists, chosen on the left (RADIO / ON DEMAND, with the right-stick
// icon on the chosen one; the right stick up / down switches, as do the
// Up / Down keys):
//  - Radio: the most popular live stations around the viewer
//    (live.fetchRadioStations), after a "Radio Off" tile. Each plays as you
//    move onto it with L1 / R1; Radio Off goes quiet and the soundtrack
//    comes back.
//  - On Demand: the tracks of an album folder on this PC (config.js
//    onDemand.folder, read by the shell), one tile each (the album cover with
//    the track number). Each plays as you move onto it; the album plays on
//    from there.
// Cross confirms and closes the screen, and whatever plays keeps playing.
// The touchpad opens and closes it. It starts off each time the app starts.
//
// Layout measured off the owner's 3840 x 2160 mock-up, in vh (1vh = 21.6 px
// there), from the screen's centre line: tiles 10 vh square on a 11.48 vh
// pitch, 3.33 vh from the top; the chosen one framed 0.37 vh in white. The
// left menu after the owner's second reference: labels right-aligned 3.1 vh
// left of a column of dots 33.2 vh left of centre, 3.9 vh apart.

import { icyTitle } from "./live.js";

const KEY = "radio-v3";
const VOLUMES = [["Low", 0.3], ["Medium", 0.6], ["High", 1.0]];
const MODES = [["radio", "RADIO"], ["demand", "ON DEMAND"]];

let stations = [];                     // radio: { name, tags, url, logo } (OFF first)
let tracks = [];                       // on demand: { name, artists, url, n, cover }
let status = "loading";                // radio list: loading | ready | none
let demandFolder = "";                 // config.js onDemand.folder (asked of the shell again on each opening)
let demandStatus = "loading";          // on demand: loading | ready | none
let state = { mode: "radio", index: 0, dIndex: 0, volume: 2, stationUrl: "" };
try { state = { ...state, ...JSON.parse(localStorage.getItem(KEY) || "{}") }; } catch { /* defaults */ }
let mode = state.mode === "demand" ? "demand" : "radio";
let playing = null;                    // null | { mode, index }
let tune = "";                         // "" | tuning | live | offline
const save = () => { try { localStorage.setItem(KEY, JSON.stringify({ ...state, mode })); } catch { /* private */ } };

const audio = new Audio();
audio.preload = "none";
audio.addEventListener("playing", () => { tune = "live"; render(); });
audio.addEventListener("waiting", () => { if (playing) { tune = "tuning"; render(); } });
audio.addEventListener("error", () => { if (playing && audio.getAttribute("src")) { tune = "offline"; render(); } });
// On Demand: the album plays on, track after track (back to the first after the last).
audio.addEventListener("ended", () => {
  if (playing?.mode !== "demand" || !tracks.length) return;
  const k = (playing.index + 1) % tracks.length;
  if (mode === "demand") state.dIndex = k;
  playing = { mode: "demand", index: k }; state.dIndex = k; save();
  startAudio(tracks[k].url); render();
});

const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ICON_CROSS = `<svg viewBox="0 0 62 62"><circle cx="31" cy="31" r="29" fill="#fff" stroke="#000" stroke-width="2"/><path d="M19 19L43 43M43 19L19 43" stroke="#000" stroke-width="5.5" stroke-linecap="round"/></svg>`;
const ICON_TRIANGLE = `<svg viewBox="0 0 62 62"><circle cx="31" cy="31" r="29" fill="#fff" stroke="#000" stroke-width="2"/><path d="M31 17.5L45.5 41.5H16.5Z" fill="none" stroke="#000" stroke-width="5" stroke-linejoin="round"/></svg>`;
const BADGE = (t) => `<svg viewBox="0 0 60 50"><path d="M5 1.5H55A3.5 3.5 0 0 1 58.5 5V30A18.5 18.5 0 0 1 40 48.5H20A18.5 18.5 0 0 1 1.5 30V5A3.5 3.5 0 0 1 5 1.5Z" fill="#fff" stroke="#000" stroke-width="3"/></svg><b>${t}</b>`;
const CHEVRON = (dir) => `<svg viewBox="0 0 20 32"><path d="${dir < 0 ? "M15 3L4 16L15 29" : "M5 3L16 16L5 29"}" fill="none" stroke="#fff" stroke-width="5.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
// The right stick, rolled up / down: a white disc with an R, little arrows above and below.
const ICON_RSTICK = `<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="27" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <path d="M30 6.5L34 11.5H26Z M30 53.5L34 48.5H26Z" fill="#000"/>
  <text x="30" y="39.5" text-anchor="middle" font-family="ArtDeco, sans-serif" font-size="27" fill="#000">R</text></svg>`;

// A tile without a usable logo gets one made from its name, in colours
// picked from the name (so each keeps its own look).
const PALETTES = [["#f2f2f2", "#1c7fd1", "#e3304e"], ["#16303a", "#f7d046", "#f7d046"], ["#2bc6e8", "#0d2a38", "#ffffff"],
  ["#e957b8", "#ffe25a", "#2ad3ff"], ["#2a2140", "#c9a7ff", "#ff9ec7"], ["#1d1d1d", "#e9b44c", "#ffffff"], ["#b8202f", "#ffffff", "#ffffff"]];
function madeLogo(name) {
  let h = 0; for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const [bg, fg, accent] = PALETTES[h % PALETTES.length];
  // the last word big (often the frequency), the rest above it; each line
  // sized to fit the tile (the font's capitals are ~0.45 em wide)
  const words = name.toUpperCase().split(/\s+/).slice(0, 4);
  const top = words.slice(0, -1).join(" ") || words[0], bottom = words.length > 1 ? words[words.length - 1] : "";
  const fit = (t, max) => Math.min(max, 8.6 / (0.47 * Math.max(1, t.length)));
  return `<div class="rd-logo" style="background:${bg};color:${fg}"><span class="rd-l1" style="font-size:${fit(top, bottom ? 2.1 : 3.3).toFixed(2)}vh">${esc(top)}</span>`
    + (bottom ? `<span class="rd-l2" style="color:${accent};font-size:${fit(bottom, 3.3).toFixed(2)}vh">${esc(bottom)}</span>` : "") + "</div>";
}
const OFF = { off: true, name: "Radio Off", url: "off", tags: [] };
const POWER_ICON = `<svg viewBox="0 0 100 100"><path d="M34 27A30 30 0 1 0 66 27" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/><path d="M50 14V50" stroke="#fff" stroke-width="9" stroke-linecap="round"/></svg>`;
function tileHtml(s) {
  if (s.off) return `<div class="rd-logo rd-offtile">${POWER_ICON}</div>`;
  if (s.n) {                                           // an On Demand track: the album cover and its number
    return madeLogo(s.name) + (s.cover ? `<div class="rd-pic rd-full"><img alt="" src="${esc(s.cover)}"></div>` : "")
      + `<span class="rd-num rd-text">${String(s.n).padStart(2, "0")}</span>`;
  }
  return madeLogo(s.name) + (s.logo ? `<div class="rd-pic"><img alt="" referrerpolicy="no-referrer" src="${esc(s.logo)}"></div>` : "");
}

let root = null, open = false, onChange = () => {};
function build() {
  root = el("div", "radio");
  root.id = "radio";
  root.innerHTML = `
    <div class="rd-modes">${MODES.map(([m, label], i) => `<div class="rd-mode rd-text" data-mode="${m}" style="--i:${i}">${label}</div><span class="rd-dot" style="--i:${i}"></span>`).join("")}
      <span class="rd-line"></span><span class="rd-stick">${ICON_RSTICK}</span></div>
    <div class="rd-arrow rd-left">${CHEVRON(-1)}</div>
    <div class="rd-tiles"></div>
    <div class="rd-arrow rd-right">${CHEVRON(1)}</div>
    <div class="rd-prompt rd-p1"><span class="rd-icon">${ICON_CROSS}</span><span class="rd-text rd-power"></span></div>
    <div class="rd-prompt rd-p2"><span class="rd-icon">${ICON_TRIANGLE}</span><span class="rd-text rd-vol"></span></div>
    <div class="rd-badge rd-lb">${BADGE("L1")}</div>
    <div class="rd-bar"><div class="rd-thumb"></div></div>
    <div class="rd-badge rd-rb">${BADGE("R1")}</div>
    <div class="rd-name rd-text"></div>
    <div class="rd-now rd-text"></div>
    <div class="rd-song rd-text"></div>`;
  document.body.appendChild(root);
}
const about = (s) => {
  const nameWords = s.name.toLowerCase().split(/\W+/);
  const tags = (s.tags || []).filter((t) => !nameWords.includes(t.toLowerCase()) && !/^(features?|station|live|internet)$/i.test(t));
  return tags.slice(0, 2).join(" · ").toUpperCase() || "LIVE RADIO";
};
const list = () => (mode === "demand" ? tracks : stations);
const idx = () => (mode === "demand" ? state.dIndex : state.index);
const isPlaying = (k) => playing && playing.mode === mode && playing.index === k;
let shownKey = "";
function render() {
  if (!root) build();
  const L = list(), n = L.length, at = idx(), tiles = root.querySelector(".rd-tiles");
  const key = `${mode}:${n ? `${at}/${n}` : mode === "demand" ? demandStatus : status}`;
  if (key !== shownKey) {                              // the tiles only change with the selection
    shownKey = key;
    tiles.innerHTML = "";
    if (n) for (let k = -2; k <= 2; k++) {
      if (n < 5 && (k < -Math.floor((n - 1) / 2) || k > Math.ceil((n - 1) / 2))) continue;   // a short list: each tile once
      const s = L[(((at + k) % n) + n) % n];
      const t = el("div", "rd-tile" + (k === 0 ? " rd-sel" : ""), tileHtml(s));
      t.style.setProperty("--k", k);
      const img = t.querySelector("img");
      if (img) {
        img.addEventListener("error", () => img.parentElement.remove(), { once: true });
        // a square-ish logo fills the tile; a wide one sits on white
        const fitPic = () => { const r = img.naturalWidth / Math.max(1, img.naturalHeight); if (r > 0.8 && r < 1.25) img.parentElement.classList.add("rd-full"); };
        if (img.complete && img.naturalWidth) fitPic(); else img.addEventListener("load", fitPic, { once: true });
      }
      tiles.appendChild(t);
    }
  }
  root.querySelectorAll(".rd-mode").forEach((m) => m.classList.toggle("rd-on", m.dataset.mode === mode));
  root.querySelector(".rd-stick").style.setProperty("--i", MODES.findIndex(([m]) => m === mode));
  const s = L[at];
  const live = s && isPlaying(at);
  let name, now, song = "";
  if (mode === "demand") {
    name = s ? s.name.toUpperCase() : demandStatus === "loading" ? "LOADING YOUR MUSIC" : "NO MUSIC YET";
    now = !s ? (demandStatus === "loading" ? "" : "PUT SONGS IN A FOLDER CALLED ON DEMAND ON YOUR DESKTOP") : live && tune === "offline" ? "CAN'T PLAY THIS FILE" : (s.artists || "").toUpperCase();
  } else {
    name = s ? s.name.toUpperCase() : status === "loading" ? "FINDING STATIONS NEAR YOU" : "NO STATIONS FOUND";
    now = !s ? "" : s.off ? "BACK TO THE SOUNDTRACK"
      : tune === "offline" ? "OFF AIR RIGHT NOW" : tune === "tuning" ? "TUNING IN…" : about(s);
    song = s && !s.off && live && tune !== "offline" ? (songs.get(s.url) || "").toUpperCase() : "";
  }
  root.querySelector(".rd-name").textContent = name;
  root.querySelector(".rd-now").textContent = now;
  root.querySelector(".rd-song").textContent = song;
  root.querySelector(".rd-power").textContent = "CONFIRM";
  root.querySelector(".rd-vol").textContent = `VOLUME (${VOLUMES[state.volume][0].toUpperCase()})`;
  root.querySelector(".rd-thumb").style.left = `${(at / Math.max(1, n - 1)) * 100}%`;
}

// The song on now (radio, under the genre): read from the stream every 20 s
// while the radio screen is up and a station plays. Station IDs, ads and
// empty titles are left out.
const songs = new Map();                // station url -> "ARTIST - TITLE"
let songTimer = 0, songFor = "";
const goodSong = (t, s) => {
  if (!t || t.length < 3 || t.length > 90) return "";
  const k = (x) => x.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");   // letters in any script
  const name = k(s.name), tk = k(t);
  if (!tk || tk.includes(name) || name.includes(tk)) return "";              // the station's own name
  if (/^[.\-\s]|_\d+|\b(commercial|advert|sale|promo|sponsor|station id|traffic)\b/i.test(t)) return "";   // ads and IDs
  return t.replace(/\s+/g, " ").replace(/^\s*-\s*|\s*-\s*$/g, "").trim();
};
function pollSong() {
  clearTimeout(songTimer);
  const s = playing?.mode === "radio" ? stations[playing.index] : null;
  if (!open || !s || s.off) return;
  songFor = s.url;
  icyTitle(s.url).then((t) => {
    if (songFor !== s.url) return;
    const g = goodSong(t, s);
    if (g) songs.set(s.url, g); else songs.delete(s.url);
    render();
  }).catch(() => { /* this stream does not say */ });
  songTimer = setTimeout(pollSong, 20000);
}

function startAudio(url) {
  tune = "tuning";
  audio.volume = VOLUMES[state.volume][1];
  if (audio.getAttribute("src") !== url) audio.src = url;
  audio.play().catch((e) => { if (e?.name !== "AbortError") { tune = "offline"; render(); } });
}
function stop() {
  audio.pause();
  audio.removeAttribute("src"); audio.load();          // drop the stream (no data while off)
  tune = "";
}

// On Demand from the shell: the album folder's tracks ("NN - Artists - Title.flac").
const host = () => window.chrome?.webview;
host()?.addEventListener("message", (e) => {
  if (e.data?.type !== "onDemand") return;
  const cover = e.data.cover || "";
  tracks = (e.data.tracks || []).map((t, i) => {
    const base = t.file.replace(/\.[^.]+$/, "");
    const m = /^(\d+)\s*[-.]\s*(.+?)\s+-\s+(.+)$/.exec(base);
    return { n: m ? +m[1] : i + 1, artists: m ? m[2] : "", name: m ? m[3] : base.replace(/^\d+\s*[-.]\s*/, ""), url: t.url, cover };
  });
  demandStatus = tracks.length ? "ready" : "none";
  state.dIndex = Math.min(state.dIndex, Math.max(0, tracks.length - 1));
  shownKey = "";
  if (root) render();
});

export const radio = {
  get isOpen() { return open; },
  get playing() { return !!playing; },
  get mode() { return mode; },
  get stations() { return stations; },
  get tracks() { return tracks; },
  get state() { return { ...state, mode, on: !!playing, playing, tune, station: stations[state.index] || null, track: tracks[state.dIndex] || null }; },
  onChange(fn) { onChange = fn; },
  // The stations near the viewer (live.fetchRadioStations); the last one
  // listened to stays chosen if it is still in the list.
  setStations(list) {
    const playingUrl = playing?.mode === "radio" ? stations[playing.index]?.url : null;
    stations = list?.length ? [OFF, ...list] : [];
    status = stations.length ? "ready" : "none";
    const k = stations.findIndex((s) => s.url === (playingUrl || state.stationUrl));
    state.index = k >= 0 ? k : 0;
    if (playing?.mode === "radio") playing.index = Math.max(0, stations.findIndex((s) => s.url === playingUrl));
    else state.index = 0;                              // off until opened
    if (mode === "radio") shownKey = "";
    if (root) render();
  },
  failed() { if (!stations.length) { status = "none"; if (root) render(); } },
  // The album folder for On Demand (asked of the shell; the answer comes as a message).
  loadOnDemand(folder) {
    demandFolder = folder;
    if (!host() || !folder) { demandStatus = "none"; return; }
    host().postMessage({ cmd: "getOnDemand", folder });
  },
  open() {
    // Songs added to the folder since: looked for again each time the radio opens
    // (not while one of them is playing, so nothing is pulled from under it)
    if (playing?.mode !== "demand" && demandFolder) this.loadOnDemand(demandFolder);
    // Opening tunes in: to what played last (the last confirmed station,
    // else the most popular one; or the album where it was).
    if (!playing) {
      if (mode === "demand" && tracks.length) this.select(state.dIndex);
      else if (stations.length > 1) {
        mode = "radio";
        const k = stations.findIndex((s) => !s.off && s.url === state.stationUrl);
        this.select(k > 0 ? k : 1);
      }
    } else if (playing.mode !== mode) { mode = playing.mode; shownKey = ""; }
    render(); open = true;
    clearTimeout(songTimer); songTimer = setTimeout(pollSong, 1500);
    requestAnimationFrame(() => root.classList.add("shown"));
    document.body.classList.add("radio-open");
  },
  close() { open = false; clearTimeout(songTimer); root?.classList.remove("shown"); document.body.classList.remove("radio-open"); },
  toggle() { open ? this.close() : this.open(); },
  // Radio <-> On Demand (the right stick): the list shows where it was; nothing changes until you move.
  setMode(d) {
    const k = Math.max(0, Math.min(MODES.length - 1, MODES.findIndex(([m]) => m === mode) + d));
    if (MODES[k][0] === mode) return;
    mode = MODES[k][0]; shownKey = ""; save(); render();
  },
  // Onto tile k of the list shown: it plays at once (Radio Off goes quiet).
  select(k) {
    const L = list();
    if (!L.length) return;
    k = ((k % L.length) + L.length) % L.length;
    if (mode === "demand") state.dIndex = k; else state.index = k;
    const s = L[k], was = !!playing;
    if (s.off) { playing = null; stop(); }
    else { playing = { mode, index: k }; startAudio(s.url); }
    save(); render();
    if (!!playing !== was) onChange("power", !!playing);
    onChange("station", !!playing);
    if (mode === "radio") { clearTimeout(songTimer); songTimer = setTimeout(pollSong, 300); }   // asked straight away (it takes a few seconds)
  },
  step(d) { this.select(idx() + d); },
  // Cross: keep what plays, and close the screen.
  confirm() {
    if (playing?.mode === "radio") { state.stationUrl = stations[playing.index]?.url || state.stationUrl; save(); }
    this.close();
  },
  power() { if (playing) { playing = null; stop(); render(); onChange("power", false); } else this.open(); },
  volume() {
    state.volume = (state.volume + 1) % VOLUMES.length; save();
    audio.volume = VOLUMES[state.volume][1];
    render(); onChange("volume", !!playing);
  },
  // The controller while the radio screen is up: it has the pad.
  // edge(name, down) -> true on the press (main.js pollGamepad).
  pad(gp, edge) {
    const b = (i) => !!gp.buttons[i]?.pressed, ry = gp.axes?.[3] ?? 0;
    if (edge("radioPad", b(17))) { this.toggle(); return true; }
    if (!open) return false;
    // L1 / R1 move along the tiles; the right stick switches Radio / On
    // Demand. (The D-pad does nothing here, owner's call.)
    if (edge("rdPrev", b(4))) this.step(-1);
    if (edge("rdNext", b(5))) this.step(1);
    if (edge("rdUp", ry < -0.6)) this.setMode(-1);
    if (edge("rdDown", ry > 0.6)) this.setMode(1);
    if (edge("rdCross", b(0))) this.confirm();
    if (edge("rdTri", b(3))) this.volume();
    if (edge("rdCircle", b(1))) this.close();
    return true;
  },
};

// Keyboard: R opens and closes it; while it is up, Left/Right or Q/E move
// along the tiles, Up/Down switch Radio / On Demand, Enter confirms, V the
// volume, Esc closes. (Caught before the globe's own keys.)
// A controller layout running in the background (Steam's desktop layout)
// also types keys for the pad's buttons -- arrows for the D-pad, and so on.
// Keys that arrive while a controller button is held are that, not the
// keyboard: on the radio screen they are ignored.
const padHeld = () => [...(navigator.getGamepads?.() || [])].some((gp) => gp && (gp.buttons.some((x) => x.pressed) || gp.axes.some((a) => Math.abs(a) > 0.5)));
window.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if (open && padHeld()) { e.preventDefault(); e.stopImmediatePropagation(); return; }
  if (!open) {
    if (k === "r" && !e.repeat && document.body.dataset.started === "1" && !document.querySelector(".name-screen")) { radio.open(); e.preventDefault(); e.stopImmediatePropagation(); }
    return;
  }
  e.preventDefault(); e.stopImmediatePropagation();
  if (e.repeat && !["arrowleft", "arrowright"].includes(k)) return;
  if (k === "arrowleft" || k === "q") radio.step(-1);
  else if (k === "arrowright" || k === "e") radio.step(1);
  else if (k === "arrowup") radio.setMode(-1);
  else if (k === "arrowdown") radio.setMode(1);
  else if (k === "enter" || k === "x") radio.confirm();
  else if (k === "v" || k === "t") radio.volume();
  else if (k === "escape" || k === "r" || k === "backspace") radio.close();
}, true);
