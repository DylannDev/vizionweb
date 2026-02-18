# De l'idée à l'application : journal d'un projet SaaS

Ce qui suit est l'histoire d'un projet SaaS. Les noms ont été changés, certains détails ajustés, mais le parcours est fidèle à ce qu'on observe chez les porteurs de projet qu'on accompagne. Les doutes, les erreurs de parcours, les moments où tout semble bloqué, et ceux où ça décolle enfin.

Si vous pensez à lancer un SaaS, ce journal devrait vous donner une image honnête de ce qui vous attend.

## L'idée de départ

Karim gère un réseau de 12 salons de coiffure en région parisienne. Chaque mois, il passe trois jours à consolider les plannings de ses salons, vérifier les absences, calculer les primes des coiffeurs, et produire des tableaux de bord pour suivre le chiffre d'affaires par salon.

Il utilise un mix de Google Sheets, Calendly pour les rendez-vous, un logiciel de caisse vieillissant, et beaucoup de copier-coller. Chaque salon a sa propre façon de remplir les fichiers. Les erreurs sont fréquentes. Un coiffeur oublie de noter une absence, un salon utilise un mauvais code pour une prestation, et Karim passe une heure à trouver d'où vient l'incohérence.

Un soir, après avoir passé quatre heures sur un tableau croisé dynamique qui refusait de fonctionner, Karim se dit : "Il doit bien exister un outil pour ça."

Il cherche. Il teste trois logiciels de gestion de salon. Aucun ne couvre son besoin principal : la gestion multi-salons avec consolidation automatique. Les outils existants sont pensés pour un salon unique. Pour une chaîne, il faut un abonnement par salon, les données ne se croisent pas, et les reportings sont limités.

L'idée germe : et si on construisait cet outil ? Pas juste pour lui, mais pour tous les gérants de réseaux de salons qui galèrent avec les mêmes problèmes.

C'est une idée classique de SaaS. Un professionnel qui vit un problème au quotidien, qui ne trouve pas de solution existante adaptée, et qui se dit qu'il y a un marché. Parfois c'est vrai. Parfois c'est une illusion. Le seul moyen de le savoir, c'est de valider.

## Mois 1 : valider le besoin

Karim vient nous voir avec son idée. Notre premier réflexe n'est pas d'ouvrir un éditeur de code. C'est de poser des questions.

**Combien de gérants de réseaux de salons existe-t-il en France ?** On fait des recherches. Environ 3 500 réseaux de 3 salons ou plus, selon les données de la fédération professionnelle. C'est un marché de niche. Pas un marché de masse, mais suffisant pour un SaaS rentable si le prix est juste.

**Est-ce que d'autres gérants ont le même problème ?** Karim contacte 15 gérants de son réseau professionnel. Il ne leur parle pas de son idée de logiciel. Il leur demande simplement : "Comment tu gères tes plannings et tes reportings ?" Sur 15, 11 décrivent le même bricolage. Trois utilisent un logiciel qu'ils trouvent limité. Un seul est satisfait de sa solution.

**Combien seraient-ils prêts à payer ?** Question délicate. Karim pose la question autrement : "Combien de temps tu passes par mois sur ces tâches ?" Les réponses vont de 2 à 5 jours par mois. Valorisé au SMIC, c'est entre 300 et 750 euros de temps perdu. Un abonnement à 99 euros par mois paraît raisonnable.

Ces trois informations suffisent pour décider de passer à l'étape suivante. On ne parle pas de certitude, on parle de signaux suffisants pour investir dans un MVP.

### Ce qu'on aurait pu faire de mieux

Avec le recul, on aurait dû pousser la validation plus loin. 15 entretiens, c'est bien. Mais on aurait pu créer une landing page décrivant le produit, lancer une campagne Google Ads ciblée sur "logiciel gestion multi-salons coiffure", et mesurer combien de personnes cliquent sur "Demander un accès anticipé". Coût : 300 à 500 euros. Information récoltée : une mesure réelle de la demande, pas juste des déclarations d'intention.

On ne l'a pas fait, et on le regrette un peu. Les gens disent oui en entretien beaucoup plus facilement qu'ils ne sortent leur carte bancaire.

## Mois 2-3 : le MVP

Le MVP (Minimum Viable Product), c'est la version la plus réduite possible du produit qui permet de tester l'hypothèse principale. Pas la version "un peu réduite avec quand même les fonctionnalités sympas". La version minimale. Vraiment minimale.

### Définir le périmètre (et couper, encore)

Karim arrive avec une liste de 40 fonctionnalités. On les classe en trois colonnes :

- **Indispensable pour tester** : 6 fonctionnalités
- **Important mais peut attendre** : 12 fonctionnalités
- **Nice to have** : 22 fonctionnalités

