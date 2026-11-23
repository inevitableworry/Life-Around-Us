// Current weather for every tour city, as the old project (LWP-PC,
// native/update_city_info.py) got it: Open-Meteo, all cities in one batched
// request, refreshed every 3 hours, with the last result kept so the labels
// never go blank.
//
// - The result is saved (localStorage in the app profile) with its time, so a
//   restart within the refresh period reuses it instead of fetching again.
// - Open-Meteo's free allowance is per day and per internet connection. When it
//   answers "Daily API request limit exceeded" (HTTP 429), it is not asked
//   again until the allowance resets (00:00 UTC); other 429s wait an hour.
// - Meanwhile, or when Open-Meteo fails, the cities are filled from MET Norway
//   (api.met.no, no key; fetched by the Windows shell, which sends the app's
//   User-Agent as MET asks), so every city still has a temperature and icon.
// - A city keeps its last value if one refresh misses it.
import { subsolarPoint } from "./sun.js";
import { shellFetch } from "./live.js";

const CACHE_KEY = "weather-cache-v2";
const MAX_AGE_SHOW_MS = 24 * 3600 * 1000;   // a value older than a day is not shown
const RETRY_MS = 30 * 60 * 1000;            // after a failed refresh

export class WeatherService {
  constructor(cities, { refreshHours = 3, refreshMinutes, apiKey = "" } = {}) {
    this.cities = cities;
    this.refreshMs = (refreshMinutes ? refreshMinutes / 60 : refreshHours) * 3600e3;
    this.apiKey = apiKey;
    this.data = {};          // key -> { tempC, code, isDay, at, src }
    this.fetchedAt = 0;      // last refresh that filled every city
    this.omBlockedUntil = 0; // Open-Meteo said 429: not asked again before this
    this.source = "";
    this.listeners = [];
    this.loadCache();
  }

  key(c) { return `${c.lat.toFixed(3)},${c.lon.toFixed(3)}`; }

  onUpdate(fn) { this.listeners.push(fn); }
  notify() { this.listeners.forEach((fn) => fn()); }

  get backoffMs() { return Math.max(0, this.omBlockedUntil - Date.now()); }

  loadCache() {
    try {
      const c = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
      if (!c) return;
      this.data = c.data || {};
      this.fetchedAt = c.fetchedAt || 0;
      this.omBlockedUntil = c.omBlockedUntil || 0;
      this.source = c.source || "";
    } catch { /* no cache */ }
  }

