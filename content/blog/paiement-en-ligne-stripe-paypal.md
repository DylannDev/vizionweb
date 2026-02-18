# Paiement en ligne sur votre site : Stripe, PayPal ou autre ?

Votre client est sur votre site. Il a trouvé le service qui l'intéresse, il est prêt à payer. Il clique sur "Commander". Et là, la page de paiement met 4 secondes à charger, le formulaire lui demande de créer un compte, et il est redirigé vers une interface qui ne ressemble plus du tout à votre site. Il ferme l'onglet. Vous venez de perdre une vente.

Le choix de votre solution de paiement en ligne n'est pas un détail technique. C'est une décision qui impacte directement votre chiffre d'affaires, votre trésorerie, et l'expérience que vos clients ont avec votre marque.

Cet article compare les principales solutions du marché (Stripe, PayPal, GoCardless, Mollie) pour vous aider à choisir celle qui correspond à votre activité. Pas celle qui est la plus connue, mais celle qui fait sens pour votre cas précis.

## Pourquoi le choix de la solution de paiement compte

Le taux d'abandon de panier moyen sur le web tourne autour de 70%, selon les études du Baymard Institute. Parmi les raisons principales : un processus de paiement trop complexe (17%), l'obligation de créer un compte (26%), et le manque de confiance dans la sécurité du paiement (25%).

Votre solution de paiement influence directement ces trois points.

Un formulaire de paiement intégré à votre site, rapide, sans redirection, qui accepte les cartes bancaires et Apple Pay, convertit mieux qu'un bouton PayPal qui envoie le client sur une page externe. Ce n'est pas une opinion, c'est mesurable.

Mais le taux de conversion n'est pas le seul critère. Les frais de transaction mangent votre marge. L'intégration technique détermine la flexibilité de votre système. Le délai de versement affecte votre trésorerie. Et la gestion des litiges peut devenir un cauchemar si elle est mal gérée.

Voyons chaque solution en détail.

## Stripe : la référence développeurs

Stripe est né en 2010, fondé par deux frères irlandais qui trouvaient que les solutions de paiement existantes étaient trop compliquées à intégrer. Leur promesse : un paiement en ligne qui s'intègre en quelques lignes de code. Seize ans plus tard, Stripe traite des centaines de milliards de dollars par an et équipe des entreprises comme Amazon, Google, Shopify et des milliers de PME.

### Ce qui fait la force de Stripe

**L'intégration est d'une qualité remarquable.** Le formulaire de paiement (Stripe Elements) s'intègre directement dans votre site, avec votre design. Pas de redirection. Le client reste sur votre page, tape ses informations de carte, et valide. L'expérience est fluide.

**La documentation est la meilleure du marché.** Guides étape par étape, exemples de code dans tous les langages, API bien conçue. Un développeur compétent intègre Stripe en moins d'une journée. Pour les non-développeurs, Stripe propose aussi des Payment Links (liens de paiement) utilisables sans code.

**Les moyens de paiement sont nombreux.** Carte bancaire, Apple Pay, Google Pay, SEPA, iDEAL, Bancontact, virement. Vous activez ceux que vous voulez depuis le dashboard. Pour une entreprise qui vend en Europe, c'est un atout : chaque pays a ses préférences de paiement.

**Les abonnements sont gérés nativement.** Stripe Billing permet de mettre en place des paiements récurrents avec gestion des essais gratuits, des changements de plan, des relances automatiques en cas d'échec de paiement. Si vous vendez un service par abonnement, c'est un gros avantage.

**Le reporting est clair.** Dashboard complet avec ventes, remboursements, litiges, revenus récurrents. Export CSV, webhooks pour synchroniser avec votre comptabilité. Stripe Revenue Recognition automatise la reconnaissance du revenu pour les abonnements.

### Les limites de Stripe

Le support client peut être lent. Pas de téléphone sur les plans standards, uniquement email et chat. Quand vous avez un problème de paiement bloqué, attendre 24 heures pour une réponse est frustrant.