Les 6 fonctionnalités du MVP :
1. Création de salons et de coiffeurs
2. Planning hebdomadaire par salon
3. Saisie des absences
4. Vue consolidée multi-salons
5. Export du planning en PDF
6. Authentification (login/mot de passe)

Pas de facturation intégrée. Pas de calcul de primes. Pas de statistiques avancées. Pas d'application mobile. Karim a du mal à accepter. "Mes gérants vont trouver ça pauvre." Peut-être. Mais un MVP riche qui met 6 mois à sortir, c'est un MVP qui arrive trop tard. On sort en 8 semaines, on teste, et on itère.

### Les choix techniques

Next.js avec TypeScript pour le frontend. PostgreSQL avec Prisma pour la base de données. NextAuth.js pour l'authentification par magic link. Vercel pour l'hébergement du frontend, un VPS Scaleway à 7 euros par mois pour la base et les workers. Tailwind CSS avec shadcn/ui pour le design.

Coût de développement du MVP : 14 000 euros. Temps réel : 10 semaines (8 semaines de dev, 2 de tests). Un peu au-dessus de l'estimation initiale. C'est presque toujours le cas.

### La landing page en parallèle

Pendant le développement, Karim crée une landing page simple avec un formulaire "Rejoindre la liste d'attente". Il la partage sur LinkedIn, dans deux groupes Facebook de gérants de salons, et par email à ses contacts. En 6 semaines, 47 personnes s'inscrivent. Pas énorme, mais des vrais gérants avec de vrais réseaux.

## Mois 4 : les premiers utilisateurs

Le MVP est en ligne. On invite les 10 gérants les plus enthousiastes de la liste d'attente. Accès gratuit pendant 3 mois en échange de leurs retours.

### La première semaine : le choc du réel

Trois constats en 72 heures. Le planning en créneaux de 30 minutes est illisible (les coiffeurs travaillent par rendez-vous de 45 min à 2h). Personne ne veut saisir manuellement ses données, tout le monde réclame un import Excel. Et 7 gérants sur 10 utilisent leur téléphone comme outil principal, alors que l'interface était pensée pour un grand écran.

### Les ajustements

En deux semaines, on corrige les trois problèmes. Le planning passe à un affichage par rendez-vous. L'import CSV est développé en 3 jours. L'interface mobile est retravaillée.

Semaine 3, les retours changent de ton. "Ah, là c'est mieux." Un gérant nous dit qu'il a gagné une demi-journée sur sa consolidation mensuelle. Premier signal fort.

## Mois 5-6 : itérer et corriger

Les 10 premiers utilisateurs deviennent nos meilleurs alliés. Ils remontent des bugs, suggèrent des améliorations, et testent les nouvelles fonctionnalités dès leur sortie.

### Les demandes qui reviennent

Certaines demandes reviennent chez 6, 7, 8 gérants sur 10. Ce sont les fonctionnalités prioritaires :

- **Calcul automatique des heures travaillées** par coiffeur et par semaine. Demandé par 9/10. Développé en 1 semaine.
- **Gestion des congés** avec un calendrier dédié. Demandé par 8/10. Développé en 5 jours.
- **Tableau de bord avec le CA par salon** (connexion avec le logiciel de caisse). Demandé par 7/10. Reporté. Trop complexe pour cette phase (chaque salon a un logiciel de caisse différent).

D'autres demandes ne viennent que d'un ou deux utilisateurs. On les note mais on ne les développe pas. La règle : si moins de 30% des utilisateurs demandent une fonctionnalité, elle attend.

### Le pivot de la tarification

On avait prévu un prix unique de 99 euros par mois, quel que soit le nombre de salons. Après discussion avec les gérants, on réalise que :

- Un gérant de 3 salons trouve 99 euros trop cher
- Un gérant de 15 salons trouve 99 euros donné

On passe à une tarification par salon : 29 euros par mois pour le premier salon, 19 euros par mois pour chaque salon supplémentaire. Un réseau de 5 salons paie 105 euros par mois. Un réseau de 12 salons paie 238 euros. Le pricing reflète la valeur perçue.

Ce changement paraît anodin. Il a doublé le nombre de gérants prêts à passer en payant à la fin de la période d'essai.

### Le passage au payant

Fin du mois 5 : la période gratuite se termine dans 30 jours. Moment de vérité. Résultat : 7 sur 10 passent en payant. MRR : 735 euros. Ce n'est plus une idée, c'est un produit.

### L'acquisition des clients suivants

Les premiers clients viennent du bouche-à-oreille et de LinkedIn. On lance ensuite une campagne Google Ads ciblée ("logiciel gestion multi-salons coiffure") à 500 euros par mois. Coût d'acquisition client : 123 euros. Pour un client qui paie 100+ euros par mois, c'est rentable dès le deuxième mois.

Fin du mois 6 : 23 clients payants. MRR : 2 150 euros. Les charges tournent autour de 900 euros par mois.

## Ce que ce projet nous a appris

