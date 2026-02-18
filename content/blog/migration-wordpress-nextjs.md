# Migration WordPress vers Next.js : pourquoi et comment

WordPress propulse 43% du web. C'est un outil solide, éprouvé, avec une communauté gigantesque. Et pourtant, de plus en plus d'entreprises le quittent pour passer à Next.js. Nike, Netflix, TikTok, Notion : les sites de ces marques tournent sur des frameworks React. Les PME aussi commencent à faire le saut.

Ce n'est pas un article pour dire que WordPress est mauvais. Ce serait malhonnête. C'est un article pour expliquer dans quels cas la migration vers Next.js vaut le coup, comment ça se passe concrètement, et dans quels cas il vaut mieux rester sur WordPress.

## Pourquoi des entreprises quittent WordPress

### La performance plafonne

Un WordPress avec un thème premium, 12 plugins, WooCommerce et un page builder comme Elementor charge entre 4 et 7 secondes sur mobile. Vous pouvez optimiser : installer WP Rocket, compresser les images, activer le cache. Ça descend à 3 secondes. Peut-être 2,5 si vous êtes méticuleux. Mais vous ne descendrez jamais en dessous d'un certain seuil, parce que la base technique impose ses limites.

Un site Next.js équivalent charge en 0,5 à 1,5 seconde. Pas parce que les développeurs Next.js sont plus malins, mais parce que l'architecture est fondamentalement différente. Next.js génère des pages statiques à l'avance (quand c'est possible) et ne charge que le JavaScript strictement nécessaire. WordPress, lui, reconstruit chaque page à chaque visite en interrogeant sa base de données MySQL.

Pour un blog personnel, la différence est anecdotique. Pour un site e-commerce avec 50 000 visiteurs par mois, chaque seconde de différence se traduit en chiffre d'affaires.

### La sécurité devient un casse-tête

WordPress est la cible numéro un des attaques web. C'est mathématique : quand vous représentez 43% du web, vous attirez 43% des pirates. En 2024, Sucuri a rapporté que 96,2% des sites web infectés qu'ils ont nettoyés tournaient sur WordPress. Les vecteurs d'attaque sont presque toujours les mêmes : plugins obsolètes, thèmes non mis à jour, mots de passe faibles.

Un site Next.js déployé sur Vercel n'a pas de base de données exposée, pas de panneau d'administration accessible sur /wp-admin, pas de plugins tiers avec des failles. La surface d'attaque est radicalement réduite. Ce n'est pas infaillible (rien ne l'est), mais le niveau de risque n'a rien à voir.

Un de nos clients, un cabinet d'avocats, avait son WordPress piraté trois fois en deux ans malgré les mises à jour régulières. Après la migration vers Next.js, zéro incident de sécurité en 18 mois. Et plus besoin de payer un prestataire pour surveiller les mises à jour de sécurité chaque semaine.

### Le design est bridé par le thème

Avec WordPress, vous partez d'un thème. Même si vous le "personnalisez", vous restez dans le cadre que le thème impose. Changer la disposition d'une page, ajouter une animation spécifique, créer une interaction sur-mesure : ça nécessite du PHP custom, des hooks, des overrides de template. Le résultat est souvent fragile, et la prochaine mise à jour du thème peut tout casser.

Avec Next.js et React, il n'y a pas de thème. Vous partez d'une page blanche. Le design est créé dans Figma, puis développé pixel par pixel. Pas de compromis. Pas de "on ne peut pas faire ça avec notre thème". Si c'est faisable en web, c'est faisable.

### Le site doit faire plus qu'afficher du contenu

Dès que votre site WordPress doit intégrer des fonctions avancées (espace client authentifié, tableau de bord, réservation en temps réel, calcul de devis dynamique, intégration API tierce), vous empilez les plugins ou vous faites du développement PHP custom. Chaque plugin est une dépendance de plus, un risque de conflit de plus, une mise à jour de plus à gérer.

Next.js est un framework applicatif. Il est conçu pour construire des interfaces interactives et complexes. Ce qui nécessite 5 plugins et 3 bidouillages sur WordPress se fait nativement et proprement en React.

## Ce que Next.js apporte de différent

### Rendu hybride : statique + serveur

Next.js permet de pré-générer les pages qui ne changent pas souvent (accueil, services, articles de blog) en HTML statique pur, servi instantanément. Les pages dynamiques (espace client, résultats de recherche) sont rendues côté serveur à la demande. Vous combinez la vitesse du statique et la flexibilité du dynamique.

WordPress fait tout en dynamique par défaut. Chaque visite = une requête PHP + une requête SQL. Les plugins de cache simulent du statique, mais c'est un pansement sur une architecture qui n'était pas prévue pour ça.

### SEO technique au top

Next.js offre un contrôle total sur les balises meta, les sitemaps, le balisage Schema.org, le rendu serveur (SSR) pour les moteurs de recherche, et le pre-rendering. Google indexe un site Next.js aussi bien (souvent mieux) qu'un site WordPress, grâce au HTML propre et à la vitesse de chargement.

Le mythe "les sites JavaScript ne sont pas bien indexés par Google" date de 2015. En 2026, Google sait très bien interpréter le JavaScript. Et avec le SSR de Next.js, le contenu est de toute façon servi en HTML classique aux moteurs de recherche.

### Une base pour grandir

Un site WordPress qui grossit (plus de contenu, plus de trafic, plus de fonctionnalités) devient de plus en plus lourd et complexe à maintenir. Les conflits de plugins se multiplient, les temps de chargement augmentent, et chaque modification demande de vérifier que rien d'autre n'est cassé.

Un site Next.js bien architecturé gère la croissance plus sereinement. Le code est modulaire (chaque composant React est indépendant), le déploiement est atomique (chaque mise en production est une version complète et testée), et le scaling se fait côté hébergement sans toucher au code.

## Le processus de migration étape par étape

Migrer de WordPress vers Next.js, ce n'est pas appuyer sur un bouton. C'est un vrai projet de refonte. Voici comment ça se passe concrètement.

### Étape 1 : Audit du site existant (1-2 semaines)

On commence par cartographier tout ce qui existe : pages, articles, médias, formulaires, redirections, plugins utilisés, fonctions custom. On identifie ce qui doit être reproduit tel quel, ce qui doit être amélioré, et ce qui peut être supprimé.

Le SEO est un point d'attention critique. On relève toutes les URLs existantes, les backlinks, les mots-clés positionnés. Tout ça devra être préservé après la migration.

### Étape 2 : Design et maquettes (2-3 semaines)

C'est le moment de repenser l'expérience utilisateur. On ne reproduit pas le site WordPress à l'identique, ce serait une occasion manquée. On redessine le parcours en profitant de la liberté totale offerte par le sur-mesure. Maquettes Figma, validation avec vous, itérations.

### Étape 3 : Développement (4-6 semaines)

Le développement front-end en React/Next.js, l'intégration du design, la mise en place du CMS headless (pour que vous puissiez toujours modifier votre contenu sans toucher au code), et le développement des fonctionnalités spécifiques.

Pour le contenu, deux options :
- **CMS headless** (Sanity, Strapi, Contentful) : vous gardez une interface d'administration pour gérer vos articles et pages, mais le front-end est en Next.js
- **Fichiers Markdown** : pour les sites avec peu de contenu dynamique, les articles sont stockés en fichiers texte dans le code. Plus simple, plus rapide, mais moins adapté si vous publiez 10 articles par semaine

### Étape 4 : Migration du contenu (1-2 semaines)

Transfert des textes, images, vidéos, documents. Nettoyage des contenus obsolètes. Adaptation des formats (les shortcodes WordPress n'existent pas en Next.js, il faut les convertir). Vérification que chaque image est correctement optimisée et nommée.

### Étape 5 : Redirections et SEO (intégré aux étapes précédentes)

Chaque ancienne URL WordPress doit rediriger (301) vers la nouvelle URL Next.js correspondante. Si l'article `/blog/2024/03/mon-article` devient `/blog/mon-article`, la redirection doit être en place avant la mise en ligne. Sinon, vous perdez votre référencement du jour au lendemain.

On configure aussi les nouvelles balises meta, le sitemap XML, le robots.txt, et le balisage structuré Schema.org.

### Étape 6 : Tests et mise en ligne (1 semaine)

Tests fonctionnels, tests de performance, tests sur mobile, vérification de toutes les redirections, test des formulaires, test de l'administration du contenu. On met le nouveau site en ligne, on surveille les erreurs 404 dans la Search Console pendant les semaines qui suivent, et on corrige ce qui doit l'être.

**Durée totale réaliste : 8 à 12 semaines** pour un site de taille moyenne (20-50 pages, blog, formulaires).

## Ce qu'on perd (et ce qu'on gagne)

Soyons transparents. La migration a un coût, et on perd certaines choses.

### Ce qu'on perd

- **L'écosystème de plugins WordPress** : il n'y a pas de "WooCommerce pour Next.js". Les fonctionnalités e-commerce, formulaires, SEO doivent être développées ou intégrées via des services tiers (Stripe pour le paiement, Resend pour les emails, etc.)
- **La facilité d'édition WYSIWYG** : WordPress permet de modifier une page visuellement. Avec Next.js + CMS headless, l'interface d'édition est différente (et certains la trouvent moins intuitive au début)
- **L'autonomie pour les modifications de structure** : déplacer un bloc, ajouter une section, changer la mise en page d'une page demande l'intervention d'un développeur. Sur WordPress avec Elementor, vous le faisiez vous-même

### Ce qu'on gagne

- **Performance** : temps de chargement divisé par 2 à 4, scores PageSpeed au-dessus de 95
- **Sécurité** : plus de plugins vulnérables, plus de base de données exposée, plus de mises à jour urgentes le dimanche matin
- **Liberté de design** : chaque page peut avoir un design unique, sans les contraintes d'un thème
- **Scalabilité** : le site supporte la croissance sans dégradation de performance
- **Expérience utilisateur** : navigation instantanée entre les pages (SPA), animations fluides, interactions riches
- **Coût de maintenance réduit** : pas de plugins à mettre à jour, pas de conflits à résoudre, pas de failles à patcher en urgence

## Quand rester sur WordPress

La migration vers Next.js n'est pas toujours la bonne décision. Voici les cas où WordPress reste le meilleur choix.

### Votre site est un blog pur

Si votre activité repose sur la publication fréquente de contenu (articles, actualités, guides) et que vous n'avez pas de besoins fonctionnels avancés, WordPress est dans son élément. L'éditeur Gutenberg est mature, les plugins SEO (Yoast, RankMath) sont excellents, et la publication est accessible à n'importe qui dans l'équipe.

### Votre budget est limité

Une migration complète vers Next.js coûte entre 5 000 et 15 000 euros selon la taille du site. Si votre WordPress fonctionne correctement et que votre budget ne permet pas cet investissement, restez sur WordPress et investissez plutôt dans l'optimisation de l'existant (hébergement performant, nettoyage de plugins, optimisation des images).

### Votre équipe gère le site en autonomie

Si plusieurs personnes non techniques mettent à jour le site quotidiennement (ajout de produits, modification de pages, publication d'articles), WordPress offre une expérience d'édition que Next.js + CMS headless ne reproduit pas totalement. L'interface est différente, et la transition demande un temps d'adaptation.

### Vous n'avez pas de problème de performance ou de sécurité

Si votre WordPress tourne bien, charge en moins de 2 secondes, n'a jamais été piraté, et vous n'avez pas besoin de fonctionnalités avancées, pourquoi migrer ? La meilleure technologie est celle qui résout un problème réel. Si vous n'avez pas de problème, gardez votre énergie et votre budget pour autre chose.

Chez Vizion Web, on développe en React et Next.js. C'est notre spécialité, et on est convaincus de la valeur de ces technologies pour les projets qui les justifient. Mais on ne recommandera jamais une migration juste pour le plaisir d'utiliser une techno plus récente. Si votre WordPress fait le job, on vous le dira. Et si la migration est pertinente, on vous accompagne de l'audit initial à la mise en ligne, en préservant votre référencement et en construisant un site qui vous servira pour les 5 prochaines années.

## Questions fréquentes

### Est-ce que je perds mon référencement Google en migrant ?

Pas si la migration est bien préparée. Le SEO se préserve grâce aux redirections 301 (chaque ancienne URL pointe vers la nouvelle), à la conservation des balises meta et des contenus, et à la soumission du nouveau sitemap à Google Search Console. Il y a souvent une période de flottement de 2 à 4 semaines pendant que Google re-crawle le site, mais les positions reviennent. Dans beaucoup de cas, elles s'améliorent grâce aux gains de performance.

### Puis-je garder WordPress comme CMS et utiliser Next.js pour l'affichage ?

Oui, c'est ce qu'on appelle l'approche "headless WordPress". WordPress reste votre interface d'administration (vous écrivez vos articles dedans), mais le front-end visible par les visiteurs est en Next.js. Vous gardez l'éditeur que vous connaissez, et vous profitez de la performance de Next.js pour l'affichage. C'est une bonne option de transition, même si on recommande souvent de passer à un CMS headless natif (Sanity, Strapi) pour une architecture plus propre à terme.

### Combien de temps prend une migration complète ?

Pour un site vitrine de 20 à 50 pages avec un blog, comptez 8 à 12 semaines. Pour un site e-commerce ou une application avec des fonctionnalités spécifiques, 12 à 20 semaines. Ces durées incluent l'audit, le design, le développement, la migration de contenu et les tests. Le facteur le plus variable est souvent le temps de validation côté client : les allers-retours sur le design et le contenu peuvent allonger le planning si les retours tardent.