Le dashboard est puissant mais dense. Pour quelqu'un qui n'est pas technique, l'interface peut paraître intimidante. PayPal, de ce point de vue, est plus accessible pour un utilisateur non technique.

Les frais pour les micro-transactions (moins de 5 euros) sont proportionnellement élevés. Le fixe de 0,25 euro par transaction pèse lourd sur un paiement de 2 euros.

### Frais Stripe

- **Carte bancaire européenne** : 1,5% + 0,25 euro par transaction
- **Carte non européenne** : 2,9% + 0,25 euro
- **SEPA Direct Debit** : 0,35 euro par transaction (plafonné à 5 euros)
- **Stripe Link (paiement accéléré)** : pas de surcoût
- **Pas de frais mensuels fixes** sur le plan standard

Pour une vente de 100 euros par carte européenne, Stripe prélève 1,75 euro. Sur 1 000 transactions par mois, ça fait 1 750 euros de frais.

## PayPal : la notoriété

PayPal existe depuis 1998. C'est la solution de paiement en ligne la plus connue du grand public. Plus de 430 millions de comptes actifs dans le monde. Quand quelqu'un voit le bouton PayPal, il sait ce que c'est. Cette familiarité a de la valeur, surtout pour le e-commerce B2C.

### Ce qui fait la force de PayPal

**La confiance des acheteurs.** Beaucoup de consommateurs hésitent à taper leur numéro de carte sur un site qu'ils ne connaissent pas. Mais ils ont un compte PayPal et sont prêts à l'utiliser. Pour un petit e-commerce sans grande notoriété, proposer PayPal peut augmenter le taux de conversion de 10 à 15% selon les secteurs.

**La protection acheteur.** PayPal est connu pour favoriser les acheteurs en cas de litige. C'est un inconvénient pour le vendeur (on en reparle), mais pour l'acheteur, c'est rassurant. Il sait que s'il y a un problème, PayPal interviendra.

**La simplicité pour les non-techniciens.** Créer un bouton PayPal et le coller sur une page web prend 10 minutes. Pas besoin de développeur. Pour un indépendant qui veut vendre une formation ou un ebook, c'est la solution la plus rapide à mettre en place.

**PayPal Checkout** permet maintenant d'accepter les cartes bancaires directement, sans que l'acheteur ait besoin d'un compte PayPal. L'interface s'est améliorée ces dernières années.

### Les limites de PayPal

**La redirection.** Le flux de paiement classique envoie le client sur le site PayPal, puis le ramène sur votre site. Cette redirection casse l'expérience et augmente les abandons. PayPal propose des solutions intégrées (PayPal Checkout avec les boutons avancés), mais l'intégration est moins propre que chez Stripe.

**Les litiges.** PayPal tranche souvent en faveur de l'acheteur. Si un client conteste un paiement, vos fonds sont gelés pendant l'enquête. Pour un vendeur de services (consulting, développement), c'est un risque réel. Un client mécontent peut récupérer son argent même si le service a été rendu.

**Les frais sont plus élevés.** Sur les transactions par carte, PayPal prend une commission supérieure à Stripe. Et les frais de conversion de devises sont particulièrement élevés (3 à 4% au-dessus du taux de change).

**Le blocage de compte.** PayPal est connu pour geler les comptes de manière parfois arbitraire, surtout quand les volumes augmentent rapidement ou quand l'activité est jugée "à risque". Retrouver l'accès à ses fonds peut prendre des semaines. C'est rare, mais quand ça arrive, c'est un cauchemar.

### Frais PayPal

- **Transaction en ligne (France)** : 2,9% + 0,35 euro par transaction
- **Paiements QR code** : 1,2% + 0,10 euro (en dessous de 10 euros)
- **Conversion de devises** : 3 à 4% de frais supplémentaires
- **Pas de frais mensuels** sur le compte standard

Pour une vente de 100 euros, PayPal prélève 3,25 euros. Contre 1,75 euro chez Stripe. Sur 1 000 transactions, la différence est de 1 500 euros par mois. Ça pèse.

