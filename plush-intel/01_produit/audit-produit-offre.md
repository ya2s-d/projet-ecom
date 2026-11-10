# Audit Plush — produit, offre, preuves, unit economics

> Phase 1 de la mission (`../MISSION.md`). Rédigé le 10 nov. 2026.
> Statuts : **FAIT** (sourcé, daté) · **INFÉRENCE** (déduite, méthode indiquée) · **HYPOTHÈSE** (à valider) · **estimation** (méthode indiquée).
> Sources internes : fiche produit en ligne lue le 10 nov. (Playwright, iPhone 13) · API Shopify Admin du 10 nov. · réponses de Yasser du 9 nov. (`../PLAN.md`) · `../../CLAUDE.md` (devis fournisseur des 20-22 oct.).

---

## Verdict en 10 lignes

1. **CPA de break-even : 33 $ (≈ 28 €)** sur la 1re commande, avec un mix 70 % Duo / 30 % Solo. ROAS de break-even **2,1**. C'est 2 $ de moins que l'estimation du 9 nov. : les cartes US paient le tarif « international » (2,9 % + 0,25 €) plus 2 % de conversion, et non 1,6 %.
2. **Si Meta facture la TVA belge (21 %) sur les pubs, le break-even affiché dans Ads Manager tombe à ≈ 23 €.** À vérifier sur la facture Meta (question 1 plus bas).
3. **LTV à 90 jours ≈ 1re commande.** Le Duo contient déjà la 2e cartouche, donc aucun rachat avant ~6 mois. On ne peut pas acheter un client à perte en comptant sur les cartouches.
4. **Le test de 750-900 € doit faire 26-32 commandes pour finir à zéro**, soit ~5 par jour.
5. **25-30 créas, c'est trop pour ce budget si on veut juger sur l'achat** : juger une créa à 2× le CPA de break-even demande 57 € par créa, donc 1 425-1 710 € pour 25-30 créas, soit 2× le budget du test (INFÉRENCE, calcul en §8.5).
6. **Produit : la composition est le standard de la catégorie** (KDF-55, sulfite de calcium, charbon, vitamine C, coton PP). Aucun mécanisme exclusif ne peut être revendiqué honnêtement.
7. **La vraie différence, et elle est rare : l'honnêteté écrite sur la fiche** (« What it won't do: soften hard water »), le prix (2 cartouches pour 74,99 $), la cartouche visible.
8. **Preuves disponibles : quasi aucune.** Certification chlore non lue, pas de NSF/ANSI 177, échantillon pas reçu, 0 commande, 0 avis exploitable, 0 UGC.
9. **La fiche produit n'est pas prête à recevoir du trafic Meta.** La preuve sociale affichée n'est pas documentable (0 commande dans Shopify). La fiche montre des avant/après cheveux et peau. L'image principale affiche « Stronger pressure » alors que la FAQ refuse de le promettre. Meta examine aussi la page de destination.
10. **Démos possibles dès réception de l'échantillon** : installation chronométrée, test du seau (débit), test DPD du chlore, cartouche après X gallons. **Attention : elles seront filmées avec l'eau de Bruxelles, où le chlore est plafonné à 0,25 mg/L, contre 4 mg/L aux US. La démo du chlore y sera faible** (§3).

---

## 1. Produit — FAIT (fiche produit en ligne, 10 nov. 2026, sauf mention)

