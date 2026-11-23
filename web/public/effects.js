// Two extra looks for the globe (2026-11-17, the owner asked for them):
//
//  - A camera lens flare when the view faces the sun, modelled on the owner's
//    reference frames: a white-hot core in a wide soft bloom, eight wide soft
//    beams, and a rainbow streak (as a searchlight throws off glass) on the
//    far side of the middle of the screen. It is
//    strongest when the sun is just peeking past the Earth's edge (the gleam
//    on the rim) and fades as the Earth covers it. Drawn over the finished
//    frame, additively.
//  - Aurora: green curtains fading to violet at the top over both auroral
//    ovals (round the geomagnetic poles), on the night side only, slowly
//    rippling. Their size and brightness follow the live planetary Kp index
//    (NOAA SWPC), refreshed every 30 minutes.
import * as THREE from "./vendor/three.module.min.js";

const RAD = Math.PI / 180;

// ---------------------------------------------------------------- lens flare
const flareFrag = /* glsl */ `
  precision highp float;
  uniform vec2 res; uniform vec2 sun; uniform float core; uniform float ghosts; uniform float gleam; uniform float grow; uniform float tips;
  uniform vec3 tint; uniform float rainbowOn;   // the light's colour; 0 = the streak in white (the Moon's flare)
  uniform float beamLen; uniform float beamWide;   // the beams' length and width, as multiples of the sun's
  uniform float beamCount;   // 8 (the sun) or 4 (every other one: the Moon)
  // Modelled on the owner's reference frames (cinematic night shots):
  //  - the light itself burns out to white inside a wide, soft bloom and a
  //    faint veil of haze round it;
  //  - the star is eight wide, soft beams that widen steadily and fade out
  //    smoothly as they go (not thin hard lines);
  //  - the ghost is a soft rainbow streak on the far side of the frame from
  //    the light, as a searchlight's reflection off glass (owner's clip).
  float g2(vec2 d, float s) { return exp(-dot(d, d) / (s * s)); }
  // the rainbow streak's colours (measured off the owner's clip): cyan-blue,
  // pale green, yellow, orange, red; t 0..1
  vec3 rainbow(float t) {
    vec3 c = mix(vec3(0.35, 0.80, 1.00), vec3(0.70, 1.00, 0.55), smoothstep(0.00, 0.35, t));
    c = mix(c, vec3(1.00, 0.85, 0.35), smoothstep(0.30, 0.58, t));
    c = mix(c, vec3(1.00, 0.52, 0.22), smoothstep(0.55, 0.80, t));
    return mix(c, vec3(0.95, 0.25, 0.25), smoothstep(0.78, 1.00, t));
  }
  void main() {
    float aspect = res.x / res.y;
    vec2 p = (gl_FragCoord.xy / res) * 2.0 - 1.0; p.x *= aspect;
    vec2 s = vec2(sun.x * aspect, sun.y);
    vec2 d = p - s;
    float r = length(d);
    float ang = atan(d.y, d.x);
    vec3 col = vec3(0.0);
    // the light: white-hot core, a wide soft bloom, a faint veil
    col += vec3(1.0, 0.97, 0.92) * (g2(d, 0.030) * 2.0 + g2(d, 0.085) * 0.50);
    col += vec3(1.0, 0.88, 0.70) * (g2(d, 0.17) * 0.20 + 0.04 / (1.0 + pow(r / 0.28, 2.0)));
    // the star: eight wide beams about 45 deg apart (as measured in the
    // reference frame: each beam's half-brightness width grows from ~0.8 % of
    // the frame height at the light by ~16 % of the distance out, and its
    // brightness stays nearly level close in, then falls away smoothly,
    // to about a third at 40 % of the frame height)
    // Out towards their ends the beams turn to rainbow (owner's reference: a
    // star filter's beams, white at the light, then bands of colour running
    // along each beam), in the same colours as the rainbow streak; widths
    // unchanged.
    vec3 st = vec3(0.0);
    for (int i = 0; i < 8; i++) {
      float fi = float(i);
      if (beamCount < 5.0 && mod(fi, 2.0) > 0.5) continue;           // four beams, 90 deg apart
      float k = fract(sin(fi * 12.9898 + 4.1) * 43758.5453);
      float a = radians(15.0 + fi * 45.0 + (k - 0.5) * 5.0);
      float da = abs(mod(ang - a + 3.14159265, 6.2831853) - 3.14159265);
      float perp = r * sin(min(da, 1.5707963));
      float w = (0.0096 + 0.096 * r) * beamWide;                      // gaussian width: FWHM 0.016 + 0.16 r
      float along = exp(-pow(r / (0.80 * beamLen), 2.2)) * smoothstep(0.0, 0.05, r);
      // white for most of its length; only the outer end runs through the
      // streak's colours, cyan-blue where the white gives way, through
      // green, yellow and orange, to red at the tip
      vec3 band = rainbow(clamp((r - 0.70) / 0.38 + (k - 0.5) * 0.08, 0.0, 1.0)) * 1.4;
      vec3 bt = mix(vec3(1.0, 0.96, 0.90), band, 0.92 * tips * smoothstep(0.62, 0.74, r));
      st += bt * exp(-pow(perp / w, 2.0)) * along * (0.85 + 0.15 * k);
    }
    col += st * 0.40;
    col *= tint * core * (0.75 + 0.45 * gleam);
    // The ghost: the rainbow a searchlight throws off a glass pane in the
    // owner's reference clip, in place of round ghost discs: one soft
    // teardrop streak on the far side of the middle of the frame from the
    // light (0.6 of the way across), lying along the line to the light, its
    // colours running along it -- cyan-blue at the end nearest the light,
    // then green, yellow, orange, red -- wider and fainter at the far end.
    vec3 g = vec3(0.0);
    vec2 dir = length(s) > 1e-4 ? normalize(s) : vec2(0.0, 1.0);
    // grow (1 far off .. ~2.6 right up at the peeking sun): the streak spreads
    // longer and wider, its colours bands stretching with it, as a real
    // reflection does when the camera closes in on the light.
    vec2 q = p - s * -0.6;
    float al = dot(q, dir) / grow, ac = dot(q, vec2(-dir.y, dir.x)) / pow(grow, 1.15);
    float t = clamp(0.5 - al / 0.32, 0.0, 1.0);                     // 0 at the light end .. 1 at the far end
    float halfW = 0.055 + 0.055 * t;
    float ua = al / 0.21, uc = ac / halfW;                           // (squared, not pow(): pow of a negative is NaN)
    float body = exp(-ua * ua) * exp(-uc * uc);
    // colour stops measured off the clip: cyan-blue, pale green, yellow, orange, red
    vec3 spec = mix(vec3(0.92), rainbow(t), rainbowOn) * tint;
    g += spec * body * (1.0 - 0.3 * t) * 0.40 * (0.85 + 0.25 * (grow - 1.0)) / max(1.0, 0.75 + 0.25 * grow);
    col += g * ghosts;
    gl_FragColor = vec4(col, 1.0);
  }`;

