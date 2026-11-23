"""Record real browser interaction with the locally hosted Life Around Us UI.
Capture is public UI only. No passwords, personal records, or browser cookies.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'captures'/'readme'
OUT.mkdir(parents=True,exist_ok=True)
with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True,executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe',args=['--use-gl=angle','--use-angle=swiftshader','--enable-webgl','--disable-dev-shm-usage','--no-sandbox'])
    context=browser.new_context(viewport={'width':1280,'height':720},device_scale_factor=1,record_video_dir=str(OUT/'raw'),record_video_size={'width':1280,'height':720},color_scheme='dark',reduced_motion='no-preference')
    page=context.new_page()
    response=page.goto('http://127.0.0.1:18951/',wait_until='domcontentloaded',timeout=25000)
    assert response and response.status==200
    page.wait_for_timeout(4600)
    assert page.locator('#globe').count()==1
    page.screenshot(path=str(OUT/'earth-home.png'))
    page.keyboard.press('ArrowRight');page.wait_for_timeout(1250)
    page.keyboard.press('ArrowRight');page.wait_for_timeout(1500)
    page.keyboard.press('o')
    page.wait_for_timeout(1800)
    page.screenshot(path=str(OUT/'options-menu.png'))
    page.keyboard.press('ArrowDown');page.wait_for_timeout(700)
    page.keyboard.press('ArrowUp');page.wait_for_timeout(600)
    page.keyboard.press('Escape');page.wait_for_timeout(1500)
    page.screenshot(path=str(OUT/'earth-after-navigation.png'))
    video=page.video
    context.close();browser.close()
    print('DEMO_RAW',video.path(),'BYTES',Path(video.path()).stat().st_size)
    print('SCREENSHOTS',*[str(x) for x in sorted(OUT.glob('*.png'))],sep='\n')
