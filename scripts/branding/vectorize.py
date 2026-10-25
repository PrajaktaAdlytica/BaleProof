from PIL import Image, ImageDraw
from pathlib import Path
import vtracer, re
root=Path(__file__).resolve().parents[2]
out=root/'public/brand'
source=root.parent/'baleproof-logo-explorations/04-bale-witness-refined.png'
im=Image.open(source).convert('RGB')
def trace(name,box,mask=None):
    crop=im.crop(box)
    if mask: ImageDraw.Draw(crop).rectangle(mask,fill='white')
    bw=crop.point(lambda _: 255).convert('L')
    pix=crop.load(); dest=bw.load()
    for y in range(crop.height):
        for x in range(crop.width):
            r,g,b=pix[x,y]
            dest[x,y]=0 if r<180 and g<130 and b<150 else 255
    path=out/(name+'-trace.png');bw.save(path)
    svg=out/(name+'-trace.svg')
    vtracer.convert_image_to_svg_py(str(path),str(svg),colormode='binary',mode='spline',filter_speckle=8,corner_threshold=60,length_threshold=4,path_precision=2)
    raw=svg.read_text(); body=raw[raw.index('>',raw.index('<svg'))+1:raw.rindex('</svg>')]
    body=re.sub(r'fill="[^"]+"','fill="currentColor"',body)
    path.unlink();svg.unlink()
    return body,crop.width,crop.height
mark,mw,mh=trace('mark',(130,75,650,590),(405,230,520,515))
word,ww,wh=trace('word',(550,300,1435,485))
colors={'burgundy':'#612d3d','charcoal':'#252b28','ivory':'#f5f2eb'}
def save(name,w,h,body,color):
    (out/(name+'.svg')).write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" fill="none" color="{color}"><title>BaleProof</title>{body}</svg>')
for name,color in colors.items():
    save('baleproof-mark-'+name,mw,mh,mark,color)
    save('baleproof-wordmark-'+name,ww,wh,word,color)
    save('baleproof-horizontal-'+name,1485,515,mark+f'<g transform="translate(590 165)">{word}</g>',color)
    save('baleproof-stacked-'+name,885,760,f'<g transform="translate(182 0)">{mark}</g><g transform="translate(0 560)">{word}</g>',color)
# A compact small-size companion: the approved heron's eye, curved neck and folded wing.
micro='<path fill="currentColor" d="M32 9C37 4 47 5 50 12L59 25 47 18C44 12 38 12 37 17C36 22 47 25 45 34C43 42 35 47 25 51C32 43 37 37 36 32C35 27 28 24 28 18C28 14 30 11 32 9ZM32 28C20 27 12 38 5 52C17 49 29 43 32 28ZM32 36C25 45 17 50 7 55C20 56 31 51 36 44Z"/><circle cx="44" cy="11" r="1.4" fill="#f5f2eb"/>'
for name,color in colors.items():save('baleproof-micro-'+name,64,64,micro,color)
save('favicon',64,64,'<rect width="64" height="64" rx="14" fill="#f5f2eb"/>'+micro,'#612d3d')
(root/'public/favicon.svg').write_text((out/'favicon.svg').read_text())
