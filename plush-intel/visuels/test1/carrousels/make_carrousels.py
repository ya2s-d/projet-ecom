#!/usr/bin/env python3
"""Carrousels « natifs » utiles (4:5, 1080x1350) : couverture photo + conseils + slide de fin. Aucune IA, aucun crédit."""
import os, subprocess
from PIL import Image, ImageDraw, ImageFont
W, H = 1080, 1350
PAPER, INK, BROWN, GREY = (246, 242, 237), (20, 20, 20), (138, 69, 36), (70, 66, 62)
FD = '/home/user/projet-ecom/assets/fonts/'
V = '/home/user/projet-ecom/plush-intel/visuels/test1/videos/clips-bruts/'
OUT = '/home/user/projet-ecom/plush-intel/visuels/test1/carrousels/'
def f(n, s): return ImageFont.truetype(FD + n, s)
def wrap(d, text, fnt, maxw):
    out = []
    for para in text.split('\n'):
        cur = ''
        for w in para.split():
            t = (cur + ' ' + w).strip()
            if d.textlength(t, font=fnt) <= maxw: cur = t
            else: out.append(cur); cur = w
        out.append(cur)
    return out
def lines(d, ls, fnt, x, y, fill, lh, center=False):
    for l in ls:
        xx = (W - d.textlength(l, font=fnt)) / 2 if center else x
        d.text((xx, y), l, font=fnt, fill=fill); y += lh
    return y
def cover(clip, t, anchor, title, sub, out):
    tmp = out + '.src.png'
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', str(t), '-i', V + clip, '-frames:v', '1', tmp], check=True)
    im = Image.open(tmp).convert('RGB'); os.remove(tmp)
    iw, ih = im.size; s = max(W / iw, H / ih); im = im.resize((round(iw * s), round(ih * s)), Image.LANCZOS)
    x = (im.width - W) // 2; y = int((im.height - H) * anchor); im = im.crop((x, y, x + W, y + H))
    g = Image.linear_gradient('L').resize((W, H)).point(lambda v: max(0, int((v - 90) * 1.35)))
    im = Image.composite(Image.new('RGB', (W, H), (12, 10, 9)), im, g)
    d = ImageDraw.Draw(im); ft, fs = f('Poppins-Bold.ttf', 82), f('Poppins-Medium.ttf', 40)
    tl = wrap(d, title, ft, W - 150); th = len(tl) * 94
    y0 = H - 150 - th - 70
    lines(d, tl, ft, 75, y0, (255, 255, 255), 94)
    d.text((75, y0 + th + 14), sub, font=fs, fill=(236, 222, 208))
    d.text((W - 75 - d.textlength('swipe for more', font=fs), H - 95), 'swipe for more', font=fs, fill=(236, 222, 208))
    im.save(out, optimize=True)
