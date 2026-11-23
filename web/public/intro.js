// Start-up sequence (skippable with any key, click or touch).
//
//   Loading   Title card (original illustration) while imagery loads; the
//             logo builds itself and a thin progress line fills.
//   Opening   175 frames at 60 fps (~2.9 s), timings from motion.js:
//               logo fades in 0-20, holds, fades out 140-150;
//               the Earth fades in 20-80 (camera rotates the first city into view);
//               card, labels and header fade in 160-175.
//
// Everything runs on one clock (rAF time) so camera and graphics stay in sync.
// Sound bed: soft pad + one bell when the opening starts, synthesised in code.
import { MOTION, FPS } from "./motion.js";

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const span = (t, a, b) => clamp01((t - a) / (b - a));
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const OP = MOTION.opening;
const CUT_FRAME = 105;
const ramp = (x, [a, b]) => clamp01((x - a) / (b - a));

export class Intro {
  constructor({ cfg, onCut, onSkip, onDone, setGlobeFade, gate }) {
    this.gate = gate;            // optional: () => Promise, run between the splash and the opening (the name screen)
    this.setGlobeFade = setGlobeFade;
    this.cfg = cfg;
    this.onCut = onCut;
    this.onSkip = onSkip;
    this.onDone = onDone;
    this.active = false;
    this.loaded = false;
    const q = (s) => document.querySelector(s);
    this.title = q("#titleCard");
    this.globeLogo = q("#globeLogo");
  }

  start(nowMs) {
    this.active = true;
    this.t0 = nowMs;
    this.cutAt = null;
    this.sound = this.cfg.sound === "none" ? null : playSoundBed(this.cfg);
    this.skipHandler = () => this.skip();
    ["keydown", "pointerdown", "touchstart"].forEach((e) => window.addEventListener(e, this.skipHandler));
  }

  setLoaded(nowMs) {
    this.loaded = true;
    this.loadedAt = (nowMs - this.t0) / 1000;
  }

  update(nowMs) {
    if (!this.active) return;
    const t = (nowMs - this.t0) / 1000;

    // ---- Cut to the globe
    // The old port: at least LWP_SPLASH_MS (3000 ms) and until the app is ready.
    if (this.cutAt === null && this.loaded && t >= Math.max(3.0, this.loadedAt)) {
      // The splash goes, then the gate (the name screen) if there is one,
      // and the opening starts once it is answered.
      if (this.gate && !this.gateDone) {
        if (!this.gating) {
          this.gating = true;
          this.title.classList.add("gone");
          this.gate().finally(() => { this.gateDone = true; this.gating = false; });
        }
        return;
      }
      this.cutAt = t;
      this.title.classList.add("gone");
      this.sound?.bell();
      this.onCut(nowMs, CUT_FRAME);
    }

    // ---- Opening, in 60 fps frames. The old port runs its opening behind the
    // splash: in the owner's recording of it (Recording 2026-11-13 224727.mp4)
    // the splash cuts away at about frame CUT_FRAME, with the Earth already
    // faded in and the logo at full; the logo is gone 0.75 s later and the
    // city names are in by 1.2 s. So the opening picks up at that frame.
    if (this.cutAt !== null) {
      const fr = (t - this.cutAt) * FPS + CUT_FRAME;
      this.globeLogo.style.opacity = (ramp(fr, OP.logoIn) * (1 - ramp(fr, OP.logoOut))).toFixed(3);
      // The old port (fwWorld 0x02CF3450): powf((frame - 20) / 60, 3).
      this.setGlobeFade(Math.pow(ramp(fr, OP.earthIn), 3));
      if (fr >= OP.overlaysIn[0]) document.body.classList.remove("intro-on");
      if (fr >= OP.totalFrames) this.finish();
    }
  }

  skip() {
    if (!this.active || this.gating) return;     // not while the name screen is up
    if (!this.loaded) { this.skipWhenLoaded = true; this.title.classList.add("skipping"); return; }
    this.title.classList.add("gone", "fast");
    this.globeLogo.style.opacity = 0;
    this.setGlobeFade(1);
    document.body.classList.remove("intro-on");
    this.sound?.stop(0.4);
    this.sound = null;
    if (this.cutAt === null) this.onSkip(performance.now());
    this.finish();
  }

  finish() {
    if (!this.active) return;
    this.active = false;
    ["keydown", "pointerdown", "touchstart"].forEach((e) => window.removeEventListener(e, this.skipHandler));
    this.sound?.stop(2.0);
    setTimeout(() => { this.title.remove(); this.globeLogo.remove(); }, 1200);
    this.onDone();
  }

  // Called by main.js every frame while loading, so a skip pressed early still works.
  pendingSkip() {
    if (this.skipWhenLoaded && this.loaded) { this.skipWhenLoaded = false; this.skip(); }
  }
}

// Original synthesised sound bed: a slow open-fifth pad (G3, D4, G4) under
// the title card, and one soft bell (B5) at the cut. Silent if audio is blocked.
function playSoundBed({ volume = 0.22 } = {}) {
  let ctx;
  try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return null; }
  if (ctx.state === "suspended") ctx.resume().catch(() => {});
  const master = ctx.createGain();
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass"; lp.frequency.value = 1400;
  master.connect(lp).connect(ctx.destination);
  const now = ctx.currentTime;
  master.gain.setValueAtTime(0, now);
  master.gain.linearRampToValueAtTime(volume, now + 2.5);
  master.gain.setValueAtTime(volume, now + 5.5);
  master.gain.linearRampToValueAtTime(0, now + 8.5);
  const oscs = [196.0, 293.66, 392.0].map((f, i) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = f;
    o.detune.value = (i - 1) * 4;
    g.gain.value = [0.5, 0.32, 0.18][i];
    o.connect(g).connect(master);
    o.start(now);
    o.stop(now + 9);
    return o;
  });
  return {
    bell() {
      const t = ctx.currentTime;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine"; o.frequency.value = 987.77;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(volume * 0.5, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
      o.connect(g).connect(ctx.destination);
      o.start(t); o.stop(t + 2.5);
    },
    stop(fade) {
      const t = ctx.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(master.gain.value, t);
      master.gain.linearRampToValueAtTime(0, t + fade);
      oscs.forEach((o) => { try { o.stop(t + fade + 0.1); } catch { /* already stopped */ } });
      setTimeout(() => ctx.close().catch(() => {}), (fade + 3) * 1000);
    },
  };
}
