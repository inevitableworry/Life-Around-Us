#!/usr/bin/env bash
set -euo pipefail
ps3dev="$(printenv PS3DEV 2>/dev/null || true)"
if [ -z "$ps3dev" ] || [ ! -x "$ps3dev/bin/ppu-g++" ]; then
  echo "NOT BUILT: PS3DEV/PSL1GHT PPU compiler is unavailable."
  echo "This repository contains portable UI source/assets and a host reference."
  exit 2
fi
echo "PS3DEV available at: $ps3dev"
echo "STOP: PS3 RSX rendering integration is not implemented; no placeholder package."
exit 3
