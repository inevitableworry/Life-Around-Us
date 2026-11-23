/* Web browser shell bridge for the original Windows Three.js client. */
(()=>{
 "use strict";
 // Give public visitors a neutral default, so the first-run desktop name
 // dialog never blocks touch devices without a physical keyboard.
 try{
   if(!localStorage.getItem("lau.viewer-name"))
     localStorage.setItem("lau.viewer-name","Explorer");
 }catch{}
 const listeners=new Set();
 function send(data){
  for(const callback of listeners){
    try{callback({data});}catch(error){console.error("Life bridge callback",error);}
  }
 }
 const bridge={
  addEventListener(type,callback){if(type==="message"&&typeof callback==="function")listeners.add(callback);},
  removeEventListener(type,callback){if(type==="message")listeners.delete(callback);},
  async postMessage(data){
   if(!data||typeof data!=="object")return;
   if(data.cmd==="fetch"||data.cmd==="icy"){
    if(data.cmd==="icy"){send({cmd:"icyResult",id:data.id,ok:true,title:""});return;}
    try{
     const r=await fetch("/api/fetch",{method:"POST",headers:{"Content-Type":"application/json"},
       body:JSON.stringify({url:data.url,referer:data.referer||""}),cache:"no-store"});
     const reply=await r.json();
     send({cmd:"fetchResult",id:data.id,...reply});
    }catch(e){send({cmd:"fetchResult",id:data.id,ok:false,error:String(e)});}
   }else if(data.cmd==="getMusic"){
    try{
     const r=await fetch("/api/music",{cache:"no-store"});
     const music=await r.json();
     send({type:"music",tracks:music.tracks||[],mine:[],mineNames:[]});
    }catch{send({type:"music",tracks:[],mine:[],mineNames:[]});}
   }else if(data.cmd==="getOnDemand"){
    send({type:"onDemand",cover:"",tracks:[]});
   }else if(data.cmd==="toggleFullscreen"){
    try{
     if(document.fullscreenElement)await document.exitFullscreen();
     else await document.documentElement.requestFullscreen();
    }catch{}
   }else if(data.cmd==="rumble"){
    if(navigator.vibrate)navigator.vibrate(Math.min(500,Math.max(10,data.ms||80)));
   }
  }
 };
 window.chrome=window.chrome||{};
 if(!window.chrome.webview)window.chrome.webview=bridge;
})();
