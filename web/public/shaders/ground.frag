// Generated from Life with PlayStation's worldGroundFromSpaceFP (data/cg/world.cgelf),
// instruction for instruction, by the LWP-PC fragment-program translator.
// Literal constants are the ones compiled into the program; the uniforms are
// the program's own parameters (names from its parameter table), set by main.js
// with the values fwWorld uses.
precision highp float;
varying highp vec4 tc0, tc4, tc5;
uniform vec4 U_PInvWavelength, U_PInvWavelengthKr4PIplusKm4PI, U_PKrESun, U_PKmESun,
  U_PScale, U_PRayleighScaleDepth, U_PScaleOverRayleighScaleDepth, U_PointToLight, U_g, U_g2,
  U_LightColor0, U_Shininess, U_OceanFresnel0, U_Specular, U_color;
uniform sampler2D ColorMap, NightMap, CloudMap, SpecularMap, NoiseMap;
// noise_anim.dds is a 32x32x32 volume (L8): the program's TEX is a 3D lookup.
precision highp sampler3D;
uniform sampler3D NoiseVol;
uniform vec4 U_cloud, U_camera, U_slice, U_noise, U_nightLook, U_lightTint;
uniform vec4 U_glitter;   // x: seconds, y: strength (0 = off)
uniform vec4 U_moon;      // the Moon: direction xyz, light w (its lit fraction; 0 = off)
uniform vec4 U_flashA[16], U_flashB[16];   // lightning strokes: A = direction, brightness; B = radius (rad), core size, seed (effects.js)
float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise3(vec3 p) {
    vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x), mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x), mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y), f.z);
  }
