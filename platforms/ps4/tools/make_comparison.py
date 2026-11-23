from pathlib import Path
from PIL import Image, ImageDraw
ROOT = Path(__file__).resolve().parents[1]
left = Image.open(ROOT/'build'/'reference'/'ps5-reference.bmp').convert('RGB')
right = Image.open(ROOT/'build'/'preview.ppm').convert('RGB')
left = left.resize((1280,720),Image.Resampling.BILINEAR)
right = right.resize((1280,720),Image.Resampling.BILINEAR)
pair = Image.new('RGB',(2560,754))
pair.paste(left,(0,34))
pair.paste(right,(1280,34))
drawer=ImageDraw.Draw(pair)
drawer.text((20,11),'PS5 SOURCE HOST REFERENCE',fill='white')
drawer.text((1300,11),'PS4 NATIVE-SOURCE PORTABLE RENDERER',fill='white')
file=ROOT/'build'/'preview-comparison.png'
pair.save(file,optimize=True)
print(f'Wrote visual parity comparison: {file}, {file.stat().st_size} bytes')
