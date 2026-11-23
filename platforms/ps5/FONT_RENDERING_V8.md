# Life Around Us ? PS5 native font rendering, v8 (November 23, 2026)

- Title: PPSA99485 (ShadowMount+), PS5 10.01. This is still a **native development preview**, not a Sony retail package.
- Previous visual issue: 64x64 glyph copies overlapped; whole-line text corrected clipping but Segoe UI Bold small glyphs still appeared chunky; map city labels also showed through the Options page and lower HUD.
- v6: cached whole-line text renderer retained; UI sans used for foreground menu labels, Art Deco only for oversized decorative wordmark; increased small-glyph opacity and added a single-pixel dark shadow.
- v7: regenerated 12?24px hinted regular-weight Segoe UI font masks, reworked advances, suppressed labels beneath the lower HUD.
- v8: suppresses globe city markers and labels while Options menu is shown, removing confusing background text from active menu labels.
- v8 package SHA-256: **a800e5282520ce550ed07c73df5aa6ff2309d2724f6f7ad09002b199fe1ef8cc**.
- v8 installed EBOOT SHA-256: **99b8737f6abdebe1e428a8d4ab931c1395f85022cbe271e09f2aa54f1beb02e5**; console read-back verified after restart.
- Prior EBOOT backed up at `dist/backups/eboot-before-font-v8.bin` and `/data/homebrew/PPSA99485/eboot.bin.previous.font-v8`.
- Runtime: newly launched title PPSA99485 rendered PS5 frame and Options page; actual capture was inspected.
- Evidence: `captures/2026-11-23-ps5-font-v8-options.jpg`; v7 and v6 comparison captures preserved.
- Limitations: 720p H.264 capture makes fine text edges look rough. This is **not proof of perfect text glyph antialiasing at direct HDMI output**, and no user inspection on television is recorded.
- No other installed PS5 titles were replaced or removed.
