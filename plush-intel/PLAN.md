# PLAN — Mission Plush Intel

> Brief complet : `MISSION.md` (fait foi). Ce fichier = l'état réel de la mission. Repartir d'ici après une
> compaction ou dans une nouvelle session. Mémoire générale du projet : `../CLAUDE.md` (on garde UNE seule
> mémoire : le `CLAUDE.md` de fin de mission sera fusionné dans celui de la racine du dépôt, pas dupliqué).

**Démarrée le** 9 nov. 2026 · **Statut (10 nov.)** : CHECKPOINT B validé → **bloc 2 en mode court** (lancement des pubs avant le 18-19 nov.). Échantillon reçu le 10 nov.

## Calendrier qui commande tout

| Date | Événement | Conséquence |
|---|---|---|
| 9 nov. | Démarrage | — |
| 27 nov. | Black Friday | CPM en hausse dès ~20 nov. (à sourcer en Phase 0) |
| 30 nov. | Cyber Monday | — |
| ~4-8 déc. | Dernière commande livrée avant Noël si 12 jours ouvrés (pire cas annoncé) | estimation : 24 déc. − 12 jours ouvrés = 8 déc., moins 1-2 j de préparation |
| ~14 déc. | Idem si 7 jours réels (délai constaté par le fournisseur) | estimation |

## Section 2 du brief — ce qu'on sait déjà

| Élément | Valeur | Statut / source |
|---|---|---|
| URL | myplush.us (Shopify `fjviid-pb.myshopify.com`) | FAIT — API Shopify |
| Plateforme | Shopify, thème « olivia-15-2-7 » | FAIT — API |
| Marché | **États-Unis**, anglais, USD (langue principale de la boutique = fr, clients US servis en en) | FAIT — API + `../CLAUDE.md` |
| Offres | Solo **59,99 $** (barré 115 $) · Duo **74,99 $** (barré 144,02 $, « Best Value ») · cartouche **29 $** · Shipping Protection (SKU) · livraison US offerte 7-12 jours ouvrés · garantie 60 jours | FAIT — site en ligne 9 nov. |
| Cartouche | Site : « every 60 days » · bloc abonnement (pas encore actif) : « every 3 months » | ⚠️ incohérence ouverte — durée réelle fournisseur inconnue |
| COGS (DDP, livraison + droits inclus) | Solo **21,50 €** · Duo **27,08 €** · cartes 9,72 €/200 · stickers 8,60 €/100 | FAIT — devis fournisseur n°1, `../CLAUDE.md` 20-22 oct. |
| Cartouche seule envoyée seule | inconnu | ❓ à demander |
| Frais de paiement | **4,9 % + 0,25 €** : carte « internationale » 2,9 % + 0,25 € (plan Advanced, BE) + conversion de devise 2 % | FAIT 10 nov. (shopify.com/be-en/pricing + help.shopify.com). Les 1,6 % cités par Yasser = cartes européennes |
| Marge / CPA de break-even | Duo 34,97 $ · Solo 28,07 $ → **CPA BE 32,90 $ ≈ 28 €**, ROAS BE 2,14 (mix 70/30) | ✅ Phase 1, 10 nov. Si TVA 21 % sur les pubs Meta : ≈ 23 € lus dans Ads Manager (❓ à confirmer) |
| Avis Plush | source inconnue (un fichier `avis_plush.txt` existe dans Contenu > Fichiers, 27 oct.) | ❓ à demander |
| Historique ads | aucune campagne lancée à ce jour (pixel Meta installé) | INFÉRENCE — `../CLAUDE.md` 9 nov., à confirmer |
| Outils spy | TrendTrack : abonnement expiré le 5 oct., le connecteur demande une reconnexion · export du 4 oct. disponible | FAIT |
| Concurrents connus | eskiin, Afina (+ Showerlabs), Jolie, Sproos, Hello Klean, Water2, Puure, Filterbaby, Santevia, FlowPure, Clover & Cove, Lucinn, Unchemed, Vedya Home, Oasis Biolabs (ES), GetSeoni (FR), Pureva (FR), Canopy, riviage, Showery (UK), Stone-Stream, Mineral Stream, Mizsei… | FAIT — `../research/` |

## Inventaire des outils (9 nov.)

