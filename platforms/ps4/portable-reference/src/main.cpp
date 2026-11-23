#include <SDL.h>
#include <algorithm>
#include <array>
#include <cmath>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <ctime>
#include <iterator>
#include <fstream>
#include <sstream>
#include <string>
#include <vector>

static constexpr int W=1280, H=720, G=720;
static constexpr float PI=3.14159265358979323846f;
static constexpr float DEG=PI/180.0f;
static constexpr const char* VERSION="0.0001";
struct City { const char* name; float lat,lon; const char* detail; const char* photo; int tz; };
static constexpr City cities[]={
#include "cities_v15.inc"
};
static constexpr int CITY_COUNT=sizeof(cities)/sizeof(cities[0]);
struct Feed { std::string temp="--", headline="Weather/news pending"; };
static std::array<Feed,CITY_COUNT> feed;
struct Texel { int u,v; float light,rim; bool valid; };
static std::vector<Texel> sphere;
static std::vector<Uint32> pixels(G*G);
static SDL_Surface* earth=nullptr;
static SDL_Surface* night=nullptr;
static std::vector<Uint8> cloudLayer;
static std::array<float,4096> latSin{},latCos{},sunCos{};
static SDL_Texture* globe=nullptr;
static SDL_Texture* skyTexture=nullptr;
static SDL_Renderer* renderer=nullptr;
#ifdef LAU_PS5
extern "C" int ProsperoSDLSetRenderSize(int,int) __attribute__((weak));
#endif
static std::string assetRoot="assets";
static void startupLog(const char* step,const char* detail=nullptr){
#ifdef LAU_PS5
  if(FILE* log=std::fopen("/data/life-around-us/startup.log","a")){
    std::fprintf(log,"%s",step);
    if(detail&&*detail)std::fprintf(log," | %s",detail);
    std::fputc('\n',log);std::fflush(log);std::fclose(log);
  }
#else
  (void)step;(void)detail;
#endif
}

static float yaw=13.19f*DEG, zoom=1.0f;
static int selected=0;
static bool menu=false, fahrenheit=false, autoTour=true;
static Uint32 lastInput=0,lastAuto=0;
static unsigned int rng=12345;
static unsigned int random32(){rng=1664525u*rng+1013904223u;return rng;}
static float clampf(float x,float a,float b){return std::max(a,std::min(b,x));}
static float wrapf(float x){while(x>PI)x-=2*PI;while(x<-PI)x+=2*PI;return x;}

