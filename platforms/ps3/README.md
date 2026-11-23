# Life Around Us — PlayStation 3 port (started)

Port source and reference resources created November 23, 2026. This is a PS3
development worktree, **not** a completed PS3 EBOOT or PKG.

The source tree is a portable SDL2 visual reference derived from the actual
PS5 preview. It maintains the globe/UI logic, 133 cities, 130 city photos,
night/day/cloud resources and menus for comparison with PS4/PS5.
Resources are pinned by ../console-parity-shared/ASSET_PARITY_MANIFEST.json.

The original 512px website globe is copied byte-for-byte to
assets/original-globe-512.png and adapted to assets/ICON0.PNG (320x176).

Build a host visual reference:
  wsl -d Ubuntu -- bash "/mnt/h/PS3 Live/PS3-port/tools/build-host-reference.sh"

Native PS3 packaging is BLOCKED: PSL1GHT/PS3DEV PPU toolchain and a PS3-specific
RSX/SDL2 or Tiny3D renderer are not installed. Original Sony PS3 binary/files
remain separately at H:\PS3 Live\user-source-drop\updated-source\NPIA00002.
No claim of a native PS3 build, PKG or hardware run is warranted.

Next: implement PS3 RSX drawing, pad/network/audio adapters, a PSL1GHT package
build, then test in RPCS3 and physical PS3 hardware when available.
