import * as THREE from "./vendor/three.module.min.js";
import { CONFIG } from "./config.js";
import { initOptions, optionsPad, optionsIsOpen, openOptions, stepSetting, trackTitle } from "./options.js";   // applies saved options to CONFIG
import { subsolarPoint, latLonToVec3 } from "./sun.js";
import { WeatherService } from "./weather.js";
import { weatherIcon, weatherLabel, twcIcon } from "./icons.js";
import { startMusic, startWave } from "./music.js";
import { Intro } from "./intro.js";
import { createLensFlare, createAurora, createLightning, fetchKp } from "./effects.js";
import { createMoon, createStormSpirals, createVolcanoes } from "./effects_world.js";
import { radio } from "./radio.js";
import { createSatellite, createSatDetail, createVolClouds, SAT_SPEEDS } from "./satellite.js";
import { CityCloseUp, NIGHT_K as CU_NIGHT_K, CU_GRADE, CU_GLITTER, CU_SEA, keepCloseUpProgram, prefetchAll as cuPrefetchAll } from "./closeup_city.js";   // the city close-ups
import { askName, savedName } from "./name.js";
import { MOTION, FPS } from "./motion.js";
import * as live from "./live.js";

import { CITIES, formatPs3Clock } from "./cities.js";
import {
  loadWlopConf,
  loadCityInfoHeader,
  loadCityClockTxt,
  loadDefaultCityInfoXml,
  SoundEffectBank,
} from "./lwp_files.js";

const sfx = new SoundEffectBank();
// The PS3 port's sound effect slots (data/soundeffect.xml).
const SFX = { optOpen: 0, optClose: 1, optMove: 2, optSelect: 3, zoomIn: 4, zoomOut: 5, rotate: 6, cityChange: 7, view: 8, error: 9 };
const sound = (name) => { if (CONFIG.sfx?.enabled !== false) { sfx.volume = CONFIG.sfx?.volume ?? 0.55; sfx.play(SFX[name]); } };
// Zoom loops play while zoom input is held, and stop shortly after it ends.
const zoomSfx = { dir: 0, until: 0 };
function zoomSound(dir, ms = 150) { zoomSfx.dir = dir; zoomSfx.until = performance.now() + ms; }
function tickZoomSound(now) {
  const want = now < zoomSfx.until && (CONFIG.sfx?.jingles ?? 1) > 0 ? zoomSfx.dir : 0;
  if (want === tickZoomSound.cur) return;
  if (tickZoomSound.cur > 0) sfx.stop(SFX.zoomOut); else if (tickZoomSound.cur < 0) sfx.stop(SFX.zoomIn);
  if (want) { jingleLevel(); sfx.play(want > 0 ? SFX.zoomOut : SFX.zoomIn); }
  tickZoomSound.cur = want;
}
// The jingles (the turning and zooming loops) have their own volume
// (Options > Settings > Sound > Jingles), apart from the menu sounds'.
function jingleLevel() {
  for (const n of [SFX.zoomIn, SFX.zoomOut, SFX.rotate]) { const s = sfx.slots.get(n); if (s) s.audio.volume = 0.55; }
  sfx.setJingles(CONFIG.sfx?.jingles ?? 1);
}
// Slot 6 (earth_rotate.wav, a loop): plays while the globe is turned by hand
// -- arrow keys / held arrow buttons, the right stick, or a pointer drag --
// and stops shortly after the input ends, like the zoom loops.
const rotateSfx = { until: 0 };
function rotateSound(ms = 150) { rotateSfx.until = performance.now() + ms; }
function tickRotateSound(now) {
  const want = now < rotateSfx.until && (CONFIG.sfx?.jingles ?? 1) > 0;
  if (want === !!tickRotateSound.cur) return;
  if (want) { jingleLevel(); sfx.play(SFX.rotate); }
  else sfx.stop(SFX.rotate);
  tickRotateSound.cur = want;
}

const $ = (id) => document.getElementById(id);
const RAD = Math.PI / 180;
const v3 = (lat, lon, r = 1) => new THREE.Vector3(...latLonToVec3(lat, lon, r));

// ---------------------------------------------------------------- renderer
const canvas = $("globe");
// Multisampling only on the 1440p path (a strong GPU): on the 1080p path for
// smaller GPUs it cost a quarter of the frame rate (Intel UHD: 85 -> 106 fps)
// for little gain, since the atmosphere's glow already softens the Earth's
// edge. The old port used no multisampling at all. ?aa=0 / ?aa=1 overrides.
const AA_PARAM = new URLSearchParams(location.search).get("aa");
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true,
  antialias: AA_PARAM ? AA_PARAM !== "0" : (+new URLSearchParams(location.search).get("rs") || 1440) >= 1440 });
// The old port's pipeline (LWP-PC RSX_SCALE=auto): the globe is drawn at a
// fixed size and scaled to the window -- 2560x1440 on a GPU with 3 GB or more
// of its own memory, 1920x1080 on anything smaller -- and held to 60 fps.
// The shell picks the size the same way (shell/Gpu.cs) and passes ?rs=.
const PAGE_PARAMS = new URLSearchParams(location.search);
const INTERNAL_LINES = [720, 1080, 1440, 2160].includes(+PAGE_PARAMS.get("rs")) ? +PAGE_PARAMS.get("rs") : 1440;
// With the old look on, a weaker GPU (the 1080 path) draws the globe at 900
// lines: the look's glow and softness need two more full-screen passes,
// which on integrated graphics (Intel UHD) cost ~6 ms a frame -- enough to
// drop below 60 fps. The look is soft anyway, so the smaller picture does
// not show; Old Look off gives the full 1080 back.
const OLD_LOOK_WEAK_LINES = 900;
const renderLines = () => (INTERNAL_LINES <= 1080 && +(CONFIG.oldLook ?? 1) > 0) ? Math.min(INTERNAL_LINES, OLD_LOOK_WEAK_LINES) : INTERNAL_LINES;
const renderScale = () => renderLines() / window.innerHeight;
// Frame rate: one frame per display refresh (60 on a 60 Hz TV, 144 on a
// 144 Hz panel); all motion is timed in seconds, so it looks the same at any
// rate. config.js maxFps (or ?fps=60) caps it, e.g. to the old port's 60.
const capFps = +(PAGE_PARAMS.get("fps") || CONFIG.maxFps || 0);
const FPS_CAP = capFps >= 30 ? 1000 / capFps : 0;
renderer.setPixelRatio(renderScale());
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(MOTION.fovY ?? 45, 1, 0.1, 2000);
let spaceUniforms = null;

// The globe sits right of the city card; centred when the card is turned off.
const CARD_ON = CONFIG.showCityCard !== false;
const VIEW_SHIFT = CARD_ON ? 0.12 : 0;
let viewShift = VIEW_SHIFT; // fraction of width the globe is nudged right (0 during the opening)
// Opening framing, recorded from the LWP-PC port (frame capture of its
// vertex constants): the camera holds still at 36 N 0 E, 1.65 Earth radii,
// looking at the centre (the Earth centred in frame, north up, 45-degree
// lens) while the logo and the Earth fade in; autopilot_timeout (10 s after
// the start) later the first flight leaves for the first city.
// The opening view and hold, measured on the owner's recording of the old
// port: the camera holds still and leaves for the first flight 3.65 s after
// the splash cuts away; radius 1.70 matches the spacing of the city labels.
//
// The turn itself, read from the old port's code (fwWorld 0x02CF3450, the
// opening sequence, and 0x02CF56A0, the camera animation; values from
// data/world/layout.xml): at earth_anim_start (frame 20) the camera is put at
// 36 N, (home longitude + 60), cam_radius_min 1.4, with the view tilted
// (glRotate -28.8 deg about x, +14.4 deg about y: 0.08 and -0.04 turns x -360),
// and over earth_anim_finish - earth_anim_start = 120 frames it eases to
// 36 N, home longitude, browser_radius_min 1.65, tilt 0, by
// s = sin((1 - framesLeft / 120) x pi/2). The home longitude is the console's
// time zone x 0.25 deg/min; the old port reports UTC, so 0 E. The Earth fades
// in as ((frame - 20) / 60)^3 (powf) over frames 20-80.
const OPENING = {
  lat: 36.0, lng: 0.0, radius: 1.65, firstDepartSeconds: 3.65,
  anim: { start: 20, finish: 140, fromLngOffset: 60, fromRadius: 1.4, pitchDeg: -28.8, yawDeg: 14.4 },
};
// Camera for opening frame fr (60 fps frames since the opening began).
function openingPose(fr) {
  const A = OPENING.anim, N = A.finish - A.start;
  const left = clamp(A.finish - fr, 0, N);
  const s = Math.sin((1 - left / N) * Math.PI / 2);
  return {
    lat: OPENING.lat,
    lng: OPENING.lng + A.fromLngOffset * (1 - s),
    r: A.fromRadius + (OPENING.radius - A.fromRadius) * s,
    pitch: A.pitchDeg * RAD * (1 - s),     // view-space glRotate about x
    yaw: A.yawDeg * RAD * (1 - s),         // then about y
  };
}
function setViewShift(f) {
  if (Math.abs(f - viewShift) < 1e-4) return;
  viewShift = f;
  resize();
}
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setPixelRatio(renderScale());
  renderer.setSize(w, h, false);
  // gl_FragCoord is in drawing-buffer pixels, so the stars get those (with CSS
  // pixels they were scaled wrong whenever Windows scaling is above 100 %).
  const db = renderer.getDrawingBufferSize(new THREE.Vector2());
  spaceUniforms?.resolution.value.set(db.x, db.y);
  camera.aspect = w / h;
  // Nudge the globe to the right so the city card on the left never covers it.
  camera.setViewOffset(w, h, -w * viewShift, 0, w, h);
  camera.updateProjectionMatrix();
}
window.addEventListener("resize", resize);
resize();

// ---------------------------------------------------------------- textures
const loader = new THREE.TextureLoader();

// The old port's DXT1 .dds files, uploaded to the GPU still compressed (as the
// PS3 / old port did): no PNG round trip, no colour conversion, no mipmaps
// (the files have none). Two 4096x4096 halves (west, east) are joined into one
// 8192x4096 texture by interleaving their rows of 4x4 blocks.
// tools/prep_dds.py joins the two halves (west, east) into one 8192x4096
// texture and flips it for WebGL once, ahead of time (the page used to do it
// at every start: up to 0.9 s with the page frozen). File: a 16-byte header
// ("DXT1", width, height) and the blocks.
async function loadDXT1(url) {
  const b = await (await fetch(url)).arrayBuffer();
  const dv = new DataView(b);
  if (dv.getUint32(0, true) !== 0x31545844) throw new Error("not a DXT1 file: " + url);
  const w = dv.getUint32(4, true), h = dv.getUint32(8, true);
  const data = new Uint8Array(b, 16, (w / 4) * (h / 4) * 8);
  const t = new THREE.CompressedTexture([{ data, width: w, height: h }], w, h, THREE.RGB_S3TC_DXT1_Format);
  t.minFilter = THREE.LinearFilter; t.magFilter = THREE.LinearFilter; t.generateMipmaps = false;
  t.wrapS = THREE.RepeatWrapping; t.colorSpace = THREE.NoColorSpace;
  t.flipY = false;                                  // flipped by prep_dds.py
  t.needsUpdate = true;
  return t;
}
const S3TC = !!renderer.extensions.get("WEBGL_compressed_texture_s3tc");
const maxAniso = renderer.capabilities.getMaxAnisotropy();
// The cloud map as the old port bound it (captured texture state: format
// 0xA1 = B8, one 8-bit channel, linear layout, 2048x1024): raw values (no
// sRGB decode), sampled through .x by the ground program, wrapping east-west,
// and with no mipmaps (a linear-layout RSX texture has one level).
function setupCloudTex(t) {
  t.colorSpace = THREE.NoColorSpace;
  t.wrapS = THREE.RepeatWrapping;
  t.generateMipmaps = false;
  t.minFilter = THREE.LinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.anisotropy = 1;
  t.needsUpdate = true;
  return t;
}
// Images are decoded off the main thread (ImageBitmap) and uploaded with
// renderer.initTexture before they are first drawn (see boot), so a 15 MB
// day map no longer freezes the screen for half a second on its first frame.
const bitmapLoader = new THREE.ImageBitmapLoader();
bitmapLoader.setOptions({ imageOrientation: "flipY", premultiplyAlpha: "none" });
function loadTex(url) {
  return new Promise((resolve, reject) => bitmapLoader.load(url, (bmp) => {
    const t = new THREE.Texture(bmp);
    t.flipY = false;                                  // flipped while decoding
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = maxAniso;
    t.needsUpdate = true;
    t.addEventListener("dispose", () => bmp.close?.());
    resolve(t);
  }, undefined, reject));
}

async function dayMapUrl(month) {
  // The PC port's NASA Earth: Blue Marble for this month (port-day-MM.png).
  return `assets/earth/port-day-${String(month).padStart(2, "0")}.png`;
}

// ---------------------------------------------------------------- earth
// The old port shows its night lights softer and dimmer than the texture
// alone gives: it draws the globe at 1280x720 and composites a blurred bloom
// copy. Rather than rebuild that pipeline, the lights are read with this mip
// bias (blur) and gain, fitted to the old port's screen at its opening view
// (central Spain, 1080p: light coverage, percentiles and mean within ~4 %).
const NIGHT_LOOK = { blur: 0, gain: 1 };
// The globe's night lights in high definition (2026-11-17, the owner found the
// old map's lights "blurry splotches of paint"): NASA's Black Marble 2016 at
// 16384 x 8192 (about 2.4 km a pixel, no glow baked in), made by
// tools/make_night_map.py. Its lit pixels are about 1/1.55 of the old map's
// (which had the glow added), hence the gain.
const NIGHT_HD_GAIN = 1.55;
async function loadNightHD() {
  try {
    if (renderer.capabilities.maxTextureSize < 16384) return null;
    const r = await fetch("assets/earth/night8k.r8");
    if (!r.ok) return null;
    const buf = await r.arrayBuffer();
    const head = new DataView(buf, 0, 16);
    if (String.fromCharCode(...new Uint8Array(buf, 0, 8)) !== "LAUNIGHT") return null;
    const w = head.getUint32(8, true), h = head.getUint32(12, true);
    const t = new THREE.DataTexture(new Uint8Array(buf, 16, w * h), w, h, THREE.RedFormat, THREE.UnsignedByteType);
    t.flipY = false;                              // the file's rows run south to north already
    t.unpackAlignment = 1;
    t.generateMipmaps = true;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.wrapS = THREE.RepeatWrapping;
    t.anisotropy = Math.min(8, maxAniso);
    t.needsUpdate = true;
    return t;
  } catch (e) { console.warn("HD night lights:", e); return null; }
}          // none: the old port's look comes from its 2560x1440 rendering (above)
// The original twinkles the lights (a 3D noise that changes over a 6.7 s
// cycle). Off by default at the owner's request (it read as TV static);
// Options > Settings > Globe > City Light Twinkle turns it back on. When off,
// the noise stays, frozen at its mid phase, so the lights keep the same look
// and brightness.
const NIGHT_TWINKLE = () => CONFIG.nightTwinkle === true;
// The Earth and its atmosphere use Life with PlayStation's own fragment
// programs (shaders/ground.frag and sky.frag: worldGroundFromSpaceFP and
// worldSkyFromSpaceFP from data/cg/world.cgelf, translated instruction for
// instruction). Sean O'Neil's atmospheric scattering, with the values fwWorld
// sets: outer radius 1.05, wavelengths 650/570/475 nm, Kr 0.0025, Km 0.0124,
// ESun 15, Rayleigh scale depth 0.06, Mie g -0.99, and the ocean glint
// (Fresnel 0.0204, shininess 64, specular 0.84/0.8/0.42, light 10).
const u4 = (x, y = 0, z = 0, w = 0) => ({ value: new THREE.Vector4(x, y, z, w) });
const earthUniforms = {
  ColorMap: { value: null }, NightMap: { value: null }, CloudMap: { value: null },
  SpecularMap: { value: null }, NoiseMap: { value: null }, NoiseVol: { value: null },
  U_PInvWavelength: u4(5.602046, 9.473285, 19.6438),
  U_PInvWavelengthKr4PIplusKm4PI: u4(0.3318164, 0.453435, 0.7729512),
  U_PKrESun: u4(0.03749963), U_PKmESun: u4(0.1859981),
  U_PScale: u4(20), U_PRayleighScaleDepth: u4(0.06), U_PScaleOverRayleighScaleDepth: u4(333.3333),
  U_PointToLight: u4(1, 0, 0),          // unit vector towards the sun (updateSun)
  U_g: u4(-0.99), U_g2: u4(0.9801),
  U_LightColor0: u4(10, 10, 10), U_Shininess: u4(64), U_OceanFresnel0: u4(0.02040466),
  U_Specular: u4(0.84, 0.8, 0.42),
  U_camera: u4(0, 0, 3, 9),             // camera position, and its length squared
  U_cloud: u4(0, 0),                    // x: cloud map turn (u), y: cloud opacity
  U_slice: u4(0, 0, 1, 1),              // the whole map (the console draws it in tiles)
  U_nightLook: u4(NIGHT_LOOK.blur, NIGHT_LOOK.gain, 0),   // z: twinkle on (1) / off (0)
  // The night lights' colour: the warm orange the city close-ups use (their
  // linear (1, 0.36, 0.07) shown on screen), at about the old white's brightness.
  U_lightTint: u4(1.25, 0.80, 0.37),
  U_glitter: u4(0, 1),
  U_moon: u4(0, 0, 0, 0),                // the Moon: direction xyz, its light w (effects_world.js)
  U_flashA: { value: Array.from({ length: 16 }, () => new THREE.Vector4()) },   // lightning strokes (effects.js createLightning)
  U_flashB: { value: Array.from({ length: 16 }, () => new THREE.Vector4()) },                  // sun glitter on the sea: x seconds, y strength (Options > Globe > Ocean Glitter)
  U_noise: u4(64, 0),                   // night-light twinkle: noise_base + noise_max * phase
  U_color: u4(1, 1, 1, 1),              // fade (the opening's "Earth fades in")
  sunDir: { value: new THREE.Vector3(1, 0, 0) },
  globeFade: { value: 1 },
};
earthUniforms.U_PointToLight.value = earthUniforms.sunDir.value;   // same vector object (w stays 0)

// worldGroundFromSpaceVP (data/cg/world.cgelf .text0004, 75 instructions),
// translated from its microcode. Constants from .const / the capture
// (rsxcap/frame_00 op002): c466 = (-1, 0, 0.999999, 1), c465 = (2, -0.001),
// c467 = PointToLight. It builds the Moller-Hughes rotation that takes the
// vertex normal to (0,0,-1) (fast path, or the reflection path within 1e-6 of
// that axis) and outputs rows 0 and 1 of it dotted with the light, times
// -0.001, as the cloud-shadow offset (TEXCOORD5). The console's model space is
// this app's turned 180 degrees about y (x = -cos(lat)cos(lon),
// z = cos(lat)sin(lon); checked against the Riyadh capture's camera), so the
// normal and the light are taken into that space first.
const groundVertex = /* glsl */ `
  uniform vec4 U_PointToLight;
  varying highp vec4 tc0, tc4, tc5;
  void main() {
    vec3 n = vec3(-position.x, position.y, -position.z);   // console model space
    vec3 L = vec3(-U_PointToLight.x, U_PointToLight.y, -U_PointToLight.z);
    const vec3 t = vec3(0.0, 0.0, -1.0);
    float e = dot(n, t);
    vec3 row0, row1;
    if (abs(e) > 0.999999) {
      // Reflection path: x = the axis of n's smallest component.
      vec3 a = abs(n);
      vec3 x = a.x < a.y ? (a.x < a.z ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 0.0, 1.0))
                         : (a.y < a.z ? vec3(0.0, 1.0, 0.0) : vec3(0.0, 0.0, 1.0));
      vec3 u = x - n, v = x - t;
      float c1 = 2.0 / dot(u, u), c2 = 2.0 / dot(v, v), c3 = c1 * c2 * dot(u, v);
      row0 = vec3(1.0, 0.0, 0.0) - c1 * u.x * u - c2 * v.x * v + c3 * v.x * u;
      row1 = vec3(0.0, 1.0, 0.0) - c1 * u.y * u - c2 * v.y * v + c3 * v.y * u;
    } else {
      vec3 v = cross(n, t);
      float h = 1.0 / (1.0 + e);
      row0 = vec3(e + h * v.x * v.x, h * v.x * v.y - v.z, h * v.x * v.z + v.y);
      row1 = vec3(h * v.x * v.y + v.z, e + h * v.y * v.y, h * v.y * v.z - v.x);
    }
    tc0 = vec4(uv, 0.0, 1.0);
    tc4 = vec4(position, 1.0);
    tc5 = vec4(vec2(dot(row0, L), dot(row1, L)) * -0.001, 0.0, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;
// worldSkyFromSpaceVP (world.cgelf .text0002, 26 instructions), translated
// from its microcode. c466 = (1.05, 2, 1.1025, 4), c465 = (0, 0.5, 0.2),
// c467 = camera (xyz, and |camera|^2 in w). The shell is the unit sphere
// scaled by 1.05 (here the 1.05 sphere itself). Outputs: TEXCOORD1 = where
// the view ray enters the atmosphere (w = 1.05), TEXCOORD2 = the ray
// direction and 0.2 x its length through the shell (one of five samples),
// TEXCOORD3 = camera - point (unnormalised).
const skyVertex = /* glsl */ `
  uniform vec4 U_camera;
  varying highp vec4 tc1, tc2, tc3;
  void main() {
    vec3 p = position;
    vec3 dir = normalize(p - U_camera.xyz);
    float b = dot(dir, U_camera.xyz) * 2.0;
    float c4 = (U_camera.w - 1.1025) * 4.0;
    float s = sqrt(max(b * b - c4, 0.0));
    float near = (-b - s) * 0.5;
    tc1 = vec4(dir * near + U_camera.xyz, 1.05);
    tc2 = vec4(dir, s * 0.2);
    tc3 = vec4(U_camera.xyz - p, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;
const globeShaders = Promise.all(["ground","sky"].map(async (name) => {
  const res = await fetch(`shaders/${name}.frag`);
  if (!res.ok) throw new Error(`Could not load the ${name} shader`);
  return res.text();
}));
const earthMat = new THREE.ShaderMaterial({ uniforms: earthUniforms, vertexShader: groundVertex });
// (512 x 384: seen edge-on from Satellite Mode's height, the old 128 x 96 sphere's
// straight facets showed along the horizon as a kinked, uneven edge)
const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 512, 384), earthMat);
scene.add(earth);
// The atmosphere shell (radius 1.05, the program's outer radius): its far
// side, added over the Earth and space, as on the console.
const atmoMat = new THREE.ShaderMaterial({
  uniforms: earthUniforms,
  vertexShader: skyVertex,
  side: THREE.BackSide, transparent: true, depthWrite: false,
  // Additive, as before (colour: src * src alpha + dst), but leaving the
  // picture's alpha alone: the sky program writes alpha >= 1 over the whole
  // shell, which made the ring round the globe count as globe in the old
  // look's composite, hiding the stars there behind a black border.
  blending: THREE.CustomBlending, blendEquation: THREE.AddEquation,
  blendSrc: THREE.SrcAlphaFactor, blendDst: THREE.OneFactor,
  blendEquationAlpha: THREE.AddEquation, blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneFactor,
});
// (finely divided: the sky program works out its colours at the corners and
// blends across each facet, which showed as blotchy steps along the blue haze up close)
const atmoMesh = new THREE.Mesh(new THREE.SphereGeometry(1.05, 480, 240), atmoMat);
scene.add(atmoMesh);


