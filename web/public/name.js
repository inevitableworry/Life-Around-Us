// The name screen: after the splash and before the opening on the first run
// (and again from Options > Settings > Your Name). The name replaces "Your
// Clinic Name" in the top-left header and is remembered on this PC.
// Enter saves it; Esc skips (the header keeps its current name).
const KEY = "lau.viewer-name";

export function savedName() {
  try { return (localStorage.getItem(KEY) || "").trim(); } catch { return ""; }
}

let busy = null;
export function askName({ overGlobe = false } = {}) {
  if (busy) return busy;
  const el = document.createElement("div");
  el.className = "name-screen" + (overGlobe ? " over-globe" : "");
  el.innerHTML = `
    <div class="name-card">
      <div class="clinic-mark"></div>
      <h2>What's your name?</h2>
      <p>It will be shown in the top-left corner.</p>
      <input type="text" maxlength="32" spellcheck="false" autocomplete="off" placeholder="Type your name">
      <small>Press Enter to continue · Esc to skip</small>
    </div>`;
  document.body.appendChild(el);
  const input = el.querySelector("input"), mark = el.querySelector(".clinic-mark");
  input.value = savedName();
  const paint = () => { mark.textContent = (input.value.trim() || "?").charAt(0).toUpperCase(); };
  paint();
  input.addEventListener("input", paint);
  requestAnimationFrame(() => { el.classList.add("on"); input.focus(); });
  const keepFocus = () => setTimeout(() => input.focus(), 0);
  input.addEventListener("blur", keepFocus);
  busy = new Promise((resolve) => {
    const done = (name) => {
      input.removeEventListener("blur", keepFocus);
      if (name) { try { localStorage.setItem(KEY, name); } catch { /* full */ } }
      el.classList.remove("on");
      setTimeout(() => el.remove(), 450);
      busy = null;
      resolve(name || null);
    };
    // Keys stay with the name box: the globe, the options menu and the
    // opening's "any key skips" never see them (F11 / Alt+Enter still do).
    input.addEventListener("keydown", (e) => {
      if (e.key === "F11" || (e.altKey && e.key === "Enter")) return;
      e.stopPropagation();
      if (e.key === "Enter") { e.preventDefault(); done(input.value.trim()); }
      else if (e.key === "Escape") { e.preventDefault(); done(null); }
    });
    el.addEventListener("pointerdown", (e) => e.stopPropagation());
  });
  return busy;
}
