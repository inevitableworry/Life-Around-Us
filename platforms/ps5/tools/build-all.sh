#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
bash "$root/tools/build-ps5.sh"
bash "$root/tools/convert-native.sh"
python3 "$root/tools/package_title.py"
