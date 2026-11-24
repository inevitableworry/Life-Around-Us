/* Samsung TV Web Runtime input mapping. This script is inert on other browsers. */
(function(){
  'use strict';
  const params=new URLSearchParams(location.search);
  const tizenDevice=Boolean(window.tizen?.tvinputdevice) || /Tizen|SMART-TV/i.test(navigator.userAgent) || params.get('platform')==='tizen';
  if(!tizenDevice) return;
  document.documentElement.dataset.tv='1';
  document.documentElement.dataset.touchOverlay='off';
  const existing=document.getElementById('lau-touch-controls');
  if(existing) existing.hidden=true;
  // Request only navigation keys supported by the Samsung TV runtime.
  for(const name of ['ColorF0Red','ColorF1Green','ColorF2Yellow','ColorF3Blue','MediaPlayPause']){
    try{window.tizen?.tvinputdevice?.registerKey(name);}catch(_){}
  }
  // Audio startup can occur after the first input because Earth imagery loads
  // asynchronously. A subsequent genuine remote press can retry playback
  // within the browser's user-activation window.
  function activateSound() {
    const player=window.__music;
    if(player && player.audio && player.audio.paused && typeof player.resume==='function') player.resume();
    const wave=window.__wave;
    if(wave && wave.paused && typeof wave.applyOptions==='function') wave.applyOptions();
    const globe=window.__globe;
    const bank=globe && globe.lwp && globe.lwp.sfx;
    if(bank) {
      if(bank.ctx && bank.ctx.state==='suspended') bank.ctx.resume().catch(()=>{});
      if(!window.__lauTvSoundPrimed && globe.config && globe.config.sfx && globe.config.sfx.enabled !== false && bank.slots && bank.slots.size) {
        window.__lauTvSoundPrimed=true;
        bank.play(0);
      }
    }
  }
  const keymap={37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',13:'Enter',
    10009:'Escape',8:'Escape',10182:'Escape',403:'KeyQ',404:'KeyE',405:'Minus',406:'Equal',
    10252:'KeyO',415:'KeyO'};
  document.addEventListener('keydown',function(event){
    if(event.repeat)return;
    const mapped=keymap[event.keyCode];
    if(!mapped)return;
    // Run before preventDefault / synthetic forwarding. Samsung's real key
    // event is the browser's trusted audio-unlock gesture.
    if(event.isTrusted !== false) activateSound();
    event.preventDefault();event.stopImmediatePropagation();
    if(typeof window.__lauKey==='function'){
      window.__lauKey(mapped,true);
      setTimeout(()=>window.__lauKey(mapped,false),95);
    }
  },true);
  document.addEventListener('contextmenu',e=>e.preventDefault());
})();
