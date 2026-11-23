> **Latest native PS5 status (November 23, 2026):** The registered
> PPSA99485 preview boots on firmware 10.01. The native loader,
> startup code, software VideoOut window, globe draw and first
> SDL_RenderPresent all passed on the console. See PS5_LAUNCH_FIX.md
> for the verified fixes and remaining HDMI visual check.
# Life Around Us - PS5 native homebrew (development preview)

Working directory: H:\PS3 Live\PS5-native

This is a new PS5-native frontend modeled on the publicly documented behavior of
Life Around Us v1.5. It is **not yet a complete binary port** of Sony's
Life with PlayStation v1.00: the public GitHub repository has only documentation
and screenshots, and its separate release kit has precompiled Windows objects and
Python bytecode. The required Sony NPIA00002 files are not distributed there.

## Implemented now

- Native SDL2-based C++ app for PS5 x86-64, using the installed PS5 Payload SDK and
  user's previously installed PS5 SDL VideoOut/controller backend.
- CPU-projected Earth with public NASA Blue Marble 2048x1024 data and atmosphere/stars.
- Sixteen cities, selectable with left/right; right stick rotates Earth; up/down zooms.
- Automatic city tour after 10 seconds idle, cycling every 6.5 seconds.
- Live Channel panel, Fahrenheit/Celsius settings and a local weather/news cache format.
- Original generated 512x512 icon0.png and 1920x1080 pic1.png.
- PPSA99485 title packaging workflow, with FSELF and runtime PRX prerequisites.

The preview does not yet include the original PS3 programs, RSX rendering,
news/webcam/storm/ISS integration, original channel music, or runtime
network refresh. Do not mistake host compilation or a signed FSELF for
a successful PS5 console launch.

## Build

From Ubuntu WSL on BEN-PC:

    bash '/mnt/h/PS3 Live/PS5-native/tools/build-all.sh'

The build uses:
- PS5 SDK: /home/ben/axm-homebrew/.deps/ps5-payload-sdk
- PS5 SDL backend: /mnt/g/Games/FluxDownload/PS5/NahaXMB/build/ps5-sdl/libSDL2.a
- Native converter: /home/ben/axm-homebrew/build-ps5/native-tool
- Runtime PRX builder: /home/ben/axm-homebrew/build-ps5/libc-builder

The ZIP (when conversion succeeds) stages:
- PPSA99485/eboot.bin
- PPSA99485/sce_module/libc.prx
- PPSA99485/sce_sys/param.json
- PPSA99485/sce_sys/icon0.png, pic1.png
- data/life-around-us/assets/earth-day.bmp
- data/life-around-us/live-feed.txt

This is a ShadowMountPlus title folder ZIP for a jailbroken PS5 with etaHEN,
not a retail signed PKG. Firmware 10.01 compatibility needs manual testing on
the user's own device; firmware 10.01+ is the intended target, not a proven span.

## Update host weather/news cache

    python 'H:\PS3 Live\PS5-native\tools\update_feed.py'
    python 'H:\PS3 Live\PS5-native\tools\update_feed.py' --news

The application reads live-feed.txt at startup. The script gets temperatures
from Open-Meteo and optionally city headlines from Google News RSS; it is run
on the PC before packaging. The PS5 preview does not yet refresh its own feed.

## Bring original PS3 application files

Provide the extracted folder described in ../user-source-drop/README.md.
The original build kit requires v1.00 and checks 558 files, including EBOOT.BIN,
lwp.self and 21 PRX modules. Adapting the output of ps3recomp and the Windows
runtime to the PS5 FreeBSD ABI and a native AGC/SDL renderer is further work.
Do not run the Windows Build Kit CMD against a PS5 target.

## Artwork and provenance

- NASA Blue Marble global texture: https://svs.gsfc.nasa.gov/2915/
- User-facing generated icon: assets/icon0.png (512x512).
- PS5 home backdrop: assets/pic1.png (1920x1080).
- Original PS3 Network XMB icon is fah-xmb.png under
  dev_flash/vsh/resource/explore/icon/ on PS3 firmware >=2.50.
  The original 2008 Sony icon is separate from the fan revival's app.ico.

Original project: https://github.com/kojimasfoxhound/life-around-us
See ../SOURCE_ANALYSIS.md and ../PS5_TOOLCHAIN_NOTES.md for further details.

## Validation and next milestones

1. Resolve any native converter imports and produce a source-matched FSELF ZIP.
2. Test startup, display, controllers, load and shutdown on firmware 10.01.
3. Ingest owner's original PS3 v1.00 files and compare/rebuild the host runtime,
   replacing Win32/DirectX12 audio/video/input/network dependencies.
4. Port original channel assets/UI/services and verify parity with screenshots.


## Source files found and icon updated — November 23, 2026

The owner provided v1.00, v1.10, v1.20, v1.21 PKGs and a fully updated
archive from the Lenovo ThinkBook. Originals are preserved in
../user-source-drop/original-pkgs; the fully updated archive was extracted
to ../user-source-drop/updated-source/NPIA00002.

The authentic PS3 application ICON0.PNG was found in this archive at
320x176, with a 144x144 globe region. A faithful centered 512x512 HD
restoration is in ../art-reference/original-life-with-playstation-HD-512.png,
and was installed on the PS5 home tile. The previous generated Earth icon
is preserved in assets/icon0-generated-earth.png.

The v0.0001 preview was installed via FTP to console <PS5_LAN_IP>,
with ShadowMount+ reporting installed PPSA99485. FTP RAW SELF mode was
enabled for byte-for-byte readback. Icon files in source title, /user/app,
and /user/appmeta were read-back verified. This is not a claim of a
runtime launch or full Sony PS3-code integration.

Current ZIP SHA-256:
0f0747eb2a19b8c0d97b56319b2adf4b4e0f46df629d8a18f39143a97d68db4b
