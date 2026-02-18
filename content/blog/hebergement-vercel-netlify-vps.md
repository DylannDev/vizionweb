# Hébergement web : Vercel, Netlify ou VPS classique ?

Il y a dix ans, héberger un site web signifiait louer un serveur mutualisé chez OVH, installer Apache, configurer un certificat SSL à la main, et prier pour que rien ne tombe en panne un vendredi soir. Aujourd'hui, on peut déployer un site en production en 45 secondes avec un simple git push.

Le paysage de l'hébergement a radicalement changé. Et si vous lancez un site ou une application en 2026, vous avez trois grandes familles d'options : les plateformes spécialisées comme Vercel et Netlify, et les VPS classiques (OVH, Scaleway, Hetzner). Chacune a ses forces et ses limites. Le bon choix dépend de votre projet, pas d'une préférence technique.

## L'hébergement en 2026 : ce qui a changé

Le modèle traditionnel, c'était un serveur qu'on louait au mois. On y installait tout : le système d'exploitation, le serveur web, la base de données, le certificat SSL. On gérait les mises à jour de sécurité, les sauvegardes, la montée en charge quand le trafic augmentait. C'était le travail d'un administrateur système, ou d'un développeur qui faisait aussi office d'admin sys (souvent malgré lui).

Le modèle serverless a bouleversé ça. L'idée : vous écrivez du code, vous le poussez sur une plateforme, et elle se charge de tout le reste. Pas de serveur à configurer, pas de mise à jour à gérer, pas de scaling à anticiper. Le site s'adapte automatiquement au trafic.

Est-ce que ça veut dire que les VPS sont obsolètes ? Non. Pas du tout. Certains projets ont besoin d'un serveur dédié avec un contrôle total. La question, c'est de savoir dans quelle catégorie tombe votre projet.

## Vercel : l'hébergement optimisé pour Next.js

Vercel a été créé par l'équipe qui développe Next.js. Ce n'est pas un détail : la plateforme est conçue pour tirer le maximum de ce framework. Si votre site ou votre application est construit avec Next.js, Vercel est le choix naturel.

### Ce qui fonctionne bien

**Le déploiement est d'une simplicité déconcertante.** Vous connectez votre dépôt GitHub, et chaque push sur la branche principale déclenche un déploiement automatique. En 30 à 60 secondes, votre site est en ligne avec la nouvelle version. Chaque pull request génère une URL de prévisualisation pour tester avant de valider.

**Les performances sont excellentes.** Vercel utilise un réseau CDN mondial (appelé Edge Network) qui distribue votre site depuis le point le plus proche de chaque visiteur. Le temps de chargement s'en ressent directement. Pour un site vitrine ou une application Next.js classique, les scores PageSpeed sont souvent au-dessus de 90 sans effort particulier.

**Les fonctionnalités Next.js sont supportées nativement** : Server Components, ISR (Incremental Static Regeneration), middleware, API Routes. Tout fonctionne sans configuration. Sur un VPS, certaines de ces fonctionnalités demandent du paramétrage manuel.

**L'Analytics intégré** donne des métriques de performance web (Core Web Vitals) sans installer d'outil tiers. Pratique pour suivre l'expérience utilisateur réelle.

### Les limites

Le plan gratuit (Hobby) est généreux pour des projets personnels : 100 Go de bande passante, déploiements illimités, HTTPS automatique. Mais il est limité à un usage non commercial.

Le plan Pro à 20 dollars par mois (par membre de l'équipe) débloque l'usage commercial, plus de bande passante (1 To), et des fonctionnalités comme la protection par mot de passe et les analytics avancées. Ça peut grimper si votre équipe s'agrandit.

Le point sensible, c'est le verrouillage. Vercel est optimisé pour Next.js, et certaines optimisations sont spécifiques à leur plateforme. Si vous décidez de migrer vers un autre hébergeur, il faudra parfois adapter votre code. Ce n'est pas rédhibitoire, mais c'est un facteur à considérer.

Les fonctions serverless ont aussi des limites de durée d'exécution (10 secondes sur le plan Hobby, 60 secondes sur Pro). Pour des traitements longs (génération de PDF, traitement d'images), il faut passer par des solutions annexes.

## Netlify : le déploiement continu pour les sites statiques

Netlify est arrivé avant Vercel et a popularisé le concept de déploiement continu pour les sites web. La plateforme excelle avec les sites statiques et les générateurs de sites (Astro, Hugo, Gatsby, Eleventy).

### Ce qui fonctionne bien

**Le workflow de déploiement est aussi fluide que sur Vercel.** Connexion Git, déploiement automatique, prévisualisations par branche. Le modèle est similaire, et il fonctionne très bien.

**La gestion des formulaires est intégrée.** Pas besoin de backend pour un formulaire de contact : Netlify le gère nativement avec son système Netlify Forms. Pour un site vitrine avec un formulaire de demande de devis, c'est pratique et rapide à mettre en place.

**Les redirections et les headers se configurent dans un simple fichier** (_redirects ou netlify.toml). Pour gérer des redirections SEO après une refonte de site, c'est plus simple qu'une configuration Apache ou Nginx.