static void box(int x,int y,int w,int h,Uint8 r,Uint8 g,Uint8 b,Uint8 a=255){
  SDL_SetRenderDrawBlendMode(renderer,SDL_BLENDMODE_BLEND);
  SDL_SetRenderDrawColor(renderer,r,g,b,a);SDL_Rect rc{x,y,w,h};SDL_RenderFillRect(renderer,&rc);
}
static void line(int x,int y,int a,int b,Uint8 r,Uint8 g,Uint8 bl,Uint8 alpha=255){
  SDL_SetRenderDrawBlendMode(renderer,SDL_BLENDMODE_BLEND);
  SDL_SetRenderDrawColor(renderer,r,g,bl,alpha);SDL_RenderDrawLine(renderer,x,y,a,b);
}
// The original preview pixel font has been replaced by the v1.5 proportional atlas.
static void loadFeed(){
  std::ifstream f(assetRoot+"/live-feed.txt");
  if(!f.good())f.open("/data/life-around-us/live-feed.txt");
  std::string s;
  while(std::getline(f,s)){std::istringstream ss(s);std::string name,temp,headline;
    if(!std::getline(ss,name,'|')||!std::getline(ss,temp,'|')||!std::getline(ss,headline))continue;
    for(int i=0;i<CITY_COUNT;i++)if(name==cities[i].name){feed[i].temp=temp;feed[i].headline=headline;}
  }
}
static SDL_Surface* loadBitmap(const char* name){
  const std::string filename(name);
  const std::array<std::string,3> paths{
    assetRoot+"/"+filename,"/data/life-around-us/assets/"+filename,
    "assets/"+filename
  };
  for(const auto& path:paths){
    SDL_Surface* s=SDL_LoadBMP(path.c_str());
    if(s){
      SDL_Surface* v=SDL_ConvertSurfaceFormat(s,SDL_PIXELFORMAT_ARGB8888,0);
      SDL_FreeSurface(s);
      return v;
    }
  }
  return nullptr;
}
static void createSphere(){
  sphere.resize(G*G);
  for(int j=0;j<4096;j++){
    const float latitude=(0.5f-float(j)/4096.f)*PI;
    latSin[j]=std::sin(latitude);
    latCos[j]=std::cos(latitude);
  }
  for(int y=0;y<G;y++)for(int x=0;x<G;x++){
    float nx=(x-G/2.0f)/(G/2.0f),ny=(G/2.0f-y)/(G/2.0f);
    float rr=nx*nx+ny*ny;Texel& p=sphere[y*G+x];
    p.valid=rr<=1.0f;
    p.rim=std::sqrt(rr);
    if(!p.valid)continue;
    float nz=std::sqrt(std::max(0.0f,1.0f-rr));
    p.u=int((0.5f+std::atan2(nx,nz)/(2*PI))*4096.0f);
    p.v=int((0.5f-std::asin(clampf(ny,-1.0f,1.0f))/PI)*4096.0f);
    p.light=clampf(0.32f*nx+0.25f*ny+0.84f*nz,0.0f,1.0f);
  }
}
static void renderSphere(){
  static float lastYaw=10000.0f;
  static std::time_t lastLightBucket=-1;
  const std::time_t second=std::time(nullptr);
  const std::time_t lightBucket=second/30;
  if(lastLightBucket==lightBucket&&std::fabs(wrapf(yaw-lastYaw))<0.0010f)return;
  lastLightBucket=lightBucket;
  lastYaw=yaw;
  const int tw=earth?earth->w:0,th=earth?earth->h:0;
  const Uint32* day=earth?static_cast<const Uint32*>(earth->pixels):nullptr;
  const int stride=earth?earth->pitch/4:0;
  const Uint32* nightData=night?static_cast<const Uint32*>(night->pixels):nullptr;
  const int nightStride=night?night->pitch/4:0;
  const bool hasNight=night&&nightData&&night->w==tw&&night->h==th;
  const bool hasCloud=cloudLayer.size()==size_t(2048)*1024;
  std::time_t now=second;
  std::tm utc{};
  if(std::tm* info=std::gmtime(&now))utc=*info;
  const float hour=utc.tm_hour+utc.tm_min/60.f+utc.tm_sec/3600.f;
  const float sunLongitude=(12.f-hour)*15.f*DEG;
  const float sunLatitude=23.44f*DEG*std::sin((float(utc.tm_yday)-81.f)*2.f*PI/365.25f);
  const float sn=std::sin(sunLatitude),cs=std::cos(sunLatitude);
  for(int u=0;u<4096;u++){
    const float longitude=(float(u)/4096.f-.5f)*2.f*PI;
    sunCos[u]=std::cos(longitude-sunLongitude);
  }
  const int offset=int(yaw/(2*PI)*4096);
  for(int i=0;i<G*G;i++){
    const Texel& p=sphere[i];
    if(!p.valid){pixels[i]=0;continue;}
    const int ui=(p.u+offset+8192)%4096;
    const int vi=std::max(0,std::min(4095,p.v));
    Uint32 c=0xff1b4778u;
    Uint32 nightColor=0;
    int u=0,v=0;
    if(day&&tw&&th){
      u=ui*tw/4096;
      v=vi*th/4096;
      c=day[v*stride+u];
      if(hasNight)nightColor=nightData[v*nightStride+u];
    }
    const float zenith=latSin[vi]*sn+latCos[vi]*cs*sunCos[ui];
    const float daylight=clampf((zenith+0.13f)/0.30f,0.f,1.f);
    // Preserve the source's visible day texture and NASA/Black-Marble night lights.
    const float shading=(0.24f+0.76f*p.light)*(0.13f+0.87f*daylight);
    const float nightScale=hasNight?(1.f-daylight)*2.4f:0.0f;
    float red=float((c>>16)&255)*shading+float((nightColor>>16)&255)*nightScale;
    float green=float((c>>8)&255)*shading+float((nightColor>>8)&255)*nightScale;
    float blue=float(c&255)*shading+float(nightColor&255)*nightScale;
    if(hasCloud){
      const float cloud=float(cloudLayer[std::min(1023,vi*1024/4096)*2048+std::min(2047,ui*2048/4096)])/255.f;
      const float overlay=cloud*(0.18f+0.34f*daylight);
      red=red*(1.f-overlay)+229.f*overlay;
      green=green*(1.f-overlay)+237.f*overlay;
      blue=blue*(1.f-overlay)+247.f*overlay;
    }
    const float rim=p.rim;
    const float halo=clampf((rim-0.90f)*5.8f,0.f,0.6f);
    red=std::min(255.f,red+13.f*halo);
    green=std::min(255.f,green+64.f*halo);
    blue=std::min(255.f,blue+131.f*halo);
    const unsigned a=unsigned(clampf((1.f-rim)*float(G)*.5f,0.f,1.f)*255.f);
    pixels[i]=(a<<24)|
      (unsigned(clampf(red,0.f,255.f))<<16)|
      (unsigned(clampf(green,0.f,255.f))<<8)|
      unsigned(clampf(blue,0.f,255.f));
  }
  SDL_UpdateTexture(globe,nullptr,pixels.data(),G*4);
}
static void drawSky(){
  // Draw a dark native clear color and batch the fixed stars. A full-screen
  // SDL software texture copy took ~18ms on FW10.01; batched points are faster.
  static std::vector<SDL_Point> field,galaxy,bright;
  if(field.empty()){
    rng=12345;
    field.reserve(900);galaxy.reserve(650);bright.reserve(130);
    for(int i=0;i<900;i++){
      SDL_Point p{int(random32()%W),int(random32()%H)};
      field.push_back(p);
      if(i%9==0)bright.push_back(p);
    }
    rng=0x827da245u;
    for(int i=0;i<650;i++){
      const int x=int(random32()%W);
      const int y=190+int(.30f*x)+int(random32()%350)-175;
      if(y>=0&&y<H)galaxy.push_back({x,y});
    }
  }
  SDL_SetRenderDrawBlendMode(renderer,SDL_BLENDMODE_BLEND);
  SDL_SetRenderDrawColor(renderer,109,134,173,46);
  SDL_RenderDrawPoints(renderer,galaxy.data(),int(galaxy.size()));
  SDL_SetRenderDrawColor(renderer,177,201,234,145);
  SDL_RenderDrawPoints(renderer,field.data(),int(field.size()));
  SDL_SetRenderDrawColor(renderer,232,245,255,220);
  SDL_RenderDrawPoints(renderer,bright.data(),int(bright.size()));
  // A small animated twinkle layer keeps stars alive without repainting a
  // 1280 x 720 background bitmap 20 times per second.
  rng=0x8912a467u;
  const float ticks=float(SDL_GetTicks())*.001f;
  for(int i=0;i<20;i++){
    int x=int(random32()%W),y=int(random32()%H);
    float t=.5f+.5f*std::sin(float(i)*1.742f+ticks*(.5f+float(i%4)*.09f));
    box(x,y,2,2,226,233,255,Uint8(35+90*t));
  }
}

