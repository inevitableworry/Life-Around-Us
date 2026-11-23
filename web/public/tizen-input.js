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
  const keymap={37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',13:'Enter',
    10009:'Escape',8:'Escape',10182:'Escape',403:'KeyQ',404:'KeyE',405:'Minus',406:'Equal',
    10252:'KeyO',415:'KeyO'};
  document.addEventListener('keydown',function(event){
    if(event.repeat)return;
    const mapped=keymap[event.keyCode];
    if(!mapped)return;
    event.preventDefault();event.stopImmediatePropagation();
    if(typeof window.__lauKey==='function'){
      window.__lauKey(mapped,true);
      setTimeout(()=>window.__lauKey(mapped,false),95);
    }
  },true);
  document.addEventListener('contextmenu',e=>e.preventDefault());
})();