// Satellite Mode's close land (satellite.js createSatDetail): two windows of
// Sentinel-2 tiles (zoom 8 near, zoom 7 further out) in toroidal atlases,
// each slot's resident tile in its state texture. Blended over the globe's
// map, feathered at the windows' edges and faded where a level would shimmer.
uniform sampler2D SatAtlas0, SatAtlas1, SatState0, SatState1, SatAtlas2, SatAtlas3, SatState2, SatState3;
uniform vec4 U_sat0, U_sat1, U_sat2, U_sat3;   // 0, 1: day (zoom 8, 7); 2, 3: night lights (zoom 8, 7)    // x: tiles round the world (2^z), y/z: window's first tile x/y, w: tiles across
vec4 satLevel(sampler2D atlas, sampler2D st, vec4 P, vec2 merc) {
  vec2 t = merc * P.x;                                      // tile coordinates at this zoom
  vec2 w = vec2(mod(t.x - P.y + 0.5 * P.x, P.x) - 0.5 * P.x, t.y - P.z);   // within the window (x wraps)
  if (w.x < 0.0 || w.y < 0.0 || w.x >= P.w || w.y >= P.w) return vec4(0.0);
  vec2 ti = floor(vec2(mod(t.x, P.x), t.y));
  vec2 slot = mod(ti, P.w);
  vec4 s = texelFetch(st, ivec2(slot), 0);
  if (s.b < 0.5 || abs(s.r * 255.0 - mod(ti.x, 256.0)) > 0.5 || abs(s.g * 255.0 - mod(ti.y, 256.0)) > 0.5) return vec4(0.0);
  vec2 f = clamp(fract(t), 0.75 / 256.0, 1.0 - 0.75 / 256.0);
  vec3 c = texture(atlas, (slot + f) / P.w).rgb;
  float edge = min(min(w.x, P.w - w.x), min(w.y, P.w - w.y));
  vec2 dt = fwidth(t) * 256.0;                              // tile texels per screen pixel
  float tpp = max(dt.x, dt.y);
  float wgt = smoothstep(0.2, 1.6, edge) * (1.0 - smoothstep(1.6, 3.2, tpp));
  return vec4(c, wgt);
}
vec3 satDay(vec3 base) {
  vec3 Nd = normalize(tc4.xyz);
  float lat = clamp(asin(clamp(Nd.y, -1.0, 1.0)), -1.4835, 1.4835), lon = atan(-Nd.z, Nd.x);
  vec2 merc = vec2(lon / 6.2831853 + 0.5, 0.5 - log(tan(0.7853982 + 0.5 * lat)) / 6.2831853);
  vec4 a = satLevel(SatAtlas1, SatState1, U_sat1, merc);
  vec4 b = satLevel(SatAtlas0, SatState0, U_sat0, merc);
  // Sentinel-2's colours brought toward the globe's map (a touch darker, less
  // green), so the two blend without a visible edge
  a.rgb = pow(a.rgb, vec3(1.12)) * vec3(0.98, 0.97, 1.0);
  b.rgb = pow(b.rgb, vec3(1.12)) * vec3(0.98, 0.97, 1.0);
  // land only: the tiles' seas are near black (and the globe's own sea reads
  // better, with its glint), so over water the globe's map stays
  float land = 1.0 - smoothstep(0.3, 0.9, texture2D(SpecularMap, tc0.xy).x);
  vec3 c = mix(base, a.rgb, a.a * land * U_glitter.z);
  return mix(c, b.rgb, b.a * land * U_glitter.z);
}
// ...and the night lights from Black Marble tiles, turned into brightness the
// way tools/make_night_map.py made the globe's lights map (luminance above
// the dark base, the blue of the dark ground and polar ice taken off).
float satNight(float base) {
  vec3 Nd = normalize(tc4.xyz);
  float lat = clamp(asin(clamp(Nd.y, -1.0, 1.0)), -1.4835, 1.4835), lon = atan(-Nd.z, Nd.x);
  vec2 merc = vec2(lon / 6.2831853 + 0.5, 0.5 - log(tan(0.7853982 + 0.5 * lat)) / 6.2831853);
  vec4 a = satLevel(SatAtlas3, SatState3, U_sat3, merc);
  vec4 b = satLevel(SatAtlas2, SatState2, U_sat2, merc);
  float la = clamp((dot(a.rgb, vec3(0.299, 0.587, 0.114)) - 0.055 - max(0.0, a.b - a.r)) / 0.945, 0.0, 1.0);
  float lb = clamp((dot(b.rgb, vec3(0.299, 0.587, 0.114)) - 0.055 - max(0.0, b.b - b.r)) / 0.945, 0.0, 1.0);
  float v = mix(base, la, a.a * U_glitter.z);
  v = mix(v, lb, b.a * U_glitter.z);
  // more contrast: the dim haze between towns darker, the town centres as bright
  return mix(v, min(1.0, pow(v, 1.35) * 1.3), U_glitter.z);
}
// Satellite Mode (U_glitter.z > 0): the cloud map is ~20 km a texel, soft
// and blocky seen from the station's height, so its edges and insides get
// broken up with finer detail (three octaves of the noise volume, ~60, 20 and
// 7 km): thin cloud turns to patches and streets, thick cloud gets texture.
const mat3 CN_R1 = mat3(0.788, -0.341, 0.512,  0.514, 0.808, -0.288,  -0.315, 0.481, 0.818);
const mat3 CN_R2 = mat3(0.354, 0.612, -0.707,  -0.866, 0.500, 0.0,  0.354, 0.612, 0.707);
// smooth value noise in kilometres (the noise volume's coarse grid showed as
// blocks once the edges were made crisp): cells of ~22, 8 and 3 km, the
// size of cumulus fields and the puffs in them
float cloudNoise(vec3 p) {
  vec3 k = p * 6371.0;
  return vnoise3(CN_R1 * k / 22.0) * 0.5 + vnoise3(CN_R2 * k / 8.0 + 3.7) * 0.38 + vnoise3(CN_R1 * k / 3.0 + 7.1) * 0.12;
}
float cloudDetail(float c) {
  // (with the volumetric clouds on, U_cloud.z, the flat cloud isn't drawn and
  // its shadow is halved: the detail -- the heaviest part of this program,
  // 24 noise lookups a pixel -- is left out)
  if (U_glitter.z <= 0.0 || c <= 0.002 || U_cloud.z > 0.5) return c;
  vec3 Nd = normalize(tc4.xyz);
  float n = cloudNoise(Nd);
  float d = clamp((c - 0.5) * 1.5 + 0.5 + (n - 0.5) * 1.7 * (0.3 + c * (1.0 - c) * 2.8), 0.0, 1.0) * smoothstep(0.0, 0.12, c);
  d = smoothstep(0.18, 0.72, d);                            // crisp edges, as cumulus have
  // relief: the noise read again a little toward the sun -- tops facing it
  // brighter, the far sides greyer, so the cloud fields look lumpy, not flat
  vec3 L = normalize(U_PointToLight.xyz);
  vec3 T = L - Nd * dot(L, Nd);
  float tl = length(T);
  if (tl > 1e-4) {
    vec3 q = normalize(Nd + T / tl * 0.0005);
    float n2 = cloudNoise(q);
    d *= clamp(0.92 + (n - n2) * 3.0, 0.72, 1.12);
  }
  return mix(c, d, U_glitter.z);
}
vec4 nrmz(vec4 x, float l2) { return l2 > 0.0 ? x * inversesqrt(l2) : vec4(0.0); }
void main() {
  vec4 r0 = vec4(0.0), r1 = vec4(0.0), r2 = vec4(0.0), r3 = vec4(0.0), r4 = vec4(0.0),
       r5 = vec4(0.0), r6 = vec4(0.0), cc0 = vec4(0.0), _v, _p;
  vec3 duskL = vec3(0.0);

    { _v = vec4(dot((tc4.xyzw).xyz, (tc4.xyzw).xyz)); r0.x = _v.x; }
    { _v = vec4((U_camera).xyzw); r4.w = _v.w; }
    { _v = vec4(((r4).xyzw) + ((vec4(-1.10249984,0.0,0.0,0.0)).xxxx)) * 4.0; r4.w = _v.w; }
    { _v = vec4(nrmz(tc4.xyzw, ((r0).xyzw).x)); r6.xyz = _v.xyz; }
    { _v = vec4(((r6).xyzw) + (-((U_camera).xyzw))); r0.xyz = _v.xyz; }
    { _v = vec4(dot(((r0).xyzw).xyz, ((r0).xyzw).xyz)); r1.x = _v.x; }
    { _v = vec4((U_PScaleOverRayleighScaleDepth).xxxx); r5.w = _v.w; }
    { _v = vec4(inversesqrt(abs(((r1).xyzw).x))); r6.w = _v.w; }
    { _v = vec4(((r6).wwww) * ((r0).xyzw)); r4.xyz = _v.xyz; }
    { _v = vec4(nrmz(-((r0).xyzw), ((r1).xyzw).x)); r0.xyz = _v.xyz; }
    { _v = vec4(dot(((r4).xyzw).xyz, ((U_camera).xyzw).xyz)) * 2.0; r0.w = _v.w; }
    { _v = vec4(((r0).xyzw) * ((r0).xyzw) + (-((r4).xyzw))); r1.w = _v.w; }
    { _v = vec4(max(((r1).wwww), ((vec4(0.0,0.0,0.0,0.0)).xxxx))); r1.x = _v.x; }
    { _v = vec4(inversesqrt(abs(((r1).xyzw).x))); r1.y = _v.y; }
    { _v = vec4(dot(((r6).xyzw).xyz, (-((U_PointToLight).xyzw)).xyz)) * 2.0; r1.x = _v.x; }
    { _v = vec4((-((r6).xxyz)) * ((r1).xxxx) + (-((U_PointToLight).xxyz))); r3.yzw = _v.yzw; }
    { _v = vec4((1.0 / ((r1).yyyy).x)); r3.x = _v.x; }
    { _v = vec4(dot(((r3).yzww).xyz, ((r0).xyzw).xyz)); r4.w = _v.w; }
    { _v = vec4((-((r0).xyzw)) + (-((r3).xxxx))) / 2.0; r3.w = _v.w; }
    { _v = vec4(dot(((r6).xyzw).xyz, ((r0).xyzw).xyz)); r2.w = _v.w; }
    { _v = vec4((1.0 / ((r6).wwww).x)); r1.x = _v.x; }
    { _v = vec4((-((r3).xyzw)) + ((r1).xxxx)); r1.w = _v.w; }
    { _v = vec4(((r4).xyzw) * ((r3).wwww) + ((U_camera).xyzw)); r3.xyz = _v.xyz; }
    { _v = vec4(((r3).xyzw) * (-((r4).xyzw))); r0.xyz = _v.xyz; }
    { _v = vec4(dot(((r0).xyzw).xyz, ((vec4(0.952381015,0.0,0.0,0.0)).xxxx).xyz)); r1.x = _v.x; }
    { _v = vec4(((r1).xyzw) * ((vec4(0.0,0.333333343,0.0,0.0)).yyyy)); r1.w = _v.w; }
    { _v = vec4(((r4).xyzz) * ((r1).wwww)); r0.xyw = _v.xyw; }
    { _v = vec4((r0).xywz) / 2.0; r2.xyz = _v.xyz; }
    { _v = vec4(((r3).xyzw) + ((r2).xyzw)); r5.xyz = _v.xyz; }
    { _v = vec4(dot(((r5).xyzw).xyz, ((r5).xyzw).xyz)); r0.z = _v.z; }
    { _v = vec4(((r5).xxyz) + ((r0).xxyw)); r3.yzw = _v.yzw; }
    { _v = vec4(((r3).yzww) + ((r0).xywz)); r2.xyz = _v.xyz; }
    { _v = vec4(inversesqrt(abs(((r0).zzzz).x))); r0.z = _v.z; }
    { _v = vec4(dot(((r2).xyzw).xyz, ((r2).xyzw).xyz)); r0.x = _v.x; }
    { _v = vec4(((r0).zzzz) * ((r5).xyzw)); r5.xyz = _v.xyz; }
    { _v = vec4(dot((-((r4).xyzw)).xyz, ((r5).xyzw).xyz)); r3.x = _v.x; }
    { _v = vec4(dot(((r5).xyzw).xyz, ((U_PointToLight).xyzw).xyz)); r1.z = _v.z; }
    { _v = vec4((-((r1).xyzw)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r5.x = _v.x; }
    { _v = vec4((-((r3).xxxx)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r5.z = _v.z; }
    { _v = vec4(((r5).xyzw) * ((vec4(0.0,5.25,-6.80000019,0.0)).yyyy) + ((vec4(0.0,5.25,-6.80000019,0.0)).zzzz)); r1.x = _v.x; }
    { _v = vec4(inversesqrt(abs(((r0).xyzw).x))); r0.x = _v.x; }
    { _v = vec4(dot(((r3).yzww).xyz, ((r3).yzww).xyz)); r0.y = _v.y; }
    { _v = vec4(((r5).xyzw) * ((r1).xyzw) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4(((r5).xyzw) * ((r1).xyzw) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4(((r5).xyzw) * ((r1).xyzw) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r5.x = _v.x; }
    { _v = vec4(((r5).wwww) * ((vec4(-0.0499999523,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4((-((r1).zzzz)) + ((vec4(0.0,1.0,0.0,0.0)).yyyy)); r5.w = _v.w; }
    { _v = vec4(((r5).xyzw) * ((vec4(5.25,-6.80000019,0.0,0.0)).xxxx) + ((vec4(5.25,-6.80000019,0.0,0.0)).yyyy)); r1.z = _v.z; }
    { _v = vec4(((r1).xyzw) * ((vec4(0.0,0.0,1.44269502,0.0)).zzzz)); r1.x = _v.x; }
    { _v = vec4(((r5).zzzz) * ((r1).zzzz) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r5.y = _v.y; }
    { _v = vec4((r5).xyzw); r5.zw = _v.zw; }
    { _v = vec4(((r5).zzzz) * ((r5).xyzw) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r5.y = _v.y; }
    { _v = vec4(((r5).wwww) * ((vec4(0.0,5.25,-6.80000019,0.0)).yyyy) + ((vec4(0.0,5.25,-6.80000019,0.0)).xyzw)); r1.z = _v.z; }
    { _v = vec4(((r0).xxxx) * ((r2).xyzw)); r2.xyz = _v.xyz; }
    { _v = vec4(inversesqrt(abs(((r0).yyyy).x))); r0.y = _v.y; }
    { _v = vec4(dot(((r2).xyzw).xyz, ((U_PointToLight).xyzw).xyz)); r0.w = _v.w; }
    { _v = vec4(((r0).yyyy) * ((r3).xyzw)); r3.yzw = _v.yzw; }
    { _v = vec4(dot((-((r4).xyzw)).xyz, ((r3).yzww).xyz)); r1.y = _v.y; }
    { _v = vec4(exp2(((r1).xyzw).x)); r1.x = _v.x; }
    { _v = vec4((-((r1).xyzw)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r1.y = _v.y; }
    { _v = vec4(((r5).zzzz) * ((r5).yyyy) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r3.x = _v.x; }
    { _v = vec4(((r5).wwww) * ((r1).xyzw) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r5.z = _v.z; }
    { _v = vec4(((r5).wwww) * ((r5).zzzz) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r5.y = _v.y; }
    { _v = vec4(((r5).xxxx) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r1.z = _v.z; }
    { _v = vec4((1.0 / ((r0).zzzz).x)); r0.z = _v.z; }
    { _v = vec4((-((r0).zzzz)) * ((U_PScaleOverRayleighScaleDepth).xxxx) + ((U_PScaleOverRayleighScaleDepth).xxxx)); r5.x = _v.x; }
    { _v = vec4(dot((-((r4).xyzw)).xyz, ((r2).xyzw).xyz)); r2.x = _v.x; }
    { _v = vec4((-((r2).xxxx)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r6.w = _v.w; }
    { _v = vec4(((r5).wwww) * ((r5).yyyy) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r4.x = _v.x; }
    { _v = vec4((1.0 / ((r0).xyzw).x)); r0.x = _v.x; }
    { _v = vec4(((r5).xxxx) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r0.z = _v.z; }
    { _v = vec4((-((r0).xyzw)) * ((U_PScaleOverRayleighScaleDepth).xxxx) + ((U_PScaleOverRayleighScaleDepth).xxxx)); r0.x = _v.x; }
    { _v = vec4(((r6).wwww) * ((vec4(5.25,-6.80000019,0.0,0.0)).xxxx) + ((vec4(5.25,-6.80000019,0.0,0.0)).yyyy)); r2.x = _v.x; }
    { _v = vec4(exp2(((r1).zzzz).x)); r1.z = _v.z; }
    { _v = vec4(((r6).wwww) * ((r2).xyzw) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r2.x = _v.x; }
    { _v = vec4(((r1).yyyy) * ((vec4(5.25,-6.80000019,0.0,0.0)).xxxx) + ((vec4(5.25,-6.80000019,0.0,0.0)).yyyy)); r5.w = _v.w; }
    { _v = vec4(((r1).yyyy) * ((r5).wwww) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r2.z = _v.z; }
    { _v = vec4(((r1).xyzw) * ((r2).zzzz) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r2.y = _v.y; }
    { _v = vec4(exp2(((r0).zzzz).x)); r0.z = _v.z; }
    { _v = vec4(((r0).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.x = _v.x; }
    { _v = vec4((1.0 / ((r0).yyyy).x)); r5.y = _v.y; }
    { _v = vec4((r1).xyzw); r1.xy = _v.xy; }
    { _v = vec4(((r1).xyzw) * ((r2).xyzw) + ((vec4(0.0,-0.00286999997,0.0,0.0)).yyyy)); r1.y = _v.y; }
    { _v = vec4((-((r5).yyyy)) * ((U_PScaleOverRayleighScaleDepth).xxxx) + ((U_PScaleOverRayleighScaleDepth).xxxx)); r5.w = _v.w; }
    { _v = vec4(((r6).wwww) * ((r2).xyzw) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r5.x = _v.x; }
    { _v = vec4(((r6).wwww) * ((r5).xxxx) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r4.y = _v.y; }
    { _v = vec4(((r1).zzzz) * ((U_PRayleighScaleDepth).xxxx)); r2.y = _v.y; }
    { _v = vec4(((r5).wwww) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r4.z = _v.z; }
    { _v = vec4(dot(((r3).yzww).xyz, ((U_PointToLight).xyzw).xyz)); r1.z = _v.z; }
    { _v = vec4(((r1).xyzw) * ((r2).yyyy)); r1.x = _v.x; }
    { _v = vec4(exp2(((r4).zzzz).x)); r0.y = _v.y; }
    { _v = vec4((-((r0).wwww)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r4.z = _v.z; }
    { _v = vec4(((r4).zzzz) * ((vec4(5.25,-6.80000019,0.0,0.0)).xxxx) + ((vec4(5.25,-6.80000019,0.0,0.0)).yyyy)); r0.w = _v.w; }
    { _v = vec4(((r4).xyzw) * ((vec4(0.0,0.0,1.44269502,0.0)).zzzz)); r2.y = _v.y; }
    { _v = vec4(((r4).zzzz) * ((r0).xyzw) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r0.w = _v.w; }
    { _v = vec4(((r4).zzzz) * ((r0).wwww) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r2.x = _v.x; }
    { _v = vec4(((r4).xxxx) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r0.w = _v.w; }
    { _v = vec4(exp2(((r0).xyzw).x)); r0.x = _v.x; }
    { _v = vec4(((r4).zzzz) * ((r2).xyzw) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r2.x = _v.x; }
    { _v = vec4(exp2(((r0).wwww).x)); r2.z = _v.z; }
    { _v = vec4(((r2).xxxx) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r3.z = _v.z; }
    { _v = vec4((tc0).xxxy); r5.zw = _v.zw; }
    { _v = vec4(((r1).xyzw) * ((U_PScale).xxxx)); r0.w = _v.w; }
    { _v = vec4(((r3).xxxx) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.w = _v.w; }
    { _v = vec4((-((r1).zzzz)) + ((vec4(0.0,1.0,0.0,0.0)).yyyy)); r3.x = _v.x; }
    { _v = vec4(exp2(((r1).wwww).x)); r3.y = _v.y; }
    { _v = vec4(((r3).xyzw) * ((vec4(5.25,-6.80000019,0.0,0.0)).xxxx) + ((vec4(5.25,-6.80000019,0.0,0.0)).yyyy)); r2.x = _v.x; }
    { _v = vec4(((r3).xyzw) * ((r2).xyzw) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r4.x = _v.x; }
    { _v = vec4(exp2(((r3).zzzz).x)); r2.x = _v.x; }
    { _v = vec4(((r3).xxxx) * ((r4).xxxx) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r3.w = _v.w; }
    { _v = vec4(((r3).xyzw) * ((r3).wwww) + ((vec4(0.0,-0.00286999997,0.0,0.0)).yyyy)); r3.x = _v.x; }
    { _v = vec4(((r3).yyyy) * ((U_PRayleighScaleDepth).xxxx)); r1.z = _v.z; }
    { _v = vec4(((r3).xxxx) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.w = _v.w; }
    { _v = vec4((r2).xyzw); r2.xyz = _v.xyz; }
    { _v = vec4(exp2(((r2).yyyy).x)); r2.y = _v.y; }
    { _v = vec4(((r2).xyzw) * ((U_PRayleighScaleDepth).xxxx) + (-((r1).xyzw))); r1.z = _v.z; }
    { _v = vec4(((r0).zzzz) * ((r1).zzzz) + ((r1).xyzw)); r3.x = _v.x; }
    { _v = vec4(exp2(((r1).wwww).x)); r2.z = _v.z; }
    { _v = vec4(((r1).yyyy) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.w = _v.w; }
    { _v = vec4(exp2(((r1).wwww).x)); r3.y = _v.y; }
    { _v = vec4((-((r3).xxxx)) * ((U_PInvWavelengthKr4PIplusKm4PI).xxyz)); r1.yzw = _v.yzw; }
    { _v = vec4(((r1).yyyy) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r3.x = _v.x; }
    { _v = vec4(((r1).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.z = _v.z; }
    { _v = vec4(((r3).yyyy) * ((U_PRayleighScaleDepth).xxxx)); r3.w = _v.w; }
    { _v = vec4(((r2).xyzw) * ((U_PRayleighScaleDepth).xxxx)); r1.y = _v.y; }
    { _v = vec4(exp2(((r3).xyzw).x)); r3.x = _v.x; }
    { _v = vec4(((r2).xxxx) * ((U_PRayleighScaleDepth).xxxx) + (-((r1).xyzw))); r1.y = _v.y; }
    { _v = vec4(((r2).zzzz) * ((U_PRayleighScaleDepth).xxxx) + (-((r3).xyzw))); r3.w = _v.w; }
    { _v = vec4(exp2(((r1).zzzz).x)); r3.y = _v.y; }
    { _v = vec4(((r1).wwww) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r2.z = _v.z; }
    { _v = vec4(((r0).xyzw) * ((r1).yyyy) + ((r1).xyzw)); r2.x = _v.x; }
    { _v = vec4(exp2(((r2).zzzz).x)); r3.z = _v.z; }
    { _v = vec4((-((r2).xxxx)) * ((U_PInvWavelengthKr4PIplusKm4PI).xyzw)); r2.xyz = _v.xyz; }
    { _v = vec4(((r2).xxxx) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.w = _v.w; }
    { _v = vec4((r1).xyzw); r1.x = _v.x; }
    { _v = vec4(((r0).yyyy) * ((r3).wwww) + ((r1).xyzw)); r1.x = _v.x; }
    { _v = vec4(exp2(((r1).wwww).x)); r4.x = _v.x; }
    { _v = vec4(((r0).zzzz) * ((r0).wwww)); r2.x = _v.x; }
    { _v = vec4((-((r1).xxxx)) * ((U_PInvWavelengthKr4PIplusKm4PI).xyzw)); r1.xyz = _v.xyz; }
    { _v = vec4(((r2).yyyy) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r3.w = _v.w; }
    { _v = vec4(((r1).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r5.y = _v.y; }
    { _v = vec4(((r1).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r5.x = _v.x; }
    { _v = vec4(exp2(((r5).yyyy).x)); r5.y = _v.y; }
    { _v = vec4(((r1).zzzz) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r2.y = _v.y; }
    { _v = vec4(((r0).wwww) * ((r0).yyyy)); r1.z = _v.z; }
    { _v = vec4(((r5).zwzz) * ((U_slice).zwzz) + ((U_slice).xyxx)); r1.xy = _v.xy; }
    { _v = vec4(((r0).xxxx) * ((r0).xyzw)); r5.w = _v.w; }
    { _v = vec4((r5).xyzw); r5.x = _v.x; }
    { _v = vec4(exp2(((r5).xyzw).x)); r5.x = _v.x; }
    { _v = vec4(((r2).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r4.z = _v.z; }
    { _v = vec4((r1).xxxx) * 2.0; r0.w = _v.w; }
    { _v = vec4(exp2(((r2).yyyy).x)); r5.z = _v.z; }
    { _v = vec4((r0).wwww);
      cc0.x = _v.x;
    }
    { _v = vec4(dot(((r6).xyzw).xyz, ((U_PointToLight).xyzw).xyz)); r1.w = _v.w; }
    { _v = vec4(((r1).zzzz) * ((r5).xyzw)); r5.xyz = _v.xyz; }
    { _v = vec4(lessThan((r1).xxxx, (U_cloud).xxxx));
      cc0.w = _v.w;
    }
    { _v = vec4((r5).xyzw); r5.xyz = _v.xyz; }
    { _v = vec4(((r2).xxxx) * ((r3).xyzw) + ((r5).xyzw)); r5.xyz = _v.xyz; }
    { _v = vec4(exp2(((r3).wwww).x)); r4.y = _v.y; }
    { _v = vec4((U_PKrESun).xxxx); r3.w = _v.w; }
    { _v = vec4(exp2(((r4).zzzz).x)); r4.z = _v.z; }
    { _v = vec4(((r4).xyzw) * ((r5).wwww) + ((r5).xyzw)); r3.xyz = _v.xyz; }
    { _v = vec4(((r3).wwww) * ((U_PInvWavelength).xyzw)); r0.xyz = _v.xyz; }
    { _v = vec4(((r3).xyzw) * ((r0).xyzw)); r0.xyz = _v.xyz; }
    { _v = vec4((r0).xyzw); r0.w = _v.w; }
    { _v = vec4(((r3).xyzw) * ((U_PKmESun).xxxx) + ((r0).xyzw)); r0.xyz = _v.xyz; }
    { _v = vec4(fract(abs((r0).xyzw))); r6.w = _v.w; }
    { _v = vec4((r6).xyzw); r3.w = _v.w; }
    { _v = vec4(((U_noise).xxxx) + ((U_noise).yyyy)); r3.x = _v.x; }
    { _v = vec4(((r6).xyzw) * ((r3).xxxx)); r3.xyz = _v.xyz; }
    { _v = vec4(-((r6).xyzw));
      _p = vec4(lessThan((cc0).xxxx, vec4(0.0)));
      r3.w = (_p.w != 0.0) ? _v.w : r3.w;
    }
    // Night-light twinkle: the 3D noise at the surface point x (noise_base 64 +
    // noise_max 32 x phase). Read in 3D, the changing scale moves the lookup
    // through the volume, so each light flickers in place; read as one 2D slice
    // (xy only) it slid the pattern sideways across the cities.
    // U_nightLook.z = 0 (twinkle off): the noise's average (0.5) instead of the
    // noise itself, so the lights keep their brightness without per-pixel grain.
    { _v = U_nightLook.z > 0.5 ? vec4(texture(NoiseVol, ((r3).xyzw).xyz).rrrr) : vec4(0.5); r5.xyz = _v.xyz; }
    { _v = vec4((r1).yyyy); r3.x = _v.x; }
    { _v = vec4((r1).xyzw); r1.z = _v.z; }
    // Night lights as the old port shows them: U_nightLook.x = blur (mip bias),
    // .y = gain; values fitted to the old port's screen in main.js (NIGHT_LOOK).
    // .xyz U_lightTint: the lights' colour (warm sodium orange, as the city close-ups draw them).
    // U_nightLook.w = 1: the high-definition map (one channel: brightness only).
    // There the brightest cores go from orange towards a warm white (as the
    // close-ups' street lights), so a city reads as bright centres with an
    // orange spread, not one flat fill.
    { _v = texture(NightMap, tc0.xy, U_nightLook.x);
      if (U_nightLook.w > 0.5) {
        float lv = U_glitter.z > 0.0 ? satNight(_v.r) : _v.r;
        r3.xyz = (U_lightTint.xyz * lv + vec3(1.0, 0.80, 0.52) * smoothstep(0.3, 1.0, lv) * 1.3) * U_nightLook.y;
      } else { _v *= U_nightLook.y; r3.xyz = _v.xyz * U_lightTint.xyz; }
      // Dusk: the lights come on area by area (each region, ~15-60 km, at its own sun
      // height, from 3 deg above the horizon to 7 deg below), so along the
      // line between day and night some towns are lit and others not yet.
      float sd = dot(normalize(tc4.xyz), normalize(U_PointToLight.xyz));
      if (sd > 0.065) r3.xyz = vec3(0.0);                              // day: all off
      else if (sd > -0.135) {                                          // the twilight band only (the noise costs)
        vec3 wk = tc4.xyz * 6371.0;                                   // km
        float hsh = clamp((0.6 * vnoise3(wk / 60.0) + 0.4 * vnoise3(wk / 15.0 + 9.0) - 0.5) * 1.6 + 0.5, 0.0, 1.0);
        float th = mix(0.05, -0.12, hsh);
        r3.xyz *= 1.0 - smoothstep(th - 0.012, th + 0.012, sd);
      }
      duskL = r3.xyz * 0.5; }
    { _v = vec4(((r3).xyzw) * ((r5).xyzw)); r3.xyz = _v.xyz; }
    { _v = vec4(((r2).xxxx) + ((r1).zzzz)); r3.w = _v.w; }
    { _v = vec4(texture2D(ColorMap, ((tc0).xyzw).xy)); r5.xyz = U_glitter.z > 0.0 ? satDay(_v.xyz) : _v.xyz; }
    { _v = vec4(((r1).xyzw) + (-((U_cloud).xxxx))); r6.x = _v.x; }
    { _v = vec4((tc5).xxxy); r6.zw = _v.zw; }
    { _v = vec4(texture2D(SpecularMap, ((r1).xyzw).xy)); r1.x = _v.x; }
    { _v = vec4((r1).xyzw); r6.y = _v.y; }
    { _v = vec4(((r5).xxxx) + ((r5).yyyy)); r0.w = _v.w; }
    { _v = vec4(((r0).xyzw) + ((r5).zzzz)); r0.w = _v.w; }
    { _v = vec4(((r0).xyzw) * ((vec4(0.333333343,0.0,0.0,0.0)).xxxx)); r0.w = _v.w; }
    { _v = vec4((-((r0).wwww)) + ((r5).zzxx)); r5.xz = _v.xz; }
    { _v = vec4((-((r0).wwww)) + ((r5).xyzw)) / 2.0; r2.y = _v.y; }
    { _v = vec4(((r0).wwww) + ((r2).xyzw)); r5.y = _v.y; }
    { _v = vec4(((r0).wwww) + (-((r5).xyzw))); r2.y = _v.y; }
    { _v = vec4((r5).yyyy); r2.z = _v.z; }
    { _v = vec4(((r2).xyzw) * ((vec4(3.0,0.0,0.0,0.0)).xxxx)); r2.y = _v.y; }
    { _v = vec4((r2).yyyy);
      cc0.x = _v.x;
    }
    { _v = vec4((r0).xyzw); r0.w = _v.w; }
    { _v = vec4(((r5).zzxx) * ((vec4(0.75,0.0,0.0,0.0)).xxxx) + ((r0).wwww)); r5.xz = _v.xz; }
    { _v = vec4(fract(abs((r6).xxxx))); r0.w = _v.w; }
    { _v = vec4(((r2).yyyy) + ((r5).yyyy));
      _p = vec4(greaterThan((cc0).xxxx, vec4(0.0)));
      r2.z = (_p.z != 0.0) ? _v.z : r2.z;
    }
    { _v = vec4((r2).zzzz); r5.y = _v.y; }
    { _v = vec4(((r3).xyzw) + ((r5).xyzw)); r3.w = _v.w; }
    { _v = vec4(((r5).xyzw) + (-((r3).xyzw))) / 4.0; r2.xyz = _v.xyz; }
    { _v = vec4(((r3).xyzw) + ((r2).xyzw)); r3.xyz = _v.xyz; }
    { _v = vec4(((r6).zzzz) + ((r6).xyzw)); r2.x = _v.x; }
    { _v = vec4((r0).wwww); r6.x = _v.x; }
    { _v = vec4(-((r0).wwww));
      _p = vec4(notEqual((cc0).wwww, vec4(0.0)));
      r6.x = (_p.x != 0.0) ? _v.x : r6.x;
    }
    { _v = vec4(((r6).wwww) + ((r1).xyzw)); r2.y = _v.y; }
    { _v = vec4(texture2D(CloudMap, ((r6).xyzw).xy)); r6.x = cloudDetail(_v.x) * (1.0 + 0.3 * U_glitter.z); }
    { _v = vec4((-((r6).xxxx)) * ((r1).xxxx) + ((r1).xxxx)); r0.w = _v.w; }
    { _v = vec4(texture2D(CloudMap, ((r2).xyzw).xy)); r2.x = cloudDetail(_v.x); }
    { _v = vec4((-((r3).wwww)) * ((U_PInvWavelengthKr4PIplusKm4PI).xyzw)); r1.xyz = _v.xyz; }
    { _v = vec4((r5).xyzw); r5.xyz = _v.xyz; }
    { _v = vec4(((r6).xxxx) * ((U_cloud).yyyy) * (1.0 - U_cloud.z) + ((r5).xyzw)) * 4.0; r5.xyz = _v.xyz; }   // z: Satellite Mode's volumetric clouds draw the cloud itself (its shadow stays)
    { _v = vec4(((r1).xxxx) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r3.w = _v.w; }
    { _v = vec4(((r1).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.y = _v.y; }
    { _v = vec4(((r1).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.z = _v.z; }
    { _v = vec4(exp2(((r3).wwww).x)); r1.x = _v.x; }
    { _v = vec4(max(((r1).xyzw), ((vec4(0.0,0.0,0.0,0.0)).xxxx))); r3.w = _v.w; }
    { _v = vec4((r1).xyzw); r1.xy = _v.xy; }
    { _v = vec4(exp2(((r1).yyyy).x)); r1.y = _v.y; }
    { _v = vec4((-((r2).xxxx)) * ((U_cloud).yyyy) * (1.0 - 0.5 * U_cloud.z) + ((r5).xyzw)) / 4.0; r2.xyz = _v.xyz; }
    { _v = vec4(exp2(((r1).zzzz).x)); r1.z = _v.z; }
    { _v = vec4(((r4).xyzw) * ((r1).xyzw)); r1.xyz = _v.xyz; }
    { _v = vec4(max(((r4).xyzw), ((vec4(0.0,0.0,0.0,0.0)).xxxx))); r1.w = _v.w; }
    { _v = vec4(((r1).xyzw) * ((r3).wwww)); r4.xyz = _v.xyz; }
    { _v = vec4(log2(((r1).wwww).x)); r1.w = _v.w; }
    { _v = vec4((-((r2).xyzw)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r4.w = _v.w; }
    { _v = vec4((-((r3).wwww)) * ((r3).xyzw) + ((r3).xyzw)); r3.xyz = _v.xyz; }
    { _v = vec4(((r2).xyzw) * ((r4).xyzw)); r4.xyz = _v.xyz; }
    { _v = vec4(((r4).xyzw) * ((U_LightColor0).xyzw)); r4.xyz = _v.xyz; }
    { _v = vec4((r4).xyzw); r4.w = _v.w; }
    { _v = vec4(((r4).xyzw) * (-((U_OceanFresnel0).xxxx)) + ((r4).xyzw)); r2.w = _v.w; }
    { _v = vec4(((r4).xyzw) * ((vec4(0.0,0.201600015,0.0,0.0)).yyyy)); r4.xyz = _v.xyz; }
    { _v = vec4(((r1).xyzw) * ((r2).xyzw)); r2.xyz = _v.xyz; }
    { _v = vec4(((r1).xyzw) * ((U_Shininess).xxxx)); r1.w = _v.w; }
    { _v = vec4(((r2).xyzw) * ((U_LightColor0).xyzw)); r2.xyz = _v.xyz; }
    { _v = vec4(exp2(((r1).wwww).x)); r1.w = _v.w; }
    { _v = vec4(((r0).xyzw) * ((vec4(1.60000002,0.0,0.0,0.0)).xxxx) + ((r4).xyzw)); r4.xyz = _v.xyz; }
    { _v = vec4((r4).xyzw); r4.w = _v.w; }
    { _v = vec4(((r2).xyzw) * ((r4).xyzw)); r2.w = _v.w; }
    { _v = vec4(((r2).xyzw) * ((vec4(0.00720000034,0.0,0.0,0.0)).xxxx) + ((r4).xyzw)); r2.xyz = _v.xyz; }
    { _v = vec4(((r1).xyzw) * ((r1).wwww)); r0.xyz = _v.xyz; }
    { _v = vec4(((r1).xxxx) + ((r1).yyyy)); r1.w = _v.w; }
    { _v = vec4(((r0).xyzw) * ((U_Specular).xyzw)); r0.xyz = _v.xyz; }
    { _v = vec4(((r1).zzzz) + ((r1).xyzw)); r3.w = _v.w; }
    { _v = vec4(((r2).xyzw) * ((r4).xyzw)); r2.w = _v.w; }
    { _v = vec4(((r2).xyzw) * ((r4).xyzw)); r2.w = _v.w; }
    { _v = vec4(((r2).xyzw) * ((r4).xyzw) + ((U_OceanFresnel0).xxxx)); r2.w = _v.w; }
    { _v = vec4((-((r3).wwww)) * ((r3).xyzw)); r1.xyz = _v.xyz; }
    { _v = vec4(((r0).xyzw) * ((r2).wwww)); r0.xyz = _v.xyz; }
    { _v = vec4(((r0).xyzw) * ((U_LightColor0).xyzw)); r0.xyz = _v.xyz; }
    { _v = vec4((r0).xyzw); r0.w = _v.w; }
    { _v = vec4(((r0).xyzw) * ((r0).wwww)); r0.xyz = _v.xyz; }
    { _v = vec4((vec4(1.0,0.0,0.0,0.0)).xxxx); r0.w = _v.w; }
    { _v = vec4(((r1).xyzw) * ((vec4(0.333333343,0.0,0.0,0.0)).xxxx) + ((r3).xyzw)); r1.xyz = _v.xyz; }
    { _v = vec4(((r2).xyzw) + ((r1).xyzw)); r1.xyz = _v.xyz; }
    { _v = vec4(((r0).xyzw) * ((vec4(0.75,1.0,0.0,0.0)).xxyy) + ((r1).xyzw)); r0.xyz = _v.xyz; }
    // The original only shows the lights once it is well dark; in the twilight
    // band the switched-on ones are added here (fading out as its own take over).
    { float sd2 = dot(normalize(tc4.xyz), normalize(U_PointToLight.xyz));
      r0.xyz += duskL * (1.0 - smoothstep(-0.02, 0.06, sd2)) * smoothstep(-0.30, -0.14, sd2) * 1.2; }
    // Sun glitter: where the sun reflects off open sea, the waves catch it as
    // tiny sparkles that come and go (the moving 3D noise tilts each ~7 km
    // patch of sea a little), brightest along the glint path; none under
    // cloud or on land (the specular map: white = sea).
    if (U_glitter.y > 0.0) {
      vec3 N = normalize(tc4.xyz), L = normalize(U_PointToLight.xyz);
      vec3 V = normalize(U_camera.xyz - tc4.xyz), H = normalize(L + V);
      float sea = texture2D(SpecularMap, tc0.xy).x;
      float cl = texture2D(CloudMap, vec2(tc0.x - U_cloud.x, tc0.y)).x * U_cloud.y;
      float lit = smoothstep(0.0, 0.12, dot(N, L)) * smoothstep(0.0, 0.08, dot(N, V));
      float path = max(dot(N, H), 0.0);
      if (sea * lit > 0.01 && path > 0.93) {
        vec3 q = tc4.xyz * 110.0;                                  // ~1.8 km cells: each sparkle about a pixel
        vec3 tilt = vec3(texture(NoiseVol, q + vec3(0.0, 0.0, U_glitter.x * 0.45)).r,
                         texture(NoiseVol, q.yzx + vec3(0.37, 0.0, U_glitter.x * 0.40)).r,
                         texture(NoiseVol, q.zxy + vec3(0.0, 0.61, U_glitter.x * 0.50)).r) - 0.5;
        // wider tilts and a tighter highlight: fewer, finer sparkles over a
        // broader soft glint, rather than one dense ball of light
        float facet = max(dot(normalize(N + 0.11 * tilt), H), 0.0);
        float sparkle = mix(pow(facet, 7000.0) * 4.0 + pow(path, 160.0) * 0.30 + pow(path, 1400.0) * 0.25,
                            pow(path, 90.0) * 0.55 + pow(path, 600.0) * 0.35, U_glitter.w);   // w: Satellite Mode's broad sheen
        r0.xyz += vec3(1.0, 0.95, 0.84) * sparkle * sea * lit * (1.0 - cl) * U_glitter.y;
      }
    }
    // Moonlight: on the night side, the Moon (when up, and by its phase)
    // lights the clouds and the land faintly in a cool silver, so a full-moon
    // night shows coastlines and cloud; a new-moon night stays dark.
    if (U_moon.w > 0.0) {
      vec3 Nm = normalize(tc4.xyz);
      float nightM = 1.0 - smoothstep(-0.14, 0.02, dot(Nm, normalize(U_PointToLight.xyz)));
      float ml = max(dot(Nm, U_moon.xyz), 0.0) * nightM * U_moon.w;
      if (ml > 0.001) {
        vec3 land = texture2D(ColorMap, tc0.xy).rgb;
        float clm = cloudDetail(texture2D(CloudMap, vec2(tc0.x - U_cloud.x, tc0.y)).x) * U_cloud.y;
        r0.xyz += mix(land * 0.55, vec3(1.0), clm * 0.85 * (1.0 - U_cloud.z)) * vec3(0.55, 0.66, 0.88) * ml * 0.32;
      }
    }
    // Lightning: each stroke lights the storm cloud from inside -- a blue-
    // white glow over the cloud (its bumps from the noise volume, so the
    // turrets show), a soft halo further out, a white-hot core at the bolt.
    if (U_flashA[0].w > 0.0) {
      vec3 Nf = normalize(tc4.xyz);
      float clf = cloudDetail(texture2D(CloudMap, vec2(tc0.x - U_cloud.x, tc0.y)).x);
      vec3 fl = vec3(0.0);
      for (int i = 0; i < 16; i++) {
        vec4 A = U_flashA[i];
        if (A.w <= 0.0) break;
        vec4 B = U_flashB[i];
        float d2 = max(0.0, 2.0 * (1.0 - dot(Nf, A.xyz))), r2 = B.x * B.x;
        if (d2 > r2 * 25.0) continue;
        // the storm's lumps: two soft octaves (~60 km and ~20 km), no grain
        float bump = texture(NoiseVol, Nf * 7.0 + vec3(B.z)).r * 0.65 + texture(NoiseVol, Nf * 19.0 + vec3(B.z * 0.37)).r * 0.35;
        float cd = clf * (0.25 + 1.5 * smoothstep(0.35, 0.68, bump));
        float body = exp(-d2 / r2), halo = exp(-d2 / (r2 * 9.0)), core = exp(-pow(d2 / (r2 * B.y * B.y), 1.6));   // core: a full, bright disc
        fl += A.w * (vec3(0.40, 0.64, 1.0) * (body * (0.25 + 3.2 * cd) + halo * 0.55 * (0.06 + cd))
                     + vec3(0.90, 0.96, 1.0) * core * (4.0 + 3.0 * clf));
      }
      r0.xyz += fl;
    }
    { _v = vec4((-((r0).xyzw)) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.x = _v.x; }
    { _v = vec4(exp2(((r0).xyzw).x)); r0.x = _v.x; }
    { _v = vec4((-((r0).xyzw)) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.y = _v.y; }
    { _v = vec4((-((r0).zzzz)) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4(exp2(((r0).yyyy).x)); r0.y = _v.y; }
    { _v = vec4(exp2(((r1).xyzw).x)); r0.z = _v.z; }
    { _v = vec4((-((r0).xyzw)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r0.xyz = _v.xyz; }
    { _v = vec4(((r0).xyzw) * ((U_color).xyzw)); r0.xyzw = _v.xyzw; }

  gl_FragColor = r0;
}
