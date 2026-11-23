#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"
mkdir -p build
g++ -std=c++17 -O2 -Wall -Wextra -pedantic -DLAU_HOST_TEST \
  -Itools/mock_ps4 $(pkg-config --cflags sdl2) \
  src/main_ps4.cpp src/port_scene.cpp tools/mock_ps4/mock_service.cpp \
  $(pkg-config --libs sdl2) -o build/ps4-backend-host
SDL_VIDEODRIVER=dummy SDL_RENDER_DRIVER=software \
  ./build/ps4-backend-host
test -s build/ps4-backend-host.bmp
echo "Host PS4 SDL2 backend capture: $root/build/ps4-backend-host.bmp"
echo "NOTE: mock PS4 APIs compile the backend on the host; no PS4 ELF/PKG is generated."