**Le split testing natif** permet de tester deux versions d'une page en répartissant le trafic. Une fonctionnalité qu'on retrouve rarement chez les hébergeurs classiques.

### Les limites

Le support de Next.js existe via un adaptateur, mais il est moins bien intégré que chez Vercel. Les fonctionnalités avancées de Next.js (middleware, Server Components) peuvent nécessiter des contournements ou ne pas fonctionner de manière optimale.

Le plan gratuit inclut 100 Go de bande passante et 300 minutes de build par mois. Le plan Pro coûte 19 dollars par mois par membre. Le modèle de tarification est similaire à Vercel.

Les Netlify Functions (équivalent des fonctions serverless) ont une limite de 10 secondes d'exécution sur le plan gratuit. Comme chez Vercel, les traitements longs posent problème.

## VPS classique : le contrôle total

Un VPS (Virtual Private Server), c'est un serveur virtuel que vous louez chez un hébergeur. Vous avez un accès root, vous installez ce que vous voulez, vous configurez tout vous-même. OVH, Scaleway, Hetzner, DigitalOcean : les fournisseurs ne manquent pas.

### Ce qui fonctionne bien

**Le contrôle est total.** Choix du système d'exploitation, du serveur web, des versions de Node.js ou PHP, de la base de données. Vous faites ce que vous voulez. Si votre application a besoin d'un service spécifique (Redis, Elasticsearch, un cron job toutes les 5 minutes), vous l'installez.

**Le coût est prévisible et souvent plus bas.** Un VPS chez Hetzner à 4,50 euros par mois vous donne 2 vCPU, 4 Go de RAM et 40 Go de stockage SSD. Chez Scaleway, un DEV1-S à 5 euros par mois offre des performances similaires. Pour héberger un site Next.js avec une base PostgreSQL, c'est largement suffisant. Et le prix ne varie pas avec le trafic.

**Pas de verrouillage fournisseur.** Votre configuration fonctionne sur n'importe quel VPS. Migrer de Hetzner à Scaleway prend quelques heures, pas des semaines. Votre code reste portable.

**Les bases de données sont hébergées au même endroit.** Pas besoin d'un service tiers pour PostgreSQL ou MySQL. Tout tourne sur le même serveur (ou sur un serveur dédié si les performances l'exigent).

### Les limites

**La maintenance est votre responsabilité.** Mises à jour de sécurité, sauvegardes, monitoring, certificats SSL. Tout ça, c'est vous (ou votre prestataire). Un serveur non maintenu est un serveur vulnérable.

**Le scaling n'est pas automatique.** Si votre site passe de 100 à 10 000 visiteurs simultanés, le VPS ne s'adapte pas tout seul. Il faut anticiper, redimensionner le serveur, ou mettre en place un load balancer. C'est faisable, mais ça demande des compétences.

**Le déploiement est plus complexe.** Pas de git push magique. Il faut configurer un pipeline CI/CD (GitHub Actions, GitLab CI), gérer les processus Node.js avec PM2 ou systemd, et configurer Nginx comme reverse proxy. Un développeur expérimenté fait ça en quelques heures, mais ce n'est pas à la portée de tout le monde.

**Le temps de configuration initial est plus long.** Comptez une demi-journée à une journée pour configurer un VPS de zéro (sécurisation, installation, déploiement, SSL, monitoring basique).

## Comparaison : performance, prix, facilité, scalabilité

Voici un tableau qui résume les différences principales :

| Critère | Vercel | Netlify | VPS (Hetzner/Scaleway) |
|---------|--------|---------|----------------------|
| **Prix entrée de gamme** | Gratuit (non commercial) / 20 $/mois | Gratuit / 19 $/mois | 4-6 euros/mois |
| **Coût pour 5 personnes** | 100 $/mois | 95 $/mois | 4-20 euros/mois |
| **Déploiement** | Git push, automatique | Git push, automatique | Manuel ou CI/CD à configurer |
| **HTTPS/SSL** | Automatique | Automatique | Let's Encrypt (à configurer) |
| **CDN intégré** | Oui (Edge Network) | Oui (CDN mondial) | Non (ajout Cloudflare possible) |
| **Base de données** | Service tiers (Vercel Postgres, Supabase) | Service tiers | Installée sur le serveur |
| **Scaling** | Automatique | Automatique | Manuel |
| **Support Next.js** | Natif (optimal) | Via adaptateur | Configuration manuelle |
| **Contrôle serveur** | Aucun | Aucun | Total (accès root) |
| **Maintenance** | Aucune | Aucune | À votre charge |
| **Temps de mise en route** | 5 minutes | 5 minutes | 4-8 heures |
| **Verrouillage** | Moyen (optimisations propriétaires) | Faible | Aucun |

### Côté performance

Pour un site statique ou un site Next.js classique, Vercel et Netlify offrent des performances excellentes grâce à leur CDN mondial. Le temps jusqu'au premier octet (TTFB) est généralement inférieur à 100 ms.

