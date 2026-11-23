// The options screen, rebuilt after Life with PlayStation's own (LWP-PC):
// a dimmed, blurred globe behind a large outlined "OPTIONS", one vertical
// list per level with the focused entry large, glowing and reflected, the
// path so far bottom-left ("LIVE > Settings > Weather") and the Select / Back
// buttons along the bottom. Layout values come from data/ui/layout.xml
// (layout "menu" and "osd", 720p values / 720 -> vh, 1280 -> vw).
//
// Keys:
//   Open / close   O or the gear icon (Triangle)
//   Move           arrow keys, W / S / D-pad / left stick
//   Select         Enter or Space (Cross) / right arrow
//   Back           Esc or Backspace (Circle) / left arrow; at the top it closes
// Choices are remembered on this PC (localStorage "lau.options.v1") and
// applied over config.js when the app starts.
import { CONFIG } from "./config.js";

const KEY = "lau.options.v1";
CONFIG.live ??= {};
CONFIG.tour ??= {};
CONFIG.music ??= {};
CONFIG.sfx ??= {};
CONFIG.ambient ??= {};

// ---------------------------------------------------------------- settings
// Each setting: id (saved), choices [label, value], get / set on CONFIG.
const onOff = [["On", true], ["Off", false]];
const pct = (v) => `${Math.round(v * 100)}%`;
const SETTINGS = {
  units: { values: [["Celsius", "C"], ["Fahrenheit", "F"]], get: () => CONFIG.units, set: (v) => (CONFIG.units = v) },
  distance: { values: [["Kilometres", "km"], ["Miles", "mi"]], get: () => (CONFIG.distance === "mi" ? "mi" : "km"), set: (v) => (CONFIG.distance = v) },
  clock: { values: [["Automatic", "auto"], ["12-Hour", "12h"], ["24-Hour", "24h"]],
    get: () => (["12h", "24h"].includes(CONFIG.clock) ? CONFIG.clock : "auto"), set: (v) => (CONFIG.clock = v) },
  textSize: { values: [["Small", 0.9], ["Normal", 1], ["Large", 1.15], ["Extra Large", 1.3]],
    get: () => +(CONFIG.textSize ?? 1), set: (v) => (CONFIG.textSize = v) },
  touchControls: { values: onOff,
    get: () => CONFIG.touchControls === true,
    set: (enabled) => {
      CONFIG.touchControls = enabled;
      window.dispatchEvent(new CustomEvent("lau:touch-controls-changed", { detail: { enabled } }));
    } },
  quakes: { values: onOff, get: () => CONFIG.live.quakes !== false, set: (v) => (CONFIG.live.quakes = v) },
  quakeMin: { values: [["M5.5 and up", 5.5], ["M6.0 and up", 6.0], ["M6.5 and up", 6.5], ["M7.0 and up", 7.0]],
    get: () => CONFIG.live.quakeMinMagnitude ?? 6.0, set: (v) => (CONFIG.live.quakeMinMagnitude = v) },
  storms: { values: onOff, get: () => CONFIG.live.storms !== false, set: (v) => (CONFIG.live.storms = v) },
  rumble: { values: onOff, get: () => CONFIG.live.rumble !== false, set: (v) => (CONFIG.live.rumble = v) },
  labels: { values: onOff, get: () => CONFIG.tour.showCityLabels !== false, set: (v) => (CONFIG.tour.showCityLabels = v) },
  clouds: { values: onOff, get: () => CONFIG.live.clouds !== false, set: (v) => (CONFIG.live.clouds = v) },
  twinkle: { values: onOff, get: () => CONFIG.nightTwinkle === true, set: (v) => (CONFIG.nightTwinkle = v) },
  lensFlare: { values: onOff, get: () => CONFIG.lensFlare !== false, set: (v) => (CONFIG.lensFlare = v) },
  aurora: { values: onOff, get: () => CONFIG.aurora !== false, set: (v) => (CONFIG.aurora = v) },
  tiltShift: { values: onOff, get: () => CONFIG.tiltShift !== false, set: (v) => (CONFIG.tiltShift = v) },
  glitter: { values: onOff, get: () => CONFIG.glitter !== false, set: (v) => (CONFIG.glitter = v) },
  lightning: { values: onOff, get: () => CONFIG.lightning !== false, set: (v) => (CONFIG.lightning = v) },
  stormSpirals: { values: onOff, get: () => CONFIG.stormSpirals !== false, set: (v) => (CONFIG.stormSpirals = v) },
  volcanoes: { values: onOff, get: () => CONFIG.volcanoes !== false, set: (v) => (CONFIG.volcanoes = v) },
  cityCloseUp: { values: onOff, get: () => CONFIG.cityCloseUp === true, set: (v) => (CONFIG.cityCloseUp = v) },
  oldLook: { values: [["Like the Old App", 1], ["Light", 0.5], ["Off", 0]], get: () => +(CONFIG.oldLook ?? 1), set: (v) => (CONFIG.oldLook = v) },
  news: { values: onOff, get: () => CONFIG.live.news !== false, set: (v) => (CONFIG.live.news = v) },
  sfx: { values: onOff, get: () => CONFIG.sfx.enabled !== false, set: (v) => (CONFIG.sfx.enabled = v) },
  sfxVolume: { values: [0.15, 0.3, 0.55, 0.8, 1].map((v) => [pct(v), v]),
    get: () => CONFIG.sfx.volume ?? 0.55, set: (v) => (CONFIG.sfx.volume = v) },
  // As the original's Music menu: My Music / Original Soundtrack / Disabled.
  music: { values: [["My Music", "mine"], ["Original Soundtrack", "ost"], ["Disabled", false], ["All", "all"]],
    get: () => (CONFIG.music.enabled === false ? false : CONFIG.music.source || "all"),
    set: (v) => { CONFIG.music.enabled = v !== false; if (v) CONFIG.music.source = v; } },
  volume: { values: [0, 0.1, 0.2, 0.35, 0.5, 0.7, 1].map((v) => [pct(v), v]),
    get: () => CONFIG.music.volume ?? 0.35, set: (v) => (CONFIG.music.volume = v) },
  ambient: { values: onOff, get: () => CONFIG.ambient.enabled !== false, set: (v) => (CONFIG.ambient.enabled = v) },
  // The wave loop under the Earth: Off, or its level (50 % = its usual level).
  waveVolume: { values: [["Off", 0], ["25%", 0.25], ["50%", 0.5], ["75%", 0.75], ["100%", 1]],
    get: () => (CONFIG.ambient.enabled === false ? 0 : CONFIG.ambient.volume ?? 0.5),
    set: (v) => { CONFIG.ambient.volume = v; CONFIG.ambient.enabled = v > 0; } },
  // Theatre Mode: hide the on-screen extras for a cleaner picture. Semi
  // Experience hides the name card (top left); Full Experience also hides
  // the logo (top right).
  theatre: { values: [["Off", "off"], ["Semi Experience", "semi"], ["Full Experience", "full"]],
    get: () => CONFIG.theatre ?? "off", set: (v) => (CONFIG.theatre = v) },
  // Satellite Mode's speed along the ISS's orbit: as it really goes, or sped
  // up like the crews' time-lapses (18.75x: the reference video's pace, 25 % slower), or faster still (60x).
  satelliteVolClouds: { values: onOff, get: () => CONFIG.satelliteVolClouds !== false, set: (v) => (CONFIG.satelliteVolClouds = v) },
  satelliteSunsetLook: { values: onOff, get: () => CONFIG.satelliteSunsetLook !== false, set: (v) => (CONFIG.satelliteSunsetLook = v) },
  satelliteSpeed: { values: [["Time-Lapse", "timelapse"], ["Real Time", "real"], ["Fast Time-Lapse", "fast"]],
    get: () => CONFIG.satelliteSpeed ?? "timelapse", set: (v) => (CONFIG.satelliteSpeed = v) },
  // Jingles: the sounds of turning and zooming the globe (100 % = as boosted in lwp_files.js).
  jingles: { values: [["Off", 0], ["15%", 0.15], ["25%", 0.25], ["50%", 0.5], ["100%", 1], ["150%", 1.5], ["200%", 2]],
    get: () => CONFIG.sfx.jingles ?? 1, set: (v) => (CONFIG.sfx.jingles = v) },
};

