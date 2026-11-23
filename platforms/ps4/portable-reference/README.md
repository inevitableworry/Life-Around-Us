# PS4 pixel-parity host reference (NOT a native PS4 build)

This host SDL2 renderer uses the same portable main.cpp, glyph data and shared
assets as the current PS5 native title, so it is the target UI reference for
the native OpenOrbis prototype one directory above.
Build and generate a real 1280x720 BMP with:
wsl -d Ubuntu -- bash "/mnt/h/PS3 Live/PS4-port/portable-reference/tools/build-host-reference.sh"

The PS4-native prototype at PS4-port/src has its own Scene2D renderer that is
not yet visually equivalent. The host reference is not a PS4 EBOOT/PKG and
cannot be installed on PS4. All common assets are pinned by
H:\PS3 Live\console-parity-shared\ASSET_PARITY_MANIFEST.json.