| Outil | État |
|---|---|
| Recherche web, fetch | ✅ |
| Navigateur automatisé | ✅ Playwright + Chromium (Node). Python Playwright à installer si besoin |
| Python, ffmpeg, faster-whisper (transcription fr/en) | ✅ |
| pandas, yt-dlp, youtube-transcript-api | à installer (PyPI accessible) |
| MCP Shopify (données boutique) | ✅ |
| MCP TrendTrack | ❌ à reconnecter (abonnement expiré) |
| Meta Ad Library | ❌ requête directe refusée (403) depuis cet environnement · API Graph joignable mais token requis · navigateur à tester |
| TikTok Creative Center | ✅ joignable (200) |
| Amazon US | ✅ joignable (200) |
| Reddit, Trustpilot | ❌ 403 depuis cet environnement → sources de remplacement à trouver |
| Krea (génération d'images) | 0 crédit |

## Ce qu'on réutilise (on ne repart pas de zéro)

- `../research/trendtrack-export/ads-final-4oct.md` + `.json` : 294 créas concurrentes, 52 pages, 884 778 $ de dépense vérifiée (UE/UK)
- `../research/top100-creas.json`, `../research/angles-concurrents.md` (2 nov.)
- `../research/brand/plush-avatar-client.md` (Megan, v2 du 21 oct.) — construite depuis la copy des concurrents, **pas** depuis la VOC → à confronter aux données de la Phase 5
- `../research/brand/plush-faq.md`, `plush-accordeons.md`, `plush-identite.md`
- La liste close des interdits (`../CLAUDE.md`, 4 oct.)
- 3 formations vidéo (49 vidéos) en cours de transcription → `00_knowledge/formations/`

## Conseils du media buyer de Yasser (9 nov., rapportés par Yasser)

- 25-30 créas, **150/jour en CBO**, **2 ad sets** (vidéos / natives+statiques) — séparer ne change pas la perf, ça sert à lire la data
- Mix type pour 15 créas : 5 natives · 5 VSL · 5 statiques
- 70 % de créas bas de funnel, 30 % haut de funnel
- Varier les VSL : cartoon, chanson, éducatif 3-4 min, UGC…
- Au scaling : 80 % du budget en scaling, 20 % en test · tests dans une **nouvelle CBO** · les créas gagnantes passent dans la CBO de scaling **par post ID**
- Nuance sourcée : l'aide Meta liste « ajouter une ad à un ad set » comme modification importante (peut relancer l'apprentissage) ; un test de Jon Loomer (2025) ne l'a pas observé → traiter comme un risque, pas une certitude (sources : jonloomer.com/qvt/new-ads-learning-phase/, insights.vaizle.com)

## Phases

