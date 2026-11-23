"""Stage a PS5 ShadowMount+ native folder title and a hash-verified ZIP."""
from pathlib import Path
import argparse,hashlib,json,shutil,zipfile
ROOT=Path(__file__).resolve().parents[1]
TITLE="PPSA99485"
REVISION=1
def digest(p):
    h=hashlib.sha256()
    with p.open("rb") as f:
        for b in iter(lambda:f.read(1048576),b""):h.update(b)
    return h.hexdigest()
def param():
    return {
        "ageLevel":{"default":0},"applicationCategoryType":0,
        "applicationDrmType":"free","attribute":0,"attribute2":0,"attribute3":0,
        "conceptId":TITLE[4:],"contentBadgeType":1,
        "contentId":f"UP9000-{TITLE}_00-LIFEAROUNDUS0001",
        "contentVersion":f"00.000.{REVISION:03d}","downloadDataSize":0,
        "localizedParameters":{"defaultLanguage":"en-US","en-US":{
            "titleName":"Life Around Us","subTitle":"Live Earth - Native Homebrew Preview"}},
        "masterVersion":"01.01","requiredSystemSoftwareVersion":"0x0000000000000000",
        "sdkVersion":"0x0000000000000000","titleId":TITLE,"versionFileUri":""
    }
def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--metadata-only",action="store_true")
    args=ap.parse_args()
    icon=ROOT/"assets/icon0.png";back=ROOT/"assets/pic1.png"
    for f in [icon,back]:
        if not f.exists() or f.read_bytes()[:8]!=b"\x89PNG\r\n\x1a\n":raise SystemExit(f"Missing valid PNG: {f}")
    if args.metadata_only:
        print(json.dumps(param(),indent=2));return
    binary=ROOT/"build/native/eboot.bin"
    libc=ROOT/"build/native/sce_module/libc.prx"
    for p in (binary,libc):
        if not p.is_file() or p.stat().st_size<256 or p.read_bytes()[:4] not in (b"\x4f\x15\x3d\x1d", b"\x54\x14\xf5\xee"):
            raise SystemExit(f"Missing signed PS5 FSELF: {p}")
    root=ROOT/"dist/stage"
    if root.exists():shutil.rmtree(root)
    target=root/TITLE
    system=target/"sce_sys"
    system.mkdir(parents=True,exist_ok=True)
    (target/"sce_module").mkdir(exist_ok=True)
    data=root/"data/life-around-us/assets"
    data.mkdir(parents=True,exist_ok=True)
    shutil.copy2(binary,target/"eboot.bin")
    shutil.copy2(libc,target/"sce_module/libc.prx")
    shutil.copy2(icon,system/"icon0.png")
    shutil.copy2(back,system/"pic1.png")
    (system/"param.json").write_text(json.dumps(param(),indent=2)+"\n",encoding="utf-8")
    included={".bmp",".rgba",".bin",".tsv",".alpha"}
    assets=ROOT/"assets"
    for candidate in sorted(assets.rglob("*")):
        if not candidate.is_file() or candidate.suffix.lower() not in included:continue
        if candidate.name.startswith("original-night-"):continue
        relative=candidate.relative_to(assets)
        destination=data/relative
        destination.parent.mkdir(parents=True,exist_ok=True)
        shutil.copy2(candidate,destination)
    print("Copied PS5 UI assets",len(list(data.rglob("*"))))
    feed=ROOT/"assets/live-feed.txt"
    if feed.exists():shutil.copy2(feed,data.parent/"live-feed.txt")
    files={p.relative_to(root).as_posix():digest(p) for p in root.rglob("*") if p.is_file() and p.name!="SHA256.json"}
    manifest={"titleId":TITLE,"revision":REVISION,"files":files,
              "warning":"FW10.01 native preview: visual parity and live service features incomplete; PS3 recompilation not integrated"}
    (root/"SHA256.json").write_text(json.dumps(manifest,indent=2)+"\n",encoding="utf-8")
    dst=ROOT/f"dist/Life-Around-Us-PS5-v0.0001-native-preview.zip"
    with zipfile.ZipFile(dst,"w",compression=zipfile.ZIP_DEFLATED,compresslevel=6) as z:
        for p in sorted(root.rglob("*")):
            if p.is_file():z.write(p,p.relative_to(root).as_posix())
    with zipfile.ZipFile(dst) as z:
        if z.testzip():raise SystemExit("ZIP integrity failure")
    print(f"Packaged {dst} ({dst.stat().st_size} bytes), SHA256 {digest(dst)}")
if __name__=="__main__":main()
