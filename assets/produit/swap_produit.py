"""Remplace le pommeau dessiné par l'IA par le vrai pommeau détouré.
usage: swap.py scene.png out.jpg cutout.png scale x y [mirror] [patch=sx,sy,sw,sh,tx,ty;...]"""
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageChops, ImageOps

scene, out, cutp, scale, x, y = sys.argv[1], sys.argv[2], sys.argv[3], float(sys.argv[4]), int(sys.argv[5]), int(sys.argv[6])
mirror = 'mirror' in sys.argv
patches = [a for a in sys.argv if a.startswith('patch=')]
sc = Image.open(scene).convert('RGBA')
if patches:
    for p in patches[0][6:].split(';'):
        sx, sy, sw, sh, tx, ty = map(int, p.split(','))
        src = sc.crop((sx, sy, sx + sw, sy + sh))
        m = Image.new('L', src.size, 0)
        ImageDraw.Draw(m).rectangle((24, 0, sw - 24, sh - 24), fill=255)
        sc.paste(src, (tx, ty), m.filter(ImageFilter.GaussianBlur(14)))
cu = Image.open(cutp).convert('RGBA'); cu = cu.crop(cu.getbbox())
if mirror:
    cu = ImageOps.mirror(cu)
cu = cu.resize((int(cu.width * scale), int(cu.height * scale)), Image.LANCZOS)
a = cu.split()[3]; g = Image.new('L', cu.size, 255); d = ImageDraw.Draw(g); h = cu.height; st = int(h * 0.55)
for yy in range(st, h):
    d.line([(0, yy), (cu.width, yy)], fill=int(255 * (1 - (yy - st) / (h - st)) ** 1.3))
cu.putalpha(ImageChops.multiply(a, g))
sh = Image.new('RGBA', cu.size, (0, 0, 0, 0)); sh.putalpha(cu.split()[3].point(lambda v: int(v * 0.16)))
sc.alpha_composite(sh.filter(ImageFilter.GaussianBlur(14)), (x + 14, y + 12))
sc.alpha_composite(cu, (x, y))
sc.convert('RGB').save(out, quality=93)
sc.convert('RGB').resize((sc.width // 2, sc.height // 2)).save(out.replace('.jpg', '_s.jpg'))