| Phase | Livrable | Statut |
|---|---|---|
| Démarrage | arborescence, `MISSION.md`, `PLAN.md` | ✅ 9 nov. |
| 🛑 A | plan + questions | ✅ envoyé 9 nov. — en attente |
| 0 Formation | `00_knowledge/playbook-meta-ads-2026.md` + fiches formations | ✅ playbook 10 nov. (§0-16, ~14 000 mots, calé sur la décision de Yasser : 30 créas, 1 CBO, 2 ensembles, 5 j) · **fiches formations arrêtées le 10 nov. à la demande de Yasser** (trop de tokens). Gardé : formation B §1-3, dont les passages « combien de créas » (§3.1). Formations 1 et A : squelettes seulement |
| 1 Audit Plush | `01_produit/audit-produit-offre.md` | ✅ 10 nov. |
| 2 Marché | `02_marche/analyse-marche.md` + `amazon-bestsellers-2026-11-10.csv` | ✅ 10 nov. Trends bloqué (429) → consigne de 3 min pour Yasser en §7 · TikTok Creative Center non consulté · §5 réglementaire écrit sans recherche, à revérifier |
| 3 Concurrents | `03_concurrents/liste-concurrents.csv` + `shortlist.md` | ✅ 10 nov. : 32 concurrents (6 premium · 10 directs · 6 dropshippers · 4 Amazon · 6 substituts), shortlist de 12. Activité pub = export du 4 oct. (Ad Library inaccessible) |
| 🛑 B | playbook 10 lignes · audit 10 lignes · shortlist | ✅ envoyé le 10 nov. — en attente |
| 4 Teardown ads | `ads-database.csv`, teardowns, `synthese-ads.md` | 🟠 10 nov., version courte : `ads-database.csv` (294 créas de l'export du 4 oct., colonnes du brief, classement automatique à vérifier, âge/sexe non collectés) + `synthese-ads.md` = **catalogue de 12 formats à reproduire en IA** + top 15. Teardowns et landing pages par marque reportés (priorité : lancement ≤ 18-19 nov.). À mettre à jour avec les captures de Yasser |
| 5 VOC | `verbatims.csv`, `synthese-voc.md` | ⏳ |
| 6 Avatar | `avatar-principal.md`, `personas-secondaires.md` | ⏳ |
| 7 Angles | banques angles + hooks, `matrice-test-DRAFT.md` | ⏳ |
| 8 Red team | corrections notées ici | ⏳ |
| Livraison | `00_RESUME.md`, `visuels/`, `SOURCES.md`, mémoire | ⏳ |

## Réponses du CHECKPOINT A (Yasser, 9 nov. soir)

| Question | Réponse | Conséquence |
|---|---|---|
| Échantillon | pas reçu, « dans plusieurs jours » | vidéos produit impossibles pour l'instant → statiques / natives d'abord |
| Preuve chlore | l'usine a fourni une certification | ❓ document pas encore vu → aucun chiffre (%) dans les ads tant qu'on ne l'a pas lu |
| Durée cartouche | **3 mois** (fournisseur) | ⚠️ le site (FAQ + onglet) et l'ebook v2 disent 60 jours → décision à prendre |
| Cartouche envoyée seule | « 27,08 − 21,50 » = 5,58 € | c'est le surcoût d'une cartouche **dans** une boîte Duo ; un envoi seul paie aussi son propre port → estimation à majorer, devis réel à demander |
| Avis Plush | « avis réels, ventes en direct, dont aux US » | le seul fichier trouvé (`avis_plush.txt`, Contenu > Fichiers) contient des avis **rédigés** (mentions « Angle testé », « à vérifier sur une vraie expérience ») → non utilisé comme VOC ; export des vrais avis à récupérer |
| Budget | **150 €/jour**, 5-6 jours | 750-900 € pour le test (≈ 174 $/jour) |
| Frais de paiement | 1,6 % + 0,25 € | à vérifier : frais carte internationale et conversion de devise possibles sur des cartes US (compte belge) |
| TrendTrack | non repris | Ad Library : voir ci-dessous |
| Historique ads | 0 pub lancée | pas d'export à analyser |

**Meta Ad Library depuis cet environnement (testé 9 nov.)** : `curl` → 403 ; navigateur automatisé → la page
s'affiche mais renvoie « No ads match » même pour eskiin (qui a des centaines d'ads actives) = résultats bloqués.
L'API officielle `ads_archive` ne couvre les pubs commerciales que si elles sont diffusées dans l'UE.
→ Phase 4 : export du 4 oct. + captures / liens envoyés par Yasser.

## Réponses du CHECKPOINT B (Yasser, 10 nov.)

| Question | Réponse | Conséquence |
|---|---|---|
| Date de lancement | **Avant le 18-19 nov.** | Bloc 2 resserré. Créas à produire du ~13 au 17 nov. |
| Shortlist | « j'ai pas tout lu » : validée par défaut | Teardown sur les 12 |
| Créas | **Précisé le 10 nov. : la plupart des vidéos et des natives seront faites avec Higgsfield ou Kai AI**, inspirées des formats concurrents qui marchent, avec beaucoup d'angles différents et plusieurs formats UGC en IA | La phase 4 devient le cœur de la production : un catalogue des formats concurrents à reproduire. Règle : on reproduit un format, jamais une créa ; pas de faux client ni de faux résultat générés par IA |
| Durée de la cartouche | **3 mois partout** | Ebook corrigé le 10 nov. Thème : FAQ + onglet « Changing Your Filter » à changer par Yasser. La garantie de 60 jours ne bouge pas |
| Budget du test | **907 € réellement débités sur 5 jours, soit 150 €/jour dans Ads Manager** (décision du 10 nov.) | — |
| TVA du compte pub | **Aucun numéro de TVA** | +21 % : CPA BE lu dans Ads Manager ≈ 23 €, ROAS lu 2,59, MER BE 2,14. 150 €/jour = 181,50 € débités |
| Versements Shopify | EUR | Conversion de 2 % confirmée |
| Captures Ad Library + vidéos | Yasser les envoie (concurrents, ses vidéos IA du produit, son organique) | Format d'envoi donné le 10 nov. : un dossier Mega public |
| Échantillon | **Reçu le 10 nov.** Yasser tourne de l'organique dès aujourd'hui | Liste de plans envoyée le 10 nov. |
| Tokens | Yasser trouve la consommation trop forte | Fini les sous-agents en parallèle. Vidéos traitées par script (transcription + 4 images), jamais lues en entier |

