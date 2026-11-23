#define SDL_MAIN_HANDLED 1
#include <SDL2/SDL.h>
#include <orbis/Pad.h>
#include <orbis/UserService.h>
#include "port_scene.h"
#include <cstdio>
#include <cstdint>
#include <cstring>

// Native OpenOrbis SDL2 renderer. One texture upload per rendered frame
// replaces 518,400 individual Scene2D DrawRectangle calls.
int main() {
    life::App app;
    bool loaded=app.loadAssets("/app0/assets");
    if(!loaded)loaded=app.loadAssets("assets");
    std::printf("[LAU-PS4] assets: %s; cities: %d\n",
        loaded?"ready":"missing",int(app.cities.size()));
    if(SDL_Init(SDL_INIT_VIDEO|SDL_INIT_EVENTS)!=0) {
        std::printf("[LAU-PS4] SDL_Init: %s\n",SDL_GetError());return 2;
    }
    SDL_Window* window=SDL_CreateWindow("Life Around Us",
        SDL_WINDOWPOS_CENTERED,SDL_WINDOWPOS_CENTERED,1920,1080,SDL_WINDOW_SHOWN);
    if(!window) {
        std::printf("[LAU-PS4] SDL_CreateWindow: %s\n",SDL_GetError());
        SDL_Quit();return 3;
    }
    SDL_Renderer* renderer=SDL_CreateRenderer(window,-1,SDL_RENDERER_ACCELERATED|SDL_RENDERER_PRESENTVSYNC);
    if(!renderer)renderer=SDL_CreateRenderer(window,-1,SDL_RENDERER_SOFTWARE);
    if(!renderer) {
        std::printf("[LAU-PS4] SDL_CreateRenderer: %s\n",SDL_GetError());
        SDL_DestroyWindow(window);SDL_Quit();return 4;
    }
    SDL_Texture* texture=SDL_CreateTexture(renderer,SDL_PIXELFORMAT_RGB888,
        SDL_TEXTUREACCESS_STREAMING,life::kWidth,life::kHeight);
    if(!texture) {
        std::printf("[LAU-PS4] SDL_CreateTexture: %s\n",SDL_GetError());
        SDL_DestroyRenderer(renderer);SDL_DestroyWindow(window);SDL_Quit();return 5;
    }
#ifdef LAU_HOST_TEST
    SDL_SetHint(SDL_HINT_RENDER_DRIVER,"software");
#endif
    SDL_SetTextureBlendMode(texture,SDL_BLENDMODE_NONE);
    int pad=-1;
    if(sceUserServiceInitialize(nullptr)>=0) {
        int user=-1;
        if(sceUserServiceGetInitialUser(&user)>=0&&scePadInit()>=0)
            pad=scePadOpen(user,ORBIS_PAD_PORT_TYPE_STANDARD,0,nullptr);
    }
    uint32_t prior=0;
    uint32_t lastInput=SDL_GetTicks(),lastTour=lastInput;
    while(app.running) {
        uint32_t pressed=0;
        float rightX=0.f;
        SDL_Event event;
        while(SDL_PollEvent(&event)) {
            if(event.type==SDL_QUIT)app.running=false;
            if(event.type==SDL_KEYDOWN && event.key.repeat==0) {
                switch(event.key.keysym.sym) {
                    case SDLK_LEFT:pressed|=life::LEFT;break;
                    case SDLK_RIGHT:pressed|=life::RIGHT;break;
                    case SDLK_UP:pressed|=life::UP;break;
                    case SDLK_DOWN:pressed|=life::DOWN;break;
                    case SDLK_RETURN:pressed|=life::CROSS;break;
                    case SDLK_ESCAPE:pressed|=life::CIRCLE;break;
                    default:break;
                }
            }
        }
        if(pad>=0) {
            OrbisPadData state{};
            if(scePadReadState(pad,&state)>=0&&state.connected) {
                const uint32_t edge=state.buttons&~prior;
                prior=state.buttons;
                if(edge&ORBIS_PAD_BUTTON_LEFT)pressed|=life::LEFT;
                if(edge&ORBIS_PAD_BUTTON_RIGHT)pressed|=life::RIGHT;
                if(edge&ORBIS_PAD_BUTTON_UP)pressed|=life::UP;
                if(edge&ORBIS_PAD_BUTTON_DOWN)pressed|=life::DOWN;
                if(edge&ORBIS_PAD_BUTTON_CROSS)pressed|=life::CROSS;
                if(edge&ORBIS_PAD_BUTTON_CIRCLE)pressed|=life::CIRCLE;
                if(edge&ORBIS_PAD_BUTTON_TRIANGLE)pressed|=life::TRIANGLE;
                if(edge&ORBIS_PAD_BUTTON_OPTIONS)pressed|=life::OPTIONS;
                if(edge&ORBIS_PAD_BUTTON_L1)pressed|=life::L1;
                if(edge&ORBIS_PAD_BUTTON_R1)pressed|=life::R1;
                const float axis=(int(state.rightStick.x)-128)/127.f;
                if(axis>.17f||axis<-.17f)rightX=axis;
            }
        }
        const uint32_t now=SDL_GetTicks();
        if(pressed||rightX!=0.f)lastInput=now;
        else if(app.autoTour&&!app.menu&&now-lastInput>10000&&now-lastTour>6500) {
            app.select(1);lastTour=now;
        }
        app.input(pressed,rightX);
        app.render();
        if(SDL_UpdateTexture(texture,nullptr,app.framebuffer.data(),life::kWidth*4)!=0) {
            std::printf("[LAU-PS4] SDL_UpdateTexture: %s\n",SDL_GetError());break;
        }
        SDL_RenderClear(renderer);
        SDL_RenderCopy(renderer,texture,nullptr,nullptr);
        SDL_RenderPresent(renderer);
#ifdef LAU_HOST_TEST
        // Host-only integration proof; never compiled in OpenOrbis target.
        SDL_Surface* capture=SDL_CreateRGBSurfaceWithFormat(0,life::kWidth,life::kHeight,32,SDL_PIXELFORMAT_RGB888);
        if(capture){
            for(int y=0;y<life::kHeight;y++)
                std::memcpy(static_cast<uint8_t*>(capture->pixels)+y*capture->pitch,
                    app.framebuffer.data()+size_t(y)*life::kWidth,life::kWidth*4);
            SDL_SaveBMP(capture,"build/ps4-backend-host.bmp");
            SDL_FreeSurface(capture);
        }
        app.running=false;
#endif
    }
    if(pad>=0)scePadClose(pad);
    sceUserServiceTerminate();
    SDL_DestroyTexture(texture);
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
