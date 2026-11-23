#pragma once
extern "C" {
int sceUserServiceInitialize(void*);
int sceUserServiceGetInitialUser(int*);
int sceUserServiceTerminate();
}
