#pragma once
#include <cstdint>
#define ORBIS_PAD_PORT_TYPE_STANDARD 0
#define ORBIS_PAD_BUTTON_LEFT 0x0080u
#define ORBIS_PAD_BUTTON_RIGHT 0x0020u
#define ORBIS_PAD_BUTTON_UP 0x0010u
#define ORBIS_PAD_BUTTON_DOWN 0x0040u
#define ORBIS_PAD_BUTTON_CROSS 0x4000u
#define ORBIS_PAD_BUTTON_CIRCLE 0x2000u
#define ORBIS_PAD_BUTTON_TRIANGLE 0x1000u
#define ORBIS_PAD_BUTTON_OPTIONS 0x0008u
#define ORBIS_PAD_BUTTON_L1 0x0400u
#define ORBIS_PAD_BUTTON_R1 0x0800u
struct OrbisPadStick { uint8_t x,y; };
struct OrbisPadData { uint32_t buttons; OrbisPadStick leftStick,rightStick; uint8_t connected; };
extern "C" {
int scePadInit();
int scePadOpen(int,int,int,void*);
int scePadReadState(int,OrbisPadData*);
int scePadClose(int);
}
