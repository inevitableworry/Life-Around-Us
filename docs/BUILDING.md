# Building the platform previews

**Prerequisite:** platform SDKs and legally obtained resource bundles are supplied separately. The GitHub source repository intentionally does not bundle proprietary original game archives, recovered console firmware or user-specific signing secrets.

### Web

The production frontend and backend deploy from GitHub through Cloudflare Workers Builds using `wrangler.jsonc` and `cloudflare/worker.mjs`. Static site assets and approved media are committed under `web/public`. For optional local development, run `node web/server.mjs --port 18951`; that historical origin is not production and must not be exposed publicly. GitHub Pages alone cannot run the feed proxy.

### PS5

Requires PS5 Payload SDK, a compatible SDL2 backend, and owner-supplied approved textures/resources. Native conversion and staging scripts live under `platforms/ps5/tools/`. See the PS5 README. Published packages are development previews; real-world console status is documented separately and uses PPSA99485.

### PS3 and PS4

Experimental source only. Host preview builds do not prove functioning native console packages. Follow platform-specific READMEs and add native source/SDK integration before release claims.

### Android

The Android Gradle source lives at `platforms/android`. The full local Android build packages a private asset tree under `app/src/main/assets/www` which is deliberately not committed here. Build from Android Studio/Gradle after provisioning only resources you have permission to use. Do not infer a working standalone APK solely from a successful compilation.

### Android Web Companion (public preview)

Build the separate `platforms/android-web-companion` project. It uses Android SDK 36, AGP 8.13.1, and Java 17+, with no proprietary bundled game media. The small `.apk` is an online-only Android WebView of the hosted website; its package name differs from the full asset-rich Android client. It is debug-signed and needs hardware QA before a stable release.

### Samsung Tizen

The `platforms/samsung-tizen` directory contains a lightweight HTML entrypoint and Tizen widget manifest. Package using a configured Tizen Studio signing profile:

```powershell
tizen package -t wgt -s YOUR_PROFILE -- platforms/samsung-tizen
```

The resulting WGT navigates to the live site fullscreen inside Tizen's runtime. The site maps the remote keys and hides mobile touchscreen overlays on compatible Tizen browsers. Install and test using the TV's developer connection and Tizen Studio tools. **Do not commit `.p12` credentials or signature files.**