// opts.tint: the light's colour (white for the sun); opts.rainbow false: no
// rainbow tips, and the streak in white (the Moon's flare, owner's call).
export function createLensFlare(renderer, opts = {}) {
  const rainbow = opts.rainbow !== false;
  const disc = opts.disc ?? 1;         // the light's size, as a multiple of the sun's disc (the timing windows scale with it)
  const mat = new THREE.ShaderMaterial({
    uniforms: { res: { value: new THREE.Vector2(1, 1) }, sun: { value: new THREE.Vector2() },
      core: { value: 0 }, ghosts: { value: 0 }, gleam: { value: 0 }, grow: { value: 1 }, tips: { value: 0 },
      tint: { value: opts.tint ? opts.tint.clone() : new THREE.Vector3(1, 1, 1) }, rainbowOn: { value: rainbow ? 1 : 0 },
      beamLen: { value: opts.beamLen ?? 1 }, beamWide: { value: opts.beamWide ?? 1 }, beamCount: { value: opts.beams ?? 8 } },
    vertexShader: "void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",
    fragmentShader: flareFrag,
    transparent: true, blending: THREE.AdditiveBlending, depthTest: false, depthWrite: false,
  });
  const scene = new THREE.Scene(), cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  quad.frustumCulled = false;
  scene.add(quad);
  const v = new THREE.Vector3(), fwd = new THREE.Vector3(), toLight = new THREE.Vector3();
  let level = 0;                       // eased on/off
  return {
    get uniforms() { return mat.uniforms; },
    // sunDir: unit vector to the light (the sun: at infinity); pos: the
    // light's position instead, for a light at a finite distance (the Moon);
    // amount: 0..1 (fades, the option, the Moon's phase)
    render(camera, sunDir, amount, dt = 1 / 60, pos = null) {
      const c = camera.position, dist = c.length();
      camera.getWorldDirection(fwd);
      if (pos) sunDir = toLight.copy(pos).sub(c).normalize();     // seen from the camera
      let want = 0, gleam = 0, onScreen = 0, ghostsOn = 0, grow = 1, tips = 0;
      if (amount > 0 && fwd.dot(sunDir) > 0.05) {
        // How far the sun is past the Earth's edge, seen from the camera.
        const alpha = Math.asin(Math.min(1, 1 / dist));               // the Earth's angular radius
        const beta = Math.acos(THREE.MathUtils.clamp(-c.dot(sunDir) / dist, -1, 1));   // sun from the Earth's centre
        const past = (beta - alpha) / RAD;                              // degrees; < 0: behind the Earth
        const vis = THREE.MathUtils.smoothstep(past, -0.3 * disc, 0.15 * disc);   // the sun's disc (0.27 deg across) coming out
        // Only while the sun is touching the rim, peeking past it (the owner's
        // call: a visible gap between the sun and the edge is too far out):
        // full to 0.2 deg past the edge, gone by 0.8 deg.
        gleam = 1 - THREE.MathUtils.smoothstep(past, 0.2 * disc, 0.8 * disc);
        // Satellite Mode (wide > 0): from the station the sun burns through the
        // lens all the way down to the horizon, as in the crews' sunsets.
        if (this.wide > 0) gleam = Math.max(gleam, this.wide);   // all day: whenever the sun is up and in view
        // The beams' rainbow tips (owner): they come in gradually as the sun
        // nears the edge, are full while the bright sun sits right on the
        // Earth's edge, and go back to white as it slips behind.
        tips = rainbow ? THREE.MathUtils.smoothstep(past, -0.25, -0.02) * (1 - THREE.MathUtils.smoothstep(past, 0.12, 0.7)) : 0;
        (pos ? v.copy(pos) : v.copy(sunDir).multiplyScalar(1000).add(c)).project(camera);
        const edge = Math.max(Math.abs(v.x), Math.abs(v.y));
        // (Satellite Mode: gone as soon as the sun is out of the frame -- beams
        // from a sun off the edge looked like a glitch)
        onScreen = this.wide > 0 ? 1 - THREE.MathUtils.smoothstep(edge, 0.97, 1.06) : 1 - THREE.MathUtils.smoothstep(edge, 1.0, 1.35);
        ghostsOn = 1 - THREE.MathUtils.smoothstep(edge, 1.25, 2.2);
        want = vis * gleam * 1.25 * amount;
        // Closer to the peeking sun, the bigger the rainbow: the camera coming
        // down towards the Earth (radius 2.8 -> 1.4) and the sun nearer the
        // middle of the frame both spread it.
        const near = THREE.MathUtils.smoothstep(2.9 - dist, 0, 1.5);
        const aim = 1 - THREE.MathUtils.smoothstep(Math.hypot(v.x, v.y), 0.15, 1.3);
        grow = 1 + 0.9 * near + 0.7 * aim;
        mat.uniforms.sun.value.set(v.x, v.y);
        this.debug = { past, vis, gleam, tips, onScreen, ghostsOn, grow, x: v.x, y: v.y };
      }
      if (!Number.isFinite(want)) want = 0;                           // (one bad frame, e.g. before the globe has
      // Fades in over ~0.15 s, but cuts out almost at once (~25 ms) when the
      // Earth covers the sun or it moves off the rim: a real flare vanishes the
      // instant its light is blocked, and a slow fade left a ghost lingering
      // when the sun was swung quickly behind the Earth.
      level += (want - level) * (1 - Math.exp(-dt * (want < level ? 40 : 7)));   // faded in, must not stick as NaN for good)
      if (!Number.isFinite(level)) level = 0;
      if (level < 0.003) return;
      renderer.getDrawingBufferSize(mat.uniforms.res.value);
      mat.uniforms.core.value = level * onScreen;
      mat.uniforms.ghosts.value = level * ghostsOn;
      mat.uniforms.gleam.value = gleam;
      mat.uniforms.tips.value += (tips - mat.uniforms.tips.value) * (1 - Math.exp(-dt * 8));   // eased: the colour comes and goes smoothly
      mat.uniforms.grow.value += (grow - mat.uniforms.grow.value) * (1 - Math.exp(-dt * 6));   // eased, so it breathes rather than jumps
      const ac = renderer.autoClear;
      renderer.autoClear = false;
      renderer.setRenderTarget(null);
      renderer.render(scene, cam);
      renderer.autoClear = ac;
    },
  };
}