Un VPS bien configuré avec Nginx et un cache peut atteindre des performances comparables, surtout si vous ajoutez Cloudflare en frontal. Mais ça demande du travail de configuration.

### Côté coûts sur 12 mois

Pour un site vitrine avec un développeur :
- **Vercel Pro** : 240 dollars/an (20 $/mois)
- **Netlify Pro** : 228 dollars/an (19 $/mois)
- **VPS Hetzner** : 54 euros/an (4,50 euros/mois) + temps de maintenance

Le VPS est 4 à 5 fois moins cher en abonnement. Mais si vous comptez le temps de maintenance (2 heures par mois minimum), la différence se réduit vite.

## Quel hébergement pour quel projet

Le choix dépend de trois facteurs : votre stack technique, votre budget, et qui va maintenir le serveur.

### Site vitrine ou landing page

**Choix recommandé : Netlify ou Vercel.** Déploiement en 5 minutes, HTTPS automatique, performances excellentes. Le plan gratuit suffit pour un petit site. Le plan Pro à 19-20 dollars par mois couvre les besoins de la plupart des PME. Pas besoin de toucher à un terminal.

### Application Next.js avec fonctionnalités dynamiques

**Choix recommandé : Vercel.** Le support natif de Next.js fait la différence. Server Components, ISR, middleware : tout fonctionne sans configuration. Si votre application utilise ces fonctionnalités, Vercel vous fait gagner des heures de configuration.

### Application avec base de données lourde et traitements backend

**Choix recommandé : VPS.** Quand votre application a besoin d'une base PostgreSQL costaud, de cron jobs, de workers en arrière-plan, ou de traitements qui durent plus de 60 secondes, le VPS est le choix logique. Vous avez le contrôle sur tout, et le coût reste prévisible même avec un usage intensif.

### Projet avec budget très serré

**Choix recommandé : VPS.** À 4,50 euros par mois, un VPS Hetzner héberge un site complet avec base de données. C'est imbattable en termes de rapport qualité-prix, à condition d'avoir les compétences techniques (ou un prestataire) pour la configuration et la maintenance.

### Projet d'équipe avec déploiement fréquent

**Choix recommandé : Vercel ou Netlify.** Les prévisualisations par branche, le déploiement automatique, et les rollbacks en un clic facilitent le travail en équipe. Sur un VPS, il faut mettre en place tout ça manuellement.

## La solution hybride

Ce qu'on fait souvent chez Vizion Web, c'est un mix. Le frontend Next.js hébergé sur Vercel pour profiter du CDN et du déploiement simple. Le backend et la base de données sur un VPS pour le contrôle et le coût. Cloudflare en frontal pour le DNS, le cache, et la protection DDoS.

Cette approche combine les avantages des deux mondes : la simplicité de Vercel pour la partie visible, et la puissance d'un VPS pour tout ce qui tourne en arrière-plan. Le coût total reste raisonnable (20 dollars Vercel + 6 euros VPS + Cloudflare gratuit), et la maintenance se concentre uniquement sur le VPS.

Ce n'est pas la seule façon de faire, mais c'est un bon compromis pour une application web qui a besoin de performance, de flexibilité, et d'un budget maîtrisé.

## Questions fréquentes

### Est-ce que je peux migrer de Vercel ou Netlify vers un VPS plus tard ?

Oui, et c'est une migration que l'on réalise régulièrement. Un site Next.js déployé sur Vercel peut tourner sur un VPS avec Node.js et un reverse proxy Nginx. Les fonctionnalités de base (SSR, API Routes) fonctionnent partout. Par contre, certaines optimisations propres à Vercel (Edge Functions, ISR optimisé) nécessitent des ajustements. Comptez 1 à 2 jours de travail pour une migration standard. Le code reste le même, c'est surtout l'infrastructure autour qu'il faut reconfigurer.

### Vercel et Netlify sont-ils fiables pour un site professionnel ?

Les deux plateformes affichent des SLA (garantie de disponibilité) supérieurs à 99,9%. Concrètement, ça représente moins de 9 heures d'indisponibilité par an. De grandes entreprises utilisent Vercel en production : Washington Post, Nike, Notion. Ce ne sont pas des plateformes pour amateurs. Le vrai risque n'est pas la fiabilité technique, mais la dépendance à un fournisseur unique. Si Vercel change ses tarifs ou ses conditions, vous n'avez pas beaucoup de marge de manoeuvre à court terme. C'est pour ça que garder un code propre et portable est toujours une bonne idée.

### Est-ce que le plan gratuit de Vercel ou Netlify suffit pour lancer un site ?

Pour un site personnel, un portfolio ou un projet de test, oui. Le plan gratuit des deux plateformes est généreux et permet de déployer un site fonctionnel avec HTTPS, CDN et déploiement automatique. Pour un usage commercial (site d'entreprise, e-commerce, application client), il faut passer au plan payant. Chez Vercel, les conditions d'utilisation du plan Hobby interdisent explicitement l'usage commercial. Chez Netlify, le plan gratuit est plus permissif mais les limites de bande passante (100 Go) et de build (300 minutes) peuvent vite être atteintes si votre site a du trafic.