# assets/

```
produit-brut/   <- tu deposes ici les photos SOURCE
                   (fiche fournisseur 1688/Alibaba, photos qu'il t'envoie,
                    ou sorties d'IA image-to-image)
produit/        <- genere, ne pas editer a la main
```

## Homogeneiser la galerie

```
python3 research/brand/images-produit.py
```

Detoure chaque photo et la repose sur les couleurs Plush, meme cadrage,
meme marge, 2048x2048. Pour chaque source :

| sortie | usage |
|---|---|
| `<nom>-bone.jpg` | fond #EFE7DA — galerie fiche produit |
| `<nom>-rust.jpg` | fond #8A4524 — 1 visuel sur 2, et les ads |
| `<nom>-alpha.png` | transparent — compositions, carte, emails |
| `_planche.jpg` | planche de contact, pour choisir vite |

Le but n'est pas de "faire une belle photo" : c'est que les 7 images de la
fiche aient **le meme fond, la meme echelle et la meme marge**. C'est ca qui
fait qu'une boutique a l'air d'une marque et pas d'un dropship.

Depend de `rembg` + `pillow` (voir requirements-images.txt).
