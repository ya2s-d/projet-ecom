# PLAN — Mission Plush Intel

> Brief complet : `MISSION.md` (fait foi). Ce fichier = l'état réel de la mission. Repartir d'ici après une
> compaction ou dans une nouvelle session. Mémoire générale du projet : `../CLAUDE.md` (on garde UNE seule
> mémoire : le `CLAUDE.md` de fin de mission sera fusionné dans celui de la racine du dépôt, pas dupliqué).

**Démarrée le** 9 nov. 2026 · **Statut** : 🛑 CHECKPOINT A envoyé, en attente des réponses de Yasser.

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
| Frais de paiement | inconnus | ❓ à demander (sinon estimation 2,9 % + 0,30 $) |
| Marge Duo | ~36,45 $ → CPA de break-even ≈ **36 $** | estimation du 22 oct., à refaire en Phase 1 |
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
| 0 Formation | `00_knowledge/playbook-meta-ads-2026.md` + fiches formations | ⏳ transcription des 3 formations en cours |
| 1 Audit Plush | `01_produit/audit-produit-offre.md` | ⏳ |
| 2 Marché | `02_marche/analyse-marche.md` | ⏳ |
| 3 Concurrents | `03_concurrents/liste-concurrents.csv` + shortlist | ⏳ |
| 🛑 B | playbook 10 lignes · audit 10 lignes · shortlist | ⏳ |
| 4 Teardown ads | `ads-database.csv`, teardowns, `synthese-ads.md` | ⏳ |
| 5 VOC | `verbatims.csv`, `synthese-voc.md` | ⏳ |
| 6 Avatar | `avatar-principal.md`, `personas-secondaires.md` | ⏳ |
| 7 Angles | banques angles + hooks, `matrice-test-DRAFT.md` | ⏳ |
| 8 Red team | corrections notées ici | ⏳ |
| Livraison | `00_RESUME.md`, `visuels/`, `SOURCES.md`, mémoire | ⏳ |

## Journal

- 9 nov. : brief reçu. Arborescence créée. Accès testés (voir inventaire). 3 dossiers Mega de formation
  téléchargés (FB Ads 2021 « 10 - FACEBOOK ADS » ×25, « Partie 6 - Stratégies créatives » ×14,
  « Facebook Ads » ×10) et transcrits avec faster-whisper `small`, transcriptions dans le scratchpad de session
  → à recopier en fiches dans `00_knowledge/formations/`.

## Prochaines actions

1. Recevoir les réponses du CHECKPOINT A
2. Finir les transcriptions → fiches formations
3. Phase 0 : playbook (sources Meta officielles + praticiens 2025-2026)
