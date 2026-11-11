import sys, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageOps

W, H = 1080, 1350
INK = (20, 20, 20); PAPER = (246, 242, 237); DAY30 = (168, 107, 69)
STONE = (201, 194, 184); SMOKE = (107, 102, 96)
SRC = sys.argv[1]; OUT = sys.argv[2]
FONT = '/home/user/projet-ecom/assets/fonts/Jost-VF.ttf'
LOGO = '/home/user/projet-ecom/assets/ebook/plush-logo.png'


def font(size, weight='Regular'):
    f = ImageFont.truetype(FONT, size)
    f.set_variation_by_name(weight)
    return f


def cut(name):
    im = Image.open(os.path.join(SRC, name)).convert('RGBA')
    return im.crop(im.getbbox())


def fit(im, w=None, h=None):
    if w and h:
        s = min(w / im.width, h / im.height)
    elif w:
        s = w / im.width
    else:
        s = h / im.height
    return im.resize((max(1, int(im.width * s)), max(1, int(im.height * s))), Image.LANCZOS)


def place(canvas, obj, x, y, shadow=True, floor=True):
    """Paste a cutout with a soft drop shadow and a contact shadow, like a real packshot."""
    if shadow:
        a = obj.split()[3].point(lambda v: int(v * 0.28))
        sh = Image.new('RGBA', obj.size, (0, 0, 0, 0)); sh.putalpha(a)
        sh = sh.filter(ImageFilter.GaussianBlur(22))
        canvas.alpha_composite(sh, (x + 18, y + 26))
    if floor:
        ew, eh = int(obj.width * 0.8), max(18, int(obj.height * 0.06))
        e = Image.new('RGBA', (ew + 80, eh + 80), (0, 0, 0, 0))
        ImageDraw.Draw(e).ellipse((40, 40, 40 + ew, 40 + eh), fill=(0, 0, 0, 90))
        e = e.filter(ImageFilter.GaussianBlur(16))
        canvas.alpha_composite(e, (x + (obj.width - ew) // 2 - 40, y + obj.height - eh // 2 - 40))
    canvas.alpha_composite(obj, (x, y))


def logo(color=INK, width=170):
    lg = Image.open(LOGO).convert('RGBA')
    lg = lg.crop(lg.getbbox())
    # recolor: keep alpha (dark pixels = logo) on transparent
    g = ImageOps.grayscale(lg.convert('RGB'))
    alpha = ImageOps.invert(g).point(lambda v: 255 if v > 90 else int(v * 2.8))
    if lg.split()[3].getextrema()[0] < 255:
        alpha = lg.split()[3]
    out = Image.new('RGBA', lg.size, color + (255,)); out.putalpha(alpha)
    out = out.crop(out.getbbox())
    return fit(out, w=width)


def text(d, xy, s, f, fill, anchor='la', spacing=0):
    d.text(xy, s, font=f, fill=fill, anchor=anchor)


def wrap_lines(d, lines, x, y, f, fill, lh):
    for l in lines:
        d.text((x, y), l, font=f, fill=fill); y += lh
    return y


def check(d, x, y, r, ok=True, col=INK):
    d.ellipse((x, y, x + 2 * r, y + 2 * r), fill=col)
    if ok:
        d.line([(x + r * 0.55, y + r * 1.05), (x + r * 0.9, y + r * 1.4), (x + r * 1.5, y + r * 0.65)], fill=PAPER, width=max(3, r // 4))
    else:
        o = r * 0.6
        d.line([(x + o, y + o), (x + 2 * r - o, y + 2 * r - o)], fill=PAPER, width=max(3, r // 4))
        d.line([(x + 2 * r - o, y + o), (x + o, y + 2 * r - o)], fill=PAPER, width=max(3, r // 4))


def rounded_photo(img, w, h, radius=28):
    img = ImageOps.fit(img.convert('RGB'), (w, h), Image.LANCZOS)
    m = Image.new('L', (w, h), 0); ImageDraw.Draw(m).rounded_rectangle((0, 0, w, h), radius, fill=255)
    out = img.convert('RGBA'); out.putalpha(m); return out


def save(c, name):
    c.convert('RGB').save(os.path.join(OUT, name + '.jpg'), quality=93)


face, side, cart, mount = cut('cut-face.png'), cut('cut-side.png'), cut('cut-cart.png'), cut('cut-mount.png')

# ---------- S01 · copie Water2 (offre, fond Ink) ----------
c = Image.new('RGBA', (W, H), INK + (255,))
glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
ImageDraw.Draw(glow).ellipse((90, 230, 990, 1130), fill=(60, 58, 55, 255))
c.alpha_composite(glow.filter(ImageFilter.GaussianBlur(120)))
d = ImageDraw.Draw(c)
c.alpha_composite(logo(PAPER, 150), (64, 64))
p = fit(face, h=520); place(c, p, (W - p.width) // 2, 170, floor=True)
st = Image.new('RGBA', (430, 110), (0, 0, 0, 0)); sd = ImageDraw.Draw(st)
sd.rounded_rectangle((0, 0, 430, 110), 22, fill=DAY30)
sd.text((215, 55), '2 CARTRIDGES · 6 MONTHS', font=font(30, 'SemiBold'), fill=PAPER, anchor='mm')
st = st.rotate(-6, expand=True, resample=Image.BICUBIC); c.alpha_composite(st, (W - st.width - 50, 150))
text(d, (W // 2, 860), '$74.99', font(170, 'Bold'), PAPER, 'mm')
text(d, (W // 2, 975), 'Plush Duo · Free US shipping', font(40, 'Medium'), STONE, 'mm')
text(d, (64, H - 150), '6 months of filtered showers.', font(52, 'SemiBold'), PAPER)
text(d, (64, H - 85), 'About 41¢ a day · 60 days to try it', font(34, 'Regular'), STONE)
save(c, 'S01-offre-ink')

# ---------- S02 · copie Puure (bandeau, 2 cartouches) ----------
c = Image.new('RGBA', (W, H), PAPER + (255,)); d = ImageDraw.Draw(c)
d.rectangle((0, 0, W, 130), fill=DAY30)
text(d, (W // 2, 66), '2 CARTRIDGES IN THE BOX', font(54, 'SemiBold'), PAPER, 'mm')
p = fit(side, h=560); place(c, p, 70, 250)
k = fit(cart, h=300); place(c, k, 640, 470); place(c, k, 830, 500)
d.ellipse((800, 190, 1020, 410), fill=INK)
text(d, (910, 278), '6-LAYER', font(40, 'Bold'), PAPER, 'mm'); text(d, (910, 326), 'FILTER', font(40, 'Bold'), PAPER, 'mm')
text(d, (W // 2, 1020), '$74.99', font(150, 'Bold'), INK, 'mm')
text(d, (W // 2, 1125), 'Plush Duo · 6 months covered', font(40, 'Medium'), INK, 'mm')
text(d, (W // 2, 1180), 'Free US shipping · 60-day money-back guarantee', font(32, 'Regular'), SMOKE, 'mm')
d.rectangle((0, H - 50, W, H), fill=DAY30)
c.alpha_composite(logo(INK, 120), (60, 160))
save(c, 'S02-bandeau-2-cartouches')

# ---------- S03 · copie Oasis (haut/bas) ----------
c = Image.new('RGBA', (W, H), PAPER + (255,)); d = ImageDraw.Draw(c)
d.rectangle((0, 0, W, H // 2), fill=INK)
old = rounded_photo(Image.open(os.path.join(SRC, 'prop-old.png')), 400, 520)
c.alpha_composite(old, (W - 460, 75))
text(d, (60, 80), 'The shower head', font(54, 'SemiBold'), PAPER)
text(d, (60, 140), 'that came with', font(54, 'SemiBold'), PAPER)
text(d, (60, 200), 'your apartment', font(54, 'SemiBold'), PAPER)
y = 300
for l in ['Filters nothing', 'Picked by the contractor', 'No cartridge to check', 'Same one since 2009']:
    check(d, 60, y, 20, ok=False, col=DAY30); text(d, (115, y + 3), l, font(36, 'Regular'), PAPER); y += 68
real = rounded_photo(Image.open(os.path.join(SRC, 'mount-photo.jpg')), 400, 520)
c.alpha_composite(real, (W - 460, H // 2 + 75))
text(d, (60, H // 2 + 80), 'Plush', font(86, 'Bold'), INK)
y = H // 2 + 220
for l in ['6-layer filter cartridge', 'Fits standard US arms', '2 cartridges in the Duo', '60-day money-back']:
    check(d, 60, y, 20, ok=True, col=INK); text(d, (115, y + 3), l, font(36, 'Regular'), INK); y += 68
c.alpha_composite(logo(INK, 120), (60, H - 90))
save(c, 'S03-origine-vs-plush')

# ---------- S04 · copie GetSeoni (nous contre eux) ----------
c = Image.new('RGBA', (W, H), PAPER + (255,)); d = ImageDraw.Draw(c)
d.rectangle((0, 0, W // 2, H), fill=(234, 222, 210))
text(d, (W // 4, 110), 'plush', font(84, 'Bold'), INK, 'mm')
text(d, (3 * W // 4, 95), 'Bead filter', font(48, 'SemiBold'), INK, 'mm')
text(d, (3 * W // 4, 150), 'shower head', font(48, 'SemiBold'), INK, 'mm')
p = fit(face, w=400); place(c, p, W // 4 - 200, 260)
bead = Image.open(os.path.join(SRC, 'prop-beads.png')).convert('RGB')
bead = rounded_photo(bead, 360, 480); c.alpha_composite(bead, (3 * W // 4 - 180, 240))
d.ellipse((W // 2 - 55, 455, W // 2 + 55, 565), fill=INK); text(d, (W // 2, 510), 'VS', font(44, 'Bold'), PAPER, 'mm')
y = 800
for a, b in [('6-layer cartridge', 'Mostly colored beads'), ('Open it, see it', "Sealed, can't check it"), ('60 days to try it', 'No real guarantee')]:
    d.rounded_rectangle((40, y, W // 2 - 30, y + 96), 48, fill=PAPER)
    check(d, 62, y + 24, 24, ok=True, col=INK); text(d, (125, y + 48), a, font(34, 'Medium'), INK, 'lm')
    d.rounded_rectangle((W // 2 + 30, y, W - 40, y + 96), 48, fill=INK)
    check(d, W // 2 + 52, y + 24, 24, ok=False, col=DAY30); text(d, (W // 2 + 115, y + 48), b, font(32, 'Regular'), PAPER, 'lm')
    y += 128
text(d, (W // 2, H - 70), 'Look inside before you buy.', font(40, 'SemiBold'), INK, 'mm')
save(c, 'S04-plush-vs-billes')

# ---------- S05 · copie FlowPure (héros propre) ----------
c = Image.new('RGBA', (W, H), PAPER + (255,))
grad = Image.new('RGBA', (1, H));
for yy in range(H):
    t = yy / H; grad.putpixel((0, yy), tuple(int(PAPER[i] * (1 - t) + (226, 218, 207)[i] * t) for i in range(3)) + (255,))
c.alpha_composite(grad.resize((W, H)))
d = ImageDraw.Draw(c)
lg = logo(INK, 150); c.alpha_composite(lg, ((W - lg.width) // 2, 60))
y = wrap_lines(d, ['THE SHOWER HEAD', 'YOUR RENTAL SHOULD', 'HAVE COME WITH.'], 60, 160, font(84, 'Bold'), INK, 92)
text(d, (62, y + 14), 'Filtered · Fits standard US shower arms', font(36, 'Medium'), DAY30)
p = fit(face, h=560); place(c, p, (W - p.width) // 2 + 40, 560)
text(d, (W // 2, H - 60), 'Try it risk-free for 60 days', font(36, 'Medium'), INK, 'mm')
save(c, 'S05-location-hero')

# ---------- S07 · copie Vedya (problème / solution, vraie photo) ----------
c = Image.new('RGBA', (W, H), INK + (255,)); d = ImageDraw.Draw(c)
mp = Image.open(os.path.join(SRC, 'mount-photo.jpg')).convert('RGB')
mp = ImageOps.fit(mp, (W, 980), Image.LANCZOS, centering=(0.6, 0.4)); c.paste(mp, (0, 0))
fade = Image.new('L', (1, 260)); [fade.putpixel((0, i), int(255 * i / 259)) for i in range(260)]
c.alpha_composite(Image.merge('RGBA', [Image.new('L', (W, 260), v) for v in INK] + [fade.resize((W, 260))]), (0, 720))
old = rounded_photo(Image.open(os.path.join(SRC, 'prop-old.png')), 230, 230, 22)
Y0 = 520
d.rounded_rectangle((40, Y0, 560, Y0 + 430), 28, fill=INK + (255,))
c.alpha_composite(old, (60, Y0 + 20))
check(d, 60, Y0 + 270, 20, ok=False, col=DAY30); text(d, (110, Y0 + 272), 'The problem', font(36, 'SemiBold'), PAPER)
text(d, (300, Y0 + 40), 'Builder-grade', font(32, 'Regular'), STONE); text(d, (300, Y0 + 82), 'head, nothing', font(32, 'Regular'), STONE); text(d, (300, Y0 + 124), 'filtered', font(32, 'Regular'), STONE)
check(d, 60, Y0 + 340, 20, ok=True, col=DAY30); text(d, (110, Y0 + 342), 'The solution: Plush', font(36, 'SemiBold'), DAY30)
cols = [('6-layer', 'cartridge'), ('Fits US', 'shower arms'), ('Lasts', '3 months'), ('60-day', 'guarantee')]
cw = (W - 80) // 4
for i, (a, b) in enumerate(cols):
    x = 40 + i * cw
    d.line([(x + 20, 1040), (x + cw - 20, 1040)], fill=DAY30, width=4)
    text(d, (x + cw // 2, 1095), a, font(36, 'SemiBold'), PAPER, 'mm'); text(d, (x + cw // 2, 1140), b, font(30, 'Regular'), STONE, 'mm')
lg = logo(PAPER, 130); c.alpha_composite(lg, ((W - lg.width) // 2, H - 110))
save(c, 'S07-probleme-solution')

print('ok')