// The menu tree. The original's entries first (Settings > Weather >
// Temperature, Music), then the new settings as entries of the same kind.
const choice = (label, id) => ({ label, id });
const MENU = { label: "", items: [
  { label: "Settings", items: [
    { label: "Your Name", action: "name" },
    { label: "Touch Controls", items: [choice("Show Touch Controls", "touchControls")] },
    { label: "Theatre Mode", items: [choice("Theatre Mode", "theatre")] },
    // Satellite Mode: ride along with the ISS (Circle / Esc comes back to the globe).
    { label: "Satellite Mode", items: [{ label: "Start / Stop", action: "satellite" }, choice("Speed", "satelliteSpeed"), choice("Follow the Sun", "satelliteSunsetLook"), choice("Volumetric Clouds", "satelliteVolClouds")] },
    { label: "Weather", items: [choice("Temperature", "units")] },
    { label: "Units & Display", items: [choice("Temperature", "units"), choice("Distance", "distance"),
      choice("Clock", "clock"), choice("Text Size", "textSize")] },
    { label: "Live Events", items: [choice("Earthquakes", "quakes"), choice("Earthquake Size", "quakeMin"),
      choice("Storms", "storms"), choice("Controller Rumble", "rumble")] },
    { label: "Globe", items: [choice("City Names", "labels"), choice("Clouds", "clouds"),
      choice("City Light Twinkle", "twinkle"), choice("Old Look", "oldLook"), choice("City Close-Up", "cityCloseUp"), choice("Tilt-Shift", "tiltShift"), choice("Lens Flare", "lensFlare"),
      choice("Aurora", "aurora"), choice("Ocean Glitter", "glitter"), choice("Storm Lightning", "lightning"),
      choice("Hurricane Spirals", "stormSpirals"), choice("Volcanoes", "volcanoes"), choice("Headlines", "news")] },
    // Every volume on one page.
    { label: "Sound", items: [choice("Music Volume", "volume"), choice("Background Sound", "waveVolume"),
      choice("Jingles", "jingles"), choice("Sound Effects", "sfx"), choice("Sound Effects Volume", "sfxVolume")] },
  ] },
  // The original's Music level: Select Track, Select by Mood, then the source
  // choices, as the old port has them.
  { label: "Music", id: "music",
    pre: [{ label: "Select Track", songs: "tracks" }, { label: "Select by Mood", songs: "moods" },
          { label: "My Music", songs: "mine" }],
    hide: ["mine", "all"],               // My Music is the list above; "all" is the default loop
    extra: [] },                          // (the volumes are under Settings > Sound)
] };