Six mois de travail. Beaucoup d'incertitudes. Quelques erreurs. Et des leçons qui valent pour tous les projets SaaS.

### Leçon 1 : le marché décide, pas vous

L'idée initiale de Karim comprenait un module de gestion de stock de produits capillaires. Il était convaincu que c'était un besoin fort. Aucun des 10 beta testeurs ne l'a demandé. Pas un seul. Ce qu'ils voulaient, c'était voir le planning de tous leurs salons sur un seul écran. Parfois, la fonctionnalité qui vous semble banale est celle qui a le plus de valeur.

### Leçon 2 : sortir tôt, même imparfait

Le MVP n'était pas beau. Le planning en créneaux de 30 minutes était une erreur. L'import CSV manquait. Mais si on avait attendu de tout corriger avant de lancer, on aurait perdu 2 mois. Ce sont les vrais utilisateurs qui nous ont montré quoi corriger en premier. On ne peut pas anticiper ça derrière un bureau.

### Leçon 3 : le pricing se teste comme le produit

Le passage de 99 euros fixe à une tarification par salon a doublé les conversions. On n'aurait jamais trouvé ce prix en réfléchissant seul. Il a fallu mettre le prix initial, observer les réactions, et ajuster. Fixer le bon prix est un processus itératif, pas une décision ponctuelle.

### Leçon 4 : le coût réel d'un SaaS

Voici les chiffres réels du projet sur les 6 premiers mois :

| Poste | Coût |
|-------|------|
| Développement MVP | 14 000 euros |
| Design et landing page | 2 500 euros |
| Hébergement (6 mois) | 420 euros |
| Outils (analytics, email, monitoring) | 360 euros |
| Campagnes Ads (2 mois) | 1 000 euros |
| Frais Stripe (6 mois) | 185 euros |
| **Total** | **18 465 euros** |

Revenus sur la même période : environ 5 800 euros. On est loin du break-even. Et c'est normal. Un SaaS B2B de niche atteint généralement la rentabilité entre le mois 12 et le mois 18, à condition que le produit tient ses promesses et que l'acquisition client fonctionne.

### Leçon 5 : ce n'est pas un sprint, c'est un marathon

Karim pensait que le plus dur serait de construire le produit. En réalité, construire le produit, c'est 30% du travail. Les 70% restants : trouver des clients, les convaincre de tester, les accompagner, résoudre leurs problèmes, améliorer le produit, gérer le support, maintenir l'infrastructure.

Lancer un SaaS, c'est lancer une entreprise. Le code est un outil, pas une fin en soi.

### Ce qui attend Karim

Le projet continue. La roadmap inclut l'intégration avec les logiciels de caisse et un plan "Enterprise" pour les franchises de plus de 20 salons. Le MRR progresse de 15 à 20% par mois. Le break-even est envisageable autour du mois 14.

Est-ce que le projet va réussir ? Les fondamentaux sont là : un vrai problème, des clients qui paient, et une équipe qui écoute.

## Questions fréquentes

### Combien faut-il investir au minimum pour lancer un SaaS ?

Un MVP fonctionnel coûte entre 10 000 et 25 000 euros selon la complexité. À cela, ajoutez 2 000 à 5 000 euros pour la landing page, le design et les premiers mois d'hébergement/outils. Prévoyez aussi un budget d'acquisition de 500 à 1 500 euros par mois pour tester vos canaux marketing. Au total, comptez entre 15 000 et 35 000 euros pour couvrir les 6 premiers mois. C'est un investissement, pas une dépense. Si le produit répond à un vrai besoin et que le marché est suffisant, le retour se mesure en revenus récurrents qui grandissent chaque mois.

### Faut-il savoir coder pour lancer un SaaS ?

Non, mais il faut savoir travailler avec des développeurs. Votre rôle de fondateur n'est pas d'écrire le code, c'est de comprendre le marché, parler aux clients, définir les priorités, et prendre les décisions produit. Un bon prestataire technique (agence ou freelance senior) peut construire votre MVP pendant que vous validez le marché et préparez le lancement. Par contre, à terme, si le produit décolle, intégrer un CTO ou un développeur en interne devient souvent nécessaire. Le code est le moteur de votre business : mieux vaut avoir quelqu'un qui le comprend dans l'équipe.

### Combien de temps avant les premiers revenus ?

Avec une approche structurée, les premiers revenus arrivent entre le mois 3 et le mois 5. Le mois 1 sert à valider le besoin. Les mois 2-3 au développement du MVP. Le mois 4 aux premiers beta testeurs. Le mois 5 au passage en payant. Ce calendrier suppose que vous travaillez sur le projet à temps plein (ou presque) et que la validation marché est positive. Si vous lancez en parallèle d'une autre activité, multipliez les délais par 1,5 à 2. Le risque principal n'est pas technique, c'est de construire un produit que personne ne veut payer. D'où l'importance de valider avant de développer.