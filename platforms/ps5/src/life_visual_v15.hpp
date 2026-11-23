#pragma once
// Life Around Us v1.5 PC visual-reference HUD. This layer is renderer-agnostic
// SDL2 and intentionally uses user-provided PS3/PC resource images.
#include "font_widths_v15.inc"
#include "menu_font_widths_v15.inc"
struct LAUGlyph { int x, y, w, h, advance; };
#include "font_glyph_metrics_v2.inc"
#include "menu_font_glyph_metrics_v2.inc"
#include "font_raster_sizes_v4.inc"
#include "menu_font_raster_sizes_v4.inc"
#include <ctime>
#include <iomanip>
#include <unordered_map>
#include <cstdint>

static SDL_Texture* pcFont=nullptr;
static SDL_Texture* pcMenuFont=nullptr;
static bool pcUsingMenuFont=false;
static std::vector<unsigned char> pcFontRaw,pcMenuFontRaw;
static std::array<std::vector<unsigned char>,13> pcSmallFont,pcSmallMenuFont;
static std::unordered_map<std::string,SDL_Texture*> pcTextCache;
static unsigned pcTextCacheMisses=0;

static SDL_Texture* pcLiveLogo=nullptr;
static SDL_Texture* pcPhoto=nullptr;
static SDL_Texture* pcSplash=nullptr;
static int pcLoadedPhoto=-1;
static Uint32 pcBootTime=0;
static float targetYaw=0.0f;
static float cameraY=360.0f;

enum class PCMenu {None,Options,Settings,Weather,Temperature,Music,Track,Mood};
static PCMenu pcMenu=PCMenu::None;
static int pcChoice=0;
static int pcTrack=0;
static int pcMood=0;

