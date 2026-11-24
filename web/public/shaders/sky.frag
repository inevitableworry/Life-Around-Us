// Generated from Life with PlayStation's worldSkyFromSpaceFP (data/cg/world.cgelf),
// instruction for instruction, by the LWP-PC fragment-program translator.
// Literal constants are the ones compiled into the program; the uniforms are
// the program's own parameters (names from its parameter table), set by main.js
// with the values fwWorld uses.
precision highp float;
varying highp vec4 tc1, tc2, tc3;
uniform vec4 U_PInvWavelength, U_PInvWavelengthKr4PIplusKm4PI, U_PKrESun, U_PKmESun,
  U_PScale, U_PRayleighScaleDepth, U_PScaleOverRayleighScaleDepth, U_PointToLight, U_g, U_g2,
  U_LightColor0, U_Shininess, U_OceanFresnel0, U_Specular, U_color;

vec4 nrmz(vec4 x, float l2) { return l2 > 0.0 ? x * inversesqrt(l2) : vec4(0.0); }
void main() {
  vec4 r0 = vec4(0.0), r1 = vec4(0.0), r2 = vec4(0.0), r3 = vec4(0.0), r4 = vec4(0.0),
       r5 = vec4(0.0), r6 = vec4(0.0), cc0 = vec4(0.0), _v, _p;

    { _v = vec4((tc2).xyzw); r1.xyzw = _v.xyzw; }
    { _v = vec4(((r1).xyzw) * ((r1).wwww)); r2.xyz = _v.xyz; }
    { _v = vec4((tc1).xyzw); r0.xyz = _v.xyz; }
    { _v = vec4(dot(((r0).xyzw).xyz, ((r1).xyzw).xyz)); r3.w = _v.w; }
    { _v = vec4((r2).xyzw) / 2.0; r3.xyz = _v.xyz; }
    { _v = vec4(((r0).xyzw) + ((r3).xyzw)); r3.xyz = _v.xyz; }
    { _v = vec4(((r3).xyzw) * ((vec4(0.952381015,0.0,0.0,0.0)).xxxx)); r3.w = _v.w; }
    { _v = vec4(dot(((r3).xyzw).xyz, ((r3).xyzw).xyz)); r2.w = _v.w; }
    { _v = vec4(((r3).xyzw) + ((r2).xyzw)); r0.xyz = _v.xyz; }
    { _v = vec4(inversesqrt(abs(((r2).wwww).x))); r1.w = _v.w; }
    { _v = vec4(((r1).wwww) * ((r3).xyzw)); r3.xyz = _v.xyz; }
    { _v = vec4(dot(((r1).xyzw).xyz, ((r3).xyzw).xyz)); r4.y = _v.y; }
    { _v = vec4(dot(((r0).xyzw).xyz, ((r0).xyzw).xyz)); r0.w = _v.w; }
    { _v = vec4(dot(((r3).xyzw).xyz, ((U_PointToLight).xyzw).xyz)); r2.w = _v.w; }
    { _v = vec4(inversesqrt(abs(((r0).wwww).x))); r4.x = _v.x; }
    { _v = vec4(((r4).xxxx) * ((r0).xyzw)); r3.xyz = _v.xyz; }
    { _v = vec4(dot(((r1).xyzw).xyz, ((r3).xyzw).xyz)); r4.z = _v.z; }
    { _v = vec4(dot(((r3).xyzw).xyz, ((U_PointToLight).xyzw).xyz)); r4.w = _v.w; }
    { _v = vec4((r3).xyzw); r3.w = _v.w; }
    { _v = vec4((-((r3).wwww)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r3.x = _v.x; }
    { _v = vec4((-((r2).wwww)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r3.z = _v.z; }
    { _v = vec4((tc1).xyzw); r0.w = _v.w; }
    { _v = vec4(((r0).xyzw) + ((r2).xyzw)); r0.xyz = _v.xyz; }
    { _v = vec4((-((r0).wwww)) * ((U_PScaleOverRayleighScaleDepth).xxxx) + ((U_PScaleOverRayleighScaleDepth).xxxx)); r3.y = _v.y; }
    { _v = vec4(((r3).xxxx) * ((vec4(0.0,5.25,-6.80000019,0.0)).yyyy) + ((vec4(0.0,5.25,-6.80000019,0.0)).zzzz)); r3.w = _v.w; }
    { _v = vec4(((r3).xxxx) * ((r3).xyzw) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r0.w = _v.w; }
    { _v = vec4((-((r4).yyyy)) + ((vec4(0.0,1.0,0.0,0.0)).yyyy)); r1.z = _v.z; }
    { _v = vec4(((r3).xxxx) * ((r0).xyzw) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r0.w = _v.w; }
    { _v = vec4(((r3).yyyy) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r1.x = _v.x; }
    { _v = vec4(((r3).xxxx) * ((r0).xyzw) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r0.w = _v.w; }
    { _v = vec4(exp2(((r1).xyzw).x)); r1.y = _v.y; }
    { _v = vec4(((r0).wwww) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4(((r1).zzzz) * ((vec4(5.25,-6.80000019,0.0,0.0)).xxxx) + ((vec4(5.25,-6.80000019,0.0,0.0)).yyyy)); r3.x = _v.x; }
    { _v = vec4(exp2(((r1).xyzw).x)); r1.x = _v.x; }
    { _v = vec4(((r1).zzzz) * ((r3).xyzw) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r3.x = _v.x; }
    { _v = vec4(((r1).xxxx) * ((U_PRayleighScaleDepth).xxxx)); r3.y = _v.y; }
    { _v = vec4(((r3).zzzz) * ((vec4(0.0,5.25,-6.80000019,0.0)).yyyy) + ((vec4(0.0,5.25,-6.80000019,0.0)).zzzz)); r0.w = _v.w; }
    { _v = vec4(((r1).yyyy) * ((r3).yyyy)); r3.w = _v.w; }
    { _v = vec4(((r3).zzzz) * ((r0).wwww) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r3.y = _v.y; }
    { _v = vec4(((r1).zzzz) * ((r3).xyzw) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4(((r1).zzzz) * ((r1).xyzw) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r3.x = _v.x; }
    { _v = vec4(((r3).zzzz) * ((r3).yyyy) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4((1.0 / ((r1).wwww).x)); r3.y = _v.y; }
    { _v = vec4(((r3).zzzz) * ((r1).xyzw) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4((-((r4).xyzw)) + ((vec4(0.0,1.0,0.0,0.0)).yyyy)); r1.z = _v.z; }
    { _v = vec4((-((r3).xyzw)) * ((U_PScaleOverRayleighScaleDepth).xxxx) + ((U_PScaleOverRayleighScaleDepth).xxxx)); r1.y = _v.y; }
    { _v = vec4((1.0 / ((r4).xyzw).x)); r1.w = _v.w; }
    { _v = vec4((-((r1).wwww)) * ((U_PScaleOverRayleighScaleDepth).xxxx) + ((U_PScaleOverRayleighScaleDepth).xxxx)); r4.x = _v.x; }
    { _v = vec4(((r1).zzzz) * ((vec4(0.0,5.25,-6.80000019,0.0)).yyyy) + ((vec4(0.0,5.25,-6.80000019,0.0)).zzzz)); r1.w = _v.w; }
    { _v = vec4(((r1).zzzz) * ((r1).xyzw) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r1.w = _v.w; }
    { _v = vec4(((r4).xxxx) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r4.y = _v.y; }
    { _v = vec4(((r1).zzzz) * ((r1).wwww) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r4.x = _v.x; }
    { _v = vec4(exp2(((r4).yyyy).x)); r1.w = _v.w; }
    { _v = vec4(((r1).zzzz) * ((r4).xxxx) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r3.y = _v.y; }
    { _v = vec4(((r1).yyyy) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r2.w = _v.w; }
    { _v = vec4(exp2(((r2).wwww).x)); r2.w = _v.w; }
    { _v = vec4((-((r4).wwww)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r3.z = _v.z; }
    { _v = vec4(((r3).zzzz) * ((vec4(5.25,-6.80000019,0.0,0.0)).xxxx) + ((vec4(5.25,-6.80000019,0.0,0.0)).yyyy)); r0.w = _v.w; }
    { _v = vec4(((r3).zzzz) * ((r0).wwww) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r1.y = _v.y; }
    { _v = vec4(((r1).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4(((r3).xyzw) * ((r1).yyyy) + ((vec4(0.0,0.458999991,0.0,0.0)).yyyy)); r1.z = _v.z; }
    { _v = vec4(exp2(((r1).xyzw).x)); r0.w = _v.w; }
    { _v = vec4(((r3).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4(((r3).zzzz) * ((r1).zzzz) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r3.x = _v.x; }
    { _v = vec4(exp2(((r1).xyzw).x)); r1.x = _v.x; }
    { _v = vec4(((r3).xxxx) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.z = _v.z; }
    { _v = vec4(((r1).xyzw) * ((U_PRayleighScaleDepth).xxxx)); r1.x = _v.x; }
    { _v = vec4((r1).xyzw); r1.z = _v.z; }
    { _v = vec4(((r0).wwww) * ((U_PRayleighScaleDepth).xxxx) + (-((r1).xyzw))); r3.x = _v.x; }
    { _v = vec4(exp2(((r1).zzzz).x)); r1.x = _v.x; }
    { _v = vec4(((r3).yyyy) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.w = _v.w; }
    { _v = vec4(((r2).wwww) * ((r3).xyzw) + ((r3).wwww)); r3.x = _v.x; }
    { _v = vec4(exp2(((r0).wwww).x)); r0.w = _v.w; }
    { _v = vec4((-((r3).xxxx)) * ((U_PInvWavelengthKr4PIplusKm4PI).xyzw)); r3.xyz = _v.xyz; }
    { _v = vec4(((r3).xyzw) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r3.x = _v.x; }
    { _v = vec4(((r0).xyzw) * ((U_PRayleighScaleDepth).xxxx)); r0.w = _v.w; }
    { _v = vec4(((r1).xyzw) * ((U_PRayleighScaleDepth).xxxx) + (-((r0).wwww))); r1.x = _v.x; }
    { _v = vec4(exp2(((r3).xyzw).x)); r3.x = _v.x; }
    { _v = vec4(((r1).wwww) * ((r1).xxxx) + ((r3).wwww)); r1.z = _v.z; }
    { _v = vec4(((r3).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.y = _v.y; }
    { _v = vec4(exp2(((r1).yyyy).x)); r3.y = _v.y; }
    { _v = vec4((-((r1).zzzz)) * ((U_PInvWavelengthKr4PIplusKm4PI).xyzw)); r1.xyz = _v.xyz; }
    { _v = vec4(((r1).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4((tc2).xyzw); r0.w = _v.w; }
    { _v = vec4(exp2(((r1).xyzw).x)); r1.x = _v.x; }
    { _v = vec4(((r1).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.y = _v.y; }
    { _v = vec4(((r0).xyzw) * ((U_PScale).xxxx)); r0.w = _v.w; }
    { _v = vec4(((r1).xyzw) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r1.z = _v.z; }
    { _v = vec4(exp2(((r1).yyyy).x)); r1.y = _v.y; }
    { _v = vec4(((r0).xyzw) * ((r1).xyzw)); r1.w = _v.w; }
    { _v = vec4(dot(((r0).xyzw).xyz, ((r0).xyzw).xyz)); r4.x = _v.x; }
    { _v = vec4(exp2(((r1).zzzz).x)); r1.z = _v.z; }
    { _v = vec4(((r3).zzzz) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r4.w = _v.w; }
    { _v = vec4(exp2(((r4).wwww).x)); r3.z = _v.z; }
    { _v = vec4(((r0).xyzw) * ((r2).xyzw)); r4.w = _v.w; }
    { _v = vec4(((r1).xyzw) * ((r1).wwww)); r1.xyz = _v.xyz; }
    { _v = vec4(inversesqrt(abs(((r4).xyzw).x))); r2.w = _v.w; }
    { _v = vec4((r4).xyzw); r4.w = _v.w; }
    { _v = vec4(((r3).xyzw) * ((r4).wwww) + ((r1).xyzw)); r4.xyz = _v.xyz; }
    { _v = vec4((tc2).xyzw); r1.xyz = _v.xyz; }
    { _v = vec4(((r2).wwww) * ((r0).xyzw)); r3.xyz = _v.xyz; }
    { _v = vec4(((r0).xyzw) + ((r2).xyzw)); r0.xyz = _v.xyz; }
    { _v = vec4(dot(((r1).xyzw).xyz, ((r3).xyzw).xyz)); r1.x = _v.x; }
    { _v = vec4(dot(((r3).xyzw).xyz, ((U_PointToLight).xyzw).xyz)); r1.y = _v.y; }
    { _v = vec4((-((r1).yyyy)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r1.z = _v.z; }
    { _v = vec4((-((r1).xyzw)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4(((r1).zzzz) * ((vec4(5.25,-6.80000019,0.0,0.0)).xxxx) + ((vec4(5.25,-6.80000019,0.0,0.0)).yyyy)); r1.y = _v.y; }
    { _v = vec4(((r1).xyzw) * ((r1).yyyy) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r3.z = _v.z; }
    { _v = vec4(((r1).zzzz) * ((r3).zzzz) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r1.y = _v.y; }
    { _v = vec4(((r1).zzzz) * ((r1).xyzw) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r1.y = _v.y; }
    { _v = vec4(((r1).xxxx) * ((vec4(0.0,5.25,-6.80000019,0.0)).yyyy) + ((vec4(0.0,5.25,-6.80000019,0.0)).xyzw)); r1.z = _v.z; }
    { _v = vec4(((r1).xxxx) * ((r1).xyzw) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r1.z = _v.z; }
    { _v = vec4(((r1).xyzw) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r1.y = _v.y; }
    { _v = vec4(exp2(((r1).yyyy).x)); r3.x = _v.x; }
    { _v = vec4(((r1).xxxx) * ((r1).xyzw) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r1.z = _v.z; }
    { _v = vec4(((r1).xyzw) * ((r1).zzzz) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4((1.0 / ((r2).wwww).x)); r1.y = _v.y; }
    { _v = vec4(((r1).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4(((r0).xyzw) + ((r2).xyzw)); r2.xyz = _v.xyz; }
    { _v = vec4(exp2(((r1).xyzw).x)); r1.x = _v.x; }
    { _v = vec4((-((r1).xyzw)) * ((U_PScaleOverRayleighScaleDepth).xxxx) + ((U_PScaleOverRayleighScaleDepth).xxxx)); r1.y = _v.y; }
    { _v = vec4(((r1).yyyy) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r2.w = _v.w; }
    { _v = vec4(((r1).xyzw) * ((U_PRayleighScaleDepth).xxxx)); r1.x = _v.x; }
    { _v = vec4(exp2(((r2).wwww).x)); r2.w = _v.w; }
    { _v = vec4(((r3).xyzw) * ((U_PRayleighScaleDepth).xxxx) + (-((r1).xyzw))); r3.x = _v.x; }
    { _v = vec4((r3).xyzw); r3.w = _v.w; }
    { _v = vec4(((r2).wwww) * ((r3).xyzw) + ((r3).wwww)); r1.x = _v.x; }
    { _v = vec4((-((r1).xxxx)) * ((U_PInvWavelengthKr4PIplusKm4PI).xyzw)); r1.xyz = _v.xyz; }
    { _v = vec4((r2).xyzw); r2.w = _v.w; }
    { _v = vec4(((r1).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4(((r0).xyzw) * ((r2).xyzw)); r2.w = _v.w; }
    { _v = vec4(((r1).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.y = _v.y; }
    { _v = vec4(((r1).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.z = _v.z; }
    { _v = vec4(exp2(((r1).xyzw).x)); r1.x = _v.x; }
    { _v = vec4(dot(((r0).xyzw).xyz, ((r0).xyzw).xyz)); r3.x = _v.x; }
    { _v = vec4(exp2(((r1).yyyy).x)); r1.y = _v.y; }
    { _v = vec4(exp2(((r1).zzzz).x)); r1.z = _v.z; }
    { _v = vec4((r2).xyzw); r2.w = _v.w; }
    { _v = vec4(((r1).xyzw) * ((r2).wwww) + ((r4).xyzw)); r1.xyz = _v.xyz; }
    { _v = vec4(inversesqrt(abs(((r3).xyzw).x))); r4.x = _v.x; }
    { _v = vec4(((r4).xxxx) * ((r0).xyzw)); r3.xyz = _v.xyz; }
    { _v = vec4((tc2).xyzw); r0.xyz = _v.xyz; }
    { _v = vec4(dot(((r0).xyzw).xyz, ((r3).xyzw).xyz)); r4.y = _v.y; }
    { _v = vec4(dot(((r3).xyzw).xyz, ((U_PointToLight).xyzw).xyz)); r0.x = _v.x; }
    { _v = vec4(dot(((r2).xyzw).xyz, ((r2).xyzw).xyz)); r0.y = _v.y; }
    { _v = vec4(inversesqrt(abs(((r0).yyyy).x))); r3.x = _v.x; }
    { _v = vec4((-((r0).xxxx)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r3.z = _v.z; }
    { _v = vec4(((r3).xxxx) * ((r2).xyzw)); r2.xyz = _v.xyz; }
    { _v = vec4((tc2).xyzw); r0.xyz = _v.xyz; }
    { _v = vec4(dot(((r0).xyzw).xyz, ((r2).xyzw).xyz)); r3.y = _v.y; }
    { _v = vec4(((r3).zzzz) * ((vec4(5.25,-6.80000019,0.0,0.0)).xxxx) + ((vec4(5.25,-6.80000019,0.0,0.0)).yyyy)); r0.x = _v.x; }
    { _v = vec4((r3).xyzw); r3.z = _v.z; }
    { _v = vec4(((r3).xyzw) * ((r0).xxxx) + ((vec4(3.82999992,0.0,0.0,0.0)).xxxx)); r0.z = _v.z; }
    { _v = vec4((-((r4).yyyy)) + ((vec4(0.0,1.0,0.0,0.0)).yyyy)); r0.x = _v.x; }
    { _v = vec4(dot(((r2).xyzw).xyz, ((U_PointToLight).xyzw).xyz)); r2.y = _v.y; }
    { _v = vec4(((r3).zzzz) * ((r0).zzzz) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r0.y = _v.y; }
    { _v = vec4(((r0).xxxx) * ((vec4(0.0,5.25,-6.80000019,0.0)).yyyy) + ((vec4(0.0,5.25,-6.80000019,0.0)).xyzw)); r0.z = _v.z; }
    { _v = vec4(((r3).zzzz) * ((r0).xyzw) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r0.y = _v.y; }
    { _v = vec4(((r0).xxxx) * ((r0).xyzw) + ((vec4(0.0,3.82999992,0.0,0.0)).yyyy)); r0.z = _v.z; }
    { _v = vec4(((r0).xxxx) * ((r0).xyzw) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r0.z = _v.z; }
    { _v = vec4(((r0).xyzw) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r0.y = _v.y; }
    { _v = vec4(((r0).xyzw) * ((r0).zzzz) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r0.x = _v.x; }
    { _v = vec4(exp2(((r0).yyyy).x)); r3.z = _v.z; }
    { _v = vec4(((r0).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.x = _v.x; }
    { _v = vec4((1.0 / ((r4).xyzw).x)); r0.y = _v.y; }
    { _v = vec4((-((r0).xyzw)) * ((U_PScaleOverRayleighScaleDepth).xxxx) + ((U_PScaleOverRayleighScaleDepth).xxxx)); r0.y = _v.y; }
    { _v = vec4(exp2(((r0).xyzw).x)); r0.x = _v.x; }
    { _v = vec4(((r0).xyzw) * ((U_PRayleighScaleDepth).xxxx)); r0.x = _v.x; }
    { _v = vec4(((r0).yyyy) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r0.z = _v.z; }
    { _v = vec4(((r3).zzzz) * ((U_PRayleighScaleDepth).xxxx) + (-((r0).xyzw))); r0.x = _v.x; }
    { _v = vec4(exp2(((r0).zzzz).x)); r3.z = _v.z; }
    { _v = vec4(((r3).zzzz) * ((r0).xyzw) + ((r3).wwww)); r0.x = _v.x; }
    { _v = vec4((-((r0).xxxx)) * ((U_PInvWavelengthKr4PIplusKm4PI).xyzw)); r0.xyz = _v.xyz; }
    { _v = vec4(((r0).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.x = _v.x; }
    { _v = vec4(((r0).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.z = _v.z; }
    { _v = vec4(exp2(((r0).xyzw).x)); r0.x = _v.x; }
    { _v = vec4(((r0).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.y = _v.y; }
    { _v = vec4((-((r3).xyzw)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r4.y = _v.y; }
    { _v = vec4(exp2(((r0).yyyy).x)); r0.y = _v.y; }
    { _v = vec4(((r4).yyyy) * ((vec4(5.25,-6.80000019,0.0,0.0)).xxxx) + ((vec4(5.25,-6.80000019,0.0,0.0)).yyyy)); r4.x = _v.x; }
    { _v = vec4(((r0).wwww) * ((r3).zzzz)); r2.x = _v.x; }
    { _v = vec4((r0).xyzw); r0.z = _v.z; }
    { _v = vec4(exp2(((r0).zzzz).x)); r0.z = _v.z; }
    { _v = vec4((-((r2).yyyy)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r4.z = _v.z; }
    { _v = vec4(((r4).yyyy) * ((r4).xyzw) + ((vec4(0.0,3.82999992,0.0,0.0)).yyyy)); r4.x = _v.x; }
    { _v = vec4((U_PKrESun).xxxx); r3.z = _v.z; }
    { _v = vec4((r0).xyzw); r0.xyz = _v.xyz; }
    { _v = vec4(((r0).xyzw) * ((r2).xxxx) + ((r1).xyzw)); r1.xyz = _v.xyz; }
    { _v = vec4(((r4).xyzw) * ((vec4(5.25,-6.80000019,0.0,0.0)).xxxx) + ((vec4(5.25,-6.80000019,0.0,0.0)).yyyy)); r0.z = _v.z; }
    { _v = vec4(((r4).yyyy) * ((r4).xyzw) + ((vec4(0.0,0.0,0.458999991,0.0)).zzzz)); r0.x = _v.x; }
    { _v = vec4(((r4).yyyy) * ((r0).xyzw) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r0.x = _v.x; }
    { _v = vec4(((r4).xyzw) * ((r0).xyzw) + ((vec4(0.0,3.82999992,0.0,0.0)).yyyy)); r0.z = _v.z; }
    { _v = vec4(((r4).zzzz) * ((r0).zzzz) + ((vec4(0.458999991,0.0,0.0,0.0)).xxxx)); r4.x = _v.x; }
    { _v = vec4(((r0).xxxx) * ((vec4(0.0,1.44269502,0.0,0.0)).yyyy)); r0.z = _v.z; }
    { _v = vec4(((r4).zzzz) * ((r4).xyzw) + ((vec4(-0.00286999997,0.0,0.0,0.0)).xxxx)); r4.x = _v.x; }
    { _v = vec4(exp2(((r0).zzzz).x)); r0.x = _v.x; }
    { _v = vec4(((r4).xxxx) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.z = _v.z; }
    { _v = vec4(((r0).xyzw) * ((U_PRayleighScaleDepth).xxxx)); r0.x = _v.x; }
    { _v = vec4(exp2(((r0).zzzz).x)); r0.y = _v.y; }
    { _v = vec4(((r0).yyyy) * ((U_PRayleighScaleDepth).xxxx) + (-((r0).xyzw))); r0.x = _v.x; }
    { _v = vec4((1.0 / ((r3).xyzw).x)); r0.y = _v.y; }
    { _v = vec4((-((r0).xyzw)) * ((U_PScaleOverRayleighScaleDepth).xxxx) + ((U_PScaleOverRayleighScaleDepth).xxxx)); r0.y = _v.y; }
    { _v = vec4(((r0).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.y = _v.y; }
    { _v = vec4(exp2(((r0).yyyy).x)); r3.x = _v.x; }
    { _v = vec4(((r3).xyzw) * ((r0).xyzw) + ((r3).wwww)); r0.x = _v.x; }
    { _v = vec4((U_g2).xxxx); r3.w = _v.w; }
    { _v = vec4((-((r0).xxxx)) * ((U_PInvWavelengthKr4PIplusKm4PI).xyzw)); r0.xyz = _v.xyz; }
    { _v = vec4(((r3).xxxx) * ((r0).xyzw)); r0.w = _v.w; }
    { _v = vec4(((r0).xyzw) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.x = _v.x; }
    { _v = vec4(exp2(((r0).xyzw).x)); r0.x = _v.x; }
    { _v = vec4(((r0).yyyy) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r4.x = _v.x; }
    { _v = vec4(((r0).zzzz) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r3.y = _v.y; }
    { _v = vec4(exp2(((r4).xyzw).x)); r0.y = _v.y; }
    { _v = vec4((r3).xyzw); r3.xy = _v.xy; }
    { _v = vec4(exp2(((r3).yyyy).x)); r0.z = _v.z; }
    { _v = vec4(((r0).xyzw) * ((r0).wwww) + ((r1).xyzw)); r1.xyz = _v.xyz; }
    { _v = vec4(dot((tc3.xyzw).xyz, (tc3.xyzw).xyz)); r0.x = _v.x; }
    { _v = vec4(nrmz(tc3.xyzw, ((r0).xyzw).x)); r0.xyz = _v.xyz; }
    { _v = vec4(dot(((r0).xyzw).xyz, ((U_PointToLight).xyzw).xyz)); r0.z = _v.z; }
    { _v = vec4(((r0).zzzz) * ((U_g).xxxx)) * 2.0; r0.x = _v.x; }
    { _v = vec4((-((r0).xyzw)) + ((U_g2).xxxx)); r0.x = _v.x; }
    { _v = vec4(((r0).xyzw) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r0.x = _v.x; }
    { _v = vec4(log2(((r0).xyzw).x)); r0.x = _v.x; }
    { _v = vec4(((r3).wwww) + ((vec4(2.0,0.0,0.0,0.0)).xxxx)); r0.y = _v.y; }
    { _v = vec4((1.0 / ((r0).yyyy).x)); r0.y = _v.y; }
    { _v = vec4(((r0).zzzz) * ((r0).zzzz)); r3.x = _v.x; }
    { _v = vec4(((r0).yyyy) * (-((U_g2).xxxx)) + ((r0).yyyy)); r3.w = _v.w; }
    { _v = vec4(((r0).xyzw) * ((vec4(0.0,1.5,0.0,0.0)).yyyy)); r0.x = _v.x; }
    { _v = vec4(((r3).wwww) * ((vec4(1.5,0.0,0.0,0.0)).xxxx)); r3.y = _v.y; }
    { _v = vec4(((r3).xxxx) * ((r3).xyzw) + ((r3).xyzw)); r3.y = _v.y; }
    { _v = vec4(exp2((-((r0).xyzw)).x)); r0.x = _v.x; }
    { _v = vec4(((r3).yyyy) * ((r0).xxxx)); r3.w = _v.w; }
    { _v = vec4(((r3).zzzz) * ((U_PInvWavelength).xyzw)); r0.xyz = _v.xyz; }
    { _v = vec4(((r1).xyzw) * ((r0).xyzw)); r0.xyz = _v.xyz; }
    { _v = vec4(((r3).xyzw) * ((U_PKmESun).xxxx)); r3.w = _v.w; }
    { _v = vec4(((r1).xyzw) * ((r3).wwww)); r1.xyz = _v.xyz; }
    { _v = vec4(((r3).xxxx) * ((vec4(0.75,0.0,0.0,0.0)).xxxx) + ((vec4(0.75,0.0,0.0,0.0)).xxxx)); r3.w = _v.w; }
    { _v = vec4(((r3).wwww) * ((r0).xyzw) + ((r1).xyzw)); r1.xyz = _v.xyz; }
    { _v = vec4((-((r1).xyzw)) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.x = _v.x; }
    { _v = vec4((-((r1).yyyy)) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.z = _v.z; }
    { _v = vec4(((r4).wwww) + ((r1).wwww)); r1.x = _v.x; }
    { _v = vec4(exp2(((r0).zzzz).x)); r0.y = _v.y; }
    { _v = vec4((-((r1).xyzw)) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r0.z = _v.z; }
    { _v = vec4(((r2).wwww) + ((r1).xyzw)); r1.x = _v.x; }
    { _v = vec4(exp2(((r0).zzzz).x)); r0.z = _v.z; }
    { _v = vec4(((r2).xyzw) + ((r1).xyzw)); r1.x = _v.x; }
    { _v = vec4(exp2(((r0).xyzw).x)); r0.x = _v.x; }
    { _v = vec4(((r0).wwww) + ((r1).xyzw)); r1.x = _v.x; }
    { _v = vec4((-((r1).xyzw)) * ((vec4(1.44269502,0.0,0.0,0.0)).xxxx)); r1.x = _v.x; }
    { _v = vec4(exp2(((r1).xyzw).x)); r0.w = _v.w; }
    { _v = vec4((-((r0).xyzw)) + ((vec4(1.0,0.0,0.0,0.0)).xxxx)); r0.xyz = _v.xyz; }
    { _v = vec4(max(((r0).xyzw), ((vec4(1.0,0.0,0.0,0.0)).xxxx))); r0.w = _v.w; }
    { _v = vec4(((r0).xyzw) * ((U_color).xyzw)); r0.xyzw = _v.xyzw; }

  gl_FragColor = r0;
}
