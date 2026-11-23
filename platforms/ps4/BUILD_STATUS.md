# PS4-port status — 2026-11-23

Native SDK: NOT INSTALLED on Windows PATH, standard roots, G:\PS4Libs (console SPRX dump, not SDK), or known Ubuntu WSL OpenOrbis locations. Native cross-compile, FSELF conversion, package generation and physical PS4 testing: NOT PERFORMED.

Host checks: portable renderer PASS; native SDL2 backend with mock PS4 header/API stubs PASS; original PS5 source reference host build PASS. Asset/hash verification is available via tools/verify_assets.py.

Host output:
- build/preview.ppm
- build/ps4-backend-host.bmp
- build/reference/ps5-reference.bmp
- build/preview-comparison.png

Remaining: real OpenOrbis library/header/runtime validation; any sdk API mismatches; console VideoOut and controller input verification; performance tuning; service and UI parity. There are no proven PS4 frame-rate figures or hardware launches.