// ---------------------------------------------------------------- stars
function makeStars(count = 5000) {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const size = new Float32Array(count);
  const phase = new Float32Array(count);
  const speed = new Float32Array(count);
  const flicker = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2;
    const r = 600, s = Math.sqrt(1 - u * u);
    pos.set([r * s * Math.cos(a), r * u, r * s * Math.sin(a)], i * 3);
    const warm = Math.random();
    const b = 0.78 + Math.pow(Math.random(), 3) * 0.42;
    col.set([(0.75 + 0.25 * warm) * b, (0.82 + 0.10 * warm) * b, (1.0 - 0.20 * warm) * b], i * 3);
    size[i] = 0.68 + Math.pow(Math.random(), 4) * 1.18;
    phase[i] = Math.random() * Math.PI * 2;
    speed[i] = 0.6 + Math.random() * 2.6;
    flicker[i] = 0.18 + Math.random() * 0.22;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("color", new THREE.BufferAttribute(col, 3));
  g.setAttribute("size", new THREE.BufferAttribute(size, 1));
  g.setAttribute("phase", new THREE.BufferAttribute(phase, 1));
  g.setAttribute("speed", new THREE.BufferAttribute(speed, 1));
  g.setAttribute("flicker", new THREE.BufferAttribute(flicker, 1));
  const m = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 }, pixelRatio: { value: renderer.getPixelRatio() } },
    vertexShader: /* glsl */ `
      attribute float size; attribute float phase; attribute float speed; attribute float flicker; attribute vec3 color;
      uniform float time; uniform float pixelRatio;
      varying vec3 vColor; varying float vTw;
      void main() {
        vColor = color;
        float slowTwinkle = sin(time * speed + phase);
        float fastFlicker = sin(time * (speed * 3.17) + phase * 2.31);
        vTw = 0.92 + flicker * (0.72 * slowTwinkle + 0.28 * fastFlicker);
        gl_PointSize = size * pixelRatio;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      varying vec3 vColor; varying float vTw;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(vColor * vTw * a * 1.65, a);
      }`,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    toneMapped: false,
  });
  return new THREE.Points(g, m);
}
const stars = makeStars();
stars.renderOrder = -900;
scene.add(stars);