// ---------------------------------------------------------------- aurora
// Geomagnetic north pole (IGRF, 2025): 80.8 N, 72.6 W; the south one is its antipode.
const MAG_POLES = [[80.8, -72.6], [-80.8, 107.4]];
const auroraVert = /* glsl */ `
  uniform float time; uniform float ovalDeg; uniform vec3 axis; uniform vec3 e1; uniform vec3 e2; uniform float band;
  attribute vec2 ph;                    // x: angle round the oval (0..1), y: height (curtain) or across (band), 0..1
  varying float vH; varying float vPhi; varying vec3 vDir;
  void main() {
    float phi = ph.x * 6.2831853;
    // the oval's edge ripples slowly
    float wob = 1.6 * sin(3.0 * phi + 0.11 * time) + 0.9 * sin(7.0 * phi - 0.23 * time + 1.3)
              + 0.45 * sin(13.0 * phi + 0.37 * time + 0.4) + 0.25 * sin(29.0 * phi - 0.6 * time);
    float th, r;
    if (band > 0.5) {                   // the glow seen from above: ~500 km across, mostly poleward of the edge
      th = (ovalDeg + wob + 1.0 - ph.y * 5.0) * 0.01745329;
      r = 1.0 + 110.0 / 6371.0;
    } else {                            // the curtain: 95 to 325 km up, leaning a little poleward at the top
      th = (ovalDeg + wob) * 0.01745329 - ph.y * 0.004;
      r = 1.0 + (95.0 + ph.y * 230.0) / 6371.0;
    }
    vec3 dir = cos(th) * axis + sin(th) * (cos(phi) * e1 + sin(phi) * e2);
    vH = ph.y; vPhi = ph.x; vDir = dir;
    gl_Position = projectionMatrix * viewMatrix * vec4(dir * r, 1.0);
  }`;
