#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
sdk="${PS5_PAYLOAD_SDK:-$HOME/axm-homebrew/.deps/ps5-payload-sdk}"
sdl="${LAU_SDL_ARCHIVE:-/mnt/g/Games/FluxDownload/PS5/NahaXMB/build/ps5-sdl/libSDL2.a}"
hb="$sdk/target/user/homebrew"
build="$root/build"
mkdir -p "$build"
test -f "$sdl"
read -r -a flags <<< "$("$sdk/bin/prospero-pkg-config" --cflags --libs --static sdl2)"
for i in "${!flags[@]}";do
  if [[ "${flags[$i]}" == "-lSDL2" ]];then flags[$i]="$sdl";fi
done
"$sdk/bin/prospero-clang++" -std=c++17 -O2 -g -DLAU_PS5=1 -DSDL_MAIN_HANDLED -fPIC -femulated-tls -fno-stack-protector -fno-plt -ffunction-sections -fdata-sections -I"$hb/include/SDL2" -I"$hb/include" -c "$root/src/main.cpp" -o "$build/lau-main.o"
"$sdk/bin/prospero-clang++" -std=c++17 -O2 -g -DLAU_PS5=1 -fPIC -femulated-tls -fno-stack-protector -fno-plt -ffunction-sections -fdata-sections -c "$root/src/app_crt.cpp" -o "$build/lau-app-crt.o"
# Use native homebrew entry point and library model; don't link the payload SDK's crt0.
stubs=()
for stub in "$sdk"/target/lib/*.so;do
  case "$stub" in
    *libkernel_web.so|*libkernel_sys.so|*libScePosixForWebKit.so|*libc_stub_weak.so|*libkernel_stub_weak.so) ;;
    *) stubs+=("$stub");;
  esac
done
"$sdk/bin/ld.lld" -m elf_x86_64 -pie -z max-page-size=0x4000 --eh-frame-hdr --gc-sections --hash-style=gnu \
  -T "$root/tools/ps5-pie.ld" -T "$root/tools/ehframe.ld" \
  --version-script "$root/tools/native-exports.map" --exclude-libs ALL -e _start --no-dynamic-linker \
  -o "$build/life-around-us.elf" "$build/lau-main.o" "$build/lau-app-crt.o" \
  -L"$hb/lib" -L"$sdk/target/lib" -u ProsperoSDLSetRenderSize --start-group \
  "$sdl" -liconv -lSceSystemService -lSceUserService -lScePad -lSceAudioOut \
  -lsamplerate -lSceVideoOut -lSceKeyboard -lSceImeDialog -lSceAgc -lSceAgcDriver \
  -lc++ -lc++abi -lunwind -lc -lpthread --end-group --as-needed "${stubs[@]}"
file "$build/life-around-us.elf"
readelf -h "$build/life-around-us.elf" | grep 'Entry point'
sha256sum "$build/life-around-us.elf"
