// Loads and parses the native LWP-PC files:
// - wlop.ps3.conf
// - city_info_header.xml
// - default_city_info.xml / city_info.xml
// - city_clock.txt
// - soundeffect.xml

export async function loadWlopConf(url = "data/wlop/wlop.ps3.conf") {
  const conf = {};
  try {
    const res = await fetch(url);
    if (!res.ok) return conf;
    const text = await res.text();
    let section = "root";
    conf[section] = {};
    for (const rawLine of text.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;
      const secMatch = line.match(/^\[([^\]]+)\]$/);
      if (secMatch) {
        section = secMatch[1];
        conf[section] = conf[section] || {};
        continue;
      }
      const eq = line.indexOf("=");
      if (eq > 0) {
        const key = line.slice(0, eq).trim();
        let val = line.slice(eq + 1).split("#")[0].trim();
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        else if (val === "true") val = true;
        else if (val === "false") val = false;
        else if (!Number.isNaN(Number(val))) val = Number(val);
        conf[section][key] = val;
      }
    }
  } catch (e) {
    console.warn("wlop.ps3.conf load skipped:", e);
  }
  return conf;
}

export async function loadCityInfoHeader(url = "data/city_info_header.xml") {
  const header = { title: "city_info.xml", ttl: 90, pics: {}, copyrights: [], texts: {} };
  try {
    const res = await fetch(url);
    if (!res.ok) return header;
    const xmlText = (await res.text()) + "</channel></rss>";
    const doc = new DOMParser().parseFromString(xmlText, "text/xml");
    header.title = doc.querySelector("title")?.textContent || header.title;
    header.ttl = Number(doc.querySelector("ttl")?.textContent || 90);
    for (const pic of doc.getElementsByTagName("live:pic")) {
      header.pics[pic.getAttribute("id")] = pic.getAttribute("url");
    }
    for (const cp of doc.getElementsByTagName("live:copyright")) {
      header.copyrights.push(cp.getAttribute("pic"));
    }
    for (const txt of doc.getElementsByTagName("live:text")) {
      header.texts[txt.getAttribute("id")] = txt.textContent;
    }
  } catch (e) {
    console.warn("city_info_header.xml load skipped:", e);
  }
  return header;
}

export async function loadCityClockTxt(url = "data/city_clock.txt") {
  // Returns array of { offsetSeconds, celsiusLine, fahrenheitLine } paired per city
  const entries = [];
  try {
    const res = await fetch(url);
    if (!res.ok) return entries;
    const lines = (await res.text()).split(/\r?\n/).filter((l) => l.trim().length > 0);
    for (let i = 0; i < lines.length; i += 2) {
      const cLine = lines[i].split(/\t|\s+(.+)/);
      const fLine = (lines[i + 1] || "").split(/\t|\s+(.+)/);
      const offsetSeconds = parseInt(cLine[0], 10) || 0;
      const cText = (lines[i].replace(/^-?\d+\s+/, "")).trim();
      const fText = (lines[i + 1] ? lines[i + 1].replace(/^-?\d+\s+/, "") : cText).trim();
      entries.push({ offsetSeconds, celsius: cText, fahrenheit: fText });
    }
  } catch (e) {
    console.warn("city_clock.txt load skipped:", e);
  }
  return entries;
}

