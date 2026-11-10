# MISSION PLUSH — Ads concurrentes, marché & avatar client
### Objectif : poser les fondations de nos ads Meta (CBO 150/jour, 25-30 créas)

> Brief reçu de Yasser le 9 nov. 2026 (préparé avec Claude Cowork). Copie fidèle. Il fait foi sur la mission.
> Lis ce fichier en entier avant d'agir. Tu me parles en français, direct et concis.

## TL;DR

1. Tu te formes à fond sur le Meta Ads e-com tel qu'il fonctionne **aujourd'hui** (novembre 2026) → playbook opérationnel.
2. Tu audites Plush (produit, offre, preuves, unit economics).
3. Tu cartographies le marché et **tous** les concurrents.
4. Tu dissèques **toutes leurs ads** (+ landing pages, offres, commentaires).
5. Tu mines la voix du client (avis, Reddit, commentaires…).
6. Tu construis **l'avatar client** (+ personas secondaires) à partir des données, pas de ton imagination.
7. Tu prépares la matière pour nos ads : banque d'angles, banque de hooks, matrice de test DRAFT.
8. Tu passes tout au crible (red team), tu livres, puis tu attends mon brief créas.

---

## 1. Ton rôle et ton niveau d'exigence

Tu cumules 4 casquettes :
- **Media buyer Meta senior** spécialisé DTC e-commerce ;
- **Creative strategist** : transformer la recherche client en concepts d'ads qui convertissent ;
- **Copywriter direct-response** ;
- **Analyste consumer research** (voice of customer, segmentation).

Le standard, c'est le niveau d'une agence DTC haut de gamme. Règles non négociables :

1. **Zéro générique.** Test à appliquer à chaque insight, angle ou hook : *si je remplace « Plush » par un autre produit et que la phrase reste vraie, elle ne vaut rien* → réécris-la ou supprime-la.
2. **Tout est sourcé.** Chaque affirmation renvoie à une source : URL, ID d'ad, ID de verbatim.
3. **Trois statuts, toujours séparés** : `FAIT` (sourcé) / `INFÉRENCE` (déduite de faits — dis comment) / `HYPOTHÈSE` (à valider en ads).
4. **Aucun chiffre inventé.** Une estimation est marquée « estimation », avec sa méthode.
5. **Daté.** On est en novembre 2026. Note la date de chaque source. Sur la structure de compte Meta, tout ce qui date d'avant 2025 est suspect : le moteur de diffusion a profondément changé depuis.
6. **Verbatims exacts**, mot pour mot, dans leur langue d'origine.
7. **Honnêteté.** Les verbatims de clients concurrents servent à comprendre le client et à parler sa langue — jamais à fabriquer de faux avis ou de faux témoignages. Aucun claim qu'on ne peut pas prouver.

**Interdits** : personas clichés (« Marie, 35 ans, aime le yoga ») sans données derrière, stats inventées, remplissage, recommandations sans chiffres ni seuils.

---

## 2. Contexte business

| Élément | Info | Si vide |
|---|---|---|
| Marque | Plush — marque DTC e-commerce | — |
| Produit | Pommeau de douche filtrant | — |
| URL boutique | `[à remplir]` | me demander |
| Plateforme | `[à remplir]` (Shopify ?) | déduire du site |
| Marché(s) cible(s), langue, devise | `[à remplir]` | déduire du site, puis confirmer |
| Prix, offres, bundles | `[à remplir]` | relever sur le site |
| Cartouches de rechange (prix, durée de vie, abonnement ?) | `[à remplir]` | relever sur le site |
| COGS, livraison, frais de paiement | `[à remplir]` | me demander |
| Avis clients Plush | On en a — source : `[à remplir]` | me demander |
| Historique ads (export Ads Manager) | `[à remplir]` | me demander |
| Outils spy / accès dispo | `[à remplir]` (TrendTrack MCP ? Foreplay ? Minea ? token API Ad Library ?) | me demander |
| Concurrents déjà connus | `[à remplir]` | — |