## Journal

- 9 nov. : brief reçu. Arborescence créée. Accès testés (voir inventaire). 3 dossiers Mega de formation
  téléchargés (FB Ads 2021 « 10 - FACEBOOK ADS » ×25, « Partie 6 - Stratégies créatives » ×14,
  « Facebook Ads » ×10) et transcrits avec faster-whisper `small`, transcriptions dans le scratchpad de session
  → à recopier en fiches dans `00_knowledge/formations/`.

- 9 nov., soir : les 4 sous-agents (playbook, marché, concurrents, formation 1) ont été coupés par la limite d'usage du compte (reset à 22h30 UTC). Leur travail a été repris le 10 nov. à partir de leurs transcriptions.
- 10 nov. : la vidéo « 5. Éviter les bans » (formation B) n'avait pas été téléchargée : nom illisible, parce que la clé du nœud était dans la 2e entrée du champ `k`. Outil corrigé (`megafolder2.py`), vidéo téléchargée puis transcrite.
- 10 nov. : **Phase 1 livrée.** Faits nouveaux :
  - les cartes US paient 4,9 % + 0,25 €, pas 1,6 % ;
  - Meta ajoute probablement 21 % de TVA si le compte n'a pas de numéro de TVA ;
  - LTV 90 j ≈ 1re commande ;
  - 25-30 créas à 57 € chacune pour juger sur l'achat = 2× le budget ;
  - le chlore à Bruxelles est plafonné à 0,25 mg/L, donc la démo DPD y sera faible ;
  - la fiche produit a des blocs de preuve sociale non documentables (0 commande), des avant/après et le badge « Stronger pressure ».

- 10 nov. : **décision de Yasser sur la structure du test** : 30 créas (natives, VSL, images), 150 €/jour, 5 jours, CBO avec 2 ad sets (3 au maximum), natives / vidéos. Le calcul de la Phase 1 (juger chaque créa sur l'achat coûterait 2× le budget) lui a été présenté. La décision est prise : la matrice (Phase 7) se construit sur ce plan, avec une règle « non testée » pour les créas qui ont trop peu dépensé.

- 10 nov. : date limite de Noël harmonisée à **« Order by Dec 4 »** (12 jours ouvrés + 1-2 j de préparation) dans le playbook et l'audit. Le playbook disait 7 déc., l'analyse marché 4 déc.
- 10 nov. : le playbook suppose un lancement le 12 nov. (« si lancement le 12 nov. »), ce qui est irréaliste sans les créas. La date de lancement est posée comme décision au checkpoint B.

## Prochaines actions

1. Phase 7 d'abord, parce que c'est elle qui alimente la production IA : `06_angles/matrice-test-DRAFT.md`, 30 créas réparties sur les 12 formats F1-F12 de `03_concurrents/synthese-ads.md` × angles × personas. Puis `banque-angles.md` et `banque-hooks.md`
2. Phase 5 VOC, version légère et plafonnée : les sources ouvertes seulement (Reddit, Trustpilot et Amazon bloqués), en annonçant le nombre réel de verbatims. Phase 6 : mise à jour de l'avatar v2 avec les données
3. Intégrer les captures et vidéos de Yasser (dossier Mega) dès qu'elles arrivent : script de transcription + 4 images par vidéo
4. Pour économiser les tokens : reprendre le bloc 2 dans une **nouvelle session**, à partir de ce fichier, avec un contexte léger