#include "life_visual_v15.hpp"

static void selectCity(int delta){
  selected=(selected+delta+CITY_COUNT)%CITY_COUNT;
  targetYaw=cities[selected].lon*DEG;
  lastInput=SDL_GetTicks();
  lastAuto=lastInput;
}

static void handleKey(SDL_Keycode key){
  if(pcMenuKey(key)){lastInput=SDL_GetTicks();return;}
  if(key==SDLK_LEFT){selectCity(-1);return;}
  if(key==SDLK_RIGHT){selectCity(1);return;}
  if(key==SDLK_UP)zoom=clampf(zoom+0.07f,0.65f,1.35f);
  if(key==SDLK_DOWN)zoom=clampf(zoom-0.07f,0.65f,1.35f);
  if(key==SDLK_SPACE)selectCity(1);
  if(key==SDLK_a)autoTour=!autoTour;
  lastInput=SDL_GetTicks();
}

static void drawUI(){
  pcDrawScene();
}

int main(int argc,char**argv){
  startupLog("main entered");
  if(const char* v=std::getenv("LAU_ASSET_DIR"))assetRoot=v;
#ifdef LAU_PS5
  SDL_SetHint(SDL_HINT_RENDER_DRIVER,"ps5agc");
#endif
  SDL_SetHint(SDL_HINT_RENDER_SCALE_QUALITY,"linear");
  if(SDL_Init(SDL_INIT_VIDEO|SDL_INIT_GAMECONTROLLER|SDL_INIT_EVENTS)!=0){
    std::fprintf(stderr,"SDL init: %s\n",SDL_GetError());
    startupLog("SDL_Init failed",SDL_GetError());return 2;
  }
  startupLog("SDL initialized");
  int windowW=W,windowH=H;
  Uint32 windowFlags=SDL_WINDOW_SHOWN;
#ifdef LAU_PS5
  SDL_DisplayMode mode{};
  if(SDL_GetDesktopDisplayMode(0,&mode)==0&&mode.w>0&&mode.h>0){
    windowW=mode.w;windowH=mode.h;
  }
  windowFlags=SDL_WINDOW_FULLSCREEN_DESKTOP;
#endif
  SDL_Window* win=SDL_CreateWindow("Life Around Us - PS5",SDL_WINDOWPOS_CENTERED,SDL_WINDOWPOS_CENTERED,
                                  windowW,windowH,windowFlags);
  if(!win){
    std::fprintf(stderr,"SDL window: %s\n",SDL_GetError());
    startupLog("SDL_CreateWindow failed",SDL_GetError());SDL_Quit();return 3;
  }
  startupLog("SDL window created");
  int rendererIndex=-1;
#ifdef LAU_PS5
  for(int i=0;i<SDL_GetNumRenderDrivers();++i){
    SDL_RendererInfo info{};
    if(SDL_GetRenderDriverInfo(i,&info)==0&&info.name&&std::strcmp(info.name,"ps5agc")==0){
      rendererIndex=i;break;
    }
  }
#endif
  renderer=SDL_CreateRenderer(win,rendererIndex,SDL_RENDERER_ACCELERATED|SDL_RENDERER_PRESENTVSYNC);
  if(!renderer){
    startupLog("accelerated renderer unavailable",SDL_GetError());
#ifdef LAU_PS5
    // Follow NahaXMB's validated VideoOut software fallback after AGC failure.
    SDL_DestroyWindow(win);win=nullptr;
    SDL_QuitSubSystem(SDL_INIT_VIDEO);
    SDL_SetHint(SDL_HINT_RENDER_DRIVER,"software");
    if(SDL_InitSubSystem(SDL_INIT_VIDEO)!=0){
      startupLog("software VideoOut init failed",SDL_GetError());
      SDL_Quit();return 4;
    }
    SDL_DisplayMode fallback{};
    if(SDL_GetDesktopDisplayMode(0,&fallback)==0&&fallback.w>=640&&fallback.h>=480){
      windowW=fallback.w;windowH=fallback.h;
    }else{
      windowW=1280;windowH=720;
    }
    float scale=std::min(1.0f,std::min(1920.0f/float(windowW),1080.0f/float(windowH)));
    int softwareW=std::max(640,(int(windowW*scale)/2)*2);
    int softwareH=std::max(480,(int(windowH*scale)/2)*2);
    if(ProsperoSDLSetRenderSize && ProsperoSDLSetRenderSize(softwareW,softwareH)<0){
      startupLog("software output allocation failed",SDL_GetError());
      SDL_Quit();return 4;
    }
    win=SDL_CreateWindow("Life Around Us - PS5",0,0,softwareW,softwareH,SDL_WINDOW_BORDERLESS);
    if(!win){
      startupLog("software VideoOut window failed",SDL_GetError());
      SDL_Quit();return 4;
    }
    startupLog("software VideoOut window ready");
#endif
    renderer=SDL_CreateRenderer(win,-1,SDL_RENDERER_SOFTWARE);
  }
  if(!renderer){
    startupLog("all renderer creation failed",SDL_GetError());
    SDL_DestroyWindow(win);SDL_Quit();return 4;
  }
  startupLog("SDL renderer initialized");
  SDL_RenderSetLogicalSize(renderer,W,H);
  for(int i=0;i<CITY_COUNT;i++){
    if(std::strcmp(cities[i].name,"Tripoli")==0){selected=i;break;}
  }
  yaw=cities[selected].lon*DEG;
  earth=loadBitmap("earth-day.bmp");
  night=loadBitmap("earth-night.bmp");
  cloudLayer=pcReadAsset("earth-clouds-alpha.bin");
  globe=SDL_CreateTexture(renderer,SDL_PIXELFORMAT_ARGB8888,SDL_TEXTUREACCESS_STREAMING,G,G);
  if(!globe){
    startupLog("SDL_CreateTexture failed",SDL_GetError());
    SDL_DestroyRenderer(renderer);SDL_DestroyWindow(win);SDL_Quit();return 5;
  }
  startupLog("globe texture created");
  SDL_SetTextureBlendMode(globe,SDL_BLENDMODE_BLEND);
  createSphere();loadFeed();lastInput=SDL_GetTicks();lastAuto=lastInput;
  pcInitUI();
  SDL_GameController* pad=nullptr;
  for(int i=0;i<SDL_NumJoysticks();i++)if(SDL_IsGameController(i)){pad=SDL_GameControllerOpen(i);break;}
  startupLog(pad?"startup controller opened":"startup no controller open");
  Uint32 lastPadScan=SDL_GetTicks();
  bool running=true;Uint32 frames=0;const char* shot=std::getenv("LAU_CAPTURE_BMP");
  while(running){
    SDL_Event ev;
    while(SDL_PollEvent(&ev)){
      if(ev.type==SDL_QUIT)running=false;
      if(ev.type==SDL_KEYDOWN&&!ev.key.repeat)handleKey(ev.key.keysym.sym);
      if(ev.type==SDL_CONTROLLERDEVICEADDED && !pad && SDL_IsGameController(ev.cdevice.which)){
        pad=SDL_GameControllerOpen(ev.cdevice.which);
        if(pad)startupLog("controller connected dynamically");
      }
      if(ev.type==SDL_CONTROLLERDEVICEREMOVED && pad &&
         SDL_JoystickInstanceID(SDL_GameControllerGetJoystick(pad))==ev.cdevice.which){
        SDL_GameControllerClose(pad);pad=nullptr;startupLog("controller disconnected");
      }
      if(ev.type==SDL_CONTROLLERBUTTONDOWN){
        const Uint8 button=ev.cbutton.button;
        if(pcMenuButton(button)){lastInput=SDL_GetTicks();continue;}
        if(button==SDL_CONTROLLER_BUTTON_DPAD_LEFT)selectCity(-1);
        else if(button==SDL_CONTROLLER_BUTTON_DPAD_RIGHT)selectCity(1);
        else if(button==SDL_CONTROLLER_BUTTON_DPAD_UP)zoom=clampf(zoom+0.07f,0.65f,1.35f);
        else if(button==SDL_CONTROLLER_BUTTON_DPAD_DOWN)zoom=clampf(zoom-0.07f,0.65f,1.35f);
        else if(button==SDL_CONTROLLER_BUTTON_A)selectCity(1);
        lastInput=SDL_GetTicks();
      }
    }
    const Uint32 scanNow=SDL_GetTicks();
    if(!pad&&scanNow-lastPadScan>=180){
      for(int i=0;i<SDL_NumJoysticks();i++){
        if(SDL_IsGameController(i)){pad=SDL_GameControllerOpen(i);if(pad){startupLog("controller connected by scan");break;}}
      }
      lastPadScan=scanNow;
    }
    if(pad&&!menu){
      float axis=SDL_GameControllerGetAxis(pad,SDL_CONTROLLER_AXIS_RIGHTX)/32767.0f;
      if(std::fabs(axis)>0.13f){
        yaw=wrapf(yaw+axis*0.027f);
        targetYaw=yaw;
        lastInput=SDL_GetTicks();
      }
      float vy=SDL_GameControllerGetAxis(pad,SDL_CONTROLLER_AXIS_RIGHTY)/32767.0f;
      if(std::fabs(vy)>0.15f){zoom=clampf(zoom-vy*0.008f,0.65f,1.4f);lastInput=SDL_GetTicks();}
    }
    Uint32 now=SDL_GetTicks();
    if(autoTour&&!menu&&now-lastInput>10000&&now-lastAuto>6500){selectCity(1);lastInput=now-11000;lastAuto=now;}
    if(frames==0)startupLog("first frame renderSphere entered");
    const Uint64 frameStarted=SDL_GetPerformanceCounter();
    yaw=wrapf(yaw+wrapf(targetYaw-yaw)*0.065f);
    renderSphere();
    const Uint64 afterGlobe=SDL_GetPerformanceCounter();
    if(frames==0)startupLog("first frame renderSphere completed");
    SDL_SetRenderDrawColor(renderer,2,5,12,255);
    SDL_RenderClear(renderer);
    drawUI();
    const Uint64 afterUi=SDL_GetPerformanceCounter();
    if(frames==0)startupLog("first frame drawUI completed");
    if(shot&&frames==1){
      SDL_Surface* s=SDL_CreateRGBSurfaceWithFormat(0,W,H,32,SDL_PIXELFORMAT_ARGB8888);
      if(s){if(SDL_RenderReadPixels(renderer,nullptr,SDL_PIXELFORMAT_ARGB8888,s->pixels,s->pitch)==0)SDL_SaveBMP(s,shot);SDL_FreeSurface(s);}
      running=false;
    }
    if(frames==0)startupLog("first frame RenderPresent entered");
    SDL_RenderPresent(renderer);
    const Uint64 afterPresent=SDL_GetPerformanceCounter();
    ++frames;
    if(frames==1)startupLog("first frame presented");
    if(frames%240==0){
      const double freq=double(SDL_GetPerformanceFrequency());
      char times[150];
      std::snprintf(times,sizeof(times),"frame=%u globe=%.2fms ui=%.2fms present=%.2fms total=%.2fms",
        unsigned(frames),1000.0*(afterGlobe-frameStarted)/freq,
        1000.0*(afterUi-afterGlobe)/freq,
        1000.0*(afterPresent-afterUi)/freq,
        1000.0*(afterPresent-frameStarted)/freq);
      startupLog("PERF",times);
    }
    if(frames%900==0)startupLog("rendering heartbeat");
    SDL_RendererInfo ri{}; SDL_GetRendererInfo(renderer,&ri); if(!(ri.flags&SDL_RENDERER_PRESENTVSYNC))SDL_Delay(16);
  }
  if(pad)SDL_GameControllerClose(pad);
  pcShutdownUI();
  if(earth)SDL_FreeSurface(earth);
  if(night)SDL_FreeSurface(night);
  SDL_DestroyTexture(globe);SDL_DestroyRenderer(renderer);SDL_DestroyWindow(win);SDL_Quit();
  startupLog("clean exit");
  return 0;
}