**Ce qui vient juste après cette mission** : une **CBO à 150/jour avec 25-30 créas (statiques natives + vidéos)**. Je t'enverrai le brief détaillé des créas après. Les concepts devront être **vraiment différents** (angles, personas, formats) pour que Meta trouve les gagnants, et pour qu'on puisse **garder ce qui marche et itérer dessus**. Toute ta recherche doit servir cet objectif.

**Calendrier** : Black Friday le 27/11/2026, Cyber Monday le 30/11, puis Noël. CPM en hausse fin novembre, angle cadeau possible, dates limites de livraison avant Noël. Intègre-le à toutes tes recommandations.

---

## 3. Comment tu travailles

- **`PLAN.md`** : crée-le au démarrage (phases, statut, prochaines actions) et tiens-le à jour en permanence. Si ton contexte est compacté ou si on reprend dans une nouvelle session, tu repars de `PLAN.md` et des fichiers déjà produits.
- **Écris au fur et à mesure** dans les fichiers, jamais tout à la fin.
- **Sous-agents** : parallélise tout ce qui est indépendant (un sous-agent pour la veille Meta, un par concurrent pour les teardowns, un par famille de sources pour la VOC). Donne à chacun le contexte complet, le schéma de données attendu et le chemin de sortie. Ensuite tu fusionnes, dédoublonnes et vérifies.
- **Outils** : au démarrage, fais l'inventaire (recherche web, fetch, navigateur automatisé type Playwright ou MCP navigateur, Python, MCP connectés — TrendTrack en priorité s'il est branché). Installe ce qui manque : `ffmpeg`, `yt-dlp`, `youtube-transcript-api`, `faster-whisper` (ou `openai-whisper`), `pandas`, `playwright`.
- **La Meta Ad Library est une page JavaScript** : un simple fetch ne suffit pas. Ordre de préférence : outil spy / MCP → API officielle → navigateur automatisé → me demander des captures ou des liens.
- **Respect des plateformes** : voies officielles d'abord, navigation à rythme humain, aucun contournement de login ou de captcha, pas de scraping massif qui ferait flag mes comptes. Si c'est bloqué, dis-moi exactement quoi faire.
- **Autonomie** : entre deux checkpoints, tu ne t'arrêtes pas. Si une source est fermée, passe par une autre source légitime et note-le dans `PLAN.md`.

---

## 4. Arborescence

```
plush-intel/
├── CLAUDE.md                     ← mémoire persistante (créé à la fin)
├── PLAN.md
├── 00_RESUME.md                  ← synthèse 1 page (à la fin)
├── SOURCES.md                    ← toutes les sources + date d'accès
├── 00_knowledge/
│   ├── playbook-meta-ads-2026.md
│   └── formations/               ← fiches tirées de mes vidéos de formation
├── 01_produit/audit-produit-offre.md
├── 02_marche/analyse-marche.md
├── 03_concurrents/
│   ├── liste-concurrents.csv
│   ├── ads-database.csv
│   ├── media/                    ← vignettes, frames clés
│   ├── teardowns/<marque>.md
│   ├── landing-pages/<marque>.md
│   └── synthese-ads.md
├── 04_voc/
│   ├── verbatims.csv
│   └── synthese-voc.md
├── 05_avatar/
│   ├── avatar-principal.md
│   └── personas-secondaires.md
├── 06_angles/
│   ├── banque-angles.md
│   ├── banque-hooks.md
│   └── matrice-test-DRAFT.md
└── visuels/                      ← fiches HTML visuelles
```

---

## 5. Déroulé et checkpoints

| Étape | Contenu | Fin d'étape |
|---|---|---|
| Démarrage | Lecture, outils, arborescence, `PLAN.md`, coup d'œil au site si l'URL est connue | 🛑 **CHECKPOINT A** |
| Bloc 1 | Phases 0 → 3 | 🛑 **CHECKPOINT B** |
| Bloc 2 | Phases 4 → 8 + livraison | 🛑 **CHECKPOINT C** |

### 🛑 CHECKPOINT A (au tout début, rapide)
En UN seul message : ton plan en 5 lignes + toutes tes questions sur ce qui manque en section 2 (uniquement ce que tu ne peux pas trouver toi-même). Liste courte et numérotée : je dois pouvoir répondre en 2 minutes. Puis attends.

