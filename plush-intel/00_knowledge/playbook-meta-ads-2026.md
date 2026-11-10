# Playbook Meta Ads 2026 — Plush

> Version du 9 novembre 2026 · Phase 0 de la mission `plush-intel` · rédigé en cours de recherche (sections complétées au fur et à mesure).
> Marque : Plush, pommeau de douche filtrant, myplush.us, marché US uniquement, compte Meta neuf (0 pub lancée).
> Statuts : **FAIT** (source + date d'accès) · **INFÉRENCE** (dit comment on la déduit) · **HYPOTHÈSE** (à valider en ads).
> Chiffres Plush (Phase 1, `../01_produit/audit-produit-offre.md`, 10 nov.) : AOV **70,49 $** (mix 70 % Duo / 30 % Solo) · frais cartes US **4,9 % + 0,25 €** · CPA de break-even (BE) **32,90 $ ≈ 28 €** · ROAS BE **2,14** · CPA cible **23 $ ≈ 20 €** · LTV 90 jours ≈ 1re commande. Si Meta facture la TVA belge (21 %, non confirmé) : CPA BE lu dans Ads Manager **≈ 27 $ ≈ 23 €**.
> Budget du test : **150 €/jour × 5-6 jours = 750-900 €** (≈ 174 $/jour, 1 € = 1,16 $). Compte pub neuf, 0 pub lancée, pixel installé. Échantillon pas reçu : pas de vidéo produit avant quelques jours.
> Sources : identifiants [S1]…[S52] et [I1]…[I3], détaillés au §16.

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
| 1 | **Une campagne Ventes Advantage+, 1 ensemble (2 au maximum)**, optimisation Achat, enchère « plus haut volume », US, audience large | Formule Meta : budget hebdo ÷ (CPA × 50) = 1 218 $ ÷ (32,90 × 50) = **0,74 ensemble**. Même un seul ensemble ne sortira pas d'apprentissage | FAIT (formule [S18]) + INFÉRENCE |
| 2 | **Le budget fixe le nombre de créas, pas l'inverse** | Juger une créa sur l'achat = 2× CPA BE = **57 €**. 750-900 € → **13 à 15 créas jugeables au maximum**, à dépense égale. Vague 1 = **12-14 ads** | INFÉRENCE [I1] |
| 3 | **Compter les concepts, pas les fichiers.** Deux ads qui ont la même image ou la même 1re seconde = une seule créa pour Meta | Vague 1 : **10-12 concepts**, chacun différent des autres sur ≥ 2 dimensions (angle, persona, format, décor/créateur, niveau de conscience) | FAIT [S6] + INFÉRENCE |
| 4 | **Lire le score « Creative diversity » 24 h après le lancement** : viser « High ». Si « Low », remplacer les quasi-doublons, ne pas en ajouter | Ads Manager, par ensemble | FAIT (l'indicateur existe [S7][S8]) · HYPOTHÈSE (effet sur les résultats) |
| 5 | **72 h sans toucher** après un lancement ou un ajout. Modifications groupées en un seul passage tous les 3-4 jours | J+0, J+3, J+6 | FAIT (Meta recommande de grouper [S18]) + HYPOTHÈSE (72 h) |
| 6 | **Couper sans discuter** aux seuils posés avant | 28 € dépensés + 0 ajout panier + CTR lien < 0,8 % · 57 € + 0 achat · 85 € + CPA > 42 € | INFÉRENCE [I1] |
| 7 | **Un gagnant = ≥ 3 achats à CPA ≤ 20 €.** On l'itère tout de suite en 3 variantes (hook, format, persona) | Fatigue attendue en 2-4 semaines | FAIT (fatigue [S13]) + INFÉRENCE |
| 8 | **Scaler par paliers de +20 % tous les 3 jours** si le CPA sur 3 jours glissants ≤ CPA BE. Jamais de doublement | 150 → 180 → 216 €/jour | HYPOTHÈSE (heuristique de praticiens, aucune doc Meta) |
| 9 | **La rentabilité se lit dans Shopify** : MER = CA Shopify ÷ dépense Meta | MER BE = **2,14** (2,59 si TVA 21 % facturée) | INFÉRENCE [I1] |
| 10 | **Tracking vérifié avant le 1er euro** : partage « Maximum » (API Conversions), pixel d'app en **« Always on »** (pas « Optimized »), achat test, dédoublonnage | Shopify peut suspendre un pixel sans signal depuis des jours, or le nôtre n'a jamais reçu de clic pub | FAIT [S29][S30] + INFÉRENCE |
| 11 | **Juger sur « 7 jours clic »**, recouper avec les commandes Shopify via `utm_content={{ad.name}}` | Défaut Meta 2026 : 7 j clic / 1 j engage-through / 1 j vue | FAIT [S31] |
| 12 | **Aucune allégation non prouvée** : aucun % de chlore tant que le certificat usine n'est pas lu · jamais « soft water », « adoucit », « anti-calcaire » (le produit n'adoucit pas) · aucun résultat sur la peau ou les cheveux · aucune question sur un attribut personnel | « Do you have eczema? » = refus Meta + risque FTC | FAIT [S33][S34][S35] + [I1] |
| 13 | **Zéro faux avis, fausse capture, faux tweet, faux « #1 », faux expert** | Jusqu'à **53 088 $ par infraction** (16 CFR 465) | FAIT [S37] |
| 14 | **Prix barrés** : 115 $ et 144,02 $ ne sont défendables que s'ils ont été réellement pratiqués, ouvertement et de bonne foi | Sinon « prix de référence fictif » (16 CFR 233.1). Ne pas les mettre dans une pub tant que ce n'est pas réglé | FAIT [S39] + INFÉRENCE |
| 15 | **70 % de créas « produit / offre », 30 % d'éducation.** L'éducation se juge sur CTR et coût par ajout panier, pas sur l'achat à J+5 | Vague 1 : ~9 offre/produit, ~4 éducation | INFÉRENCE |
| 16 | **Statiques et natives d'abord, vidéos produit en vague 2**, ajoutées via l'outil « Creative testing » de Meta (budget dédié) pour qu'elles reçoivent de la dépense | 5 à 10 ads par test selon le compte | FAIT [S24] + INFÉRENCE |
| 17 | **Une créa = une page** : le 1er écran de la landing répète la promesse et le visuel du hook | PDP pour les créas offre ; advertorial seulement si une créa d'éducation gagne | INFÉRENCE |
| 18 | **Pas de test pendant la semaine du BFCM** : tester du 11 au ~20 nov., puis BFCM (27-30 nov.) avec les 3-5 meilleures créas et une offre en valeur ajoutée (cartouche offerte) plutôt qu'une remise | CPM BFCM 2025 ≈ 22,26 $ contre une médiane annuelle de 15,06 $ (≈ +48 %, estimation) | FAIT [S25][S26] + INFÉRENCE |
| 19 | **Date limite de Noël honnête** : « Order by Dec 7 » (pire cas 12 jours ouvrés). Après, plus d'angle « livré pour Noël » | La règle FTC exige une base raisonnable pour tout délai annoncé | FAIT [S40] + INFÉRENCE (date) |
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
- **Vague 1 (sans échantillon) : 10-12 concepts × 1 exécution chacun, + 2 doublons d'exécution max sur les 2 concepts les plus forts = 12-14 ads.** Pas 25-30 : le budget ne les jugera pas (§3, §13).
- **Vague 2 (échantillon reçu) : 5-8 vidéos** sur les angles qui ont reçu de la dépense en vague 1, plus 2-3 nouveaux concepts que seule la vidéo permet (installation chronométrée, test du seau, cartouche après 450 gallons [I1]).
- **Matrice des différences pour Plush** (une ligne = un concept, chaque ligne diffère des autres sur ≥ 2 colonnes) :

| Concept | Angle | Persona | Niveau de conscience | Format vague 1 |
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

### 1.5 Débats

| Sujet | Position A | Position B | Notre lecture |
|---|---|---|---|
| Volume de créas | 25-50 ads par ensemble, le système trie (agences, conseil du media buyer de Yasser) | Loomer doute que 25-50 ads aident les petits annonceurs : commencer par 1-2, monter vers 20-30 « but you are not doing it all at once » [S15] ; CTC : **8-12 nouvelles créas distinctes par mois sous 10 k$/mois** [S13] | Plush est sous 10 k$/mois : 12-14 ads en vague 1, puis 4-6 par semaine |
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
| Achats attendus sur le test (870-1 044 $) | à 23 $ : 38-45 · à 32,90 $ : 26-32 · à 45 $ : 19-23 |

**Conclusion : 1 ensemble.** Un 2e ensemble divise des achats déjà trop rares. On lit les résultats par format grâce au nommage (§12), pas grâce aux ensembles.

### 2.3 CBO, ABO ou Advantage+ pour tester ?

| Option | Pour | Contre | Verdict Plush |
|---|---|---|---|
| **Advantage+ Ventes, budget campagne, 1 ensemble** | Consolidation maximale, c'est ce que Meta pousse [S18][S20] | Meta concentre la dépense sur 2-5 ads, les autres restent quasi à 0 (§3) | ✅ **Recommandé** |
| CBO, 2 ensembles (statiques / vidéos) | Lecture par format | Divise l'apprentissage ; le minimum par ensemble n'est pas garanti [S23] ; la lecture par format se fait déjà par le nom | 🟠 Seulement quand les vidéos existent, et avec ≥ 50 % du budget sur l'ensemble qui convertit |
| ABO, 3 ensembles × 50 € (une famille d'angles chacun) | Dépense forcée par famille, comparaison propre | 3 ensembles à ~1,5 achat/jour chacun : bruit maximal, 3× plus loin des 50 conversions | 🟠 Défendable seulement pour comparer 3 angles, pas 25 créas |
| **Outil « Creative testing » de Meta** dans l'ensemble principal | 5 ads (10 sur certains comptes) reçoivent une part de budget dédiée, enchère « plus haut volume » obligatoire | Accès variable selon les comptes | ✅ Pour la vague 2 (vidéos) [S24][S15] |

### 2.4 Réglages de l'ensemble (vague 1)

| Réglage | Valeur | Statut |
|---|---|---|
| Objectif | Ventes · événement **Purchase** | INFÉRENCE : avec 26-45 achats attendus, optimiser sur l'ajout panier achèterait des « ajouteurs » bon marché. Le plan du 25 sept. (optimiser sur l'ajout panier à 430 €) ne tient plus à 750-900 € |
| Enchère | Plus haut volume, sans coût cible ni plafond | INFÉRENCE : un coût cible sans historique bride la diffusion |
| Budget | 150 €/jour au niveau campagne | Plan Yasser |
| Audience | Advantage+, **États-Unis**. Suggestion facultative : femmes 25-54 (Megan) | HYPOTHÈSE : la suggestion n'est qu'un point de départ [S21] |
| Exclusions géographiques | Alaska, Hawaï, Porto Rico, Guam, adresses militaires **si le fournisseur ne livre pas** (question ouverte, `../../CLAUDE.md`, 19 oct.) | À vérifier : qu'une exclusion géographique garde le statut Advantage+ |
| Placements | Advantage+ (tous), avec visuels 4:5 et 9:16 | FAIT [S20] pour le statut |
| Attribution | Défaut : 7 j clic / 1 j engage-through / 1 j vue | FAIT [S31] |
| Nombre d'ads | 12-14 en vague 1, +5 en vague 2 via l'outil de test | INFÉRENCE |

### 2.5 Quand consolider

- **Tout de suite** : il n'y a rien à consolider, on part d'une seule campagne.
- **Plus tard** : CTC recommande de fusionner dès qu'on a plus de 3-4 campagnes et qu'aucune ne dépasse 20 conversions/semaine [S13]. Pour Plush : **jamais plus d'une campagne de scaling + une de test tant que la dépense reste sous ~300 €/jour** (INFÉRENCE de la formule [S18] : à 300 €/jour et 30 $ de CPA, 2 436 $ ÷ 1 500 $ ≈ 1,6 ensemble).

### 2.6 Débats

- **CBO ou ABO pour tester** : beaucoup de guides 2026 recommandent l'ABO pour tester et la CBO pour scaler (agences, sources secondaires citées en §16) ; Meta et CTC poussent la consolidation [S13][S18]. À 150 €/jour, l'argument de volume l'emporte : 1 ensemble.
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
- **5 % de gagnantes** : 25-30 créas donnent en espérance **1 à 1,5 gagnante**, 12-14 créas en donnent **0,6 à 0,7**. Ce qui augmente les chances, c'est la diversité des concepts, pas le nombre de fichiers [S6][S14].
- **Le vrai plafond est le budget** : 750-900 € ÷ 57 € = 13-15 créas jugeables à dépense égale [I1]. Or une CBO ne dépense pas également : en pratique, **4 à 7 ads recevront assez pour être jugées**.

### 3.3 La méthode (5 règles)

| # | Règle | Détail |
|---|---|---|
| 1 | **Vagues, pas tout d'un coup** | Vague 1 (J0) : 12-14 ads. Vague 2 (J+3 ou J+4, échantillon reçu) : 5 vidéos via l'outil de test. Les créas restantes passent au test suivant |
| 2 | **Regrouper par concept, jamais par variante** | 1 ad par concept en vague 1. Deux exécutions d'un même concept seulement si le visuel diffère vraiment |
| 3 | **Forcer la dépense par l'outil de test, pas par des ensembles** | L'outil réserve une part du budget aux 5 (ou 10) ads testées. Les limites minimum par ensemble ne sont pas garanties [S23] |
| 4 | **Ne pas couper avant le seuil** | Une ad qui a reçu 10 € n'a rien prouvé. Seuils §5 |
| 5 | **Relancer ce qui n'a pas dépensé, une fois** | Les 2-3 concepts de la vague 1 restés sous 10 € et jugés forts sur le papier repassent dans un test de l'outil, avec un nouveau 1er visuel. HYPOTHÈSE : un nouveau visuel change la prédiction |

### 3.4 À partir de quelle dépense juger une créa

| Ce qu'on juge | Dépense minimale (CPA BE = 28 €) | Indicateur |
|---|---|---|
| Le hook (statique : arrêt + clic ; vidéo : vues 3 s) | **~10-15 €** (≈ 700-1 000 impressions à 15-20 $ de CPM) | Hook rate, CTR lien |
| L'intérêt pour l'offre | **28 €** (1× CPA BE) | Coût par ajout panier, CTR lien |
| La vente | **57 €** (2× CPA BE) | Achats, CPA |
| Le gagnant | **85 €+** (3× CPA BE) | ≥ 3 achats à ≤ 20 € |

Statut : seuils en € = INFÉRENCE [I1] ; dépense pour juger un hook = HYPOTHÈSE (estimation : 1 000 impressions ÷ 1 000 × CPM de 15-20 $ ≈ 13-17 $).

### 3.5 Durée

- **Minimum 3 jours par vague** avant toute coupe sur l'achat : avec une attribution à 7 jours clic, une partie des achats de J1 arrive J2-J7 [S31].
- **Lecture finale du test à J+6 au plus tôt, relecture à J+8** pour récupérer les achats attribués en retard (INFÉRENCE).

---