const auroraFrag = /* glsl */ `
  uniform float time; uniform float power; uniform vec3 sunDir; uniform float band;
  varying float vH; varying float vPhi; varying vec3 vDir;
  float hash(float n) { return fract(sin(n) * 43758.5453); }
  float noise(float x) { float i = floor(x), f = fract(x); return mix(hash(i), hash(i + 1.0), f * f * (3.0 - 2.0 * f)); }
  void main() {
    float night = 1.0 - smoothstep(-0.16, 0.02, dot(normalize(vDir), sunDir));
    if (night <= 0.0) discard;
    float x = vPhi * 420.0;
    // vertical rays drifting along the curtain, and slow brightening waves
    float rays = 0.35 + 0.65 * noise(x + time * 0.9) * noise(x * 0.37 - time * 0.4 + 11.0);
    float wave = 0.55 + 0.45 * sin(vPhi * 38.0 - time * 0.35) * sin(vPhi * 11.0 + time * 0.21);
    // green near the bottom, violet towards the top; a sharp lower edge, soft top
    vec3 green = vec3(0.12, 1.0, 0.42), violet = vec3(0.62, 0.22, 1.0);
    vec3 c; float a;
    if (band > 0.5) {
      // seen from above: a soft green band, brightest near its equatorward
      // edge, violet towards the pole, broken into patches and rays
      c = mix(green, mix(green, violet, 0.55), smoothstep(0.35, 0.95, vH));
      float b1 = (vH - 0.28) / 0.17, b2 = (vH - 0.6) / 0.3;          // (squared, not pow(): NaN below zero)
      a = exp(-b1 * b1) * 0.85 + exp(-b2 * b2) * 0.25;
      a *= 0.55 + 0.45 * noise(vPhi * 70.0 + time * 0.15) * noise(vPhi * 23.0 - time * 0.07 + 5.0) * 1.6;
    } else {
      c = mix(green, violet, smoothstep(0.25, 0.85, vH));
      a = smoothstep(0.0, 0.06, vH) * pow(1.0 - vH, 1.6) * (1.0 + 1.4 * exp(-vH * 9.0)) * 1.5;
    }
    gl_FragColor = vec4(c * a * rays * wave * night * power, 1.0);
  }`;

