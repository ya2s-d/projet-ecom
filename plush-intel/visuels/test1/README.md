# Test 1 — images v2 (11 nov. 2026, soir)

**Règle : l'IA ne dessine jamais le produit.** Chaque Plush visible est une vraie photo du fournisseur, détourée (`assets/produit/detoures/`) ou utilisée telle quelle (pommeau monté avec l'eau). L'IA n'a fait que 2 accessoires qui ne sont pas notre produit (le vieux pommeau d'origine, le filtre à billes). Mise en page faite en code (`assets/produit/build_statiques_v2.py`) dans la charte : Paper #F6F2ED · Ink #141414 · Day 30 #A86B45 · Stone · Smoke · Jost · logo plush. Format 1080 × 1350 (4:5).

| Fichier | Copiée sur | Nom de l'ad |
|---|---|---|
| S01-offre-ink.jpg | Water2 (42 408 $) | `C09_ANG-duo_PER-P1_AW-PR_FMT-stat_HK-29_V1_T1` |
| S02-bandeau-2-cartouches.jpg | Puure (40 661 $) | `C09_ANG-duo_PER-P1_AW-PR_FMT-stat_HK-30_V2_T1` |
| S03-origine-vs-plush.jpg | Oasis (367 j) | `C02_ANG-builtin_PER-P2_AW-SA_FMT-comp_HK-05_V1_T1` |
| S04-plush-vs-billes.jpg | GetSeoni (6 211 $) | `C10_ANG-compo_PER-P5_AW-SA_FMT-comp_HK-10_V1_T1` |
| S05-location-hero.jpg | FlowPure (353 j) | `C02_ANG-builtin_PER-P2_AW-SA_FMT-stat_HK-06_V2_T1` |
| S07-probleme-solution.jpg | Vedya (32 var.) — vraie photo du pommeau monté | `C02_ANG-builtin_PER-P1_AW-PA_FMT-stat_HK-03_V3_T1` |
| A04-ticket.jpg | native | `C03_ANG-prix12m_PER-P3_AW-PR_FMT-note_HK-07_V1_T1` |
| A06-rapport-eau.jpg | native | `C04_ANG-ccr_PER-P1_AW-UN_FMT-note_HK-11_V1_T1` |
| A12-sms.jpg (9:16) | native | `C07_ANG-odeur_PER-P1_AW-PA_FMT-sms_HK-23_V1_T1` |
| A18-note-honnete.jpg | native | `C11_ANG-honnete_PER-P5_AW-PR_FMT-note_HK-35_V1_T1` |

Retirée : S06 (main), photo source trop petite → flou. `_archive-produit-IA/` = 1re version où l'IA avait redessiné le produit : **ne pas utiliser**.
Les 17 pubs Ads Studio (cartes Higgsfield) : l'outil redessine aussi le produit → ne garder que celles où le pommeau est identique.
Textes principaux : `../../06_angles/production-creas.md` et `briefs-ads-studio-test1.md`, + la ligne de disclaimer.

## Images avec personnes (H01-H05) — méthode « échange de produit »

L'IA génère la scène (même lumière et même rideau que la vraie photo du pommeau monté), on efface son pommeau, on colle le **vrai pommeau détouré** (`assets/produit/detoures/cut-mount.png`, en miroir pour H03 : produit symétrique, sans texte). Cuisine : vrai pommeau + vraie cartouche posés avec ombres. Script : `assets/produit/swap_produit.py`. Texte en voix de marque (aucune personne IA ne dit « je »).

| Fichier | Angle | Nom de l'ad |
|---|---|---|
| H01-femme-regarde-plush.jpg | Location | `C02_ANG-builtin_PER-P2_AW-SA_FMT-ugc_HK-05_V3_T1` |
| H02-serviette.jpg | Tagline de marque | `C07_ANG-odeur_PER-P1_AW-PA_FMT-ugc_HK-25_V2_T1` |
| H03-deux-amies.jpg (Dramatization) | Objection prix | `C03_ANG-prix12m_PER-P3_AW-PR_FMT-ugc_HK-49_V2_T1` |
| H04-demenagement.jpg | Emménagement | `C06_ANG-cadeau_PER-P2_AW-PR_FMT-ugc_HK-19_V2_T1` |
| H05-rapport-eau-cuisine.jpg | Rapport d'eau | `C04_ANG-ccr_PER-P1_AW-PA_FMT-ugc_HK-11_V2_T1` |

Écartées : la scène sous la douche (refusée par le filtre Higgsfield, risquée sur Meta) et la scène du lit (vue de dessus incompatible avec les photos produit : rendu faux).

## Douches réalistes N01-N04 (11 nov., soir) — angles émotionnels

Méthode : l'IA génère une vraie douche, puis on lui fait **retirer son pommeau en gardant le bras** ; la **vraie tête de pommeau** (`head_dry`, sans le bras de la photo fournisseur) est vissée sur l'embout du bras, couleurs ajustées à la scène. N02 garde le vrai jet d'eau.

| Fichier | Émotion vendue | Nom de l'ad |
|---|---|---|
| N01-marbre.jpg | Le moment à soi (« The 10 minutes of your day that are just yours ») | `C16_ANG-moment_PER-P1_AW-PA_FMT-stat_HK-61_V1_T1` |
| N02-zellige-main.jpg | Le matin qui change (« Mornings feel different now ») | `C16_ANG-moment_PER-P1_AW-PA_FMT-stat_HK-62_V1_T1` |
| N03-location-ancien-pommeau.jpg | La fierté d'être chez soi (« Your rental. Your shower. ») | `C02_ANG-builtin_PER-P2_AW-SA_FMT-stat_HK-63_V1_T1` |
| N04-ardoise.jpg | Le luxe d'hôtel à la maison (« Hotel shower. At home. ») | `C17_ANG-hotel_PER-P1_AW-PR_FMT-stat_HK-64_V1_T1` |
