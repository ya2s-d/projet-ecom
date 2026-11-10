#!/usr/bin/env python3
"""
Plush — chaine d'images produit.

Prend les photos BRUTES du fournisseur (assets/produit-brut/), detoure,
et sort une galerie homogene aux couleurs de la marque, prete pour Shopify.

    python3 images-produit.py [dossier_entree] [dossier_sortie]

Sorties, par photo :
    <nom>-bone.jpg    2048x2048   fond #EFE7DA   -> galerie produit
    <nom>-rust.jpg    2048x2048   fond #8A4524   -> 1 visuel sur 2, et les ads
    <nom>-alpha.png   2048x2048   transparent    -> compositions, carte, emails
Plus :
    _planche.jpg      contact sheet pour choisir vite
"""
import os, sys, glob

BONE, RUST, INK = (239, 231, 218), (138, 69, 36), (26, 22, 19)
SIZE   = 2048          # carre Shopify
MARGIN = 0.12          # 12 % de vide autour du produit
EXT    = (".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tif", ".tiff")


def load():
    from PIL import Image
    from rembg import remove, new_session
    return Image, remove, new_session("isnet-general-use")


def place(cut, bg, Image):
    """Recadre sur le produit, recentre, pose sur un fond uni."""
    box = cut.getbbox()
    if box:
        cut = cut.crop(box)
    inner = int(SIZE * (1 - 2 * MARGIN))
    # agrandit ET reduit : thumbnail() ne sait que reduire
    k = min(inner / cut.width, inner / cut.height)
    cut = cut.resize((max(1, round(cut.width * k)),
                      max(1, round(cut.height * k))), Image.LANCZOS)
    if bg is None:
        canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    else:
        canvas = Image.new("RGBA", (SIZE, SIZE), bg + (255,))
    canvas.paste(cut, ((SIZE - cut.width) // 2, (SIZE - cut.height) // 2), cut)
    return canvas


def flatten(im, bg, Image):
    out = Image.new("RGB", im.size, bg)
    out.paste(im, mask=im.split()[3])
    return out


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else "../../assets/produit-brut"
    dst = sys.argv[2] if len(sys.argv) > 2 else "../../assets/produit"
    src, dst = os.path.abspath(src), os.path.abspath(dst)
    os.makedirs(dst, exist_ok=True)

    files = sorted(f for f in glob.glob(os.path.join(src, "*"))
                   if f.lower().endswith(EXT))
    if not files:
        print(f"Aucune image dans {src}\n"
              f"Depose les photos du fournisseur dedans, puis relance.")
        return 1

    Image, remove, session = load()
    done = []
    for f in files:
        name = os.path.splitext(os.path.basename(f))[0].lower()
        name = "".join(c if c.isalnum() else "-" for c in name).strip("-")
        im = Image.open(f).convert("RGBA")
        cut = remove(im, session=session, post_process_mask=True)

        alpha = place(cut, None, Image)
        alpha.save(f"{dst}/{name}-alpha.png")
        flatten(place(cut, BONE, Image), BONE, Image).save(
            f"{dst}/{name}-bone.jpg", quality=92, subsampling=0, optimize=True)
        flatten(place(cut, RUST, Image), RUST, Image).save(
            f"{dst}/{name}-rust.jpg", quality=92, subsampling=0, optimize=True)
        done.append(f"{dst}/{name}-bone.jpg")
        print(f"  {name}")

    # planche de contact
    cols = 4
    rows = (len(done) + cols - 1) // cols
    cell = 440
    sheet = Image.new("RGB", (cols * cell, rows * cell), BONE)
    for i, p in enumerate(done):
        t = Image.open(p)
        t.thumbnail((cell - 16, cell - 16), Image.LANCZOS)
        sheet.paste(t, ((i % cols) * cell + 8, (i // cols) * cell + 8))
    sheet.save(f"{dst}/_planche.jpg", quality=88, optimize=True)

    print(f"\n{len(done)} photos traitees -> {dst}")
    print("Ouvre _planche.jpg pour choisir celles qui partent sur la fiche.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
