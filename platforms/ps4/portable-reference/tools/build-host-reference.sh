#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
shared="$(cd "$root/../../console-parity-shared/assets" && pwd)"
mkdir -p "$root/build"
g++ -std=c++17 -O2 -I/usr/include/SDL2 -D_REENTRANT "$root/src/main.cpp" -lSDL2 -o "$root/build/life-ps4-visual-host"
SDL_VIDEODRIVER=dummy SDL_RENDER_DRIVER=software LAU_SKIP_INTRO=1 LAU_ASSET_DIR="$shared" LAU_CAPTURE_BMP="$root/build/ps4-visual-reference.bmp" "$root/build/life-ps4-visual-host"
file "$root/build/ps4-visual-reference.bmp"
