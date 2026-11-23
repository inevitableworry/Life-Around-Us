# Life Around Us ? Platform Roadmap

**Updated:** 2026-11-23 ? **Project state:** active development

## Release gates

A build is considered *running* only after console/device evidence. Progress is expressed as **verified / partial / unverified**, not invented completion percentages. The primary targets are playback responsiveness, clean text, input fidelity, audio, and maintainable deployment. No preview should imply native Sony binaries are included.

| Platform | Source | Compiles/packages | Real UI | Input | Live data | Remaining blocker |
|---|---|---|---|---|---|---|
| Web | Verified | Verified | Browser checked | Keyboard confirmed, touch coded | Server feed proxy exists | Full device/performance QA, origin reliability |
| PS5 | Verified | Verified | Real console screenshot | Controller startup; full navigation incomplete | Local cache preview | Pixel-correct text, menu fonts, live data, audio, full parity |
| PS4 | Prototype | Host preview only | PS4 hardware unverified | Unverified | Unverified | Native package, emulator/hardware validation |
| PS3 | Prototype | Host preview only | RPCS3/PS3 unverified | Unverified | Unverified | Native build, graphics and sound pipeline |
| Android full client | Native project | v0.3.2 debug APK compiled locally | Tablet launch unverified | Android input bridge | Host/network dependent | Asset redistribution review, device QA, release signing |
| Android web companion | Java source | v0.1.0 APK compiled (17 KB) | Installed/launched on Samsung tablet, display black during capture | WebView controls | Uses website | Signed release, runtime screenshot and long-session QA |
| Samsung Tizen | Verified | Signed WGT generated | TV unverified | Remote mapping implemented | Connects to website | SDB authorization, signed install and actual remote testing |

## Near-term tasks

### Web and cloud
- [x] Publish independently maintained web source and screenshot/video demonstration.
- [x] Default touchscreen control overlay to hidden while leaving a user setting to re-enable it.
- [x] Detect Samsung Tizen and force-hide mobile touch UI.
- [x] Restrict the live feed bridge to approved HTTPS endpoints.
- [ ] Test full browser interactions on locked-down TV and modern Android browsers.
- [ ] Make web deploys reproducible from a reviewed Git commit and preserve protected local assets.
- [ ] Add automated smoke checks for externally cached feed data.

### PlayStation 5
- [x] Build and package a native FSELF-based preview for owner-authorized homebrew.
- [x] Verify launch, first frame and on-console globe/menu rendering on a 10.01 PS5.
- [x] Install a font-pipeline correction and preserve signed rollback binaries locally.
- [ ] Correct all text rasterization, including thin glyph strokes visible on the actual HDMI output.
- [ ] Compare 720p capture with real TV photos at identical menu states.
- [ ] Match original menu transitions, item spacing, safe-area positions and fonts.
- [ ] Implement full weather/news refresh and media playback as appropriate.
- [ ] Validate controller input, performance, long-run memory usage and clean shutdown.

### PlayStation 4
- [x] Prepare source and host-preview UI experiments.
- [ ] Produce a genuine PS4 executable/package with available SDK.
- [ ] Validate on permitted emulator or owned homebrew device.
- [ ] Verify menu sound, video, gamepad input and persistence independently.

### PlayStation 3
- [x] Prepare source and host-preview UI experiments.
- [ ] Build a native PS3 package and verify PPU/SPU constraints.
- [ ] Test in RPCS3 and a supported owned console.
- [ ] Align original-like navigation, typography, music and weather visuals.

### Android
- [x] Maintain a separate Android application and shared visual resources.
- [x] Hide touchscreen overlay by default; retain user-activated preference.
- [x] Build v0.3.2 owner-local full Android APK with overlay disabled by default.
- [x] Add minimal 17 KB Android WebView companion without bundled proprietary media or URL bars.
- [ ] Verify package content and license permission for redistribution of the full media-rich Android APK.
- [ ] Build, sign and test new Android release on phones, tablets and foldables.
- [ ] Verify touchscreen, keyboard, gamepad, performance and orientation changes.
- [ ] Implement in-app update experience without inaccessible external URLs.

### Samsung TV ? Tizen
- [x] Create a lightweight fullscreen web-runtime WGT (rather than embedding site media).
- [x] Bind Samsung directional keys, OK, Return and remote color keys to website controls.
- [x] Hide the mobile touch controls and avoid a browser address bar inside Tizen runtime.
- [x] Package using a local Tizen Studio development certificate.
- [ ] Connect to Vetro LAN SDB on port 26201. **Completed:** connected to the QN75Q60AAFXZA Tizen 6.0 TV; port 26101 was not available for developer sessions.
- [ ] Install the WGT, launch it from the TV home screen and inspect logs. **Blocked:** Tizen Studio transferred the signed WGT but returned "Failed to install Tizen application" (twice, including the v0.1.1 simplified manifest). Developer Mode Host PC IP set to the TV loopback for Vetro may prevent external PC installation; check with owner before changing TV settings.
- [ ] Confirm compatibility with the owner's Samsung Q60A generation and Vetro-rooted environment; do not assume root bypasses certificate requirements.
- [ ] Validate focus behavior, long-press Back, panel animations, and TV remote buttons.
- [ ] Avoid leaking the website URL into UI overlays or navigation chrome.

## Future directions

Continue toward a unified visual vocabulary, but track renderer/OS constraints per platform. Add visual snapshots at the same page/menu and animation times. Separate streaming video, game audio, UI sound, input, asset ownership, and platform signing into independent release gates. Release all future builds with SHA-256 manifests and an honest compatibility matrix.
