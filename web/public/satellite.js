// Satellite Mode (owner's idea, after the ISS time-lapses): the camera rides
// the International Space Station's real orbit, about 420 km up, looking
// ahead and down at the Earth with the horizon curving across the top of the
// picture, as the station's crews film it. It starts where the ISS really is
// (live.fetchIssTrack: wheretheiss.at), then follows that orbit -- in real
// time, or sped up like the time-lapses.
//
// The orbit: two points of the live track, a few minutes apart, give the
// plane of the orbit (fixed among the stars) and its speed; the Earth turns
// under it at its own rate, so each pass crosses new ground, as the real one.
// Without the live track (offline) it flies an orbit of the same shape
// (51.6 degree inclination, 92.9 minutes) from where the globe was looking.
//
// Also here: the airglow, the thin olive-green band of light about 95 km up
// that hangs over the night side's horizon in every one of those videos.
import * as THREE from "./vendor/three.module.min.js";
import { latLonToVec3 } from "./sun.js";
import { CONFIG } from "./config.js";

const RAD = Math.PI / 180;
const EARTH_KM = 6371;
const EARTH_TURN = (2 * Math.PI) / 86164.1;        // rad/s, sidereal
const ISS_INCL = 51.64 * RAD, ISS_PERIOD = 92.9 * 60, ISS_ALT = 418;
const v3 = (lat, lon, r = 1) => new THREE.Vector3(...latLonToVec3(lat, lon, r));
const Y = new THREE.Vector3(0, 1, 0);
const smoothstep01 = (x) => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
// Turning round to watch the sunset: on unless config.js satelliteSunsetLook is false.
const CONFIG_SUNSET = { on: () => CONFIG.satelliteSunsetLook !== false };

// Speeds: 1 = real time; the time-lapses are shot at one picture a second or
// so and played at 24-30 a second.
// Time-Lapse: 25x matched the owner's reference video; the owner asked for it
// 25 % slower (2026-11-22): 18.75x.
export const SAT_SPEEDS = { real: 1, timelapse: 18.75, fast: 60 };

