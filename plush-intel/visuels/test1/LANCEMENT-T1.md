# Test 1 : ce qu'on lance (ven. 20 nov. 2026, 6h Bruxelles = minuit New York)

Réglages : CLAUDE.md §4 · grille de décision : CLAUDE.md §5 · choix des 30 créas : 19 nov.

## État au 21 nov. (à lire d'abord)

- Le profil Facebook « Plush » a été **désactivé définitivement** le 20 nov. Il était le seul admin de tout (portefeuille TryPlush, Page, compte pub, pixel 1522240700051418). Plus aucun accès.
- **Plan B** : le vrai profil d'un adulte de la famille (son appareil, sa carte) crée un nouveau portefeuille et un nouveau compte pub (EUR, Europe/Bruxelles). On débranche puis on reconnecte l'app Facebook & Instagram de Shopify (nouveau pixel), et on connecte l'Insta tryplush à une Page TryPlush. Yasser ne se recrée pas de profil.
- **Créas finales** : 29 images de Yasser (01 à 29) en 3 formats, dans `formats-meta/` (`NN_9x16.jpg`, `NN_1x1.jpg`, `NN_191x1.jpg`). Le 1,91:1 = image entière au centre, côtés floutés. Les visuels 10, 12, 19 et 20 à 29 affichent « Black Friday price » : à remplacer après le 30 nov.
- **Réglages de la nouvelle interface (campagne de ventes Advantage+)** : Ventes · budget de campagne 150 €/jour · limite de campagne 900 € · ensemble : Site Web, Maximiser le nombre de conversions, pixel, **Achat** (pas « Vue du contenu »), modèle Standard, US sans la Californie, âge min. 18, placements Advantage+ · pub : **Importation manuelle** (pas le catalogue), multi-annonceurs décoché, Produits désactivé, aucune génération d'images, améliorations toutes désactivées, une seule option de texte, bouton Acheter, URL + UTM ci-dessous.
- **Textes (les mêmes pour les 29 pubs, sans date ni prix)** :

Texte principal :
```
Most shower heads just spray water. Plush filters it first.

– 6-layer cartridge designed to reduce chlorine and sediment
– Screws onto standard US 1/2" arms in 3 steps. No tools, no plumber.
– You change the cartridge every 3 months. The Duo comes with 2, so 6 months are covered.

Free US shipping. On day 59, if you don't love it, you get all your money back.

Filter capabilities refer to what the filter is designed to reduce, not to the guaranteed presence of those substances in your water. Individual results vary. Not a medical device and not intended to diagnose, treat, cure or prevent any condition.
```
Titre : `Filter your shower in 3 steps` · Description : `Free US shipping · 60 days to try it`

- **Avant de publier** : un achat test visible dans « Événements de test » (Purchase). Depuis la Belgique, accepter les cookies (consentement obligatoire en UE ; pas aux US).

## Campagne `T1_CBO_US_ACHAT`

| Réglage | Valeur |
|---|---|
| Objectif | Ventes |
| Budget | Budget de campagne Advantage+ (CBO) : **150 €/jour** (Meta débite 181,50 €) |
| Plafond de dépenses de la campagne | **900 €** (6 jours au maximum) |
| Stratégie d'enchère | Volume le plus élevé |
| Début | ven. 20 nov. : **06:00** si le compte pub est à l'heure de Bruxelles, **00:00** s'il est à l'heure de New York. Pas de date de fin |

## Les 2 ensembles (mêmes réglages, sauf le minimum de B)

| Réglage | Valeur |
|---|---|
| Conversion | Site web · pixel 1522240700051418 · **Achat** |
| Attribution | 7 jours après clic |
| Lieu | États-Unis, **Californie exclue** (débit ≤ 1,8 GPM pas encore confirmé, CLAUDE.md §9) |
| Audience | 18-65+ · Advantage+ · aucun intérêt · aucune exclusion |
| Placements | Advantage+ |
| `T1_A_IMAGES` | les 20 images ci-dessous |
| `T1_B_VIDEOS` | les 10 vidéos ci-dessous · **minimum de dépense 45 €/jour** |

