#!/usr/bin/env python3
"""Check staged PS4 asset hashes against the console-parity manifest."""
import hashlib
import json
import csv
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT / "ASSET_PARITY_MANIFEST.json").read_text(encoding="utf-8"))
expected = manifest["files"]
missing = []
mismatches = []
for name, entry in expected.items():
    path = ROOT / name
    if not path.is_file():
        missing.append(name)
        continue
    digest = hashlib.sha256(path.read_bytes()).hexdigest()
    if digest != entry["sha256"] or path.stat().st_size != entry["bytes"]:
        mismatches.append(name)
icon = ROOT / "sce_sys" / "icon0.png"
if not icon.is_file() or hashlib.sha256(icon.read_bytes()).hexdigest() != manifest["canonical_web_icon_sha256"]:
    mismatches.append("sce_sys/icon0.png")
with (ROOT / "assets" / "cities-v15.tsv").open(encoding="utf-8", newline="") as handle:
    city_count = sum(1 for _ in csv.DictReader(handle, delimiter="\t"))
photo_count = sum(1 for _ in (ROOT / "assets" / "photos").glob("*.bmp"))
if not (ROOT / "assets" / "live-feed.txt").is_file():
    missing.append("assets/live-feed.txt")
print(f"Shared assets: {len(expected)} checked, missing={len(missing)}, invalid={len(mismatches)}")
print(f"Catalog cities={city_count}; city photos={photo_count}; icon SHA256={manifest['canonical_web_icon_sha256']}")
for name in missing + mismatches:
    print(f"CHECK FAILED: {name}")
if missing or mismatches or city_count != 133 or photo_count != 130:
    raise SystemExit(1)
print("ASSET PARITY VERIFY PASS (file hashes only, not runtime parity)")