// Apply what was saved before anything else reads CONFIG.
let saved = {};
try { saved = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch { saved = {}; }
// Before My Music read the Desktop folder, "mine" meant every track: that is "all" now.
if (saved.music === "mine" && !saved.musicV2) saved.music = "all";
for (const [id, s] of Object.entries(SETTINGS)) if (id in saved && s.values.some(([, v]) => v === saved[id])) s.set(saved[id]);
const save = () => {
  try { localStorage.setItem(KEY, JSON.stringify({ ...Object.fromEntries(Object.entries(SETTINGS).map(([id, s]) => [id, s.get()])), musicV2: true })); } catch {}
};

// A level is a list of rows. A plain entry opens the next level; a choice
// opens its values as a radio list (the current value marked); the Music
// entry is itself a radio list (My Music / Disabled) plus its extras.
// The old port's Music lists: Select Track = ThemeSong01-05 under their
// ui.xml names; Select by Mood = Energetic, Calm, Dramatic, Upbeat,
// Electronic -> ThemeSong03, 02, 05, 01, 04 (LWP_MOOD_FILES). Here the theme
// songs are app/music/Music1-6.mp3 (byte-identical copies).
const TRACKS = [["Dawn's Theme", "music/Music1.mp3"], ["Daylight Theme", "music/Music2.mp3"],
  ["Moonlight Theme", "music/Music3.mp3"], ["Afterlight Theme", "music/Music4.mp3"], ["Starlight Theme", "music/Music5.mp3"]];
const MOODS = [["Energetic", "music/Music3.mp3"], ["Calm", "music/Music2.mp3"], ["Dramatic", "music/Music5.mp3"],
  ["Upbeat", "music/Music1.mp3"], ["Electronic", "music/Music4.mp3"]];
const trackName = (u) => decodeURIComponent(u.split("/").pop()).replace(/\.[a-z0-9]+$/i, "");
// A track's name for the "now playing" note: the theme songs by their old
// names (ThemeSong06 had none in ui.xml), anything else by its file name.
export function trackTitle(u) {
  if (!u) return "";
  const path = new URL(u, location.href).pathname.replace(/^\//, "");
  const t = TRACKS.find(([, f]) => f === path);
  if (t) return t[0];
  if (path === "music/Music6.mp3") return "Theme Song 6";
  return trackName(u);
}
function rowsOf(node) {
  if (node.items) return node.items.map((it) => (it.action ? { label: it.label, action: it.action } : { label: it.label, open: it }));
  if (node.songs === "mine") {        // My Music: Play All My Songs, then the songs (up to 50)
    const m = window.__music, names = m?.mineNames || [];
    if (!names.length) return [{ label: "Put songs in a folder called Music on your Desktop", disabled: true }];
    const playing = () => (CONFIG.music.source === "mine" ? m.currentIndex() : -2);
    return [{ label: "Play All My Songs", radio: true, track: true, pick: () => { m.playMine(-1); CONFIG.music.source = "mine"; save(); }, on: () => false },
      ...names.slice(0, 50).map((label, i) => ({ label, radio: true, track: true,
        pick: () => { m.playMine(i); CONFIG.music.source = "mine"; CONFIG.music.enabled = true; save(); }, on: () => playing() === i }))];
  }
  if (node.songs) {                   // the old port's lists (patch_lwp_menu.py): each plays one theme song
    const list = node.songs === "moods" ? MOODS : TRACKS;
    return list.map(([label, file]) => ({ label, radio: true, track: true,
      pick: () => window.__music?.playUrl?.(file), on: () => window.__music?.current?.() === file }));
  }
  if (node.tracks) {                  // the current playlist; picking one plays it
    const m = window.__music;
    if (CONFIG.music.enabled === false || !m?.list?.length) return [{ label: "Music is currently disabled.", disabled: true }];
    return m.list.map((u, i) => ({ label: trackName(u), radio: true, track: true, pick: () => m.playIndex(i), on: () => m.currentIndex() === i }));
  }
  const s = SETTINGS[node.id];
  const rows = (node.pre || []).map((p) => (p.disabled ? { label: p.label, disabled: true } : { label: p.label, open: p }));
  rows.push(...s.values.filter(([, v]) => !(node.hide || []).includes(v))
    .map(([label, v]) => ({ label, radio: true, pick: () => s.set(v), on: () => s.get() === v })));
  for (const ex of node.extra || []) rows.push({ label: ex.label, open: ex });
  return rows;
}

// ---------------------------------------------------------------- the screen
let el = null, listEl, crumbEl, backLabel, open = false, onChange = () => {}, sound = () => {};
let stack = [];                     // [{ node, rows, cursor }]
let pos = 0;                        // eased list position (menu_decay 0.65)
let raf = 0;
function build() {
  el = document.createElement("div");
  el.className = "lwp-options";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-label", "Options");
  el.innerHTML = `
    <div class="lwp-opt-title" aria-hidden="true">OPTIONS</div>
    <div class="lwp-opt-list"></div>
    <div class="lwp-opt-crumb"></div>
    <div class="lwp-opt-btn lwp-opt-select"><img src="data/ui/osd/cross.png" alt=""><span>Select</span></div>
    <div class="lwp-opt-btn lwp-opt-back"><img src="data/ui/osd/circle.png" alt=""><span>Close</span></div>`;
  listEl = el.querySelector(".lwp-opt-list");
  crumbEl = el.querySelector(".lwp-opt-crumb");
  backLabel = el.querySelector(".lwp-opt-back span");
  el.querySelector(".lwp-opt-select").addEventListener("click", (e) => { e.stopPropagation(); select(); });
  el.querySelector(".lwp-opt-back").addEventListener("click", (e) => { e.stopPropagation(); back(); });
  el.addEventListener("pointerdown", (e) => e.stopPropagation());
  el.addEventListener("wheel", (e) => { e.stopPropagation(); move(Math.sign(e.deltaY)); }, { passive: true });
  document.body.append(el);
}
const top = () => stack[stack.length - 1];
function render() {
  const lv = top();
  // (not "radio": that class is the radio screen's, position: fixed at the top -- it threw the list off-screen)
  listEl.classList.toggle("opt-radio", lv.rows.some((r) => r.radio));
  listEl.replaceChildren(...lv.rows.map((r, i) => {
    const d = document.createElement("div");
    d.className = "lwp-opt-item";
    d.dataset.i = i;
    const t = document.createElement("span");
    t.textContent = r.label;
    t.dataset.text = r.label;           // the reflection repeats the label
    d.append(t);
    if (r.radio && r.on()) d.classList.add("current");
    if (r.disabled) d.classList.add("disabled");
    d.addEventListener("click", (e) => { e.stopPropagation(); if (i === lv.cursor) select(); else { lv.cursor = i; paintFocus(); sound("optMove"); } });
    return d;
  }));
  crumbEl.replaceChildren();
  // The same blinking LIVE badge as the news bar's corner (was the Live
  // Channel logo picture).
  const icon = document.createElement("div");
  icon.className = "lwp-opt-live";
  icon.innerHTML = `<i class="live-dot"></i><b>Live</b>`;
  crumbEl.append(icon);
  for (const lvl of stack.slice(1)) {
    const s = document.createElement("span");
    s.textContent = lvl.node.label;
    crumbEl.append(s);
  }
  backLabel.textContent = stack.length > 1 ? "Back" : "Close";
  pos = lv.cursor;
  paintFocus();
}
function paintFocus() {
  const lv = top();
  [...listEl.children].forEach((d, i) => d.classList.toggle("focus", i === lv.cursor));
  if (!raf) raf = requestAnimationFrame(tick);
}
// The focused entry sits on the screen's centre line; the list eases there.
function tick() {
  raf = 0;
  if (!open) return;
  const lv = top();
  pos += (lv.cursor - pos) * (1 - 0.65);
  if (Math.abs(lv.cursor - pos) < 0.001) pos = lv.cursor;
  // Unfocused entries are menu_spacing (29 px) apart; the focused one has
  // menu_gap_top (24 px) above and menu_gap_bottom (16 px) below it on top of
  // that (measured centre to centre: 50 px above, 49 px below at 720p).
  const sp = 29 / 7.2, gap = 21.5 / 7.2;
  [...listEl.children].forEach((d, i) => {
    const k = i - pos;
    const y = k * sp + Math.sign(k) * Math.min(1, Math.abs(k)) * gap;
    d.style.transform = `translateY(${y.toFixed(3)}vh)`;
  });
  if (pos !== lv.cursor) raf = requestAnimationFrame(tick);
}
function move(d) {
  const lv = top();
  const c = Math.max(0, Math.min(lv.rows.length - 1, lv.cursor + d));
  if (c === lv.cursor) return;
  lv.cursor = c; paintFocus(); sound("optMove");
}
function enter(node) {
  const rows = rowsOf(node);
  let cursor = Math.max(0, rows.findIndex((r) => r.radio && r.on()));
  stack.push({ node, rows, cursor });
  levelChange();
}
// level_duration 0.25 s: the old list fades out as the new one comes in.
function levelChange() {
  listEl.classList.remove("in"); void listEl.offsetWidth; listEl.classList.add("in");
  render();
}
function select() {
  const lv = top(), r = lv.rows[lv.cursor];
  if (!r) return;
  if (r.disabled) { sound("error"); return; }
  sound("optSelect");
  if (r.open) { enter(r.open); return; }
  if (r.action) { close(); onChange(`action:${r.action}`); return; }   // e.g. Your Name: the name screen
  if (r.track) {
    r.pick();
    setTimeout(() => [...listEl.children].forEach((d, i) => d.classList.toggle("current", !!lv.rows[i].radio && lv.rows[i].on())), 100);
    return;
  }
  if (r.radio) {
    r.pick(); save();
    onChange(lv.node.id, SETTINGS[lv.node.id].get());
    [...listEl.children].forEach((d, i) => d.classList.toggle("current", !!lv.rows[i].radio && lv.rows[i].on()));
  }
}
function back() {
  if (stack.length > 1) { stack.pop(); sound("optClose"); levelChange(); }
  else close();
}
export function openOptions() {
  if (!el) build();
  open = true;
  stack = [];
  enter(MENU);
  el.classList.add("on");
  sound("optOpen");
}
export function close() {
  if (open) sound("optClose");
  open = false;
  el?.classList.remove("on");
}
export const isOptionsOpen = () => open;
// Step a setting to its next (dir 1) or previous (dir -1) value, as if picked
// in the menu: saved and applied. Returns the new value (the same at either end).
export function stepSetting(id, dir) {
  const s = SETTINGS[id];
  const vals = s.values.map(([, v]) => v);
  let i = vals.indexOf(s.get());
  if (i < 0) i = vals.reduce((best, v, k) => (Math.abs(v - s.get()) < Math.abs(vals[best] - s.get()) ? k : best), 0);
  const j = Math.max(0, Math.min(vals.length - 1, i + dir));
  if (j !== i) { s.set(vals[j]); save(); onChange(id, vals[j]); }
  return vals[j];
}

// onChange(id, value) is called after each change so the app can apply it live.
// sound(name) plays the PS3 port's menu sounds (optOpen, optClose, optMove, optSelect).
export function initOptions(handler, snd) { onChange = handler || onChange; sound = snd || sound; }

// Keyboard: runs before the app's own handlers and swallows keys while open.
// O opens and closes it (Triangle); inside, Esc / Backspace go back a level
// (closing at the top, as Circle), Enter selects (Cross).
const OPEN_KEYS = ["KeyO"];                        // Triangle
window.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  if (!open) {
    if (OPEN_KEYS.includes(e.code) && document.body.dataset.started === "1") { e.preventDefault(); e.stopImmediatePropagation(); openOptions(); }
    return;
  }
  if (e.key === "F11") return;                       // fullscreen still works
  e.preventDefault(); e.stopImmediatePropagation();
  if (e.repeat && !/Arrow/.test(e.code)) return;
  switch (e.code) {
    case "ArrowUp": case "KeyW": case "Numpad8": move(-1); break;
    case "ArrowDown": case "KeyS": case "Numpad2": move(1); break;
    case "ArrowRight": case "KeyD": case "Enter": case "NumpadEnter": case "Space": select(); break;   // Cross
    case "ArrowLeft": case "KeyA": case "Escape": case "Backspace": back(); break;                  // Circle
    case "KeyO": close(); break;                                                                    // Triangle
  }
}, true);
window.addEventListener("keyup", (e) => { if (open) e.stopImmediatePropagation(); }, true);

// Gamepad: the app calls this each frame with the pad and its edge helper.
// Returns true while the menu has the pad, so the globe ignores it.
export const optionsIsOpen = () => open;
export function optionsPad(gp, edge) {
  const b = (i) => !!gp.buttons[i]?.pressed, ax = gp.axes;
  const toggle = edge("opt-tri", b(3));                 // Triangle only (START does nothing)
  if (!open) { if (toggle) openOptions(); return toggle > 0; }
  if (toggle) { close(); return true; }
  if (edge("opt-up", b(12) || ax[1] < -0.6)) move(-1);
  if (edge("opt-down", b(13) || ax[1] > 0.6)) move(1);
  if (edge("opt-right", b(15) || ax[0] > 0.6)) select();
  if (edge("opt-left", b(14) || ax[0] < -0.6)) back();
  if (edge("opt-cross", b(0))) select();
  if (edge("opt-circle", b(1))) back();
  return true;
}