## Chaque pub

- Lien : `https://myplush.us/products/plush-filtered-showerhead`
- Paramètres d'URL : `utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_term={{adset.name}}&utm_content={{ad.name}}`
- Bouton : Shop now
- **Optimisations Advantage+ de la création : tout désactiver.** Sinon Meta retouche l'image (agrandissement, arrière-plan, animation) et peut redessiner le pommeau.

## Ensemble A : 20 images (`visuels/test1/`)

| # | Fichier | Nom de l'ad |
|---|---|---|
| 1 | S01-offre-ink.jpg | `C09_ANG-duo_PER-P1_AW-PR_FMT-stat_HK-29_V1_T1` |
| 2 | S02-bandeau-2-cartouches.jpg | `C09_ANG-duo_PER-P1_AW-PR_FMT-stat_HK-30_V2_T1` |
| 3 | S03-origine-vs-plush.jpg | `C02_ANG-builtin_PER-P2_AW-SA_FMT-comp_HK-05_V1_T1` |
| 4 | S04-plush-vs-billes.jpg | `C10_ANG-compo_PER-P5_AW-SA_FMT-comp_HK-10_V1_T1` |
| 5 | S05-location-hero.jpg | `C02_ANG-builtin_PER-P2_AW-SA_FMT-stat_HK-06_V2_T1` |
| 6 | S07-probleme-solution.jpg | `C02_ANG-builtin_PER-P1_AW-PA_FMT-stat_HK-03_V3_T1` |
| 7 | S08-first-thing-we-unpacked.png | `C21_ANG-emmenag_PER-P2_AW-PA_FMT-ugc_HK-65_V1_T1` |
| 8 | S09-whats-in-the-duo-box.jpg | `C09_ANG-duo_PER-P1_AW-PR_FMT-ugc_HK-66_V1_T1` |
| 9 | S10-landlord-swap.jpg | `C05_ANG-install_PER-P2_AW-SA_FMT-stat_HK-67_V1_T1` |
| 10 | S13-214-dollars-produits.jpg | `C18_ANG-shampoo_PER-P1_AW-PA_FMT-stat_HK-68_V1_T1` |
| 11 | S14-shampoo-3-fois.jpg | `C18_ANG-shampoo_PER-P1_AW-PA_FMT-ugc_HK-69_V1_T1` |
| 12 | S15-rapport-eau-ville.jpg | `C04_ANG-ccr_PER-P1_AW-PA_FMT-ugc_HK-11_V3_T1` |
| 13 | S21-objection-pression.jpg | `C19_ANG-pression_PER-P3_AW-SA_FMT-ugc_HK-70_V1_T1` |
| 14 | A04-ticket.jpg | `C03_ANG-prix12m_PER-P3_AW-PR_FMT-note_HK-07_V1_T1` |
| 15 | A06-rapport-eau.jpg | `C04_ANG-ccr_PER-P1_AW-UN_FMT-note_HK-11_V1_T1` |
| 16 | A12-sms.jpg | `C07_ANG-odeur_PER-P1_AW-PA_FMT-sms_HK-23_V1_T1` |
| 17 | A18-note-honnete.jpg | `C11_ANG-honnete_PER-P5_AW-PR_FMT-note_HK-35_V1_T1` |
| 18 | H03-deux-amies.jpg | `C03_ANG-prix12m_PER-P3_AW-PR_FMT-ugc_HK-49_V2_T1` |
| 19 | N03-location-ancien-pommeau.jpg | `C02_ANG-builtin_PER-P2_AW-SA_FMT-stat_HK-63_V1_T1` |
| 20 | N04-ardoise.jpg | `C17_ANG-hotel_PER-P1_AW-PR_FMT-stat_HK-64_V1_T1` |