def tip(n, idx, total, label, head, body, out):
    im = Image.new('RGB', (W, H), PAPER); d = ImageDraw.Draw(im)
    fn, fh, fb, fl = f('Poppins-Bold.ttf', 190), f('Poppins-SemiBold.ttf', 78), f('Poppins-Medium.ttf', 54), f('Poppins-SemiBold.ttf', 40)
    hl = wrap(d, head, fh, W - 170); bl = wrap(d, body, fb, W - 170)
    block = (70 if label else 0) + 235 + len(hl) * 94 + 40 + 7 + 60 + len(bl) * 78
    y = max(110, (H - block) // 2 - 30)
    if label: d.text((85, y), label, font=fl, fill=BROWN); y += 70
    d.text((78, y - 30), str(n), font=fn, fill=BROWN); y += 235
    y = lines(d, hl, fh, 85, y, INK, 94) + 40
    d.rectangle((85, y, 205, y + 8), fill=BROWN); y += 68
    lines(d, bl, fb, 85, y, GREY, 78)
    c = f'{idx}/{total}'; fc = f('Poppins-Medium.ttf', 32); d.text((W - 90 - d.textlength(c, font=fc), H - 105), c, font=fc, fill=(160, 150, 140))
    im.save(out, optimize=True)
def last(question, cta, idx, total, out):
    im = Image.new('RGB', (W, H), BROWN); d = ImageDraw.Draw(im)
    fq, fc = f('Poppins-SemiBold.ttf', 74), f('Poppins-Medium.ttf', 44)
    ql = wrap(d, question, fq, W - 200); y = (H - len(ql) * 90) // 2 - 80
    y = lines(d, ql, fq, 0, y, (255, 255, 255), 90, center=True) + 50
    lines(d, wrap(d, cta, fc, W - 220), fc, 0, y, (240, 226, 212), 60, center=True)
    fw = f('Poppins-Bold.ttf', 50); d.text(((W - d.textlength('plush', font=fw)) / 2, H - 150), 'plush', font=fw, fill=PAPER)
    c = f'{idx}/{total}'; fn = f('Poppins-Medium.ttf', 32); d.text((W - 90 - d.textlength(c, font=fn), H - 105), c, font=fn, fill=(230, 205, 185))
    im.save(out, optimize=True)
C = {
 'C1-trouver-son-rapport-d-eau': dict(cov=('24-megan-telephone-nuit.mp4', 2.0, 0.45, "How to see what's in your tap water", "it takes 2 minutes"), label=None, tips=[
   ("Search your city + “water quality report”", "Every US water utility publishes one each year. It's called a Consumer Confidence Report."),
   ("Open the table of detected substances", "It lists what your city measured in your water last year, and the legal limit for each."),
   ("Find the disinfectant row", "Most cities add chlorine or chloramine so the water stays safe on its way to your tap."),
   ("Compare your number to the limit", "Your water is legal and safe to drink. What you want at the shower head is your call.")],
   end=("Can't find your report? Comment your city and we'll find it for you.", "save this for later")),
 'C2-salle-de-bain-locataire': dict(cov=('26-couple-cles.mp4', 2.0, 0.35, "5 renter-friendly bathroom upgrades", "no drilling, no landlord call"), label=None, tips=[
   ("Swap the shower head", "Keep the original in a drawer. Put it back on move-out day."),
   ("New curtain and rings", "The fastest way to make a rental bathroom feel like yours."),
   ("Adhesive hooks", "For towels and robes. They hold well and peel off clean."),
   ("A tension-rod caddy", "It fits in the corner of the tub and comes out without a mark."),
   ("A plug-in night light", "For 2 a.m. trips. No wiring, no bulbs to change.")],
   end=("What would you add to the list?", "save this for move-in day")),
 'C3-changer-son-pommeau': dict(cov=('02-elle-visse-plush.mp4', 1.5, 0.15, "How to change a shower head without a plumber", "5 minutes, no tools needed"), label=None, tips=[
   ("Turn the shower off", "No need to shut off the water to the whole apartment."),
   ("Unscrew the old head", "Turn it counterclockwise by hand. Stuck? Wrap it in a cloth for grip."),
   ("Clean the threads", "Wipe old tape and buildup off the arm with a dry cloth."),
   ("Add plumber's tape (optional)", "Wrap it 2 to 3 times, clockwise, around the threads."),
   ("Screw the new one on by hand", "Snug, not forced. Run the water and check for drips.")],
   end=("Keep the old head for move-out day.", "save this for later")),
 'C4-quand-remplacer': dict(cov=('23-etagere-produits.mp4', 2.0, 0.35, "How often to replace the things in your shower", "most of us are overdue"), label=None, tips=[
   ("Toothbrush", "Every 3 to 4 months, or sooner if the bristles fray."),
   ("Loofah", "Every 3 to 4 weeks. Let it dry outside the shower between uses."),
   ("Bath towels", "Wash them after about 3 uses, and let them dry fully."),
   ("Shower curtain liner", "Wash it once a month. Replace it when the spots stop coming off."),
   ("Shower filter cartridge", "Every 3 months. Put the next date in your calendar when you swap it.")],
   end=("Which one are you overdue on? Be honest.", "save this for later")),
 'C5-idees-recues-filtres': dict(cov=('16-cartouche-coupe-6-couches.mp4', 2.0, 0.35, "4 things people get wrong about shower filters", "read this before you buy one"), label='MYTH', tips=[
   ("“It softens hard water”", "It doesn't. Softening takes a whole-home system with salt. A shower filter is designed to reduce chlorine and sediment."),
   ("“You need a plumber”", "Most screw onto a standard 1/2-inch shower arm by hand."),
   ("“One cartridge lasts forever”", "It doesn't. Plan to change it every 3 months."),
   ("“They're all the same”", "Check what's inside. Some you can open and see. Some are sealed shut.")],
   end=("Which one did you believe?", "save this before you buy")),
}
for name, c in C.items():
    od = OUT + name; os.makedirs(od, exist_ok=True)
    total = len(c['tips']) + 2
    cover(*c['cov'][:3], c['cov'][3], c['cov'][4], f'{od}/01.png')
    for k, (h, b) in enumerate(c['tips']):
        tip(k + 1, k + 2, total, c['label'], h, b, f'{od}/{k+2:02d}.png')
    last(c['end'][0], c['end'][1], total, total, f'{od}/{total:02d}.png')
    print(name, total, 'slides')
