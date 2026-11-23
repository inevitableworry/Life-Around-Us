// Background music. Plays the soundtrack in order, looping the playlist, with
// gentle fades. Only royalty-free or owner-licensed audio.
//
// Tracks come from CONFIG.music.tracks plus every file in app/music, which
// the Windows shell lists (it also converts Apple Lossless files to FLAC in
// the background and adds them when ready). Formats: MP3, M4A/AAC, FLAC,
// ALAC, WAV, OGG and Opus. A file that fails to play is skipped.
export function startMusic(opts = {}) {
  // opts is read live (the options menu changes enabled / volume).
  const tracks = opts.tracks || [];
  const vol = () => opts.volume ?? 0.35;
  const audio = new Audio();
  audio.muted = opts.enabled === false;
  audio.volume = 0;
  audio.preload = "auto";
  const abs = (u) => new URL(u, location.href).href;
  // "My Music": every track (config + the music folder, in order.txt order).
  // "Original Soundtrack": only CONFIG.music.soundtrack (the original's theme
  // songs, in the old port's playlist.txt order), when those files are present.
  let all = tracks.map(abs);
  let mine = [], mineNames = [];               // Desktop\Music (the shell's MusicLibrary)
  const pick = () => {
    if (opts.source === "mine" && mine.length) return mine;
    if (opts.source === "ost") {
      const ost = (opts.soundtrack || []).map(abs).filter((u) => all.includes(u));
      return ost.length ? ost : all;
    }
    return [...all, ...mine.filter((u) => !all.includes(u))];   // the soundtrack, then your songs
  };
  let list = pick();
  let i = 0, playing = false, failures = 0;

  let anim = 0;
  const fadeTo = (target, ms = 2500) => {
    cancelAnimationFrame(anim);                        // a newer fade (a volume step) wins
    const start = audio.volume, t0 = performance.now();
    const step = (t) => {
      const k = Math.max(0, Math.min(1, (t - t0) / ms));   // rAF time can precede t0
      audio.volume = start + (target - start) * k;
      if (k < 1) anim = requestAnimationFrame(step);
    };
    anim = requestAnimationFrame(step);
  };
  const play = () => {
    if (!list.length || failures >= list.length) { playing = false; return; }   // nothing playable (yet)
    playing = true;
    i = ((i % list.length) + list.length) % list.length;
    audio.src = list[i];
    cancelAnimationFrame(anim);
    audio.volume = 0;
    audio.play().then(() => {
      failures = 0; fadeTo(vol());
      window.dispatchEvent(new CustomEvent("lau-track", { detail: { url: audio.src } }));   // the "now playing" note
    }).catch((e) => { if (e?.name !== "AbortError") console.warn("Music blocked:", e); });
  };
  audio.addEventListener("ended", () => { i++; play(); });
  audio.addEventListener("error", () => {
    console.warn("Skipping a track that does not play:", audio.src);
    failures++; i++;
    setTimeout(play, 500);
  });

  // The shell's playlist (and its updates as conversions finish).
  const host = window.chrome?.webview;
  if (host) {
    host.addEventListener("message", (e) => {
      if (e.data?.type !== "music") return;
      const current = playing ? audio.src : null;
      all = [...new Set([...tracks, ...e.data.tracks].map(abs))];
      mine = (e.data.mine || []).map(abs); mineNames = e.data.mineNames || [];
      list = pick();
      failures = 0;
      if (current && list.includes(current)) i = list.indexOf(current);
      else if (!playing) play();
    });
    host.postMessage({ cmd: "getMusic" });
  }
  play();
  audio.applyOptions = () => {
    audio.muted = opts.enabled === false;
    const next = pick();
    if (next.join() !== list.join()) {                // My Music <-> Original Soundtrack
      const current = playing ? audio.src : null;
      list = next; failures = 0;
      if (current && list.includes(current)) i = list.indexOf(current);
      else { i = 0; play(); }
    }
    if (!audio.muted && playing) fadeTo(vol(), 600);
  };
  // Select Track: play list[k] now; the playlist carries on from there.
  const playIndex = (k) => { if (k >= 0 && k < list.length) { i = k; failures = 0; play(); } };
  const currentIndex = () => (playing ? list.indexOf(audio.src) : -1);
  // Select Track / Select by Mood: play this file now (from My Music or the
  // soundtrack list, whichever has it), the playlist carrying on from there.
  const playUrl = (u) => {
    const a = abs(u);
    if (CONFIG_MUSIC_OFF()) return;
    if (!list.includes(a)) { if (!all.includes(a)) return; opts.source = "all"; list = pick(); }
    playIndex(list.indexOf(a));
  };
  const CONFIG_MUSIC_OFF = () => opts.enabled === false;
  const current = () => (playing ? new URL(audio.src).pathname.replace(/^\//, "") : null);
  // My Music: play your songs from song k (k < 0: Play All My Songs, from the first).
  const playMine = (k) => {
    if (!mine.length || opts.enabled === false) return;
    opts.source = "mine"; list = pick(); playIndex(Math.max(0, k));
  };
  // The controller's Square + R1 / L1 (keyboard ] / [): the next / previous track.
  const skip = (d) => {
    if (opts.enabled === false || !list.length) return false;
    const k = currentIndex();
    i = (k >= 0 ? k : i) + d; failures = 0; play();
    return true;
  };
  window.__music = { audio, get list() { return list; }, playIndex, currentIndex, playUrl, current, playMine,
    next: () => skip(1), prev: () => skip(-1), get playing() { return playing && opts.enabled !== false; },
    get mineNames() { return mineNames; }, get mine() { return mine; } };
  return audio;
}

// The old port's background "wave" sound (data/echo/res/wave.mp3 in LWP-PC,
// here sfx/wave.mp3), as the owner remembers it: a nonstop loop under the
// Earth, from the moment the globe appears, whether music is playing or not
// (the old port only played it under the music, at 0.2 of its volume, which
// made it easy to miss). Level: 0.35 of the music volume setting.
// "Background Sound" in the options turns it on or off.
export function startWave(musicOpts = {}, ambientOpts = {}) {   // (the music player is no longer needed)
  const audio = new Audio("sfx/wave.mp3");
  audio.loop = true;
  audio.volume = 0;
  // Its own level (Options > Settings > Sound > Background Sound), no longer
  // tied to the music's: 50 % is the level it had before (0.125).
  const target = () => (ambientOpts.enabled === false) ? 0 : (ambientOpts.volume ?? 0.5) * 0.25;
  let anim = 0;
  const fadeTo = (to, ms) => {
    cancelAnimationFrame(anim);
    const from = audio.volume, t0 = performance.now();
    const step = (t) => {
      const k = Math.max(0, Math.min(1, (t - t0) / ms));   // rAF time can precede t0
      audio.volume = from + (to - from) * k;
      if (k < 1) anim = requestAnimationFrame(step);
      else if (to === 0) audio.pause();
    };
    anim = requestAnimationFrame(step);
  };
  const apply = (ms = 600) => {
    if (target() > 0) {
      if (audio.paused) audio.play().catch((e) => { if (e?.name !== "AbortError") console.warn("Wave sound blocked:", e); });
      fadeTo(target(), ms);
    } else fadeTo(0, ms);
  };
  audio.applyOptions = () => apply(600);
  apply(2500);
  window.__wave = audio;                      // for checking in DevTools
  return audio;
}