  saveCache() {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ fetchedAt: this.fetchedAt, omBlockedUntil: this.omBlockedUntil,
        source: this.source, data: this.data }));
    } catch { /* storage full or blocked */ }
  }

  // ---- Open-Meteo: the cities in batches of 50 (comma-separated lists; each
  // location counts as one call: 133 cities every 3 h is about 1,100 a day)
  omUrl(cities) {
    const lat = cities.map((c) => c.lat.toFixed(3)).join(",");
    const lon = cities.map((c) => c.lon.toFixed(3)).join(",");
    const host = this.apiKey ? "https://customer-api.open-meteo.com" : "https://api.open-meteo.com";
    let u = `${host}/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&current=temperature_2m,weather_code,is_day&timezone=GMT`;
    if (this.apiKey) u += `&apikey=${encodeURIComponent(this.apiKey)}`;
    return u;
  }

  async fromOpenMeteo() {
    let n = 0;
    for (let i = 0; i < this.cities.length; i += 50) n += await this.omBatch(this.cities.slice(i, i + 50));
    return n;
  }

  async omBatch(cities) {
    const res = await fetch(this.omUrl(cities), { cache: "no-store" });
    if (res.status === 429) {
      let reason = "";
      try { reason = (await res.json()).reason || ""; } catch { /* no body */ }
      const now = Date.now();
      this.omBlockedUntil = /daily/i.test(reason)
        ? (Math.floor(now / 86400e3) + 1) * 86400e3 + 10 * 60e3     // next 00:10 UTC
        : now + 3600e3;
      throw new Error(`Open-Meteo limit reached (${reason || "HTTP 429"}); not asked again before ${new Date(this.omBlockedUntil).toISOString()}`);
    }
    if (!res.ok) throw new Error(`Open-Meteo HTTP ${res.status}`);
    let json = await res.json();
    if (!Array.isArray(json)) json = [json];
    const at = Date.now();
    let n = 0;
    json.forEach((loc, i) => {
      const c = cities[i];
      if (!c || loc?.current?.temperature_2m == null) return;
      this.data[this.key(c)] = { tempC: loc.current.temperature_2m, code: loc.current.weather_code,
        isDay: loc.current.is_day === 1, at, src: "Open-Meteo" };
      n++;
    });
    return n;
  }

  // ---- MET Norway, one request per city: three at a time, each lane pausing
  // 150 ms between requests (well under MET's 20 requests a second)
  async fromMetNorway() {
    const at = Date.now();
    let n = 0, next = 0;
    const one = async () => {
      while (next < this.cities.length) {
        const c = this.cities[next++];
        try {
          const r = await shellFetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${c.lat.toFixed(4)}&lon=${c.lon.toFixed(4)}`);
          const ts = JSON.parse(r.text).properties?.timeseries || [];
          // The entry for the current hour (the list starts at or just before now).
          const cur = ts.filter((t) => Date.parse(t.time) <= at).pop() || ts[0];
          const temp = cur?.data?.instant?.details?.air_temperature;
          const sym = (cur?.data?.next_1_hours || cur?.data?.next_6_hours)?.summary?.symbol_code;
          if (temp == null || !sym) continue;
          const { code, isDay } = metToWmo(sym, c);
          this.data[this.key(c)] = { tempC: temp, code, isDay, at, src: "MET Norway" };
          n++;
        } catch { /* keep this city's last value */ }
        await new Promise((r) => setTimeout(r, 150));
      }
    };
    await Promise.all([one(), one(), one()]);
    return n;
  }

  async refresh() {
    let n = 0, src = "";
    if (Date.now() >= this.omBlockedUntil) {
      try { n = await this.fromOpenMeteo(); src = "Open-Meteo"; }
      // A batch that fails part-way leaves the rest to MET Norway.
      catch (err) { console.warn("Open-Meteo weather unavailable; trying MET Norway.", err.message || err); }
    }
    if (n < this.cities.length) {
      try { n = Math.max(n, await this.fromMetNorway()); if (!src) src = "MET Norway"; }
      catch (err) { console.warn("MET Norway weather unavailable.", err.message || err); }
    }
    const ok = n >= this.cities.length;
    if (ok) { this.fetchedAt = Date.now(); this.source = src; }
    else console.warn(`Weather refresh filled ${n} of ${this.cities.length} cities; keeping the last values for the rest.`);
    this.saveCache();
    this.notify();
    return ok;
  }

  // No refresh at start-up while the saved weather is still fresh; then every
  // refreshHours (3 h). A refresh that misses cities is retried in 30 min.
  start() {
    const schedule = (ms) => { clearTimeout(this.timer); this.timer = setTimeout(run, Math.max(5000, ms)); };
    const run = async () => schedule((await this.refresh()) ? this.refreshMs : RETRY_MS);
    const age = this.fetchedAt ? Date.now() - this.fetchedAt : Infinity;
    const complete = this.cities.every((c) => this.data[this.key(c)]);   // a city added since the last refresh
    if (age < this.refreshMs && complete) { this.notify(); schedule(this.refreshMs - age); }
    else run();
    window.addEventListener("online", () => { if (Date.now() - this.fetchedAt > this.refreshMs) run(); });
  }

  get(city) {
    const w = this.data[this.key(city)];
    if (!w || Date.now() - (w.at || this.fetchedAt) > MAX_AGE_SHOW_MS) return null;
    return w;
  }
}

// MET Norway symbol codes -> the WMO codes the icons are chosen by (icons.js twcIcon).
const MET_WMO = {
  clearsky: 0, fair: 1, partlycloudy: 2, cloudy: 3, fog: 45,
  lightrain: 61, rain: 63, heavyrain: 65,
  lightrainshowers: 80, rainshowers: 81, heavyrainshowers: 82,
  lightsleet: 66, sleet: 67, heavysleet: 67, lightsleetshowers: 66, sleetshowers: 67, heavysleetshowers: 67,
  lightsnow: 71, snow: 73, heavysnow: 75,
  lightsnowshowers: 85, snowshowers: 85, heavysnowshowers: 86,
};
function metToWmo(symbol, city) {
  const [base, part] = symbol.split("_");
  let code = /thunder/.test(base) ? 95 : MET_WMO[base];
  if (code == null) code = 3;
  // _day / _night / _polartwilight; symbols without a part: the sun's height decides.
  const isDay = part ? part !== "night" : sunUp(city);
  return { code, isDay };
}
function sunUp(c) {
  const s = subsolarPoint(new Date()), R = Math.PI / 180;
  const cosA = Math.sin(c.lat * R) * Math.sin(s.lat * R) + Math.cos(c.lat * R) * Math.cos(s.lat * R) * Math.cos((c.lon - s.lon) * R);
  return cosA > 0;
}