export function createAurora(scene, sunDirUniform) {
  const seg = 720, rows = 10;
  const ph = new Float32Array((seg + 1) * (rows + 1) * 2), idx = [];
  for (let j = 0, k = 0; j <= rows; j++) for (let i = 0; i <= seg; i++, k++) { ph[k * 2] = i / seg; ph[k * 2 + 1] = j / rows; }
  for (let j = 0; j < rows; j++) for (let i = 0; i < seg; i++) {
    const a = j * (seg + 1) + i, b = a + 1, c = a + seg + 1, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("ph", new THREE.BufferAttribute(ph, 2));
  geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array((seg + 1) * (rows + 1) * 3), 3));   // unused (placed in the shader)
  geo.setIndex(idx);
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 2);
  const time = { value: 0 }, oval = { value: 22 }, power = { value: 0 };
  const group = new THREE.Group();
  for (const [lat, lon] of MAG_POLES) for (const bandOn of [1, 0]) {
    const la = lat * RAD, lo = lon * RAD;
    // the app's Earth axes (sun.js latLonToVec3): x = cos(lat)cos(lon), y = sin(lat), z = -cos(lat)sin(lon)
    const axis = new THREE.Vector3(Math.cos(la) * Math.cos(lo), Math.sin(la), -Math.cos(la) * Math.sin(lo));
    const e1 = new THREE.Vector3(0, 1, 0).cross(axis).normalize();
    const e2 = new THREE.Vector3().crossVectors(axis, e1).normalize();
    const mat = new THREE.ShaderMaterial({
      uniforms: { time, ovalDeg: oval, power, sunDir: sunDirUniform, axis: { value: axis }, e1: { value: e1 }, e2: { value: e2 }, band: { value: bandOn } },
      vertexShader: auroraVert, fragmentShader: auroraFrag,
      transparent: true, depthTest: true, depthWrite: false, side: THREE.DoubleSide,
      // Added light, leaving the picture's alpha alone (as the atmosphere's
      // shell): written alpha made the curtains count as "globe" in the old
      // look's composite, a dark slab hiding the stars behind them (seen
      // side-on from Satellite Mode).
      blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.SrcAlphaFactor, blendDst: THREE.OneFactor,
      blendEquationAlpha: THREE.AddEquation, blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneFactor,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.frustumCulled = false;
    mesh.renderOrder = 6;
    group.add(mesh);
  }
  scene.add(group);
  let kp = 2, shown = 0;
  return {
    group,
    get kp() { return kp; },
    setKp(v) { if (Number.isFinite(v)) kp = Math.max(0, Math.min(9, v)); },
    // amount 0..1 (the option, the intro fade, the close-up)
    update(seconds, amount, dt = 1 / 60) {
      shown += (amount - shown) * (1 - Math.exp(-dt * 2));
      group.visible = shown > 0.005;
      if (!group.visible) return;
      time.value = seconds;
      // the oval: ~23 deg from the pole when quiet, reaching ~40 deg (50 deg
      // magnetic latitude) in a big storm; brighter as Kp rises
      oval.value = 21.5 + 1.9 * kp;
      power.value = (0.35 + kp / 5.5) * shown;
    },
  };
}

// The latest planetary Kp index (NOAA SWPC, 3-hourly; new feeds are a list of
// {time_tag, Kp}, older ones a table with a header row).
export async function fetchKp() {
  const r = await fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json", { cache: "no-store" });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const j = await r.json();
  const last = j[j.length - 1];
  const v = Array.isArray(last) ? parseFloat(last[1]) : parseFloat(last?.Kp ?? last?.kp_index);
  if (!Number.isFinite(v)) throw new Error("no Kp");
  return v;
}

// ---------------------------------------------------------------- storm lightning
// Lightning, modelled on the owner's clip of a thunderstorm seen from the
// space station at night: each flash lights the storm cloud itself from
// inside -- a blue-white glow over a patch of cloud with its bumps and turrets
// showing, a white-hot core where the bolt is -- and flickers in 1-4 strokes
// (each ~0.1 s, the later ones a little to the side), hopping from cell to
// cell of the storm; now and then a broad, dimmer sheet flash lights a large
// part of it. The ground program draws the light (U_flashA/B: up to 16
// strokes at once); this keeps the flashes going over the storms given.
export const FLASH_SLOTS = 16;
export function createLightning(flashA, flashB) {
  const events = [];                   // { strokes: [{ t, tau, amp, dir }], r, core, seed, end }
  const dirAt = (lat, lon) => { const la = lat * RAD, lo = lon * RAD; return new THREE.Vector3(Math.cos(la) * Math.cos(lo), Math.sin(la), -Math.cos(la) * Math.sin(lo)); };
  const nudge = (d, km) => {           // a point up to km away from d
    const t = new THREE.Vector3(-d.z, 0, d.x).normalize(), b2 = new THREE.Vector3().crossVectors(d, t);
    const a = Math.random() * Math.PI * 2, r = (Math.sqrt(Math.random()) * km) / 6371;
    return d.clone().addScaledVector(t, Math.cos(a) * r).addScaledVector(b2, Math.sin(a) * r).normalize();
  };
  return {
    get count() { return events.length; },
    // storms: [{ lat, lon, cat?, s? }] (named cyclones, and the coldest storm
    // tops from the satellite map); amount 0..1 (fades, the close-up).
    update(seconds, dt, storms, sunDir, amount) {
      if (amount > 0) for (const st of storms) {
        const rate = st.cat != null ? 0.9 + 0.3 * st.cat : 0.15 + 0.5 * (st.s ?? 0.5);   // flashes a second
        if (Math.random() >= rate * dt || events.length > 40) continue;
        const spread = st.cat != null ? 160 : 110;                     // km: anywhere in the storm
        const d = nudge(dirAt(st.lat, st.lon), spread);
        if (d.dot(sunDir) > -0.04) continue;                           // in daylight a flash isn't seen
        const sheet = Math.random() < 0.15;
        const n = sheet ? 1 + (Math.random() < 0.5 ? 1 : 0) : 1 + Math.floor(Math.random() * 4), strokes = [];
        for (let k = 0, t = seconds; k < n; k++, t += 0.05 + Math.random() * 0.16) {
          strokes.push({ t, tau: sheet ? 0.18 + Math.random() * 0.12 : 0.05 + Math.random() * 0.05,
            amp: (k ? 0.55 + Math.random() * 0.45 : 1) * (sheet ? 0.45 : 0.8 + Math.random() * 0.5),
            dir: k ? nudge(d, 25) : d });
        }
        events.push({ strokes, r: (sheet ? 130 + Math.random() * 70 : 38 + Math.random() * 34) / 6371,
          core: sheet ? 0.15 : 0.42 + Math.random() * 0.18, seed: Math.random() * 10, end: strokes[n - 1].t + 0.6 });
      }
      for (let i = events.length - 1; i >= 0; i--) if (seconds > events[i].end) events.splice(i, 1);
      // the strongest strokes right now into the slots (brightest first; the program stops at the first empty one)
      const live = [];
      for (const e of events) for (const s of e.strokes) {
        const t = seconds - s.t;
        if (t < 0) continue;
        const g = (t < 0.012 ? t / 0.012 : Math.exp(-(t - 0.012) / s.tau)) * s.amp * amount;
        if (g > 0.01) live.push({ g, s, e });
      }
      live.sort((x, y) => y.g - x.g);
      for (let i = 0; i < FLASH_SLOTS; i++) {
        const L = live[i];
        if (!L) { flashA[i].w = 0; continue; }
        flashA[i].set(L.s.dir.x, L.s.dir.y, L.s.dir.z, L.g);
        flashB[i].set(L.e.r, L.e.core, L.e.seed, 0);
      }
    },
  };
}