static std::vector<unsigned char> pcReadAsset(const std::string& name) {
  for(const auto& dir:{assetRoot,std::string("/data/life-around-us/assets"),std::string("assets")}){
    std::ifstream in(dir+"/"+name,std::ios::binary);
    if(!in.good())continue;
    return std::vector<unsigned char>(std::istreambuf_iterator<char>(in),{});
  }
  return {};
}
static SDL_Surface* pcReadBMP(const std::string& name) {
  for(const auto& dir:{assetRoot,std::string("/data/life-around-us/assets"),std::string("assets")}){
    SDL_Surface* surf=SDL_LoadBMP((dir+"/"+name).c_str());
    if(surf)return surf;
  }
  return nullptr;
}
static SDL_Texture* pcReadRGBATexture(const std::string& name,int width,int height) {
  auto data=pcReadAsset(name);
  if(data.size()!=size_t(width)*height*4)return nullptr;
  SDL_Texture* t=SDL_CreateTexture(renderer,SDL_PIXELFORMAT_ABGR8888,SDL_TEXTUREACCESS_STATIC,width,height);
  if(!t)return nullptr;
  if(SDL_UpdateTexture(t,nullptr,data.data(),width*4)!=0){SDL_DestroyTexture(t);return nullptr;}
  SDL_SetTextureBlendMode(t,SDL_BLENDMODE_BLEND);
  return t;
}
static void pcUnloadPhoto(){
  if(pcPhoto){SDL_DestroyTexture(pcPhoto);pcPhoto=nullptr;}
  pcLoadedPhoto=-1;
}
static void pcGetPhoto(int index){
  if(pcLoadedPhoto==index)return;
  pcUnloadPhoto();pcLoadedPhoto=index;
  const std::string path=std::string("photos/")+cities[index].photo+".bmp";
  SDL_Surface* bmp=pcReadBMP(path);
  if(bmp){pcPhoto=SDL_CreateTextureFromSurface(renderer,bmp);SDL_FreeSurface(bmp);}
}
static void pcInitUI(){
  pcFontRaw=pcReadAsset("font-atlas-40.rgba");
  pcMenuFontRaw=pcReadAsset("menu-font-atlas-40.rgba");
  pcFont=pcReadRGBATexture("font-atlas-40.rgba",1024,384);
  pcMenuFont=pcReadRGBATexture("menu-font-atlas-40.rgba",1024,384);
  startupLog("whole-text compositor",pcFontRaw.size()==1024u*384u*4u?"font mask ready":"font mask absent");
  if(SDL_Surface* background=pcReadBMP("space-milkyway.bmp")){
    skyTexture=SDL_CreateTextureFromSurface(renderer,background);
    SDL_FreeSurface(background);
  }
  pcLiveLogo=pcReadRGBATexture("live-channel-logo-90x50.rgba",90,50);
  if(SDL_Surface* img=pcReadBMP("startup-splash.bmp")){
    pcSplash=SDL_CreateTextureFromSurface(renderer,img);
    SDL_FreeSurface(img);
  }
  pcBootTime=SDL_GetTicks();
#ifndef LAU_PS5
  if(std::getenv("LAU_SKIP_INTRO"))pcBootTime-=3401;
#endif
  targetYaw=yaw;
  cameraY=float(H)/2.0f+720.0f*std::sin(cities[selected].lat*DEG);
  pcGetPhoto(selected);
  startupLog(pcFont?"PC font atlas ready":"PC font atlas unavailable");
  startupLog(pcLiveLogo?"Original LIVE badge ready":"Original LIVE badge unavailable");
}
static void pcShutdownUI(){
  pcUnloadPhoto();
  for(auto& item:pcTextCache)SDL_DestroyTexture(item.second);
  pcTextCache.clear();
  pcFontRaw.clear();pcMenuFontRaw.clear();
  for(auto& m:pcSmallFont)m.clear();
  for(auto& m:pcSmallMenuFont)m.clear();
  if(pcFont){SDL_DestroyTexture(pcFont);pcFont=nullptr;}
  if(pcMenuFont){SDL_DestroyTexture(pcMenuFont);pcMenuFont=nullptr;}
  if(skyTexture){SDL_DestroyTexture(skyTexture);skyTexture=nullptr;}
  if(pcLiveLogo){SDL_DestroyTexture(pcLiveLogo);pcLiveLogo=nullptr;}
  if(pcSplash){SDL_DestroyTexture(pcSplash);pcSplash=nullptr;}
}
static int pcTextWidth(const std::string& s,float scale){
  if(scale<=0)return 0;
  const bool small=scale<0.75f;
  // Only the large decorative heading uses the condensed Art Deco face.
  // Normal menu labels must use the readable, hinted UI sans font.
  const bool menu=pcUsingMenuFont && !small;
  const int size=std::min(24,std::max(12,int(scale*(menu?40.f:46.f)+0.5f)));
  const LAUGlyph* raster=menu?
      menu_font_raster_sizes_v4[size-12]:font_raster_sizes_v4[size-12];
  int width=0;
  for(unsigned char c:s){
    if(c>=32&&c<=126)
      width+=small?raster[c-32].advance:
          std::max(1,int((menu?menu_font_advances_v15[c-32]:font_advances_v15[c-32])*scale+.5f));
    else if(c>=128)width+=small?size/2:std::max(1,int(17*scale+.5f));
  }
  return width;
}
// The text cache stores complete lines: no per-glyph SDL_RenderCopy calls.
// Compositing overlapping glyph pixels occurs only in our byte buffer, and
// is independent of PS5 software VideoOut alpha-write quirks.
static void pcText(const std::string& s,int x,int y,float scale=0.46f,
                   Uint8 r=235,Uint8 g=238,Uint8 b=241,Uint8 alpha=230) {
  if(s.empty()||scale<=0.0f)return;
  const bool small=scale<0.75f;
  // Condensed Art Deco at 14-24px made 'Settings', 'Music' and city
  // menu labels cramped. Use the hinted UI sans at native pixel sizes.
  const bool menu=pcUsingMenuFont && !small && !pcMenuFontRaw.empty();
  const int size=std::min(24,std::max(12,int(scale*(menu?40.f:46.f)+0.5f)));
  auto& cached=menu?pcSmallMenuFont[size-12]:pcSmallFont[size-12];
  if(small&&cached.empty()){
    cached=pcReadAsset(std::string(menu?"menu_font":"font")+"-size-"+std::to_string(size)+".alpha");
    if(cached.size()!=1024u*384u){startupLog("hinted font mask failed");return;}
  }
  const auto& atlas=small?cached:(menu?pcMenuFontRaw:pcFontRaw);
  if(atlas.size()!=(small?1024u*384u:1024u*384u*4u))return;
  const LAUGlyph* metrics=small?
     (menu?menu_font_raster_sizes_v4[size-12]:font_raster_sizes_v4[size-12]):
     (menu?menu_font_glyphs_v2:font_glyphs_v2);
  // Avoid colour-modulation state leaks between glyph sprites: the full
  // coloured line is uploaded as one texture and drawn without texture mods.
  const std::string key=std::to_string(menu)+":"+std::to_string(int(scale*10000.0f+0.5f))+":"+
      std::to_string((unsigned(r)<<24)|(unsigned(g)<<16)|(unsigned(b)<<8)|unsigned(alpha))+":"+s;
  auto it=pcTextCache.find(key);
  SDL_Texture* textTex=nullptr;
  int actualWidth=0,actualHeight=0;
  if(it!=pcTextCache.end()){
    textTex=it->second;
    if(SDL_QueryTexture(textTex,nullptr,nullptr,&actualWidth,&actualHeight)!=0)return;
  }else{
    int pen=0;
    for(unsigned char c:s){
      if(c>126)pen+=small?size/2:std::max(1,int(14.0f*scale+0.5f));
      else if(c>=32)pen+=small?metrics[c-32].advance:std::max(1,int(metrics[c-32].advance*scale+0.5f));
    }
    actualWidth=std::max(4,std::min(1100,pen+6));
    actualHeight=small?size+19:std::max(4,std::min(220,int(64.0f*scale+0.5f)+4));
    std::vector<unsigned char> rgba(size_t(actualWidth)*actualHeight*4u,0);
    pen=0;
    for(unsigned char c:s){
      if(c>126){pen+=small?size/2:std::max(1,int(14.0f*scale+0.5f));continue;}
      if(c<32)continue;
      const int idx=int(c)-32;
      const LAUGlyph& glyph=metrics[idx];
      if(glyph.w>0&&glyph.h>0){
        // Hinted glyphs have already been rasterized at display pixel size,
        // so no downsampling or nearest-pixel stroke loss occurs.
        const int dw=small?glyph.w:std::max(1,int(glyph.w*scale+0.5f));
        const int dh=small?glyph.h:std::max(1,int(glyph.h*scale+0.5f));
        const int dx0=pen+(small?glyph.x:int(glyph.x*scale+0.5f));
        const int dy0=small?glyph.y:int(glyph.y*scale+0.5f);
        for(int dy=0;dy<dh;dy++){
          const int py=dy0+dy;
          if(py<0||py>=actualHeight)continue;
          const int sy=idx/16*64+glyph.y+std::min(glyph.h-1,(dy*glyph.h)/dh);
          for(int dx=0;dx<dw;dx++){
            const int px=dx0+dx;
            if(px<0||px>=actualWidth)continue;
            const int sx=idx%16*64+glyph.x+std::min(glyph.w-1,(dx*glyph.w)/dw);
            const unsigned sourceAlpha=small?atlas[size_t(sy)*1024+sx]:
                atlas[(size_t(sy)*1024+sx)*4+3];
            // Preserve the fractional anti-aliasing of the baked glyph.
            // Previously 165/170-alpha labels faded into the spinning Earth.
            const unsigned glyphOpacity=small?std::max<unsigned>(226u,alpha):alpha;
            const unsigned srcAlpha=(sourceAlpha*glyphOpacity+127)/255;
            if(srcAlpha==0)continue;
            unsigned char* dst=rgba.data()+(size_t(py)*actualWidth+px)*4u;
            const unsigned previous=dst[3];
            dst[0]=r;dst[1]=g;dst[2]=b;
            dst[3]=Uint8(srcAlpha+(previous*(255-srcAlpha)+127)/255);
          }
        }
      }
      pen+=small?glyph.advance:std::max(1,int(glyph.advance*scale+0.5f));
    }
    if(small){
      // Native dark one-pixel drop shadow: render behind the line in one
      // backing buffer so it cannot overwrite neighboring bright strokes.
      // This keeps glyph edges legible on both day and night Earth imagery.
      std::vector<unsigned char> shaded(rgba.size(),0);
      for(int yy=0;yy<actualHeight-2;yy++)for(int xx=0;xx<actualWidth-1;xx++){
        const size_t src=(size_t(yy)*actualWidth+xx)*4u;
        const unsigned a=rgba[src+3];
        if(!a)continue;
        const size_t dst=(size_t(yy+2)*actualWidth+xx+1)*4u;
        shaded[dst]=3;shaded[dst+1]=8;shaded[dst+2]=20;
        shaded[dst+3]=std::max<unsigned>(shaded[dst+3],(a*155u+127u)/255u);
      }
      for(size_t i=0;i<rgba.size();i+=4){
        const unsigned a=rgba[i+3];
        if(!a)continue;
        const unsigned behind=shaded[i+3];
        shaded[i]=rgba[i];shaded[i+1]=rgba[i+1];shaded[i+2]=rgba[i+2];
        shaded[i+3]=Uint8(a+(behind*(255u-a)+127u)/255u);
      }
      rgba.swap(shaded);
    }
    textTex=SDL_CreateTexture(renderer,SDL_PIXELFORMAT_ABGR8888,
                              SDL_TEXTUREACCESS_STATIC,actualWidth,actualHeight);
    if(!textTex){startupLog("text cache texture failed",SDL_GetError());return;}
    if(SDL_UpdateTexture(textTex,nullptr,rgba.data(),actualWidth*4)!=0){
      startupLog("text cache upload failed",SDL_GetError());
      SDL_DestroyTexture(textTex);return;
    }
    SDL_SetTextureBlendMode(textTex,SDL_BLENDMODE_BLEND);
    SDL_SetTextureColorMod(textTex,255,255,255);
    SDL_SetTextureAlphaMod(textTex,255);
    // Bounded cache: recurring labels/time updates cannot accumulate textures
    // indefinitely in a session that runs overnight.
    if(pcTextCache.size()>320){
      for(auto& item:pcTextCache)SDL_DestroyTexture(item.second);
      pcTextCache.clear();
    }
    pcTextCache.emplace(key,textTex);
    ++pcTextCacheMisses;
    if(pcTextCacheMisses==1)startupLog("whole-text cache first texture created");
  }
  SDL_Rect rect{x,y,actualWidth,actualHeight};
  SDL_RenderCopy(renderer,textTex,nullptr,&rect);
}
static std::string pcLocalTime(int i) {
  const auto now=std::time(nullptr);
  const std::time_t local=now+static_cast<std::time_t>(cities[i].tz);
  std::tm* clock=std::gmtime(&local);
  if(!clock)return "";
  char s[32];std::strftime(s,sizeof(s),"%I:%M %p",clock);
  return std::string(s);
}
static std::string pcTemp(int i) {
  const std::string& value=feed[i].temp;
  if(value=="--"||value.empty())return "--";
  if(!fahrenheit)return value+" C";
  const int c=std::atoi(value.c_str());
  return std::to_string(int(c*9.f/5.f+32.5f))+" F";
}
static void pcWrappedHeadline(const std::string& paragraph,int x,int y,int maxWidth,int maxLines){
  std::istringstream words(paragraph);
  std::string word,line;
  int written=0;
  while(words>>word && written<maxLines){
    if(word.size()>64)word.resize(64);
    std::string proposed=line.empty()?word:line+" "+word;
    if(pcTextWidth(proposed,0.40f)>maxWidth&&!line.empty()){
      pcText(std::string("- ")+line,x,y+written*20,0.40f,237,240,242,235);
      written++;line=word;
    }else{line=proposed;}
  }
  if(!line.empty()&&written<maxLines)pcText(std::string("- ")+line,x,y+written*20,0.40f,237,240,242,235);
}
static void pcCityMarkers(int cx,int cy,int radius){
  struct Candidate{int i,x,y;float visibility;};
  std::vector<Candidate> show;
  show.reserve(CITY_COUNT);
  for(int i=0;i<CITY_COUNT;i++){
    const float latitude=cities[i].lat*DEG;
    const float longitude=wrapf(cities[i].lon*DEG-yaw);
    const float visible=std::cos(latitude)*std::cos(longitude);
    if(visible<0.68f && i!=selected)continue;
    const int x=cx+int(radius*std::cos(latitude)*std::sin(longitude));
    const int y=cy-int(radius*std::sin(latitude));
    if(x<-130||x>W+80||y<-20||y>H+40)continue;
    show.push_back({i,x,y,visible+(i==selected?9.f:0.f)});
  }
  std::sort(show.begin(),show.end(),[](const Candidate& a,const Candidate& b){return a.visibility>b.visibility;});
  std::vector<SDL_Point> placed;
  const int countLimit=12;
  for(const auto& city:show){
    if(placed.size()>=countLimit)break;
    if(city.i!=selected){
      bool overlaps=false;
      for(const auto& prior:placed){
        int dx=city.x-prior.x,dy=city.y-prior.y;
        if(dx*dx+dy*dy<125*125){overlaps=true;break;}
      }
      if(overlaps)continue;
    }
    // City labels that would land behind the lower news/Live Channel HUD
    // were colliding with the footer and with each other at night.
    // The selected city remains visible in its dedicated detail panel.
    if(city.y>520)continue;
    placed.push_back({city.x,city.y});
    bool active=city.i==selected;
    // Weather icon/position marker, with the warm Sony glow.
    box(city.x-6,city.y-6,12,12,246,194,64,active?240:120);
    box(city.x-3,city.y-3,6,6,255,230,131,active?255:205);
    const int tx=std::max(9,std::min(W-230,city.x+14));
    const int ty=std::max(8,std::min(H-51,city.y-24));
    pcText(cities[city.i].name,tx,ty,active?0.49f:0.36f,240,241,243,active?247:200);
    const std::string detail=pcTemp(city.i)+"  "+pcLocalTime(city.i);
    pcText(detail,tx,ty+(active?22:17),active?0.40f:0.34f,215,216,217,active?221:170);
  }
}
static void pcLiveOverlay(){
  pcGetPhoto(selected);
  const int top=565;
  box(0,top,W,155,0,0,0,125);
  if(pcPhoto){
    SDL_Rect dst{34,top+22,146,84};
    SDL_RenderCopy(renderer,pcPhoto,nullptr,&dst);
  }
  box(195,top+21,2,80,230,234,240,80);
  const std::string detail=std::string(cities[selected].name)+"    "+pcTemp(selected)+"     "+pcLocalTime(selected);
  pcText(detail,211,top+13,0.47f,245,245,245,245);
  pcWrappedHeadline(feed[selected].headline,211,top+49,700,3);
  if(pcLiveLogo){
    SDL_SetTextureColorMod(pcLiveLogo,255,255,255);
    SDL_SetTextureAlphaMod(pcLiveLogo,245);
    SDL_Rect logo{1160,top+33,82,46};
    SDL_RenderCopy(renderer,pcLiveLogo,nullptr,&logo);
  }
  pcText("LIVE CHANNEL",1103,top+90,0.31f,189,188,190,175);
}
static const char* pcMenuLabels(PCMenu page,int index) {
  static const char* options[]={"Settings","Music"};
  static const char* settings[]={"Weather","Auto Tour","Sound"};
  static const char* weather[]={"Temperature"};
  static const char* temperature[]={"Celsius","Fahrenheit"};
  static const char* music[]={"Select Track","Select by Mood","Disabled","Original Soundtrack","My Music"};
  static const char* tracks[]={"Dawn's Theme","Daylight Theme","Afterlight Theme","Moonlight Theme","Starlight Theme"};
  static const char* moods[]={"Energetic","Calm","Dramatic","Upbeat","Electronic"};
  const char* const* labels=nullptr;int len=0;
  switch(page){
    case PCMenu::Options:labels=options;len=2;break;
    case PCMenu::Settings:labels=settings;len=3;break;
    case PCMenu::Weather:labels=weather;len=1;break;
    case PCMenu::Temperature:labels=temperature;len=2;break;
    case PCMenu::Music:labels=music;len=5;break;
    case PCMenu::Track:labels=tracks;len=5;break;
    case PCMenu::Mood:labels=moods;len=5;break;
    default:break;
  }
  return index>=0&&index<len?labels[index]:nullptr;
}
static int pcMenuSize(PCMenu page){
  int n=0;while(pcMenuLabels(page,n))n++;return n;
}
static void pcMenuBack(){
  switch(pcMenu){
    case PCMenu::None:break;
    case PCMenu::Options:pcMenu=PCMenu::None;menu=false;break;
    case PCMenu::Settings:case PCMenu::Music:pcMenu=PCMenu::Options;break;
    case PCMenu::Weather:pcMenu=PCMenu::Settings;break;
    case PCMenu::Temperature:pcMenu=PCMenu::Weather;break;
    case PCMenu::Track:case PCMenu::Mood:pcMenu=PCMenu::Music;break;
  }
  pcChoice=0;
}
static void pcMenuEnter(){
  switch(pcMenu){
    case PCMenu::Options:pcMenu=pcChoice==0?PCMenu::Settings:PCMenu::Music;pcChoice=0;break;
    case PCMenu::Settings:
      if(pcChoice==0)pcMenu=PCMenu::Weather;
      else if(pcChoice==1)autoTour=!autoTour;
      pcChoice=0;break;
    case PCMenu::Weather:pcMenu=PCMenu::Temperature;pcChoice=fahrenheit?1:0;break;
    case PCMenu::Temperature:fahrenheit=pcChoice==1;pcMenu=PCMenu::Weather;pcChoice=0;break;
    case PCMenu::Music:
      if(pcChoice==0)pcMenu=PCMenu::Track;
      else if(pcChoice==1)pcMenu=PCMenu::Mood;
      else if(pcChoice==2)pcTrack=-1;
      else if(pcChoice==3)pcTrack=0;
      pcChoice=0;break;
    case PCMenu::Track:pcTrack=pcChoice;pcMenu=PCMenu::Music;pcChoice=0;break;
    case PCMenu::Mood:pcMood=pcChoice;pcMenu=PCMenu::Music;pcChoice=0;break;
    default:break;
  }
}
static void pcMenuToggle(){
  if(menu){menu=false;pcMenu=PCMenu::None;pcChoice=0;}
  else{menu=true;pcMenu=PCMenu::Options;pcChoice=0;}
}
static void pcMenuMove(int delta){
  const int count=pcMenuSize(pcMenu);
  if(count)pcChoice=(pcChoice+delta+count)%count;
}
static bool pcMenuKey(SDL_Keycode key){
  if(key==SDLK_s||key==SDLK_ESCAPE){pcMenuToggle();return true;}
  if(!menu)return false;
  if(key==SDLK_UP){pcMenuMove(-1);return true;}
  if(key==SDLK_DOWN){pcMenuMove(1);return true;}
  if(key==SDLK_BACKSPACE){pcMenuBack();return true;}
  if(key==SDLK_RETURN||key==SDLK_SPACE){pcMenuEnter();return true;}
  return true;
}
static bool pcMenuButton(Uint8 button){
  if(button==SDL_CONTROLLER_BUTTON_START||button==SDL_CONTROLLER_BUTTON_Y){pcMenuToggle();return true;}
  if(!menu)return false;
  if(button==SDL_CONTROLLER_BUTTON_B){pcMenuBack();return true;}
  if(button==SDL_CONTROLLER_BUTTON_DPAD_UP){pcMenuMove(-1);return true;}
  if(button==SDL_CONTROLLER_BUTTON_DPAD_DOWN){pcMenuMove(1);return true;}
  if(button==SDL_CONTROLLER_BUTTON_A){pcMenuEnter();return true;}
  return true;
}
static void pcDrawMenu(){
  if(!menu)return;
  pcUsingMenuFont=true;
  box(0,0,W,H,2,5,13,182);
  pcText("OPTIONS",W/2-265,260,2.60f,140,139,142,28);
  const char* title="Options";
  switch(pcMenu){
    case PCMenu::Settings:title="Settings";break;
    case PCMenu::Weather:title="Weather";break;
    case PCMenu::Temperature:title="Temperature";break;
    case PCMenu::Music:title="Music";break;
    case PCMenu::Track:title="Select Track";break;
    case PCMenu::Mood:title="Select by Mood";break;
    default:break;
  }
  pcText(title,604,303,0.45f,210,207,212,196);
  const int items=pcMenuSize(pcMenu);
  const int firstY=330;
  for(int i=0;i<items;i++){
    const char* label=pcMenuLabels(pcMenu,i);
    if(!label)continue;
    const bool active=pcChoice==i;
    const float scale=active?0.61f:0.43f;
    const int targetY=firstY+i*33+(active?-7:0);
    pcText(label,608,targetY,scale,242,244,246,active?255:165);
    if(active)pcText(">",585,targetY+6,0.45f,240,239,238,245);
  }
  pcText(std::string("> ")+title,32,639,0.33f,210,208,210,195);
  pcText("X  Select",535,669,0.40f,230,229,233,224);
  pcText("O  Back",710,669,0.40f,230,229,233,224);
  pcUsingMenuFont=false;
}
static void pcDrawScene(){
  const Uint32 elapsed=SDL_GetTicks()-pcBootTime;
  if(pcSplash && elapsed<3400){
    SDL_Rect full{0,0,W,H};
    SDL_RenderCopy(renderer,pcSplash,nullptr,&full);
    return;
  }
  const Uint64 perfStart=SDL_GetPerformanceCounter();
  drawSky();
  const Uint64 perfSky=SDL_GetPerformanceCounter();
  const float radiusF=720.0f*zoom;
  int r=int(radiusF);
  const int cx=720;
  const float targetCy=float(H)/2.0f+radiusF*std::sin(cities[selected].lat*DEG);
  cameraY+=(targetCy-cameraY)*0.045f;
  const int cy=int(cameraY);
  for(int halo=3;halo>0;--halo){
    const int a=r+halo*7;
    const Uint8 opacity=Uint8(19+12*halo);
    SDL_SetRenderDrawBlendMode(renderer,SDL_BLENDMODE_BLEND);
    SDL_SetRenderDrawColor(renderer,54,108,170,opacity);
    for(int angle=0;angle<360;angle+=2){
      const float t=angle*DEG,n=(angle+2)*DEG;
      SDL_RenderDrawLine(renderer,cx+int(a*std::cos(t)),cy+int(a*std::sin(t)),
                        cx+int(a*std::cos(n)),cy+int(a*std::sin(n)));
    }
  }
  SDL_Rect dest{cx-r,cy-r,2*r,2*r};
  SDL_RenderCopy(renderer,globe,nullptr,&dest);
  const Uint64 perfGlobe=SDL_GetPerformanceCounter();
  // The Options view keeps the animated globe but hides city label text:
  // otherwise city names and times show through the menu and corrupt the
  // visual legibility of the interactive menu choices.
  if(!menu)pcCityMarkers(cx,cy,r);
  const Uint64 perfCities=SDL_GetPerformanceCounter();
  pcLiveOverlay();
  const Uint64 perfOverlay=SDL_GetPerformanceCounter();
  pcDrawMenu();
  const Uint64 perfMenu=SDL_GetPerformanceCounter();
  static unsigned perfFrameCounter=0;
  if(++perfFrameCounter%240==0){
    const double tick=1000.0/double(SDL_GetPerformanceFrequency());
    char buffer[190];
    std::snprintf(buffer,sizeof(buffer),
      "sky=%.2fms earth-copy=%.2fms city-labels=%.2fms overlay=%.2fms menus=%.2fms",
      (perfSky-perfStart)*tick,(perfGlobe-perfSky)*tick,
      (perfCities-perfGlobe)*tick,(perfOverlay-perfCities)*tick,
      (perfMenu-perfOverlay)*tick);
    startupLog("UI_PERF",buffer);
  }
}