## GoCardless et les alternatives

### GoCardless : le prélèvement SEPA

GoCardless est spécialisé dans le prélèvement bancaire (SEPA Direct Debit). Pas de carte bancaire, pas de formulaire : le client donne son IBAN, autorise le prélèvement, et les paiements sont automatiques.

**Idéal pour** : les abonnements, les paiements récurrents, les factures régulières entre professionnels. Un cabinet comptable qui facture ses clients mensuellement, un SaaS B2B avec des abonnements annuels, une salle de sport qui prélève ses adhérents.

**L'avantage principal** : les frais. GoCardless facture entre 0,20 et 0,50 euro par transaction sur le plan standard, sans pourcentage. Sur un prélèvement de 500 euros, ça fait 0,50 euro au lieu de 7,75 euros chez Stripe (1,5% + 0,25) ou 14,85 euros chez PayPal (2,9% + 0,35). La différence est massive sur les montants élevés.

**La limite** : le prélèvement SEPA met 3 à 5 jours ouvrés pour être confirmé. Ce n'est pas adapté à un achat impulsif ou à un paiement unique ponctuel. Et le client doit fournir son IBAN, ce qui est moins naturel que taper un numéro de carte.

### Mollie : l'alternative européenne

Mollie est un prestataire de paiement néerlandais qui monte en puissance. Interface claire, intégration propre, support en français. Une bonne alternative à Stripe pour les entreprises européennes.

**Frais** : 1,8% + 0,25 euro par carte européenne. Légèrement plus cher que Stripe, mais Mollie inclut certaines fonctionnalités (comme les pages de paiement hébergées) sans surcoût.

**Point fort** : le support des méthodes de paiement locales (iDEAL, Bancontact, Klarna, SOFORT) est natif et bien intégré. Si vous vendez dans les pays du Benelux ou en Allemagne, Mollie est un choix pertinent.

## Tableau comparatif complet

| Critère | Stripe | PayPal | GoCardless | Mollie |
|---------|--------|--------|------------|--------|
| **Frais carte européenne** | 1,5% + 0,25 euro | 2,9% + 0,35 euro | N/A (SEPA uniquement) | 1,8% + 0,25 euro |
| **Frais SEPA** | 0,35 euro | N/A | 0,20-0,50 euro | 0,25 euro |
| **Frais mensuels** | 0 euro | 0 euro | 0 euro (plan standard) | 0 euro |
| **Délai de versement** | 7 jours (modifiable à 2j) | Instantané (sur compte PayPal) | 3-5 jours ouvrés | 1-2 jours ouvrés |
| **Intégration technique** | Excellente (API, SDK, docs) | Correcte (API améliorée) | Bonne (API, webhooks) | Très bonne (API, plugins) |
| **Sans code** | Payment Links, Checkout | Boutons, facturation | Dashboard | Pages de paiement |
| **Abonnements** | Natif (Stripe Billing) | Limité | Natif | Via plugin |
| **Support** | Email, chat (lent) | Email, téléphone | Email, chat | Email, téléphone (FR) |
| **Protection vendeur** | Bonne | Faible (favorise acheteurs) | Bonne | Bonne |
| **Adapté pour** | Apps, SaaS, e-commerce | E-commerce B2C, marketplace | Abonnements, B2B | E-commerce Europe |

## Comment choisir la bonne solution

Le choix dépend de trois questions.

### Question 1 : Quel type de paiement ?

**Paiements ponctuels par carte** (vente en ligne, réservation, prestation) : Stripe est le meilleur rapport qualité-intégration-frais.

**Paiements récurrents (abonnements, prélèvements)** : GoCardless pour le SEPA si les montants sont élevés, Stripe Billing si vous voulez carte + SEPA dans la même interface.

**Petits montants B2C avec clientèle grand public** : PayPal en complément d'une solution carte. Pas en remplacement, en complément.

### Question 2 : Quel est votre volume ?