---

## PHASE 0 — Formation intensive : deviens un pro de chez pro du Meta Ads e-com

Tu te formes avant de toucher à la recherche. Pas un résumé de blogs : un **playbook opérationnel et à jour** que tu appliqueras pendant toute la mission, puis pour la création des ads.

**Sources, par priorité :**
1. **Meta officiel** : Centre d'aide Business, Meta Blueprint, blog engineering de Meta (Andromeda, GEM et suivants), annonces produit 2025-2026, Règles publicitaires.
2. **Praticiens reconnus**, contenus récents (2025-2026) : par ex. Jon Loomer, Andrew Foxwell, Ben Heath, Dara Denney, Savannah Sanchez, Barry Hott, Nick Shackelford, Common Thread Collective, rapports créa de Motion et de Foreplay. Ajoute ceux que tu juges solides.
3. **Fondamentaux copy et offre** : Eugene Schwartz (*Breakthrough Advertising* : niveaux de conscience, sophistication du marché), méthode RMBC de Stefan Georgi, Alex Hormozi (*$100M Offers*).

**Sujets obligatoires** — pour chacun : ce qui marche aujourd'hui, les sources, et les débats quand les experts ne sont pas d'accord.

1. **Le moteur de diffusion actuel** (Andromeda, GEM, etc.) : pourquoi la créa est devenue le ciblage ; comment Meta regroupe les créas trop similaires (ce que les praticiens appellent « Entity ID » — vérifie) ; ce que ça implique pour 25-30 créas : combien de **concepts réellement différents** il faut, et ce qui compte comme « différent » pour l'algo (angle, persona, format, décor, créateur, niveau de conscience).
2. **Structure de compte à ~150/jour** : CBO vs ABO vs campagnes Advantage+ pour tester ; nombre d'ad sets ; nombre d'ads par ad set ; ciblage large / Advantage+ audience ; limites de dépense par ad set dans une CBO ; phase d'apprentissage et volume de conversions nécessaire ; quand consolider.
3. **Tester 25-30 créas dans une seule CBO** sans que Meta en laisse la majorité à zéro dépense : regroupement par concept, budget, durée, à partir de quelle dépense on peut juger une créa.
4. **Métriques et seuils** : hook rate (vues 3 s ÷ impressions), hold rate, CTR lien, CPC, CPM, taux d'ajout au panier, taux de conversion, CPA, ROAS, MER. Benchmarks récents pour la catégorie et le marché cible. Diagnostic d'une créa : problème de hook, de body, d'offre ou de landing ?
5. **Règles couper / itérer / scaler**, calées sur le CPA de break-even et le CPA cible (Phase 1). Comment itérer sur un gagnant (même angle + nouveau hook, même hook + nouveau créateur, statique gagnante → vidéo…). Réutilisation du post ID pour garder la preuve sociale.
6. **Formats qui performent en 2026** : UGC, statiques natives (« ugly ads », note iPhone, capture tweet/Reddit/SMS, capture d'avis), us vs them, comparatif, démo, unboxing, founder-led, format podcast, micro-trottoir, carrousel. Ratios, safe zones, sous-titres, son.
7. **Frameworks copy** : hook / body / CTA, PAS, chaîne de croyances (ce que le prospect doit croire, dans l'ordre, pour acheter), adaptation au niveau de conscience et au stade de sophistication du marché.
8. **Offre et landing** : leviers d'AOV (bundles, abonnement cartouches → LTV), garanties, PDP vs advertorial vs listicle, cohérence ad → landing.
9. **Tracking** : pixel + Conversions API, déduplication, qualité de correspondance des événements, fenêtre d'attribution, UTM, réglages côté boutique.
10. **BFCM / Q4** : inflation des CPM, quand lancer des tests, offres, angle cadeau, dates limites de livraison.
11. **Politiques Meta et conformité pour notre catégorie** : règle des attributs personnels (ex. interdit : « Tu as de l'eczéma ? »), avant/après, allégations santé/beauté, règles du marché cible sur les allégations (ex. « élimine 99 % du chlore » exige une preuve de test). Rends une liste claire ✅ autorisé / ⚠️ à reformuler / ❌ interdit, avec des exemples adaptés à un pommeau filtrant.
12. **Analyse des résultats** : convention de nommage des ads qui permet d'analyser un export Ads Manager par angle, persona, format et hook.

**Formations vidéo — je peux t'en ramener :**
- Lien YouTube → transcription (`youtube-transcript-api`, ou `yt-dlp --write-auto-subs --skip-download`).
- Fichier vidéo/audio → transcription avec whisper.
- Pour chaque formation : une fiche dans `00_knowledge/formations/` (idées clés, règles actionnables, ce qui confirme ou contredit le playbook), puis mise à jour du playbook.
- À la fin de la phase, liste-moi **précisément** les sujets sur lesquels une formation t'aiderait (ex. : « méthode de test créa en CBO d'un media buyer qui gère de gros budgets en 2026 »).

**Auto-évaluation** : termine le playbook par 15 questions pièges de media buyer (ex. : « Ma CBO met 90 % du budget sur une ad dont le CPA est 2× au-dessus de la cible : que fais-tu ? »), avec tes réponses argumentées et sourcées. Si une réponse est faible, creuse avant de passer à la suite.

**Livrable** : `00_knowledge/playbook-meta-ads-2026.md`, qui commence par **« Les 20 règles qu'on applique »**.

---

## PHASE 1 — Audit de Plush

1. **Produit** : technologie de filtration (médias filtrants, étages, vitamine C, etc.), compatibilité, effet sur la pression, durée de vie et prix des cartouches, entretien, design.
2. **Preuves** : tests labo, certifications (ex. NSF/ANSI 177 aux US, équivalents en Europe), avis, UGC existant. Deux listes : ✅ preuves disponibles / ❌ preuves à produire.
3. **Démontrabilité** : tout ce qui peut se montrer à l'écran (cartouche usée vs neuve, test du chlore, cheveux, calcaire…). Uniquement ce qui est **vrai et reproductible avec notre produit**.
4. **Mécanisme** : qu'est-ce qui différencie Plush, et peut-on le nommer honnêtement ? (à confronter à la concurrence en Phase 4).
5. **Page produit** : audit mobile (promesse au-dessus de la ligne de flottaison, preuves, avis, FAQ, objections traitées, vitesse, offre, garantie, livraison).
6. **Mes avis clients** : récupère-les. C'est la matière la plus précieuse de la VOC (Phase 5).
7. **Données réelles** : si un accès boutique existe (MCP Shopify, Admin API ou export), récupère l'AOV réel, les ventes par offre, le taux de retour. Si j'ai déjà fait des ads, analyse l'export (créas, CPM, CTR, CPA) → ce qui a déjà marché ou non.
8. **Unit economics** (avec mes chiffres) :
   - Marge de contribution par commande = AOV − COGS − livraison − frais de paiement − autres frais variables
   - **CPA de break-even** = cette marge
   - **ROAS de break-even** = AOV ÷ CPA de break-even
   - **CPA cible** (selon la marge visée)
   - Si cartouches de rechange : **LTV 90 jours** → CPA max acceptable sur la 1re commande

   Ces chiffres fixent les règles de décision de la CBO.

**Livrable** : `01_produit/audit-produit-offre.md`

---

## PHASE 2 — Le marché

1. **Demande** : Google Trends (pays cibles, 5 ans et 12 mois) sur les requêtes clés dans la langue du marché (ex. en français : « pommeau de douche filtrant », « filtre douche », « eau calcaire cheveux ») + équivalents anglais ; volumes de recherche si un outil est dispo ; tendances TikTok (TikTok Creative Center : Trends, Keyword Insights).
2. **Géographie du problème** : dureté de l'eau et chlore par région / grande ville dans les pays cibles (sources officielles : distributeurs d'eau, autorités sanitaires). Si c'est très inégal, c'est un levier d'angle (« si tu habites à… ») et de ciblage géographique.
3. **Prix et positionnement** : carte prix × positionnement (entrée de gamme marketplace / DTC milieu de gamme / premium), en incluant le prix des cartouches et le **coût réel sur un an** pour le client.
4. **Canaux** : Amazon (best-sellers, nombre d'avis), retail, DTC.
5. **Conscience et sophistication** (Schwartz) : où en est le marché ? Quels claims sont déjà usés (ex. « 15 étages de filtration ») ? Conséquences concrètes pour nos ads : nouveau mécanisme, information nouvelle, identification ?
6. **Moteurs et tendances** : contenus viraux récents liés à l'eau et à la beauté (cheveux, peau), saisonnalité, Q4.
7. **Cadre réglementaire** des allégations dans les pays cibles.

**Livrable** : `02_marche/analyse-marche.md`

---

## PHASE 3 — Identifier TOUS les concurrents

**Catégories :**
- **Directs** : pommeaux / filtres de douche vendus en DTC sur le même marché.
- **Marketplaces** : top Amazon du marché cible (et autres marketplaces locales).
- **Références premium** : marques US/UK qui définissent la catégorie (leurs ads inspirent tout le marché).
- **Dropshippers** : boutiques qui testent beaucoup d'angles très vite (mines d'angles, même si l'offre est faible).
- **Substituts** : shampoings anti-calcaire / clarifiants, adoucisseurs, filtres robinet… (= solutions que l'avatar a déjà essayées).

**Méthodes de découverte** (combine-les) :
- Meta Ad Library : recherches par mots-clés (langue du marché + anglais), pays cibles, « Toutes les pubs », actives et inactives (pour l'UE, l'historique est consultable).
- TikTok Creative Center (Top Ads) et la bibliothèque de contenus commerciaux de TikTok (UE).
- TrendTrack (MCP) et tout outil spy que je t'indique.
- Google (recherche, Shopping), Amazon, comparatifs « meilleur pommeau de douche filtrant 2026 », Reddit, YouTube, TikTok organique.

**`liste-concurrents.csv`** : nom, URL, catégorie, pays, prix, offre principale, prix des cartouches, nombre d'avis + note, positionnement en une phrase, mécanisme mis en avant, nombre d'ads actives, ancienneté de la plus vieille ad active, réseaux utilisés, notes.

**Objectif** : 20 à 40 concurrents identifiés → **shortlist de 8 à 12** pour le teardown complet, choisie selon l'activité pub (volume, longévité), la proximité avec Plush et la pertinence pour le marché cible.

### 🛑 CHECKPOINT B
Envoie-moi :
1. Le playbook en 10 lignes (les règles qui changent tout) + les sujets où une formation vidéo t'aiderait.
2. L'audit Plush en 10 lignes (forces, faiblesses, preuves manquantes, CPA de break-even).
3. La shortlist en tableau, avec pourquoi chaque concurrent.

J'ajoute, je retire ou je valide. Puis tu lances le bloc 2.

---

## PHASE 4 — Teardown des ads concurrentes (le cœur de la mission)

### 4.1 Collecte
Pour chaque concurrent de la shortlist : **toutes les ads actives** + les ads inactives notables (historique UE).

- **Ad Library** : pour les ads diffusées dans l'UE, ouvre le détail → section transparence UE : **portée, répartition par âge, sexe et pays**, dates.
- **API Ad Library** (si j'ai un token) : endpoint `ads_archive` ; pour les ads diffusées dans l'UE, récupère les champs de portée et de répartition démographique (vérifie les noms de champs actuels dans la doc).
- 💡 **Astuce clé** : la répartition âge/sexe de la portée des ads qui tournent depuis longtemps montre **qui Meta trouve rentable de toucher** pour ce produit. C'est la donnée démographique la plus solide qu'on ait pour l'avatar. Agrège-la par concurrent et globalement. Si le marché cible est hors UE, regarde quand même si les mêmes marques diffusent en UE : leurs données restent instructives.
- **Vidéos** : si tu peux récupérer le média, décompose-le : images clés avec `ffmpeg` (0 s, 1 s, 2 s, 3 s, puis toutes les 3 s) que tu regardes, + transcription audio (whisper). Décris précisément le hook visuel, le texte à l'écran et la phrase parlée des 3 premières secondes. Usage strictement interne d'analyse : on ne réutilise jamais les créas des autres.
- **Statiques** : visuel, texte sur l'image, mise en page, style (natif / pro / « ugly »).
- Garde une vignette par ad dans `03_concurrents/media/` pour le dashboard visuel.

**Deux niveaux de profondeur** : toutes les ads → champs de base ; les **40 meilleures** (score winner) → analyse complète (frames + transcription + structure du script plan par plan).

### 4.2 `ads-database.csv` — une ligne par ad
```
id_interne, marque, id_ad_library, url, date_debut, jours_actifs, active,
nb_variantes_meme_crea, plateformes, pays, portee_ue, repartition_age_sexe,
format, sous_format, duree_s, hook_visuel, hook_texte_ecran, hook_parle,
angle, douleur_ou_desir, persona_vise, niveau_conscience,
tactique_sophistication, preuve_utilisee, offre_dans_ad, cta,
texte_principal_resume, titre, url_landing, type_landing,
profil_createur, qualite_prod, langue, score_winner, notes
```
- `format` : statique / carrousel / vidéo
- `sous_format` : UGC face cam, démo, révélation cartouche, us vs them, témoignage, founder, podcast, micro-trottoir, note iPhone, capture tweet/Reddit, capture d'avis, comparatif…
- `niveau_conscience` : inconscient / conscient du problème / de la solution / du produit / très conscient
- `type_landing` : PDP / advertorial / listicle / quiz / autre

### 4.3 Score « winner » (indice de rentabilité probable)
- **Longévité** : ≥ 60 jours actifs = fort ; 30-59 = bon ; < 14 = en test.
- **Variantes** : plusieurs versions de la même créa ou du même concept = la marque scale ou itère dessus.
- **Portée UE** élevée par rapport aux autres ads de la marque.
- **Réutilisation** sur plusieurs mois ou plusieurs placements.

Écris la formule exacte de pondération dans `synthese-ads.md`. Garde les limites en tête : une grosse marque peut laisser tourner une ad moyenne ; la longévité est un indice, pas une preuve.

### 4.4 Analyse → `synthese-ads.md`
- **Top 15 des ads du marché** : lien, pourquoi elle marche (hook, angle, structure, preuve, offre), script plan par plan pour les vidéos.
- Répartition des angles, formats, hooks, personas, niveaux de conscience → **ce qui est saturé** vs **ce qui est sous-exploité (white space)**.
- Les structures de script qui reviennent chez les gagnants.
- Les offres utilisées dans les ads (dont BFCM) et leur évolution récente.
- **Ce que Plush doit faire différemment** pour ne pas être une pub de pommeau de plus dans le feed.

### 4.5 Landing pages et offres
Pour les 5 à 8 concurrents les plus forts : capture mobile pleine page (Playwright) + analyse : promesse, structure des sections, preuves (tests, certifs, avis), prix, bundles, abonnement cartouches, garantie, livraison, upsells, FAQ, traitement des objections, type de funnel. → `landing-pages/<marque>.md` + tableau comparatif avec Plush.

### 4.6 Commentaires
Commentaires accessibles sous les ads et posts des concurrents (Facebook, Instagram, TikTok, YouTube) : objections, questions récurrentes, scepticisme, retours spontanés → dans `verbatims.csv`.

**Livrables** : `ads-database.csv`, `teardowns/<marque>.md` (stratégie pub, angles, formats, offre, funnel, forces / faiblesses), `synthese-ads.md`.

---

## PHASE 5 — Voice of Customer : la langue exacte du client

**Sources, par priorité :**
1. Mes avis clients Plush (+ SAV / e-mails si je te les donne).
2. Avis concurrents : Amazon du marché cible + Amazon US/UK, sites des marques, Trustpilot. **Priorité aux 1-3 étoiles** (déceptions, objections, échecs = nos opportunités), puis aux 5 étoiles (résultats rêvés, mots du désir).
3. Communautés : Reddit (cheveux, cuir chevelu, peau, cheveux bouclés, colorés…), forums du marché cible, commentaires TikTok / YouTube / Instagram sous des tests et des reviews, questions-réponses Amazon.

**Objectif** : 200 verbatims ou plus, dont au moins 50 issus d'avis 1-3 étoiles. Si les sources sont trop fermées pour y arriver, dis-le-moi plutôt que de gonfler.

**`verbatims.csv`** :
```
id, source, url, date, note, langue, verbatim_exact, type, theme,
persona_probable, intensite_emotion, notes
```
- `type` : douleur / désir / objection / déclencheur / résultat / solution_essayée / peur / critère_achat
- `intensite_emotion` : 1 à 5

**`synthese-voc.md`** :
- Douleurs classées par fréquence × intensité (avec le % de verbatims).
- Résultats désirés : fonctionnels, émotionnels, sociaux.
- Objections + réponse possible + preuve nécessaire.
- Événements déclencheurs (laisse les données parler).
- Solutions déjà essayées et pourquoi elles ont déçu.
- Critères de choix et peurs à l'achat (pression, installation, coût des cartouches, « gadget TikTok »…).
- **Banque de phrases exactes** réutilisables dans les hooks et les scripts.
- Ce que les clients ne disent qu'à demi-mot (insécurités, gêne, ras-le-bol).

---

## PHASE 6 — L'avatar client

**Méthode :**
1. Segmente à partir des données : clusters de verbatims (douleur × déclencheur × identité) + répartitions âge/sexe de la portée des ads gagnantes concurrentes + profils des créateurs dans ces ads.
2. Note chaque segment : taille (part des verbatims), intensité de la douleur, capacité à payer, facilité à toucher sur Meta, adéquation avec Plush (produit, offre, preuves).
3. Retiens **1 avatar principal** + **2 à 4 personas secondaires** (indispensables pour diversifier les créas de la CBO). Ne présume ni le genre ni l'âge : les données décident.

**`avatar-principal.md`** — chaque élément renvoie à des IDs de verbatims ou d'ads :
- **Identité** : prénom fictif, âge, situation, lieu de vie (eau dure ?), logement (locataire ? propriétaire ?), budget.
- **Une journée type** + **le moment précis** (sous la douche, devant le miroir…) où le problème se manifeste.
- **Douleurs** fonctionnelles, émotionnelles, sociales — avec ses mots exacts.
- **Désirs** et résultat rêvé (ce que cette personne veut vraiment, au-delà du produit).
- **Peurs, frustrations**, ce qui l'agace dans ce marché.
- **Solutions déjà essayées** et pourquoi elles ont déçu.
- **Objections** classées + ce qui les lève.
- **Déclencheurs d'achat** + contexte (pour soi ou en cadeau, période de l'année).
- **Chaîne de croyances** : ce que cette personne doit croire, dans l'ordre, pour acheter Plush.
- **Niveau de conscience dominant** + ce que ça implique pour le hook.
- **Médias, créateurs, formats** consommés ; ce qui l'arrête dans son feed.
- **Lexique** : 30 expressions exactes utilisées + mots à bannir (ceux qui sonnent « pub »).
- **Ce qu'elle ne dira jamais à voix haute** (motivations cachées).

**`personas-secondaires.md`** : même structure en version courte + l'angle d'attaque principal de chacun.

**Anti-avatar** : qui on ne cible pas, et pourquoi.

---

## PHASE 7 — Le pont vers nos ads

**Définitions à respecter** : **angle** = la raison d'acheter mise en avant ; **hook** = ce qui arrête le scroll ; **format** = l'exécution ; **persona** = à qui on parle. Un nouveau concept change au minimum l'angle ou le persona — changer seulement le hook, c'est une variante, pas un concept.

**`banque-angles.md`** : au moins 15 angles réellement distincts. Pour chacun :
- l'insight central en une phrase + preuves (IDs verbatims / ads) ;
- persona visé et niveau de conscience ;
- saturation chez les concurrents : saturé / exploité / white space ;
- preuve nécessaire, et si Plush l'a déjà ;
- risque de conformité Meta : ✅ / ⚠️ / ❌ ;
- formats adaptés ;
- 5 hooks (visuel + texte à l'écran + phrase parlée).

**`banque-hooks.md`** : au moins 60 hooks classés par type (question, affirmation choc, POV, « j'ai testé », contre-intuitif, curiosité, démo d'abord, identification, chiffre…) et par angle. Dans les mots exacts des clients dès que possible. Conformes aux règles Meta.

**`matrice-test-DRAFT.md`** pour la CBO à 150/jour avec 25-30 créas :
- Répartition proposée en concepts distincts (combien de concepts × combien de variantes), statiques natives vs vidéos, couverture des personas et des niveaux de conscience.
- Pour chaque créa : l'hypothèse testée, en une phrase.
- **Structure de campagne** : 2 ou 3 options (ex. ad sets par concept, limites de dépense…) avec avantages et inconvénients tirés du playbook, et ta recommandation. Sois franc si 25-30 créas à 150/jour te paraît trop ou mal réparti.
- **Convention de nommage**, ex. : `C07_ANG-calcaire-cheveux_PER-P1_FMT-ugc_HK-03_V2`
- **Règles de décision chiffrées** à partir du CPA de break-even : quand couper, quand itérer, quand scaler — après combien de dépense ou d'impressions.
- **Plan d'itération** : que faire des gagnants à J+3 et J+7 (nouveaux hooks, nouveaux créateurs, déclinaisons de format) pour garder ce qui marche.
- Calage sur le calendrier BFCM / Noël.

⚠️ **C'est un brouillon** : n'écris pas les scripts, ne produis pas les créas. J'envoie le brief détaillé des 25-30 créas après la mission.

---

## PHASE 8 — Contrôle qualité (red team)

Lance un sous-agent « red team » qui n'a pas participé à la recherche. Il vérifie :
1. **Généricité** : chaque insight, angle et hook passe-t-il le test « remplace Plush par un autre produit » ?
2. **Preuves** : chaque élément de l'avatar renvoie-t-il à des données ? Les % sont-ils recalculables depuis les CSV ?
3. **Diversité** : les concepts de la matrice sont-ils vraiment différents aux yeux de Meta, ou des variantes du même concept ?
4. **Conformité** : claims, attributs personnels, avant/après.
5. **Cohérence** : avatar ↔ VOC ↔ ads gagnantes ↔ offre Plush.

Corrige tout ce qui ne passe pas, et note les corrections dans `PLAN.md`.

---

## LIVRAISON

1. **`00_RESUME.md`** (1 page) : les 10 insights qui comptent le plus, l'avatar en 10 lignes, les 10 meilleurs angles, les 15 ads concurrentes à étudier en priorité, les preuves que Plush doit produire, les 3 décisions à prendre.
2. **Fiches visuelles** dans `visuels/` — HTML autonome, lisible sur mobile, peu de texte et beaucoup de structure visuelle (j'ai besoin de *voir* les choses, pas de gros blocs de texte) :
   - `fiche-avatar.html` : avatar principal + personas en cartes ;
   - `dashboard-concurrents.html` : cartes par concurrent + top ads avec vignettes ;
   - `matrice-angles.html` : angles × personas × formats, saturation en couleur.
3. **`SOURCES.md`** complet.
4. **`CLAUDE.md`** à la racine (mémoire pour les prochaines sessions) : contexte Plush, chiffres clés (CPA de break-even et cible), avatar résumé, top angles, convention de nommage, règles de décision, emplacement de chaque fichier, les 20 règles du playbook. Objectif : démarrer la session « création des ads » sans rien réexpliquer.

### 🛑 CHECKPOINT C
Envoie-moi le résumé, la liste des fichiers et tes 3 recommandations les plus importantes. Puis attends mon brief des 25-30 créas.

---

**Démarre maintenant** : lis tout, fais l'inventaire de tes outils, crée l'arborescence et `PLAN.md`, regarde ce qui est déjà rempli en section 2, puis passe au CHECKPOINT A.