| Élément | Ce qui est affiché | Statut / remarque |
|---|---|---|
| Format | Pommeau fixe rond, chrome, cartouche dans le corps | Une seule couleur (« Chrome ») |
| Filtration | « Six layers: PP cotton, KDF-55, calcium sulfite, activated carbon, vitamin C beads, and a steel mesh » (FAQ) | ⚠️ L'onglet « Changing Your Filter » décrit encore **2 étages** (KDF-55 + charbon) : incohérence connue |
| Ce qu'il ne fait pas | « What it won't do: soften hard water. Removing calcium and magnesium takes a whole-home softener » | ✅ Rare dans la catégorie (à confirmer en Phase 4). Ça ferme honnêtement l'angle calcaire |
| Compatibilité | « Fits the standard U.S. ½-inch shower arm » | ❓ Le filetage **½" NPT** et le **débit en GPM** n'ont jamais été confirmés par écrit par le fournisseur (spécs du 25 sept. dans `../../CLAUDE.md`) |
| Pression | FAQ : « we won't promise you more pressure » | ⚠️ L'image principale dit **« Stronger pressure »**. Test du seau pas fait |
| Durée cartouche | Site et ebook : **60 jours** · fournisseur : **3 mois** (Yasser, 9 nov.) | ⚠️ Incohérence ouverte, décision de Yasser en attente |
| Prix cartouche | 29 $ (`PLUSH-CARTRIDGE`, API 10 nov.) | L'abonnement n'est pas actif (aucun plan Shopify Subscriptions) |
| Entretien | « Go by the calendar, not the color » | Rien sur le détartrage des buses |
| Contenu de la boîte | Pommeau + cartouche montée + carte à 5 étapes · Duo : + cartouche de rechange · ebook par email | ✅ |

**Conformité du débit — INFÉRENCE à vérifier.** Le plafond fédéral est de 2,5 GPM. La Californie impose 1,8 GPM depuis 2018 (Title 20 de la CEC), et d'autres États ont leurs propres plafonds (vérification en Phase 2). **Si le débit n'est pas confirmé ≤ 1,8 GPM, on exclut la Californie du ciblage pub et de la zone de livraison.** La Californie représente ~12 % de la population US.

---

## 2. Preuves

### ✅ Disponibles aujourd'hui

| Preuve | Source | Utilisable en ad ? |
|---|---|---|
| Garantie 60 jours, « On day 59, if you don't love it, you get all your money back » | Fiche + politique de remboursement | ✅ Oui |
| Livraison US offerte, suivie | Fiche + zone d'expédition à 0 $ | ✅ Oui. Délai à harmoniser : « 5 to 12 » (FAQ) contre « 7–12 » (bloc boîte) |
| Composition des 6 couches | Fiche (texte du fournisseur) | ✅ En tant que composition, sans pourcentage |
| Le plafond de chlore EPA de 4 mg/L | Fiche : « U.S. rules allow up to 4 milligrams of it per liter » — c'est le MRDL de l'EPA pour le chlore | ✅ Fait public |
| Mention de transparence type Water2 + « Not a medical device » | Fiche, pied de page | ✅ À répéter en bas de chaque ad |
| Ebook « Know Your Water » (21 pages) | `assets/ebook/Plush-Know-Your-Water.pdf` | ✅ Cadeau. Pas encore importé dans Shopify, ni branché à l'email de confirmation |

### ❌ À produire, par ordre d'importance pour les ads

| # | Preuve | Débloque | Comment | Quand |
|---|---|---|---|---|
| 1 | **Le document de certification chlore de l'usine** (labo, méthode, débit, température, volume testé en gallons) | Tout chiffre (« up to X % ») · la durée de vie réelle | Yasser le demande au fournisseur et l'envoie | Maintenant |
| 2 | **Filetage ½" NPT + débit en GPM**, par écrit | La phrase « fits any U.S. shower » · la conformité en Californie | Question au fournisseur | Maintenant |
| 3 | **Test du seau** : secondes pour remplir 10 L, avec le pommeau d'origine puis avec Plush | L'objection n°2 (« ça va tuer la pression ») | Échantillon + seau + chrono, filmé en un plan | Jour de réception |
| 4 | **Test DPD du chlore avant / après** (kit ou bandelettes ~10-15 $) | La démo « regarde ce qu'il retient » | Mesure au robinet, puis à la sortie de Plush | Jour de réception |
| 5 | **Installation chronométrée** | « 2 min to install » | Filmée d'une main, sans outil | Jour de réception |
| 6 | **Cartouche après X gallons** à côté d'une neuve | L'objet héros de la marque | Voir §3 : on peut l'accélérer honnêtement | J+1 à J+3 |
| 7 | **Vrais avis** de vrais acheteurs, avec photo | Toute preuve sociale | Email J+30 (« tell us what you saw ») | Après les premières commandes |
| 8 | NSF/ANSI 177 | La mention « certified » | Hors de portée à court terme | — |