Moins de 50 transactions par mois ? La différence de frais entre Stripe et PayPal est négligeable (quelques dizaines d'euros). Choisissez la solution la plus simple à intégrer.

Plus de 500 transactions par mois ? Chaque point de pourcentage compte. Stripe à 1,5% vs PayPal à 2,9%, sur un volume de 50 000 euros par mois, c'est 700 euros d'économie mensuelle. Sur un an, 8 400 euros. De quoi financer le développement d'une meilleure expérience de paiement.

### Question 3 : Quel niveau d'intégration technique ?

**Sans développeur** : PayPal (boutons), Stripe (Payment Links), ou Mollie (pages hébergées). Vous pouvez encaisser en ligne en quelques heures sans toucher une ligne de code.

**Avec un développeur** : Stripe, sans hésitation. L'API est la mieux documentée, l'intégration est la plus propre, et les possibilités sont les plus larges. Formulaire intégré à votre design, webhooks pour automatiser votre back-office, Stripe Connect pour les marketplaces.

**Avec un CMS (WordPress, Shopify)** : des plugins existent pour toutes les solutions. WooCommerce supporte Stripe, PayPal et Mollie nativement. Shopify a son propre système (Shopify Payments, propulsé par Stripe) avec des frais réduits.

## La combinaison gagnante pour une PME

Ce qu'on recommande à la plupart de nos clients PME :

**Stripe comme solution principale** pour les paiements par carte. Frais compétitifs, intégration propre, reporting clair. C'est la colonne vertébrale de votre système de paiement.

**PayPal en option secondaire** si votre clientèle est B2C et achète régulièrement en ligne. Certains clients préfèrent PayPal, et leur offrir le choix réduit les abandons.

**GoCardless pour les prélèvements** si vous facturez des abonnements ou des prestations récurrentes à des clients professionnels. Les frais au prélèvement sont imbattables sur les montants supérieurs à 50 euros.

Cette combinaison couvre 95% des cas d'une PME française.

## Questions fréquentes

### Est-ce que Stripe fonctionne pour les auto-entrepreneurs et les petites structures ?

Oui, Stripe accepte les auto-entrepreneurs, les associations, les SARL, les SAS et pratiquement toutes les formes juridiques françaises. L'inscription prend 15 minutes : vous renseignez vos informations d'identité, votre numéro SIRET, et un RIB. Stripe vérifie votre identité sous 24 à 48 heures. Il n'y a pas de frais mensuels ni de minimum de transactions. Vous payez uniquement quand vous encaissez. Un auto-entrepreneur qui fait 5 ventes par mois paie les mêmes frais qu'une entreprise qui en fait 5 000.

### Comment gérer la facturation et la conformité avec le paiement en ligne ?

Le paiement en ligne ne vous dispense pas d'émettre des factures conformes. Stripe et Mollie proposent des outils de facturation intégrés (Stripe Invoicing), mais pour une gestion comptable complète, il vaut mieux connecter votre solution de paiement à un outil de facturation (Pennylane, Tiime, ou votre logiciel comptable). La connexion se fait via API ou via des outils comme Zapier. Côté TVA, Stripe Tax peut calculer et collecter automatiquement la TVA selon le pays de l'acheteur. C'est particulièrement utile si vous vendez des services numériques à des clients dans plusieurs pays européens.

### Que se passe-t-il si un client conteste un paiement (chargeback) ?

Un chargeback, c'est quand un client demande à sa banque d'annuler un paiement effectué sur votre site. Chez Stripe, vous recevez une notification et avez 7 à 21 jours pour fournir des preuves (confirmation de commande, preuve de livraison, échanges email). Si la banque tranche en votre faveur, vous récupérez les fonds. Sinon, vous perdez le montant plus des frais de litige (15 euros chez Stripe). Chez PayPal, le processus est similaire mais l'issue est plus souvent favorable à l'acheteur. Pour limiter les chargebacks, trois pratiques : des conditions de vente claires, un service client réactif, et une politique de remboursement transparente. Mieux vaut rembourser directement un client mécontent que de subir un chargeback qui coûte plus cher et nuit à votre réputation auprès des réseaux de cartes.