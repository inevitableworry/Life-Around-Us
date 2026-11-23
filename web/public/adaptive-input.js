/* Android native input bridge for touch, D-pad remotes, and hardware gamepads. */
(function() {
  "use strict";
  const native = window.AndroidHost;
  const tv = !!native?.isTelevision?.() || /Tizen|SMART-TV|SamsungBrowser\/TV/i.test(navigator.userAgent) || new URLSearchParams(location.search).get("platform") === "tizen";
  // Hybrid laptops, stylus tablets and foldables may report a fine primary
  // pointer. Check any-pointer as well as touch events and touch points.
  const touchQuery = matchMedia("(pointer:coarse), (any-pointer:coarse)");
  const touchscreen = native?.hasTouchscreen?.() ??
    (touchQuery.matches || navigator.maxTouchPoints > 0 || "ontouchstart" in window);
  const root = document.documentElement;
  root.dataset.tv = tv ? "1" : "0";
  root.dataset.touch = touchscreen ? "1" : "0";
  const keys = {
    ArrowLeft:["ArrowLeft","ArrowLeft"],ArrowRight:["ArrowRight","ArrowRight"],
    ArrowUp:["ArrowUp","ArrowUp"],ArrowDown:["ArrowDown","ArrowDown"],
    Enter:["Enter","Enter"],Escape:["Escape","Escape"],
    KeyO:["o","KeyO"],KeyV:["v","KeyV"],KeyQ:["q","KeyQ"],KeyE:["e","KeyE"],
    KeyW:["w","KeyW"],KeyA:["a","KeyA"],KeyS:["s","KeyS"],KeyD:["d","KeyD"],
    Equal:["+","Equal"],Minus:["-","Minus"],KeyM:["m","KeyM"]
  };
  const down = new Set();
  window.__lauKey = function(code, pressed) {
    if (!(code in keys)) return false;
    if (pressed && down.has(code)) return true;
    if (!pressed && !down.has(code)) return true;
    if (pressed) down.add(code); else down.delete(code);
    const [key,keyboardCode] = keys[code];
    const e = new KeyboardEvent(pressed?"keydown":"keyup", {
      key,code:keyboardCode,bubbles:true,cancelable:true,repeat:false
    });
    window.dispatchEvent(e);
    return true;
  };
  window.addEventListener("blur", () => {
    for(const code of [...down]) window.__lauKey(code,false);
  });
  const controls = document.getElementById("lau-touch-controls");
  if(!controls) return;
  // Hide/show is a persistent Settings preference. A hidden overlay stays
  // completely out of the way, while touch drag/pinch on the globe still work.
  // Options > Settings > Touch Controls can restore it at any time.
  let enabled=false;
  try {
    const saved=JSON.parse(localStorage.getItem("lau.options.v1") || "{}");
    enabled=saved.touchControls===true;
  } catch {}
  const button = document.getElementById("lau-controls-toggle");
  let expanded=true;
  function applyVisibility() {
    controls.hidden=tv || !touchscreen || !enabled;
    root.dataset.touchOverlay=(enabled && !tv) ? "on" : "off";
    if(controls.hidden){
      for(const code of [...down])window.__lauKey(code,false);
    }
  }
  window.addEventListener("lau:touch-controls-changed",(event)=>{
    enabled=event.detail?.enabled!==false;
    applyVisibility();
  });
  applyVisibility();
  function setExpanded(v) {
    expanded=!!v;
    controls.classList.toggle("lau-collapsed",!expanded);
    button.setAttribute("aria-expanded",String(expanded));
    button.textContent=expanded?"Hide controls":"Touch controls";
  }
  setExpanded(true);
  button.addEventListener("click",e => {
    e.stopPropagation();setExpanded(!expanded);
  });
  const activePointers = new Map();
  for(const control of controls.querySelectorAll("[data-key]")) {
    const code=control.dataset.key;
    const release=(e)=>{
      if(!activePointers.has(e.pointerId))return;
      activePointers.delete(e.pointerId);
      window.__lauKey(code,false);
      control.classList.remove("pressed");
      try{control.releasePointerCapture(e.pointerId);}catch(err){}
      e.stopPropagation();
      e.preventDefault();
    };
    control.addEventListener("pointerdown",e=>{
      e.preventDefault();
      e.stopPropagation();
      if(activePointers.size && activePointers.has(e.pointerId))return;
      activePointers.set(e.pointerId,code);
      window.__lauKey(code,true);
      control.classList.add("pressed");
      try{control.setPointerCapture(e.pointerId);}catch(err){}
    });
    control.addEventListener("pointerup",release);
    control.addEventListener("pointercancel",release);
    control.addEventListener("lostpointercapture",release);
    control.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();});
  }
  // Two-finger pinch on the globe emits zoom keys. One-finger drags stay owned by
  // the original WebGL application's pointer-driven rotation code.
  const globe=document.getElementById("globe");
  if(globe) {
    const fingers=new Map();
    let previousDistance=0;
    const distance=()=>{
      const pts=[...fingers.values()];
      if(pts.length!==2)return 0;
      return Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y);
    };
    globe.addEventListener("pointerdown",e=>{
      if(e.pointerType!=="touch")return;
      fingers.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(fingers.size===2)previousDistance=distance();
    },{passive:true});
    globe.addEventListener("pointermove",e=>{
      if(!fingers.has(e.pointerId))return;
      fingers.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(fingers.size!==2)return;
      const next=distance(),delta=next-previousDistance;
      if(Math.abs(delta)<28)return;
      const code=delta>0?"Equal":"Minus";
      window.__lauKey(code,true);
      window.__lauKey(code,false);
      previousDistance=next;
    },{passive:true});
    const remove=e=>{
      fingers.delete(e.pointerId);
      if(fingers.size!==2)previousDistance=0;
    };
    globe.addEventListener("pointerup",remove);
    globe.addEventListener("pointercancel",remove);
  }
})();
