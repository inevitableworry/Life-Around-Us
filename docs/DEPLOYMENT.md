# GitHub-backed Cloudflare deployment

**Canonical source:** [inevitableworry/Life-Around-Us](https://github.com/inevitableworry/Life-Around-Us), `main` branch
**Public website:** [life.orosapp.us](https://life.orosapp.us/)
**Cloudflare Worker:** `life-around-us-web`
**Standalone test address:** `https://life-around-us-web.japansmostwanted.workers.dev/`
**Status:** Active on Cloudflare, no BEN-PC site process required. Migration verified November 23, 2026.

## Architecture

Cloudflare Workers Builds checks out GitHub `main` and runs `npx wrangler deploy` using `wrangler.jsonc`. The Worker, in `cloudflare/worker.mjs`, serves the application and a restricted HTTPS live-feed proxy. Static assets, music, Earth textures, and page code come from Cloudflare Static Assets populated from `web/public/` in the repository. The 32 MiB `night8k.r8` texture is split into two static assets and reconstructed as a streaming response at its original URL. Worker status route `/healthz` responds with `deployment:cloud` and `backend:edge`.

The `life.orosapp.us` custom domain and a hostname-specific Worker route are configured in Cloudflare; an old Tunnel CNAME was removed. The other domain/tunnel configurations are independent and remain intact. The Cloudflare account's `life-around-us-web` Worker project is connected to **only** the `inevitableworry/Life-Around-Us` repository. This is not GitHub Pages hosting: GitHub provides source and automatic builds, Cloudflare provides the website and backend.

## Cutover evidence

- The Cloudflare Workers build deployed 277 static assets (11 already present) and Worker version `90ea1bf3-9d40-441e-96e6-49d39356f644`.
- Workers.dev hostname and public custom domain returned HTTP 200 for `/`, `/main.js`, Earth imagery, music and the reconstructed night texture.
- Cloud health response is independent of the old local Node server; it continued returning HTTP 200 after the Life-only listener on port 18951 was stopped.
- The approved Open-Meteo `/api/fetch` request succeeded from the Worker, and a private `127.0.0.1` request was rejected.
- Headless Chromium loaded the cloud site (DOM, canvas, CSS and initial splash), with zero JavaScript exceptions or failed network requests in the observed test window; a longer WebGL interaction and mobile TV QA remain ongoing.
- On BEN-PC, `Life Around Us GitHub Sync` was disabled, the Life-only Node server stopped, its startup block removed from `run_tunnels.ps1` and `life.orosapp.us` ingress removed from the shared tunnel config. Backups with `.life-cloud-backup-YYYYMMDD-HHMMSS` suffix were saved beside the originals.

## Updates and rollback

Push reviewed code and media changes to GitHub `main`. Cloudflare's GitHub integration automatically deploys them to the Worker when its build succeeds. Monitor **Workers & Pages ? life-around-us-web ? Deployments** and `/healthz`. A broken release can be rolled back via Cloudflare's deployment history. Do not restart the BEN-PC origin or old frontend sync job as part of normal production operations. The local source and original assets remain on BEN-PC as a development/rollback copy only.

## Operational cautions

Cloudflare Workers limits, requests, bandwidth, and build quotas depend on the account plan. Third-party feed providers can rate-limit edge requests, media can have independent copyright/licensing terms, and this migration is not a guarantee of perpetual availability. Audit publicly committed media for redistribution permission. Keep Cloudflare credentials and private keys outside Git. The `web/server.mjs` file remains in the repository as a historical development fallback, **not** the production origin.
