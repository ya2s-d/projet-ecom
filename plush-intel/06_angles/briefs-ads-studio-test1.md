# Briefs Ads Studio — test 1, 10 pubs statiques (11 nov. 2026)

> Un brief = une génération Ads Studio (`total: 1`, 3:4, objectif ventes, 4 crédits).
> Chaque brief passe : **la pub gagnante concurrente en image de style** (`role: style`) + **la photo de Plush monté** (`role: product`, `aec24ce3…` gros plan sur le bras) + **le profil avec le raccord** (`679d0abc…`).
> 7 copies de gagnantes (preuve dans `../03_concurrents/analyse-visuelle.md`) + 3 angles que personne n'exploite (synthèse §2 : white space).
> Avatar : `../../research/brand/plush-avatar-client.md` — Megan, 34 ans, Columbus (Ohio), locataire ou propriétaire depuis moins de 3 ans, achète sur son téléphone le soir. Ses 4 peurs : « ça n'ira pas sur ma douche », « ça va tuer la pression », « 75 $ pour un pommeau ? », « encore un truc Amazon à 15 $ ».

Bloc commun ajouté à chaque prompt (`COMMUN`) :
```
Product: Plush filtered shower head, exactly as in the product photos: polished chrome, narrow top cone that screws onto the hexagonal nut at the end of a chrome shower arm, wide cylindrical body, flared round head with a white perforated face. When shown installed it is ALWAYS screwed directly onto the end of the shower arm, never floating, never pasted beside it. Photorealistic, natural light, real American bathroom. Logo "plush" lowercase bold. Copy rules: no health, hair or skin claims, no before/after of people, no chlorine percentages, never "softens water", never "stronger pressure", never "no tools", no strikethrough prices, no "#1". Audience: Megan, 34, renter in a US city, scrolling on her phone at night.
```

| # | Copie de | Preuve | Angle | Peur de Megan visée | Image de style |
|---|---|---|---|---|---|
| 1 | Water2 | 42 408 $ · 243 j | L'offre Duo | 75 $ pour un pommeau ? | `…/ab197d74…jpg` |
| 2 | Puure | 40 661 $ · 276 j | 2 cartouches dans la boîte | encore un truc à 15 $ | `…/c6c98c8f…png` |
| 3 | Oasis | 367 j | Pommeau d'origine contre Plush | encore un truc à 15 $ | `…/9baab5e3…png` |
| 4 | GetSeoni | 6 211 $ | Plush contre filtre à billes | encore un truc Amazon | `…/4720c15e…jpg` |
| 5 | FlowPure | 353 j · 12 var. | Le pommeau que ta location aurait dû avoir | ça n'ira pas sur ma douche | `…/169720c3…jpg` |
| 6 | GetSeoni native | 164 j · 8 var. | Photo au téléphone, main + 3 puces | 75 $ ? | `…/31b5a655…jpg` |
| 7 | Vedya Home | 213 j · 32 var. | Problème → solution | ça n'ira pas sur ma douche | `…/64c0d979…jpg` |
| 8 | 🆕 white space | Sproos seul | **L'emménagement** : « It came with the apartment » | ça n'ira pas sur ma douche | Oasis (layout) |
| 9 | 🆕 white space | 2 ads US sur 144 | **Le rapport d'eau de sa ville** | (déclencheur, haut de funnel) | Afina `…/f965ab04…jpg` |
| 10 | 🆕 white space | 0 concurrent | **L'honnêteté** : ce que Plush ne fait pas | encore un truc qui promet tout | FlowPure (layout) |

---

## Prompts (anglais, envoyés tels quels + bloc COMMUN)

**1 — copie Water2 (offre)**
Recreate the layout of the style image as precisely as possible: product hero centered on a solid saturated background, giant price on the right, small sticker top-left. Background deep ink #141414. Plush installed on a short chrome shower arm entering from the top. Giant white price "$74.99". Pink-beige sticker top-left: "2 CARTRIDGES · 6 MONTHS". Under the price, small white text: "Plush Duo · Free US shipping". Primary text angle: the honest math — 6 months of filtered showers for $74.99, about 41¢ a day, 60 days to try it. Headline: "6 months covered for $74.99".

**2 — copie Puure (bandeau rouge)**
Recreate the style image layout precisely: white background, full-width colored band at the top with uppercase text, product photographed large in the middle, round badge on the side, big price at the bottom, colored band at the bottom. Top band rust #A86B45: "2 CARTRIDGES IN THE BOX". Plush photographed in three-quarter view next to its two real white cartridges. Round dark badge: "6-LAYER FILTER". Bottom: "$74.99" big, small gray line "Free US shipping · 60-day money-back guarantee". Primary text: you don't have to reorder anything for 6 months, the second cartridge is already in the box. Headline: "Everything for 6 months, one box".

**3 — copie Oasis (haut / bas)**
Recreate the style image layout precisely: split horizontally. Top half dark: a dull, scaled, builder-grade chrome shower head on a shower arm, title "The Shower Head That Came With Your Apartment", 4 lines with red X: "Filters nothing" / "Picked by the contractor" / "No cartridge to check" / "Same one since 2009". Bottom half warm off-white #F6F2ED: Plush screwed onto the same arm, title "Plush", 4 lines with green checks: "6-layer filter cartridge" / "Fits standard US shower arms" / "2 cartridges in the Duo" / "60-day money-back guarantee". Primary text: you picked the couch, the towels, the sheets; the shower head was picked by whoever built the place. Headline: "Builder grade, meet Plush".

