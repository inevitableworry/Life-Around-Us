// Sub-solar point (where the sun is overhead) from a low-precision solar
// ephemeris (Astronomical Almanac). Accurate to ~0.1°, plenty for shading.
const RAD = Math.PI / 180;

export function subsolarPoint(date = new Date()) {
  const n = date.getTime() / 86400000 + 2440587.5 - 2451545.0; // days since J2000
  const L = (280.460 + 0.9856474 * n) % 360;
  const g = ((357.528 + 0.9856003 * n) % 360) * RAD;
  const lambda = (L + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g)) * RAD;
  const eps = (23.439 - 0.0000004 * n) * RAD;
  const decl = Math.asin(Math.sin(eps) * Math.sin(lambda));
  const ra = Math.atan2(Math.cos(eps) * Math.sin(lambda), Math.cos(lambda));
  const gmstDeg = ((18.697374558 + 24.06570982441908 * n) % 24) * 15;
  let lon = ra / RAD - gmstDeg;
  lon = ((lon + 540) % 360) - 180;
  return { lat: decl / RAD, lon };
}

// Sub-lunar point (where the Moon is overhead) and the Moon's distance, from
// a short lunar series (the main terms of Meeus ch. 47): good to ~0.3 deg,
// plenty for placing the Moon and its phase.
export function sublunarPoint(date = new Date()) {
  const n = date.getTime() / 86400000 + 2440587.5 - 2451545.0; // days since J2000
  const r = (x) => (((x % 360) + 360) % 360) * RAD;
  const L = 218.316 + 13.176396 * n, M = r(134.963 + 13.064993 * n), F = r(93.272 + 13.229350 * n);
  const D = r(297.850 + 12.190749 * n), Ms = r(357.529 + 0.98560028 * n);
  const lam = r(L + 6.289 * Math.sin(M) + 1.274 * Math.sin(2 * D - M) + 0.658 * Math.sin(2 * D)
    + 0.214 * Math.sin(2 * M) - 0.186 * Math.sin(Ms) - 0.114 * Math.sin(2 * F));
  const bet = (5.128 * Math.sin(F) + 0.281 * Math.sin(M + F) + 0.278 * Math.sin(M - F) + 0.173 * Math.sin(2 * D - F)) * RAD;
  const km = 385001 - 20905 * Math.cos(M) - 3699 * Math.cos(2 * D - M) - 2956 * Math.cos(2 * D);
  const eps = (23.439 - 0.0000004 * n) * RAD;
  const decl = Math.asin(Math.sin(bet) * Math.cos(eps) + Math.cos(bet) * Math.sin(eps) * Math.sin(lam));
  const ra = Math.atan2(Math.sin(lam) * Math.cos(eps) - Math.tan(bet) * Math.sin(eps), Math.cos(lam));
  const gmstDeg = ((18.697374558 + 24.06570982441908 * n) % 24) * 15;
  let lon = ra / RAD - gmstDeg;
  lon = ((lon % 360) + 540) % 360 - 180;
  return { lat: decl / RAD, lon, km };
}

// Same axis convention as the globe mesh (three.js SphereGeometry):
// lon 0 -> +X, lon 90E -> -Z, north pole -> +Y.
export function latLonToVec3(lat, lon, r = 1) {
  const la = lat * RAD, lo = lon * RAD;
  return [r * Math.cos(la) * Math.cos(lo), r * Math.sin(la), -r * Math.cos(la) * Math.sin(lo)];
}
