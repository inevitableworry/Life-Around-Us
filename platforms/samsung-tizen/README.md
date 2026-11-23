# Samsung Tizen TV companion

Small web-runtime launcher targeting Samsung TVs running Tizen 6.0 or newer (including the 2021 Q60A generation where supported). It opens the same live website in the Tizen application runtime, fullscreen, with no URL bar. No bundled browser engine or giant assets. The site detects Tizen and hides touchscreen/gamepad overlays; directional/OK/Back and color remote keys map to the Life input controls. TV remote behavior is only code-implemented, not tested on physical Samsung hardware.

Requires an internet connection and a live site. The app is not an offline movie player or a native rendering port. Tizen Studio signing profile is needed to install the .wgt on a physical TV. Do not distribute private signing certificates in source control.

Build with `tizen package -t wgt -s <your-profile> -- <this directory>`. After build, inspect widget package, signature and device acceptance before claiming an install.
