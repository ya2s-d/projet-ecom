# Plush — analyse du marché US des pommeaux de douche filtrants

> Phase 2 de `../MISSION.md`. Démarrée le 9 nov. 2026, reprise le 10 nov. 2026.
> Statuts : **FAIT** (URL + date d'accès) · **INFÉRENCE** (déduite de faits, méthode dite) · **HYPOTHÈSE** (à valider en ads).
> Ce fichier complète `../../research/` (export Trendtrack du 4 oct., angles du 1er nov., avatar v2) sans le refaire.

## Plan et état

| # | Section | État |
|---|---|---|
| 1 | Prix et positionnement, coût réel sur 1 an | ⏳ |
| 2 | Géographie : eau dure, chlore vs chloramine | ⏳ |
| 3 | Conscience et sophistication (Schwartz) | ⏳ |
| 4 | Canaux : Amazon, retail, DTC | ⏳ |
| 5 | Cadre réglementaire des allégations | ⏳ |
| 6 | Saisonnalité, Q4, BFCM, dates limites Noël | ⏳ |
| 7 | Demande : Google Trends, TikTok, sources secondaires | ⏳ |
| — | 10 conséquences pour nos ads | ⏳ |
| — | Sources | ⏳ |

## Faits Plush utilisés dans ce fichier (10 nov. 2026)

| Élément | Valeur | Statut |
|---|---|---|
| Offres | Solo 59,99 $ · Duo 74,99 $ (pommeau + 1 cartouche de rechange) · cartouche 29 $ · livraison US offerte 7-12 jours ouvrés · garantie 60 jours | FAIT — site, relevé 9 nov. (`../PLAN.md`) |
| Durée cartouche | **3 mois** selon le fournisseur · le site dit 60 jours | FAIT (réponse Yasser 9 nov.) · ⚠️ incohérence ouverte |
| COGS DDP | Solo 21,50 € · Duo 27,08 € | FAIT — devis fournisseur n° 1 |
| Composition affichée | maille + coton PP, KDF-55, sulfite de calcium, charbon actif, billes de vitamine C · pas un adoucisseur · filetage US ½" | FAIT — site · vitamine C et filetage encore « à confirmer par écrit » |
| Preuve chlore | certification fournie par l'usine, **pas encore lue** | FAIT — aucun chiffre en pub tant qu'elle n'est pas lue |
| Ads | 0 pub lancée · test prévu 150 €/jour pendant 5-6 jours · échantillon pas encore reçu | FAIT |

---

## 1. Prix et positionnement — coût réel sur un an

### Méthode

- **Prix relevés le 10 nov. 2026** : catalogues Shopify publics (`<domaine>/products.json`) des marques DTC, et Amazon Best Sellers « Showerhead Filters », « Fixed Showerheads », « Handheld Showerheads » (données brutes : `amazon-bestsellers-2026-11-10.csv`, 120 lignes).
- **Coût an 1** = pommeau (cartouche montée incluse) + cartouches de rechange pour couvrir 12 mois, **au rythme annoncé par la marque elle-même**, au prix public le moins cher sans abonnement (packs compris si la cliente doit acheter le pack entier). **Coût an 2** = cartouches seules sur 12 mois.
- Hypothèse commune : 1 pommeau, cartouche changée à la date annoncée (pas plus tôt, pas plus tard).

### Plush — le calcul, hypothèse explicite

| Cas | Cartouches sur 12 mois | Déjà dans la boîte | À racheter | **Coût an 1** | Coût an 2 | Par jour (an 2) |
|---|---|---|---|---|---|---|
| **Duo, cartouche 3 mois** (fournisseur) | 4 | 2 | 2 × 29 $ | **132,99 $** | 116 $ | 0,32 $ |
| Solo, cartouche 3 mois | 4 | 1 | 3 × 29 $ | 146,99 $ | 116 $ | 0,32 $ |
| Duo, cartouche 60 jours (site actuel) | 6 | 2 | 4 × 29 $ | 190,99 $ | 174 $ | 0,48 $ |
| Solo, cartouche 60 jours (site actuel) | 6 | 1 | 5 × 29 $ | 204,99 $ | 174 $ | 0,48 $ |

- **Vérification du calcul du coordinateur** : 74,99 + 3 × 29 = 161,99 $ compte **une cartouche de trop** pour le Duo. Sur 12 mois à 3 mois par cartouche, il en faut 4 ; le Duo en contient 2 (montée + rechange) → **2 à racheter → 132,99 $**. Le 161,99 $ correspondrait à 5 cartouches, soit une couverture de 15 mois. INFÉRENCE (arithmétique).
- **Le Duo coûte moins cher sur un an que le Solo** (132,99 $ contre 146,99 $) : 15 $ de plus à l'achat, 29 $ de moins ensuite. C'est un argument de vente du Duo, chiffré et vrai. INFÉRENCE.
- ⚠️ **Le « 48¢ a day » de l'ebook v2 repose sur 60 jours** (174 $ ÷ 365 = 0,48 $). Si la durée retenue est 3 mois, c'est **32¢ a day**. Une seule durée doit exister sur le site, l'ebook et les ads. INFÉRENCE.
- ⚠️ La durée en mois n'a de sens que rapportée à une capacité en gallons. Repère : une douche américaine moyenne = **15,8 gallons** (7,8 min à 2,1 gpm, EPA WaterSense, chiffre connu, non revérifié ce jour). Durée en jours = capacité certifiée (gallons) ÷ (15,8 × douches par jour). → À lire dans la certification usine dès réception. HYPOTHÈSE de méthode.

### La carte prix × positionnement (10 nov. 2026)

| Niveau | Produit (marque) | Prix pommeau | Cartouche : prix · durée annoncée | **Coût an 1** | Coût an 2 | Source |
|---|---|---|---|---|---|---|
| **Entrée Amazon — filtre en ligne** | AquaBliss SF100 (n° 1 Amazon, 70 329 évaluations) | 36,99 $ | 17,99 $ · 3 à 6 mois | **54,98-90,96 $** | 35,98-71,96 $ | Amazon BS + aquabliss.com |
| Entrée Amazon — pommeau filtrant | Cobbe à main (20 372 év.) · FEELSO fixe (14 043 év.) | 21,65 $ · 19,79 $ | ~10,50 $ (pack de 2 à 20,99 $) · durée non relevée | ~53-64 $ (HYPOTHÈSE 3 mois) | ~42 $ | Amazon BS |
| Milieu Amazon | MyHalos (n° 14 filtres) | 74,99 $ | 29,99 $ le pack de 2 « 6-month supply » → 3 mois | **134,97 $** (2 packs, 1 cartouche d'avance) | 59,98 $ | Amazon BS |
| **Plush Duo** | — | **74,99 $** | 29 $ · 3 mois (fournisseur) | **132,99 $** | 116 $ | myplush.us |
| Plush Solo | — | 59,99 $ | 29 $ · 3 mois | 146,99 $ | 116 $ | myplush.us |
| Milieu DTC « dupe » | Lucinn Pro | 99 $ (barré 225 $) | 42 $, ou 99 $ les 3 · 2 à 3 mois | **198-282 $** | 132-198 $ | lucinn.com |
| Milieu DTC « dupe » | Unchemed Classic (« 15 + 5 stages ») | 99 $ | 39 $, ou 29 $ en abonnement · 90 jours | **216 $** (186 $ abonné) | 156 $ (116 $) | unchemed.com |
| **Premium DTC** | Afina | 129 $ (barré 179 $) | 29 $ ; pack de 6 = 120 $ · **2 mois** | **249 $** (tête + pack de 6) | 120 $ | afina.com |
| Premium DTC | eskiin | 149 $ | 36 $ · 90 jours | **257 $** | 132-144 $ | eskiin.com |
| Premium DTC | Canopy | 150 $ | 37 $, ou 27 $ abonné · 90 jours | **261 $** (231 $ abonné) | 108-148 $ | getcanopy.co |
| Premium DTC / retail | Jolie | 169 $ (Amazon, Ulta) | 38 $ (Amazon) · 90 jours | **283 $** | 152 $ | Amazon BS, ulta.com |
| Premium design | Sproos (douchette + filtre) | 148 $ | 36 $ · durée non relevée | n.d. | n.d. | sproos.co |
| Ultra | Mizsei (microbulles) | 219-299 $ | préfiltre 50 $ + 3 cartouches 40 $ | n.d. | n.d. | mizseishower.com |

Statut : prix et durées = **FAIT** (relevés le 10 nov. 2026, URLs en fin de fichier). Coûts an 1 / an 2 = **INFÉRENCE** (calcul selon la méthode ci-dessus).

### Ce que la carte dit

1. **Plush est dans la zone « dupe » (59-99 $)**, celle de MyHalos (74,99 $, même prix que le Duo), Lucinn, Unchemed, Clover & Cove (59,99 $). C'est aussi la zone où la copy est la plus agressive : Lucinn « #1 Recommendation by Dermatologists », Unchemed vendu par un médecin fictif, Clover & Cove « removes 99% of contaminants » (relevé 4 oct. + catalogues 10 nov.). → Plush ne peut pas gagner sur le prix seul dans cette zone ; il gagne sur la **crédibilité**. INFÉRENCE.
2. **Sur un an, le Duo coûte environ la moitié du premium** : 132,99 $ contre 249-283 $ (Afina, eskiin, Canopy, Jolie). C'est vrai, chiffrable, et ça retourne l'objection « 74,99 $ pour un pommeau ? ». INFÉRENCE.
3. **Mais Plush n'est pas moins cher qu'Amazon** : un filtre AquaBliss revient à 55-91 $ la 1re année. L'argument « coût sur un an » marche **contre le premium, pas contre Amazon**. Contre Amazon, l'argument est ailleurs (look, honnêteté, garantie 60 jours, cartouche visible). INFÉRENCE.
4. **La cartouche Plush à 29 $ n'est pas bon marché** : Afina vend la sienne 20 $ en pack de 6 (120 $/an), Canopy 27 $ en abonnement, MyHalos 15 $. À l'an 2, Plush (116 $ à 3 mois) n'est pas moins cher qu'Afina (120 $ à 2 mois). L'avantage de Plush est **à l'achat du pommeau**, pas sur la recharge. → Un pack de cartouches (2 ou 4) est à chiffrer avant de parler de coût annuel en pub. INFÉRENCE · coût d'une cartouche envoyée seule toujours inconnu.
5. **Le consommable domine Amazon** : dans le top 30 « Showerhead Filters », **16 lignes sur 30 sont des cartouches de rechange** (dont n° 2 AquaBliss, n° 3 Jolie, n° 4 Afina, n° 11 eskiin), 9 des filtres en ligne, 5 des pommeaux filtrants. Confirme le constat Trendtrack du 2 oct. (cartouche = best-seller chez eskiin et Afina). FAIT (classement manuel du top 30, CSV).
6. **Le prix barré est la norme… et un risque pour Plush** : Lucinn 99 $ barré 225 $, Afina 129 $ barré 179 $, Plush 59,99 $ barré 115 $ et 74,99 $ barré 144,02 $. Pour une marque qui n'a jamais vendu à 115 $, voir section 5 (prix de référence). FAIT (prix) · INFÉRENCE (risque).
7. **Les offres BFCM de la catégorie empilent des cadeaux plutôt que des remises** : eskiin affiche en catalogue « FREE Beauty And Wellness E-Book » valorisé **20 $**, « FREE Hair Wrap Towel » 50 $, « FREE Detangling Hair Brush » 40 $, « FREE Diverter » 29 $, « FREE Shower Steamers » 30 $. → L'ebook gratuit « FREE ~~$20~~ » de Plush est **le standard de la catégorie, pas un différenciateur**. FAIT (eskiin.com/products.json, 10 nov.) · INFÉRENCE (conséquence).

### Ancres de prix Amazon des pommeaux filtrants (top 30, 10 nov.)

| Liste Amazon | Pommeaux filtrants dans le top 30 | Prix médian | Fourchette |
|---|---|---|---|
| Fixed Showerheads | 7 / 30 | 49,95 $ | 19,79-99,99 $ |
| Handheld Showerheads | 10 / 30 | 21,82 $ | 18,99-52,99 $ |

→ **Près d'un pommeau best-seller sur trois est déjà filtrant** (17 sur 60), et l'ancre qu'elle verra sur Amazon est **20-50 $**. Plush Solo (59,99 $) est juste au-dessus, le Duo (74,99 $) nettement. FAIT (CSV) · INFÉRENCE (lecture).

---

## 2. Géographie du problème : eau dure, chlore ou chloramine

### Les repères officiels

| Repère | Valeur | Source | Statut |
|---|---|---|---|
| Classes de dureté USGS (mg/L de CaCO₃) | doux 0-60 · modérément dur 61-120 · dur 121-180 · **très dur > 180** · 1 gpg = 17,1 mg/L | USGS Water Science School | FAIT (10 nov.) |
| Où l'eau est dure | « prevalent in the east-central and western United States » | USGS, même page | FAIT (10 nov.) |
| Chloramine | « **More than one in five Americans** » boit une eau traitée à la chloramine | EPA, page mise à jour le 12 mars 2026 | FAIT (10 nov.) |
| Plafond US du désinfectant au robinet | **4 mg/L** (MRDL, chlore comme chloramine) | tous les rapports CCR ci-dessous | FAIT |
| Plafond à Bruxelles | chlore résiduel plafonné à **0,25 mg/L** | Bruxelles Environnement (transmis par le coordinateur le 10 nov., URL non relevée) | FAIT (à sourcer précisément) |
| Filtres de douche et chloramine | Le distributeur de Boston écrit que les filtres de douche certifiés **seulement pour le chlore libre (NSF/ANSI 177) peuvent ne pas agir sur la chloramine** | MWRA, FAQ (via résumé de recherche) | FAIT (10 nov.) |

### Les grandes villes — dureté et désinfectant (rapports des distributeurs)

| Ville (distributeur) | Dureté (mg/L CaCO₃) | Classe USGS | Désinfectant | Résiduel moyen | Données | Statut |
|---|---|---|---|---|---|---|
| **New York** (NYC DEP) | **32** (18-100) · 2 gpg | doux | **chlore libre** | 0,6 mg/L | 2025 | FAIT (rapport lu) |
| **Chicago** (DWM) | 130-150 · 7,6-8,8 gpg | dur | **chlore** | ~1-1,3 ppm (rapport 2022) | FAQ 311 + rapport 2022 | FAIT (résumé de recherche) |
| **Phoenix** (City of Phoenix) | **172-302** · 10-17,6 gpg | **très dur** | **chlore** | n.r. | 2025 (version espagnole) | FAIT (rapport lu) |
| **Las Vegas** (LVVWD) | **280** · 16 gpg | **très dur** | **chlore** (ozonation + chloration) | n.r. | rapport 2026 | FAIT (résumé) |
| **Seattle** (SPU) | n.r. | — | **chlore** | 1,0 ppm (0-1,8) | 2025 | FAIT (résumé) |
| **Detroit** (DWSD / GLWA) | 107 (96-142) | modérément dur | chlore (aucune chloramine mentionnée) | 0,59-1,08 ppm (total) | 2025 | FAIT (dureté) · INFÉRENCE (chlore libre) |
| **Columbus** (ville de l'avatar) | 98-125 · 5,7-7,3 gpg, **adoucie à la chaux** | modérément dur à dur | **chlore** | 0,97-1,44 ppm (total, selon l'usine) | 2025 | FAIT (rapport lu) |
| **Los Angeles** (LADWP) | 78-280 selon la source (moyennes 103-236) | modérément dur à très dur | **chloramine** | 1,7 mg/L (total) | 2025 | FAIT (rapport lu) |
| **San Diego** (City PUD) | ~172-248 (moy. 216-230) | **très dur** | **chloramine** | 1,73 ppm | 2024 | FAIT (résumé, tableau complexe) |
| **San Francisco** (SFPUC) | moy. 62 (8,1-112) | doux à modérément dur | **chloramine** | 3,0 ppm | 2025 | FAIT (résumé) |
| **Houston** (Main System) | moy. 135,5 (43,5-229) | dur | **chloramine** | 2,8 ppm | 2025 | FAIT (rapport lu) |
| **Dallas** (DWU) | n.r. | — | **chloramine** | 2,97 ppm (total) | 2025 | FAIT (rapport lu + page du distributeur) |
| **Washington DC** (DC Water) | moy. 139 (84-194) · 8 gpg | dur | **chloramine**, sauf bascule au chlore chaque printemps (23 mars-4 mai 2026) | n.r. | 2025 | FAIT (résumé) |
| **Philadelphie** (PWD) | moy. 98-168 selon l'usine (max 220) · 6-10 gpg | modérément dur à dur | **chloramine** (presse sur le rapport 2025) | 1,73-2,33 ppm (total) | 2024 | FAIT (rapport lu) · chloramine = source presse |
| **Miami** (Miami-Dade WASD) | adoucie à la chaux, valeur n.r. | — | **chloramine** | 2,7-3,7 ppm (moy. annuelles) | 2024 | FAIT (résumé) |
| **Boston** (MWRA) | **13,1** · ~1 gpg | **doux** | **monochloramine** | 1,99 ppm | 2025 | FAIT (résumé) |
| Atlanta, Minneapolis, Tampa, Denver, Riverside, Baltimore, Orlando | n.r. | — | n.r. | — | — | non relevé (budget de recherche épuisé) |

n.r. = non relevé. « Résumé » = valeur lue dans le résumé d'une recherche restreinte au domaine officiel du distributeur, pas dans le PDF lui-même. URLs en fin de fichier.

### Ce que la carte dit pour Plush

**1. Deux Amériques pour la composition de Plush.** Sur 16 grandes villes dont le désinfectant est relevé :

| Groupe | Villes | Plush y est… |
|---|---|---|
| 🟢 **Chlore libre** | New York, Chicago, Phoenix, Las Vegas, Seattle, Detroit, Columbus | **dans son registre** : KDF-55, sulfite de calcium et charbon visent le chlore. L'angle « odeur de piscine » est juste |
| 🟠 **Chloramine** | Los Angeles, San Diego, San Francisco, Houston, Dallas, Washington DC, Philadelphie, Miami, Boston | **hors registre tant que la vitamine C et un test chloramine ne sont pas confirmés par écrit**. La chloramine sent moins le « piscine » : l'angle odeur y porte moins |

9 sur 16 grandes villes sont en chloramine, alors que l'EPA parle d'« un Américain sur cinq » au niveau national. **La chloramine est surreprésentée dans les grandes métropoles**, c'est-à-dire là où se concentre l'audience Meta. INFÉRENCE (échantillon de 16 villes, non représentatif au sens statistique).

**2. L'eau très dure et le chlore se cumulent à Phoenix et Las Vegas** (et l'eau est dure à Chicago). C'est là que le calcaire se voit le plus… et c'est un piège : **Plush n'adoucit pas l'eau**. Une pub « eau dure » y créerait des déçues. Dans ces villes, l'angle reste le chlore et l'odeur, avec « Plush isn't a water softener » écrit noir sur blanc. INFÉRENCE.

**3. La Californie cumule les signaux négatifs pour le premier test** : ses trois grandes villes relevées sont en chloramine (Los Angeles, San Diego, San Francisco), elle plafonne les pommeaux à 1,8 gpm (section 5) et c'est l'État de la Proposition 65. → **HYPOTHÈSE à décider : exclure la Californie du ciblage du test 1**, jusqu'à confirmation du débit, de la vitamine C et d'un test chloramine.

**4. New York et Seattle : chlore, mais eau douce.** L'angle chlore y est juste ; l'angle calcaire y serait faux. Ce sont les meilleures villes pour une créa « l'odeur de piscine » sans aucune ambiguïté sur la dureté. INFÉRENCE.

**5. Columbus, la ville de l'avatar, est une bonne ville pour Plush** : chlore, et eau déjà adoucie à la chaux par la ville (5,7-7,3 gpg). Le portrait « Megan, Columbus » tient côté eau. FAIT (rapport lu) · INFÉRENCE (adéquation).

**6. Le ciblage géographique fin n'est pas la bonne arme à 150 €/jour.** Découper le test par ville fragmenterait l'apprentissage. La géographie sert **dans la créa** (« If you live in Chicago, your water report is public ») et **en exclusion** (Californie), pas en ad sets par ville. INFÉRENCE · à confronter au playbook (Phase 0).

### ⚠️ Pourquoi une démo filmée en Belgique ne représente pas l'eau américaine

| | Bruxelles | Grandes villes US relevées |
|---|---|---|
| Plafond du désinfectant | 0,25 mg/L | 4 mg/L |
| Niveau réel | ≤ 0,25 mg/L | **0,6 mg/L** (New York, le plus bas) à **~3 mg/L** (Dallas, San Francisco, Miami) |
| Rapport | — | **2,4 à 12 fois** le plafond bruxellois |

Conséquences (INFÉRENCE) :
- **Un test au papier réactif filmé à Bruxelles montrera presque zéro chlore avant ET après le filtre** : aucune démonstration possible.
- **La couleur de la cartouche au jour 30 dépend de l'eau** (sédiments, rouille, oxydation du média cuivre-zinc). Une cartouche brunie à Bruxelles ne dit rien de l'eau de Chicago — et une cartouche brune prouve un usage, pas une quantité de contaminants. Ne jamais la légender avec une liste de substances (règle du 25 sept., confirmée).
- → **Les démos chlore et les photos « jour 30 » destinées aux ads doivent venir de créateurs US, de préférence dans une ville en chlore libre** (New York, Chicago, Phoenix, Las Vegas, Columbus). L'échantillon à Bruxelles sert au test du seau (pression) et aux photos produit, pas à la preuve chlore.

---

## 3. Conscience et sophistication (Schwartz)

### Les claims usés — mesurés, pas supposés

Deux corpus : **77 titres Amazon** liés au filtre (best-sellers du 10 nov., CSV) et **144 pubs Meta US** de douche filtrante (export Trendtrack du 4 oct., classées le 1er nov. dans `research/angles-concurrents.md`).

| Claim | Fréquence | Exemples relevés | Usure |
|---|---|---|---|
| « X-stage » | **23 titres / 77 (30 %)** · étages cités : 3, 15, 20, 23, 25, 30, 33 | « 25 Stage Shower Filter » 8,79 $ · « 33 Stage » · Unchemed « 15-stage inline » + 5 = « Twenty filtration stages » · Lucinn « 20 stages built from 10 filter media » | 🔴 surenchère numérique, dès 8,79 $ |
| « Hard water » | **33 / 77 (43 %)** | quasi tous les titres d'entrée de gamme | 🔴 omniprésent |
| « Water softener » / « soften » | **11 / 77 (14 %)** | Cobbe « Water Softener Filters Beads for Hard Water » · MyHalos « Water Softener » · eskiin « High Pressure Water Softener For Hard Water » | 🔴 **faux pour un média KDF / charbon / vitamine C** (la FAQ Plush le dit) |
| « High pressure » | **26 / 77 (34 %)** | MyHalos, Afina, Jolie, AquaBliss SF100 | 🔴 usé, et invérifiable sans mesure |
| Peau / cheveux | 22 / 77 (29 %) titres · **38 % des pubs Meta US** ouvrent sur un résultat corporel | Jolie « Clinically Tested to Reduce Hair Shedding » · AquaBliss « formulated with sensitive and eczema-prone skin in mind » | 🔴 usé **et** interdit à Plush |
| Autorité (« #1 », dermatologue, docteur) | **38 % des pubs Meta US** · 0 titre Amazon « dermatolog » | Lucinn « #1 Recommendation by Dermatologists » · Unchemed « America's #1 » + page « Dr. Emily Harrison, PhD, MD » · Filterbaby « Doctor Developed » (titre Amazon) | 🔴 saturé sur Meta, interdit à Plush |
| % chiffré | 5 / 77 titres | « Removes 99.947% » · « Reduce 97.45% Chlorine » · « 99.99% Remove Chlorine » · « 99.9% Chlorine & Chloramine Removal » · Clover & Cove « removes 99% of contaminants » | 🔴 précision factice (99,947 %) |
| Métaux lourds | 14 / 77 (18 %) | weAQUA, MyHalos, Hello Klean | 🟠 exige un rapport de test |
| KDF-55 | 7 / 77 (9 %) | Afina « KDF-55 & calcium sulfite », Philips | 🟠 nomenclature devenue banale |
| Vitamine C | 5 / 77 (6 %) | AquaBliss SF100 (n° 1), Sproos coloris « Vitamin C », Vedya « Vitamin C Aroma Filter » | 🟠 présent mais pas dominant |
| « NSF certified » | 4 / 77 (5 %) | Weddell Duo (produit) · BBLIFE et Philips « NSF Certified **KDF** » (le **média**, pas le produit) · Canopy « Tested to ANSI/NSF-177 standards » | 🟢 rare, donc encore crédible — **si c'est vrai** (section 5) |
| Chloramine | 2 / 77 (3 %) | « Second » 99,9 %, Filterbaby | 🟢 quasi absent alors qu'une partie des grandes villes est en chloramine (section 2) |
| La cartouche comme preuve | **1 pub sur 144** (Meta US) | Clover & Cove, 23 jours | 🟢 **vide** dans la douche US (prouvé à 171 961 $ chez Puure, filtre de robinet) |
| L'eau de ta ville | 2 pubs sur 144 | un créateur de Las Vegas qui lit le rapport de sa ville | 🟢 quasi vide |

Statut : fréquences = **FAIT** (CSV du 10 nov. ; `research/angles-concurrents.md`). Colonne « usure » = INFÉRENCE.

### Le stade de sophistication

| Segment | Stade (Schwartz) | Pourquoi |
|---|---|---|
| Amazon, 9-50 $ | **3 → 4** : bataille de mécanismes | On ne promet plus « filtre le chlore » (stade 1-2) : on empile des étages (15 → 33) et des pourcentages (99,947 %). C'est la surenchère de mécanisme du stade 4 |
| DTC premium, 125-169 $ | **5** : identification | Jolie vend une esthétique (« How's the water? »), Sproos des couleurs et le locataire, Hello Klean « Same bathroom, better water ». Le produit n'est plus l'argument, l'identité l'est |
| Zone « dupe » 59-99 $ (celle de Plush) | **4 dégradé** | Mécanismes gonflés + autorité fabriquée (faux médecins, « #1 ») : c'est la réponse au stade 4 quand on n'a pas de vraie preuve |

INFÉRENCE (lecture des deux corpus avec la grille de Schwartz).

### Le niveau de conscience

| Où | Niveau dominant | Indice |
|---|---|---|
| Amazon | **Conscient de la solution / du produit** | Elle tape « shower filter for hard water » : elle compare des étages et des prix |
| Meta, audience froide | **Inconsciente → consciente du problème** | Elle sait que ses cheveux ou sa peau ne lui conviennent pas ; elle n'a jamais relié ça à l'eau. Verbatim UGC Jolie : « I honestly never thought about the water I'm using every day » (`plush-avatar-client.md`) |

Les hooks Meta qui durent le plus dans la catégorie partent tous **avant** le produit : Jolie « How's the water? », Afina « This is why travel skin happens », Sproos « Builder grade shower head got you down? », Puure (cartouche après quelques semaines, 453 jours, 72 991 $). FAIT (export du 4 oct.) · INFÉRENCE (niveau).

### Conséquences concrètes pour les ads Plush

| # | Règle | Pourquoi |
|---|---|---|
| 1 | **Aucun nombre d'étages, aucun %** | Stade 4 saturé dès 8,79 $. Et sans rapport lu, c'est interdit (section 5). Plush a 6 couches : on les **nomme**, on ne les compte pas comme un argument |
| 2 | **Le mécanisme à nommer est la preuve, pas la filtration** : la cartouche qu'on regarde au jour 30 | Personne ne l'occupe dans la douche US (1 pub sur 144). C'est un mécanisme vérifiable par la cliente elle-même |
| 3 | **Information nouvelle = le rapport d'eau de sa ville** (CCR) | Donnée publique, locale, que personne n'utilise (2 pubs sur 144). Fait passer l'audience d'« inconsciente » à « consciente du problème » sans affirmer quoi que ce soit sur son corps |
| 4 | **Identification = le pommeau qu'elle n'a pas choisi** (« came with the apartment », *builder grade*) | Le stade 5 se gagne par l'identité ; l'angle locataire n'est tenu que par Sproos, en déclin (−48 % de trafic depuis juin) |
| 5 | **Dire ce que Plush ne fait pas** (« Plush isn't a water softener ») | 14 % des titres Amazon promettent un adoucisseur, 43 % parlent d'eau dure. L'honnêteté est l'information que personne ne donne |
| 6 | **« NSF » seulement si Plush est listé** | C'est le seul claim encore rare (5 %) — donc le plus crédible s'il est vrai, et le plus dangereux s'il ne l'est pas |

HYPOTHÈSES à tester en ads (la logique est une INFÉRENCE ; l'efficacité ne se saura qu'au test).

---

## 4. Canaux : Amazon, retail, DTC

### 4.1 Amazon US — best-sellers « Showerhead Filters » (relevé du 10 nov. 2026, rangs 1-30 et 51-80)

| Rang | Produit | Type | Prix | Note | Évaluations |
|---|---|---|---|---|---|
| 1 | AquaBliss SF100 (vitamine C) | filtre en ligne | 36,99 $ | 4,4 | **70 329** |
| 2 | AquaBliss SFC100 | cartouche | 17,99 $ | 4,7 | 20 853 |
| 3 | Jolie Replacement Shower Filter | cartouche | 38,00 $ | 4,6 | 1 060 |
| 4 | Afina Replacement Filter | cartouche | 29,00 $ | 4,7 | 1 078 |
| 5 | Weddell Duo cartouches « NSF Certified » (2+2) | cartouche | 49,98 $ | 4,5 | 717 |
| 6 | Cobbe, 2 cartouches pour douchette | cartouche | 20,99 $ | 4,6 | 2 639 |
| 7 | Weddell Duo « NSF Certified Chlorine Reduction » | filtre en ligne | 72,00 $ | 4,3 | 1 285 |
| 8 | AquaBliss SF500 | filtre en ligne | 45,99 $ | 4,3 | 6 367 |
| 9 | weAQUA Heavy Duty, lot de 2 | filtre en ligne | 42,95 $ | 4,4 | 2 794 |
| 10 | **Jolie Filtered Showerhead** | pommeau filtrant | **169,00 $** | **4,1** | 2 194 |
| 11 | eskiin cartouche | cartouche | 49,00 $ | 4,6 | 506 |
| 14 | **MyHalos Filtered Shower Head** | pommeau filtrant | **74,99 $** | 4,4 | 1 561 |
| 15 | **Afina Filtered Shower Head** | pommeau filtrant | **129,00 $** | 4,6 | 2 585 |
| 16 | SR SUN RISE 20 Stage | filtre en ligne | 15,99 $ | 4,4 | 13 995 |
| 17 | **eskiin Filtered Showerhead** | pommeau filtrant | **149,00 $** | 4,4 | 1 647 |
| 30 | Filterbaby All-Metal Shower Filter Pro (« Doctor Developed ») | filtre en ligne | 136,00 $ | 4,2 | 394 |

Côté pommeaux (listes « Fixed » et « Handheld », top 30 chacune) : FEELSO filtrant fixe 19,79 $ (14 043 év.), Cobbe filtrant à main 21,65 $ (**20 372 év.**), PWERAN 19,99 $ (13 079 év.), SR SUN RISE 22,98 $ (8 779 év.).

FAIT (relevé du 10 nov., `amazon-bestsellers-2026-11-10.csv`). Les rangs 31-50 ne sont pas dans la page statique et n'ont pas été relevés.

### 4.2 Ce qu'Amazon apprend

1. **Le volume est en entrée de gamme, et c'est un filtre en ligne, pas un pommeau** : AquaBliss SF100 cumule 70 329 évaluations à 36,99 $ ; AquaBliss place **7 références** dans les 60 relevées. Un filtre en ligne **garde le vieux pommeau** — exactement l'objet que l'angle Plush (*builder grade*, « came with the apartment ») attaque. FAIT · INFÉRENCE.
2. **Les marques DTC premium vivent aussi sur Amazon**, avec 1 647 à 2 585 évaluations pour leur pommeau (Jolie, Afina, eskiin) — 30 à 40 fois moins que le leader. Leur force sur Amazon, c'est **la cartouche** (Jolie n° 3, Afina n° 4). FAIT.
3. **Les cartouches des marques DTC sont déjà copiées** : « Replacement Compatible with Jolie » 32,99 $ les 3 (rang 57), « A-01 Replacement Filter for Afina » (rang 80), compatibles Weddell (rang 70) et Canopy (rang 79). FAIT. → Si la cartouche Plush est un format générique, des compatibles moins chers existent probablement déjà : le revenu « cartouche » est fragile. HYPOTHÈSE à vérifier (format de la cartouche auprès du fournisseur).
4. **La note de Jolie sur Amazon (4,1) est la plus basse du top 10**, pour le prix le plus haut. Le premium à 169 $ ne protège pas des déçues. FAIT · INFÉRENCE.
5. **La cliente qui voit une pub Plush sur Meta peut comparer en un onglet** : elle trouvera 20-50 $ et des milliers d'avis. Plush a 0 avis. La réponse n'est pas le prix : c'est la garantie 60 jours, le look (pommeau complet, pas un ajout), et l'honnêteté (« not a softener »). INFÉRENCE.

### 4.3 Retail

| Enseigne | Ce qui y est vendu | Prix | Statut |
|---|---|---|---|
| Ulta | Jolie Filtered Showerhead | 169 $ | FAIT (résultat de recherche, 10 nov.) |
| Bluemercury | Jolie (dans les collections cadeaux) | 169 $ | FAIT (idem) |
| goop, Moda Operandi | Jolie | 165 $ | FAIT (idem) |
| Walmart | Everglow, Weaqua (avis cités dans l'avatar) | n.r. | FAIT (`plush-avatar-client.md`) |
| Home Depot | Kohler Aquifer | n.r. | FAIT (`plush-avatar-client.md`) |
| Target, Costco | non vérifié | — | budget de recherche épuisé |

→ **Le retail beauté (Ulta, Bluemercury, goop) sert le positionnement premium « soin »** ; le retail bricolage (Home Depot, Walmart) sert la fonction. Plush n'est dans aucun des deux et vend par Meta : sa concurrence directe au moment de l'achat est **Amazon dans un autre onglet**, pas un rayon. INFÉRENCE.

### 4.4 DTC

| Marque | Visites / mois (août 2026) | Pubs Meta live | Note |
|---|---|---|---|
| eskiin | 969 366 | 934 | leader DTC US |
| Puure (FR, filtre de robinet) | 607 764 | 154 | plus gros annonceur du relevé |
| Hello Klean (UK) | 419 460 | 454 | angle calcaire |
| Water2 (UK) | 294 296 | 931 | dialogue, ennemi = la carafe |
| Jolie | 214 346 | 192 | aussi en retail et sur Amazon |
| Canopy | 144 778 (−66 % en 6 mois) | 185 | en déclin |
| Filterbaby | 111 475 | 529 | « Doctor Developed » |
| Sproos | 99 058 (−48 % depuis juin) | 215 | angle design / locataire |

FAIT (export Trendtrack, `research/trendtrack-export/marche-snapshot-2oct.md` et `ads-final-4oct.md`).

Ce que le DTC a en commun (FAIT, catalogues du 10 nov. et export du 4 oct.) : abonnement cartouche (Canopy 27 $, Unchemed 29 $/90 jours, Lucinn avec garantie à vie liée à l'abonnement), lots familiaux, cadeaux valorisés, protection d'expédition en SKU (eskiin 3,99 $, Afina 12 $ « Priority Shipping + Shipping Insurance », Plush 4,99 $), et des landing pages `/pages/` dédiées plutôt que la fiche produit.

---

## 5. Cadre réglementaire US des allégations

> ⚠️ Section écrite sans recherche web ce jour (budget de recherche réservé aux sections 2 et 4, consigne du coordinateur du 10 nov.). Les textes cités sont des textes publics connus ; leur statut est marqué **« connu, non revérifié le 10 nov. »**. À relire par un juriste avant toute dépense importante. Les exemples de concurrents, eux, sont des FAITS relevés le 10 nov. ou le 4 oct.

### 5.1 Les règles qui s'appliquent à une pub Meta pour un pommeau filtrant

| Texte | Ce qu'il impose | Conséquence pour Plush | Statut |
|---|---|---|---|
| **FTC Act, sections 5 et 12** + *FTC Policy Statement Regarding Advertising Substantiation* | Avoir une **base raisonnable avant** de diffuser un claim, explicite ou implicite. On juge l'**impression d'ensemble**, pas la phrase isolée | « Reduces chlorine » sans document = infraction, même avec un astérisque | connu, non revérifié |
| Même doctrine : *establishment claims* | « Lab-tested », « tested to NSF 177 », « clinically » = on affirme avoir la preuve → il faut **exactement** la preuve annoncée | Canopy écrit « Tested to ANSI/NSF-177 standards » (FAIT, 10 nov.) : ce n'est pas « certified ». Plush ne dit « tested » que si le rapport est lu et couvre ce modèle | connu |
| **FTC Health Products Compliance Guidance** (déc. 2022) | Tout claim de santé exige des **preuves scientifiques compétentes et fiables**, en pratique des essais sur l'humain. Un avertissement (« results may vary ») ne corrige pas un claim trompeur | Cheveux, chute, peau, eczéma, acné, cuir chevelu : **hors de portée** de Plush. Le disclaimer Water2 protège un claim sur ce que le filtre retient, **jamais** un claim sur le corps | connu, non revérifié |
| **FIFRA (EPA)** — dispositifs et articles « pesticides » | « Kills bacteria », « antimicrobial », « stops germs » = claim pesticide. Exemption « treated article » seulement si l'agent protège l'objet lui-même | Lucinn : « It stops germs before they touch your body » (FAIT, 4 oct.) = exactement ce qui est interdit sans enregistrement EPA. Plush : ❌ | connu, non revérifié |
| **FTC Guides Against Deceptive Pricing** (16 CFR 233.1) + **Californie, Bus. & Prof. Code § 17501** | Un prix barré doit être un prix **réellement pratiqué**, de bonne foi, pendant une période significative. En Californie : le prix dominant des **3 derniers mois** | Plush affiche 59,99 $ barré **115 $** et 74,99 $ barré **144,02 $** sans jamais avoir vendu à ce prix → **risque réel**. Alternative vraie : « Duo = 14 $ de moins que Solo + cartouche » (59,99 + 29 − 74,99 = 14,00 $) | texte connu, non revérifié · calcul = INFÉRENCE |
| **Règle FTC sur les avis** (16 CFR Part 465, en vigueur depuis le 21 oct. 2024) | Interdit : faux avis, avis achetés, avis d'employés ou de proches non signalés, suppression d'avis négatifs, **faux indicateurs d'audience** (abonnés, vues). Jusqu'à **53 088 $ par infraction** | Déjà acté pour Plush (`plush-avatar-client.md`, faux abonnés Instagram déconseillés le 9 nov.). Rien à ajouter, rien à assouplir | FAIT (source FoodNavigator, citée dans l'avatar) |
| **Endorsement Guides** (16 CFR Part 255, révisés en 2023) | Créateur offert ou payé → lien signalé (« #ad », « paid partnership »). **La marque répond des claims du créateur** | Le brief créateur doit interdire noir sur blanc tout résultat corporel : si une créatrice dit « it fixed my eczema », c'est Plush qui est en infraction | connu, non revérifié |

### 5.2 NSF/ANSI 177 — ce que la norme certifie, et ce qu'elle ne certifie pas

| | |
|---|---|
| Nom | *Shower Filtration Systems — Aesthetic Effects* |
| Ce qu'elle couvre | La **réduction du chlore libre** (*free available chlorine*) à un débit et une capacité donnés, la sécurité des matériaux, la tenue mécanique |
| Ce qu'elle ne couvre pas | La **chloramine**, les métaux lourds, les PFAS, le calcaire, la dureté, et tout effet sur la peau ou les cheveux (c'est une norme « aesthetic ») |
| Qui certifie | Un organisme accrédité (NSF, IAPMO, WQA), avec une **fiche publique** au nom de la marque et du modèle |
| Ce qui n'est pas une certification | « Tested to NSF 177 » (essai sans certification) · « NSF certified **KDF** » (le média est certifié, pas le produit : BBLIFE et Philips l'écrivent dans leur titre Amazon, FAIT 10 nov.) |

Statut : contenu de la norme = connu, non revérifié le 10 nov. · exemples = FAIT.

### 5.3 La certification « chlore » de l'usine — ce qu'il faut lire avant d'écrire un mot

| # | Question à poser au document | Pourquoi |
|---|---|---|
| 1 | Qui l'a émis ? NSF / IAPMO / WQA = certification · SGS, Intertek, CTI, laboratoire chinois = **rapport d'essai** | Seule une certification listée autorise le mot « certified » |
| 2 | Quelle norme ? NSF/ANSI 177, ou une norme chinoise | Une norme chinoise ne permet pas d'écrire « NSF » |
| 3 | Le modèle testé est-il **exactement** la cartouche Plush ? | Un rapport sur un autre modèle ne prouve rien pour le nôtre |
| 4 | Chlore libre seulement, ou aussi chloramine ? | Décide si on peut parler aux villes en chloramine (section 2) |
| 5 | Concentration d'entrée, débit, **température** (eau chaude ?), capacité en gallons, % de réduction **en fin de vie** | Décide de la durée réelle (3 mois ou 60 jours) et du seul % qu'on aurait le droit d'écrire (« up to ») |
| 6 | Date et nom du laboratoire | Un rapport daté et nommé est citable sur la page produit |

### 5.4 Ce que Plush peut dire — liste opérationnelle

| ✅ Sans rapport de test | ⚠️ Seulement après lecture du certificat ou d'une mesure à nous | ❌ Interdit |
|---|---|---|
| La composition, si le fournisseur la confirme par écrit (6 couches nommées) | « Reduces chlorine », « designed to reduce chlorine » | Tout résultat sur le corps : chute de cheveux, peau, eczéma, acné, pellicules, « healthier hair » |
| « Fits the standard U.S. ½-inch shower arm » (filetage confirmé par écrit) | Tout % (toujours « up to », avec astérisque et source) | « Kills bacteria », « antimicrobial », « stops germs » |
| « If you can open a jar, you can install it » | « Lasts 3 months » ou « 60 days » → à exprimer d'abord en gallons | « Water softener », « softens hard water » |
| La garantie 60 jours, la livraison, le prix | Chloramine, métaux lourds, PFAS, microplastiques | « #1 », « dermatologist recommended », « clinically », un médecin |
| La cartouche Plush **réelle**, au **jour réel** (« Day 12 »), photographiée par nous | « Tested », « lab-tested », « NSF » | Un nombre de clients ou d'avis non réel ; des avis importés |
| Le rapport d'eau de **sa** ville, cité tel quel avec sa source | « Same pressure » / « no pressure loss » → test du seau d'abord | Un prix barré jamais pratiqué |
| « Plush isn't a water softener » | | « Made in USA » ou « designed in the USA » |

### 5.5 Deux règles hors allégations qui touchent la pub

| Sujet | Règle | Conséquence | Statut |
|---|---|---|---|
| **Débit des pommeaux** | Fédéral : max **2,5 gpm** à 80 psi · **Californie : max 1,8 gpm** depuis 2018, et le modèle doit figurer dans la base de la California Energy Commission pour y être vendu · d'autres États ont des plafonds proches (liste à vérifier : Colorado, Washington, New York, Hawaï…) | **eskiin vend des références « 1.8 GPM »** (FAIT, catalogue 10 nov.) : les leaders s'y plient. Le débit de Plush est **inconnu** → à demander au fournisseur. Tant que ce n'est pas réglé : **exclure la Californie du ciblage** et ne jamais promettre de « pression » | règle connue, non revérifiée · eskiin = FAIT |
| (À vérifier) | Le cadre fédéral sur la définition du pommeau a été modifié en 2025 | Ne change pas les plafonds des États | non vérifié |
| **Proposition 65** (Californie) | Avertissement obligatoire si le produit expose à une substance listée (plomb du laiton, phtalates d'un flexible PVC, BPA…) au-delà d'un seuil. Les entreprises de **moins de 10 salariés sont exemptées** | Plush est sous le seuil → pas d'obligation aujourd'hui. Mais demander au fournisseur la teneur en plomb du corps et la composition du flexible : ça redevient un sujet le jour d'Amazon ou du retail | connu, non revérifié |
| Certification d'État des appareils de traitement d'eau (Californie, Iowa, Wisconsin) | Visent les appareils qui font des claims **sanitaires** sur des contaminants (plomb, etc.) | Raison de plus pour rester sur le chlore et l'odeur (registre « aesthetic ») et ne jamais promettre plomb ou PFAS | connu, champ exact à vérifier |

---

## 6. Saisonnalité, Q4, BFCM et dates limites de Noël

### Le calendrier

| Date (2026) | Événement | Conséquence |
|---|---|---|
| jeu. 26 nov. | Thanksgiving | — |
| **ven. 27 nov.** | Black Friday | Pic d'enchères Meta (ampleur à sourcer dans le playbook, Phase 0) |
| **lun. 30 nov.** | Cyber Monday | Fin du pic BFCM |
| **ven. 4 déc.** | **Dernière commande « Noël garanti »** dans le pire cas annoncé : 12 jours ouvrés + 2 jours de préparation | Tout message « arrives before Christmas » s'arrête ce soir-là |
| mar. 8 déc. | Dernière commande si 12 jours ouvrés **sans** préparation | Zone de risque |
| ven. 11 déc. | Dernière commande si 7 jours ouvrés (délai constaté) + 2 jours de préparation | Plus de promesse possible, seulement « best chance » |
| mar. 15 déc. | Dernière commande si exactement 7 jours ouvrés, sans préparation | — |
| ven. 25 déc. | Noël | — |

Méthode : décompte à rebours des jours ouvrés (lundi-vendredi) depuis le jeudi 24 déc. Exemple : 24 déc. − 12 jours ouvrés = mardi 8 déc. Le délai de préparation (1-2 jours) n'est pas connu. **Estimation** (INFÉRENCE), à recaler sur le délai réel du fournisseur.

### Ce que la catégorie fait au Q4

| Observation | Source | Statut |
|---|---|---|
| Lucinn écrit dans sa fiche produit : « gift buyers looking for a practical upgrade; many customers order a second one for a family member » et vend un « Faucet Filter Gift Bundle » | lucinn.com/products.json, 10 nov. | FAIT |
| Jolie est rangé dans les collections cadeaux de Bluemercury (« gifts-by-recipient », « tools-devices-gifts ») | URLs bluemercury.com relevées le 10 nov. | FAIT |
| eskiin vend une **carte cadeau** (50-650 $) et a monté une LP de jeu de fêtes `/pages/holiday-flip-game` | eskiin.com/products.json (10 nov.) · export du 4 oct. | FAIT |
| Les offres de fin d'année sont des **lots multi-pommeaux** : eskiin Basic / Double / Triple / Family (192-616 $) · Lucinn « Family Bundles » 169-580 $ et « BOGO » · Filterbaby « BOGO » | catalogues, 10 nov. | FAIT |
| Les leaders empilent des **cadeaux valorisés** (ebook 20 $, serviette 50 $, brosse 40 $) plutôt que des remises sèches | eskiin.com/products.json, 10 nov. | FAIT |
| Les 3 leaders ont basculé sur l'angle automne entre le 11 et le 27 sept. | `CLAUDE.md`, 2 oct. | FAIT (relevé antérieur) |

### Conséquences pour Plush

1. **L'angle cadeau a une date de péremption : le 4 décembre.** Après, une pub « gift » qui promet Noël crée des remboursements et des avis négatifs. INFÉRENCE.
2. **Après le 4 déc., la carte cadeau Shopify prend le relais** (« can't wait for shipping? »), comme eskiin. Elle se livre par email, instantanément. HYPOTHÈSE (à tester).
3. **La logique cadeau de la catégorie, c'est « un deuxième pour un proche »**, pas « un cadeau pour soi ». Plush n'a pas de lot à 2 pommeaux : à chiffrer en Phase 1 (marge sur 2 × 21,50 € de COGS). HYPOTHÈSE.
4. **Le test de 150 €/jour pendant 5-6 jours tombe au pire moment s'il démarre entre le 23 et le 30 nov.** (pic d'enchères, apprentissage sur des données BFCM non représentatives). Deux fenêtres propres : **avant le ~21 nov.** si l'échantillon arrive à temps, ou **à partir du 1er déc.** avec la date limite du 4 déc. dans la pub. INFÉRENCE (calendrier) · ampleur du pic de CPM à sourcer dans le playbook.
5. **Saisonnalité de la demande Google : non mesurée** (Trends bloqué, section 7). Ne pas supposer un pic de janvier ou d'été sans la capture de Yasser.

---

## 7. Demande : Google Trends, TikTok, signaux secondaires

### État

| Source | Résultat | Statut |
|---|---|---|
| Google Trends | **Bloqué** : 429 en accès direct (9 nov.) et dans le navigateur automatisé (10 nov., une seule tentative, rythme humain). Non insisté | FAIT |
| TikTok Creative Center | Joignable (200) mais **non consulté** : budget de recherche réservé aux sections 2 et 4 | FAIT |
| Volumes de recherche | Aucun outil disponible dans la session | — |

### La consigne pour Yasser — 3 minutes, dans son Chrome habituel

**Google Trends (2 min)**

| # | Ouvrir | Capturer |
|---|---|---|
| 1 | `https://trends.google.com/trends/explore?geo=US&date=today%205-y&q=shower%20filter,filtered%20shower%20head,shower%20head%20filter,hard%20water%20hair,vitamin%20c%20shower%20filter` | Capture du graphique « Interest over time » **+ le CSV** (flèche ↓ en haut à droite du graphique) |
| 2 | Même lien en remplaçant `today%205-y` par `today%2012-m` | Capture + CSV |
| 3 | `https://trends.google.com/trends/explore?geo=US&date=today%205-y&q=shower%20filter` | « Interest by subregion » : capture de la carte des États **+ CSV** ; puis bouton « Metro » : top 10 + CSV |
| 4 | Même page, en bas | « Related queries » : onglets **Rising** et **Top**, une capture chacun |

**TikTok Creative Center (1 min)**

| # | Ouvrir | Réglages | Capturer |
|---|---|---|---|
| 5 | Keyword Insights : `https://ads.tiktok.com/business/creativecenter/keyword-insights/pc/en` | United States · Last 120 days | Lignes « shower filter », « hard water », « filtered shower head » : popularité, évolution, CTR, CVR |
| 6 | Hashtags : `https://ads.tiktok.com/business/creativecenter/inspiration/popular/hashtag/pc/en` | United States · Last 120 days | `#showerfilter`, `#hardwater`, `#filteredshowerhead` : nombre de posts, vues, courbe, âge de l'audience |
| 7 | Top Ads : `https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/en` | United States · Last 30 days · mot-clé « shower filter » | Capture des 10 premières pubs |

Déposer les fichiers dans `plush-intel/02_marche/trends/`. Les seuils de lecture, posés **avant** de voir les données :

| Mesure | Lecture |
|---|---|
| Courbe 5 ans de « shower filter » | Pics annuels qui montent → catégorie en croissance · qui baissent → on le dit dans le résumé |
| Mois du pic annuel | Si le pic est en **décembre** → l'angle cadeau est confirmé par la demande · s'il est en **janvier** → l'angle « nouvelle année » vaut plus que Noël |
| États en tête | S'ils recoupent les villes en chlore libre de la section 2 (New York, Illinois, Arizona, Nevada, Washington, Ohio, Michigan) → ciblage et créas « ta ville » prioritaires là |
| « hard water hair » vs « shower filter » | Si « hard water hair » ≥ 25 % du volume de « shower filter » → le problème est nommé par le public, l'audience est déjà « consciente du problème » |

### Signaux secondaires déjà disponibles

| Signal | Valeur | Limite | Statut |
|---|---|---|---|
| Évaluations Amazon du leader | AquaBliss SF100 : 70 329 · sa cartouche : 20 853 · SR SUN RISE : 13 995 · Cobbe à main : 20 372 | Cumul sur plusieurs années, pas un flux mensuel | FAIT (10 nov.) |
| Trafic des sites DTC (mars → août 2026, milliers) | eskiin 924 → 640 → 494 → 594 → 604 → **969** · Hello Klean 334 → 383 → 414 → 328 → 308 → 419 · Jolie 230 → 208 → 340 → 181 → 201 → 214 | **Tiré par la pub**, pas par la demande organique : ne mesure pas la saisonnalité | FAIT (export du 2 oct.) |
| Nombre de pubs Meta live | eskiin 934, Water2 931, Oasis 539, Filterbaby 529, FlowPure 480, Hello Klean 454 | Mesure l'offre publicitaire, pas la demande | FAIT (export du 4 oct.) |

→ Ce qu'on peut dire sans Trends : **la catégorie fait vivre au moins un DTC à près d'un million de visites par mois et un produit Amazon à 70 000 évaluations**. Ce qu'on ne peut pas dire : si elle monte ou baisse, ni quand. INFÉRENCE.

---

## 10 conséquences pour nos ads

| # | Conséquence | Sur quoi elle repose | Statut |
|---|---|---|---|
| 1 | **Le pitch prix est « coût sur un an », pas « moins cher »** : le Duo revient à 132,99 $ la 1re année contre 249-283 $ pour le premium. Contre Amazon (55-91 $), on ne parle pas de prix | Section 1 | INFÉRENCE |
| 2 | **Une seule durée de cartouche partout avant la 1re pub** (3 mois fournisseur vs 60 jours sur le site et dans l'ebook) : elle change le coût annuel (132,99 $ ou 190,99 $) et le « ¢ par jour » (32¢ ou 48¢) | Section 1 | FAIT (incohérence) |
| 3 | **Retirer les prix barrés jamais pratiqués** (115 $ / 144,02 $) et dire plutôt « Duo = 14 $ de moins que Solo + cartouche » : vrai, vérifiable, sans risque FTC ni Californie | Sections 1 et 5 | INFÉRENCE (risque juridique) |
| 4 | **Zéro nombre d'étages, zéro %, zéro « softener »** : 30 % des titres Amazon comptent des étages (jusqu'à 33), 14 % promettent un adoucisseur. On nomme les 6 couches, on dit ce que Plush ne fait pas | Section 3 | FAIT (fréquences) · HYPOTHÈSE (effet) |
| 5 | **Les preuves visuelles chlore et « jour 30 » doivent être tournées aux US**, idéalement dans une ville en chlore libre : l'eau de Bruxelles a 2,4 à 12 fois moins de chlore que les grandes villes US | Section 2 | INFÉRENCE |
| 6 | **Créas « ta ville » d'abord pour les villes en chlore libre** (New York, Chicago, Phoenix, Las Vegas, Seattle, Detroit, Columbus) : c'est là que l'angle odeur de piscine est vrai pour notre composition | Section 2 | FAIT (désinfectants) · HYPOTHÈSE (performance) |
| 7 | **Exclure la Californie du test 1** tant que débit (≤ 1,8 gpm), vitamine C et test chloramine ne sont pas confirmés par écrit : LA, San Diego et San Francisco sont en chloramine, et l'État plafonne le débit | Sections 2 et 5 | HYPOTHÈSE (décision à prendre) |
| 8 | **Lire la certification usine avec la grille de la section 5.3 avant d'écrire « reduces chlorine »** ; « NSF » seulement si Plush est listé. Sans ça, on vend la cartouche visible, la pose, la garantie et le look | Section 5 | FAIT (règles connues, non revérifiées) |
| 9 | **L'angle cadeau s'arrête le 4 décembre** (12 jours ouvrés + préparation) ; ensuite carte cadeau. Lancer le test avant le ~21 nov. ou à partir du 1er déc., pas pendant Black Friday-Cyber Monday | Section 6 | INFÉRENCE (calendrier) |
| 10 | **Attaquer l'objet, pas la marque** : le n° 1 Amazon est un filtre en ligne qui garde le vieux pommeau ; Plush le remplace. « Your shower head came with the apartment » vise ce que 70 329 acheteuses ont gardé — sans jamais nommer un concurrent | Sections 3 et 4 | INFÉRENCE · HYPOTHÈSE (effet) |

