#include "port_scene.h"
#include <algorithm>
#include <cmath>
#include <cstdio>
#include <cstring>
#include <ctime>
#include <cstdlib>
#include <utility>
#include <fstream>
#include <sstream>

namespace life {
namespace {
constexpr float PI=3.14159265358979323846f;
constexpr uint32_t WHITE=0x00ffffff, BLUE=0x0076bbed;
uint32_t rgb(int r,int g,int b) {
    return uint32_t(std::max(0,std::min(255,r))) << 16 |
           uint32_t(std::max(0,std::min(255,g))) << 8 |
           uint32_t(std::max(0,std::min(255,b)));
}
uint32_t shade(uint32_t p,float v) {
    return rgb(int(((p>>16)&255)*v),int(((p>>8)&255)*v),int((p&255)*v));
}
void blend(std::vector<uint32_t>& b,int x,int y,uint32_t color,float alpha) {
    if(x<0||y<0||x>=kWidth||y>=kHeight)return;
    auto& dest=b[size_t(y)*kWidth+x];
    dest=rgb(int(((dest>>16)&255)*(1-alpha)+((color>>16)&255)*alpha),
             int(((dest>>8)&255)*(1-alpha)+((color>>8)&255)*alpha),
             int((dest&255)*(1-alpha)+(color&255)*alpha));
}
void rect(std::vector<uint32_t>& b,int x,int y,int w,int h,uint32_t c,float a=1.f) {
    const int x1=std::max(0,x),x2=std::min(kWidth,x+w);
    const int y1=std::max(0,y),y2=std::min(kHeight,y+h);
    for(int j=y1;j<y2;j++)for(int i=x1;i<x2;i++)blend(b,i,j,c,a);
}
void line(std::vector<uint32_t>& b,int x0,int y0,int x1,int y1,uint32_t c) {
    const int dx=abs(x1-x0),sx=x0<x1?1:-1;
    const int dy=-abs(y1-y0),sy=y0<y1?1:-1;
    int e=dx+dy;
    while(true) {
        blend(b,x0,y0,c,1.f);
        if(x0==x1&&y0==y1)break;
        int e2=2*e;
        if(e2>=dy){e+=dy;x0+=sx;}
        if(e2<=dx){e+=dx;y0+=sy;}
    }
}
// Compact 5x7 uppercase HUD font; standalone source, no platform font dependency.
struct Glyph {char symbol; uint8_t row[7];};
const Glyph font[]={
{'>',{16,8,4,8,16,0,0}},{' ',{0,0,0,0,0,0,0}},{'.',{0,0,0,0,0,12,12}},{':',{0,12,12,0,12,12,0}},
{'/',{1,2,4,8,16,0,0}},{'-',{0,0,0,31,0,0,0}},{'+',{0,4,4,31,4,4,0}},
{'?',{14,17,1,2,4,0,4}},{'(',{2,4,8,8,8,4,2}},{')',{8,4,2,2,2,4,8}},
{'0',{14,17,19,21,25,17,14}},{'1',{4,12,4,4,4,4,14}},{'2',{14,17,1,2,4,8,31}},
{'3',{30,1,1,14,1,1,30}},{'4',{2,6,10,18,31,2,2}},{'5',{31,16,30,1,1,17,14}},
{'6',{6,8,16,30,17,17,14}},{'7',{31,1,2,4,8,8,8}},{'8',{14,17,17,14,17,17,14}},
{'9',{14,17,17,15,1,2,12}},
{'A',{14,17,17,31,17,17,17}},{'B',{30,17,17,30,17,17,30}},
{'C',{14,17,16,16,16,17,14}},{'D',{30,17,17,17,17,17,30}},
{'E',{31,16,16,30,16,16,31}},{'F',{31,16,16,30,16,16,16}},
{'G',{15,16,16,23,17,17,15}},{'H',{17,17,17,31,17,17,17}},
{'I',{14,4,4,4,4,4,14}},{'J',{7,2,2,2,18,18,12}},
{'K',{17,18,20,24,20,18,17}},{'L',{16,16,16,16,16,16,31}},
{'M',{17,27,21,21,17,17,17}},{'N',{17,25,21,19,17,17,17}},
{'O',{14,17,17,17,17,17,14}},{'P',{30,17,17,30,16,16,16}},
{'Q',{14,17,17,17,21,18,13}},{'R',{30,17,17,30,20,18,17}},
{'S',{15,16,16,14,1,1,30}},{'T',{31,4,4,4,4,4,4}},
{'U',{17,17,17,17,17,17,14}},{'V',{17,17,17,17,17,10,4}},
{'W',{17,17,17,21,21,21,10}},{'X',{17,17,10,4,10,17,17}},
{'Y',{17,17,10,4,4,4,4}},{'Z',{31,1,2,4,8,16,31}}
};
void letter(std::vector<uint32_t>& b,int x,int y,char c,uint32_t color,int scale) {
    if(c>='a'&&c<='z')c=char(c-'a'+'A');
    const Glyph* found=nullptr;
    for(const auto& g:font)if(g.symbol==c){found=&g;break;}
    if(!found)found=&font[7];
    for(int row=0;row<7;row++)for(int col=0;col<5;col++)
        if(found->row[row]&(1<<(4-col)))rect(b,x+col*scale,y+row*scale,scale,scale,color);
}
void text(std::vector<uint32_t>& b,int x,int y,const std::string& label,uint32_t color=WHITE,int scale=2,int limit=45) {
    int n=0;
    for(char c:label) {
        if(n++>=limit)break;
        letter(b,x,y,c,color,scale);x+=6*scale;
    }
}
uint32_t read32(const uint8_t* p) {
    return uint32_t(p[0])|uint32_t(p[1])<<8|uint32_t(p[2])<<16|uint32_t(p[3])<<24;
}
uint16_t read16(const uint8_t* p) { return uint16_t(p[0])|uint16_t(p[1])<<8; }
}
bool Image::loadBmp(const std::string& path) {
    width=height=0;rgb.clear();
    std::ifstream f(path,std::ios::binary|std::ios::ate);
    if(!f)return false;
    const auto size=f.tellg();
    if(size<54||size>std::streampos(70*1024*1024))return false;
    std::vector<uint8_t> bytes(size_t(size),uint8_t{0});
    f.seekg(0);f.read(reinterpret_cast<char*>(bytes.data()),size);
    if(!f||bytes[0]!='B'||bytes[1]!='M')return false;
    const uint32_t off=read32(bytes.data()+10);
    const int32_t w=int32_t(read32(bytes.data()+18));
    const int32_t h=int32_t(read32(bytes.data()+22));
    const uint16_t depth=read16(bytes.data()+28);
    if(w<=0||w>8192||h==0||h==INT32_MIN||std::abs(h)>8192||
       (depth!=24&&depth!=32)||read32(bytes.data()+30)!=0)return false;
    const size_t rowSize=((uint64_t(w)*depth+31)/32)*4;
    if(off>bytes.size()||uint64_t(std::abs(h))*rowSize>bytes.size()-off)return false;
    width=w;height=std::abs(h);rgb.resize(size_t(w)*height);
    for(int y=0;y<height;y++) {
        const auto* row=bytes.data()+off+size_t(h>0?height-1-y:y)*rowSize;
        for(int x=0;x<w;x++) {
            const uint8_t* px=row+x*(depth/8);
            rgb[size_t(y)*w+x]=uint32_t(px[2])<<16|uint32_t(px[1])<<8|px[0];
        }
    }
    return true;
}
uint32_t Image::sample(int x,int y) const {
    if(rgb.empty())return 0;
    x=(x%width+width)%width;
    y=std::max(0,std::min(height-1,y));
    return rgb[size_t(y)*width+x];
}
bool App::loadAssets(const std::string& directory) {
    assetDirectory=directory;
    haveEarth=earth.loadBmp(directory+"/earth-day.bmp");
    night.loadBmp(directory+"/earth-night.bmp");
    {std::ifstream f(directory+"/earth-clouds-alpha.bin",std::ios::binary);if(f)clouds.assign(std::istreambuf_iterator<char>(f),{}); }
    {std::ifstream f(directory+"/live-channel-logo-90x50.rgba",std::ios::binary);if(f)liveLogo.assign(std::istreambuf_iterator<char>(f),{}); }
    haveSky=sky.loadBmp(directory+"/space-milkyway.bmp");
    framebuffer.resize(size_t(kWidth)*kHeight);
    std::ifstream list(directory+"/cities-v15.tsv");
    std::string row;
    std::getline(list,row);
    while(std::getline(list,row)) {
        std::stringstream in(row);
        City c;std::string lat,lon,offset,weather;
        if(!std::getline(in,c.name,'\t')||!std::getline(in,lat,'\t')||
           !std::getline(in,lon,'\t')||!std::getline(in,c.country,'\t')||
           !std::getline(in,c.photo,'\t')||!std::getline(in,offset,'\t'))continue;
        try { c.latitude=std::stof(lat);c.longitude=std::stof(lon);c.utcOffset=std::stoi(offset); }
        catch(...) { continue; }
        cities.push_back(c);
    }
    std::ifstream feed(directory+"/live-feed.txt");
    while(std::getline(feed,row)) {
        std::stringstream in(row);std::string city,temperature,headline;
        if(!std::getline(in,city,'|')||!std::getline(in,temperature,'|')||
           !std::getline(in,headline))continue;
        for(auto& c:cities)if(c.name==city){c.temperature=temperature;c.headline=headline;break;}
    }
    if(!cities.empty())yaw=cities[0].longitude*PI/180.f;
    return haveEarth&&!cities.empty();
}
void App::select(int delta) {
    if(cities.empty())return;
    selected=(selected+delta%int(cities.size())+int(cities.size()))%int(cities.size());
    loadedPhoto=-1;
    yaw=cities[selected].longitude*PI/180.f;
}
void App::input(uint32_t pressed,float rightX) {
    if((pressed&TRIANGLE)||(pressed&OPTIONS)) {
        menu=!menu;menuPage=0;menuChoice=0;
        return;
    }
    if(menu) {
        static const int lengths[]={2,3,1,2,5,5,5};
        const int n=lengths[menuPage];
        if(pressed&UP)menuChoice=(menuChoice+n-1)%n;
        if(pressed&DOWN)menuChoice=(menuChoice+1)%n;
        if(pressed&CIRCLE) {
            const int parent[]={-1,0,1,2,0,4,4};
            menuPage=parent[menuPage];
            if(menuPage<0){menu=false;menuPage=0;}
            menuChoice=0;
        } else if(pressed&CROSS) {
            switch(menuPage) {
                case 0:menuPage=menuChoice==0?1:4;break;
                case 1:if(menuChoice==0)menuPage=2;
                       else if(menuChoice==1){autoTour=!autoTour;}
                       break;
                case 2:menuPage=3;menuChoice=fahrenheit?1:0;return;
                case 3:fahrenheit=menuChoice==1;menuPage=2;break;
                case 4:if(menuChoice==0)menuPage=5;
                       else if(menuChoice==1){menuPage=6;}
                       break;
                case 5:case 6:menuPage=4;break;
            }
            menuChoice=0;
        }
        return;
    }
    if(pressed&LEFT)select(-1);
    if(pressed&RIGHT)select(1);
    if(pressed&L1)select(-8);
    if(pressed&R1)select(8);
    if(pressed&UP)zoom=std::min(1.35f,zoom+.07f);
    if(pressed&DOWN)zoom=std::max(.65f,zoom-.07f);
    yaw+=rightX*.035f;
    if(yaw>PI)yaw-=2*PI;
    if(yaw<-PI)yaw+=2*PI;
}void App::render() {
    if(framebuffer.size()!=size_t(kWidth)*kHeight)framebuffer.resize(size_t(kWidth)*kHeight);
    // 1280x720 shared console viewport; world globe radius and viewpoint
    // correspond to the reference PS5 visual frontend.
    for(int y=0;y<kHeight;y++)for(int x=0;x<kWidth;x++) {
        uint32_t bg=haveSky?sky.sample(x*sky.width/kWidth,y*sky.height/kHeight):0x00040919u;
        framebuffer[size_t(y)*kWidth+x]=shade(bg,.32f);
    }
    const int cx=720;
    const float r=720.f*zoom;
    const float latSelected=cities.empty()?0.f:cities[selected].latitude*PI/180.f;
    const int cy=360+int(r*std::sin(latSelected));
    const int xmin=std::max(0,int(cx-r)),xmax=std::min(kWidth-1,int(cx+r));
    const int ymin=std::max(0,int(cy-r)),ymax=std::min(kHeight-1,int(cy+r));
    const bool haveNight=(night.width==earth.width&&night.height==earth.height);
    const bool haveClouds=clouds.size()==size_t(2048)*1024;
    const std::time_t current=std::time(nullptr);
    const std::tm* utc=std::gmtime(&current);
    const float hour=utc?float(utc->tm_hour)+float(utc->tm_min)/60.f:12.f;
    const int day=utc?utc->tm_yday:81;
    const float sunLong=(12.f-hour)*15.f*PI/180.f;
    const float sunLat=23.44f*PI/180.f*std::sin((float(day)-81.f)*2.f*PI/365.25f);
    const float sunSin=std::sin(sunLat),sunCos=std::cos(sunLat);
    for(int y=ymin;y<=ymax;y++)for(int x=xmin;x<=xmax;x++) {
        const float dx=(x-cx)/r,dy=(y-cy)/r;
        const float rr=dx*dx+dy*dy;
        if(rr>1.f)continue;
        const float z=std::sqrt(1.f-rr);
        const float lon=std::atan2(dx,z)+yaw;
        const float lat=std::asin(-dy);
        const int u=haveEarth?int((lon/(2.f*PI)+.5f)*earth.width):0;
        const int v=haveEarth?int((.5f-lat/PI)*earth.height):0;
        const uint32_t dayColor=haveEarth?earth.sample(u,v):0x001b4778u;
        const uint32_t nightColor=haveNight?night.sample(u,v):0;
        const float zenith=std::sin(lat)*sunSin+std::cos(lat)*sunCos*std::cos(lon-sunLong);
        const float daylight=std::max(0.f,std::min(1.f,(zenith+.13f)/.3f));
        const float lighting=std::max(0.f,dx*.32f-dy*.25f+z*.84f);
        const float diffuse=(.24f+.76f*lighting)*(.13f+.87f*daylight);
        const float lamp=(1.f-daylight)*(haveNight?2.4f:0.f);
        float red=float((dayColor>>16)&255)*diffuse+float((nightColor>>16)&255)*lamp;
        float green=float((dayColor>>8)&255)*diffuse+float((nightColor>>8)&255)*lamp;
        float blue=float(dayColor&255)*diffuse+float(nightColor&255)*lamp;
        if(haveClouds) {
            const int cloudX=(u%earth.width+earth.width)%earth.width*2048/earth.width;
            const int cloudY=std::max(0,std::min(1023,v*1024/earth.height));
            const float alpha=float(clouds[size_t(cloudY)*2048+cloudX])/255.f*(.18f+.34f*daylight);
            red=red*(1.f-alpha)+229.f*alpha;
            green=green*(1.f-alpha)+237.f*alpha;
            blue=blue*(1.f-alpha)+247.f*alpha;
        }
        const float rim=std::max(0.f,std::min(.6f,(std::sqrt(rr)-.90f)*5.8f));
        framebuffer[size_t(y)*kWidth+x]=rgb(int(red+13.f*rim),int(green+64.f*rim),int(blue+131.f*rim));
    }
    // Atmospheric rings around the edge of the oversized planet.
    for(int halo=3;halo>0;--halo) {
        int radius=int(r)+halo*7;
        for(int degrees=0;degrees<360;degrees+=3) {
            const float a=float(degrees)*PI/180.f, b=float(degrees+3)*PI/180.f;
            line(framebuffer,cx+int(radius*std::cos(a)),cy+int(radius*std::sin(a)),
                cx+int(radius*std::cos(b)),cy+int(radius*std::sin(b)),
                halo==1?0x00274766:0x001b2f4b);
        }
    }
    // Project all known cities onto the visible hemisphere, showing a bounded
    // subset with enough space to read each name, weather, and local clock.
    struct Candidate{int idx,x,y;float rank;};
    std::vector<Candidate> labels;
    for(int i=0;i<int(cities.size());i++) {
        const float latitude=cities[i].latitude*PI/180.f;
        const float longitude=(cities[i].longitude*PI/180.f)-yaw;
        const float vis=std::cos(latitude)*std::cos(longitude);
        if(vis<.68f&&i!=selected)continue;
        const int px=cx+int(r*std::cos(latitude)*std::sin(longitude));
        const int py=cy-int(r*std::sin(latitude));
        if(px<-130||px>kWidth+80||py<-20||py>kHeight+40)continue;
        labels.push_back({i,px,py,vis+(i==selected?9.f:0.f)});
    }
    std::sort(labels.begin(),labels.end(),[](const Candidate& a,const Candidate& b){return a.rank>b.rank;});
    std::vector<std::pair<int,int>> placed;
    for(const auto& marker:labels) {
        if(placed.size()>=11)break;
        bool overlaps=false;
        if(marker.idx!=selected) {
            for(const auto& point:placed) {
                int ddx=marker.x-point.first,ddy=marker.y-point.second;
                if(ddx*ddx+ddy*ddy<125*125){overlaps=true;break;}
            }
        }
        if(overlaps)continue;
        placed.emplace_back(marker.x,marker.y);
        const City& city=cities[marker.idx];
        bool active=marker.idx==selected;
        rect(framebuffer,marker.x-5,marker.y-5,10,10,active?0x00f6c240:0x008b8c68,.9f);
        rect(framebuffer,marker.x-2,marker.y-2,4,4,0x00ffe683);
        const int x=std::max(10,std::min(kWidth-235,marker.x+14));
        const int y=std::max(10,std::min(kHeight-65,marker.y-26));
        text(framebuffer,x,y,city.name,active?WHITE:0x00d4dae2,active?2:1,27);
        std::string temp=city.temperature.empty()?"--":city.temperature;
        if(fahrenheit&&temp!="--")temp=std::to_string(std::atoi(temp.c_str())*9/5+32);
        temp+=fahrenheit?" F":" C";
        char localTime[16]="--:--";
        if(utc) {
            const long t=long(current)+long(city.utcOffset);
            const std::time_t local=std::time_t(t);
            const std::tm* localUtc=std::gmtime(&local);
            if(localUtc)std::snprintf(localTime,sizeof(localTime),"%02d:%02d",localUtc->tm_hour,localUtc->tm_min);
        }
        text(framebuffer,x,y+(active?22:12),temp+"  "+localTime,0x00d6dae0,1,28);
    }
    // The bottom LIVE region follows the geometry of the original PS5
    // viewer: selectable photo, city/weather line, wrapping news and badge.
    constexpr int panelTop=565;
    rect(framebuffer,0,panelTop,kWidth,155,0x00000000,.72f);
    if(loadedPhoto!=selected&&!cities.empty()) {
        photo.loadBmp(assetDirectory+"/photos/"+cities[selected].photo+".bmp");
        loadedPhoto=selected;
    }
    if(!photo.rgb.empty()) {
        for(int y=0;y<84;y++)for(int x=0;x<146;x++) {
            const uint32_t c=photo.sample(x*photo.width/146,y*photo.height/84);
            blend(framebuffer,34+x,panelTop+22+y,c,1.f);
        }
    }
    rect(framebuffer,195,panelTop+21,2,80,0x00e6eaf0,.54f);
    if(!cities.empty()) {
        const City& city=cities[selected];
        text(framebuffer,211,panelTop+14,city.name+"    "+city.temperature+" C",WHITE,2,58);
        const std::string headline=city.headline.empty()?"LOCAL NEWS AVAILABLE AFTER SYNC":city.headline;
        for(size_t i=0;i<headline.size()&&i<160;i+=62)
            text(framebuffer,211,panelTop+50+int(i/62)*19,headline.substr(i,62),0x00ecf0f5,1,62);
    }
    if(liveLogo.size()==size_t(90)*50*4) {
        for(int y=0;y<46;y++)for(int x=0;x<82;x++) {
            const size_t p=(size_t(y*50/46)*90+size_t(x*90/82))*4;
            const uint32_t c=rgb(liveLogo[p],liveLogo[p+1],liveLogo[p+2]);
            blend(framebuffer,1160+x,panelTop+33+y,c,float(liveLogo[p+3])/255.f);
        }
    }
    text(framebuffer,1110,panelTop+93,"LIVE CHANNEL",0x00bdbcc2,1,25);
    if(menu) {
        rect(framebuffer,0,0,kWidth,kHeight,0x0001050d,.84f);
        text(framebuffer,375,260,"OPTIONS",0x00575967,5);
        static const char* titles[]={"Options","Settings","Weather","Temperature","Music","Select Track","Select by Mood"};
        static const char* entries[7][5]={
            {"Settings","Music",nullptr,nullptr,nullptr},
            {"Weather","Auto Tour","Sound",nullptr,nullptr},
            {"Temperature",nullptr,nullptr,nullptr,nullptr},
            {"Celsius","Fahrenheit",nullptr,nullptr,nullptr},
            {"Select Track","Select by Mood","Disabled","Original Soundtrack","My Music"},
            {"Dawn's Theme","Daylight Theme","Afterlight Theme","Moonlight Theme","Starlight Theme"},
            {"Energetic","Calm","Dramatic","Upbeat","Electronic"}
        };
        text(framebuffer,604,303,titles[menuPage],0x00cdd2de,2);
        for(int i=0;i<5&&entries[menuPage][i];i++) {
            const bool active=menuChoice==i;
            const int row=330+i*37-(active?6:0);
            text(framebuffer,608,row,entries[menuPage][i],active?WHITE:0x00b2b7c3,active?3:2,31);
            if(active)text(framebuffer,585,row,">",WHITE,2);
        }
        text(framebuffer,32,639,std::string("> ")+titles[menuPage],0x00d3d0d9,2);
        text(framebuffer,535,669,"X SELECT",WHITE,2);
        text(framebuffer,715,669,"O BACK",WHITE,2);
    }
}
}