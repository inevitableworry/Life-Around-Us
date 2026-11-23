#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
sdk="${PS5_PAYLOAD_SDK:-$HOME/axm-homebrew/.deps/ps5-payload-sdk}"
ref="${LAU_NATIVE_REFERENCE:-$HOME/axm-homebrew}"
native_tool="$ref/build-ps5/native-tool"
libc_builder="$ref/build-ps5/libc-builder"
source="$root/build/life-around-us.elf"
for item in "$native_tool" "$libc_builder" "$source" "$ref/ps5/native/runtime/api-surface.txt" "$ref/ps5/native/runtime/imports.txt"; do
  test -f "$item" || { echo "Required native input unavailable: $item" >&2; exit 2; }
done
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
"$native_tool" link --in "$source" --out "$tmp/eboot.elf" --stub-dir "$sdk/target/lib" \
  --module-sdk 0x02000009 --companion-sdk 0x08050001 --file-name eboot.elf
python3 "$root/tools/verify_ps5_load_alignment.py" "$tmp/eboot.elf"
"$native_tool" self --sign --in "$tmp/eboot.elf" --out "$tmp/eboot.bin" --magic 0x1D3D154F
"$libc_builder" "$ref/ps5/native/runtime/api-surface.txt" \
  "$ref/ps5/native/runtime/imports.txt" "$tmp/libc.raw.elf"
"$native_tool" self --sign --in "$tmp/libc.raw.elf" --out "$tmp/libc.prx"
"$native_tool" self --inspect --file "$tmp/eboot.bin"
"$native_tool" self --inspect --file "$tmp/libc.prx"
mkdir -p "$root/build/native/sce_module"
install -m 644 "$tmp/eboot.bin" "$root/build/native/eboot.bin"
install -m 644 "$tmp/libc.prx" "$root/build/native/sce_module/libc.prx"
sha256sum "$root/build/native/eboot.bin" "$root/build/native/sce_module/libc.prx"
