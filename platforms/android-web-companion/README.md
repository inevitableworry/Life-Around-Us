# Life Around Us ? Android Web Companion

This is an intentionally small Android 8+ WebView client that opens the owner-hosted Life Around Us website in fullscreen. It has no URL bar, no local original Sony/Windows game packages, no embedded music or font bundles, and no JavaScript bridge to native Android capabilities. The website controls touch-overlay visibility (off by default). This thin companion is separate from the larger owner-local Android client under `../android`, which may use privately provisioned resources and should not be redistributed without permission.

Application ID: `us.orosapp.lifearoundus.companion`. Version: `0.1.0-web-companion`. Requires internet access and a modern Android System WebView. No APK inspection or physical device install is implied by source code alone; record them separately.

Compile with the locally installed Android Gradle Plugin 8.13.1, Java 17 or later, Android compile SDK 36. Debug builds are test-signed and are not Google Play releases.
