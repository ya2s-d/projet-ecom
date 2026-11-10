# Synthèse des ads concurrentes — le catalogue des formats à reproduire

> Phase 4 de la mission, version courte, adaptée à la décision de Yasser du 10 nov. : la plupart des vidéos et des natives seront faites avec Higgsfield ou Kai AI, à partir des formats qui marchent déjà chez les concurrents.
> Base : 294 créas de 52 pages Facebook (export Trendtrack du **4 oct. 2026**), toutes dans `ads-database.csv` (identifiants A001 à A294).
> ⚠️ Les ads en ligne au 10 nov. n'ont pas été relevées (Bibliothèque publicitaire Meta inaccessible depuis cet environnement). Les campagnes Black Friday manquent. Les captures de Yasser mettront à jour ce fichier.
> Statuts : **FAIT** = chiffre de l'export · **INFÉRENCE** = ma lecture · **HYPOTHÈSE** = à valider en ads.

---

## 1. Le score « winner »

```
score (0-100) = L + V + R
L, longévité (0-50) = 50 × min(jours actifs, 365) / 365
V, variantes (0-30) = 30 × min(variantes, 50) / 50, ramené à 15 au-delà de 100 variantes (catalogue dynamique, pas un test de créa)
R, portée UE   (0-20) = 20 × portée UE de l'ad / portée UE maximale de la même marque (0 si l'ad n'est pas diffusée dans l'UE)
```

**Limites.** Une grosse marque peut laisser tourner une ad moyenne. La longévité est un indice, pas une preuve de rentabilité. R ne joue que pour les ads diffusées dans l'UE ou au Royaume-Uni, donc les ads US sont jugées sur L + V seulement (80 points maximum).

---

## 2. Ce que fait le marché (294 créas, classement automatique à vérifier)

| Dimension | Répartition | Lecture |
|---|---|---|
| Format | **vidéo 199 (68 %)** · statique 95 (32 %) | Le marché est vidéo. Les gros joueurs du statique sont rares (Vedya Home, Showerlabs) |
| Destination | PDP 157 (53 %) · **page dédiée ou advertorial 82 (28 %)** · listicle 8 · collection 5 | eskiin, Hello Klean et Water2 n'envoient jamais vers une fiche produit nue (dossier, 4 oct.) |
| Angle (mots-clés) | **cheveux 115** · peau 34 · corps 18 · pression 15 · cartouche 11 · ennemi 6 · toxines 6 | 🔴 Cheveux et peau sont saturés, et ce sont les angles les plus exposés aux allégations |
| Niveau de conscience du hook | conscient du produit / offre 132 · de la solution 66 · inconscient 55 · du problème 41 | Le marché parle surtout à des gens qui connaissent déjà le produit. L'éducatif « ton eau » reste minoritaire |
| Langue | en 224 · fr 45 · es 21 · de 1 | — |

**Saturé** (ne pas y aller, ou seulement avec un format différent) : « 15-stage », « vitamin C », cheveux qui tombent, peau qui tire, « dermatologist recommended », « #1 ».
**Place libre pour un acteur US** (INFÉRENCE, croisée avec `../02_marche/analyse-marche.md`) :
- la cartouche comme preuve : 1 ad US sur 144, alors que Puure en a fait sa 1re dépense au Royaume-Uni ;
- l'eau de ta ville, avec le rapport CCR : 2 sur 144 ;
- l'objet d'avant comparé à l'objet de maintenant ;
- le segment inattendu ;
- le locataire (Sproos seul).

---

## 3. LE CATALOGUE — 12 formats qui marchent, et comment les faire en IA

Légende IA : ✅ faisable entièrement en IA · 🟠 l'IA pour la mise en scène, mais la preuve doit être réelle · ❌ impossible en IA sans tromper.

