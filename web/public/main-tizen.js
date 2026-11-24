var us=0,il=1,ds=2;var zi=2;var On=5,Mt=100,B0=101,H0=102;var Bi=200,Rt=201,V0=202,G0=203,fr=204,$n=205,W0=206,j0=207,q0=208,X0=209,Y0=210,K0=211,$0=212,Z0=213,J0=214,Q0=0,ev=1,tv=2,nv=3,iv=4,rv=5,av=6,sv=7;var cm=4;var hm=300,na=301,ia=302,Oc=303,Fc=304,rl=306,Zn=1e3,gr=1001,kc=1002,Gt=1003,ov=1004;var qs=1005;var st=1006,nc=1007;var Yn=1008;var hn=1009,um=1010,dm=1011,Qa=1012,hu=1013,vr=1014,gi=1015,ps=1016,uu=1017,du=1018,ra=1020,pm=35902,mm=1021,fm=1022,Zt=1023,gm=1024,vm=1025,es=1026,aa=1027,Hi=1028,pu=1029,ym=1030,mu=1031;var fu=1033,Jr=33776,To=33777,Ao=33778,Ro=33779,zc=35840,Bc=35841,Hc=35842,Vc=35843,Gc=36196,Wc=37492,jc=37496,qc=37808,Xc=37809,Yc=37810,Kc=37811,$c=37812,Zc=37813,Jc=37814,Qc=37815,eh=37816,th=37817,nh=37818,ih=37819,rh=37820,ah=37821,Co=36492,sh=36494,oh=36495,xm=36283,lh=36284,ch=36285,hh=36286;var Lo=2300,uh=2301,ic=2302,ip=2400,rp=2401,ap=2402;var vn="",Et="srgb",fa="srgb-linear",al="linear",rt="srgb";var Dr=7680;var lv=512,cv=513,hv=514,uv=515,dv=516,pv=517,mv=518,fv=519,dh=35044;var sp="300 es",sa=2e3,Po=2001,Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],op=1234567,Qr=Math.PI/180,ts=180/Math.PI;function Kn(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ht[255&n]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[255&e]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[63&t|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[255&i]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function ph(n,e){return(n%e+e)%e}function Ka(n,e,t){return(1-t)*n+t*e}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var Ut={DEG2RAD:Qr,RAD2DEG:ts,generateUUID:Kn,clamp:Ft,euclideanModulo:ph,mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:Ka,damp:function(n,e,t,i){return Ka(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(ph(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(op=n);let e=op+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*Qr},radToDeg:function(n){return n*ts},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),h=s((e+i)/2),u=a((e-i)/2),d=s((e-i)/2),p=a((i-e)/2),m=s((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*m,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*m,o*c);break;case"ZYZ":n.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:it,denormalize:Un},ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class n{constructor(e,t,i,r,a,s,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],m=i[8],g=r[0],f=r[3],y=r[6],x=r[1],v=r[4],_=r[7],w=r[2],M=r[5],R=r[8];return a[0]=s*g+o*x+l*w,a[3]=s*f+o*v+l*M,a[6]=s*y+o*_+l*R,a[1]=c*g+h*x+u*w,a[4]=c*f+h*v+u*M,a[7]=c*y+h*_+u*R,a[2]=d*g+p*x+m*w,a[5]=d*f+p*v+m*M,a[8]=d*y+p*_+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+r*a*c-r*s*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,d=o*l-h*a,p=c*a-s*l,m=t*u+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=u*g,e[1]=(r*c-h*i)*g,e[2]=(o*i-r*s)*g,e[3]=d*g,e[4]=(h*t-r*l)*g,e[5]=(r*a-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(s*t-i*a)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(rc.makeScale(e,t)),this}rotate(e){return this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rc=new De;function _m(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ns(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gv(){let n=ns("canvas");return n.style.display="block",n}var lp={};function Ya(n){n in lp||(lp[n]=!0,console.warn(n))}var Ye={enabled:!0,workingColorSpace:fa,spaces:{},convert:function(n,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===rt&&(n.r=vi(n.r),n.g=vi(n.g),n.b=vi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(n.r=ea(n.r),n.g=ea(n.g),n.b=ea(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===vn?al:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function vi(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function ea(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var cp=[.64,.33,.3,.6,.15,.06],hp=[.2126,.7152,.0722],up=[.3127,.329],dp=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pp=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Ur;Ye.define({[fa]:{primaries:cp,whitePoint:up,transfer:al,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:hp,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:cp,whitePoint:up,transfer:rt,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:hp,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}});var mh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ur===void 0&&(Ur=ns("canvas")),Ur.width=e.width,Ur.height=e.height;let i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ns("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=255*vi(a[s]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*vi(t[i]/255)):t[i]=vi(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vv=0,Io=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(ac(r[s].image)):a.push(ac(r[s]))}else a=ac(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function ac(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yv=0,Pt=class n extends Oi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,a=1006,s=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Kn(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pt.DEFAULT_IMAGE=null,Pt.DEFAULT_MAPPING=hm,Pt.DEFAULT_ANISOTROPY=1;var qe=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],g=l[2],f=l[6],y=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+f)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(p+1)/2,w=(y+1)/2,M=(h+d)/4,R=(u+g)/4,D=(m+f)/4;return v>_&&v>w?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=M/i,a=R/i):_>w?_<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(_),i=M/r,a=D/r):w<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(w),i=R/a,r=D/a),this.set(i,r,a,t),this}let x=Math.sqrt((f-m)*(f-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(f-m)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fh=class extends Oi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:st,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Io(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends fh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Do=class extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var is=class extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=a[s+0],p=a[s+1],m=a[s+2],g=a[s+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=g);if(u!==g||l!==d||c!==p||h!==m){let f=1-o,y=l*d+c*p+h*m+u*g,x=y>=0?1:-1,v=1-y*y;if(v>Number.EPSILON){let w=Math.sqrt(v),M=Math.atan2(w,y*x);f=Math.sin(f*M)/w,o=Math.sin(o*M)/w}let _=o*x;if(l=l*f+d*_,c=c*f+p*_,h=h*f+m*_,u=u*f+g*_,f===1-o){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,s){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=a[s],d=a[s+1],p=a[s+2],m=a[s+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(a/2),d=l(i/2),p=l(r/2),m=l(a/2);switch(s){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-r*o,this._w=s*h-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,s=this._w,o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),h=2*(o*t-a*r),u=2*(a*i-s*t);return this.x=t+l*c+s*u-o*h,this.y=i+l*h+o*c-a*u,this.z=r+l*u+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sc=new S,mp=new Jn,Qn=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Pn):Pn.fromBufferAttribute(a,s),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xs.copy(i.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),Ys.subVectors(this.max,za),Nr.subVectors(e.a,za),Or.subVectors(e.b,za),Fr.subVectors(e.c,za),Ci.subVectors(Or,Nr),Li.subVectors(Fr,Or),sr.subVectors(Nr,Fr);let t=[0,-Ci.z,Ci.y,0,-Li.z,Li.y,0,-sr.z,sr.y,Ci.z,0,-Ci.x,Li.z,0,-Li.x,sr.z,0,-sr.x,-Ci.y,Ci.x,0,-Li.y,Li.x,0,-sr.y,sr.x,0];return!!oc(t,Nr,Or,Fr,Ys)&&(t=[1,0,0,0,1,0,0,0,1],!!oc(t,Nr,Or,Fr,Ys)&&(Ks.crossVectors(Ci,Li),t=[Ks.x,Ks.y,Ks.z],oc(t,Nr,Or,Fr,Ys)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Pn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ci=[new S,new S,new S,new S,new S,new S,new S,new S],Pn=new S,Xs=new Qn,Nr=new S,Or=new S,Fr=new S,Ci=new S,Li=new S,sr=new S,za=new S,Ys=new S,Ks=new S,or=new S;function oc(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){or.fromArray(n,a);let o=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=t.dot(or),h=i.dot(or);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var xv=new Qn,Ba=new S,lc=new S,nn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):xv.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);let t=Ba.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(Ba,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(lc)),this.expandByPoint(Ba.copy(e.center).sub(lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new S,cc=new S,$s=new S,Pi=new S,hc=new S,Zs=new S,uc=new S,oa=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){cc.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(cc);let a=.5*e.distanceTo(t),s=-this.direction.dot($s),o=Pi.dot(this.direction),l=-Pi.dot($s),c=Pi.lengthSq(),h=Math.abs(1-s*s),u,d,p,m;if(h>0)if(u=s*l-o,d=s*o-l,m=a*h,u>=0)if(d>=-m)if(d<=m){let g=1/h;u*=g,d*=g,p=u*(u+s*d+2*o)+d*(s*u+d+2*l)+c}else d=a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-s*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(u=Math.max(0,-(s*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c);else d=s>0?-a:a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(cc).addScaledVector($s,d),p}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),r=hi.dot(hi)-i*i,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||a>r?null:((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,r,a){hc.subVectors(t,e),Zs.subVectors(i,e),uc.crossVectors(hc,Zs);let s,o=this.direction.dot(uc);if(o>0){if(r)return null;s=1}else{if(!(o<0))return null;s=-1,o=-o}Pi.subVectors(this.origin,e);let l=s*this.direction.dot(Zs.crossVectors(Pi,Zs));if(l<0)return null;let c=s*this.direction.dot(hc.cross(Pi));if(c<0||l+c>o)return null;let h=-s*Pi.dot(uc);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class n{constructor(e,t,i,r,a,s,o,l,c,h,u,d,p,m,g,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,h,u,d,p,m,g,f)}set(e,t,i,r,a,s,o,l,c,h,u,d,p,m,g,f){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=r,y[1]=a,y[5]=s,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=d,y[3]=p,y[7]=m,y[11]=g,y[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),a=1/kr.setFromMatrixColumn(e,1).length(),s=1/kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){let d=s*h,p=s*u,m=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=m+p*c,t[10]=s*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,g=c*u;t[0]=d+g*o,t[4]=m*o-p,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-m,t[6]=g+d*o,t[10]=s*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,g=c*u;t[0]=d-g*o,t[4]=-s*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=s*h,t[9]=g-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){let d=s*h,p=s*u,m=o*h,g=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){let d=s*l,p=s*c,m=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=m*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-g*u}else if(e.order==="XZY"){let d=s*l,p=s*c,m=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=s*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_v,e,Mv)}lookAt(e,t,i){let r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Ii.crossVectors(i,on),Ii.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ii.crossVectors(i,on)),Ii.normalize(),Js.crossVectors(on,Ii),r[0]=Ii.x,r[4]=Js.x,r[8]=on.x,r[1]=Ii.y,r[5]=Js.y,r[9]=on.y,r[2]=Ii.z,r[6]=Js.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],m=i[2],g=i[6],f=i[10],y=i[14],x=i[3],v=i[7],_=i[11],w=i[15],M=r[0],R=r[4],D=r[8],A=r[12],U=r[1],I=r[5],L=r[9],H=r[13],B=r[2],Z=r[6],X=r[10],j=r[14],J=r[3],pe=r[7],ve=r[11],ee=r[15];return a[0]=s*M+o*U+l*B+c*J,a[4]=s*R+o*I+l*Z+c*pe,a[8]=s*D+o*L+l*X+c*ve,a[12]=s*A+o*H+l*j+c*ee,a[1]=h*M+u*U+d*B+p*J,a[5]=h*R+u*I+d*Z+p*pe,a[9]=h*D+u*L+d*X+p*ve,a[13]=h*A+u*H+d*j+p*ee,a[2]=m*M+g*U+f*B+y*J,a[6]=m*R+g*I+f*Z+y*pe,a[10]=m*D+g*L+f*X+y*ve,a[14]=m*A+g*H+f*j+y*ee,a[3]=x*M+v*U+_*B+w*J,a[7]=x*R+v*I+_*Z+w*pe,a[11]=x*D+v*L+_*X+w*ve,a[15]=x*A+v*H+_*j+w*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+a*l*u-r*c*u-a*o*d+i*c*d+r*o*p-i*l*p)+e[7]*(+t*l*p-t*c*d+a*s*d-r*s*p+r*c*h-a*l*h)+e[11]*(+t*c*u-t*o*p-a*s*u+i*s*p+a*o*h-i*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*s*u-i*s*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],g=e[13],f=e[14],y=e[15],x=u*f*c-g*d*c+g*l*p-o*f*p-u*l*y+o*d*y,v=m*d*c-h*f*c-m*l*p+s*f*p+h*l*y-s*d*y,_=h*g*c-m*u*c+m*o*p-s*g*p-h*o*y+s*u*y,w=m*u*l-h*g*l-m*o*d+s*g*d+h*o*f-s*u*f,M=t*x+i*v+r*_+a*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/M;return e[0]=x*R,e[1]=(g*d*a-u*f*a-g*r*p+i*f*p+u*r*y-i*d*y)*R,e[2]=(o*f*a-g*l*a+g*r*c-i*f*c-o*r*y+i*l*y)*R,e[3]=(u*l*a-o*d*a-u*r*c+i*d*c+o*r*p-i*l*p)*R,e[4]=v*R,e[5]=(h*f*a-m*d*a+m*r*p-t*f*p-h*r*y+t*d*y)*R,e[6]=(m*l*a-s*f*a-m*r*c+t*f*c+s*r*y-t*l*y)*R,e[7]=(s*d*a-h*l*a+h*r*c-t*d*c-s*r*p+t*l*p)*R,e[8]=_*R,e[9]=(m*u*a-h*g*a-m*i*p+t*g*p+h*i*y-t*u*y)*R,e[10]=(s*g*a-m*o*a+m*i*c-t*g*c-s*i*y+t*o*y)*R,e[11]=(h*o*a-s*u*a-h*i*c+t*u*c+s*i*p-t*o*p)*R,e[12]=w*R,e[13]=(h*g*r-m*u*r+m*i*d-t*g*d-h*i*f+t*u*f)*R,e[14]=(m*o*r-s*g*r-m*i*l+t*g*l+s*i*f-t*o*f)*R,e[15]=(s*u*r-h*o*r+h*i*l-t*u*l-s*i*d+t*o*d)*R,this}scale(e){let t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,u=o+o,d=a*c,p=a*h,m=a*u,g=s*h,f=s*u,y=o*u,x=l*c,v=l*h,_=l*u,w=i.x,M=i.y,R=i.z;return r[0]=(1-(g+y))*w,r[1]=(p+_)*w,r[2]=(m-v)*w,r[3]=0,r[4]=(p-_)*M,r[5]=(1-(d+y))*M,r[6]=(f+x)*M,r[7]=0,r[8]=(m+v)*R,r[9]=(f-x)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,a=kr.set(r[0],r[1],r[2]).length(),s=kr.set(r[4],r[5],r[6]).length(),o=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);let l=1/a,c=1/s,h=1/o;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=c,In.elements[5]*=c,In.elements[6]*=c,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=2e3){let l=this.elements,c=2*a/(t-e),h=2*a/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),p,m;if(o===sa)p=-(s+a)/(s-a),m=-2*s*a/(s-a);else{if(o!==Po)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-s/(s-a),m=-s*a/(s-a)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(s-a),d=(t+e)*c,p=(i+r)*h,m,g;if(o===sa)m=(s+a)*u,g=-2*u;else{if(o!==Po)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=a*u,g=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},kr=new S,In=new Ue,_v=new S(0,0,0),Mv=new S(1,1,1),Ii=new S,Js=new S,on=new S,fp=new Ue,gp=new Jn,yi=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gp.setFromEuler(this),this.setFromQuaternion(gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";var Uo=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},wv=0,vp=new S,zr=new Jn,ui=new Ue,Qs=new S,Ha=new S,Sv=new S,bv=new Jn,yp=new S(1,0,0),xp=new S(0,1,0),_p=new S(0,0,1),Mp={type:"added"},Ev={type:"removed"},Br={type:"childadded",child:null},dc={type:"childremoved",child:null},cn=class n extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new S,t=new yi,i=new Jn,r=new S(1,1,1);t._onChange((function(){i.setFromEuler(t,!1)})),i._onChange((function(){t.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new De}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(yp,e)}rotateY(e){return this.rotateOnAxis(xp,e)}rotateZ(e){return this.rotateOnAxis(_p,e)}translateOnAxis(e,t){return vp.copy(e).applyQuaternion(this.quaternion),this.position.add(vp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yp,e)}translateY(e){return this.translateOnAxis(xp,e)}translateZ(e){return this.translateOnAxis(_p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qs.copy(e):Qs.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Ha,Qs,this.up):ui.lookAt(Qs,Ha,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ui),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mp),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ev),dc.child=e,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mp),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,Sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,bv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){let o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),m=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};cn.DEFAULT_UP=new S(0,1,0),cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new S,di=new S,pc=new S,pi=new S,Hr=new S,Vr=new S,wp=new S,mc=new S,fc=new S,gc=new S,vc=new qe,yc=new qe,xc=new qe,fi=class n{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Dn.subVectors(e,t),r.cross(Dn);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Dn.subVectors(r,t),di.subVectors(i,t),pc.subVectors(e,t);let s=Dn.dot(Dn),o=Dn.dot(di),l=Dn.dot(pc),c=di.dot(di),h=di.dot(pc),u=s*c-o*o;if(u===0)return a.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(s*h-o*l)*d;return a.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pi)!==null&&pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,pi.x),l.addScaledVector(s,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return vc.setScalar(0),yc.setScalar(0),xc.setScalar(0),vc.fromBufferAttribute(e,t),yc.fromBufferAttribute(e,i),xc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(vc,a.x),s.addScaledVector(yc,a.y),s.addScaledVector(xc,a.z),s}static isFrontFacing(e,t,i,r){return Dn.subVectors(i,t),di.subVectors(e,t),Dn.cross(di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),.5*Dn.cross(di).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,a=this.c,s,o;Hr.subVectors(r,i),Vr.subVectors(a,i),mc.subVectors(e,i);let l=Hr.dot(mc),c=Vr.dot(mc);if(l<=0&&c<=0)return t.copy(i);fc.subVectors(e,r);let h=Hr.dot(fc),u=Vr.dot(fc);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(Hr,s);gc.subVectors(e,a);let p=Hr.dot(gc),m=Vr.dot(gc);if(m>=0&&p<=m)return t.copy(a);let g=p*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Vr,o);let f=h*m-p*u;if(f<=0&&u-h>=0&&p-m>=0)return wp.subVectors(a,r),o=(u-h)/(u-h+(p-m)),t.copy(r).addScaledVector(wp,o);let y=1/(f+g+d);return s=g*y,o=d*y,t.copy(i).addScaledVector(Hr,s).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},eo={h:0,s:0,l:0};function _c(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=ph(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=_c(s,a,e+1/3),this.g=_c(s,a,e),this.b=_c(s,a,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=Et){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let i=Mm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ye.fromWorkingColorSpace(Vt.copy(this),e),65536*Math.round(Ft(255*Vt.r,0,255))+256*Math.round(Ft(255*Vt.g,0,255))+Math.round(Ft(255*Vt.b,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Vt.copy(this),t);let i=Vt.r,r=Vt.g,a=Vt.b,s=Math.max(i,r,a),o=Math.min(i,r,a),l,c,h=(o+s)/2;if(o===s)l=0,c=0;else{let u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case i:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-i)/u+2;break;case a:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Et){Ye.fromWorkingColorSpace(Vt.copy(this),e);let t=Vt.r,i=Vt.g,r=Vt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(eo);let i=Ka(Di.h,eo.h,t),r=Ka(Di.s,eo.s,t),a=Ka(Di.l,eo.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Ve;Ve.NAMES=Mm;var Tv=0,Fi=class extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Kn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fr,this.blendDst=$n,this.blendEquation=Mt,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(a){let s=[];for(let o in a){let l=a[o];delete l.metadata,s.push(l)}return s}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fr&&(i.blendSrc=this.blendSrc),this.blendDst!==$n&&(i.blendDst=this.blendDst),this.blendEquation!==Mt&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},No=class extends Fi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},G1=Av();function Av(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,a[l]=c|h}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:a,exponentTable:s,offsetTable:o}}var At=new S,to=new ae,$e=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dh,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),a=it(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dh&&(e.usage=this.usage),e}};var Oo=class extends $e{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fo=class extends $e{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ee=class extends $e{constructor(e,t,i){super(new Float32Array(e),t,i)}},Rv=0,gn=new Ue,Mc=new cn,Gr=new S,ln=new Qn,Va=new Qn,Ot=new S,tt=class n extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_m(e)?Fo:Oo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new De().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,a=e.length;r<a;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ee(i,3))}else{for(let i=0,r=t.count;i<r;i++){let a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let a=t[i];ln.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new S,1/0);if(e){let i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){let o=t[a];Va.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(ln.min,Va.min),ln.expandByPoint(Ot),Ot.addVectors(ln.max,Va.max),ln.expandByPoint(Ot)):(ln.expandByPoint(Va.min),ln.expandByPoint(Va.max))}ln.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Ot.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Ot));if(t)for(let a=0,s=t.length;a<s;a++){let o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(Gr.fromBufferAttribute(e,c),Ot.add(Gr)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new S,l[D]=new S;let c=new S,h=new S,u=new S,d=new ae,p=new ae,m=new ae,g=new S,f=new S;function y(D,A,U){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,U),d.fromBufferAttribute(a,D),p.fromBufferAttribute(a,A),m.fromBufferAttribute(a,U),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(I),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(I),o[D].add(g),o[A].add(g),o[U].add(g),l[D].add(f),l[A].add(f),l[U].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,A=x.length;D<A;++D){let U=x[D],I=U.start;for(let L=I,H=I+U.count;L<H;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new S,_=new S,w=new S,M=new S;function R(D){w.fromBufferAttribute(r,D),M.copy(w);let A=o[D];v.copy(A),v.sub(w.multiplyScalar(w.dot(A))).normalize(),_.crossVectors(M,A);let U=_.dot(l[D])<0?-1:1;s.setXYZW(D,v.x,v.y,v.z,U)}for(let D=0,A=x.length;D<A;++D){let U=x[D],I=U.start;for(let L=I,H=I+U.count;L<H;L+=3)R(e.getX(L+0)),R(e.getX(L+1)),R(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $e(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new S,a=new S,s=new S,o=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),g=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,f),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let g=0,f=l.length;g<f;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let y=0;y<h;y++)d[m++]=c[p++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let a=e.morphAttributes;for(let c in a){let h=[],u=a[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sp=new Ue,lr=new oa,no=new nn,bp=new S,io=new S,ro=new S,ao=new S,wc=new S,so=new S,Ep=new S,oo=new S,Ke=class extends cn{constructor(e=new tt,t=new No){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(a&&o){so.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],u=a[l];h!==0&&(wc.fromBufferAttribute(u,e),s?so.addScaledVector(wc,h):so.addScaledVector(wc.sub(t),h))}t.add(so)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(a),lr.copy(e.ray).recast(e.near),no.containsPoint(lr.origin)===!1&&(lr.intersectSphere(no,bp)===null||lr.origin.distanceToSquared(bp)>(e.far-e.near)**2))return;Sp.copy(a).invert(),lr.copy(e.ray).applyMatrix4(Sp),i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,lr)}}_computeIntersections(e,t,i){let r,a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,g=d.length;m<g;m++){let f=d[m],y=s[f.materialIndex];for(let x=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));x<v;x+=3)r=lo(this,y,e,i,c,h,u,o.getX(x),o.getX(x+1),o.getX(x+2)),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=f.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);m<g;m+=3)r=lo(this,s,e,i,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),r&&(r.faceIndex=Math.floor(m/3),t.push(r));else if(l!==void 0)if(Array.isArray(s))for(let m=0,g=d.length;m<g;m++){let f=d[m],y=s[f.materialIndex];for(let x=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));x<v;x+=3)r=lo(this,y,e,i,c,h,u,x,x+1,x+2),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=f.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);m<g;m+=3)r=lo(this,s,e,i,c,h,u,m,m+1,m+2),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}};function lo(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,io),n.getVertexPosition(l,ro),n.getVertexPosition(c,ao);let h=(function(u,d,p,m,g,f,y,x){let v;if(v=d.side===1?m.intersectTriangle(y,f,g,!0,x):m.intersectTriangle(g,f,y,d.side===0,x),v===null)return null;oo.copy(x),oo.applyMatrix4(u.matrixWorld);let _=p.ray.origin.distanceTo(oo);return _<p.near||_>p.far?null:{distance:_,point:oo.clone(),object:u}})(n,e,t,i,io,ro,ao,Ep);if(h){let u=new S;fi.getBarycoord(Ep,io,ro,ao,u),r&&(h.uv=fi.getInterpolatedAttribute(r,o,l,c,u,new ae)),a&&(h.uv1=fi.getInterpolatedAttribute(a,o,l,c,u,new ae)),s&&(h.normal=fi.getInterpolatedAttribute(s,o,l,c,u,new S),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new S,materialIndex:0};fi.getNormal(io,ro,ao,d.normal),h.face=d,h.barycoord=u}return h}var la=class n extends tt{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};let o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=0,p=0;function m(g,f,y,x,v,_,w,M,R,D,A){let U=_/R,I=w/D,L=_/2,H=w/2,B=M/2,Z=R+1,X=D+1,j=0,J=0,pe=new S;for(let ve=0;ve<X;ve++){let ee=ve*I-H;for(let oe=0;oe<Z;oe++){let de=oe*U-L;pe[g]=de*x,pe[f]=ee*v,pe[y]=B,c.push(pe.x,pe.y,pe.z),pe[g]=0,pe[f]=0,pe[y]=M>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(oe/R),u.push(1-ve/D),j+=1}}for(let ve=0;ve<D;ve++)for(let ee=0;ee<R;ee++){let oe=d+ee+Z*ve,de=d+ee+Z*(ve+1),ye=d+(ee+1)+Z*(ve+1),he=d+(ee+1)+Z*ve;l.push(oe,de,he),l.push(de,ye,he),J+=6}o.addGroup(p,J,A),p+=J,d+=j}m("z","y","x",-1,-1,i,t,e,s,a,0),m("z","y","x",1,-1,i,t,-e,s,a,1),m("x","z","y",1,1,e,i,t,r,s,2),m("x","z","y",1,-1,e,i,-t,r,s,3),m("x","y","z",1,-1,e,t,i,r,a,4),m("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ca(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Kt(n){let e={};for(let t=0;t<n.length;t++){let i=ca(n[t]);for(let r in i)e[r]=i[r]}return e}function wm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var Cv={clone:ca,merge:Kt},Ze=class extends Fi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ki=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=sa}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new S,Tp=new ae,Ap=new ae,$t=class extends ki{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ts*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Qr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ts*Math.atan(Math.tan(.5*Qr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Tp,Ap),t.subVectors(Ap,Tp)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Qr*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wr=-90,gh=class extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $t(Wr,1,e,t);r.layers=this.layers,this.add(r);let a=new $t(Wr,1,e,t);a.layers=this.layers,this.add(a);let s=new $t(Wr,1,e,t);s.layers=this.layers,this.add(s);let o=new $t(Wr,1,e,t);o.layers=this.layers,this.add(o);let l=new $t(Wr,1,e,t);l.layers=this.layers,this.add(l);let c=new $t(Wr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(let c of t)this.remove(c);if(e===sa)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Po)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},ko=class extends Pt{constructor(e,t,i,r,a,s,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:na,i,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vh=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ko(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:st}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new la(5,5,5),a=new Ze({name:"CubemapFromEquirect",uniforms:ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let s=new Ke(r,a),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=st),new gh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}},Sc=new S,Lv=new S,Pv=new De,mi=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Sc.subVectors(i,t).cross(Lv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Sc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Pv.getNormalMatrix(e),r=this.coplanarPoint(Sc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cr=new nn,co=new S,rs=class{constructor(e=new mi,t=new mi,i=new mi,r=new mi,a=new mi,s=new mi){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],m=r[9],g=r[10],f=r[11],y=r[12],x=r[13],v=r[14],_=r[15];if(i[0].setComponents(l-a,d-c,f-p,_-y).normalize(),i[1].setComponents(l+a,d+c,f+p,_+y).normalize(),i[2].setComponents(l+s,d+h,f+m,_+x).normalize(),i[3].setComponents(l-s,d-h,f-m,_-x).normalize(),i[4].setComponents(l-o,d-u,f-g,_-v).normalize(),t===sa)i[5].setComponents(l+o,d+u,f+g,_+v).normalize();else{if(t!==Po)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,g,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(co.x=r.normal.x>0?e.max.x:e.min.x,co.y=r.normal.y>0?e.max.y:e.min.y,co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sm(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Iv(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let a=e.get(t);return void((!a||a.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(a,s){let o=a.array,l=a.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(s,h),n.bufferData(s,o,l),a.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(o instanceof Uint16Array)u=a.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:a.version,size:c}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(a,s,o){let l=s.array,c=s.updateRanges;if(n.bindBuffer(o,a),c.length===0)n.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];n.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}s.clearUpdateRanges()}s.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var yn=class n extends tt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],g=[],f=[];for(let y=0;y<h;y++){let x=y*d-s;for(let v=0;v<c;v++){let _=v*u-a;m.push(_,-x,0),g.push(0,0,1),f.push(v/o),f.push(1-y/l)}}for(let y=0;y<l;y++)for(let x=0;x<o;x++){let v=x+c*y,_=x+c*(y+1),w=x+1+c*(y+1),M=x+1+c*y;p.push(v,_,M),p.push(_,w,M)}this.setIndex(p),this.setAttribute("position",new Ee(m,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Oe={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;

		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ue={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Xn={basic:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Kt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Kt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Kt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Kt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Kt([ue.points,ue.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Kt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Kt([ue.common,ue.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Kt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Kt([ue.sprite,ue.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Kt([ue.common,ue.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Kt([ue.lights,ue.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Xn.physical={uniforms:Kt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var ho={r:0,b:0,g:0},hr=new yi,Dv=new Ue;function Uv(n,e,t,i,r,a,s){let o=new Ve(0),l,c,h=a===!0?0:1,u=null,d=0,p=null;function m(f){let y=f.isScene===!0?f.background:null;return y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y}function g(f,y){f.getRGB(ho,wm(n)),i.buffers.color.setClear(ho.r,ho.g,ho.b,y,s)}return{getClearColor:function(){return o},setClearColor:function(f,y=1){o.set(f),h=y,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,g(o,h)},render:function(f){let y=!1,x=m(f);x===null?g(o,h):x&&x.isColor&&(g(x,1),y=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(f,y){let x=m(y);x&&(x.isCubeTexture||x.mapping===rl)?(c===void 0&&(c=new Ke(new la(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:ca(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,_,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),hr.copy(y.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(hr)),c.material.toneMapped=Ye.getTransfer(x.colorSpace)!==rt,u===x&&d===x.version&&p===n.toneMapping||(c.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ke(new yn(2,2),new Ze({name:"BackgroundMaterial",uniforms:ca(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(x.colorSpace)!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),u===x&&d===x.version&&p===n.toneMapping||(l.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}}}function Nv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=c(null),a=r,s=!1;function o(y){return n.bindVertexArray(y)}function l(y){return n.deleteVertexArray(y)}function c(y){let x=[],v=[],_=[];for(let w=0;w<t;w++)x[w]=0,v[w]=0,_[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:v,attributeDivisors:_,object:y,attributes:{},index:null}}function h(){let y=a.newAttributes;for(let x=0,v=y.length;x<v;x++)y[x]=0}function u(y){d(y,0)}function d(y,x){let v=a.newAttributes,_=a.enabledAttributes,w=a.attributeDivisors;v[y]=1,_[y]===0&&(n.enableVertexAttribArray(y),_[y]=1),w[y]!==x&&(n.vertexAttribDivisor(y,x),w[y]=x)}function p(){let y=a.newAttributes,x=a.enabledAttributes;for(let v=0,_=x.length;v<_;v++)x[v]!==y[v]&&(n.disableVertexAttribArray(v),x[v]=0)}function m(y,x,v,_,w,M,R){R===!0?n.vertexAttribIPointer(y,x,v,w,M):n.vertexAttribPointer(y,x,v,_,w,M)}function g(){f(),s=!0,a!==r&&(a=r,o(a.object))}function f(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(y,x,v,_,w){let M=!1,R=(function(D,A,U){let I=U.wireframe===!0,L=i[D.id];L===void 0&&(L={},i[D.id]=L);let H=L[A.id];H===void 0&&(H={},L[A.id]=H);let B=H[I];return B===void 0&&(B=c(n.createVertexArray()),H[I]=B),B})(_,v,x);a!==R&&(a=R,o(a.object)),M=(function(D,A,U,I){let L=a.attributes,H=A.attributes,B=0,Z=U.getAttributes();for(let X in Z)if(Z[X].location>=0){let j=L[X],J=H[X];if(J===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),j===void 0||j.attribute!==J||J&&j.data!==J.data)return!0;B++}return a.attributesNum!==B||a.index!==I})(y,_,v,w),M&&(function(D,A,U,I){let L={},H=A.attributes,B=0,Z=U.getAttributes();for(let X in Z)if(Z[X].location>=0){let j=H[X];j===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let J={};J.attribute=j,j&&j.data&&(J.data=j.data),L[X]=J,B++}a.attributes=L,a.attributesNum=B,a.index=I})(y,_,v,w),w!==null&&e.update(w,n.ELEMENT_ARRAY_BUFFER),(M||s)&&(s=!1,(function(D,A,U,I){h();let L=I.attributes,H=U.getAttributes(),B=A.defaultAttributeValues;for(let Z in H){let X=H[Z];if(X.location>=0){let j=L[Z];if(j===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let J=j.normalized,pe=j.itemSize,ve=e.get(j);if(ve===void 0)continue;let ee=ve.buffer,oe=ve.type,de=ve.bytesPerElement,ye=oe===n.INT||oe===n.UNSIGNED_INT||j.gpuType===hu;if(j.isInterleavedBufferAttribute){let he=j.data,C=he.stride,T=j.offset;if(he.isInstancedInterleavedBuffer){for(let k=0;k<X.locationSize;k++)d(X.location+k,he.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let k=0;k<X.locationSize;k++)u(X.location+k);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let k=0;k<X.locationSize;k++)m(X.location+k,pe/X.locationSize,oe,J,C*de,(T+pe/X.locationSize*k)*de,ye)}else{if(j.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)d(X.location+he,j.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let he=0;he<X.locationSize;he++)u(X.location+he);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let he=0;he<X.locationSize;he++)m(X.location+he,pe/X.locationSize,oe,J,pe*de,pe/X.locationSize*he*de,ye)}}else if(B!==void 0){let J=B[Z];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(X.location,J);break;case 3:n.vertexAttrib3fv(X.location,J);break;case 4:n.vertexAttrib4fv(X.location,J);break;default:n.vertexAttrib1fv(X.location,J)}}}}p()})(y,x,v,_),w!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))},reset:g,resetDefaultState:f,dispose:function(){g();for(let y in i){let x=i[y];for(let v in x){let _=x[v];for(let w in _)l(_[w].object),delete _[w];delete x[v]}delete i[y]}},releaseStatesOfGeometry:function(y){if(i[y.id]===void 0)return;let x=i[y.id];for(let v in x){let _=x[v];for(let w in _)l(_[w].object),delete _[w];delete x[v]}delete i[y.id]},releaseStatesOfProgram:function(y){for(let x in i){let v=i[x];if(v[y.id]===void 0)continue;let _=v[y.id];for(let w in _)l(_[w].object),delete _[w];delete v[y.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Ov(n,e,t){let i;function r(a,s,o){o!==0&&(n.drawArraysInstanced(i,a,s,o),t.update(s,i,o))}this.setMode=function(a){i=a},this.render=function(a,s){n.drawArrays(i,a,s),t.update(s,i,1)},this.renderInstances=r,this.renderMultiDraw=function(a,s,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,a,0,s,0,o);let l=0;for(let c=0;c<o;c++)l+=s[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(a,s,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<a.length;h++)r(a[h],s[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,a,0,s,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=s[u]*l[u];t.update(h,i,1)}}}function Fv(n,e,t,i){let r;function a(d){if(d==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=t.precision!==void 0?t.precision:"highp",o=a(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:a,textureFormatReadable:function(d){return d===Zt||i.convert(d)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===ps&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==hn&&i.convert(d)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==gi&&!p)},precision:s,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:n.getParameter(n.MAX_SAMPLES)}}function kv(n){let e=this,t=null,i=0,r=!1,a=!1,s=new mi,o=new De,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,g=null;if(m!==0){if(g=l.value,p!==!0||g===null){let f=d+4*m,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<f)&&(g=new Float32Array(f));for(let x=0,v=d;x!==m;++x,v+=4)s.copy(h[x]).applyMatrix4(y,o),s.normal.toArray(g,v),g[v+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,f=n.get(h);if(!r||p===null||p.length===0||a&&!g)a?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let y=a?0:i,x=4*y,v=f.clippingState||null;l.value=v,v=c(p,u,x,d);for(let _=0;_!==x;++_)v[_]=t[_];f.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}}}function zv(n){let e=new WeakMap;function t(r,a){return a===Oc?r.mapping=na:a===Fc&&(r.mapping=ia),r}function i(r){let a=r.target;a.removeEventListener("dispose",i);let s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(r){if(r&&r.isTexture){let a=r.mapping;if(a===Oc||a===Fc){if(e.has(r))return t(e.get(r).texture,r.mapping);{let s=r.image;if(s&&s.height>0){let o=new vh(s.height);return o.fromEquirectangularTexture(n,r),e.set(r,o),r.addEventListener("dispose",i),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var as=class extends ki{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rp=[.125,.215,.35,.446,.526,.582],Ga=20,bc=new as,Cp=new Ve,Ec=null,Tc=0,Ac=0,Rc=!1,dr=(1+Math.sqrt(5))/2,jr=1/dr,Lp=[new S(-dr,jr,0),new S(dr,jr,0),new S(-jr,0,dr),new S(jr,0,dr),new S(0,dr,-jr),new S(0,dr,jr),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ec=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,Tc,Ac),this._renderer.xr.enabled=Rc,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===na||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:st,minFilter:st,generateMipmaps:!1,type:ps,format:Zt,colorSpace:fa,depthBuffer:!1},r=Pp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(s){let o=[],l=[],c=[],h=s,u=s-4+1+Rp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let m=1/p;d>s-4?m=Rp[d-s+4-1]:d===0&&(m=0),c.push(m);let g=1/(p-2),f=-g,y=1+g,x=[f,f,y,f,y,y,f,f,y,y,f,y],v=6,_=6,w=3,M=2,R=1,D=new Float32Array(w*_*v),A=new Float32Array(M*_*v),U=new Float32Array(R*_*v);for(let L=0;L<v;L++){let H=L%3*2/3-1,B=L>2?0:-1,Z=[H,B,0,H+2/3,B,0,H+2/3,B+1,0,H,B,0,H+2/3,B+1,0,H,B+1,0];D.set(Z,w*_*L),A.set(x,M*_*L);let X=[L,L,L,L,L,L];U.set(X,R*_*L)}let I=new tt;I.setAttribute("position",new $e(D,w)),I.setAttribute("uv",new $e(A,M)),I.setAttribute("faceIndex",new $e(U,R)),o.push(I),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(a)),this._blurMaterial=(function(s,o,l){let c=new Float32Array(Ga),h=new S(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:Ga,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(a,e,t)}return r}_compileMaterial(e){let t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,bc)}_sceneToCubeUV(e,t,i,r){let a=new $t(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Cp),l.toneMapping=0,l.autoClear=!1;let u=new No({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new Ke(new la,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(Cp),p=!0);for(let g=0;g<6;g++){let f=g%3;f===0?(a.up.set(0,s[g],0),a.lookAt(o[g],0,0)):f===1?(a.up.set(0,0,s[g]),a.lookAt(0,o[g],0)):(a.up.set(0,s[g],0),a.lookAt(0,0,o[g]));let y=this._cubeSize;uo(r,f*y,g>2?y:0,y,y),l.setRenderTarget(r),p&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===na||e.mapping===ia;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ip());let a=r?this._cubemapMaterial:this._equirectMaterial,s=new Ke(this._lodPlanes[0],a);a.uniforms.envMap.value=e;let o=this._cubeSize;uo(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,bc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Lp[(r-a-1)%Lp.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){let l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Ke(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/39,m=a/p,g=isFinite(a)?1+Math.floor(3*m):Ga;g>Ga&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let f=[],y=0;for(let _=0;_<Ga;++_){let w=_/m,M=Math.exp(-w*w/2);f.push(M),_===0?y+=M:_<g&&(y+=2*M)}for(let _=0;_<f.length;_++)f[_]=f[_]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=p,u.mipInt.value=x-i;let v=this._sizeLods[r];uo(t,3*v*(r>x-4?r-x+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,bc)}};function Pp(n,e,t){let i=new Jt(n,e,t);return i.texture.mapping=rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ip(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dp(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function gu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bv(n){let e=new WeakMap,t=null;function i(r){let a=r.target;a.removeEventListener("dispose",i);let s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(r){if(r&&r.isTexture){let a=r.mapping,s=a===Oc||a===Fc,o=a===na||a===ia;if(s||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return t===null&&(t=new zo(n)),l=s?t.fromEquirectangular(r,l):t.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return s&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new zo(n)),l=s?t.fromEquirectangular(r):t.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",i),l.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Hv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Ya("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Vv(n,e,t,i){let r={},a=new WeakMap;function s(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}c.removeEventListener("dispose",s),delete r[c.id];let h=a.get(c);h&&(e.remove(h),a.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let g=h.array;d=h.version;for(let f=0,y=g.length;f<y;f+=3){let x=g[f+0],v=g[f+1],_=g[f+2];c.push(x,v,v,_,_,x)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let f=0,y=g.length/3-1;f<y;f+=3){let x=f+0,v=f+1,_=f+2;c.push(x,v,v,_,_,x)}}}let p=new(_m(c)?Fo:Oo)(c,1);p.version=d;let m=a.get(l);m&&e.remove(m),a.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",s),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],n.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],n.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=a.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return a.get(l)}}}function Gv(n,e,t){let i,r,a;function s(o,l,c){c!==0&&(n.drawElementsInstanced(i,l,r,o*a,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,a=o.bytesPerElement},this.render=function(o,l){n.drawElements(i,l,r,o*a),t.update(l,i,1)},this.renderInstances=s,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)s(o[d]/a,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,i,1)}}}function Wv(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function jv(n,e,t){let i=new WeakMap,r=new qe;return{update:function(a,s,o){let l=a.morphTargetInfluences,c=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(s);if(u===void 0||u.count!==h){let D=function(){M.dispose(),i.delete(s),s.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let d=s.morphAttributes.position!==void 0,p=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,g=s.morphAttributes.position||[],f=s.morphAttributes.normal||[],y=s.morphAttributes.color||[],x=0;d===!0&&(x=1),p===!0&&(x=2),m===!0&&(x=3);let v=s.attributes.position.count*x,_=1;v>e.maxTextureSize&&(_=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*_*4*h),M=new Do(w,v,_,h);M.type=gi,M.needsUpdate=!0;let R=4*x;for(let A=0;A<h;A++){let U=g[A],I=f[A],L=y[A],H=v*_*4*A;for(let B=0;B<U.count;B++){let Z=B*R;d===!0&&(r.fromBufferAttribute(U,B),w[H+Z+0]=r.x,w[H+Z+1]=r.y,w[H+Z+2]=r.z,w[H+Z+3]=0),p===!0&&(r.fromBufferAttribute(I,B),w[H+Z+4]=r.x,w[H+Z+5]=r.y,w[H+Z+6]=r.z,w[H+Z+7]=0),m===!0&&(r.fromBufferAttribute(L,B),w[H+Z+8]=r.x,w[H+Z+9]=r.y,w[H+Z+10]=r.z,w[H+Z+11]=L.itemSize===4?r.w:1)}}u={count:h,texture:M,size:new ae(v,_)},i.set(s,u),s.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];let p=s.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",p),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function qv(n,e,t,i){let r=new WeakMap;function a(s){let o=s.target;o.removeEventListener("dispose",a),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(s){let o=i.render.frame,l=s.geometry,c=e.get(s,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),r.get(s)!==o&&(t.update(s.instanceMatrix,n.ARRAY_BUFFER),s.instanceColor!==null&&t.update(s.instanceColor,n.ARRAY_BUFFER),r.set(s,o))),s.isSkinnedMesh){let h=s.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Bo=class extends Pt{constructor(e,t,i,r,a,s,o,l,c,h=1026){if(h!==es&&h!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===es&&(i=vr),i===void 0&&h===aa&&(i=ra),super(null,r,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},bm=new Pt,Up=new Bo(1,1),Em=new Do,Tm=new is,Am=new ko,Np=[],Op=[],Fp=new Float32Array(16),kp=new Float32Array(9),zp=new Float32Array(4);function ga(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,a=Np[r];if(a===void 0&&(a=new Float32Array(r),Np[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sl(n,e){let t=Op[e];t===void 0&&(t=new Int32Array(e),Op[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function Kv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function $v(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function Zv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,i))return;zp.set(i),n.uniformMatrix2fv(this.addr,!1,zp),Dt(t,i)}}function Jv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,i))return;kp.set(i),n.uniformMatrix3fv(this.addr,!1,kp),Dt(t,i)}}function Qv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,i))return;Fp.set(i),n.uniformMatrix4fv(this.addr,!1,Fp),Dt(t,i)}}function ey(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ty(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function ny(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function iy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function ry(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ay(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function sy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function oy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function ly(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),a;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(Up.compareFunction=515,a=Up):a=bm,t.setTexture2D(e||a,r)}function cy(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Tm,r)}function hy(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Am,r)}function uy(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Em,r)}function dy(n,e){n.uniform1fv(this.addr,e)}function py(n,e){let t=ga(e,this.size,2);n.uniform2fv(this.addr,t)}function my(n,e){let t=ga(e,this.size,3);n.uniform3fv(this.addr,t)}function fy(n,e){let t=ga(e,this.size,4);n.uniform4fv(this.addr,t)}function gy(n,e){let t=ga(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vy(n,e){let t=ga(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yy(n,e){let t=ga(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xy(n,e){n.uniform1iv(this.addr,e)}function _y(n,e){n.uniform2iv(this.addr,e)}function My(n,e){n.uniform3iv(this.addr,e)}function wy(n,e){n.uniform4iv(this.addr,e)}function Sy(n,e){n.uniform1uiv(this.addr,e)}function by(n,e){n.uniform2uiv(this.addr,e)}function Ey(n,e){n.uniform3uiv(this.addr,e)}function Ty(n,e){n.uniform4uiv(this.addr,e)}function Ay(n,e,t){let i=this.cache,r=e.length,a=sl(t,r);It(i,a)||(n.uniform1iv(this.addr,a),Dt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||bm,a[s])}function Ry(n,e,t){let i=this.cache,r=e.length,a=sl(t,r);It(i,a)||(n.uniform1iv(this.addr,a),Dt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Tm,a[s])}function Cy(n,e,t){let i=this.cache,r=e.length,a=sl(t,r);It(i,a)||(n.uniform1iv(this.addr,a),Dt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Am,a[s])}function Ly(n,e,t){let i=this.cache,r=e.length,a=sl(t,r);It(i,a)||(n.uniform1iv(this.addr,a),Dt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Em,a[s])}var yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Xv;case 35664:return Yv;case 35665:return Kv;case 35666:return $v;case 35674:return Zv;case 35675:return Jv;case 35676:return Qv;case 5124:case 35670:return ey;case 35667:case 35671:return ty;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return ry;case 36294:return ay;case 36295:return sy;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return uy}})(t.type)}},xh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return dy;case 35664:return py;case 35665:return my;case 35666:return fy;case 35674:return gy;case 35675:return vy;case 35676:return yy;case 5124:case 35670:return xy;case 35667:case 35671:return _y;case 35668:case 35672:return My;case 35669:case 35673:return wy;case 5125:return Sy;case 36294:return by;case 36295:return Ey;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Ly}})(t.type)}},_h=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let o=r[a];o.setValue(e,t[o.id],i)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function Bp(n,e){n.seq.push(e),n.map[e.id]=e}function Py(n,e,t){let i=n.name,r=i.length;for(Cc.lastIndex=0;;){let a=Cc.exec(i),s=Cc.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o|=0),c===void 0||c==="["&&s+2===r){Bp(t,c===void 0?new yh(o,n,e):new xh(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new _h(o),Bp(t,h)),t=h}}}var ta=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r);Py(a,e.getUniformLocation(t,a.name),this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){let o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function Hp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Iy=0,Vp=new De;function Gp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),s)}return r}function Dy(n,e){let t=(function(i){Ye._getMatrix(Vp,Ye.workingColorSpace,i);let r=`mat3( ${Vp.elements.map((a=>a.toFixed(4)))} )`;switch(Ye.getTransfer(i)){case al:return[r,"LinearTransferOETF"];case rt:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Uy(n,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var po=new S;function Ny(){return Ye.getLuminanceCoefficients(po),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${po.x.toFixed(4)}, ${po.y.toFixed(4)}, ${po.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wa(n){return n!==""}function Wp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(n){return n.replace(Oy,ky)}var Fy=new Map;function ky(n,e){let t=Oe[e];if(t===void 0){let i=Fy.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Mh(t)}var zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qp(n){return n.replace(zy,By)}function By(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Xp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hy(n,e,t,i){let r=n.getContext(),a=t.defines,s=t.vertexShader,o=t.fragmentShader,l=(function(I){let L="SHADOWMAP_TYPE_BASIC";return I.shadowMapType===1?L="SHADOWMAP_TYPE_PCF":I.shadowMapType===2?L="SHADOWMAP_TYPE_PCF_SOFT":I.shadowMapType===3&&(L="SHADOWMAP_TYPE_VSM"),L})(t),c=(function(I){let L="ENVMAP_TYPE_CUBE";if(I.envMap)switch(I.envMapMode){case na:case ia:L="ENVMAP_TYPE_CUBE";break;case rl:L="ENVMAP_TYPE_CUBE_UV"}return L})(t),h=(function(I){let L="ENVMAP_MODE_REFLECTION";return I.envMap&&I.envMapMode===ia&&(L="ENVMAP_MODE_REFRACTION"),L})(t),u=(function(I){let L="ENVMAP_BLENDING_NONE";if(I.envMap)switch(I.combine){case 0:L="ENVMAP_BLENDING_MULTIPLY";break;case 1:L="ENVMAP_BLENDING_MIX";break;case 2:L="ENVMAP_BLENDING_ADD"}return L})(t),d=(function(I){let L=I.envMapCubeUVHeight;if(L===null)return null;let H=Math.log2(L)-2,B=1/L;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:B,maxMip:H}})(t),p=(function(I){return[I.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",I.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)})(t),m=(function(I){let L=[];for(let H in I){let B=I[H];B!==!1&&L.push("#define "+H+" "+B)}return L.join(`
`)})(a),g=r.createProgram(),f,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Wa).join(`
`),f.length>0&&(f+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Wa).join(`
`),y.length>0&&(y+=`
`)):(f=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),y=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Oe.tonemapping_pars_fragment:"",t.toneMapping!==0?Uy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Dy("linearToOutputTexel",t.outputColorSpace),Ny(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),s=Mh(s),s=Wp(s,t),s=jp(s,t),o=Mh(o),o=Wp(o,t),o=jp(o,t),s=qp(s),o=qp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["#define varying in",t.glslVersion===sp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let v=x+f+s,_=x+y+o,w=Hp(r,r.VERTEX_SHADER,v),M=Hp(r,r.FRAGMENT_SHADER,_);function R(I){if(n.debug.checkShaderErrors){let L=r.getProgramInfoLog(g).trim(),H=r.getShaderInfoLog(w).trim(),B=r.getShaderInfoLog(M).trim(),Z=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,M);else{let j=Gp(r,w,"vertex"),J=Gp(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+j+`
`+J)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):H!==""&&B!==""||(X=!1);X&&(I.diagnostics={runnable:Z,programLog:L,vertexShader:{log:H,prefix:f},fragmentShader:{log:B,prefix:y}})}r.deleteShader(w),r.deleteShader(M),D=new ta(r,g),A=(function(L,H){let B={},Z=L.getProgramParameter(H,L.ACTIVE_ATTRIBUTES);for(let X=0;X<Z;X++){let j=L.getActiveAttrib(H,X),J=j.name,pe=1;j.type===L.FLOAT_MAT2&&(pe=2),j.type===L.FLOAT_MAT3&&(pe=3),j.type===L.FLOAT_MAT4&&(pe=4),B[J]={type:j.type,location:L.getAttribLocation(H,J),locationSize:pe}}return B})(r,g)}let D,A;r.attachShader(g,w),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),this.getUniforms=function(){return D===void 0&&R(this),D},this.getAttributes=function(){return A===void 0&&R(this),A};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(g,37297)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=M,this}var Vy=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Sh(e),t.set(e,i)),i}},Sh=class{constructor(e){this.id=Vy++,this.code=e,this.usedTimes=0}};function Gy(n,e,t,i,r,a,s){let o=new Uo,l=new wh,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,y,x,v,_){let w=v.fog,M=_.geometry,R=f.isMeshStandardMaterial?v.environment:null,D=(f.isMeshStandardMaterial?t:e).get(f.envMap||R),A=D&&D.mapping===rl?D.image.height:null,U=m[f.type];f.precision!==null&&(p=r.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let I=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,L=I!==void 0?I.length:0,H,B,Z,X,j=0;if(M.morphAttributes.position!==void 0&&(j=1),M.morphAttributes.normal!==void 0&&(j=2),M.morphAttributes.color!==void 0&&(j=3),U){let Oa=Xn[U];H=Oa.vertexShader,B=Oa.fragmentShader}else H=f.vertexShader,B=f.fragmentShader,l.update(f),Z=l.getVertexShaderID(f),X=l.getFragmentShaderID(f);let J=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),ve=_.isInstancedMesh===!0,ee=_.isBatchedMesh===!0,oe=!!f.map,de=!!f.matcap,ye=!!D,he=!!f.aoMap,C=!!f.lightMap,T=!!f.bumpMap,k=!!f.normalMap,F=!!f.displacementMap,P=!!f.emissiveMap,O=!!f.metalnessMap,b=!!f.roughnessMap,N=f.anisotropy>0,G=f.clearcoat>0,re=f.dispersion>0,V=f.iridescence>0,ne=f.sheen>0,te=f.transmission>0,se=N&&!!f.anisotropyMap,fe=G&&!!f.clearcoatMap,me=G&&!!f.clearcoatNormalMap,we=G&&!!f.clearcoatRoughnessMap,Ae=V&&!!f.iridescenceMap,Xe=V&&!!f.iridescenceThicknessMap,Be=ne&&!!f.sheenColorMap,Se=ne&&!!f.sheenRoughnessMap,et=!!f.specularMap,ht=!!f.specularColorMap,gt=!!f.specularIntensityMap,_e=te&&!!f.transmissionMap,Ge=te&&!!f.thicknessMap,at=!!f.gradientMap,Pr=!!f.alphaMap,Gs=f.alphaTest>0,An=!!f.alphaHash,jn=!!f.extensions,nr=0;f.toneMapped&&(J!==null&&J.isXRRenderTarget!==!0||(nr=n.toneMapping));let q={shaderID:U,shaderType:f.type,shaderName:f.name,vertexShader:H,fragmentShader:B,defines:f.defines,customVertexShaderID:Z,customFragmentShaderID:X,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:ee,batchingColor:ee&&_._colorsTexture!==null,instancing:ve,instancingColor:ve&&_.instanceColor!==null,instancingMorph:ve&&_.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:fa,alphaToCoverage:!!f.alphaToCoverage,map:oe,matcap:de,envMap:ye,envMapMode:ye&&D.mapping,envMapCubeUVHeight:A,aoMap:he,lightMap:C,bumpMap:T,normalMap:k,displacementMap:d&&F,emissiveMap:P,normalMapObjectSpace:k&&f.normalMapType===1,normalMapTangentSpace:k&&f.normalMapType===0,metalnessMap:O,roughnessMap:b,anisotropy:N,anisotropyMap:se,clearcoat:G,clearcoatMap:fe,clearcoatNormalMap:me,clearcoatRoughnessMap:we,dispersion:re,iridescence:V,iridescenceMap:Ae,iridescenceThicknessMap:Xe,sheen:ne,sheenColorMap:Be,sheenRoughnessMap:Se,specularMap:et,specularColorMap:ht,specularIntensityMap:gt,transmission:te,transmissionMap:_e,thicknessMap:Ge,gradientMap:at,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:Pr,alphaTest:Gs,alphaHash:An,combine:f.combine,mapUv:oe&&g(f.map.channel),aoMapUv:he&&g(f.aoMap.channel),lightMapUv:C&&g(f.lightMap.channel),bumpMapUv:T&&g(f.bumpMap.channel),normalMapUv:k&&g(f.normalMap.channel),displacementMapUv:F&&g(f.displacementMap.channel),emissiveMapUv:P&&g(f.emissiveMap.channel),metalnessMapUv:O&&g(f.metalnessMap.channel),roughnessMapUv:b&&g(f.roughnessMap.channel),anisotropyMapUv:se&&g(f.anisotropyMap.channel),clearcoatMapUv:fe&&g(f.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&g(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(f.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&g(f.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(f.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(f.sheenRoughnessMap.channel),specularMapUv:et&&g(f.specularMap.channel),specularColorMapUv:ht&&g(f.specularColorMap.channel),specularIntensityMapUv:gt&&g(f.specularIntensityMap.channel),transmissionMapUv:_e&&g(f.transmissionMap.channel),thicknessMapUv:Ge&&g(f.thicknessMap.channel),alphaMapUv:Pr&&g(f.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(k||N),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!M.attributes.uv&&(oe||Pr),fog:!!w,useFog:f.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:pe,skinning:_.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:f.dithering,shadowMapEnabled:n.shadowMap.enabled&&x.length>0,shadowMapType:n.shadowMap.type,toneMapping:nr,decodeVideoTexture:oe&&f.map.isVideoTexture===!0&&Ye.getTransfer(f.map.colorSpace)===rt,decodeVideoTextureEmissive:P&&f.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(f.emissiveMap.colorSpace)===rt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:jn&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jn&&f.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return q.vertexUv1s=c.has(1),q.vertexUv2s=c.has(2),q.vertexUv3s=c.has(3),c.clear(),q},getProgramCacheKey:function(f){let y=[];if(f.shaderID?y.push(f.shaderID):(y.push(f.customVertexShaderID),y.push(f.customFragmentShaderID)),f.defines!==void 0)for(let x in f.defines)y.push(x),y.push(f.defines[x]);return f.isRawShaderMaterial===!1&&((function(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)})(y,f),(function(x,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),x.push(o.mask)})(y,f),y.push(n.outputColorSpace)),y.push(f.customProgramCacheKey),y.join()},getUniforms:function(f){let y=m[f.type],x;if(y){let v=Xn[y];x=Cv.clone(v.uniforms)}else x=f.uniforms;return x},acquireProgram:function(f,y){let x;for(let v=0,_=h.length;v<_;v++){let w=h[v];if(w.cacheKey===y){x=w,++x.usedTimes;break}}return x===void 0&&(x=new Hy(n,y,f,a),h.push(x)),x},releaseProgram:function(f){if(--f.usedTimes==0){let y=h.indexOf(f);h[y]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function Wy(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function jy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kp(){let n=[],e=0,t=[],i=[],r=[];function a(s,o,l,c,h,u){let d=n[e];return d===void 0?(d={id:s.id,object:s,geometry:o,material:l,groupOrder:c,renderOrder:s.renderOrder,z:h,group:u},n[e]=d):(d.id=s.id,d.object=s,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=s.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(s,o,l,c,h,u){let d=a(s,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(s,o,l,c,h,u){let d=a(s,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let s=e,o=n.length;s<o;s++){let l=n[s];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(s,o){t.length>1&&t.sort(s||jy),i.length>1&&i.sort(o||Yp),r.length>1&&r.sort(o||Yp)}}}function qy(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new Kp,n.set(e,[r])):t>=i.length?(r=new Kp,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function Xy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Ve};break;case"SpotLight":t={position:new S,direction:new S,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new S,halfWidth:new S,halfHeight:new S}}return n[e.id]=t,t}}}var Yy=0;function Ky(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $y(n){let e=new Xy,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new S);let r=new S,a=new Ue,s=new Ue;return{setup:function(o){let l=0,c=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let u=0,d=0,p=0,m=0,g=0,f=0,y=0,x=0,v=0,_=0,w=0;o.sort(Ky);for(let R=0,D=o.length;R<D;R++){let A=o[R],U=A.color,I=A.intensity,L=A.distance,H=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)l+=U.r*I,c+=U.g*I,h+=U.b*I;else if(A.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(A.sh.coefficients[B],I);w++}else if(A.isDirectionalLight){let B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Z=A.shadow,X=t.get(A);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.directionalShadow[u]=X,i.directionalShadowMap[u]=H,i.directionalShadowMatrix[u]=A.shadow.matrix,f++}i.directional[u]=B,u++}else if(A.isSpotLight){let B=e.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(U).multiplyScalar(I),B.distance=L,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,i.spot[p]=B;let Z=A.shadow;if(A.map&&(i.spotLightMap[v]=A.map,v++,Z.updateMatrices(A),A.castShadow&&_++),i.spotLightMatrix[p]=Z.matrix,A.castShadow){let X=t.get(A);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.spotShadow[p]=X,i.spotShadowMap[p]=H,x++}p++}else if(A.isRectAreaLight){let B=e.get(A);B.color.copy(U).multiplyScalar(I),B.halfWidth.set(.5*A.width,0,0),B.halfHeight.set(0,.5*A.height,0),i.rectArea[m]=B,m++}else if(A.isPointLight){let B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){let Z=A.shadow,X=t.get(A);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,i.pointShadow[d]=X,i.pointShadowMap[d]=H,i.pointShadowMatrix[d]=A.shadow.matrix,y++}i.point[d]=B,d++}else if(A.isHemisphereLight){let B=e.get(A);B.skyColor.copy(A.color).multiplyScalar(I),B.groundColor.copy(A.groundColor).multiplyScalar(I),i.hemi[g]=B,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let M=i.hash;M.directionalLength===u&&M.pointLength===d&&M.spotLength===p&&M.rectAreaLength===m&&M.hemiLength===g&&M.numDirectionalShadows===f&&M.numPointShadows===y&&M.numSpotShadows===x&&M.numSpotMaps===v&&M.numLightProbes===w||(i.directional.length=u,i.spot.length=p,i.rectArea.length=m,i.point.length=d,i.hemi.length=g,i.directionalShadow.length=f,i.directionalShadowMap.length=f,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=f,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+v-_,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=_,i.numLightProbes=w,M.directionalLength=u,M.pointLength=d,M.spotLength=p,M.rectAreaLength=m,M.hemiLength=g,M.numDirectionalShadows=f,M.numPointShadows=y,M.numSpotShadows=x,M.numSpotMaps=v,M.numLightProbes=w,i.version=Yy++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,m=l.matrixWorldInverse;for(let g=0,f=o.length;g<f;g++){let y=o[g];if(y.isDirectionalLight){let x=i.directional[c];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),c++}else if(y.isSpotLight){let x=i.spot[u];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),u++}else if(y.isRectAreaLight){let x=i.rectArea[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),s.identity(),a.copy(y.matrixWorld),a.premultiply(m),s.extractRotation(a),x.halfWidth.set(.5*y.width,0,0),x.halfHeight.set(0,.5*y.height,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),d++}else if(y.isPointLight){let x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){let x=i.hemi[p];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),p++}}},state:i}}function $p(n){let e=new $y(n),t=[],i=[],r={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(a){r.camera=a,t.length=0,i.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)}}}function Zy(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),a;return r===void 0?(a=new $p(n),e.set(t,[a])):i>=r.length?(a=new $p(n),r.push(a)):a=r[i],a},dispose:function(){e=new WeakMap}}}var bh=class extends Fi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eh=class extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Jy(n,e,t){let i=new rs,r=new ae,a=new ae,s=new qe,o=new bh({depthPacking:3201}),l=new Eh,c={},h=t.maxTextureSize,u={[us]:1,[il]:0,[ds]:2},d=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new tt;m.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ke(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;function x(M,R){let D=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Jt(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,D,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,D,p,g,null)}function v(M,R,D,A){let U=null,I=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)U=I;else if(U=D.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let L=U.uuid,H=R.uuid,B=c[L];B===void 0&&(B={},c[L]=B);let Z=B[H];Z===void 0&&(Z=U.clone(),B[H]=Z,R.addEventListener("dispose",w)),U=Z}return U.visible=R.visible,U.wireframe=R.wireframe,U.side=A===3?R.shadowSide!==null?R.shadowSide:R.side:R.shadowSide!==null?R.shadowSide:u[R.side],U.alphaMap=R.alphaMap,U.alphaTest=R.alphaTest,U.map=R.map,U.clipShadows=R.clipShadows,U.clippingPlanes=R.clippingPlanes,U.clipIntersection=R.clipIntersection,U.displacementMap=R.displacementMap,U.displacementScale=R.displacementScale,U.displacementBias=R.displacementBias,U.wireframeLinewidth=R.wireframeLinewidth,U.linewidth=R.linewidth,D.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(n.properties.get(U).light=D),U}function _(M,R,D,A,U){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&U===3)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);let L=e.update(M),H=M.material;if(Array.isArray(H)){let B=L.groups;for(let Z=0,X=B.length;Z<X;Z++){let j=B[Z],J=H[j.materialIndex];if(J&&J.visible){let pe=v(M,J,A,U);M.onBeforeShadow(n,M,R,D,L,pe,j),n.renderBufferDirect(D,null,L,pe,M,j),M.onAfterShadow(n,M,R,D,L,pe,j)}}}else if(H.visible){let B=v(M,H,A,U);M.onBeforeShadow(n,M,R,D,L,B,null),n.renderBufferDirect(D,null,L,B,M,null),M.onAfterShadow(n,M,R,D,L,B,null)}}let I=M.children;for(let L=0,H=I.length;L<H;L++)_(I[L],R,D,A,U)}function w(M){M.target.removeEventListener("dispose",w);for(let R in c){let D=c[R],A=M.target.uuid;A in D&&(D[A].dispose(),delete D[A])}}this.render=function(M,R,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;let A=n.getRenderTarget(),U=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),L=n.state;L.setBlending(0),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let H=y!==3&&this.type===3,B=y===3&&this.type!==3;for(let Z=0,X=M.length;Z<X;Z++){let j=M[Z],J=j.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);let pe=J.getFrameExtents();if(r.multiply(pe),a.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/pe.x),r.x=a.x*pe.x,J.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/pe.y),r.y=a.y*pe.y,J.mapSize.y=a.y)),J.map===null||H===!0||B===!0){let ee=this.type!==3?{minFilter:Gt,magFilter:Gt}:{};J.map!==null&&J.map.dispose(),J.map=new Jt(r.x,r.y,ee),J.map.texture.name=j.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let ve=J.getViewportCount();for(let ee=0;ee<ve;ee++){let oe=J.getViewport(ee);s.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),L.viewport(s),J.updateMatrices(j,ee),i=J.getFrustum(),_(R,D,J.camera,j,this.type)}J.isPointLightShadow!==!0&&this.type===3&&x(J,D),J.needsUpdate=!1}y=this.type,f.needsUpdate=!1,n.setRenderTarget(A,U,I)}}var Qy={[Q0]:1,[tv]:6,[iv]:7,[nv]:5,[ev]:0,[av]:2,[sv]:4,[rv]:3};function ex(n,e){let t=new function(){let b=!1,N=new qe,G=null,re=new qe(0,0,0,0);return{setMask:function(V){G===V||b||(n.colorMask(V,V,V,V),G=V)},setLocked:function(V){b=V},setClear:function(V,ne,te,se,fe){fe===!0&&(V*=se,ne*=se,te*=se),N.set(V,ne,te,se),re.equals(N)===!1&&(n.clearColor(V,ne,te,se),re.copy(N))},reset:function(){b=!1,G=null,re.set(-1,0,0,0)}}},i=new function(){let b=!1,N=!1,G=null,re=null,V=null;return{setReversed:function(ne){if(N!==ne){let te=e.get("EXT_clip_control");N?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);let se=V;V=null,this.setClear(se)}N=ne},getReversed:function(){return N},setTest:function(ne){ne?ye(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ne){G===ne||b||(n.depthMask(ne),G=ne)},setFunc:function(ne){if(N&&(ne=Qy[ne]),re!==ne){switch(ne){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:default:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL)}re=ne}},setLocked:function(ne){b=ne},setClear:function(ne){V!==ne&&(N&&(ne=1-ne),n.clearDepth(ne),V=ne)},reset:function(){b=!1,G=null,re=null,V=null,N=!1}}},r=new function(){let b=!1,N=null,G=null,re=null,V=null,ne=null,te=null,se=null,fe=null;return{setTest:function(me){b||(me?ye(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(me){N===me||b||(n.stencilMask(me),N=me)},setFunc:function(me,we,Ae){G===me&&re===we&&V===Ae||(n.stencilFunc(me,we,Ae),G=me,re=we,V=Ae)},setOp:function(me,we,Ae){ne===me&&te===we&&se===Ae||(n.stencilOp(me,we,Ae),ne=me,te=we,se=Ae)},setLocked:function(me){b=me},setClear:function(me){fe!==me&&(n.clearStencil(me),fe=me)},reset:function(){b=!1,N=null,G=null,re=null,V=null,ne=null,te=null,se=null,fe=null}}},a=new WeakMap,s=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,m=null,g=null,f=null,y=null,x=null,v=null,_=new Ve(0,0,0),w=0,M=!1,R=null,D=null,A=null,U=null,I=null,L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,B=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=B>=2);let X=null,j={},J=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),ve=new qe().fromArray(J),ee=new qe().fromArray(pe);function oe(b,N,G,re){let V=new Uint8Array(4),ne=n.createTexture();n.bindTexture(b,ne),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<G;te++)b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY?n.texImage3D(N,0,n.RGBA,1,1,re,0,n.RGBA,n.UNSIGNED_BYTE,V):n.texImage2D(N+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,V);return ne}let de={};function ye(b){o[b]!==!0&&(n.enable(b),o[b]=!0)}function he(b){o[b]!==!1&&(n.disable(b),o[b]=!1)}de[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),ye(n.DEPTH_TEST),i.setFunc(3),F(!1),P(1),ye(n.CULL_FACE),k(0);let C={[Mt]:n.FUNC_ADD,[B0]:n.FUNC_SUBTRACT,[H0]:n.FUNC_REVERSE_SUBTRACT};C[103]=n.MIN,C[104]=n.MAX;let T={[Bi]:n.ZERO,[Rt]:n.ONE,[V0]:n.SRC_COLOR,[fr]:n.SRC_ALPHA,[Y0]:n.SRC_ALPHA_SATURATE,[q0]:n.DST_COLOR,[W0]:n.DST_ALPHA,[G0]:n.ONE_MINUS_SRC_COLOR,[$n]:n.ONE_MINUS_SRC_ALPHA,[X0]:n.ONE_MINUS_DST_COLOR,[j0]:n.ONE_MINUS_DST_ALPHA,[K0]:n.CONSTANT_COLOR,[$0]:n.ONE_MINUS_CONSTANT_COLOR,[Z0]:n.CONSTANT_ALPHA,[J0]:n.ONE_MINUS_CONSTANT_ALPHA};function k(b,N,G,re,V,ne,te,se,fe,me){if(b!==0){if(d===!1&&(ye(n.BLEND),d=!0),b===5)V=V||N,ne=ne||G,te=te||re,N===m&&V===y||(n.blendEquationSeparate(C[N],C[V]),m=N,y=V),G===g&&re===f&&ne===x&&te===v||(n.blendFuncSeparate(T[G],T[re],T[ne],T[te]),g=G,f=re,x=ne,v=te),se.equals(_)!==!1&&fe===w||(n.blendColor(se.r,se.g,se.b,fe),_.copy(se),w=fe),p=b,M=!1;else if(b!==p||me!==M){if(m===Mt&&y===Mt||(n.blendEquation(n.FUNC_ADD),m=Mt,y=Mt),me)switch(b){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}g=null,f=null,x=null,v=null,_.set(0,0,0),w=0,p=b,M=me}}else d===!0&&(he(n.BLEND),d=!1)}function F(b){R!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),R=b)}function P(b){b!==0?(ye(n.CULL_FACE),b!==D&&(b===1?n.cullFace(n.BACK):b===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),D=b}function O(b,N,G){b?(ye(n.POLYGON_OFFSET_FILL),U===N&&I===G||(n.polygonOffset(N,G),U=N,I=G)):he(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:ye,disable:he,bindFramebuffer:function(b,N){return l[b]!==N&&(n.bindFramebuffer(b,N),l[b]=N,b===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=N),b===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=N),!0)},drawBuffers:function(b,N){let G=h,re=!1;if(b){G=c.get(N),G===void 0&&(G=[],c.set(N,G));let V=b.textures;if(G.length!==V.length||G[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,te=V.length;ne<te;ne++)G[ne]=n.COLOR_ATTACHMENT0+ne;G.length=V.length,re=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,re=!0);re&&n.drawBuffers(G)},useProgram:function(b){return u!==b&&(n.useProgram(b),u=b,!0)},setBlending:k,setMaterial:function(b,N){b.side===2?he(n.CULL_FACE):ye(n.CULL_FACE);let G=b.side===1;N&&(G=!G),F(G),b.blending===1&&b.transparent===!1?k(0):k(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),i.setFunc(b.depthFunc),i.setTest(b.depthTest),i.setMask(b.depthWrite),t.setMask(b.colorWrite);let re=b.stencilWrite;r.setTest(re),re&&(r.setMask(b.stencilWriteMask),r.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),r.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),O(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:F,setCullFace:P,setLineWidth:function(b){b!==A&&(H&&n.lineWidth(b),A=b)},setPolygonOffset:O,setScissorTest:function(b){b?ye(n.SCISSOR_TEST):he(n.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=n.TEXTURE0+L-1),X!==b&&(n.activeTexture(b),X=b)},bindTexture:function(b,N,G){G===void 0&&(G=X===null?n.TEXTURE0+L-1:X);let re=j[G];re===void 0&&(re={type:void 0,texture:void 0},j[G]=re),re.type===b&&re.texture===N||(X!==G&&(n.activeTexture(G),X=G),n.bindTexture(b,N||de[b]),re.type=b,re.texture=N)},unbindTexture:function(){let b=j[X];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,N){let G=s.get(N);G===void 0&&(G=new WeakMap,s.set(N,G));let re=G.get(b);re===void 0&&(re=n.getUniformBlockIndex(N,b.name),G.set(b,re))},uniformBlockBinding:function(b,N){let G=s.get(N).get(b);a.get(N)!==G&&(n.uniformBlockBinding(N,G,b.__bindingPointIndex),a.set(N,G))},texStorage2D:function(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){ve.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),ve.copy(b))},viewport:function(b){ee.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),ee.copy(b))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),o={},X=null,j={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,m=null,g=null,f=null,y=null,x=null,v=null,_=new Ve(0,0,0),w=0,M=!1,R=null,D=null,A=null,U=null,I=null,ve.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function Zp(n,e,t,i){let r=(function(a){switch(a){case hn:case um:return{byteLength:1,components:1};case Qa:case dm:case ps:return{byteLength:2,components:1};case uu:case du:return{byteLength:2,components:4};case vr:case hu:case gi:return{byteLength:4,components:1};case pm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)})(i);switch(t){case mm:case gm:return n*e;case vm:return n*e*2;case Hi:case pu:return n*e/r.components*r.byteLength;case ym:case mu:return n*e*2/r.components*r.byteLength;case fm:return n*e*3/r.components*r.byteLength;case Zt:case fu:return n*e*4/r.components*r.byteLength;case Jr:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bc:case Vc:return Math.max(n,16)*Math.max(e,8)/4;case zc:case Hc:return Math.max(n,8)*Math.max(e,8)/2;case Gc:case Wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jc:case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case eh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case th:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ih:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ah:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Co:case sh:case oh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xm:case lh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ch:case hh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tx(n,e,t,i,r,a,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,T){return p?new OffscreenCanvas(C,T):ns("canvas")}function g(C,T,k){let F=1,P=he(C);if((P.width>k||P.height>k)&&(F=k/Math.max(P.width,P.height)),F<1){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let O=Math.floor(F*P.width),b=Math.floor(F*P.height);u===void 0&&(u=m(O,b));let N=T?m(O,b):u;return N.width=O,N.height=b,N.getContext("2d").drawImage(C,0,0,O,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+O+"x"+b+")."),N}return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),C}return C}function f(C){return C.generateMipmaps}function y(C){n.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,T,k,F,P=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let O=T;if(T===n.RED&&(k===n.FLOAT&&(O=n.R32F),k===n.HALF_FLOAT&&(O=n.R16F),k===n.UNSIGNED_BYTE&&(O=n.R8)),T===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(O=n.R8UI),k===n.UNSIGNED_SHORT&&(O=n.R16UI),k===n.UNSIGNED_INT&&(O=n.R32UI),k===n.BYTE&&(O=n.R8I),k===n.SHORT&&(O=n.R16I),k===n.INT&&(O=n.R32I)),T===n.RG&&(k===n.FLOAT&&(O=n.RG32F),k===n.HALF_FLOAT&&(O=n.RG16F),k===n.UNSIGNED_BYTE&&(O=n.RG8)),T===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(O=n.RG8UI),k===n.UNSIGNED_SHORT&&(O=n.RG16UI),k===n.UNSIGNED_INT&&(O=n.RG32UI),k===n.BYTE&&(O=n.RG8I),k===n.SHORT&&(O=n.RG16I),k===n.INT&&(O=n.RG32I)),T===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(O=n.RGB8UI),k===n.UNSIGNED_SHORT&&(O=n.RGB16UI),k===n.UNSIGNED_INT&&(O=n.RGB32UI),k===n.BYTE&&(O=n.RGB8I),k===n.SHORT&&(O=n.RGB16I),k===n.INT&&(O=n.RGB32I)),T===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(O=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(O=n.RGBA16UI),k===n.UNSIGNED_INT&&(O=n.RGBA32UI),k===n.BYTE&&(O=n.RGBA8I),k===n.SHORT&&(O=n.RGBA16I),k===n.INT&&(O=n.RGBA32I)),T===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(O=n.RGB9_E5),T===n.RGBA){let b=P?al:Ye.getTransfer(F);k===n.FLOAT&&(O=n.RGBA32F),k===n.HALF_FLOAT&&(O=n.RGBA16F),k===n.UNSIGNED_BYTE&&(O=b===rt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(O=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(O=n.RGB5_A1)}return O!==n.R16F&&O!==n.R32F&&O!==n.RG16F&&O!==n.RG32F&&O!==n.RGBA16F&&O!==n.RGBA32F||e.get("EXT_color_buffer_float"),O}function _(C,T){let k;return C?T===null||T===vr||T===ra?k=n.DEPTH24_STENCIL8:T===gi?k=n.DEPTH32F_STENCIL8:T===Qa&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===vr||T===ra?k=n.DEPTH_COMPONENT24:T===gi?k=n.DEPTH_COMPONENT32F:T===Qa&&(k=n.DEPTH_COMPONENT16),k}function w(C,T){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==st?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function M(C){let T=C.target;T.removeEventListener("dispose",M),(function(k){let F=i.get(k);if(F.__webglInit===void 0)return;let P=k.source,O=d.get(P);if(O){let b=O[F.__cacheKey];b.usedTimes--,b.usedTimes===0&&D(k),Object.keys(O).length===0&&d.delete(P)}i.remove(k)})(T),T.isVideoTexture&&h.delete(T)}function R(C){let T=C.target;T.removeEventListener("dispose",R),(function(k){let F=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(F.__webglFramebuffer[O]))for(let b=0;b<F.__webglFramebuffer[O].length;b++)n.deleteFramebuffer(F.__webglFramebuffer[O][b]);else n.deleteFramebuffer(F.__webglFramebuffer[O]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[O])}else{if(Array.isArray(F.__webglFramebuffer))for(let O=0;O<F.__webglFramebuffer.length;O++)n.deleteFramebuffer(F.__webglFramebuffer[O]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let O=0;O<F.__webglColorRenderbuffer.length;O++)F.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[O]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let P=k.textures;for(let O=0,b=P.length;O<b;O++){let N=i.get(P[O]);N.__webglTexture&&(n.deleteTexture(N.__webglTexture),s.memory.textures--),i.remove(P[O])}i.remove(k)})(T)}function D(C){let T=i.get(C);n.deleteTexture(T.__webglTexture);let k=C.source;delete d.get(k)[T.__cacheKey],s.memory.textures--}let A=0;function U(C,T){let k=i.get(C);if(C.isVideoTexture&&(function(F){let P=s.render.frame;h.get(F)!==P&&(h.set(F,P),F.update())})(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){let F=C.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(F.complete!==!1)return void X(k,C,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+T)}let I={[Zn]:n.REPEAT,[gr]:n.CLAMP_TO_EDGE,[kc]:n.MIRRORED_REPEAT},L={[Gt]:n.NEAREST,[ov]:n.NEAREST_MIPMAP_NEAREST,[qs]:n.NEAREST_MIPMAP_LINEAR,[st]:n.LINEAR,[nc]:n.LINEAR_MIPMAP_NEAREST,[Yn]:n.LINEAR_MIPMAP_LINEAR},H={[lv]:n.NEVER,[fv]:n.ALWAYS,[cv]:n.LESS,[uv]:n.LEQUAL,[hv]:n.EQUAL,[mv]:n.GEQUAL,[dv]:n.GREATER,[pv]:n.NOTEQUAL};function B(C,T){if(T.type!==gi||e.has("OES_texture_float_linear")!==!1||T.magFilter!==st&&T.magFilter!==nc&&T.magFilter!==qs&&T.magFilter!==Yn&&T.minFilter!==st&&T.minFilter!==nc&&T.minFilter!==qs&&T.minFilter!==Yn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,I[T.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,I[T.wrapT]),C!==n.TEXTURE_3D&&C!==n.TEXTURE_2D_ARRAY||n.texParameteri(C,n.TEXTURE_WRAP_R,I[T.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,L[T.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,H[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Gt||T.minFilter!==qs&&T.minFilter!==Yn||T.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Z(C,T){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",M));let F=T.source,P=d.get(F);P===void 0&&(P={},d.set(F,P));let O=(function(b){let N=[];return N.push(b.wrapS),N.push(b.wrapT),N.push(b.wrapR||0),N.push(b.magFilter),N.push(b.minFilter),N.push(b.anisotropy),N.push(b.internalFormat),N.push(b.format),N.push(b.type),N.push(b.generateMipmaps),N.push(b.premultiplyAlpha),N.push(b.flipY),N.push(b.unpackAlignment),N.push(b.colorSpace),N.join()})(T);if(O!==C.__cacheKey){P[O]===void 0&&(P[O]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,k=!0),P[O].usedTimes++;let b=P[C.__cacheKey];b!==void 0&&(P[C.__cacheKey].usedTimes--,b.usedTimes===0&&D(T)),C.__cacheKey=O,C.__webglTexture=P[O].texture}return k}function X(C,T,k){let F=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(F=n.TEXTURE_3D);let P=Z(C,T),O=T.source;t.bindTexture(F,C.__webglTexture,n.TEXTURE0+k);let b=i.get(O);if(O.version!==b.__version||P===!0){t.activeTexture(n.TEXTURE0+k);let N=Ye.getPrimaries(Ye.workingColorSpace),G=T.colorSpace===vn?null:Ye.getPrimaries(T.colorSpace),re=T.colorSpace===vn||N===G?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let V=g(T.image,!1,r.maxTextureSize);V=ye(T,V);let ne=a.convert(T.format,T.colorSpace),te=a.convert(T.type),se,fe=v(T.internalFormat,ne,te,T.colorSpace,T.isVideoTexture);B(F,T);let me=T.mipmaps,we=T.isVideoTexture!==!0,Ae=b.__version===void 0||P===!0,Xe=O.dataReady,Be=w(T,V);if(T.isDepthTexture)fe=_(T.format===aa,T.type),Ae&&(we?t.texStorage2D(n.TEXTURE_2D,1,fe,V.width,V.height):t.texImage2D(n.TEXTURE_2D,0,fe,V.width,V.height,0,ne,te,null));else if(T.isDataTexture)if(me.length>0){we&&Ae&&t.texStorage2D(n.TEXTURE_2D,Be,fe,me[0].width,me[0].height);for(let Se=0,et=me.length;Se<et;Se++)se=me[Se],we?Xe&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,se.width,se.height,ne,te,se.data):t.texImage2D(n.TEXTURE_2D,Se,fe,se.width,se.height,0,ne,te,se.data);T.generateMipmaps=!1}else we?(Ae&&t.texStorage2D(n.TEXTURE_2D,Be,fe,V.width,V.height),Xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,V.width,V.height,ne,te,V.data)):t.texImage2D(n.TEXTURE_2D,0,fe,V.width,V.height,0,ne,te,V.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){we&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,fe,me[0].width,me[0].height,V.depth);for(let Se=0,et=me.length;Se<et;Se++)if(se=me[Se],T.format!==Zt)if(ne!==null)if(we){if(Xe)if(T.layerUpdates.size>0){let ht=Zp(se.width,se.height,T.format,T.type);for(let gt of T.layerUpdates){let _e=se.data.subarray(gt*ht/se.data.BYTES_PER_ELEMENT,(gt+1)*ht/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,gt,se.width,se.height,1,ne,_e)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,se.width,se.height,V.depth,ne,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,fe,se.width,se.height,V.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?Xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,se.width,se.height,V.depth,ne,te,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,fe,se.width,se.height,V.depth,0,ne,te,se.data)}else{we&&Ae&&t.texStorage2D(n.TEXTURE_2D,Be,fe,me[0].width,me[0].height);for(let Se=0,et=me.length;Se<et;Se++)se=me[Se],T.format!==Zt?ne!==null?we?Xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,se.width,se.height,ne,se.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,fe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Xe&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,se.width,se.height,ne,te,se.data):t.texImage2D(n.TEXTURE_2D,Se,fe,se.width,se.height,0,ne,te,se.data)}else if(T.isDataArrayTexture)if(we){if(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,fe,V.width,V.height,V.depth),Xe)if(T.layerUpdates.size>0){let Se=Zp(V.width,V.height,T.format,T.type);for(let et of T.layerUpdates){let ht=V.data.subarray(et*Se/V.data.BYTES_PER_ELEMENT,(et+1)*Se/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,V.width,V.height,1,ne,te,ht)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,ne,te,V.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,V.width,V.height,V.depth,0,ne,te,V.data);else if(T.isData3DTexture)we?(Ae&&t.texStorage3D(n.TEXTURE_3D,Be,fe,V.width,V.height,V.depth),Xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,ne,te,V.data)):t.texImage3D(n.TEXTURE_3D,0,fe,V.width,V.height,V.depth,0,ne,te,V.data);else if(T.isFramebufferTexture){if(Ae)if(we)t.texStorage2D(n.TEXTURE_2D,Be,fe,V.width,V.height);else{let Se=V.width,et=V.height;for(let ht=0;ht<Be;ht++)t.texImage2D(n.TEXTURE_2D,ht,fe,Se,et,0,ne,te,null),Se>>=1,et>>=1}}else if(me.length>0){if(we&&Ae){let Se=he(me[0]);t.texStorage2D(n.TEXTURE_2D,Be,fe,Se.width,Se.height)}for(let Se=0,et=me.length;Se<et;Se++)se=me[Se],we?Xe&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,ne,te,se):t.texImage2D(n.TEXTURE_2D,Se,fe,ne,te,se);T.generateMipmaps=!1}else if(we){if(Ae){let Se=he(V);t.texStorage2D(n.TEXTURE_2D,Be,fe,Se.width,Se.height)}Xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne,te,V)}else t.texImage2D(n.TEXTURE_2D,0,fe,ne,te,V);f(T)&&y(F),b.__version=O.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function j(C,T,k,F,P,O){let b=a.convert(k.format,k.colorSpace),N=a.convert(k.type),G=v(k.internalFormat,b,N,k.colorSpace),re=i.get(T),V=i.get(k);if(V.__renderTarget=T,!re.__hasExternalTextures){let ne=Math.max(1,T.width>>O),te=Math.max(1,T.height>>O);P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?t.texImage3D(P,O,G,ne,te,T.depth,0,b,N,null):t.texImage2D(P,O,G,ne,te,0,b,N,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),de(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,P,V.__webglTexture,0,oe(T)):(P===n.TEXTURE_2D||P>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,P,V.__webglTexture,O),t.bindFramebuffer(n.FRAMEBUFFER,null)}function J(C,T,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),T.depthBuffer){let F=T.depthTexture,P=F&&F.isDepthTexture?F.type:null,O=_(T.stencilBuffer,P),b=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,N=oe(T);de(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,O,T.width,T.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,N,O,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,O,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,b,n.RENDERBUFFER,C)}else{let F=T.textures;for(let P=0;P<F.length;P++){let O=F[P],b=a.convert(O.format,O.colorSpace),N=a.convert(O.type),G=v(O.internalFormat,b,N,O.colorSpace),re=oe(T);k&&de(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,G,T.width,T.height):de(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,G,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,G,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(C){let T=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let F=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),F){let P=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,F.removeEventListener("dispose",P)};F.addEventListener("dispose",P),T.__depthDisposeCallback=P}T.__boundDepthTexture=F}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");(function(F,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,F),!P.depthTexture||!P.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=i.get(P.depthTexture);O.__renderTarget=P,O.__webglTexture&&P.depthTexture.image.width===P.width&&P.depthTexture.image.height===P.height||(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),U(P.depthTexture,0);let b=O.__webglTexture,N=oe(P);if(P.depthTexture.format===es)de(P)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,b,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,b,0);else{if(P.depthTexture.format!==aa)throw new Error("Unknown depthTexture format");de(P)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,b,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,b,0)}})(T.__webglFramebuffer,C)}else if(k){T.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[F]),T.__webglDepthbuffer[F]===void 0)T.__webglDepthbuffer[F]=n.createRenderbuffer(),J(T.__webglDepthbuffer[F],C,!1);else{let P=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=T.__webglDepthbuffer[F];n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,P,n.RENDERBUFFER,O)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),J(T.__webglDepthbuffer,C,!1);else{let F=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,P=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,P),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,P)}t.bindFramebuffer(n.FRAMEBUFFER,null)}let ve=[],ee=[];function oe(C){return Math.min(r.maxSamples,C.samples)}function de(C){let T=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ye(C,T){let k=C.colorSpace,F=C.format,P=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==fa&&k!==vn&&(Ye.getTransfer(k)===rt?F===Zt&&P===hn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),T}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=function(){let C=A;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),A+=1,C},this.resetTextureUnits=function(){A=0},this.setTexture2D=U,this.setTexture2DArray=function(C,T){let k=i.get(C);C.version>0&&k.__version!==C.version?X(k,C,T):t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+T)},this.setTexture3D=function(C,T){let k=i.get(C);C.version>0&&k.__version!==C.version?X(k,C,T):t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+T)},this.setTextureCube=function(C,T){let k=i.get(C);C.version>0&&k.__version!==C.version?(function(F,P,O){if(P.image.length!==6)return;let b=Z(F,P),N=P.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+O);let G=i.get(N);if(N.version!==G.__version||b===!0){t.activeTexture(n.TEXTURE0+O);let re=Ye.getPrimaries(Ye.workingColorSpace),V=P.colorSpace===vn?null:Ye.getPrimaries(P.colorSpace),ne=P.colorSpace===vn||re===V?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let te=P.isCompressedTexture||P.image[0].isCompressedTexture,se=P.image[0]&&P.image[0].isDataTexture,fe=[];for(let _e=0;_e<6;_e++)fe[_e]=te||se?se?P.image[_e].image:P.image[_e]:g(P.image[_e],!0,r.maxCubemapSize),fe[_e]=ye(P,fe[_e]);let me=fe[0],we=a.convert(P.format,P.colorSpace),Ae=a.convert(P.type),Xe=v(P.internalFormat,we,Ae,P.colorSpace),Be=P.isVideoTexture!==!0,Se=G.__version===void 0||b===!0,et=N.dataReady,ht,gt=w(P,me);if(B(n.TEXTURE_CUBE_MAP,P),te){Be&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Xe,me.width,me.height);for(let _e=0;_e<6;_e++){ht=fe[_e].mipmaps;for(let Ge=0;Ge<ht.length;Ge++){let at=ht[Ge];P.format!==Zt?we!==null?Be?et&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge,0,0,at.width,at.height,we,at.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge,Xe,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?et&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge,0,0,at.width,at.height,we,Ae,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge,Xe,at.width,at.height,0,we,Ae,at.data)}}}else{if(ht=P.mipmaps,Be&&Se){ht.length>0&&gt++;let _e=he(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Xe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(se){Be?et&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,fe[_e].width,fe[_e].height,we,Ae,fe[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Xe,fe[_e].width,fe[_e].height,0,we,Ae,fe[_e].data);for(let Ge=0;Ge<ht.length;Ge++){let at=ht[Ge].image[_e].image;Be?et&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge+1,0,0,at.width,at.height,we,Ae,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge+1,Xe,at.width,at.height,0,we,Ae,at.data)}}else{Be?et&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,we,Ae,fe[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Xe,we,Ae,fe[_e]);for(let Ge=0;Ge<ht.length;Ge++){let at=ht[Ge];Be?et&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge+1,0,0,we,Ae,at.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ge+1,Xe,we,Ae,at.image[_e])}}}f(P)&&y(n.TEXTURE_CUBE_MAP),G.__version=N.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version})(k,C,T):t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+T)},this.rebindTextures=function(C,T,k){let F=i.get(C);T!==void 0&&j(F.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&pe(C)},this.setupRenderTarget=function(C){let T=C.texture,k=i.get(C),F=i.get(T);C.addEventListener("dispose",R);let P=C.textures,O=C.isWebGLCubeRenderTarget===!0,b=P.length>1;if(b||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=T.version,s.memory.textures++),O){k.__webglFramebuffer=[];for(let N=0;N<6;N++)if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[N]=[];for(let G=0;G<T.mipmaps.length;G++)k.__webglFramebuffer[N][G]=n.createFramebuffer()}else k.__webglFramebuffer[N]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let N=0;N<T.mipmaps.length;N++)k.__webglFramebuffer[N]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(b)for(let N=0,G=P.length;N<G;N++){let re=i.get(P[N]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),s.memory.textures++)}if(C.samples>0&&de(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let N=0;N<P.length;N++){let G=P[N];k.__webglColorRenderbuffer[N]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[N]);let re=a.convert(G.format,G.colorSpace),V=a.convert(G.type),ne=v(G.internalFormat,re,V,G.colorSpace,C.isXRRenderTarget===!0),te=oe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ne,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+N,n.RENDERBUFFER,k.__webglColorRenderbuffer[N])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),J(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(O){t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),B(n.TEXTURE_CUBE_MAP,T);for(let N=0;N<6;N++)if(T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)j(k.__webglFramebuffer[N][G],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,G);else j(k.__webglFramebuffer[N],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);f(T)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(b){for(let N=0,G=P.length;N<G;N++){let re=P[N],V=i.get(re);t.bindTexture(n.TEXTURE_2D,V.__webglTexture),B(n.TEXTURE_2D,re),j(k.__webglFramebuffer,C,re,n.COLOR_ATTACHMENT0+N,n.TEXTURE_2D,0),f(re)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let N=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(N=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(N,F.__webglTexture),B(N,T),T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)j(k.__webglFramebuffer[G],C,T,n.COLOR_ATTACHMENT0,N,G);else j(k.__webglFramebuffer,C,T,n.COLOR_ATTACHMENT0,N,0);f(T)&&y(N),t.unbindTexture()}C.depthBuffer&&pe(C)},this.updateRenderTargetMipmap=function(C){let T=C.textures;for(let k=0,F=T.length;k<F;k++){let P=T[k];if(f(P)){let O=x(C),b=i.get(P).__webglTexture;t.bindTexture(O,b),y(O),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(C){if(C.samples>0){if(de(C)===!1){let T=C.textures,k=C.width,F=C.height,P=n.COLOR_BUFFER_BIT,O=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,b=i.get(C),N=T.length>1;if(N)for(let G=0;G<T.length;G++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,b.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,b.__webglFramebuffer);for(let G=0;G<T.length;G++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(P|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(P|=n.STENCIL_BUFFER_BIT)),N){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,b.__webglColorRenderbuffer[G]);let re=i.get(T[G]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,k,F,0,0,k,F,P,n.NEAREST),l===!0&&(ve.length=0,ee.length=0,ve.push(n.COLOR_ATTACHMENT0+G),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ve.push(O),ee.push(O),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),N)for(let G=0;G<T.length;G++){t.bindFramebuffer(n.FRAMEBUFFER,b.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,b.__webglColorRenderbuffer[G]);let re=i.get(T[G]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,b.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let T=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}},this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=j,this.useMultisampledRTT=de}function nx(n,e){return{convert:function(t,i=""){let r,a=Ye.getTransfer(i);if(t===hn)return n.UNSIGNED_BYTE;if(t===uu)return n.UNSIGNED_SHORT_4_4_4_4;if(t===du)return n.UNSIGNED_SHORT_5_5_5_1;if(t===pm)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===um)return n.BYTE;if(t===dm)return n.SHORT;if(t===Qa)return n.UNSIGNED_SHORT;if(t===hu)return n.INT;if(t===vr)return n.UNSIGNED_INT;if(t===gi)return n.FLOAT;if(t===ps)return n.HALF_FLOAT;if(t===mm)return n.ALPHA;if(t===fm)return n.RGB;if(t===Zt)return n.RGBA;if(t===gm)return n.LUMINANCE;if(t===vm)return n.LUMINANCE_ALPHA;if(t===es)return n.DEPTH_COMPONENT;if(t===aa)return n.DEPTH_STENCIL;if(t===Hi)return n.RED;if(t===pu)return n.RED_INTEGER;if(t===ym)return n.RG;if(t===mu)return n.RG_INTEGER;if(t===fu)return n.RGBA_INTEGER;if(t===Jr||t===To||t===Ao||t===Ro)if(a===rt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===zc||t===Bc||t===Hc||t===Vc){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Gc||t===Wc||t===jc){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Gc||t===Wc)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===jc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===qc||t===Xc||t===Yc||t===Kc||t===$c||t===Zc||t===Jc||t===Qc||t===eh||t===th||t===nh||t===ih||t===rh||t===ah){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===qc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Xc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Yc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Kc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===$c)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Zc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Jc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Qc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===eh)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===th)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===nh)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===ih)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===rh)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===ah)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Co||t===sh||t===oh){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Co)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===sh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===oh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===xm||t===lh||t===ch||t===hh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(t===lh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ra?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var Th=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},tn=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ix={type:"move"},$a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let g of e.hand.values()){let f=t.getJointPose(g,i),y=this._getHandJoint(c,g);f!==null&&(y.matrix.fromArray(f.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=f.radius),y.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ix)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Pt;e.properties.get(r).__webglTexture=t.texture,t.depthNear==i.depthNear&&t.depthFar==i.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ze({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends Oi{constructor(e,t){super();let i=this,r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,g=new Ah,f=t.getContextAttributes(),y=null,x=null,v=[],_=[],w=new ae,M=null,R=new $t;R.viewport=new qe;let D=new $t;D.viewport=new qe;let A=[R,D],U=new Th,I=null,L=null;function H(ee){let oe=_.indexOf(ee.inputSource);if(oe===-1)return;let de=v[oe];de!==void 0&&(de.update(ee.inputSource,ee.frame,c||s),de.dispatchEvent({type:ee.type,data:ee.inputSource}))}function B(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",Z);for(let ee=0;ee<v.length;ee++){let oe=_[ee];oe!==null&&(_[ee]=null,v[ee].disconnect(oe))}I=null,L=null,g.reset(),e.setRenderTarget(y),p=null,d=null,u=null,r=null,x=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}function Z(ee){for(let oe=0;oe<ee.removed.length;oe++){let de=ee.removed[oe],ye=_.indexOf(de);ye>=0&&(_[ye]=null,v[ye].disconnect(de))}for(let oe=0;oe<ee.added.length;oe++){let de=ee.added[oe],ye=_.indexOf(de);if(ye===-1){for(let C=0;C<v.length;C++){if(C>=_.length){_.push(de),ye=C;break}if(_[C]===null){_[C]=de,ye=C;break}}if(ye===-1)break}let he=v[ye];he&&he.connect(de)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let oe=v[ee];return oe===void 0&&(oe=new $a,v[ee]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ee){let oe=v[ee];return oe===void 0&&(oe=new $a,v[ee]=oe),oe.getGripSpace()},this.getHand=function(ee){let oe=v[ee];return oe===void 0&&(oe=new $a,v[ee]=oe),oe.getHandSpace()},this.setFramebufferScaleFactor=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",B),r.addEventListener("inputsourceschange",Z),f.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){let oe={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Jt(p.framebufferWidth,p.framebufferHeight,{format:Zt,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let oe=null,de=null,ye=null;f.depth&&(ye=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=f.stencil?aa:es,de=f.stencil?ra:vr);let he={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:a};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(he),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Jt(d.textureWidth,d.textureHeight,{format:Zt,type:hn,depthTexture:new Bo(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};let X=new S,j=new S;function J(ee,oe){oe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(oe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let oe=ee.near,de=ee.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(de=g.depthFar)),U.near=D.near=R.near=oe,U.far=D.far=R.far=de,I===U.near&&L===U.far||(r.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,L=U.far),R.layers.mask=2|ee.layers.mask,D.layers.mask=4|ee.layers.mask,U.layers.mask=R.layers.mask|D.layers.mask;let ye=ee.parent,he=U.cameras;J(U,ye);for(let C=0;C<he.length;C++)J(he[C],ye);he.length===2?(function(C,T,k){X.setFromMatrixPosition(T.matrixWorld),j.setFromMatrixPosition(k.matrixWorld);let F=X.distanceTo(j),P=T.projectionMatrix.elements,O=k.projectionMatrix.elements,b=P[14]/(P[10]-1),N=P[14]/(P[10]+1),G=(P[9]+1)/P[5],re=(P[9]-1)/P[5],V=(P[8]-1)/P[0],ne=(O[8]+1)/O[0],te=b*V,se=b*ne,fe=F/(-V+ne),me=fe*-V;if(T.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(me),C.translateZ(fe),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),P[10]===-1)C.projectionMatrix.copy(T.projectionMatrix),C.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{let we=b+fe,Ae=N+fe,Xe=te-me,Be=se+(F-me),Se=G*N/Ae*we,et=re*N/Ae*we;C.projectionMatrix.makePerspective(Xe,Be,Se,et,we,Ae),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}})(U,R,D):U.projectionMatrix.copy(R.projectionMatrix),(function(C,T,k){k===null?C.matrix.copy(T.matrixWorld):(C.matrix.copy(k.matrixWorld),C.matrix.invert(),C.matrix.multiply(T.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(T.projectionMatrix),C.projectionMatrixInverse.copy(T.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=2*ts*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)})(ee,U,ye)},this.getCamera=function(){return U},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)};let pe=null,ve=new Sm;ve.setAnimationLoop((function(ee,oe){if(h=oe.getViewerPose(c||s),m=oe,h!==null){let de=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ye=!1;de.length!==U.cameras.length&&(U.cameras.length=0,ye=!0);for(let C=0;C<de.length;C++){let T=de[C],k=null;if(p!==null)k=p.getViewport(T);else{let P=u.getViewSubImage(d,T);k=P.viewport,C===0&&(e.setRenderTargetTextures(x,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(x))}let F=A[C];F===void 0&&(F=new $t,F.layers.enable(C),F.viewport=new qe,A[C]=F),F.matrix.fromArray(T.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(T.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(k.x,k.y,k.width,k.height),C===0&&(U.matrix.copy(F.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ye===!0&&U.cameras.push(F)}let he=r.enabledFeatures;if(he&&he.includes("depth-sensing")){let C=u.getDepthInformation(de[0]);C&&C.isValid&&C.texture&&g.init(e,C,r.renderState)}}for(let de=0;de<v.length;de++){let ye=_[de],he=v[de];ye!==null&&he!==void 0&&he.update(ye,oe,c||s)}pe&&pe(ee,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),m=null})),this.setAnimationLoop=function(ee){pe=ee},this.dispose=function(){}}},ur=new yi,rx=new Ue;function ax(n,e){function t(r,a){r.matrixAutoUpdate===!0&&r.updateMatrix(),a.value.copy(r.matrix)}function i(r,a){r.opacity.value=a.opacity,a.color&&r.diffuse.value.copy(a.color),a.emissive&&r.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(r.map.value=a.map,t(a.map,r.mapTransform)),a.alphaMap&&(r.alphaMap.value=a.alphaMap,t(a.alphaMap,r.alphaMapTransform)),a.bumpMap&&(r.bumpMap.value=a.bumpMap,t(a.bumpMap,r.bumpMapTransform),r.bumpScale.value=a.bumpScale,a.side===1&&(r.bumpScale.value*=-1)),a.normalMap&&(r.normalMap.value=a.normalMap,t(a.normalMap,r.normalMapTransform),r.normalScale.value.copy(a.normalScale),a.side===1&&r.normalScale.value.negate()),a.displacementMap&&(r.displacementMap.value=a.displacementMap,t(a.displacementMap,r.displacementMapTransform),r.displacementScale.value=a.displacementScale,r.displacementBias.value=a.displacementBias),a.emissiveMap&&(r.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,r.emissiveMapTransform)),a.specularMap&&(r.specularMap.value=a.specularMap,t(a.specularMap,r.specularMapTransform)),a.alphaTest>0&&(r.alphaTest.value=a.alphaTest);let s=e.get(a),o=s.envMap,l=s.envMapRotation;o&&(r.envMap.value=o,ur.copy(l),ur.x*=-1,ur.y*=-1,ur.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),r.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler(ur)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=a.reflectivity,r.ior.value=a.ior,r.refractionRatio.value=a.refractionRatio),a.lightMap&&(r.lightMap.value=a.lightMap,r.lightMapIntensity.value=a.lightMapIntensity,t(a.lightMap,r.lightMapTransform)),a.aoMap&&(r.aoMap.value=a.aoMap,r.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,a){a.color.getRGB(r.fogColor.value,wm(n)),a.isFog?(r.fogNear.value=a.near,r.fogFar.value=a.far):a.isFogExp2&&(r.fogDensity.value=a.density)},refreshMaterialUniforms:function(r,a,s,o,l){a.isMeshBasicMaterial||a.isMeshLambertMaterial?i(r,a):a.isMeshToonMaterial?(i(r,a),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,a)):a.isMeshPhongMaterial?(i(r,a),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,a)):a.isMeshStandardMaterial?(i(r,a),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,a),a.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,a,l)):a.isMeshMatcapMaterial?(i(r,a),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,a)):a.isMeshDepthMaterial?i(r,a):a.isMeshDistanceMaterial?(i(r,a),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,a)):a.isMeshNormalMaterial?i(r,a):a.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,a),a.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,a)):a.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,a,s,o):a.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,a):a.isShadowMaterial?(r.color.value.copy(a.color),r.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function sx(n,e,t,i){let r={},a={},s=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,m){let g=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let y=m[f];if(typeof g=="number"||typeof g=="boolean"){if(y!==g)return m[f]=g,!0}else if(y.equals(g)===!1)return y.copy(g),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=s.indexOf(d.__bindingPointIndex);s.splice(p,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete a[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(f){let y=f.uniforms,x=0,v=16;for(let w=0,M=y.length;w<M;w++){let R=Array.isArray(y[w])?y[w]:[y[w]];for(let D=0,A=R.length;D<A;D++){let U=R[D],I=Array.isArray(U.value)?U.value:[U.value];for(let L=0,H=I.length;L<H;L++){let B=c(I[L]),Z=x%v,X=Z%B.boundary,j=Z+X;x+=X,j!==0&&v-j<B.storage&&(x+=v-j),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=B.storage}}}let _=x%v;_>0&&(x+=v-_),f.__size=x,f.__cache={}})(u),p=(function(f){let y=(function(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=y;let x=n.createBuffer(),v=f.__size,_=f.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,v,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x})(u),r[u.id]=p,u.addEventListener("dispose",h));let m=d.program;i.updateUBOMapping(u,m);let g=e.render.frame;a[u.id]!==g&&((function(f){let y=r[f.id],x=f.uniforms,v=f.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let _=0,w=x.length;_<w;_++){let M=Array.isArray(x[_])?x[_]:[x[_]];for(let R=0,D=M.length;R<D;R++){let A=M[R];if(l(A,_,R,v)===!0){let U=A.__offset,I=Array.isArray(A.value)?A.value:[A.value],L=0;for(let H=0;H<I.length;H++){let B=I[H],Z=c(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,U+L,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),a[u.id]=g)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);s=[],r={},a={}}}}var Ho=class{constructor(e={}){let{canvas:t=gv(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;let m=new Uint32Array(4),g=new Int32Array(4),f=null,y=null,x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=0,this.toneMappingExposure=1;let _=this,w=!1,M=0,R=0,D=null,A=-1,U=null,I=new qe,L=new qe,H=null,B=new Ve(0),Z=0,X=t.width,j=t.height,J=1,pe=null,ve=null,ee=new qe(0,0,X,j),oe=new qe(0,0,X,j),de=!1,ye=new rs,he=!1,C=!1,T=new Ue,k=new Ue,F=new S,P=new qe,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},b=!1;function N(){return D===null?J:1}let G,re,V,ne,te,se,fe,me,we,Ae,Xe,Be,Se,et,ht,gt,_e,Ge,at,Pr,Gs,An,jn,nr,q=i;function Oa(E,K){return t.getContext(E,K)}try{let E={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Hd,!1),t.addEventListener("webglcontextrestored",Vd,!1),t.addEventListener("webglcontextcreationerror",Gd,!1),q===null){let K="webgl2";if(q=Oa(K,E),q===null)throw Oa(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function Bd(){G=new Hv(q),G.init(),An=new nx(q,G),re=new Fv(q,G,e,An),V=new ex(q,G),re.reverseDepthBuffer&&d&&V.buffers.depth.setReversed(!0),ne=new Wv(q),te=new Wy,se=new tx(q,G,V,te,re,An,ne),fe=new zv(_),me=new Bv(_),we=new Iv(q),jn=new Nv(q,we),Ae=new Vv(q,we,ne,jn),Xe=new qv(q,Ae,we,ne),at=new jv(q,re,se),gt=new kv(te),Be=new Gy(_,fe,me,G,re,jn,gt),Se=new ax(_,te),et=new qy,ht=new Zy(G),Ge=new Uv(_,fe,me,V,Xe,p,l),_e=new Jy(_,Xe,re),nr=new sx(q,ne,re,V),Pr=new Ov(q,G,ne),Gs=new Gv(q,G,ne),ne.programs=Be.programs,_.capabilities=re,_.extensions=G,_.properties=te,_.renderLists=et,_.shadowMap=_e,_.state=V,_.info=ne}Bd();let Nt=new Rh(_,q);function Hd(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Vd(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=ne.autoReset,K=_e.enabled,Q=_e.autoUpdate,ie=_e.needsUpdate,$=_e.type;Bd(),ne.autoReset=E,_e.enabled=K,_e.autoUpdate=Q,_e.needsUpdate=ie,_e.type=$}function Gd(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wd(E){let K=E.target;K.removeEventListener("dispose",Wd),(function(Q){(function(ie){let $=te.get(ie).programs;$!==void 0&&($.forEach((function(le){Be.releaseProgram(le)})),ie.isShaderMaterial&&Be.releaseShaderCache(ie))})(Q),te.remove(Q)})(K)}function jd(E,K,Q){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,js(E,K,Q),E.side=0,E.needsUpdate=!0,js(E,K,Q),E.side=2):js(E,K,Q)}this.xr=Nt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let E=G.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=G.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(X,j,!1))},this.getSize=function(E){return E.set(X,j)},this.setSize=function(E,K,Q=!0){Nt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(X=E,j=K,t.width=Math.floor(E*J),t.height=Math.floor(K*J),Q===!0&&(t.style.width=E+"px",t.style.height=K+"px"),this.setViewport(0,0,E,K))},this.getDrawingBufferSize=function(E){return E.set(X*J,j*J).floor()},this.setDrawingBufferSize=function(E,K,Q){X=E,j=K,J=Q,t.width=Math.floor(E*Q),t.height=Math.floor(K*Q),this.setViewport(0,0,E,K)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(ee)},this.setViewport=function(E,K,Q,ie){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,K,Q,ie),V.viewport(I.copy(ee).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,K,Q,ie){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,K,Q,ie),V.scissor(L.copy(oe).multiplyScalar(J).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(E){V.setScissorTest(de=E)},this.setOpaqueSort=function(E){pe=E},this.setTransparentSort=function(E){ve=E},this.getClearColor=function(E){return E.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(E=!0,K=!0,Q=!0){let ie=0;if(E){let $=!1;if(D!==null){let le=D.texture.format;$=le===fu||le===mu||le===pu}if($){let le=D.texture.type,ge=le===hn||le===vr||le===Qa||le===ra||le===uu||le===du,Me=Ge.getClearColor(),be=Ge.getClearAlpha(),Ie=Me.r,Ne=Me.g,Te=Me.b;ge?(m[0]=Ie,m[1]=Ne,m[2]=Te,m[3]=be,q.clearBufferuiv(q.COLOR,0,m)):(g[0]=Ie,g[1]=Ne,g[2]=Te,g[3]=be,q.clearBufferiv(q.COLOR,0,g))}else ie|=q.COLOR_BUFFER_BIT}K&&(ie|=q.DEPTH_BUFFER_BIT),Q&&(ie|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Hd,!1),t.removeEventListener("webglcontextrestored",Vd,!1),t.removeEventListener("webglcontextcreationerror",Gd,!1),et.dispose(),ht.dispose(),te.dispose(),fe.dispose(),me.dispose(),Xe.dispose(),jn.dispose(),nr.dispose(),Be.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",qd),Nt.removeEventListener("sessionend",Xd),ir.stop()},this.renderBufferDirect=function(E,K,Q,ie,$,le){K===null&&(K=O);let ge=$.isMesh&&$.matrixWorld.determinant()<0,Me=(function(je,Xt,zt,ke,Le){Xt.isScene!==!0&&(Xt=O),se.resetTextureUnits();let Rn=Xt.fog,$l=ke.isMeshStandardMaterial?Xt.environment:null,Fa=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:fa,Ir=(ke.isMeshStandardMaterial?me:fe).get(ke.envMap||$l),Zl=ke.vertexColors===!0&&!!zt.attributes.color&&zt.attributes.color.itemSize===4,Jl=!!zt.attributes.tangent&&(!!ke.normalMap||ke.anisotropy>0),Ql=!!zt.morphAttributes.position,Ai=!!zt.morphAttributes.normal,F0=!!zt.morphAttributes.color,Qd=0;ke.toneMapped&&(D!==null&&D.isXRRenderTarget!==!0||(Qd=_.toneMapping));let ep=zt.morphAttributes.position||zt.morphAttributes.normal||zt.morphAttributes.color,k0=ep!==void 0?ep.length:0,We=te.get(ke),z0=y.state.lights;if(he===!0&&(C===!0||je!==U)){let fn=je===U&&ke.id===A;gt.setState(ke,je,fn)}let Cn=!1;ke.version===We.__version?We.needsLights&&We.lightsStateVersion!==z0.state.version||We.outputColorSpace!==Fa||Le.isBatchedMesh&&We.batching===!1?Cn=!0:Le.isBatchedMesh||We.batching!==!0?Le.isBatchedMesh&&We.batchingColor===!0&&Le.colorTexture===null||Le.isBatchedMesh&&We.batchingColor===!1&&Le.colorTexture!==null||Le.isInstancedMesh&&We.instancing===!1?Cn=!0:Le.isInstancedMesh||We.instancing!==!0?Le.isSkinnedMesh&&We.skinning===!1?Cn=!0:Le.isSkinnedMesh||We.skinning!==!0?Le.isInstancedMesh&&We.instancingColor===!0&&Le.instanceColor===null||Le.isInstancedMesh&&We.instancingColor===!1&&Le.instanceColor!==null||Le.isInstancedMesh&&We.instancingMorph===!0&&Le.morphTexture===null||Le.isInstancedMesh&&We.instancingMorph===!1&&Le.morphTexture!==null||We.envMap!==Ir||ke.fog===!0&&We.fog!==Rn?Cn=!0:We.numClippingPlanes===void 0||We.numClippingPlanes===gt.numPlanes&&We.numIntersection===gt.numIntersection?(We.vertexAlphas!==Zl||We.vertexTangents!==Jl||We.morphTargets!==Ql||We.morphNormals!==Ai||We.morphColors!==F0||We.toneMapping!==Qd||We.morphTargetsCount!==k0)&&(Cn=!0):Cn=!0:Cn=!0:Cn=!0:Cn=!0:(Cn=!0,We.__version=ke.version);let rr=We.currentProgram;Cn===!0&&(rr=js(ke,Xt,Le));let tp=!1,ka=!1,ec=!1,bt=rr.getUniforms(),Ri=We.uniforms;if(V.useProgram(rr.program)&&(tp=!0,ka=!0,ec=!0),ke.id!==A&&(A=ke.id,ka=!0),tp||U!==je){V.buffers.depth.getReversed()?(T.copy(je.projectionMatrix),(function(ar){let pt=ar.elements;pt[2]=.5*pt[2]+.5*pt[3],pt[6]=.5*pt[6]+.5*pt[7],pt[10]=.5*pt[10]+.5*pt[11],pt[14]=.5*pt[14]+.5*pt[15]})(T),(function(ar){let pt=ar.elements;pt[11]===-1?(pt[10]=-pt[10]-1,pt[14]=-pt[14]):(pt[10]=-pt[10],pt[14]=1-pt[14])})(T),bt.setValue(q,"projectionMatrix",T)):bt.setValue(q,"projectionMatrix",je.projectionMatrix),bt.setValue(q,"viewMatrix",je.matrixWorldInverse);let fn=bt.map.cameraPosition;fn!==void 0&&fn.setValue(q,F.setFromMatrixPosition(je.matrixWorld)),re.logarithmicDepthBuffer&&bt.setValue(q,"logDepthBufFC",2/(Math.log(je.far+1)/Math.LN2)),(ke.isMeshPhongMaterial||ke.isMeshToonMaterial||ke.isMeshLambertMaterial||ke.isMeshBasicMaterial||ke.isMeshStandardMaterial||ke.isShaderMaterial)&&bt.setValue(q,"isOrthographic",je.isOrthographicCamera===!0),U!==je&&(U=je,ka=!0,ec=!0)}if(Le.isSkinnedMesh){bt.setOptional(q,Le,"bindMatrix"),bt.setOptional(q,Le,"bindMatrixInverse");let fn=Le.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),bt.setValue(q,"boneTexture",fn.boneTexture,se))}Le.isBatchedMesh&&(bt.setOptional(q,Le,"batchingTexture"),bt.setValue(q,"batchingTexture",Le._matricesTexture,se),bt.setOptional(q,Le,"batchingIdTexture"),bt.setValue(q,"batchingIdTexture",Le._indirectTexture,se),bt.setOptional(q,Le,"batchingColorTexture"),Le._colorsTexture!==null&&bt.setValue(q,"batchingColorTexture",Le._colorsTexture,se));let tc=zt.morphAttributes;tc.position===void 0&&tc.normal===void 0&&tc.color===void 0||at.update(Le,zt,rr),(ka||We.receiveShadow!==Le.receiveShadow)&&(We.receiveShadow=Le.receiveShadow,bt.setValue(q,"receiveShadow",Le.receiveShadow)),ke.isMeshGouraudMaterial&&ke.envMap!==null&&(Ri.envMap.value=Ir,Ri.flipEnvMap.value=Ir.isCubeTexture&&Ir.isRenderTargetTexture===!1?-1:1),ke.isMeshStandardMaterial&&ke.envMap===null&&Xt.environment!==null&&(Ri.envMapIntensity.value=Xt.environmentIntensity),ka&&(bt.setValue(q,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&(Ln=ec,(qn=Ri).ambientLightColor.needsUpdate=Ln,qn.lightProbe.needsUpdate=Ln,qn.directionalLights.needsUpdate=Ln,qn.directionalLightShadows.needsUpdate=Ln,qn.pointLights.needsUpdate=Ln,qn.pointLightShadows.needsUpdate=Ln,qn.spotLights.needsUpdate=Ln,qn.spotLightShadows.needsUpdate=Ln,qn.rectAreaLights.needsUpdate=Ln,qn.hemisphereLights.needsUpdate=Ln),Rn&&ke.fog===!0&&Se.refreshFogUniforms(Ri,Rn),Se.refreshMaterialUniforms(Ri,ke,J,j,y.state.transmissionRenderTarget[je.id]),ta.upload(q,Zd(We),Ri,se));var qn,Ln;if(ke.isShaderMaterial&&ke.uniformsNeedUpdate===!0&&(ta.upload(q,Zd(We),Ri,se),ke.uniformsNeedUpdate=!1),ke.isSpriteMaterial&&bt.setValue(q,"center",Le.center),bt.setValue(q,"modelViewMatrix",Le.modelViewMatrix),bt.setValue(q,"normalMatrix",Le.normalMatrix),bt.setValue(q,"modelMatrix",Le.matrixWorld),ke.isShaderMaterial||ke.isRawShaderMaterial){let fn=ke.uniformsGroups;for(let ar=0,pt=fn.length;ar<pt;ar++){let np=fn[ar];nr.update(np,rr),nr.bind(np,rr)}}return rr})(E,K,Q,ie,$);V.setMaterial(ie,ge);let be=Q.index,Ie=1;if(ie.wireframe===!0){if(be=Ae.getWireframeAttribute(Q),be===void 0)return;Ie=2}let Ne=Q.drawRange,Te=Q.attributes.position,He=Ne.start*Ie,_t=(Ne.start+Ne.count)*Ie;le!==null&&(He=Math.max(He,le.start*Ie),_t=Math.min(_t,(le.start+le.count)*Ie)),be!==null?(He=Math.max(He,0),_t=Math.min(_t,be.count)):Te!=null&&(He=Math.max(He,0),_t=Math.min(_t,Te.count));let ut=_t-He;if(ut<0||ut===1/0)return;let Lt;jn.setup($,ie,Me,Q,be);let dt=Pr;if(be!==null&&(Lt=we.get(be),dt=Gs,dt.setIndex(Lt)),$.isMesh)ie.wireframe===!0?(V.setLineWidth(ie.wireframeLinewidth*N()),dt.setMode(q.LINES)):dt.setMode(q.TRIANGLES);else if($.isLine){let je=ie.linewidth;je===void 0&&(je=1),V.setLineWidth(je*N()),$.isLineSegments?dt.setMode(q.LINES):$.isLineLoop?dt.setMode(q.LINE_LOOP):dt.setMode(q.LINE_STRIP)}else $.isPoints?dt.setMode(q.POINTS):$.isSprite&&dt.setMode(q.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)dt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))dt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let je=$._multiDrawStarts,Xt=$._multiDrawCounts,zt=$._multiDrawCount,ke=be?we.get(be).bytesPerElement:1,Le=te.get(ie).currentProgram.getUniforms();for(let Rn=0;Rn<zt;Rn++)Le.setValue(q,"_gl_DrawID",Rn),dt.render(je[Rn]/ke,Xt[Rn])}else if($.isInstancedMesh)dt.renderInstances(He,ut,$.count);else if(Q.isInstancedBufferGeometry){let je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Xt=Math.min(Q.instanceCount,je);dt.renderInstances(He,ut,Xt)}else dt.render(He,ut)},this.compile=function(E,K,Q=null){Q===null&&(Q=E),y=ht.get(Q),y.init(K),v.push(y),Q.traverseVisible((function($){$.isLight&&$.layers.test(K.layers)&&(y.pushLight($),$.castShadow&&y.pushShadow($))})),E!==Q&&E.traverseVisible((function($){$.isLight&&$.layers.test(K.layers)&&(y.pushLight($),$.castShadow&&y.pushShadow($))})),y.setupLights();let ie=new Set;return E.traverse((function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let le=$.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){let Me=le[ge];jd(Me,Q,$),ie.add(Me)}else jd(le,Q,$),ie.add(le)})),v.pop(),y=null,ie},this.compileAsync=function(E,K,Q=null){let ie=this.compile(E,K,Q);return new Promise(($=>{function le(){ie.forEach((function(ge){te.get(ge).currentProgram.isReady()&&ie.delete(ge)})),ie.size!==0?setTimeout(le,10):$(E)}G.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)}))};let Yl=null;function qd(){ir.stop()}function Xd(){ir.start()}let ir=new Sm;function Kl(E,K,Q,ie){if(E.visible===!1)return;if(E.layers.test(K.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(K);else if(E.isLight)y.pushLight(E),E.castShadow&&y.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ye.intersectsSprite(E)){ie&&P.setFromMatrixPosition(E.matrixWorld).applyMatrix4(k);let le=Xe.update(E),ge=E.material;ge.visible&&f.push(E,le,ge,Q,P.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ye.intersectsObject(E))){let le=Xe.update(E),ge=E.material;if(ie&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),P.copy(E.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),P.copy(le.boundingSphere.center)),P.applyMatrix4(E.matrixWorld).applyMatrix4(k)),Array.isArray(ge)){let Me=le.groups;for(let be=0,Ie=Me.length;be<Ie;be++){let Ne=Me[be],Te=ge[Ne.materialIndex];Te&&Te.visible&&f.push(E,le,Te,Q,P.z,Ne)}}else ge.visible&&f.push(E,le,ge,Q,P.z,null)}}let $=E.children;for(let le=0,ge=$.length;le<ge;le++)Kl($[le],K,Q,ie)}function Yd(E,K,Q,ie){let $=E.opaque,le=E.transmissive,ge=E.transparent;y.setupLightsView(Q),he===!0&&gt.setGlobalState(_.clippingPlanes,Q),ie&&V.viewport(I.copy(ie)),$.length>0&&Ws($,K,Q),le.length>0&&Ws(le,K,Q),ge.length>0&&Ws(ge,K,Q),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Kd(E,K,Q,ie){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ie.id]===void 0&&(y.state.transmissionRenderTarget[ie.id]=new Jt(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?ps:hn,minFilter:Yn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));let $=y.state.transmissionRenderTarget[ie.id],le=ie.viewport||I;$.setSize(le.z,le.w);let ge=_.getRenderTarget();_.setRenderTarget($),_.getClearColor(B),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),b&&Ge.render(Q);let Me=_.toneMapping;_.toneMapping=0;let be=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),y.setupLightsView(ie),he===!0&&gt.setGlobalState(_.clippingPlanes,ie),Ws(E,Q,ie),se.updateMultisampleRenderTarget($),se.updateRenderTargetMipmap($),G.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ne=0,Te=K.length;Ne<Te;Ne++){let He=K[Ne],_t=He.object,ut=He.geometry,Lt=He.material,dt=He.group;if(Lt.side===2&&_t.layers.test(ie.layers)){let je=Lt.side;Lt.side=1,Lt.needsUpdate=!0,$d(_t,Q,ie,ut,Lt,dt),Lt.side=je,Lt.needsUpdate=!0,Ie=!0}}Ie===!0&&(se.updateMultisampleRenderTarget($),se.updateRenderTargetMipmap($))}_.setRenderTarget(ge),_.setClearColor(B,Z),be!==void 0&&(ie.viewport=be),_.toneMapping=Me}function Ws(E,K,Q){let ie=K.isScene===!0?K.overrideMaterial:null;for(let $=0,le=E.length;$<le;$++){let ge=E[$],Me=ge.object,be=ge.geometry,Ie=ie===null?ge.material:ie,Ne=ge.group;Me.layers.test(Q.layers)&&$d(Me,K,Q,be,Ie,Ne)}}function $d(E,K,Q,ie,$,le){E.onBeforeRender(_,K,Q,ie,$,le),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(_,K,Q,ie,E,le),$.transparent===!0&&$.side===2&&$.forceSinglePass===!1?($.side=1,$.needsUpdate=!0,_.renderBufferDirect(Q,K,ie,$,E,le),$.side=0,$.needsUpdate=!0,_.renderBufferDirect(Q,K,ie,$,E,le),$.side=2):_.renderBufferDirect(Q,K,ie,$,E,le),E.onAfterRender(_,K,Q,ie,$,le)}function js(E,K,Q){K.isScene!==!0&&(K=O);let ie=te.get(E),$=y.state.lights,le=y.state.shadowsArray,ge=$.state.version,Me=Be.getParameters(E,$.state,le,K,Q),be=Be.getProgramCacheKey(Me),Ie=ie.programs;ie.environment=E.isMeshStandardMaterial?K.environment:null,ie.fog=K.fog,ie.envMap=(E.isMeshStandardMaterial?me:fe).get(E.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&E.envMap===null?K.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",Wd),Ie=new Map,ie.programs=Ie);let Ne=Ie.get(be);if(Ne!==void 0){if(ie.currentProgram===Ne&&ie.lightsStateVersion===ge)return Jd(E,Me),Ne}else Me.uniforms=Be.getUniforms(E),E.onBeforeCompile(Me,_),Ne=Be.acquireProgram(Me,be),Ie.set(be,Ne),ie.uniforms=Me.uniforms;let Te=ie.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Te.clippingPlanes=gt.uniform),Jd(E,Me),ie.needsLights=(function(He){return He.isMeshLambertMaterial||He.isMeshToonMaterial||He.isMeshPhongMaterial||He.isMeshStandardMaterial||He.isShadowMaterial||He.isShaderMaterial&&He.lights===!0})(E),ie.lightsStateVersion=ge,ie.needsLights&&(Te.ambientLightColor.value=$.state.ambient,Te.lightProbe.value=$.state.probe,Te.directionalLights.value=$.state.directional,Te.directionalLightShadows.value=$.state.directionalShadow,Te.spotLights.value=$.state.spot,Te.spotLightShadows.value=$.state.spotShadow,Te.rectAreaLights.value=$.state.rectArea,Te.ltc_1.value=$.state.rectAreaLTC1,Te.ltc_2.value=$.state.rectAreaLTC2,Te.pointLights.value=$.state.point,Te.pointLightShadows.value=$.state.pointShadow,Te.hemisphereLights.value=$.state.hemi,Te.directionalShadowMap.value=$.state.directionalShadowMap,Te.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Te.spotShadowMap.value=$.state.spotShadowMap,Te.spotLightMatrix.value=$.state.spotLightMatrix,Te.spotLightMap.value=$.state.spotLightMap,Te.pointShadowMap.value=$.state.pointShadowMap,Te.pointShadowMatrix.value=$.state.pointShadowMatrix),ie.currentProgram=Ne,ie.uniformsList=null,Ne}function Zd(E){if(E.uniformsList===null){let K=E.currentProgram.getUniforms();E.uniformsList=ta.seqWithValue(K.seq,E.uniforms)}return E.uniformsList}function Jd(E,K){let Q=te.get(E);Q.outputColorSpace=K.outputColorSpace,Q.batching=K.batching,Q.batchingColor=K.batchingColor,Q.instancing=K.instancing,Q.instancingColor=K.instancingColor,Q.instancingMorph=K.instancingMorph,Q.skinning=K.skinning,Q.morphTargets=K.morphTargets,Q.morphNormals=K.morphNormals,Q.morphColors=K.morphColors,Q.morphTargetsCount=K.morphTargetsCount,Q.numClippingPlanes=K.numClippingPlanes,Q.numIntersection=K.numClipIntersection,Q.vertexAlphas=K.vertexAlphas,Q.vertexTangents=K.vertexTangents,Q.toneMapping=K.toneMapping}ir.setAnimationLoop((function(E){Yl&&Yl(E)})),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(E){Yl=E,Nt.setAnimationLoop(E),E===null?ir.stop():ir.start()},Nt.addEventListener("sessionstart",qd),Nt.addEventListener("sessionend",Xd),this.render=function(E,K){if(K!==void 0&&K.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(K),K=Nt.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,K,D),y=ht.get(E,v.length),y.init(K),v.push(y),k.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ye.setFromProjectionMatrix(k),C=this.localClippingEnabled,he=gt.init(this.clippingPlanes,C),f=et.get(E,x.length),f.init(),x.push(f),Nt.enabled===!0&&Nt.isPresenting===!0){let le=_.xr.getDepthSensingMesh();le!==null&&Kl(le,K,-1/0,_.sortObjects)}Kl(E,K,0,_.sortObjects),f.finish(),_.sortObjects===!0&&f.sort(pe,ve),b=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,b&&Ge.addToRenderList(f,E),this.info.render.frame++,he===!0&&gt.beginShadows();let Q=y.state.shadowsArray;_e.render(Q,E,K),he===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let ie=f.opaque,$=f.transmissive;if(y.setupLights(),K.isArrayCamera){let le=K.cameras;if($.length>0)for(let ge=0,Me=le.length;ge<Me;ge++)Kd(ie,$,E,le[ge]);b&&Ge.render(E);for(let ge=0,Me=le.length;ge<Me;ge++){let be=le[ge];Yd(f,E,be,be.viewport)}}else $.length>0&&Kd(ie,$,E,K),b&&Ge.render(E),Yd(f,E,K);D!==null&&(se.updateMultisampleRenderTarget(D),se.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(_,E,K),jn.resetDefaultState(),A=-1,U=null,v.pop(),v.length>0?(y=v[v.length-1],he===!0&&gt.setGlobalState(_.clippingPlanes,y.state.camera)):y=null,x.pop(),f=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,K,Q){te.get(E.texture).__webglTexture=K,te.get(E.depthTexture).__webglTexture=Q;let ie=te.get(E);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=Q===void 0,ie.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,K){let Q=te.get(E);Q.__webglFramebuffer=K,Q.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(E,K=0,Q=0){D=E,M=K,R=Q;let ie=!0,$=null,le=!1,ge=!1;if(E){let Me=te.get(E);if(Me.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(q.FRAMEBUFFER,null),ie=!1;else if(Me.__webglFramebuffer===void 0)se.setupRenderTarget(E);else if(Me.__hasExternalTextures)se.rebindTextures(E,te.get(E.texture).__webglTexture,te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ne=E.depthTexture;if(Me.__boundDepthTexture!==Ne){if(Ne!==null&&te.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(E)}}let be=E.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ge=!0);let Ie=te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Array.isArray(Ie[K])?Ie[K][Q]:Ie[K],le=!0):$=E.samples>0&&se.useMultisampledRTT(E)===!1?te.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?Ie[Q]:Ie,I.copy(E.viewport),L.copy(E.scissor),H=E.scissorTest}else I.copy(ee).multiplyScalar(J).floor(),L.copy(oe).multiplyScalar(J).floor(),H=de;if(V.bindFramebuffer(q.FRAMEBUFFER,$)&&ie&&V.drawBuffers(E,$),V.viewport(I),V.scissor(L),V.setScissorTest(H),le){let Me=te.get(E.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me.__webglTexture,Q)}else if(ge){let Me=te.get(E.texture),be=K||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Me.__webglTexture,Q||0,be)}A=-1},this.readRenderTargetPixels=function(E,K,Q,ie,$,le,ge){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){V.bindFramebuffer(q.FRAMEBUFFER,Me);try{let be=E.texture,Ie=be.format,Ne=be.type;if(!re.textureFormatReadable(Ie))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ne))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");K>=0&&K<=E.width-ie&&Q>=0&&Q<=E.height-$&&q.readPixels(K,Q,ie,$,An.convert(Ie),An.convert(Ne),le)}finally{let be=D!==null?te.get(D).__webglFramebuffer:null;V.bindFramebuffer(q.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,K,Q,ie,$,le,ge){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){let be=E.texture,Ie=be.format,Ne=be.type;if(!re.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=E.width-ie&&Q>=0&&Q<=E.height-$){V.bindFramebuffer(q.FRAMEBUFFER,Me);let Te=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Te),q.bufferData(q.PIXEL_PACK_BUFFER,le.byteLength,q.STREAM_READ),q.readPixels(K,Q,ie,$,An.convert(Ie),An.convert(Ne),0);let He=D!==null?te.get(D).__webglFramebuffer:null;V.bindFramebuffer(q.FRAMEBUFFER,He);let _t=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await(function(ut,Lt,dt){return new Promise((function(je,Xt){setTimeout((function zt(){switch(ut.clientWaitSync(Lt,ut.SYNC_FLUSH_COMMANDS_BIT,0)){case ut.WAIT_FAILED:Xt();break;case ut.TIMEOUT_EXPIRED:setTimeout(zt,dt);break;default:je()}}),dt)}))})(q,_t,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Te),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,le),q.deleteBuffer(Te),q.deleteSync(_t),le}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,K=null,Q=0){E.isTexture!==!0&&(Ya("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1]);let ie=Math.pow(2,-Q),$=Math.floor(E.image.width*ie),le=Math.floor(E.image.height*ie),ge=K!==null?K.x:0,Me=K!==null?K.y:0;se.setTexture2D(E,0),q.copyTexSubImage2D(q.TEXTURE_2D,Q,0,0,ge,Me,$,le),V.unbindTexture()},this.copyTextureToTexture=function(E,K,Q=null,ie=null,$=0){let le,ge,Me,be,Ie,Ne,Te,He,_t;E.isTexture!==!0&&(Ya("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,E=arguments[1],K=arguments[2],$=arguments[3]||0,Q=null);let ut=E.isCompressedTexture?E.mipmaps[$]:E.image;Q!==null?(le=Q.max.x-Q.min.x,ge=Q.max.y-Q.min.y,Me=Q.isBox3?Q.max.z-Q.min.z:1,be=Q.min.x,Ie=Q.min.y,Ne=Q.isBox3?Q.min.z:0):(le=ut.width,ge=ut.height,Me=ut.depth||1,be=0,Ie=0,Ne=0),ie!==null?(Te=ie.x,He=ie.y,_t=ie.z):(Te=0,He=0,_t=0);let Lt=An.convert(K.format),dt=An.convert(K.type),je;K.isData3DTexture?(se.setTexture3D(K,0),je=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(se.setTexture2DArray(K,0),je=q.TEXTURE_2D_ARRAY):(se.setTexture2D(K,0),je=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);let Xt=q.getParameter(q.UNPACK_ROW_LENGTH),zt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),ke=q.getParameter(q.UNPACK_SKIP_PIXELS),Le=q.getParameter(q.UNPACK_SKIP_ROWS),Rn=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,ut.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ut.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,be),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ie),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Ne);let $l=E.isDataArrayTexture||E.isData3DTexture,Fa=K.isDataArrayTexture||K.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Ir=te.get(E),Zl=te.get(K),Jl=te.get(Ir.__renderTarget),Ql=te.get(Zl.__renderTarget);V.bindFramebuffer(q.READ_FRAMEBUFFER,Jl.__webglFramebuffer),V.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ql.__webglFramebuffer);for(let Ai=0;Ai<Me;Ai++)$l&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,te.get(E).__webglTexture,$,Ne+Ai),E.isDepthTexture?(Fa&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,te.get(K).__webglTexture,$,_t+Ai),q.blitFramebuffer(be,Ie,le,ge,Te,He,le,ge,q.DEPTH_BUFFER_BIT,q.NEAREST)):Fa?q.copyTexSubImage3D(je,$,Te,He,_t+Ai,be,Ie,le,ge):q.copyTexSubImage2D(je,$,Te,He,_t+Ai,be,Ie,le,ge);V.bindFramebuffer(q.READ_FRAMEBUFFER,null),V.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Fa?E.isDataTexture||E.isData3DTexture?q.texSubImage3D(je,$,Te,He,_t,le,ge,Me,Lt,dt,ut.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(je,$,Te,He,_t,le,ge,Me,Lt,ut.data):q.texSubImage3D(je,$,Te,He,_t,le,ge,Me,Lt,dt,ut):E.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,$,Te,He,le,ge,Lt,dt,ut.data):E.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,$,Te,He,ut.width,ut.height,Lt,ut.data):q.texSubImage2D(q.TEXTURE_2D,$,Te,He,le,ge,Lt,dt,ut);q.pixelStorei(q.UNPACK_ROW_LENGTH,Xt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,zt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,ke),q.pixelStorei(q.UNPACK_SKIP_ROWS,Le),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Rn),$===0&&K.generateMipmaps&&q.generateMipmap(je),V.unbindTexture()},this.copyTextureToTexture3D=function(E,K,Q=null,ie=null,$=0){return E.isTexture!==!0&&(Ya("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ie=arguments[1]||null,E=arguments[2],K=arguments[3],$=arguments[4]||0),Ya('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,K,Q,ie,$)},this.initRenderTarget=function(E){te.get(E).__webglFramebuffer===void 0&&se.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?se.setTextureCube(E,0):E.isData3DTexture?se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?se.setTexture2DArray(E,0):se.setTexture2D(E,0),V.unbindTexture()},this.resetState=function(){M=0,R=0,D=null,V.reset(),jn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var xn=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ch=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dh,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Yt=new S,Vo=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),a=it(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new $e(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yr=class extends Fi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qr,ja=new S,Xr=new S,Yr=new S,Kr=new ae,qa=new ae,Rm=new Ue,mo=new S,Xa=new S,fo=new S,Jp=new ae,Lc=new ae,Qp=new ae,ha=class extends cn{constructor(e=new yr){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ch(t,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new Vo(i,3,0,!1)),qr.setAttribute("uv",new Vo(i,2,3,!1))}this.geometry=qr,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xr.setFromMatrixScale(this.matrixWorld),Rm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xr.multiplyScalar(-Yr.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let s=this.center;go(mo.set(-.5,-.5,0),Yr,s,Xr,r,a),go(Xa.set(.5,-.5,0),Yr,s,Xr,r,a),go(fo.set(.5,.5,0),Yr,s,Xr,r,a),Jp.set(0,0),Lc.set(1,0),Qp.set(1,1);let o=e.ray.intersectTriangle(mo,Xa,fo,!1,ja);if(o===null&&(go(Xa.set(-.5,.5,0),Yr,s,Xr,r,a),Lc.set(0,1),o=e.ray.intersectTriangle(mo,fo,Xa,!1,ja),o===null))return;let l=e.ray.origin.distanceTo(ja);l<e.near||l>e.far||t.push({distance:l,point:ja.clone(),uv:fi.getInterpolation(ja,mo,Xa,fo,Jp,Lc,Qp,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function go(n,e,t,i,r,a){Kr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(qa.x=a*Kr.x-r*Kr.y,qa.y=r*Kr.x+a*Kr.y):qa.copy(Kr),n.copy(e),n.x+=qa.x,n.y+=qa.y,n.applyMatrix4(Rm)}var W1=new S,j1=new S;var q1=new S,X1=new qe,Y1=new qe,K1=new S,$1=new Ue,Z1=new S,J1=new nn,Q1=new Ue,eM=new oa;var _n=class extends Pt{constructor(e=null,t=1,i=1,r,a,s,o,l,c=1003,h=1003,u,d){super(null,s,o,l,c,h,r,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tM=new Ue,nM=new Ue;var iM=new Ue,rM=new Ue;var aM=new Qn,sM=new Ue,oM=new Ke,lM=new nn;var Lh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,s=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let o=a[this.index];s.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}},cM=new Ue,hM=new Ve(1,1,1),uM=new rs,dM=new Qn,pM=new nn,mM=new S,fM=new S,gM=new S,vM=new Lh,yM=new Ke;var xM=new S,_M=new S,MM=new Ue,wM=new oa,SM=new nn,bM=new S,EM=new S;var TM=new S,AM=new S;var Ph=class extends Fi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},em=new Ue,Ih=new oa,vo=new nn,yo=new S,ua=class extends cn{constructor(e=new tt,t=new Ph){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),vo.radius+=a,e.ray.intersectsSphere(vo)===!1)return;em.copy(r).invert(),Ih.copy(e.ray).applyMatrix4(em);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);u<d;u++){let p=c.getX(u);yo.fromBufferAttribute(h,p),tm(yo,p,l,r,e,t,this)}else for(let u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);u<d;u++)yo.fromBufferAttribute(h,u),tm(yo,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function tm(n,e,t,i,r,a,s){let o=Ih.distanceSqToPoint(n);if(o<t){let l=new S;Ih.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Go=class extends Pt{constructor(e,t,i,r,a,s,o,l,c,h,u,d){super(null,s,o,l,c,h,r,a,u,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var Wo=class extends Pt{constructor(e,t,i,r,a,s,o,l,c){super(e,t,i,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,a=i.length,s;s=t||e*i[a-1];let o,l=0,c=a-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-s,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===s)return r/(a-1);let h=i[r];return(r+(s-h)/(i[r+1]-h))/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);let s=this.getPoint(r),o=this.getPoint(a),l=t||(s.isVector2?new ae:new S);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new S,r=[],a=[],s=[],o=new S,l=new Ue;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new S)}a[0]=new S,s[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ft(r[p-1].dot(r[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,m))}s[p].crossVectors(r[p],a[p])}if(t===!0){let p=Math.acos(Ft(a[0].dot(a[e]),-1,1));p/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(p=-p);for(let m=1;m<=e;m++)a[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),s[m].crossVectors(r[m],a[m])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ss=class extends Mn{constructor(e=0,t=0,i=1,r=1,a=0,s=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){let i=t,r=2*Math.PI,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(a=s?0:r),this.aClockwise!==!0||s||(a===r?a=-r:a-=r);let o=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dh=class extends ss{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function vu(){let n=0,e=0,t=0,i=0;function r(a,s,o,l){n=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,h,u){let d=(s-a)/c-(o-a)/(c+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+u)+(l-o)/u;d*=h,p*=h,r(s,o,d,p)},calc:function(a){let s=a*a;return n+e*a+t*s+i*(s*a)}}}var xo=new S,Pc=new vu,Ic=new vu,Dc=new vu,Uh=class extends Mn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new S){let i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e,o,l,c=Math.floor(s),h=s-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/a)+1)*a:h===0&&c===a-1&&(c=a-2,h=1),this.closed||c>0?o=r[(c-1)%a]:(xo.subVectors(r[0],r[1]).add(r[0]),o=xo);let u=r[c%a],d=r[(c+1)%a];if(this.closed||c+2<a?l=r[(c+2)%a]:(xo.subVectors(r[a-1],r[a-2]).add(r[a-1]),l=xo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);g<1e-4&&(g=1),m<1e-4&&(m=g),f<1e-4&&(f=g),Pc.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,g,f),Ic.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,g,f),Dc.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,g,f)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Ic.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Dc.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Pc.calc(h),Ic.calc(h),Dc.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new S().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nm(n,e,t,i,r){let a=.5*(i-e),s=.5*(r-t),o=n*n;return(2*t-2*i+a+s)*(n*o)+(-3*t+3*i-2*a-s)*o+a*n+t}function Za(n,e,t,i){return(function(r,a){let s=1-r;return s*s*a})(n,e)+(function(r,a){return 2*(1-r)*r*a})(n,t)+(function(r,a){return r*r*a})(n,i)}function Ja(n,e,t,i,r){return(function(a,s){let o=1-a;return o*o*o*s})(n,e)+(function(a,s){let o=1-a;return 3*o*o*a*s})(n,t)+(function(a,s){return 3*(1-a)*a*a*s})(n,i)+(function(a,s){return a*a*a*s})(n,r)}var jo=class extends Mn{constructor(e=new ae,t=new ae,i=new ae,r=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ae){let i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Ja(e,r.x,a.x,s.x,o.x),Ja(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nh=class extends Mn{constructor(e=new S,t=new S,i=new S,r=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new S){let i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Ja(e,r.x,a.x,s.x,o.x),Ja(e,r.y,a.y,s.y,o.y),Ja(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qo=class extends Mn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oh=class extends Mn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends Mn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(Za(e,r.x,a.x,s.x),Za(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yo=class extends Mn{constructor(e=new S,t=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new S){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(Za(e,r.x,a.x,s.x),Za(e,r.y,a.y,s.y),Za(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],c=r[s],h=r[s>r.length-2?r.length-1:s+1],u=r[s>r.length-3?r.length-1:s+2];return i.set(nm(o,l.x,c.x,h.x,u.x),nm(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ae().fromArray(r))}return this}},$o=Object.freeze({__proto__:null,ArcCurve:Dh,CatmullRomCurve3:Uh,CubicBezierCurve:jo,CubicBezierCurve3:Nh,EllipseCurve:ss,LineCurve:qo,LineCurve3:Oh,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:Yo,SplineCurve:Ko}),Fh=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $o[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let s=r[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],o=s.isEllipseCurve?2*e:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new $o[r.type]().fromJSON(r))}return this}},os=class extends Fh{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new qo(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new Xo(this.currentPoint.clone(),new ae(e,t),new ae(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){let o=new jo(this.currentPoint.clone(),new ae(e,t),new ae(i,r),new ae(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ko(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,a,s,o,l),this}absellipse(e,t,i,r,a,s,o,l){let c=new ss(e,t,i,r,a,s,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Zo=class n extends tt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ft(r,0,2*Math.PI);let a=[],s=[],o=[],l=[],c=[],h=1/t,u=new S,d=new ae,p=new S,m=new S,g=new S,f=0,y=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:f=e[x+1].x-e[x].x,y=e[x+1].y-e[x].y,p.x=1*y,p.y=-f,p.z=0*y,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:f=e[x+1].x-e[x].x,y=e[x+1].y-e[x].y,p.x=1*y,p.y=-f,p.z=0*y,m.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(m)}for(let x=0;x<=t;x++){let v=i+x*h*r,_=Math.sin(v),w=Math.cos(v);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*_,u.y=e[M].y,u.z=e[M].x*w,s.push(u.x,u.y,u.z),d.x=x/t,d.y=M/(e.length-1),o.push(d.x,d.y);let R=l[3*M+0]*_,D=l[3*M+1],A=l[3*M+0]*w;c.push(R,D,A)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){let _=v+x*e.length,w=_,M=_+e.length,R=_+e.length+1,D=_+1;a.push(w,M,D),a.push(R,D,M)}this.setIndex(a),this.setAttribute("position",new Ee(s,3)),this.setAttribute("uv",new Ee(o,2)),this.setAttribute("normal",new Ee(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},kh=class n extends Zo{constructor(e=1,t=1,i=4,r=8){let a=new os;a.absarc(0,-t/2,e,1.5*Math.PI,0),a.absarc(0,t/2,e,0,.5*Math.PI),super(a.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},zh=class n extends tt{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let a=[],s=[],o=[],l=[],c=new S,h=new ae;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[d]/e+1)/2,h.y=(s[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Jo=class n extends tt{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),a=Math.floor(a);let h=[],u=[],d=[],p=[],m=0,g=[],f=i/2,y=0;function x(v){let _=m,w=new ae,M=new S,R=0,D=v===!0?e:t,A=v===!0?1:-1;for(let I=1;I<=r;I++)u.push(0,f*A,0),d.push(0,A,0),p.push(.5,.5),m++;let U=m;for(let I=0;I<=r;I++){let L=I/r*l+o,H=Math.cos(L),B=Math.sin(L);M.x=D*B,M.y=f*A,M.z=D*H,u.push(M.x,M.y,M.z),d.push(0,A,0),w.x=.5*H+.5,w.y=.5*B*A+.5,p.push(w.x,w.y),m++}for(let I=0;I<r;I++){let L=_+I,H=U+I;v===!0?h.push(H,H+1,L):h.push(H+1,H,L),R+=3}c.addGroup(y,R,v===!0?1:2),y+=R}(function(){let v=new S,_=new S,w=0,M=(t-e)/i;for(let R=0;R<=a;R++){let D=[],A=R/a,U=A*(t-e)+e;for(let I=0;I<=r;I++){let L=I/r,H=L*l+o,B=Math.sin(H),Z=Math.cos(H);_.x=U*B,_.y=-A*i+f,_.z=U*Z,u.push(_.x,_.y,_.z),v.set(B,M,Z).normalize(),d.push(v.x,v.y,v.z),p.push(L,1-A),D.push(m++)}g.push(D)}for(let R=0;R<r;R++)for(let D=0;D<a;D++){let A=g[D][R],U=g[D+1][R],I=g[D+1][R+1],L=g[D][R+1];(e>0||D!==0)&&(h.push(A,U,L),w+=3),(t>0||D!==a-1)&&(h.push(U,I,L),w+=3)}c.addGroup(y,w,0),y+=w})(),s===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bh=class n extends Jo{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=2*Math.PI){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xr=class n extends tt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let a=[],s=[];function o(d,p,m,g){let f=g+1,y=[];for(let x=0;x<=f;x++){y[x]=[];let v=d.clone().lerp(m,x/f),_=p.clone().lerp(m,x/f),w=f-x;for(let M=0;M<=w;M++)y[x][M]=M===0&&x===f?v:v.clone().lerp(_,M/w)}for(let x=0;x<f;x++)for(let v=0;v<2*(f-x)-1;v++){let _=Math.floor(v/2);v%2==0?(l(y[x][_+1]),l(y[x+1][_]),l(y[x][_])):(l(y[x][_+1]),l(y[x+1][_+1]),l(y[x+1][_]))}}function l(d){a.push(d.x,d.y,d.z)}function c(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(d,p,m,g){g<0&&d.x===1&&(s[p]=d.x-1),m.x===0&&m.z===0&&(s[p]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new S,m=new S,g=new S;for(let f=0;f<t.length;f+=3)c(t[f+0],p),c(t[f+1],m),c(t[f+2],g),o(p,m,g,d)})(r),(function(d){let p=new S;for(let m=0;m<a.length;m+=3)p.x=a[m+0],p.y=a[m+1],p.z=a[m+2],p.normalize().multiplyScalar(d),a[m+0]=p.x,a[m+1]=p.y,a[m+2]=p.z})(i),(function(){let d=new S;for(let m=0;m<a.length;m+=3){d.x=a[m+0],d.y=a[m+1],d.z=a[m+2];let g=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);s.push(g,1-f)}var p;(function(){let m=new S,g=new S,f=new S,y=new S,x=new ae,v=new ae,_=new ae;for(let w=0,M=0;w<a.length;w+=9,M+=6){m.set(a[w+0],a[w+1],a[w+2]),g.set(a[w+3],a[w+4],a[w+5]),f.set(a[w+6],a[w+7],a[w+8]),x.set(s[M+0],s[M+1]),v.set(s[M+2],s[M+3]),_.set(s[M+4],s[M+5]),y.copy(m).add(g).add(f).divideScalar(3);let R=u(y);h(x,M+0,m,R),h(v,M+2,g,R),h(_,M+4,f,R)}})(),(function(){for(let m=0;m<s.length;m+=6){let g=s[m+0],f=s[m+2],y=s[m+4],x=Math.max(g,f,y),v=Math.min(g,f,y);x>.9&&v<.1&&(g<.2&&(s[m+0]+=1),f<.2&&(s[m+2]+=1),y<.2&&(s[m+4]+=1))}})()})(),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(a.slice(),3)),this.setAttribute("uv",new Ee(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Hh=class n extends xr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},_o=new S,Mo=new S,Uc=new S,wo=new fi,Vh=class extends tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),a=Math.cos(Qr*t),s=e.getIndex(),o=e.getAttribute("position"),l=s?s.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){s?(c[0]=s.getX(m),c[1]=s.getX(m+1),c[2]=s.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:g,b:f,c:y}=wo;if(g.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),wo.getNormal(Uc),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,u[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let x=0;x<3;x++){let v=(x+1)%3,_=u[x],w=u[v],M=wo[h[x]],R=wo[h[v]],D=`${_}_${w}`,A=`${w}_${_}`;A in d&&d[A]?(Uc.dot(d[A].normal)<=a&&(p.push(M.x,M.y,M.z),p.push(R.x,R.y,R.z)),d[A]=null):D in d||(d[D]={index0:c[x],index1:c[v],normal:Uc.clone()})}}for(let m in d)if(d[m]){let{index0:g,index1:f}=d[m];_o.fromBufferAttribute(o,g),Mo.fromBufferAttribute(o,f),p.push(_o.x,_o.y,_o.z),p.push(Mo.x,Mo.y,Mo.z)}this.setAttribute("position",new Ee(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Qo=class extends os{constructor(e){super(e),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new os().fromJSON(r))}return this}},ox=function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,a=im(n,0,r,t,!0),s=[];if(!a||a.next===a.prev)return s;let o,l,c,h,u,d,p;if(i&&(a=(function(m,g,f,y){let x=[],v,_,w,M,R;for(v=0,_=g.length;v<_;v++)w=g[v]*y,M=v<_-1?g[v+1]*y:m.length,R=im(m,w,M,y,!1),R===R.next&&(R.steiner=!0),x.push(fx(R));for(x.sort(dx),v=0;v<x.length;v++)f=px(x[v],f);return f})(n,e,a,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let m=t;m<r;m+=t)u=n[m],d=n[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return ls(a,s,t,o,l,p,0),s};function im(n,e,t,i,r){let a,s;if(r===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(n,e,t,i)>0)for(a=e;a<t;a+=i)s=rm(a,n[a],n[a+1],s);else for(a=t-i;a>=e;a-=i)s=rm(a,n[a],n[a+1],s);return s&&ol(s,s.next)&&(hs(s),s=s.next),s}function _r(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!ol(i,i.next)&&vt(i.prev,i,i.next)!==0)i=i.next;else{if(hs(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function ls(n,e,t,i,r,a,s){if(!n)return;!s&&a&&(function(h,u,d,p){let m=h;do m.z===0&&(m.z=Gh(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,(function(g){let f,y,x,v,_,w,M,R,D=1;do{for(y=g,g=null,_=null,w=0;y;){for(w++,x=y,M=0,f=0;f<D&&(M++,x=x.nextZ,x);f++);for(R=D;M>0||R>0&&x;)M!==0&&(R===0||!x||y.z<=x.z)?(v=y,y=y.nextZ,M--):(v=x,x=x.nextZ,R--),_?_.nextZ=v:g=v,v.prevZ=_,_=v;y=x}_.nextZ=null,D*=2}while(w>1)})(m)})(n,i,r,a);let o,l,c=n;for(;n.prev!==n.next;)if(o=n.prev,l=n.next,a?cx(n,i,r,a):lx(n))e.push(o.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),hs(n),n=l.next,c=l.next;else if((n=l)===c){s?s===1?ls(n=hx(_r(n),e,t),e,t,i,r,a,2):s===2&&ux(n,e,t,i,r,a):ls(_r(n),e,t,i,r,a,1);break}}function lx(n){let e=n.prev,t=n,i=n.next;if(vt(e,t,i)>=0)return!1;let r=e.x,a=t.x,s=i.x,o=e.y,l=t.y,c=i.y,h=r<a?r<s?r:s:a<s?a:s,u=o<l?o<c?o:c:l<c?l:c,d=r>a?r>s?r:s:a>s?a:s,p=o>l?o>c?o:c:l>c?l:c,m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&$r(r,o,a,l,s,c,m.x,m.y)&&vt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function cx(n,e,t,i){let r=n.prev,a=n,s=n.next;if(vt(r,a,s)>=0)return!1;let o=r.x,l=a.x,c=s.x,h=r.y,u=a.y,d=s.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,y=Gh(p,m,e,t,i),x=Gh(g,f,e,t,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=y&&_&&_.z<=x;){if(v.x>=p&&v.x<=g&&v.y>=m&&v.y<=f&&v!==r&&v!==s&&$r(o,h,l,u,c,d,v.x,v.y)&&vt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=g&&_.y>=m&&_.y<=f&&_!==r&&_!==s&&$r(o,h,l,u,c,d,_.x,_.y)&&vt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=y;){if(v.x>=p&&v.x<=g&&v.y>=m&&v.y<=f&&v!==r&&v!==s&&$r(o,h,l,u,c,d,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=g&&_.y>=m&&_.y<=f&&_!==r&&_!==s&&$r(o,h,l,u,c,d,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function hx(n,e,t){let i=n;do{let r=i.prev,a=i.next.next;!ol(r,a)&&Cm(r,i,i.next,a)&&cs(r,a)&&cs(a,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),hs(i),hs(i.next),i=n=a),i=i.next}while(i!==n);return _r(i)}function ux(n,e,t,i,r,a){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&gx(s,o)){let l=Lm(s,o);return s=_r(s,s.next),l=_r(l,l.next),ls(s,e,t,i,r,a,0),void ls(l,e,t,i,r,a,0)}o=o.next}s=s.next}while(s!==n)}function dx(n,e){return n.x-e.x}function px(n,e){let t=(function(r,a){let s,o=a,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,s=o.x<o.next.x?o:o.next,f===c))return s}o=o.next}while(o!==a);if(!s)return null;let u=s,d=s.x,p=s.y,m,g=1/0;o=s;do c>=o.x&&o.x>=d&&c!==o.x&&$r(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(c-o.x),cs(o,r)&&(m<g||m===g&&(o.x>s.x||o.x===s.x&&mx(s,o)))&&(s=o,g=m)),o=o.next;while(o!==u);return s})(n,e);if(!t)return e;let i=Lm(t,n);return _r(i,i.next),_r(t,t.next)}function mx(n,e){return vt(n.prev,n,e.prev)<0&&vt(e.next,n,n.next)<0}function Gh(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function fx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function $r(n,e,t,i,r,a,s,o){return(r-s)*(e-o)>=(n-s)*(a-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(i-o)}function gx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&Cm(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(cs(n,e)&&cs(e,n)&&(function(t,i){let r=t,a=!1,s=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&s<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(a=!a),r=r.next;while(r!==t);return a})(n,e)&&(vt(n.prev,n,e.prev)||vt(n,e.prev,e))||ol(n,e)&&vt(n.prev,n,n.next)>0&&vt(e.prev,e,e.next)>0)}function vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ol(n,e){return n.x===e.x&&n.y===e.y}function Cm(n,e,t,i){let r=bo(vt(n,e,t)),a=bo(vt(n,e,i)),s=bo(vt(t,i,n)),o=bo(vt(t,i,e));return r!==a&&s!==o||!(r!==0||!So(n,t,e))||!(a!==0||!So(n,i,e))||!(s!==0||!So(t,n,i))||!(o!==0||!So(t,e,i))}function So(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function bo(n){return n>0?1:n<0?-1:0}function cs(n,e){return vt(n.prev,n,n.next)<0?vt(n,e,n.next)>=0&&vt(n,n.prev,e)>=0:vt(n,e,n.prev)<0||vt(n,n.next,e)<0}function Lm(n,e){let t=new Wh(n.i,n.x,n.y),i=new Wh(e.i,e.x,e.y),r=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function rm(n,e,t,i){let r=new Wh(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function hs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Wh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ni=class n{static area(e){let t=e.length,i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],a=[];am(e),sm(i,e);let s=e.length;t.forEach(am);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,sm(i,t[l]);let o=ox(i,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function am(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function sm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var jh=class n extends tt{constructor(e=new Qo([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],a=[];for(let o=0,l=e.length;o<l;o++)s(e[o]);function s(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:vx,v,_,w,M,R,D=!1;y&&(v=y.getSpacedPoints(h),D=!0,d=!1,_=y.computeFrenetFrames(h,!1),w=new S,M=new S,R=new S),d||(f=0,p=0,m=0,g=0);let A=o.extractPoints(c),U=A.shape,I=A.holes;if(!Ni.isClockWise(U)){U=U.reverse();for(let F=0,P=I.length;F<P;F++){let O=I[F];Ni.isClockWise(O)&&(I[F]=O.reverse())}}let L=Ni.triangulateShape(U,I),H=U;for(let F=0,P=I.length;F<P;F++){let O=I[F];U=U.concat(O)}function B(F,P,O){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(P,O)}let Z=U.length,X=L.length;function j(F,P,O){let b,N,G,re=F.x-P.x,V=F.y-P.y,ne=O.x-F.x,te=O.y-F.y,se=re*re+V*V,fe=re*te-V*ne;if(Math.abs(fe)>Number.EPSILON){let me=Math.sqrt(se),we=Math.sqrt(ne*ne+te*te),Ae=P.x-V/me,Xe=P.y+re/me,Be=((O.x-te/we-Ae)*te-(O.y+ne/we-Xe)*ne)/(re*te-V*ne);b=Ae+re*Be-F.x,N=Xe+V*Be-F.y;let Se=b*b+N*N;if(Se<=2)return new ae(b,N);G=Math.sqrt(Se/2)}else{let me=!1;re>Number.EPSILON?ne>Number.EPSILON&&(me=!0):re<-Number.EPSILON?ne<-Number.EPSILON&&(me=!0):Math.sign(V)===Math.sign(te)&&(me=!0),me?(b=-V,N=re,G=Math.sqrt(se)):(b=re,N=V,G=Math.sqrt(se/2))}return new ae(b/G,N/G)}let J=[];for(let F=0,P=H.length,O=P-1,b=F+1;F<P;F++,O++,b++)O===P&&(O=0),b===P&&(b=0),J[F]=j(H[F],H[O],H[b]);let pe=[],ve,ee=J.concat();for(let F=0,P=I.length;F<P;F++){let O=I[F];ve=[];for(let b=0,N=O.length,G=N-1,re=b+1;b<N;b++,G++,re++)G===N&&(G=0),re===N&&(re=0),ve[b]=j(O[b],O[G],O[re]);pe.push(ve),ee=ee.concat(ve)}for(let F=0;F<f;F++){let P=F/f,O=p*Math.cos(P*Math.PI/2),b=m*Math.sin(P*Math.PI/2)+g;for(let N=0,G=H.length;N<G;N++){let re=B(H[N],J[N],b);ye(re.x,re.y,-O)}for(let N=0,G=I.length;N<G;N++){let re=I[N];ve=pe[N];for(let V=0,ne=re.length;V<ne;V++){let te=B(re[V],ve[V],b);ye(te.x,te.y,-O)}}}let oe=m+g;for(let F=0;F<Z;F++){let P=d?B(U[F],ee[F],oe):U[F];D?(M.copy(_.normals[0]).multiplyScalar(P.x),w.copy(_.binormals[0]).multiplyScalar(P.y),R.copy(v[0]).add(M).add(w),ye(R.x,R.y,R.z)):ye(P.x,P.y,0)}for(let F=1;F<=h;F++)for(let P=0;P<Z;P++){let O=d?B(U[P],ee[P],oe):U[P];D?(M.copy(_.normals[F]).multiplyScalar(O.x),w.copy(_.binormals[F]).multiplyScalar(O.y),R.copy(v[F]).add(M).add(w),ye(R.x,R.y,R.z)):ye(O.x,O.y,u/h*F)}for(let F=f-1;F>=0;F--){let P=F/f,O=p*Math.cos(P*Math.PI/2),b=m*Math.sin(P*Math.PI/2)+g;for(let N=0,G=H.length;N<G;N++){let re=B(H[N],J[N],b);ye(re.x,re.y,u+O)}for(let N=0,G=I.length;N<G;N++){let re=I[N];ve=pe[N];for(let V=0,ne=re.length;V<ne;V++){let te=B(re[V],ve[V],b);D?ye(te.x,te.y+v[h-1].y,v[h-1].x+O):ye(te.x,te.y,u+O)}}}function de(F,P){let O=F.length;for(;--O>=0;){let b=O,N=O-1;N<0&&(N=F.length-1);for(let G=0,re=h+2*f;G<re;G++){let V=Z*G,ne=Z*(G+1);C(P+b+V,P+N+V,P+N+ne,P+b+ne)}}}function ye(F,P,O){l.push(F),l.push(P),l.push(O)}function he(F,P,O){T(F),T(P),T(O);let b=r.length/3,N=x.generateTopUV(i,r,b-3,b-2,b-1);k(N[0]),k(N[1]),k(N[2])}function C(F,P,O,b){T(F),T(P),T(b),T(P),T(O),T(b);let N=r.length/3,G=x.generateSideWallUV(i,r,N-6,N-3,N-2,N-1);k(G[0]),k(G[1]),k(G[3]),k(G[1]),k(G[2]),k(G[3])}function T(F){r.push(l[3*F+0]),r.push(l[3*F+1]),r.push(l[3*F+2])}function k(F){a.push(F.x),a.push(F.y)}(function(){let F=r.length/3;if(d){let P=0,O=Z*P;for(let b=0;b<X;b++){let N=L[b];he(N[2]+O,N[1]+O,N[0]+O)}P=h+2*f,O=Z*P;for(let b=0;b<X;b++){let N=L[b];he(N[0]+O,N[1]+O,N[2]+O)}}else{for(let P=0;P<X;P++){let O=L[P];he(O[2],O[1],O[0])}for(let P=0;P<X;P++){let O=L[P];he(O[0]+Z*h,O[1]+Z*h,O[2]+Z*h)}}i.addGroup(F,r.length/3-F,0)})(),(function(){let F=r.length/3,P=0;de(H,P),P+=H.length;for(let O=0,b=I.length;O<b;O++){let N=I[O];de(N,P),P+=N.length}i.addGroup(F,r.length/3-F,1)})()}this.setAttribute("position",new Ee(r,3)),this.setAttribute("uv",new Ee(a,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let a=0,s=t.length;a<s;a++){let o=t[a];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let a=0,s=e.shapes.length;a<s;a++){let o=t[e.shapes[a]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new $o[r.type]().fromJSON(r)),new n(i,e.options)}},vx={generateTopUV:function(n,e,t,i,r){let a=e[3*t],s=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new ae(a,s),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(n,e,t,i,r,a){let s=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],g=e[3*a],f=e[3*a+1],y=e[3*a+2];return Math.abs(o-h)<Math.abs(s-c)?[new ae(s,1-l),new ae(c,1-u),new ae(d,1-m),new ae(g,1-y)]:[new ae(o,1-l),new ae(h,1-u),new ae(p,1-m),new ae(f,1-y)]}},qh=class n extends xr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Xh=class n extends xr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Yh=class n extends tt{constructor(e=.5,t=1,i=32,r=1,a=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:a,thetaLength:s},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new S,m=new ae;for(let g=0;g<=r;g++){for(let f=0;f<=i;f++){let y=a+f/i*s;p.x=u*Math.cos(y),p.y=u*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let g=0;g<r;g++){let f=g*(i+1);for(let y=0;y<i;y++){let x=y+f,v=x,_=x+i+1,w=x+i+2,M=x+1;o.push(v,_,M),o.push(_,w,M)}}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Kh=class n extends tt{constructor(e=new Qo([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],a=[],s=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;Ni.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,y=m.length;f<y;f++){let x=m[f];Ni.isClockWise(x)===!0&&(m[f]=x.reverse())}let g=Ni.triangulateShape(p,m);for(let f=0,y=m.length;f<y;f++){let x=m[f];p=p.concat(x)}for(let f=0,y=p.length;f<y;f++){let x=p[f];r.push(x.x,x.y,0),a.push(0,0,1),s.push(x.x,x.y)}for(let f=0,y=g.length;f<y;f++){let x=g[f],v=x[0]+u,_=x[1]+u,w=x[2]+u;i.push(v,_,w),l+=3}}this.setIndex(i),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(a,3)),this.setAttribute("uv",new Ee(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let s=t[r];i.shapes.push(s.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let s=t[e.shapes[r]];i.push(s)}return new n(i,e.curveSegments)}},un=class n extends tt{constructor(e=1,t=32,i=16,r=0,a=2*Math.PI,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(s+o,Math.PI),c=0,h=[],u=new S,d=new S,p=[],m=[],g=[],f=[];for(let y=0;y<=i;y++){let x=[],v=y/i,_=0;y===0&&s===0?_=.5/t:y===i&&l===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let M=w/t;u.x=-e*Math.cos(r+M*a)*Math.sin(s+v*o),u.y=e*Math.cos(s+v*o),u.z=e*Math.sin(r+M*a)*Math.sin(s+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),f.push(M+_,1-v),x.push(c++)}h.push(x)}for(let y=0;y<i;y++)for(let x=0;x<t;x++){let v=h[y][x+1],_=h[y][x],w=h[y+1][x],M=h[y+1][x+1];(y!==0||s>0)&&p.push(v,_,M),(y!==i-1||l<Math.PI)&&p.push(_,w,M)}this.setIndex(p),this.setAttribute("position",new Ee(m,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},$h=class n extends xr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Zh=class n extends tt{constructor(e=1,t=.4,i=12,r=48,a=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);let s=[],o=[],l=[],c=[],h=new S,u=new S,d=new S;for(let p=0;p<=i;p++)for(let m=0;m<=r;m++){let g=m/r*a,f=p/i*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(g),u.y=(e+t*Math.cos(f))*Math.sin(g),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=r;m++){let g=(r+1)*p+m-1,f=(r+1)*(p-1)+m-1,y=(r+1)*(p-1)+m,x=(r+1)*p+m;s.push(g,f,x),s.push(f,y,x)}this.setIndex(s),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Jh=class n extends tt{constructor(e=1,t=.4,i=64,r=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:a,q:s},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new S,d=new S,p=new S,m=new S,g=new S,f=new S,y=new S;for(let v=0;v<=i;++v){let _=v/i*a*Math.PI*2;x(_,a,s,e,p),x(_+.01,a,s,e,m),f.subVectors(m,p),y.addVectors(m,p),g.crossVectors(f,y),y.crossVectors(g,f),g.normalize(),y.normalize();for(let w=0;w<=r;++w){let M=w/r*Math.PI*2,R=-t*Math.cos(M),D=t*Math.sin(M);u.x=p.x+(R*y.x+D*g.x),u.y=p.y+(R*y.y+D*g.y),u.z=p.z+(R*y.z+D*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(v/i),h.push(w/r)}}for(let v=1;v<=i;v++)for(let _=1;_<=r;_++){let w=(r+1)*(v-1)+(_-1),M=(r+1)*v+(_-1),R=(r+1)*v+_,D=(r+1)*(v-1)+_;o.push(w,M,D),o.push(M,R,D)}function x(v,_,w,M,R){let D=Math.cos(v),A=Math.sin(v),U=w/_*v,I=Math.cos(U);R.x=M*(2+I)*.5*D,R.y=M*(2+I)*A*.5,R.z=M*Math.sin(U)*.5}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Qh=class n extends tt{constructor(e=new Yo(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};let s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new S,l=new S,c=new ae,h=new S,u=[],d=[],p=[],m=[];function g(f){h=e.getPointAt(f/t,h);let y=s.normals[f],x=s.binormals[f];for(let v=0;v<=r;v++){let _=v/r*Math.PI*2,w=Math.sin(_),M=-Math.cos(_);l.x=M*y.x+w*x.x,l.y=M*y.y+w*x.y,l.z=M*y.z+w*x.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)g(f);g(a===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let y=0;y<=r;y++)c.x=f/t,c.y=y/r,p.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let y=1;y<=r;y++){let x=(r+1)*(f-1)+(y-1),v=(r+1)*f+(y-1),_=(r+1)*f+y,w=(r+1)*(f-1)+y;m.push(x,v,w),m.push(v,_,w)}})()})(),this.setIndex(m),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new $o[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},eu=class extends tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new S,a=new S;if(e.index!==null){let s=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let g=0;g<3;g++){let f=o.getX(p+g),y=o.getX(p+(g+1)%3);r.fromBufferAttribute(s,f),a.fromBufferAttribute(s,y),om(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(s,h),a.fromBufferAttribute(s,u),om(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Ee(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function om(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var RM=Object.freeze({__proto__:null,BoxGeometry:la,CapsuleGeometry:kh,CircleGeometry:zh,ConeGeometry:Bh,CylinderGeometry:Jo,DodecahedronGeometry:Hh,EdgesGeometry:Vh,ExtrudeGeometry:jh,IcosahedronGeometry:qh,LatheGeometry:Zo,OctahedronGeometry:Xh,PlaneGeometry:yn,PolyhedronGeometry:xr,RingGeometry:Yh,ShapeGeometry:Kh,SphereGeometry:un,TetrahedronGeometry:$h,TorusGeometry:Zh,TorusKnotGeometry:Jh,TubeGeometry:Qh,WireframeGeometry:eu});function Eo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function yx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var da=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];t:{e:{let s;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=r,r=t[++i],e<r)break e}s=t.length;break n}if(e>=a)break t;{let o=t[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=a,a=t[--i-1],e>=a)break e}s=i,i=0}}for(;i<s;){let o=i+s>>>1;e<t[o]?s=o:i=o+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tu=class extends da{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ip,endingEnd:ip}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,s=e+1,o=r[a],l=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case rp:a=e,o=2*t-i;break;case ap:a=r.length-2,o=t+r[a]-r[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rp:s=e,l=2*i-t;break;case ap:s=1,l=i+r[1]-r[0];break;default:s=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(r-t),g=m*m,f=g*m,y=-d*f+2*d*g-d*m,x=(1+d)*f+(-1.5-2*d)*g+(-.5+d)*m+1,v=(-1-p)*f+(1.5+p)*g+.5*m,_=p*f-p*g;for(let w=0;w!==o;++w)a[w]=y*s[h+w]+x*s[c+w]+v*s[l+w]+_*s[u+w];return a}},nu=class extends da{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)a[d]=s[c+d]*u+s[l+d]*h;return a}},iu=class extends da{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Nn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Eo(t,this.TimeBufferType),this.values=Eo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Eo(e.times,Array),values:Eo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lo:t=this.InterpolantFactoryMethodDiscrete;break;case uh:t=this.InterpolantFactoryMethodLinear;break;case ic:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lo;case this.InterpolantFactoryMethodLinear:return uh;case this.InterpolantFactoryMethodSmooth:return ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let o=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(r!==void 0&&yx(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ic,a=e.length-1,s=1;for(let o=1;o<a;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let h=o*i,u=s*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++s}}if(a>0){e[s]=e[a];for(let o=a*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Nn.prototype.TimeBufferType=Float32Array,Nn.prototype.ValueBufferType=Float32Array,Nn.prototype.DefaultInterpolation=uh;var pr=class extends Nn{constructor(e,t,i){super(e,t,i)}};pr.prototype.ValueTypeName="bool",pr.prototype.ValueBufferType=Array,pr.prototype.DefaultInterpolation=Lo,pr.prototype.InterpolantFactoryMethodLinear=void 0,pr.prototype.InterpolantFactoryMethodSmooth=void 0;var ru=class extends Nn{};ru.prototype.ValueTypeName="color";var au=class extends Nn{};au.prototype.ValueTypeName="number";var su=class extends da{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Jn.slerpFlat(a,0,s,c-o,s,c,l);return a}},el=class extends Nn{InterpolantFactoryMethodLinear(e){return new su(this.times,this.values,this.getValueSize(),e)}};el.prototype.ValueTypeName="quaternion",el.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Nn{constructor(e,t,i){super(e,t,i)}};mr.prototype.ValueTypeName="string",mr.prototype.ValueBufferType=Array,mr.prototype.DefaultInterpolation=Lo,mr.prototype.InterpolantFactoryMethodLinear=void 0,mr.prototype.InterpolantFactoryMethodSmooth=void 0;var ou=class extends Nn{};ou.prototype.ValueTypeName="vector";var Zr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},lu=class{constructor(e,t,i){let r=this,a,s=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,l),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},xx=new lu,pa=class{constructor(e){this.manager=e!==void 0?e:xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise((function(r,a){i.load(e,r,t,a)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var cu=class extends pa{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=Zr.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout((function(){t&&t(s),a.manager.itemEnd(e)}),0),s;let o=ns("img");function l(){h(),Zr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(u){h(),r&&r(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}};var ma=class extends pa{constructor(e){super(e)}load(e,t,i,r){let a=new Pt,s=new cu(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,(function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)}),i,r),a}};var CM=new Ue,LM=new S,PM=new S;var IM=new Ue,DM=new S,UM=new S;var tl=class extends pa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=Zr.get(e);if(s!==void 0)return a.manager.itemStart(e),s.then?void s.then((c=>{t&&t(c),a.manager.itemEnd(e)})).catch((c=>{r&&r(c)})):(setTimeout((function(){t&&t(s),a.manager.itemEnd(e)}),0),s);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then((function(c){return c.blob()})).then((function(c){return createImageBitmap(c,Object.assign(a.options,{colorSpaceConversion:"none"}))})).then((function(c){return Zr.add(e,c),t&&t(c),a.manager.itemEnd(e),c})).catch((function(c){r&&r(c),Zr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)}));Zr.add(e,l),a.manager.itemStart(e)}};var NM=new Ue,OM=new Ue,FM=new Ue;var nl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=lm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function lm(){return performance.now()}var kM=new S,zM=new Jn,BM=new S,HM=new S;var VM=new S,GM=new Jn,WM=new S,jM=new S;var yu="\\[\\]\\.:\\/",_x=new RegExp("["+yu+"]","g"),Nc="[^"+yu+"]",Mx="[^"+yu.replace("\\.","")+"]",wx=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Nc)+/(WCOD+)?/.source.replace("WCOD",Mx)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc)+"$"),Sx=["material","materials","bones","map"],mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_x,"")}static parseTrackName(e){let t=wx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=i.nodeName.substring(r+1);Sx.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let s=e[r];if(s===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=class{constructor(n,e,t){let i=t||mt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray],mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qM=new Float32Array(1);var XM=new Ue;var YM=new ae;var KM=new S,$M=new S;var ZM=new S;var JM=new S,QM=new Ue,ew=new Ue;var tw=new S,nw=new Ve,iw=new Ve;var rw=new S,aw=new S,sw=new S;var ow=new S,lw=new ki;var cw=new Qn;var hw=new S;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var W={brand:"Life Around Us",touchControls:!1,clinic:{name:"Explorer",welcome:"Please relax and enjoy the ride.",logo:null},intro:{enabled:!0,sound:"soft",volume:.22},units:"C",clock:"auto",distance:"km",textSize:1,locale:void 0,showCityCard:!1,live:{newsRefreshHours:3,photos:!0,webcams:!0,news:!0,liveClouds:!0,cloudRefreshHours:1,quakes:!0,quakeMinMagnitude:6,quakeHours:3,quakeRefreshMinutes:10,storms:!0,stormRefreshMinutes:180,rumble:!0},tour:{driftDegreesPerSecond:.04,showCityLabels:!0},regional:{day:{url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpeg",maxZoom:8,credit:"NASA GIBS"},night:{url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/2016-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.png",maxZoom:8,credit:"NASA GIBS"}},weather:{refreshHours:3,apiKey:""},calmMode:!0,homeCity:null,maxFps:0,oldLook:1,cityCloseUp:!1,tiltShift:!0,onDemand:{folder:"%DESKTOP%\\On Demand"},satelliteVolClouds:!0,satelliteSunsetLook:!0,satelliteSpeed:"timelapse",theatre:"off",lensFlare:!0,moon:!1,stormSpirals:!0,volcanoes:!0,aurora:!0,glitter:!0,lightning:!0,cityCloseUpTiles:{day:{key:"day",url:"https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2024_3857/default/g/{z}/{y}/{x}.jpg",maxZoom:14,credit:"Sentinel-2 cloudless by EOX (modified Copernicus data)"},night:{key:"night",url:"https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/2016-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.png",maxZoom:8,credit:"NASA GIBS"},terrain:{key:"terrain",url:"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",maxZoom:12,credit:"Terrain Tiles (Mapzen, AWS Open Data)"}},nightTwinkle:!1,sfx:{enabled:!0,volume:.55,jingles:1},ambient:{enabled:!0,volume:.5},music:{enabled:!0,source:"ost",soundtrack:["music/Music6.mp3","music/Music3.mp3","music/Music1.mp3","music/Music2.mp3","music/Music4.mp3","music/Music5.mp3"],tracks:[],volume:.35}};var Vm="lau.options.v1",Im,Dm;(Dm=(Im=W).live)!=null||(Im.live={});var Um,Nm;(Nm=(Um=W).tour)!=null||(Um.tour={});var Om,Fm;(Fm=(Om=W).music)!=null||(Om.music={});var km,zm;(zm=(km=W).sfx)!=null||(km.sfx={});var Bm,Hm;(Hm=(Bm=W).ambient)!=null||(Bm.ambient={});var Ct=[["On",!0],["Off",!1]],Pm=n=>`${Math.round(n*100)}%`,ys={units:{values:[["Celsius","C"],["Fahrenheit","F"]],get:()=>W.units,set:n=>W.units=n},distance:{values:[["Kilometres","km"],["Miles","mi"]],get:()=>W.distance==="mi"?"mi":"km",set:n=>W.distance=n},clock:{values:[["Automatic","auto"],["12-Hour","12h"],["24-Hour","24h"]],get:()=>["12h","24h"].includes(W.clock)?W.clock:"auto",set:n=>W.clock=n},textSize:{values:[["Small",.9],["Normal",1],["Large",1.15],["Extra Large",1.3]],get:()=>{var n;return+((n=W.textSize)!=null?n:1)},set:n=>W.textSize=n},touchControls:{values:Ct,get:()=>W.touchControls===!0,set:n=>{W.touchControls=n,window.dispatchEvent(new CustomEvent("lau:touch-controls-changed",{detail:{enabled:n}}))}},quakes:{values:Ct,get:()=>W.live.quakes!==!1,set:n=>W.live.quakes=n},quakeMin:{values:[["M5.5 and up",5.5],["M6.0 and up",6],["M6.5 and up",6.5],["M7.0 and up",7]],get:()=>{var n;return(n=W.live.quakeMinMagnitude)!=null?n:6},set:n=>W.live.quakeMinMagnitude=n},storms:{values:Ct,get:()=>W.live.storms!==!1,set:n=>W.live.storms=n},rumble:{values:Ct,get:()=>W.live.rumble!==!1,set:n=>W.live.rumble=n},labels:{values:Ct,get:()=>W.tour.showCityLabels!==!1,set:n=>W.tour.showCityLabels=n},clouds:{values:Ct,get:()=>W.live.clouds!==!1,set:n=>W.live.clouds=n},twinkle:{values:Ct,get:()=>W.nightTwinkle===!0,set:n=>W.nightTwinkle=n},lensFlare:{values:Ct,get:()=>W.lensFlare!==!1,set:n=>W.lensFlare=n},aurora:{values:Ct,get:()=>W.aurora!==!1,set:n=>W.aurora=n},tiltShift:{values:Ct,get:()=>W.tiltShift!==!1,set:n=>W.tiltShift=n},glitter:{values:Ct,get:()=>W.glitter!==!1,set:n=>W.glitter=n},lightning:{values:Ct,get:()=>W.lightning!==!1,set:n=>W.lightning=n},stormSpirals:{values:Ct,get:()=>W.stormSpirals!==!1,set:n=>W.stormSpirals=n},volcanoes:{values:Ct,get:()=>W.volcanoes!==!1,set:n=>W.volcanoes=n},cityCloseUp:{values:Ct,get:()=>W.cityCloseUp===!0,set:n=>W.cityCloseUp=n},oldLook:{values:[["Like the Old App",1],["Light",.5],["Off",0]],get:()=>{var n;return+((n=W.oldLook)!=null?n:1)},set:n=>W.oldLook=n},news:{values:Ct,get:()=>W.live.news!==!1,set:n=>W.live.news=n},sfx:{values:Ct,get:()=>W.sfx.enabled!==!1,set:n=>W.sfx.enabled=n},sfxVolume:{values:[.15,.3,.55,.8,1].map(n=>[Pm(n),n]),get:()=>{var n;return(n=W.sfx.volume)!=null?n:.55},set:n=>W.sfx.volume=n},music:{values:[["My Music","mine"],["Original Soundtrack","ost"],["Disabled",!1],["All","all"]],get:()=>W.music.enabled===!1?!1:W.music.source||"all",set:n=>{W.music.enabled=n!==!1,n&&(W.music.source=n)}},volume:{values:[0,.1,.2,.35,.5,.7,1].map(n=>[Pm(n),n]),get:()=>{var n;return(n=W.music.volume)!=null?n:.35},set:n=>W.music.volume=n},ambient:{values:Ct,get:()=>W.ambient.enabled!==!1,set:n=>W.ambient.enabled=n},waveVolume:{values:[["Off",0],["25%",.25],["50%",.5],["75%",.75],["100%",1]],get:()=>{var n;return W.ambient.enabled===!1?0:(n=W.ambient.volume)!=null?n:.5},set:n=>{W.ambient.volume=n,W.ambient.enabled=n>0}},theatre:{values:[["Off","off"],["Semi Experience","semi"],["Full Experience","full"]],get:()=>{var n;return(n=W.theatre)!=null?n:"off"},set:n=>W.theatre=n},satelliteVolClouds:{values:Ct,get:()=>W.satelliteVolClouds!==!1,set:n=>W.satelliteVolClouds=n},satelliteSunsetLook:{values:Ct,get:()=>W.satelliteSunsetLook!==!1,set:n=>W.satelliteSunsetLook=n},satelliteSpeed:{values:[["Time-Lapse","timelapse"],["Real Time","real"],["Fast Time-Lapse","fast"]],get:()=>{var n;return(n=W.satelliteSpeed)!=null?n:"timelapse"},set:n=>W.satelliteSpeed=n},jingles:{values:[["Off",0],["15%",.15],["25%",.25],["50%",.5],["100%",1],["150%",1.5],["200%",2]],get:()=>{var n;return(n=W.sfx.jingles)!=null?n:1},set:n=>W.sfx.jingles=n}},Je=(n,e)=>({label:n,id:e}),bx={label:"",items:[{label:"Settings",items:[{label:"Your Name",action:"name"},{label:"Touch Controls",items:[Je("Show Touch Controls","touchControls")]},{label:"Theatre Mode",items:[Je("Theatre Mode","theatre")]},{label:"Satellite Mode",items:[{label:"Start / Stop",action:"satellite"},Je("Speed","satelliteSpeed"),Je("Follow the Sun","satelliteSunsetLook"),Je("Volumetric Clouds","satelliteVolClouds")]},{label:"Weather",items:[Je("Temperature","units")]},{label:"Units & Display",items:[Je("Temperature","units"),Je("Distance","distance"),Je("Clock","clock"),Je("Text Size","textSize")]},{label:"Live Events",items:[Je("Earthquakes","quakes"),Je("Earthquake Size","quakeMin"),Je("Storms","storms"),Je("Controller Rumble","rumble")]},{label:"Globe",items:[Je("City Names","labels"),Je("Clouds","clouds"),Je("City Light Twinkle","twinkle"),Je("Old Look","oldLook"),Je("City Close-Up","cityCloseUp"),Je("Tilt-Shift","tiltShift"),Je("Lens Flare","lensFlare"),Je("Aurora","aurora"),Je("Ocean Glitter","glitter"),Je("Storm Lightning","lightning"),Je("Hurricane Spirals","stormSpirals"),Je("Volcanoes","volcanoes"),Je("Headlines","news")]},{label:"Sound",items:[Je("Music Volume","volume"),Je("Background Sound","waveVolume"),Je("Jingles","jingles"),Je("Sound Effects","sfx"),Je("Sound Effects Volume","sfxVolume")]}]},{label:"Music",id:"music",pre:[{label:"Select Track",songs:"tracks"},{label:"Select by Mood",songs:"moods"},{label:"My Music",songs:"mine"}],hide:["mine","all"],extra:[]}]},Vi={};try{Vi=JSON.parse(localStorage.getItem(Vm)||"{}")||{}}catch{Vi={}}Vi.music==="mine"&&!Vi.musicV2&&(Vi.music="all");for(let[n,e]of Object.entries(ys))n in Vi&&e.values.some(([,t])=>t===Vi[n])&&e.set(Vi[n]);var cl=()=>{try{localStorage.setItem(Vm,JSON.stringify({...Object.fromEntries(Object.entries(ys).map(([n,e])=>[n,e.get()])),musicV2:!0}))}catch{}},Gm=[["Dawn's Theme","music/Music1.mp3"],["Daylight Theme","music/Music2.mp3"],["Moonlight Theme","music/Music3.mp3"],["Afterlight Theme","music/Music4.mp3"],["Starlight Theme","music/Music5.mp3"]],Ex=[["Energetic","music/Music3.mp3"],["Calm","music/Music2.mp3"],["Dramatic","music/Music5.mp3"],["Upbeat","music/Music1.mp3"],["Electronic","music/Music4.mp3"]],Wm=n=>decodeURIComponent(n.split("/").pop()).replace(/\.[a-z0-9]+$/i,"");function jm(n){if(!n)return"";let e=new URL(n,location.href).pathname.replace(/^\//,""),t=Gm.find(([,i])=>i===e);return t?t[0]:e==="music/Music6.mp3"?"Theme Song 6":Wm(n)}function Tx(n){var i;if(n.items)return n.items.map(r=>r.action?{label:r.label,action:r.action}:{label:r.label,open:r});if(n.songs==="mine"){let r=window.__music,a=(r==null?void 0:r.mineNames)||[];if(!a.length)return[{label:"Put songs in a folder called Music on your Desktop",disabled:!0}];let s=()=>W.music.source==="mine"?r.currentIndex():-2;return[{label:"Play All My Songs",radio:!0,track:!0,pick:()=>{r.playMine(-1),W.music.source="mine",cl()},on:()=>!1},...a.slice(0,50).map((o,l)=>({label:o,radio:!0,track:!0,pick:()=>{r.playMine(l),W.music.source="mine",W.music.enabled=!0,cl()},on:()=>s()===l}))]}if(n.songs)return(n.songs==="moods"?Ex:Gm).map(([a,s])=>({label:a,radio:!0,track:!0,pick:()=>{var o,l;return(l=(o=window.__music)==null?void 0:o.playUrl)==null?void 0:l.call(o,s)},on:()=>{var o,l;return((l=(o=window.__music)==null?void 0:o.current)==null?void 0:l.call(o))===s}}));if(n.tracks){let r=window.__music;return W.music.enabled===!1||!((i=r==null?void 0:r.list)!=null&&i.length)?[{label:"Music is currently disabled.",disabled:!0}]:r.list.map((a,s)=>({label:Wm(a),radio:!0,track:!0,pick:()=>r.playIndex(s),on:()=>r.currentIndex()===s}))}let e=ys[n.id],t=(n.pre||[]).map(r=>r.disabled?{label:r.label,disabled:!0}:{label:r.label,open:r});t.push(...e.values.filter(([,r])=>!(n.hide||[]).includes(r)).map(([r,a])=>({label:r,radio:!0,pick:()=>e.set(a),on:()=>e.get()===a})));for(let r of n.extra||[])t.push({label:r.label,open:r});return t}var kt=null,ei,ll,qm,Gi=!1,fs=()=>{},xi=()=>{},Wi=[],Mr=0,hl=0;function Ax(){kt=document.createElement("div"),kt.className="lwp-options",kt.setAttribute("role","dialog"),kt.setAttribute("aria-label","Options"),kt.innerHTML=`
    <div class="lwp-opt-title" aria-hidden="true">OPTIONS</div>
    <div class="lwp-opt-list"></div>
    <div class="lwp-opt-crumb"></div>
    <div class="lwp-opt-btn lwp-opt-select"><img src="data/ui/osd/cross.png" alt=""><span>Select</span></div>
    <div class="lwp-opt-btn lwp-opt-back"><img src="data/ui/osd/circle.png" alt=""><span>Close</span></div>`,ei=kt.querySelector(".lwp-opt-list"),ll=kt.querySelector(".lwp-opt-crumb"),qm=kt.querySelector(".lwp-opt-back span"),kt.querySelector(".lwp-opt-select").addEventListener("click",n=>{n.stopPropagation(),vs()}),kt.querySelector(".lwp-opt-back").addEventListener("click",n=>{n.stopPropagation(),ul()}),kt.addEventListener("pointerdown",n=>n.stopPropagation()),kt.addEventListener("wheel",n=>{n.stopPropagation(),gs(Math.sign(n.deltaY))},{passive:!0}),document.body.append(kt)}var xs=()=>Wi[Wi.length-1];function Rx(){let n=xs();ei.classList.toggle("opt-radio",n.rows.some(t=>t.radio)),ei.replaceChildren(...n.rows.map((t,i)=>{let r=document.createElement("div");r.className="lwp-opt-item",r.dataset.i=i;let a=document.createElement("span");return a.textContent=t.label,a.dataset.text=t.label,r.append(a),t.radio&&t.on()&&r.classList.add("current"),t.disabled&&r.classList.add("disabled"),r.addEventListener("click",s=>{s.stopPropagation(),i===n.cursor?vs():(n.cursor=i,xu(),xi("optMove"))}),r})),ll.replaceChildren();let e=document.createElement("div");e.className="lwp-opt-live",e.innerHTML='<i class="live-dot"></i><b>Live</b>',ll.append(e);for(let t of Wi.slice(1)){let i=document.createElement("span");i.textContent=t.node.label,ll.append(i)}qm.textContent=Wi.length>1?"Back":"Close",Mr=n.cursor,xu()}function xu(){let n=xs();[...ei.children].forEach((e,t)=>e.classList.toggle("focus",t===n.cursor)),hl||(hl=requestAnimationFrame(Xm))}function Xm(){if(hl=0,!Gi)return;let n=xs();Mr+=(n.cursor-Mr)*(1-.65),Math.abs(n.cursor-Mr)<.001&&(Mr=n.cursor);let e=29/7.2,t=21.5/7.2;[...ei.children].forEach((i,r)=>{let a=r-Mr,s=a*e+Math.sign(a)*Math.min(1,Math.abs(a))*t;i.style.transform=`translateY(${s.toFixed(3)}vh)`}),Mr!==n.cursor&&(hl=requestAnimationFrame(Xm))}function gs(n){let e=xs(),t=Math.max(0,Math.min(e.rows.length-1,e.cursor+n));t!==e.cursor&&(e.cursor=t,xu(),xi("optMove"))}function Ym(n){let e=Tx(n),t=Math.max(0,e.findIndex(i=>i.radio&&i.on()));Wi.push({node:n,rows:e,cursor:t}),Km()}function Km(){ei.classList.remove("in"),ei.offsetWidth,ei.classList.add("in"),Rx()}function vs(){let n=xs(),e=n.rows[n.cursor];if(e){if(e.disabled){xi("error");return}if(xi("optSelect"),e.open){Ym(e.open);return}if(e.action){pl(),fs(`action:${e.action}`);return}if(e.track){e.pick(),setTimeout(()=>[...ei.children].forEach((t,i)=>t.classList.toggle("current",!!n.rows[i].radio&&n.rows[i].on())),100);return}e.radio&&(e.pick(),cl(),fs(n.node.id,ys[n.node.id].get()),[...ei.children].forEach((t,i)=>t.classList.toggle("current",!!n.rows[i].radio&&n.rows[i].on())))}}function ul(){Wi.length>1?(Wi.pop(),xi("optClose"),Km()):pl()}function dl(){kt||Ax(),Gi=!0,Wi=[],Ym(bx),kt.classList.add("on"),xi("optOpen")}function pl(){Gi&&xi("optClose"),Gi=!1,kt==null||kt.classList.remove("on")}function $m(n,e){let t=ys[n],i=t.values.map(([,s])=>s),r=i.indexOf(t.get());r<0&&(r=i.reduce((s,o,l)=>Math.abs(o-t.get())<Math.abs(i[s]-t.get())?l:s,0));let a=Math.max(0,Math.min(i.length-1,r+e));return a!==r&&(t.set(i[a]),cl(),fs(n,i[a])),i[a]}function Zm(n,e){fs=n||fs,xi=e||xi}var Cx=["KeyO"];window.addEventListener("keydown",n=>{if(!(n.ctrlKey||n.altKey||n.metaKey)){if(!Gi){Cx.includes(n.code)&&document.body.dataset.started==="1"&&(n.preventDefault(),n.stopImmediatePropagation(),dl());return}if(n.key!=="F11"&&(n.preventDefault(),n.stopImmediatePropagation(),!(n.repeat&&!/Arrow/.test(n.code))))switch(n.code){case"ArrowUp":case"KeyW":case"Numpad8":gs(-1);break;case"ArrowDown":case"KeyS":case"Numpad2":gs(1);break;case"ArrowRight":case"KeyD":case"Enter":case"NumpadEnter":case"Space":vs();break;case"ArrowLeft":case"KeyA":case"Escape":case"Backspace":ul();break;case"KeyO":pl();break}}},!0);window.addEventListener("keyup",n=>{Gi&&n.stopImmediatePropagation()},!0);var Jm=()=>Gi;function Qm(n,e){let t=a=>{var s;return!!((s=n.buttons[a])!=null&&s.pressed)},i=n.axes,r=e("opt-tri",t(3));return Gi?r?(pl(),!0):(e("opt-up",t(12)||i[1]<-.6)&&gs(-1),e("opt-down",t(13)||i[1]>.6)&&gs(1),e("opt-right",t(15)||i[0]>.6)&&vs(),e("opt-left",t(14)||i[0]<-.6)&&ul(),e("opt-cross",t(0))&&vs(),e("opt-circle",t(1))&&ul(),!0):(r&&dl(),r>0)}var wn=Math.PI/180;function ml(n=new Date){let e=n.getTime()/864e5+24405875e-1-2451545,t=(280.46+.9856474*e)%360,i=(357.528+.9856003*e)%360*wn,r=(t+1.915*Math.sin(i)+.02*Math.sin(2*i))*wn,a=(23.439-4e-7*e)*wn,s=Math.asin(Math.sin(a)*Math.sin(r)),o=Math.atan2(Math.cos(a)*Math.sin(r),Math.cos(r)),l=(18.697374558+24.06570982441908*e)%24*15,c=o/wn-l;return c=(c+540)%360-180,{lat:s/wn,lon:c}}function ef(n=new Date){let e=n.getTime()/864e5+24405875e-1-2451545,t=f=>(f%360+360)%360*wn,i=218.316+13.176396*e,r=t(134.963+13.064993*e),a=t(93.272+13.22935*e),s=t(297.85+12.190749*e),o=t(357.529+.98560028*e),l=t(i+6.289*Math.sin(r)+1.274*Math.sin(2*s-r)+.658*Math.sin(2*s)+.214*Math.sin(2*r)-.186*Math.sin(o)-.114*Math.sin(2*a)),c=(5.128*Math.sin(a)+.281*Math.sin(r+a)+.278*Math.sin(r-a)+.173*Math.sin(2*s-a))*wn,h=385001-20905*Math.cos(r)-3699*Math.cos(2*s-r)-2956*Math.cos(2*s),u=(23.439-4e-7*e)*wn,d=Math.asin(Math.sin(c)*Math.cos(u)+Math.cos(c)*Math.sin(u)*Math.sin(l)),p=Math.atan2(Math.sin(l)*Math.cos(u)-Math.tan(c)*Math.sin(u),Math.cos(l)),m=(18.697374558+24.06570982441908*e)%24*15,g=p/wn-m;return g=(g%360+540)%360-180,{lat:d/wn,lon:g,km:h}}function ji(n,e,t=1){let i=n*wn,r=e*wn;return[t*Math.cos(i)*Math.cos(r),t*Math.sin(i),-t*Math.cos(i)*Math.sin(r)]}var va=new Map,hf=0,ya=()=>{var n;return(n=window.chrome)==null?void 0:n.webview},cf;(cf=ya())==null||cf.addEventListener("message",n=>{let e=n.data;if((e==null?void 0:e.cmd)!=="fetchResult"&&(e==null?void 0:e.cmd)!=="icyResult")return;let t=va.get(e.id);t&&(va.delete(e.id),e.ok?t.resolve(e):t.reject(new Error(e.error||`HTTP ${e.status}`)))});function wr(n,e={}){if(!ya())return Promise.reject(new Error("no shell"));let t=`f${++hf}`;return new Promise((i,r)=>{va.set(t,{resolve:i,reject:r}),ya().postMessage({cmd:"fetch",id:t,url:n,...e}),setTimeout(()=>{va.delete(t)&&r(new Error("timeout"))},3e4)})}var Lx="https://eonet.gsfc.nasa.gov/api/v3/events?category=volcanoes&status=open&limit=100",Px="https://webservices.volcano.si.edu/geoserver/GVP-VOTW/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=GVP-VOTW:Smithsonian_VOTW_Holocene_Eruptions&outputFormat=application/json&count=5000&propertyName=Volcano_Name,ExplosivityIndexMax,StartDateYear,StartDateMonth,GeoLocation&CQL_FILTER=StartDateYear%20%3E%3D%201990",tf=n=>(n||"").normalize("NFD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/volcano.*$/,"").split(/[^a-z]+/).filter(e=>e.length>=4&&!["group","volcanic","field","island","mount"].includes(e));async function uf({minVei:n=3}={}){let e=await xa(Lx),i=(JSON.parse((await wr(Px)).text||"{}").features||[]).map(a=>{var s,o,l,c;return{words:tf(a.properties.Volcano_Name),lon:(o=(s=a.geometry)==null?void 0:s.coordinates)==null?void 0:o[0],lat:(c=(l=a.geometry)==null?void 0:l.coordinates)==null?void 0:c[1],when:(a.properties.StartDateYear||0)*100+(a.properties.StartDateMonth||0),vei:a.properties.ExplosivityIndexMax}}),r=[];for(let a of e.events||[]){let s=(a.geometry||[]).filter(d=>d.type==="Point").pop();if(!s||!Array.isArray(s.coordinates))continue;let[o,l]=s.coordinates;if(!Number.isFinite(l)||!Number.isFinite(o))continue;let c=tf(a.title),h=null;for(let d of i){let p=Math.hypot(d.lat-l,(d.lon-o)*Math.cos(l*Math.PI/180)),m=d.words.some(f=>c.includes(f))&&p<1;if(!(m||p<.13))continue;let g=(m?1e7:0)+d.when;(!h||g>h.score)&&(h={...d,score:g})}let u=h==null?void 0:h.vei;Number.isFinite(u)&&u>=n&&r.push({id:a.id,name:a.title,lat:l,lon:o,vei:u})}return r}var Ix=/\b(news|talk|sports?|public radio|information|politics|spoken|multicultural|multilingual|religio\w*|sermon|christian talk|comedy|podcast)\b/i,Dx=["de1","de2","fi1","nl1","at1"].map(n=>`https://${n}.api.radio-browser.info`),Ux=n=>{let e=/"([^"]{3,})"?/.exec(n);return(e?e[1]:n).replace(/\s*[-–|,]\s*(live|online|stream|radio online)\s*$/i,"").replace(/\s+/g," ").trim()};async function df({lat:n,lon:e,max:t=12}={}){if(!Number.isFinite(n)||!Number.isFinite(e))throw new Error("no location");let i=null;for(let r of Dx)try{let a=async m=>{let g=await fetch(`${r}/json/stations/search?geo_lat=${n.toFixed(4)}&geo_long=${e.toFixed(4)}&geo_distance=${m*1e3}&hidebroken=true&order=votes&reverse=true&limit=150`,{cache:"no-store"});if(!g.ok)throw new Error(`radio HTTP ${g.status}`);return g.json()},s=await a(60),o=m=>/^https:/i.test(m.url_resolved||"")&&!m.hls&&!/\.m3u8(\?|$)/i.test(m.url_resolved)&&/^(MP3|AAC|AAC\+|OGG)$/i.test(m.codec||"")&&m.lastcheckok!==0,l=m=>Ix.test(`${m.tags||""} ${m.name||""}`);if(s.filter(m=>o(m)&&!l(m)).length<6){let m=await a(150),g=new Set(s.map(f=>f.stationuuid));s=s.concat(m.filter(f=>!g.has(f.stationuuid)))}let c=new Map;for(let m of s.filter(o)){let g=Ux(m.name||"");if(!g)continue;let f=(m.votes||0)+(m.clickcount||0)*10+(/MP3/i.test(m.codec)?.5:0)+(m.bitrate||0)/1e3,y=c.get(g.toLowerCase());(!y||f>y.score)&&c.set(g.toLowerCase(),{name:g,score:f,url:m.url_resolved,talk:l(m),tags:(m.tags||"").split(",").map(x=>x.trim()).filter(x=>x&&x.length<24&&!/^(fm|am|radio|corus|rogers)/i.test(x)),logo:/^https?:\/\//i.test(m.favicon||"")?m.favicon.replace(/^http:/i,"https:"):""})}let h=m=>m.toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),u=[];for(let m of[...c.values()].sort((g,f)=>f.score-g.score)){let g=h(m.name);u.some(f=>h(f.name).includes(g)||g.includes(h(f.name)))||u.push(m)}let d=u.filter(m=>!m.talk),p=u.find(m=>m.talk);return p?[...d.slice(0,t-1),p].sort((m,g)=>g.score-m.score):d.slice(0,t)}catch(a){i=a}throw i||new Error("radio directory unavailable")}function pf(n){if(!ya())return Promise.reject(new Error("no shell"));let e=`i${++hf}`;return new Promise((t,i)=>{va.set(e,{resolve:r=>t(r.title||""),reject:i}),ya().postMessage({cmd:"icy",id:e,url:n}),setTimeout(()=>{va.delete(e)&&i(new Error("timeout"))},12e3)})}async function xa(n){let e=await fetch(n,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()}var Nx="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson";async function mf({minMag:n=6,hours:e=24}={}){let t=await xa(Nx),i=Date.now();return(t.features||[]).map(r=>{var o;let a=r.properties||{},s=((o=r.geometry)==null?void 0:o.coordinates)||[];return{id:r.id,kind:"quake",mag:a.mag,place:a.place||"Unknown location",time:a.time,lon:s[0],lat:s[1],depth:s[2]}}).filter(r=>r.mag>=n&&i-r.time<=e*36e5&&Number.isFinite(r.lat)).sort((r,a)=>a.mag-r.mag).slice(0,10)}var Ox="https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtype=TC";function Fx(n,e,t){return n<119?"Tropical Storm":t>=100&&e>=0?"Typhoon":e<0||t>=40&&t<100?"Cyclone":"Hurricane"}async function kx(n){try{return await xa(n)}catch{let t=await wr(n);return JSON.parse(t.text||"{}")}}async function ff({minKmh:n=209,hours:e=18}={}){let t=await kx(Ox),i=Date.now(),r=a=>a.toLowerCase().replace(/\b\w/g,s=>s.toUpperCase());return(t.features||[]).filter(a=>{var s,o;return((s=a.properties)==null?void 0:s.Class)==="Point_Centroid"&&((o=a.geometry)==null?void 0:o.type)==="Point"}).map(a=>{var p;let s=a.properties,[o,l]=a.geometry.coordinates,c=Number((p=s.severitydata)==null?void 0:p.severity)||0,h=Date.parse(/Z|[+-]\d\d:?\d\d$/.test(s.todate||"")?s.todate:`${s.todate}Z`),u=r(String(s.eventname||s.name||"Storm").replace(/-\d+$/,"").replace(/-/g," ").trim()),d=1+[154,178,209,252].filter(m=>c>=m).length;return{id:`tc${s.eventid}`,name:u,kind:Fx(c,l,o),cat:d,kmh:c,lat:l,lon:o,time:h,near:s.country||""}}).filter(a=>a.kmh>=n&&Number.isFinite(a.lat)&&Number.isFinite(a.time)&&i-a.time<=e*36e5).sort((a,s)=>s.kmh-a.kmh).slice(0,8)}var zx="https://api.wheretheiss.at/v1/satellites/25544";async function gf(n=4){let e=Math.floor(Date.now()/1e3),t=[];for(let r=e;r<=e+n*3600;r+=120)t.push(r);let i=[];for(let r=0;r<t.length;r+=10){let a=await xa(`${zx}/positions?timestamps=${t.slice(r,r+10).join(",")}&units=kilometers`);for(let s of a)i.push([s.timestamp*1e3,s.latitude,s.longitude,s.altitude]);await new Promise(s=>setTimeout(s,1200))}return i.sort((r,a)=>r[0]-a[0])}var vf="https://view.eumetsat.int/geoserver/ows?service=WMS&request=GetMap&version=1.3.0&layers=mumi:worldcloudmap_ir108&styles=&crs=EPSG:4326&bbox=-90,-180,90,180&width=2048&height=1024&format=image/png",yf="https://clouds.matteason.co.uk/images/2048x1024/clouds.jpg",_s=null,Bx=0,Ms=new Map;function xf(n){_s||(_s=new Worker(new URL("./cloud_work_tizen.js",import.meta.url),{type:"module"}),_s.onmessage=t=>{let i=Ms.get(t.data.id);i&&(Ms.delete(t.data.id),t.data.ok?i.resolve(t.data):i.reject(new Error(t.data.error)))},_s.onerror=t=>{for(let i of Ms.values())i.reject(new Error(t.message||"cloud worker failed"));Ms.clear()});let e=++Bx;return new Promise((t,i)=>{Ms.set(e,{resolve:t,reject:i}),_s.postMessage({id:e,...n})})}async function bu(n,e){return(await xf({cmd:"sea",W:n,H:e})).m}var Eu=[],nf="";async function _f(n){let e=await xf({cmd:"clouds",url:n,lastSig:nf});return e.same?null:(Eu=e.cells||[],nf=e.sig,e.bmp)}var Hx={"San Jose":"San Jos\xE9, Costa Rica",Santiago:"Santiago",Lima:"Lima",Washington:"Washington, D.C.","New York":"New York City","Hong Kong":"Hong Kong",Vancouver:"Vancouver",Ottawa:"Ottawa",Bogota:"Bogot\xE1",Rome:"Rome",Lagos:"Lagos",Gaza:"Gaza City",Medina:"Medina",Mecca:"Mecca",Kyiv:"Kyiv",Wellington:"Wellington",Manila:"Manila",Regina:"Regina, Saskatchewan",Halifax:"Halifax, Nova Scotia","St. John's":"St. John's, Newfoundland and Labrador",Tripoli:"Tripoli, Libya",Yaounde:"Yaound\xE9",Sanaa:"Sana'a",Singapore:"Singapore",Salem:"Salem, Oregon",Boise:"Boise, Idaho","Santa Fe":"Santa Fe, New Mexico",Phoenix:"Phoenix, Arizona",Helena:"Helena, Montana",Bismarck:"Bismarck, North Dakota",Pierre:"Pierre, South Dakota",Lincoln:"Lincoln, Nebraska","La Paz":"La Paz",Athens:"Athens",Sofia:"Sofia",Monaco:"Monaco",Delhi:"Delhi",Kandahar:"Kandahar",Colombo:"Colombo",Perth:"Perth",Mal\u00E9:"Mal\xE9",Kingston:"Kingston, Jamaica","Santo Domingo":"Santo Domingo",Miami:"Miami","Cape Town":"Cape Town",Denver:"Denver",Marrakesh:"Marrakesh"},rf={Bangui:"The_Bangui_City.jpg","Hong Kong":"Hong_Kong_Skyline_view_from_the_peak_2017.jpg","San Jose":"Downtown_San_Jos\xE9_City_(Costa_Rica).jpg",Singapore:"Marina_Bay,_Financial_District_and_Singapore_River_(35622190292).jpg",Honolulu:"2022_Views_from_Diamond_Head_02.jpg",Kingston:"PortofKingston.jpg",Bras\u00EDlia:"Brasilia_aerea_eixo_monumental.jpg"},Vx=/montage|collage|mosaic|composite|compilation|collection|flag|coat.of.arms|seal|emblem|logo|(?<![a-z])maps?(?![a-z])|locator|location|banner|icon|\.svg$|\.gif$|\.tiff?$|\.webm$|\.ogg$|\.ogv$|\.pdf$/i,af=/skyline|panorama|cityscape|downtown|aerial|overview|city.view|view.of|_city|at.night/i,Ss=new Map,Tu=n=>{try{return JSON.parse(localStorage.getItem(n)||"{}")||{}}catch{return{}}},sf={},Au=(n,e)=>{clearTimeout(sf[n]);let t=()=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}};sf[n]=setTimeout(()=>window.requestIdleCallback?requestIdleCallback(t,{timeout:2e3}):t(),1e3)},Mf="photo-cache-v2",wf="news-cache-v1",wu=Tu(Mf);for(let[n,e]of Object.entries(wu))e&&e.info&&Ss.set(n,Promise.resolve(e.info));var Gx=n=>{let e=document.createElement("div");return e.innerHTML=n||"",e.textContent.trim()};async function of(n){var s,o,l,c;let e=`https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=480&titles=File:${encodeURIComponent(n)}`,t=await xa(e),i=Object.values(((s=t.query)==null?void 0:s.pages)||{})[0],r=(o=i==null?void 0:i.imageinfo)==null?void 0:o[0];if(!r)return null;let a=r.extmetadata||{};return{url:r.thumburl||r.url,width:r.thumbwidth||r.width,height:r.thumbheight||r.height,credit:[Gx((l=a.Artist)==null?void 0:l.value),(c=a.LicenseShortName)==null?void 0:c.value].filter(Boolean).join(" \xB7 ")+" \xB7 Wikimedia Commons"}}var Wx=n=>n.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,""),_u=new Map;function jx(n){if(!_u.has(n.name)){let e=`data/city_photos/${Wx(n.name)}.jpg`;_u.set(n.name,fetch(e,{method:"HEAD"}).then(t=>t.ok?{url:e,width:240,height:180,credit:""}:null).catch(()=>null))}return _u.get(n.name)}async function Sf(n){let e=await jx(n);if(e)return e;if(Ss.has(n.name))return Ss.get(n.name);let t=(async()=>{if(rf[n.name])return of(rf[n.name]);let i=encodeURIComponent((Hx[n.name]||n.name).replace(/ /g,"_")),a=((await xa(`https://en.wikipedia.org/api/rest_v1/page/media-list/${i}`)).items||[]).slice(0,40).filter(s=>s.type==="image"&&!Vx.test(s.title||"")).map(s=>s.title.replace(/^File:/,"")).sort((s,o)=>(af.test(o)?1:0)-(af.test(s)?1:0));for(let s of a.slice(0,12)){let o=await of(s).catch(()=>null);if(o&&o.width>=o.height*1.15)return o}return null})().catch(()=>{});return Ss.set(n.name,t),t.then(i=>{if(i===void 0){Ss.delete(n.name);return}wu[n.name]={at:Date.now(),info:i},Au(Mf,wu)}),t.then(i=>i!=null?i:null)}var ws=null;async function bf(){if(ws)return ws;ws={};try{let n=await(await fetch("data/city_cams.txt")).text();for(let e of n.split(/\r?\n/)){if(!e.includes("=")||e.trimStart().startsWith("#"))continue;let t=e.indexOf("="),[i,...r]=e.slice(t+1).split("|").map(s=>s.trim());if(!i)continue;let a={};for(let s of r){let o=s.indexOf("=");o>0&&(a[s.slice(0,o).trim().toLowerCase()]=s.slice(o+1).trim())}ws[e.slice(0,t).trim().toLowerCase()]={url:i,opts:a}}}catch{}return ws}async function Ef(n){return!!(await bf())[n.name.toLowerCase()]}async function Tf(n){var i;let t=(await bf())[n.name.toLowerCase()];if(!t||!ya())return null;try{if(t.opts.youtube){let d=await wr(`https://www.youtube.com/watch?v=${encodeURIComponent(t.opts.youtube)}`);if(!/"isLiveNow":\s*true/.test(d.text||""))return null}let r=await wr(t.url,t.opts.referer?{referer:t.opts.referer}:{});if(!r.dataUrl)return null;let a=(i=r.lastModified)!=null?i:null,s=/\/(\d{4})-(\d\d)-(\d\d)\/(\d\d)-(\d\d)-(\d\d)\//.exec(r.finalUrl||"");if(a==null&&s&&(a=Date.UTC(+s[1],s[2]-1,+s[3],+s[4],+s[5],+s[6])+14*36e5),a==null&&t.opts.dated==="1")return null;let o=parseFloat(t.opts.maxage||"6")*36e5;if(a!=null&&Date.now()-a>o)return null;let l=r.dataUrl.slice(r.dataUrl.indexOf(",")+1);if(Math.floor(l.length*3/4)-(l.endsWith("==")?2:l.endsWith("=")?1:0)<5e3)return null;let c=`${l.length}:${l.slice(-64)}`,h=Mu[n.name];if(Mu[n.name]={sig:c,at:h&&h.sig===c?h.at:Date.now()},Au(Af,Mu),h&&h.sig===c&&Date.now()-h.at>2.5*36e5)return null;let u=await qx(r.dataUrl,t.opts.crop,t.opts.youtube?.125:0);return u?{src:u,live:!0,credit:`Live camera \xB7 ${new URL(t.url).host}`}:null}catch{return null}}var Af="cam-seen-v1",Mu=Tu(Af);function qx(n,e,t=0){return new Promise(i=>{let r=new Image;r.onload=()=>{let a=0,s=r.width;if(e){let[I,L]=e.split("-").map(Number);a=Math.round(r.width*I),s=Math.max(1,Math.round(r.width*L)-a)}let o=Math.round(r.height*t),l=r.height-2*o,c=240,h=180,u=Math.max(c/s,h/l),d=Math.max(c,Math.round(s*u)),p=Math.max(h,Math.round(l*u)),m=document.createElement("canvas");m.width=c,m.height=h;let g=m.getContext("2d");g.imageSmoothingEnabled=!0,g.imageSmoothingQuality="high";let f=Math.floor((d-c)/2),y=Math.floor((p-h)/2);g.drawImage(r,a,o,s,l,-f,-y,d,p);let x=.3,v=Math.round(10*x),_=Math.round(12*x);g.font=`bold ${Math.max(9,Math.round(26*x))}px Arial`;let w=g.measureText("LIVE").width,M=Math.round(w+_+v*3),R=Math.round(26*x+v*1.6),D=v,A=h-v-R,U=A+R/2;g.fillStyle="rgba(0,0,0,0.588)",g.beginPath(),g.roundRect(D,A,M,R,Math.round(6*x)),g.fill(),g.fillStyle="rgb(235,30,30)",g.beginPath(),g.ellipse(D+v+_/2,U,_/2,_/2,0,0,Math.PI*2),g.fill(),g.fillStyle="#fff",g.textBaseline="middle",g.textAlign="left",g.fillText("LIVE",D+v*2+_,U),i(m.toDataURL("image/jpeg",.9))},r.onerror=()=>i(null),r.src=n})}var Xx=/\b(homicide|homicides|manslaughter|slain|slaying|missing|passe[sd] away|obituar\w*|mourn\w*|grief|kill|killed|killing|dead|death|deaths|die[sd]?|dying|murder|shoot|shooting|shot|stab|stabbing|bomb|bombing|blast|explosion|attack|attacks|war|wars|missile|airstrike|strike[sd]?|troops|army|military|terror|terrorist|hostage|crash|crashes|collision|disaster|earthquake|flood|floods|wildfire|fire|hurricane|typhoon|cyclone|tornado|storm|victim|victims|injur\w*|wound\w*|assault|rape|abuse|arrest\w*|police|crime|criminal|prison|jail|court|trial|guilty|sentenced|lawsuit|fraud|scandal|protest\w*|riot\w*|clash\w*|violence|violent|gun|guns|weapon\w*|cancer|virus|outbreak|epidemic|pandemic|disease|hospital|overdose|suicide|funeral|tragedy|tragic|fatal|emergency|evacuat\w*|threat\w*|crisis|famine|refugee\w*|genocide|massacre|conflict|invasion|sanction\w*)\b/i,fl=/(?<![-\w])(breaking|just in|live updates?|developing|urgent)(?![-\w])/i,Yx={Reykjav\u00EDk:"Reykjavik Iceland",Rome:"Rome Italy",Lagos:"Lagos Nigeria",Nairobi:"Nairobi Kenya",Kathmandu:"Kathmandu Nepal",Honolulu:"Honolulu Hawaii",Vancouver:"Vancouver BC","New York":"New York City",Lima:"Lima Peru"},Su=Tu(wf),lf=new Map(Object.entries(Su));async function Ru(n,{calm:e=!0,count:t=3,refreshHours:i=3}={}){let r=lf.get(n.name);if(r&&Date.now()-r.at<i*36e5)return r.items;let a=encodeURIComponent(`${n.news||Yx[n.name]||n.name} when:1d`),s=await wr(`https://news.google.com/rss/search?q=${a}&hl=en-US&gl=US&ceid=US:en`),l=[...new DOMParser().parseFromString(s.text||"","text/xml").querySelectorAll("item")].map(c=>{var d,p,m;let h=((p=(d=c.querySelector("title"))==null?void 0:d.textContent)==null?void 0:p.trim())||"",u=h.lastIndexOf(" - ");return{title:u>0?h.slice(0,u):h,source:u>0?h.slice(u+3):"",when:Date.parse(((m=c.querySelector("pubDate"))==null?void 0:m.textContent)||"")||0}}).filter(c=>c.title);return e&&(l=l.filter(c=>!Xx.test(c.title))),l.sort((c,h)=>(fl.test(c.title)?0:1)-(fl.test(h.title)?0:1)||h.when-c.when),l=l.slice(0,t),lf.set(n.name,{at:Date.now(),items:l}),Su[n.name]={at:Date.now(),items:l},Au(wf,Su),l}var Rf="weather-cache-v2",$x=24*3600*1e3,Zx=1800*1e3,gl=class{constructor(e,{refreshHours:t=3,refreshMinutes:i,apiKey:r=""}={}){this.cities=e,this.refreshMs=(i?i/60:t)*36e5,this.apiKey=r,this.data={},this.fetchedAt=0,this.omBlockedUntil=0,this.source="",this.listeners=[],this.loadCache()}key(e){return`${e.lat.toFixed(3)},${e.lon.toFixed(3)}`}onUpdate(e){this.listeners.push(e)}notify(){this.listeners.forEach(e=>e())}get backoffMs(){return Math.max(0,this.omBlockedUntil-Date.now())}loadCache(){try{let e=JSON.parse(localStorage.getItem(Rf)||"null");if(!e)return;this.data=e.data||{},this.fetchedAt=e.fetchedAt||0,this.omBlockedUntil=e.omBlockedUntil||0,this.source=e.source||""}catch{}}saveCache(){try{localStorage.setItem(Rf,JSON.stringify({fetchedAt:this.fetchedAt,omBlockedUntil:this.omBlockedUntil,source:this.source,data:this.data}))}catch{}}omUrl(e){let t=e.map(s=>s.lat.toFixed(3)).join(","),i=e.map(s=>s.lon.toFixed(3)).join(","),a=`${this.apiKey?"https://customer-api.open-meteo.com":"https://api.open-meteo.com"}/v1/forecast?latitude=${t}&longitude=${i}&current=temperature_2m,weather_code,is_day&timezone=GMT`;return this.apiKey&&(a+=`&apikey=${encodeURIComponent(this.apiKey)}`),a}async fromOpenMeteo(){let e=0;for(let t=0;t<this.cities.length;t+=50)e+=await this.omBatch(this.cities.slice(t,t+50));return e}async omBatch(e){let t=await fetch(this.omUrl(e),{cache:"no-store"});if(t.status===429){let s="";try{s=(await t.json()).reason||""}catch{}let o=Date.now();throw this.omBlockedUntil=/daily/i.test(s)?(Math.floor(o/864e5)+1)*864e5+10*6e4:o+36e5,new Error(`Open-Meteo limit reached (${s||"HTTP 429"}); not asked again before ${new Date(this.omBlockedUntil).toISOString()}`)}if(!t.ok)throw new Error(`Open-Meteo HTTP ${t.status}`);let i=await t.json();Array.isArray(i)||(i=[i]);let r=Date.now(),a=0;return i.forEach((s,o)=>{var c;let l=e[o];!l||((c=s==null?void 0:s.current)==null?void 0:c.temperature_2m)==null||(this.data[this.key(l)]={tempC:s.current.temperature_2m,code:s.current.weather_code,isDay:s.current.is_day===1,at:r,src:"Open-Meteo"},a++)}),a}async fromMetNorway(){let e=Date.now(),t=0,i=0,r=async()=>{var a,s,o,l,c,h,u,d;for(;i<this.cities.length;){let p=this.cities[i++];try{let m=await wr(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${p.lat.toFixed(4)}&lon=${p.lon.toFixed(4)}`),g=((a=JSON.parse(m.text).properties)==null?void 0:a.timeseries)||[],f=g.filter(w=>Date.parse(w.time)<=e).pop()||g[0],y=(l=(o=(s=f==null?void 0:f.data)==null?void 0:s.instant)==null?void 0:o.details)==null?void 0:l.air_temperature,x=(d=(u=((c=f==null?void 0:f.data)==null?void 0:c.next_1_hours)||((h=f==null?void 0:f.data)==null?void 0:h.next_6_hours))==null?void 0:u.summary)==null?void 0:d.symbol_code;if(y==null||!x)continue;let{code:v,isDay:_}=Qx(x,p);this.data[this.key(p)]={tempC:y,code:v,isDay:_,at:e,src:"MET Norway"},t++}catch{}await new Promise(m=>setTimeout(m,150))}};return await Promise.all([r(),r(),r()]),t}async refresh(){let e=0,t="";if(Date.now()>=this.omBlockedUntil)try{e=await this.fromOpenMeteo(),t="Open-Meteo"}catch(r){console.warn("Open-Meteo weather unavailable; trying MET Norway.",r.message||r)}if(e<this.cities.length)try{e=Math.max(e,await this.fromMetNorway()),t||(t="MET Norway")}catch(r){console.warn("MET Norway weather unavailable.",r.message||r)}let i=e>=this.cities.length;return i?(this.fetchedAt=Date.now(),this.source=t):console.warn(`Weather refresh filled ${e} of ${this.cities.length} cities; keeping the last values for the rest.`),this.saveCache(),this.notify(),i}start(){let e=a=>{clearTimeout(this.timer),this.timer=setTimeout(t,Math.max(5e3,a))},t=async()=>e(await this.refresh()?this.refreshMs:Zx),i=this.fetchedAt?Date.now()-this.fetchedAt:1/0,r=this.cities.every(a=>this.data[this.key(a)]);i<this.refreshMs&&r?(this.notify(),e(this.refreshMs-i)):t(),window.addEventListener("online",()=>{Date.now()-this.fetchedAt>this.refreshMs&&t()})}get(e){let t=this.data[this.key(e)];return!t||Date.now()-(t.at||this.fetchedAt)>$x?null:t}},Jx={clearsky:0,fair:1,partlycloudy:2,cloudy:3,fog:45,lightrain:61,rain:63,heavyrain:65,lightrainshowers:80,rainshowers:81,heavyrainshowers:82,lightsleet:66,sleet:67,heavysleet:67,lightsleetshowers:66,sleetshowers:67,heavysleetshowers:67,lightsnow:71,snow:73,heavysnow:75,lightsnowshowers:85,snowshowers:85,heavysnowshowers:86};function Qx(n,e){let[t,i]=n.split("_"),r=/thunder/.test(t)?95:Jx[t];r==null&&(r=3);let a=i?i!=="night":e_(e);return{code:r,isDay:a}}function e_(n){let e=ml(new Date),t=Math.PI/180;return Math.sin(n.lat*t)*Math.sin(e.lat*t)+Math.cos(n.lat*t)*Math.cos(e.lat*t)*Math.cos((n.lon-e.lon)*t)>0}var Cu=(n=32,e=30,t=11)=>{let i="";for(let r=0;r<8;r++){let a=r*Math.PI/4,s=n+Math.cos(a)*(t+5),o=e+Math.sin(a)*(t+5),l=n+Math.cos(a)*(t+10),c=e+Math.sin(a)*(t+10);i+=`<line x1="${s.toFixed(1)}" y1="${o.toFixed(1)}" x2="${l.toFixed(1)}" y2="${c.toFixed(1)}"/>`}return`<g class="sun"><circle cx="${n}" cy="${e}" r="${t}"/><g class="rays">${i}</g></g>`},Lu=(n=30,e=28)=>`<path class="moon" d="M${n+8} ${e-14} a15 15 0 1 0 9 22 a12 12 0 1 1 -9 -22z"/>`,_a=(n=0,e=0,t="cloud")=>`<path class="${t}" transform="translate(${n} ${e})" d="M18 50 h30 a10 10 0 0 0 0 -20 a14 14 0 0 0 -26 -4 a9 9 0 0 0 -4 24z"/>`,t_='<g class="drops"><line x1="24" y1="55" x2="21" y2="62"/><line x1="33" y1="55" x2="30" y2="62"/><line x1="42" y1="55" x2="39" y2="62"/></g>',n_='<g class="flakes"><circle cx="23" cy="58" r="2.4"/><circle cx="32" cy="61" r="2.4"/><circle cx="41" cy="58" r="2.4"/></g>',i_='<path class="bolt" d="M34 50 l-7 10 h6 l-3 8 l10 -12 h-6 l3 -6z"/>',r_='<g class="fog"><line x1="14" y1="34" x2="50" y2="34"/><line x1="10" y1="42" x2="46" y2="42"/><line x1="18" y1="50" x2="54" y2="50"/></g>',qi=n=>`<svg viewBox="0 0 64 64" aria-hidden="true">${n}</svg>`;function Cf(n){return n===0?"clear":n===1||n===2?"partly":n===3?"cloudy":n===45||n===48?"fog":n>=51&&n<=67?"rain":n>=71&&n<=77?"snow":n>=80&&n<=82?"rain":n===85||n===86?"snow":n>=95?"storm":"cloudy"}var a_={clear:["Clear skies","Clear night"],partly:["Partly cloudy","Partly cloudy"],cloudy:["Cloudy","Cloudy"],fog:["Misty","Misty"],rain:["Rain","Rain"],snow:["Snow","Snow"],storm:["Thunderstorms","Thunderstorms"]};function Lf(n,e){let t=Cf(n);return n===51||n===53||n===55?"Light drizzle":n>=80&&n<=82?"Showers":a_[t][e?0:1]}function Pf(n,e){let t=Cf(n),i=e?Cu():Lu();switch(t){case"clear":return qi(e?Cu(32,32,12):Lu(28,32));case"partly":return qi((e?Cu(24,22,9):Lu(20,20))+_a(4,4));case"cloudy":return qi(_a(-2,-8,"cloud back")+_a(4,2));case"fog":return qi(r_);case"rain":return qi(_a(0,-6)+t_);case"snow":return qi(_a(0,-6)+n_);case"storm":return qi(_a(0,-8)+i_);default:return qi(i)}}function s_(n,e){if(n==null)return null;let t=!!e;return n===0?t?32:31:n===1?t?34:33:n===2?t?30:29:n===3?26:n===45||n===48?20:[51,53,55].includes(n)?9:[56,57,66,67].includes(n)?8:n===61||n===63?11:n===65?12:[71,73,77].includes(n)?14:n===75?16:n===80||n===81?t?39:45:n===82?40:n===85||n===86?t?41:46:[95,96,99].includes(n)?4:26}function Pu(n,e){let t=s_(n,e);return t==null?"":`<img src="data/world/weather/720/${String(t).padStart(2,"0")}.png" alt="">`}function Iu(n={}){var I;let e=n.tracks||[],t=()=>{var L;return(L=n.volume)!=null?L:.35},i=new Audio;i.muted=n.enabled===!1,i.volume=0,i.preload="auto";let r=L=>new URL(L,location.href).href,a=n.soundtrack||[],s=[...new Set([...a,...e].map(r))],o=[],l=[],c=()=>{if(n.source==="mine"&&o.length)return o;if(n.source==="ost"){let L=(n.soundtrack||[]).map(r).filter(H=>s.includes(H));return L.length?L:s}return[...s,...o.filter(L=>!s.includes(L))]},h=c(),u=0,d=!1,p=0,m=0,g=(L,H=2500)=>{cancelAnimationFrame(m);let B=i.volume,Z=performance.now(),X=j=>{let J=Math.max(0,Math.min(1,(j-Z)/H));i.volume=B+(L-B)*J,J<1&&(m=requestAnimationFrame(X))};m=requestAnimationFrame(X)},f=()=>{d=!0;let L;try{L=i.play()}catch(B){d=!1,console.warn("Music blocked:",B);return}let H=()=>{p=0,g(t()),window.dispatchEvent(new CustomEvent("lau-track",{detail:{url:i.src}}))};L&&typeof L.then=="function"?L.then(H).catch(B=>{d=!1,(B==null?void 0:B.name)!=="AbortError"&&console.warn("Music blocked:",B)}):H()},y=()=>{if(!h.length||p>=h.length){d=!1;return}u=(u%h.length+h.length)%h.length,i.src=h[u],cancelAnimationFrame(m),i.volume=0,f()},x=()=>n.enabled===!1||!h.length?!1:(i.paused&&(i.src===h[u]?f():y()),!0);i.addEventListener("ended",()=>{u++,y()}),i.addEventListener("error",()=>{console.warn("Skipping a track that does not play:",i.src),p++,u++,setTimeout(y,500)});let v=(I=window.chrome)==null?void 0:I.webview;v&&(v.addEventListener("message",L=>{var B;if(((B=L.data)==null?void 0:B.type)!=="music")return;let H=d?i.src:null;s=[...new Set([...a,...e,...L.data.tracks||[]].map(r))],o=(L.data.mine||[]).map(r),l=L.data.mineNames||[],h=c(),p=0,H&&h.includes(H)?u=h.indexOf(H):d||y()}),v.postMessage({cmd:"getMusic"})),y(),i.applyOptions=()=>{i.muted=n.enabled===!1;let L=c();if(L.join()!==h.join()){let H=d?i.src:null;h=L,p=0,H&&h.includes(H)?u=h.indexOf(H):(u=0,y())}!i.muted&&d&&g(t(),600)};let _=L=>{L>=0&&L<h.length&&(u=L,p=0,y())},w=()=>d?h.indexOf(i.src):-1,M=L=>{let H=r(L);if(!R()){if(!h.includes(H)){if(!s.includes(H))return;n.source="all",h=c()}_(h.indexOf(H))}},R=()=>n.enabled===!1,D=()=>d?new URL(i.src).pathname.replace(/^\//,""):null,A=L=>{!o.length||n.enabled===!1||(n.source="mine",h=c(),_(Math.max(0,L)))},U=L=>{if(n.enabled===!1||!h.length)return!1;let H=w();return u=(H>=0?H:u)+L,p=0,y(),!0};return window.__music={audio:i,get list(){return h},resume:x,playIndex:_,currentIndex:w,playUrl:M,current:D,playMine:A,next:()=>U(1),prev:()=>U(-1),get playing(){return d&&n.enabled!==!1},get mineNames(){return l},get mine(){return o}},i}function Du(n={},e={}){let t=new Audio("sfx/wave.mp3");t.loop=!0,t.volume=0;let i=()=>{var o;return e.enabled===!1?0:((o=e.volume)!=null?o:.5)*.25},r=0,a=(o,l)=>{cancelAnimationFrame(r);let c=t.volume,h=performance.now(),u=d=>{let p=Math.max(0,Math.min(1,(d-h)/l));t.volume=c+(o-c)*p,p<1?r=requestAnimationFrame(u):o===0&&t.pause()};r=requestAnimationFrame(u)},s=(o=600)=>{i()>0?(t.paused&&t.play().catch(l=>{(l==null?void 0:l.name)!=="AbortError"&&console.warn("Wave sound blocked:",l)}),a(i(),o)):a(0,o)};return t.applyOptions=()=>s(600),s(2500),window.__wave=t,t}var ot={opening:{totalFrames:175,logoIn:[0,20],logoOut:[140,150],earthIn:[20,80],overlaysIn:[160,175]},autoTour:{idleSeconds:10,cityEverySeconds:60,arrivalPauseSeconds:15,maxSpeed:.5,easeDecay:.98,arrivalEpsilon:1,activateDegrees:3},radius:{min:1.4,max:2.8,travelMax:2.8,zoomMin:1.4,zoomMax:2.8},fovY:45,manual:{latLngStep:.025,latLngMax:2.5,rotateStep:5e-4,rotateMax:.01,rotateDecay:.95,zoomStep:.0025,zoomMax:.025,zoomDecay:.9},clouds:{fadeRadius:[1.5,2],alpha:[0,1],fadeFrames:30,rotatePerFrame:1e-5},markers:{showRadius:[1,2.7],infoRadius:[1,2.8],unselectedAlpha:.5,unselectedFadeFrames:10,zoomFadeFrames:15},overlayCrossFadeSeconds:.5,cityInfoCrossFadeSeconds:.25,infoText:{inFrames:5,holdFrames:60,outFrames:5},panelPulseSeconds:.5};var o_=n=>Math.min(1,Math.max(0,n));var bs=ot.opening,If=105,Uu=(n,[e,t])=>o_((n-e)/(t-e)),vl=class{constructor({cfg:e,onCut:t,onSkip:i,onDone:r,setGlobeFade:a,gate:s}){this.gate=s,this.setGlobeFade=a,this.cfg=e,this.onCut=t,this.onSkip=i,this.onDone=r,this.active=!1,this.loaded=!1;let o=l=>document.querySelector(l);this.title=o("#titleCard"),this.globeLogo=o("#globeLogo")}start(e){this.active=!0,this.t0=e,this.cutAt=null,this.sound=this.cfg.sound==="none"?null:l_(this.cfg),this.skipHandler=()=>this.skip(),["keydown","pointerdown","touchstart"].forEach(t=>window.addEventListener(t,this.skipHandler))}setLoaded(e){this.loaded=!0,this.loadedAt=(e-this.t0)/1e3}update(e){var i;if(!this.active)return;let t=(e-this.t0)/1e3;if(this.cutAt===null&&this.loaded&&t>=Math.max(3,this.loadedAt)){if(this.gate&&!this.gateDone){this.gating||(this.gating=!0,this.title.classList.add("gone"),this.gate().finally(()=>{this.gateDone=!0,this.gating=!1}));return}this.cutAt=t,this.title.classList.add("gone"),(i=this.sound)==null||i.bell(),this.onCut(e,If)}if(this.cutAt!==null){let r=(t-this.cutAt)*60+If;this.globeLogo.style.opacity=(Uu(r,bs.logoIn)*(1-Uu(r,bs.logoOut))).toFixed(3),this.setGlobeFade(Math.pow(Uu(r,bs.earthIn),3)),r>=bs.overlaysIn[0]&&document.body.classList.remove("intro-on"),r>=bs.totalFrames&&this.finish()}}skip(){var e;if(!(!this.active||this.gating)){if(!this.loaded){this.skipWhenLoaded=!0,this.title.classList.add("skipping");return}this.title.classList.add("gone","fast"),this.globeLogo.style.opacity=0,this.setGlobeFade(1),document.body.classList.remove("intro-on"),(e=this.sound)==null||e.stop(.4),this.sound=null,this.cutAt===null&&this.onSkip(performance.now()),this.finish()}}finish(){var e;this.active&&(this.active=!1,["keydown","pointerdown","touchstart"].forEach(t=>window.removeEventListener(t,this.skipHandler)),(e=this.sound)==null||e.stop(2),setTimeout(()=>{this.title.remove(),this.globeLogo.remove()},1200),this.onDone())}pendingSkip(){this.skipWhenLoaded&&this.loaded&&(this.skipWhenLoaded=!1,this.skip())}};function l_({volume:n=.22}={}){let e;try{e=new(window.AudioContext||window.webkitAudioContext)}catch{return null}e.state==="suspended"&&e.resume().catch(()=>{});let t=e.createGain(),i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=1400,t.connect(i).connect(e.destination);let r=e.currentTime;t.gain.setValueAtTime(0,r),t.gain.linearRampToValueAtTime(n,r+2.5),t.gain.setValueAtTime(n,r+5.5),t.gain.linearRampToValueAtTime(0,r+8.5);let a=[196,293.66,392].map((s,o)=>{let l=e.createOscillator(),c=e.createGain();return l.type="sine",l.frequency.value=s,l.detune.value=(o-1)*4,c.gain.value=[.5,.32,.18][o],l.connect(c).connect(t),l.start(r),l.stop(r+9),l});return{bell(){let s=e.currentTime,o=e.createOscillator(),l=e.createGain();o.type="sine",o.frequency.value=987.77,l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(n*.5,s+.02),l.gain.exponentialRampToValueAtTime(1e-4,s+2.4),o.connect(l).connect(e.destination),o.start(s),o.stop(s+2.5)},stop(s){let o=e.currentTime;t.gain.cancelScheduledValues(o),t.gain.setValueAtTime(t.gain.value,o),t.gain.linearRampToValueAtTime(0,o+s),a.forEach(l=>{try{l.stop(o+s+.1)}catch{}}),setTimeout(()=>e.close().catch(()=>{}),(s+3)*1e3)}}}var Es=Math.PI/180,c_=`
  precision highp float;
  uniform vec2 res; uniform vec2 sun; uniform float core; uniform float ghosts; uniform float gleam; uniform float grow; uniform float tips;
  uniform vec3 tint; uniform float rainbowOn;   // the light's colour; 0 = the streak in white (the Moon's flare)
  uniform float beamLen; uniform float beamWide;   // the beams' length and width, as multiples of the sun's
  uniform float beamCount;   // 8 (the sun) or 4 (every other one: the Moon)
  // Modelled on the owner's reference frames (cinematic night shots):
  //  - the light itself burns out to white inside a wide, soft bloom and a
  //    faint veil of haze round it;
  //  - the star is eight wide, soft beams that widen steadily and fade out
  //    smoothly as they go (not thin hard lines);
  //  - the ghost is a soft rainbow streak on the far side of the frame from
  //    the light, as a searchlight's reflection off glass (owner's clip).
  float g2(vec2 d, float s) { return exp(-dot(d, d) / (s * s)); }
  // the rainbow streak's colours (measured off the owner's clip): cyan-blue,
  // pale green, yellow, orange, red; t 0..1
  vec3 rainbow(float t) {
    vec3 c = mix(vec3(0.35, 0.80, 1.00), vec3(0.70, 1.00, 0.55), smoothstep(0.00, 0.35, t));
    c = mix(c, vec3(1.00, 0.85, 0.35), smoothstep(0.30, 0.58, t));
    c = mix(c, vec3(1.00, 0.52, 0.22), smoothstep(0.55, 0.80, t));
    return mix(c, vec3(0.95, 0.25, 0.25), smoothstep(0.78, 1.00, t));
  }
  void main() {
    float aspect = res.x / res.y;
    vec2 p = (gl_FragCoord.xy / res) * 2.0 - 1.0; p.x *= aspect;
    vec2 s = vec2(sun.x * aspect, sun.y);
    vec2 d = p - s;
    float r = length(d);
    float ang = atan(d.y, d.x);
    vec3 col = vec3(0.0);
    // the light: white-hot core, a wide soft bloom, a faint veil
    col += vec3(1.0, 0.97, 0.92) * (g2(d, 0.030) * 2.0 + g2(d, 0.085) * 0.50);
    col += vec3(1.0, 0.88, 0.70) * (g2(d, 0.17) * 0.20 + 0.04 / (1.0 + pow(r / 0.28, 2.0)));
    // the star: eight wide beams about 45 deg apart (as measured in the
    // reference frame: each beam's half-brightness width grows from ~0.8 % of
    // the frame height at the light by ~16 % of the distance out, and its
    // brightness stays nearly level close in, then falls away smoothly,
    // to about a third at 40 % of the frame height)
    // Out towards their ends the beams turn to rainbow (owner's reference: a
    // star filter's beams, white at the light, then bands of colour running
    // along each beam), in the same colours as the rainbow streak; widths
    // unchanged.
    vec3 st = vec3(0.0);
    for (int i = 0; i < 8; i++) {
      float fi = float(i);
      if (beamCount < 5.0 && mod(fi, 2.0) > 0.5) continue;           // four beams, 90 deg apart
      float k = fract(sin(fi * 12.9898 + 4.1) * 43758.5453);
      float a = radians(15.0 + fi * 45.0 + (k - 0.5) * 5.0);
      float da = abs(mod(ang - a + 3.14159265, 6.2831853) - 3.14159265);
      float perp = r * sin(min(da, 1.5707963));
      float w = (0.0096 + 0.096 * r) * beamWide;                      // gaussian width: FWHM 0.016 + 0.16 r
      float along = exp(-pow(r / (0.80 * beamLen), 2.2)) * smoothstep(0.0, 0.05, r);
      // white for most of its length; only the outer end runs through the
      // streak's colours, cyan-blue where the white gives way, through
      // green, yellow and orange, to red at the tip
      vec3 band = rainbow(clamp((r - 0.70) / 0.38 + (k - 0.5) * 0.08, 0.0, 1.0)) * 1.4;
      vec3 bt = mix(vec3(1.0, 0.96, 0.90), band, 0.92 * tips * smoothstep(0.62, 0.74, r));
      st += bt * exp(-pow(perp / w, 2.0)) * along * (0.85 + 0.15 * k);
    }
    col += st * 0.40;
    col *= tint * core * (0.75 + 0.45 * gleam);
    // The ghost: the rainbow a searchlight throws off a glass pane in the
    // owner's reference clip, in place of round ghost discs: one soft
    // teardrop streak on the far side of the middle of the frame from the
    // light (0.6 of the way across), lying along the line to the light, its
    // colours running along it -- cyan-blue at the end nearest the light,
    // then green, yellow, orange, red -- wider and fainter at the far end.
    vec3 g = vec3(0.0);
    vec2 dir = length(s) > 1e-4 ? normalize(s) : vec2(0.0, 1.0);
    // grow (1 far off .. ~2.6 right up at the peeking sun): the streak spreads
    // longer and wider, its colours bands stretching with it, as a real
    // reflection does when the camera closes in on the light.
    vec2 q = p - s * -0.6;
    float al = dot(q, dir) / grow, ac = dot(q, vec2(-dir.y, dir.x)) / pow(grow, 1.15);
    float t = clamp(0.5 - al / 0.32, 0.0, 1.0);                     // 0 at the light end .. 1 at the far end
    float halfW = 0.055 + 0.055 * t;
    float ua = al / 0.21, uc = ac / halfW;                           // (squared, not pow(): pow of a negative is NaN)
    float body = exp(-ua * ua) * exp(-uc * uc);
    // colour stops measured off the clip: cyan-blue, pale green, yellow, orange, red
    vec3 spec = mix(vec3(0.92), rainbow(t), rainbowOn) * tint;
    g += spec * body * (1.0 - 0.3 * t) * 0.40 * (0.85 + 0.25 * (grow - 1.0)) / max(1.0, 0.75 + 0.25 * grow);
    col += g * ghosts;
    gl_FragColor = vec4(col, 1.0);
  }`;function Nu(n,e={}){var d,p,m,g;let t=e.rainbow!==!1,i=(d=e.disc)!=null?d:1,r=new Ze({uniforms:{res:{value:new ae(1,1)},sun:{value:new ae},core:{value:0},ghosts:{value:0},gleam:{value:0},grow:{value:1},tips:{value:0},tint:{value:e.tint?e.tint.clone():new S(1,1,1)},rainbowOn:{value:t?1:0},beamLen:{value:(p=e.beamLen)!=null?p:1},beamWide:{value:(m=e.beamWide)!=null?m:1},beamCount:{value:(g=e.beams)!=null?g:8}},vertexShader:"void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:c_,transparent:!0,blending:zi,depthTest:!1,depthWrite:!1}),a=new xn,s=new as(-1,1,1,-1,0,1),o=new Ke(new yn(2,2),r);o.frustumCulled=!1,a.add(o);let l=new S,c=new S,h=new S,u=0;return{get uniforms(){return r.uniforms},render(f,y,x,v=1/60,_=null){let w=f.position,M=w.length();f.getWorldDirection(c),_&&(y=h.copy(_).sub(w).normalize());let R=0,D=0,A=0,U=0,I=1,L=0;if(x>0&&c.dot(y)>.05){let B=Math.asin(Math.min(1,1/M)),X=(Math.acos(Ut.clamp(-w.dot(y)/M,-1,1))-B)/Es,j=Ut.smoothstep(X,-.3*i,.15*i);D=1-Ut.smoothstep(X,.2*i,.8*i),this.wide>0&&(D=Math.max(D,this.wide)),L=t?Ut.smoothstep(X,-.25,-.02)*(1-Ut.smoothstep(X,.12,.7)):0,(_?l.copy(_):l.copy(y).multiplyScalar(1e3).add(w)).project(f);let J=Math.max(Math.abs(l.x),Math.abs(l.y));A=this.wide>0?1-Ut.smoothstep(J,.97,1.06):1-Ut.smoothstep(J,1,1.35),U=1-Ut.smoothstep(J,1.25,2.2),R=j*D*1.25*x;let pe=Ut.smoothstep(2.9-M,0,1.5),ve=1-Ut.smoothstep(Math.hypot(l.x,l.y),.15,1.3);I=1+.9*pe+.7*ve,r.uniforms.sun.value.set(l.x,l.y),this.debug={past:X,vis:j,gleam:D,tips:L,onScreen:A,ghostsOn:U,grow:I,x:l.x,y:l.y}}if(Number.isFinite(R)||(R=0),u+=(R-u)*(1-Math.exp(-v*(R<u?40:7))),Number.isFinite(u)||(u=0),u<.003)return;n.getDrawingBufferSize(r.uniforms.res.value),r.uniforms.core.value=u*A,r.uniforms.ghosts.value=u*U,r.uniforms.gleam.value=D,r.uniforms.tips.value+=(L-r.uniforms.tips.value)*(1-Math.exp(-v*8)),r.uniforms.grow.value+=(I-r.uniforms.grow.value)*(1-Math.exp(-v*6));let H=n.autoClear;n.autoClear=!1,n.setRenderTarget(null),n.render(a,s),n.autoClear=H}}}var h_=[[80.8,-72.6],[-80.8,107.4]],u_=`
  uniform float time; uniform float ovalDeg; uniform vec3 axis; uniform vec3 e1; uniform vec3 e2; uniform float band;
  attribute vec2 ph;                    // x: angle round the oval (0..1), y: height (curtain) or across (band), 0..1
  varying float vH; varying float vPhi; varying vec3 vDir;
  void main() {
    float phi = ph.x * 6.2831853;
    // the oval's edge ripples slowly
    float wob = 1.6 * sin(3.0 * phi + 0.11 * time) + 0.9 * sin(7.0 * phi - 0.23 * time + 1.3)
              + 0.45 * sin(13.0 * phi + 0.37 * time + 0.4) + 0.25 * sin(29.0 * phi - 0.6 * time);
    float th, r;
    if (band > 0.5) {                   // the glow seen from above: ~500 km across, mostly poleward of the edge
      th = (ovalDeg + wob + 1.0 - ph.y * 5.0) * 0.01745329;
      r = 1.0 + 110.0 / 6371.0;
    } else {                            // the curtain: 95 to 325 km up, leaning a little poleward at the top
      th = (ovalDeg + wob) * 0.01745329 - ph.y * 0.004;
      r = 1.0 + (95.0 + ph.y * 230.0) / 6371.0;
    }
    vec3 dir = cos(th) * axis + sin(th) * (cos(phi) * e1 + sin(phi) * e2);
    vH = ph.y; vPhi = ph.x; vDir = dir;
    gl_Position = projectionMatrix * viewMatrix * vec4(dir * r, 1.0);
  }`,d_=`
  uniform float time; uniform float power; uniform vec3 sunDir; uniform float band;
  varying float vH; varying float vPhi; varying vec3 vDir;
  float hash(float n) { return fract(sin(n) * 43758.5453); }
  float noise(float x) { float i = floor(x), f = fract(x); return mix(hash(i), hash(i + 1.0), f * f * (3.0 - 2.0 * f)); }
  void main() {
    float night = 1.0 - smoothstep(-0.16, 0.02, dot(normalize(vDir), sunDir));
    if (night <= 0.0) discard;
    float x = vPhi * 420.0;
    // vertical rays drifting along the curtain, and slow brightening waves
    float rays = 0.35 + 0.65 * noise(x + time * 0.9) * noise(x * 0.37 - time * 0.4 + 11.0);
    float wave = 0.55 + 0.45 * sin(vPhi * 38.0 - time * 0.35) * sin(vPhi * 11.0 + time * 0.21);
    // green near the bottom, violet towards the top; a sharp lower edge, soft top
    vec3 green = vec3(0.12, 1.0, 0.42), violet = vec3(0.62, 0.22, 1.0);
    vec3 c; float a;
    if (band > 0.5) {
      // seen from above: a soft green band, brightest near its equatorward
      // edge, violet towards the pole, broken into patches and rays
      c = mix(green, mix(green, violet, 0.55), smoothstep(0.35, 0.95, vH));
      float b1 = (vH - 0.28) / 0.17, b2 = (vH - 0.6) / 0.3;          // (squared, not pow(): NaN below zero)
      a = exp(-b1 * b1) * 0.85 + exp(-b2 * b2) * 0.25;
      a *= 0.55 + 0.45 * noise(vPhi * 70.0 + time * 0.15) * noise(vPhi * 23.0 - time * 0.07 + 5.0) * 1.6;
    } else {
      c = mix(green, violet, smoothstep(0.25, 0.85, vH));
      a = smoothstep(0.0, 0.06, vH) * pow(1.0 - vH, 1.6) * (1.0 + 1.4 * exp(-vH * 9.0)) * 1.5;
    }
    gl_FragColor = vec4(c * a * rays * wave * night * power, 1.0);
  }`;function Df(n,e){let r=new Float32Array(15862),a=[];for(let p=0,m=0;p<=10;p++)for(let g=0;g<=720;g++,m++)r[m*2]=g/720,r[m*2+1]=p/10;for(let p=0;p<10;p++)for(let m=0;m<720;m++){let g=p*721+m,f=g+1,y=g+720+1,x=y+1;a.push(g,y,f,f,y,x)}let s=new tt;s.setAttribute("ph",new $e(r,2)),s.setAttribute("position",new $e(new Float32Array(721*11*3),3)),s.setIndex(a),s.boundingSphere=new nn(new S,2);let o={value:0},l={value:22},c={value:0},h=new tn;for(let[p,m]of h_)for(let g of[1,0]){let f=p*Es,y=m*Es,x=new S(Math.cos(f)*Math.cos(y),Math.sin(f),-Math.cos(f)*Math.sin(y)),v=new S(0,1,0).cross(x).normalize(),_=new S().crossVectors(x,v).normalize(),w=new Ze({uniforms:{time:o,ovalDeg:l,power:c,sunDir:e,axis:{value:x},e1:{value:v},e2:{value:_},band:{value:g}},vertexShader:u_,fragmentShader:d_,transparent:!0,depthTest:!0,depthWrite:!1,side:ds,blending:On,blendEquation:Mt,blendSrc:fr,blendDst:Rt,blendEquationAlpha:Mt,blendSrcAlpha:Bi,blendDstAlpha:Rt}),M=new Ke(s,w);M.frustumCulled=!1,M.renderOrder=6,h.add(M)}n.add(h);let u=2,d=0;return{group:h,get kp(){return u},setKp(p){Number.isFinite(p)&&(u=Math.max(0,Math.min(9,p)))},update(p,m,g=1/60){d+=(m-d)*(1-Math.exp(-g*2)),h.visible=d>.005,h.visible&&(o.value=p,l.value=21.5+1.9*u,c.value=(.35+u/5.5)*d)}}}async function Uf(){var r;let n=await fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json",{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let e=await n.json(),t=e[e.length-1],i=Array.isArray(t)?parseFloat(t[1]):parseFloat((r=t==null?void 0:t.Kp)!=null?r:t==null?void 0:t.kp_index);if(!Number.isFinite(i))throw new Error("no Kp");return i}var p_=16;function Nf(n,e){let t=[],i=(a,s)=>{let o=a*Es,l=s*Es;return new S(Math.cos(o)*Math.cos(l),Math.sin(o),-Math.cos(o)*Math.sin(l))},r=(a,s)=>{let o=new S(-a.z,0,a.x).normalize(),l=new S().crossVectors(a,o),c=Math.random()*Math.PI*2,h=Math.sqrt(Math.random())*s/6371;return a.clone().addScaledVector(o,Math.cos(c)*h).addScaledVector(l,Math.sin(c)*h).normalize()};return{get count(){return t.length},update(a,s,o,l,c){var u;if(c>0)for(let d of o){let p=d.cat!=null?.9+.3*d.cat:.15+.5*((u=d.s)!=null?u:.5);if(Math.random()>=p*s||t.length>40)continue;let m=d.cat!=null?160:110,g=r(i(d.lat,d.lon),m);if(g.dot(l)>-.04)continue;let f=Math.random()<.15,y=f?1+(Math.random()<.5?1:0):1+Math.floor(Math.random()*4),x=[];for(let v=0,_=a;v<y;v++,_+=.05+Math.random()*.16)x.push({t:_,tau:f?.18+Math.random()*.12:.05+Math.random()*.05,amp:(v?.55+Math.random()*.45:1)*(f?.45:.8+Math.random()*.5),dir:v?r(g,25):g});t.push({strokes:x,r:(f?130+Math.random()*70:38+Math.random()*34)/6371,core:f?.15:.42+Math.random()*.18,seed:Math.random()*10,end:x[y-1].t+.6})}for(let d=t.length-1;d>=0;d--)a>t[d].end&&t.splice(d,1);let h=[];for(let d of t)for(let p of d.strokes){let m=a-p.t;if(m<0)continue;let g=(m<.012?m/.012:Math.exp(-(m-.012)/p.tau))*p.amp*c;g>.01&&h.push({g,s:p,e:d})}h.sort((d,p)=>p.g-d.g);for(let d=0;d<p_;d++){let p=h[d];if(!p){n[d].w=0;continue}n[d].set(p.s.dir.x,p.s.dir.y,p.s.dir.z,p.g),e[d].set(p.e.r,p.e.core,p.e.seed,0)}}}}var Fu=(n,e,t=1)=>new S(...ji(n,e,t)),m_=60,f_=.273*4;function Of(n,e){let t=new ma().load("assets/moon/moon.jpg");t.colorSpace=vn,t.anisotropy=4;let i=new Ze({uniforms:{map:{value:t},sunDir:e,fade:{value:1}},vertexShader:`
      varying vec2 vUv; varying vec3 vN;
      void main() { vUv = uv; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D map; uniform vec3 sunDir; uniform float fade;
      varying vec2 vUv; varying vec3 vN;
      void main() {
        vec3 c = texture2D(map, vUv).rgb;
        float lit = max(dot(normalize(vN), normalize(sunDir)), 0.0);
        // a soft terminator, a little brighter than the map (the Moon in sunlight
        // is bright against space), and the faint earthshine on the dark part
        float l = smoothstep(0.0, 0.25, lit) * (0.35 + 0.95 * lit);
        gl_FragColor = vec4(c * (l * 1.25 + 0.025) * fade, 1.0);
      }`}),r=new Ke(new un(f_,64,32),i);r.renderOrder=-1,n.add(r);let a=new S(1,0,0),s=new S,o=new S,l=new S,c=new Ue,h=0,u=0;function d(p=new Date){let m=ef(p);a.copy(Fu(m.lat,m.lon)),r.position.copy(a).multiplyScalar(m_),s.copy(a).negate(),o.set(0,1,0).addScaledVector(s,-s.y).normalize(),l.crossVectors(s,o),r.quaternion.setFromRotationMatrix(c.makeBasis(s,o,l)),h=(1-a.dot(e.value))/2}return d(),{mesh:r,dir:a,get position(){return r.position},get phase(){return h},update(p,m,g=1){r.visible=m&&g>.002,i.uniforms.fade.value=g,p-u>1e4&&(u=p,d())}}}var g_=`
  varying vec2 vP; varying vec3 vN;
  void main() { vP = uv * 2.0 - 1.0; vN = normalize(mat3(modelMatrix) * position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,v_=`
  uniform float time; uniform float spin; uniform float power; uniform float fade; uniform vec3 sunDir; uniform float seed;
  varying vec2 vP; varying vec3 vN;
  float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
  float fbm(vec2 p) { return n2(p) * 0.55 + n2(p * 2.1 + 3.7) * 0.28 + n2(p * 4.3 + 9.1) * 0.17; }
  void main() {
    float r = length(vP);
    if (r > 1.0) discard;
    float a = atan(vP.y, vP.x);
    // logarithmic spiral bands, turning with time (spin: +1 north, -1 south)
    float t = time * 0.06 * spin;
    // the cloud texture turns with the storm; the bands are warped by it, so
    // they read as ragged rain bands rather than a neat pinwheel
    float tex = fbm(vec2(a * 2.0 + seed - t, log(r + 0.05) * 3.0) * 2.2);
    float tex2 = fbm(vP * 7.0 + seed);
    float arms = 0.5 + 0.5 * cos(2.0 * (a - spin * 2.4 * log(r + 0.04)) - t * 2.0 + (tex - 0.5) * 1.4);
    float band = smoothstep(0.30, 0.85, arms * 0.78 + tex * 0.38 + tex2 * 0.2);
    // the central dense overcast, the eyewall and the clear eye
    float eyeR = 0.045 + 0.02 * (1.0 - power);
    float core = 1.0 - smoothstep(0.15, 0.38, r + (tex2 - 0.5) * 0.10);
    float wall = exp(-pow((r - eyeR * 1.7) / (eyeR * 0.9), 2.0));
    float eye = 1.0 - smoothstep(eyeR * 0.6, eyeR * 1.15, r);
    float d = max(band * (1.0 - smoothstep(0.50, 1.0, r)), core * (0.70 + 0.30 * tex2)) + wall * 0.5;
    d *= (1.0 - eye);
    d *= 1.0 - smoothstep(0.8, 1.0, r);
    float sun = dot(normalize(vN), normalize(sunDir));
    float day = smoothstep(-0.12, 0.25, sun);
    vec3 col = mix(vec3(0.06, 0.07, 0.09), vec3(0.95, 0.96, 0.98) * (0.55 + 0.45 * max(sun, 0.0)) * (0.88 + 0.12 * tex2), day);
    gl_FragColor = vec4(col, clamp(d, 0.0, 1.0) * 0.92 * fade);
  }`;function y_(n,e,t,i=1.006,r=48){let a=Fu(n,e),s=new S(-a.z,0,a.x);s.lengthSq()<1e-6&&s.set(1,0,0),s.normalize();let o=new S().crossVectors(a,s).normalize(),l=t/6371,c=[],h=[],u=[];for(let p=0;p<=r;p++)for(let m=0;m<=r;m++){let g=m/r*2-1,f=p/r*2-1,y=a.clone().addScaledVector(s,g*Math.tan(l)).addScaledVector(o,f*Math.tan(l)).normalize().multiplyScalar(i);c.push(y.x,y.y,y.z),h.push(m/r,p/r)}for(let p=0;p<r;p++)for(let m=0;m<r;m++){let g=p*(r+1)+m,f=g+1,y=g+r+1,x=y+1;u.push(g,y,f,f,y,x)}let d=new tt;return d.setAttribute("position",new Ee(c,3)),d.setAttribute("uv",new Ee(h,2)),d.setIndex(u),d.computeBoundingSphere(),d}function Ff(n,e){let t=new tn;t.renderOrder=3,n.add(t);let i={value:0},r={value:1},a=new Map;return{update(s,o,l){var h,u,d;i.value=s,r.value=l,t.visible=l>.002;let c=new Set;for(let p of o){let m=(u=(h=p.raw)==null?void 0:h.kmh)!=null?u:0;if(!(((d=p.cat)!=null?d:0)>=4||m>=209))continue;c.add(p.id);let g=a.get(p.id);if(g&&(g.userData.lat!==p.lat||g.userData.lon!==p.lon)&&(t.remove(g),g.geometry.dispose(),g.material.dispose(),a.delete(p.id),g=null),!g){let f=Math.min(1,Math.max(0,(m-209)/90)),y=new Ze({uniforms:{time:i,fade:r,sunDir:e,spin:{value:p.lat>=0?1:-1},power:{value:f},seed:{value:Math.random()*50}},vertexShader:g_,fragmentShader:v_,transparent:!0,depthWrite:!1,depthTest:!0,side:ds});g=new Ke(y_(p.lat,p.lon,480+160*f),y),g.userData={lat:p.lat,lon:p.lon},g.renderOrder=3,t.add(g),a.set(p.id,g)}}for(let[p,m]of a)c.has(p)||(t.remove(m),m.geometry.dispose(),m.material.dispose(),a.delete(p))},get count(){return a.size}}}var Ou=9,x_=`
  attribute float size; attribute vec4 tint;
  uniform float pxPerUnit;
  varying vec4 vTint;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * pxPerUnit / max(1e-3, -mv.z);
    vTint = tint;
    gl_Position = projectionMatrix * mv;
  }`,__=`
  varying vec4 vTint;
  void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0;
    float r2 = dot(p, p);
    if (r2 > 1.0) discard;
    // tint: premultiplied colour and coverage (coverage 0 = pure added light, the glow)
    float g = exp(-r2 * 3.2);
    gl_FragColor = vec4(vTint.rgb * g, vTint.a * g);
  }`;function kf(n,e,t,i=48){let r=i*(Ou+1),a=new Float32Array(r*3),s=new Float32Array(r),o=new Float32Array(r*4),l=new tt;l.setAttribute("position",new $e(a,3)),l.setAttribute("size",new $e(s,1)),l.setAttribute("tint",new $e(o,4)),l.boundingSphere=new nn(new S,2);let c=new Ze({uniforms:{pxPerUnit:{value:1e3}},vertexShader:x_,fragmentShader:__,transparent:!0,depthTest:!0,depthWrite:!1,blending:On,blendSrc:Rt,blendDst:$n}),h=new ua(l,c);h.frustumCulled=!1,h.renderOrder=6,n.add(h);let u=[],d=new ae,p=new S,m=new S,g=new S,f=new S;return{set(y){u=(y||[]).slice(0,i).map(x=>({...x,n:Fu(x.lat,x.lon),seed:Math.random()*10}))},get count(){return u.length},update(y,x,v,_=1){if(h.visible=x>.002&&u.length>0,!h.visible)return;t.getDrawingBufferSize(d),c.uniforms.pxPerUnit.value=d.y/(2*Math.tan(v.fov*Math.PI/180/2));let w=e.value,M=0;for(let R of u){p.copy(R.n),m.set(-p.z,0,p.x).normalize();let D=1-Ut.smoothstep(p.dot(w),-.12,.1),A=.85+.15*Math.sin(y*1.7+R.seed*3.1);f.copy(p).multiplyScalar(1.0025),a.set([f.x,f.y,f.z],M*3),s[M]=.022;let U=(.25+.75*D)*.9*A*x;o.set([1*U,.32*U,.08*U,0],M*4),M++;for(let I=0;I<Ou;I++){if(_<=.001){o[M*4+3]=0,o[M*4]=o[M*4+1]=o[M*4+2]=0,s[M]=0,M++;continue}let L=(y/9+I/Ou+R.seed)%1,H=.004+L*.016,B=L*L*.03;g.crossVectors(p,m),f.copy(p).multiplyScalar(1+H).addScaledVector(m,B).addScaledVector(g,Math.sin(R.seed+L*2)*.004),a.set([f.x,f.y,f.z],M*3),s[M]=.01+L*.028;let Z=(.3+.45*(1-D))*(.9+.1*Math.sin(R.seed+I)),X=Math.sin(Math.PI*Math.min(1,L*1.15))*.55*x*_,j=D*Math.max(0,1-L*3)*.6;o.set([(Z*.95+j)*X,(Z*.9+j*.35)*X,Z*.85*X,X],M*4),M++}}for(;M<r;M++)o[M*4+3]=0,s[M]=0;l.attributes.position.needsUpdate=l.attributes.size.needsUpdate=l.attributes.tint.needsUpdate=!0}}}var qf="radio-v3",yl=[["Low",.3],["Medium",.6],["High",1]],Ma=[["radio","RADIO"],["demand","ON DEMAND"]],dn=[],ti=[],xl="loading",ku="",Rs="loading",lt={mode:"radio",index:0,dIndex:0,volume:2,stationUrl:""};try{lt={...lt,...JSON.parse(localStorage.getItem(qf)||"{}")}}catch{}var yt=lt.mode==="demand"?"demand":"radio",Re=null,Fn="",As=()=>{try{localStorage.setItem(qf,JSON.stringify({...lt,mode:yt}))}catch{}},an=new Audio;an.preload="none";an.addEventListener("playing",()=>{Fn="live",rn()});an.addEventListener("waiting",()=>{Re&&(Fn="tuning",rn())});an.addEventListener("error",()=>{Re&&an.getAttribute("src")&&(Fn="offline",rn())});an.addEventListener("ended",()=>{if((Re==null?void 0:Re.mode)!=="demand"||!ti.length)return;let n=(Re.index+1)%ti.length;yt==="demand"&&(lt.dIndex=n),Re={mode:"demand",index:n},lt.dIndex=n,As(),$f(ti[n].url),rn()});var Xf=(n,e,t)=>{let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i},_l=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),M_='<svg viewBox="0 0 62 62"><circle cx="31" cy="31" r="29" fill="#fff" stroke="#000" stroke-width="2"/><path d="M19 19L43 43M43 19L19 43" stroke="#000" stroke-width="5.5" stroke-linecap="round"/></svg>',w_='<svg viewBox="0 0 62 62"><circle cx="31" cy="31" r="29" fill="#fff" stroke="#000" stroke-width="2"/><path d="M31 17.5L45.5 41.5H16.5Z" fill="none" stroke="#000" stroke-width="5" stroke-linejoin="round"/></svg>',zf=n=>`<svg viewBox="0 0 60 50"><path d="M5 1.5H55A3.5 3.5 0 0 1 58.5 5V30A18.5 18.5 0 0 1 40 48.5H20A18.5 18.5 0 0 1 1.5 30V5A3.5 3.5 0 0 1 5 1.5Z" fill="#fff" stroke="#000" stroke-width="3"/></svg><b>${n}</b>`,Bf=n=>`<svg viewBox="0 0 20 32"><path d="${n<0?"M15 3L4 16L15 29":"M5 3L16 16L5 29"}" fill="none" stroke="#fff" stroke-width="5.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,S_=`<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="27" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <path d="M30 6.5L34 11.5H26Z M30 53.5L34 48.5H26Z" fill="#000"/>
  <text x="30" y="39.5" text-anchor="middle" font-family="ArtDeco, sans-serif" font-size="27" fill="#000">R</text></svg>`,Hf=[["#f2f2f2","#1c7fd1","#e3304e"],["#16303a","#f7d046","#f7d046"],["#2bc6e8","#0d2a38","#ffffff"],["#e957b8","#ffe25a","#2ad3ff"],["#2a2140","#c9a7ff","#ff9ec7"],["#1d1d1d","#e9b44c","#ffffff"],["#b8202f","#ffffff","#ffffff"]];function Vf(n){let e=0;for(let c of n)e=e*31+c.charCodeAt(0)>>>0;let[t,i,r]=Hf[e%Hf.length],a=n.toUpperCase().split(/\s+/).slice(0,4),s=a.slice(0,-1).join(" ")||a[0],o=a.length>1?a[a.length-1]:"",l=(c,h)=>Math.min(h,8.6/(.47*Math.max(1,c.length)));return`<div class="rd-logo" style="background:${t};color:${i}"><span class="rd-l1" style="font-size:${l(s,o?2.1:3.3).toFixed(2)}vh">${_l(s)}</span>`+(o?`<span class="rd-l2" style="color:${r};font-size:${l(o,3.3).toFixed(2)}vh">${_l(o)}</span>`:"")+"</div>"}var b_={off:!0,name:"Radio Off",url:"off",tags:[]},E_='<svg viewBox="0 0 100 100"><path d="M34 27A30 30 0 1 0 66 27" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/><path d="M50 14V50" stroke="#fff" stroke-width="9" stroke-linecap="round"/></svg>';function T_(n){return n.off?`<div class="rd-logo rd-offtile">${E_}</div>`:n.n?Vf(n.name)+(n.cover?`<div class="rd-pic rd-full"><img alt="" src="${_l(n.cover)}"></div>`:"")+`<span class="rd-num rd-text">${String(n.n).padStart(2,"0")}</span>`:Vf(n.name)+(n.logo?`<div class="rd-pic"><img alt="" referrerpolicy="no-referrer" src="${_l(n.logo)}"></div>`:"")}var Tt=null,Xi=!1,Ts=()=>{};function A_(){Tt=Xf("div","radio"),Tt.id="radio",Tt.innerHTML=`
    <div class="rd-modes">${Ma.map(([n,e],t)=>`<div class="rd-mode rd-text" data-mode="${n}" style="--i:${t}">${e}</div><span class="rd-dot" style="--i:${t}"></span>`).join("")}
      <span class="rd-line"></span><span class="rd-stick">${S_}</span></div>
    <div class="rd-arrow rd-left">${Bf(-1)}</div>
    <div class="rd-tiles"></div>
    <div class="rd-arrow rd-right">${Bf(1)}</div>
    <div class="rd-prompt rd-p1"><span class="rd-icon">${M_}</span><span class="rd-text rd-power"></span></div>
    <div class="rd-prompt rd-p2"><span class="rd-icon">${w_}</span><span class="rd-text rd-vol"></span></div>
    <div class="rd-badge rd-lb">${zf("L1")}</div>
    <div class="rd-bar"><div class="rd-thumb"></div></div>
    <div class="rd-badge rd-rb">${zf("R1")}</div>
    <div class="rd-name rd-text"></div>
    <div class="rd-now rd-text"></div>
    <div class="rd-song rd-text"></div>`,document.body.appendChild(Tt)}var R_=n=>{let e=n.name.toLowerCase().split(/\W+/);return(n.tags||[]).filter(i=>!e.includes(i.toLowerCase())&&!/^(features?|station|live|internet)$/i.test(i)).slice(0,2).join(" \xB7 ").toUpperCase()||"LIVE RADIO"},Yf=()=>yt==="demand"?ti:dn,Kf=()=>yt==="demand"?lt.dIndex:lt.index,C_=n=>Re&&Re.mode===yt&&Re.index===n,wa="";function rn(){Tt||A_();let n=Yf(),e=n.length,t=Kf(),i=Tt.querySelector(".rd-tiles"),r=`${yt}:${e?`${t}/${e}`:yt==="demand"?Rs:xl}`;if(r!==wa&&(wa=r,i.innerHTML="",e))for(let h=-2;h<=2;h++){if(e<5&&(h<-Math.floor((e-1)/2)||h>Math.ceil((e-1)/2)))continue;let u=n[((t+h)%e+e)%e],d=Xf("div","rd-tile"+(h===0?" rd-sel":""),T_(u));d.style.setProperty("--k",h);let p=d.querySelector("img");if(p){p.addEventListener("error",()=>p.parentElement.remove(),{once:!0});let m=()=>{let g=p.naturalWidth/Math.max(1,p.naturalHeight);g>.8&&g<1.25&&p.parentElement.classList.add("rd-full")};p.complete&&p.naturalWidth?m():p.addEventListener("load",m,{once:!0})}i.appendChild(d)}Tt.querySelectorAll(".rd-mode").forEach(h=>h.classList.toggle("rd-on",h.dataset.mode===yt)),Tt.querySelector(".rd-stick").style.setProperty("--i",Ma.findIndex(([h])=>h===yt));let a=n[t],s=a&&C_(t),o,l,c="";yt==="demand"?(o=a?a.name.toUpperCase():Rs==="loading"?"LOADING YOUR MUSIC":"NO MUSIC YET",l=a?s&&Fn==="offline"?"CAN'T PLAY THIS FILE":(a.artists||"").toUpperCase():Rs==="loading"?"":"PUT SONGS IN A FOLDER CALLED ON DEMAND ON YOUR DESKTOP"):(o=a?a.name.toUpperCase():xl==="loading"?"FINDING STATIONS NEAR YOU":"NO STATIONS FOUND",l=a?a.off?"BACK TO THE SOUNDTRACK":Fn==="offline"?"OFF AIR RIGHT NOW":Fn==="tuning"?"TUNING IN\u2026":R_(a):"",c=a&&!a.off&&s&&Fn!=="offline"?(zu.get(a.url)||"").toUpperCase():""),Tt.querySelector(".rd-name").textContent=o,Tt.querySelector(".rd-now").textContent=l,Tt.querySelector(".rd-song").textContent=c,Tt.querySelector(".rd-power").textContent="CONFIRM",Tt.querySelector(".rd-vol").textContent=`VOLUME (${yl[lt.volume][0].toUpperCase()})`,Tt.querySelector(".rd-thumb").style.left=`${t/Math.max(1,e-1)*100}%`}var zu=new Map,br=0,Gf="",L_=(n,e)=>{if(!n||n.length<3||n.length>90)return"";let t=a=>a.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,""),i=t(e.name),r=t(n);return!r||r.includes(i)||i.includes(r)||/^[.\-\s]|_\d+|\b(commercial|advert|sale|promo|sponsor|station id|traffic)\b/i.test(n)?"":n.replace(/\s+/g," ").replace(/^\s*-\s*|\s*-\s*$/g,"").trim()};function Bu(){clearTimeout(br);let n=(Re==null?void 0:Re.mode)==="radio"?dn[Re.index]:null;!Xi||!n||n.off||(Gf=n.url,pf(n.url).then(e=>{if(Gf!==n.url)return;let t=L_(e,n);t?zu.set(n.url,t):zu.delete(n.url),rn()}).catch(()=>{}),br=setTimeout(Bu,2e4))}function $f(n){Fn="tuning",an.volume=yl[lt.volume][1],an.getAttribute("src")!==n&&(an.src=n),an.play().catch(e=>{(e==null?void 0:e.name)!=="AbortError"&&(Fn="offline",rn())})}function Wf(){an.pause(),an.removeAttribute("src"),an.load(),Fn=""}var Hu=()=>{var n;return(n=window.chrome)==null?void 0:n.webview},jf;(jf=Hu())==null||jf.addEventListener("message",n=>{var t;if(((t=n.data)==null?void 0:t.type)!=="onDemand")return;let e=n.data.cover||"";ti=(n.data.tracks||[]).map((i,r)=>{let a=i.file.replace(/\.[^.]+$/,""),s=/^(\d+)\s*[-.]\s*(.+?)\s+-\s+(.+)$/.exec(a);return{n:s?+s[1]:r+1,artists:s?s[2]:"",name:s?s[3]:a.replace(/^\d+\s*[-.]\s*/,""),url:i.url,cover:e}}),Rs=ti.length?"ready":"none",lt.dIndex=Math.min(lt.dIndex,Math.max(0,ti.length-1)),wa="",Tt&&rn()});var Wt={get isOpen(){return Xi},get playing(){return!!Re},get mode(){return yt},get stations(){return dn},get tracks(){return ti},get state(){return{...lt,mode:yt,on:!!Re,playing:Re,tune:Fn,station:dn[lt.index]||null,track:ti[lt.dIndex]||null}},onChange(n){Ts=n},setStations(n){var i;let e=(Re==null?void 0:Re.mode)==="radio"?(i=dn[Re.index])==null?void 0:i.url:null;dn=n!=null&&n.length?[b_,...n]:[],xl=dn.length?"ready":"none";let t=dn.findIndex(r=>r.url===(e||lt.stationUrl));lt.index=t>=0?t:0,(Re==null?void 0:Re.mode)==="radio"?Re.index=Math.max(0,dn.findIndex(r=>r.url===e)):lt.index=0,yt==="radio"&&(wa=""),Tt&&rn()},failed(){dn.length||(xl="none",Tt&&rn())},loadOnDemand(n){if(ku=n,!Hu()||!n){Rs="none";return}Hu().postMessage({cmd:"getOnDemand",folder:n})},open(){if((Re==null?void 0:Re.mode)!=="demand"&&ku&&this.loadOnDemand(ku),Re)Re.mode!==yt&&(yt=Re.mode,wa="");else if(yt==="demand"&&ti.length)this.select(lt.dIndex);else if(dn.length>1){yt="radio";let n=dn.findIndex(e=>!e.off&&e.url===lt.stationUrl);this.select(n>0?n:1)}rn(),Xi=!0,clearTimeout(br),br=setTimeout(Bu,1500),requestAnimationFrame(()=>Tt.classList.add("shown")),document.body.classList.add("radio-open")},close(){Xi=!1,clearTimeout(br),Tt==null||Tt.classList.remove("shown"),document.body.classList.remove("radio-open")},toggle(){Xi?this.close():this.open()},setMode(n){let e=Math.max(0,Math.min(Ma.length-1,Ma.findIndex(([t])=>t===yt)+n));Ma[e][0]!==yt&&(yt=Ma[e][0],wa="",As(),rn())},select(n){let e=Yf();if(!e.length)return;n=(n%e.length+e.length)%e.length,yt==="demand"?lt.dIndex=n:lt.index=n;let t=e[n],i=!!Re;t.off?(Re=null,Wf()):(Re={mode:yt,index:n},$f(t.url)),As(),rn(),!!Re!==i&&Ts("power",!!Re),Ts("station",!!Re),yt==="radio"&&(clearTimeout(br),br=setTimeout(Bu,300))},step(n){this.select(Kf()+n)},confirm(){var n;(Re==null?void 0:Re.mode)==="radio"&&(lt.stationUrl=((n=dn[Re.index])==null?void 0:n.url)||lt.stationUrl,As()),this.close()},power(){Re?(Re=null,Wf(),rn(),Ts("power",!1)):this.open()},volume(){lt.volume=(lt.volume+1)%yl.length,As(),an.volume=yl[lt.volume][1],rn(),Ts("volume",!!Re)},pad(n,e){var r,a;let t=s=>{var o;return!!((o=n.buttons[s])!=null&&o.pressed)},i=(a=(r=n.axes)==null?void 0:r[3])!=null?a:0;return e("radioPad",t(17))?(this.toggle(),!0):Xi?(e("rdPrev",t(4))&&this.step(-1),e("rdNext",t(5))&&this.step(1),e("rdUp",i<-.6)&&this.setMode(-1),e("rdDown",i>.6)&&this.setMode(1),e("rdCross",t(0))&&this.confirm(),e("rdTri",t(3))&&this.volume(),e("rdCircle",t(1))&&this.close(),!0):!1}},P_=()=>{var n;return[...((n=navigator.getGamepads)==null?void 0:n.call(navigator))||[]].some(e=>e&&(e.buttons.some(t=>t.pressed)||e.axes.some(t=>Math.abs(t)>.5)))};window.addEventListener("keydown",n=>{let e=n.key.toLowerCase();if(Xi&&P_()){n.preventDefault(),n.stopImmediatePropagation();return}if(!Xi){e==="r"&&!n.repeat&&document.body.dataset.started==="1"&&!document.querySelector(".name-screen")&&(Wt.open(),n.preventDefault(),n.stopImmediatePropagation());return}n.preventDefault(),n.stopImmediatePropagation(),!(n.repeat&&!["arrowleft","arrowright"].includes(e))&&(e==="arrowleft"||e==="q"?Wt.step(-1):e==="arrowright"||e==="e"?Wt.step(1):e==="arrowup"?Wt.setMode(-1):e==="arrowdown"?Wt.setMode(1):e==="enter"||e==="x"?Wt.confirm():e==="v"||e==="t"?Wt.volume():(e==="escape"||e==="r"||e==="backspace")&&Wt.close())},!0);var Bt=Math.PI/180,Sa=6371,Zf=2*Math.PI/86164.1,I_=51.64*Bt,D_=92.9*60,Jf=418,Vu=(n,e,t=1)=>new S(...ji(n,e,t)),Gu=new S(0,1,0),Qf=n=>(n=Math.max(0,Math.min(1,n)),n*n*(3-2*n)),U_={on:()=>W.satelliteSunsetLook!==!1},qu={real:1,timelapse:18.75,fast:60};function ng(n,e){let t={on:!1,k:0,orbit:null,simT:0,look:{yaw:0,pitch:0,vYaw:0,vPitch:0},pos:new S,fwd:new S};t.fromTrack=(m,g)=>{if(!m||m.length<6)return!1;let f=m.findIndex(D=>D[0]>g)-1;f<0&&(f=0);let y=Math.min(m.length-1,f+5);if(y<=f)return!1;let x=m[f],v=m[y],_=(v[0]-x[0])/1e3,w=Vu(x[1],x[2]),M=Vu(v[1],v[2]).applyAxisAngle(Gu,Zf*_),R=new S().crossVectors(w,M);return R.lengthSq()<1e-10?!1:(R.normalize(),t.orbit={p0:w,n:R,w:w.angleTo(M)/_,alt:(x[3]+v[3])/2||Jf,t0:x[0],live:!0},!0)},t.fromPlace=(m,g,f)=>{m=Math.max(-50,Math.min(50,m));let y=Vu(m,g),x=Gu.clone().addScaledVector(y,-y.y).normalize(),v=new S().crossVectors(x,y).normalize(),_=Math.min(1,Math.cos(I_)/Math.max(.001,Math.cos(m*Bt))),w=Math.asin(_),M=x.clone().multiplyScalar(Math.cos(w)).addScaledVector(v,Math.sin(w)),R=new S().crossVectors(y,M).normalize();t.orbit={p0:y,n:R,w:2*Math.PI/D_,alt:Jf,t0:f,live:!1}};let i=new S,r=new S;function a(m,g){let f=t.orbit;return g.copy(f.p0).applyAxisAngle(f.n,f.w*m),g.applyAxisAngle(Gu,-Zf*m)}t.start=m=>t.orbit?(t.on=!0,t.simT=(m-t.orbit.t0)/1e3,t.look.yaw=t.look.pitch=t.look.vYaw=t.look.vPitch=0,!0):!1,t.stop=()=>{t.on=!1};let s={pitch:30*Bt,yaw:14*Bt,roll:-5*Bt};t.sunW=0,t.pose=(m,g,f)=>{t.simT+=g*f;let x=1+t.orbit.alt/Sa;a(t.simT,i),a(t.simT+2,r),t.pos.copy(i).multiplyScalar(x);let v=i.clone(),_=r.sub(i).addScaledVector(v,-r.dot(v)).normalize(),w=t.look;w.yaw+=w.vYaw*g,w.pitch=Math.max(-25*Bt,Math.min(45*Bt,w.pitch+w.vPitch*g));let M=new S().crossVectors(_,v),R=v.dot(e),D=e.clone().addScaledVector(v,-R),A=Math.atan2(D.dot(M),D.dot(_));t.sunYaw!=null&&t.sunW>.001&&(A=t.sunYaw+Math.atan2(Math.sin(A-t.sunYaw),Math.cos(A-t.sunYaw))),t.sunYaw=A;let U=Math.asin(Math.max(-1,Math.min(1,R)))/Bt,I=U_.on()?Qf((R+.52)/.08)*(1-Qf((U-22)/8)):0;t.sunW+=(I-t.sunW)*(1-Math.exp(-g*1.5));let L=t.sunW,H=-Math.max(-30,Math.min(-5,U-18))*Bt,B=s.yaw*(1-L)+A*L+w.yaw,Z=s.pitch*(1-L)+H*L+w.pitch,X=_.clone().applyAxisAngle(v,-B),j=M.clone().applyAxisAngle(v,-B);return X.applyAxisAngle(j,-Z),m.position.copy(t.pos),m.up.copy(v).applyAxisAngle(X,s.roll),m.lookAt(t.pos.clone().add(X)),t.fwd.copy(X),t.pos},t.latLng=()=>{let m=t.pos.clone().normalize();return{lat:Math.asin(Math.max(-1,Math.min(1,m.y)))/Bt,lng:Math.atan2(-m.z,m.x)/Bt}};let o=1,l=1+120/Sa,c=new Ze({uniforms:{sunDir:{value:e},amount:{value:0},R1:{value:o},R2:{value:l}},vertexShader:`
      varying vec3 vW;
      void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      uniform vec3 sunDir; uniform float amount, R1, R2;
      varying vec3 vW;
      void main() {
        vec3 ro = cameraPosition, rd = normalize(vW - cameraPosition);
        float b = dot(ro, rd), cc = dot(ro, ro);
        float dT = b * b - (cc - R2 * R2);
        if (dT <= 0.0) discard;
        float t0 = max(-b - sqrt(dT), 0.0), t1 = -b + sqrt(dT);
        float dG = b * b - (cc - 1.0);
        if (dG > 0.0) t1 = min(t1, -b - sqrt(dG));            // the ground: only the air in front of it
        const int N = 16;
        float dt = (t1 - t0) / float(N);
        float col = 0.0;
        for (int i = 0; i < N; i++) {
          vec3 p = ro + rd * (t0 + (float(i) + 0.5) * dt);
          float r = length(p);
          float h = (r - 1.0) * 6371.0;                       // km
          float night = smoothstep(-0.02, -0.26, dot(p / r, sunDir));
          col += exp(-max(h, 0.0) / 12.0) * night * dt * 6371.0;   // km of air (thinned by height)
        }
        // a line grazing the ground crosses ~690 km of that air: 1 there
        float k = col / 690.0;
        float I = amount * (1.0 - exp(-2.4 * k)) * (dG > 0.0 ? 0.75 * smoothstep(0.08, 0.6, k) : 1.0);   // over the ground: only the wash near the horizon
        gl_FragColor = vec4(vec3(0.30, 0.78, 0.42) * I, 1.0);
      }`,transparent:!0,depthWrite:!1,side:us,blending:On,blendEquation:Mt,blendSrc:Rt,blendDst:Rt,blendEquationAlpha:Mt,blendSrcAlpha:Bi,blendDstAlpha:Rt}),h=new Ke(new un(l,512,256),c);h.visible=!1,h.renderOrder=2,n.add(h),t.airglow=m=>{c.uniforms.amount.value=m,h.visible=m>.001};let u=1+60/Sa,d=new Ze({uniforms:{sunDir:{value:e},amount:{value:0},T1:{value:u}},vertexShader:c.vertexShader,fragmentShader:`
      uniform vec3 sunDir; uniform float amount, T1;
      varying vec3 vW;
      void main() {
        vec3 ro = cameraPosition, rd = normalize(vW - cameraPosition);
        float tc = -dot(ro, rd);
        vec3 c = ro + rd * tc;
        float h2 = dot(c, c);
        bool ground = h2 < 1.0;
        // the stretch of air the line of sight crosses (in front of the ground when it hits it)
        float len = ground ? sqrt(max(T1 * T1 - h2, 0.0)) - sqrt(max(1.0 - h2, 0.0)) : 2.0 * sqrt(max(T1 * T1 - h2, 0.0));
        float k = len / (2.0 * sqrt(T1 * T1 - 1.0));               // 1 grazing the ground at the horizon
        float hR = ground ? 0.0 : sqrt(h2) - 1.0;                    // the height of the line's lowest point
        float hgt = hR / (T1 - 1.0);
        vec3 at = normalize(ground ? ro + rd * (tc - sqrt(max(T1 * T1 - h2, 0.0))) : c);
        float s = dot(at, sunDir);                                   // the sun's height there (sin)
        float dip = sqrt(2.0 * max(hR, 2e-4));                       // how far below the level the sun can be and still light it
        float lit = smoothstep(-dip - 0.035, -dip + 0.03, s);
        float twi = lit * (1.0 - smoothstep(0.04, 0.30, s));
        float toward = max(dot(rd, sunDir), 0.0);
        float phase = 0.25 + 1.6 * pow(toward, 5.0) + 3.0 * pow(toward, 60.0);
        // low and close to the line: long paths through the air -> orange; higher: white, then blue
        float red = 1.0 - smoothstep(-0.06, 0.14, s);
        vec3 low = mix(vec3(1.0, 0.92, 0.80), vec3(1.0, 0.50, 0.16), red);
        vec3 col = mix(low, vec3(0.85, 0.92, 1.0), smoothstep(0.12, 0.38, hgt));
        col = mix(col, vec3(0.22, 0.48, 1.0), smoothstep(0.32, 0.75, hgt));
        float dens = exp(-hgt * 3.2);
        float I = amount * twi * phase * dens * pow(clamp(k, 0.0, 1.0), 2.0) * (ground ? 0.35 : 1.0) * 0.9;
        gl_FragColor = vec4(col * I, 1.0);
      }`,transparent:!0,depthWrite:!1,side:us,blending:On,blendEquation:Mt,blendSrc:Rt,blendDst:Rt,blendEquationAlpha:Mt,blendSrcAlpha:Bi,blendDstAlpha:Rt}),p=new Ke(new un(u,512,256),d);return p.visible=!1,p.renderOrder=2,n.add(p),t.twilight=m=>{d.uniforms.amount.value=m,p.visible=m>.001},t}var Wu=256,tg,eg=!!((tg=globalThis.chrome)!=null&&tg.webview),N_=(n,e)=>(n+180)/360*e,O_=(n,e)=>{let t=Math.max(-85,Math.min(85,n))*Bt;return(1-Math.log(Math.tan(t)+1/Math.cos(t))/Math.PI)/2*e},ju=(n,e)=>Math.atan(Math.sinh(Math.PI*(1-2*n/e)))/Bt;function ig(n,e,t,i){let r=n.getContext(),a=[{z:8,N:12,aheadKm:500,src:t,day:!0},{z:7,N:12,aheadKm:1300,src:t,day:!0},{z:8,N:12,aheadKm:500,src:i,day:!1},{z:7,N:12,aheadKm:1300,src:i,day:!1}],s=null,o=0,l=12,c=[];for(let[v,_]of a.entries())_.n=2**_.z,_.size=_.N*Wu,_.slots=new Array(_.N*_.N).fill(null),_.pending=new Set,_.state=new _n(new Uint8Array(_.N*_.N*4),_.N,_.N,Zt),_.state.magFilter=_.state.minFilter=Gt,_.state.generateMipmaps=!1,_.state.needsUpdate=!0,_.atlas=null,_.win={x0:0,y0:0},e[`SatState${v}`]={value:_.state},e[`SatAtlas${v}`]={value:null},e[`U_sat${v}`]={value:new qe(_.n,0,0,_.N)};function h(v,_){let w=new _n(new Uint8Array(v.size*v.size*4),v.size,v.size,Zt);w.magFilter=w.minFilter=st,w.generateMipmaps=!1,w.wrapS=w.wrapT=gr,w.needsUpdate=!0,n.initTexture(w),w.image.data=null,v.atlas=w,e[`SatAtlas${_}`].value=w}function u(v,_,w){var D;if(!s)return!0;let M=`${_}/${w}`;(D=v.land)!=null||(v.land=new Map);let R=v.land.get(M);return R===void 0&&(R=d(v,_,w),v.land.set(M,R)),R}function d(v,_,w){let{m:M,W:R,H:D}=s,A=_/v.n*360-180,U=(_+1)/v.n*360-180,I=ju(w+1,v.n),L=ju(w,v.n);for(let H=-1;H<=9;H++)for(let B=-1;B<=9;B++){let Z=A+(U-A)*B/8,X=I+(L-I)*H/8,j=Math.floor((Z+180)/360*R+R)%R,J=Math.max(0,Math.min(D-1,Math.floor((90-X)/180*D)));if(M[J*R+j]<128)return!0}return!1}let p=(v,_,w,M)=>eg&&v.key?`https://tiles.app.local/${v.key}/${_}/${w}/${M}.${v.url.split(".").pop()}`:v.url.replace("{z}",_).replace("{x}",w).replace("{y}",M),m=new S,g=(v,_,w,M)=>{if(!M)return!0;let R=ju(w+.5,v.n)*Bt,D=((_+.5)/v.n*360-180)*Bt;m.set(Math.cos(R)*Math.cos(D),Math.sin(R),-Math.cos(R)*Math.sin(D));let A=m.dot(M);return v.day?A>-.14:A<.16};function f(v,_,w){let M=`${_}/${w}`;v.pending.add(M),o++,v.inflight=(v.inflight||0)+1,v.fetched=(v.fetched||0)+1,fetch(p(v.src,v.z,_,w),eg?{}:{mode:"cors"}).then(R=>{if(!R.ok)throw new Error(`tile ${R.status}`);return R.blob()}).then(R=>createImageBitmap(R)).then(R=>c.push({L:v,x:_,y:w,key:M,bm:R})).catch(()=>{var R;(R=v.failed)!=null||(v.failed=new Map),v.failed.set(M,performance.now()),v.pending.delete(M)}).finally(()=>{o--,v.inflight--})}let y=(v,_,w)=>((_-v.win.x0)%v.n+v.n)%v.n<v.N&&w>=v.win.y0&&w<v.win.y0+v.N,x={on:!1};return x.setSea=v=>{x.seaAsked||(x.seaAsked=performance.now(),v.then(_=>{s=_}).catch(()=>{x.seaAsked=!1}))},x.update=(v,_,w,M)=>{var U,I,L,H,B,Z;if(x.on=w,!w)return;x.frame=((x.frame||0)+1)%600;let R=v.clone().normalize(),D=_.clone().addScaledVector(R,-_.dot(R));D.lengthSq()<1e-8&&D.set(0,1,0).addScaledVector(R,-R.y),D.normalize(),[...a.entries()].reverse().forEach(([X,j])=>{var ye;j.atlas||h(j,X);let J=R.clone().applyAxisAngle(new S().crossVectors(R,D).normalize(),j.aheadKm/Sa),pe=Math.asin(Math.max(-1,Math.min(1,J.y)))/Bt,ve=Math.atan2(-J.z,J.x)/Bt,ee=N_(ve,j.n),oe=O_(pe,j.n);if(j.win.x0=(Math.floor(ee-j.N/2)%j.n+j.n)%j.n,j.win.y0=Math.max(0,Math.min(j.n-j.N,Math.floor(oe-j.N/2))),e[`U_sat${X}`].value.set(j.n,j.win.x0,j.win.y0,j.N),x.frame%6!==X||(j.inflight||0)>=l/2||!s&&x.seaAsked&&performance.now()-x.seaAsked<8e3)return;let de=[];for(let he=0;he<j.N;he++)for(let C=0;C<j.N;C++){let T=(j.win.x0+C)%j.n,k=j.win.y0+he,F=`${T}/${k}`,P=k%j.N*j.N+T%j.N;if(j.slots[P]===F||j.pending.has(F))continue;let O=(ye=j.failed)==null?void 0:ye.get(F);if(O&&performance.now()-O<3e4||!u(j,T,k)||!g(j,T,k,M))continue;let b=Math.min(Math.abs(T+.5-ee),j.n-Math.abs(T+.5-ee)),N=k+.5-oe;de.push([b*b+N*N,T,k])}de.sort((he,C)=>he[0]-C[0]);for(let[,he,C]of de){if((j.inflight||0)>=l/2)break;f(j,he,C)}});let A=performance.now();for(let X=0;X<2&&c.length&&!(X===1&&performance.now()-A>.6);X++){let j=c.shift(),{L:J}=j;if(J.pending.delete(j.key),!y(J,j.x,j.y)||!J.atlas){if((I=(U=j.bm).close)==null||I.call(U),X--,performance.now()-A>1.5)break;continue}let pe=j.x%J.N,ve=j.y%J.N,ee=ve*J.N+pe,oe=n.properties.get(J.atlas).__webglTexture;if(!oe){(H=(L=j.bm).close)==null||H.call(L);continue}n.state.bindTexture(r.TEXTURE_2D,oe),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE),r.texSubImage2D(r.TEXTURE_2D,0,pe*Wu,ve*Wu,r.RGBA,r.UNSIGNED_BYTE,j.bm),n.state.unbindTexture(),(Z=(B=j.bm).close)==null||Z.call(B),J.slots[ee]=j.key;let de=J.state.image.data;if(de[ee*4]=j.x%256,de[ee*4+1]=j.y%256,de[ee*4+2]=255,de[ee*4+3]=255,J.state.needsUpdate=!0,performance.now()-A>1.5)break}},x.stats=()=>a.map(v=>({z:v.z,fetched:v.fetched||0,loaded:v.slots.filter(Boolean).length,pending:v.pending.size,win:{...v.win}})),x}function rg(n,e,t,i){let r=1+1.5/Sa,a=1+12/Sa,s=new Ze({uniforms:{CloudMap:t.CloudMap,NoiseVol:t.NoiseVol,U_cloud:t.U_cloud,U_moon:t.U_moon,U_flashA:t.U_flashA,U_flashB:t.U_flashB,sunDir:{value:i},Rb:{value:r},Rt:{value:a},amount:{value:0},seed:{value:0}},vertexShader:`
      varying vec3 vW;
      void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      precision highp float; precision highp sampler3D;
      uniform sampler2D CloudMap; uniform sampler3D NoiseVol;
      uniform vec4 U_cloud, U_moon; uniform vec4 U_flashA[16], U_flashB[16];
      uniform vec3 sunDir; uniform float Rb, Rt, amount, seed;
      varying vec3 vW;
      float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      vec2 mapUV(vec3 n) {
        float lat = asin(clamp(n.y, -1.0, 1.0)), lon = atan(-n.z, n.x);
        return vec2(lon / 6.2831853 + 0.5 - U_cloud.x, lat / 3.14159265 + 0.5);
      }
      // the cloud's shape at height fraction h, from the noise n (0..1) and the cover c
      float shape(float h, float n, float c) {
        float top = 0.22 + 0.78 * c;                          // thick cover builds tall
        float prof = smoothstep(0.0, 0.07, h) * (1.0 - smoothstep(top * 0.55, top, h));
        return max(n * prof - (1.0 - c) * 0.72 - 0.1, 0.0) * 5.0;
      }
      vec2 noise2(vec3 p) { vec3 k = p * 6371.0; return vec2(texture(NoiseVol, k / 190.0).r, texture(NoiseVol, mat3(0.788, -0.341, 0.512, 0.514, 0.808, -0.288, -0.315, 0.481, 0.818) * k / 78.0 + 0.37).r); }
      void main() {
        vec3 ro = cameraPosition, rd = normalize(vW - ro);
        float b = dot(ro, rd), cc = dot(ro, ro);
        float dT = b * b - (cc - Rt * Rt);
        if (dT <= 0.0) discard;
        float t0 = max(-b - sqrt(dT), 0.0), t1 = -b + sqrt(dT);
        float dB = b * b - (cc - Rb * Rb);
        if (dB > 0.0) t1 = -b - sqrt(dB);                     // down to the cloud base; the ground beyond
        float len = min(t1 - t0, 450.0 / 6371.0);             // at most 450 km of the layer
        if (len <= 0.0) discard;
        const int N = 30;
        float dt = len / float(N);
        float jit = hash12(gl_FragCoord.xy + seed * 17.0);
        float T = 1.0; vec3 col = vec3(0.0);
        float ext = 0.11 * 6371.0;                            // extinction: 0.11 per km at density 1
        vec3 L = sunDir;
        for (int i = 0; i < N; i++) {
          vec3 p = ro + rd * (t0 + (float(i) + jit) * dt);
          vec3 nn = normalize(p);
          vec2 uv = mapUV(nn);
          if (texture(CloudMap, uv).r < 0.03) continue;       // clear sky here: nothing to shape
          vec2 nz = noise2(p);
          // the map's 20 km texels warped by the noise, so its grid never shows
          float c = texture(CloudMap, uv + (nz - 0.5) * vec2(3.0 / 2048.0, 3.0 / 1024.0)).r;
          float h = (length(p) - Rb) / (Rt - Rb);
          // far off toward the horizon the lumps are smaller than a pixel and
          // only made the edge of the Earth sparkle and crawl: there the
          // shape evens out into smooth bands of cloud
          float far = smoothstep(700.0, 1800.0, distance(p, ro) * 6371.0);
          float d = shape(h, mix(nz.x * 0.68 + nz.y * 0.32, 0.6, far), c);
          if (d <= 0.002) continue;
          float sh = dot(nn, L);                              // the sun's height there
          float lit = smoothstep(-0.07, 0.03, sh);
          vec3 q = p + L * (2.6 / 6371.0);                    // one look toward the sun: self-shadowing
          vec2 nq = noise2(q);
          float dl = shape((length(q) - Rb) / (Rt - Rb), mix(nq.x * 0.68 + nq.y * 0.32, 0.6, far), c);
          float lightT = exp(-dl * 2.6 * 0.11 * 4.0);
          vec3 sunCol = mix(vec3(1.0, 0.52, 0.22), vec3(0.95, 0.94, 0.92), smoothstep(-0.02, 0.22, sh)) * lit;
          vec3 amb = vec3(0.26, 0.33, 0.46) * smoothstep(-0.08, 0.35, sh) * 0.45;
          vec3 moon = vec3(0.55, 0.66, 0.88) * 0.30 * U_moon.w * max(dot(nn, U_moon.xyz), 0.0) * (1.0 - lit);
          vec3 Lc = sunCol * (0.12 + 0.95 * lightT) + amb * (0.6 + 0.4 * h) + moon * (0.4 + 0.6 * lightT);
          float a = 1.0 - exp(-d * dt * ext);
          col += T * a * Lc;
          T *= 1.0 - a;
          if (T < 0.02) break;
        }
        float A = 1.0 - T;
        if (A < 0.002) discard;
        // lightning inside the storm clouds (the globe's strokes), seen through the layer
        vec3 pe = normalize(ro + rd * t0);
        if (U_flashA[0].w > 0.0) {
          vec3 fl = vec3(0.0);
          for (int i = 0; i < 16; i++) {
            vec4 Fa = U_flashA[i];
            if (Fa.w <= 0.0) break;
            vec4 Fb = U_flashB[i];
            float d2 = max(0.0, 2.0 * (1.0 - dot(pe, Fa.xyz))), r2 = Fb.x * Fb.x;
            fl += Fa.w * vec3(0.45, 0.66, 1.0) * (exp(-d2 / r2) * 2.4 + exp(-d2 / (r2 * 9.0)) * 0.4);
          }
          col += fl * A;
        }
        // haze toward the horizon (the air between the station and far cloud)
        float far = smoothstep(300.0, 1600.0, t0 * 6371.0) * smoothstep(-0.05, 0.25, dot(pe, L));
        col = mix(col, vec3(0.62, 0.74, 0.95) * A, far * 0.35);
        gl_FragColor = vec4(col, A) * amount;
      }`,transparent:!0,depthTest:!1,depthWrite:!1,side:us,blending:On,blendEquation:Mt,blendSrc:Rt,blendDst:$n,blendEquationAlpha:Mt,blendSrcAlpha:Rt,blendDstAlpha:$n}),o=new xn,l=new Ke(new un(a,384,192),s);l.frustumCulled=!1,o.add(l);let c=new Jt(2,2,{depthBuffer:!1,stencilBuffer:!1});c.texture.minFilter=c.texture.magFilter=st,c.texture.generateMipmaps=!1;let h=new Ke(new yn(2,2),new Ze({uniforms:{t:{value:c.texture},res:{value:new ae(1,1)}},vertexShader:"void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D t; uniform vec2 res; void main() { gl_FragColor = texture2D(t, gl_FragCoord.xy / res); }",transparent:!0,depthTest:!1,depthWrite:!1,blending:On,blendEquation:Mt,blendSrc:Rt,blendDst:$n,blendEquationAlpha:Mt,blendSrcAlpha:Rt,blendDstAlpha:$n}));h.frustumCulled=!1,h.renderOrder=1,h.visible=!1,e.add(h);let u=new ae,d=new Ve,p={amount:0};return p.render=(m,g)=>{if(p.amount=g,s.uniforms.amount.value=g,h.visible=g>.001,!h.visible)return;n.getDrawingBufferSize(u);let f=Math.max(2,Math.round(u.x/2)),y=Math.max(2,Math.round(u.y/2));(c.width!==f||c.height!==y)&&c.setSize(f,y),h.material.uniforms.res.value.copy(u);let x=n.getRenderTarget(),v=n.autoClear,_=n.getClearAlpha();n.getClearColor(d),n.setRenderTarget(c),n.setClearColor(0,0),n.clear(!0,!1,!1),n.autoClear=!1,n.render(o,m),n.autoClear=v,n.setClearColor(d,_),n.setRenderTarget(x)},p}var kn=256,sg=40075,Yu=[{extentKm:900,n:4,showBelow:.3,fullBelow:.14,seg:96,lightDetail:0},{extentKm:416,n:8,showBelow:.16,fullBelow:.08,seg:128,lightDetail:0},{extentKm:208,n:8,showBelow:.08,fullBelow:.04,seg:128,lightDetail:.6},{extentKm:104,n:8,showBelow:.04,fullBelow:.02,seg:160,lightDetail:1},{extentKm:52,n:8,showBelow:.02,fullBelow:.01,seg:160,lightDetail:1},{extentKm:26,n:8,showBelow:.012,fullBelow:.007,seg:160,lightDetail:1}],F_=1.6,wl=1.00003,k_=6371e3,z_=150,og=(n,e)=>(n+180)/360*2**e,lg=(n,e)=>{let t=n*Math.PI/180;return(1-Math.log(Math.tan(t)+1/Math.cos(t))/Math.PI)/2*2**e},B_=(n,e)=>n/2**e*360-180,H_=(n,e)=>Math.atan(Math.sinh(Math.PI*(1-2*n/2**e)))*180/Math.PI,ag,Sl=!!((ag=globalThis.chrome)!=null&&ag.webview),V_="lau-closeup-tiles-v1",Ml=null,cg=()=>Ml!=null?Ml:Ml=globalThis.caches?caches.open(V_).catch(()=>null):Promise.resolve(null),Cs={busy:0,wait:[]};function G_(){return Cs.busy<24?(Cs.busy++,Promise.resolve()):new Promise(n=>Cs.wait.push(n))}function W_(){let n=Cs.wait.shift();n?n():Cs.busy--}async function hg(n){await G_();try{return await j_(n)}finally{W_()}}async function j_(n){if(Sl){let r=await fetch(n);if(!r.ok)throw new Error(`tile ${r.status}`);return r.blob()}let e=await cg(),t=e&&await e.match(n).catch(()=>null);if(t)return t.blob();let i=await fetch(n,{mode:"cors"});if(!i.ok)throw new Error(`tile ${i.status}`);return e&&e.put(n,i.clone()).catch(()=>{}),i.blob()}var Yi=new Map;function q_(n){var e;if(!Yi.has(n)&&(Yi.set(n,hg(n).then(t=>createImageBitmap(t)).catch(()=>(Yi.delete(n),null))),Yi.size>600)){let t=Yi.keys().next().value;(e=Yi.get(t))==null||e.then(i=>{var r;return(r=i==null?void 0:i.close)==null?void 0:r.call(i)}),Yi.delete(t)}return Yi.get(n)}var Ku=(n,e,t,i)=>{let r=2**e,a=(t%r+r)%r;return Sl&&n.key?`https://tiles.app.local/${n.key}/${e}/${a}/${i}.${n.url.split(".").pop()}`:n.url.replace("{z}",e).replace("{x}",a).replace("{y}",i)};function X_(n,e,t,i,r,a,s){let o=Math.min(i,t.maxZoom),l=2**(i-o),c=e/(s*kn),h=Math.floor(r/l),u=Math.floor((r+s-1)/l),d=Math.floor(a/l),p=Math.floor((a+s-1)/l),m=[];for(let g=d;g<=p;g++)if(!(g<0||g>=2**o))for(let f=h;f<=u;f++)m.push(q_(Ku(t,o,f,g)).then(y=>{y&&n(y,(f*l-r)*kn*c,(g*l-a)*kn*c,kn*l*c)}));return Promise.all(m)}function ug(n,e,t,i,r=48){let a=(r+1)*(r+1),s=new Float32Array(a*3),o=new Float32Array(a*2),l=new Float32Array(a*3),c=new Uint32Array(r*r*6);for(let u=0,d=0;u<=r;u++){let p=H_(t+u/r*i,n);for(let m=0;m<=r;m++,d++){let g=ji(p,B_(e+m/r*i,n),1);l[d*3]=g[0],l[d*3+1]=g[1],l[d*3+2]=g[2],s[d*3]=g[0]*wl,s[d*3+1]=g[1]*wl,s[d*3+2]=g[2]*wl,o[d*2]=m/r,o[d*2+1]=1-u/r}}for(let u=0,d=0;u<r;u++)for(let p=0;p<r;p++){let m=u*(r+1)+p,g=m+1,f=m+r+1,y=f+1;c[d++]=m,c[d++]=f,c[d++]=g,c[d++]=g,c[d++]=f,c[d++]=y}let h=new tt;return h.setAttribute("position",new $e(s,3)),h.setAttribute("uv",new $e(o,2)),h.setAttribute("normal",new $e(l.slice(),3)),h.setIndex(new $e(c,1)),h.userData={dir:l,seg:r},h}function Y_(n,e,t){let i=new Float32Array((n+1)*(n+1));if(!t)return i;let r=2**(t.z-e.z);for(let a=0;a<=n;a++)for(let s=0;s<=n;s++){let o=((e.x0+s/n*e.n)*r-t.x0)/t.n,l=((e.y0+a/n*e.n)*r-t.y0)/t.n,c=Math.min(o,1-o,l,1-l);i[a*(n+1)+s]=Ut.smoothstep(c,.25,.29)}return i}function K_(n,e,t=0){let{dir:i,seg:r}=n.userData,a=e.width,s=e.height,o=e.getContext("2d").getImageData(0,0,a,s).data,l=n.attributes.position;for(let c=0;c<=r;c++)for(let h=0;h<=r;h++){let u=c*(r+1)+h,d=Math.min(a-1,Math.round(h/r*(a-1))),m=(Math.min(s-1,Math.round(c/r*(s-1)))*a+d)*4,g=o[m+3]===255?Math.min(8900,Math.max(0,o[m]*256+o[m+1]+o[m+2]/256-32768)):0,f=wl+(g*F_+t)/k_;l.setXYZ(u,i[u*3]*f,i[u*3+1]*f,i[u*3+2]*f)}l.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere()}var dg=`
  attribute float sinkK; uniform float sink;
  varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPos; varying vec3 vRelief;
  void main() {
    vUv = uv;
    vNormal = normalize(position);
    vRelief = normal;
    vec3 p = position - vNormal * (sinkK * sink * ${(6e3/6371e3).toFixed(9)});   // 6 km down
    vec4 wp = modelMatrix * vec4(p, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,pg=`
  uniform sampler2D dayMap; uniform sampler2D nightMap;
  uniform vec3 sunDir; uniform float fade; uniform vec4 nightK; uniform vec2 texel; uniform vec4 GRADE; uniform float lightDetail; uniform vec4 dayXf; uniform vec4 nightXf; uniform vec2 glitter; uniform sampler2D seaMap;
  varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPos; varying vec3 vRelief;
  float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
  float vnoise3(vec3 p) {
    vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x), mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x), mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y), f.z);
  }
  void main() {
    vec3 n = normalize(vNormal);
    vec3 rn = normalize(vRelief); rn = dot(rn, n) < 0.0 ? -rn : rn;
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    float d = dot(n, normalize(sunDir));
    vec2 duv = dayXf.xy + vUv * dayXf.zw, nuv = nightXf.xy + vUv * nightXf.zw;
    vec4 day = texture2D(dayMap, duv);
    vec4 night = texture2D(nightMap, nuv);
    float slope = dot(rn, normalize(sunDir)) - d;                    // 0 on flat ground
    vec3 dayCol = day.rgb * (0.28 + 1.0 * smoothstep(-0.05, 0.6, d)) * clamp(1.0 + slope * 1.8, 0.35, 1.7);
    // The sun's colour from its height at this spot (the city's local time):
    // white at midday, golden then deep orange as it nears the horizon, a
    // rosy afterglow just after sunset. d = sine of the sun's elevation.
    float low = 1.0 - smoothstep(0.02, 0.42, d);                       // below ~25 deg
    vec3 sunTint = mix(vec3(1.0), vec3(1.0, 0.70, 0.42), low);
    sunTint = mix(sunTint, vec3(1.0, 0.50, 0.30), (1.0 - smoothstep(-0.02, 0.10, d)) * smoothstep(-0.14, -0.02, d));
    sunTint = mix(sunTint, vec3(0.86, 0.62, 0.78), 1.0 - smoothstep(-0.12, -0.02, d));   // afterglow
    dayCol *= sunTint;
    // Night: the free night imagery (Black Marble) is ~500 m a pixel, far too
    // coarse this low. It only says WHERE the lights are and how bright; the
    // lights themselves are drawn on the 10 m daytime picture's built-up
    // areas (bright, grey: streets, blocks, docks), so they follow the real
    // city. The rest is the daytime picture in faint blue moonlight.
    float dl = dot(day.rgb, vec3(0.299, 0.587, 0.114));
    float sat = max(max(day.r, day.g), day.b) - min(min(day.r, day.g), day.b);
    float bm = dot(night.rgb, vec3(0.3333));
    // Built-up land is busy at 10 m (streets, roofs, yards); fields, woods and
    // water are smooth. The local spread of brightness finds it; the pixels
    // brighter than their neighbours (streets, lit roofs) are the lights.
    vec2 tx = texel;
    float l1 = dot(texture2D(dayMap, duv + vec2(tx.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
    float l2 = dot(texture2D(dayMap, duv - vec2(tx.x, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
    float l3 = dot(texture2D(dayMap, duv + vec2(0.0, tx.y)).rgb, vec3(0.299, 0.587, 0.114));
    float l4 = dot(texture2D(dayMap, duv - vec2(0.0, tx.y)).rgb, vec3(0.299, 0.587, 0.114));
    float m = 0.25 * (l1 + l2 + l3 + l4);
    float spread = 0.25 * ((l1 - dl) * (l1 - dl) + (l2 - dl) * (l2 - dl) + (l3 - dl) * (l3 - dl) + (l4 - dl) * (l4 - dl));
    // Clouds, snow and glaciers (white, and busy at their edges) are not city:
    // very bright pixels are left out, or they lit up as glowing blobs.
    float built = smoothstep(0.0006, 0.006, spread) * (1.0 - smoothstep(0.10, 0.24, sat)) * smoothstep(0.08, 0.2, dl)
                * (1.0 - smoothstep(0.42, 0.70, dl));
    float spark = smoothstep(0.02, 0.12, dl - m);
    float gate = smoothstep(0.10, 0.60, bm);
    float lit = gate * built * (0.30 + 1.2 * spark);
    float hot = gate * smoothstep(0.25, 0.8, bm) * built * spark * spark;
    vec3 lights = vec3(1.0, 0.36, 0.07) * pow(lit, 1.2) * nightK.x + vec3(1.0, 0.78, 0.45) * hot * nightK.y
                + vec3(1.0, 0.36, 0.08) * gate * gate * 0.02 * (0.15 + 0.85 * smoothstep(0.0, 0.6, built));   // a faint haze on the built-up parts only (the night map is 600 m a pixel: soft)
    vec3 nightCol = day.rgb * vec3(0.035, 0.050, 0.085) * nightK.z + lights * lightDetail
                  + pow(night.rgb, vec3(2.0)) * vec3(1.0, 0.72, 0.45) * nightK.w;   // a faint glow over the lit area
    // High up the street-level lights are too fine to show: there the night map's
    // own glow (in the globe's orange) carries the lights, so the globe's
    // lights flow straight into the close-up's as the camera comes down. The
    // coarse outer rings use it at any height.
    float camAltKm = max(length(cameraPosition) - 1.0, 1e-5) * 6371.0;
    float mapLights = max((1.0 - lightDetail) * 0.55, smoothstep(log(150.0), log(1200.0), log(camAltKm)));
    nightCol += pow(night.rgb, vec3(1.6)) * vec3(1.0, 0.62, 0.29) * 1.1 * mapLights;
    // Dusk: the lights come on area by area (each neighbourhood at its own sun
    // height, from 3 deg above the horizon to 7 deg below; irregular patches
    // from smooth noise, ~2 km and ~400 m) and show over the last of the
    // daylight instead of only fading in with the dark.
    vec3 wp = vWorldPos * 6371.0;                                       // km
    float bh = clamp((0.62 * vnoise3(wp / 2.2) + 0.38 * vnoise3(wp / 0.4 + 17.0) - 0.5) * 1.6 + 0.5, 0.0, 1.0);
    float th = mix(0.05, -0.12, bh);
    float on = 1.0 - smoothstep(th - 0.012, th + 0.012, d);
    nightCol = day.rgb * vec3(0.035, 0.050, 0.085) * nightK.z + (nightCol - day.rgb * vec3(0.035, 0.050, 0.085) * nightK.z) * on;
    float dayMix = smoothstep(-0.16, 0.14, d);
    vec3 col = mix(nightCol, dayCol, dayMix);
    col += lights * lightDetail * on * dayMix * 0.55 * (1.0 - smoothstep(0.02, 0.14, d));   // switched-on lights in the twilight
    float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
    col += vec3(0.38, 0.62, 1.0) * fres * (0.04 + 0.68 * smoothstep(-0.25, 0.5, d));
    // Sun glitter on water (dark, bluish, smooth in the daytime picture): each
    // few tens of metres of the surface tilted a little by moving noise, so the
    // waves sparkle along the sun's reflection.
    if (glitter.y > 0.0 && d > 0.0) {
      float water = (1.0 - smoothstep(0.03, 0.08, dl)) * smoothstep(-0.01, 0.03, day.b - day.r) * (1.0 - smoothstep(0.0004, 0.003, spread));
      // ... and only out on the sea (the land/sea map), never on dark bluish land
      vec3 gp = normalize(vWorldPos);
      vec2 seaUv = vec2(atan(-gp.z, gp.x) / 6.2831853 + 0.5, 0.5 - asin(clamp(gp.y, -1.0, 1.0)) / 3.1415927);
      water *= smoothstep(0.4, 0.8, texture2D(seaMap, seaUv).r);
      vec3 H = normalize(normalize(sunDir) + viewDir);
      float path = max(dot(n, H), 0.0);
      if (water > 0.01 && path > 0.9) {
        vec3 q = wp * 30.0;                                             // ~33 m cells
        vec3 tilt = vec3(vnoise3(q + vec3(0.0, 0.0, glitter.x * 1.3)), vnoise3(q.yzx + vec3(5.2, 1.3, glitter.x * 1.1)),
                         vnoise3(q.zxy + vec3(2.7, 8.1, glitter.x * 1.5))) - 0.5;
        float facet = max(dot(normalize(n + 0.12 * tilt), H), 0.0);
        float sparkle = pow(facet, 1400.0) * 6.0 + pow(path, 220.0) * 0.25;
        col += sunTint * vec3(1.0, 0.96, 0.88) * sparkle * water * dayMix * glitter.y;
      }
    }
    float a = mix(night.a, day.a, dayMix);
    float e = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
    a *= smoothstep(0.0, 0.2, e) * fade;
    gl_FragColor = vec4(col, a);
    vec3 untoned = gl_FragColor.rgb;
    #include <tonemapping_fragment>
    gl_FragColor.rgb = mix(untoned, gl_FragColor.rgb, dayMix);
    #include <colorspace_fragment>
    // From the globe into the close-up without a jump: high up, the daytime
    // picture is graded to the globe's own look there (its dim, earthy colours
    // and dark seas: 35 % saturation, gains 0.59 / 0.51 / 0.31 -- fitted to
    // the globe at Tokyo, Hong Kong, Sydney and Bangkok, rms 12/255), and it
    // eases into its own colours evenly over the descent (GRADE.w: how far
    // through it, in time -- by height it would rush through the middle).
    float gradeK = GRADE.x * (1.0 - smoothstep(0.25, 1.0, GRADE.w)) * dayMix;
    vec3 gc = gl_FragColor.rgb;
    float gl = dot(gc, vec3(0.299, 0.587, 0.114));
    vec3 globeLook = (vec3(gl) + 0.35 * (gc - gl)) * vec3(0.587, 0.513, 0.306) + vec3(2.1, 4.8, 6.8) / 255.0;
    gl_FragColor.rgb = mix(gc, globeLook, gradeK);
  }`,ba={value:new qe(1,0,0,0)},El={value:new ae(0,1)},Tl={value:(()=>{let n=new _n(new Uint8Array([255]),1,1,Hi);return n.needsUpdate=!0,n})()},Al={value:new qe(3.6,2.2,.22,0)},mg=(n,e)=>({...n,maxZoom:Math.min(n.maxZoom,Math.max(1,e-3))}),Xu=null;function fg(n,e){if(Xu)return;let t=new _n(new Uint8Array([0,0,0,255]),1,1);t.needsUpdate=!0,Xu=new Ze({uniforms:{dayMap:{value:t},nightMap:{value:t},dayXf:{value:new qe(0,0,1,1)},nightXf:{value:new qe(0,0,1,1)},sunDir:{value:new S(1,0,0)},fade:{value:0},nightK:Al,GRADE:ba,glitter:El,seaMap:Tl,lightDetail:{value:1},sink:{value:0},texel:{value:new ae(1,1)}},vertexShader:dg,fragmentShader:pg,transparent:!0,depthWrite:!0,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4});let i=ug(10,500,380,1,2);i.setAttribute("sinkK",new Ee(new Float32Array(i.attributes.position.count),1));let r=new xn;r.add(new Ke(i,Xu)),n.compile(r,e)}function $_(n,e){let t=[],i=Math.max(.2,Math.cos(n.lat*Math.PI/180));for(let r of Yu){let a=Math.min(e.day.maxZoom,Math.round(Math.log2(sg*i*r.n/r.extentKm))),s=Math.round(og(n.lon,a)-r.n/2),o=Math.round(lg(n.lat,a)-r.n/2);for(let l of[e.day,e.night,e.terrain&&mg(e.terrain,a)]){if(!l)continue;let c=Math.min(a,l.maxZoom),h=2**(a-c);for(let u=Math.floor(o/h);u<=Math.floor((o+r.n-1)/h);u++)if(!(u<0||u>=2**c))for(let d=Math.floor(s/h);d<=Math.floor((s+r.n-1)/h);d++)t.push(Ku(l,c,d,u))}}return t}async function gg(n,e,t=()=>{},i=8){var s,o;if(Sl){let l=await fetch("https://tiles.app.local/status").then(c=>c.json()).catch(()=>null);if((l==null?void 0:l.pack)>0){t(n.length,n.length);return}}let r=Sl?{match:async()=>null,put:async()=>{}}:await cg();if(!r)return;(o=(s=navigator.storage)==null?void 0:s.persist)==null||o.call(s).catch(()=>{});let a=0;for(let l of n){let c=[...new Set($_(l,e))],h=0,u=async()=>{for(;h<c.length;){let d=c[h++];try{if(!await r.match(d)){let p=await fetch(d,{mode:"cors"});p.ok&&await r.put(d,p)}}catch{}}};await Promise.all(Array.from({length:i},u)),t(++a,n.length)}}var bl=class{constructor(e,t,i,r=8,a=null){this.scene=e,this.renderer=a,this.queue=[],this.sun=t,this.cfg=i,this.maxAniso=r,this.group=null,this.city=null}prepare(e){if(this.city===e)return;this.dispose(),this.city=e,this.group=new tn;let t=[];this.isReady=!1;let i=Math.max(.2,Math.cos(e.lat*Math.PI/180)),r=Yu.map(s=>{let o=Math.min(this.cfg.day.maxZoom,Math.round(Math.log2(sg*i*s.n/s.extentKm)));return{z:o,x0:Math.round(og(e.lon,o)-s.n/2),y0:Math.round(lg(e.lat,o)-s.n/2),n:s.n}});this.levels=Yu.map((s,o)=>{var f;let{z:l,x0:c,y0:h}=r[o],u=this.tileTexture(this.cfg.day,l,c,h,s.n),d=this.tileTexture(this.cfg.night,l,c,h,s.n);t.push(u.job);let p=new Ze({uniforms:{dayMap:{value:u.t},nightMap:{value:d.t},dayXf:{value:u.xf},nightXf:{value:d.xf},sunDir:this.sun,fade:{value:0},nightK:Al,GRADE:ba,glitter:El,seaMap:Tl,lightDetail:{value:(f=s.lightDetail)!=null?f:1},sink:{value:0},texel:{value:new ae(1/u.w,1/u.h)}},vertexShader:dg,fragmentShader:pg,transparent:!0,depthWrite:!0,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1-o,polygonOffsetUnits:-4*(o+1)}),m=ug(l,c,h,s.n,s.seg);m.setAttribute("sinkK",new Ee(Y_(s.seg,{z:l,x0:c,y0:h,n:s.n},r[o+1]),1));let g=new Ke(m,p);if(this.cfg.terrain){let y=mg(this.cfg.terrain,l),x=2**(l-Math.min(l,y.maxZoom)),v=Math.min(2048,s.n*kn/x),_=document.createElement("canvas");_.width=_.height=v;let w=_.getContext("2d",{willReadFrequently:!0});w.imageSmoothingEnabled=!1;let M=this.city;X_((R,D,A,U)=>w.drawImage(R,D,A,U,U),v,y,l,c,h,s.n).then(()=>{this.city===M&&g.geometry===m&&K_(m,_,z_*o)})}return g.renderOrder=1+o,g.visible=!1,this.group.add(g),{...s,mesh:g,mat:p,tex:[u.t,d.t]}}),this.scene.add(this.group);let a=this.group;Promise.all(t).then(()=>{this.group===a&&(this.isReady=!0)})}settled(){var e;return!!this.levels&&this.isReady&&!this.queue.length&&!((e=this.dirty)!=null&&e.size)}tileTexture(e,t,i,r,a){let s=Math.min(t,e.maxZoom),o=2**(t-s),l=Math.floor(i/o),c=Math.floor((i+a-1)/o),h=Math.floor(r/o),u=Math.floor((r+a-1)/o),d=c-l+1,p=u-h+1,m=d*kn,g=p*kn,f=new _n(null,m,g,Zt,hn);f.source.dataReady=!1,f.colorSpace=Et,f.anisotropy=this.maxAniso,f.generateMipmaps=!0,f.minFilter=Yn,f.magFilter=st,f.needsUpdate=!0;let y=a/o/p,x=new qe((i/o-l)/d,1-(r/o-h)/p-y,a/o/d,y),v=this.group,_=[];for(let w=h;w<=u;w++)if(!(w<0||w>=2**s))for(let M=l;M<=c;M++)_.push(hg(Ku(e,s,M,w)).then(R=>createImageBitmap(R,{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"})).then(R=>{if(this.group!==v){R.close();return}this.queue.push({t:f,bmp:R,x:(M-l)*kn,y:(p-1-(w-h))*kn})}).catch(()=>{}));return{t:f,xf:x,w:m,h:g,job:Promise.all(_)}}update(e,t){var r,a;if(!this.levels)return 0;if(this.queue.length&&this.renderer){let s=this.renderer,o=s.getContext(),l=performance.now(),c=0;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);let h=(r=this.dirty)!=null?r:this.dirty=new Map;for(;this.queue.length&&c<6&&(c<2||performance.now()-l<1.5);){let u=this.queue.shift();c++,u.t.userData.ready||(s.initTexture(u.t),u.t.userData.ready=!0),s.state.bindTexture(o.TEXTURE_2D,s.properties.get(u.t).__webglTexture),o.texSubImage2D(o.TEXTURE_2D,0,u.x,u.y,kn,kn,o.RGBA,o.UNSIGNED_BYTE,u.bmp),u.bmp.close(),h.has(u.t)||h.set(u.t,performance.now())}s.state.unbindTexture()}if((a=this.dirty)!=null&&a.size&&this.renderer){let s=this.renderer,o=s.getContext(),l=performance.now();for(let[c,h]of this.dirty){let u=this.queue.some(d=>d.t===c);if(!(u&&(!this.shown||l-h<300))){s.state.bindTexture(o.TEXTURE_2D,s.properties.get(c).__webglTexture),o.generateMipmap(o.TEXTURE_2D),s.state.unbindTexture(),u?this.dirty.set(c,l):this.dirty.delete(c);break}}}let i=0;for(let s of this.levels){let o=Ut.smoothstep(s.showBelow-e,0,s.showBelow-s.fullBelow)*t;s.mat.uniforms.fade.value=o,s.mesh.visible=o>.002,s.mesh.visible&&(i=o),this.shown=this.shown||s.mesh.visible}return this.levels.forEach((s,o)=>{let l=this.levels[o+1];s.mat.uniforms.sink.value=l?Ut.smoothstep(l.mat.uniforms.fade.value,.97,1):0}),i}dispose(){var e;for(let t of this.queue)t.bmp.close();if(this.queue=[],(e=this.dirty)==null||e.clear(),this.shown=!1,!!this.group){this.scene.remove(this.group);for(let t of this.levels)t.mesh.geometry.dispose(),t.mat.dispose(),t.tex.forEach(i=>i.dispose());this.group=null,this.levels=null,this.city=null}}};var vg="lau.viewer-name";function Rl(){try{return(localStorage.getItem(vg)||"").trim()}catch{return""}}var Ls=null;function $u({overGlobe:n=!1}={}){if(Ls)return Ls;let e=document.createElement("div");e.className="name-screen"+(n?" over-globe":""),e.innerHTML=`
    <div class="name-card">
      <div class="clinic-mark"></div>
      <h2>What's your name?</h2>
      <p>It will be shown in the top-left corner.</p>
      <input type="text" maxlength="32" spellcheck="false" autocomplete="off" placeholder="Type your name">
      <small>Press Enter to continue \xB7 Esc to skip</small>
    </div>`,document.body.appendChild(e);let t=e.querySelector("input"),i=e.querySelector(".clinic-mark");t.value=Rl();let r=()=>{i.textContent=(t.value.trim()||"?").charAt(0).toUpperCase()};r(),t.addEventListener("input",r),requestAnimationFrame(()=>{e.classList.add("on"),t.focus()});let a=()=>setTimeout(()=>t.focus(),0);return t.addEventListener("blur",a),Ls=new Promise(s=>{let o=l=>{if(t.removeEventListener("blur",a),l)try{localStorage.setItem(vg,l)}catch{}e.classList.remove("on"),setTimeout(()=>e.remove(),450),Ls=null,s(l||null)};t.addEventListener("keydown",l=>{l.key==="F11"||l.altKey&&l.key==="Enter"||(l.stopPropagation(),l.key==="Enter"?(l.preventDefault(),o(t.value.trim())):l.key==="Escape"&&(l.preventDefault(),o(null)))}),e.addEventListener("pointerdown",l=>l.stopPropagation())}),Ls}var Fe=[{name:"Bangkok",country:"Thailand",lat:13.75,lon:100.517,tz:"Asia/Bangkok"},{name:"Beijing",country:"China",lat:39.9042,lon:116.4074,tz:"Asia/Shanghai"},{name:"Berlin",country:"Germany",lat:52.52,lon:13.405,tz:"Europe/Berlin"},{name:"Buenos Aires",country:"Argentina",lat:-34.6037,lon:-58.3816,tz:"America/Argentina/Buenos_Aires"},{name:"Cairo",country:"Egypt",lat:30.0444,lon:31.2357,tz:"Africa/Cairo"},{name:"Chicago",country:"United States",lat:41.8781,lon:-87.6298,tz:"America/Chicago"},{name:"Dhaka",country:"Bangladesh",lat:23.8103,lon:90.4125,tz:"Asia/Dhaka"},{name:"Helsinki",country:"Finland",lat:60.1699,lon:24.9384,tz:"Europe/Helsinki"},{name:"Hong Kong",country:"China",lat:22.3193,lon:114.1694,tz:"Asia/Hong_Kong"},{name:"Johannesburg",country:"South Africa",lat:-26.2041,lon:28.0473,tz:"Africa/Johannesburg"},{name:"Lima",country:"Peru",lat:-12.0464,lon:-77.0428,tz:"America/Lima",news:"Lima Peru"},{name:"London",country:"United Kingdom",lat:51.5074,lon:-.1278,tz:"Europe/London"},{name:"Los Angeles",country:"United States",lat:34.0522,lon:-118.2437,tz:"America/Los_Angeles"},{name:"Mexico City",country:"Mexico",lat:19.4326,lon:-99.1332,tz:"America/Mexico_City"},{name:"Moscow",country:"Russia",lat:55.7522,lon:37.6322,tz:"Europe/Moscow"},{name:"New York",country:"United States",lat:40.71,lon:-74,tz:"America/New_York",news:"New York City"},{name:"Paris",country:"France",lat:48.8566,lon:2.3522,tz:"Europe/Paris"},{name:"San Francisco",country:"United States",lat:37.7749,lon:-122.4194,tz:"America/Los_Angeles"},{name:"Seoul",country:"South Korea",lat:37.5665,lon:126.978,tz:"Asia/Seoul"},{name:"Singapore",country:"Singapore",lat:1.3521,lon:103.8198,tz:"Asia/Singapore"},{name:"Sydney",country:"Australia",lat:-33.8688,lon:151.2093,tz:"Australia/Sydney"},{name:"Tehran",country:"Iran",lat:35.6962,lon:51.423,tz:"Asia/Tehran"},{name:"Tokyo",country:"Japan",lat:35.6833,lon:139.7667,tz:"Asia/Tokyo"},{name:"Washington",country:"United States",lat:38.9072,lon:-77.0369,tz:"America/New_York",news:"Washington DC"},{name:"Bucharest",country:"Romania",lat:44.4268,lon:26.1025,tz:"Europe/Bucharest"},{name:"Santiago",country:"Chile",lat:-33.4489,lon:-70.6693,tz:"America/Santiago",news:"Santiago Chile"},{name:"San Jose",country:"Costa Rica",lat:9.9281,lon:-84.0907,tz:"America/Costa_Rica",news:"San Jose Costa Rica"},{name:"Algiers",country:"Algeria",lat:36.7538,lon:3.0588,tz:"Africa/Algiers"},{name:"Riyadh",country:"Saudi Arabia",lat:24.7136,lon:46.6753,tz:"Asia/Riyadh"},{name:"Atlanta",country:"United States",lat:33.809,lon:-84.3548,tz:"America/New_York"},{name:"Houston",country:"United States",lat:29.7599,lon:-95.393,tz:"America/Chicago"},{name:"Edmonton",country:"Canada",lat:53.5461,lon:-113.4938,tz:"America/Edmonton"},{name:"Mogadishu",country:"Somalia",lat:2.0469,lon:45.3182,tz:"Africa/Mogadishu"},{name:"Barcelona",country:"Spain",lat:41.3874,lon:2.1686,tz:"Europe/Madrid",news:"Barcelona Spain"},{name:"Rio de Janeiro",country:"Brazil",lat:-22.9068,lon:-43.1729,tz:"America/Sao_Paulo"},{name:"Pyongyang",country:"North Korea",lat:39.0392,lon:125.7625,tz:"Asia/Pyongyang",news:"Pyongyang North Korea"},{name:"Vancouver",country:"Canada",lat:49.2827,lon:-123.1207,tz:"America/Vancouver",news:"Vancouver BC"},{name:"Toronto",country:"Canada",lat:43.6532,lon:-79.3832,tz:"America/Toronto"},{name:"Ottawa",country:"Canada",lat:45.4215,lon:-75.6972,tz:"America/Toronto",news:"Ottawa Canada"},{name:"Iqaluit",country:"Canada",lat:63.7467,lon:-68.517,tz:"America/Iqaluit",news:"Iqaluit Nunavut"},{name:"Bogota",country:"Colombia",lat:4.711,lon:-74.0721,tz:"America/Bogota",news:"Bogota Colombia"},{name:"Quito",country:"Ecuador",lat:-.1807,lon:-78.4678,tz:"America/Guayaquil",news:"Quito Ecuador"},{name:"Rome",country:"Italy",lat:41.9028,lon:12.4964,tz:"Europe/Rome",news:"Rome Italy"},{name:"Lagos",country:"Nigeria",lat:6.5244,lon:3.3792,tz:"Africa/Lagos",news:"Lagos Nigeria"},{name:"Accra",country:"Ghana",lat:5.6037,lon:-.187,tz:"Africa/Accra",news:"Accra Ghana"},{name:"Rabat",country:"Morocco",lat:34.0209,lon:-6.8416,tz:"Africa/Casablanca",news:"Rabat Morocco"},{name:"Kyiv",country:"Ukraine",lat:50.4501,lon:30.5234,tz:"Europe/Kyiv",news:"Kyiv Ukraine"},{name:"Warsaw",country:"Poland",lat:52.2297,lon:21.0122,tz:"Europe/Warsaw",news:"Warsaw Poland"},{name:"Tbilisi",country:"Georgia",lat:41.7151,lon:44.8271,tz:"Asia/Tbilisi",news:"Tbilisi Georgia"},{name:"Damascus",country:"Syria",lat:33.5138,lon:36.2765,tz:"Asia/Damascus",news:"Damascus Syria"},{name:"Gaza",country:"Palestine",lat:31.5017,lon:34.4668,tz:"Asia/Gaza"},{name:"Mecca",country:"Saudi Arabia",lat:21.3891,lon:39.8579,tz:"Asia/Riyadh",news:"Mecca Saudi Arabia"},{name:"Medina",country:"Saudi Arabia",lat:24.5247,lon:39.5692,tz:"Asia/Riyadh",news:"Medina Saudi Arabia"},{name:"Dakar",country:"Senegal",lat:14.7167,lon:-17.4677,tz:"Africa/Dakar",news:"Dakar Senegal"},{name:"Bamako",country:"Mali",lat:12.6392,lon:-8.0029,tz:"Africa/Bamako",news:"Bamako Mali"},{name:"Abidjan",country:"C\xF4te d'Ivoire",lat:5.36,lon:-4.0083,tz:"Africa/Abidjan",news:"Abidjan Ivory Coast"},{name:"Monrovia",country:"Liberia",lat:6.3156,lon:-10.8074,tz:"Africa/Monrovia",news:"Monrovia Liberia"},{name:"Kinshasa",country:"DR Congo",lat:-4.4419,lon:15.2663,tz:"Africa/Kinshasa",news:"Kinshasa Congo"},{name:"Bangui",country:"Central African Republic",lat:4.3947,lon:18.5582,tz:"Africa/Bangui",news:"Bangui Central African Republic"},{name:"N'Djamena",country:"Chad",lat:12.1348,lon:15.0557,tz:"Africa/Ndjamena",news:"NDjamena Chad"},{name:"Yaounde",country:"Cameroon",lat:3.848,lon:11.5021,tz:"Africa/Douala",news:"Yaounde Cameroon"},{name:"Tripoli",country:"Libya",lat:32.8872,lon:13.1913,tz:"Africa/Tripoli",news:"Tripoli Libya"},{name:"Tunis",country:"Tunisia",lat:36.8065,lon:10.1815,tz:"Africa/Tunis",news:"Tunis Tunisia"},{name:"Sanaa",country:"Yemen",lat:15.3694,lon:44.191,tz:"Asia/Aden",news:"Sanaa Yemen"},{name:"Dubai",country:"United Arab Emirates",lat:25.2048,lon:55.2708,tz:"Asia/Dubai"},{name:"Muscat",country:"Oman",lat:23.588,lon:58.3829,tz:"Asia/Muscat",news:"Muscat Oman"},{name:"Khartoum",country:"Sudan",lat:15.5007,lon:32.5599,tz:"Africa/Khartoum",news:"Khartoum Sudan"},{name:"Addis Ababa",country:"Ethiopia",lat:9.03,lon:38.74,tz:"Africa/Addis_Ababa"},{name:"Dar es Salaam",country:"Tanzania",lat:-6.7924,lon:39.2083,tz:"Africa/Dar_es_Salaam",news:"Dar es Salaam Tanzania"},{name:"Nairobi",country:"Kenya",lat:-1.2921,lon:36.8219,tz:"Africa/Nairobi",news:"Nairobi Kenya"},{name:"Maputo",country:"Mozambique",lat:-25.9692,lon:32.5732,tz:"Africa/Maputo",news:"Maputo Mozambique"},{name:"Antananarivo",country:"Madagascar",lat:-18.8792,lon:47.5079,tz:"Indian/Antananarivo",news:"Antananarivo Madagascar"},{name:"Wellington",country:"New Zealand",lat:-41.2865,lon:174.7762,tz:"Pacific/Auckland",news:"Wellington New Zealand"},{name:"Manila",country:"Philippines",lat:14.5995,lon:120.9842,tz:"Asia/Manila",news:"Manila Philippines"},{name:"Port Moresby",country:"Papua New Guinea",lat:-9.4438,lon:147.1803,tz:"Pacific/Port_Moresby",news:"Port Moresby Papua New Guinea"},{name:"Winnipeg",country:"Canada",lat:49.8951,lon:-97.1384,tz:"America/Winnipeg"},{name:"Regina",country:"Canada",lat:50.4452,lon:-104.6189,tz:"America/Regina",news:"Regina Saskatchewan"},{name:"Halifax",country:"Canada",lat:44.6488,lon:-63.5752,tz:"America/Halifax",news:"Halifax Nova Scotia"},{name:"St. John's",country:"Canada",lat:47.5615,lon:-52.7126,tz:"America/St_Johns",news:"St. John's Newfoundland"},{name:"Whitehorse",country:"Canada",lat:60.7212,lon:-135.0568,tz:"America/Whitehorse",news:"Whitehorse Yukon"},{name:"Yellowknife",country:"Canada",lat:62.454,lon:-114.3718,tz:"America/Edmonton"},{name:"Seattle",country:"United States",lat:47.6062,lon:-122.3321,tz:"America/Los_Angeles"},{name:"Salem",country:"United States",lat:44.9429,lon:-123.0351,tz:"America/Los_Angeles",news:"Salem Oregon"},{name:"Boise",country:"United States",lat:43.615,lon:-116.2023,tz:"America/Boise",news:"Boise Idaho"},{name:"Las Vegas",country:"United States",lat:36.1699,lon:-115.1398,tz:"America/Los_Angeles"},{name:"Salt Lake City",country:"United States",lat:40.7608,lon:-111.891,tz:"America/Denver"},{name:"Santa Fe",country:"United States",lat:35.687,lon:-105.9378,tz:"America/Denver",news:"Santa Fe New Mexico"},{name:"Phoenix",country:"United States",lat:33.4484,lon:-112.074,tz:"America/Phoenix",news:"Phoenix Arizona"},{name:"Helena",country:"United States",lat:46.5891,lon:-112.0391,tz:"America/Denver",news:"Helena Montana"},{name:"Bismarck",country:"United States",lat:46.8083,lon:-100.7837,tz:"America/Chicago",news:"Bismarck North Dakota"},{name:"Pierre",country:"United States",lat:44.3683,lon:-100.351,tz:"America/Chicago",news:"Pierre South Dakota"},{name:"Lincoln",country:"United States",lat:40.8136,lon:-96.7026,tz:"America/Chicago",news:"Lincoln Nebraska"},{name:"Minneapolis",country:"United States",lat:44.9778,lon:-93.265,tz:"America/Chicago"},{name:"Caracas",country:"Venezuela",lat:10.4806,lon:-66.9036,tz:"America/Caracas",news:"Caracas Venezuela"},{name:"La Paz",country:"Bolivia",lat:-16.4897,lon:-68.1193,tz:"America/La_Paz",news:"La Paz Bolivia"},{name:"Lisbon",country:"Portugal",lat:38.7223,lon:-9.1393,tz:"Europe/Lisbon",news:"Lisbon Portugal"},{name:"Istanbul",country:"T\xFCrkiye",lat:41.0082,lon:28.9784,tz:"Europe/Istanbul"},{name:"Athens",country:"Greece",lat:37.9838,lon:23.7275,tz:"Europe/Athens",news:"Athens Greece"},{name:"Budapest",country:"Hungary",lat:47.4979,lon:19.0402,tz:"Europe/Budapest"},{name:"Vienna",country:"Austria",lat:48.2082,lon:16.3738,tz:"Europe/Vienna",news:"Vienna Austria"},{name:"Monaco",country:"Monaco",lat:43.7384,lon:7.4246,tz:"Europe/Monaco"},{name:"Copenhagen",country:"Denmark",lat:55.6761,lon:12.5683,tz:"Europe/Copenhagen"},{name:"Stockholm",country:"Sweden",lat:59.3293,lon:18.0686,tz:"Europe/Stockholm"},{name:"Oslo",country:"Norway",lat:59.9139,lon:10.7522,tz:"Europe/Oslo",news:"Oslo Norway"},{name:"Sofia",country:"Bulgaria",lat:42.6977,lon:23.3219,tz:"Europe/Sofia",news:"Sofia Bulgaria"},{name:"Minsk",country:"Belarus",lat:53.9006,lon:27.559,tz:"Europe/Minsk",news:"Minsk Belarus"},{name:"Delhi",country:"India",lat:28.6139,lon:77.209,tz:"Asia/Kolkata"},{name:"Mumbai",country:"India",lat:19.076,lon:72.8777,tz:"Asia/Kolkata"},{name:"Kabul",country:"Afghanistan",lat:34.5553,lon:69.2075,tz:"Asia/Kabul",news:"Kabul Afghanistan"},{name:"Kandahar",country:"Afghanistan",lat:31.6289,lon:65.7372,tz:"Asia/Kabul",news:"Kandahar Afghanistan"},{name:"Islamabad",country:"Pakistan",lat:33.6844,lon:73.0479,tz:"Asia/Karachi"},{name:"Karachi",country:"Pakistan",lat:24.8607,lon:67.0011,tz:"Asia/Karachi"},{name:"Colombo",country:"Sri Lanka",lat:6.9271,lon:79.8612,tz:"Asia/Colombo",news:"Colombo Sri Lanka"},{name:"Phnom Penh",country:"Cambodia",lat:11.5564,lon:104.9282,tz:"Asia/Phnom_Penh",news:"Phnom Penh Cambodia"},{name:"Hanoi",country:"Vietnam",lat:21.0278,lon:105.8342,tz:"Asia/Ho_Chi_Minh",news:"Hanoi Vietnam"},{name:"Ulaanbaatar",country:"Mongolia",lat:47.8864,lon:106.9057,tz:"Asia/Ulaanbaatar",news:"Ulaanbaatar Mongolia"},{name:"Taipei",country:"Taiwan",lat:25.033,lon:121.5654,tz:"Asia/Taipei",news:"Taipei Taiwan"},{name:"Aleppo",country:"Syria",lat:36.2021,lon:37.1343,tz:"Asia/Damascus",news:"Aleppo Syria"},{name:"Baghdad",country:"Iraq",lat:33.3152,lon:44.3661,tz:"Asia/Baghdad",news:"Baghdad Iraq"},{name:"Kathmandu",country:"Nepal",lat:27.7172,lon:85.324,tz:"Asia/Kathmandu",news:"Kathmandu Nepal"},{name:"Tashkent",country:"Uzbekistan",lat:41.2995,lon:69.2401,tz:"Asia/Tashkent",news:"Tashkent Uzbekistan"},{name:"Bosaso",country:"Somalia",lat:11.2842,lon:49.1816,tz:"Africa/Mogadishu",news:"Bosaso Somalia"},{name:"Hargeisa",country:"Somaliland",lat:9.56,lon:44.065,tz:"Africa/Mogadishu",news:"Hargeisa Somaliland"},{name:"Reykjav\xEDk",country:"Iceland",lat:64.1466,lon:-21.9426,tz:"Atlantic/Reykjavik",news:"Reykjavik Iceland"},{name:"Honolulu",country:"United States",lat:21.3069,lon:-157.8583,tz:"Pacific/Honolulu",news:"Honolulu Hawaii"},{name:"Miami",country:"United States",lat:25.7617,lon:-80.1918,tz:"America/New_York",news:"Miami Florida"},{name:"Kingston",country:"Jamaica",lat:17.9714,lon:-76.7931,tz:"America/Jamaica",news:"Kingston Jamaica"},{name:"Santo Domingo",country:"Dominican Republic",lat:18.4861,lon:-69.9312,tz:"America/Santo_Domingo",news:"Santo Domingo Dominican Republic"},{name:"Bras\xEDlia",country:"Brazil",lat:-15.7939,lon:-47.8828,tz:"America/Sao_Paulo",news:"Brasilia Brazil"},{name:"Jakarta",country:"Indonesia",lat:-6.2088,lon:106.8456,tz:"Asia/Jakarta",news:"Jakarta Indonesia"},{name:"Mal\xE9",country:"Maldives",lat:4.1755,lon:73.5093,tz:"Indian/Maldives",news:"Male Maldives"},{name:"Perth",country:"Australia",lat:-31.9523,lon:115.8613,tz:"Australia/Perth",news:"Perth Western Australia"}];function Zu(n,e=new Date,t=!1){let i=new Intl.DateTimeFormat("en-US",{timeZone:n,hour:"2-digit",minute:"2-digit",hourCycle:t?"h23":"h12"}).formatToParts(e),r=a=>{var s,o;return(o=(s=i.find(l=>l.type===a))==null?void 0:s.value)!=null?o:""};return t?`${r("hour").padStart(2,"0")}: ${r("minute")}`:`${r("hour").padStart(2,"0")}: ${r("minute")} ${r("dayPeriod").toUpperCase()}`}async function xg(n="data/wlop/wlop.ps3.conf"){let e={};try{let t=await fetch(n);if(!t.ok)return e;let i=await t.text(),r="root";e[r]={};for(let a of i.split(/\r?\n/)){let s=a.trim();if(!s||s.startsWith("#"))continue;let o=s.match(/^\[([^\]]+)\]$/);if(o){r=o[1],e[r]=e[r]||{};continue}let l=s.indexOf("=");if(l>0){let c=s.slice(0,l).trim(),h=s.slice(l+1).split("#")[0].trim();h.startsWith('"')&&h.endsWith('"')?h=h.slice(1,-1):h==="true"?h=!0:h==="false"?h=!1:Number.isNaN(Number(h))||(h=Number(h)),e[r][c]=h}}}catch(t){console.warn("wlop.ps3.conf load skipped:",t)}return e}async function _g(n="data/city_info_header.xml"){var t,i;let e={title:"city_info.xml",ttl:90,pics:{},copyrights:[],texts:{}};try{let r=await fetch(n);if(!r.ok)return e;let a=await r.text()+"</channel></rss>",s=new DOMParser().parseFromString(a,"text/xml");e.title=((t=s.querySelector("title"))==null?void 0:t.textContent)||e.title,e.ttl=Number(((i=s.querySelector("ttl"))==null?void 0:i.textContent)||90);for(let o of s.getElementsByTagName("live:pic"))e.pics[o.getAttribute("id")]=o.getAttribute("url");for(let o of s.getElementsByTagName("live:copyright"))e.copyrights.push(o.getAttribute("pic"));for(let o of s.getElementsByTagName("live:text"))e.texts[o.getAttribute("id")]=o.textContent}catch(r){console.warn("city_info_header.xml load skipped:",r)}return e}async function Mg(n="data/city_clock.txt"){let e=[];try{let t=await fetch(n);if(!t.ok)return e;let i=(await t.text()).split(/\r?\n/).filter(r=>r.trim().length>0);for(let r=0;r<i.length;r+=2){let a=i[r].split(/\t|\s+(.+)/),s=(i[r+1]||"").split(/\t|\s+(.+)/),o=parseInt(a[0],10)||0,l=i[r].replace(/^-?\d+\s+/,"").trim(),c=(i[r+1]?i[r+1].replace(/^-?\d+\s+/,""):l).trim();e.push({offsetSeconds:o,celsius:l,fahrenheit:c})}}catch(t){console.warn("city_clock.txt load skipped:",t)}return e}async function wg(n="data/life_info/live/en/default_city_info.xml"){var t,i,r,a,s,o,l,c,h;let e={cities:[],quakes:[],storms:[],iss:null};try{let u=await fetch(n);if(!u.ok)return e;let d=await u.text(),m=[...new DOMParser().parseFromString(d,"text/xml").getElementsByTagName("item")];for(let g of m){let f=g.getElementsByTagName("live:panel")[0],y=(f==null?void 0:f.getAttribute("pic"))||"",x=((i=(t=f==null?void 0:f.getElementsByTagName("live:name")[0])==null?void 0:t.textContent)==null?void 0:i.trim())||"",v=((a=(r=f==null?void 0:f.querySelector('subname[pattern="celsius"]'))==null?void 0:r.textContent)==null?void 0:a.trim())||"",_=((o=(s=f==null?void 0:f.querySelector('subname[pattern="fahrenheit"]'))==null?void 0:s.textContent)==null?void 0:o.trim())||"",w=((h=(c=(l=g.getElementsByTagName("georss:point")[0])==null?void 0:l.textContent)==null?void 0:c.trim())==null?void 0:h.split(/\s+/))||[],M=parseFloat(w[0]),R=parseFloat(w[1]),D=[...g.getElementsByTagName("live:item")].map(L=>L.textContent.trim()),A=g.getElementsByTagName("live:media")[0],U=g.getElementsByTagName("live:thumbnail")[0],I={name:x,lat:M,lon:R,pic:y,subC:v,subF:_,headlines:D,mediaUrl:(A==null?void 0:A.getAttribute("url"))||null,thumbUrl:(U==null?void 0:U.getAttribute("url"))||null};y==="quake"?e.quakes.push(I):y==="storm"?e.storms.push(I):y==="iss"?e.iss=I:!Number.isNaN(M)&&!Number.isNaN(R)&&e.cities.push(I)}}catch(u){console.warn("default_city_info.xml load skipped:",u)}return e}var yg={4:2.5,5:2.5,6:3.6},Cl=class{constructor(){this.slots=new Map,this.volume=.55,this.jingles=1,this.ctx=null}setJingles(e){var t,i;this.jingles=e;for(let[r,a]of this.slots)(t=a.gain)!=null&&t.gain&&(a.gain.gain.value=((i=yg[r])!=null?i:1)*e)}boost(e,t){var r,a;let i=yg[t];if(!(!i||e.gain)){try{(r=this.ctx)!=null||(this.ctx=new AudioContext);let s=this.ctx.createMediaElementSource(e.audio);e.gain=this.ctx.createGain(),e.gain.gain.value=i*this.jingles,s.connect(e.gain).connect(this.ctx.destination)}catch(s){e.gain={failed:s}}((a=this.ctx)==null?void 0:a.state)==="suspended"&&this.ctx.resume().catch(()=>{})}}async load(e="data/soundeffect.xml",t="sfx/"){try{let i=await fetch(e);if(!i.ok)return;let r=new DOMParser().parseFromString(await i.text(),"text/xml");for(let a of r.querySelectorAll("slot")){let s=Number(a.getAttribute("num")),o=a.getAttribute("loop")==="1",l=a.getAttribute("filename");if(!l||l==="silence_loop.wav")continue;let c=new Audio(`${t}${l}`);c.loop=o,c.volume=this.volume,this.slots.set(s,{audio:c,loop:o,filename:l,playing:!1})}}catch(i){console.warn("soundeffect.xml load skipped:",i)}}play(e){let t=this.slots.get(e);if(t)if(t.loop)this.boost(t,e),t.playing||(t.playing=!0,t.audio.currentTime=0,t.audio.play().catch(()=>{}));else{let i=t.audio.cloneNode();i.volume=this.volume,i.play().catch(()=>{})}}stop(e){let t=this.slots.get(e);!t||!t.playing||(t.playing=!1,t.audio.pause(),t.audio.currentTime=0)}};var Hn=new Cl,ai={optOpen:0,optClose:1,optMove:2,optSelect:3,zoomIn:4,zoomOut:5,rotate:6,cityChange:7,view:8,error:9},sn=n=>{var e,t,i;((e=W.sfx)==null?void 0:e.enabled)!==!1&&(Hn.volume=(i=(t=W.sfx)==null?void 0:t.volume)!=null?i:.55,Hn.play(ai[n]))},Il={dir:0,until:0};function Dl(n,e=150){Il.dir=n,Il.until=performance.now()+e}function Ds(n){var t,i;let e=n<Il.until&&((i=(t=W.sfx)==null?void 0:t.jingles)!=null?i:1)>0?Il.dir:0;e!==Ds.cur&&(Ds.cur>0?Hn.stop(ai.zoomOut):Ds.cur<0&&Hn.stop(ai.zoomIn),e&&(Sd(),Hn.play(e>0?ai.zoomOut:ai.zoomIn)),Ds.cur=e)}function Sd(){var n,e;for(let t of[ai.zoomIn,ai.zoomOut,ai.rotate]){let i=Hn.slots.get(t);i&&(i.audio.volume=.55)}Hn.setJingles((e=(n=W.sfx)==null?void 0:n.jingles)!=null?e:1)}var jg={until:0};function Hl(n=150){jg.until=performance.now()+n}function nd(n){var t,i;let e=n<jg.until&&((i=(t=W.sfx)==null?void 0:t.jingles)!=null?i:1)>0;e!==!!nd.cur&&(e?(Sd(),Hn.play(ai.rotate)):Hn.stop(ai.rotate),nd.cur=e)}var Ce=n=>document.getElementById(n),St=Math.PI/180,nt=(n,e,t=1)=>new S(...ji(n,e,t)),qg=Ce("globe"),Sg=new URLSearchParams(location.search).get("aa"),ze=new Ho({canvas:qg,alpha:!0,antialias:Sg?Sg!=="0":(+new URLSearchParams(location.search).get("rs")||1440)>=1440}),id=new URLSearchParams(location.search),Ju=[720,1080,1440,2160].includes(+id.get("rs"))?+id.get("rs"):1440,Z_=900,J_=()=>{var n;return Ju<=1080&&+((n=W.oldLook)!=null?n:1)>0?Math.min(Ju,Z_):Ju},Xg=()=>J_()/window.innerHeight,bg=+(id.get("fps")||W.maxFps||0),Qu=bg>=30?1e3/bg:0;ze.setPixelRatio(Xg());ze.outputColorSpace=Et;ze.toneMapping=cm;ze.toneMappingExposure=1.05;var qt=new xn,Gg,Pe=new $t((Gg=ot.fovY)!=null?Gg:45,1,.1,2e3),mn=null,Yg=W.showCityCard!==!1,Us=Yg?.12:0,Ra=Us,si={lat:36,lng:0,radius:1.65,firstDepartSeconds:3.65,anim:{start:20,finish:140,fromLngOffset:60,fromRadius:1.4,pitchDeg:-28.8,yawDeg:14.4}};function Kg(n){let e=si.anim,t=e.finish-e.start,i=ct(e.finish-n,0,t),r=Math.sin((1-i/t)*Math.PI/2);return{lat:si.lat,lng:si.lng+e.fromLngOffset*(1-r),r:e.fromRadius+(si.radius-e.fromRadius)*r,pitch:e.pitchDeg*St*(1-r),yaw:e.yawDeg*St*(1-r)}}function $g(n){Math.abs(n-Ra)<1e-4||(Ra=n,Vl())}function Vl(){let n=window.innerWidth,e=window.innerHeight;ze.setPixelRatio(Xg()),ze.setSize(n,e,!1);let t=ze.getDrawingBufferSize(new ae);mn==null||mn.resolution.value.set(t.x,t.y),Pe.aspect=n/e,Pe.setViewOffset(n,e,-n*Ra,0,n,e),Pe.updateProjectionMatrix()}window.addEventListener("resize",Vl);Vl();var bd=new ma;async function Eg(n){let e=await(await fetch(n)).arrayBuffer(),t=new DataView(e);if(t.getUint32(0,!0)!==827611204)throw new Error("not a DXT1 file: "+n);let i=t.getUint32(4,!0),r=t.getUint32(8,!0),a=new Uint8Array(e,16,i/4*(r/4)*8),s=new Go([{data:a,width:i,height:r}],i,r,Jr);return s.minFilter=st,s.magFilter=st,s.generateMipmaps=!1,s.wrapS=Zn,s.colorSpace=vn,s.flipY=!1,s.needsUpdate=!0,s}var Tg=!!ze.extensions.get("WEBGL_compressed_texture_s3tc"),Ed=ze.capabilities.getMaxAnisotropy();function Zg(n){return n.colorSpace=vn,n.wrapS=Zn,n.generateMipmaps=!1,n.minFilter=st,n.magFilter=st,n.anisotropy=1,n.needsUpdate=!0,n}var Jg=new tl;Jg.setOptions({imageOrientation:"flipY",premultiplyAlpha:"none"});function Ki(n){return new Promise((e,t)=>Jg.load(n,i=>{let r=new Pt(i);r.flipY=!1,r.colorSpace=Et,r.anisotropy=Ed,r.needsUpdate=!0,r.addEventListener("dispose",()=>{var a;return(a=i.close)==null?void 0:a.call(i)}),e(r)},void 0,t))}async function Q_(n){return`assets/earth/port-day-${String(n).padStart(2,"0")}.png`}var Ag={blur:0,gain:1},e1=1.55;async function t1(){try{if(ze.capabilities.maxTextureSize<16384)return null;let n=await fetch("assets/earth/night8k.r8");if(!n.ok)return null;let e=await n.arrayBuffer(),t=new DataView(e,0,16);if(String.fromCharCode(...new Uint8Array(e,0,8))!=="LAUNIGHT")return null;let i=t.getUint32(8,!0),r=t.getUint32(12,!0),a=new _n(new Uint8Array(e,16,i*r),i,r,Hi,hn);return a.flipY=!1,a.unpackAlignment=1,a.generateMipmaps=!0,a.minFilter=Yn,a.magFilter=st,a.wrapS=Zn,a.anisotropy=Math.min(8,Ed),a.needsUpdate=!0,a}catch(n){return console.warn("HD night lights:",n),null}}var rd=()=>W.nightTwinkle===!0,xt=(n,e=0,t=0,i=0)=>({value:new qe(n,e,t,i)}),xe={ColorMap:{value:null},NightMap:{value:null},CloudMap:{value:null},SpecularMap:{value:null},NoiseMap:{value:null},NoiseVol:{value:null},U_PInvWavelength:xt(5.602046,9.473285,19.6438),U_PInvWavelengthKr4PIplusKm4PI:xt(.3318164,.453435,.7729512),U_PKrESun:xt(.03749963),U_PKmESun:xt(.1859981),U_PScale:xt(20),U_PRayleighScaleDepth:xt(.06),U_PScaleOverRayleighScaleDepth:xt(333.3333),U_PointToLight:xt(1,0,0),U_g:xt(-.99),U_g2:xt(.9801),U_LightColor0:xt(10,10,10),U_Shininess:xt(64),U_OceanFresnel0:xt(.02040466),U_Specular:xt(.84,.8,.42),U_camera:xt(0,0,3,9),U_cloud:xt(0,0),U_slice:xt(0,0,1,1),U_nightLook:xt(Ag.blur,Ag.gain,0),U_lightTint:xt(1.25,.8,.37),U_glitter:xt(0,1),U_moon:xt(0,0,0,0),U_flashA:{value:Array.from({length:16},()=>new qe)},U_flashB:{value:Array.from({length:16},()=>new qe)},U_noise:xt(64,0),U_color:xt(1,1,1,1),sunDir:{value:new S(1,0,0)},globeFade:{value:1}};xe.U_PointToLight.value=xe.sunDir.value;var n1=`
  uniform vec4 U_PointToLight;
  varying highp vec4 tc0, tc4, tc5;
  void main() {
    vec3 n = vec3(-position.x, position.y, -position.z);   // console model space
    vec3 L = vec3(-U_PointToLight.x, U_PointToLight.y, -U_PointToLight.z);
    const vec3 t = vec3(0.0, 0.0, -1.0);
    float e = dot(n, t);
    vec3 row0, row1;
    if (abs(e) > 0.999999) {
      // Reflection path: x = the axis of n's smallest component.
      vec3 a = abs(n);
      vec3 x = a.x < a.y ? (a.x < a.z ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 0.0, 1.0))
                         : (a.y < a.z ? vec3(0.0, 1.0, 0.0) : vec3(0.0, 0.0, 1.0));
      vec3 u = x - n, v = x - t;
      float c1 = 2.0 / dot(u, u), c2 = 2.0 / dot(v, v), c3 = c1 * c2 * dot(u, v);
      row0 = vec3(1.0, 0.0, 0.0) - c1 * u.x * u - c2 * v.x * v + c3 * v.x * u;
      row1 = vec3(0.0, 1.0, 0.0) - c1 * u.y * u - c2 * v.y * v + c3 * v.y * u;
    } else {
      vec3 v = cross(n, t);
      float h = 1.0 / (1.0 + e);
      row0 = vec3(e + h * v.x * v.x, h * v.x * v.y - v.z, h * v.x * v.z + v.y);
      row1 = vec3(h * v.x * v.y + v.z, e + h * v.y * v.y, h * v.y * v.z - v.x);
    }
    tc0 = vec4(uv, 0.0, 1.0);
    tc4 = vec4(position, 1.0);
    tc5 = vec4(vec2(dot(row0, L), dot(row1, L)) * -0.001, 0.0, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,i1=`
  uniform vec4 U_camera;
  varying highp vec4 tc1, tc2, tc3;
  void main() {
    vec3 p = position;
    vec3 dir = normalize(p - U_camera.xyz);
    float b = dot(dir, U_camera.xyz) * 2.0;
    float c4 = (U_camera.w - 1.1025) * 4.0;
    float s = sqrt(max(b * b - c4, 0.0));
    float near = (-b - s) * 0.5;
    tc1 = vec4(dir * near + U_camera.xyz, 1.05);
    tc2 = vec4(dir, s * 0.2);
    tc3 = vec4(U_camera.xyz - p, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,r1=Promise.all(["ground","sky"].map(async n=>{let e=await fetch(`shaders/${n}.frag`);if(!e.ok)throw new Error(`Could not load the ${n} shader`);return e.text()})),Qg=new Ze({uniforms:xe,vertexShader:n1}),a1=new Ke(new un(1,512,384),Qg);qt.add(a1);var e0=new Ze({uniforms:xe,vertexShader:i1,side:il,transparent:!0,depthWrite:!1,blending:On,blendEquation:Mt,blendSrc:fr,blendDst:Rt,blendEquationAlpha:Mt,blendSrcAlpha:Bi,blendDstAlpha:Rt}),Ul=new Ke(new un(1.05,480,240),e0);qt.add(Ul);function s1(n=5e3){let e=new Float32Array(n*3),t=new Float32Array(n*3),i=new Float32Array(n),r=new Float32Array(n),a=new Float32Array(n),s=new Float32Array(n);for(let c=0;c<n;c++){let h=Math.random()*2-1,u=Math.random()*Math.PI*2,d=600,p=Math.sqrt(1-h*h);e.set([d*p*Math.cos(u),d*h,d*p*Math.sin(u)],c*3);let m=Math.random(),g=.78+Math.pow(Math.random(),3)*.42;t.set([(.75+.25*m)*g,(.82+.1*m)*g,(1-.2*m)*g],c*3),i[c]=.68+Math.pow(Math.random(),4)*1.18,r[c]=Math.random()*Math.PI*2,a[c]=.6+Math.random()*2.6,s[c]=.18+Math.random()*.22}let o=new tt;o.setAttribute("position",new $e(e,3)),o.setAttribute("color",new $e(t,3)),o.setAttribute("size",new $e(i,1)),o.setAttribute("phase",new $e(r,1)),o.setAttribute("speed",new $e(a,1)),o.setAttribute("flicker",new $e(s,1));let l=new Ze({uniforms:{time:{value:0},pixelRatio:{value:ze.getPixelRatio()}},vertexShader:`
      attribute float size; attribute float phase; attribute float speed; attribute float flicker; attribute vec3 color;
      uniform float time; uniform float pixelRatio;
      varying vec3 vColor; varying float vTw;
      void main() {
        vColor = color;
        float slowTwinkle = sin(time * speed + phase);
        float fastFlicker = sin(time * (speed * 3.17) + phase * 2.31);
        vTw = 0.92 + flicker * (0.72 * slowTwinkle + 0.28 * fastFlicker);
        gl_PointSize = size * pixelRatio;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec3 vColor; varying float vTw;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(vColor * vTw * a * 1.65, a);
      }`,blending:zi,transparent:!0,depthWrite:!1,toneMapped:!1});return new ua(o,l)}var Gl=s1();Gl.renderOrder=-900;qt.add(Gl);var t0=new Ze({uniforms:{time:{value:0}},vertexShader:"varying vec3 vDir; void main(){vDir=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
    varying vec3 vDir; uniform float time;
    float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
    float noise2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.0),f.x),f.y);}
    float fbm(vec2 p){float v=0.0,a=0.52;for(int i=0;i<5;i++){v+=a*noise2(p);p=mat2(1.62,1.18,-1.18,1.62)*p+17.1;a*=0.5;}return v;}
    void main(){
      vec3 d=normalize(vDir);vec2 uv=vec2(atan(d.z,d.x)/6.2831853+0.5,asin(clamp(d.y,-1.0,1.0))/3.14159265+0.5);
      vec2 q=uv*vec2(2.2,1.0),bd=normalize(vec2(1.0,0.42)),bn=vec2(-bd.y,bd.x);
      float along=dot(q-vec2(1.1,0.5),bd),across=dot(q-vec2(1.1,0.5),bn),n=fbm(q*5.5),width=0.15+0.05*n;
      float band=exp(-pow(abs(across)/width,2.0)),structure=mix(0.32,1.0,fbm(q*13.0+3.7));
      float dust=exp(-pow(abs(across+0.010+0.018*noise2(q*18.0))/0.030,2.0));
      float bulge=exp(-along*along/0.18-across*across/0.035);
      vec3 color=(vec3(0.32,0.38,0.56)*band*structure+vec3(0.46,0.36,0.30)*bulge*0.50)*(1.0-0.70*dust)*0.36;
      gl_FragColor=vec4(color,clamp(length(color)*2.8,0.0,0.46));
    }`,side:il,transparent:!0,blending:zi,depthWrite:!1,depthTest:!1,toneMapped:!1}),Hs=new Ke(new un(520,64,32),t0);Hs.rotation.set(.38,-.72,.18);Hs.renderOrder=-1e3;qt.add(Hs);Gl.visible=!1;Hs.visible=!1;mn={time:{value:0},resolution:{value:ze.getDrawingBufferSize(new ae)}};var Bn=new Ke(new yn(2,2),new Ze({uniforms:mn,vertexShader:"void main(){gl_Position=vec4(position.xy,1.0,1.0);}",fragmentShader:`
    uniform float time; uniform vec2 resolution;
    float hsh(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
    float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);float a=hsh(i),b=hsh(i+vec2(1,0)),c=hsh(i+vec2(0,1)),d=hsh(i+vec2(1,1));return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}
    float fbm(vec2 p){float v=0.0,a=0.5;for(int i=0;i<5;i++){v+=a*vn(p);p=p*2.03+17.1;a*=0.5;}return v;}
    vec3 milky(vec2 g){
      vec2 uv=g/720.0,dir=normalize(vec2(1.0,0.42)),nrm=vec2(-dir.y,dir.x),q=uv-vec2(0.10,0.18);
      float along=dot(q,dir),d=dot(q,nrm);
      float wob=(fbm(vec2(along*2.2,3.7))-0.5)*0.10;d+=wob;
      float w=0.15+0.05*fbm(vec2(along*3.1,9.2));float band=exp(-d*d/(w*w));
      float clouds=fbm(uv*5.0+vec2(3.1,7.7)),fine=fbm(uv*14.0+vec2(11.3,1.9));
      float dust=smoothstep(0.42,0.68,fbm(uv*6.5+vec2(5.5,2.2)))*exp(-d*d/(0.055*0.055));
      float bulge=0.55+0.45*exp(-(along-1.05)*(along-1.05)/0.18),core=exp(-d*d/(0.06*0.06));
      float glow=band*(0.30+0.70*clouds)*(0.75+0.5*fine)*(1.0-0.75*dust)*bulge;
      vec3 col=mix(vec3(0.55,0.62,0.88),vec3(1.0,0.86,0.68),core*bulge),o=col*glow*0.22;
      float cell=3.0;vec2 gg=g/cell,id=floor(gg),f=fract(gg);float hh=hsh(id+41.7);
      if(hh>0.975-0.10*band*(0.4+0.6*clouds)*(1.0-dust)){
        vec2 sp=vec2(hsh(id+3.1),hsh(id+8.3))*0.7+0.15;float dd=length(f-sp)*cell;
        o+=mix(vec3(0.8,0.85,1.0),vec3(1.0,0.9,0.8),hsh(id+5.5))*exp(-dd*dd/0.35)*(0.10+0.30*band);
      }
      return band<0.003?vec3(0):o;
    }
    vec3 starLayer(vec2 pos){
      vec3 add=vec3(0);float cells[2];cells[0]=9.0;cells[1]=23.0;
      for(int L=0;L<2;L++){
        float cell=cells[L];vec2 g=pos/cell+float(L)*17.31,id=floor(g),f=fract(g);float hh=hsh(id+float(L)*3.7);
        float threshold=L==0?0.93:0.80;if(hh<threshold)continue;
        vec2 sp=vec2(hsh(id+13.1),hsh(id+71.7))*0.7+0.15;float d=length((f-sp)*cell),r=(L==0?0.65:1.05)*0.5;
        float core=exp(-d*d/(r*r+0.15)),b=(L==0?0.65:1.4)*(0.4+0.6*hsh(id+3.3));
        float speed=0.6+2.6*hsh(id+5.9),ph=6.2832*hsh(id+9.1),tw1=0.5+0.5*sin(time*speed+ph),flick=0.65+0.35*sin(time*(7.0+5.0*hh)+ph*3.0);
        float k=mix(0.25,1.0,tw1*tw1)*mix(1.0,flick,step(0.6,hsh(id+2.2)));
        vec3 col=mix(vec3(0.75,0.82,1.0),vec3(1.0,0.92,0.80),hsh(id+7.7));add+=col*b*k*core;
      }return add;
    }
    uniform sampler2D milkyMap; uniform float milkyBake;
    void main(){
      vec2 guest=vec2(gl_FragCoord.x*1280.0/resolution.x,(resolution.y-gl_FragCoord.y)*720.0/resolution.y);
      if(milkyBake>0.5){gl_FragColor=vec4(milky(guest),1.0);return;}
      gl_FragColor=vec4(texture2D(milkyMap,gl_FragCoord.xy/resolution).rgb+starLayer(guest),1.0);
    }
  `,depthTest:!0,depthWrite:!1,toneMapped:!1}));Bn.frustumCulled=!1;Bn.renderOrder=1;qt.add(Bn);mn.milkyMap={value:null};mn.milkyBake={value:0};var _i=null,Rg=new xn,o1=new ki;function l1(){let n=ze.getDrawingBufferSize(new ae);if(_i&&_i.width===n.x&&_i.height===n.y)return;_i==null||_i.dispose(),_i=new Jt(n.x,n.y,{depthBuffer:!1,minFilter:Gt,magFilter:Gt}),mn.resolution.value.set(n.x,n.y);let e=Bn.parent;Rg.add(Bn),mn.milkyBake.value=1,Bn.material.depthTest=!1,ze.setRenderTarget(_i),ze.render(Rg,o1),ze.setRenderTarget(null),Bn.material.depthTest=!0,mn.milkyBake.value=0,e.add(Bn),mn.milkyMap.value=_i.texture}var c1=(()=>{let n=new Ke(new yn(2,2));n.frustumCulled=!1;let e=new xn;e.add(n);let t=new ki,i="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",r=(g,f)=>new Ze({vertexShader:i,fragmentShader:g,uniforms:f,depthTest:!1,depthWrite:!1,toneMapped:!1}),a=r(`uniform sampler2D t; varying vec2 vUv;
    void main(){ gl_FragColor = vec4(texture2D(t, vUv).rgb, 1.0); }`,{t:{value:null}}),s=r(`uniform sampler2D t; uniform vec2 dir; varying vec2 vUv;
    void main(){
      vec3 c = texture2D(t, vUv).rgb * 0.25;
      c += (texture2D(t, vUv + dir).rgb + texture2D(t, vUv - dir).rgb) * 0.15;
      c += (texture2D(t, vUv + dir * 2.0).rgb + texture2D(t, vUv - dir * 2.0).rgb) * 0.10;
      c += (texture2D(t, vUv + dir * 3.0).rgb + texture2D(t, vUv - dir * 3.0).rgb) * 0.08;
      c += (texture2D(t, vUv + dir * 4.0).rgb + texture2D(t, vUv - dir * 4.0).rgb) * 0.05;
      gl_FragColor = vec4(c, 1.0); }`,{t:{value:null},dir:{value:new ae}}),o=Bn.material.fragmentShader.split("void main(){")[0],l=r(o+`uniform sampler2D scene, bloom; uniform vec2 d; uniform float lerpK, sharpK, tilt; varying vec2 vUv;
    float L(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
    vec4 S(vec2 uv){ return texture2D(scene, uv); }
    vec4 sharpen(vec2 uv, float k){
      vec4 c = S(uv);
      vec4 n = S(uv + vec2(d.x, 0.0)) + S(uv - vec2(d.x, 0.0)) + S(uv + vec2(0.0, d.y)) + S(uv - vec2(0.0, d.y));
      vec4 sharp = max(c + k * (4.0 * c - n), 0.0);
      float lM = L(c.rgb);
      float lNW = L(S(uv + d * vec2(-1.0, -1.0)).rgb), lNE = L(S(uv + d * vec2(1.0, -1.0)).rgb);
      float lSW = L(S(uv + d * vec2(-1.0, 1.0)).rgb),  lSE = L(S(uv + d * vec2(1.0, 1.0)).rgb);
      float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
      float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
      float range = lMax - lMin;
      if (range < max(0.04, lMax * 0.15)) return sharp;
      vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), (lNW + lSW) - (lNE + lSE));
      float red = max((lNW + lNE + lSW + lSE) * 0.03125, 1.0 / 128.0);
      dir = clamp(dir / (min(abs(dir.x), abs(dir.y)) + red), -8.0, 8.0) * d;
      vec4 a = 0.5 * (S(uv + dir * (1.0 / 3.0 - 0.5)) + S(uv + dir * (2.0 / 3.0 - 0.5)));
      vec4 b = a * 0.5 + 0.25 * (S(uv - dir * 0.5) + S(uv + dir * 0.5));
      float lB = L(b.rgb);
      vec4 aa = (lB < lMin || lB > lMax) ? a : b;
      return mix(sharp, aa, clamp(range * 4.0, 0.0, 1.0));
    }
    void main(){
      vec3 c = mix(sharpen(vUv, sharpK).rgb, texture2D(bloom, vUv).rgb, lerpK);
      // Tilt-shift (the city close-ups): a sharp band across the middle, the
      // top and bottom going softly out of focus, as a tilted lens makes a
      // real city look like a model; colours a touch richer, as in such shots.
      // The blur: the already-blurred bloom picture, spread wider again.
      if (tilt > 0.0) {
        float w = smoothstep(0.10, 0.44, abs(vUv.y - 0.47)) * tilt;
        if (w > 0.0) {
          vec2 r = vec2(d.y / d.x, 1.0) * (0.006 + 0.022 * w);
          vec3 b = texture2D(bloom, vUv).rgb * 0.2;
          for (int i = 0; i < 8; i++) {
            float a = float(i) * 0.785398 + 0.39;
            b += texture2D(bloom, vUv + vec2(cos(a), sin(a)) * r * vec2(d.x / d.y, 1.0)).rgb * 0.1;
          }
          c = mix(c, b, clamp(w * 1.15, 0.0, 1.0));
        }
        float g = dot(c, vec3(0.299, 0.587, 0.114));
        c = max(mix(vec3(g), c, 1.0 + 0.18 * tilt), 0.0);
      }
      // where the globe (alpha 1) and its atmosphere leave space showing
      float space = 1.0 - clamp(S(vUv).a, 0.0, 1.0);
      if (space > 0.0) {
        vec2 guest = vec2(gl_FragCoord.x * 1280.0 / resolution.x, (resolution.y - gl_FragCoord.y) * 720.0 / resolution.y);
        c += (texture2D(milkyMap, gl_FragCoord.xy / resolution).rgb + starLayer(guest)) * space;
      }
      gl_FragColor = vec4(c, 1.0); }`,{...mn,scene:{value:null},bloom:{value:null},d:{value:new ae},lerpK:{value:.5},sharpK:{value:.6},tilt:{value:0}}),c=0,h=0,u={},d=(g,f)=>new Jt(Math.max(1,g),Math.max(1,f),{depthBuffer:!1,minFilter:st,magFilter:st});function p(){let g=ze.getDrawingBufferSize(new ae);g.x===c&&g.y===h||(c=g.x,h=g.y,Object.values(u).forEach(f=>f.dispose()),u={scene:new Jt(c,h,{samples:ze.getContext().getContextAttributes().antialias?4:0,minFilter:st,magFilter:st}),a:d(Math.round(c/4),Math.round(h/4)),b:d(Math.round(c/4),Math.round(h/4))},u.scene.isXRRenderTarget=!0,u.scene.texture.colorSpace=Et,u.scene.texture.internalFormat="RGBA8")}function m(g,f){n.material=g,ze.setRenderTarget(f),ze.render(e,t)}return{render(g,f=0){if(!(g>0)&&!(f>.001)){ze.setRenderTarget(null),ze.render(qt,Pe);return}p(),Bn.visible=!1;try{ze.setRenderTarget(u.scene),ze.render(qt,Pe)}finally{Bn.visible=!0}ze.autoClear=!1;try{a.uniforms.t.value=u.scene.texture,m(a,u.a);let y=h/4/180;s.uniforms.t.value=u.a.texture,s.uniforms.dir.value.set(y/u.a.width,0),m(s,u.b),s.uniforms.t.value=u.b.texture,s.uniforms.dir.value.set(0,y/u.b.height),m(s,u.a),l.uniforms.scene.value=u.scene.texture,l.uniforms.bloom.value=u.a.texture,l.uniforms.d.value.set(1/c,1/h),l.uniforms.lerpK.value=.5*g,l.uniforms.sharpK.value=.6*g,l.uniforms.tilt.value=f,m(l,null)}finally{ze.autoClear=!0}}}})(),ad=()=>{var n;return Math.max(0,Math.min(1,+((n=W.oldLook)!=null?n:1)))},sd=Nu(ze),Td=Df(qt,xe.sunDir),n0=Nf(xe.U_flashA.value,xe.U_flashB.value),Mi=Of(qt,xe.sunDir),i0=Nu(ze,{tint:new S(.8,.85,.95),rainbow:!1,disc:7,beams:4,beamLen:.45,beamWide:1.21}),r0=Ff(qt,xe.sunDir),Nl=kf(qt,xe.sunDir,ze),Qe=ng(qt,xe.sunDir.value),Ad=ig(ze,xe,W.cityCloseUpTiles.day,W.cityCloseUpTiles.night),a0=rg(ze,qt,xe,xe.sunDir.value);function s0(n){let e=null;try{e=JSON.parse(localStorage.getItem("home-geo-v1")||"null")}catch{}let t=Number.isFinite(e==null?void 0:e.lat)?e.lat:n==null?void 0:n.lat,i=Number.isFinite(e==null?void 0:e.lon)?e.lon:n==null?void 0:n.lon;if(!Number.isFinite(t)){Wt.failed();return}df({lat:t,lon:i}).then(r=>{Wt.setStations(r),console.info(`Radio: ${r.length} stations near you`)}).catch(r=>{console.warn("Radio stations:",(r==null?void 0:r.message)||r),Wt.failed()})}setInterval(()=>s0(Pa),24*36e5);var Wg;Wt.loadOnDemand((Wg=W.onDemand)==null?void 0:Wg.folder);Wt.onChange((n,e)=>{var t;n!=="power"||!En||(e?En.pause():((t=W.music)==null?void 0:t.enabled)!==!1&&En.play().catch(()=>{}))});function Rd(){if(W.volcanoes===!1){Nl.set([]);return}uf({minVei:3}).then(n=>Nl.set(n)).catch(n=>console.warn("Volcanoes:",(n==null?void 0:n.message)||n))}Rd();setInterval(Rd,12*36e5);function o0(){Uf().then(n=>Td.setKp(n)).catch(n=>console.warn("Kp index:",(n==null?void 0:n.message)||n))}o0();setInterval(o0,30*6e4);var Cg=0;function l0(){document.body.classList.toggle("old-look",ad()>0)}l0();function c0(){var e;let n=(e=W.theatre)!=null?e:"off";document.body.classList.toggle("theatre-semi",n==="semi"||n==="full"),document.body.classList.toggle("theatre-full",n==="full")}c0();function h0(n,e){let t=document.createElement("canvas");t.width=t.height=256;let i=t.getContext("2d"),r=i.createRadialGradient(128,128,0,128,128,128);return r.addColorStop(0,n),r.addColorStop(.08,n),r.addColorStop(.28,e),r.addColorStop(1,"rgba(255,170,85,0)"),i.fillStyle=r,i.fillRect(0,0,256,256),new Wo(t)}var Si=new tn,Cd=new ha(new yr({map:h0("rgba(255,250,225,1)","rgba(255,187,98,.28)"),transparent:!0,blending:zi,depthWrite:!1,depthTest:!0})),Ld=new ha(new yr({map:h0("rgba(255,255,245,1)","rgba(255,220,150,.42)"),transparent:!0,blending:zi,depthWrite:!1,depthTest:!0}));Cd.scale.setScalar(18);Ld.scale.setScalar(4.5);Si.add(Cd,Ld);Si.renderOrder=20;qt.add(Si);Si.visible=!1;var h1=new yr({map:bd.load("data/plugins/live/Location_Light_Live.png",n=>{n.colorSpace=Et}),transparent:!0,blending:zi,depthTest:!0,depthWrite:!1,opacity:0,sizeAttenuation:!1}),Qw=bd.load("data/plugins/live/Location_Light_Live_SD.png",n=>{n.colorSpace=Et}),eS=bd.load("data/plugins/fah/Location_Light_F@h.png",n=>{n.colorSpace=Et}),Wl=new ha(h1);Wl.scale.setScalar(.055);Wl.renderOrder=10;var u1=W.tour,ni=ot.autoTour,wt=ot.manual,Tr=ot.radius.min,u0=ot.radius.max,{lerp:Rr,smoothstep:bi,clamp:ct}=Ut,Lr=[0,1].map(()=>({city:null,prepare(n){this.city=n},update(){return 0}})),Ei=0,en={descendDelay:1.5,descendSeconds:8,ascendSeconds:5,holdSeconds:12,closeAltitudeKm:32,nightAltitudeKm:40,closeTiltDegrees:52,nightTiltDegrees:50,orbitDegreesPerSecond:1.2},pn=[0,1].map(()=>new bl(qt,xe.sunDir,W.cityCloseUpTiles,Ed,ze));try{fg(ze,Pe)}catch(n){console.warn("close-up program:",n)}var bn=0,ce={k:0,heading:0,near:null,city:null,dive:0,diveArmed:!0,alt:null,pending:null};en.diveRate=1/3;async function Ol(){if(!Zi()||Ol.on)return;Ol.on=!0;let n=[...Fe],e=await T0().catch(()=>null);e&&n.includes(e)&&(n.splice(n.indexOf(e),1),n.splice(1,0,e)),window.__cuPrefetch={done:0,total:n.length,t0:performance.now()},gg(n,W.cityCloseUpTiles,(t,i)=>{window.__cuPrefetch.done=t,t===i&&(window.__cuPrefetch.ms=performance.now()-window.__cuPrefetch.t0)})}setTimeout(Ol,3e3);function od(){var r;let n=(r=ce.snapTo)==null?void 0:r.city,e=n?{lat:n.lat,lon:n.lon,name:"here"}:{lat:Y.lat,lon:(Y.lng+540)%360-180,name:"here"},t=pn[bn];if(!t.city){t.prepare(e),ce.near=ld(e);return}nt(t.city.lat,t.city.lon).angleTo(nt(e.lat,e.lon))/St>.12&&!ce.pending&&(ce.pending=e,pn[1-bn].prepare(e)),ce.pending&&pn[1-bn].settled()&&(bn=1-bn,pn[1-bn].dispose(),ce.pending=null,ce.near=ld(pn[bn].city))}var Zi=()=>W.cityCloseUp===!0,d0=-1e9,p0=()=>{d0=performance.now()},d1=()=>performance.now()-d0<1500||!!ce.pending||!!ce.snapTo||pn.some(n=>{var e,t;return((e=n.queue)==null?void 0:e.length)||((t=n.dirty)==null?void 0:t.size)}),p1=Math.cos(30/6371);setTimeout(()=>bu(4096,2048).then(n=>{let e=new _n(n,4096,2048,Hi);e.wrapS=Zn,e.magFilter=e.minFilter=st,e.generateMipmaps=!1,e.needsUpdate=!0,p0(),ze.initTexture(e),Tl.value=e}).catch(n=>console.warn("land/sea map:",n)),0);var ii=null,Ll={lat:NaN,lng:NaN,v:!1};function m1(n){if(!n)return;let e=((n.lon-Y.lng)%360+540)%360-180,t=Math.hypot(n.lat-Y.lat,e*Math.cos(Y.lat*St));ce.snapTo={city:n,lat0:Y.lat,lng0:Y.lng,dLat:n.lat-Y.lat,dLng:e,t0:performance.now(),dur:700+Math.min(900,t*180)},od()}function Lg(){let n=ce.snapTo,e=Math.min(1,(performance.now()-n.t0)/n.dur),t=cd(e);return Y.lat=n.lat0+n.dLat*t,Y.lng=n.lng0+n.dLng*t,e>=1}function f1(n,e=Y.lat,t=Y.lng){ii!=null||(ii=Fe.map(s=>nt(s.lat,s.lon)));let i=nt(e,(t+540)%360-180),r=null,a=Math.cos(n/6371);return ii.forEach((s,o)=>{let l=s.dot(i);l>a&&(a=l,r=Fe[o])}),r}function Os(n=Y.lat,e=Y.lng){if(n===Ll.lat&&e===Ll.lng)return Ll.v;ii!=null||(ii=Fe.map(r=>nt(r.lat,r.lon)));let t=nt(n,(e+540)%360-180),i=!1;for(let r of ii)if(r.dot(t)>p1){i=!0;break}return Ll={lat:n,lng:e,v:i},i}var Pd=n=>!!n&&Fe.includes(n),g1=()=>en.descendDelay+en.descendSeconds+en.holdSeconds+en.ascendSeconds;function ld(n){let e=nt(n.lat,n.lon).dot(xe.sunDir.value),t=1-bi(e,-.16,.1);return{alt:Math.exp(Rr(Math.log(en.closeAltitudeKm),Math.log(en.nightAltitudeKm),t))/6371,tilt:Rr(en.closeTiltDegrees,en.nightTiltDegrees,t)*St}}var cd=n=>n*n*n*(n*(6*n-15)+10);function v1(n,e){var p,m;let t=0,i=z.selected;if(Zi()&&z.started&&z.mode==="pause"&&Pd(i)&&i===z.target){let g=(n-z.arrivedAt)/1e3-en.descendDelay,f=en.descendSeconds,y=en.holdSeconds,x=en.ascendSeconds;t=g<=0?0:g<f?cd(g/f):g<f+y?1:g<f+y+x?1-cd((g-f-y)/x):0,ce.p=g<=0?0:g<f?g/f:g<f+y?1:g<f+y+x?1-(g-f-y)/x:0,ce.city!==i&&(ce.city=i,ce.near=ld(i),ce.heading=0)}else Zi()&&z.started&&z.mode==="manual"&&ce.dive>0?(Os()||(ce.dive=Math.max(0,ce.dive-e/1.5)),t=ce.dive,ce.p=ce.dive,ce.dive>0&&(ce.snapTo||Os())&&od()):(z.mode!=="manual"&&(ce.dive=0),t=Math.max(0,ce.k-e/1.5));Zi()&&z.started&&z.mode==="manual"&&ce.dive<=0&&Y.r<1.62&&Math.abs(Y.vLat)+Math.abs(Y.vLng)<.02&&n-(ce.earlyAt||0)>400&&(ce.earlyAt=n,(ce.snapTo||Os())&&od()),ce.k=t,t<=0?ce.p=0:z.mode==="pause"||z.mode==="manual"||(ce.p=Math.min((p=ce.p)!=null?p:t,t)),ba.value.w=(m=ce.p)!=null?m:t;let r=ce.k;if(r<=0||!ce.near)return Ul.visible=!0,ce.alt=null,0;z.mode==="pause"&&(ce.heading+=e*en.orbitDegreesPerSecond*St*r);let a=Ji(),s=new S(0,1,0).addScaledVector(a,-a.y).normalize(),o=new S().crossVectors(s,a),l=Y.r-1,c=Math.exp(Rr(Math.log(l),Math.log(ce.near.alt),r));ce.alt=c;let h=Rr(0,ce.near.tilt,bi(r,.35,1)),u=ce.heading,d=s.clone().multiplyScalar(-Math.cos(u)).addScaledVector(o,-Math.sin(u));return Pe.position.copy(a).multiplyScalar(1+c*Math.cos(h)).addScaledVector(d,c*Math.sin(h)),Pe.up.set(0,1,0).lerp(a,bi(r,.2,.8)).normalize(),Pe.lookAt(a.clone().multiplyScalar(bi(r,0,.55))),Ul.visible=Pe.position.length()>1.05,r}var Y={lat:20,lng:0,r:u0,roll:0,vLat:0,vLng:0,vR:0,vRoll:0,pitch:0,yaw:0};function Ji(){return nt(Y.lat,Y.lng)}function hd(){Pe.position.copy(nt(Y.lat,Y.lng,Y.r)),Pe.up.set(0,1,0),Pe.lookAt(0,0,0),Y.yaw&&Pe.rotateY(-Y.yaw),Y.pitch&&Pe.rotateX(-Y.pitch),Y.roll&&Pe.rotateZ(Y.roll)}var z={mode:"idle",target:null,selected:null,speed:0,startDist:1,arrivedAt:0,lastDepart:0,lastInput:-1/0,started:!1};var y1=new Set,Pg=new URLSearchParams(location.search).get("start"),ud=null;function dd(n){if(!n&&Pg){let t=Fe.find(i=>i.name.toLowerCase()===Pg.toLowerCase());if(t)return t}n&&!Fe.includes(n)&&(n=ud);let e=n?Fe.indexOf(n):-1;if(e<0){let t=nt(si.lat,si.lng);return Fe.reduce((i,r)=>t.angleTo(nt(r.lat,r.lon))<t.angleTo(nt(i.lat,i.lon))?r:i)}return Fe[(e+1)%Fe.length]}function Fl(n){let e=Ji(),t=null,i=n*St;for(let r of[...Fe,...Tn]){let a=e.angleTo(nt(r.lat,r.lon));a<i&&(t=r,i=a)}return t}function Ti(n,e){Qe.on||(li>=0&&tr(-1),z.selected&&z.selected!==n&&Qi(null),z.target=n,z.mode="travel",z.from={lat:Y.lat,lng:Y.lng,r:Y.r},z.startDist=Math.max(ni.arrivalEpsilon,Ji().angleTo(nt(n.lat,n.lon))/St),z.lastDepart=e,Lr[1-Ei].prepare(n),Zi()&&Pd(n)&&(ce.pending&&(pn[1-bn].dispose(),ce.pending=null),pn[bn].prepare(n)),Wl.position.copy(nt(n.lat,n.lon,1.002)),Cr(n))}function x1(n){if(!Qt||!(Fe.includes(n)||n===jt))return;let e=vd(n);Qt.visited.includes(e)||(Qt.visited.push(e),E0())}function m0(n){x1(z.target);for(let[e,t]of er)t.img&&e!==z.target&&(t.img=null);z.mode="pause",z.arrivedAt=n,z.settledAt=null,y1.add(z.target.name),Lr[1-Ei].city===z.target&&(Ei=1-Ei),Qi(z.target)}function Wn(){z.lastInput=performance.now(),!Qe.on&&z.started&&z.mode!=="manual"&&(z.mode="manual",z.target=null,ce.dive=ce.k)}var f0={ArrowLeft:"step-l",ArrowRight:"step-r",ArrowUp:"step-u",ArrowDown:"step-d",KeyW:"arrowup",KeyS:"arrowdown",KeyA:"arrowleft",KeyD:"arrowright",Equal:"zoomin",NumpadAdd:"zoomin",Minus:"zoomout",NumpadSubtract:"zoomout",KeyQ:"prev",KeyE:"next",Enter:"select",NumpadEnter:"select",Escape:"back",Backspace:"back",KeyV:"home"},_1={BracketLeft:[()=>Ta(-1)],BracketRight:[()=>Ta(1)],Comma:[()=>Aa(-1),!0],Period:[()=>Aa(1),!0],KeyM:[()=>Ua()]},ft=new Set;window.addEventListener("keydown",n=>{if(!z.started||n.ctrlKey||n.altKey||n.metaKey)return;let e=_1[n.code];if(e){n.preventDefault(),(!n.repeat||e[1])&&e[0]();return}let t=f0[n.code];if(t&&(n.preventDefault(),t!=="none")){if(Qe.on&&md[t]){ft.add(Vs[t]);return}if(md[t]){n.repeat||y0(t,performance.now());return}if(t==="select"){n.repeat||Id();return}if(t==="back"){n.repeat||g0();return}if(t==="home"){n.repeat||pd();return}if(t==="prev"||t==="next"){n.repeat||kl(t==="next"?1:-1);return}ft.add(t),Wn()}});var tS=new S,nS=new S;var li=-1;function tr(n){let e=[...Ce("newsList").children];li=e.length?Math.max(-1,Math.min(e.length-1,n)):-1,Ce("newsList").classList.toggle("focus-mode",li>=0),e.forEach((t,i)=>t.classList.toggle("focus",i===li))}function Id(){if(z.lastInput=performance.now(),!Qe.on){if(li>=0){sn("error");return}if(z.selected&&Ce("newsList").children.length&&(z.mode==="pause"||z.mode==="manual")){Wn(),sn("optSelect"),tr(0),Y.r>Tr&&(Y.vR=-wt.zoomMax*.6);return}M1()}}function g0(){if(z.lastInput=performance.now(),Qe.on){jl(!1);return}if(li>=0){sn("optClose"),tr(-1);return}if(ce.dive>0||ce.k>.05){Wn(),ce.dive=0,sn("optClose");return}}function kl(n){if(z.lastInput=performance.now(),Qe.on)return;li>=0&&tr(-1);let e=(z.target&&Fe.includes(z.target)?z.target:null)||(z.selected&&Fe.includes(z.selected)?z.selected:null)||Fl(90),t=e?Fe.indexOf(e):-1;t<0&&(t=n>0?-1:0);let i=Fe[(t+n+Fe.length)%Fe.length];ce.dive=0,sn("optMove"),Ti(i,z.lastInput)}function pd(){if(Qe.on){Qe.look.yaw=Qe.look.pitch=0;return}Wn(),tr(-1),z.home={t0:performance.now()},ce.dive=0}function M1(){z.lastInput=performance.now();let n=Fl(25);n&&n!==z.selected?Ti(n,z.lastInput):sn("error")}var Er=[],Ea={x:0,y:0},Ca={lng:0,lat:0,zoom:0};function v0(n){var t;let e=navigator.getGamepads?navigator.getGamepads():[];for(let i of e){if(!i||i.mapping!=="standard")continue;let r=v=>{var _;return!!((_=i.buttons[v])!=null&&_.pressed)},a=Er[i.index]||{},s={},o=(v,_)=>(s[v]=_,_&&!a[v]),l=i.axes,c=i.buttons.some(v=>v.pressed);if(!z.started){c&&!a.any&&((t=window.__globe.intro)==null||t.skip()),s.any=c,Er[i.index]=s;continue}if(s.any=c,!Jm()&&Wt.pad(i,o)){for(let v in Gn)Fs.cancel(v);Er[i.index]={...a,...s,afterRadio:!0};continue}if(a.afterRadio){if(c){Er[i.index]={...a,...s};continue}a.afterRadio=!1}if(Qm(i,o)){for(let[v,_]of[["cross",0],["circle",1],["left",14],["right",15],["up",12],["down",13]])s[v]=r(_);for(let v in Gn)Fs.cancel(v);Er[i.index]={...a,...s};continue}if(Qe.on){let v=M=>Math.abs(M)>.18?M:0;Ea.x=ct(v(l[0])+v(l[2]),-1,1),Ea.y=ct(v(l[1])+v(l[3]),-1,1);let _=r(2),w=_||!!a.chord&&(r(4)||r(5)||r(6)||r(7));s.chord=w,o("square",_)&&Ua(),o("trkNext",w&&r(5))&&Ta(1),o("trkPrev",w&&r(4))&&Ta(-1),o("volUp",w&&r(7))&&Aa(1),o("volDown",w&&r(6))&&Aa(-1),o("circle",r(1))&&jl(!1),o("r3",r(11))&&pd(),Er[i.index]=s;continue}Ea.x=Ea.y=0;for(let[v,_,w]of[["up","step-u",r(12)],["down","step-d",r(13)]])s[v]=w,w&&!a[v]?y0(_,n):!w&&a[v]&&Fs(_);let h=r(2),u=h||!!a.chord&&(r(4)||r(5)||r(6)||r(7));s.chord=u;let d=v=>{var _,w;return((w=(_=i.buttons[v])==null?void 0:_.value)!=null?w:r(v)?1:0)>.5};o("square",h)&&Ua(),o("trkNext",u&&r(5))&&Ta(1),o("trkPrev",u&&r(4))&&Ta(-1),o("volUp",u&&d(7))&&Aa(1),o("volDown",u&&d(6))&&Aa(-1),o("prevCity",!u&&r(4)||r(14))&&kl(-1),o("nextCity",!u&&r(5)||r(15))&&kl(1),o("cross",r(0))&&Id(),o("circle",r(1))&&g0(),o("r3",r(11))&&pd();let p=Math.abs(l[0])>.18?l[0]:0,m=Math.abs(l[1])>.18?l[1]:0,g=Math.abs(l[3])>.18?l[3]:0,f=v=>{var w,M;let _=(M=(w=i.buttons[v])==null?void 0:w.value)!=null?M:r(v)?1:0;return _>.08?_:0},y=u?0:f(6)-f(7),x=ct(g+y,-1,1);Ca.lng=p,Ca.lat=-m,Ca.zoom=x,(p||m||x)&&(Wn(),(p||m)&&Hl(),x&&Dl(x>0?1:-1)),Er[i.index]=s}v0.last=n}window.addEventListener("keyup",n=>{let e=f0[n.code];md[e]?Fs(e):ft.delete(e)});var w1=250,md={"step-l":[-1,0],"step-r":[1,0],"step-u":[0,1],"step-d":[0,-1]},Vs={"step-l":"arrowleft","step-r":"arrowright","step-u":"arrowup","step-d":"arrowdown"},Gn={};function y0(n,e){if(li>=0){if(z.lastInput=e,n==="step-u"||n==="step-d"){let t=li+(n==="step-d"?1:-1);t>=0&&t<Ce("newsList").children.length&&(tr(t),sn("optMove"))}return}Gn[n]||(Gn[n]={t:e,rotating:!1},!(n==="step-l"||n==="step-r")&&(ft.add(Vs[n]),Wn()))}function Fs(n){let e=Gn[n];delete Gn[n],ft.delete(Vs[n]),e&&!e.rotating&&z.started&&(n==="step-l"||n==="step-r"?kl(n==="step-r"?1:-1):sn("optMove"))}Fs.cancel=n=>{delete Gn[n],ft.delete(Vs[n])};function S1(n){for(let e in Gn){let t=Gn[e];!t.rotating&&n-t.t>=w1&&(t.rotating=!0,ft.add(Vs[e])),t.rotating&&Wn()}}window.addEventListener("blur",()=>{for(let n in Gn)delete Gn[n]});window.addEventListener("blur",()=>ft.clear());window.addEventListener("wheel",n=>{if(!z.started)return;Wn();let e=Math.sign(n.deltaY)*4;Y.vR=ct(Y.vR+e*wt.zoomStep,-wt.zoomMax,wt.zoomMax),Dl(Math.sign(e),250)},{passive:!0});var Sn=null;window.addEventListener("pointerdown",n=>{var t,i;let e=n.target===qg||((i=(t=n.target).closest)==null?void 0:i.call(t,".city-labels"));z.started&&n.button===0&&e&&(Sn={x:n.clientX,y:n.clientY,x0:n.clientX,y0:n.clientY,moved:0})});Ce("gear").addEventListener("click",n=>{n.stopPropagation(),z.started&&dl()});window.addEventListener("pointerup",n=>{let e=Sn;Sn=null,e&&e.moved<6&&b1(n.clientX,n.clientY)});function b1(n,e){if(Qe.on||!Ia.classList.contains("on"))return;let t=null,i=34;for(let r of oi){if(r.el.style.display==="none"||r.el.style.visibility==="hidden"||+r.el.style.opacity==0)continue;let a=r.el.getBoundingClientRect(),s=Math.hypot(n-a.left,e-a.top),o=r.panel.getBoundingClientRect(),c=n>=o.left&&n<=o.right&&e>=o.top&&e<=o.bottom?0:s;c<i&&(i=c,t=r.c)}if(t){if(z.lastInput=performance.now(),li>=0&&tr(-1),t===z.selected&&(z.mode==="pause"||z.mode==="manual")){Id();return}ce.dive=0,sn("optSelect"),Wn(),Ti(t,z.lastInput)}}window.addEventListener("pointermove",n=>{if(!Sn)return;let e=n.clientX-Sn.x,t=n.clientY-Sn.y;if(Sn.moved=Math.max(Sn.moved,Math.hypot(n.clientX-Sn.x0,n.clientY-Sn.y0)),Sn.x=n.clientX,Sn.y=n.clientY,!e&&!t)return;if(Qe.on){Qe.look.yaw+=e*.08*St,Qe.look.pitch=ct(Qe.look.pitch-t*.08*St,-25*St,45*St);return}Wn();let i=.02*(Y.r-1);Y.vLng=ct(Y.vLng-e*i,-wt.latLngMax,wt.latLngMax),Y.vLat=ct(Y.vLat+t*i,-wt.latLngMax,wt.latLngMax),Hl()});function E1(n){var D,A,U;let e=Math.min(.1,(n-((D=z.lastMs)!=null?D:n))/1e3);z.lastMs=n;let t=e*60;if(z.mode==="satellite"){D1(e,t);return}let i=(I,L,H,B)=>ct(I+B*L*t,-H,H),r=(ft.has("arrowright")?1:0)-(ft.has("arrowleft")?1:0)+Ca.lng,a=(ft.has("arrowup")?1:0)-(ft.has("arrowdown")?1:0)+Ca.lat,s=(ft.has("zoomout")?1:0)-(ft.has("zoomin")?1:0)+Ca.zoom;r&&(Y.vLng=i(Y.vLng,wt.latLngStep,wt.latLngMax,ct(r,-1,1))),a&&(Y.vLat=i(Y.vLat,wt.latLngStep,wt.latLngMax,ct(a,-1,1))),s&&(Y.vR=i(Y.vR,wt.zoomStep,wt.zoomMax,ct(s,-1,1))),(ft.has("arrowleft")||ft.has("arrowright")||ft.has("arrowup")||ft.has("arrowdown"))&&Hl(),ft.has("zoomin")&&Dl(-1),ft.has("zoomout")&&Dl(1),(r||a||s)&&Wn();let o=ce.alt?ce.alt/Math.max(.05,Y.r-1):1;if(Y.lat=ct(Y.lat+Y.vLat*t*o,-80,80),Y.lng+=Y.vLng*t*o,Y.roll+=Y.vRoll*t,Y.r=ct(Y.r+Y.vR*t,ot.radius.zoomMin,ot.radius.zoomMax),Zi()&&z.mode==="manual"&&(ce.dive>0||Os())){if(ce.dive>0||Y.r<=ot.radius.zoomMin+1e-6&&Y.vR<0){let I=ce.dive;ce.dive=ct(ce.dive-Y.vR*t*en.diveRate,0,1),ce.dive>I&&!Os()&&(ce.dive=I),ce.dive>0&&(Y.r=ot.radius.zoomMin)}(ce.dive<.995||!(s<0||Y.vR<-1e-4))&&(ce.diveArmed=!0),ce.diveArmed&&Y.vR<0&&ce.dive>=1&&(Fg(Math.min(1,Math.max(.35,Math.abs(Y.vR)/wt.zoomMax))),ce.diveArmed=!1),ce.dive>=1&&Y.vR<0&&(Y.vR=0),ce.snapTo&&(r||a||Lg())&&(ce.snapTo=null)}else{let I=Y.r<=ot.radius.zoomMin+.001;if(Zi()&&z.mode==="manual"&&I&&(s<0||Y.vR<-1e-4)&&!ce.snapTo&&m1(f1(600)),ce.snapTo&&(r||a||s>0||!I||z.mode!=="manual"||z.home)&&(ce.snapTo=null),ce.snapTo){Lg(),Y.vLat=Y.vLng=0,Y.vR>-wt.zoomStep&&(Y.vR=-wt.zoomStep);return}(Y.r>ot.radius.zoomMin+.002||!(s<0||Y.vR<-1e-4))&&(z.groundArmed=!0),z.groundArmed!==!1&&Y.vR<0&&Y.r<=ot.radius.zoomMin&&z.mode==="manual"&&(Fg(Math.min(1,Math.max(.35,Math.abs(Y.vR)/wt.zoomMax))),z.groundArmed=!1),Y.r<=ot.radius.zoomMin&&Y.vR<0&&(Y.vR=0)}if(z.home){let I=1-Math.pow(.9,t),L=si,H=(L.lng-Y.lng+540)%360-180;Y.lat+=(L.lat-Y.lat)*I,Y.lng+=H*I,Y.r+=(L.radius-Y.r)*I,Y.vLat=Y.vLng=Y.vR=0,Math.abs(L.lat-Y.lat)<.01&&Math.abs(H)<.01&&(z.home=null),z.lastInput=n}if(z.mode==="opening"){let I=Kg(z.opening?z.opening.frame0+(n-z.opening.t0)/1e3*60:si.anim.finish);Y.lat=I.lat,Y.lng=I.lng,Y.r=I.r,Y.pitch=I.pitch,Y.yaw=I.yaw,z.started&&z.opening&&n-z.opening.t0>=si.firstDepartSeconds*1e3&&Ti(z.target,n)}else(Y.pitch||Y.yaw)&&(Y.pitch=Y.yaw=0);if(z.started&&Ra!==Us){let I=Ra+(Us-Ra)*Math.min(1,.035*t);$g(Math.abs(Us-I)<.001?Us:I)}let c=Math.pow(wt.rotateDecay,t);Y.vLat*=c,Y.vLng*=c,Y.vRoll*=Math.pow(wt.rotateDecay,t),Y.vR*=Math.pow(wt.zoomDecay,t);let h=(n-z.lastInput)/1e3;if(z.started&&z.mode==="manual"){let I=Fl(10);I!==z.selected&&(Qi(I),I&&B1(I)),h>=ni.idleSeconds&&Ti(zl(z.selected||Fl(60)),n)}else if(z.mode==="travel"){let I=z.target,L=I.lat-Y.lat,H=(I.lon-Y.lng+540)%360-180,B=1-Math.pow(ni.easeDecay,t),Z=L*B,X=H*B,j=Math.max(Math.abs(Z),Math.abs(X)),J=ni.maxSpeed*t;j>J&&(Z*=J/j,X*=J/j),Y.lat+=Z,Y.lng+=X;let pe=z.startDist,ve=Math.min(1,nt(z.from.lat,z.from.lng).angleTo(Ji())/St/pe),ee=Rr(z.from.r,Tr,ve)+.00755*pe*Math.sin(Math.PI*ve);Y.r+=(ee-Y.r)*(1-Math.pow(.9,t)),Math.abs(I.lat-Y.lat)<ni.activateDegrees&&Math.abs((I.lon-Y.lng+540)%360-180)<ni.activateDegrees&&m0(n),Y.roll&&(Y.roll*=Math.pow(wt.rotateDecay,t))}else if(z.mode==="pause"){let I=Tr,L=1;if(z.from&&z.startDist){let X=z.startDist;L=Math.min(1,nt(z.from.lat,z.from.lng).angleTo(Ji())/St/X),I=Rr(z.from.r,Tr,L)+.00755*X*Math.sin(Math.PI*L)}Y.r+=(I-Y.r)*(1-Math.pow(.9,t)),L>.999&&Math.abs(Y.r-Tr)<.001&&(Y.r=Tr);let H=z.target;if(H){let X=H.lat-Y.lat,j=(H.lon-Y.lng+540)%360-180;if(Math.abs(X)<.01&&Math.abs(j)<.01)Y.lat=H.lat,Y.lng=H.lon,(A=z.settledAt)!=null||(z.settledAt=n);else{let J=1-Math.pow(ni.easeDecay,t);Y.lat+=X*J,Y.lng+=j*J}}let B=Zi()&&Pd(z.selected)?Math.max(ni.arrivalPauseSeconds,g1()):ni.arrivalPauseSeconds,Z=z.arrivedAt;z.started&&(n-Z)/1e3>=B&&h>=ni.idleSeconds&&Ti(zl(z.selected),n)}hd();let u=v1(n,t/60),d=Y.r-1,p=u>0?ct((Pe.position.length()-1)*.25,2e-4,.1):ct(d*.25,.01,.1);Math.abs(Pe.near-p)>p*.05&&(Pe.near=p,Pe.updateProjectionMatrix());let m=I=>Y.r>=I[0]&&Y.r<=I[1],g=ot.clouds,f=xe.CloudMap.value&&((U=W.live)==null?void 0:U.clouds)!==!1?Rr(g.alpha[0],g.alpha[1],ct((Y.r-g.fadeRadius[0])/(g.fadeRadius[1]-g.fadeRadius[0]),0,1)):0,y=xe.U_cloud.value;y.y+=ct(f-y.y,-t/g.fadeFrames,t/g.fadeFrames),y.x=(y.x+ot.clouds.rotatePerFrame*t/(2*Math.PI))%1;let x=0;z.mode==="travel"&&(x=bi(1-Ji().angleTo(nt(z.target.lat,z.target.lon))/St/z.startDist,.3,.85));let v=xe.globeFade.value,_=Lr[Ei].update(d,(1-x)*v),w=Lr[1-Ei].update(d,x*v),M=Pe.position;xe.U_camera.value.set(M.x,M.y,M.z,M.lengthSq()),xe.U_color.value.set(v,v,v,1),xe.U_nightLook.value.z=rd()?1:0,xe.U_noise.value.y=rd()?32*(.5+.5*Math.sin(n/1e3*60*.0025*2*Math.PI)):16;let R=pn[bn].update(Pe.position.length()-1,u>0?1:0);pn[1-bn].update(Pe.position.length()-1,0),_0(Math.max(_,w)>.05,R>.05),w0(t,m(ot.markers.showRadius),m(ot.markers.infoRadius)),x0(u)}var zn=document.createElement("div");zn.className="cu-card";zn.innerHTML="<b></b><span></span><small></small>";document.body.appendChild(zn);function x0(n){var s;let e=z.selected,i=e&&Fe.includes(e)&&nt(e.lat,e.lon).angleTo(Ji())<1.2*St?bi(n,.55,.9):0;if(Math.abs(i-((s=zn._op)!=null?s:-1))>.004&&(zn._op=i,zn.style.opacity=i.toFixed(3)),i<=0)return;let r=oi.find(o=>o.c===e),a=(r==null?void 0:r.info.textContent)||"";if(!a&&e.tz)try{a=Zu(e.tz,new Date,Od())}catch{a=""}zn._key!==e.name+a&&(zn._key=e.name+a,zn.children[0].textContent=e.name,zn.children[1].textContent=e.country||"",zn.children[2].textContent=a)}var fd=null,gd="Open-Meteo";function _0(n,e=!1){var r,a;let t=`${n}|${e}`;if(t===fd)return;fd=t;let i=`Earth: NASA \xB7 Clouds: \xA9 EUMETSAT \xB7 Volcanoes: NASA EONET \xB7 Weather: ${gd}`;Ce("credits").textContent=(n?`${i} \xB7 Regional detail: ${W.regional.day.credit}`:i)+(e?` \xB7 Close-up: ${W.cityCloseUpTiles.day.credit}, ${W.cityCloseUpTiles.night.credit}, ${(a=(r=W.cityCloseUpTiles.terrain)==null?void 0:r.credit)!=null?a:""}`:"")}var Ia=document.createElement("div");Ia.className="city-labels";document.body.insertBefore(Ia,Ce("clinic"));function M0(n){let e=document.createElement("div");e.className="city-label";let t=document.createElement("i"),i=document.createElement("em"),r=document.createElement("div"),a=document.createElement("span");a.textContent=n.name;let s=document.createElement("small");r.append(a,s);let o=document.createElement("div");return o.className="panel",o.append(i,r),e.append(t,o),Ia.appendChild(e),{c:n,el:e,panel:o,wx:i,info:s,wxKey:"",p:nt(n.lat,n.lon,1),sel:1}}var oi=Fe.map(M0),Ps=new S,Ig=!1;function w0(n,e,t){let i=u1.showCityLabels!==!1&&z.started;if(Ia.classList.toggle("on",i&&e),Ia.classList.toggle("info-on",i&&t),!i)return;Ig||(Ig=!0,Na());let r=window.innerWidth,a=window.innerHeight,s=ct((1.76-Y.r)/(1.76-1.6),0,1);Ce("newsStrip").style.setProperty("--height-fade",s.toFixed(3));let o=(1-ot.markers.unselectedAlpha)/ot.markers.unselectedFadeFrames*n,l=Ji(),c=Math.cos(5*St),h=Math.cos(18*St);for(let u of oi){let d=u.c===z.selected,p=!z.selected||d?1:ot.markers.unselectedAlpha;u.sel+=ct(p-u.sel,-o,o),Ps.copy(u.p).project(Pe);let g=Math.abs(Ps.x)<1.05&&Math.abs(Ps.y)<1.05&&u.p.dot(Pe.position)>=1?1:0;if(u.isSel!==d&&(u.isSel=d,d&&u.el.style.setProperty("--pulse-delay","-0.405s"),u.el.classList.toggle("current",d)),u.a!==g&&(u.a=g,u.el.style.opacity=g),g<=0)continue;let f=bi(u.p.dot(l),h,c),y=(u.sel*s*f).toFixed(3);u.op!==y&&(u.op=y,u.panel.style.opacity=y);let x=`translate(${((Ps.x+1)/2*r).toFixed(1)}px, ${((1-Ps.y)/2*a).toFixed(1)}px)`;u.tf!==x&&(u.tf=x,u.el.style.transform=x)}}var Dg=[],Ug={cities:[],quakes:[],storms:[],iss:null};function Na(){let n=new Date,e=Od();for(let t=0;t<oi.length;t++){let i=oi[t];if(i.c.kind){i.info.textContent=Bs()?i.c.subF:i.c.sub,i.wxKey!==i.c.kind&&(i.wxKey=i.c.kind,i.wx.innerHTML=`<img src="${i.c.icon}" alt="">`);continue}let r=Zu(i.c.tz,n,e),a=ri.get(i.c);i.info.textContent=a?`${Fd(a.tempC)}  ${r}`:r;let s=a?`${a.code}/${a.isDay}`:"";s!==i.wxKey&&(i.wxKey=s,i.wx.innerHTML=a?Pu(a.code,a.isDay):"")}}var Tn=[],zs=[],S0=new Set,Vn=()=>W.live||{},b0="tour-cycle-v1",vd=n=>n===jt?"ISS":n==null?void 0:n.name,La=n=>{var e;return n==="ISS"?"ISS":(e=Fe.find(t=>t.name===n))==null?void 0:e.country};function Ng(n){let e=[...Fe.map(r=>r.name),"ISS"];for(let r=e.length-1;r>0;r--){let a=Math.random()*(r+1)|0;[e[r],e[a]]=[e[a],e[r]]}let t=[],i=n?La(n):null;for(;e.length;){let r=e.findIndex(s=>La(s)!==i);r<0&&(r=0);let a=e.splice(r,1)[0];t.push(a),i=La(a)}return t}var Qt=(()=>{try{return JSON.parse(localStorage.getItem(b0)||"null")}catch{return null}})(),E0=()=>{try{localStorage.setItem(b0,JSON.stringify(Qt))}catch{}};function T1(n){let e=new Set([...Fe.map(a=>a.name),"ISS"]);(!Qt||!Array.isArray(Qt.order)||Qt.order.length!==e.size||!Qt.order.every(a=>e.has(a)))&&(Qt={order:Ng(n),visited:[]});let t=new Set(Qt.visited);n&&e.has(n)&&t.add(n),t.size>=e.size&&(Qt={order:Ng(n),visited:[]},t.clear(),n&&t.add(n));let i=n?La(n):null,r=Qt.order.find(a=>!t.has(a)&&La(a)!==i)||Qt.order.find(a=>!t.has(a));return r==="ISS"&&!Tn.includes(jt)&&(r=Qt.order.find(a=>!t.has(a)&&a!=="ISS"&&La(a)!==i)||r),Qt.visited=[...t],E0(),r==="ISS"?jt:Fe.find(a=>a.name===r)}var Pa=null,Og=!1;async function T0(){let n=a=>Fe.find(s=>s.name.toLowerCase()===String(a).toLowerCase())||null;if(W.homeCity)return n(W.homeCity);let e=Intl.DateTimeFormat().resolvedOptions().timeZone,t=null;try{let a=JSON.parse(localStorage.getItem("home-geo-v1")||"null");a&&Date.now()-a.at<864e5&&(t=a)}catch{}if(!t)try{let a=await(await fetch("https://get.geojs.io/v1/ip/geo.json",{cache:"no-store"})).json();t={at:Date.now(),lat:+a.latitude,lon:+a.longitude,tz:a.timezone};try{localStorage.setItem("home-geo-v1",JSON.stringify(t))}catch{}}catch{t=null}let i=(a,s,o)=>a.reduce((l,c)=>!l||nt(s,o).angleTo(nt(c.lat,c.lon))<nt(s,o).angleTo(nt(l.lat,l.lon))?c:l,null),r=Fe.filter(a=>a.tz===e);if(t&&Number.isFinite(t.lat)&&(t.tz===e||!r.length)){let a=i(Fe,t.lat,t.lon);if(a&&nt(t.lat,t.lon).angleTo(nt(a.lat,a.lon))<4*St)return a}return r.length?t&&Number.isFinite(t.lat)?i(r,t.lat,t.lon):r[0]:null}function zl(n){for(Fe.includes(n)&&(ud=n);zs.length;){let t=zs.shift();if(Tn.includes(t)||Fe.includes(t))return t}if(Pl){let t=Pl;if(Pl=null,t!==n)return t}if(!n)return dd(null);if(!Og&&Pa&&(Og=!0,Pa!==n))return Pa;let e=Fe.includes(n)||n===jt?vd(n):vd(ud);return T1(e)||dd(n)}var A0=n=>new Intl.DateTimeFormat(Bl,{hour:"numeric",minute:"2-digit",...C0()}).format(new Date(n)),A1=(n,e)=>`${Math.abs(n).toFixed(1)}\xB0${n>=0?"N":"S"} ${Math.abs(e).toFixed(1)}\xB0${e>=0?"E":"W"}`;function R1(n){let i=document.createElement("canvas");i.width=480,i.height=270;let r=i.getContext("2d"),a=480/2,s=270/2;if(n.kind==="quake"){r.fillStyle="rgb(14,10,12)",r.fillRect(0,0,480,270),r.lineWidth=2.5;for(let o=9;o>=1;o--){let l=1-o/9;r.strokeStyle=`rgb(${60+180*l|0},${18+30*l|0},16)`,r.beginPath(),r.arc(a,s,15+o*17,0,Math.PI*2),r.stroke()}r.textAlign="center",r.fillStyle="#000",r.font="bold 75px Arial, sans-serif",r.fillText(`M${n.mag.toFixed(1)}`,a+2,s+22),r.fillStyle="#fff",r.fillText(`M${n.mag.toFixed(1)}`,a,s+20),r.fillStyle="rgb(255,120,90)",r.font="bold 20px Arial, sans-serif",r.fillText("EARTHQUAKE",a,s+58)}else{r.fillStyle="rgb(8,14,24)",r.fillRect(0,0,480,270),r.strokeStyle="rgb(30,70,110)",r.lineWidth=13,r.lineCap="round";for(let o of[0,Math.PI]){r.beginPath();for(let l=0;l<40;l++){let c=l/39,h=o+c*2.4,u=125*(.25+.75*c),d=a+u*Math.cos(h),p=s-u*Math.sin(h);l?r.lineTo(d,p):r.moveTo(d,p)}r.stroke()}r.textAlign="center",r.font="bold 48px Arial, sans-serif",r.fillStyle="#000",r.fillText(n.stormName.toUpperCase(),a+2,s-8),r.fillStyle="#fff",r.fillText(n.stormName.toUpperCase(),a,s-10),r.font="bold 20px Arial, sans-serif",r.fillStyle="rgb(140,210,255)",r.fillText(`${n.stormKind}${n.cat?" \xB7 "+n.cat:""}`.toUpperCase(),a,s+30)}return i.toDataURL("image/jpeg",.9)}function Dd(n){let e=Bs(),t=e?n.place.replace(/(\d+(?:\.\d+)?) km\b/g,(a,s)=>`${Math.round(s/1.609)} mi`):n.place,i=t.length<=34?t:t.slice(0,33).trimEnd()+"\u2026",r=Number.isFinite(n.depth)?e?`${Math.round(n.depth/1.609)} mi deep`:`${Math.round(n.depth)} km deep`:"depth unknown";return{id:`quake:${n.id}`,kind:"quake",name:`M${n.mag.toFixed(1)} Earthquake`,country:"Earthquake",raw:n,lat:n.lat,lon:n.lon,mag:n.mag,sub:i,subF:i,icon:"data/plugins/live/quake/720/quake.png",lines:[[`Magnitude ${n.mag.toFixed(1)} earthquake: ${t}`],[`Struck at ${A0(n.time)} your time; ${r}`],["Source: U.S. Geological Survey"]]}}function Ud(n){let e=Math.round(n.kmh),t=Math.round(n.kmh/1.609),i=`${n.kind} ${n.name}`,r=(n.cat?`Category ${n.cat}, w`:"W")+(Bs()?`inds up to ${t} mph (${e} km/h)`:`inds up to ${e} km/h (${t} mph)`);return{id:`storm:${n.id}`,kind:"storm",name:i,raw:n,country:n.kind,stormName:n.name,stormKind:n.kind,cat:n.cat,lat:n.lat,lon:n.lon,icon:"data/plugins/live/storm/720/storm.png",sub:(n.cat?`Cat ${n.cat}  `:"")+`${e} km/h`,subF:(n.cat?`Cat ${n.cat}  `:"")+`${t} mph`,lines:[[`${i}: ${r}`],[`Last position ${A1(n.lat,n.lon)}, reported at ${A0(n.time)} your time`+(n.near?`; near ${n.near}`:"")],["Source: GDACS (NOAA and JTWC advisories)"]]}}function Da(n,e){let t=new Map(e.map(r=>[r.id,r]));for(let r=Tn.length-1;r>=0;r--){let a=Tn[r];if(a.kind!==n)continue;let s=t.get(a.id);if(s){Object.assign(a,s),t.delete(a.id);continue}Tn.splice(r,1);let o=oi.findIndex(l=>l.c===a);o>=0&&(oi[o].el.remove(),oi.splice(o,1)),z.selected===a&&z.mode!=="travel"&&Qi(null)}let i=[...t.values()];for(let r of i){Tn.push(r);let a=M0(r);a.el.classList.add("event",r.kind),r.kind==="quake"&&r.mag>=6&&a.el.classList.add("pulse"),oi.push(a)}return i.length&&Na(),i.filter(r=>!S0.has(r.id))}function Nd(n){for(let e of n)S0.add(e.id),zs.push(e);!n.length||!z.started||z.mode==="manual"||z.mode==="opening"||(z.mode==="travel"&&z.target&&!z.target.kind&&(Pl=z.target),Ti(zl(z.selected),performance.now()))}var Pl=null,$i=[],jt={id:"iss",kind:"iss",name:"Space Station (ISS)",country:"ISS",lat:0,lon:0,icon:"data/plugins/live/iss/720/iss.png",sub:"",subF:"",lines:[]};function C1(n){if(!$i.length)return null;let e=$i.findIndex(s=>s[0]>n);if(e<=0){let s=$i[e<0?$i.length-1:0];return{lat:s[1],lon:s[2],alt:s[3]}}let t=$i[e-1],i=$i[e],r=(n-t[0])/(i[0]-t[0]),a=(i[2]-t[2]+540)%360-180;return{lat:t[1]+(i[1]-t[1])*r,lon:(t[2]+a*r+540)%360-180,alt:t[3]+(i[3]-t[3])*r}}function yd(){let n=C1(Date.now());if(!n)return;jt.lat=n.lat,jt.lon=n.lon;let e=oi.find(r=>r.c===jt);e&&e.p.copy(nt(n.lat,n.lon,1));let t=`${Math.round(n.alt)} km up`,i=`${Math.round(n.alt/1.609)} mi up`;t!==jt.sub&&(jt.sub=t,jt.subF=i,jt.lines=[["International Space Station: where it is right now"],[Bs()?`About ${Math.round(n.alt/1.609)} mi up, flying at 17,100 mph: once round the Earth every 92 minutes`:`About ${Math.round(n.alt)} km up, flying at 27,600 km/h: once round the Earth every 92 minutes`],["The marker follows it live. Position: wheretheiss.at"]],e&&(e.info.textContent=Bs()?i:t))}async function L1(){var e,t;if(Vn().iss===!1)return;let n=async()=>{var i,r;try{$i=await gf(((r=(i=W.live)==null?void 0:i.newsRefreshHours)!=null?r:3)+1),Tn.includes(jt)||(yd(),Da("iss",[jt]),jt.picture="data/city_photos/iss.jpg")}catch(a){console.warn("ISS track unavailable:",a)}};await n(),setInterval(n,((t=(e=W.live)==null?void 0:e.newsRefreshHours)!=null?t:3)*36e5),setInterval(yd,1e3)}var P1=62,ed=!1;function I1(){let n=Ce("satFade");return n||(n=document.createElement("div"),n.id="satFade",document.body.appendChild(n)),n}function jl(n){if(n===Qe.on||ed||!z.started)return;ed=!0;let e=I1();e.classList.add("on"),sn(n?"view":"optClose"),setTimeout(()=>{var t;if(n)Qe.fromTrack($i,Date.now())||Qe.fromPlace(Y.lat,Y.lng,Date.now()),Qe.start(Date.now()),Ad.setSea(bu(2048,1024).then(i=>({m:i,W:2048,H:1024}))),Qe.back={lat:Y.lat,lng:Y.lng,r:Y.r},tr(-1),D0(),L0(),Qi(null),ce.dive=0,ce.k=0,ce.snapTo=null,z.home=null,z.target=null,Y.vLat=Y.vLng=Y.vR=Y.vRoll=0,Y.roll=0,z.mode="satellite",document.body.classList.add("satellite"),Pe.fov=P1,Pe.updateProjectionMatrix();else{let i=Qe.latLng();Qe.stop(),Qe.airglow(0),Qe.twilight(0),xe.U_glitter.value.z=0,xe.U_glitter.value.w=0,document.body.classList.remove("satellite"),Pe.fov=(t=ot.fovY)!=null?t:45,Pe.updateProjectionMatrix(),Y.lat=ct(i.lat,-80,80),Y.lng=i.lng,Y.r=u0,Y.pitch=Y.yaw=0,z.mode="manual",z.lastInput=performance.now()}z.lastMs=performance.now(),requestAnimationFrame(()=>requestAnimationFrame(()=>{e.classList.remove("on"),ed=!1}))},450)}function D1(n,e){var m,g;let t=(ft.has("arrowright")?1:0)-(ft.has("arrowleft")?1:0),i=(ft.has("arrowdown")?1:0)-(ft.has("arrowup")?1:0),r=Qe.look,a=1-Math.pow(5e-4,n);r.vYaw+=(ct(Ea.x+t,-1,1)*40*St-r.vYaw)*a,r.vPitch+=(ct(Ea.y+i,-1,1)*28*St-r.vPitch)*a;let s=(m=qu[W.satelliteSpeed])!=null?m:qu.timelapse;Qe.pose(Pe,n,s);let o=Qe.latLng();Y.lat=o.lat,Y.lng=o.lng,Ul.visible=!0,ce.k=0,ce.p=0,ce.alt=null,ba.value.w=0;let l=Pe.position.length()-1,c=ct(l*.2,.002,.05);Math.abs(Pe.near-c)>c*.05&&(Pe.near=c,Pe.updateProjectionMatrix());let h=xe.U_cloud.value,u=xe.CloudMap.value&&((g=W.live)==null?void 0:g.clouds)!==!1?1:0;h.y+=ct(u-h.y,-e/ot.clouds.fadeFrames,e/ot.clouds.fadeFrames),Qe.airglow(xe.globeFade.value),Qe.twilight(xe.globeFade.value),xe.U_glitter.value.w=1,xe.U_glitter.value.z=1,Ad.update(Pe.position,Qe.fwd,!0,xe.sunDir.value);let d=xe.globeFade.value;Lr[Ei].update(l,0),Lr[1-Ei].update(l,0);let p=Pe.position;xe.U_camera.value.set(p.x,p.y,p.z,p.lengthSq()),xe.U_color.value.set(d,d,d,1),xe.U_noise.value.y=rd()?32*(.5+.5*Math.sin(performance.now()/1e3*60*.0025*2*Math.PI)):16,pn[0].update(l,0),pn[1].update(l,0),_0(!1,!1),w0(e,!1,!1),x0(0)}async function xd(){var n,e;if(Vn().quakes!==!1)try{let t=await mf({minMag:(n=Vn().quakeMinMagnitude)!=null?n:6,hours:(e=Vn().quakeHours)!=null?e:24});Nd(Da("quake",t.map(Dd)))}catch(t){console.warn("Earthquakes unavailable:",t)}}async function _d(){if(Vn().storms!==!1)try{Nd(Da("storm",(await ff()).map(Ud)))}catch(n){console.warn("Storms unavailable:",n)}}function U1(){var n,e;xd(),_d(),L1(),setInterval(xd,((n=Vn().quakeRefreshMinutes)!=null?n:10)*6e4),setInterval(_d,((e=Vn().stormRefreshMinutes)!=null?e:30)*6e4)}function R0(n,e,t){var r,a,s,o,l,c;let i=(r=window.chrome)==null?void 0:r.webview;if(i){i.postMessage({cmd:"rumble",strong:n,weak:e,ms:t});return}for(let h of((a=navigator.getGamepads)==null?void 0:a.call(navigator))||[])(c=(l=(o=(s=h==null?void 0:h.vibrationActuator)==null?void 0:s.playEffect)==null?void 0:o.call(s,"dual-rumble",{duration:t,strongMagnitude:n,weakMagnitude:e}))==null?void 0:l.catch)==null||c.call(l,()=>{})}function Fg(n){if(Vn().rumble===!1)return;let e=.35+.55*n,t=Math.round(120+80*n);R0(e,e*.6,t)}var kg="quake-felt-v1";function N1(n){if(Vn().rumble===!1)return;let e=[];try{e=JSON.parse(localStorage.getItem(kg)||"[]")}catch{}if(e.includes(n.id))return;e.push(n.id),e.length>200&&(e=e.slice(-200));try{localStorage.setItem(kg,JSON.stringify(e))}catch{}let t=n.mag<6.5?2:n.mag<7.5?3:4,i=ct(150+Math.trunc((n.mag-6)*50),120,255)/255,r=600;for(let a=0;a<t;a++){let s=a===t-1?700:380;setTimeout(()=>R0(i,i/2,s),r),r+=s+260}}function Qi(n){if(n===z.selected)return;let e=z.selected;if(z.selected=n,!n){L0(),D0();return}if(n.kind==="quake"&&N1(n),zd(n),H1(n),!e||!Ce("cityCard").classList.contains("shown")){zg(n);return}let t=Ce("cityCard");t.classList.add("swapping"),clearTimeout(Qi._t),Qi._t=setTimeout(()=>{z.selected===n&&(zg(n),t.classList.remove("swapping"),t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse"))},ot.cityInfoCrossFadeSeconds*1e3)}var Bl=W.locale,C0=()=>W.clock==="24h"?{hourCycle:"h23"}:W.clock==="12h"?{hourCycle:"h12"}:{};function Od(){return W.clock==="24h"?!0:W.clock==="12h"?!1:/h2[34]/.test(new Intl.DateTimeFormat(W.locale,{hour:"numeric"}).resolvedOptions().hourCycle||"")}function Bs(){return W.distance==="mi"}function O1(n,e){var r;let i=(((r=new Intl.DateTimeFormat("en-US",{timeZone:n,timeZoneName:"longOffset"}).formatToParts(e).find(a=>a.type==="timeZoneName"))==null?void 0:r.value)||"GMT").match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);return i?(i[1]==="-"?-1:1)*(Number(i[2])*60+Number(i[3]||0)):0}function F1(n,e){let t=O1(n,e)- -e.getTimezoneOffset();if(t===0)return"same time as here";let i=Math.floor(Math.abs(t)/60),r=Math.abs(t)%60,a=(i?`${i} h`:"")+(i&&r?" ":"")+(r?`${r} min`:"");return t>0?`${a} ahead`:`${a} behind`}function ql(n){var s;let e=new Date,t=new Intl.DateTimeFormat(Bl,{timeZone:n.tz,hour:"numeric",minute:"2-digit",...C0()}).formatToParts(e),i=((s=t.find(o=>o.type==="dayPeriod"))==null?void 0:s.value)||"",r=t.filter(o=>o.type!=="dayPeriod").map(o=>o.value).join("").trim();Ce("cityTime").textContent=r,Ce("cityAmPm").textContent=i;let a=new Intl.DateTimeFormat(Bl,{timeZone:n.tz,weekday:"long",day:"numeric",month:"long"}).format(e);Ce("cityDate").textContent=`${a} \xB7 ${F1(n.tz,e)}`}function Fd(n){return W.units==="F"?`${Math.round(n*9/5+32)}\xB0F`:`${Math.round(n)}\xB0C`}function kd(n){let e=Ce("cityWeather"),t=ri.get(n);if(!t){e.classList.add("unavailable"),Ce("wxIcon").innerHTML="",Ce("wxTemp").textContent="Weather will appear when online",Ce("wxText").textContent="";return}e.classList.remove("unavailable"),Ce("wxIcon").innerHTML=Pf(t.code,t.isDay),Ce("wxTemp").textContent=Fd(t.tempC),Ce("wxText").textContent=Lf(t.code,t.isDay)}function zg(n){Yg&&(Ce("cityCountry").textContent=n.country,Ce("cityName").textContent=n.name,ql(n),kd(n),Ce("cityCard").classList.add("shown"))}function L0(){Ce("cityCard").classList.remove("shown")}function k1(){var t,i,r;if(((t=W.live)==null?void 0:t.liveClouds)===!1)return;let n=(r=(i=W.live)==null?void 0:i.cloudRefreshHours)!=null?r:1,e=async()=>{try{let a;try{let o=await _f(vf);if(!o)return;a=new Pt(o),a.flipY=!1,a.addEventListener("dispose",()=>{var l;return(l=o.close)==null?void 0:l.call(o)})}catch(o){console.warn("EUMETSAT clouds unavailable, using the older map:",o);let l=Math.floor(Date.now()/(3*36e5));a=await Ki(`${yf}?v=${l}`)}a=Zg(a),p0(),ze.initTexture(a);let s=xe.CloudMap.value;xe.CloudMap.value=a,s&&s!==a&&s.dispose(),console.info("Live clouds loaded")}catch(a){console.warn("Live clouds unavailable; keeping the current map.",a)}};e(),setInterval(e,n*36e5)}function Ns(){let n=Ce("cardPhoto").classList.contains("on")||Ce("newsList").children.length>0;Ce("newsStrip").classList.toggle("shown",n&&!!z.selected)}function P0(n){n.animate([{opacity:0},{opacity:1}],{duration:250,easing:"ease-out"})}function td(n){var i;let e=Ce("cardPhoto"),t=Ce("cardPhotoImg");if(!n||((i=W.live)==null?void 0:i.photos)===!1){e.classList.remove("on","live"),Ns();return}t.onload=()=>{e.classList.add("on"),Ns()},t.onerror=()=>{e.classList.remove("on"),Ns()},t.src=n.src,P0(e),t.complete&&t.naturalWidth&&(e.classList.add("on"),Ns())}function Is(n){let e=Ce("newsList");P0(e),e.replaceChildren(...n.map(([t,i])=>{let r=document.createElement("li");if(r.textContent=t,i){let a=document.createElement("span");a.textContent=` - ${i}`,r.append(a)}return r})),Ns()}var er=new Map,I0=()=>{var n,e;return{calm:W.calmMode!==!1,count:4,refreshHours:(e=(n=W.live)==null?void 0:n.newsRefreshHours)!=null?e:3}};function z1(n){return(async()=>{var i,r;if(n.kind)return n.picture||(n.picture=R1(n)),{src:n.picture,credit:""};let e=((i=W.live)==null?void 0:i.webcams)!==!1?await Tf(n):null;if(e)return e;if(((r=W.live)==null?void 0:r.photos)===!1)return null;let t=await Sf(n);return t?{src:t.url,credit:t.credit}:null})().catch(()=>null)}function Cr(n,{decode:e=!0,refresh:t=!1}={}){var a;if(!n)return Promise.resolve();let i=er.get(n);i||(i={at:Date.now()},er.set(n,i)),i.failed=!1,t&&i.camCity&&!i.mediaJob&&(i.pendingMedia=!0);let r=[];return(t||!i.news)&&!i.newsJob&&!n.kind&&((a=W.live)==null?void 0:a.news)!==!1&&r.push(i.newsJob=Ru(n,I0()).then(s=>{var l;let o=(l=s==null?void 0:s[0])==null?void 0:l.title;t&&o&&fl.test(o)&&!(i.news||[]).some(c=>c.title===o)&&!zs.includes(n)&&(zs.push(n),console.info("Breaking news for",n.name,"- visiting it next"),z.started&&z.mode==="pause"&&Ti(zl(z.selected),performance.now())),(s!=null&&s.length||!i.news)&&(i.news=s||[])}).catch(()=>{i.news||(i.failed=!0)}).finally(()=>i.newsJob=null)),(!("media"in i)||i.pendingMedia)&&!i.mediaJob?r.push(i.mediaJob=(async()=>{var o,l;n.kind||(i.camCity=((o=W.live)==null?void 0:o.webcams)!==!1&&await Ef(n));let s=await z1(n);if(s&&!s.src.startsWith("data:"))try{await fetch(s.src,{mode:"no-cors"})}catch{}i.pendingMedia&&i.media&&(s==null?void 0:s.src)!==((l=i.media)==null?void 0:l.src)&&(i.img=null),i.media=s,i.camLive=!!(s!=null&&s.live),i.pendingMedia=!1})().finally(()=>i.mediaJob=null)):i.mediaJob&&r.push(i.mediaJob),Promise.all(r).then(async()=>{if(e&&i.media&&!i.img){let s=new Image;s.src=i.media.src;try{await s.decode(),i.img=s}catch{}}})}function B1(n){let e=nt(n.lat,n.lon);Fe.filter(t=>t!==n&&e.angleTo(nt(t.lat,t.lon))<20*St).slice(0,6).forEach(t=>Cr(t))}async function ks(n=!1){var h,u,d;let e=performance.now(),t=Math.max(0,Fe.indexOf(z.target||z.selected||Fe[0])),i=[...Fe.slice(t),...Fe.slice(0,t)],r=()=>new Promise(p=>window.requestIdleCallback?requestIdleCallback(()=>p(),{timeout:500}):setTimeout(p,50)),a=0,s=0,o=async()=>{for(;a<i.length;){let p=i[a++];await r(),await Cr(p,{decode:!1,refresh:n}),s++,await new Promise(m=>setTimeout(m,120))}};await Promise.all([o(),o(),o()]);let l=i.filter(p=>{var g;let m=er.get(p);return m&&"media"in m&&(m.news||((g=W.live)==null?void 0:g.news)===!1)}).length,c=(((h=window.__preload)==null?void 0:h.refreshes)||0)+(n?1:0);window.__preload={ms:Math.round(performance.now()-e),cities:i.length,ready:l,refreshes:c,at:Date.now()},console.info(`${n?"Refreshed":"Preloaded"} ${l} of ${i.length} cities in ${(window.__preload.ms/1e3).toFixed(1)} s`),clearTimeout(ks.timer),ks.timer=setTimeout(()=>ks(!0),((d=(u=W.live)==null?void 0:u.newsRefreshHours)!=null?d:3)*36e5)}async function H1(n){var t,i,r;let e=er.get(n);if(e&&"media"in e&&!e.pendingMedia){td(e.media);return}td((t=e==null?void 0:e.media)!=null?t:null),await Cr(n),z.selected===n&&td((r=(i=er.get(n))==null?void 0:i.media)!=null?r:null)}async function zd(n){var t;if(n.kind){Is(n.lines.map(([i])=>[i,""]));return}if(((t=W.live)==null?void 0:t.news)===!1){Is([]);return}let e=er.get(n);if(e!=null&&e.news){Is(e.news.map(i=>[i.title,i.source]));return}Is([]);try{let i=await Ru(n,I0());if(z.selected!==n)return;Is(i.map(r=>[r.title,r.source]))}catch{}}function D0(){Ce("newsStrip").classList.remove("shown")}function Xl(){let n=Pa,e=Ce("myCityBadge");if(!n){e==null||e.remove();return}e||(e=document.createElement("div"),e.className="credit-badge my-city",e.id="myCityBadge",e.innerHTML='<span class="mc-icon"></span><div class="mc-text"><small class="mc-top"></small><b class="mc-line"></b></div>',Ce("stripCredits").appendChild(e));let t=new Date,i=ri.get(n);e.querySelector(".mc-icon").innerHTML=i?Pu(i.code,i.isDay):"";let r=Object.fromEntries(new Intl.DateTimeFormat("en-GB",{timeZone:n.tz,hour:"numeric",minute:"2-digit",hourCycle:"h23"}).formatToParts(t).map(c=>[c.type,c.value])),a=+r.hour,s=r.minute,o=Od()?`${String(a).padStart(2,"0")}:${s}`:`${a%12||12}:${s} ${a<12?"AM":"PM"}`,l=new Intl.DateTimeFormat(Bl,{timeZone:n.tz,weekday:"short",day:"numeric",month:"short"}).format(t);e.querySelector(".mc-top").textContent=`Your City \xB7 ${l}`,e.querySelector(".mc-line").textContent=`${n.name}  ${i?`${Fd(i.tempC)}  `:""}${o}`}setInterval(()=>{var t,i;let n=[...document.querySelectorAll("#stripCredits .credit-badge")],e=n.findIndex(r=>r.classList.contains("on"));(t=n[e])==null||t.classList.remove("on"),(i=n[(e+1)%n.length])==null||i.classList.add("on")},5e3);function U0(){let n=6e4-Date.now()%6e4+50;setTimeout(()=>{z.selected&&ql(z.selected),Na(),Xl(),Md(),U0()},n)}document.addEventListener("visibilitychange",()=>{!document.hidden&&z.selected&&ql(z.selected)});function Md(){let n=ml(new Date);xe.sunDir.value.copy(nt(n.lat,n.lon)),Si.position.copy(xe.sunDir.value).multiplyScalar(55)}function wd(){let n={...W.clinic,name:Rl()||W.clinic.name};Ce("clinicName").textContent=n.name,Ce("clinicWelcome").textContent=n.welcome;let e=Ce("clinicMark");if(n.logo){let t=new Image;t.src=n.logo,t.alt="",e.replaceChildren(t)}else e.textContent=(n.name||"?").trim().charAt(0).toUpperCase();document.title=W.brand}var Bg;function N0(){document.body.classList.remove("idle"),clearTimeout(Bg),Bg=setTimeout(()=>document.body.classList.add("idle"),3e3)}window.addEventListener("mousemove",N0);N0();window.addEventListener("keydown",n=>{var t;let e=(t=window.chrome)==null?void 0:t.webview;e&&((n.key==="F11"||n.altKey&&n.key==="Enter")&&(n.preventDefault(),e.postMessage({cmd:"toggleFullscreen"})),n.ctrlKey&&n.shiftKey&&n.key.toLowerCase()==="q"&&e.postMessage({cmd:"quit"}))});var ri=new gl(Fe,W.weather);ri.onUpdate(()=>{let n=ri.source==="MET Norway"?"MET Norway":"Open-Meteo";n!==gd&&(gd=n,fd=null,document.querySelectorAll(".credit-badge b").forEach(i=>{/Open-Meteo|MET Norway/.test(i.textContent)&&(i.textContent=n)})),z.selected&&kd(z.selected),Na(),Xl();let e=ri.fetchedAt?Date.now()-ri.fetchedAt:null,t=ri.refreshMs+30*6e4;Ce("status").textContent=e===null?"Offline \u2014 weather unavailable":e>t?`Offline \u2014 weather from ${Math.round(e/36e5)} h ago`:""});var En=null,Ar=null;function O0(){var n;document.documentElement.style.setProperty("--ts",String(+((n=W.textSize)!=null?n:1)||1))}O0();function Hg(){var n;for(let e of Tn)e.raw&&Object.assign(e,e.kind==="quake"?Dd(e.raw):Ud(e.raw));jt.sub="",yd(),Na(),(n=z.selected)!=null&&n.kind&&zd(z.selected)}var wi=document.createElement("div");wi.className="np-note";wi.innerHTML='<i class="np-icon" aria-hidden="true">\u266A</i><div class="np-text"><small></small><b></b><span class="np-vol"><i></i></span></div>';document.body.appendChild(wi);var Vg=0;function Ua(){var i,r,a;let n=window.__music,e=((i=W.music)==null?void 0:i.enabled)!==!1&&!!(n!=null&&n.playing),t=(a=(r=W.music)==null?void 0:r.volume)!=null?a:.35;wi.querySelector("small").textContent=e?"Now Playing":"Music",wi.querySelector("b").textContent=e?jm(n.audio.src):"Music is off (Options > Music)",wi.querySelector(".np-vol").dataset.v=`Volume ${Math.round(t*100)}%`,wi.querySelector(".np-vol i").style.width=`${Math.round(t*100)}%`,wi.classList.add("on"),clearTimeout(Vg),Vg=setTimeout(()=>wi.classList.remove("on"),4e3)}window.addEventListener("lau-track",()=>{z.started&&!document.body.classList.contains("naming")&&Ua()});function Ta(n){var t;z.lastInput=performance.now();let e=window.__music;(t=e==null?void 0:e[n>0?"next":"prev"])!=null&&t.call(e)?sn("optMove"):(sn("error"),Ua())}function Aa(n){var i,r;z.lastInput=performance.now();let e=(r=(i=W.music)==null?void 0:i.volume)!=null?r:.35,t=$m("volume",n);sn(t!==e?"optMove":"error"),Ua()}Zm(n=>{var e,t,i,r;n==="units"&&(Na(),z.selected&&kd(z.selected)),n==="distance"&&Hg(),n==="clock"&&(Hg(),Xl(),z.selected&&!z.selected.kind&&ql(z.selected)),n==="textSize"&&O0(),(n==="quakes"||n==="quakeMin")&&(Vn().quakes===!1?Da("quake",[]):xd()),n==="storms"&&(Vn().storms===!1?Da("storm",[]):_d()),n==="news"&&z.selected&&zd(z.selected),n==="oldLook"&&(l0(),Vl()),n==="theatre"&&c0(),n==="volcanoes"&&Rd(),n==="cityCloseUp"&&Ol(),n==="action:name"&&$u({overGlobe:!0}).then(wd),n==="action:satellite"&&jl(!Qe.on),(n==="music"||n==="volume")&&((e=En==null?void 0:En.applyOptions)==null||e.call(En)),(n==="waveVolume"||n==="ambient")&&((t=Ar==null?void 0:Ar.applyOptions)==null||t.call(Ar)),n==="jingles"&&(Sd(),((r=(i=W.sfx)==null?void 0:i.jingles)!=null?r:1)>0&&Hl(400))},sn);window.__globe={tour:z,CITIES:Fe,weather:ri,cam:Y,sunGlare:Si,earthUniforms:xe,config:W,preloadAll:ks,prefetched:()=>er,cuNightK:Al,cuState:ce,cityCUs:pn,cuActive:()=>bn,cuGrade:ba,aurora:Td,flare:sd,lightning:n0,moon:Mi,moonFlare:i0,spirals:r0,volcanoes:Nl,radio:Wt,sat:Qe,satelliteMode:jl,satDetail:Ad,volClouds:a0,renderer:ze,goTo:n=>{let e=Fe.find(t=>t.name===n);e&&Ti(e,performance.now())},events:{liveEvents:Tn,inject:(n,e)=>Nd(Da(n,e.map(n==="quake"?Dd:Ud)))}};async function V1(){var M,R,D;[Qg.fragmentShader,e0.fragmentShader]=await r1;let[n,e,t,i]=await Promise.all([xg("data/wlop/wlop.ps3.conf"),_g("data/city_info_header.xml"),Mg("data/city_clock.txt"),wg("data/life_info/live/en/default_city_info.xml"),Hn.load("data/soundeffect.xml","sfx/")]);Dg=t,Ug=i,window.__globe.lwp={wlopConf:n,cityHeader:e,lwpClockEntries:Dg,lwpFeedData:Ug,sfx:Hn},wd(),Md();let r=new URLSearchParams(location.search),a=((M=W.intro)==null?void 0:M.enabled)!==!1&&r.get("intro")!=="0",s=dd(null);Cr(s),T0().then(A=>{var U;Pa=A,A&&(console.info("Home city:",A.name),Cr(A)),Xl(),window.__globe.homeCity=(U=A==null?void 0:A.name)!=null?U:null,s0(A)});let o=(A,U=si.anim.finish)=>{z.opening={t0:A!=null?A:performance.now(),frame0:U};let I=Kg(U);Y.lat=I.lat,Y.lng=I.lng,Y.r=I.r,Y.pitch=I.pitch,Y.yaw=I.yaw,$g(0),z.target=s,z.mode="opening",Cr(s),Wl.position.copy(nt(s.lat,s.lon,1.002)),hd()},l=A=>{z.started=!0,z.mode==="opening"&&z.target&&!z.selected&&Qi(z.target),setTimeout(ks,1500),document.body.dataset.started="1"},c=A=>{Y.lat=s.lat,Y.lng=s.lon,Y.r=Tr,z.target=s,Lr[1-Ei].prepare(s),m0(A),hd()},h=null;a?(xe.globeFade.value=0,h=new vl({cfg:W.intro,onCut:o,onSkip:c,onDone:()=>{l(performance.now()),En=Iu(W.music),Ar=Du(W.music,W.ambient,En)},setGlobeFade:A=>xe.globeFade.value=A,gate:Rl()?null:()=>(document.body.classList.add("naming"),$u().then(wd).finally(()=>document.body.classList.remove("naming")))}),h.start(performance.now())):(document.body.classList.remove("intro-on"),(R=Ce("titleCard"))==null||R.remove(),(D=Ce("globeLogo"))==null||D.remove()),window.__globe.intro=h;let u=new nl,d={calls:[],last:0,n:0,div:1,cap60:!1,failed:{},rendered:0,late:0,winStart:0,calmSince:0,prevDraw:0,refresh(){let A=[...this.calls].sort((U,I)=>U-I);return A.length>30?A[Math.floor(A.length*.1)]:1e3/60},frame(A){var L,H;if(this.last&&(this.calls.push(A-this.last),this.calls.length>300&&this.calls.shift()),this.last=A,Qu)return!0;if(this.div>1&&++this.n%this.div)return!1;d1()&&(this.busyAt=A);let U=this.refresh(),I=this.cap60?1e3/60:U*this.div;if(this.prevDraw&&A-this.prevDraw>I*1.5&&this.late++,this.prevDraw=A,this.rendered++,!this.winStart)return this.winStart=this.calmSince=A,!0;if(A-this.winStart>=2e3){let B=this.late/Math.max(1,this.rendered),Z=this.cap60?"60":String(this.div),X=z.started&&((L=this.startedAt)!=null?L:this.startedAt=A)&&A-this.startedAt>5e3,j=this.busyAt&&A-this.busyAt<2500,J=X&&!j&&B>.03&&this.slowBefore;if(this.slowBefore=X&&!j&&B>.03,J)this.slowBefore=!1,this.failed[Z]=A,!this.cap60&&1e3/(U*(this.div+1))>=59?this.div++:!this.cap60&&1e3/(U*this.div)<59?(this.cap60=!0,this.div=1):!this.cap60&&this.div===1&&(this.cap60=!0),this.calmSince=A;else if(this.late||!X)this.calmSince=A;else if(A-this.calmSince>2e4&&(this.cap60||this.div>1)){let pe=this.cap60?Math.max(1,Math.floor(16.666666666666668/U)):this.div-1;A-((H=this.failed[String(pe)])!=null?H:-1e9)<3e5||(this.cap60=!1,this.div=pe),this.calmSince=A}this.late=this.rendered=0,this.winStart=A,window.__pace={refreshMs:+U.toFixed(2),div:this.div,cap60:this.cap60}}return!0}},p=0;ze.setAnimationLoop(A=>{var j;if(!d.frame(A))return;if(Qu||d.cap60){let J=Qu||16.666666666666668;if(A+2<p)return;p+=J,p<A-J&&(p=A+J)}let U=u.getElapsedTime();Gl.material.uniforms.time.value=U,t0.uniforms.time.value=U,mn.time.value=U,Hs.position.copy(Pe.position);let I=xe.globeFade.value;Cd.material.opacity=.72*I,Ld.material.opacity=.9*I,h==null||h.update(A),h==null||h.pendingSkip(),v0(A),S1(A),Ds(A),nd(A),z.mode!=="idle"?E1(A):z.lastMs=A,l1();let L=Math.min(.1,Math.max(0,U-Cg));Cg=U,Td.update(U,(W.aurora!==!1?1:0)*I*(1-ce.k),L);let H=(W.glitter!==!1?1:0)*Math.max(bi(ce.k,.4,.8),z.mode==="satellite"?.9:0);xe.U_glitter.value.x=U,xe.U_glitter.value.y=H,El.value.set(U,H);let B=W.moon!==!1;Mi.update(performance.now(),B,I),xe.U_moon.value.set(Mi.dir.x,Mi.dir.y,Mi.dir.z,B?Mi.phase:0),r0.update(U,W.stormSpirals!==!1?Tn.filter(J=>J.kind==="storm"):[],I*(1-ce.k)),Nl.update(U,(W.volcanoes!==!1?1:0)*I*(1-ce.k),Pe,z.mode==="satellite"?0:1),n0.update(U,L,W.lightning!==!1?[...Tn.filter(J=>J.kind==="storm"),...Eu]:[],xe.sunDir.value,I*(1-ce.k));let Z=W.tiltShift!==!1?bi(ce.k,.55,.95):0;z.mode==="satellite"?Si.position.copy(Pe.position).addScaledVector(xe.sunDir.value,55):Si.userData.sat&&Md(),Si.userData.sat=z.mode==="satellite";let X=z.mode==="satellite"&&W.satelliteVolClouds!==!1&&((j=W.live)==null?void 0:j.clouds)!==!1&&xe.CloudMap.value?I:0;xe.U_cloud.value.z=X>0?1:0,a0.render(Pe,X),c1.render(z.mode==="satellite"?Math.min(ad(),.25):ad(),Z),sd.wide=z.mode==="satellite"?1:0,sd.render(Pe,xe.sunDir.value,(W.lensFlare!==!1?1:0)*I,L),i0.render(Pe,Mi.dir,(W.lensFlare!==!1&&W.moon!==!1?.85*Mi.phase:0)*I,L,Mi.position)});let m=new Date().getMonth()+1,[g,f,y,x,v,_]=await Promise.all([Ki(await Q_(m)),Tg?Eg("assets/earth/dds/citylights.dxt1").catch(A=>(console.warn("Night DDS:",A),Ki("assets/earth/port-night.png"))):Ki("assets/earth/port-night.png"),Ki("assets/earth/clouds.jpg").catch(()=>null),Tg?Eg("assets/earth/dds/earthspec.dxt1").catch(()=>Ki("assets/earth/original-specular.png")):Ki("assets/earth/original-specular.png"),Ki("assets/earth/original-noise.png"),t1()]),w=_||f;_&&(f.dispose(),xe.U_nightLook.value.w=1,xe.U_nightLook.value.y=e1);for(let A of[g,w,x,v])A.colorSpace=vn;!w.isCompressedTexture&&!_&&(w.generateMipmaps=!1,w.minFilter=st,w.anisotropy=1,w.needsUpdate=!0),v.wrapS=v.wrapT=Zn,v.needsUpdate=!0;try{let A=new Uint8Array(await(await fetch("assets/earth/noise_anim.raw")).arrayBuffer()),U=new is(A,32,32,32);U.format=Hi,U.type=hn,U.wrapS=U.wrapT=U.wrapR=Zn,U.minFilter=U.magFilter=st,U.generateMipmaps=!1,U.needsUpdate=!0,xe.NoiseVol.value=U}catch(A){console.warn("Night-light noise volume missing:",A)}xe.SpecularMap.value=x,xe.NoiseMap.value=v,xe.ColorMap.value=g,xe.NightMap.value=w,y&&(xe.CloudMap.value=Zg(y));for(let A of[g,w,x,v,xe.CloudMap.value,xe.NoiseVol.value])A&&ze.initTexture(A);try{await ze.compileAsync(qt,Pe)}catch(A){console.warn("compileAsync:",A)}k1(),U1(),ri.start(),U0(),h?h.setLoaded(performance.now()):(o(performance.now()),l(performance.now()),En=Iu(W.music),Ar=Du(W.music,W.ambient,En))}V1().catch(n=>{var e,t;console.error(n),document.body.classList.remove("intro-on"),(e=Ce("titleCard"))==null||e.remove(),(t=Ce("globeLogo"))==null||t.remove(),Ce("status").textContent="Could not load Earth imagery \u2014 run tools/fetch_assets.py"});
