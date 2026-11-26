# Carrousels animés C6 à C10 (26 nov. 2026)

Le format reprend celui des carrousels « éducatifs + data » (titre géant, graphique qui monte au swipe, « SAVE THIS » à la fin), avec les couleurs et les polices Plush. Tout est fait en code, sans IA et sans crédit. Le produit n'apparaît que sur de vraies photos détourées.

- **Instagram** : `NN.mp4` (1080×1350, 4:5, 6-8 s), un fichier par slide, à poster dans l'ordre. À l'import, choisir le format 4:5.
- **TikTok, mode photo** : `tiktok-9x16/CX-NN.png` (1080×1920). Le contenu est la slide 4:5 à 92 %, centrée (mêmes marges en haut et en bas, à gauche et à droite). Les `NN.png` en 4:5 restent dans chaque dossier.
- **Refaire le rendu** : `node render.js` (ou `node render.js C8` pour un seul carrousel). Le contenu est dans `slides.js`, le moteur et les illustrations dans `lib.js`.

| Carrousel | Slides | Accroche | Question de fin | Sources |
|---|---|---|---|---|
| C6-6-minutes-1-mois | 5 | 6 minutes de douche = 1 mois d'eau bue | How long are your showers? | EPA WaterSense : 2,5 gpm standard, ~17 % de l'eau, ~40 gal/jour par famille |
| C7-lis-ton-pommeau | 5 | Le chiffre gravé sur le pommeau (GPM) + test du bidon | Comment the number on yours | EPAct 1992 (2,5 gpm à 80 psi, dès 1994), WaterSense 2,0, Californie 1,8 (2018) |
| C8-odeur-de-piscine | 6 | « That pool smell is on purpose » | Comment your city | CDC : piscines ≥ 1 ppm, spas ≥ 3 ppm ; EPA : 4 mg/L au maximum ; chloramine : plus d'1 Américain sur 5 |
| C9-douche-d-hotel | 7 | Douche d'hôtel chez soi, 5 astuces sans perceuse | Which one first? 1 to 5 | — |
| C10-la-vapeur-reste | 5 | Humidité après la douche (locataires) | Does your bathroom have a fan? | EPA : humidité < 60 %, idéalement 30-50 %, sécher en 24-48 h |

**Promesse faite dans C7** : « Next up: we jug-test Plush ». Il faut filmer pour de vrai le test du bidon de 1 gallon avec l'échantillon.
