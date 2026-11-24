/** Cloudflare Worker edge runtime for Life Around Us.
 * GitHub-backed static resources; no dependency on a user desktop or tunnel.
 * Only approved external weather/news services may be fetched.
 */
const exact = new Set([
  'news.google.com','api.open-meteo.com','api.met.no','get.geojs.io','wheretheiss.at',
  'www.youtube.com','webservices.volcano.si.edu','api.gdacs.org','earthquake.usgs.gov',
  'eonet.gsfc.nasa.gov','all.api.radio-browser.info','commons.wikimedia.org',
  'gibs.earthdata.nasa.gov','services.swpc.noaa.gov'
]);
const suffixes=['.wikipedia.org','.wikimedia.org','.nasa.gov','.usgs.gov','.noaa.gov',
  '.met.no','.gdacs.org','.radio-browser.info','.eumetsat.int','.maps.eox.at'];
const origins=new Set(['https://life.orosapp.us']);
const baseHeaders={
  'X-Content-Type-Options':'nosniff',
  'Referrer-Policy':'strict-origin-when-cross-origin',
  'X-Frame-Options':'SAMEORIGIN',
  'Permissions-Policy':'camera=(), microphone=(), geolocation=()'
};
const rate=new Map();let pending=0;
function json(code,object){return new Response(JSON.stringify(object),{status:code,headers:{...baseHeaders,'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}})}
function allow(url){
  const target=new URL(String(url));
  const h=target.hostname.toLowerCase().replace(/\.$/,'');
  if(target.protocol!=='https:'||target.port||target.username||target.password||target.hash||
     /^\d+\.\d+\.\d+\.\d+$/.test(h)||h==='localhost'||h.includes(':')||
     !(exact.has(h)||suffixes.some(s=>h.endsWith(s)&&h.length>s.length)))
      throw new Error('Unapproved feed URL');
  return target;
}
function quota(ip){
  // Isolate-local extra backpressure. Use Cloudflare WAF rules for global limits.
  const now=Date.now();let values=(rate.get(ip)||[]).filter(t=>now-t<60000);
  if(values.length>=40){rate.set(ip,values);return false;}
  values.push(now);rate.set(ip,values);
  if(rate.size>400)for(const [k,v] of rate)if(v.every(t=>now-t>60000))rate.delete(k);
  return true;
}
async function boundedBody(request){
  if(Number(request.headers.get('content-length')||0)>8192)throw new Error('Request too large');
  const buffer=await request.arrayBuffer();if(buffer.byteLength>8192)throw new Error('Request too large');
  return JSON.parse(new TextDecoder().decode(buffer)||'{}');
}
async function remoteFeed(value,referrer){
  let url=allow(value);
  for(let attempt=0;attempt<3;attempt++){
    const headers={'User-Agent':'LifeAroundUs-Web/1.0','Accept':'application/json,text/xml,application/xml,image/*,text/plain,*/*'};
    if(referrer){try{headers.Referer=allow(referrer).origin+'/';}catch{}}
    const result=await fetch(url.toString(),{method:'GET',redirect:'manual',headers,signal:AbortSignal.timeout(17000)});
    if(result.status>=300&&result.status<400){
      const next=result.headers.get('location');if(!next)throw new Error('Feed redirect missing URL');
      url=allow(new URL(next,url).toString());continue;
    }
    if(!result.ok)throw new Error('Feed HTTP '+result.status);
    const mime=(result.headers.get('content-type')||'text/plain').split(';')[0].trim().toLowerCase();
    const max=mime.startsWith('image/')?4*1024*1024:3*1024*1024;
    if(Number(result.headers.get('content-length')||0)>max)throw new Error('Feed too large');
    const chunks=[];let size=0;
    for await(const chunk of result.body){size+=chunk.byteLength;if(size>max)throw new Error('Feed too large');chunks.push(chunk)}
    const bytes=new Uint8Array(size);let offset=0;
    for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength;}
    const out={ok:true,status:result.status,finalUrl:url.toString(),lastModified:result.headers.get('last-modified')||null};
    if(mime.startsWith('image/')){
      let encoded='';for(let i=0;i<bytes.length;i+=0x8000)encoded+=String.fromCharCode(...bytes.subarray(i,i+0x8000));
      out.dataUrl='data:'+mime+';base64,'+btoa(encoded);
    }else out.text=new TextDecoder().decode(bytes);
    return out;
  }
  throw new Error('Too many feed redirects');
}
async function feed(request){
  const origin=request.headers.get('origin');
  if(origin&&origin!==new URL(request.url).origin&&!origins.has(origin))return json(403,{ok:false,error:'Cross-origin denied'});
  const ip=request.headers.get('cf-connecting-ip')||'unknown';
  if(!quota(ip))return json(429,{ok:false,error:'Feed rate limit'});
  if(pending>=8)return json(503,{ok:false,error:'Feed bridge busy'});
  let payload;
  try{payload=await boundedBody(request);}catch{return json(400,{ok:false,error:'Invalid JSON or excessive size'});}
  if(!payload.url)return json(400,{ok:false,error:'Missing URL'});
  pending++;
  try{return json(200,await remoteFeed(payload.url,payload.referer));}
  catch(err){return json(502,{ok:false,error:String(err.message||err).slice(0,210)});}
  finally{pending--;}
}
async function nightTexture(request,env){
  // A 32MB R8 texture was split into two <25MB static assets for Workers.
  const url=new URL(request.url);
  const urls=[1,2].map(x=>new URL('/assets/earth/night8k.r8.part'+x,url));
  const responses=[];
  for(const target of urls){const response=await env.ASSETS.fetch(new Request(target,request));
    if(!response.ok)return json(502,{error:'Missing cloud texture asset'});
    responses.push(response);
  }
  const stream=new ReadableStream({async start(controller){
    try{for(const response of responses){for await(const chunk of response.body)controller.enqueue(chunk);}controller.close();}
    catch(error){controller.error(error);}
  }});
  return new Response(request.method==='HEAD'?null:stream,{headers:{...baseHeaders,'Content-Type':'application/octet-stream',
    'Content-Length':'33554448','Cache-Control':'public, max-age=86400'}});
}
const music=['Music1.mp3','Music2.mp3','Music3.mp3','Music4.mp3','Music5.mp3','Music6.mp3','Music7.mp3'];
export default {
  async fetch(request,env){
    const url=new URL(request.url);
    if(url.pathname==='/healthz'&&(request.method==='GET'||request.method==='HEAD'))
      return json(200,{ok:true,service:'Life Around Us Cloudflare Worker',deployment:'cloud',backend:'edge'});
    if(url.pathname==='/api/music'&&request.method==='GET')
      return json(200,{tracks:music.map(f=>'music/'+f)});
    if(url.pathname==='/api/fetch'&&request.method==='POST')return feed(request);
    if(url.pathname==='/assets/earth/night8k.r8'&&['GET','HEAD'].includes(request.method))return nightTexture(request,env);
    if(!['GET','HEAD'].includes(request.method))return json(405,{error:'Method not allowed'});
    if(url.pathname.startsWith('/api/'))return json(404,{error:'Not Found'});
    const asset=await env.ASSETS.fetch(request);
    const headers=new Headers(asset.headers);
    for(const [k,v] of Object.entries(baseHeaders))headers.set(k,v);
    return new Response(asset.body,{status:asset.status,statusText:asset.statusText,headers});
  }
};
