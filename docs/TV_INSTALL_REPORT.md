# Samsung TV installation check ? November 23, 2026

**Hardware:** Samsung `QN75Q60AAFXZA` (Tizen 6.0), owner-operated; LAN IP deliberately not included in public documents. The device has Vetro root integration running and an active LAN SDB tunnel.

## Verified

- Vetro TV manager was reachable over the owner's LAN; it reported root agent running and SDB LAN access enabled on port `26201`.
- Tizen SDB connected successfully on that port (`sdb connect <TV_LAN_IP>:26201`) and identified the Samsung model. Tizen Studio's ordinary `26101` connection failed.
- Developer certificate profile `QuietHome` is Samsung-issued; the distributor certificate includes the TV's DUID and is valid until November 2027. No signing keys or DUID are included in this report.
- Tizen Studio packaged `Life Around Us.wgt` with valid widget file structure and an Internet-enabled TV profile. The v0.1.1 manifest specifies 1080p normal TV features, remote hardware key handling, and pointer input disabled.
- Both the original and updated WGT were transferred to the device by `tizen install`, **but installation returned `Failed to install Tizen application` after transfer**. No successful install was verified; no application was launched.

## Next safe step

Vetro's installation instructions distinguish TV-local `127.0.0.1` Developer Mode Host PC IP (needed for root at boot) from a remote PC's LAN IP (used for Tizen Studio app installation). The TV may need its Developer Mode Host PC IP changed temporarily to the installing PC, followed by a TV restart. Afterwards restore `127.0.0.1` to preserve Vetro's on-boot root setup. This requires action in the Samsung TV interface and should not be performed silently or by assuming a successful package transfer. A Tizen certificate/device profile mismatch or package validation may also be responsible; the exact error was not disclosed by the CLI. Samsung's supported Tizen Studio UI may provide a more detailed installer error.

**Status:** WGT built, TV reachable, Tizen installer rejected; no live TV verification of remote controls or fullscreen display. Retain current TV apps and root configuration without replacement.
