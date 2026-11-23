#!/usr/bin/env bash
set -euo pipefail
project="$(cd "$(dirname "$0")/.." && pwd)"
native_ref="$(cd "$project/../PS5-native" && pwd)"
mkdir -p "$project/build/reference"
g++ -std=c++17 -O2 -I/usr/include/SDL2 -D_REENTRANT \
  "$native_ref/src/main.cpp" -lSDL2 -o "$project/build/reference/lau-ps5-host"
SDL_VIDEODRIVER=dummy SDL_RENDER_DRIVER=software LAU_SKIP_INTRO=1 \
  LAU_ASSET_DIR="$native_ref/assets" \
  LAU_CAPTURE_BMP="$project/build/reference/ps5-reference.bmp" \
  "$project/build/reference/lau-ps5-host"
test -s "$project/build/reference/ps5-reference.bmp"
echo "PS5 source reference capture: $project/build/reference/ps5-reference.bmp"
