#include <orbis/Pad.h>
#include <orbis/UserService.h>
extern "C" {
int scePadInit(){return 0;}
int scePadOpen(int,int,int,void*){return -1;}
int scePadReadState(int,OrbisPadData*){return -1;}
int scePadClose(int){return 0;}
int sceUserServiceInitialize(void*){return 0;}
int sceUserServiceGetInitialUser(int* user){if(user)*user=0x10000000;return 0;}
int sceUserServiceTerminate(){return 0;}
}