---

## 3. Démontrabilité — uniquement ce qui sera vrai avec notre produit

| Démo | Ce qu'on voit à l'écran | Condition pour qu'elle soit vraie | Risque |
|---|---|---|---|
| Installation en 2 min | Dévisser, visser à la main, chrono | Le filetage doit s'adapter au bras de douche utilisé pour filmer | 🟠 **En Belgique, les douches sont souvent au filetage G½ (BSP), pas au NPT US.** Il faudra peut-être un raccord. Ne pas filmer une installation qui fuit |
| Test du seau | Deux remplissages chronométrés, côte à côte | Le résultat est ce qu'il est : on le publie seulement s'il est bon | 🟠 La pression de Bruxelles n'est pas celle d'un immeuble US. On montre un écart relatif, jamais un GPM absolu |
| DPD chlore avant / après | Fiole rose → fiole incolore | Dépend du chlore résiduel de l'eau du robinet | 🔴 **À Bruxelles, le chlore résiduel distribué ne peut pas dépasser 0,25 mg/L** (FAIT, [Bruxelles Environnement](https://environnement.brussels/thematiques/eau/leau-bruxelles/eau-du-robinet/leau-du-robinet-est-elle-bonne), lu le 10 nov.). Aux US, la limite est de 4 mg/L. La fiole « avant » sera donc à peine rose : démo faible et pas représentative d'une ville américaine. Ne jamais ajouter de chlore sans l'écrire à l'écran |
| Cartouche usée contre neuve | La cartouche sortie, à côté d'une neuve | La couleur dépend des sédiments de l'eau locale | 🟠 **Accélération honnête** : laisser couler la douche jusqu'à ~450 gallons (≈ 3 h à 2,5 GPM, l'équivalent d'environ 1 mois de douches pour une personne — estimation à partir de ~16 gallons par douche) et l'écrire à l'écran (« after 450 gallons »). Sans sédiments dans l'eau, elle restera claire : dans ce cas, on ne la montre pas |
| Odeur de piscine | Impossible à montrer | — | Le témoignage oral est permis, mais pas de pourcentage |
| Calcaire sur la paroi | ❌ **Plush ne l'enlève pas** (fiche) | — | Angle Hello Klean **fermé** pour Plush |
| Cheveux et peau | ❌ Pas démontrable honnêtement à court terme, et l'avant/après est interdit par Meta | — | Angle à traiter en « ce que le filtre retient », jamais en résultat |

---

## 4. Mécanisme — qu'est-ce qui différencie Plush ?

**INFÉRENCE (composition comparée à `../../research/trendtrack-export/`, relevé du 4 oct.)** : KDF-55, sulfite de calcium, charbon et vitamine C, c'est la recette de toute la catégorie. Jolie, Afina et eskiin mettent en avant la même famille de médias. **Nommer un « mécanisme unique » serait inventé.**

Ce que Plush peut revendiquer honnêtement :

| Différence | Preuve | Force |
|---|---|---|
| **Il dit ce qu'il ne fait pas** (« won't soften hard water ») | Fiche | 🟢 Forte, et probablement sous-exploitée par la concurrence (à vérifier en Phase 4) |
| **2 cartouches pour 74,99 $**, la 2e déjà dans la boîte | Fiche, API | 🟢 Coût sur un an face aux pommeaux filtrants à 99-169 $ (Phase 2) |
| **La cartouche qu'on voit** : « We didn't make it brown. Your water did. » | FAQ | 🟠 Format déjà utilisé par Puure et GetSeoni (`ads-final-4oct.md`). Il nous faut notre propre preuve (§2, n°6) |
| **Ce que ta ville ajoute** (chlore, rapport CCR, ebook) | Ebook, fiche | 🟢 « Information nouvelle » au sens de Schwartz : c'est la donnée de sa ville, pas une affirmation de Plush |
| Locataire : 2 min, se remet en place en partant | Fiche | 🟠 Angle Sproos, déjà exploité |