// Source-style Milky Way: a noisy diagonal band, dark dust lane and warm bulge.
const milkyWayMat = new THREE.ShaderMaterial({
  uniforms: { time: { value: 0 } },
  vertexShader: `varying vec3 vDir; void main(){vDir=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
  fragmentShader: `
    varying vec3 vDir; uniform float time;
    float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
    float noise2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.0),f.x),f.y);}
    float fbm(vec2 p){float v=0.0,a=0.52;for(int i=0;i<5;i++){v+=a*noise2(p);p=mat2(1.62,1.18,-1.18,1.62)*p+17.1;a*=0.5;}return v;}
    void main(){
      vec3 d=normalize(vDir);vec2 uv=vec2(atan(d.z,d.x)/6.2831853+0.5,asin(clamp(d.y,-1.0,1.0))/3.14159265+0.5);
      vec2 q=uv*vec2(2.2,1.0),bd=normalize(vec2(1.0,0.42)),bn=vec2(-bd.y,bd.x);
      float along=dot(q-vec2(1.1,0.5),bd),across=dot(q-vec2(1.1,0.5),bn),n=fbm(q*5.5),width=0.15+0.05*n;
      float band=exp(-pow(abs(across)/width,2.0)),structure=mix(0.32,1.0,fbm(q*13.0+3.7));
      float dust=exp(-pow(abs(across+0.010+0.018*noise2(q*18.0))/0.030,2.0));
      float bulge=exp(-along*along/0.18-across*across/0.035);
      vec3 color=(vec3(0.32,0.38,0.56)*band*structure+vec3(0.46,0.36,0.30)*bulge*0.50)*(1.0-0.70*dust)*0.36;
      gl_FragColor=vec4(color,clamp(length(color)*2.8,0.0,0.46));
    }`,
  side: THREE.BackSide, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, toneMapped: false,
});
const milkyWay = new THREE.Mesh(new THREE.SphereGeometry(520,64,32),milkyWayMat);
milkyWay.rotation.set(0.38,-0.72,0.18);milkyWay.renderOrder=-1000;scene.add(milkyWay);

// Exact LWP-PC final-composite space pass. The source renderer creates both
// stars and the Milky Way in 1280x720 screen space, after the 3D globe pass.
stars.visible = false;
milkyWay.visible = false;
spaceUniforms = { time: {value: 0}, resolution: {value: renderer.getDrawingBufferSize(new THREE.Vector2())} };
const spacePass = new THREE.Mesh(new THREE.PlaneGeometry(2,2), new THREE.ShaderMaterial({
  uniforms: spaceUniforms,
  vertexShader: `void main(){gl_Position=vec4(position.xy,1.0,1.0);}`,
  fragmentShader: `
    uniform float time; uniform vec2 resolution;
    float hsh(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
    float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);float a=hsh(i),b=hsh(i+vec2(1,0)),c=hsh(i+vec2(0,1)),d=hsh(i+vec2(1,1));return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}
    float fbm(vec2 p){float v=0.0,a=0.5;for(int i=0;i<5;i++){v+=a*vn(p);p=p*2.03+17.1;a*=0.5;}return v;}
    vec3 milky(vec2 g){
      vec2 uv=g/720.0,dir=normalize(vec2(1.0,0.42)),nrm=vec2(-dir.y,dir.x),q=uv-vec2(0.10,0.18);
      float along=dot(q,dir),d=dot(q,nrm);
      float wob=(fbm(vec2(along*2.2,3.7))-0.5)*0.10;d+=wob;
      float w=0.15+0.05*fbm(vec2(along*3.1,9.2));float band=exp(-d*d/(w*w));
      float clouds=fbm(uv*5.0+vec2(3.1,7.7)),fine=fbm(uv*14.0+vec2(11.3,1.9));
      float dust=smoothstep(0.42,0.68,fbm(uv*6.5+vec2(5.5,2.2)))*exp(-d*d/(0.055*0.055));
      float bulge=0.55+0.45*exp(-(along-1.05)*(along-1.05)/0.18),core=exp(-d*d/(0.06*0.06));
      float glow=band*(0.30+0.70*clouds)*(0.75+0.5*fine)*(1.0-0.75*dust)*bulge;
      vec3 col=mix(vec3(0.55,0.62,0.88),vec3(1.0,0.86,0.68),core*bulge),o=col*glow*0.22;
      float cell=3.0;vec2 gg=g/cell,id=floor(gg),f=fract(gg);float hh=hsh(id+41.7);
      if(hh>0.975-0.10*band*(0.4+0.6*clouds)*(1.0-dust)){
        vec2 sp=vec2(hsh(id+3.1),hsh(id+8.3))*0.7+0.15;float dd=length(f-sp)*cell;
        o+=mix(vec3(0.8,0.85,1.0),vec3(1.0,0.9,0.8),hsh(id+5.5))*exp(-dd*dd/0.35)*(0.10+0.30*band);
      }
      return band<0.003?vec3(0):o;
    }
    vec3 starLayer(vec2 pos){
      vec3 add=vec3(0);float cells[2];cells[0]=9.0;cells[1]=23.0;
      for(int L=0;L<2;L++){
        float cell=cells[L];vec2 g=pos/cell+float(L)*17.31,id=floor(g),f=fract(g);float hh=hsh(id+float(L)*3.7);
        float threshold=L==0?0.93:0.80;if(hh<threshold)continue;
        vec2 sp=vec2(hsh(id+13.1),hsh(id+71.7))*0.7+0.15;float d=length((f-sp)*cell),r=(L==0?0.65:1.05)*0.5;
        float core=exp(-d*d/(r*r+0.15)),b=(L==0?0.65:1.4)*(0.4+0.6*hsh(id+3.3));
        float speed=0.6+2.6*hsh(id+5.9),ph=6.2832*hsh(id+9.1),tw1=0.5+0.5*sin(time*speed+ph),flick=0.65+0.35*sin(time*(7.0+5.0*hh)+ph*3.0);
        float k=mix(0.25,1.0,tw1*tw1)*mix(1.0,flick,step(0.6,hsh(id+2.2)));
        vec3 col=mix(vec3(0.75,0.82,1.0),vec3(1.0,0.92,0.80),hsh(id+7.7));add+=col*b*k*core;
      }return add;
    }
    uniform sampler2D milkyMap; uniform float milkyBake;
    void main(){
      vec2 guest=vec2(gl_FragCoord.x*1280.0/resolution.x,(resolution.y-gl_FragCoord.y)*720.0/resolution.y);
      if(milkyBake>0.5){gl_FragColor=vec4(milky(guest),1.0);return;}
      gl_FragColor=vec4(texture2D(milkyMap,gl_FragCoord.xy/resolution).rgb+starLayer(guest),1.0);
    }
  `,
  // Drawn after the Earth (renderOrder 1) and depth-tested at the far plane,
  // so it only runs on the pixels the globe leaves showing.
  depthTest:true, depthWrite:false, toneMapped:false,
}));
spacePass.frustumCulled=false;spacePass.renderOrder=1;scene.add(spacePass);
// The Milky Way is fixed to the screen (the old port draws it in 1280x720
// screen space) and does not move, so its 30 noise look-ups a pixel are done
// once per window size into a texture instead of every frame.
spaceUniforms.milkyMap = { value: null };
spaceUniforms.milkyBake = { value: 0 };
let milkyTarget = null;
const milkyScene = new THREE.Scene(), milkyCam = new THREE.Camera();
function bakeMilkyWay() {
  const db = renderer.getDrawingBufferSize(new THREE.Vector2());
  if (milkyTarget && milkyTarget.width === db.x && milkyTarget.height === db.y) return;
  milkyTarget?.dispose();
  milkyTarget = new THREE.WebGLRenderTarget(db.x, db.y, { depthBuffer: false, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
  spaceUniforms.resolution.value.set(db.x, db.y);
  const was = spacePass.parent; milkyScene.add(spacePass);
  spaceUniforms.milkyBake.value = 1;
  spacePass.material.depthTest = false;
  renderer.setRenderTarget(milkyTarget); renderer.render(milkyScene, milkyCam); renderer.setRenderTarget(null);
  spacePass.material.depthTest = true;
  spaceUniforms.milkyBake.value = 0;
  was.add(spacePass);
  spaceUniforms.milkyMap.value = milkyTarget.texture;
}

// ---------------------------------------------------------------- the old look
// The old app's look (config.js oldLook, Options > Settings > Globe > Old
// Look; 1 = like the old app, 0 = off), ported from the old project itself:
// fwWorld's bloom pass (graphics.cgelf bloom_pass_frag / bloomh_pass_frag,
// textureFP, textureLerpFP) as the old PC port ran it, values checked against
// frames captured from the installed old app (rsxcap, 720p: the blur is
// reproduced to 1/255, the mix to 50 % +-2 %):
//   1. the globe is drawn off-screen (fwWorld's 1280x720 scene target);
//   2. textureFP shrinks it to a quarter (320x180): one bilinear tap per pixel;
//   3. bloomh_pass then bloom_pass blur it across and down: 9 taps, weights
//      0.25 / 0.15 / 0.10 / 0.08 / 0.05, one 320x180 texel apart;
//   4. textureLerpFP mixes the globe and the blur half and half
//      (lerp 0.5, colour 1) -- that is the soft, dreamy glow; the PC port
//      sharpens the globe first (_lwp_sharp 0.6 with its edge smoothing);
//   5. the stars are added afterwards, untouched (_lwp_stars), so only the
//      globe and its halo are softened.
// The text's softness is CSS (body.old-look in styles.css).
const post = (() => {
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
  quad.frustumCulled = false;
  const qScene = new THREE.Scene(); qScene.add(quad);
  const qCam = new THREE.Camera();
  const vs = "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";
  const mat = (fs, uniforms) => new THREE.ShaderMaterial({ vertexShader: vs, fragmentShader: fs, uniforms, depthTest: false, depthWrite: false, toneMapped: false });
  // textureFP (colour 1): one bilinear sample per quarter-size pixel.
  const down = mat(`uniform sampler2D t; varying vec2 vUv;
    void main(){ gl_FragColor = vec4(texture2D(t, vUv).rgb, 1.0); }`, { t: { value: null } });
  // bloom_pass_frag / bloomh_pass_frag: 9 taps, `dir` = one 320x180 texel.
  const blur = mat(`uniform sampler2D t; uniform vec2 dir; varying vec2 vUv;
    void main(){
      vec3 c = texture2D(t, vUv).rgb * 0.25;
      c += (texture2D(t, vUv + dir).rgb + texture2D(t, vUv - dir).rgb) * 0.15;
      c += (texture2D(t, vUv + dir * 2.0).rgb + texture2D(t, vUv - dir * 2.0).rgb) * 0.10;
      c += (texture2D(t, vUv + dir * 3.0).rgb + texture2D(t, vUv - dir * 3.0).rgb) * 0.08;
      c += (texture2D(t, vUv + dir * 4.0).rgb + texture2D(t, vUv - dir * 4.0).rgb) * 0.05;
      gl_FragColor = vec4(c, 1.0); }`, { t: { value: null }, dir: { value: new THREE.Vector2() } });
  // textureLerpFP + the port's _lwp_sharp, line for line, then the stars
  // (_lwp_stars): the space pass's own star and Milky Way code, reused.
  const spaceFns = spacePass.material.fragmentShader.split("void main(){")[0];
  const comp = mat(spaceFns + `uniform sampler2D scene, bloom; uniform vec2 d; uniform float lerpK, sharpK, tilt; varying vec2 vUv;
    float L(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
    vec4 S(vec2 uv){ return texture2D(scene, uv); }
    vec4 sharpen(vec2 uv, float k){
      vec4 c = S(uv);
      vec4 n = S(uv + vec2(d.x, 0.0)) + S(uv - vec2(d.x, 0.0)) + S(uv + vec2(0.0, d.y)) + S(uv - vec2(0.0, d.y));
      vec4 sharp = max(c + k * (4.0 * c - n), 0.0);
      float lM = L(c.rgb);
      float lNW = L(S(uv + d * vec2(-1.0, -1.0)).rgb), lNE = L(S(uv + d * vec2(1.0, -1.0)).rgb);
      float lSW = L(S(uv + d * vec2(-1.0, 1.0)).rgb),  lSE = L(S(uv + d * vec2(1.0, 1.0)).rgb);
      float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
      float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
      float range = lMax - lMin;
      if (range < max(0.04, lMax * 0.15)) return sharp;
      vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), (lNW + lSW) - (lNE + lSE));
      float red = max((lNW + lNE + lSW + lSE) * 0.03125, 1.0 / 128.0);
      dir = clamp(dir / (min(abs(dir.x), abs(dir.y)) + red), -8.0, 8.0) * d;
      vec4 a = 0.5 * (S(uv + dir * (1.0 / 3.0 - 0.5)) + S(uv + dir * (2.0 / 3.0 - 0.5)));
      vec4 b = a * 0.5 + 0.25 * (S(uv - dir * 0.5) + S(uv + dir * 0.5));
      float lB = L(b.rgb);
      vec4 aa = (lB < lMin || lB > lMax) ? a : b;
      return mix(sharp, aa, clamp(range * 4.0, 0.0, 1.0));
    }
    void main(){
      vec3 c = mix(sharpen(vUv, sharpK).rgb, texture2D(bloom, vUv).rgb, lerpK);
      // Tilt-shift (the city close-ups): a sharp band across the middle, the
      // top and bottom going softly out of focus, as a tilted lens makes a
      // real city look like a model; colours a touch richer, as in such shots.
      // The blur: the already-blurred bloom picture, spread wider again.
      if (tilt > 0.0) {
        float w = smoothstep(0.10, 0.44, abs(vUv.y - 0.47)) * tilt;
        if (w > 0.0) {
          vec2 r = vec2(d.y / d.x, 1.0) * (0.006 + 0.022 * w);
          vec3 b = texture2D(bloom, vUv).rgb * 0.2;
          for (int i = 0; i < 8; i++) {
            float a = float(i) * 0.785398 + 0.39;
            b += texture2D(bloom, vUv + vec2(cos(a), sin(a)) * r * vec2(d.x / d.y, 1.0)).rgb * 0.1;
          }
          c = mix(c, b, clamp(w * 1.15, 0.0, 1.0));
        }
        float g = dot(c, vec3(0.299, 0.587, 0.114));
        c = max(mix(vec3(g), c, 1.0 + 0.18 * tilt), 0.0);
      }
      // where the globe (alpha 1) and its atmosphere leave space showing
      float space = 1.0 - clamp(S(vUv).a, 0.0, 1.0);
      if (space > 0.0) {
        vec2 guest = vec2(gl_FragCoord.x * 1280.0 / resolution.x, (resolution.y - gl_FragCoord.y) * 720.0 / resolution.y);
        c += (texture2D(milkyMap, gl_FragCoord.xy / resolution).rgb + starLayer(guest)) * space;
      }
      gl_FragColor = vec4(c, 1.0); }`,
    { ...spaceUniforms, scene: { value: null }, bloom: { value: null }, d: { value: new THREE.Vector2() }, lerpK: { value: 0.5 }, sharpK: { value: 0.6 }, tilt: { value: 0 } });
  let w = 0, h = 0, rt = {};
  const small = (x, y) => new THREE.WebGLRenderTarget(Math.max(1, x), Math.max(1, y),
    { depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter });
  function size() {
    const db = renderer.getDrawingBufferSize(new THREE.Vector2());
    if (db.x === w && db.y === h) return;
    w = db.x; h = db.y;
    Object.values(rt).forEach((t) => t.dispose());
    rt = {
      // fwWorld's scene target, multisampled when the screen is (the 1440p path).
      scene: new THREE.WebGLRenderTarget(w, h, { samples: renderer.getContext().getContextAttributes().antialias ? 4 : 0,
        minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter }),
      // the two quarter-size bloom targets (320x180 at 720p)
      a: small(Math.round(w / 4), Math.round(h / 4)), b: small(Math.round(w / 4), Math.round(h / 4)),
    };
    // Draw into it exactly as onto the screen: three.js only applies the
    // screen's colour conversion and tone mapping (used by its own materials,
    // such as sprites) when drawing to the screen or to an XR target, so the
    // globe's target is flagged as one; plain 8-bit storage (like the screen)
    // keeps additive glows blending exactly as they do there.
    rt.scene.isXRRenderTarget = true;
    rt.scene.texture.colorSpace = THREE.SRGBColorSpace;
    rt.scene.texture.internalFormat = "RGBA8";
  }
  function pass(m, out) { quad.material = m; renderer.setRenderTarget(out); renderer.render(qScene, qCam); }
  return {
    // amount: the old look (0 off .. 1); tilt: the close-ups' tilt-shift (0 .. 1),
    // which needs this pass too (with the old look off it runs with no glow).
    render(amount, tilt = 0) {
      if (!(amount > 0) && !(tilt > 0.001)) { renderer.setRenderTarget(null); renderer.render(scene, camera); return; }
      size();
      // fwWorld's scene target holds the globe alone (space stays clear, alpha 0)
      spacePass.visible = false;
      try { renderer.setRenderTarget(rt.scene); renderer.render(scene, camera); } finally { spacePass.visible = true; }
      renderer.autoClear = false;                    // every pass below covers its whole picture: no clearing
      try {
        down.uniforms.t.value = rt.scene.texture; pass(down, rt.a);
        // one 320x180 texel: the old target's size in this one's pixels (h / 4 lines vs 180)
        const step = (h / 4) / 180;
        blur.uniforms.t.value = rt.a.texture; blur.uniforms.dir.value.set(step / rt.a.width, 0); pass(blur, rt.b);
        blur.uniforms.t.value = rt.b.texture; blur.uniforms.dir.value.set(0, step / rt.b.height); pass(blur, rt.a);
        comp.uniforms.scene.value = rt.scene.texture; comp.uniforms.bloom.value = rt.a.texture;
        comp.uniforms.d.value.set(1 / w, 1 / h);
        comp.uniforms.lerpK.value = 0.5 * amount; comp.uniforms.sharpK.value = 0.6 * amount;
        comp.uniforms.tilt.value = tilt;
        pass(comp, null);
      } finally { renderer.autoClear = true; }
    },
  };
})();
const oldLook = () => Math.max(0, Math.min(1, +(CONFIG.oldLook ?? 1)));
// Lens flare when facing the sun, and aurora over the poles (effects.js;
// Options > Settings > Globe > Lens Flare / Aurora).
const flare = createLensFlare(renderer);
const aurora = createAurora(scene, earthUniforms.sunDir);
const lightning = createLightning(earthUniforms.U_flashA.value, earthUniforms.U_flashB.value);
// The real Moon (its own flare: the sun's shape, white, in the Moon's
// colour, no rainbow), hurricane spirals and erupting volcanoes.
const moon = createMoon(scene, earthUniforms.sunDir);
const moonFlare = createLensFlare(renderer, { tint: new THREE.Vector3(0.80, 0.85, 0.95), rainbow: false, disc: 7, beams: 4, beamLen: 0.45, beamWide: 1.21 });   // 4 beams, shorter and wider (owner)
const spirals = createStormSpirals(scene, earthUniforms.sunDir);
const volcanoes = createVolcanoes(scene, earthUniforms.sunDir, renderer);
const sat = createSatellite(scene, earthUniforms.sunDir.value);   // Satellite Mode (satellite.js)
const satDetail = createSatDetail(renderer, earthUniforms, CONFIG.cityCloseUpTiles.day, CONFIG.cityCloseUpTiles.night);   // its sharp land
const volClouds = createVolClouds(renderer, scene, earthUniforms, earthUniforms.sunDir.value);   // and its volumetric clouds
// Live radio (radio.js): the most popular stations around the viewer -- their
// own location when the start-up lookup found it, else their home city's --
// refreshed daily. While the radio plays, the soundtrack pauses; turned off,
// the soundtrack carries on.
function loadRadioStations(home) {
  let geo = null;
  try { geo = JSON.parse(localStorage.getItem("home-geo-v1") || "null"); } catch { /* none */ }
  const lat = Number.isFinite(geo?.lat) ? geo.lat : home?.lat, lon = Number.isFinite(geo?.lon) ? geo.lon : home?.lon;
  if (!Number.isFinite(lat)) { radio.failed(); return; }
  live.fetchRadioStations({ lat, lon }).then((list) => { radio.setStations(list); console.info(`Radio: ${list.length} stations near you`); })
    .catch((e) => { console.warn("Radio stations:", e?.message || e); radio.failed(); });
}
setInterval(() => loadRadioStations(homeCity), 24 * 3600e3);
radio.loadOnDemand(CONFIG.onDemand?.folder);          // the radio's On Demand album (read by the shell)
radio.onChange((what, on) => {
  if (what !== "power" || !music) return;
  if (on) music.pause();
  else if (CONFIG.music?.enabled !== false) music.play().catch(() => {});
});
function refreshVolcanoes() {
  if (CONFIG.volcanoes === false) { volcanoes.set([]); return; }
  live.fetchVolcanoes({ minVei: 3 }).then((v) => volcanoes.set(v)).catch((e) => console.warn("Volcanoes:", e?.message || e));
}
refreshVolcanoes();
setInterval(refreshVolcanoes, 12 * 3600e3);              // every 12 hours (owner's call)
function refreshKp() { fetchKp().then((v) => aurora.setKp(v)).catch((e) => console.warn("Kp index:", e?.message || e)); }
refreshKp();
setInterval(refreshKp, 30 * 60e3);
let fxLast = 0;
function applyOldLookClass() { document.body.classList.toggle("old-look", oldLook() > 0); }
applyOldLookClass();
// Theatre Mode (Options > Settings > Theatre Mode): Semi hides the name card,
// Full also hides the logo.
function applyTheatre() {
  const t = CONFIG.theatre ?? "off";
  document.body.classList.toggle("theatre-semi", t === "semi" || t === "full");
  document.body.classList.toggle("theatre-full", t === "full");
}
applyTheatre();

function radialGlowTexture(inner,mid){
  const c=document.createElement("canvas");c.width=c.height=256;const x=c.getContext("2d"),g=x.createRadialGradient(128,128,0,128,128,128);
  g.addColorStop(0,inner);g.addColorStop(0.08,inner);g.addColorStop(0.28,mid);g.addColorStop(1,"rgba(255,170,85,0)");x.fillStyle=g;x.fillRect(0,0,256,256);return new THREE.CanvasTexture(c);
}
const sunGlare=new THREE.Group();
const sunHalo=new THREE.Sprite(new THREE.SpriteMaterial({map:radialGlowTexture("rgba(255,250,225,1)","rgba(255,187,98,.28)"),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,depthTest:true}));
const sunCore=new THREE.Sprite(new THREE.SpriteMaterial({map:radialGlowTexture("rgba(255,255,245,1)","rgba(255,220,150,.42)"),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,depthTest:true}));
sunHalo.scale.setScalar(18);sunCore.scale.setScalar(4.5);sunGlare.add(sunHalo,sunCore);sunGlare.renderOrder=20;scene.add(sunGlare);
// The original has no sun sprite: its sun glare is the atmosphere program's
// own Mie scattering (bright at the limb when the sun is behind the Earth)
// and the ocean glint in the ground program. This extra glow is off unless
// The old "Extra sun glow" option is gone (it was always off): never shown.
sunGlare.visible = false;

// ---------------------------------------------------------------- city marker
const markerMat = new THREE.SpriteMaterial({
  map: loader.load("data/plugins/live/Location_Light_Live.png", (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
  }),
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthTest: true,
  depthWrite: false,
  opacity: 0,
  sizeAttenuation: false,
});
const markerTexSD = loader.load("data/plugins/live/Location_Light_Live_SD.png", (t) => {
  t.colorSpace = THREE.SRGBColorSpace;
});
const markerTexFah = loader.load("data/plugins/fah/Location_Light_F@h.png", (t) => {
  t.colorSpace = THREE.SRGBColorSpace;
});
const marker = new THREE.Sprite(markerMat);
marker.scale.setScalar(0.055);
marker.renderOrder = 10;
// Not added to the scene: the old port has no extra pulsing marker on the
// selected city (its dot is the label's own dot, scaled by point_scale_max).

// ---------------------------------------------------------------- camera & tour
// The camera orbits Earth's centre at (lat, lng, radius) and looks at the
// centre, with an optional roll. All motion constants live in motion.js.
//
// Auto tour, as recorded from the LWP-PC port (camera position captured
// every 3rd frame over seven flights):
//  - cities are visited in list order, one after the other;
//  - each frame the camera moves 0.02 (1 - autopilot_decay 0.98) of the
//    remaining latitude/longitude difference (shortest way round), scaled
//    down so neither component exceeds autopilot_max_speed 0.5 degrees;
//  - it snaps on when within anim_epsilon 0.01 degrees, then holds still for
//    autopilot_pause 3.0 s (no drift) and leaves for the next city;
//  - the radius follows 1.4 + 0.00755 x G x sin(pi x travelled / G) (G: the
//    flight's great-circle angle in degrees, from the start radius down to
//    autopilot_min_radius 1.4), eased by 1 - anim_decay 0.9 per frame
//    (fitted to the recording: 0.03 R rms over all seven flights);
//  - no sound effect plays for the tour's own moves;
//  - after manual input it resumes after autopilot_timeout 10 s.
// Manual: arrow keys / drag pan, +/- / wheel zoom, Q/E roll.
const tourCfg = CONFIG.tour;
const AT = MOTION.autoTour, MAN = MOTION.manual, RMIN = MOTION.radius.min, RMAX = MOTION.radius.max;
const { lerp, smoothstep, clamp } = THREE.MathUtils;

// Keep the transferred Life Around Us Earth visible at every camera radius.
// The old prototype overlaid streamed map tiles near a city, hiding the globe.
const closeUps = [0, 1].map(() => ({
  city: null,
  prepare(city) { this.city = city; },
  update() { return 0; },
}));
let cuCur = 0;

// ---------------------------------------------------------------- city close-up
// The first prototype's bird's-eye view (git e2a8bfe), brought back
// (config.js cityCloseUp, Options > Settings > Globe > City Close-Up): at a
// city the camera drops from the 1.4-radius hold to a low, oblique view
// (32 km up, tilted 52 degrees; at night 40 km and 50 degrees, with the lights
// drawn on the daytime imagery), slowly circles the city over sharp satellite tiles
// (closeup_city.js), then climbs back out before flying on.
// Descent 8 s on a smootherstep (2026-11-17, the owner found the dive in
// "aggressive"): its fastest moment is half the old 6 s cubic ease's; the
// hold is 2 s shorter so a stop lasts as long as before.
const CU = { descendDelay: 1.5, descendSeconds: 8, ascendSeconds: 5, holdSeconds: 12,
  closeAltitudeKm: 32, nightAltitudeKm: 40, closeTiltDegrees: 52, nightTiltDegrees: 50, orbitDegreesPerSecond: 1.2 };   // night: lights drawn on the daytime imagery, so it can go as low
const cityCUs = [0, 1].map(() => new CityCloseUp(scene, earthUniforms.sunDir, CONFIG.cityCloseUpTiles, maxAniso, renderer));
try { keepCloseUpProgram(renderer, camera); } catch (e) { console.warn("close-up program:", e); }
let cuA = 0;                                   // the set being shown; the other loads the next spot
const cuState = { k: 0, heading: 0, near: null, city: null, dive: 0, diveArmed: true, alt: null, pending: null };
// Zooming in by hand past the globe's closest view carries on down into the
// close-up wherever the camera is (keyboard / wheel / right stick); the
// bottom of the dive bumps the controller, as the globe's limit did.
CU.diveRate = 1 / 3;                           // close-up progress per Earth radius of zoom input
// Every city's close-up imagery is fetched to disk in the background, starting
// shortly after start-up, in tour order (so the next stops come first); after
// the first run it is all on disk and only checked. window.__cuPrefetch shows
// the progress.
async function cuPrefetchStart() {
  if (!cityCloseUpOn() || cuPrefetchStart.on) return;
  cuPrefetchStart.on = true;
  const order = [...CITIES];
  const home = await findHomeCity().catch(() => null);
  if (home && order.includes(home)) { order.splice(order.indexOf(home), 1); order.splice(1, 0, home); }   // Algiers, then the viewer's city
  window.__cuPrefetch = { done: 0, total: order.length, t0: performance.now() };
  cuPrefetchAll(order, CONFIG.cityCloseUpTiles, (d, n) => { window.__cuPrefetch.done = d; if (d === n) window.__cuPrefetch.ms = performance.now() - window.__cuPrefetch.t0; });
}
setTimeout(cuPrefetchStart, 3000);
function cuEnsureHere() {
  const s = cuState.snapTo?.city;                  // gliding onto a city: load its spot straight away
  const here = s ? { lat: s.lat, lon: s.lon, name: "here" } : { lat: cam.lat, lon: ((cam.lng + 540) % 360) - 180, name: "here" };
  const act = cityCUs[cuA];
  if (!act.city) { act.prepare(here); cuState.near = cuTarget(here); return; }
  const off = v3(act.city.lat, act.city.lon).angleTo(v3(here.lat, here.lon)) / RAD;
  if (off > 0.12 && !cuState.pending) {         // ~13 km: load the new spot behind the scenes
    cuState.pending = here; cityCUs[1 - cuA].prepare(here);
  }
  if (cuState.pending && cityCUs[1 - cuA].settled()) {
    cuA = 1 - cuA; cityCUs[1 - cuA].dispose(); cuState.pending = null;
    cuState.near = cuTarget(cityCUs[cuA].city);
  }
}
const cityCloseUpOn = () => CONFIG.cityCloseUp === true;
// Loading right now (close-up pictures going up to the GPU, a close-up being
// prepared or glided onto, a new cloud map): the frame pacing ignores it.
let busyMark = -1e9;
const markBusy = () => { busyMark = performance.now(); };
const appBusy = () => performance.now() - busyMark < 1500 || !!cuState.pending || !!cuState.snapTo
  || cityCUs.some((c) => c.queue?.length || c.dirty?.size);
// Hand zoom dives into a close-up only around the tour cities: within 30 km
// of one (the area whose imagery comes bundled with the setup), so nothing
// is ever downloaded. Anywhere else -- open ocean or land -- the zoom stops at
// the globe's closest view, as in the original; flying out of a city's area
// from inside a close-up climbs back up to the globe.
const CU_ZONE_COS = Math.cos(30 / 6371);
// The close-ups' land/sea map for the ocean glitter (see CU_SEA).
// (Made in the background at start-up and uploaded straight away, while the
// title card is up: a 60 ms upload, invisible there, would show mid-tour.)
setTimeout(() => live.seaMask(4096, 2048).then((px) => {
  const t = new THREE.DataTexture(px, 4096, 2048, THREE.RedFormat);
  t.wrapS = THREE.RepeatWrapping; t.magFilter = t.minFilter = THREE.LinearFilter; t.generateMipmaps = false;
  t.needsUpdate = true;
  markBusy();
  renderer.initTexture(t);                                    // upload now, not mid-dive
  CU_SEA.value = t;
}).catch((e) => console.warn("land/sea map:", e)), 0);
let cityDirs = null, zoneMemo = { lat: NaN, lng: NaN, v: false };
// The glide onto a city: one smooth, timed sweep (longer for longer hops,
// 0.7..1.6 s) instead of a lunge; its close-up starts loading at once.
function startSnap(city) {
  if (!city) return;
  const dLng = (((city.lon - cam.lng) % 360) + 540) % 360 - 180;
  const deg = Math.hypot(city.lat - cam.lat, dLng * Math.cos(cam.lat * RAD));
  cuState.snapTo = { city, lat0: cam.lat, lng0: cam.lng, dLat: city.lat - cam.lat, dLng, t0: performance.now(), dur: 700 + Math.min(900, deg * 180) };
  cuEnsureHere();
}
function snapStep() {                                        // true once there
  const s = cuState.snapTo, u = Math.min(1, (performance.now() - s.t0) / s.dur);
  const e = easeInOut(u);
  cam.lat = s.lat0 + s.dLat * e; cam.lng = s.lng0 + s.dLng * e;
  return u >= 1;
}
function nearestTourCity(maxKm, lat = cam.lat, lng = cam.lng) {
  cityDirs ??= CITIES.map((c) => v3(c.lat, c.lon));
  const h = v3(lat, ((lng + 540) % 360) - 180);
  let best = null, bd = Math.cos(maxKm / 6371);
  cityDirs.forEach((d, i) => { const x = d.dot(h); if (x > bd) { bd = x; best = CITIES[i]; } });
  return best;
}
function cuZoneHere(lat = cam.lat, lng = cam.lng) {
  if (lat === zoneMemo.lat && lng === zoneMemo.lng) return zoneMemo.v;
  cityDirs ??= CITIES.map((c) => v3(c.lat, c.lon));
  const h = v3(lat, ((lng + 540) % 360) - 180);
  let v = false;
  for (const d of cityDirs) if (d.dot(h) > CU_ZONE_COS) { v = true; break; }
  zoneMemo = { lat, lng, v };
  return v;
}
const isTourCity = (c) => !!c && CITIES.includes(c);
// The whole stop with the close-up: settle, descend, hold, climb out.
const cuStaySeconds = () => CU.descendDelay + CU.descendSeconds + CU.holdSeconds + CU.ascendSeconds;
function cuTarget(city) {
  const d = v3(city.lat, city.lon).dot(earthUniforms.sunDir.value);
  const night = 1 - smoothstep(d, -0.16, 0.1);
  return {
    alt: Math.exp(lerp(Math.log(CU.closeAltitudeKm), Math.log(CU.nightAltitudeKm), night)) / 6371,
    tilt: lerp(CU.closeTiltDegrees, CU.nightTiltDegrees, night) * RAD,
  };
}
const easeInOut = (t) => t * t * t * (t * (6 * t - 15) + 10);   // smootherstep: no jolt at either end
// Called right after applyCamera(): k = 0 is the normal hold view, 1 the close-up.
function cityCloseUpCamera(nowMs, dt) {
  let want = 0;
  const c = tour.selected;
  if (cityCloseUpOn() && tour.started && tour.mode === "pause" && isTourCity(c) && c === tour.target) {
    const el = (nowMs - tour.arrivedAt) / 1000 - CU.descendDelay;
    const down = CU.descendSeconds, hold = CU.holdSeconds, up = CU.ascendSeconds;
    want = el <= 0 ? 0 : el < down ? easeInOut(el / down) : el < down + hold ? 1
      : el < down + hold + up ? 1 - easeInOut((el - down - hold) / up) : 0;
    // the same, without the easing: how far through the descent in time (the colour blend follows it)
    cuState.p = el <= 0 ? 0 : el < down ? el / down : el < down + hold ? 1 : el < down + hold + up ? 1 - (el - down - hold) / up : 0;
    if (cuState.city !== c) { cuState.city = c; cuState.near = cuTarget(c); cuState.heading = 0; }
  } else if (cityCloseUpOn() && tour.started && tour.mode === "manual" && cuState.dive > 0) {
    if (!cuZoneHere()) cuState.dive = Math.max(0, cuState.dive - dt / 1.5);   // out of the city's area: climb back up
    want = cuState.dive;
    cuState.p = cuState.dive;
    if (cuState.dive > 0 && (cuState.snapTo || cuZoneHere())) cuEnsureHere();
  } else {
    if (tour.mode !== "manual") cuState.dive = 0;
    want = Math.max(0, cuState.k - dt / 1.5);   // interrupted (manual input, an event): climb out over 1.5 s
  }
  // Zoomed in by hand near the globe's closest view and not swinging round:
  // fetch the close-up for the spot under the camera already, so its maps are
  // there by the time the zoom carries on down into it (spots away from the
  // tour cities are downloaded, a few seconds).
  if (cityCloseUpOn() && tour.started && tour.mode === "manual" && cuState.dive <= 0 && cam.r < 1.62
      && Math.abs(cam.vLat) + Math.abs(cam.vLng) < 0.02 && nowMs - (cuState.earlyAt || 0) > 400) {
    cuState.earlyAt = nowMs;
    if (cuState.snapTo || cuZoneHere()) cuEnsureHere();
  }
  cuState.k = want;
  if (want <= 0) cuState.p = 0; else if (!(tour.mode === "pause" || tour.mode === "manual")) cuState.p = Math.min(cuState.p ?? want, want);
  CU_GRADE.value.w = cuState.p ?? want;            // the globe-matching colour grade unwinds with it
  const k = cuState.k;
  if (k <= 0 || !cuState.near) { atmoMesh.visible = true; cuState.alt = null; return 0; }
  if (tour.mode === "pause") cuState.heading += dt * CU.orbitDegreesPerSecond * RAD * k;   // circling: the tour only
  const n = camDir();
  const north = new THREE.Vector3(0, 1, 0).addScaledVector(n, -n.y).normalize();
  const east = new THREE.Vector3().crossVectors(north, n);
  const farAlt = cam.r - 1;
  const alt = Math.exp(lerp(Math.log(farAlt), Math.log(cuState.near.alt), k));
  cuState.alt = alt;
  const tilt = lerp(0, cuState.near.tilt, smoothstep(k, 0.35, 1));
  const h = cuState.heading;
  const back = north.clone().multiplyScalar(-Math.cos(h)).addScaledVector(east, -Math.sin(h));
  camera.position.copy(n).multiplyScalar(1 + alt * Math.cos(tilt)).addScaledVector(back, alt * Math.sin(tilt));
  camera.up.set(0, 1, 0).lerp(n, smoothstep(k, 0.2, 0.8)).normalize();
  camera.lookAt(n.clone().multiplyScalar(smoothstep(k, 0, 0.55)));
  // Inside the atmosphere shell its from-space program does not apply (and the horizon is out of view).
  atmoMesh.visible = camera.position.length() > 1.05;
  return k;
}

function slerpDir(a, b, t) {
  const ang = a.angleTo(b);
  if (ang < 1e-6) return b.clone();
  const s = Math.sin(ang);
  return a.clone().multiplyScalar(Math.sin((1 - t) * ang) / s)
    .add(b.clone().multiplyScalar(Math.sin(t * ang) / s));
}
const dirToLatLng = (d) => ({ lat: Math.asin(clamp(d.y, -1, 1)) / RAD, lng: Math.atan2(-d.z, d.x) / RAD });

const cam = { lat: 20, lng: 0, r: RMAX, roll: 0, vLat: 0, vLng: 0, vR: 0, vRoll: 0, pitch: 0, yaw: 0 };
function camDir() { return v3(cam.lat, cam.lng); }

function applyCamera() {
  camera.position.copy(v3(cam.lat, cam.lng, cam.r));
  camera.up.set(0, 1, 0);
  camera.lookAt(0, 0, 0);
  // The old port's view = Rx(pitch) . Ry(yaw) . lookAt (only the opening
  // sets them); the camera's own rotation is the inverse.
  if (cam.yaw) camera.rotateY(-cam.yaw);
  if (cam.pitch) camera.rotateX(-cam.pitch);
  if (cam.roll) camera.rotateZ(cam.roll);
}

const tour = {
  mode: "idle",        // idle (before the opening) | opening | travel | pause | manual
  target: null,        // city we are travelling to
  selected: null,      // city shown on the card
  speed: 0,            // current travel speed, degrees/frame
  startDist: 1,        // degrees, at departure
  arrivedAt: 0,
  lastDepart: 0,
  lastInput: -Infinity,
  started: false,      // false until the opening hands over
};

function angleBetween(a, b) {
  return v3(a.lat, a.lon).angleTo(v3(b.lat, b.lon));
}

let visited = new Set();
const startParam = new URLSearchParams(location.search).get("start");
let lastTourCity = null;                         // so the list order survives an earthquake / storm stop
function pickNext(from) {
  if (!from && startParam) {
    const c = CITIES.find((x) => x.name.toLowerCase() === startParam.toLowerCase());
    if (c) return c;
  }
  // The old port starts at the city nearest its opening view (36N 0E:
  // Algiers, in its run logs every time) and then goes through its city list
  // in order (Algiers, Riyadh, Atlanta, Houston, ...). After a live event
  // stop, carry on from the last city that was shown.
  if (from && !CITIES.includes(from)) from = lastTourCity;
  const i = from ? CITIES.indexOf(from) : -1;
  if (i < 0) {
    const o = v3(OPENING.lat, OPENING.lng);
    return CITIES.reduce((a, b) => (o.angleTo(v3(b.lat, b.lon)) < o.angleTo(v3(a.lat, a.lon)) ? b : a));
  }
  return CITIES[(i + 1) % CITIES.length];
}

// Nearest tour city to the point under the camera (for manual browsing).
function cityUnderCamera(maxDeg) {
  const d = camDir();
  let best = null, bestA = maxDeg * RAD;
  for (const c of [...CITIES, ...liveEvents]) {
    const a = d.angleTo(v3(c.lat, c.lon));
    if (a < bestA) { best = c; bestA = a; }
  }
  return best;
}

function startTravel(city, nowMs) {
  if (sat.on) return;                            // Satellite Mode: no flying off to cities
  if (newsFocus >= 0) setNewsFocus(-1);
  // The auto tour goes straight to the next stop: the city it leaves fades out
  // as it departs, nothing in between lights up, and the destination comes on
  // when the camera arrives (arrive -> select).
  if (tour.selected && tour.selected !== city) select(null);
  tour.target = city;
  tour.mode = "travel";
  tour.from = { lat: cam.lat, lng: cam.lng, r: cam.r };
  tour.startDist = Math.max(AT.arrivalEpsilon, camDir().angleTo(v3(city.lat, city.lon)) / RAD);
  tour.lastDepart = nowMs;
  closeUps[1 - cuCur].prepare(city);   // regional detail for the destination
  if (cityCloseUpOn() && isTourCity(city)) {      // close-up tiles load during the flight
    if (cuState.pending) { cityCUs[1 - cuA].dispose(); cuState.pending = null; }
    cityCUs[cuA].prepare(city);
  }
  marker.position.copy(v3(city.lat, city.lon, 1.002));
  prefetchCity(city);                  // headlines and photo ready by the time we land
}

function markVisited(c) {
  if (!cycle || !(CITIES.includes(c) || c === issEvent)) return;
  const id = stopId(c);
  if (!cycle.visited.includes(id)) { cycle.visited.push(id); saveCycle(); }
}
function arrive(nowMs) {
  markVisited(tour.target);
  for (const [c, p] of prefetched) if (p.img && c !== tour.target) p.img = null;   // keep only this city's decoded photo
  tour.mode = "pause";
  tour.arrivedAt = nowMs;
  tour.settledAt = null;
  visited.add(tour.target.name);
  if (closeUps[1 - cuCur].city === tour.target) cuCur = 1 - cuCur;
  select(tour.target);
}

// Called by input handlers.
function manualInput() {
  tour.lastInput = performance.now();
  if (sat.on) return;                            // Satellite Mode keeps the camera on the station
  if (tour.started && tour.mode !== "manual") {
    tour.mode = "manual"; tour.target = null;
    cuState.dive = cuState.k;                    // already down in a city's close-up: stay there
  }
}

// Controls (the owner's layout, 2026-11-17):
//
//   Controller (DualSense, DualShock, Xbox, any standard pad)
//     Left stick            Rotate the globe (the selection follows the city in the middle)
//     Right stick up/down   Zoom in (down into the city close-up) / out into space
//     L2 / R2               Zoom out / in
//     L1 / R1, D-pad <- ->  Previous / next featured city (the tour's list), no spinning needed
//     D-pad up / down       Nudge the globe; with the headlines focused, move through them
//     Cross                 Select (at a city: its headlines; elsewhere: the city in the middle)
//     Circle                Back / close (the headlines, the close-up, the Options menu)
//     Triangle              Options menu
//     R3                    Back to the home view
//     Square (hold) + R1 / L1   Next / previous music track
//     Square (hold) + R2 / L2   Music volume up / down (Square alone: what's playing)
//
//   PC
//     Click and drag, W A S D, arrow keys (hold)   Rotate the globe
//     Mouse wheel, + / -                           Zoom in / out
//     Q / E, Left / Right arrow (tap)              Previous / next city
//     Left-click a city, Enter                     Select a city
//     Esc                                          Back / close
//     O, or the gear icon (top right)              Options menu
//     ] / [                                        Next / previous music track
//     . / ,                                        Music volume up / down (M: what's playing)
//
// Keys are matched by position (e.code), so they work on any keyboard layout
// and whether Num Lock is on or off.
const KEY_ROLE = {
  ArrowLeft: "step-l", ArrowRight: "step-r", ArrowUp: "step-u", ArrowDown: "step-d",
  KeyW: "arrowup", KeyS: "arrowdown", KeyA: "arrowleft", KeyD: "arrowright",       // held: rotate
  Equal: "zoomin", NumpadAdd: "zoomin", Minus: "zoomout", NumpadSubtract: "zoomout",
  KeyQ: "prev", KeyE: "next",
  Enter: "select", NumpadEnter: "select",
  Escape: "back", Backspace: "back",
  KeyV: "home",
};
// Music: [ / ] previous / next track, , / . volume down / up (repeats while held), M shows what's playing.
const MUSIC_KEYS = {
  BracketLeft: [() => musicTrack(-1)], BracketRight: [() => musicTrack(1)],
  Comma: [() => musicVolume(-1), true], Period: [() => musicVolume(1), true],
  KeyM: [() => showNowPlaying()],
};
const keys = new Set();
window.addEventListener("keydown", (e) => {
  if (!tour.started || e.ctrlKey || e.altKey || e.metaKey) return;
  const mk = MUSIC_KEYS[e.code];
  if (mk) { e.preventDefault(); if (!e.repeat || mk[1]) mk[0](); return; }
  const role = KEY_ROLE[e.code];
  if (!role) return;
  e.preventDefault();
  if (role === "none") return;
  if (sat.on && STEP[role]) { keys.add(STEP_ROTATE[role]); return; }   // Satellite Mode: arrows look around
  if (STEP[role]) { if (!e.repeat) dirDown(role, performance.now()); return; }
  if (role === "select") { if (!e.repeat) crossPressed(); return; }
  if (role === "back") { if (!e.repeat) circlePressed(); return; }
  if (role === "home") { if (!e.repeat) goHome(); return; }
  if (role === "prev" || role === "next") { if (!e.repeat) cycleCity(role === "next" ? 1 : -1); return; }
  keys.add(role);                                    // held: rotate or zoom
  manualInput();
});

// Move to the nearest city in a screen direction (dx right, dy up) from the
// current one: candidates within 55 degrees of that direction on the visible
// side, nearest first, with off-axis ones counted as further away.
let lastStep = 0;
const _right = new THREE.Vector3(), _up = new THREE.Vector3();
function stepCity(dx, dy) {
  lastStep = performance.now();
  tour.lastInput = lastStep;
  const from = tour.selected || cityUnderCamera(90);
  if (!from) return;
  camera.updateMatrixWorld();
  _right.setFromMatrixColumn(camera.matrixWorld, 0);
  _up.setFromMatrixColumn(camera.matrixWorld, 1);
  const fp = v3(from.lat, from.lon), view = camera.position.clone().normalize();
  const want = Math.atan2(dy, dx);
  let best = null, bestScore = Infinity;
  for (const c of CITIES) {
    if (c === from) continue;
    const p = v3(c.lat, c.lon);
    if (p.dot(view) < 0.15) continue;                  // behind the globe
    const d = p.clone().sub(fp);
    const off = Math.abs(((Math.atan2(d.dot(_up), d.dot(_right)) - want + 3 * Math.PI) % (2 * Math.PI)) - Math.PI);
    if (off > 55 * RAD) continue;
    const score = d.length() * (1 + 2.5 * off / (55 * RAD));
    if (score < bestScore) { bestScore = score; best = c; }
  }
  // The old port plays option_up_down (slot 2) for a d-pad press here.
  sound("optMove");
  if (best) startTravel(best, lastStep);
}

// Cross: at a city, the headlines get the focus (the first one highlighted,
// as the old port does); the d-pad then moves through them. With the focus
// already on a headline the old port opened its web page in a mini browser;
// there is none here, so that plays the error sound. Away from a city, fly
// to the one nearest the middle of the view.
let newsFocus = -1;
function setNewsFocus(i) {
  const items = [...$("newsList").children];
  newsFocus = items.length ? Math.max(-1, Math.min(items.length - 1, i)) : -1;
  $("newsList").classList.toggle("focus-mode", newsFocus >= 0);
  items.forEach((li, k) => li.classList.toggle("focus", k === newsFocus));
}
function crossPressed() {
  tour.lastInput = performance.now();
  if (sat.on) return;
  if (newsFocus >= 0) { sound("error"); return; }
  if (tour.selected && $("newsList").children.length && (tour.mode === "pause" || tour.mode === "manual")) {
    manualInput(); sound("optSelect"); setNewsFocus(0);
    if (cam.r > RMIN) cam.vR = -MAN.zoomMax * 0.6;            // the old port closes in a little
    return;
  }
  selectUnderCamera();
}
function circlePressed() {
  tour.lastInput = performance.now();
  if (sat.on) { satelliteMode(false); return; }  // back to the globe
  if (newsFocus >= 0) { sound("optClose"); setNewsFocus(-1); return; }   // leave the headlines
  if (cuState.dive > 0 || cuState.k > 0.05) {                         // climb back out of a close-up
    manualInput(); cuState.dive = 0; sound("optClose"); return;
  }
}
// L1 / R1, D-pad left / right, Q / E, a tap of the Left / Right arrow: the
// previous / next city in the tour's list, flown to straight away.
function cycleCity(dir) {
  tour.lastInput = performance.now();
  if (sat.on) return;
  if (newsFocus >= 0) setNewsFocus(-1);
  const from = (tour.target && CITIES.includes(tour.target) ? tour.target : null)
    || (tour.selected && CITIES.includes(tour.selected) ? tour.selected : null) || cityUnderCamera(90);
  let i = from ? CITIES.indexOf(from) : -1;
  if (i < 0) i = dir > 0 ? -1 : 0;
  const next = CITIES[(i + dir + CITIES.length) % CITIES.length];
  cuState.dive = 0;
  sound("optMove");
  startTravel(next, tour.lastInput);
}
// R3: back to the home view (the opening view, 36N 0E at 1.65 R).
function goHome() {
  if (sat.on) { sat.look.yaw = sat.look.pitch = 0; return; }   // Satellite Mode: R3 / V looks straight ahead again
  manualInput(); setNewsFocus(-1);
  tour.home = { t0: performance.now() }; cuState.dive = 0;   // back up out of any close-up too
}
// Select: fly to the city nearest the middle of the view and zoom in.
function selectUnderCamera() {
  tour.lastInput = performance.now();
  const c = cityUnderCamera(25);
  if (c && c !== tour.selected) startTravel(c, tour.lastInput);
  else sound("error");                 // the old port: Cross with nothing to select plays error (slot 9)
}

// Gamepad (standard mapping: DualSense, DualShock 4, Xbox).
const padPrev = [];
const satPad = { x: 0, y: 0 };                           // Satellite Mode: the sticks, looking around
const padAxes = { lng: 0, lat: 0, zoom: 0 };           // analog sticks, applied in updateCamera
function pollGamepad(nowMs) {
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  for (const gp of pads) {
    if (!gp || gp.mapping !== "standard") continue;
    const b = (i) => !!gp.buttons[i]?.pressed;
    const prev = padPrev[gp.index] || {};
    const now = {};
    const edge = (name, down) => { now[name] = down; return down && !prev[name]; };
    const ax = gp.axes;
    const anyPress = gp.buttons.some((x) => x.pressed);
    if (!tour.started) { if (anyPress && !prev.any) window.__globe.intro?.skip(); now.any = anyPress; padPrev[gp.index] = now; continue; }
    now.any = anyPress;
    // The DualSense touchpad opens the radio screen; while it is up it has the
    // pad (before the options menu, so Triangle there is the radio's volume).
    if (!optionsIsOpen() && radio.pad(gp, edge)) {
      for (const role in held) dirUp.cancel(role);
      padPrev[gp.index] = { ...prev, ...now, afterRadio: true };
      continue;
    }
    // Just closed (Cross, Circle, the touchpad): the buttons still held then
    // must not also act on the globe (L1 would go to the previous city).
    if (prev.afterRadio) {
      if (anyPress) { padPrev[gp.index] = { ...prev, ...now }; continue; }
      prev.afterRadio = false;
    }
    // Triangle / Options opens the options menu; while it is open it has the pad.
    if (optionsPad(gp, edge)) {
      for (const [k, i] of [["cross", 0], ["circle", 1], ["left", 14], ["right", 15], ["up", 12], ["down", 13]]) now[k] = b(i);
      for (const role in held) dirUp.cancel(role);
      padPrev[gp.index] = { ...prev, ...now };
      continue;
    }
    // Satellite Mode: either stick looks around from the station, R3 looks
    // ahead again, Circle goes back to the globe. Square + R1 / L1 / R2 / L2
    // still work the music.
    if (sat.on) {
      const dz = (v) => (Math.abs(v) > 0.18 ? v : 0);
      satPad.x = clamp(dz(ax[0]) + dz(ax[2]), -1, 1); satPad.y = clamp(dz(ax[1]) + dz(ax[3]), -1, 1);
      const sq = b(2), chord = sq || (!!prev.chord && (b(4) || b(5) || b(6) || b(7)));
      now.chord = chord;
      if (edge("square", sq)) showNowPlaying();
      if (edge("trkNext", chord && b(5))) musicTrack(1);
      if (edge("trkPrev", chord && b(4))) musicTrack(-1);
      if (edge("volUp", chord && b(7))) musicVolume(1);
      if (edge("volDown", chord && b(6))) musicVolume(-1);
      if (edge("circle", b(1))) satelliteMode(false);
      if (edge("r3", b(11))) goHome();
      padPrev[gp.index] = now;
      continue;
    }
    satPad.x = satPad.y = 0;
    // D-pad up / down: nudge the globe (hold: turn), or move through the focused headlines.
    for (const [name, role, down] of [["up", "step-u", b(12)], ["down", "step-d", b(13)]]) {
      now[name] = down;
      if (down && !prev[name]) dirDown(role, nowMs);
      else if (!down && prev[name]) dirUp(role);
    }
    // Square held: music. Square + R1 / L1: next / previous track; Square +
    // R2 / L2: volume up / down; Square alone shows what is playing. The chord
    // lasts until the shoulder buttons are let go, so letting go of Square
    // first does not then change the city or zoom.
    const sq = b(2);
    const chord = sq || (!!prev.chord && (b(4) || b(5) || b(6) || b(7)));
    now.chord = chord;
    const pull = (i) => (gp.buttons[i]?.value ?? (b(i) ? 1 : 0)) > 0.5;
    if (edge("square", sq)) showNowPlaying();
    if (edge("trkNext", chord && b(5))) musicTrack(1);
    if (edge("trkPrev", chord && b(4))) musicTrack(-1);
    if (edge("volUp", chord && pull(7))) musicVolume(1);
    if (edge("volDown", chord && pull(6))) musicVolume(-1);
    // L1 / D-pad left: previous city; R1 / D-pad right: next city.
    if (edge("prevCity", (!chord && b(4)) || b(14))) cycleCity(-1);
    if (edge("nextCity", (!chord && b(5)) || b(15))) cycleCity(1);
    if (edge("cross", b(0))) crossPressed();
    if (edge("circle", b(1))) circlePressed();
    if (edge("r3", b(11))) goHome();
    // Left stick: rotate. Right stick up/down and L2 / R2: zoom.
    const lx = Math.abs(ax[0]) > 0.18 ? ax[0] : 0, ly = Math.abs(ax[1]) > 0.18 ? ax[1] : 0;
    const ry = Math.abs(ax[3]) > 0.18 ? ax[3] : 0;
    const trig = (i) => { const v = gp.buttons[i]?.value ?? (b(i) ? 1 : 0); return v > 0.08 ? v : 0; };
    const tz = chord ? 0 : trig(6) - trig(7);              // L2 out, R2 in (with Square: the music volume)
    const zoom = clamp(ry + tz, -1, 1);
    padAxes.lng = lx; padAxes.lat = -ly; padAxes.zoom = zoom;
    if (lx || ly || zoom) {
      manualInput();
      if (lx || ly) rotateSound();
      if (zoom) zoomSound(zoom > 0 ? 1 : -1);
    }
    padPrev[gp.index] = now;
  }
  pollGamepad.last = nowMs;
}
window.addEventListener("keyup", (e) => {
  const role = KEY_ROLE[e.code];
  if (STEP[role]) dirUp(role); else keys.delete(role);
});

// Arrow keys and D-pad: the globe turns from the moment the key goes down
// (a tap nudges it about 2.8 deg, a hold keeps turning), as in the old port.
const HOLD_MS = 250;
const STEP = { "step-l": [-1, 0], "step-r": [1, 0], "step-u": [0, 1], "step-d": [0, -1] };
const STEP_ROTATE = { "step-l": "arrowleft", "step-r": "arrowright", "step-u": "arrowup", "step-d": "arrowdown" };
const held = {};
function dirDown(role, now) {
  if (newsFocus >= 0) {                        // headlines have the focus: up/down move it
    tour.lastInput = now;
    if (role === "step-u" || role === "step-d") {
      const k = newsFocus + (role === "step-d" ? 1 : -1);
      if (k >= 0 && k < $("newsList").children.length) { setNewsFocus(k); sound("optMove"); }
    }
    return;
  }
  if (held[role]) return;
  held[role] = { t: now, rotating: false };
  // Left / Right: a tap is "previous / next city", so they only start turning
  // once held (HOLD_MS); Up / Down turn from this frame on (a tap nudges).
  if (role === "step-l" || role === "step-r") return;
  keys.add(STEP_ROTATE[role]);
  manualInput();
}
function dirUp(role) {
  const h = held[role];
  delete held[role];
  keys.delete(STEP_ROTATE[role]);
  // A tap of Left / Right: the previous / next city. A tap of Up / Down only
  // nudges the camera (about 2.8 deg, as in the old port); the selection then
  // follows whichever city is nearest the middle of the view.
  if (h && !h.rotating && tour.started) {
    if (role === "step-l" || role === "step-r") cycleCity(role === "step-r" ? 1 : -1);
    else sound("optMove");
  }
}
dirUp.cancel = (role) => { delete held[role]; keys.delete(STEP_ROTATE[role]); };
function tickHolds(now) {
  for (const role in held) {
    const h = held[role];
    if (!h.rotating && now - h.t >= HOLD_MS) { h.rotating = true; keys.add(STEP_ROTATE[role]); }   // a hold, not a tap: turn
    if (h.rotating) manualInput();
  }
}
window.addEventListener("blur", () => { for (const role in held) delete held[role]; });
window.addEventListener("blur", () => keys.clear());
window.addEventListener("wheel", (e) => {
  if (!tour.started) return;
  manualInput();
  const steps = Math.sign(e.deltaY) * 4;       // one notch = a few input steps
  cam.vR = clamp(cam.vR + steps * MAN.zoomStep, -MAN.zoomMax, MAN.zoomMax);
  zoomSound(Math.sign(steps), 250);
}, { passive: true });
let drag = null;
window.addEventListener("pointerdown", (e) => {
  const onGlobe = e.target === canvas || e.target.closest?.(".city-labels");   // not the news strip, cards or menus
  if (tour.started && e.button === 0 && onGlobe) drag = { x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY, moved: 0 };
});
// The gear (top right): the Options menu, as O and Triangle.
$("gear").addEventListener("click", (e) => { e.stopPropagation(); if (tour.started) openOptions(); });
window.addEventListener("pointerup", (e) => {
  const d = drag; drag = null;
  if (d && d.moved < 6) clickCity(e.clientX, e.clientY);        // a click, not a drag: select the city there
});
// Left-click on a city (its dot, name or icon): fly there.
function clickCity(x, y) {
  if (sat.on) return;
  if (!labelLayer.classList.contains("on")) return;             // labels hidden (zoomed far out): nothing to click
  let best = null, bestD = 34;                                  // px
  for (const L of labels) {
    if (L.el.style.display === "none" || L.el.style.visibility === "hidden" || +L.el.style.opacity === 0) continue;
    const r = L.el.getBoundingClientRect();                     // the label's anchor (the dot)
    const d = Math.hypot(x - r.left, y - r.top);
    const box = L.panel.getBoundingClientRect();
    const inPanel = x >= box.left && x <= box.right && y >= box.top && y <= box.bottom;
    const dd = inPanel ? 0 : d;
    if (dd < bestD) { bestD = dd; best = L.c; }
  }
  if (!best) return;
  tour.lastInput = performance.now();
  if (newsFocus >= 0) setNewsFocus(-1);
  if (best === tour.selected && (tour.mode === "pause" || tour.mode === "manual")) { crossPressed(); return; }
  cuState.dive = 0; sound("optSelect"); manualInput(); startTravel(best, tour.lastInput);
}
window.addEventListener("pointermove", (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  drag.moved = Math.max(drag.moved, Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0));
  drag.x = e.clientX; drag.y = e.clientY;
  if (!dx && !dy) return;
  if (sat.on) {                                  // Satellite Mode: dragging looks around
    sat.look.yaw += dx * 0.08 * RAD; sat.look.pitch = clamp(sat.look.pitch - dy * 0.08 * RAD, -25 * RAD, 45 * RAD);
    return;
  }
  manualInput();
  const k = 0.02 * (cam.r - 1);                // degrees per pixel, slower when close
  cam.vLng = clamp(cam.vLng - dx * k, -MAN.latLngMax, MAN.latLngMax);
  cam.vLat = clamp(cam.vLat + dy * k, -MAN.latLngMax, MAN.latLngMax);
  rotateSound();
});

function updateCamera(nowMs) {
  const dtSec = Math.min(0.1, (nowMs - (tour.lastMs ?? nowMs)) / 1000);
  tour.lastMs = nowMs;
  const f = dtSec * FPS;                        // frames elapsed (60 fps units)
  if (tour.mode === "satellite") { satelliteCamera(dtSec, f); return; }

  // ---- manual input -> velocities
  // The old port's stick handling (layout.xml): each held direction adds
  // lat_speed / lng_speed (0.025 deg) per frame up to lat_speed_max 2.5 deg a
  // frame, and radius_speed (0.0025 R) per frame up to radius_speed_max 0.025;
  // the speed decays every frame (below).
  const add = (v, step, max, amt) => clamp(v + amt * step * f, -max, max);
  const inLng = (keys.has("arrowright") ? 1 : 0) - (keys.has("arrowleft") ? 1 : 0) + padAxes.lng;
  const inLat = (keys.has("arrowup") ? 1 : 0) - (keys.has("arrowdown") ? 1 : 0) + padAxes.lat;
  const inZoom = (keys.has("zoomout") ? 1 : 0) - (keys.has("zoomin") ? 1 : 0) + padAxes.zoom;
  if (inLng) cam.vLng = add(cam.vLng, MAN.latLngStep, MAN.latLngMax, clamp(inLng, -1, 1));
  if (inLat) cam.vLat = add(cam.vLat, MAN.latLngStep, MAN.latLngMax, clamp(inLat, -1, 1));
  if (inZoom) cam.vR = add(cam.vR, MAN.zoomStep, MAN.zoomMax, clamp(inZoom, -1, 1));
  if (keys.has("arrowleft") || keys.has("arrowright") || keys.has("arrowup") || keys.has("arrowdown")) rotateSound();
  if (keys.has("zoomin")) zoomSound(-1);
  if (keys.has("zoomout")) zoomSound(1);
  if (inLng || inLat || inZoom) manualInput();
  const panMul = cuState.alt ? cuState.alt / Math.max(0.05, cam.r - 1) : 1;   // down in the close-up: pan in step with the height
  cam.lat = clamp(cam.lat + cam.vLat * f * panMul, -80, 80);
  cam.lng += cam.vLng * f * panMul;
  cam.roll += cam.vRoll * f;
  cam.r = clamp(cam.r + cam.vR * f, MOTION.radius.zoomMin, MOTION.radius.zoomMax);
  // Zoomed in by hand until the camera "hits the ground" (its closest
  // distance): a short bump on the controller, harder the faster it came in.
  // (Once per push: zooming in again after letting go bumps again.)
  // (Away from the tour cities the zoom stops at the closest view, like the original.)
  const diving = cityCloseUpOn() && tour.mode === "manual" && (cuState.dive > 0 || cuZoneHere());
  if (diving) {
    // Past the globe's closest view the zoom carries on down into the close-up
    // (and back up out of it before the globe moves away again).
    if (cuState.dive > 0 || (cam.r <= MOTION.radius.zoomMin + 1e-6 && cam.vR < 0)) {
      const was = cuState.dive;
      cuState.dive = clamp(cuState.dive - cam.vR * f * CU.diveRate, 0, 1);
      if (cuState.dive > was && !cuZoneHere()) cuState.dive = was;   // no deeper outside a city's area
      if (cuState.dive > 0) cam.r = MOTION.radius.zoomMin;
    }
    // The bottom of the dive: the bump, once per push.
    if (cuState.dive < 0.995 || !(inZoom < 0 || cam.vR < -1e-4)) cuState.diveArmed = true;
    if (cuState.diveArmed && cam.vR < 0 && cuState.dive >= 1) {
      groundBump(Math.min(1, Math.max(0.35, Math.abs(cam.vR) / MAN.zoomMax)));
      cuState.diveArmed = false;
    }
    if (cuState.dive >= 1 && cam.vR < 0) cam.vR = 0;
    if (cuState.snapTo) {                                   // gliding onto a city: finish centring on it on the way down
      if (inLng || inLat || snapStep()) cuState.snapTo = null;
    }
  } else {
    // Zooming in at the closest view with a tour city in sight (within ~600
    // km of the centre): glide over onto it, then the zoom carries on down
    // into its close-up -- no need to aim at it exactly. Panning or zooming
    // out lets go.
    const atBottom = cam.r <= MOTION.radius.zoomMin + 1e-3;
    if (cityCloseUpOn() && tour.mode === "manual" && atBottom && (inZoom < 0 || cam.vR < -1e-4) && !cuState.snapTo) startSnap(nearestTourCity(600));
    if (cuState.snapTo && (inLng || inLat || inZoom > 0 || !atBottom || tour.mode !== "manual" || tour.home)) cuState.snapTo = null;
    if (cuState.snapTo) {
      snapStep();
      cam.vLat = cam.vLng = 0;
      if (cam.vR > -MAN.zoomStep) cam.vR = -MAN.zoomStep;           // keep the push going into the dive
      return;
    }
    if (cam.r > MOTION.radius.zoomMin + 0.002 || !(inZoom < 0 || cam.vR < -1e-4)) tour.groundArmed = true;
    if (tour.groundArmed !== false && cam.vR < 0 && cam.r <= MOTION.radius.zoomMin && tour.mode === "manual") {
      groundBump(Math.min(1, Math.max(0.35, Math.abs(cam.vR) / MAN.zoomMax)));
      tour.groundArmed = false;
    }
    if (cam.r <= MOTION.radius.zoomMin && cam.vR < 0) cam.vR = 0;   // the ground stops the zoom dead
  }
  if (tour.home) {                                          // R3: ease back to the home view
    const k = 1 - Math.pow(0.9, f), H = OPENING;
    const dLng = ((H.lng - cam.lng + 540) % 360) - 180;
    cam.lat += (H.lat - cam.lat) * k; cam.lng += dLng * k; cam.r += (H.radius - cam.r) * k;
    cam.vLat = cam.vLng = cam.vR = 0;
    if (Math.abs(H.lat - cam.lat) < 0.01 && Math.abs(dLng) < 0.01) tour.home = null;
    tour.lastInput = nowMs;
  }
  if (tour.mode === "opening") {                           // the old port's opening turn (see OPENING)
    const p = openingPose(tour.opening ? tour.opening.frame0 + (nowMs - tour.opening.t0) / 1000 * FPS : OPENING.anim.finish);
    cam.lat = p.lat; cam.lng = p.lng; cam.r = p.r; cam.pitch = p.pitch; cam.yaw = p.yaw;
    if (tour.started && tour.opening && nowMs - tour.opening.t0 >= OPENING.firstDepartSeconds * 1000)
      startTravel(tour.target, nowMs);
  } else if (cam.pitch || cam.yaw) { cam.pitch = cam.yaw = 0; }
  // The globe moves from the centre (opening) to its usual spot right of the card.
  if (tour.started && viewShift !== VIEW_SHIFT) {
    const v = viewShift + (VIEW_SHIFT - viewShift) * Math.min(1, 0.035 * f);
    setViewShift(Math.abs(VIEW_SHIFT - v) < 0.001 ? VIEW_SHIFT : v);
  }
  // Decay every frame, held or not, as the old port: a held direction levels
  // off where the added speed and the decay balance (0.475 deg a frame for
  // the arrows; about 31 deg of turn for a 1 s hold, measured on the old port).
  const panDecay = Math.pow(MAN.rotateDecay, f);
  cam.vLat *= panDecay; cam.vLng *= panDecay;
  cam.vRoll *= Math.pow(MAN.rotateDecay, f);
  cam.vR *= Math.pow(MAN.zoomDecay, f);

  // ---- auto tour
  const idle = (nowMs - tour.lastInput) / 1000;
  if (tour.started && tour.mode === "manual") {
    // The old port: the selected city is the one nearest the middle of the
    // view, switched the moment another is nearer (its headlines, photo and
    // glow with it, from the preload cache). Out over empty ocean (nothing
    // within 10 degrees) the selection clears and the strip fades out, as in
    // the owner's recording of the old port (Lisbon -> mid-Atlantic -> ISS).
    const near = cityUnderCamera(10);
    if (near !== tour.selected) { select(near); if (near) prefetchNear(near); }
    if (idle >= AT.idleSeconds) startTravel(nextStop(tour.selected || cityUnderCamera(60)), nowMs);
  } else if (tour.mode === "travel") {
    // The old port's per-frame step (60 Hz: a fraction 1 - easeDecay of the way
    // each frame, at most maxSpeed degrees), applied for exactly the time that
    // has passed: on a 144 Hz screen the camera moves a little every frame
    // instead of jumping on some frames and standing still on others. At
    // 60 Hz it is the same motion as before.
    const T = tour.target;
    const dLat = T.lat - cam.lat;
    const dLng = ((T.lon - cam.lng + 540) % 360) - 180;
    const k = 1 - Math.pow(AT.easeDecay, f);
    let sLat = dLat * k, sLng = dLng * k;
    const m = Math.max(Math.abs(sLat), Math.abs(sLng)), cap = AT.maxSpeed * f;
    if (m > cap) { sLat *= cap / m; sLng *= cap / m; }
    cam.lat += sLat; cam.lng += sLng;
    const G = tour.startDist;
    const gone = Math.min(1, v3(tour.from.lat, tour.from.lng).angleTo(camDir()) / RAD / G);
    const rT = lerp(tour.from.r, RMIN, gone) + 0.00755 * G * Math.sin(Math.PI * gone);
    cam.r += (rT - cam.r) * (1 - Math.pow(0.9, f));           // anim_decay 0.9
    // Arrived at autopilot_epsilon (1 degree, layout.xml): the city's glow,
    // name, headlines and picture come on now. Waiting for anim_epsilon
    // (0.01 degree) held them back about 4 s while the camera, to the eye,
    // had already stopped; the last degree is glided in during the pause.
    // (Measured: within 1 degree came about 1.3 s after the camera looks
    // settled; the city now comes on within AT.activateDegrees, 3 degrees,
    // when the camera is already slowing onto it.)
    if (Math.abs(T.lat - cam.lat) < AT.activateDegrees && Math.abs(((T.lon - cam.lng + 540) % 360) - 180) < AT.activateDegrees) {
      arrive(nowMs);
    }
    if (cam.roll) cam.roll *= Math.pow(MAN.rotateDecay, f);
  } else if (tour.mode === "pause") {
    // Hold still on the city for autopilot_pause, settling the radius to 1.4
    // (anim_decay 0.9, snapped within anim_epsilon_radius 0.001).
    // The radius carries on along the flight's own curve as the last degrees
    // glide in (it used to switch to RMIN at arrival, zooming in about five
    // times faster in one frame: a visible "click" onto each city).
    let rT = RMIN, gone = 1;
    if (tour.from && tour.startDist) {
      const G = tour.startDist;
      gone = Math.min(1, v3(tour.from.lat, tour.from.lng).angleTo(camDir()) / RAD / G);
      rT = lerp(tour.from.r, RMIN, gone) + 0.00755 * G * Math.sin(Math.PI * gone);
    }
    cam.r += (rT - cam.r) * (1 - Math.pow(0.9, f));
    if (gone > 0.999 && Math.abs(cam.r - RMIN) < 0.001) cam.r = RMIN;
    // The last degree of the flight: the same eased step, snapped within
    // anim_epsilon 0.01.
    const T = tour.target;
    if (T) {
      const dLat = T.lat - cam.lat, dLng = ((T.lon - cam.lng + 540) % 360) - 180;
      if (Math.abs(dLat) < 0.01 && Math.abs(dLng) < 0.01) { cam.lat = T.lat; cam.lng = T.lon; tour.settledAt ??= nowMs; }
      else { const k = 1 - Math.pow(AT.easeDecay, f); cam.lat += dLat * k; cam.lng += dLng * k; }
    }
    // After autopilot_pause, and with no input for autopilot_timeout, fly on
    // to the next city in the list.
    // A new earthquake: the old project (v1.2) stays 10 s so it can be read.
    // Every stop (cities, the viewer's own city, earthquakes, storms, the ISS)
    // stays arrivalPauseSeconds, long enough to read the headlines.
    const stay = cityCloseUpOn() && isTourCity(tour.selected) ? Math.max(AT.arrivalPauseSeconds, cuStaySeconds()) : AT.arrivalPauseSeconds;
    // Counted from the moment the city comes on: its glow, name, headlines
    // and picture are on screen for the whole stay (the camera settles on
    // the city in the first few seconds of it).
    const since = tour.arrivedAt;
    if (tour.started && (nowMs - since) / 1000 >= stay && idle >= AT.idleSeconds) {
      startTravel(nextStop(tour.selected), nowMs);
    }
  }
  applyCamera();
  const cuK = cityCloseUpCamera(nowMs, f / FPS);    // the city close-up

  // Near plane follows altitude.
  const alt = cam.r - 1;
  const near = cuK > 0 ? clamp((camera.position.length() - 1) * 0.25, 0.0002, 0.1) : clamp(alt * 0.25, 0.01, 0.1);
  if (Math.abs(camera.near - near) > near * 0.05) { camera.near = near; camera.updateProjectionMatrix(); }

  // ---- radius bands
  const inBand = (b) => cam.r >= b[0] && cam.r <= b[1];
  // Clouds: fade over 30 frames when entering/leaving their band; slow rotation.
  // The ground program draws the clouds (CloudMap) and their shadows:
  // U_cloud.x turns the map, U_cloud.y is the cloud opacity (layout.xml:
  // cloud_alpha_max 1.0, cloud_fade_in_duration 30 frames).
  const CL = MOTION.clouds;
  const cTarget = earthUniforms.CloudMap.value && CONFIG.live?.clouds !== false
    ? lerp(CL.alpha[0], CL.alpha[1], clamp((cam.r - CL.fadeRadius[0]) / (CL.fadeRadius[1] - CL.fadeRadius[0]), 0, 1)) : 0;
  const cu = earthUniforms.U_cloud.value;
  cu.y += clamp(cTarget - cu.y, -f / CL.fadeFrames, f / CL.fadeFrames);
  cu.x = (cu.x + MOTION.clouds.rotatePerFrame * f / (2 * Math.PI)) % 1;

  // Regional detail: cross-fade from the current city to the destination.
  let wNext = 0;
  if (tour.mode === "travel") wNext = smoothstep(1 - (camDir().angleTo(v3(tour.target.lat, tour.target.lon)) / RAD) / tour.startDist, 0.3, 0.85);
  const gf = earthUniforms.globeFade.value;
  const dCur = closeUps[cuCur].update(alt, (1 - wNext) * gf);
  const dNext = closeUps[1 - cuCur].update(alt, wNext * gf);
  const cp = camera.position;
  earthUniforms.U_camera.value.set(cp.x, cp.y, cp.z, cp.lengthSq());
  earthUniforms.U_color.value.set(gf, gf, gf, 1);
  // noise_base 64 + noise_max 32, moving at noise_speed 0.0025 per frame.
  earthUniforms.U_nightLook.value.z = NIGHT_TWINKLE() ? 1 : 0;
  earthUniforms.U_noise.value.y = NIGHT_TWINKLE() ? 32 * (0.5 + 0.5 * Math.sin((nowMs / 1000) * FPS * 0.0025 * 2 * Math.PI)) : 16;
  const cuDetail = cityCUs[cuA].update(camera.position.length() - 1, cuK > 0 ? 1 : 0);
  cityCUs[1 - cuA].update(camera.position.length() - 1, 0);   // the next spot, loading out of sight
  showCloseupCredit(Math.max(dCur, dNext) > 0.05, cuDetail > 0.05);

  updateLabels(f, inBand(MOTION.markers.showRadius), inBand(MOTION.markers.infoRadius));
  updateCuCard(cuK);
}

// Down in a city's close-up its map label is out of view: a small, soft card
// at the top of the screen says where we are -- the city, its country, and
// its temperature and local time (the label's own line) -- fading in as the
// camera comes down and out as it climbs back up.
const cuCard = document.createElement("div");
cuCard.className = "cu-card";
cuCard.innerHTML = "<b></b><span></span><small></small>";
document.body.appendChild(cuCard);
function updateCuCard(k) {
  const c = tour.selected;
  const near = c && CITIES.includes(c) && v3(c.lat, c.lon).angleTo(camDir()) < 1.2 * RAD;
  const op = near ? smoothstep(k, 0.55, 0.9) : 0;
  if (Math.abs(op - (cuCard._op ?? -1)) > 0.004) { cuCard._op = op; cuCard.style.opacity = op.toFixed(3); }
  if (op <= 0) return;
  // the city name's own line: temperature and local time ("21°C  05: 38 AM")
  const L = labels.find((x) => x.c === c);
  let sub = L?.info.textContent || "";
  if (!sub && c.tz) { try { sub = formatPs3Clock(c.tz, new Date(), use24h()); } catch { sub = ""; } }
  if (cuCard._key !== c.name + sub) {
    cuCard._key = c.name + sub;
    cuCard.children[0].textContent = c.name;
    cuCard.children[1].textContent = c.country || "";
    cuCard.children[2].textContent = sub;
  }
}

let creditOn = null;
let weatherCredit = "Open-Meteo";          // or MET Norway (CC BY 4.0) when it filled in
function showCloseupCredit(on, cityOn = false) {
  const key = `${on}|${cityOn}`;
  if (key === creditOn) return;
  creditOn = key;
  const base = `Earth: NASA · Clouds: © EUMETSAT · Volcanoes: NASA EONET · Weather: ${weatherCredit}`;
  $("credits").textContent = (on ? `${base} · Regional detail: ${CONFIG.regional.day.credit}` : base)
    + (cityOn ? ` · Close-up: ${CONFIG.cityCloseUpTiles.day.credit}, ${CONFIG.cityCloseUpTiles.night.credit}, ${CONFIG.cityCloseUpTiles.terrain?.credit ?? ""}` : "");
}

// ---------------------------------------------------------------- city labels
// Marker dot + name for each tour city on the visible side of the globe.
// Unselected cities' names dim over point_fade_duration (10 frames); the
// local time and temperature sit under each name.
const labelLayer = document.createElement("div");
labelLayer.className = "city-labels";
document.body.insertBefore(labelLayer, $("clinic"));
function makeLabel(c) {
  const el = document.createElement("div");
  el.className = "city-label";
  const dot = document.createElement("i");
  const wx = document.createElement("em");         // weather icon
  const txt = document.createElement("div");
  const name = document.createElement("span");
  name.textContent = c.name;
  const info = document.createElement("small");    // temperature and local time
  txt.append(name, info);
  const panel = document.createElement("div");      // icon + text: dims when unselected
  panel.className = "panel";
  panel.append(wx, txt);
  el.append(dot, panel);
  labelLayer.appendChild(el);
  return { c, el, panel, wx, info, wxKey: "", p: v3(c.lat, c.lon, 1.0), sel: 1 };
}
const labels = CITIES.map(makeLabel);
const _ndc = new THREE.Vector3();
let infoReady = false;
function updateLabels(f, markersOn, infoOn) {
  const on = tourCfg.showCityLabels !== false && tour.started;
  labelLayer.classList.toggle("on", on && markersOn);
  labelLayer.classList.toggle("info-on", on && infoOn);
  if (!on) return;
  if (!infoReady) { infoReady = true; refreshInfoText(); }

  const w = window.innerWidth, h = window.innerHeight;
  // Recorded from the old port: the city dots show at every height, but the
  // names (with weather and time) and the news strip only come in as the
  // camera comes down -- none at 1.78 R, faint at 1.73, full by about 1.6.
  const nameFade = clamp((1.76 - cam.r) / (1.76 - 1.6), 0, 1);
  $("newsStrip").style.setProperty("--height-fade", nameFade.toFixed(3));
  const selStep = (1 - MOTION.markers.unselectedAlpha) / MOTION.markers.unselectedFadeFrames * f;
  // As the old port shows them (measured at its opening view, 1080p): every
  // city's dot is drawn, but the names (with weather and time) fade with
  // their distance from the middle of the view: full within 5 degrees of
  // arc, gone by 18 -- so a crowded region shows the few names round the
  // centre, not all of them.
  const cd = camDir();
  const NAME_FULL = Math.cos(5 * RAD), NAME_GONE = Math.cos(18 * RAD);
  for (const L of labels) {
    const isSel = L.c === tour.selected;
    const selTarget = !tour.selected || isSel ? 1 : MOTION.markers.unselectedAlpha;
    L.sel += clamp(selTarget - L.sel, -selStep, selStep);
    _ndc.copy(L.p).project(camera);
    const inView = Math.abs(_ndc.x) < 1.05 && Math.abs(_ndc.y) < 1.05;
    // pointSpriteVP (world.cgelf .text0006): the dot keeps its size while
    // dot(point, camera) >= 1 (the point is on the camera's side of the
    // horizon) and drops to 0.125 px otherwise -- a hard cut at the limb.
    // Only the name panel dims for unselected cities; the dot does not.
    const a = inView && L.p.dot(camera.position) >= 1 ? 1 : 0;
    if (L.isSel !== isSel) {                              // even off screen: no stale glow
      L.isSel = isSel;
      // The pulse runs on one clock for every city (as the old port's frame
      // counter), so a newly selected city joins it where it is instead of
      // starting from dim.
      // The glow starts at its brightest (half way through the 0.81 s cycle)
      // the moment the city is selected, instead of fading up from dark.
      if (isSel) L.el.style.setProperty("--pulse-delay", "-0.405s");
      L.el.classList.toggle("current", isSel);
    }
    if (L.a !== a) { L.a = a; L.el.style.opacity = a; }
    if (a <= 0) continue;
    const centre = smoothstep(L.p.dot(cd), NAME_GONE, NAME_FULL);
    const op = (L.sel * nameFade * centre).toFixed(3);
    if (L.op !== op) { L.op = op; L.panel.style.opacity = op; }
    const tf = `translate(${((_ndc.x + 1) / 2 * w).toFixed(1)}px, ${((1 - _ndc.y) / 2 * h).toFixed(1)}px)`;
    if (L.tf !== tf) { L.tf = tf; L.el.style.transform = tf; }
  }
}
// Weather icon, temperature and local time next to every city name.
// Re-rendered on each minute and whenever the weather refreshes.
let lwpClockEntries = [];
let lwpFeedData = { cities: [], quakes: [], storms: [], iss: null };

function refreshInfoText() {
  const now = new Date(), h24 = use24h();
  for (let i = 0; i < labels.length; i++) {
    const L = labels[i];
    if (L.c.kind) {                       // an earthquake or a storm: its own icon and text
      L.info.textContent = miles() ? L.c.subF : L.c.sub;
      if (L.wxKey !== L.c.kind) { L.wxKey = L.c.kind; L.wx.innerHTML = `<img src="${L.c.icon}" alt="">`; }
      continue;
    }
    const time = formatPs3Clock(L.c.tz, now, h24);
    const w = weather.get(L.c);
    // "21°C  05: 38 AM", as update_city_info.py writes the subname line. The
    // temperatures baked into the PS3 feed files are not used: they are old,
    // and some cities had them while others did not.
    L.info.textContent = w ? `${formatTemp(w.tempC)}  ${time}` : time;
    const key = w ? `${w.code}/${w.isDay}` : "";
    if (key !== L.wxKey) {
      L.wxKey = key;
      L.wx.innerHTML = w ? twcIcon(w.code, w.isDay) : "";
    }
  }
}


// ---------------------------------------------------------------- earthquakes and storms
// As in LWP-PC: every strong earthquake (USGS, M6.0+) and every Category 4-5
// hurricane, typhoon or cyclone (GDACS) is a point on the globe with its own
// icon (the port's quake and storm icons), a name and a line under it, a
// picture and three lines of detail in the strip. A new one is flown to
// straight away (the tour carries on after the usual dwell); a new quake
// also rumbles a connected controller.
const liveEvents = [];            // the "cities" for quakes and storms on the globe
const pendingEvents = [];         // new ones the tour still has to visit
const seenEvents = new Set();
const evCfg = () => CONFIG.live || {};

// Tour order (the owner's pattern): every city and the ISS once, in a
// shuffled order, before any comes round again; two cities of the same
// country are never visited one after the other (they are spread through the
// cycle). A new earthquake, storm, or a city with new breaking news goes
// first, then the cycle carries on where it was (those visits don't count).
// The cycle is saved, so a restart carries on with it.
const CYCLE_KEY = "tour-cycle-v1";
const stopId = (c) => (c === issEvent ? "ISS" : c?.name);
const countryOf = (id) => (id === "ISS" ? "ISS" : CITIES.find((c) => c.name === id)?.country);
function shuffleCycle(lastId) {
  const pool = [...CITIES.map((c) => c.name), "ISS"];
  for (let i = pool.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [pool[i], pool[j]] = [pool[j], pool[i]]; }
  // Spread countries: take, each time, the first remaining stop whose country
  // differs from the previous one (falling back only if none is left).
  const out = []; let prev = lastId ? countryOf(lastId) : null;
  while (pool.length) {
    let k = pool.findIndex((id) => countryOf(id) !== prev);
    if (k < 0) k = 0;
    const id = pool.splice(k, 1)[0]; out.push(id); prev = countryOf(id);
  }
  return out;
}
let cycle = (() => { try { return JSON.parse(localStorage.getItem(CYCLE_KEY) || "null"); } catch { return null; } })();
const saveCycle = () => { try { localStorage.setItem(CYCLE_KEY, JSON.stringify(cycle)); } catch { /* full */ } };
function nextCycleStop(fromId) {
  const valid = new Set([...CITIES.map((c) => c.name), "ISS"]);
  if (!cycle || !Array.isArray(cycle.order) || cycle.order.length !== valid.size || !cycle.order.every((id) => valid.has(id)))
    cycle = { order: shuffleCycle(fromId), visited: [] };
  const visited = new Set(cycle.visited);
  if (fromId && valid.has(fromId)) visited.add(fromId);
  if (visited.size >= valid.size) { cycle = { order: shuffleCycle(fromId), visited: [] }; visited.clear(); if (fromId) visited.add(fromId); }
  const prevCountry = fromId ? countryOf(fromId) : null;
  let id = cycle.order.find((x) => !visited.has(x) && countryOf(x) !== prevCountry) || cycle.order.find((x) => !visited.has(x));
  if (id === "ISS" && !liveEvents.includes(issEvent)) {               // ISS not tracked yet: take it later
    id = cycle.order.find((x) => !visited.has(x) && x !== "ISS" && countryOf(x) !== prevCountry) || id;
  }
  cycle.visited = [...visited]; saveCycle();
  return id === "ISS" ? issEvent : CITIES.find((c) => c.name === id);
}
// The viewer's own city, visited right after the first stop (Algiers) on
// every launch. config.js homeCity names it; otherwise it is found from this
// PC's time zone and its internet address's rough location (get.geojs.io, as
// the old project's "your city" card did; saved for a day): the tour city
// nearest that location, among the cities in this PC's time zone when the
// two disagree (an internet address can be placed hundreds of km away).
let homeCity = null, homeVisited = false;
async function findHomeCity() {
  const byName = (n) => CITIES.find((c) => c.name.toLowerCase() === String(n).toLowerCase()) || null;
  if (CONFIG.homeCity) return byName(CONFIG.homeCity);
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let geo = null;
  try {
    const saved = JSON.parse(localStorage.getItem("home-geo-v1") || "null");
    if (saved && Date.now() - saved.at < 86400e3) geo = saved;
  } catch { /* none */ }
  if (!geo) {
    try {
      const d = await (await fetch("https://get.geojs.io/v1/ip/geo.json", { cache: "no-store" })).json();
      geo = { at: Date.now(), lat: +d.latitude, lon: +d.longitude, tz: d.timezone };
      try { localStorage.setItem("home-geo-v1", JSON.stringify(geo)); } catch { /* full */ }
    } catch { geo = null; }
  }
  const nearest = (list, lat, lon) => list.reduce((a, b) => (!a || v3(lat, lon).angleTo(v3(b.lat, b.lon)) < v3(lat, lon).angleTo(v3(a.lat, a.lon)) ? b : a), null);
  const sameTz = CITIES.filter((c) => c.tz === tz);
  if (geo && Number.isFinite(geo.lat) && (geo.tz === tz || !sameTz.length)) {
    const c = nearest(CITIES, geo.lat, geo.lon);
    if (c && v3(geo.lat, geo.lon).angleTo(v3(c.lat, c.lon)) < 4 * RAD) return c;      // within ~450 km
  }
  if (sameTz.length) return geo && Number.isFinite(geo.lat) ? nearest(sameTz, geo.lat, geo.lon) : sameTz[0];
  return null;
}

function nextStop(from) {
  if (CITIES.includes(from)) lastTourCity = from;
  while (pendingEvents.length) {                // priority: new quakes, storms, breaking news
    const e = pendingEvents.shift();
    if (liveEvents.includes(e) || CITIES.includes(e)) return e;
  }
  // The city whose flight an earthquake or storm interrupted.
  if (resumeStop) { const r = resumeStop; resumeStop = null; if (r !== from) return r; }
  // The very first stop stays the old port's (the city nearest the opening view).
  if (!from) return pickNext(null);
  // Then the viewer's own city, once per launch.
  if (!homeVisited && homeCity) { homeVisited = true; if (homeCity !== from) return homeCity; }
  const fromId = (CITIES.includes(from) || from === issEvent) ? stopId(from) : stopId(lastTourCity);
  return nextCycleStop(fromId) || pickNext(from);
}

const timeText = (ms) => new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "2-digit", ...hourOpts() }).format(new Date(ms));
const latLonText = (lat, lon) => `${Math.abs(lat).toFixed(1)}°${lat >= 0 ? "N" : "S"} ${Math.abs(lon).toFixed(1)}°${lon >= 0 ? "E" : "W"}`;

function eventPicture(e) {
  const W = 480, H = 270, cv = document.createElement("canvas");
  cv.width = W; cv.height = H;
  const g = cv.getContext("2d");
  const cx = W / 2, cy = H / 2;
  if (e.kind === "quake") {
    g.fillStyle = "rgb(14,10,12)"; g.fillRect(0, 0, W, H);
    g.lineWidth = 2.5;
    for (let i = 9; i >= 1; i--) {
      const f = 1 - i / 9;
      g.strokeStyle = `rgb(${60 + 180 * f | 0},${18 + 30 * f | 0},16)`;
      g.beginPath(); g.arc(cx, cy, 15 + i * 17, 0, Math.PI * 2); g.stroke();
    }
    g.textAlign = "center"; g.fillStyle = "#000"; g.font = "bold 75px Arial, sans-serif";
    g.fillText(`M${e.mag.toFixed(1)}`, cx + 2, cy + 22); g.fillStyle = "#fff"; g.fillText(`M${e.mag.toFixed(1)}`, cx, cy + 20);
    g.fillStyle = "rgb(255,120,90)"; g.font = "bold 20px Arial, sans-serif"; g.fillText("EARTHQUAKE", cx, cy + 58);
  } else {
    g.fillStyle = "rgb(8,14,24)"; g.fillRect(0, 0, W, H);
    g.strokeStyle = "rgb(30,70,110)"; g.lineWidth = 13; g.lineCap = "round";
    for (const arm of [0, Math.PI]) {
      g.beginPath();
      for (let i = 0; i < 40; i++) {
        const t = i / 39, a = arm + t * 2.4, r = 125 * (0.25 + 0.75 * t);
        const x = cx + r * Math.cos(a), y = cy - r * Math.sin(a);
        i ? g.lineTo(x, y) : g.moveTo(x, y);
      }
      g.stroke();
    }
    g.textAlign = "center"; g.font = "bold 48px Arial, sans-serif";
    g.fillStyle = "#000"; g.fillText(e.stormName.toUpperCase(), cx + 2, cy - 8);
    g.fillStyle = "#fff"; g.fillText(e.stormName.toUpperCase(), cx, cy - 10);
    g.font = "bold 20px Arial, sans-serif"; g.fillStyle = "rgb(140,210,255)";
    g.fillText(`${e.stormKind}${e.cat ? " · " + e.cat : ""}`.toUpperCase(), cx, cy + 30);
  }
  return cv.toDataURL("image/jpeg", 0.9);
}

// Distances follow Options > Units & Display > Distance (the USGS place text
// is in km: "12 km SSW of Town" becomes "7 mi SSW of Town").
function quakeEvent(q) {
  const mi = miles();
  const place = mi ? q.place.replace(/(\d+(?:\.\d+)?) km\b/g, (_, n) => `${Math.round(n / 1.609)} mi`) : q.place;
  const sub = place.length <= 34 ? place : place.slice(0, 33).trimEnd() + "…";
  const depth = !Number.isFinite(q.depth) ? "depth unknown"
    : mi ? `${Math.round(q.depth / 1.609)} mi deep` : `${Math.round(q.depth)} km deep`;
  return {
    id: `quake:${q.id}`, kind: "quake", name: `M${q.mag.toFixed(1)} Earthquake`, country: "Earthquake", raw: q,
    lat: q.lat, lon: q.lon, mag: q.mag, sub, subF: sub, icon: "data/plugins/live/quake/720/quake.png",
    lines: [[`Magnitude ${q.mag.toFixed(1)} earthquake: ${place}`], [`Struck at ${timeText(q.time)} your time; ${depth}`],
            ["Source: U.S. Geological Survey"]],
  };
}

function stormEvent(t) {
  const kmh = Math.round(t.kmh), mph = Math.round(t.kmh / 1.609);
  const title = `${t.kind} ${t.name}`;
  const strength = (t.cat ? `Category ${t.cat}, w` : "W") + (miles() ? `inds up to ${mph} mph (${kmh} km/h)` : `inds up to ${kmh} km/h (${mph} mph)`);
  return {
    id: `storm:${t.id}`, kind: "storm", name: title, raw: t, country: t.kind, stormName: t.name, stormKind: t.kind, cat: t.cat,
    lat: t.lat, lon: t.lon, icon: "data/plugins/live/storm/720/storm.png",
    sub: (t.cat ? `Cat ${t.cat}  ` : "") + `${kmh} km/h`, subF: (t.cat ? `Cat ${t.cat}  ` : "") + `${mph} mph`,
    lines: [[`${title}: ${strength}`],
            [`Last position ${latLonText(t.lat, t.lon)}, reported at ${timeText(t.time)} your time` + (t.near ? `; near ${t.near}` : "")],
            ["Source: GDACS (NOAA and JTWC advisories)"]],
  };
}

// Replace the events of one kind with a fresh list; returns the new ones.
function setEvents(kind, list) {
  const keep = new Map(list.map((e) => [e.id, e]));
  for (let i = liveEvents.length - 1; i >= 0; i--) {
    const e = liveEvents[i];
    if (e.kind !== kind) continue;
    const fresh = keep.get(e.id);
    if (fresh) { Object.assign(e, fresh); keep.delete(e.id); continue; }
    liveEvents.splice(i, 1);
    const li = labels.findIndex((L) => L.c === e);
    if (li >= 0) { labels[li].el.remove(); labels.splice(li, 1); }
    if (tour.selected === e && tour.mode !== "travel") select(null);
  }
  const added = [...keep.values()];
  for (const e of added) {
    liveEvents.push(e);
    const L = makeLabel(e);
    L.el.classList.add("event", e.kind);
    // M6.0 and up (the strength the feed is filtered at by default) pulse red;
    // smaller ones (only with the "M5.5 and up" option) keep the still icon.
    if (e.kind === "quake" && e.mag >= 6.0) L.el.classList.add("pulse");
    labels.push(L);
  }
  if (added.length) refreshInfoText();
  return added.filter((e) => !seenEvents.has(e.id));
}

// Fly to new events straight away unless someone is using the controls.
function announce(newOnes) {
  for (const e of newOnes) { seenEvents.add(e.id); pendingEvents.push(e); }
  if (!newOnes.length || !tour.started || tour.mode === "manual" || tour.mode === "opening") return;
  // A flight under way to a city is cut short for the event; that city
  // comes straight after it (so, e.g., your own city is not skipped).
  if (tour.mode === "travel" && tour.target && !tour.target.kind) resumeStop = tour.target;
  startTravel(nextStop(tour.selected), performance.now());
}
let resumeStop = null;

// ---------------------------------------------------------------- ISS (old project v1.3)
// A marker that follows the real International Space Station: its path for
// the next hours is downloaded at start-up and with each 3-hour refresh, and
// the marker moves along it second by second in between (interpolated), with
// a NASA photo and its altitude, as the old port's ISS item.
let issTrack = [];
const issEvent = { id: "iss", kind: "iss", name: "Space Station (ISS)", country: "ISS", lat: 0, lon: 0,
  icon: "data/plugins/live/iss/720/iss.png", sub: "", subF: "", lines: [] };
function issAt(t) {
  if (!issTrack.length) return null;
  let i = issTrack.findIndex((p) => p[0] > t);
  if (i <= 0) { const p = issTrack[i < 0 ? issTrack.length - 1 : 0]; return { lat: p[1], lon: p[2], alt: p[3] }; }
  const a = issTrack[i - 1], b = issTrack[i], k = (t - a[0]) / (b[0] - a[0]);
  const dLon = ((b[2] - a[2] + 540) % 360) - 180;                 // across the date line
  return { lat: a[1] + (b[1] - a[1]) * k, lon: ((a[2] + dLon * k + 540) % 360) - 180, alt: a[3] + (b[3] - a[3]) * k };
}
function tickIss() {
  const p = issAt(Date.now());
  if (!p) return;
  issEvent.lat = p.lat; issEvent.lon = p.lon;
  const L = labels.find((x) => x.c === issEvent);
  if (L) L.p.copy(v3(p.lat, p.lon, 1.0));
  const sub = `${Math.round(p.alt)} km up`, subF = `${Math.round(p.alt / 1.609)} mi up`;
  if (sub !== issEvent.sub) {
    issEvent.sub = sub; issEvent.subF = subF;
    issEvent.lines = [["International Space Station: where it is right now"],
      [miles() ? `About ${Math.round(p.alt / 1.609)} mi up, flying at 17,100 mph: once round the Earth every 92 minutes`
               : `About ${Math.round(p.alt)} km up, flying at 27,600 km/h: once round the Earth every 92 minutes`],
      ["The marker follows it live. Position: wheretheiss.at"]];
    if (L) L.info.textContent = miles() ? subF : sub;
  }
}
async function startIss() {
  if (evCfg().iss === false) return;
  const load = async () => {
    try {
      issTrack = await live.fetchIssTrack((CONFIG.live?.newsRefreshHours ?? 3) + 1);
      if (!liveEvents.includes(issEvent)) {
        tickIss();
        setEvents("iss", [issEvent]);
        issEvent.picture = "data/city_photos/iss.jpg";   // the old project's ISS picture (NASA, public domain)
      }
    } catch (e) { console.warn("ISS track unavailable:", e); }
  };
  await load();
  setInterval(load, (CONFIG.live?.newsRefreshHours ?? 3) * 3600e3);
  setInterval(tickIss, 1000);
}

// ---------------------------------------------------------------- Satellite Mode
// Options > Satellite Mode: the camera rides the ISS's real orbit (satellite.js),
// looking ahead over the horizon as in the crews' time-lapses. The city names,
// headlines and cards stand aside; the clouds, night lights, lightning,
// aurora, Moon and the sun's flare carry on as usual, and the airglow comes up
// over the night side's horizon.
const SAT_FOV = 62;                                     // a wide lens, as the station's cameras
let satSwitching = false;
function satFadeEl() {
  let el = $("satFade");
  if (!el) { el = document.createElement("div"); el.id = "satFade"; document.body.appendChild(el); }
  return el;
}
function satelliteMode(on) {
  if (on === sat.on || satSwitching || !tour.started) return;
  satSwitching = true;
  const veil = satFadeEl();
  veil.classList.add("on");                             // a short fade through black either way
  sound(on ? "view" : "optClose");
  setTimeout(() => {
    if (on) {
      if (!sat.fromTrack(issTrack, Date.now())) sat.fromPlace(cam.lat, cam.lng, Date.now());
      sat.start(Date.now());
      satDetail.setSea(live.seaMask(2048, 1024).then((m) => ({ m, W: 2048, H: 1024 })));
      sat.back = { lat: cam.lat, lng: cam.lng, r: cam.r };
      setNewsFocus(-1); hideNews(); hideCard(); select(null);
      cuState.dive = 0; cuState.k = 0; cuState.snapTo = null; tour.home = null; tour.target = null;
      cam.vLat = cam.vLng = cam.vR = cam.vRoll = 0; cam.roll = 0;
      tour.mode = "satellite";
      document.body.classList.add("satellite");
      camera.fov = SAT_FOV; camera.updateProjectionMatrix();
    } else {
      // Back to the globe, looking down on where the station got to.
      const p = sat.latLng();
      sat.stop(); sat.airglow(0); sat.twilight(0); earthUniforms.U_glitter.value.z = 0; earthUniforms.U_glitter.value.w = 0;
      document.body.classList.remove("satellite");
      camera.fov = MOTION.fovY ?? 45; camera.updateProjectionMatrix();
      cam.lat = clamp(p.lat, -80, 80); cam.lng = p.lng; cam.r = RMAX; cam.pitch = cam.yaw = 0;
      tour.mode = "manual"; tour.lastInput = performance.now();   // the tour picks up again after the usual idle time
    }
    tour.lastMs = performance.now();
    requestAnimationFrame(() => requestAnimationFrame(() => { veil.classList.remove("on"); satSwitching = false; }));
  }, 450);
}
function satelliteCamera(dt, f) {
  // Looking around: sticks, held arrows / W A S D (dragging adds straight to it)
  const kx = (keys.has("arrowright") ? 1 : 0) - (keys.has("arrowleft") ? 1 : 0);
  const ky = (keys.has("arrowdown") ? 1 : 0) - (keys.has("arrowup") ? 1 : 0);
  const L = sat.look;
  const ease = 1 - Math.pow(0.0005, dt);                // quick to start, quick to stop, never a jolt
  L.vYaw += (clamp(satPad.x + kx, -1, 1) * 40 * RAD - L.vYaw) * ease;
  L.vPitch += (clamp(satPad.y + ky, -1, 1) * 28 * RAD - L.vPitch) * ease;
  const speed = SAT_SPEEDS[CONFIG.satelliteSpeed] ?? SAT_SPEEDS.timelapse;
  sat.pose(camera, dt, speed);
  const ll = sat.latLng();
  cam.lat = ll.lat; cam.lng = ll.lng;                   // (the regional maps and anything asking where we are)
  atmoMesh.visible = true;
  cuState.k = 0; cuState.p = 0; cuState.alt = null; CU_GRADE.value.w = 0;
  const alt = camera.position.length() - 1;
  const near = clamp(alt * 0.2, 0.002, 0.05);
  if (Math.abs(camera.near - near) > near * 0.05) { camera.near = near; camera.updateProjectionMatrix(); }
  // The clouds stay full (the globe fades them out close in).
  const cu = earthUniforms.U_cloud.value;
  const cTarget = earthUniforms.CloudMap.value && CONFIG.live?.clouds !== false ? 1 : 0;
  cu.y += clamp(cTarget - cu.y, -f / MOTION.clouds.fadeFrames, f / MOTION.clouds.fadeFrames);
  sat.airglow(earthUniforms.globeFade.value);
  sat.twilight(earthUniforms.globeFade.value);          // the orbital sunset / sunrise arc
  earthUniforms.U_glitter.value.w = 1;                  // the sea's glint as one smooth sheen (ground.frag)
  earthUniforms.U_glitter.value.z = 1;                  // the sharp land and the clouds' finer detail (ground.frag satDay, cloudDetail)
  satDetail.update(camera.position, sat.fwd, true, earthUniforms.sunDir.value);
  const gf = earthUniforms.globeFade.value;
  closeUps[cuCur].update(alt, 0); closeUps[1 - cuCur].update(alt, 0);
  const cp = camera.position;
  earthUniforms.U_camera.value.set(cp.x, cp.y, cp.z, cp.lengthSq());
  earthUniforms.U_color.value.set(gf, gf, gf, 1);
  earthUniforms.U_noise.value.y = NIGHT_TWINKLE() ? 32 * (0.5 + 0.5 * Math.sin((performance.now() / 1000) * FPS * 0.0025 * 2 * Math.PI)) : 16;
  cityCUs[0].update(alt, 0); cityCUs[1].update(alt, 0);
  showCloseupCredit(false, false);
  updateLabels(f, false, false);
  updateCuCard(0);
}

async function refreshQuakes() {
  if (evCfg().quakes === false) return;
  try {
    const qs = await live.fetchQuakes({ minMag: evCfg().quakeMinMagnitude ?? 6.0, hours: evCfg().quakeHours ?? 24 });
    announce(setEvents("quake", qs.map(quakeEvent)));
  } catch (e) { console.warn("Earthquakes unavailable:", e); }
}
async function refreshStorms() {
  if (evCfg().storms === false) return;
  try {
    announce(setEvents("storm", (await live.fetchStorms()).map(stormEvent)));
  } catch (e) { console.warn("Storms unavailable:", e); }
}
function startLiveEvents() {
  refreshQuakes(); refreshStorms(); startIss();
  setInterval(refreshQuakes, (evCfg().quakeRefreshMinutes ?? 10) * 60e3);
  setInterval(refreshStorms, (evCfg().stormRefreshMinutes ?? 30) * 60e3);
}

// Controller rumble on arriving at a new quake, exactly as the old project
// (host/lwp_hle.cpp quake_rumble): 0.6 s after it comes on screen, 2 pulses
// below M6.5, 3 below M7.5, 4 from M7.5; each pulse 0.38 s (the last 0.7 s)
// with 0.26 s between; the strong motor at clamp(150 + (M - 6) x 50, 120,
// 255) / 255 and the weak one at half that. Each quake rumbles once, ever:
// the quakes already felt are remembered (the old quake_felt.txt, last 200).
// The zoom's "ground" bump: one short pulse, 0.12-0.2 s, strength with speed.
// Controller rumble: the shell sends it straight to the pad (PlayStation pads
// by HID, Xbox pads by XInput), since WebView2's Gamepad API can't rumble a
// DualSense or DualShock; in a plain browser, the Gamepad API.
function padRumble(strong, weak, ms) {
  const host = window.chrome?.webview;
  if (host) { host.postMessage({ cmd: "rumble", strong, weak, ms }); return; }
  for (const pad of navigator.getGamepads?.() || []) {
    pad?.vibrationActuator?.playEffect?.("dual-rumble", { duration: ms, strongMagnitude: strong, weakMagnitude: weak })?.catch?.(() => {});
  }
}
function groundBump(speed) {
  if (evCfg().rumble === false) return;
  const strong = 0.35 + 0.55 * speed, dur = Math.round(120 + 80 * speed);
  padRumble(strong, strong * 0.6, dur);
}
const FELT_KEY = "quake-felt-v1";
function rumbleFor(e) {
  if (evCfg().rumble === false) return;
  let felt = [];
  try { felt = JSON.parse(localStorage.getItem(FELT_KEY) || "[]"); } catch { /* none */ }
  if (felt.includes(e.id)) return;
  felt.push(e.id); if (felt.length > 200) felt = felt.slice(-200);
  try { localStorage.setItem(FELT_KEY, JSON.stringify(felt)); } catch { /* full */ }
  const pulses = e.mag < 6.5 ? 2 : e.mag < 7.5 ? 3 : 4;
  const lo = clamp(150 + Math.trunc((e.mag - 6) * 50), 120, 255) / 255;
  let at = 600;
  for (let i = 0; i < pulses; i++) {
    const dur = i === pulses - 1 ? 700 : 380;
    setTimeout(() => padRumble(lo, lo / 2, dur), at);
    at += dur + 260;
  }
}

// ---------------------------------------------------------------- selection & card
// Card show/hide: 0.5 s overlay cross-fade. Changing city: 0.25 s content
// cross-fade plus a 0.5 s pulse.
function select(city) {
  if (city === tour.selected) return;
  const prev = tour.selected;
  tour.selected = city;
  if (!city) { hideCard(); hideNews(); return; }
  if (city.kind === "quake") rumbleFor(city);   // the old project: when a quake comes on screen, by tour or by hand
  showNews(city);
  loadCityMedia(city);
  if (!prev || !$("cityCard").classList.contains("shown")) { showCard(city); return; }
  const card = $("cityCard");
  card.classList.add("swapping");
  clearTimeout(select._t);
  select._t = setTimeout(() => {
    if (tour.selected !== city) return;
    showCard(city);
    card.classList.remove("swapping");
    card.classList.remove("pulse"); void card.offsetWidth; card.classList.add("pulse");
  }, MOTION.cityInfoCrossFadeSeconds * 1000);
}

// ---------------------------------------------------------------- city card
const locale = CONFIG.locale;
// Options > Units & Display > Clock: Automatic (the PC's language), 12-Hour or 24-Hour.
const hourOpts = () => (CONFIG.clock === "24h" ? { hourCycle: "h23" } : CONFIG.clock === "12h" ? { hourCycle: "h12" } : {});
function use24h() {
  if (CONFIG.clock === "24h") return true;
  if (CONFIG.clock === "12h") return false;
  return /h2[34]/.test(new Intl.DateTimeFormat(CONFIG.locale, { hour: "numeric" }).resolvedOptions().hourCycle || "");
}
function miles() { return CONFIG.distance === "mi"; }   // Options > Units & Display > Distance

function offsetMinutes(tz, date) {
  const name = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "longOffset" })
    .formatToParts(date).find((p) => p.type === "timeZoneName")?.value || "GMT";
  const m = name.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
  if (!m) return 0;
  return (m[1] === "-" ? -1 : 1) * (Number(m[2]) * 60 + Number(m[3] || 0));
}

function relativeToHere(tz, date) {
  const diff = offsetMinutes(tz, date) - -date.getTimezoneOffset();
  if (diff === 0) return "same time as here";
  const h = Math.floor(Math.abs(diff) / 60), m = Math.abs(diff) % 60;
  const span = (h ? `${h} h` : "") + (h && m ? " " : "") + (m ? `${m} min` : "");
  return diff > 0 ? `${span} ahead` : `${span} behind`;
}

function renderTime(city) {
  const now = new Date();
  const parts = new Intl.DateTimeFormat(locale, { timeZone: city.tz, hour: "numeric", minute: "2-digit", ...hourOpts() })
    .formatToParts(now);
  const ampm = parts.find((p) => p.type === "dayPeriod")?.value || "";
  const time = parts.filter((p) => p.type !== "dayPeriod").map((p) => p.value).join("").trim();
  $("cityTime").textContent = time;
  $("cityAmPm").textContent = ampm;
  const date = new Intl.DateTimeFormat(locale, { timeZone: city.tz, weekday: "long", day: "numeric", month: "long" }).format(now);
  $("cityDate").textContent = `${date} · ${relativeToHere(city.tz, now)}`;
}

function formatTemp(c) {
  if (CONFIG.units === "F") return `${Math.round(c * 9 / 5 + 32)}°F`;
  return `${Math.round(c)}°C`;
}

function renderWeather(city) {
  const box = $("cityWeather");
  const w = weather.get(city);
  if (!w) {
    box.classList.add("unavailable");
    $("wxIcon").innerHTML = "";
    $("wxTemp").textContent = "Weather will appear when online";
    $("wxText").textContent = "";
    return;
  }
  box.classList.remove("unavailable");
  $("wxIcon").innerHTML = weatherIcon(w.code, w.isDay);
  $("wxTemp").textContent = formatTemp(w.tempC);
  $("wxText").textContent = weatherLabel(w.code, w.isDay);
}

function showCard(city) {
  if (!CARD_ON) return;
  $("cityCountry").textContent = city.country;
  $("cityName").textContent = city.name;
  renderTime(city);
  renderWeather(city);
  $("cityCard").classList.add("shown");
}
function hideCard() { $("cityCard").classList.remove("shown"); }

// ---------------------------------------------------------------- live clouds
// The real cloud cover now: EUMETSAT's global satellite composite (every 3
// hours), made into a cloud map (live.cloudMapFromIR), checked for a newer
// one every hour. If it can't be had, the older matteason map, then the
// bundled clouds.jpg; offline, the last loaded map stays.
function startLiveClouds() {
  if (CONFIG.live?.liveClouds === false) return;
  const hours = CONFIG.live?.cloudRefreshHours ?? 1;
  const load = async () => {
    try {
      let t;
      try {
        const bmp = await live.cloudMapFromIR(live.EUMETSAT_IR_URL);
        if (!bmp) return;                            // the same picture as last time
        t = new THREE.Texture(bmp);
        t.flipY = false;                             // flipped while made, as loadTex's
        t.addEventListener("dispose", () => bmp.close?.());
      } catch (e) {
        console.warn("EUMETSAT clouds unavailable, using the older map:", e);
        const bucket = Math.floor(Date.now() / (3 * 3600e3));
        t = await loadTex(`${live.LIVE_CLOUDS_URL}?v=${bucket}`);
      }
      t = setupCloudTex(t);
      markBusy();
      renderer.initTexture(t);                       // upload now, not mid-frame
      const old = earthUniforms.CloudMap.value;
      earthUniforms.CloudMap.value = t;
      if (old && old !== t) old.dispose();
      console.info("Live clouds loaded");
    } catch (e) { console.warn("Live clouds unavailable; keeping the current map.", e); }
  };
  load();
  setInterval(load, hours * 3600e3);
}

// ---------------------------------------------------------------- news strip
// From the globe-app branch: city photo or live camera plus up to four
// headlines along the bottom, for the selected city. It shows while it has a
// photo or at least one headline.
function updateStrip() {
  const has = $("cardPhoto").classList.contains("on") || $("newsList").children.length > 0;
  $("newsStrip").classList.toggle("shown", has && !!tour.selected);
}
// A 0.25 s fade-in, started without forcing a layout (the old remove-class /
// read-offsetWidth / add-class restart made the arrival frame miss vsync).
function fadeIn(el) { el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 250, easing: "ease-out" }); }
function setCardPhoto(ph) {
  const box = $("cardPhoto"), img = $("cardPhotoImg");
  if (!ph || CONFIG.live?.photos === false) { box.classList.remove("on", "live"); updateStrip(); return; }
  img.onload = () => { box.classList.add("on"); updateStrip(); };
  img.onerror = () => { box.classList.remove("on"); updateStrip(); };
  img.src = ph.src;
  fadeIn(box);                                                                        // thumb fade, 15 frames
  if (img.complete && img.naturalWidth) { box.classList.add("on"); updateStrip(); }   // prefetched + decoded
  // As the old project: just the picture (a live camera carries its LIVE
  // badge inside the picture), no caption over it.
}
function setStripLines(lines) {
  const list = $("newsList");
  fadeIn(list);                                                                       // link_fade_duration 0.25 s
  list.replaceChildren(...lines.map(([title, source]) => {
    const li = document.createElement("li");
    li.textContent = title;
    if (source) { const sp = document.createElement("span"); sp.textContent = ` - ${source}`; li.append(sp); }
    return li;
  }));
  updateStrip();
}

// Prefetch for a city the camera is flying to: its headlines, and its photo
// or live camera image fetched and fully decoded, so on arrival both go up on
// the same frame (a flight lasts several seconds; the old port's strip was
// there as the camera landed). Results are kept per city.
const prefetched = new Map();          // city -> { news, media } (filled as they arrive)
const newsOpts = () => ({ calm: CONFIG.calmMode !== false, count: 4, refreshHours: CONFIG.live?.newsRefreshHours ?? 3 });
// The old project (update_city_info.py thumbs): a city with a camera in
// city_cams.txt shows the camera's picture, fetched at start-up and again
// with each 3-hour refresh only; when the camera is down or its picture is
// stale, the city's photo is shown until the next refresh. Every other city
// shows its photo, which is kept for good.
function fetchMedia(city) {
  return (async () => {
    if (city.kind) { city.picture ||= eventPicture(city); return { src: city.picture, credit: "" }; }
    const cam = CONFIG.live?.webcams !== false ? await live.cityCam(city) : null;
    if (cam) return cam;
    if (CONFIG.live?.photos === false) return null;
    const ph = await live.cityPhoto(city);
    return ph ? { src: ph.url, credit: ph.credit } : null;
  })().catch(() => null);
}
// decode: true for the next stops only (a decoded photo is held in memory);
// the start-up preload just fetches (into the WebView's disk cache).
function prefetchCity(city, { decode = true, refresh = false } = {}) {
  if (!city) return Promise.resolve();
  let p = prefetched.get(city);
  if (!p) { p = { at: Date.now() }; prefetched.set(city, p); }
  p.failed = false;                    // headlines that failed are tried again
  // The 3-hour refresh fetches each camera city's picture again (its photo,
  // like every other city's, is kept); the old picture stays on show until
  // the new one is ready.
  if (refresh && p.camCity && !p.mediaJob) { p.pendingMedia = true; }
  const jobs = [];
  // refresh: fetch new headlines in the background; the old ones stay on show
  // until the new ones have arrived, then they are swapped in (no reload).
  if ((refresh || !p.news) && !p.newsJob && !city.kind && CONFIG.live?.news !== false)
    jobs.push(p.newsJob = live.cityNews(city, newsOpts()).then((items) => {
      // New breaking news in a refresh: visit this city first (priority 1).
      const top = items?.[0]?.title;
      if (refresh && top && live.BREAKING.test(top) && !(p.news || []).some((x) => x.title === top) && !pendingEvents.includes(city)) {
        pendingEvents.push(city);
        console.info("Breaking news for", city.name, "- visiting it next");
        if (tour.started && tour.mode === "pause") startTravel(nextStop(tour.selected), performance.now());
      }
      if (items?.length || !p.news) p.news = items || [];
    })
      .catch(() => { if (!p.news) p.failed = true; }).finally(() => (p.newsJob = null)));
  if ((!("media" in p) || p.pendingMedia) && !p.mediaJob)
    jobs.push(p.mediaJob = (async () => {
      if (!city.kind) p.camCity = CONFIG.live?.webcams !== false && await live.hasCam(city);
      const m = await fetchMedia(city);
      if (m && !m.src.startsWith("data:")) { try { await fetch(m.src, { mode: "no-cors" }); } catch { /* offline */ } }   // into the disk cache
      if (p.pendingMedia && p.media && m?.src !== p.media?.src) p.img = null;      // decode the new picture
      p.media = m; p.camLive = !!m?.live; p.pendingMedia = false;
    })().finally(() => (p.mediaJob = null)));
  else if (p.mediaJob) jobs.push(p.mediaJob);
  return Promise.all(jobs).then(async () => {
    if (decode && p.media && !p.img) {
      const im = new Image(); im.src = p.media.src;
      try { await im.decode(); p.img = im; } catch { /* shows when it loads */ }
    }
  });
}

// While browsing by hand: get the nearby cities ready (and their photos decoded).
function prefetchNear(city) {
  const p = v3(city.lat, city.lon);
  CITIES.filter((c) => c !== city && p.angleTo(v3(c.lat, c.lon)) < 20 * RAD).slice(0, 6).forEach((c) => prefetchCity(c));
}

// Start-up preload, as the old project fetched everything before the app
// started: headlines, the photo (or one live-cam snapshot) for every city, in
// tour order from the current one, three at a time with a short pause and
// only in idle time, so frames are never held up. Headlines and photo details
// are saved between runs (live.js) and photos stay in the WebView's disk
// cache, so a restart has them all at once. Only the next stops' photos are
// kept decoded in memory (prefetchCity on each flight). Live cams are
// refreshed for the city on screen every 60 s, as before.
async function preloadAll(refresh = false) {
  const t0 = performance.now();
  const start = Math.max(0, CITIES.indexOf(tour.target || tour.selected || CITIES[0]));
  const order = [...CITIES.slice(start), ...CITIES.slice(0, start)];
  const idle = () => new Promise((r) => (window.requestIdleCallback ? requestIdleCallback(() => r(), { timeout: 500 }) : setTimeout(r, 50)));
  let next = 0, done = 0;
  const lane = async () => {
    while (next < order.length) {
      const c = order[next++];
      await idle();
      await prefetchCity(c, { decode: false, refresh });
      done++;
      await new Promise((r) => setTimeout(r, 120));
    }
  };
  await Promise.all([lane(), lane(), lane()]);
  const ready = order.filter((c) => { const p = prefetched.get(c); return p && ("media" in p) && (p.news || CONFIG.live?.news === false); }).length;
  const refreshes = (window.__preload?.refreshes || 0) + (refresh ? 1 : 0);
  window.__preload = { ms: Math.round(performance.now() - t0), cities: order.length, ready, refreshes, at: Date.now() };
  console.info(`${refresh ? "Refreshed" : "Preloaded"} ${ready} of ${order.length} cities in ${(window.__preload.ms / 1000).toFixed(1)} s`);
  // Again whenever the headlines are due (newsRefreshHours, 3 h): in the
  // background, while the app keeps running; the city on screen gets its new
  // headlines at its next visit, as the others do.
  clearTimeout(preloadAll.timer);
  preloadAll.timer = setTimeout(() => preloadAll(true), (CONFIG.live?.newsRefreshHours ?? 3) * 3600e3);
}

// The city's picture as fetched at start-up or at the last 3-hour refresh
// (a camera's picture is not re-fetched while it is on screen, as in the old
// project).
async function loadCityMedia(city) {
  const pre = prefetched.get(city);
  if (pre && "media" in pre && !pre.pendingMedia) { setCardPhoto(pre.media); return; }   // ready: same frame as arrival
  setCardPhoto(pre?.media ?? null);
  await prefetchCity(city);
  if (tour.selected === city) setCardPhoto(prefetched.get(city)?.media ?? null);
}

async function showNews(city) {
  if (city.kind) { setStripLines(city.lines.map(([t]) => [t, ""])); return; }
  if (CONFIG.live?.news === false) { setStripLines([]); return; }
  const pre = prefetched.get(city);
  if (pre?.news) { setStripLines(pre.news.map((it) => [it.title, it.source])); return; }   // ready: same frame
  setStripLines([]);
  try {
    const items = await live.cityNews(city, newsOpts());
    if (tour.selected !== city) return;
    setStripLines(items.map((it) => [it.title, it.source]));
  } catch { /* offline or no shell: the photo alone still shows */ }
}
function hideNews() { $("newsStrip").classList.remove("shown"); }

// "Your City" (the old project's card in the same rotation): a city with its
// current weather, time and date, updated every minute and with each weather
// refresh.
// (Owner, 2026-11-18: not the viewer's real city -- always New York City,
// with its own local time and weather, so a recording doesn't give away
// where the viewer is.)
function renderMyCity() {
  // The viewer's own city (findHomeCity: this PC's time zone and rough
  // location, or config.js homeCity). (For the owner's recordings it was
  // fixed to New York; the setup shows each viewer their own city.)
  const c = homeCity;
  let el = $("myCityBadge");
  if (!c) { el?.remove(); return; }
  if (!el) {
    el = document.createElement("div");
    el.className = "credit-badge my-city"; el.id = "myCityBadge";
    el.innerHTML = `<span class="mc-icon"></span><div class="mc-text"><small class="mc-top"></small><b class="mc-line"></b></div>`;
    $("stripCredits").appendChild(el);
  }
  const now = new Date(), w = weather.get(c);
  el.querySelector(".mc-icon").innerHTML = w ? twcIcon(w.code, w.isDay) : "";
  // As the old card: "11:22 PM" (no leading zero); 24h if config.js says so -- in that city's time zone.
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-GB", { timeZone: c.tz, hour: "numeric", minute: "2-digit", hourCycle: "h23" })
    .formatToParts(now).map((p) => [p.type, p.value]));
  const hh = +parts.hour, mm = parts.minute;
  const time = use24h() ? `${String(hh).padStart(2, "0")}:${mm}` : `${hh % 12 || 12}:${mm} ${hh < 12 ? "AM" : "PM"}`;
  // Two lines, the size of the "Weather data by / Open-Meteo" badge:
  // "Your City · Sun, Nov 15" over "New York  7°C  2:22 AM".
  const date = new Intl.DateTimeFormat(locale, { timeZone: c.tz, weekday: "short", day: "numeric", month: "short" }).format(now);
  el.querySelector(".mc-top").textContent = `Your City · ${date}`;
  el.querySelector(".mc-line").textContent = `${c.name}  ${w ? `${formatTemp(w.tempC)}  ` : ""}${time}`;
}

// Rotate the credits in the strip's corner every 5 s.
setInterval(() => {
  const badges = [...document.querySelectorAll("#stripCredits .credit-badge")];
  const i = badges.findIndex((b) => b.classList.contains("on"));
  badges[i]?.classList.remove("on");
  badges[(i + 1) % badges.length]?.classList.add("on");
}, 5000);
function showNext(on) {
  const el = $("nextStop");
  if (!on) { el.classList.remove("shown"); return; }
  el.textContent = "Next stop coming up…";
  el.classList.add("shown");
}

// Minute-aligned clock: re-render just after every minute boundary, so the
// card is never more than a fraction of a second behind the real minute.
function scheduleMinuteTick() {
  const ms = 60000 - (Date.now() % 60000) + 50;
  setTimeout(() => {
    if (tour.selected) renderTime(tour.selected);
    refreshInfoText();
    renderMyCity();
    updateSun();
    scheduleMinuteTick();
  }, ms);
}
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && tour.selected) renderTime(tour.selected);
});

// ---------------------------------------------------------------- sun
function updateSun() {
  const s = subsolarPoint(new Date());
  earthUniforms.sunDir.value.copy(v3(s.lat, s.lon));
  sunGlare.position.copy(earthUniforms.sunDir.value).multiplyScalar(55);
}

// ---------------------------------------------------------------- clinic header
function renderClinic() {
  const c = { ...CONFIG.clinic, name: savedName() || CONFIG.clinic.name };   // the viewer's name from the name screen
  $("clinicName").textContent = c.name;
  $("clinicWelcome").textContent = c.welcome;
  const mark = $("clinicMark");
  if (c.logo) {
    const img = new Image();
    img.src = c.logo;
    img.alt = "";
    mark.replaceChildren(img);
  } else {
    mark.textContent = (c.name || "?").trim().charAt(0).toUpperCase();
  }
  document.title = CONFIG.brand;
}

// ---------------------------------------------------------------- idle cursor
let idleTimer;
function wake() {
  document.body.classList.remove("idle");
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => document.body.classList.add("idle"), 3000);
}
window.addEventListener("mousemove", wake);
wake();

// ---------------------------------------------------------------- shell bridge
window.addEventListener("keydown", (e) => {
  const host = window.chrome?.webview;
  if (!host) return;
  if (e.key === "F11" || (e.altKey && e.key === "Enter")) { e.preventDefault(); host.postMessage({ cmd: "toggleFullscreen" }); }   // F11 or Alt+Enter (old v1.1)
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "q") host.postMessage({ cmd: "quit" });
});

// ---------------------------------------------------------------- boot
const weather = new WeatherService(CITIES, CONFIG.weather);
weather.onUpdate(() => {
  const src = weather.source === "MET Norway" ? "MET Norway" : "Open-Meteo";
  if (src !== weatherCredit) {
    weatherCredit = src; creditOn = null;
    document.querySelectorAll(".credit-badge b").forEach((b) => { if (/Open-Meteo|MET Norway/.test(b.textContent)) b.textContent = src; });
  }
  if (tour.selected) renderWeather(tour.selected);
  refreshInfoText();
  renderMyCity();
  // Quiet unless the weather is older than one refresh period and a bit.
  const age = weather.fetchedAt ? Date.now() - weather.fetchedAt : null;
  const due = weather.refreshMs + 30 * 60e3;
  $("status").textContent = age === null ? "Offline — weather unavailable"
    : age > due ? `Offline — weather from ${Math.round(age / 3600e3)} h ago` : "";
});

// ---------------------------------------------------------------- options menu
let music = null, wave = null;
// Text Size: every city name, headline and card is sized off --ts.
function applyTextSize() { document.documentElement.style.setProperty("--ts", String(+(CONFIG.textSize ?? 1) || 1)); }
applyTextSize();
// Distance or Clock changed: the events' text is rebuilt from their feed data.
function rebuildEventText() {
  for (const e of liveEvents) if (e.raw) Object.assign(e, e.kind === "quake" ? quakeEvent(e.raw) : stormEvent(e.raw));
  issEvent.sub = ""; tickIss();
  refreshInfoText();
  if (tour.selected?.kind) showNews(tour.selected);
}
// The "now playing" note (Square / M, a track or volume change, a new track starting).
const npNote = document.createElement("div");
npNote.className = "np-note";
npNote.innerHTML = `<i class="np-icon" aria-hidden="true">\u266A</i><div class="np-text"><small></small><b></b><span class="np-vol"><i></i></span></div>`;
document.body.appendChild(npNote);
let npTimer = 0;
function showNowPlaying() {
  const m = window.__music;
  const on = CONFIG.music?.enabled !== false && !!m?.playing;
  const v = CONFIG.music?.volume ?? 0.35;
  npNote.querySelector("small").textContent = on ? "Now Playing" : "Music";
  npNote.querySelector("b").textContent = on ? trackTitle(m.audio.src) : "Music is off (Options > Music)";
  npNote.querySelector(".np-vol").dataset.v = `Volume ${Math.round(v * 100)}%`;
  npNote.querySelector(".np-vol i").style.width = `${Math.round(v * 100)}%`;
  npNote.classList.add("on");
  clearTimeout(npTimer);
  npTimer = setTimeout(() => npNote.classList.remove("on"), 4000);
}
window.addEventListener("lau-track", () => { if (tour.started && !document.body.classList.contains("naming")) showNowPlaying(); });
function musicTrack(d) {
  tour.lastInput = performance.now();
  const m = window.__music;
  if (m?.[d > 0 ? "next" : "prev"]?.()) sound("optMove");     // the note shows when the track starts
  else { sound("error"); showNowPlaying(); }
}
function musicVolume(d) {
  tour.lastInput = performance.now();
  const before = CONFIG.music?.volume ?? 0.35;
  const v = stepSetting("volume", d);
  sound(v !== before ? "optMove" : "error");
  showNowPlaying();
}
initOptions((id) => {
  if (id === "units") { refreshInfoText(); if (tour.selected) renderWeather(tour.selected); }
  if (id === "distance") rebuildEventText();
  if (id === "clock") { rebuildEventText(); renderMyCity(); if (tour.selected && !tour.selected.kind) renderTime(tour.selected); }
  if (id === "textSize") applyTextSize();
  if (id === "quakes" || id === "quakeMin") { if (evCfg().quakes === false) setEvents("quake", []); else refreshQuakes(); }
  if (id === "storms") { if (evCfg().storms === false) setEvents("storm", []); else refreshStorms(); }
  if (id === "news") { if (tour.selected) showNews(tour.selected); }
  if (id === "oldLook") { applyOldLookClass(); resize(); }
  if (id === "theatre") applyTheatre();
  if (id === "volcanoes") refreshVolcanoes();   // the weak-GPU size depends on it
  if (id === "cityCloseUp") cuPrefetchStart();                  // switched on: fetch every city's imagery
  if (id === "action:name") askName({ overGlobe: true }).then(renderClinic);
  if (id === "action:satellite") satelliteMode(!sat.on);
  if (id === "music" || id === "volume") music?.applyOptions?.();
  if (id === "waveVolume" || id === "ambient") wave?.applyOptions?.();
  if (id === "jingles") { jingleLevel(); if ((CONFIG.sfx?.jingles ?? 1) > 0) rotateSound(400); }   // a short sample of the new level
}, sound);

// Exposed for debugging in DevTools.
window.__globe = { tour, CITIES, weather, cam, sunGlare, earthUniforms, config: CONFIG, preloadAll, prefetched: () => prefetched,
  cuNightK: CU_NIGHT_K, cuState, cityCUs, cuActive: () => cuA, cuGrade: CU_GRADE,   // (for DevTools)
  aurora, flare, lightning, moon, moonFlare, spirals, volcanoes, radio, sat, satelliteMode, satDetail, volClouds, renderer,
  goTo: (name) => { const c = CITIES.find((x) => x.name === name); if (c) startTravel(c, performance.now()); },
  events: { liveEvents, inject: (kind, list) => announce(setEvents(kind, list.map(kind === "quake" ? quakeEvent : stormEvent))) } };

async function boot() {
  [earthMat.fragmentShader, atmoMat.fragmentShader] = await globeShaders;
const [wlopConf, cityHeader, clockTxt, feedXml] = await Promise.all([
    loadWlopConf("data/wlop/wlop.ps3.conf"),
    loadCityInfoHeader("data/city_info_header.xml"),
    loadCityClockTxt("data/city_clock.txt"),
    loadDefaultCityInfoXml("data/life_info/live/en/default_city_info.xml"),
    sfx.load("data/soundeffect.xml", "sfx/"),
  ]);
  lwpClockEntries = clockTxt;
  lwpFeedData = feedXml;
  window.__globe.lwp = { wlopConf, cityHeader, lwpClockEntries, lwpFeedData, sfx };
  renderClinic();
  updateSun();
  const params = new URLSearchParams(location.search);
  const introOn = CONFIG.intro?.enabled !== false && params.get("intro") !== "0";
  // First city: ?start=Name, else one picked at random (the tour then goes
  // through the list in order).
  const first = pickNext(null);
  prefetchCity(first);       // its headlines and picture are fetched behind the splash, ready when it comes on
  findHomeCity().then((c) => {
    homeCity = c;
    if (c) { console.info("Home city:", c.name); prefetchCity(c); }
    renderMyCity();
    window.__globe.homeCity = c?.name ?? null;
    loadRadioStations(c);
  });
  // Opening camera (see OPENING): held still while the logo and the Earth
  // fade in; the first flight leaves autopilot_timeout after the start.
  const beginOpening = (nowMs, frame0 = OPENING.anim.finish) => {
    tour.opening = { t0: nowMs ?? performance.now(), frame0 };
    const p = openingPose(frame0);
    cam.lat = p.lat; cam.lng = p.lng; cam.r = p.r; cam.pitch = p.pitch; cam.yaw = p.yaw;
    setViewShift(0);
    tour.target = first;
    tour.mode = "opening";
    prefetchCity(first);
    marker.position.copy(v3(first.lat, first.lon, 1.002));
    applyCamera();
  };
  const handOver = (nowMs) => {
    tour.started = true;
    // The first city (the one nearest the opening view) comes on with the
    // city names at the end of the opening, not after its short flight.
    if (tour.mode === "opening" && tour.target && !tour.selected) select(tour.target);
    setTimeout(preloadAll, 1500);                   // after the opening, in the background
    document.body.dataset.started = "1";             // the options menu opens from here on
  };
  const skipToFirstCity = (nowMs) => {
    cam.lat = first.lat; cam.lng = first.lon; cam.r = RMIN;
    tour.target = first;
    closeUps[1 - cuCur].prepare(first);
    arrive(nowMs);
    applyCamera();
  };

  let intro = null;
  if (introOn) {
    earthUniforms.globeFade.value = 0;
    intro = new Intro({
      cfg: CONFIG.intro,
      onCut: beginOpening,
      onSkip: skipToFirstCity,
      onDone: () => { handOver(performance.now()); (music = startMusic(CONFIG.music)); wave = startWave(CONFIG.music, CONFIG.ambient, music); },
      setGlobeFade: (v) => (earthUniforms.globeFade.value = v),
      // First run: ask the viewer's name between the splash and the opening.
      // (The globe is hidden meanwhile: the opening has not set its camera yet.)
      gate: savedName() ? null : () => {
        document.body.classList.add("naming");
        return askName().then(renderClinic).finally(() => document.body.classList.remove("naming"));
      },
    });
    intro.start(performance.now());
  } else {
    document.body.classList.remove("intro-on");
    $("titleCard")?.remove();
    $("globeLogo")?.remove();
  }
  window.__globe.intro = intro;

  const clock = new THREE.Clock();
  // Adaptive pacing: one frame per refresh while the GPU keeps up. When more
  // than 3 % of frames in 2 s come late, draw every 2nd refresh (3rd...)
  // instead, as long as that is still 60 fps or more (a 144 Hz panel: 72,
  // a 120 Hz one: 60); below that, hold an even 60. Every 20 s without a late
  // frame it tries one step faster again. The refresh interval is the 10th
  // percentile of the browser's own frame callbacks.
  const pace = {
    calls: [], last: 0, n: 0, div: 1, cap60: false, failed: {}, rendered: 0, late: 0, winStart: 0, calmSince: 0, prevDraw: 0,
    refresh() { const a = [...this.calls].sort((x, y) => x - y); return a.length > 30 ? a[Math.floor(a.length * 0.1)] : 1000 / 60; },
    frame(t) {
      if (this.last) { this.calls.push(t - this.last); if (this.calls.length > 300) this.calls.shift(); }
      this.last = t;
      if (FPS_CAP) return true;                       // a fixed cap from config.js / ?fps=
      if (this.div > 1 && (++this.n % this.div)) return false;
      if (appBusy()) this.busyAt = t;
      const r = this.refresh(), target = this.cap60 ? 1000 / 60 : r * this.div;
      if (this.prevDraw && t - this.prevDraw > target * 1.5) this.late++;
      this.prevDraw = t; this.rendered++;
      if (!this.winStart) { this.winStart = this.calmSince = t; return true; }
      if (t - this.winStart >= 2000) {
        const rate = this.late / Math.max(1, this.rendered);
        const mode = this.cap60 ? "60" : String(this.div);
        // Only once the opening is over (loading and the first uploads are
        // not the GPU's steady speed), and only when two windows in a row
        // were late: a single busy moment does not change the rate.
        const settled = tour.started && (this.startedAt ??= t) && t - this.startedAt > 5000;
        // A window in which the app was loading (a close-up's pictures going
        // up to the GPU, a new close-up being prepared, a new cloud map) says
        // nothing about the GPU's steady speed: it never lowers the rate.
        // (Counting those once dropped a 144 Hz screen to an uneven 60 fps
        // for five minutes after a few hand zooms.)
        const busy = this.busyAt && t - this.busyAt < 2500;
        const slow = settled && !busy && rate > 0.03 && this.slowBefore;
        this.slowBefore = settled && !busy && rate > 0.03;
        if (slow) {
          this.slowBefore = false;                      // the new rate gets two windows of its own
          this.failed[mode] = t;                         // this rate did not hold: not tried again for 5 min
          // Next: every 2nd/3rd refresh while that stays at 59 fps or more
          // (an even cadence); a fixed 60 fps only on screens where no even
          // step is left (a 60 fps cap on a 144 Hz screen judders).
          if (!this.cap60 && 1000 / (r * (this.div + 1)) >= 59) this.div++;
          else if (!this.cap60 && 1000 / (r * this.div) < 59) this.cap60 = true, this.div = 1;
          else if (!this.cap60 && this.div === 1) this.cap60 = true;
          this.calmSince = t;
        } else if (this.late || !settled) this.calmSince = t;
        else if (t - this.calmSince > 20000 && (this.cap60 || this.div > 1)) {
          // One step faster, unless that rate failed in the last 5 minutes.
          const up = this.cap60 ? Math.max(1, Math.floor(1000 / 60 / r)) : this.div - 1;
          if (!(t - (this.failed[String(up)] ?? -1e9) < 300000)) { this.cap60 = false; this.div = up; }
          this.calmSince = t;
        }
        this.late = this.rendered = 0; this.winStart = t;
        window.__pace = { refreshMs: +r.toFixed(2), div: this.div, cap60: this.cap60 };
      }
      return true;
    },
  };
  let nextFrameAt = 0;
  renderer.setAnimationLoop((t) => {
    if (!pace.frame(t)) return;                      // adaptive pacing (below)
    if (FPS_CAP || pace.cap60) {
      const cap = FPS_CAP || 1000 / 60;
      if (t + 2 < nextFrameAt) return;               // not yet time for the next capped frame
      nextFrameAt += cap;
      if (nextFrameAt < t - cap) nextFrameAt = t + cap;   // after a stall: start again from now
    }
    const elapsed = clock.getElapsedTime();
    stars.material.uniforms.time.value = elapsed;
    milkyWayMat.uniforms.time.value = elapsed;
    spaceUniforms.time.value = elapsed;
    milkyWay.position.copy(camera.position);
    const fade = earthUniforms.globeFade.value;
    sunHalo.material.opacity = 0.72 * fade;
    sunCore.material.opacity = 0.90 * fade;
    intro?.update(t);
    intro?.pendingSkip();
    pollGamepad(t);
    tickHolds(t);
    tickZoomSound(t);
    tickRotateSound(t);
    if (tour.mode !== "idle") updateCamera(t);
    else tour.lastMs = t;
    bakeMilkyWay();                                    // once per window size
    const fxDt = Math.min(0.1, Math.max(0, elapsed - fxLast)); fxLast = elapsed;
    aurora.update(elapsed, (CONFIG.aurora !== false ? 1 : 0) * fade * (1 - cuState.k), fxDt);
    // Sun glitter on the sea only once down past the clouds, in a close-up
    // (owner's wish): none from space, eased in through the dive.
    // (Satellite Mode: the sunglint on seas and lakes, as from the station.)
  const glitK = (CONFIG.glitter !== false ? 1 : 0) * Math.max(smoothstep(cuState.k, 0.4, 0.8), tour.mode === "satellite" ? 0.9 : 0);
    earthUniforms.U_glitter.value.x = elapsed;
    earthUniforms.U_glitter.value.y = glitK;
    CU_GLITTER.value.set(elapsed, glitK);
    const moonOn = CONFIG.moon !== false;
    moon.update(performance.now(), moonOn, fade);
    earthUniforms.U_moon.value.set(moon.dir.x, moon.dir.y, moon.dir.z, moonOn ? moon.phase : 0);
    spirals.update(elapsed, CONFIG.stormSpirals !== false ? liveEvents.filter((e) => e.kind === "storm") : [], fade * (1 - cuState.k));
    volcanoes.update(elapsed, (CONFIG.volcanoes !== false ? 1 : 0) * fade * (1 - cuState.k), camera, tour.mode === "satellite" ? 0 : 1);   // no ash plume in Satellite Mode
    lightning.update(elapsed, fxDt, CONFIG.lightning !== false ? [...liveEvents.filter((e) => e.kind === "storm"), ...live.stormCells] : [],
      earthUniforms.sunDir.value, fade * (1 - cuState.k));
    // Tilt-shift eases in over the last part of the dive into a city (Options > Globe > Tilt-Shift).
    const tiltK = CONFIG.tiltShift !== false ? smoothstep(cuState.k, 0.55, 0.95) : 0;
    // Satellite Mode: the sun's glow sprites go with the camera (at 55 R from
    // the Earth's centre they sat ~1 deg off the true sun seen from the
    // station, a second sun beside the flare that drifted against it and set
    // at a different moment -- the flare looked like it glitched).
    if (tour.mode === "satellite") sunGlare.position.copy(camera.position).addScaledVector(earthUniforms.sunDir.value, 55);
    else if (sunGlare.userData.sat) updateSun();
    sunGlare.userData.sat = tour.mode === "satellite";
    // Satellite Mode's volumetric clouds (their own half-size pass, blended into the picture below)
    const volK = tour.mode === "satellite" && CONFIG.satelliteVolClouds !== false && CONFIG.live?.clouds !== false && earthUniforms.CloudMap.value ? fade : 0;
    earthUniforms.U_cloud.value.z = volK > 0 ? 1 : 0;
    volClouds.render(camera, volK);
    // Satellite Mode: only a touch of the old look's soft glow, so the night
    // cities and the land stay crisp (owner: "as clear as possible").
    post.render(tour.mode === "satellite" ? Math.min(oldLook(), 0.25) : oldLook(), tiltK);                     // the old look (glow, softness, colour), or straight to the screen
    flare.wide = tour.mode === "satellite" ? 1 : 0;     // Satellite Mode: the flare stays on the sun down to the horizon
    flare.render(camera, earthUniforms.sunDir.value, (CONFIG.lensFlare !== false ? 1 : 0) * fade, fxDt);
    moonFlare.render(camera, moon.dir, (CONFIG.lensFlare !== false && CONFIG.moon !== false ? 0.85 * moon.phase : 0) * fade, fxDt, moon.position);

  });

  const month = new Date().getMonth() + 1;
  const [day, nightOld, cloudTex, specular, noise, nightHD] = await Promise.all([
    loadTex(await dayMapUrl(month)),
    // The old port's night lights exactly: it reads data/world_nasa/ in place of
    // data/world/ when present (make_nasa_earth.py: Black Marble 2016 with a
    // soft glow round bright cities), earth_citylight4ka/4kb.dds joined; this
    // file is that, byte for byte.
    S3TC ? loadDXT1("assets/earth/dds/citylights.dxt1")
      .catch((e) => { console.warn("Night DDS:", e); return loadTex("assets/earth/port-night.png"); })
      : loadTex("assets/earth/port-night.png"),
    loadTex("assets/earth/clouds.jpg").catch(() => null),   // optional
    S3TC ? loadDXT1("assets/earth/dds/earthspec.dxt1").catch(() => loadTex("assets/earth/original-specular.png"))
      : loadTex("assets/earth/original-specular.png"),
    loadTex("assets/earth/original-noise.png"),
    loadNightHD(),
  ]);
  // The high-definition night lights when this GPU takes a 16384-wide texture,
  // else the old port's map.
  const night = nightHD || nightOld;
  if (nightHD) {
    nightOld.dispose();
    earthUniforms.U_nightLook.value.w = 1;
    earthUniforms.U_nightLook.value.y = NIGHT_HD_GAIN;
  }
  for (const texture of [day, night, specular, noise]) texture.colorSpace = THREE.NoColorSpace;
  // As the old port: no mipmaps on the night lights (the DDS has none). The
  // high-definition map has them (sharp close in, no shimmer zoomed out).
  if (!night.isCompressedTexture && !nightHD) { night.generateMipmaps = false; night.minFilter = THREE.LinearFilter; night.anisotropy = 1; night.needsUpdate = true; }
  noise.wrapS = noise.wrapT = THREE.RepeatWrapping;
  noise.needsUpdate = true;
  // The twinkle noise: data/world/noise_anim.dds, a 32x32x32 L8 volume (its
  // 32768 texel bytes as noise_anim.raw), wrapped in all three directions.
  try {
    const vol = new Uint8Array(await (await fetch("assets/earth/noise_anim.raw")).arrayBuffer());
    const t3 = new THREE.Data3DTexture(vol, 32, 32, 32);
    t3.format = THREE.RedFormat; t3.type = THREE.UnsignedByteType;
    t3.wrapS = t3.wrapT = t3.wrapR = THREE.RepeatWrapping;
    t3.minFilter = t3.magFilter = THREE.LinearFilter; t3.generateMipmaps = false;
    t3.needsUpdate = true;
    earthUniforms.NoiseVol.value = t3;
  } catch (e) { console.warn("Night-light noise volume missing:", e); }
  earthUniforms.SpecularMap.value = specular;
  earthUniforms.NoiseMap.value = noise;
  earthUniforms.ColorMap.value = day;
  earthUniforms.NightMap.value = night;
  if (cloudTex) {
    earthUniforms.CloudMap.value = setupCloudTex(cloudTex);
  }
  // Upload every texture and compile the shaders now, behind the splash: the
  // first frame that drew them used to stall for 0.3-0.6 s right as the splash
  // cut away to the globe.
  for (const t of [day, night, specular, noise, earthUniforms.CloudMap.value, earthUniforms.NoiseVol.value]) if (t) renderer.initTexture(t);
  try { await renderer.compileAsync(scene, camera); } catch (e) { console.warn("compileAsync:", e); }
  startLiveClouds();
  startLiveEvents();
  weather.start();
  scheduleMinuteTick();
  if (intro) intro.setLoaded(performance.now());
  else { beginOpening(performance.now()); handOver(performance.now()); music = startMusic(CONFIG.music); wave = startWave(CONFIG.music, CONFIG.ambient, music); }
}

boot().catch((e) => {
  console.error(e);
  document.body.classList.remove("intro-on");
  $("titleCard")?.remove();
  $("globeLogo")?.remove();
  $("status").textContent = "Could not load Earth imagery — run tools/fetch_assets.py";
});
