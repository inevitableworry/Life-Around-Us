"""Add persistent web touch-overlay preference within original Life Around Us Settings."""
from pathlib import Path
root=Path(r"H:\PS3 Live\Web\public")
options=root/"options.js"
inputjs=root/"adaptive-input.js"
css=root/"android-font.css"
html=root/"index.html"

s=options.read_text(encoding="utf-8")
old='  textSize: { values: [["Small", 0.9], ["Normal", 1], ["Large", 1.15], ["Extra Large", 1.3]],\n    get: () => +(CONFIG.textSize ?? 1), set: (v) => (CONFIG.textSize = v) },'
new='''  textSize: { values: [["Small", 0.9], ["Normal", 1], ["Large", 1.15], ["Extra Large", 1.3]],
    get: () => +(CONFIG.textSize ?? 1), set: (v) => (CONFIG.textSize = v) },
  touchControls: { values: onOff,
    get: () => CONFIG.touchControls !== false,
    set: (enabled) => {
      CONFIG.touchControls = enabled;
      window.dispatchEvent(new CustomEvent("lau:touch-controls-changed", { detail: { enabled } }));
    } },'''
assert s.count(old)==1,s.count(old)
s=s.replace(old,new)
old='''    { label: "Your Name", action: "name" },
    { label: "Theatre Mode", items: [choice("Theatre Mode", "theatre")] },'''
new='''    { label: "Your Name", action: "name" },
    { label: "Touch Controls", items: [choice("Show Touch Controls", "touchControls")] },
    { label: "Theatre Mode", items: [choice("Theatre Mode", "theatre")] },'''
assert s.count(old)==1,s.count(old)
s=s.replace(old,new)
options.write_text(s,encoding="utf-8")

s=inputjs.read_text(encoding="utf-8")
old='''  const touchscreen = native?.hasTouchscreen?.() ?? matchMedia("(pointer:coarse)").matches;
  const root = document.documentElement;
  root.dataset.tv = tv ? "1" : "0";
  root.dataset.touch = touchscreen ? "1" : "0";'''
new='''  // Hybrid laptops, stylus tablets and foldables may report a fine primary
  // pointer. Check any-pointer as well as touch events and touch points.
  const touchQuery = matchMedia("(pointer:coarse), (any-pointer:coarse)");
  const touchscreen = native?.hasTouchscreen?.() ??
    (touchQuery.matches || navigator.maxTouchPoints > 0 || "ontouchstart" in window);
  const root = document.documentElement;
  root.dataset.tv = tv ? "1" : "0";
  root.dataset.touch = touchscreen ? "1" : "0";'''
assert s.count(old)==1,s.count(old)
s=s.replace(old,new)
old='''  const hide = tv || !touchscreen;
  if(hide) {
    controls.hidden=true;
    return;
  }
  let expanded=true;
  const button = document.getElementById("lau-controls-toggle");'''
new='''  // Hide/show is a persistent Settings preference. A hidden overlay stays
  // completely out of the way, while touch drag/pinch on the globe still work.
  // Options > Settings > Touch Controls can restore it at any time.
  let enabled=true;
  try {
    const saved=JSON.parse(localStorage.getItem("lau.options.v1") || "{}");
    enabled=saved.touchControls!==false;
  } catch {}
  const button = document.getElementById("lau-controls-toggle");
  let expanded=true;
  function applyVisibility() {
    controls.hidden=tv || !touchscreen || !enabled;
    root.dataset.touchOverlay=enabled ? "on" : "off";
    if(controls.hidden){
      for(const code of [...down])window.__lauKey(code,false);
    }
  }
  window.addEventListener("lau:touch-controls-changed",(event)=>{
    enabled=event.detail?.enabled!==false;
    applyVisibility();
  });
  applyVisibility();'''
assert s.count(old)==1,s.count(old)
s=s.replace(old,new)
# Existing hide/show button collapses the keypad only, never overrides the
# persisted Settings state.
inputjs.write_text(s,encoding="utf-8")

css_text=css.read_text(encoding="utf-8")
css_text+='''

/* Web-only mobile tuning: safe areas and narrower touch layouts. */
:root { color-scheme: dark; }
.lau-touch-controls { right:max(10px, env(safe-area-inset-right)); }
.lau-touch-controls[hidden],
html[data-touch-overlay="off"] .lau-touch-controls { display:none!important; }
@media (max-width: 540px) {
  .lau-touch-controls .lau-touch-toggle { min-height:44px; }
  .lau-touch-controls .lau-grid { gap:4px; padding:4px; }
  .strip-credits { display:none; }
  .gear { top:max(15px,env(safe-area-inset-top)); }
}
@media (orientation:portrait) and (max-width:540px) {
  .lau-touch-controls { bottom:max(20vh, env(safe-area-inset-bottom)); }
  .lau-touch-controls .lau-grid { grid-template-columns:repeat(4,min(12vw,50px)); }
  .lau-touch-controls .lau-grid button { min-width:44px; min-height:44px; }
  .news-strip { padding-bottom:calc(12px + env(safe-area-inset-bottom)); }
  .brand { right:max(12px,env(safe-area-inset-right)); }
}
@media (hover:hover) and (pointer:fine) and (any-pointer:fine) {
  .lau-touch-controls button:hover { border-color:rgba(232,247,255,.9); }
}
'''
css.write_text(css_text,encoding="utf-8")

# Responsive HTML is already present. Ensure site declares mobile viewport
# and semantic touch navigation, and copy the correct accessible labels.
page=html.read_text(encoding="utf-8")
assert 'viewport-fit=cover' in page
assert 'id="lau-touch-controls"' in page
assert 'id="lau-controls-toggle"' in page
print("Updated Settings menu, persistence, touch detection and responsive styling")
print("options.js",options.stat().st_size,"adaptive-input.js",inputjs.stat().st_size,"CSS",css.stat().st_size)