export function createSatellite(scene, sunDir) {
  const S = {
    on: false, k: 0,                       // k: 0..1, the fade in and out of the mode
    orbit: null,                           // { p0, n, w, alt, t0 } (p0 in the frame of the Earth at t0)
    simT: 0,                               // seconds of orbit flown since t0
    look: { yaw: 0, pitch: 0, vYaw: 0, vPitch: 0 },
    pos: new THREE.Vector3(), fwd: new THREE.Vector3(),
  };

  // ---- the orbit
  // From the live track ([ms, lat, lon, altKm] every 120 s): the point just
  // before now and the one 10 minutes on.
  S.fromTrack = (track, nowMs) => {
    if (!track || track.length < 6) return false;
    let i = track.findIndex((p) => p[0] > nowMs) - 1;
    if (i < 0) i = 0;
    const j = Math.min(track.length - 1, i + 5);
    if (j <= i) return false;
    const a = track[i], b = track[j], dt = (b[0] - a[0]) / 1000;
    const p0 = v3(a[1], a[2]);
    // b, put back in the Earth's frame of time a (the Earth turned east meanwhile)
    const p1 = v3(b[1], b[2]).applyAxisAngle(Y, EARTH_TURN * dt);
    const n = new THREE.Vector3().crossVectors(p0, p1);
    if (n.lengthSq() < 1e-10) return false;
    n.normalize();
    S.orbit = { p0, n, w: p0.angleTo(p1) / dt, alt: (a[3] + b[3]) / 2 || ISS_ALT, t0: a[0], live: true };
    return true;
  };
  // No track: an orbit of the ISS's shape through (lat, lon), heading north-east.
  S.fromPlace = (lat, lon, nowMs) => {
    lat = Math.max(-50, Math.min(50, lat));
    const p0 = v3(lat, lon);
    const north = Y.clone().addScaledVector(p0, -p0.y).normalize();
    const east = new THREE.Vector3().crossVectors(north, p0).normalize();
    // heading from north so that the orbit's highest latitude is the inclination:
    // cos(incl) = cos(lat) * sin(heading)
    const sh = Math.min(1, Math.cos(ISS_INCL) / Math.max(1e-3, Math.cos(lat * RAD)));
    const head = Math.asin(sh);
    const dir = north.clone().multiplyScalar(Math.cos(head)).addScaledVector(east, Math.sin(head));
    const n = new THREE.Vector3().crossVectors(p0, dir).normalize();
    S.orbit = { p0, n, w: (2 * Math.PI) / ISS_PERIOD, alt: ISS_ALT, t0: nowMs, live: false };
  };

  // Where the station is (unit vector, Earth's frame) after s seconds of orbit.
  const _p = new THREE.Vector3(), _q = new THREE.Vector3();
  function at(s, out) {
    const o = S.orbit;
    out.copy(o.p0).applyAxisAngle(o.n, o.w * s);                 // along the orbit, among the stars
    return out.applyAxisAngle(Y, -EARTH_TURN * s);               // the Earth turned east under it
  }

  S.start = (nowMs) => {
    if (!S.orbit) return false;
    S.on = true;
    S.simT = (nowMs - S.orbit.t0) / 1000;                       // where it really is now
    S.look.yaw = S.look.pitch = S.look.vYaw = S.look.vPitch = 0;
    return true;
  };
  S.stop = () => { S.on = false; };

  // The camera: on the station, looking ahead along the orbit and down, so the
  // horizon arcs across the upper part of the picture; a little to the side
  // and a little tilted, as the crews' cameras usually are.
  const VIEW = { pitch: 30 * RAD, yaw: 14 * RAD, roll: -5 * RAD };
  S.sunW = 0;
  S.pose = (camera, dt, speed) => {
    S.simT += dt * speed;
    const o = S.orbit;
    const r = 1 + o.alt / EARTH_KM;
    at(S.simT, _p);
    at(S.simT + 2, _q);
    S.pos.copy(_p).multiplyScalar(r);
    const up = _p.clone();
    const fwd = _q.sub(_p).addScaledVector(up, -_q.dot(up)).normalize();   // along the ground track
    const L = S.look;
    L.yaw += L.vYaw * dt; L.pitch = Math.max(-25 * RAD, Math.min(45 * RAD, L.pitch + L.vPitch * dt));
    const side = new THREE.Vector3().crossVectors(fwd, up);          // to the right
    // The orbital sunset: the station flies away from the sun, so as it is
    // about to set behind the Earth the view swings round to watch it go down
    // (as the crew's camera in the owner's reference), holds on the glowing
    // arc for a little after, then turns back to look ahead. (Sunrise comes up
    // in front anyway.) The sticks still look around on top of it.
    const h = up.dot(sunDir);                                        // the sun's height at the station (sin)
    const ts = sunDir.clone().addScaledVector(up, -h);
    let sunYaw = Math.atan2(ts.dot(side), ts.dot(fwd));
    // (continuous while turned round; otherwise back in -180..180, so it never winds up over the orbits)
    if (S.sunYaw != null && S.sunW > 0.001) sunYaw = S.sunYaw + Math.atan2(Math.sin(sunYaw - S.sunYaw), Math.cos(sunYaw - S.sunYaw));   // no jump across +-180
    S.sunYaw = sunYaw;
    // Following the sun (owner: the sun stays in view over the day side, and
    // goes when night comes): from just before sunrise to just after sunset
    // the view faces the sun and tilts so it sits in the upper part of the
    // picture with the Earth below. Only while it is low enough to share the
    // frame with the Earth (up to ~25 deg above the station's level); higher
    // than that (midday on some orbits) the view eases back to looking ahead,
    // and its direction would be ill-defined straight overhead anyway.
    const e = Math.asin(Math.max(-1, Math.min(1, h))) / RAD;           // the sun's height, degrees
    const wantW = CONFIG_SUNSET.on() ? smoothstep01((h + 0.52) / 0.08) * (1 - smoothstep01((e - 22) / 8)) : 0;   // (above ~26 deg the sun can't share the frame with the Earth: no tilting up at an empty sky)
    S.sunW += (wantW - S.sunW) * (1 - Math.exp(-dt * 1.5));          // eased, whatever the speed
    const w = S.sunW;
    // the view's centre ~18 deg below the sun (its place in the upper part of
    // the frame), never higher than 5 deg below level (the Earth stays in view)
    const pitchSun = -Math.max(-30, Math.min(-5, e - 18)) * RAD;
    const yaw = VIEW.yaw * (1 - w) + sunYaw * w + L.yaw, pitch = VIEW.pitch * (1 - w) + pitchSun * w + L.pitch;
    const dir = fwd.clone().applyAxisAngle(up, -yaw);                // turned right
    const right = side.clone().applyAxisAngle(up, -yaw);
    dir.applyAxisAngle(right, -pitch);                               // tipped down
    camera.position.copy(S.pos);
    camera.up.copy(up).applyAxisAngle(dir, VIEW.roll);
    camera.lookAt(S.pos.clone().add(dir));
    S.fwd.copy(dir);
    return S.pos;
  };
  S.latLng = () => {
    const d = S.pos.clone().normalize();
    return { lat: Math.asin(Math.max(-1, Math.min(1, d.y))) / RAD, lng: Math.atan2(-d.z, d.x) / RAD };
  };

  // ---- the night side's glow over the horizon (owner, 2026-11-22: "like the
  // blue haze on the day side's horizon, but green", in place of the thin
  // airglow line it had first): the same soft band -- brightest right on the
  // horizon, fading up into space over ~80 km, and a faint wash over the
  // ground just below it -- from air thinning out upward (a 12 km scale
  // height), marched along each line of sight and lit only where it is night.
  const R1 = 1.0, R2 = 1 + 120 / EARTH_KM;
  const glowMat = new THREE.ShaderMaterial({
    uniforms: { sunDir: { value: sunDir }, amount: { value: 0 }, R1: { value: R1 }, R2: { value: R2 } },
    vertexShader: /* glsl */ `
      varying vec3 vW;
      void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `
      uniform vec3 sunDir; uniform float amount, R1, R2;
      varying vec3 vW;
      void main() {
        vec3 ro = cameraPosition, rd = normalize(vW - cameraPosition);
        float b = dot(ro, rd), cc = dot(ro, ro);
        float dT = b * b - (cc - R2 * R2);
        if (dT <= 0.0) discard;
        float t0 = max(-b - sqrt(dT), 0.0), t1 = -b + sqrt(dT);
        float dG = b * b - (cc - 1.0);
        if (dG > 0.0) t1 = min(t1, -b - sqrt(dG));            // the ground: only the air in front of it
        const int N = 16;
        float dt = (t1 - t0) / float(N);
        float col = 0.0;
        for (int i = 0; i < N; i++) {
          vec3 p = ro + rd * (t0 + (float(i) + 0.5) * dt);
          float r = length(p);
          float h = (r - 1.0) * 6371.0;                       // km
          float night = smoothstep(-0.02, -0.26, dot(p / r, sunDir));
          col += exp(-max(h, 0.0) / 12.0) * night * dt * 6371.0;   // km of air (thinned by height)
        }
        // a line grazing the ground crosses ~690 km of that air: 1 there
        float k = col / 690.0;
        float I = amount * (1.0 - exp(-2.4 * k)) * (dG > 0.0 ? 0.75 * smoothstep(0.08, 0.6, k) : 1.0);   // over the ground: only the wash near the horizon
        gl_FragColor = vec4(vec3(0.30, 0.78, 0.42) * I, 1.0);
      }`,
    transparent: true, depthWrite: false, side: THREE.FrontSide,
    // added light; the picture's alpha left alone (else the old look's composite hides the stars there)
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    blendEquationAlpha: THREE.AddEquation, blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneFactor,
  });
  const glow = new THREE.Mesh(new THREE.SphereGeometry(R2, 512, 256), glowMat);
  glow.visible = false;
  glow.renderOrder = 2;
  scene.add(glow);
  S.airglow = (amount) => { glowMat.uniforms.amount.value = amount; glow.visible = amount > 0.001; };

  // ---- the orbital sunset (and sunrise): as the sun goes down behind the
  // Earth, the horizon keeps a thin, bright arc -- orange-white low down where
  // the sunlight has come the longest way through the air, blue above --
  // brightest toward the sun and fading away from it, for a minute or so after
  // the sun has gone (the owner's reference: AstronautiCAST's 150-minute ride).
  // Only round the day/night line: the day side's sky is the atmosphere shell's.
  const T1 = 1 + 60 / EARTH_KM;
  const twiMat = new THREE.ShaderMaterial({
    uniforms: { sunDir: { value: sunDir }, amount: { value: 0 }, T1: { value: T1 } },
    vertexShader: glowMat.vertexShader,
    fragmentShader: /* glsl */ `
      uniform vec3 sunDir; uniform float amount, T1;
      varying vec3 vW;
      void main() {
        vec3 ro = cameraPosition, rd = normalize(vW - cameraPosition);
        float tc = -dot(ro, rd);
        vec3 c = ro + rd * tc;
        float h2 = dot(c, c);
        bool ground = h2 < 1.0;
        // the stretch of air the line of sight crosses (in front of the ground when it hits it)
        float len = ground ? sqrt(max(T1 * T1 - h2, 0.0)) - sqrt(max(1.0 - h2, 0.0)) : 2.0 * sqrt(max(T1 * T1 - h2, 0.0));
        float k = len / (2.0 * sqrt(T1 * T1 - 1.0));               // 1 grazing the ground at the horizon
        float hR = ground ? 0.0 : sqrt(h2) - 1.0;                    // the height of the line's lowest point
        float hgt = hR / (T1 - 1.0);
        vec3 at = normalize(ground ? ro + rd * (tc - sqrt(max(T1 * T1 - h2, 0.0))) : c);
        float s = dot(at, sunDir);                                   // the sun's height there (sin)
        float dip = sqrt(2.0 * max(hR, 2e-4));                       // how far below the level the sun can be and still light it
        float lit = smoothstep(-dip - 0.035, -dip + 0.03, s);
        float twi = lit * (1.0 - smoothstep(0.04, 0.30, s));
        float toward = max(dot(rd, sunDir), 0.0);
        float phase = 0.25 + 1.6 * pow(toward, 5.0) + 3.0 * pow(toward, 60.0);
        // low and close to the line: long paths through the air -> orange; higher: white, then blue
        float red = 1.0 - smoothstep(-0.06, 0.14, s);
        vec3 low = mix(vec3(1.0, 0.92, 0.80), vec3(1.0, 0.50, 0.16), red);
        vec3 col = mix(low, vec3(0.85, 0.92, 1.0), smoothstep(0.12, 0.38, hgt));
        col = mix(col, vec3(0.22, 0.48, 1.0), smoothstep(0.32, 0.75, hgt));
        float dens = exp(-hgt * 3.2);
        float I = amount * twi * phase * dens * pow(clamp(k, 0.0, 1.0), 2.0) * (ground ? 0.35 : 1.0) * 0.9;
        gl_FragColor = vec4(col * I, 1.0);
      }`,
    transparent: true, depthWrite: false, side: THREE.FrontSide,
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    blendEquationAlpha: THREE.AddEquation, blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneFactor,
  });
  const twilight = new THREE.Mesh(new THREE.SphereGeometry(T1, 512, 256), twiMat);
  twilight.visible = false;
  twilight.renderOrder = 2;
  scene.add(twilight);
  S.twilight = (amount) => { twiMat.uniforms.amount.value = amount; twilight.visible = amount > 0.001; };

  return S;
}

// ---------------------------------------------------------------- the land, close
// From the station's height the globe's own map (~5 km a pixel) is soft. In
// Satellite Mode the ground under and ahead of the station is painted from
// Sentinel-2 cloudless tiles (EOX, the close-ups' own day imagery: ~0.6 km a
// pixel at zoom 8, ~1.2 km at zoom 7), streamed as it comes into view and
// kept on disk by the app (shell TileStore) once fetched. Two windows of
// 12 x 12 tiles follow the view: zoom 8 close in, zoom 7 out to the horizon.
// Each is a texture atlas addressed "toroidally" (a tile always lives in slot
// x mod 12, y mod 12), so the window slides along without anything being
// moved or redrawn -- each new tile is one small upload. ground.frag reads
// them (satDay) and falls back to the globe's map where a tile isn't in yet.
// Tiles that are all sea are never fetched (the owner: no ocean textures).
const TILE = 256;
const IN_SHELL = !!globalThis.chrome?.webview;
const mercX = (lon, n) => ((lon + 180) / 360) * n;
const mercY = (lat, n) => { const r = Math.max(-85, Math.min(85, lat)) * RAD; return ((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * n; };
const tileLat = (y, n) => Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / n))) / RAD;

// The night side gets the same, from NASA's Black Marble (VIIRS city lights,
// ~0.6 km a pixel at zoom 8: the globe's own lights map is 2.4 km), so the
// cities show their street grids instead of soft blobs. Day tiles are only
// fetched where the sun is up and night tiles only where it is down.
export function createSatDetail(renderer, uniforms, source, nightSource) {
  const gl = renderer.getContext();
  const LEVELS = [{ z: 8, N: 12, aheadKm: 500, src: source, day: true }, { z: 7, N: 12, aheadKm: 1300, src: source, day: true },
                  { z: 8, N: 12, aheadKm: 500, src: nightSource, day: false }, { z: 7, N: 12, aheadKm: 1300, src: nightSource, day: false }];
  let sea = null;                                    // { m: Uint8Array (255 = sea), W, H }
  let inflight = 0;
  const MAX_INFLIGHT = 12;
  const ready = [];                                   // decoded tiles waiting for their upload

  for (const [i, L] of LEVELS.entries()) {
    L.n = 2 ** L.z;
    L.size = L.N * TILE;
    L.slots = new Array(L.N * L.N).fill(null);       // "x/y" of the tile in each slot
    L.pending = new Set();
    L.state = new THREE.DataTexture(new Uint8Array(L.N * L.N * 4), L.N, L.N, THREE.RGBAFormat);
    L.state.magFilter = L.state.minFilter = THREE.NearestFilter; L.state.generateMipmaps = false;
    L.state.needsUpdate = true;
    L.atlas = null;                                   // made on first use (36 MB of video memory each)
    L.win = { x0: 0, y0: 0 };
    uniforms[`SatState${i}`] = { value: L.state };
    uniforms[`SatAtlas${i}`] = { value: null };
    uniforms[`U_sat${i}`] = { value: new THREE.Vector4(L.n, 0, 0, L.N) };
  }
  function makeAtlas(L, i) {
    const t = new THREE.DataTexture(new Uint8Array(L.size * L.size * 4), L.size, L.size, THREE.RGBAFormat);
    t.magFilter = t.minFilter = THREE.LinearFilter; t.generateMipmaps = false;
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    t.needsUpdate = true;
    renderer.initTexture(t);
    t.image.data = null;                              // uploaded: the JS copy isn't needed
    L.atlas = t;
    uniforms[`SatAtlas${i}`].value = t;
  }
  // Has the tile any land? (the land/sea map, ~10 km a pixel, a little wider than the tile)
  function hasLand(L, x, y) {
    if (!sea) return true;
    const ck = `${x}/${y}`;
    L.land ??= new Map();
    let v = L.land.get(ck);                          // (remembered: 121 lookups a tile, every check, added up)
    if (v === undefined) { v = hasLandNow(L, x, y); L.land.set(ck, v); }
    return v;
  }
  function hasLandNow(L, x, y) {
    const { m, W, H } = sea;
    const lon0 = (x / L.n) * 360 - 180, lon1 = ((x + 1) / L.n) * 360 - 180;
    const lat0 = tileLat(y + 1, L.n), lat1 = tileLat(y, L.n);
    for (let j = -1; j <= 9; j++) for (let i = -1; i <= 9; i++) {
      const lon = lon0 + (lon1 - lon0) * i / 8, lat = lat0 + (lat1 - lat0) * j / 8;
      const px = Math.floor(((lon + 180) / 360) * W + W) % W, py = Math.max(0, Math.min(H - 1, Math.floor(((90 - lat) / 180) * H)));
      if (m[py * W + px] < 128) return true;
    }
    return false;
  }
  const url = (src, z, x, y) => IN_SHELL && src.key
    ? `https://tiles.app.local/${src.key}/${z}/${x}/${y}.${src.url.split(".").pop()}`
    : src.url.replace("{z}", z).replace("{x}", x).replace("{y}", y);
  // is the sun up (day levels) or down (night levels) over the tile? (with a margin round the dusk line)
  const _t = new THREE.Vector3();
  const sunSide = (L, x, y, sun) => {
    if (!sun) return true;
    const lat = tileLat(y + 0.5, L.n) * RAD, lon = ((x + 0.5) / L.n * 360 - 180) * RAD;
    _t.set(Math.cos(lat) * Math.cos(lon), Math.sin(lat), -Math.cos(lat) * Math.sin(lon));
    const s = _t.dot(sun);
    return L.day ? s > -0.14 : s < 0.16;
  };
  function request(L, x, y) {
    const key = `${x}/${y}`;
    L.pending.add(key); inflight++; L.inflight = (L.inflight || 0) + 1; L.fetched = (L.fetched || 0) + 1;
    fetch(url(L.src, L.z, x, y), IN_SHELL ? {} : { mode: "cors" })
      .then((r) => { if (!r.ok) throw new Error(`tile ${r.status}`); return r.blob(); })
      .then((b) => createImageBitmap(b))
      .then((bm) => ready.push({ L, x, y, key, bm }))
      .catch(() => { L.failed ??= new Map(); L.failed.set(key, performance.now()); L.pending.delete(key); })
      // (a fetched tile stays "pending" until it is uploaded or dropped, so it is never asked for twice)
      .finally(() => { inflight--; L.inflight--; });
  }
  const inWin = (L, x, y) => {
    const dx = (((x - L.win.x0) % L.n) + L.n) % L.n;
    return dx < L.N && y >= L.win.y0 && y < L.win.y0 + L.N;
  };

  const D = { on: false };
  D.setSea = (p) => { if (!D.seaAsked) { D.seaAsked = performance.now(); p.then((m) => { sea = m; }).catch(() => { D.seaAsked = false; }); } };
  // Each frame in Satellite Mode: slide the windows to the ground ahead of the
  // view, ask for what's missing (nearest first), upload a couple of arrivals.
  D.update = (camPos, viewDir, on, sun) => {
    D.on = on;
    if (!on) return;
    D.frame = ((D.frame || 0) + 1) % 600;
    const up = camPos.clone().normalize();
    const fwd = viewDir.clone().addScaledVector(up, -viewDir.dot(up));
    if (fwd.lengthSq() < 1e-8) fwd.set(0, 1, 0).addScaledVector(up, -up.y);
    fwd.normalize();
    // the far level first (it fills the view soonest), each with half the downloads
    [...LEVELS.entries()].reverse().forEach(([i, L]) => {
      if (!L.atlas) makeAtlas(L, i);
      const g = up.clone().applyAxisAngle(new THREE.Vector3().crossVectors(up, fwd).normalize(), L.aheadKm / EARTH_KM);
      const lat = Math.asin(Math.max(-1, Math.min(1, g.y))) / RAD, lon = Math.atan2(-g.z, g.x) / RAD;
      const cx = mercX(lon, L.n), cy = mercY(lat, L.n);
      L.win.x0 = ((Math.floor(cx - L.N / 2) % L.n) + L.n) % L.n;
      L.win.y0 = Math.max(0, Math.min(L.n - L.N, Math.floor(cy - L.N / 2)));
      uniforms[`U_sat${i}`].value.set(L.n, L.win.x0, L.win.y0, L.N);
      // what to fetch: missing tiles of the window, nearest the centre first
      // (looked at every 6th frame, one level at a time: the scan is the same
      // from frame to frame, and spread out it never adds to one frame)
      if ((D.frame % 6) !== i) return;
      if ((L.inflight || 0) >= MAX_INFLIGHT / 2) return;
      if (!sea && D.seaAsked && performance.now() - D.seaAsked < 8000) return;   // the land/sea map first: no ocean tiles
      const want = [];
      for (let j = 0; j < L.N; j++) for (let k = 0; k < L.N; k++) {
        const x = (L.win.x0 + k) % L.n, y = L.win.y0 + j, key = `${x}/${y}`;
        const slot = (y % L.N) * L.N + (x % L.N);
        if (L.slots[slot] === key || L.pending.has(key)) continue;
        const f = L.failed?.get(key);
        if (f && performance.now() - f < 30000) continue;   // a failed tile: try again later
        if (!hasLand(L, x, y) || !sunSide(L, x, y, sun)) continue;
        const ddx = Math.min(Math.abs(x + 0.5 - cx), L.n - Math.abs(x + 0.5 - cx)), ddy = y + 0.5 - cy;
        want.push([ddx * ddx + ddy * ddy, x, y]);
      }
      want.sort((a, b) => a[0] - b[0]);
      for (const [, x, y] of want) { if ((L.inflight || 0) >= MAX_INFLIGHT / 2) break; request(L, x, y); }
    });
    // uploads: one tile a frame (a second only if the first was quick), and
    // only those still wanted -- a burst of arrivals (sunrise: the day tiles)
    // is spread over the frames instead of landing in a few
    const t0 = performance.now();
    for (let n = 0; n < 2 && ready.length; n++) {
      if (n === 1 && performance.now() - t0 > 0.6) break;
      const r = ready.shift();
      const { L } = r;
      L.pending.delete(r.key);
      if (!inWin(L, r.x, r.y) || !L.atlas) { r.bm.close?.(); n--; if (performance.now() - t0 > 1.5) break; continue; }
      const sx = r.x % L.N, sy = r.y % L.N, slot = sy * L.N + sx;
      const tex = renderer.properties.get(L.atlas).__webglTexture;
      if (!tex) { r.bm.close?.(); continue; }
      renderer.state.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
      gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
      gl.texSubImage2D(gl.TEXTURE_2D, 0, sx * TILE, sy * TILE, gl.RGBA, gl.UNSIGNED_BYTE, r.bm);
      renderer.state.unbindTexture();
      r.bm.close?.();
      L.slots[slot] = r.key;
      const d = L.state.image.data;
      d[slot * 4] = r.x % 256; d[slot * 4 + 1] = r.y % 256; d[slot * 4 + 2] = 255; d[slot * 4 + 3] = 255;
      L.state.needsUpdate = true;
      if (performance.now() - t0 > 1.5) break;
    }
  };
  D.stats = () => LEVELS.map((L) => ({ z: L.z, fetched: L.fetched || 0, loaded: L.slots.filter(Boolean).length, pending: L.pending.size, win: { ...L.win } }));
  return D;
}

// ---------------------------------------------------------------- volumetric clouds
// Satellite Mode's clouds as a real layer of air (the owner asked for
// volumetric clouds): between 1.5 and 12 km up, each view ray is marched
// through the layer. Where the live cloud map says there is cloud, a 3D noise
// field (the app's noise volume, ~6 and ~2 km cells) shapes it into lumps
// whose height follows how thick the cover is; each step is lit by the sun
// with one look toward it (self-shadowing: sunlit tops, grey undersides,
// orange at sunset), by the Moon at night, and by the lightning strokes. It is
// drawn at half the screen's resolution into its own picture and blended over
// the globe, which then leaves out its flat clouds (keeping their shadows).
export function createVolClouds(renderer, scene, U, sunDir) {
  const RB = 1 + 1.5 / EARTH_KM, RT = 1 + 12 / EARTH_KM;
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      CloudMap: U.CloudMap, NoiseVol: U.NoiseVol, U_cloud: U.U_cloud, U_moon: U.U_moon, U_flashA: U.U_flashA, U_flashB: U.U_flashB,
      sunDir: { value: sunDir }, Rb: { value: RB }, Rt: { value: RT }, amount: { value: 0 }, seed: { value: 0 },
    },
    vertexShader: /* glsl */ `
      varying vec3 vW;
      void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `
      precision highp float; precision highp sampler3D;
      uniform sampler2D CloudMap; uniform sampler3D NoiseVol;
      uniform vec4 U_cloud, U_moon; uniform vec4 U_flashA[16], U_flashB[16];
      uniform vec3 sunDir; uniform float Rb, Rt, amount, seed;
      varying vec3 vW;
      float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      vec2 mapUV(vec3 n) {
        float lat = asin(clamp(n.y, -1.0, 1.0)), lon = atan(-n.z, n.x);
        return vec2(lon / 6.2831853 + 0.5 - U_cloud.x, lat / 3.14159265 + 0.5);
      }
      // the cloud's shape at height fraction h, from the noise n (0..1) and the cover c
      float shape(float h, float n, float c) {
        float top = 0.22 + 0.78 * c;                          // thick cover builds tall
        float prof = smoothstep(0.0, 0.07, h) * (1.0 - smoothstep(top * 0.55, top, h));
        return max(n * prof - (1.0 - c) * 0.72 - 0.1, 0.0) * 5.0;
      }
      vec2 noise2(vec3 p) { vec3 k = p * 6371.0; return vec2(texture(NoiseVol, k / 190.0).r, texture(NoiseVol, mat3(0.788, -0.341, 0.512, 0.514, 0.808, -0.288, -0.315, 0.481, 0.818) * k / 78.0 + 0.37).r); }
      void main() {
        vec3 ro = cameraPosition, rd = normalize(vW - ro);
        float b = dot(ro, rd), cc = dot(ro, ro);
        float dT = b * b - (cc - Rt * Rt);
        if (dT <= 0.0) discard;
        float t0 = max(-b - sqrt(dT), 0.0), t1 = -b + sqrt(dT);
        float dB = b * b - (cc - Rb * Rb);
        if (dB > 0.0) t1 = -b - sqrt(dB);                     // down to the cloud base; the ground beyond
        float len = min(t1 - t0, 450.0 / 6371.0);             // at most 450 km of the layer
        if (len <= 0.0) discard;
        const int N = 30;
        float dt = len / float(N);
        float jit = hash12(gl_FragCoord.xy + seed * 17.0);
        float T = 1.0; vec3 col = vec3(0.0);
        float ext = 0.11 * 6371.0;                            // extinction: 0.11 per km at density 1
        vec3 L = sunDir;
        for (int i = 0; i < N; i++) {
          vec3 p = ro + rd * (t0 + (float(i) + jit) * dt);
          vec3 nn = normalize(p);
          vec2 uv = mapUV(nn);
          if (texture(CloudMap, uv).r < 0.03) continue;       // clear sky here: nothing to shape
          vec2 nz = noise2(p);
          // the map's 20 km texels warped by the noise, so its grid never shows
          float c = texture(CloudMap, uv + (nz - 0.5) * vec2(3.0 / 2048.0, 3.0 / 1024.0)).r;
          float h = (length(p) - Rb) / (Rt - Rb);
          // far off toward the horizon the lumps are smaller than a pixel and
          // only made the edge of the Earth sparkle and crawl: there the
          // shape evens out into smooth bands of cloud
          float far = smoothstep(700.0, 1800.0, distance(p, ro) * 6371.0);
          float d = shape(h, mix(nz.x * 0.68 + nz.y * 0.32, 0.6, far), c);
          if (d <= 0.002) continue;
          float sh = dot(nn, L);                              // the sun's height there
          float lit = smoothstep(-0.07, 0.03, sh);
          vec3 q = p + L * (2.6 / 6371.0);                    // one look toward the sun: self-shadowing
          vec2 nq = noise2(q);
          float dl = shape((length(q) - Rb) / (Rt - Rb), mix(nq.x * 0.68 + nq.y * 0.32, 0.6, far), c);
          float lightT = exp(-dl * 2.6 * 0.11 * 4.0);
          vec3 sunCol = mix(vec3(1.0, 0.52, 0.22), vec3(0.95, 0.94, 0.92), smoothstep(-0.02, 0.22, sh)) * lit;
          vec3 amb = vec3(0.26, 0.33, 0.46) * smoothstep(-0.08, 0.35, sh) * 0.45;
          vec3 moon = vec3(0.55, 0.66, 0.88) * 0.30 * U_moon.w * max(dot(nn, U_moon.xyz), 0.0) * (1.0 - lit);
          vec3 Lc = sunCol * (0.12 + 0.95 * lightT) + amb * (0.6 + 0.4 * h) + moon * (0.4 + 0.6 * lightT);
          float a = 1.0 - exp(-d * dt * ext);
          col += T * a * Lc;
          T *= 1.0 - a;
          if (T < 0.02) break;
        }
        float A = 1.0 - T;
        if (A < 0.002) discard;
        // lightning inside the storm clouds (the globe's strokes), seen through the layer
        vec3 pe = normalize(ro + rd * t0);
        if (U_flashA[0].w > 0.0) {
          vec3 fl = vec3(0.0);
          for (int i = 0; i < 16; i++) {
            vec4 Fa = U_flashA[i];
            if (Fa.w <= 0.0) break;
            vec4 Fb = U_flashB[i];
            float d2 = max(0.0, 2.0 * (1.0 - dot(pe, Fa.xyz))), r2 = Fb.x * Fb.x;
            fl += Fa.w * vec3(0.45, 0.66, 1.0) * (exp(-d2 / r2) * 2.4 + exp(-d2 / (r2 * 9.0)) * 0.4);
          }
          col += fl * A;
        }
        // haze toward the horizon (the air between the station and far cloud)
        float far = smoothstep(300.0, 1600.0, t0 * 6371.0) * smoothstep(-0.05, 0.25, dot(pe, L));
        col = mix(col, vec3(0.62, 0.74, 0.95) * A, far * 0.35);
        gl_FragColor = vec4(col, A) * amount;
      }`,
    transparent: true, depthTest: false, depthWrite: false, side: THREE.FrontSide,
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    blendEquationAlpha: THREE.AddEquation, blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
  });
  const cloudScene = new THREE.Scene();
  const shell = new THREE.Mesh(new THREE.SphereGeometry(RT, 384, 192), mat);
  shell.frustumCulled = false;
  cloudScene.add(shell);
  const rt = new THREE.WebGLRenderTarget(2, 2, { depthBuffer: false, stencilBuffer: false });
  rt.texture.minFilter = rt.texture.magFilter = THREE.LinearFilter; rt.texture.generateMipmaps = false;
  // blended into the main picture, after the Earth, before the airglow and aurora
  const comp = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    uniforms: { t: { value: rt.texture }, res: { value: new THREE.Vector2(1, 1) } },
    vertexShader: "void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",
    fragmentShader: "uniform sampler2D t; uniform vec2 res; void main() { gl_FragColor = texture2D(t, gl_FragCoord.xy / res); }",
    transparent: true, depthTest: false, depthWrite: false,
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    blendEquationAlpha: THREE.AddEquation, blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
  }));
  comp.frustumCulled = false; comp.renderOrder = 1; comp.visible = false;
  scene.add(comp);
  const size = new THREE.Vector2(), clear = new THREE.Color();
  const V = { amount: 0 };
  // Each frame (before the main picture is drawn): the cloud layer at half size.
  V.render = (camera, amount) => {
    V.amount = amount;
    mat.uniforms.amount.value = amount;
    comp.visible = amount > 0.001;
    if (!comp.visible) return;
    renderer.getDrawingBufferSize(size);
    const w = Math.max(2, Math.round(size.x / 2)), h = Math.max(2, Math.round(size.y / 2));
    if (rt.width !== w || rt.height !== h) rt.setSize(w, h);
    comp.material.uniforms.res.value.copy(size);
    // (the step offsets stay put from frame to frame: changing them every frame made the cloud edges shimmer)
    const prevTarget = renderer.getRenderTarget(), prevAuto = renderer.autoClear, prevAlpha = renderer.getClearAlpha();
    renderer.getClearColor(clear);
    renderer.setRenderTarget(rt);
    renderer.setClearColor(0x000000, 0);
    renderer.clear(true, false, false);
    renderer.autoClear = false;
    renderer.render(cloudScene, camera);
    renderer.autoClear = prevAuto;
    renderer.setClearColor(clear, prevAlpha);
    renderer.setRenderTarget(prevTarget);
  };
  return V;
}
