# GitHub source delivery and Cloudflare deployment

**Code authority:** `github.com/inevitableworry/Life-Around-Us` (`main` branch)
**Public hostname:** `life.orosapp.us`
**Live origin:** the existing owner-operated Node service bound to `127.0.0.1:18951` on BEN-PC
**Cloudflare:** existing tunnel route; this deployment does not create or modify other zone records or tunnels.

## Why this uses a hybrid deployment

The web frontend can be versioned in GitHub. However, the feed bridge is a restricted Node service and some required site media is stored outside public Git because redistribution rights and disk sizes vary. GitHub Pages cannot run Node; uploading source files to a repo does not magically run the full website. The existing Cloudflare Tunnel continues to provide TLS and route the domain to BEN-PC. Reviewed GitHub source changes are copied to that existing local runtime without deleting its local media.

## Syncing code from GitHub

1. Make a local clone of the `main` branch in `H:\PS3 Live\Life-GitHub-Publish` (or update an existing clean checkout).
2. Run `scripts/sync-life-web.ps1` from the main working tree. It uses `git pull --ff-only`, checks the current frontend files, backs up changed live files, then updates only an allowlisted set of `.js`, `.css` and `.html` files. It never copies, overwrites or deletes local media, files under `assets/`, server secrets, tunnel credentials, original game packages or signing certificates.
3. Confirm `http://127.0.0.1:18951/healthz`, then test site UI and images through HTTPS. If a browser resource fails, restore from the timestamped backup.
4. Optional Windows scheduled task may run this reviewable script at a chosen cadence. Use a pinned commit/release for a stable production environment and do not run arbitrary scripts from untrusted PRs.

For changes to `server.mjs`, review and deploy manually as a separate audited backend update; the synchronization script intentionally does not restart or replace the running backend.

## Cloudflare

The current `life.orosapp.us` record already targets an active tunnel. This deployment deliberately reuses the existing ingress and does not create a duplicate `cloudflared` instance. The TV web-runtime launcher loads the same hostname; no raw LAN address is exposed inside user-facing TV UI.

## Release requirements

Publish packages as *previews* until each platform passes installation, foreground launch, screenshots, remote/controller input and stability checks. Release notes must distinguish real hardware evidence from host compilation. Keep platform packages separate and publish SHA-256 checksums. Public Git commit history reflects the authenticated account performing publication; third-party authors remain credited where appropriate.
