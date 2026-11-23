# Life Around Us Web — mobile touch deployment

Public URL: https://life.orosapp.us
Host: BEN-PC, Windows
Project: H:\PS3 Live\Web
Origin: http://127.0.0.1:18951

The existing Windows logon task named Cloudflare Tunnels runs the shared Cloudflare tunnel startup script and starts the Life Around Us Node server. The existing main tunnel now routes life.orosapp.us to the local origin on TCP 18951. All other hostnames remain in the ingress configuration.

## Web build

The public resource tree is generated from H:\PS3 Live\reference-pc\extracted\app, the owner-supplied Windows client. The Three.js globe, original city/menu graphics, fonts, music, textures, and live news UI are retained. The Windows-only host bridge is replaced with web-shell-bridge.js and the restricted local feed API. The site uses an 8K night image rather than the original 16K file to reduce download and GPU memory cost. The separate ~2.8GB close-up tile pack is excluded.

## Mobile and touch controls

The site detects coarse pointers, any coarse pointer, navigator.maxTouchPoints, and existing Android host capability when present. Touch control overlay has 12 buttons for city selection, navigation, zoom, options, select, back, and home. The quick "Hide controls" pill collapses the keypad while keeping a way to expand it.

The full persistent preference is in Settings > Touch Controls > Show Touch Controls > On or Off. Off removes the entire floating overlay including the pill, and the preference is stored with existing per-browser Options settings (lau.options.v1). On restores it. Hiding the overlay does not disable one-finger drag or two-finger pinch on the globe.

The CSS handles small portrait phones, foldable viewports, landscape phones and tablets, safe area insets, touch target sizes of at least 44px, and narrow news strips. On smaller touch screens the render target defaults to 720 lines at 60 fps; large touch screens default to 1080 lines. Explicit rs and fps query-string overrides are respected. Desktop keeps its existing rendering behavior and keyboard/gamepad features.

## Validation on November 23, 2026

- Cloudflare/public HTML, options.js and adaptive-input.js content verified through HTTPS.
- Local server /healthz returns HTTP 200, and Cloudflare successfully served the main site and assets.
- Original Settings menu allows switching the touch-control preference to Off; localStorage persists the Off choice after reload.
- A browser-hosted mobile frame at 387x697 loaded the actual styles and touch JS: all 12 controls fit without horizontal scrolling, measured minimum button size was about 46x44px.
- Touch-pointer down/up on a virtual button emitted KeyQ down/up, which the main client supports for previous city.
- Setting Off hid the overlay, but a touch-pointer event still reached the globe canvas. Setting On restored the buttons.
- The original Pixel Fold was locked/dozing during the attempted direct handset check. Its black screen capture was not considered evidence of site rendering. Hardware Chrome verification on a physically unlocked phone remains pending.

## Key files

server.mjs — local Node HTTP server and restricted feed proxy
public/index.html — browser entry and mobile performance defaults
public/adaptive-input.js — touch control pad, pinch/keyboard bridge and visibility
public/android-font.css — mobile, foldable and tablet responsive styling
public/options.js — persistent Touch Controls menu setting
public/web-shell-bridge.js — browser alternative to Windows WebView2
tools/enable_touch_settings.py — reproducible touch menu patch
tools/mobile_render_defaults.py — mobile rendering defaults
build-info.json — bundle provenance

## Limitations

Optional live feeds can be throttled or rejected by the allowlisted proxy. Audio autoplay generally requires user input. The web client does not include the original PS3 binary runtime or the Windows client's private/external close-up tile pack.
