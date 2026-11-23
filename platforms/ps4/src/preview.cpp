#include "port_scene.h"
#include <cstdio>
#include <fstream>
#include <string>
int main(int argc,char** argv) {
    const std::string asset=(argc>1)?argv[1]:"assets";
    const std::string output=(argc>2)?argv[2]:"build/preview.ppm";
    life::App app;
    if(!app.loadAssets(asset)) {
        std::fprintf(stderr,"Assets missing: earth=%d, cities=%zu, sky=%d\n",
            app.haveEarth,app.cities.size(),app.haveSky);
        return 3;
    }
    app.select(0);
    app.render();
    std::ofstream f(output,std::ios::binary);
    if(!f) { std::fprintf(stderr,"Cannot write: %s\n",output.c_str());return 4; }
    f<<"P6\n"<<life::kWidth<<" "<<life::kHeight<<"\n255\n";
    for(auto p:app.framebuffer) {
        const char rgb[3]={char(p>>16),char(p>>8),char(p)};
        f.write(rgb,3);
    }
    if(!f)return 5;
    app.input(life::RIGHT);
    app.input(life::TRIANGLE);
    app.render();
    if(app.cities.size()<2||!app.menu||app.selected!=1)return 6;
    std::printf("HOST PREVIEW PASS; cities=%zu, earth=%dx%d, sky=%dx%d; saved %s\n",
        app.cities.size(),app.earth.width,app.earth.height,
        app.sky.width,app.sky.height,output.c_str());
    return 0;
}
