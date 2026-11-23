# Life Around Us — native PS4 port skeleton

**Status (2026-11-23): source project and host preview pass; no PS4 ELF/FSELF/PKG or PS4 hardware launch.** No compiled OpenOrbis toolchain was found on BEN-PC. The code has not been validated against real PS4 SDK headers, libraries or a physical console.

Location: H:\PS3 Live\PS4-port. This new PS4 frontend uses C++, a portable CPU Earth compositor, OpenOrbis-specific controller interfaces and an SDL2 streaming RGB888 texture, followed by PS4 VideoOut through the OpenOrbis SDL backend. It does not embed or modify the PS5 executable. It has a separate title ID, BREW99486; content ID IV0000-BREW99486_00-LIFEAROUNDUS0001; project version 0.0001 (SFO APP_VER 0.01).

## Implemented source

- PS4-native entrypoint: src/main_ps4.cpp, libScePad and libSceUserService controller setup, SDL2 texture upload and presentation, optional host-only mock integration mode.
- Shared scene: src/port_scene.h and src/port_scene.cpp. Uses the shared 1280×720 viewport, oversized globe radius 720 centered at x=720, dark starfield, original day/night/cloud Earth textures, 133 projected cities with local-time and weather labels, a bottom photo/news strip, original LIVE logo, and Sony-inspired Options/Settings/Weather/Music menus.
- Data and artwork: local copies of 166 canonical assets and five shared include files plus the offline live-feed.txt snapshot, including 130 city photos. Exact SHA-256 hashes from ASSET_PARITY_MANIFEST.json can be verified. The title icon sce_sys/icon0.png is byte-identical to Web/public/favicon.png, SHA256 1b79a9e32c25808b8520df9eec937e5967c163b328599afe24550e52c6d6ba07.
- Controls: D-pad left/right selects cities; up/down zooms; L1/R1 jumps; right stick rotates; Triangle or Options opens/closes the Options menu; D-pad navigates the open menu; X selects and O backs out. Auto tour cycles cities when idle. Music and menu choices are UI placeholders without audio playback.

This is a new native UI/frontend inspired by the owner's PS3 resources and the running PS5 revival frontend. It is not a recompiled port of the original NPIA00002 PS3 executable. The original PS3 PowerPC programs, RSX shader pipeline, media playback and network service stack are unimplemented.

## Verified host previews

The existing Ubuntu WSL on BEN-PC has a working Linux C++ compiler and SDL2. Commands, from Ubuntu WSL:

    cd '/mnt/h/PS3 Live/PS4-port'
    python3 tools/verify_assets.py
    bash tools/build_host.sh
    bash tools/build_ps4_backend_host.sh
    bash tools/build_ps5_reference.sh
    # Windows Python with Pillow (Ubuntu WSL Pillow is not installed):
    python "H:\PS3 Live\PS4-port\tools\make_comparison.py"

Files generated entirely under the PS4-port/build folder:

- preview.ppm: portable PS4 scene renderer; checks that 133 cities load and selection/menu navigation works.
- ps4-backend-host.bmp: PS4 main.cpp compiled and executed using Linux SDL2 and test-only mock Orbis user and controller APIs, checking the actual SDL2 streaming texture path.
- reference/ps5-reference.bmp: separate host build compiled directly from the read-only PS5-native/src/main.cpp, as the visual acceptance target.
- preview-comparison.png: the PS5 host reference and PS4 portable renderer aligned at 1280×720, side by side.

The actual PS4 scene now has the same oversized planet, city labels and bottom image/news bar layout as the shared visual contract, but exact font pixels, dynamic cloud/shader appearance, animations, full menu behavior and live channel parity are incomplete. Host captures do not prove console speed or compatibility.

## Native OpenOrbis build

Install a complete, compiled OpenOrbis-PS4-Toolchain release under Ubuntu or another supported Unix toolchain environment. A GitHub source checkout alone does not include every prebuilt executable and library. The installation must provide the target sysroot, SDL2 headers/static library, libScePad and user-service stubs, linker script, crt1.o, create-fself, create-gp4, PkgTool.Core and the compatible sample runtime modules.

    export OO_PS4_TOOLCHAIN='/absolute/path/to/OpenOrbis-release'
    cd '/mnt/h/PS3 Live/PS4-port'
    make check-tools
    make native
    make pkg

The Makefile targets x86_64-pc-freebsd12-elf and stages a PS4 eboot.bin, generated sce_sys/param.sfo, 512-pixel title icon and original assets into an OpenOrbis-style pkg project. The pkg target also expects the matching OpenOrbis sample libc/Fios2 modules and about/right.sprx. This recipe follows public OpenOrbis samples; it has not been compiled or linked with a real OpenOrbis SDK and may require adjustment for a particular distribution.

The native package output, if all tools are present, will be IV0000-BREW99486_00-LIFEAROUNDUS0001.pkg. This filename is an output target, not a file currently present. It is not a retail-signed Sony application.

## Next verification gates

Obtain the correct OpenOrbis release, resolve any SDK API or static SDL2 dependencies, produce and inspect the native ELF/FSELF and PS4 PKG, then launch on an eligible homebrew-enabled PS4. Verify VideoOut, DualShock 4 mapping, sound-off behavior, suspend/resume and quit, offline assets, and capture actual resolution and FPS on the console. No PS4 firmware compatibility range or FPS is claimed from host rendering.

The full PS4 artifact and its assets stay inside PS4-port. Original source files at ../user-source-drop/updated-source/NPIA00002, the running PS5-native frontend, and the canonical assets remain unmodified.

## Provenance and rights

All visual mappings derive from ../console-parity-shared/PORT_SPEC.md and ASSET_PARITY_MANIFEST.json. Assets include Sony PS3 originals provided by the owner and resources from the owner's existing Life Around Us frontend; this project is for personal homebrew experimentation. Do not redistribute original Sony copyrighted assets without separate rights review. The OpenOrbis API/build examples are published at:

- https://github.com/OpenOrbis/OpenOrbis-PS4-Toolchain
- https://github.com/OpenOrbis/OpenOrbis-PS4-Toolchain/tree/master/samples/SDL2
- https://github.com/OpenOrbis/OpenOrbis-PS4-Toolchain/tree/master/samples/graphics
