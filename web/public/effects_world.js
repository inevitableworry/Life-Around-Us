// More of the real world on the globe (2026-11-18, the owner asked for them):
//
//  - The Moon, where it really is right now (sun.js sublunarPoint), lit by
//    the real sun so its phase is the real one, with NASA's Moon map on it.
//    It sits 60 Earth radii out in its true direction; it is drawn about four
//    times its true size so it reads on screen. Its light also falls on the
//    night side (ground.frag U_moon) -- faint and silvery at full moon, none
//    at new moon -- and it gets its own lens flare (main.js).
//  - Hurricane spirals: every live Category 4+ hurricane, typhoon or cyclone
//    gets a slowly turning cloud spiral with a clear eye and a bright
//    eyewall (anticlockwise in the north, clockwise in the south).
//  - Volcanoes: a faint red glow and a drifting ash plume over every volcano
//    NASA lists as erupting (EONET, live.js fetchVolcanoes).
import * as THREE from "./vendor/three.module.min.js";
import { sublunarPoint, latLonToVec3 } from "./sun.js";

const v3 = (lat, lon, r = 1) => new THREE.Vector3(...latLonToVec3(lat, lon, r));

// ---------------------------------------------------------------- the Moon
export const MOON_DIST = 60;           // Earth radii (the real mean distance)
const MOON_R = 0.273 * 4;              // drawn 4x its true size (0.273 Earth radii)
export function createMoon(scene, sunDirUniform) {
  const tex = new THREE.TextureLoader().load("assets/moon/moon.jpg");
  tex.colorSpace = THREE.NoColorSpace;  // as the Earth's maps: shaded in the picture's own values
  tex.anisotropy = 4;
  const mat = new THREE.ShaderMaterial({
    uniforms: { map: { value: tex }, sunDir: sunDirUniform, fade: { value: 1 } },
    vertexShader: /* glsl */ `
      varying vec2 vUv; varying vec3 vN;
      void main() { vUv = uv; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D map; uniform vec3 sunDir; uniform float fade;
      varying vec2 vUv; varying vec3 vN;
      void main() {
        vec3 c = texture2D(map, vUv).rgb;
        float lit = max(dot(normalize(vN), normalize(sunDir)), 0.0);
        // a soft terminator, a little brighter than the map (the Moon in sunlight
        // is bright against space), and the faint earthshine on the dark part
        float l = smoothstep(0.0, 0.25, lit) * (0.35 + 0.95 * lit);
        gl_FragColor = vec4(c * (l * 1.25 + 0.025) * fade, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(MOON_R, 64, 32), mat);
  mesh.renderOrder = -1;
  scene.add(mesh);
  const dir = new THREE.Vector3(1, 0, 0), x = new THREE.Vector3(), y = new THREE.Vector3(), z = new THREE.Vector3(), m = new THREE.Matrix4();
  let phase = 0, at = 0;
  function place(now = new Date()) {
    const p = sublunarPoint(now);
    dir.copy(v3(p.lat, p.lon));
    mesh.position.copy(dir).multiplyScalar(MOON_DIST);
    // The near side faces the Earth: the map's middle (u 0.5, the sphere's
    // local +X) points back at it, north up.
    x.copy(dir).negate();
    y.set(0, 1, 0).addScaledVector(x, -x.y).normalize();
    z.crossVectors(x, y);
    mesh.quaternion.setFromRotationMatrix(m.makeBasis(x, y, z));
    // lit fraction seen from the Earth: 0 at new moon, 1 at full
    phase = (1 - dir.dot(sunDirUniform.value)) / 2;
  }
  place();
  return {
    mesh, dir,
    get position() { return mesh.position; },
    get phase() { return phase; },
    update(nowMs, on, fade = 1) {
      mesh.visible = on && fade > 0.002;
      mat.uniforms.fade.value = fade;
      if (nowMs - at > 10000) { at = nowMs; place(); }   // it moves ~0.5 deg an hour
    },
  };
}

// ---------------------------------------------------------------- hurricane spirals
// A disc that sits just above the globe over the storm (curved to the sphere),
// drawn as a spiral of cloud bands winding into a bright eyewall round a
// clear eye. Lit by the sun like the clouds; a faint grey at night.
const spiralVert = /* glsl */ `
  varying vec2 vP; varying vec3 vN;
  void main() { vP = uv * 2.0 - 1.0; vN = normalize(mat3(modelMatrix) * position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const spiralFrag = /* glsl */ `
  uniform float time; uniform float spin; uniform float power; uniform float fade; uniform vec3 sunDir; uniform float seed;
  varying vec2 vP; varying vec3 vN;
  float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
  float fbm(vec2 p) { return n2(p) * 0.55 + n2(p * 2.1 + 3.7) * 0.28 + n2(p * 4.3 + 9.1) * 0.17; }
  void main() {
    float r = length(vP);
    if (r > 1.0) discard;
    float a = atan(vP.y, vP.x);
    // logarithmic spiral bands, turning with time (spin: +1 north, -1 south)
    float t = time * 0.06 * spin;
    // the cloud texture turns with the storm; the bands are warped by it, so
    // they read as ragged rain bands rather than a neat pinwheel
    float tex = fbm(vec2(a * 2.0 + seed - t, log(r + 0.05) * 3.0) * 2.2);
    float tex2 = fbm(vP * 7.0 + seed);
    float arms = 0.5 + 0.5 * cos(2.0 * (a - spin * 2.4 * log(r + 0.04)) - t * 2.0 + (tex - 0.5) * 1.4);
    float band = smoothstep(0.30, 0.85, arms * 0.78 + tex * 0.38 + tex2 * 0.2);
    // the central dense overcast, the eyewall and the clear eye
    float eyeR = 0.045 + 0.02 * (1.0 - power);
    float core = 1.0 - smoothstep(0.15, 0.38, r + (tex2 - 0.5) * 0.10);
    float wall = exp(-pow((r - eyeR * 1.7) / (eyeR * 0.9), 2.0));
    float eye = 1.0 - smoothstep(eyeR * 0.6, eyeR * 1.15, r);
    float d = max(band * (1.0 - smoothstep(0.50, 1.0, r)), core * (0.70 + 0.30 * tex2)) + wall * 0.5;
    d *= (1.0 - eye);
    d *= 1.0 - smoothstep(0.8, 1.0, r);
    float sun = dot(normalize(vN), normalize(sunDir));
    float day = smoothstep(-0.12, 0.25, sun);
    vec3 col = mix(vec3(0.06, 0.07, 0.09), vec3(0.95, 0.96, 0.98) * (0.55 + 0.45 * max(sun, 0.0)) * (0.88 + 0.12 * tex2), day);
    gl_FragColor = vec4(col, clamp(d, 0.0, 1.0) * 0.92 * fade);
  }`;
function curvedDisc(lat, lon, radiusKm, lift = 1.006, seg = 48) {
  // a grid over [-1,1]^2 laid on the sphere round (lat, lon)
  const c = v3(lat, lon), e = new THREE.Vector3(-c.z, 0, c.x);
  if (e.lengthSq() < 1e-6) e.set(1, 0, 0);
  e.normalize();
  const nth = new THREE.Vector3().crossVectors(c, e).normalize();
  const ang = radiusKm / 6371, pos = [], uv = [], idx = [];
  for (let j = 0; j <= seg; j++) for (let i = 0; i <= seg; i++) {
    const u = i / seg * 2 - 1, w = j / seg * 2 - 1;
    const p = c.clone().addScaledVector(e, u * Math.tan(ang)).addScaledVector(nth, w * Math.tan(ang)).normalize().multiplyScalar(lift);
    pos.push(p.x, p.y, p.z); uv.push(i / seg, j / seg);
  }
  for (let j = 0; j < seg; j++) for (let i = 0; i < seg; i++) {
    const a = j * (seg + 1) + i, b = a + 1, d = a + seg + 1, f = d + 1;
    idx.push(a, d, b, b, d, f);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeBoundingSphere();
  return g;
}
export function createStormSpirals(scene, sunDirUniform) {
  const group = new THREE.Group();
  group.renderOrder = 3;
  scene.add(group);
  const time = { value: 0 }, fade = { value: 1 };
  const byId = new Map();
  return {
    // storms: live storm events ({ id, lat, lon, cat, raw: { kmh } })
    update(seconds, storms, amount) {
      time.value = seconds; fade.value = amount;
      group.visible = amount > 0.002;
      const want = new Set();
      for (const s of storms) {
        const kmh = s.raw?.kmh ?? 0;
        if (!((s.cat ?? 0) >= 4 || kmh >= 209)) continue;   // Category 4 and up only
        want.add(s.id);
        let m = byId.get(s.id);
        if (m && (m.userData.lat !== s.lat || m.userData.lon !== s.lon)) { group.remove(m); m.geometry.dispose(); m.material.dispose(); byId.delete(s.id); m = null; }
        if (!m) {
          const power = Math.min(1, Math.max(0, (kmh - 209) / 90));
          const mat = new THREE.ShaderMaterial({
            uniforms: { time, fade, sunDir: sunDirUniform, spin: { value: s.lat >= 0 ? 1 : -1 }, power: { value: power }, seed: { value: Math.random() * 50 } },
            vertexShader: spiralVert, fragmentShader: spiralFrag,
            transparent: true, depthWrite: false, depthTest: true, side: THREE.DoubleSide,
          });
          m = new THREE.Mesh(curvedDisc(s.lat, s.lon, 480 + 160 * power), mat);
          m.userData = { lat: s.lat, lon: s.lon };
          m.renderOrder = 3;
          group.add(m); byId.set(s.id, m);
        }
      }
      for (const [id, m] of byId) if (!want.has(id)) { group.remove(m); m.geometry.dispose(); m.material.dispose(); byId.delete(id); }
    },
    get count() { return byId.size; },
  };
}

// ---------------------------------------------------------------- volcanoes
// Points over each erupting volcano: a red glow at the vent (brighter at
// night), and a short plume of ash puffs rising and drifting away with the
// wind (eastward, bending a little), each puff growing and fading.
const PUFFS = 9;
const volcVert = /* glsl */ `
  attribute float size; attribute vec4 tint;
  uniform float pxPerUnit;
  varying vec4 vTint;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * pxPerUnit / max(1e-3, -mv.z);
    vTint = tint;
    gl_Position = projectionMatrix * mv;
  }`;
const volcFrag = /* glsl */ `
  varying vec4 vTint;
  void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0;
    float r2 = dot(p, p);
    if (r2 > 1.0) discard;
    // tint: premultiplied colour and coverage (coverage 0 = pure added light, the glow)
    float g = exp(-r2 * 3.2);
    gl_FragColor = vec4(vTint.rgb * g, vTint.a * g);
  }`;
export function createVolcanoes(scene, sunDirUniform, renderer, max = 48) {
  const n = max * (PUFFS + 1);
  const pos = new Float32Array(n * 3), size = new Float32Array(n), tint = new Float32Array(n * 4);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("size", new THREE.BufferAttribute(size, 1));
  geo.setAttribute("tint", new THREE.BufferAttribute(tint, 4));
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 2);
  const mat = new THREE.ShaderMaterial({
    uniforms: { pxPerUnit: { value: 1000 } }, vertexShader: volcVert, fragmentShader: volcFrag,
    transparent: true, depthTest: true, depthWrite: false,
    // premultiplied: the glow adds light, the ash covers what is behind it
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  pts.renderOrder = 6;
  scene.add(pts);
  let list = [];
  const res = new THREE.Vector2(), up = new THREE.Vector3(), east = new THREE.Vector3(), side = new THREE.Vector3(), p = new THREE.Vector3();
  return {
    set(volcanoes) { list = (volcanoes || []).slice(0, max).map((v) => ({ ...v, n: v3(v.lat, v.lon), seed: Math.random() * 10 })); },
    get count() { return list.length; },
    // ash: 0..1, the plume (Satellite Mode leaves it out, owner's call; the glow stays)
    update(seconds, amount, camera, ash = 1) {
      pts.visible = amount > 0.002 && list.length > 0;
      if (!pts.visible) return;
      renderer.getDrawingBufferSize(res);
      mat.uniforms.pxPerUnit.value = res.y / (2 * Math.tan((camera.fov * Math.PI / 180) / 2));
      const sun = sunDirUniform.value;
      let k = 0;
      for (const v of list) {
        up.copy(v.n);
        east.set(-up.z, 0, up.x).normalize();
        const night = 1 - THREE.MathUtils.smoothstep(up.dot(sun), -0.12, 0.1);
        // the glow at the vent: deep red-orange, pulsing gently
        const pulse = 0.85 + 0.15 * Math.sin(seconds * 1.7 + v.seed * 3.1);
        p.copy(up).multiplyScalar(1.0025);
        pos.set([p.x, p.y, p.z], k * 3); size[k] = 0.022;
        const I = (0.25 + 0.75 * night) * 0.9 * pulse * amount;
        tint.set([1.0 * I, 0.32 * I, 0.08 * I, 0], k * 4); k++;
        // the plume: puffs rising and drifting east, each one cycling over 9 s
        for (let i = 0; i < PUFFS; i++) {
          if (ash <= 0.001) { tint[k * 4 + 3] = 0; tint[k * 4] = tint[k * 4 + 1] = tint[k * 4 + 2] = 0; size[k] = 0; k++; continue; }
          const life = ((seconds / 9 + i / PUFFS + v.seed) % 1);
          const rise = 0.004 + life * 0.016, drift = life * life * 0.03;
          side.crossVectors(up, east);
          p.copy(up).multiplyScalar(1.0 + rise).addScaledVector(east, drift).addScaledVector(side, Math.sin(v.seed + life * 2.0) * 0.004);
          pos.set([p.x, p.y, p.z], k * 3);
          size[k] = 0.010 + life * 0.028;
          const shade = (0.30 + 0.45 * (1 - night)) * (0.9 + 0.1 * Math.sin(v.seed + i));
          const a = Math.sin(Math.PI * Math.min(1, life * 1.15)) * 0.55 * amount * ash;
          // low in the plume the vent's glow tints the ash at night
          const glow = night * Math.max(0, 1 - life * 3) * 0.6;
          tint.set([(shade * 0.95 + glow) * a, (shade * 0.9 + glow * 0.35) * a, shade * 0.85 * a, a], k * 4); k++;
        }
      }
      for (; k < n; k++) tint[k * 4 + 3] = 0, size[k] = 0;
      geo.attributes.position.needsUpdate = geo.attributes.size.needsUpdate = geo.attributes.tint.needsUpdate = true;
    },
  };
}
