"""Set mobile rendering defaults before the original Three.js module loads."""
from pathlib import Path
p=Path(r"H:\PS3 Live\Web\public\index.html")
s=p.read_text(encoding="utf-8")
needle='  <title>Life Around Us</title>'
assert s.count(needle)==1
prelude='''  <script>
    // Keep the original PC renderer but choose a sensible mobile framebuffer.
    // Visitors can override either value with explicit ?rs= or ?fps= options.
    (() => {
      const mobile = navigator.maxTouchPoints > 0 ||
        matchMedia("(any-pointer:coarse)").matches ||
        /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
      if (!mobile) return;
      const params = new URLSearchParams(location.search);
      if (!params.has("rs")) params.set("rs", Math.min(innerWidth, innerHeight) >= 760 ? "1080" : "720");
      if (!params.has("fps")) params.set("fps", "60");
      const desired = location.pathname + "?" + params.toString() + location.hash;
      if (desired !== location.pathname + location.search + location.hash)
        history.replaceState(history.state, "", desired);
    })();
  </script>
'''
s=s.replace(needle,prelude+needle)
p.write_text(s,encoding="utf-8")
print("Added responsive mobile renderer defaults to",p)
