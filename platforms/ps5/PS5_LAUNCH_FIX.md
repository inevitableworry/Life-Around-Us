# Life Around Us PS5 native launch fix (firmware 10.01)

Date: November 23, 2026
Title: PPSA99485
Target console: <PS5_LAN_IP>
Source/build: H:\PS3 Live\PS5-native
Status: native preview launches and submits its first frame on the target console

## Verified problems and repairs

### 1. Title registration succeeded but PS5 loader refused executable

The console kernel reported:

    [rtld] ERROR: segment #2 of "eboot.bin" is not page aligned
    [rtld] align 16384 va 0x1f7810 offset 0x1fb810
    [Syscore App] processSpawn() error 0x80aa001a, errno 8

The native FSELF builder had mapped .data.rel.ro into a PT_LOAD starting
at an unaligned address even though the ELF/FSELF integrity signatures
were otherwise valid.

Repair: use an explicit 16 KiB-aligned RELRO layout and verify every
executable loadable segment's file offset, virtual address and p_align
before signing. See tools/ps5-pie.ld and
tools/verify_ps5_load_alignment.py. Four required PT_LOAD regions pass.

### 2. Loader succeeded but application crashed before main()

The next kernel log showed SIGSEGV, RIP 0x1, fault address 0x1, with
a backtrace into SDK payload __crt_start. The generic SDK-linked
payload _start expects a payload loader argument structure and cannot
be used as the PS5's shell-managed native application startup ABI.

Repair: link a native homebrew startup entry point from the local
Prospero Hi-Fi source instead. The native CRT calls _init_env(),
initializes C++ constructors, invokes main(), and uses native
exit and teardown. Rebuild via a dedicated PIE linker script and the
installed PS5 SDK. Source: src/app_crt.cpp; build: tools/build-ps5.sh.

The entry point is now src/app_crt.cpp:_start (no longer SDK
payload crt/_start.S).

### 3. Accelerated display initialization failed

The first working native boot logged:

    main entered
    SDL initialized
    SDL window created
    accelerated renderer unavailable | AGC module loading failed: (null)
    SDL renderer initialized
    globe texture created
    first frame renderSphere entered
    first frame renderSphere completed
    first frame drawUI completed
    first frame RenderPresent entered
    first frame presented
    rendering heartbeat

AGC is unavailable with this local PS5 SDL backend on the tested console.
Repair: implement the same software VideoOut fallback used by NahaXMB:
release the first SDL VideoOut window, reinitialize the video subsystem,
set the SDL software renderer hint and matching output render size,
create a borderless window and a software renderer.

The final boot log confirmed:

    main entered
    SDL initialized
    SDL window created
    accelerated renderer unavailable | AGC module loading failed: (null)
    software VideoOut window ready
    SDL renderer initialized
    globe texture created
    first frame renderSphere entered
    first frame renderSphere completed
    first frame drawUI completed
    first frame RenderPresent entered
    first frame presented

The patched frame counter increments unconditionally on PS5, so the
first-frame trace can now be relied upon.

## Native title and build validation

- Latest FSELF: build/native/eboot.bin
- FSELF SHA256: 7da284abbed0c54ae74dd5f1d9e905390403b71a40de6e6bb90992ffeb831c0e
- App runtime PRX: build/native/sce_module/libc.prx
- Runtime PRX SHA256: e6ff45d16adf687855cc3b33b0c8a4132b6504360b221e0a34c7e99fb3ba0036
- Latest packaged native title: dist/Life-Around-Us-PS5-v0.0001-native-preview.zip
- ZIP SHA256: b503c7df4a07fffed3ad5db5804c6cba486ec6043e7f6f883c6a993d0cce3daa
- Target firmware: 10.01, ShadowMount+ v1.7beta12, FTP ftpsrv.elf 0.21.1.
- Registered title: /data/homebrew/PPSA99485.
- Current console process launched through sceSystemServiceLaunchApp:
  pid 156, app ID 0x00006018.
- Native FSELF read back over raw FTP with verified SHA256.
- The host SDL2 smoke test produces a 1280×720 BMP with globe and UI.
- The PS5's live log confirms first frame rendering and SDL_RenderPresent
  returning successfully on the last deployed build.
- Native title remains version 0.0001.

The host capture endpoint was unavailable (HTTP 503), so this report
does not claim visual verification of the HDMI output. A live TV/controller
test is still appropriate. The app is a functional native preview
whose original Sony EBOOT/PRX recompilation and 133-city channel parity
remain future integration work.

## Backups and rollback

Each prior executable was preserved locally under dist/backups and on
the console with an eboot.bin.previous.* suffix. Do not alter other
homebrew titles.

To roll back only this app, replace /data/homebrew/PPSA99485/eboot.bin
with an explicitly selected backup (perform raw SELF file verification)
and restart the title via normal PS5 home screen. Registration metadata,
personal content, and other titles were never changed during these fixes.

## Third-party startup provenance

The native CRT, native PIE linker script, and EH-frame augmentation
were copied from the locally installed Prospero Hi-Fi homebrew source
(GPL-3.0-or-later, the app_crt.cpp file states that SPDX license).
See THIRD_PARTY_NOTICES.md and licenses/GPL-3.0.txt.

Original Sony PS3 files are stored separately under
H:\PS3 Live\user-source-drop\original-pkgs and
H:\PS3 Live\user-source-drop\updated-source\NPIA00002.
No original PS3 EBOOT or PRX is embedded in this new native preview.