**4 — copie GetSeoni (nous contre eux)**
Recreate the style image layout precisely: two columns with a round "VS" in the middle, left column soft blush with the brand, right column white with the alternative, rounded pills with checks and crosses. Left "PLUSH" in elegant thin serif, Plush product photo, pills: "6-layer cartridge you can open" / "Fits US shower arms" / "60 days to try it". Right "Colored-bead filter", a generic unbranded clear plastic shower head full of colored beads, pills: "Mostly beads" / "Sealed, can't check it" / "No real guarantee". Never name a brand. Primary text: not all filter shower heads are built the same; look at what's inside before you buy. Headline: "Look inside before you buy".

**5 — copie FlowPure (héros propre)**
Recreate the style image layout precisely: small logo on top, huge bold condensed headline on 2-3 lines, short colored subline, product large in the lower half, small risk-free line at the bottom. Background soft gradient off-white #F6F2ED to stone #C9C2B8. Headline: "THE SHOWER HEAD YOUR RENTAL SHOULD HAVE COME WITH." Subline rust: "Filtered · Fits standard US arms". Plush screwed onto a chrome arm, three-quarter view. Bottom: "Try it risk-free for 60 days". Primary text: it screws onto the arm you already have, and when you move out the old one goes back on. Headline: "Renter-friendly, 3 steps".

**6 — copie GetSeoni native (photo téléphone)**
Recreate the style image precisely: an authentic, slightly imperfect smartphone photo, a woman's hand holding the product in a real bathroom, title in white handwritten-feel font top-left, three white bullets below. Hand holding Plush (as in the hand photo), white subway tiles, glass screen, morning light. Title: "The $75 bathroom upgrade". Bullets: "• screws onto the arm you already have" / "• 2 cartridges, 6 months" / "• 60 days to send it back". Must look like a real phone photo, not an ad. No first person anywhere (it would read as a fake customer): the brand speaks to "you". Headline: "The upgrade nobody sees coming".

**7 — copie Vedya (problème / solution)**
Recreate the style image layout precisely: dark bathroom background, small inset photo top-left with a red X and "The Problem", a green check with "The Solution", product large on the right with water spraying, a row of 4 icons with captions at the bottom. Problem: "Builder-grade head, nothing filtered". Solution: "Plush filtered shower head". Plush screwed onto the arm, water running exactly as in the installed product photo. Icons: "6-layer cartridge" / "Fits US arms" / "Lasts 3 months" / "60-day guarantee". Primary text: the shower head is the one thing in your bathroom nobody ever upgrades. Headline: "Upgrade the one thing nobody upgrades".

**8 — 🆕 l'emménagement (personne ne l'exploite sauf Sproos)**
Realistic photo, top-down-ish angle: a real bathroom on moving day, cardboard moving boxes in the doorway, a roll of tape on the sink, the old builder-grade shower head unscrewed lying on the counter next to a Plush box, and Plush already screwed onto the shower arm in the background. Handwritten-style text overlay: "New apartment. New shower head." Small line: "Fits standard US arms · keep the old one for move-out day". Primary text: you just moved in; before you unpack the kitchen, swap the one thing the last tenant used for years. Headline: "First thing to unpack".

**9 — 🆕 le rapport d'eau de sa ville (2 ads sur 144)**
Recreate the still-life feel of the style image: a kitchen counter with a printed generic city "Annual Water Quality Report" (no real city name), a pen, a glass of tap water, and the Plush box with a real white cartridge next to it. The word "Chlorine" in the report is circled in rust marker. Overlay text: "Your city publishes what's in your water. Every year." Small line: "Plush filters it at the shower head." Primary text: search your city's name plus "consumer confidence report"; look at the disinfectant line; that's the water you shower in. Headline: "Read your city's water report".

**10 — 🆕 l'honnêteté (aucun concurrent)**
Clean editorial layout like the style image: off-white #F6F2ED background, Plush installed on the arm on the right, left side a short list title "What Plush won't do:" with 3 lines "soften hard water" / "fix your plumbing" / "replace your conditioner", then "What it does:" "filter chlorine and sediment at the shower head, with a cartridge you change every 3 months." Primary text: we'd rather tell you now than in the reviews. Headline: "Honest about what it does".

---

## Ce qu'on vérifie sur chaque résultat avant de l'accepter

1. Le pommeau est **vissé sur le bras**, avec la bonne forme (cône, corps, tête).
2. La cartouche, si elle apparaît, est la vraie (cylindre blanc, dessus perforé).
3. Aucune phrase interdite dans l'image, le texte principal ou le titre.
4. L'orthographe.
5. Une pub qui rate un point est refaite, pas corrigée à la main.

## Runs lancés le 11 nov. (40 crédits)

| Brief | run_id |
|---|---|
| 1 Water2 | 91bec542-9eb4-48c4-8043-bb8101ca82d9 |
| 2 Puure | 9e200828-ff12-4e7e-8dca-1eb62fd0acc2 |
| 3 Oasis | a83c0046-3f79-460a-8eea-4e20a1f20e35 |
| 4 GetSeoni VS | d928dc94-dfe8-4b92-91a6-ef9b7eae7ca8 |
| 5 FlowPure | 9501d1bf-591e-4cea-acfa-eba2a15eb5a0 |
| 6 GetSeoni native | d9884759-785f-4894-9f4b-675c316f0f1f |
| 7 Vedya | b5f96380-3aa6-48ac-bad9-37db76cda946 |
| 8 Emménagement | 54fbdca0-df85-4ea1-b232-2738a9fc165b |
| 9 Rapport d'eau | 9470ab96-e748-42b4-80ac-1e40519ac1aa |
| 10 Honnêteté | 09cfff61-2215-4c2a-ba8f-e09985dbf30f |

Marque Ads Studio : `0513ab28-6364-460b-bd98-45240236994c` · produit : `fd69fae1-e55d-466c-adc6-9e20074877e1`. Prompts limités à 1 000 caractères : version courte envoyée, même contenu.