## Ensemble B : 10 vidéos (`visuels/test1/videos/`)

| # | Fichier | Nom de l'ad |
|---|---|---|
| 1 | V02-idee-passoire.mp4 | `C20_ANG-idee_PER-P1_AW-UN_FMT-skit_HK-71_V1_T1` |
| 2 | V03-pommeau-du-proprio.mp4 | `C02_ANG-builtin_PER-P2_AW-PA_FMT-pov_HK-72_V1_T1` |
| 3 | V05-cartoon-goutte-d-eau.mp4 | `C13_ANG-trajet_PER-P1_AW-UN_FMT-anim_HK-73_V1_T1` |
| 4 | V06-pate-a-modeler-remedes.mp4 | `C18_ANG-shampoo_PER-P1_AW-PA_FMT-clay_HK-74_V1_T1` |
| 5 | V07-whats-inside.mp4 | `C10_ANG-compo_PER-P5_AW-SA_FMT-demo_HK-75_V1_T1` |
| 6 | V08-1998-vs-2026.mp4 | `C12_ANG-1998_PER-P1_AW-UN_FMT-comp_HK-76_V1_T1` |
| 7 | V09-couple-emmenagement.mp4 | `C21_ANG-emmenag_PER-P2_AW-PA_FMT-ugc_HK-77_V1_T1` |
| 8 | V10-dialogue-75-dollars.mp4 | `C03_ANG-prix12m_PER-P3_AW-PR_FMT-pod_HK-49_V3_T1` |
| 9 | hooks/V11-H6-black-friday.mp4 | `C09_ANG-duo_PER-P1_AW-PR_FMT-unbox_HK-78_V1_T1` |
| 10 | longues/L1-megan-trois-shampooings.mp4 | `C18_ANG-shampoo_PER-P1_AW-PA_FMT-long_HK-79_V1_T1` |

**Les hooks de V11** : les 6 versions ont la même vidéo derrière, donc Meta les compte comme **1 seul concept**. Une seule part au départ (H6, raccord avec la carte de fin Black Friday). Les 5 autres et V11 sans hook restent en réserve. Si V11 gagne, ce sont les itérations déjà prêtes (playbook, règle 7).

## Pas au départ, et pourquoi

| Créa | Raison |
|---|---|
| H04, S16 | Même photo que S08 |
| H01, H02, S18 | Même femme, même douche que S14 |
| H05 | Même photo que S15 |
| S19, S20, S22, S23, S24, S25 (+ les « brut ») | Même photo que S21 |
| S11 | Même mise en page que S01 |
| N01, N02, S12, S17 | Plus de place : réserve |
| V01 | Même 1re seconde que V02 (« The idea ») |
| L2 | Même 1re seconde que V09 (« Day 1 in the new place ») |
| L3 | Même goutte que V05 |
| V04 | Remplacée par V11 (ton vrai déballage) |

**Réserve à J+3** : une créa coupée est remplacée par une créa de la réserve, en un seul lot, dans le même ensemble. Une créa de la réserve n'entre que si celle qui a la même 1re image n'est plus dans l'ensemble.

## Calendrier

| Quand | Quoi |
|---|---|
| Avant le 1er euro | Pixel « Always on » (Shopify > Paramètres > Événements clients) · partage des données « Maximum » · 1 achat test vu dans Events Manager, sans doublon · Facturation : limite de dépense du compte ≥ 150 €/jour |
| sam. 21 nov. (J+1) | Score « Creative diversity » de A et de B. Sur « Low » : remplacer les quasi-doublons |
| lun. 23 nov. (J+3) | La seule série de modifications : couper selon la grille (CLAUDE.md §5), puis la réserve entre en un seul lot |
| mer. 25 nov. (J+5) | Décision selon la grille. Les gagnantes continuent. Aucun nouveau test avant le 1er déc. (semaine du Black Friday). 0 achat ou MER < 1 : stop et diagnostic |