export async function loadDefaultCityInfoXml(url = "data/life_info/live/en/default_city_info.xml") {
  const result = { cities: [], quakes: [], storms: [], iss: null };
  try {
    const res = await fetch(url);
    if (!res.ok) return result;
    const text = await res.text();
    const doc = new DOMParser().parseFromString(text, "text/xml");
    const items = [...doc.getElementsByTagName("item")];
    for (const item of items) {
      const panel = item.getElementsByTagName("live:panel")[0];
      const pic = panel?.getAttribute("pic") || "";
      const name = panel?.getElementsByTagName("live:name")[0]?.textContent?.trim() || "";
      const subC = panel?.querySelector('subname[pattern="celsius"]')?.textContent?.trim() || "";
      const subF = panel?.querySelector('subname[pattern="fahrenheit"]')?.textContent?.trim() || "";
      const pt = item.getElementsByTagName("georss:point")[0]?.textContent?.trim()?.split(/\s+/) || [];
      const lat = parseFloat(pt[0]);
      const lon = parseFloat(pt[1]);
      const headlines = [...item.getElementsByTagName("live:item")].map((el) => el.textContent.trim());
      const mediaEl = item.getElementsByTagName("live:media")[0];
      const thumbEl = item.getElementsByTagName("live:thumbnail")[0];
      const entry = {
        name,
        lat,
        lon,
        pic,
        subC,
        subF,
        headlines,
        mediaUrl: mediaEl?.getAttribute("url") || null,
        thumbUrl: thumbEl?.getAttribute("url") || null,
      };
      if (pic === "quake") result.quakes.push(entry);
      else if (pic === "storm") result.storms.push(entry);
      else if (pic === "iss") result.iss = entry;
      else if (!Number.isNaN(lat) && !Number.isNaN(lon)) result.cities.push(entry);
    }
  } catch (e) {
    console.warn("default_city_info.xml load skipped:", e);
  }
  return result;
}

// Extra loudness for the hand-control loops. The PS3 files are mastered very
// quietly (the rotation loop ~-34 dBFS, the zoom loops ~-32) and the old port
// played them at full volume; here, at the sound-effect volume (0.55) under
// the music and the wave loop, the rotation loop could not be heard at all.
// Boosted through Web Audio (an <audio> element's volume stops at 1).
const SLOT_GAIN = { 4: 2.5, 5: 2.5, 6: 3.6 };     // earth_zoom_in, earth_zoom_out, earth_rotate

export class SoundEffectBank {
  constructor() {
    this.slots = new Map();
    this.volume = 0.55;
    this.jingles = 1;                  // Options > Settings > Sound > Jingles (the turning / zooming loops)
    this.ctx = null;
  }
  setJingles(v) {
    this.jingles = v;
    for (const [n, s] of this.slots) if (s.gain?.gain) s.gain.gain.value = (SLOT_GAIN[n] ?? 1) * v;
  }
  // The slot's <audio> through a gain stage, made the first time it plays.
  boost(s, slotNum) {
    const g = SLOT_GAIN[slotNum];
    if (!g || s.gain) return;
    try {
      this.ctx ??= new AudioContext();
      const src = this.ctx.createMediaElementSource(s.audio);
      s.gain = this.ctx.createGain();
      s.gain.gain.value = g * this.jingles;
      src.connect(s.gain).connect(this.ctx.destination);
    } catch (e) { s.gain = { failed: e }; }
    if (this.ctx?.state === "suspended") this.ctx.resume().catch(() => {});
  }

  async load(xmlUrl = "data/soundeffect.xml", baseDir = "sfx/") {
    try {
      const res = await fetch(xmlUrl);
      if (!res.ok) return;
      const doc = new DOMParser().parseFromString(await res.text(), "text/xml");
      for (const slot of doc.querySelectorAll("slot")) {
        const num = Number(slot.getAttribute("num"));
        const loop = slot.getAttribute("loop") === "1";
        const filename = slot.getAttribute("filename");
        if (!filename || filename === "silence_loop.wav") continue;
        const audio = new Audio(`${baseDir}${filename}`);
        audio.loop = loop;
        audio.volume = this.volume;
        this.slots.set(num, { audio, loop, filename, playing: false });
      }
    } catch (e) {
      console.warn("soundeffect.xml load skipped:", e);
    }
  }

  play(slotNum) {
    const s = this.slots.get(slotNum);
    if (!s) return;
    if (s.loop) {
      this.boost(s, slotNum);
      if (!s.playing) {
        s.playing = true;
        s.audio.currentTime = 0;
        s.audio.play().catch(() => {});
      }
    } else {
      const clone = s.audio.cloneNode();
      clone.volume = this.volume;
      clone.play().catch(() => {});
    }
  }

  stop(slotNum) {
    const s = this.slots.get(slotNum);
    if (!s || !s.playing) return;
    s.playing = false;
    s.audio.pause();
    s.audio.currentTime = 0;
  }
}