| # | Format | Exemples concurrents (FAIT, export du 4 oct.) | Pourquoi ça marche (INFÉRENCE) | En IA | Version Plush |
|---|---|---|---|---|---|
| F1 | **Révélation de la cartouche** : « voilà ce que le filtre a retenu » | **A001** Puure, 453 j, 14 variantes, **72 991 $** · A003 Puure FR 53 127 $ · A010 Puure DE 32 843 $ · A021 Puure, série de 5 cartouches, 13 000 $ | La preuve se voit, elle n'est pas affirmée. Le spectateur conclut seul | 🟠 La cartouche usée doit être **réelle** : eau US, ou test des 450 gallons. L'IA peut animer la mise en scène autour d'une **vraie photo** | « We didn't make it brown. Your water did. » On montre la cartouche sans nommer ce qu'il y a dedans |
| F2 | **Avant / maintenant, sur l'objet** | **A008** Puure via la page de Keith Maynard, 208 j, **36 019 $** : « This is a water filter in 1970, and this is a water filter in 2026 » | Le contraste sur un objet, pas sur un corps : zéro allégation | ✅ Scènes d'époque générées : le vieux pommeau d'appartement, puis Plush | « This is a shower head from 1998. It's still in your rental. » |
| F3 | **Dialogue ou sketch à deux voix, sur une objection** | **A040** GetSeoni, 79 j, 7 variantes : « T'as quand même pas acheté le pommeau à 79 € ? » · A014 Pureva 16 026 $ · Water2, transcription complète dans `../../research/trendtrack-export/ads-water2.md` | L'objection du spectateur est dite à voix haute, puis levée par l'objet | ✅ Deux personnages IA qui jouent une scène, sans se présenter comme clients | Les 3 objections, une par vidéo : « it'll kill the pressure » · « you need a plumber » · « $75 for a shower head? » |
| F4 | **« J'ai enfin… » : témoignage face caméra** | **A020** FlowPure, **678 j, 48 variantes** · A018 Puure, 564 j · A016 Pureva 15 560 $ · A126 Lucinn, 504 j, 43 variantes (texte interdit) | Identification, preuve sociale | ❌ **Pas en IA** : une personne IA qui dit « I got this one » = faux témoignage (FTC) | Yasser face caméra, en tant que fondateur · un vrai créateur US (kit de démarchage, `../../research/gifting/`) |
| F5 | **Explication face caméra : « ton eau, ta ville »** | **A135** Pure Shower BR, 419 j, 35 variantes · A136, 426 j, 34 variantes : « Tu savais que le Brésil utilise du chlore… » · A147 Sproos, 451 j : « Serious question — How often do you shower? » · A172 eskiin, 294 j | Information nouvelle et vérifiable, au niveau « conscient du problème » | ✅ Un présentateur IA explique, sans « I » et sans résultat sur le corps | Chlore jusqu'à 4 mg/L (EPA), rapport CCR de ta ville, « 16 gallons per shower » (ebook) |
| F6 | **Démo produit et installation** | **A012 / A017 / A028** Hello Klean, 142-164 j, **40 à 51 variantes**, 8 596-19 882 $ · A155 Sproos, 465 j · A034 Water2, 7 124 $ : « Setup was so simple » | Lève la peur du plombier. Montre l'objet | ✅ Rendu du produit à partir de **vraies photos** (image vers vidéo) + vrais plans d'installation tournés le 10 nov. | « If you can open a jar, you can install Plush. » Chrono visible |
| F7 | **L'ennemi, c'est ce qu'elle a déjà** | **A006** Water2, statique, 243 j, **42 408 $** : « I threw my bottles in the BIN… » · A053 FlowPure, 618 j, 37 variantes · A068 Pureva, 415 j : la carafe · **A206-208** Showerlabs, statique : « You Filtered Your Water. But Not Your Shower? » | On attaque une habitude, pas un concurrent | ✅ Statique ou vidéo | « You filter your drinking water. What about the water you shower in? » |
| F8 | **Créateur ou page tierce** (l'ad passe par la page d'une autre personne) | **A009** Water2 via la page de Bear Grylls, 444 j, **35 169 $** · A022 Water2 via The Durham Derwent 12 518 $ · A008 via Keith Maynard | Crédibilité empruntée, audience neuve | ❌ Il faut un vrai créateur. Pour le test 2 | — |
| F9 | **Comparatif classé (« tier list »)** | **A019** GetSeoni, 91 j, 9 variantes, **14 480 $** : « j'ai comparé les pommeaux filtrants les plus connus » | Format jeu, très regardé jusqu'au bout | ✅ En comparant des **types** de produits, jamais des marques (diffamation commerciale) | Pommeau d'origine → billes colorées → « 15-stage » d'Amazon → filtre KDF + cartouche visible |
| F10 | **Offre** (%, 1 acheté = 1 offert, livraison offerte) | **A062** Clover & Cove, 446 j, **58 variantes** · A033 Showery, 481 j : « Get Up To 58% OFF » · A055 FlowPure, 711 j · **A150** Vedya Home, statique, 120 j, 45 variantes | Bas de funnel, déclinable à l'infini | ✅ Statiques | Black Friday : « Duo + 3rd cartridge free » (playbook §10). Pas de faux prix barré |
| F11 | **Série éditoriale** (« Part 4 ») | **A023** Puure, 395 j, 12 171 $ : « Things You Didn't Know You Can Buy Plastic Free Part 4 » | La série crée l'attente, et chaque épisode est un nouveau concept pour Meta | ✅ | « Things in your rental nobody replaces, Part 1: the shower head » |
| F12 | **Segment inattendu** | **A162** Sproos, 465 j, 8 variantes : l'angle chien | Touche une audience que personne ne vise | ✅ | Locataire qui emménage · cadeau de pendaison de crémaillère · « hotel shower at home » |

