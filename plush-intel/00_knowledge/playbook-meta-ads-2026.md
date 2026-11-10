# Playbook Meta Ads 2026 — Plush

> Version du 10 novembre 2026 · Phase 0 de la mission `plush-intel`.
> Marque : Plush, pommeau de douche filtrant, myplush.us, marché US uniquement, compte Meta neuf (0 pub lancée).
> Statuts : **FAIT** (source + date d'accès) · **INFÉRENCE** (dit comment on la déduit) · **HYPOTHÈSE** (à valider en ads).
> Chiffres Plush (Phase 1, `../01_produit/audit-produit-offre.md`, 10 nov.) : AOV **70,49 $** (mix 70 % Duo / 30 % Solo) · frais cartes US **4,9 % + 0,25 €** · CPA de break-even (BE) **32,90 $ ≈ 28 €** · ROAS BE **2,14** · CPA cible **23 $ ≈ 20 €** · LTV 90 jours ≈ 1re commande. Si Meta facture la TVA belge (21 %, non confirmé) : CPA BE lu dans Ads Manager **≈ 27 $ ≈ 23 €**.
> Plan du test 1 (décision de Yasser, 10 nov.) : **30 créas, 150 €/jour pendant 5 jours = 750 €** (≈ 174 $/jour, 1 € = 1,16 $), **une CBO, 2 ensembles** (images / vidéos). Compte pub neuf, 0 pub lancée, pixel installé. Échantillon pas reçu : pas de vidéo produit avant quelques jours.
> Sources : identifiants [S1]…[S53] et [I1]…[I3], détaillés au §16.

## Sommaire

0. Les 20 règles qu'on applique
1. Moteur de diffusion (Andromeda, GEM, Lattice) et diversité créative
2. Structure de compte à ~150 €/jour
3. Tester 25-30 créas dans une CBO
4. Métriques, seuils, diagnostic
5. Couper / itérer / scaler, post ID
6. Formats 2026
7. Frameworks copy
8. Offre et landing
9. Tracking
10. BFCM / Q4 2026
11. Conformité Meta + FTC
12. Convention de nommage
13. Avis sur le plan du media buyer
14. 15 questions pièges
15. Où une formation vidéo aiderait
16. Sources

---

## 0. Les 20 règles qu'on applique

| # | Règle | Chiffre Plush | Statut |
|---|---|---|---|
| 1 | **Une campagne CBO (budget de campagne Advantage+), 2 ensembles : images (natives + statiques) / vidéos.** Optimisation Achat, enchère « plus haut volume », US, audience Advantage+ | Décision de Yasser (10 nov.). Formule Meta : 1 218 $ ÷ (32,90 × 50) = **0,74 ensemble** soutenable → aucune structure ne sort d'apprentissage, on juge créa par créa sur des seuils posés avant | FAIT (formule [S18]) + décision |
| 2 | **Règle « non testée »** : une créa sous **28 €** de dépense à J+5 et sans achat n'est pas perdante, elle repart dans la CBO suivante | 28 € = 1× CPA BE. Exception : hook raté dès 15 € (seuils §13) → nouveau 1er visuel avant de repartir | INFÉRENCE [I1] |
| 3 | **Compter les concepts, pas les fichiers.** Deux ads qui ont la même image ou la même 1re seconde = une seule créa pour Meta | 30 créas = **au moins 15 concepts**, chacun différent des autres sur ≥ 2 dimensions (angle, persona, format, décor/créateur, niveau de conscience). Dans un même ensemble, jamais deux ads avec la même image ou la même 1re seconde | FAIT [S6] + INFÉRENCE |
| 4 | **Lire le score « Creative diversity » 24 h après le lancement** : viser « High ». Si « Low », remplacer les quasi-doublons, ne pas en ajouter | Ads Manager, par ensemble | FAIT (l'indicateur existe [S7][S8]) · HYPOTHÈSE (effet sur les résultats) |
| 5 | **Un seul passage de modifications pendant le test** : J+3 (coupes aux seuils + entrée des vidéos produit en un lot). Rien d'autre avant J+5 | J0 lancement · J+3 passage unique · J+5 décision · J+7 relecture | FAIT (Meta recommande de grouper les modifications [S18]) + HYPOTHÈSE (calendrier) |
| 6 | **Couper sans discuter** aux seuils posés avant | 28 € dépensés + 0 ajout panier + CTR lien < 0,8 % · 57 € + 0 achat · 85 € + CPA > 42 € | INFÉRENCE [I1] |
| 7 | **Un gagnant = ≥ 3 achats à CPA ≤ 20 €.** On l'itère tout de suite en 3 variantes (hook, format, persona) | Fatigue attendue en 2-4 semaines | FAIT (fatigue [S13]) + INFÉRENCE |
| 8 | **Scaler par paliers de +20 % tous les 3 jours** si le CPA sur 3 jours glissants ≤ CPA BE. Jamais de doublement | 150 → 180 → 216 €/jour | HYPOTHÈSE (heuristique de praticiens, aucune doc Meta) |
| 9 | **La rentabilité se lit dans Shopify** : MER = CA Shopify ÷ dépense Meta | MER BE = **2,14** (2,59 si TVA 21 % facturée) | INFÉRENCE [I1] |
| 10 | **Tracking vérifié avant le 1er euro** : partage « Maximum » (API Conversions), pixel d'app en **« Always on »** (pas « Optimized »), achat test, dédoublonnage | Shopify peut suspendre un pixel sans signal depuis des jours, or le nôtre n'a jamais reçu de clic pub | FAIT [S29][S30] + INFÉRENCE |
| 11 | **Juger sur « 7 jours clic »**, recouper avec les commandes Shopify via `utm_content={{ad.name}}` | Défaut Meta 2026 : 7 j clic / 1 j engage-through / 1 j vue | FAIT [S31] |
| 12 | **Aucune allégation non prouvée** : aucun % de chlore tant que le certificat usine n'est pas lu · jamais « soft water », « adoucit », « anti-calcaire » (le produit n'adoucit pas) · aucun résultat sur la peau ou les cheveux · aucune question sur un attribut personnel | « Do you have eczema? » = refus Meta + risque FTC | FAIT [S33][S34][S35] + [I1] |
| 13 | **Zéro faux avis, fausse capture, faux tweet, faux « #1 », faux expert** | Jusqu'à **53 088 $ par infraction** (16 CFR 465) | FAIT [S37] |
| 14 | **Prix barrés** : 115 $ et 144,02 $ ne sont défendables que s'ils ont été réellement pratiqués, ouvertement et de bonne foi | Sinon « prix de référence fictif » (16 CFR 233.1). Ne pas les mettre dans une pub tant que ce n'est pas réglé | FAIT [S39] + INFÉRENCE |
| 15 | **70 % de créas « produit / offre », 30 % d'éducation.** L'éducation se juge sur CTR et coût par ajout panier, pas sur l'achat à J+5 | 30 créas : ~21 offre/produit, ~9 éducation | INFÉRENCE |
| 16 | **L'ensemble vidéos part à J0 avec les VSL sans produit** (animation, chanson, éducatif) ; les vidéos produit entrent en un seul lot dès l'échantillon reçu, via l'outil « Creative testing » de Meta si le compte l'a | Minimum de dépense **45 €/jour** sur l'ensemble vidéos (§13) | FAIT [S24] + INFÉRENCE |
| 17 | **Une créa = une page** : le 1er écran de la landing répète la promesse et le visuel du hook | PDP pour les créas offre ; advertorial seulement si une créa d'éducation gagne | INFÉRENCE |
| 18 | **Pas de test pendant la semaine du BFCM** : tester du 11 au ~20 nov., puis BFCM (27-30 nov.) avec les 3-5 meilleures créas et une offre en valeur ajoutée (cartouche offerte) plutôt qu'une remise | CPM BFCM 2025 ≈ 22,26 $ contre une médiane annuelle de 15,06 $ (≈ +48 %, estimation) | FAIT [S25][S26] + INFÉRENCE |
| 19 | **Date limite de Noël honnête** : « Order by Dec 4 » (pire cas : 12 jours ouvrés + 1-2 jours de préparation). Après, plus d'angle « livré pour Noël » | La règle FTC exige une base raisonnable pour tout délai annoncé | FAIT [S40] + INFÉRENCE (date) |
| 20 | **Nommage strict de chaque ad** + UTM dynamiques | `C07_ANG-cartouche_PER-P1_FMT-stat_AW-PA_HK-03_V2` (§12) | INFÉRENCE |

---

## 1. Le moteur de diffusion : Andromeda, GEM, Lattice, et pourquoi la créa est devenue le ciblage

### 1.1 Ce qui est établi

| Brique | Rôle | Chiffres publiés | Statut |
|---|---|---|---|
| **Andromeda** (retrieval) | 1re étape : réduit « des dizaines de millions » d'ads candidates à « quelques milliers » par personne, avant le classement et l'enchère | +6 % de rappel, +8 % de qualité des ads « sur des segments sélectionnés ». Conçu parce que l'IA générative multiplie les ads : « plus d'un million d'annonceurs » ont créé « plus de 15 millions d'ads en un mois » | FAIT [S1], 2 déc. 2024 |
| **GEM** (Generative Ads Model) | Modèle de fondation qui « enseigne » à des centaines de modèles de classement. Lit des séquences de comportement allant jusqu'à des milliers d'événements par personne | +5 % de conversions sur Instagram, +3 % sur le fil Facebook (T2 2025) | FAIT [S2], 10 nov. 2025 |
| **GEM 2026** | Nouvelle architecture (« Kunlun »), entraînement à l'échelle d'un LLM | Articles du 3 août, 5 août et 13 oct. 2026, vus en extraits seulement | FAIT partiel [S3] |
| **Lattice** | Architecture de classement unifiée qui remplace des dizaines de petits modèles par objectif | Article de recherche de déc. 2025 | FAIT [S4] |
| **Retrieval génératif** | Susan Li (CFO), 29 juil. 2026 : Meta a « déployé le premier modèle génératif dans le système de retrieval » | Source secondaire, transcription non lue | FAIT secondaire [S5], à vérifier |

**Ce que Meta dit lui-même sur les créas** (FAIT [S6], « Demystifying Creative Diversification », 16 déc. 2025) :
- « When multiple ads look or feel alike, these are seen as **variations of the same creative**. » Les apprentissages et l'optimisation de diffusion sont alors **partagés au niveau de la créa**.
- La consigne : des ads « truly distinct in their **visuals, messaging, and formats** », « truly different in look, feel, **storyline**, and message », plutôt que des petites retouches d'une même ad.
- La fatigue créa : « when your target audience is overexposed to the same creative ». La similarité : « when ad images are visually too alike, even if technically different assets ».

**L'indicateur dans Ads Manager.** Le score **« Creative diversity »** classe chaque ensemble en High / Medium / Low en comparant **les images et les vignettes vidéo** de l'ensemble entre elles (FAIT [S7], qui cite le Centre d'aide Meta). Lancé le 26 août 2026 selon CTC, présenté par Meta comme « estimated and in development » (FAIT [S8]). Le 28 sept. 2026, un porte-parole de Meta refuse d'en dire plus : « We don't get into the specifics of how our ranking models represent individual creative assets » (FAIT [S9]).

**« Entity ID » : vérifié, ce n'est pas un réglage.** Un représentant de Meta a confirmé à DataAlly qu'il s'agit d'une « internal-only metric » (FAIT [S11], 12 oct. 2025). Ce que les praticiens appellent Entity ID = le regroupement décrit par Meta en déc. 2025. **Les seuils qui circulent (« au-dessus de 60 % de similarité, fusion » ; « gardez sous 40 % ») ne viennent pas de Meta** : ce sont des heuristiques d'outils et d'agences (FAIT [S7][S12][S13]).

### 1.2 Pourquoi « la créa est le ciblage » (INFÉRENCE)

1. Avec l'audience Advantage+ et un ciblage « États-Unis », le seul signal que Plush donne au système sur **qui** doit voir l'ad, c'est **le contenu de l'ad** : visuel, personne à l'écran, message, format.
2. Andromeda choisit quelques milliers de candidates **par personne** [S1], et GEM prédit la réaction de cette personne à partir de son historique [S2]. Une ad qui parle à Megan, locataire de 34 ans, et une ad qui parle à un acheteur de cadeau sont envoyées à des gens différents **parce qu'elles sont différentes**.
3. Dix variantes d'une même image avec dix titres différents ne donnent au système qu'**une seule** proposition. Elles partagent les apprentissages et touchent les mêmes personnes. D'où la fatigue rapide et le statut « Low » [S6].

### 1.3 Ce qui compte comme « différent »

| Dimension | Change le regroupement ? | Source |
|---|---|---|
| Visuel / 1re image / vignette vidéo | **Oui, d'abord.** C'est ce que le score compare | FAIT [S7] |
| Message / angle / storyline | Oui (« messaging », « storyline ») | FAIT [S6] |
| Format (statique, vidéo, carrousel, texte) | Oui | FAIT [S6] ; « mix video and static assets » (agence, [S9]) |
| Même personne, même plan, autre texte à l'écran | **Non** : « considered the same creative » | FAIT, propos d'agence [S9] |
| Même hook d'ouverture | Probablement non : « the same ad » | Propos d'agence [S9] |
| Couleur, recadrage, titre sur la même image | Non | CTC [S8] |
| Niveau de conscience, état émotionnel, persona, cas d'usage | Oui, selon les grilles de brief de CTC | Praticien [S13] |
| Créateur / décor | Probablement oui (change le visuel) | INFÉRENCE de [S7] |

### 1.4 Combien de concepts pour 25-30 créas, appliqué à Plush

- **Règle de travail : 1 concept = 1 raison d'acheter distincte, montrée avec un visuel distinct.** Un hook réécrit sur la même image n'est pas un concept (INFÉRENCE de [S6][S9]).
- **Plan retenu (Yasser, 10 nov.) : 30 créas = 15 concepts. Ensemble A : 20 images (10 natives + 10 statiques) sur C01-C12. Ensemble B : 10 vidéos (C13-C15 + 7 concepts de C01-C12).** Un même concept en image et en vidéo = 2 créas différentes pour Meta (format différent [S6]).
- **Ce qui part à J0** : les 20 images et les VSL sans produit (animation, chanson, éducatif long, texte animé). **Ce qui entre à J+3** : les vidéos produit (installation chronométrée, test du seau, cartouche après 450 gallons [I1]), en un seul lot, en remplacement des VSL coupées aux seuils.
- **Matrice des différences pour Plush** (une ligne = un concept, chaque ligne diffère des autres sur ≥ 2 colonnes) :

| Concept | Angle | Persona | Niveau de conscience | Format image (ensemble A) |
|---|---|---|---|---|
| C01 | La cartouche neuve à côté d'une usée (preuve visuelle) | P1 Megan | Problem-aware | Statique photo produit (photo réelle uniquement, voir §11) |
| C02 | L'ennemi = le pommeau « builder grade » de l'appartement | P1 locataire | Solution-aware | Note iPhone |
| C03 | « 74,99 $ pour un pommeau ? » : le coût sur 12 mois | P3 sceptique du prix | Product-aware | Statique comparatif (types, pas de marques) |
| C04 | Que dit le rapport annuel d'eau de ta ville (CCR) | P1 | Unaware → problem-aware | Statique éditorial / capture de rapport public |
| C05 | Installation sans outil, sans plombier | P2 locataire | Solution-aware | Statique « 3 étapes » |
| C06 | Cadeau de Noël utile | P4 acheteur de cadeau | Product-aware | Statique cadeau (boîte, carte) |
| C07 | L'odeur de piscine de la douche (sensoriel, sans allégation santé) | P1 | Problem-aware | Capture SMS (entre amies, clairement mise en scène) |
| C08 | Garantie « On day 59… » | P3 | Most aware | Statique texte seul |
| C09 | Duo : la 2e cartouche est déjà dans la boîte | P1 | Product-aware | Statique offre |
| C10 | Ce qu'il y a dans la cartouche (composition affichée, sans promesse chiffrée ; le nombre de couches diffère encore entre la fiche et l'onglet [I1]) | P5 « ingénieur » | Solution-aware | Statique éclaté / schéma |
| C11 | « Things we won't tell you » : ce que Plush ne fait pas (n'adoucit pas) | P5 | Product-aware | Statique texte, ton honnête |
| C12 | Avant / maintenant : le pommeau des années 70 contre 2026 | P1 | Unaware | Statique ou animation simple |
| C13 | Le trajet de l'eau, de la station à la douche | P1 | Unaware | Vidéo seulement (cartoon) |
| C14 | Chanson / jingle sur le pommeau « builder grade » | P2 | Problem-aware | Vidéo seulement |
| C15 | Éducatif 3-4 min : lire le rapport d'eau de sa ville, puis la routine douche | P5 | Problem → solution-aware | VSL long seulement |

