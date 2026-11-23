// Regional detail: Web-Mercator tiles (NASA GIBS, ~600 m/px) painted onto
// curved patches that sit on the globe around the current city. Two nested
// levels fade in as the camera comes down to the hold height, each feathered
// at its edges so there are no visible seams. Day and night tiles are blended by the real sun
// position, using the same shading as the globe.
import * as THREE from "./vendor/three.module.min.js";
import { latLonToVec3 } from "./sun.js";

const TILE = 256;
const EARTH_KM = 40075;
// extentKm: approx. width of the patch. showBelow/fullBelow: camera altitude
// (Earth radii) at which the level starts / finishes fading in.
const LEVELS = [
  { extentKm: 7000, n: 6,  showBelow: 1.4, fullBelow: 0.9 },
  { extentKm: 2900, n: 12, showBelow: 0.9, fullBelow: 0.6 },
];
// Slightly above the true sphere so the patches always sit over the globe
// mesh (whose flat facets dip up to ~2 km below it).
const PATCH_RADIUS = 1.0003;

const lonToX = (lon, z) => ((lon + 180) / 360) * 2 ** z;
const latToY = (lat, z) => {
  const r = (lat * Math.PI) / 180;
  return ((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * 2 ** z;
};
const xToLon = (x, z) => (x / 2 ** z) * 360 - 180;
const yToLat = (y, z) => (Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / 2 ** z))) * 180) / Math.PI;

const tileCache = new Map(); // url -> Promise<HTMLImageElement|null>
function loadTile(url) {
  if (!tileCache.has(url)) {
    tileCache.set(url, new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = () => { tileCache.delete(url); resolve(null); };
      img.src = url;
    }));
    if (tileCache.size > 1500) tileCache.delete(tileCache.keys().next().value);
  }
  return tileCache.get(url);
}
const tileUrl = (tpl, z, x, y) => {
  const m = 2 ** z;
  return tpl.replace("{z}", z).replace("{x}", ((x % m) + m) % m).replace("{y}", y);
};

// Paint the area covered by tiles [x0, x0+n) x [y0, y0+n) at zoom z into a
// canvas, using source tiles at zoom zs <= z (upscaled when zs < z).
function paint(ctx, px, source, z, x0, y0, n, onDraw) {
  const zs = Math.min(z, source.maxZoom);
  const s = 2 ** (z - zs);
  const k = px / (n * TILE);           // canvas px per target-tile px
  const sx0 = Math.floor(x0 / s), sx1 = Math.floor((x0 + n - 1) / s);
  const sy0 = Math.floor(y0 / s), sy1 = Math.floor((y0 + n - 1) / s);
  const jobs = [];
  for (let sy = sy0; sy <= sy1; sy++) {
    if (sy < 0 || sy >= 2 ** zs) continue;
    for (let sx = sx0; sx <= sx1; sx++) {
      jobs.push(loadTile(tileUrl(source.url, zs, sx, sy)).then((img) => {
        if (!img) return;
        const size = TILE * s * k;
        ctx.drawImage(img, (sx * s - x0) * TILE * k, (sy * s - y0) * TILE * k, size, size);
        onDraw();
      }));
    }
  }
  return Promise.all(jobs);
}

function patchGeometry(z, x0, y0, n, seg = 48) {
  const pos = [], uv = [], idx = [];
  for (let j = 0; j <= seg; j++) {
    for (let i = 0; i <= seg; i++) {
      const u = i / seg, v = j / seg;
      const lon = xToLon(x0 + u * n, z), lat = yToLat(y0 + v * n, z);
      pos.push(...latLonToVec3(lat, lon, PATCH_RADIUS));
      uv.push(u, 1 - v);
    }
  }
  for (let j = 0; j < seg; j++) {
    for (let i = 0; i < seg; i++) {
      const a = j * (seg + 1) + i, b = a + 1, c = a + seg + 1, d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}

const vertexShader = /* glsl */ `
  varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPos;
  void main() {
    vUv = uv;
    vNormal = normalize(position);
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`;
const fragmentShader = /* glsl */ `
  uniform sampler2D dayMap; uniform sampler2D nightMap;
  uniform vec3 sunDir; uniform float fade;
  varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPos;
  void main() {
    vec3 n = normalize(vNormal);
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    float d = dot(n, normalize(sunDir));
    vec4 day = texture2D(dayMap, vUv);
    vec4 night = texture2D(nightMap, vUv);
    vec3 dayCol = day.rgb * (0.28 + 1.0 * smoothstep(-0.05, 0.6, d));
    vec3 nightCol = pow(night.rgb, vec3(1.6)) * vec3(1.0, 0.86, 0.66) + day.rgb * vec3(0.03, 0.04, 0.06);
    float dayMix = smoothstep(-0.16, 0.14, d);
    vec3 col = mix(nightCol, dayCol, dayMix);
    float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
    col += vec3(0.38, 0.62, 1.0) * fres * (0.12 + 0.6 * smoothstep(-0.25, 0.5, d));
    // Only where both day and night tiles have arrived, so half-loaded areas never show as dark squares.
    float a = day.a * night.a;
    float e = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
    a *= smoothstep(0.0, 0.2, e) * fade;
    gl_FragColor = vec4(col, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

export class CityCloseUp {
  constructor(scene, sunDirUniform, cfg, maxAniso = 8) {
    this.scene = scene;
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
    this.levels = LEVELS.map((L, i) => {
      const cosLat = Math.max(0.2, Math.cos((city.lat * Math.PI) / 180));
      const z = Math.min(this.cfg.day.maxZoom, Math.round(Math.log2((EARTH_KM * cosLat * L.n) / L.extentKm)));
      const x0 = Math.round(lonToX(city.lon, z) - L.n / 2);
      const y0 = Math.round(latToY(city.lat, z) - L.n / 2);
      const px = L.n * TILE;
      const mk = (size) => {
        const c = document.createElement("canvas");
        c.width = c.height = size;
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = this.maxAniso;
        t.generateMipmaps = true;
        t.minFilter = THREE.LinearMipmapLinearFilter;
        return { c, ctx: c.getContext("2d"), t };
      };
      const day = mk(px), night = mk(Math.min(px, 2048));
      paint(day.ctx, px, this.cfg.day, z, x0, y0, L.n, () => (day.t.needsUpdate = true));
      paint(night.ctx, night.c.width, this.cfg.night, z, x0, y0, L.n, () => (night.t.needsUpdate = true));
      const mat = new THREE.ShaderMaterial({
        uniforms: { dayMap: { value: day.t }, nightMap: { value: night.t }, sunDir: this.sun, fade: { value: 0 } },
        vertexShader, fragmentShader,
        transparent: true, depthWrite: false, depthTest: true,
      });
      const mesh = new THREE.Mesh(patchGeometry(z, x0, y0, L.n), mat);
      mesh.renderOrder = 1 + i;
      mesh.visible = false;
      this.group.add(mesh);
      return { ...L, mesh, mat, tex: [day.t, night.t] };
    });
    this.scene.add(this.group);
  }

  // altitude in Earth radii; master in [0,1] fades everything (e.g. during travel).
  update(altitude, master) {
    if (!this.levels) return 0;
    let top = 0;
    for (const L of this.levels) {
      const f = THREE.MathUtils.smoothstep(L.showBelow - altitude, 0, L.showBelow - L.fullBelow) * master;
      L.mat.uniforms.fade.value = f;
      L.mesh.visible = f > 0.002;
      if (L.mesh.visible) top = f;
    }
    return top;
  }

  dispose() {
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