**Nom de mécanisme recommandé : aucun.** On parle de la cartouche et de la donnée de sa ville, pas d'une technologie.

---

## 5. Page produit — audit mobile (iPhone 13, 390 × 664, 10 nov. 2026)

### Au-dessus de la ligne de flottaison (capture : `scratchpad/audit/pdp-fold.png`)

| Visible | Absent |
|---|---|
| Bandeau « 🍂 Fall Sale · Ends in 3d 23h » (vrai compte à rebours : il finit le 14 nov. vers 05h UTC) | **Le prix** et l'offre Duo / Solo |
| Image principale « Your Skin & Hair routine start with Water » + 3 badges : « Filtered water », **« Stronger pressure »**, « Universal Fit » | La garantie 60 jours |
| « ★ 4.8 - 1254 Reviews » | La livraison offerte |
| Titre « Plush - Filtered Showerhead », « CHOOSE YOUR COLOR » | Le bouton d'achat |

**INFÉRENCE** : la promesse au-dessus de la ligne porte sur la peau et les cheveux (résultat corporel), alors que la règle de marque du dossier est de montrer ce que le filtre retient. Le prix n'apparaît qu'au 2e écran.

### Grille

| Critère | Note | Constat (FAIT, page lue le 10 nov.) |
|---|---|---|
| **Preuve sociale** | 🔴 | En haut, « 4.8 - 1254 Reviews ». Plus bas, « 4.8/5 — 2500+ Happy Customers » et « 5/5 — 2500+ Happy Customers ». Le widget affiche « 4.7 · 166 reviews ». 5 avis portent la mention « Verified buyer » et se terminent par « This is a fictional example review ». Le bloc « Our customers speak for us » cite 12 personnes avec leur ville, et « Real Plush customers » figure sous des avant/après. **Shopify : 0 commande (API, 10 nov.).** Ces chiffres ne sont pas documentables par la boutique. Meta examine la page de destination, et la règle FTC sur les avis et témoignages (16 CFR Part 465, en vigueur depuis le 21 oct. 2024) s'applique. **Action : masquer ces blocs jusqu'aux vrais avis** (5 minutes dans l'éditeur de thème) |
| **Avant / après** | 🔴 | Vignettes 4 et 5 du carrousel, plus la section « Hair / Skin — After 4 / 8 / 10 weeks ». Les règles publicitaires de Meta interdisent l'avant/après sur l'apparence (détail dans le playbook, §11). **Action : retirer** |
| Promesse | 🟠 | Section du haut : « Your hair and skin will feel the difference », « No more tight skin », « Shinier-looking hair ». Ce sont des résultats corporels, pas ce que le filtre retient. À adoucir avant que Meta lise la page |
| Pression | 🟠 | « Stronger pressure » sur l'image principale, contre « we won't promise you more pressure » dans la FAQ. **Action : retirer le badge** jusqu'au test du seau |
| Prix de référence | 🟠 | Prix barrés 144,02 $ et 115 $, « BUY BEFORE PRICE INCREASE », compte à rebours. **INFÉRENCE** : ces prix n'ont jamais été pratiqués (0 commande). Un prix de référence fictif est visé par les FTC Guides Against Deceptive Pricing (16 CFR 233.1). Risque faible mais réel |
| Cohérence | 🟠 | Cartouche à 60 jours dans la FAQ contre 3 mois chez le fournisseur · livraison « 5 to 12 » contre « 7–12 » · onglet à 2 étages contre 6 couches · 4 notes différentes (4.8, 4.7, 4.8/5, 5/5) |
| Vitesse | 🟠 | **LCP 4,0 s** et FCP 1,6 s en 4G lente avec CPU ×4. La page n'est complètement chargée qu'à 20,7 s, avec 232 requêtes. Sans bridage : 9,4 Mo transférés. Le seuil « bon » de Google est un LCP ≤ 2,5 s |
| Offre | 🟢 | Duo présélectionné « Best Value », « 2nd filter included », cadeaux (livraison, ebook). Le prix d'appel « From $59.99 » est clair |
| Garantie | 🟢 | « On day 59… » répétée 4 fois (achat, section risque, FAQ, pied de page) |
| FAQ et objections | 🟢 | Compatibilité, installation, pression, fréquence de changement, satisfait ou remboursé, délais, Solo ou Duo, contenu du filtre, adoucisseur, filtre brun, délai avant de sentir une différence. **Les 3 peurs de l'avatar** (compatibilité, pression, prix) sont traitées |
| Honnêteté | 🟢 | « What it won't do », le disclaimer, « Individual results vary » |
| Locataire | 🟢 | « Renting? Keep your old shower head in a drawer » |
| Contact | 🟠 | info.tryplush@gmail.com : une adresse Gmail sur un domaine myplush.us |

---

## 6. Avis clients Plush

**FAIT** : aucun export d'avis exploitable n'a été fourni. Le seul fichier trouvé (`avis_plush.txt`, Contenu > Fichiers) est une matière rédigée et n'est pas utilisé comme VOC. Yasser indique des ventes physiques réelles, notamment aux US (9 nov.).
**Conséquence pour la Phase 5** : la VOC sera construite à 100 % sur les avis des concurrents et les communautés. Dès qu'un export réel des avis de vente physique existe (même 5 à 10 avis), il passe en priorité n°1.

---

## 7. Données réelles

| Donnée | Valeur | Source |
|---|---|---|
| Commandes | **0** | API Shopify, `ordersCount`, 10 nov. |
| AOV, ventes par offre, taux de retour | Indisponibles | Aucune commande |
| Historique ads | 0 pub lancée | Yasser, 9 nov. |
| Plan Shopify | Advanced (ni compte de développement, ni Plus) | API, 10 nov. |
| Codes promo | 1 seul : `PLUSHFAM` (−20 %, 1 fois par client) | API, 10 nov. |
| Prix | Duo 74,99 $ (barré 144,02 $) · Solo 59,99 $ (barré 115 $) · cartouche 29 $ · Shipping Protection 4,99 $ | API, 10 nov. |
| Pixel | App Facebook & Instagram, pixel 1522240700051418, partage « optimized » | `../../CLAUDE.md`, 9 nov. |

---

## 8. Unit economics

### 8.1 Hypothèses

| Poste | Valeur | Statut |
|---|---|---|
| Change | 1 € = 1,16 $ | HYPOTHÈSE (convention du dossier). Sensibilité en §8.6 |
| COGS rendu US (DDP, livraison et droits inclus) | Solo 21,50 € · Duo 27,08 € + lots de cartes et stickers (0,05 € + 0,09 €) → **Solo 21,63 € = 25,09 $ · Duo 27,21 € = 31,56 $** | FAIT, devis fournisseur n° 1 du 22 oct. ⚠️ Question ouverte : le 1 € de carte et sticker est peut-être déjà dans 21,50 € (dans ce cas, −1,16 $ de coût) |
| Frais de paiement | **4,9 % + 0,25 €** par commande, soit 2,9 % + 0,25 € pour une carte « internationale » sur le plan Advanced en Belgique, plus 2 % de conversion de devise (payé en USD, versé en EUR) | FAIT : [shopify.com/be-en/pricing](https://www.shopify.com/be-en/pricing) et [help.shopify.com/…/international/pricing/fees](https://help.shopify.com/en/manual/international/pricing/fees), lus le 10 nov. Les 1,6 % + 0,25 € cités par Yasser sont le tarif des cartes européennes. Les clients US paient avec des cartes US. ❓ À confirmer : la devise de versement (Paramètres > Paiements) |
| Retours (60 jours, remboursement sans retour du produit) | 6 % du prix de vente | estimation (convention du dossier, aucune donnée). Les frais ne sont pas rendus en cas de remboursement |
| Mix d'offres | 70 % Duo / 30 % Solo | HYPOTHÈSE (Duo présélectionné) |
| Shipping Protection | Exclue du calcul de base | Taux d'ajout inconnu. Bonus en §8.4 |

### 8.2 Marge de contribution par commande

| | Duo | Solo | Cartouche seule |
|---|---|---|---|
| Prix | 74,99 $ | 59,99 $ | 29,00 $ |
| − COGS | −31,56 | −25,09 | **−11,11** (estimation : 5,58 € de surcoût dans le Duo + ~4 € d'envoi seul. Devis réel à demander) |
| − Frais 4,9 % + 0,29 $ | −3,96 | −3,23 | −1,71 |
| − Retours 6 % | −4,50 | −3,60 | −1,74 |
| **= Marge** | **34,97 $** | **28,07 $** | **14,44 $** (estimation) |
| Avec le tarif carte européenne (1,6 %) | 37,44 $ | 30,05 $ | 15,40 $ |

### 8.3 Ce qui fixe les règles de la CBO

| Indicateur | Valeur | Calcul |
|---|---|---|
| AOV (1re commande, mix 70/30) | **70,49 $** | 0,7 × 74,99 + 0,3 × 59,99 |
| **CPA de break-even** | **32,90 $ ≈ 28 €** | 0,7 × 34,97 + 0,3 × 28,07 |
| **ROAS de break-even** | **2,14** | 70,49 ÷ 32,90 |
| **CPA cible** (≈ 10 $ de profit par commande, 14 % de l'AOV) | **23 $ ≈ 20 €** | 32,90 − 10 → ROAS cible ≈ 3,1 |
| Si Meta ajoute 21 % de TVA sur les pubs (aucun numéro de TVA dans le compte pub) | CPA de break-even **lu dans Ads Manager ≈ 27 $ ≈ 23 €** · CPA cible ≈ 19 $ ≈ 16 € | 32,90 ÷ 1,21. Ads Manager affiche les dépenses hors TVA. **INFÉRENCE** (sources secondaires : [lilachbullock.com](https://www.lilachbullock.com/does-facebook-charge-vat-on-ad-spend/), [ads.tiktok.com/help — taux BE 21 %](https://ads.tiktok.com/help/article/eu-uk-vat?lang=en)). À vérifier sur une facture Meta |

### 8.4 LTV à 90 jours

| Client | Besoin d'une cartouche avant J+90 ? | Apport attendu |
|---|---|---|
| Duo (70 %) | **Non.** La 2e cartouche est dans la boîte, donc le prochain achat tombe vers J+180 avec une cartouche de 3 mois (J+120 avec 60 jours) | 0 $ |
| Solo (30 %) | Oui avec 60 jours (J+60) · limite avec 3 mois (J+90) | ≈ 25 % de rachat (HYPOTHÈSE) × 14,44 $ → +3,6 $ par client Solo, soit **+1,1 $ en moyenne** |

**LTV 90 jours ≈ 34 $ → CPA maximum sur la 1re commande ≈ CPA de break-even.** Les cartouches paient la marque à 6-12 mois, pas le test.
**Leviers immédiats sur l'AOV** (sans toucher à l'acquisition) :
- Shipping Protection : ≈ 4,75 $ net par ajout. À 50 % d'ajout, +2,4 $ par commande, ce qui monte le break-even à ~35 $. Ne pas pré-cocher la case : une case pré-cochée est interdite pour les consommateurs de l'UE, et c'est un risque de « junk fee » aux US.
- Une cartouche en 1 clic après l'achat (post-purchase upsell).

### 8.5 Ce que le budget du test permet

| | Calcul | Résultat |
|---|---|---|
| Budget | 150 €/jour × 5-6 jours | **750-900 € = 870-1 044 $** |
| Commandes pour finir à 0 | 870 ÷ 32,90 · 1 044 ÷ 32,90 | **26-32 commandes**, ~5 par jour |
| Dépense pour juger UNE créa sur l'achat (2× le CPA de break-even) | 2 × 28 € | **57 € par créa** |
| Dépense pour juger 25-30 créas de cette façon | 25-30 × 57 € | **1 425-1 710 €**, soit **~2× le budget du test** |
| Dépense moyenne par créa si la CBO répartissait également | 150 € ÷ 25-30 | 5-6 € par jour et par créa |

**INFÉRENCE** : avec 25-30 créas à 150 €/jour pendant 5-6 jours, la plupart des créas ne seront jamais jugées sur l'achat. Une CBO concentre la dépense sur quelques ads (à confirmer dans le playbook). Il faut donc soit juger le haut de funnel avec des seuils posés avant (CTR, coût par ajout au panier), soit réduire à ~12-15 créas. La décision se prend au moment de la matrice (Phase 7).

### 8.6 Sensibilité du CPA de break-even (mix 70/30)

| Variation | CPA de break-even |
|---|---|
| Base | 32,90 $ |
| Carte européenne à 1,6 % (peu probable : les clients sont US) | 35,22 $ |
| COGS sans carte et sticker (20,50 / 26,08 €) | 34,06 $ |
| Change à 1,10 | 34,44 $ |
| Change à 1,20 | 31,86 $ |
| Retours à 10 % au lieu de 6 % | 30,07 $ |
| Shipping Protection prise à 50 % | 35,26 $ |
| TVA 21 % sur les pubs (en lecture Ads Manager) | 27,19 $ |

**Fourchette réaliste : 27-35 $ selon la TVA et les retours. On prend 33 $ (28 €) jusqu'à la confirmation de la TVA.**

### 8.7 Règles de décision proposées pour la CBO — brouillon, finalisées en Phase 7

Seuils posés **avant** le lancement. En € (devise probable du compte pub, à confirmer), CPA de break-even de 28 €.

| Situation d'une ad | Décision |
|---|---|
| Dépense ≥ 28 € (1× CPA BE), 0 ajout au panier, CTR lien < 0,8 % | Couper |
| Dépense ≥ 57 € (2× CPA BE), 0 achat | Couper |
| Dépense ≥ 85 € (3× CPA BE), CPA > 42 € (1,5× BE) | Couper |
| ≥ 2 achats, CPA ≤ 28 € | Garder |
| ≥ 3 achats, CPA ≤ 20 € (cible) | Itérer (nouveaux hooks sur le même angle) et candidate au scaling |

Ces seuils sont recalés sur le CPA de break-even. Les seuils de haut de funnel (CTR, CPC, coût par ajout au panier) viendront du playbook.

---

## 9. Calendrier qui contraint l'offre (FAIT, calcul en jours ouvrés US)

| Livraison annoncée | Dernière expédition pour le 24 déc. | Dernière commande (avec 1-2 j de préparation) |
|---|---|---|
| 12 jours ouvrés (pire cas affiché) | mar. 8 déc. | **~sam. 5 - dim. 6 déc.** |
| 7 jours ouvrés (délai constaté par le fournisseur) | mar. 15 déc. | **~sam. 12 - dim. 13 déc.** |

Black Friday 27 nov., Cyber Monday 30 nov. **INFÉRENCE** : un test de 5-6 jours lancé après le 20 nov. paiera le CPM de la BFCM. Le playbook (§10) chiffre l'écart.

---

## 10. Questions ouvertes pour Yasser (réponse en 1 mot chacune)

1. **Ton compte pub Meta a-t-il un numéro de TVA dans la facturation ?** Sinon, +21 % sur chaque euro dépensé (§8.3).
2. Devise de versement de Shopify Payments : EUR ou USD ? (Paramètres > Paiements)
3. Durée de la cartouche à afficher : 3 mois (fournisseur) ou 60 jours (site actuel) ? (déjà posée)
4. Au fournisseur, par écrit : filetage ½" NPT ? débit en GPM ? document de certification chlore ? prix d'une cartouche envoyée seule ?