Ensemble B : C13-C15 + 7 concepts de C01-C12 déclinés en vidéo sans produit (voix off, texte animé, visuels d'eau) = 10 vidéos à J0.

### 1.5 Débats

| Sujet | Position A | Position B | Notre lecture |
|---|---|---|---|
| Volume de créas | 25-50 ads par ensemble, le système trie (agences, conseil du media buyer de Yasser) | Loomer doute que 25-50 ads aident les petits annonceurs : commencer par 1-2, monter vers 20-30 « but you are not doing it all at once » [S15] ; CTC : **8-12 nouvelles créas distinctes par mois sous 10 k$/mois** [S13] | Décision prise : 30 créas pour le test 1. Ensuite, 4-6 nouvelles créas par semaine (le rythme CTC sous 10 k$/mois) |
| Seuil de similarité | 40 % ou 60 % selon les outils | Meta ne publie aucun seuil [S6][S9] | On regarde le label High/Medium/Low, pas un pourcentage |
| Andromeda responsable des baisses | « Andromeda a tué le ROAS » (CTC, [S13]) | Loomer : Andromeda ne fait que le retrieval, ne pas lui imputer tout [S50] | Sans historique, la question ne se pose pas pour Plush |

---

## 2. Structure de compte à ~150 €/jour

### 2.1 Les faits qui contraignent la structure

| Fait | Source |
|---|---|
| Une campagne devient « Advantage+ » (Ventes) quand 3 leviers sont actifs : **budget de campagne Advantage+** (l'ex-CBO), **audience Advantage+** (ou ciblage limité à la géographie), **placements Advantage+** (aucune exclusion). Les anciennes campagnes Advantage+ Shopping ne se créent plus via l'API depuis le T1 2026 | FAIT [S20] (ppc.land, 26 oct. 2025) |
| Depuis févr. 2026, flux de création unique : budget, audience et placements automatiques **activés par défaut**, désactivables. L'audience Advantage+ peut élargir ou remplacer l'audience saisie | FAIT secondaire [S21] (20 sept. 2026) |
| Apprentissage : ~**50 événements d'optimisation en 7 jours** après la dernière modification importante, par ensemble. Des annonceurs voient des compteurs à 10, mais **aucune doc Meta** ne le confirme | FAIT [S19] |
| Meta, 21 oct. 2026 : les ensembles sous ~50 conversions par semaine coûtent **~28 % plus cher par achat** (méthode non publiée). **Nombre max d'ensembles = budget hebdo ÷ (coût par résultat × 50)** | FAIT [S18] |
| Limites de dépense par ensemble dans un budget de campagne : le **minimum n'est pas garanti** (« best effort ») ; Meta conseille de s'en servir peu ou pas | FAIT [S23] |
| En budget par ensemble (ABO), option de **partage jusqu'à 20 %** du budget d'un ensemble vers les autres | FAIT [S22] |
| **50 ads maximum par ensemble** | FAIT [S49] |
| Un compte neuf a une **limite de dépense quotidienne** fixée par Meta selon l'historique de paiement, qui monte avec le temps | FAIT secondaire [S48] · montant pour notre compte : **à vérifier** dans Facturation avant le lancement |

### 2.2 Le calcul qui tranche (INFÉRENCE)

| | Valeur |
|---|---|
| Budget hebdo | 150 € × 7 = 1 050 € ≈ **1 218 $** |
| Ensembles « soutenables » selon la formule Meta [S18] | à CPA 23 $ (cible) : **1,06** · à 32,90 $ (BE) : **0,74** · à 45 $ : **0,54** |
| Achats attendus sur le test (750 € ≈ 870 $) | à 23 $ : 38 · à 32,90 $ : 26 · à 45 $ : 19 |

**Conclusion : à 1, 2 ou 3 ensembles, aucun ne sortira d'apprentissage.** La question n'est donc pas d'éviter l'apprentissage mais de lire chaque créa : c'est le rôle des seuils (§13) et du nommage (§12). Le plan retenu à 2 ensembles est compatible avec ça.

### 2.3 CBO, ABO ou Advantage+ pour tester ?

| Option | Pour | Contre | Verdict Plush |
|---|---|---|---|
| Advantage+ Ventes, budget campagne, 1 ensemble | Consolidation maximale, c'est ce que Meta pousse [S18][S20] | Les vidéos risquent de ne rien dépenser face aux images | 🟠 Repli si l'ensemble vidéos ne dépense pas malgré le minimum |
| **CBO, 2 ensembles (images / vidéos)** | Lecture par format ; on peut protéger la dépense vidéo par un minimum d'ensemble | Le minimum n'est pas garanti [S23] ; deux ensembles au lieu d'un | ✅ **Plan retenu** (Yasser, 10 nov.) — réglages au §13 |
| ABO, 3 ensembles × 50 € (une famille d'angles chacun) | Dépense forcée par famille, comparaison propre | 3 ensembles à ~1,5 achat/jour chacun : bruit maximal, 3× plus loin des 50 conversions | 🟠 Défendable seulement pour comparer 3 angles, pas 25 créas |
| **Outil « Creative testing » de Meta** dans l'ensemble vidéos | 5 ads (10 sur certains comptes) reçoivent une part de budget dédiée, enchère « plus haut volume » obligatoire | Accès variable selon les comptes | ✅ Pour le lot de vidéos produit à J+3 [S24][S15] |

### 2.4 Réglages (identiques pour les 2 ensembles)

| Réglage | Valeur | Statut |
|---|---|---|
| Objectif | Ventes · événement **Purchase** | INFÉRENCE : avec 19-38 achats attendus, optimiser sur l'ajout panier achèterait des « ajouteurs » bon marché. Le plan du 25 sept. (optimiser sur l'ajout panier à 430 €) ne tient plus à 750 € |
| Enchère | Plus haut volume, sans coût cible ni plafond | INFÉRENCE : un coût cible sans historique bride la diffusion |
| Budget | 150 €/jour au niveau campagne · minimum 45 €/jour sur l'ensemble vidéos, aucun maximum (§13) | Plan Yasser + INFÉRENCE |
| Audience | Advantage+, **États-Unis**. Suggestion facultative : femmes 25-54 (Megan) | HYPOTHÈSE : la suggestion n'est qu'un point de départ [S21] |
| Exclusions géographiques | Alaska, Hawaï, Porto Rico, Guam, adresses militaires **si le fournisseur ne livre pas** (question ouverte, `../../CLAUDE.md`, 19 oct.) | À vérifier : qu'une exclusion géographique garde le statut Advantage+ |
| Placements | Advantage+ (tous), avec visuels 4:5 et 9:16 | FAIT [S20] pour le statut |
| Attribution | Défaut : 7 j clic / 1 j engage-through / 1 j vue | FAIT [S31] |
| Nombre d'ads | Ensemble A : 20 images · ensemble B : 10 vidéos à J0, vidéos produit à J+3 | Décision Yasser |

### 2.5 Quand consolider

- **Tout de suite** : il n'y a rien à consolider, on part d'une seule campagne.
- **Plus tard** : CTC recommande de fusionner dès qu'on a plus de 3-4 campagnes et qu'aucune ne dépasse 20 conversions/semaine [S13]. Pour Plush : **jamais plus d'une campagne de scaling + une de test tant que la dépense reste sous ~300 €/jour** (INFÉRENCE de la formule [S18] : à 300 €/jour et 30 $ de CPA, 2 436 $ ÷ 1 500 $ ≈ 1,6 ensemble).

### 2.6 Débats

- **CBO ou ABO pour tester** : beaucoup de guides 2026 recommandent l'ABO pour tester et la CBO pour scaler (agences, sources secondaires citées en §16) ; Meta et CTC poussent la consolidation [S13][S18]. À 150 €/jour, l'argument de volume pousse à consolider ; le plan retenu garde 2 ensembles pour lire images et vidéos séparément et protéger la dépense vidéo (§13).
- **Seuil d'apprentissage à 10 ou 50** : observations à 10, doc à 50 [S19]. Ça ne change rien pour Plush : on est sous les deux par ensemble et par semaine si on fragmente.

---

## 3. Tester 25-30 créas dans une CBO sans que la majorité reste à zéro

### 3.1 Ce que disent les données

| Fait | Source |
|---|---|
| Sur 578 750 créas (6 015 comptes, 1,29 Md$ de dépense, 1er sept. 2025 - 1er janv. 2026), **~5 % sont des gagnantes** (≥ 10× la dépense médiane du compte et ≥ 500 $) | FAIT [S14] Motion |
| Les gagnantes captent **55 %** de la dépense en moyenne, **23 %** chez les petits annonceurs (« Micro ») et 64 % chez les plus gros | FAIT [S14] |
| « Scale changes how often winners surface, not the odds » : plus de volume = plus de gagnantes trouvées, pas de meilleures chances par créa | FAIT [S14] |
| Loomer (10 déc. 2025) : lancer peu, juger, puis publier le lot suivant **avec l'outil de test créa de Meta**, en gardant les ads testées dans l'ensemble principal | FAIT [S15] |

### 3.2 Ce que ça veut dire pour Plush (INFÉRENCE)

- **Une ad à 0 € n'est pas une ad perdante, c'est une ad non jugée.** Le système l'a écartée sur sa prédiction, pas sur des achats. On ne tire **aucune conclusion** sur un angle qui n'a pas dépensé.
- **La diversité des concepts compte plus que le nombre de fichiers** [S6][S14] : 30 créas sur 15 concepts valent mieux que 30 variantes de 5 concepts.
- Le risque chiffré de ce plan est posé une seule fois, au §13.

### 3.3 La méthode (5 règles)

| # | Règle | Détail |
|---|---|---|
| 1 | **Tout ce qui est prêt part à J0, le reste en un seul lot** | J0 : 20 images + 10 VSL sans produit. J+3 : vidéos produit en un lot (outil de test si disponible). Pas d'ajout au fil de l'eau |
| 2 | **Une ad par concept et par ensemble** | Ensemble A : 20 images sur C01-C12 (8 concepts en double exécution native + statique, avec des visuels différents). Ensemble B : 10 vidéos (C13-C15 + 7 concepts de C01-C12) |
| 3 | **Protéger la dépense vidéo par un minimum d'ensemble, pas par un 3e ensemble** | Minimum 45 €/jour sur l'ensemble B (« best effort » [S23]) ; outil de test pour le lot de J+3 [S24] |
| 4 | **Ne pas couper avant le seuil** | Une ad qui a reçu 10 € n'a rien prouvé. Seuils §5 |
| 5 | **Règle « non testée »** | < 28 € à J+5 et 0 achat = non testée → CBO suivante (§13). Si le hook a raté dès 15 €, nouveau 1er visuel avant de repartir. HYPOTHÈSE : un nouveau visuel change la prédiction du système |

### 3.4 À partir de quelle dépense juger une créa

| Ce qu'on juge | Dépense minimale (CPA BE = 28 €) | Indicateur |
|---|---|---|
| Le hook (statique : arrêt + clic ; vidéo : vues 3 s) | **~10-15 €** (≈ 700-1 000 impressions à 15-20 $ de CPM) | Hook rate, CTR lien |
| L'intérêt pour l'offre | **28 €** (1× CPA BE) | Coût par ajout panier, CTR lien |
| La vente | **57 €** (2× CPA BE) | Achats, CPA |
| Le gagnant | **85 €+** (3× CPA BE) | ≥ 3 achats à ≤ 20 € |

Statut : seuils en € = INFÉRENCE [I1] ; dépense pour juger un hook = HYPOTHÈSE (estimation : 1 000 impressions à un CPM de 15-20 $ = 15-20 $ ≈ 13-17 €).

### 3.5 Durée

- **Aucune coupe sur l'achat avant J+3** (le passage unique) : avec une attribution à 7 jours clic, une partie des achats de J1 arrive J2-J7 [S31].
- **Décision à J+5 (plan de Yasser), relecture à J+7** pour les achats attribués en retard : la relecture peut seulement faire monter une créa (de « à confirmer » à « gagnante »), jamais en couper une de plus (INFÉRENCE).

---

## 4. Métriques, seuils et diagnostic

### 4.1 Définitions (colonnes à activer dans Ads Manager)

| Métrique | Formule | Ce qu'elle juge |
|---|---|---|
| Hook rate | Lectures vidéo de 3 s ÷ impressions | La 1re seconde (vidéo) |
| Hold rate | ThruPlays ÷ lectures de 3 s (les définitions varient : certains prennent les vues de 15 s [S28]) | Le corps de la vidéo |
| CTR lien | Clics sur le lien ÷ impressions (pas le CTR « tous clics ») | L'envie d'en savoir plus |
| CPC lien | Dépense ÷ clics sur le lien | Prix du trafic |
| CPM | Dépense ÷ impressions × 1 000 | Prix de l'enchère, qualité prédite de l'ad |
| Coût par ajout panier | Dépense ÷ ajouts au panier | L'offre et la fiche produit |
| Taux de conversion (clic → achat) | Achats ÷ clics sur le lien | Fiche + paiement |
| CPA | Dépense ÷ achats | Rentabilité, à comparer au CPA BE |
| ROAS | Valeur des achats attribués ÷ dépense | Rentabilité vue par Meta |
| **MER** | **CA total Shopify ÷ dépense pub totale** | **La vérité** : Plush n'a qu'un canal payant, donc le MER suffit |

### 4.2 Benchmarks sourcés (e-commerce US)

| Donnée | Valeur | Source et limites |
|---|---|---|
| CPM Meta médian e-commerce | **15,06 $** (+13,24 % sur un an), août 2025 - juil. 2026 | FAIT [S25] Triple Whale, lu via le moteur de recherche (page 403 en direct) |
| CPA médian / taux de conversion | **38,99 $** / 1,53 % (même période) | FAIT [S25] ; définition du taux de conversion non précisée |
| ROAS médian par vertical | Home & Garden **2,25** · Health & Wellness **1,44** · Beauty 1,54 | FAIT [S25] |
| BFCM 2025 (Meta) | CPM **22,26 $** (+7,8 %), ROAS 2,26, CPA 34,06 $ | FAIT secondaire [S26] (AdAdvisor citant Triple Whale) |
| Prix moyen par ad, États-Unis et Canada | **+23 %** sur un an au T3 2026 (+14 % au T1, +20 % au T2) | FAIT [S27] (résultats Meta du 21 oct. 2026) |
| Hook rate | Médiane ≈ 28 % sur Meta (attribué à Motion, non vérifié) ; « bon » ≥ 30 %, « à couper » < 25 % | FAIT secondaire [S28] |
| Hold (définition 15 s) | < 15 % à couper, ~25 % bon | FAIT secondaire [S28] |

**Lecture pour Plush (INFÉRENCE)** : le CPA BE de Plush (32,90 $) est **sous le CPA médian** de l'e-commerce US (38,99 $) et le ROAS BE (2,14) est proche du ROAS médian Home & Garden (2,25). Un compte neuf, sans avis, doit donc faire mieux que la médiane dès le premier test. Les leviers sont listés au §8.

### 4.3 Le calcul qui fixe les seuils de haut de funnel (estimation)

Méthode : `CPA = CPM ÷ (1 000 × CTR lien × taux clic → achat)`. Taux de conversion clic → achat **nécessaire** pour tenir le CPA :

| CPM | CTR lien | Pour le CPA BE (32,90 $) | Pour le CPA cible (23 $) |
|---|---|---|---|
| 15 $ (médiane annuelle) | 1,5 % | 3,0 % | 4,3 % |
| 15 $ | 2,0 % | 2,3 % | 3,3 % |
| 20 $ (novembre, HYPOTHÈSE) | 1,5 % | 4,1 % | 5,8 % |
| 20 $ | 2,0 % | 3,0 % | 4,3 % |
| 25 $ (semaine BFCM, HYPOTHÈSE) | 2,0 % | 3,8 % | 5,4 % |

**Conséquence** : à 20 $ de CPM, il faut **≥ 2 % de CTR lien et ≥ 3 % de conversion** pour être à l'équilibre. Le CPC lien maximal à 3 % de conversion = 32,90 × 0,03 = **0,99 $ ≈ 0,85 €**.

### 4.4 Seuils Plush posés avant le lancement (vert / orange / rouge)

| Métrique | 🟢 | 🟠 | 🔴 | Origine |
|---|---|---|---|---|
| Hook rate (vidéo) | ≥ 30 % | 25-30 % | < 25 % | [S28] |
| Hold rate (ThruPlay ÷ 3 s), vidéos < 60 s | ≥ 25 % | 15-25 % | < 15 % | [S28] ; pas utilisé pour le VSL de 3-4 min |
| CTR lien | ≥ 1,5 % | 0,8-1,5 % | < 0,8 % | §4.3 + seuil de coupe Phase 1 [I1] |
| CPC lien | ≤ 0,85 € | 0,85-1,30 € | > 1,30 € | §4.3 (rouge = 1,5× le maximum) |
| Coût par ajout panier | ≤ 8 € | 8-14 € | > 14 € | HYPOTHÈSE : 30 % des paniers deviennent des achats → 28 € × 0,30 ≈ 8 €. **À recaler dès 10 ajouts panier sur le compte** : seuil vert = 28 € × (achats ÷ ajouts panier) |
| Coût par paiement initié | ≤ 15 € | 15-25 € | > 25 € | HYPOTHÈSE : 55 % des paiements initiés aboutissent |
| CPA | ≤ 20 € (cible) | 20-28 € | > 28 € (BE) | [I1] |
| MER du compte (Shopify) | ≥ 3,1 | 2,14-3,1 | < 2,14 (2,59 si TVA) | [I1] |

### 4.5 Diagnostic d'une créa : hook, body, offre ou landing ?

| Symptôme | Le problème est… | Action |
|---|---|---|
| Hook rate < 25 % (vidéo) ou CTR lien < 0,8 % avec CPM normal | **Le hook** (1re image, 1re seconde, 1re ligne) | Nouveau 1er visuel, même corps |
| Hook ≥ 30 %, hold < 15 % | **Le corps** | Couper la vidéo, avancer la preuve (cartouche, installation) avant la seconde 5 |
| Hook et hold bons, CTR lien < 0,8 % | **La raison de cliquer** | Ajouter l'offre (Duo, 2 cartouches, garantie 60 j) et un appel à l'action explicite |
| CTR et CPC bons, coût par ajout panier > 14 € | **La fiche ou l'offre** | Vérifier la continuité ad → page (§8.4), le prix vu en premier, la vitesse mobile |
| Ajouts panier bons, peu de paiements initiés | **Le panier** | Frais surprises, Shipping Protection pré-cochée (interdit, §8), délai mal affiché |
| Paiements initiés bons, peu d'achats | **Le paiement** | Shop Pay / Apple Pay actifs, confiance, délai 7-12 jours vu avant de payer |
| Achats Shopify ≠ achats Meta (écart > 20 %) | **Le tracking** | §9 |
| CPM d'une ad 2× celui des autres | **Prédiction faible ou diffusion limitée** (règles) | Lire le statut de l'ad ; refaire le 1er visuel |

### 4.6 Débats

- **Les benchmarks de hook rate ne concordent pas** (médiane 28 % chez l'un, bandes 25/30/40 % chez d'autres, définitions du hold différentes) [S28]. On garde nos seuils, recalés sur nos propres médianes après le test 1.
- **ROAS plateforme ou mesure incrémentale** : CTC demande de juger le haut de funnel au ROAS incrémental et au MER, pas au ROAS de plateforme [S13]. Pour Plush, un seul canal payant : le MER Shopify tranche.

---

## 5. Couper, itérer, scaler (calé sur le CPA BE de 28 €)

### 5.1 La grille de décision au niveau de l'achat (posée avant, Phase 1)

| Dépense de la créa | Condition | Décision |
|---|---|---|
| ≥ 28 € (1× CPA BE) | 0 ajout panier et CTR lien < 0,8 % | Couper |
| ≥ 57 € (2× CPA BE) | 0 achat | Couper |
| ≥ 85 € (3× CPA BE) | CPA > 42 € (1,5× BE) | Couper |
| — | ≥ 2 achats, CPA ≤ 28 € | Garder |
| — | ≥ 3 achats, CPA ≤ 20 € (cible) | **Gagnante** : itérer + candidate au scaling |

Source : [I1] (INFÉRENCE). Les seuils de haut de funnel par palier de dépense sont au §13.3. Si la TVA de 21 % est confirmée, tous les seuils en € baissent de 17 % (÷ 1,21) : 23 € / 47 € / 70 €.

### 5.2 Scaler

| Mode | Règle Plush | Statut |
|---|---|---|
| **Vertical** (même campagne) | +20 % de budget tous les 3 jours si le CPA sur 3 jours glissants ≤ 28 € **et** le MER Shopify ≥ 2,14 | HYPOTHÈSE (heuristique de praticiens). Meta recommande seulement de grouper les modifications [S18] |
| **Horizontal** (plan du media buyer) | Une CBO « scaling » qui ne reçoit que les gagnantes (par post ID), une CBO « test » à côté | Conforme au plan ; voir §13.6 pour le partage du budget |
| Ne jamais | Doubler un budget d'un coup, relancer un ensemble qui marche « pour repartir de zéro », toucher à un gagnant pendant ses 3 premiers jours | INFÉRENCE |

### 5.3 Itérer sur un gagnant

| Itération | Ce qui change | Meta la verra comme nouvelle ? |
|---|---|---|
| Même angle, **nouveau hook** (nouvelle 1re image, nouvelle 1re seconde) | Le visuel d'entrée | Oui : c'est ce que compare le score [S7] |
| Même hook, **nouvelle personne / nouveau décor** | Le visuel | Oui (INFÉRENCE de [S7]) |
| **Statique gagnante → vidéo** (et l'inverse : la meilleure image de la vidéo + son titre) | Le format | Oui [S6] |
| Même concept, **autre niveau de conscience** (l'offre devient une explication, ou l'inverse) | Le message | Oui [S6][S13] |
| Même vidéo, **autre texte à l'écran** | Rien pour Meta | **Non** : « the same creative » [S9]. Utile seulement en A/B propre |
| Même image, autre couleur ou autre titre | Rien pour Meta | Non [S8] |

**Recette Plush** : pour chaque gagnante, 3 itérations dans la semaine (1 nouveau hook, 1 nouveau format, 1 nouvelle persona ou nouveau décor), lancées dans la CBO de test, jamais dans celle de scaling.

### 5.4 Le post ID : ce qu'il garde, ce qu'il ne garde pas

| Point | Ce qu'on sait | Statut |
|---|---|---|
| Ce que garde le post ID | Les réactions, commentaires et partages de la publication (la preuve sociale) | Fonctionnement d'Ads Manager (« Utiliser une publication existante ») — à vérifier dans l'interface |
| Ajouter une ad relance-t-il l'apprentissage ? | Le Centre d'aide Meta : « a small edit, like adding a new ad, can reset the learning phase » | FAIT [S16] |
| Ce que Loomer a observé | 1 ad ajoutée à un ensemble qui en comptait 22 : l'ensemble **n'est pas** reparti en apprentissage | FAIT [S16][S17] |
| Les apprentissages suivent-ils la créa ? | Meta : pour des variations d'une même créa, apprentissages et optimisation sont **partagés au niveau de la créa** | FAIT [S6] → que ça vaille pour un post ID déplacé : HYPOTHÈSE |

**Tranché** : les deux sources ne se contredisent pas. La doc dit « peut », Loomer a vu « pas toujours », sur un ajout de 1 ad pour 22. L'effet dépend très probablement de la part de l'ensemble qui change (INFÉRENCE). Règles Plush :
1. On ajoute des ads **en un seul lot**, jamais une par une (J+3 pendant le test).
2. On déplace les gagnantes par post ID **une fois par semaine au plus**, en un lot.
3. On n'attend pas du post ID qu'il transporte la performance : il transporte la preuve sociale. La performance se reconstruit dans le nouvel ensemble (INFÉRENCE).
4. Commentaires : répondre aux objections, masquer seulement le spam et les insultes. Un commentaire qui affirme un effet sur la santé n'est pas repris par la marque (§11).

### 5.5 Débats

- **Déplacer les gagnants ou les laisser où ils sont** : le plan du media buyer les déplace (par post ID) vers une CBO de scaling ; Loomer garde les ads testées dans l'ensemble principal et teste via l'outil de Meta [S15]. Les deux se défendent ; à 150 €/jour, on déplace une fois par semaine au plus.
- **Fatigue** : CTC l'estime à 2-4 semaines en 2026 [S13]. Pour Plush, la question se posera au test 3, pas au test 1.

---

## 6. Formats qui performent en 2026

**Principes sourcés** : Meta demande de diversifier entre texte, image et vidéo [S6] ; Motion conclut que le contexte (taille du compte, secteur, saison) compte plus qu'un « meilleur format » universel [S14] ; Barry Hott : faire des ads qu'on ne fait pas défiler, quitte à les faire « plus moches » qu'une pub léchée [S46]. Dans notre catégorie, les leaders sont à ~95 % en vidéo (eskiin : 25 statiques sur 452 ads), mais Vedya Home tient 45 variantes statiques sur 120 jours [I2] : **le statique est sous-utilisé, pas interdit** (INFÉRENCE).

| Format | Version Plush | Avant échantillon ? | Conformité |
|---|---|---|---|
| Statique natif « note iPhone » | « Things I checked before buying a shower filter » (filetage ½", cartouche visible, garantie) | ✅ | ✅ Voix de la marque, pas d'un faux client |
| Capture SMS / iMessage | Deux amies : « why does my shower smell like a pool » | ✅ | ⚠️ Mise en scène : ne doit pas passer pour un vrai échange client (§11) |
| Capture tweet / Reddit | — | — | ❌ Tant qu'on n'a pas de vrai post, avec autorisation |
| Capture d'avis | — | — | ❌ Aucun avis réel pour l'instant |
| « Us vs them » | Plush contre **le pommeau d'origine** de l'appartement (un type, pas une marque) | ✅ | ✅ Si chaque ligne est vraie |
| Comparatif de coût sur 12 mois | Duo 74,99 $ (2 cartouches) contre « un filtre à 25 $ + cartouches à 15 $ » | ✅ | ⚠️ Prix réels relevés et datés, types et pas marques |
| Démo | Installation chronométrée, test du seau, cartouche après ~450 gallons [I1] | ❌ (J+3) | ⚠️ Le chlore de Bruxelles est plafonné à 0,25 mg/L contre 4 mg/L aux US : démo du chlore faible et non représentative [I1] |
| Unboxing | La boîte, la carte, la 2e cartouche du Duo | ❌ (J+3) | ✅ |
| UGC | Créatrice qui installe et utilise | ❌ | ⚠️ La créatrice doit réellement utiliser le produit, et ne dire que ce qu'elle a constaté (§11) |
| Founder-led | Yasser, 17 ans, raconte pourquoi il a choisi ce produit | ✅ (sans produit possible) | ⚠️ Honnête sur l'origine (Bruxelles, dropshipping) : HYPOTHÈSE à tester |
| Podcast / dialogue | Un sceptique, une convaincue, 3 objections (pression, plombier, prix) | ✅ en animation ou voix off | ✅ 4 concurrents l'utilisent [I2] |
| Micro-trottoir | — | — | ⚠️ Des acteurs présentés comme des passants = faux consommateurs (§11) |
| Carrousel | « 5 étapes d'installation » ; « ce que Plush ne fait pas » ; « le rapport d'eau de 5 villes » | ✅ | ✅ Données publiques datées (CCR [S42]) |
| Cartoon / animation | C13, le trajet de l'eau | ✅ | ✅ |
| Chanson | C14 | ✅ | ✅ |
| Éducatif long (3-4 min) | C15, lire le rapport d'eau de sa ville | ✅ | ✅ Une seule ; jugée sur CTR et coût par ajout panier |

**Spécifications** (sources secondaires [S47], à vérifier dans l'aperçu d'Ads Manager) :

| Point | Règle |
|---|---|
| Ratios | **4:5** (1080 × 1350) pour le fil, **9:16** (1080 × 1920) pour Reels et Stories. Chaque créa livrée dans les deux |
| Zones sûres 9:16 | Rien d'important dans les ~14 % du haut, les ~35 % du bas et ~6 % sur les côtés |
| Sous-titres | Incrustés, gros, 2 lignes max. HYPOTHÈSE : une part du fil est regardée sans le son |
| Son | Conçu pour Reels (son activé) mais compréhensible sans |
| Rythme | Hook ≤ 2 s ; preuve (cartouche, installation, prix) visible avant 5 s ; UGC et démo 15-45 s ; VSL 60-90 s ; éducatif long : 1 seul |

---

## 7. Copy : frameworks appliqués à Plush

### 7.1 Structure

- **Hook** = 1re image + 1re ligne. Une seule idée.
- **Body** = **une** croyance par ad (§7.3), avec sa preuve.
- **CTA** = l'offre + la garantie : « 2 cartridges in the box. 60 days to decide. »
- **PAS** pour les ads problem-aware : Problème (l'odeur de piscine, le pommeau d'origine) → Agitation **sans allégation santé** (« three shampoos later, you never checked the water ») → Solution (la cartouche qu'on voit, la garantie).
- **Ton de Megan** : « you », 8-12 mots par phrase, contractions, **zéro point d'exclamation**, une amie qui s'y connaît [I2].

### 7.2 Niveaux de conscience (Schwartz) [S43]

| Niveau | Ce qu'elle sait | Hook Plush (anglais, conforme) |
|---|---|---|
| Unaware | Rien | « Your city publishes a water report every July. Most people never read it. » |
| Problem-aware | Sa douche sent la piscine | « That pool smell in your shower has a name. » |
| Solution-aware | Les filtres de douche existent | « I didn't want another shower filter with a cartridge I can't see. » |
| Product-aware | Elle connaît Plush | « $74.99. Two cartridges in the box. » (+ la durée totale, une fois la durée de la cartouche tranchée : 6 mois à 3 mois par cartouche, 4 mois à 60 jours) |
| Most aware | Elle hésite | « On day 59, if you don't love it, you get all your money back. » |

**Sophistication du marché : stade 4-5** (INFÉRENCE : « 15-stage », « KDF-55 », « America's #1 » saturent les ads concurrentes [I2]). Conséquence : **ne pas entrer dans la course au mécanisme**. Gagner par l'identification (Megan), la preuve visible (la cartouche) et l'honnêteté (« What it won't do: soften hard water », déjà sur la fiche [I1]).

### 7.3 La chaîne de croyances (dans l'ordre)

| # | Elle doit croire que… | Preuve autorisée |
|---|---|---|
| 1 | L'eau de sa ville contient du chlore | Son rapport annuel (CCR), public et obligatoire, publié avant le 1er juillet [S42] |
| 2 | Ça vaut la peine de le filtrer à la douche | Sensoriel seulement (odeur, sensation), jamais un effet sur la santé, la peau ou les cheveux |
| 3 | Un filtre de douche peut le faire | La composition affichée ; **un % seulement avec le rapport de test lu** |
| 4 | Plush ira sur sa douche, sans outil | Filetage ½" (à confirmer par écrit [I1]), 5 étapes, vidéo d'installation (J+3) |
| 5 | 74,99 $ est un bon prix | 2 cartouches dans la boîte, coût sur 12 mois |
| 6 | Elle ne prend aucun risque | Garantie 60 jours, livraison offerte |
| 7 | C'est maintenant | Cadeau avant le 4 déc. (§10) ; jamais un faux compte à rebours |

### 7.4 RMBC et Hormozi

- **RMBC (Georgi)** : Research → Mechanism → Brief → Copy [S44]. Pour Plush : la recherche = Phase 5 (VOC) ; **le mécanisme = la cartouche qu'on voit, sans nom inventé** (recommandation Phase 1 [I1]) ; un brief par concept (C01-C15) ; la copy ensuite.
- **Équation de valeur (Hormozi)** : valeur = (résultat rêvé × probabilité perçue) ÷ (délai × effort) [S45]. Plush agit sur la probabilité perçue (garantie, cartouche visible, limites avouées), le délai (dès la 1re douche, si c'est vrai pour le sensoriel) et l'effort (sans outil, sans plombier, 2e cartouche déjà là). **On ajoute de la valeur plutôt que de baisser le prix** (§10.3).

---

## 8. Offre et landing

### 8.1 L'offre actuelle, lue avec les chiffres de la Phase 1 [I1]

| Élément | Valeur | Ce qu'on en fait |
|---|---|---|
| Duo 74,99 $ (offre par défaut) | Marge 34,97 $ | Rester l'offre mise en avant dans 70 % des ads |
| Solo 59,99 $ | Marge 28,07 $ | Jamais mis en avant dans une ad |
| Cartouche seule 29 $ | Marge ≈ 14,44 $ (estimation) | Post-achat et email, pas en ad froide |
| Shipping Protection 4,99 $ | ≈ +2,4 $ par commande à 50 % d'ajout → CPA BE ≈ 35 $ | Proposée, **jamais pré-cochée** (risque « frais cachés » aux US, interdit dans l'UE) [I1] |
| LTV à 90 jours | ≈ 1re commande (la 2e cartouche est dans le Duo) | **On ne paie pas un client plus que le CPA BE** au test 1 [I1] |

### 8.2 Leviers d'AOV, par ordre de priorité (INFÉRENCE)

1. **Shipping Protection non pré-cochée**, bien présentée au panier.
2. **Cartouche en 1 clic après l'achat** (post-purchase upsell Shopify) : n'ajoute aucun coût d'acquisition.
3. **Offre BFCM en valeur ajoutée** (une cartouche de plus dans la boîte du Duo) plutôt qu'une remise (§10.3). Prix DDP d'une 3e cartouche dans la même boîte : **à demander au fournisseur**.
4. **Abonnement cartouches** : seulement quand la durée réelle est tranchée (60 jours sur le site, 3 mois chez le fournisseur [I1]) et en conformité ROSCA (§11).

### 8.3 Garantie

« On day 59, if you don't love it, you get all your money back » est le bon levier de probabilité perçue (§7.4). Les conditions (comment demander, retour du produit ou non, délai de remboursement) doivent être écrites près de la promesse (exigence des guides FTC sur les garanties, 16 CFR 239 : **à vérifier**).

### 8.4 PDP, advertorial ou listicle

| Page | Pour quelles créas | Statut |
|---|---|---|
| **Fiche produit (PDP)** | Créas offre, produit, garantie, cadeau (≈ 70 % des 30) | ✅ Test 1 |
| **Advertorial / listicle** (`/pages/…`) | Créas d'éducation (C04, C13, C15) | HYPOTHÈSE : à construire seulement si l'une d'elles a un bon CTR mais un mauvais coût par ajout panier sur la PDP. Les leaders de la catégorie envoient presque tout vers des `/pages/` [I2] |

**Continuité ad → page (avant le lancement)** :
- Le 1er écran répète la promesse du hook (cartouche, pommeau d'origine, prix ou cadeau).
- Une seule promesse de délai : la fiche affiche « 5 to 12 » et le panier « 7–12 » [I1] → **7-12 jours ouvrés partout**.
- **Aucune note ni aucun avis affiché tant qu'il n'existe aucune commande** : la fiche montre aujourd'hui 4 notes différentes (4.8, 4.7, 4.8/5, 5/5) sans aucune vente [I1]. Une note sans acheteur est un faux avis au sens de la règle FTC (§11).
- Le badge « Stronger pressure » n'est pas prouvé tant que le test du seau n'est pas fait [I1] → le retirer ou le prouver.

---

## 9. Tracking : la checklist avant le premier euro

| # | Contrôle | Où | Statut |
|---|---|---|---|
| 1 | Pixel d'app Meta en **« Always on »** (et non le partage « optimisé » par défaut depuis le 13 janv. 2026). Shopify suspend le partage quand il ne voit « aucun signal pendant des jours ou des semaines » : c'est le cas d'un pixel qui n'a jamais reçu de clic pub | Shopify > Paramètres > Événements clients > Pixels d'app | FAIT [S29] + INFÉRENCE |
| 2 | Partage de données client au niveau **le plus élevé** (« Maximum » : envoi serveur via l'API Conversions) | App Facebook & Instagram > Paramètres de partage | Sources secondaires, noms des niveaux variables : **à vérifier dans l'admin** |
| 3 | Achat test réel (puis remboursé) : ViewContent, AddToCart, InitiateCheckout, Purchase visibles **en navigateur ET en serveur**, avec le même `event_id`, et marqués dédoublonnés | Events Manager > Tester les événements | FAIT : Meta dédoublonne sur `event_name` + `event_id`, dans les 48 h [S30] |
| 4 | Valeur et devise envoyées avec chaque achat (USD) | Events Manager > détail de l'événement | FAIT : demandé par Meta pour la haute saison [S18] |
| 5 | Note de qualité de correspondance (EMQ) de l'achat lue et notée avant le lancement | Events Manager | Seuil officiel non trouvé : **à vérifier** |
| 6 | Aucune bannière de restriction « santé et bien-être » sur le pixel. Meta limite depuis janv. 2025 les événements bas de funnel des sites classés santé [S32] | Events Manager > source de données | INFÉRENCE : une fiche qui parle d'eczéma ou de maladie peut faire classer le site. Raison de plus pour n'en parler nulle part |
| 7 | Attribution par défaut : **7 j clic / 1 j engage-through / 1 j vue**. Depuis mars 2026, le « clic » = clic sur le lien uniquement ; likes, partages et enregistrements passent en « engage-through » | Ensemble > Attribution | FAIT [S31] |
| 8 | UTM dynamiques sur chaque ad (copier tel quel) : `utm_source=facebook&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_term={{adset.name}}&utm_content={{ad.name}}` | Ad > Paramètres d'URL | Paramètres dynamiques Meta : à vérifier dans l'aperçu |
| 9 | Rapprochement **chaque matin** : commandes Shopify (source facebook) contre achats Meta (7 j clic). Écart > 20 % → revoir les points 1 à 3 | Shopify Analytics + Ads Manager | INFÉRENCE |
| 10 | Facture Meta : TVA appliquée ou non ? Limite de dépense quotidienne du compte neuf ≥ 150 € ? | Facturation | [I1] + [S48] |

**Lecture des résultats** : on juge les créas sur « 7 jours clic » (colonne de comparaison d'attribution), et le compte sur le MER Shopify. La colonne « 1 jour vue » n'est jamais une raison de garder une créa (INFÉRENCE).

---

## 10. BFCM et Q4 2026

### 10.1 Les chiffres

| Donnée | Valeur | Source |
|---|---|---|
| CPM Meta pendant le BFCM 2025 (28 nov. - 1er déc. 2025) | **22,26 $**, ROAS 2,26, CPA 34,06 $ | FAIT secondaire [S26] |
| CPM médian sur 12 mois (août 2025 - juil. 2026) | 15,06 $ | FAIT [S25] |
| Écart BFCM / année | **≈ +48 %** | Estimation : 22,26 ÷ 15,06, deux fenêtres de la même source |
| Prix moyen par ad, US et Canada, T3 2026 | **+23 %** sur un an | FAIT [S27] → INFÉRENCE : le BFCM 2026 sera plus cher que celui de 2025 |
| Consignes Meta pour la haute saison 2026 (21 oct.) | Consolider, grouper les modifications, figer l'optimisation sur une fenêtre mesurée, envoyer valeur et devise | FAIT [S18] |
| Dépenses en ligne US prévues du 1er nov. au 31 déc. 2026 | 275,1 Md$ (+6,7 %, Adobe) | FAIT secondaire [S18] |

### 10.2 Le calendrier Plush (si lancement le 12 nov.)

| Dates | Action | Statut |
|---|---|---|
| 10-11 nov. | Tracking (§9), limite de dépense, fiche nettoyée (§8.4), nommage (§12) | — |
| **12-16 nov.** | **Test 1** : 30 créas, CBO 150 €/jour, 2 ensembles (§13) | Décision Yasser |
| 17 nov. (J+5) | Décision (§13.6) ; 19 nov. : relecture J+7 | — |
| 17-23 nov. | CBO de scaling (gagnantes) + CBO de test 2 (non testées, vidéos produit, itérations) | INFÉRENCE |
| ~21-23 nov. | Créas BFCM soumises à la validation Meta | HYPOTHÈSE : validations plus lentes en haute saison |
| **24-30 nov.** | **Aucun nouveau test.** Gagnantes + offre BFCM seulement | INFÉRENCE (CPM ≈ +48 %) |
| 1er-4 déc. | Angle cadeau, avec la date limite | INFÉRENCE |
| **ven. 4 déc.** | **Dernier jour pour « livré avant Noël »** (24 déc. moins 12 jours ouvrés = expédition le mar. 8 déc., moins 1-2 jours ouvrés de préparation) | Estimation, pire cas annoncé. Date harmonisée le 10 nov. avec l'audit et l'analyse marché |
| 5-14 déc. | « Cadeau tardif » seulement si le délai de 7 jours ouvrés est **confirmé par écrit** par le fournisseur | HYPOTHÈSE |
| Après le 14 déc. | Plus d'angle Noël ; routine du Nouvel An, achat pour soi | INFÉRENCE |

### 10.3 Quelle offre pour le BFCM (estimation)

| Offre | Marge Duo | CPA BE | Lecture |
|---|---|---|---|
| Duo sans changement | 34,97 $ | 34,97 $ (≈ 32,90 $ en mix 70/30) | Référence [I1] |
| **Duo + 3e cartouche offerte** | ≈ 28,50 $ | ≈ 28,50 $ | Coût estimé d'une cartouche en plus dans la boîte : 5,58 € ≈ 6,47 $ (27,08 − 21,50 €). **Prix réel à demander au fournisseur** |
| Duo −20 % (59,99 $) | ≈ 21,60 $ | ≈ 21,60 $ | La remise coûte 2× plus cher que la cartouche offerte, pour une valeur perçue comparable (HYPOTHÈSE) |

Méthode : prix − coût DDP 31,41 $ − carte et sticker 0,16 $ − frais 4,9 % + 0,29 $ − retours 6 %. **Recommandation : la cartouche offerte.** Le code PLUSHFAM (−20 %, imprimé sur la carte de la boîte) ne doit jamais apparaître dans une ad : il ramène le CPA BE vers 21-22 $.

### 10.4 L'angle cadeau, sans mentir

- « The gift they'll use every morning » ; « 2 cartridges in the box » ; « Order by Dec 4 for Christmas delivery (US) ».
- La boîte est générique [I2] : **ne pas promettre d'emballage cadeau**.
- Toute date de livraison annoncée exige une base raisonnable ; en cas de retard, prévenir le client et lui proposer l'annulation avec remboursement (règle FTC sur la vente à distance [S40]).

---

## 11. Conformité Meta + FTC pour un pommeau filtrant

### 11.1 Les règles qui s'appliquent

| Règle | Ce qu'elle dit | Source |
|---|---|---|
| Meta, attributs personnels | Pas d'ad qui « asserts or implies personal attributes », dont « physical or mental health (including medical conditions) ». Exemple de Meta : ✅ « Depression counseling » / ❌ « Depression getting you down? » | FAIT [S33] |
| Meta, santé et bien-être (version du 23 juil. 2026) | Interdit : générer une perception négative de soi, les allégations de guérison (« cure, heal, or eliminate »). Avant/après cosmétique toléré **sans** perception négative ; anti-âge sans comparaison côte à côte | FAIT [S34] |
| FTC, allégations santé | Toute allégation santé, **explicite ou implicite**, exige une « competent and reliable scientific evidence ». Un témoignage ne remplace pas la preuve ; « results not typical » ne corrige rien ; une étude sur un ingrédient ne prouve pas le produit fini | FAIT [S35] |
| FTC, preuve des allégations | Il faut une « reasonable basis » **avant** de diffuser, pour chaque interprétation raisonnable de l'ad | FAIT [S36] |
| FTC, avis et témoignages (16 CFR 465, en vigueur depuis le 21 oct. 2024) | Faux avis, avis achetés conditionnés, faux indicateurs sociaux (abonnés, likes achetés) : jusqu'à **53 088 $ par infraction** | FAIT [S37] |
| FTC, guides sur les recommandations (16 CFR 255.2) | Des personnes présentées comme de « vrais consommateurs » doivent l'être, sinon il faut le dire clairement ; un témoignage laisse entendre que le résultat est **représentatif** | FAIT [S53] |
| FTC, prix de référence (16 CFR 233.1) | Un prix barré doit être un prix réellement pratiqué, ouvertement, pendant une durée raisonnable | FAIT [S39] |
| FTC, vente à distance | Base raisonnable pour tout délai annoncé ; retard = prévenir + proposer l'annulation | FAIT [S40] |
| Abonnements | La règle « click-to-cancel » a été annulée le 8 juil. 2025, mais **ROSCA** s'applique toujours, ainsi que les lois des États (Californie modifiée au 1er juil. 2025) | FAIT [S41] |
| Norme filtres de douche | **NSF/ANSI 177** : réduction du chlore libre, essais à température de douche. Jolie figure dans les produits certifiés | FAIT [S38] |

### 11.2 La liste Plush

| Statut | Formulation | Pourquoi |
|---|---|---|
| ❌ | « Do you have eczema? » · « Struggling with dry, itchy skin? » · « Is your hair falling out? » | Attribut personnel de santé [S33] + allégation santé [S35] |
| ❌ | « Hard water in. Soft water out. » · « Softens your water » · « No more limescale » | Faux : Plush n'est pas un adoucisseur, la fiche le dit déjà [I1] |
| ❌ | « Removes 99% of chlorine » sans rapport de test lu | Pas de base raisonnable [S36]. Le certificat de l'usine n'a pas été vu |
| ❌ | « Clinically proven » · « Dermatologist recommended » · « Reduces hair shedding » · « Clearer skin in 7 days » | Aucune étude, aucun dermatologue [S35] ; allégations de résultat interdites par Meta [S34] |
| ❌ | « America's #1 shower filter » · « Best-selling » | Supériorité non prouvée [S36] |
| ❌ | Avis, notes, captures de tweets ou de SMS inventés ; avis d'AliExpress ou d'un autre produit ; notes affichées sans aucune commande | Faux avis [S37] |
| ❌ | Acteurs présentés comme des clients ou des passants (micro-trottoir mis en scène) sans le dire | 16 CFR 255.2 [S53] |
| ❌ | Avant/après de cheveux ou de peau, côte à côte | Aucune preuve de causalité ni de représentativité [S35][S53] ; risque de perception négative [S34] |
| ❌ | « Was $115 » ou « $144.02 » tant que ces prix n'ont pas été pratiqués de bonne foi | Prix de référence fictif [S39] |
| ❌ | Compte à rebours qui se relance, faux stock limité | Urgence trompeuse (guide FTC sur les « dark patterns » : à vérifier) |
| ❌ | Shipping Protection pré-cochée | [I1] ; risque « frais cachés » |
| ❌ | Nommer et noter un concurrent (« Brand X: F ») | Dénigrement [I2] ; on compare des types |
| ⚠️ | « Filters chlorine » (sans chiffre) | Lire le certificat : porte-t-il sur **ce** produit, à quelle température, à quel débit ? Idéal : NSF/ANSI 177 [S38] |
| ⚠️ | « Up to X% chlorine reduction* » | Seulement avec le rapport, conditions de test en note |
| ⚠️ | « We didn't make it brown. Your water did. » | Cartouche réelle, non retouchée, usage réel, nombre de gallons à l'écran ; ne jamais nommer ce qu'elle contient [I1] |
| ⚠️ | « Stronger pressure » | Prouvé par le test du seau, sinon retiré [I1] |
| ⚠️ | « Installs in 60 seconds. No tools. » | Chronométré sur de vraies installations ; filetage ½" confirmé par écrit |
| ⚠️ | « Lasts 3 months » | Une seule durée partout (60 jours sur le site aujourd'hui), adossée aux specs du fournisseur en gallons |
| ⚠️ | Dialogue, SMS, podcast mis en scène | Montrer que c'est une mise en scène (« dramatization ») si ça peut passer pour de vrais clients [S53] |
| ⚠️ | UGC payé | La créatrice utilise vraiment le produit, ne dit que ce qu'elle a constaté ; partenariat visible |
| ⚠️ | « Your city's water contains chlorine » | Vrai seulement si le rapport de la ville le dit ; citer le rapport [S42] |
| ✅ | « Your city publishes a water quality report every year. Here's how to read it. » | Donnée publique [S42] |
| ✅ | « That pool smell in your shower. » | Sensoriel, général, aucune allégation |
| ✅ | « 2 cartridges in the box. » · « Free US shipping, 7-12 business days. » | Vrai et vérifiable |
| ✅ | « On day 59, if you don't love it, you get all your money back. » | Avec les conditions écrites à côté |
| ✅ | « What it won't do: soften hard water. » | L'honnêteté est un argument |
| ✅ | « This is a shower head from 1970. This is one from 2026. » | Aucune promesse sur le corps |

---

## 12. Convention de nommage (pour analyser l'export Ads Manager)

**Format d'une ad** (champs séparés par `_`, valeurs par `-`, jamais d'espace ni d'accent) :

`C07_ANG-odeur_PER-P1_AW-PA_FMT-sms_HK-03_V1_T1`

| Champ | Codes autorisés |
|---|---|
| `C07` | Numéro de concept (C01-C15, matrice §1.4) |
| `ANG-` | `cartouche` · `builtin` (pommeau d'origine) · `prix12m` · `ccr` (rapport d'eau) · `install` · `cadeau` · `odeur` · `garantie` · `duo` · `compo` · `honnete` · `1970` · `trajet` · `chanson` · `educ` |
| `PER-` | `P1` Megan · `P2` locataire · `P3` sceptique du prix · `P4` acheteur de cadeau · `P5` « ingénieur » |
| `AW-` | `UN` unaware · `PA` problem-aware · `SA` solution-aware · `PR` product-aware · `MA` most aware |
| `FMT-` | `note` · `sms` · `stat` · `comp` · `carr` · `ugc` · `demo` · `unbox` · `found` · `pod` · `anim` · `song` · `vsl` |
| `HK-` | Numéro du hook dans `../06_angles/banque-hooks.md` |
| `V` | Version d'exécution (V1, V2… : nouveau visuel du même concept) |
| `T` | Numéro du test où l'ad est née (T1 = test du 12 nov.) |

**Campagnes et ensembles** : `PLUSH_T1_CBO_2026-11-12` ; ensembles `T1_A-images` et `T1_B-videos` ; scaling `PLUSH_SCALE_CBO`.

**Analyse** : export Ads Manager au niveau ad (colonnes du §4.1, attribution 7 jours clic) → dans Google Sheets, `=SPLIT(A2;"_")` découpe le nom en colonnes → tableau croisé par `ANG`, `FMT`, `AW`, `PER`. Les commandes Shopify se rattachent à l'ad par `utm_content` (= nom de l'ad, §9). Une ad renommée en cours de route casse ce lien : **on ne renomme jamais une ad active**.

---

## 13. Le plan du media buyer, et comment faire marcher le plan retenu

### 13.1 Le plan retenu (Yasser, 10 nov.)

**30 créas** (natives, statiques, VSL…) · **150 €/jour pendant 5 jours** (750 €) · **une CBO, 2 ensembles** (3 au maximum) : **A = images** (10 natives + 10 statiques), **B = vidéos** (10 VSL à J0). Décision prise : ce qui suit sert à la faire marcher.

### 13.2 Avis point par point sur les conseils du media buyer

| Conseil | Avis | Pourquoi |
|---|---|---|
| 25-30 créas | ✅ Décidé | Marche si les 30 créas couvrent **≥ 15 concepts vraiment différents** (§1.4) : Meta regroupe les ads qui se ressemblent [S6] |
| CBO à 150 €/jour | ✅ D'accord | Consolider est la consigne de Meta pour un petit budget [S18] |
| 2 ensembles, « séparer ne change pas la perf, ça sert à lire la data » | 🟠 Nuance | La séparation **change la répartition du budget** : dans une CBO, l'ensemble vidéos peut être affamé par l'ensemble images. D'où le minimum du §13.6. La lecture par format se fait aussi par le nom des ads (§12) |
| Mix 5 natives / 5 VSL / 5 statiques par tranche de 15 | ✅ D'accord | Conforme à « diversifier texte, image, vidéo » [S6]. Pour 30 : 10 / 10 / 10 |
| 70 % bas de funnel / 30 % haut | ✅ Avec une nuance | Les créas d'éducation se jugent sur CTR et coût par ajout panier, pas sur l'achat à J+5 (attribution à 7 jours, CTC : ne pas couper le haut de funnel trop tôt [S13]) |
| VSL variés (cartoon, chanson, éducatif 3-4 min, UGC) | ✅ D'accord | Autre storyline et autre visuel = autre créa pour Meta [S6]. L'UGC attend l'échantillon et une créatrice qui utilise vraiment le produit [S53] |
| Au scaling, 80 % scaling / 20 % test | 🟠 Nuance | À 150 €/jour, 20 % = 30 €/jour : trop peu pour juger plus de 5 créas en 5 jours. **70/30 jusqu'à 300 €/jour**, puis 80/20 |
| Tests dans une nouvelle CBO | ✅ D'accord | Lecture propre, les gagnantes ne sont pas dérangées ; Meta demande de grouper les modifications [S18] |
| Gagnantes déplacées par post ID | ✅ Avec une nuance | Le post ID garde la preuve sociale ; la performance ne suit pas forcément (doc Meta contre test de Loomer, §5.4). Déplacer **en un lot, une fois par semaine** |

### 13.3 Le risque, chiffré une fois

Juger une créa sur la vente demande **57 €** (2× CPA BE) [I1] : 30 créas × 57 € = **1 710 €, soit 2,3× les 750 € du test**. Le test 1 jugera donc **au plus 13 créas sur la vente**, moins en pratique car la CBO concentre la dépense (les gagnantes captent 23 % à 55 % de la dépense selon la taille du compte [S14]). Il en jugera davantage sur le hook et l'intérêt, et laissera les autres **non testées**. Attendu : **19 à 27 achats** (750 € à 28-40 € de CPA) et, au taux observé par Motion (~5 %), **1 à 2 gagnantes** [S14]. C'est accepté : la règle « non testée » (§13.5) évite de jeter ce que le système n'a pas montré.

### 13.4 Les seuils posés avant le lancement, par palier de dépense de chaque créa

| Dépense de la créa (cumulée) | Images (ensemble A) | Vidéos (ensemble B) | Décision |
|---|---|---|---|
| **< 15 €** | — | — | Aucune lecture |
| **15-28 €** | CTR lien < 0,8 % **et** CPC lien > 1,30 € | Hook rate < 25 % **et** CTR lien < 0,8 % | Drapeau **« hook raté »** (pas de coupe) |
| | CTR lien ≥ 1,5 % | Hook rate ≥ 30 % et CTR lien ≥ 1,5 % | Drapeau **« hook fort »** |
| **28-57 €** (1-2× BE) | 0 ajout panier et CTR lien < 0,8 % | idem | **Couper** [I1] |
| | Coût par ajout panier > 14 € | idem ; hold < 15 % = problème de corps | Orange : laisser courir jusqu'à 57 € |
| **57-85 €** (2-3× BE) | 0 achat | 0 achat | **Couper** [I1] |
| **≥ 85 €** (3× BE) | CPA > 42 € | CPA > 42 € | **Couper** [I1] |
| N'importe quel palier | ≥ 2 achats, CPA ≤ 28 € | idem | **Garder**, ne pas toucher |
| N'importe quel palier | ≥ 3 achats, CPA ≤ 20 € | idem | **Gagnante** (§5.3) |

Seuils de CTR, CPC, hook et coût par ajout panier : §4.4 (HYPOTHÈSES dérivées du CPA BE, à recaler sur nos médianes après le test). Coût par ajout panier recalé dès 10 ajouts sur le compte. Avec TVA confirmée : seuils en € ÷ 1,21.

### 13.5 La règle « non testée »

| À J+5 | Statut | Où elle va |
|---|---|---|
| < 15 € dépensés, 0 achat | ⚪ **Non testée** | CBO de test suivante, **telle quelle** |
| 15-28 €, 0 achat, sans drapeau « hook raté » | ⚪ **Non testée** | CBO de test suivante, telle quelle, **en priorité si « hook fort »** |
| 15-28 €, 0 achat, drapeau « hook raté » | ⚪↺ **Hook à refaire** | CBO suivante **avec un nouveau 1er visuel** (le corps est gardé) |
| < 28 €, ≥ 1 achat | 🟠 **À confirmer** | CBO suivante en priorité |

Une créa non testée n'est **jamais** comptée comme perdante, et son angle n'est jamais abandonné sur la foi du test 1 (INFÉRENCE : le système ne l'a pas montrée, il n'a pas jugé sa vente).

### 13.6 Les limites de dépense par ensemble

| Ensemble | Minimum | Maximum | Pourquoi |
|---|---|---|---|
| **B — vidéos** | **45 €/jour** (30 % du budget, la part des vidéos dans les 30 créas) | Aucun | Les vidéos coûtent le plus à produire ; sans plancher, la CBO peut les laisser à 0. 45 € × 5 jours = 225 € : de quoi amener ~8 vidéos au palier de 28 € |
| **A — images** | Aucun | Aucun | Elles recevront la dépense si elles convertissent ; un maximum briderait une gagnante |

- Le minimum est un objectif « best effort », pas une garantie, et Meta conseille de s'en servir peu [S23]. Ici, il sert une lecture de test, pas le scaling : on l'accepte.
- **À J+3** (le seul passage de modifications) : si toutes les vidéos sont au rouge (hook < 25 % et CTR < 0,8 %) et qu'aucune vidéo produit n'arrive, **on retire le minimum**. Sinon, on le garde jusqu'à J+5.

### 13.7 Deux ou trois ensembles : recommandation

**Deux, pas trois.** Arguments :
1. La formule de Meta donne **0,74 ensemble soutenable** à ce budget [S18] : chaque ensemble en plus divise ~20-27 achats en morceaux plus petits.
2. Le seul candidat pour un 3e ensemble, ce sont les **vidéos produit** de l'échantillon. Si elles arrivent à J+3, un 3e ensemble ne leur laisse que 2 jours : elles finiraient quasi toutes « non testées ».
3. Donc : vidéos produit prêtes **avant J+2** → elles entrent dans l'ensemble B en un lot, via l'outil « Creative testing » si le compte l'a (budget dédié aux ads testées [S24]), sinon en remplacement des VSL coupées. Prêtes **après J+2** → elles ouvrent la CBO de test 2, avec 5 jours pleins.

### 13.8 Ce qu'on fait à J+5 (17 nov. si lancement le 12)

1. **Export** au niveau ad, attribution 7 jours clic, + commandes Shopify rattachées par `utm_content` (§9, §12).
2. **Classement des 30 créas** : 🏆 gagnante · 🟢 à garder · 🟠 à confirmer · 🔴 perdante · ⚪ non testée · ⚪↺ hook à refaire (tableaux §13.4 et §13.5).
3. **Lecture du compte** : MER Shopify sur 5 jours contre 2,14 (2,59 si TVA).
4. **Décisions** :

| Situation à J+5 | Ce qu'on fait |
|---|---|
| ≥ 1 gagnante ou à garder | La CBO du test 1 **devient la CBO de scaling** : on y garde gagnantes et « à garder », on met en pause tout le reste. Rien n'est déplacé, l'historique de diffusion reste. Budget 105 €/jour (70 %). **CBO de test 2** à 45 €/jour (30 %) : 3 itérations par gagnante + vidéos produit + les « à confirmer » + les non testées marquées « hook fort », dans la limite de ce que 225 € peuvent juger (~8 créas au palier de 28 €) |
| 0 gagnante, mais des « à confirmer » et un MER ≥ 1 | Test 2 à 150 €/jour, même structure, avec les « à confirmer », les non testées « hook fort » et les vidéos produit |
| 0 achat ou MER < 1 | **Stop.** Diagnostic §4.5 (fiche, offre, paiement, tracking) avant de remettre un euro |

5. **J+7 (19 nov.)** : relecture pour les achats attribués en retard. Elle peut faire monter une créa, jamais en couper une de plus.
6. Les gagnantes des tests suivants rejoignent la CBO de scaling **par post ID, en un lot par semaine** (§5.4).

---

## 14. Quinze questions pièges de media buyer

**1. La CBO met 90 % du budget sur une ad dont le CPA est 2× la cible (40 €). Que fais-tu ?**
40 € est au-dessus du CPA BE (28 €) : elle perd de l'argent. Mais on applique le seuil, pas l'humeur : sous 85 € de dépense, on la laisse courir (sauf 0 achat à 57 €) ; au-delà de 85 € avec CPA > 42 €, on coupe (§13.4). Avant de couper, vérifier les achats Shopify (attribution en retard [S31]). Couper la seule ad qui dépense redistribue le budget vers des ads que le système juge moins bonnes : c'est voulu, et c'est le moment d'avoir des créas en attente.

**2. On n'aura jamais 50 achats par semaine. On optimise sur l'ajout au panier ?**
Non. La formule de Meta [S18] dit que même un seul ensemble resterait en « apprentissage limité » ; optimiser sur l'ajout panier apprendrait à trouver des gens qui ajoutent sans acheter. On optimise sur l'achat et on juge les créas sur nos seuils (§2.4, INFÉRENCE).

**3. Une ad n'a rien dépensé en 2 jours. Je la duplique dans un nouvel ensemble ?**
Non. Une copie identique est la même créa pour Meta [S6] et un ensemble de plus fragmente. Elle reste, et à J+5 elle suit la règle « non testée » (§13.5).

**4. Meta annonce 10 achats, Shopify en compte 6. Qui a raison ?**
Shopify, pour l'argent. Meta compte aussi la vue à 1 jour et l'« engage-through » [S31]. On compare sur « 7 jours clic » ; si l'écart dépasse 20 %, on contrôle le tracking (§9).

**5. Le CPM passe de 15 $ à 28 $ le 24 nov. Le compte est cassé ?**
Non : c'est la saison (BFCM 2025 ≈ 22 $ contre 15 $ sur l'année, et les prix Meta US sont à +23 % sur un an [S25][S26][S27]). On juge le CPA et le MER, pas le CPM, et on ne lance pas de test cette semaine-là (§10).

**6. Le certificat de l'usine dit « 99 % ». Je peux l'écrire ?**
Pas avant de l'avoir lu : porte-t-il sur ce produit fini, à température de douche, à quel débit, par quel labo ? Une étude d'ingrédient ne prouve pas le produit fini [S35] ; la référence du secteur est NSF/ANSI 177 [S38]. Même prouvé : « up to », avec les conditions en note.

**7. Une créa gagne. Je double le budget pour attraper le BFCM ?**
Non. +20 % tous les 3 jours (HYPOTHÈSE), ou une nouvelle CBO de scaling avec la créa par post ID. Un doublement brutal est une modification importante qui peut relancer l'apprentissage, au pire moment.

**8. « Struggling with dry, itchy skin? » est mon meilleur hook. Je le garde ?**
Non : attribut personnel de santé, refus probable [S33], et allégation santé implicite côté FTC [S35]. Réécrire sans « you have » et sans état de santé : « That pool smell in your shower has a name. »

**9. Je peux montrer des cheveux avant / après ?**
Non. Meta tolère l'avant/après cosmétique sans perception négative de soi [S34], mais la FTC exige de prouver que le filtre a produit l'effet et qu'il est représentatif [S35][S53]. On n'a ni l'un ni l'autre. La cartouche neuve contre usée, oui, si elle est réelle (§11).

**10. Deux ads : même vidéo, sous-titres différents. Test utile ?**
Non dans la CBO : c'est la même créa pour Meta [S9]. Pour tester des sous-titres, l'outil A/B ou l'outil de test créa, plus tard.

**11. Mon ensemble est en « apprentissage limité » à J+2. J'augmente le budget ?**
Non. C'était prévu (0,74 ensemble soutenable [S18]). Le statut est une étiquette ; Loomer en parle comme telle [S17]. On ne touche à rien avant le passage de J+3.

**12. On n'a aucun avis. On importe ceux d'AliExpress pour le même produit ?**
Non. Ce ne sont pas des clients de Plush : faux avis au sens de la règle FTC, jusqu'à 53 088 $ par infraction [S37]. Même chose pour les notes affichées sur la fiche sans aucune vente (§8.4).

**13. Je mets un acteur dans un « micro-trottoir » pour faire vrai ?**
Seulement en le disant clairement : des personnes présentées comme de vrais consommateurs doivent l'être [S53].

**14. Le compte refuse de dépenser plus de X € par jour le jour du lancement.**
Probable limite de dépense quotidienne d'un compte neuf, fixée par Meta et relevée avec l'historique [S48]. À vérifier dans Facturation **avant** le lancement ; ne pas lancer 30 créas sur un compte plafonné sous 150 €.

**15. J'exclus l'Audience Network pour « faire propre » ?**
Pas au test 1 : une exclusion de placement fait perdre le statut Advantage+ [S20], et rien ne prouve encore que ce placement est mauvais pour Plush. On lit la ventilation par placement à J+5 et on décide sur données.

---

## 15. Où une formation vidéo aiderait (précis)

Les 3 formations déjà transcrites (« FB Ads 2021 » et suivantes, `formations/`) datent d'avant Andromeda : utiles pour la créa et la copy, **périmées pour la structure de compte**. Ce qui manque, par ordre d'utilité pour le test du 12 nov. :

| # | Sujet | Pourquoi une vidéo plutôt qu'un texte |
|---|---|---|
| 1 | **Ads Manager 2026 en direct** : créer une CBO Advantage+ à 2 ensembles, poser un minimum de dépense par ensemble, utiliser l'outil « Creative testing », « Utiliser une publication existante » (post ID) | L'interface change tous les trimestres ; les menus exacts ne sont pas dans les sources lues |
| 2 | **Events Manager** : outil de test d'événements, lecture du dédoublonnage navigateur/serveur, note EMQ, réglages Shopify « Maximum » et « Always on » | Vérification visuelle, écran par écran |
| 3 | **Lire le score « Creative diversity »** et les « Top creative themes » sur un vrai compte | Indicateur récent (août 2026), peu documenté [S8] |
| 4 | **Fabriquer des statiques natives** (note iPhone, SMS, comparatif) dans Canva ou Figma, avec zones sûres 4:5 et 9:16 | Savoir-faire de production |
| 5 | **Monter un VSL sans produit** (animation, voix off, texte animé) et une chanson courte dans CapCut | Les 10 vidéos de J0 se font sans échantillon |
| 6 | **Analyser un export Ads Manager par le nom des ads** (tableau croisé Sheets) | Geste à reproduire chaque J+5 |
| 7 | **Refus Meta et appels** sur des cas réels de santé et d'attributs personnels | Les refus se jugent sur l'ad entière, pas sur une liste de mots [S33] |
| 8 | **Media buying Q4 à petit budget**, contenu 2025-2026 uniquement | Aucun benchmark de courbe de CPM jour par jour trouvé dans les sources |
| 9 | **Shopify** : upsell après achat et abonnement (Shopify Subscriptions), avec les mentions ROSCA | Réglages et écrans de paiement |

---

## 16. Sources

Accès : « lu » = page ouverte et lue ; « via recherche » = contenu vu dans les résultats du moteur de recherche (page bloquée ou non ouverte) : à relire avant de citer à l'extérieur. Dates d'accès : 9-10 nov. 2026.

### Meta (officiel)
- **[S1]** Meta Engineering, « Meta Andromeda: Supercharging Advantage+ automation… », 2 déc. 2024 — https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/ — lu le 9 nov.
- **[S2]** Meta Engineering, « Meta's Generative Ads Model (GEM)… », 10 nov. 2025 — https://engineering.fb.com/2025/11/10/ml-applications/metas-generative-ads-model-gem-the-central-brain-accelerating-ads-recommendation-ai-innovation/ — lu le 9 nov.
- **[S3]** Meta Engineering, articles GEM 2026 : https://engineering.fb.com/2026/08/03/ml-applications/training-gem-at-llm-scale-meta-ads-recommendation-foundation-model/ (3 août) · https://engineering.fb.com/2026/08/05/ml-applications/from-user-sequences-to-scaling-laws-a-multi-stage-architecture-for-metas-ads-ranking/ (5 août) · https://engineering.fb.com/2026/10/13/ml-applications/metas-generative-ads-model-gem-scaling-the-central-model-and-compute-engine-for-frontier-ads-ai (13 oct.) — via recherche, 9 nov.
- **[S4]** Meta AI, Lattice, 11 mai 2023 — https://ai.meta.com/blog/ai-ads-performance-efficiency-meta-lattice/ · arXiv 2512.09200 (déc. 2025) — https://arxiv.org/abs/2512.09200 — via recherche, 9 nov.
- **[S6]** Meta for Business, « Demystifying Creative Diversification », 16 déc. 2025 — https://www.facebook.com/business/news/demystifying-creative-diversification — lu le 10 nov.
- **[S20]** Annonce Meta du 8 oct. 2025 (structure Advantage+), rapportée par ppc.land le 26 oct. 2025 — https://ppc.land/meta-deprecates-legacy-campaign-apis-for-advantage-structure/ — lu le 10 nov.
- **[S23]** Meta Marketing API, Advantage campaign budget (limites par ensemble « best effort ») — https://developers.facebook.com/docs/marketing-api/bidding/guides/advantage-campaign-budget ; Jon Loomer, « Change to Ad Set Spending Limits » — https://www.jonloomer.com/qvt/ad-set-spending-limits-change/ — via recherche, 10 nov.
- **[S30]** Meta for Developers, « Deduplicate Pixel and Server Events » — https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events — lu le 10 nov.
- **[S33]** Meta Transparency Center, « Privacy violations and personal attributes » — https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/ — lu le 10 nov.
- **[S34]** Meta Transparency Center, « Health and wellness » (version du 23 juil. 2026) — https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness — lu le 10 nov.
- Centre d'aide Meta (« About the learning phase », « Creative diversity ») : pages non lisibles depuis l'environnement ; leur contenu est cité via [S7], [S16], [S19].

### Presse spécialisée et analyses
- **[S5]** ppc.land, page Andromeda (citation de Susan Li, 29 juil. 2026) — https://ppc.land/andromeda/ — via recherche, 9 nov. (transcription à vérifier)
- **[S7]** Novoads, « Creative Diversity in Meta Ads… », 17 sept. 2026, MAJ 25 oct. — https://novoads.ai/en/blog/creative-diversity-meta-ads — lu le 10 nov. (cite le Centre d'aide : https://www.facebook.com/business/help/2371176336684086)
- **[S8]** Common Thread Collective, « Meta's New Creative Diversity Score Is Live in Ads Manager », 9 sept. 2026 — https://commonthreadco.com/blogs/coachs-corner/metas-new-creative-diversity-score-is-live-in-ads-manager-what-ecommerce-brands-must-act-on-now — lu le 9 nov.
- **[S9]** Marketing Brew, 28 sept. 2026 — https://www.marketingbrew.com/stories/meta-ad-creative-diversification-best-practices-advertiser-approach — lu le 10 nov.
- **[S10]** Relevant Audience, résumé de [S9], 29 sept. 2026 — https://www.relevantaudience.com/meta/meta-ad-creative-diversification-same-hook-same-ad/ — lu le 9 nov. (non cité dans le texte)
- **[S11]** DataAlly, « Meta's Creative Entity ID… », 12 oct. 2025 — https://www.dataally.ai/blog/metas-creative-entity-id-why-creative-diversification-is-essential — lu le 10 nov.
- **[S12]** Praticiens sur l'Entity ID et les seuils de similarité : https://www.silverbackstrategies.com/blog/creative-is-the-new-targeting-how-to-master-entity-ids-and-unlock-scale/ · https://nikhil.pro/meta-ads-creative-similarity-explained/ · https://www.recharm.com/blog/what-is-andromeda-and-creative-similarity — via recherche, 9 nov.
- **[S13]** Common Thread Collective, « Meta Andromeda Killed Your ROAS… », 6 mai 2026 — https://commonthreadco.com/blogs/coachs-corner/meta-andromeda-roas-creative-strategy-2026 — lu le 10 nov.
- **[S14]** Motion, « Creative Benchmarks 2026 » (page redirigée vers runneth.com) — https://runneth.com/library/research/creative-benchmarks-2026/ — lu le 10 nov.
- **[S18]** ppc.land, 25 oct. 2026, sur le guide Meta « Peak Season 2026 » du 21 oct. 2026 — https://ppc.land/meta-says-ad-sets-under-50-weekly-conversions-cost-28-more-per-purchase/ — lu le 10 nov.
- **[S19]** ppc.land, explainer « learning phase » — https://ppc.land/learning-phase/ ; Jon Loomer, « Is the Learning Phase Changing? » — https://www.jonloomer.com/qvt/is-the-learning-phase-changing/ — via recherche, 10 nov.
- **[S21]** adlibrary.com, « Advantage+ Ate Manual Campaigns. The Toggles Still Matter », 20 sept. 2026 — https://adlibrary.com/posts/advantage-plus-sales-campaigns-2026 — lu le 10 nov.
- **[S25]** Triple Whale, « Facebook Ad Benchmarks by Industry (Updated 2026 Data) » — https://www.triplewhale.com/blog/facebook-ads-benchmarks — via recherche (403 en direct), 10 nov.
- **[S26]** AdAdvisor, citant Triple Whale BFCM 2025 — https://adadvisor.ai/blog/black-friday-meta-ads-profit-nova ; https://www.triplewhale.com/bfcm-2025 — via recherche, 10 nov.
- **[S27]** Relevant Audience, résultats Meta T3 2026 (21 oct. 2026) — https://www.relevantaudience.com/meta/meta-q3-2026-ad-price-impressions-asia-pacific/ — lu le 10 nov.
- **[S28]** Hook rate : https://hawky.ai/blog/ad-creative-metrics (attribué à Motion) · https://taylorsicard.com/blog/meta-ads-creative-benchmarks-2026 (juil. 2026) — via recherche, 10 nov. (non vérifiés)
- **[S31]** ppc.land, « Meta rewrites click attribution rules… », 4 mars 2026 (annonce Meta du 3 mars) — https://ppc.land/meta-rewrites-click-attribution-rules-finally-aligning-with-google-analytics/ — lu le 10 nov. ; Jon Loomer, « How Meta Ads Attribution Works in 2026 » — https://www.jonloomer.com/meta-ads-attribution-2026/ — via recherche
- **[S32]** Digiday, restrictions santé et bien-être (nov. 2024) — https://digiday.com/marketing/as-health-and-wellness-brands-brace-for-ad-restrictions-on-meta-marketers-and-advertisers-seek-more-transparency ; Haus — https://www.haus.io/blog/meta-announces-new-health-wellness-conversion-restrictions — via recherche, 10 nov.
- **[S47]** Zones sûres et ratios : https://billo.app/blog/meta-ads-safe-zones · https://blog.adnabu.com/meta-ads/meta-safe-zones/ — via recherche, 10 nov. (secondaires)

### Praticiens
- **[S15]** Jon Loomer, Pubcast « You're Overthinking Your Ad Setup », 10 déc. 2025 — https://pubcast.jonloomer.com/youre-overthinking-your-ad-setup/ — lu le 10 nov.
- **[S16]** Vaizle, « Meta Might Have Quietly Changed How the Learning Phase Works » (test de Loomer), 29 sept. 2025 — https://insights.vaizle.com/news/meta-might-have-quietly-changed-how-the-learning-phase-works — lu le 10 nov.
- **[S17]** Jon Loomer, Pubcast « The Learning Phase Is Just a Label », 15 oct. 2025 — https://pubcast.jonloomer.com/the-learning-phase-is-just-a-label/ — via recherche (429 en direct)
- **[S22]** Jon Loomer, « Ad Set Budget Sharing » — https://www.jonloomer.com/qvt/ad-set-budget-sharing/ ; https://theoptimizer.io/blog/meta-ads-ad-set-budget-sharing-what-it-is-when-to-use-it-and-when-to-turn-it-off — via recherche, 10 nov.
- **[S24]** Jon Loomer, « Meta's Creative Testing Tool » — https://www.jonloomer.com/meta-creative-testing/ ; « Is Meta Expanding Creative Testing to 10 Ads? » — https://www.jonloomer.com/qvt/meta-expanding-creative-testing-10-ads/ — via recherche, 10 nov.
- **[S46]** Barry Hott, « Ugly ads perform best, marketer says » — https://www.practicalecommerce.com/ugly-ads-perform-best-marketer-says ; https://motionapp.com/library/expert/barry-hott/ — via recherche, 10 nov. (date de l'entretien non relevée)
- **[S48]** Jon Loomer, glossaire « Daily Spending Limit » — https://www.jonloomer.com/glossary/daily-spending-limit/ — via recherche, 10 nov.
- **[S49]** Jon Loomer, « Number of Ads Per Ad Set » (plafond de 50) — https://www.jonloomer.com/qvt/number-of-ads-per-ad-set/ — via recherche, 10 nov.
- **[S50]** Jon Loomer, Pubcast « Stop Blaming Andromeda for Your Results » (3 déc. 2025) — https://pubcast.jonloomer.com/stop-blaming-andromeda-for-your-results/ ; « Creative Diversification Is the New Targeting » (3 sept. 2025) — https://pubcast.jonloomer.com/creative-diversification-is-the-new-targeting/ — via recherche
- **[S51]** Andrew Foxwell, Scalability School, « How To Test Creative on Meta In 2026 », 26 févr. 2026 — via recherche (épisode non écouté, non cité dans le texte)

### Fondamentaux copy et offre
- **[S43]** Eugene Schwartz, *Breakthrough Advertising* (1966) ; résumé : https://selzee.com/eugene-schwartz-5-levels-of-awareness — via recherche, 10 nov.
- **[S44]** Stefan Georgi, RMBC — https://www.stefanpaulgeorgi.com/blog/a-copywriting-breakthrough-this-morning/ ; https://thecopywriterclub.com/sales-letters-stefan-georgi — via recherche, 10 nov.
- **[S45]** Alex Hormozi, *$100M Offers* (2021) ; résumé : https://www.supersummary.com/100m-offers/section-3-summary/ — via recherche, 10 nov.

### Conformité US
- **[S35]** FTC, « Health Products Compliance Guidance » (déc. 2022) — https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance — lu le 10 nov.
- **[S36]** FTC, Policy Statement Regarding Advertising Substantiation — https://www.ftc.gov/sites/default/files/attachments/training-materials/policy_substantiation.pdf — via recherche, 10 nov.
- **[S37]** FTC, Rule on the Use of Consumer Reviews and Testimonials (16 CFR 465), amende maximale 53 088 $ : Venable, déc. 2025 — https://www.venable.com/insights/publications/2025/12/ftc-signals-heightened-enforcement-of-new ; KJK, 6 août 2026 — https://kjk.com/2026/08/06/ftc-consumer-review-rule-enforcement-what-businesses-need-to-know/ — via recherche, 10 nov.
- **[S38]** NSF/ANSI 177 : liste des produits certifiés — https://info.nsf.org/Certified/DWTU/listings.asp?Standard=177 ; WWD, 12 oct. 2004 — https://www.wwdmag.com/home/news/10909106/new-nsf-american-national-standard-verifies-shower-filtration-product-claims — via recherche, 10 nov.
- **[S39]** 16 CFR 233.1, prix de référence (LII) — https://www.law.cornell.edu/cfr/text/16/233.1 — lu le 10 nov.
- **[S40]** FTC, « Business Guide to the FTC's Mail, Internet, or Telephone Order Merchandise Rule » — https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule — lu le 10 nov.
- **[S41]** Cooley, 11 juil. 2025, annulation de la règle « click-to-cancel » (8e circuit, 8 juil. 2025) — https://www.cooley.com/news/insight/2025/2025-07-11-click-to-cancel-just-got-cancelled-eighth-circuit-vacates-entirety-of-ftcs-negative-option-rule — via recherche, 10 nov.
- **[S42]** EPA, rapports annuels de qualité de l'eau (CCR, avant le 1er juillet) — https://www.epa.gov/sites/default/files/2018-02/documents/epa-ogwdw-ccr-infographic-v5_508.pdf ; CDC — https://www.cdc.gov/drinking-water/about/how-to-read-drinking-water-quality-reports.html — via recherche, 10 nov. (plafond de chlore de 4 mg/L : à vérifier dans 40 CFR 141.65)
- **[S53]** 16 CFR 255.2, guides FTC sur les recommandations (LII) — https://www.law.cornell.edu/cfr/text/16/255.2 — lu le 10 nov.

### Shopify
- **[S29]** Shopify Changelog, « New default setting for pixel data sharing », 13 janv. 2026 — https://changelog.shopify.com/posts/new-default-setting-for-pixel-data-sharing — lu le 10 nov.
- **[S52]** Tarifs Shopify Payments Belgique et frais de conversion — https://www.shopify.com/be-en/pricing · https://help.shopify.com/en/manual/international/pricing/fees — lus par la Phase 1 le 10 nov.

### Sources internes
- **[I1]** `../01_produit/audit-produit-offre.md` (Phase 1, 10 nov. 2026) : CPA BE, ROAS BE, CPA cible, seuils en €, LTV, incohérences de la fiche.
- **[I2]** `../../CLAUDE.md` (mémoire du projet) et `../../research/trendtrack-export/ads-final-4oct.md` : relevé de 294 créas concurrentes du 4 oct. 2026, avatar Megan.
- **[I3]** `../PLAN.md` : réponses de Yasser du 9 nov. (budget, échantillon, certificat, avis).
