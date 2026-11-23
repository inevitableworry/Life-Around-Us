"""Generate *native-size* hinted bitmap-font alpha masks.

The previous text pipeline shrank 40-pixel letters to 12-20 pixels with
nearest-neighbor selection, dropping thin stems and counters. Let FreeType
render each glyph at exact on-screen sizes 12..24; the console now copies
those pixels at 1:1 (zero font resampling). No TTF files are distributed.
"""
from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
root=Path(r'H:\PS3 Live\PS5-native')
src=root/'src';assets=root/'assets'
styles=[
 ("font",Path(r'C:\Windows\Fonts\segoeuib.ttf')),
 ("menu_font",Path(r'H:\PS3 Live\reference-pc\extracted\app\assets\fonts\artdeco\ArtDeco-CondensedBold.ttf'))
]
for tag,path in styles:
    rows=[]
    for fontSize in range(12,25):
        font=ImageFont.truetype(str(path),fontSize)
        mask=Image.new('L',(1024,384),0)
        d=ImageDraw.Draw(mask)
        metrics=[]
        for i in range(95):
            c=chr(32+i); cx=(i%16)*64; cy=(i//16)*64
            bbox=font.getbbox(c) or (0,0,0,0)
            advance=max(2,min(64,int(round(font.getlength(c)))+1))
            d.text((cx+1-bbox[0],cy+3-bbox[1]),c,font=font,fill=255)
            b=mask.crop((cx,cy,cx+64,cy+64)).getbbox()
            if b is None:metrics.append((0,0,0,0,advance))
            else:
                l,t,r,bottom=b
                metrics.append((l,t,r-l,bottom-t,advance))
        out=assets/(tag+'-size-'+str(fontSize)+'.alpha')
        out.write_bytes(mask.tobytes())
        rows.append(metrics)
    header=src/(tag+'_raster_sizes_v4.inc')
    arrayname=tag+'_raster_sizes_v4'
    data=f'// FreeType hinted glyph alpha masks: sizes 12 to 24, inclusive.\nstatic constexpr LAUGlyph {arrayname}[13][95]={{\n'
    for i,size in enumerate(range(12,25)):
        data+=' { // size '+str(size)+'\n'
        data+='  '+','.join('{'+','.join(map(str,m))+'}' for m in rows[i])+'\n },\n'
    data+='};\n'
    header.write_text(data,encoding='utf-8')
    print(tag,'generated 13 sizes; alpha bytes each',1024*384,'header',header.stat().st_size)
