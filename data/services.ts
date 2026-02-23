import { IconType } from "react-icons";
import {
  PiRocketLaunchFill,
  PiCloudFill,
  PiBriefcaseFill,
  PiCursorClickFill,
  PiStorefrontFill,
  PiGearFill,
} from "react-icons/pi";

// ── Types ────────────────────────────────────────────────────────

export type ServiceCategory = "apps" | "sites";

export interface ServiceFaqItem {
  q: string;
  a: string;
}

export interface ServiceIncludedItem {
  title: string;
  description: string;
}

export interface ServiceTargetProfile {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  icon: IconType;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  problemTitle: string;
  problemDescription: string;
  problemPoints: string[];
  solutionTitle: string;
  solutionDescription: string;
  solutionPoints: string[];
  included: ServiceIncludedItem[];
  deliveryTime: string;
  targetProfiles: ServiceTargetProfile[];
  process: ServiceProcessStep[];
  faqs: ServiceFaqItem[];
  ctaTitle: string;
  ctaDescription: string;
}

export interface ServiceCategoryGroup {
  id: ServiceCategory;
  title: string;
  description: string;
  services: Service[];
}

// ── Data ─────────────────────────────────────────────────────────

export const services: Service[] = [
  // ────────────────────────────────────────────
  // CATÉGORIE : Applications Web
  // ────────────────────────────────────────────
  {
    slug: "mvp-proof-of-concept",
    title: "MVP & Proof of Concept",
    shortTitle: "MVP & PoC",
    category: "apps",
    icon: PiRocketLaunchFill,
    shortDescription:
      "Validez votre idée avec un produit minimum viable fonctionnel, conçu pour tester le marché avant d'investir massivement.",
    metaTitle:
      "Développement MVP & Proof of Concept sur-mesure | Vizion Web",
    metaDescription:
      "Lancez votre produit minimum viable en 4 à 8 semaines. Code sur-mesure React/Next.js, prêt à tester et à scaler.",
    heroTitle: "Validez votre idée avec un MVP fonctionnel",
    heroSubtitle:
      "Un produit fonctionnel livré en quelques semaines, prêt à être testé par de vrais utilisateurs. Vous validez votre marché avant d'investir massivement.",
    problemTitle: "Votre idée mérite mieux qu'un PowerPoint",
    problemDescription:
      "Vous avez une idée prometteuse, mais sans produit concret, impossible de convaincre des utilisateurs, des investisseurs ou même de valider vos hypothèses. Les cycles de développement classiques prennent des mois et coûtent cher. La plupart des startups ne peuvent pas se le permettre.",
    problemPoints: [
      "Vous avez une idée mais aucun produit concret à montrer aux utilisateurs ou investisseurs",
      "Vous hésitez à investir des dizaines de milliers d'euros sans validation marché",
      "Les délais de développement classiques sont trop longs pour votre timeline",
      "Vous ne savez pas quelles fonctionnalités prioriser pour un premier lancement",
    ],
    solutionTitle: "Un MVP fonctionnel en 4 à 8 semaines",
    solutionDescription:
      "On commence par trier : quelles fonctionnalités sont vraiment nécessaires pour un premier test ? On conçoit l'interface, on développe, et vous avez un produit utilisable. Pas de superflu. Que l'essentiel pour confronter votre idée au terrain et itérer.",
    solutionPoints: [
      "Cadrage stratégique pour identifier les fonctionnalités prioritaires",
      "Design UI/UX pensé pour la conversion et l'adoption",
      "Développement sur-mesure en React/Next.js, pensé pour évoluer",
      "Déploiement rapide pour collecter des retours utilisateurs concrets",
    ],
    included: [
      {
        title: "Cadrage fonctionnel",
        description:
          "Définition du périmètre MVP, priorisation des fonctionnalités, user stories",
      },
      {
        title: "UI/UX Design sur Figma",
        description:
          "Maquettes haute fidélité avec modifications illimitées jusqu'à validation",
      },
      {
        title: "Développement React / Next.js",
        description:
          "Code sur-mesure, architecture scalable, TypeScript",
      },
      {
        title: "Base de données & API",
        description:
          "Architecture data adaptée à vos besoins (PostgreSQL, Prisma, etc.)",
      },
      {
        title: "Déploiement & mise en production",
        description:
          "Hébergement, domaine, SSL, configuration production",
      },
      {
        title: "Support 30 jours",
        description:
          "Ajustements et corrections post-lancement inclus",
      },
    ],
    deliveryTime: "4 à 8 semaines",
    targetProfiles: [
      {
        title: "Startup early-stage",
        description:
          "Vous cherchez à valider un concept avant une levée de fonds ou un premier go-to-market.",
      },
      {
        title: "Porteur de projet",
        description:
          "Vous avez une idée d'application et besoin d'un prototype fonctionnel pour convaincre des partenaires.",
      },
      {
        title: "Entreprise qui innove",
        description:
          "Vous testez un nouveau service digital en interne ou pour vos clients.",
      },
    ],
    process: [
      {
        title: "Découverte & cadrage",
        description:
          "Appel de 30 min pour comprendre votre vision, définir le périmètre MVP et prioriser les fonctionnalités.",
      },
      {
        title: "Design UI/UX",
        description:
          "Maquettes Figma haute fidélité. Modifications illimitées jusqu'à validation complète.",
      },
      {
        title: "Développement & tests",
        description:
          "Implémentation sur-mesure en React/Next.js avec tests continus et points d'avancement réguliers.",
      },
      {
        title: "Lancement & suivi",
        description:
          "Déploiement en production, formation rapide, et 30 jours de support inclus.",
      },
    ],
    faqs: [
      {
        q: "Quelle est la différence entre un MVP et un prototype ?",
        a: "Un prototype est une maquette interactive sans vrai code derrière. Un MVP est un produit réel, fonctionnel, que vos utilisateurs peuvent utiliser. Nous développons des MVP : du vrai code, prêt à évoluer.",
      },
      {
        q: "Mon MVP pourra-t-il évoluer en produit complet ?",
        a: "Oui, c'est prévu dès le départ. Le code est écrit en React/Next.js/TypeScript avec une architecture propre et documentée. Ajouter des fonctionnalités plus tard ne demande pas de tout réécrire.",
      },
      {
        q: "Combien de fonctionnalités peut contenir un MVP ?",
        a: "Un bon MVP se concentre sur 3 à 5 fonctionnalités clés. Nous vous aidons à identifier lesquelles sont essentielles pour tester votre hypothèse marché.",
      },
      {
        q: "Quel est le délai de livraison ?",
        a: "Entre 4 et 8 semaines selon la complexité. Nous définissons un planning précis dès le cadrage initial.",
      },
      {
        q: "Que se passe-t-il après le lancement du MVP ?",
        a: "30 jours de support sont inclus. Ensuite, nous pouvons vous accompagner sur l'évolution du produit (ajout de fonctionnalités, optimisations, V2) via un nouveau projet.",
      },
    ],
    ctaTitle: "Vous avez une idée ? Parlons-en.",
    ctaDescription:
      "Réservez 30 minutes. On regarde ensemble si votre projet est prêt pour un MVP et on vous donne un plan d'action concret.",
  },

  {
    slug: "saas-sur-mesure",
    title: "SaaS sur-mesure",
    shortTitle: "SaaS sur-mesure",
    category: "apps",
    icon: PiCloudFill,
    shortDescription:
      "Votre produit SaaS développé de A à Z : authentification, paiements Stripe, gestion multi-tenant et dashboard d'administration.",
    metaTitle: "Développement SaaS sur-mesure | Vizion Web",
    metaDescription:
      "Nous développons votre application SaaS complète en 6 à 10 semaines. Auth, paiements Stripe, multi-tenant, dashboard admin. Code sur-mesure React/Next.js.",
    heroTitle: "Lancez votre SaaS sans équipe technique",
    heroSubtitle:
      "Auth, paiements Stripe, dashboard admin, gestion des abonnements : on prend en charge tout le développement technique pour que vous puissiez vous concentrer sur vos clients.",
    problemTitle: "Construire un SaaS technique sans CTO, c'est un casse-tête",
    problemDescription:
      "Vous avez validé votre idée, vos premiers utilisateurs sont là, mais monter une équipe technique coûte cher et recruter un CTO prend du temps. Les solutions no-code atteignent vite leurs limites dès que vos besoins se complexifient.",
    problemPoints: [
      "Recruter un CTO ou une équipe dev coûte cher et prend des mois",
      "Les solutions no-code ne suivent pas quand vos besoins se complexifient",
      "L'architecture technique (auth, paiements, multi-tenant) demande une expertise pointue",
      "Chaque mois de retard, c'est du chiffre d'affaires qui s'envole",
    ],
    solutionTitle: "Votre SaaS complet livré en 6 à 10 semaines",
    solutionDescription:
      "On s'occupe de tout le technique : architecture prévue pour tenir la charge, système de connexion et de rôles, paiements et abonnements via Stripe, dashboard pour piloter votre activité. Vous recevez un produit prêt à accueillir vos premiers clients payants.",
    solutionPoints: [
      "Architecture SaaS complète : auth, rôles, multi-tenant",
      "Intégration paiements (Stripe) et gestion des abonnements",
      "Dashboard d'administration pour piloter votre activité",
      "API solide et connexion à vos outils tiers (emailing, CRM, analytics)",
    ],
    included: [
      {
        title: "Architecture SaaS complète",
        description:
          "Auth (email, OAuth), gestion des rôles, multi-tenant si nécessaire",
      },
      {
        title: "Paiements & abonnements",
        description:
          "Intégration Stripe, gestion des plans, facturation automatique",
      },
      {
        title: "Dashboard d'administration",
        description:
          "Interface de gestion pour piloter votre SaaS (utilisateurs, données, analytics)",
      },
      {
        title: "UI/UX Design Figma",
        description:
          "Interface complète conçue pour l'adoption et la rétention",
      },
      {
        title: "Développement React / Next.js",
        description:
          "Code sur-mesure TypeScript, architecture scalable",
      },
      {
        title: "Intégrations API",
        description:
          "Connexion aux services tiers nécessaires (emailing, analytics, CRM, etc.)",
      },
      {
        title: "Déploiement & infrastructure",
        description:
          "Mise en production, monitoring, configuration serveur",
      },
      {
        title: "Support 60 jours",
        description:
          "Corrections, ajustements et accompagnement post-lancement",
      },
    ],
    deliveryTime: "6 à 10 semaines",
    targetProfiles: [
      {
        title: "Startup avec traction",
        description:
          "Vous avez validé votre marché et besoin d'un produit solide pour vos premiers clients payants.",
      },
      {
        title: "Entrepreneur SaaS",
        description:
          "Vous lancez un produit SaaS et cherchez un partenaire technique pour le développer de A à Z.",
      },
      {
        title: "Entreprise B2B",
        description:
          "Vous souhaitez transformer un service existant en plateforme SaaS commercialisable.",
      },
    ],
    process: [
      {
        title: "Découverte & architecture",
        description:
          "Compréhension de votre business model, définition de l'architecture technique et de la roadmap produit.",
      },
      {
        title: "Design UI/UX",
        description:
          "Conception de l'interface complète sur Figma. Parcours utilisateur, dashboard, onboarding.",
      },
      {
        title: "Développement itératif",
        description:
          "Développement par sprints avec démos régulières. Auth, paiements, fonctionnalités métier.",
      },
      {
        title: "Lancement & accompagnement",
        description:
          "Déploiement, tests de charge, onboarding premiers utilisateurs. Support 60 jours inclus.",
      },
    ],
    faqs: [
      {
        q: "Quelle stack technique utilisez-vous pour un SaaS ?",
        a: "React et Next.js en frontend, avec TypeScript. Pour le backend et la base de données, nous utilisons PostgreSQL avec Prisma. Les paiements sont gérés via Stripe. Cette stack est la même que celle utilisée par des entreprises comme Vercel, Notion ou Linear.",
      },
      {
        q: "Pouvez-vous gérer le multi-tenant ?",
        a: "Oui. Nous concevons l'architecture multi-tenant dès le départ si votre modèle le nécessite. Chaque client a ses données isolées tout en partageant la même infrastructure.",
      },
      {
        q: "Et si j'ai besoin de fonctionnalités supplémentaires après le lancement ?",
        a: "60 jours de support sont inclus pour les ajustements. Pour de nouvelles fonctionnalités, on établit ensemble une roadmap et un devis pour les phases suivantes. Le code est structuré pour accueillir de nouvelles briques sans tout casser.",
      },
      {
        q: "Qui est propriétaire du code ?",
        a: "Vous. Le code source, les accès serveur, les comptes Stripe : tout vous appartient à 100%. Aucune dépendance envers notre agence.",
      },
      {
        q: "Quel est le délai de livraison ?",
        a: "6 à 10 semaines selon la complexité. Nous pouvons aussi découper en phases (MVP → V2 → V3) pour un lancement progressif.",
      },
    ],
    ctaTitle: "Votre SaaS, on en parle ?",
    ctaDescription:
      "Réservez 30 minutes. On regarde votre projet, votre modèle, et on vous dit comment on peut le construire.",
  },

  {
    slug: "application-metier",
    title: "Application métier",
    shortTitle: "Application métier",
    category: "apps",
    icon: PiBriefcaseFill,
    shortDescription:
      "Automatisez vos processus internes avec un outil de gestion sur-mesure : dashboard, workflows, intégrations.",
    metaTitle:
      "Développement d'application métier sur-mesure | Vizion Web",
    metaDescription:
      "Nous développons des outils de gestion internes sur-mesure pour automatiser vos processus. Dashboard, workflows, intégrations. Livré en 4 à 8 semaines.",
    heroTitle: "Automatisez vos processus avec un outil sur-mesure",
    heroSubtitle:
      "Fini les fichiers Excel et les outils qui ne collent pas à votre réalité. On développe l'application dont votre équipe a vraiment besoin.",
    problemTitle:
      "Les tableurs et outils génériques freinent votre productivité",
    problemDescription:
      "Votre équipe perd du temps sur des tâches manuelles et répétitives. Les fichiers Excel circulent par email, les données sont éparpillées, et les outils génériques ne correspondent jamais à 100% à vos besoins métier. Résultat : erreurs, lenteurs et frustration.",
    problemPoints: [
      "Des processus manuels chronophages qui ralentissent votre équipe",
      "Des données éparpillées entre Excel, emails et outils déconnectés",
      "Des outils génériques qui ne collent pas à votre façon de travailler",
      "Des erreurs humaines coûteuses sur les tâches répétitives",
    ],
    solutionTitle: "Un outil conçu pour votre façon de travailler",
    solutionDescription:
      "On développe une application taillée pour vos processus. Toutes vos données au même endroit, les tâches répétitives automatisées, et une connexion directe avec vos outils actuels. Votre équipe arrête de perdre du temps sur de la saisie manuelle.",
    solutionPoints: [
      "Dashboard de pilotage avec les indicateurs qui comptent pour vous",
      "Workflows automatisés adaptés à vos processus réels",
      "Intégrations avec vos outils existants (CRM, comptabilité, email, etc.)",
      "Interface intuitive que votre équipe adopte sans formation complexe",
    ],
    included: [
      {
        title: "Audit de vos processus",
        description:
          "Analyse de vos workflows actuels pour identifier les gains de productivité",
      },
      {
        title: "Dashboard de pilotage",
        description:
          "Interface de gestion centralisée avec vos KPI et données clés",
      },
      {
        title: "Gestion des rôles & accès",
        description:
          "Système de permissions adapté à votre organisation",
      },
      {
        title: "Workflows automatisés",
        description:
          "Automatisation des tâches répétitives et notifications",
      },
      {
        title: "Intégrations tierces",
        description:
          "Connexion à vos outils existants (API, webhooks, import/export)",
      },
      {
        title: "Formation & documentation",
        description:
          "Formation de votre équipe et documentation utilisateur",
      },
      {
        title: "Support 90 jours",
        description:
          "Accompagnement post-lancement avec corrections et ajustements",
      },
    ],
    deliveryTime: "4 à 8 semaines",
    targetProfiles: [
      {
        title: "PME en croissance",
        description:
          "Vos processus manuels ne tiennent plus la charge et freinent votre développement.",
      },
      {
        title: "Équipe opérationnelle",
        description:
          "Vous gérez des commandes, des plannings ou des stocks avec des outils inadaptés.",
      },
      {
        title: "Direction qui veut piloter",
        description:
          "Vous avez besoin de visibilité en temps réel sur l'activité de votre entreprise.",
      },
    ],
    process: [
      {
        title: "Audit & cadrage",
        description:
          "Analyse de vos processus actuels, identification des gains et définition du périmètre.",
      },
      {
        title: "Design UI/UX",
        description:
          "Conception de l'interface sur Figma, optimisée pour l'efficacité de votre équipe.",
      },
      {
        title: "Développement & intégrations",
        description:
          "Construction de l'application avec connexion à vos outils existants.",
      },
      {
        title: "Déploiement & formation",
        description:
          "Mise en production, formation de votre équipe, et 90 jours de support.",
      },
    ],
    faqs: [
      {
        q: "Peut-on connecter l'application à nos outils existants ?",
        a: "Oui. Nous intégrons votre application avec vos outils actuels : CRM, logiciel de comptabilité, outils d'emailing, Google Workspace, etc. Si l'outil a une API, nous pouvons le connecter.",
      },
      {
        q: "L'application est-elle accessible en mobilité ?",
        a: "Oui. Toutes nos applications sont responsive et accessibles depuis un navigateur, sur mobile comme sur desktop. Pas besoin d'installer quoi que ce soit.",
      },
      {
        q: "Combien d'utilisateurs peuvent utiliser l'application ?",
        a: "Il n'y a pas de limite technique. L'architecture est conçue pour supporter votre équipe actuelle et sa croissance future.",
      },
      {
        q: "Que se passe-t-il si nos besoins évoluent ?",
        a: "Le code est structuré pour accepter de nouvelles fonctionnalités. 90 jours de support sont inclus après le lancement. Pour des évolutions majeures, on vous propose un accompagnement continu sur devis.",
      },
      {
        q: "Quel est le délai de livraison ?",
        a: "4 à 8 semaines selon la complexité des workflows et des intégrations. Un planning détaillé est établi dès le cadrage.",
      },
    ],
    ctaTitle: "Vos processus méritent mieux qu'un tableur.",
    ctaDescription:
      "Réservez 30 minutes. On regarde ensemble comment un outil sur-mesure peut faire gagner du temps à votre équipe.",
  },

  // ────────────────────────────────────────────
  // CATÉGORIE : Sites Web Professionnels
  // ────────────────────────────────────────────
  {
    slug: "landing-page",
    title: "Landing Page",
    shortTitle: "Landing Page",
    category: "sites",
    icon: PiCursorClickFill,
    shortDescription:
      "Une page de conversion rapide et optimisée pour transformer vos visiteurs en clients ou en leads qualifiés.",
    metaTitle:
      "Création de Landing Page optimisée conversion | Vizion Web",
    metaDescription:
      "Nous créons des landing pages sur-mesure optimisées pour la conversion. Design, copywriting et développement React/Next.js. Livrée en 2 à 3 semaines.",
    heroTitle: "Une landing page qui convertit, pas juste qui fait joli",
    heroSubtitle:
      "Design sur-mesure, textes écrits pour convaincre, et un seul objectif : que vos visiteurs passent à l'action. Livrée en 2-3 semaines.",
    problemTitle:
      "Votre page actuelle ne convertit pas assez",
    problemDescription:
      "Vous investissez dans la publicité ou le référencement, mais votre page ne transforme pas les visiteurs en clients. Le message est flou, le design ne rassure pas, et les visiteurs quittent la page sans agir. Chaque clic perdu, c'est du budget gaspillé.",
    problemPoints: [
      "Vos campagnes publicitaires génèrent du trafic mais peu de conversions",
      "Votre message n'est pas assez clair ou percutant pour convaincre",
      "Le design actuel ne rassure pas suffisamment vos visiteurs",
      "Vous n'avez pas de page dédiée pour vos offres ou votre acquisition",
    ],
    solutionTitle: "Une page conçue pour un seul objectif : convertir",
    solutionDescription:
      "On rédige les textes, on conçoit le design, et on développe la page en code sur-mesure. Chaque élément (titre, arguments, preuves sociales, bouton d'action) est là pour une seule raison : pousser le visiteur à agir.",
    solutionPoints: [
      "Copywriting persuasif adapté à votre cible et votre offre",
      "Design sur-mesure qui renforce votre crédibilité",
      "Optimisation technique (vitesse, SEO, responsive)",
      "Parcours de conversion testé et validé",
    ],
    included: [
      {
        title: "Copywriting de conversion",
        description:
          "Rédaction complète de la page : titres, arguments, CTA, preuves sociales",
      },
      {
        title: "UI/UX Design Figma",
        description:
          "Maquette haute fidélité avec modifications illimitées",
      },
      {
        title: "Développement React / Next.js",
        description:
          "1-2 pages, code sur-mesure, animations fluides",
      },
      {
        title: "Responsive design",
        description:
          "Optimisation parfaite sur mobile, tablette et desktop",
      },
      {
        title: "SEO technique de base",
        description:
          "Balises, structure, performance, Core Web Vitals",
      },
      {
        title: "Support 30 jours",
        description:
          "Ajustements et optimisations post-lancement",
      },
    ],
    deliveryTime: "2 à 3 semaines",
    targetProfiles: [
      {
        title: "Startup en acquisition",
        description:
          "Vous lancez des campagnes publicitaires et avez besoin d'une page qui maximise chaque clic.",
      },
      {
        title: "Entreprise qui lance une offre",
        description:
          "Vous avez un nouveau produit ou service et besoin d'une page dédiée pour le promouvoir.",
      },
      {
        title: "Entrepreneur ou freelance",
        description:
          "Vous voulez une présence en ligne rapide et efficace pour générer des leads.",
      },
    ],
    process: [
      {
        title: "Découverte & stratégie",
        description:
          "Compréhension de votre offre, votre cible, et vos objectifs de conversion.",
      },
      {
        title: "Copywriting & design",
        description:
          "Rédaction du contenu et création de la maquette Figma en parallèle.",
      },
      {
        title: "Développement",
        description:
          "Intégration sur-mesure en React/Next.js avec animations et optimisations.",
      },
      {
        title: "Lancement & optimisation",
        description:
          "Mise en ligne, tracking, et 30 jours de support pour affiner les résultats.",
      },
    ],
    faqs: [
      {
        q: "Quelle est la différence avec un template ?",
        a: "Un template est générique. Notre landing page est conçue sur-mesure pour votre offre, votre cible et vos objectifs. Le copywriting, le design et le parcours de conversion sont pensés spécifiquement pour maximiser vos résultats.",
      },
      {
        q: "Le copywriting est-il inclus ?",
        a: "Oui. Nous rédigeons l'intégralité des textes de votre page : titres, arguments, appels à l'action, preuves sociales. Le tout est adapté à votre ton de marque et optimisé pour la conversion.",
      },
      {
        q: "Puis-je modifier le contenu moi-même ensuite ?",
        a: "Pour des modifications de contenu régulières, nous pouvons intégrer un CMS simple. Pour des ajustements ponctuels, il suffit de nous contacter pendant la période de support.",
      },
      {
        q: "Quel est le délai de livraison ?",
        a: "2 à 3 semaines, de la stratégie à la mise en ligne. Un planning précis est défini dès le départ.",
      },
    ],
    ctaTitle: "Votre offre mérite une page à la hauteur.",
    ctaDescription:
      "Réservez 30 minutes. On analyse votre offre, votre cible, et on vous propose une approche de conversion adaptée.",
  },

  {
    slug: "site-vitrine",
    title: "Site Vitrine",
    shortTitle: "Site Vitrine",
    category: "sites",
    icon: PiStorefrontFill,
    shortDescription:
      "Un site professionnel qui reflète votre image de marque et inspire confiance à vos prospects dès la première visite.",
    metaTitle:
      "Création de Site Vitrine professionnel sur-mesure | Vizion Web",
    metaDescription:
      "Nous créons des sites vitrines professionnels sur-mesure en React/Next.js. Design, copywriting, SEO. 3 à 5 semaines de livraison.",
    heroTitle:
      "Un site vitrine qui donne envie de vous contacter",
    heroSubtitle:
      "Un site qui reflète la qualité de votre travail, qui rassure dès la première visite, et qui pousse vos visiteurs à vous contacter. Le tout bien référencé sur Google.",
    problemTitle: "Votre site actuel ne reflète pas la qualité de votre travail",
    problemDescription:
      "Quand un prospect cherche vos services en ligne, la première impression se fait en quelques secondes. Un site obsolète, lent ou mal conçu envoie le mauvais signal, même si votre expertise est excellente. Vos concurrents avec un meilleur site captent les clients à votre place.",
    problemPoints: [
      "Votre site est obsolète et ne reflète plus votre image professionnelle",
      "Les visiteurs quittent la page sans vous contacter",
      "Vous n'apparaissez pas (ou mal) dans les résultats de recherche Google",
      "Votre site n'est pas adapté au mobile ou manque de performance",
    ],
    solutionTitle: "Un site conçu pour rassurer et convertir",
    solutionDescription:
      "On développe un site vitrine complet qui présente votre activité clairement et donne envie de vous contacter. Textes rédigés par nos soins, design sur-mesure, et un référencement Google soigné pour que vos prospects vous trouvent.",
    solutionPoints: [
      "Design sur-mesure aligné avec votre identité de marque",
      "Copywriting professionnel qui valorise votre expertise",
      "SEO renforcé pour être visible sur les recherches locales et métier",
      "Performance optimale sur tous les appareils",
    ],
    included: [
      {
        title: "Copywriting professionnel",
        description:
          "Rédaction de l'ensemble des pages : accueil, services, à propos, contact",
      },
      {
        title: "UI/UX Design Figma",
        description:
          "Maquettes complètes avec modifications illimitées",
      },
      {
        title: "Développement React / Next.js",
        description:
          "6-10 pages sur-mesure, animations, responsive",
      },
      {
        title: "SEO renforcé",
        description:
          "Optimisation on-page complète, structure, balises, performance",
      },
      {
        title: "CMS simple",
        description:
          "Interface d'administration pour modifier vos contenus en autonomie",
      },
      {
        title: "Intégrations",
        description:
          "Formulaires de contact, Google Maps, réseaux sociaux, analytics",
      },
      {
        title: "Support 60 jours",
        description:
          "Corrections, ajustements et accompagnement post-lancement",
      },
    ],
    deliveryTime: "3 à 5 semaines",
    targetProfiles: [
      {
        title: "Entreprise établie",
        description:
          "Vous avez une activité qui tourne et besoin d'un site à la hauteur de votre réputation.",
      },
      {
        title: "Profession libérale",
        description:
          "Vous cherchez un site professionnel qui inspire confiance et génère des prises de contact.",
      },
      {
        title: "Artisan ou commerçant",
        description:
          "Vous voulez être visible en ligne et attirer des clients locaux.",
      },
    ],
    process: [
      {
        title: "Découverte & cadrage",
        description:
          "Compréhension de votre activité, vos objectifs, et votre positionnement marché.",
      },
      {
        title: "Copywriting & design",
        description:
          "Rédaction des contenus et conception des maquettes Figma en parallèle.",
      },
      {
        title: "Développement & intégrations",
        description:
          "Construction du site avec CMS, formulaires, et optimisations SEO.",
      },
      {
        title: "Lancement & suivi",
        description:
          "Mise en ligne, formation CMS, et 60 jours de support post-lancement.",
      },
    ],
    faqs: [
      {
        q: "Pourquoi du code sur-mesure plutôt que WordPress ?",
        a: "Un site React/Next.js est plus rapide, plus sécurisé, et mieux référencé qu'un site WordPress. Vous n'avez pas de plugins à maintenir, pas de failles de sécurité récurrentes, et des performances nettement supérieures.",
      },
      {
        q: "Puis-je modifier le contenu moi-même ?",
        a: "Oui. Nous intégrons un CMS simple qui vous permet de modifier textes et images en toute autonomie, sans toucher au code.",
      },
      {
        q: "Le site sera-t-il bien référencé sur Google ?",
        a: "Oui. Le SEO technique est intégré dès la conception : structure des balises, performance, vitesse de chargement, données structurées. Nous optimisons les bases pour que Google indexe et référence votre site correctement.",
      },
      {
        q: "Combien de pages sont incluses ?",
        a: "Le site vitrine comprend 6 à 10 pages. Le nombre exact est défini lors du cadrage en fonction de vos besoins.",
      },
      {
        q: "Quel est le délai de livraison ?",
        a: "3 à 5 semaines de la conception à la mise en ligne.",
      },
    ],
    ctaTitle: "Votre site actuel ne vous ressemble plus ?",
    ctaDescription:
      "Réservez 30 minutes. On fait le point sur votre site, votre marché, et on vous dit ce qu'il faut pour attirer plus de clients.",
  },

  {
    slug: "site-web-avance",
    title: "Site Web Avancé",
    shortTitle: "Site Web Avancé",
    category: "sites",
    icon: PiGearFill,
    shortDescription:
      "Un site web avec fonctionnalités sur-mesure : espace client, réservation en ligne, paiement, espace membre.",
    metaTitle:
      "Création de Site Web Avancé avec fonctionnalités sur-mesure | Vizion Web",
    metaDescription:
      "Nous développons des sites web avec fonctionnalités avancées : espace client, réservation, paiement en ligne, espace membre. Livré en 4 à 8 semaines.",
    heroTitle:
      "Un site web avec les fonctionnalités dont votre business a besoin",
    heroSubtitle:
      "Réservation en ligne, paiement, espace client, gestion de contenu : on intègre les fonctionnalités dont votre activité a besoin, directement dans votre site.",
    problemTitle:
      "Votre activité a des besoins qu'un simple site vitrine ne peut pas couvrir",
    problemDescription:
      "Vous avez besoin de plus qu'une vitrine en ligne. Prise de rendez-vous, paiement, espace client, réservations : ces fonctionnalités nécessitent du développement sur-mesure. Et les outils tout faits ne s'adaptent jamais vraiment à votre façon de travailler.",
    problemPoints: [
      "Vous gérez les réservations ou rendez-vous manuellement (téléphone, email)",
      "Vos clients n'ont pas d'espace dédié pour suivre leurs commandes ou informations",
      "Vous n'acceptez pas le paiement en ligne alors que vos clients le demandent",
      "Les solutions standardisées ne correspondent pas à votre façon de travailler",
    ],
    solutionTitle:
      "Des fonctionnalités sur-mesure intégrées à votre site",
    solutionDescription:
      "On développe votre site avec les fonctionnalités propres à votre activité. Réservation, espace client sécurisé, paiement en ligne, CMS avancé : chaque brique est codée sur-mesure pour coller à vos processus et faciliter la vie de vos clients.",
    solutionPoints: [
      "Fonctionnalités métier intégrées nativement à votre site",
      "Espace client sécurisé pour vos utilisateurs",
      "Paiement en ligne et gestion des transactions",
      "CMS avancé pour gérer votre contenu en autonomie",
    ],
    included: [
      {
        title: "Fonctionnalités sur-mesure",
        description:
          "Réservation, paiement, espace client, espace membre, selon vos besoins",
      },
      {
        title: "UI/UX Design Figma",
        description:
          "Interface complète incluant les parcours fonctionnels",
      },
      {
        title: "Développement React / Next.js",
        description:
          "Code sur-mesure avec architecture évolutive",
      },
      {
        title: "CMS avancé",
        description:
          "Gestion de contenu poussée pour vos pages, blog, portfolio, etc.",
      },
      {
        title: "Intégrations & API",
        description:
          "Paiement (Stripe), emailing, calendrier, outils tiers",
      },
      {
        title: "Formation complète",
        description:
          "Formation de votre équipe sur l'utilisation de toutes les fonctionnalités",
      },
      {
        title: "Support 90 jours",
        description:
          "Accompagnement post-lancement, corrections et ajustements",
      },
    ],
    deliveryTime: "4 à 8 semaines",
    targetProfiles: [
      {
        title: "Entreprise de services",
        description:
          "Vous avez besoin d'un système de réservation ou de prise de rendez-vous intégré à votre site.",
      },
      {
        title: "Commerce ou e-commerce léger",
        description:
          "Vous souhaitez vendre en ligne ou proposer des paiements sans passer par une marketplace.",
      },
      {
        title: "Organisation ou association",
        description:
          "Vous gérez des membres, des événements ou du contenu qui nécessite un espace dédié.",
      },
    ],
    process: [
      {
        title: "Découverte & spécifications",
        description:
          "Analyse de vos besoins fonctionnels, cartographie des parcours utilisateur.",
      },
      {
        title: "Design UI/UX",
        description:
          "Conception complète de l'interface, y compris les parcours fonctionnels (réservation, paiement, etc.).",
      },
      {
        title: "Développement & intégrations",
        description:
          "Construction du site avec l'ensemble des fonctionnalités et connexions aux services tiers.",
      },
      {
        title: "Lancement & formation",
        description:
          "Déploiement, formation complète de votre équipe, et 90 jours de support.",
      },
    ],
    faqs: [
      {
        q: "Quelles fonctionnalités pouvez-vous intégrer ?",
        a: "Réservation en ligne, paiement (Stripe), espace client avec authentification, gestion de contenu avancée (blog, portfolio, catalogue), formulaires complexes, intégrations API tierces. Si vous avez un besoin spécifique, nous pouvons le développer.",
      },
      {
        q: "Est-ce que c'est comme un e-commerce ?",
        a: "Cela dépend de vos besoins. Nous pouvons intégrer du paiement en ligne pour des services ou des produits, mais pour un catalogue e-commerce complexe avec gestion de stocks, d'autres solutions sont plus adaptées. Nous vous conseillerons lors de l'appel découverte.",
      },
      {
        q: "Puis-je gérer le contenu moi-même ?",
        a: "Oui. Nous intégrons un CMS avancé adapté à vos besoins. Vous pouvez gérer vos contenus, vos pages, et certaines fonctionnalités en toute autonomie.",
      },
      {
        q: "Le site sera-t-il sécurisé ?",
        a: "Oui. Authentification sécurisée, chiffrement des données, protection CSRF, headers de sécurité : toutes les bonnes pratiques sont appliquées dès le développement.",
      },
      {
        q: "Quel est le délai de livraison ?",
        a: "4 à 8 semaines selon la complexité des fonctionnalités. Un planning détaillé est défini dès le cadrage.",
      },
    ],
    ctaTitle: "Votre site a besoin de plus qu'une vitrine ?",
    ctaDescription:
      "Réservez 30 minutes. On fait le point sur les fonctionnalités dont vous avez besoin et on vous dit comment les intégrer.",
  },
];

// ── Helpers ──────────────────────────────────────────────────────

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(
  category: ServiceCategory
): Service[] {
  return services.filter((s) => s.category === category);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getServiceCategories(): ServiceCategoryGroup[] {
  return [
    {
      id: "apps",
      title: "Développement d'applications web",
      description:
        "MVP, SaaS et outils métier sur-mesure pour automatiser vos processus et faire grandir votre activité.",
      services: getServicesByCategory("apps"),
    },
    {
      id: "sites",
      title: "Sites web professionnels",
      description:
        "Landing pages, sites vitrines et sites avancés pour renforcer votre visibilité et votre crédibilité.",
      services: getServicesByCategory("sites"),
    },
  ];
}
