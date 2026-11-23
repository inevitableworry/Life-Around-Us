#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"
mkdir -p build
g++ -std=c++17 -O2 -Wall -Wextra -pedantic \
  src/port_scene.cpp src/preview.cpp -o build/preview
./build/preview assets build/preview.ppm
echo "Portable renderer capture: $root/build/preview.ppm"
