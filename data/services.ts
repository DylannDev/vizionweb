import { IconType } from "react-icons";
import {
  PiRocketLaunchFill,
  PiCloudFill,
  PiBriefcaseFill,
  PiCursorClickFill,
  PiStorefrontFill,
  PiGearFill,
  // Problem icons
  PiLightbulbFill,
  PiCurrencyDollarFill,
  PiHourglassFill,
  PiListBulletsFill,
  PiUsersFill,
  PiProhibitFill,
  PiGearSixFill,
  PiChartLineDownFill,
  PiClockFill,
  PiFilesFill,
  PiPuzzlePieceFill,
  PiWarningFill,
  PiMegaphoneFill,
  PiEyeSlashFill,
  PiBrowserFill,
  PiClockCountdownFill,
  PiSignOutFill,
  PiMagnifyingGlassFill,
  PiDeviceMobileFill,
  PiCalendarXFill,
  PiUserCircleFill,
  PiCreditCardFill,
  // Solution icons
  PiTargetFill,
  PiPenNibFill,
  PiCodeFill,
  PiShieldCheckFill,
  PiChartBarFill,
  PiLinkFill,
  PiChartPieFill,
  PiArrowsClockwiseFill,
  PiPlugsFill,
  PiPaintBrushFill,
  PiLightningFill,
  PiPaletteFill,
  PiNotePencilFill,
  PiTrendUpFill,
  PiDevicesFill,
  PiWrenchFill,
  PiLockKeyFill,
  PiWalletFill,
  PiArticleFill,
  // Target profile icons
  PiFlaskFill,
  PiBuildingsFill,
  PiHandshakeFill,
  PiChartLineUpFill,
  PiUserFill,
  PiFactoryFill,
  PiClipboardTextFill,
  PiTreeStructureFill,
  PiCrosshairFill,
  PiSuitcaseSimpleFill,
  PiMapPinFill,
  PiStethoscopeFill,
  PiCalendarCheckFill,
  PiShoppingCartFill,
  PiUsersThreeFill,
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
  icon: IconType;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  icon: IconType;
  iconSrc: string;
  iconBg: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  problemTitle: string;
  problemDescription: string;
  problemPoints: { text: string; icon: IconType }[];
  solutionTitle: string;
  solutionDescription: string;
  solutionPoints: { text: string; icon: IconType }[];
  included: ServiceIncludedItem[];
  deliveryTime: string;
  targetProfiles: ServiceTargetProfile[];
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
    iconSrc: "/icons/mvp.svg",
    iconBg: "bg-violet-500",
    shortDescription:
      "Validez votre idée rapidement avec un produit fonctionnel. Livré en 2-6 semaines, prêt à tester avec vos premiers utilisateurs.",
    metaTitle: "Développement MVP & Proof of Concept sur-mesure | Vizion Web",
    metaDescription:
      "Lancez votre produit minimum viable en 2 à 6 semaines. Code sur-mesure React/Next.js, prêt à tester et à scaler.",
    heroTitle: "Validez votre idée avec un MVP fonctionnel",
    heroSubtitle:
      "Un produit fonctionnel livré en quelques semaines, prêt à être testé par de vrais utilisateurs. Vous validez votre marché avant d'investir massivement.",
    problemTitle: "Votre idée mérite mieux qu'un PowerPoint",
    problemDescription:
      "Vous avez une idée prometteuse, mais sans produit concret, impossible de convaincre des utilisateurs, des investisseurs ou même de valider vos hypothèses. Les cycles de développement classiques prennent des mois et coûtent cher.",
    problemPoints: [
      {
        text: "Vous avez une idée mais aucun produit concret à montrer aux utilisateurs ou investisseurs",
        icon: PiLightbulbFill,
      },
      {
        text: "Vous hésitez à investir des dizaines de milliers d'euros sans validation marché",
        icon: PiCurrencyDollarFill,
      },
      {
        text: "Les délais de développement classiques sont trop longs pour votre timeline",
        icon: PiHourglassFill,
      },
      {
        text: "Vous ne savez pas quelles fonctionnalités prioriser pour un premier lancement",
        icon: PiListBulletsFill,
      },
    ],
    solutionTitle: "Un MVP fonctionnel en 2 à 6 semaines",
    solutionDescription:
      "On commence par trier : quelles fonctionnalités sont vraiment nécessaires pour un premier test ? On conçoit l'interface, on développe, et vous avez un produit utilisable. Pas de superflu. Que l'essentiel pour confronter votre idée au terrain et itérer.",
    solutionPoints: [
      {
        text: "Cadrage stratégique pour identifier les fonctionnalités prioritaires",
        icon: PiTargetFill,
      },
      {
        text: "Design UI/UX pensé pour la conversion et l'adoption",
        icon: PiPenNibFill,
      },
      {
        text: "Développement sur-mesure en React/Next.js, pensé pour évoluer",
        icon: PiCodeFill,
      },
      {
        text: "Déploiement rapide pour collecter des retours utilisateurs concrets",
        icon: PiRocketLaunchFill,
      },
    ],
    included: [
      {
        title: "Cadrage fonctionnel",
        description:
          "Définition du périmètre, priorisation des fonctionnalités, roadmap claire",
      },
      {
        title: "UI/UX Design sur Figma",
        description:
          "Maquettes haute fidélité, modifications illimitées jusqu'à validation",
      },
      {
        title: "Développement sur-mesure",
        description:
          "Code qui vous appartient à 100%, architecture pensée pour évoluer",
      },
      {
        title: "Base de données & hébergement",
        description:
          "Stockage sécurisé de vos données, déploiement et mise en production inclus",
      },
      {
        title: "Tests & recette",
        description:
          "Vérification complète avant mise en ligne, corrections incluses",
      },
      {
        title: "Support 90 jours",
        description:
          "Ajustements post-lancement et accompagnement pendant vos premiers retours utilisateurs",
      },
    ],
    deliveryTime: "2 à 8 semaines",
    targetProfiles: [
      {
        title: "Startup early-stage",
        description:
          "Vous cherchez à valider un concept avant une levée de fonds ou un premier go-to-market.",
        icon: PiRocketLaunchFill,
      },
      {
        title: "Porteur de projet",
        description:
          "Vous avez une idée d'application et besoin d'un prototype fonctionnel pour convaincre des partenaires.",
        icon: PiLightbulbFill,
      },
      {
        title: "Entreprise qui innove",
        description:
          "Vous testez un nouveau service digital en interne ou pour vos clients.",
        icon: PiFlaskFill,
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
        a: "Entre 2 et 8 semaines selon la complexité. Nous définissons un planning précis dès le cadrage initial.",
      },
      {
        q: "Que se passe-t-il après le lancement du MVP ?",
        a: "90 jours de support sont inclus. Ensuite, nous pouvons vous accompagner sur l'évolution du produit (ajout de fonctionnalités, optimisations, V2) via un nouveau projet.",
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
    iconSrc: "/icons/saas.svg",
    iconBg: "bg-blue-500",
    shortDescription:
      "Une application SaaS complète avec gestion utilisateurs, paiements et tableau de bord. De l'architecture à la mise en ligne.",
    metaTitle: "Développement SaaS sur-mesure | Vizion Web",
    metaDescription:
      "Nous développons votre application SaaS complète en 3 à 8 semaines. Auth, paiements Stripe, multi-tenant, dashboard admin. Code sur-mesure React/Next.js.",
    heroTitle: "Transformez votre idée validée en SaaS qui facture",
    heroSubtitle:
      "Vous avez les clients, il vous manque le produit. On construit toute la partie technique et on vous livre un SaaS prêt à encaisser ses premiers paiements.",
    problemTitle: "Vous avez la demande, mais pas le produit pour y répondre",
    problemDescription:
      "Vos premiers utilisateurs sont là, votre offre tient la route. Mais sans produit technique solide, impossible d'aller plus loin. Et les outils no-code vous freinent dès qu'il faut scaler.",
    problemPoints: [
      {
        text: "Vos premiers clients attendent, mais vous n'avez rien à leur vendre",
        icon: PiUsersFill,
      },
      {
        text: "Recruter un CTO ou monter une équipe prend des mois que vous n'avez pas",
        icon: PiProhibitFill,
      },
      {
        text: "Les outils no-code craquent dès qu'il faut gérer des paiements ou des rôles",
        icon: PiGearSixFill,
      },
      {
        text: "Chaque mois sans produit, c'est du revenu que vous laissez filer",
        icon: PiChartLineDownFill,
      },
    ],
    solutionTitle: "On transforme votre idée en produit prêt à facturer",
    solutionDescription:
      "En 3 à 8 semaines, on développe votre SaaS complet : inscription, paiements, gestion des comptes et tableau de bord inclus. Vous récupérez un produit fonctionnel, prêt à accueillir vos premiers clients payants.",
    solutionPoints: [
      {
        text: "Un système de comptes et de rôles pour gérer vos utilisateurs dès le premier jour",
        icon: PiShieldCheckFill,
      },
      {
        text: "Des paiements et abonnements intégrés via Stripe pour commencer à encaisser",
        icon: PiCreditCardFill,
      },
      {
        text: "Un tableau de bord pour suivre votre activité et piloter votre croissance",
        icon: PiChartBarFill,
      },
      {
        text: "Une API connectée à vos outils existants (emailing, CRM, analytics)",
        icon: PiPlugsFill,
      },
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
          "Interface complète, modifications illimitées jusqu'à validation",
      },
      {
        title: "Développement sur-mesure",
        description:
          "Code qui vous appartient à 100%, architecture pensée pour évoluer",
      },
      {
        title: "Intégrations API",
        description:
          "Connexion aux services tiers nécessaires (emailing, analytics, CRM, etc.)",
      },
      {
        title: "Déploiement & infrastructure",
        description: "Mise en production, monitoring, configuration serveur",
      },
      {
        title: "Support 90 jours",
        description:
          "Corrections, ajustements et accompagnement post-lancement",
      },
    ],
    deliveryTime: "3 à 8 semaines",
    targetProfiles: [
      {
        title: "Startup avec traction",
        description:
          "Vous avez validé votre marché et besoin d'un produit solide pour vos premiers clients payants.",
        icon: PiChartLineUpFill,
      },
      {
        title: "Entrepreneur SaaS",
        description:
          "Vous lancez un produit SaaS et cherchez un partenaire technique pour le développer de A à Z.",
        icon: PiUserFill,
      },
      {
        title: "Entreprise B2B",
        description:
          "Vous souhaitez transformer un service existant en plateforme SaaS commercialisable.",
        icon: PiBuildingsFill,
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
        a: "90 jours de support sont inclus pour les ajustements. Pour de nouvelles fonctionnalités, on établit ensemble une roadmap et un devis pour les phases suivantes. Le code est structuré pour accueillir de nouvelles briques sans tout casser.",
      },
      {
        q: "Qui est propriétaire du code ?",
        a: "Vous. Le code source, les accès serveur, les comptes Stripe : tout vous appartient à 100%. Aucune dépendance envers notre agence.",
      },
      {
        q: "Quel est le délai de livraison ?",
        a: "3 à 8 semaines selon la complexité. Nous pouvons aussi découper en phases (MVP → V2 → V3) pour un lancement progressif.",
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
    iconSrc: "/icons/app-metier.svg",
    iconBg: "bg-amber-400",
    shortDescription:
      "Automatisez vos processus internes avec un outil de gestion pensé pour votre workflow. Gain de temps et réduction d'erreurs.",
    metaTitle: "Développement d'application métier sur-mesure | Vizion Web",
    metaDescription:
      "Nous développons des outils de gestion internes sur-mesure pour automatiser vos processus. Dashboard, workflows, intégrations. Livré en 2 à 8 semaines.",
    heroTitle: "Automatisez vos processus avec un outil sur-mesure",
    heroSubtitle:
      "Fini les fichiers Excel et les copier-coller d'outils en outils. On développe l'application dont votre équipe a vraiment besoin.",
    problemTitle:
      "Les tableurs et outils génériques freinent votre productivité",
    problemDescription:
      "Votre équipe perd du temps sur des tâches manuelles et répétitives. Les fichiers Excel circulent par email, les données sont éparpillées, et les outils génériques ne correspondent jamais à 100% à vos besoins métier. Résultat : erreurs, lenteurs et frustration.",
    problemPoints: [
      {
        text: "Des processus manuels chronophages qui ralentissent votre équipe",
        icon: PiClockFill,
      },
      {
        text: "Des données éparpillées entre Excel, emails et outils déconnectés",
        icon: PiFilesFill,
      },
      {
        text: "Des outils génériques qui ne collent pas à votre façon de travailler",
        icon: PiPuzzlePieceFill,
      },
      {
        text: "Des erreurs humaines coûteuses sur les tâches répétitives",
        icon: PiWarningFill,
      },
    ],
    solutionTitle: "Un outil conçu pour votre façon de travailler",
    solutionDescription:
      "On développe une application taillée pour vos processus. Toutes vos données au même endroit, les tâches répétitives automatisées, et une connexion directe avec vos outils actuels. Votre équipe arrête de perdre du temps sur de la saisie manuelle.",
    solutionPoints: [
      {
        text: "Dashboard de pilotage avec les indicateurs qui comptent pour vous",
        icon: PiChartPieFill,
      },
      {
        text: "Workflows automatisés adaptés à vos processus réels",
        icon: PiArrowsClockwiseFill,
      },
      {
        text: "Intégrations avec vos outils existants (CRM, comptabilité, email, etc.)",
        icon: PiPlugsFill,
      },
      {
        text: "Interface intuitive que votre équipe adopte sans formation complexe",
        icon: PiCursorClickFill,
      },
    ],
    included: [
      {
        title: "Audit de vos processus",
        description:
          "Analyse de vos workflows actuels pour identifier les gains de productivité",
      },
      {
        title: "UI/UX Design sur Figma",
        description:
          "Interface sur-mesure, modifications illimitées jusqu'à validation",
      },
      {
        title: "Développement sur-mesure",
        description:
          "Code qui vous appartient à 100%, architecture pensée pour évoluer",
      },
      {
        title: "Dashboard de pilotage",
        description:
          "Interface de gestion centralisée avec vos KPI et données clés",
      },
      {
        title: "Workflows automatisés",
        description:
          "Automatisation des tâches répétitives, notifications et gestion des rôles",
      },
      {
        title: "Intégrations tierces",
        description:
          "Connexion à vos outils existants (CRM, comptabilité, emailing, etc.)",
      },
      {
        title: "Formation & documentation",
        description: "Formation de votre équipe et documentation utilisateur",
      },
      {
        title: "Support 90 jours",
        description:
          "Accompagnement post-lancement avec corrections et ajustements",
      },
    ],
    deliveryTime: "2 à 8 semaines",
    targetProfiles: [
      {
        title: "PME en croissance",
        description:
          "Vos processus manuels ne tiennent plus la charge et freinent votre développement.",
        icon: PiFactoryFill,
      },
      {
        title: "Équipe opérationnelle",
        description:
          "Vous gérez des commandes, des plannings ou des stocks avec des outils inadaptés.",
        icon: PiClipboardTextFill,
      },
      {
        title: "Direction qui veut piloter",
        description:
          "Vous avez besoin de visibilité en temps réel sur l'activité de votre entreprise.",
        icon: PiTreeStructureFill,
      },
    ],
    faqs: [
      {
        q: "Peut-on connecter l'application à nos outils existants ?",
        a: "Oui. Nous intégrons votre application avec vos outils actuels : CRM, logiciel de comptabilité, outils d'emailing, Google Workspace, etc. Si l'outil a une API, nous pouvons le connecter.",
      },
      {
        q: "L'application est-elle accessible en mobilité ?",
        a: "Oui. Toutes nos applications sont accessibles depuis un navigateur, sur tablette comme sur ordinateur.",
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
        a: "2 à 8 semaines selon la complexité des workflows et des intégrations. Un planning détaillé est établi dès le cadrage.",
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
    iconSrc: "/icons/landing-page.svg",
    iconBg: "bg-rose-400",
    shortDescription:
      "Une page web optimisée pour convertir vos visiteurs. Design moderne, copywriting efficace, livrée en 1-3 semaines.",
    metaTitle: "Création de Landing Page optimisée conversion | Vizion Web",
    metaDescription:
      "Nous créons des landing pages sur-mesure optimisées pour la conversion. Design, copywriting et développement. Livrée en 1 à 3 semaines.",
    heroTitle: "Transformez vos visiteurs en clients dès le premier clic",
    heroSubtitle:
      "Design sur-mesure, textes écrits pour convaincre, et un seul objectif, que vos visiteurs passent à l'action. Livrée en 1-3 semaines.",
    problemTitle: "Votre page actuelle ne convertit pas assez",
    problemDescription:
      "Vous investissez dans la publicité ou le référencement, mais votre page ne transforme pas les visiteurs en clients. Le message est flou, le design ne rassure pas, et les visiteurs quittent la page sans agir. Chaque clic perdu, c'est du budget gaspillé.",
    problemPoints: [
      {
        text: "Vos campagnes publicitaires génèrent du trafic mais peu de conversions",
        icon: PiChartLineDownFill,
      },
      {
        text: "Votre message n'est pas assez clair ou percutant pour convaincre",
        icon: PiMegaphoneFill,
      },
      {
        text: "Le design actuel ne rassure pas suffisamment vos visiteurs",
        icon: PiEyeSlashFill,
      },
      {
        text: "Vous n'avez pas de page dédiée pour vos offres ou votre acquisition",
        icon: PiBrowserFill,
      },
    ],
    solutionTitle: "Une page conçue pour un seul objectif : convertir",
    solutionDescription:
      "On rédige les textes, on conçoit le design et on développe la page. Chaque élément (titre, arguments, preuves sociales, bouton d'action) est là pour une seule raison : pousser le visiteur à agir.",
    solutionPoints: [
      {
        text: "Copywriting persuasif adapté à votre cible et votre offre",
        icon: PiPenNibFill,
      },
      {
        text: "Design sur-mesure qui renforce votre crédibilité",
        icon: PiPaintBrushFill,
      },
      {
        text: "Optimisation technique (vitesse, SEO, responsive)",
        icon: PiLightningFill,
      },
      { text: "Parcours de conversion testé et validé", icon: PiTargetFill },
    ],
    included: [
      {
        title: "Copywriting de conversion",
        description:
          "Rédaction complète de la page : titres, arguments, CTA, preuves sociales",
      },
      {
        title: "UI/UX Design Figma",
        description: "Maquette haute fidélité avec modifications illimitées",
      },
      {
        title: "Développement sur-mesure",
        description:
          "1-2 pages, design fidèle à la maquette, animations fluides",
      },
      {
        title: "Responsive design",
        description: "Optimisation parfaite sur mobile, tablette et desktop",
      },
      {
        title: "SEO technique de base",
        description: "Balises, structure, performance, Core Web Vitals",
      },
      {
        title: "Support 30 jours",
        description: "Ajustements et optimisations post-lancement",
      },
    ],
    deliveryTime: "1 à 3 semaines",
    targetProfiles: [
      {
        title: "Startup en acquisition",
        description:
          "Vous lancez des campagnes publicitaires et avez besoin d'une page qui maximise chaque clic.",
        icon: PiCrosshairFill,
      },
      {
        title: "Entreprise qui lance une offre",
        description:
          "Vous avez un nouveau produit ou service et besoin d'une page dédiée pour le promouvoir.",
        icon: PiMegaphoneFill,
      },
      {
        title: "Entrepreneur ou freelance",
        description:
          "Vous voulez une présence en ligne rapide et efficace pour générer des leads.",
        icon: PiSuitcaseSimpleFill,
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
        a: "Oui. Votre page est livrée avec un accès pour modifier les textes, images et contenus vous-même. Pour des ajustements de structure ou de design, il suffit de nous contacter pendant la période de support.",
      },
      {
        q: "Quel est le délai de livraison ?",
        a: "1 à 3 semaines, de la stratégie à la mise en ligne. Un planning précis est défini dès le départ.",
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
    iconSrc: "/icons/site-vitrine.svg",
    iconBg: "bg-emerald-500",
    shortDescription:
      "Un site professionnel qui renforce votre crédibilité. 6-10 pages, SEO optimisé, design sur-mesure.",
    metaTitle: "Création de Site Vitrine professionnel sur-mesure | Vizion Web",
    metaDescription:
      "Nous créons des sites vitrines professionnels sur-mesure en React/Next.js. Design, copywriting, SEO. 2 à 4 semaines de livraison.",
    heroTitle: "Un site vitrine qui donne envie de vous contacter",
    heroSubtitle:
      "Un site qui reflète la qualité de votre travail, qui rassure dès la première visite, et qui pousse vos visiteurs à vous contacter. Le tout bien référencé sur Google.",
    problemTitle:
      "Votre site actuel ne reflète pas la qualité de votre travail",
    problemDescription:
      "Quand un prospect cherche vos services en ligne, la première impression se fait en quelques secondes. Un site obsolète, lent ou mal conçu envoie le mauvais signal, même si votre expertise est excellente. Vos concurrents avec un meilleur site captent les clients à votre place.",
    problemPoints: [
      {
        text: "Votre site est obsolète et ne reflète plus votre image professionnelle",
        icon: PiClockCountdownFill,
      },
      {
        text: "Les visiteurs quittent la page sans vous contacter",
        icon: PiSignOutFill,
      },
      {
        text: "Vous n'apparaissez pas (ou mal) dans les résultats de recherche Google",
        icon: PiMagnifyingGlassFill,
      },
      {
        text: "Votre site n'est pas adapté au mobile ou manque de performance",
        icon: PiDeviceMobileFill,
      },
    ],
    solutionTitle: "Un site conçu pour rassurer et convertir",
    solutionDescription:
      "On développe un site vitrine complet qui présente votre activité clairement et donne envie de vous contacter. Textes rédigés par nos soins, design sur-mesure, et un référencement Google soigné pour que vos prospects vous trouvent.",
    solutionPoints: [
      {
        text: "Design sur-mesure aligné avec votre identité de marque",
        icon: PiPaletteFill,
      },
      {
        text: "Copywriting professionnel qui valorise votre expertise",
        icon: PiNotePencilFill,
      },
      {
        text: "SEO renforcé pour être visible sur les recherches locales et métier",
        icon: PiTrendUpFill,
      },
      {
        text: "Performance optimale sur tous les appareils",
        icon: PiDevicesFill,
      },
    ],
    included: [
      {
        title: "Copywriting professionnel",
        description:
          "Rédaction de l'ensemble des pages : accueil, services, à propos, contact",
      },
      {
        title: "UI/UX Design Figma",
        description: "Maquettes complètes avec modifications illimitées",
      },
      {
        title: "Développement sur-mesure",
        description:
          "6-10 pages, code qui vous appartient à 100%, animations et responsive",
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
        title: "Support 30 jours",
        description:
          "Corrections, ajustements et accompagnement post-lancement",
      },
    ],
    deliveryTime: "2 à 4 semaines",
    targetProfiles: [
      {
        title: "Entreprise établie",
        description:
          "Vous avez une activité qui tourne et besoin d'un site à la hauteur de votre réputation.",
        icon: PiBuildingsFill,
      },
      {
        title: "Profession libérale",
        description:
          "Vous cherchez un site professionnel qui inspire confiance et génère des prises de contact.",
        icon: PiStethoscopeFill,
      },
      {
        title: "Artisan ou commerçant",
        description:
          "Vous voulez être visible en ligne et attirer des clients locaux.",
        icon: PiMapPinFill,
      },
    ],
    faqs: [
      {
        q: "Puis-je modifier le contenu moi-même ?",
        a: "Oui. Votre site est livré avec un accès pour modifier les textes, images et contenus vous-même.",
      },
      {
        q: "Le site sera-t-il bien référencé sur Google ?",
        a: "Oui. Le SEO technique est intégré dès la conception : structure des balises, performance, vitesse de chargement, données structurées. Nous optimisons les bases pour que Google indexe et référence votre site correctement.",
      },
      {
        q: "Combien de pages sont incluses ?",
        a: "Le site vitrine comprend 2 à 8 pages et plus. Le nombre exact est défini lors du cadrage en fonction de vos besoins.",
      },
      {
        q: "Quel est le délai de livraison ?",
        a: "2 à 4 semaines de la conception à la mise en ligne.",
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
    iconSrc: "/icons/site-web-complet.svg",
    iconBg: "bg-cyan-500",
    shortDescription:
      "Un site avec fonctionnalités métier spécifiques : espace membre, réservation, intégrations API. Sur-mesure de A à Z.",
    metaTitle:
      "Création de Site Web Avancé avec fonctionnalités sur-mesure | Vizion Web",
    metaDescription:
      "Nous développons des sites web avec fonctionnalités avancées : espace client, réservation, paiement en ligne, espace membre. Livré en 3 à 6 semaines.",
    heroTitle:
      "Un site web avec les fonctionnalités dont votre business a besoin",
    heroSubtitle:
      "Réservation en ligne, paiement, espace client, gestion de contenu : on intègre les fonctionnalités dont votre activité a besoin, directement dans votre site.",
    problemTitle:
      "Votre activité a des besoins qu'un simple site vitrine ne peut pas couvrir",
    problemDescription:
      "Vous avez besoin de plus qu'une vitrine en ligne. Prise de rendez-vous, paiement, espace client, réservations : ces fonctionnalités nécessitent du développement sur-mesure. Et les outils tout faits ne s'adaptent jamais vraiment à votre façon de travailler.",
    problemPoints: [
      {
        text: "Vous gérez les réservations ou rendez-vous manuellement (téléphone, email)",
        icon: PiCalendarXFill,
      },
      {
        text: "Vos clients n'ont pas d'espace dédié pour suivre leurs commandes ou informations",
        icon: PiUserCircleFill,
      },
      {
        text: "Vous n'acceptez pas le paiement en ligne alors que vos clients le demandent",
        icon: PiCreditCardFill,
      },
      {
        text: "Les solutions standardisées ne correspondent pas à votre façon de travailler",
        icon: PiPuzzlePieceFill,
      },
    ],
    solutionTitle: "Des fonctionnalités sur-mesure intégrées à votre site",
    solutionDescription:
      "On développe votre site avec les fonctionnalités propres à votre activité. Réservation, espace client sécurisé, paiement en ligne, CMS avancé : chaque brique est codée sur-mesure pour coller à vos processus et faciliter la vie de vos clients.",
    solutionPoints: [
      {
        text: "Fonctionnalités métier intégrées nativement à votre site",
        icon: PiWrenchFill,
      },
      {
        text: "Espace client sécurisé pour vos utilisateurs",
        icon: PiLockKeyFill,
      },
      {
        text: "Paiement en ligne et gestion des transactions",
        icon: PiWalletFill,
      },
      {
        text: "CMS avancé pour gérer votre contenu en autonomie",
        icon: PiArticleFill,
      },
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
          "Interface complète, modifications illimitées jusqu'à validation",
      },
      {
        title: "Développement sur-mesure",
        description:
          "Code qui vous appartient à 100%, architecture pensée pour évoluer",
      },
      {
        title: "CMS avancé",
        description:
          "Gestion de contenu poussée pour vos pages, blog, portfolio, etc.",
      },
      {
        title: "Intégrations & API",
        description: "Paiement (Stripe), emailing, calendrier, outils tiers",
      },
      {
        title: "Formation complète",
        description:
          "Formation de votre équipe sur l'utilisation de toutes les fonctionnalités",
      },
      {
        title: "Support 60 jours",
        description:
          "Accompagnement post-lancement, corrections et ajustements",
      },
    ],
    deliveryTime: "3 à 6 semaines",
    targetProfiles: [
      {
        title: "Entreprise de services",
        description:
          "Vous avez besoin d'un système de réservation ou de prise de rendez-vous intégré à votre site.",
        icon: PiCalendarCheckFill,
      },
      {
        title: "Commerce ou e-commerce léger",
        description:
          "Vous souhaitez vendre en ligne ou proposer des paiements sans passer par une marketplace.",
        icon: PiShoppingCartFill,
      },
      {
        title: "Organisation ou association",
        description:
          "Vous gérez des membres, des événements ou du contenu qui nécessite un espace dédié.",
        icon: PiUsersThreeFill,
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
        a: "Pour les modifications ponctuelles de texte ou d'images, nous restons à votre disposition sans surcoût. Si vous avez besoin de modifications fréquentes, nous pouvons intégrer un système de gestion de contenu (CMS) en option, qui vous rendra totalement autonome sur les contenus textuels et visuels.",
      },
      {
        q: "Le site sera-t-il sécurisé ?",
        a: "Oui. Authentification sécurisée, chiffrement des données, protection CSRF, headers de sécurité : toutes les bonnes pratiques sont appliquées dès le développement.",
      },
      {
        q: "Quel est le délai de livraison ?",
        a: "3 à 6 semaines selon la complexité des fonctionnalités. Un planning détaillé est défini dès le cadrage.",
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

export function getServicesByCategory(category: ServiceCategory): Service[] {
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
