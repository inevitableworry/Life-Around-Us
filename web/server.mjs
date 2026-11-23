// Life Around Us public browser host. Bind to localhost; Cloudflare tunnel
// provides HTTPS and routes the external hostname to this local HTTP origin.
import http from "node:http";
import { createReadStream, existsSync, readdirSync, realpathSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import net from "node:net";

const DIR=path.dirname(fileURLToPath(import.meta.url));
const ROOT=realpathSync(path.join(DIR,"public"));
const bind="127.0.0.1";
const flag=process.argv.indexOf("--port");
const PORT=Number(flag>=0?process.argv[flag+1]:18951);
if(!Number.isSafeInteger(PORT)||PORT<1024||PORT>65535)throw Error("Invalid port");
const trusted=new Set(["life.orosapp.us","localhost","127.0.0.1"]);
const types={
".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",
".json":"application/json; charset=utf-8",".xml":"application/xml; charset=utf-8",".svg":"image/svg+xml",
".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".gif":"image/gif",
".ico":"image/x-icon",".mp3":"audio/mpeg",".wav":"audio/wav",".ogg":"audio/ogg",".opus":"audio/ogg",
".flac":"audio/flac",".m4a":"audio/mp4",".mp4":"video/mp4",".ttf":"font/ttf",".woff":"font/woff",
".woff2":"font/woff2",".frag":"text/plain; charset=utf-8",".vert":"text/plain; charset=utf-8",
".r8":"application/octet-stream",".dds":"application/octet-stream",".raw":"application/octet-stream",
".txt":"text/plain; charset=utf-8"
};
const baseHeaders={
"X-Content-Type-Options":"nosniff",
"Referrer-Policy":"strict-origin-when-cross-origin",
"X-Frame-Options":"SAMEORIGIN",
"Permissions-Policy":"camera=(), microphone=(), geolocation=()"
};
function sendJSON(res,code,data){
 res.writeHead(code,{...baseHeaders,"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});
 res.end(JSON.stringify(data));
}
const exact=new Set([
"news.google.com","api.open-meteo.com","api.met.no","get.geojs.io","wheretheiss.at",
"www.youtube.com","webservices.volcano.si.edu","api.gdacs.org","earthquake.usgs.gov",
"eonet.gsfc.nasa.gov","all.api.radio-browser.info","commons.wikimedia.org",
"gibs.earthdata.nasa.gov","services.swpc.noaa.gov"
]);
const suffix=[".wikipedia.org",".wikimedia.org",".nasa.gov",".usgs.gov",".noaa.gov",
".met.no",".gdacs.org",".radio-browser.info",".eumetsat.int",".maps.eox.at"];
function allowedHost(value){
 const host=(value||"").toLowerCase().replace(/\.$/,"");
 if(!host||host==="localhost"||net.isIP(host))return false;
 return exact.has(host)||suffix.some(s=>host.endsWith(s)&&host.length>s.length);
}
function allowedURL(value){
 const u=new URL(String(value));
 if(u.protocol!=="https:"||!allowedHost(u.hostname)||u.username||u.password||u.port)throw Error("Unapproved feed URL");
 return u;
}
const quotas=new Map();let pending=0;
function quotaOK(client){
 const now=Date.now();
 const recent=(quotas.get(client)||[]).filter(t=>now-t<60000);
 if(recent.length>=40){quotas.set(client,recent);return false;}
 recent.push(now);quotas.set(client,recent);
 if(quotas.size>500){for(const [k,a] of quotas)if(a.every(t=>now-t>60000))quotas.delete(k);}
 return true;
}
async function parseBody(req){
 let content="";
 for await(const chunk of req){
   content+=chunk.toString("utf8");
   if(Buffer.byteLength(content)>8192)throw Error("Request too large");
 }
 return JSON.parse(content||"{}");
}
async function allowedFetch(value,referrer){
 let url=allowedURL(value);
 for(let redirects=0;redirects<3;redirects++){
  const headers={"User-Agent":"LifeAroundUs-Web/1.0","Accept":"application/json,text/xml,application/xml,image/*,text/plain,*/*"};
  if(referrer){try{headers.Referer=allowedURL(referrer).origin+"/";}catch{}}
  const response=await fetch(url,{method:"GET",redirect:"manual",headers,signal:AbortSignal.timeout(17000)});
  if(response.status>=300&&response.status<400){
   const target=response.headers.get("location");
   if(!target)throw Error("Feed redirect missing URL");
   url=allowedURL(new URL(target,url).toString());
   continue;
  }
  if(!response.ok)throw Error("Feed HTTP "+response.status);
  const mime=(response.headers.get("content-type")||"text/plain").split(";")[0].trim().toLowerCase();
  const limit=mime.startsWith("image/")?4*1024*1024:3*1024*1024;
  if(Number(response.headers.get("content-length")||0)>limit)throw Error("Feed too large");
  const chunks=[];let bytes=0;
  for await(const chunk of response.body){
   bytes+=chunk.byteLength;
   if(bytes>limit)throw Error("Feed too large");
   chunks.push(Buffer.from(chunk));
  }
  const data=Buffer.concat(chunks);
  const answer={ok:true,status:response.status,finalUrl:url.toString(),
    lastModified:response.headers.get("last-modified")||null};
  if(mime.startsWith("image/"))answer.dataUrl="data:"+mime+";base64,"+data.toString("base64");
  else answer.text=data.toString("utf8");
  return answer;
 }
 throw Error("Too many feed redirects");
}
async function proxy(req,res){
 const origin=req.headers.origin;
 if(origin){
  let u;
  try{u=new URL(origin);}catch{return sendJSON(res,403,{ok:false,error:"Invalid Origin"});}
  if(u.host.toLowerCase()!==String(req.headers.host||"").toLowerCase())return sendJSON(res,403,{ok:false,error:"Cross-origin denied"});
 }
 const client=String(req.headers["cf-connecting-ip"]||req.socket.remoteAddress||"unknown");
 if(!quotaOK(client))return sendJSON(res,429,{ok:false,error:"Feed rate limit"});
 if(pending>=8)return sendJSON(res,503,{ok:false,error:"Feed bridge busy"});
 let message;
 try{message=await parseBody(req);}catch{return sendJSON(res,400,{ok:false,error:"Invalid JSON"});}
 if(!message.url)return sendJSON(res,400,{ok:false,error:"Missing URL"});
 pending++;
 try{sendJSON(res,200,await allowedFetch(message.url,message.referer));}
 catch(e){sendJSON(res,502,{ok:false,error:String(e.message||e).slice(0,220)});}
 finally{pending--;}
}
function serveStatic(req,res,u){
 const input=decodeURIComponent(u.pathname);
 if(input.includes("\0")||input.split(/[\\/]/).includes(".."))return sendJSON(res,403,{error:"Forbidden"});
 const target=path.resolve(ROOT,"."+(input==="/"?"/index.html":input));
 if(target!==ROOT&&!target.startsWith(ROOT+path.sep))return sendJSON(res,403,{error:"Forbidden"});
 let stat;
 try{stat=statSync(target);}catch{return sendJSON(res,404,{error:"Not Found"});}
 if(!stat.isFile())return sendJSON(res,404,{error:"Not Found"});
 const etag='"'+stat.size+'-'+Math.trunc(stat.mtimeMs)+'"';
 const ext=path.extname(target).toLowerCase();
 const headers={...baseHeaders,"Content-Type":types[ext]||"application/octet-stream",
   "Accept-Ranges":"bytes","ETag":etag,"Last-Modified":stat.mtime.toUTCString(),
   "Cache-Control":/\.(?:js|css|html|json)$/.test(ext)?"public,max-age=120":"public,max-age=86400"};
 if(req.headers["if-none-match"]===etag){res.writeHead(304,headers);return res.end();}
 let start=0,end=stat.size-1,code=200;
 const match=/^bytes=(\d+)-(\d*)$/.exec(req.headers.range||"");
 if(match){
  start=Number(match[1]);end=match[2]?Math.min(Number(match[2]),end):end;
  if(start>=stat.size||end<start){
   res.writeHead(416,{...headers,"Content-Range":"bytes */"+stat.size});return res.end();
  }
  code=206;headers["Content-Range"]="bytes "+start+"-"+end+"/"+stat.size;
 }
 headers["Content-Length"]=end-start+1;
 res.writeHead(code,headers);
 if(req.method==="HEAD")return res.end();
 const stream=createReadStream(target,{start,end});
 stream.on("error",()=>res.destroy());
 stream.pipe(res);
}
const server=http.createServer(async(req,res)=>{
 try{
  const host=String(req.headers.host||"").split(":")[0].toLowerCase();
  if(!trusted.has(host))return sendJSON(res,421,{error:"Invalid host"});
  const u=new URL(req.url,"http://"+String(req.headers.host||"localhost"));
  if(u.pathname==="/healthz"&&(req.method==="GET"||req.method==="HEAD"))
    return sendJSON(res,200,{ok:true,service:"Life Around Us Web",version:"1.0"});
  if(u.pathname==="/api/music"&&req.method==="GET"){
    const music=path.join(ROOT,"music");
    const tracks=existsSync(music)?readdirSync(music).filter(x=>/\.(mp3|ogg|flac|m4a|wav)$/i.test(x)).sort().map(x=>"music/"+x):[];
    return sendJSON(res,200,{tracks});
  }
  if(u.pathname==="/api/fetch"&&req.method==="POST")return await proxy(req,res);
  if(req.method!=="GET"&&req.method!=="HEAD")return sendJSON(res,405,{error:"Method not allowed"});
  serveStatic(req,res,u);
 }catch(error){
  console.error("HTTP server",String(error.message||error));
  if(!res.headersSent)sendJSON(res,500,{error:"Server error"});else res.destroy();
 }
});
server.on("clientError",(_err,socket)=>socket.end("HTTP/1.1 400 Bad Request\r\n\r\n"));
server.listen(PORT,bind,()=>console.log("Life Around Us Web ready at http://"+bind+":"+PORT+"/"));