**Formats à ne pas reproduire, même s'ils dépensent :**
- **l'autorité inventée** (A185 « Dr James Fetterman », A205 « Velvet Hair Salon », A004 et A029 Oasis : page d'autorité) ;
- **le témoignage chute de cheveux / peau** (A002 Oasis, **55 880 $**, l'ad la plus chère du relevé : « caída de pelo… piel seca ») ;
- **« Your water is making you ugly »** (A141 Lucinn).

Leur argent est réel, mais leur texte est interdit (liste close du 4 oct., `../../CLAUDE.md`).

---

## 4. Top 15 du marché à étudier en priorité

| Rang | ID | Marque | Preuve (FAIT) | À prendre |
|---|---|---|---|---|
| 1 | A001 | Puure | 72 991 $ · 453 j · 14 variantes | La cartouche, sans la nommer |
| 2 | A006 | Water2 | 42 408 $ · statique · 243 j | L'ennemi = la bouteille, en une image |
| 3 | A008 | Puure / Keith Maynard | 36 019 $ · 208 j | 1970 contre 2026 |
| 4 | A009 | Water2 / Bear Grylls | 35 169 $ · 444 j | La page tierce (pour plus tard) |
| 5 | A020 | FlowPure | 678 j · 48 variantes | Le « I finally got this one » → version fondateur |
| 6 | A012 | Hello Klean | 19 882 $ · 51 variantes sur la même famille | La démo produit déclinée en masse |
| 7 | A019 | GetSeoni | 14 480 $ · 91 j | Le comparatif par types |
| 8 | A040 | GetSeoni | 79 j · 7 variantes | Le dialogue sur l'objection prix |
| 9 | A135 | Pure Shower BR | 419 j · 35 variantes | L'éducatif « ta routine commence par l'eau » |
| 10 | A147 | Sproos | 451 j · 13 variantes | La question d'ouverture |
| 11 | A162 | Sproos | 465 j | Le segment inattendu |
| 12 | A053 | FlowPure | 618 j · 37 variantes | L'ennemi « you won't boil your water » |
| 13 | A023 | Puure | 12 171 $ · 395 j | La série en épisodes |
| 14 | A062 | Clover & Cove | 446 j · 58 variantes | L'offre statique déclinée |
| 15 | A206 | Showerlabs (Afina) | statique · 8 variantes | « You filtered your water. But not your shower? » |

Scripts détaillés et transcriptions : `ads-database.csv` (colonnes `hook_parle` et `texte_principal_resume`) et `../../research/trendtrack-export/ads-final-4oct.md`.

---

## 5. Ce que Plush fait différemment

1. **Montrer l'objet, jamais le corps.** 115 créas sur 294 parlent de cheveux. Plush parle de ce que le filtre retient, de l'eau de ta ville, du vieux pommeau.
2. **Être celui qui dit ce qu'il ne fait pas** (« won't soften hard water »). Dans un marché de « #1 » et de faux médecins, c'est le seul angle de confiance qu'aucun concurrent du relevé n'utilise (INFÉRENCE, à confirmer sur les captures du 10 nov.).
3. **IA pour la mise en scène, réel pour la preuve.** Cartouche, seau, installation : de vrais plans, que l'IA met en scène.
4. **12 formats distincts dans le test de 30**, et non 30 variantes de 3 formats : c'est ce que Meta lit comme de la diversité (playbook §1).

---

## 6. Ce qui manque encore (honnête)

| Manque | Pourquoi | Ce qui le comble |
|---|---|---|
| Ads en ligne au 10 nov., campagnes Black Friday | Bibliothèque publicitaire Meta inaccessible depuis cet environnement | Captures de Yasser (dossier Mega) |
| Répartition âge / sexe de la portée UE | Non collectée dans l'export | Captures du panneau « transparence UE » des ads de Puure, Hello Klean, FlowPure, Water2 et Oasis |
| Images clés et durée des vidéos | Les médias de Trendtrack sont bloqués par le proxy (403) | Les MP4 envoyés par Yasser, traités par script (4 images + transcription) |
| `teardowns/<marque>.md` et `landing-pages/<marque>.md` | Reportés : la priorité est le lancement avant le 18-19 nov. | Après le test 1, ou si Yasser le demande |
