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

export type ServiceCategory = "produits-digitaux" | "ia-auto";

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
  resources?: string[];
  resourcesTitle?: string;
  resourcesSubtitle?: string;
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
  // CATÉGORIE : Produits digitaux (apps + sites custom)
  // ────────────────────────────────────────────
  {
    slug: "mvp",
    title: "Agence MVP : développement startup en 3 semaines",
    shortTitle: "MVP",
    category: "produits-digitaux",
    icon: PiRocketLaunchFill,
    iconSrc: "/icons/mvp.svg",
    iconBg: "bg-violet-500",
    shortDescription: "Validez votre idée rapidement avec un produit testable.",
    metaTitle: "Agence MVP : développement en 3 semaines | Vizion Web",
    metaDescription:
      "Agence MVP présente en Guyane et à Montpellier. Devis chiffré sous 24h, MVP livré en 3 semaines. React, Next.js, Supabase. Code 100% à vous.",
    heroTitle: "Votre MVP livré en 3 semaines",
    heroSubtitle:
      "On développe l'application qui valide votre idée auprès de vos premiers utilisateurs. Stack moderne, code à vous, mise en production incluse.",
    problemTitle: "Votre idée mérite mieux qu'un PowerPoint",
    problemDescription:
      "Six mois de cycle agence, des budgets qui dérapent dès le premier devis. Pendant que vous validez votre projet, un concurrent peut le lancer. Un MVP, c'est un produit testable en 3 semaines avant d'investir dans une V1 complète.",
    problemPoints: [
      {
        text: "Une idée prometteuse, aucun produit testable à montrer aux utilisateurs ou aux investisseurs",
        icon: PiLightbulbFill,
      },
      {
        text: "Des devis d'agence à 6 mois pour valider une simple hypothèse marché",
        icon: PiHourglassFill,
      },
      {
        text: "Un MVP no-code qui craque dès qu'on dépasse les 100 premiers utilisateurs",
        icon: PiProhibitFill,
      },
      {
        text: "Aucune visibilité sur ce que vos vrais utilisateurs vont penser du produit",
        icon: PiListBulletsFill,
      },
    ],
    solutionTitle: "Un MVP fonctionnel livré en 3 semaines",
    solutionDescription:
      "On cadre les 3 à 5 fonctionnalités clés, on développe avec une stack moderne, on déploie. Vos premiers utilisateurs peuvent ouvrir le produit, l'utiliser et payer. Le code est propre et prêt à évoluer en V1 complète.",
    solutionPoints: [
      {
        text: "Cadrage strict en 30 minutes : périmètre, hypothèses critiques, stack, planning sprint par sprint",
        icon: PiTargetFill,
      },
      {
        text: "Design produit Figma orienté conversion et adoption utilisateur",
        icon: PiPenNibFill,
      },
      {
        text: "Développement sur-mesure en TypeScript, architecture pensée pour scaler à plusieurs milliers d'utilisateurs",
        icon: PiCodeFill,
      },
      {
        text: "Mise en production rapide pour collecter de vrais retours utilisateurs en conditions réelles",
        icon: PiRocketLaunchFill,
      },
    ],
    included: [
      {
        title: "Cadrage produit en 2 jours",
        description:
          "Périmètre, priorisation des fonctionnalités, roadmap et planning sprint par sprint",
      },
      {
        title: "Design UI/UX sur Figma",
        description:
          "Maquettes haute fidélité, prototype interactif, modifications jusqu'à validation",
      },
      {
        title: "Développement sur-mesure",
        description: "Code propre et documenté, qui vous appartient à 100%",
      },
      {
        title: "Auth & base de données",
        description:
          "Comptes utilisateurs, gestion des rôles, stockage sécurisé via Supabase",
      },
      {
        title: "Déploiement & mise en production",
        description:
          "Hébergement Vercel, domaine personnalisé, monitoring de base inclus",
      },
      {
        title: "Tests & recette",
        description:
          "Vérification complète avant livraison, corrections incluses",
      },
      {
        title: "Support 90 jours",
        description:
          "Ajustements post-lancement et accompagnement sur les premiers retours utilisateurs",
      },
    ],
    deliveryTime: "3 semaines",
    targetProfiles: [
      {
        title: "Startup early-stage",
        description:
          "Vous voulez valider un concept avant une levée de fonds ou un premier go-to-market.",
        icon: PiRocketLaunchFill,
      },
      {
        title: "Founder solo non-tech",
        description:
          "Vous portez l'idée et le business mais cherchez un partenaire technique pour construire le produit.",
        icon: PiUserFill,
      },
      {
        title: "Entreprise innovante",
        description:
          "Vous testez un nouveau service digital en interne ou pour vos clients sans mobiliser votre équipe IT.",
        icon: PiFlaskFill,
      },
    ],
    faqs: [
      {
        q: "MVP ou prototype Figma : quelle différence ?",
        a: "Un prototype Figma est une maquette cliquable, sans code ni données réelles. Un MVP est un produit en production avec un vrai backend, des comptes utilisateurs et la possibilité d'encaisser ou de stocker des données. Vous pouvez le donner à 50 utilisateurs et observer leur comportement.",
      },
      {
        q: "Comment livrez-vous un MVP en 3 semaines ?",
        a: "Trois leviers : cadrage strict pour ne garder que 3 à 5 fonctionnalités essentielles, stack moderne qui évite de réinventer la roue (Next.js, Supabase, Stripe), et un seul interlocuteur qui pilote le projet de bout en bout.",
      },
      {
        q: "Combien coûte un MVP ?",
        a: "Chaque MVP est sur-mesure : pas de tarif standard. Le devis chiffré est envoyé sous 24h après un appel de cadrage de 30 minutes, en fonction du périmètre fonctionnel. Si votre projet sort du format 3 semaines, on vous le dit honnêtement et on propose un découpage en phases.",
      },
      {
        q: "Mon MVP pourra-t-il évoluer en V1 complète ?",
        a: "Oui, l'architecture est pensée pour ça dès le départ. Le code est écrit en TypeScript avec une structure modulaire, vous pouvez ajouter des fonctionnalités sans tout réécrire. Si vous internalisez l'équipe tech plus tard, le code est documenté et reprenable.",
      },
      {
        q: "Le code m'appartient-il à 100 % ?",
        a: "Oui. À la livraison, vous récupérez le repository GitHub, les accès Vercel, Supabase, Stripe et tous les services tiers. Aucune dépendance technique envers Vizion Web : vous pouvez faire évoluer le produit avec un autre prestataire sans friction.",
      },
    ],
    ctaTitle: "Prêt à transformer votre idée en MVP ?",
    ctaDescription:
      "En 30 minutes, on cadre votre projet et on chiffre sous 24h. Si le périmètre dépasse 3 semaines, on propose un découpage en phases.",
    resources: [
      "quest-ce-quun-mvp",
      "de-idee-a-application-saas",
      "cahier-des-charges-site-web",
    ],
    resourcesTitle: "Lancer son MVP",
    resourcesSubtitle:
      "Du cadrage à la mise en prod, les guides qui font gagner du temps.",
  },

  {
    slug: "saas-sur-mesure",
    title: "Développement SaaS & application web sur-mesure",
    shortTitle: "SaaS",
    category: "produits-digitaux",
    icon: PiCloudFill,
    iconSrc: "/icons/saas.svg",
    iconBg: "bg-blue-500",
    shortDescription: "Lancez votre SaaS et encaissez vos premiers paiements.",
    metaTitle: "Développement SaaS & application web sur-mesure | Vizion Web",
    metaDescription:
      "Définition d'un SaaS et développement d'application web sur-mesure (app web) : architecture, paiements Stripe, dashboard admin, intégration IA. Livré en 4-8 sem.",
    heroTitle: "Développement SaaS sur-mesure pour startups",
    heroSubtitle:
      "On transforme votre idée en SaaS prêt à encaisser ses premiers utilisateurs. Architecture pensée pour scaler à plusieurs milliers d'utilisateurs.",
    problemTitle: "Vous avez la demande, mais pas le produit pour y répondre",
    problemDescription:
      "Votre marché est validé, vos premiers prospects sont identifiés. Mais sans produit technique solide, impossible d'encaisser. Recruter un CTO prend six mois et les outils no-code plafonnent dès qu'il faut gérer paiements et rôles.",
    problemPoints: [
      {
        text: "Vos premiers clients sont prêts à payer, mais vous n'avez rien à leur vendre",
        icon: PiUsersFill,
      },
      {
        text: "Recruter un CTO ou monter une équipe technique prend des mois",
        icon: PiHourglassFill,
      },
      {
        text: "Les outils no-code craquent dès qu'il faut gérer paiements et rôles",
        icon: PiProhibitFill,
      },
      {
        text: "Chaque mois sans produit en prod, c'est du revenu récurrent qui passe à côté",
        icon: PiChartLineDownFill,
      },
    ],
    solutionTitle: "On transforme votre idée en SaaS qui facture",
    solutionDescription:
      "On développe votre SaaS complet en 4 à 8 semaines : architecture multi-tenant, paiements Stripe, dashboard admin et intégration IA si pertinente. Le code est documenté, scalable et vous appartient à la livraison.",
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
        text: "Une API connectée à vos outils existants (emailing, CRM, analytics, IA)",
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
        q: "Qu'est-ce qu'une application SaaS ?",
        a: "Une application SaaS (Software as a Service) est un logiciel hébergé dans le cloud, accessible par abonnement via un navigateur, sans installation locale. Exemples : Slack, Notion, HubSpot. Une SaaS sur-mesure est développée spécifiquement pour votre marché ou votre besoin métier précis, par opposition à un SaaS générique.",
      },
      {
        q: "Quelle stack technique utilisez-vous ?",
        a: "React et Next.js en frontend avec TypeScript. PostgreSQL via Supabase en backend (auth, storage, realtime inclus). OpenAI ou Claude pour l'intégration IA. Stripe pour les paiements, Vercel pour le déploiement. Une stack éprouvée pour scaler de 10 à 100 000 utilisateurs sans tout réécrire.",
      },
      {
        q: "Pouvez-vous gérer le multi-tenant ?",
        a: "Oui. On conçoit l'architecture multi-tenant dès le départ si votre modèle le nécessite : chaque client a ses données strictement isolées tout en partageant la même infrastructure. C'est le mode standard pour une SaaS B2B.",
      },
      {
        q: "Combien coûte un SaaS sur-mesure ?",
        a: "Chaque SaaS est sur-mesure : pas de tarif standard. Le pricing dépend du nombre de fonctionnalités, de la complexité métier (multi-tenant, rôles, intégrations API) et du niveau d'intégration IA souhaité. Devis chiffré envoyé sous 24h après un cadrage de 30 minutes.",
      },
      {
        q: "Le code m'appartient-il à 100 % ?",
        a: "Oui. Le code source, les accès serveur, les comptes Stripe, Supabase et OpenAI vous appartiennent. Aucune dépendance envers notre agence : vous pouvez faire évoluer le produit avec un autre prestataire si vous le souhaitez.",
      },
    ],
    ctaTitle: "Prêt à transformer votre idée en SaaS qui facture ?",
    ctaDescription:
      "En 30 minutes, on cadre votre projet et on chiffre sous 24h. On vous dit comment construire votre SaaS en 4 à 8 semaines.",
    resources: [
      "fixer-prix-saas-strategie",
      "application-sur-mesure-vs-saas",
      "saas-vs-developpement-sur-mesure",
    ],
    resourcesTitle: "Lancer son SaaS",
    resourcesSubtitle:
      "Du modèle business à l'architecture, les bonnes décisions à prendre.",
  },

  {
    slug: "application-metier",
    title: "Application métier & logiciel sur-mesure",
    shortTitle: "Application métier",
    category: "produits-digitaux",
    icon: PiBriefcaseFill,
    iconSrc: "/icons/app-metier.svg",
    iconBg: "bg-amber-400",
    shortDescription: "Un outil métier taillé pour vos process, pas l'inverse.",
    metaTitle: "Logiciel sur-mesure & application métier B2B | Vizion Web",
    metaDescription:
      "Développement de logiciel sur-mesure et application métier pour PME : dashboards, ERP custom, automatisation, intégration IA. Livré en 4-8 semaines.",
    heroTitle: "Logiciel sur-mesure & application métier pour PME",
    heroSubtitle:
      "On développe l'outil qui colle à vos process : dashboard de pilotage, ERP custom, workflows automatisés et intégration IA quand elle apporte de la valeur.",
    problemTitle:
      "Les tableurs et logiciels génériques freinent votre productivité",
    problemDescription:
      "Votre équipe perd des heures sur des tâches répétitives. Les fichiers Excel circulent par e-mail, les données sont éparpillées entre cinq outils déconnectés, et les SaaS génériques ne couvrent jamais à 100 % votre métier.",
    problemPoints: [
      {
        text: "Des process manuels chronophages qui ralentissent toute votre équipe",
        icon: PiClockFill,
      },
      {
        text: "Des données éparpillées entre Excel, e-mails et outils déconnectés",
        icon: PiFilesFill,
      },
      {
        text: "Des SaaS génériques qui ne collent qu'à 60 % de votre façon de travailler",
        icon: PiPuzzlePieceFill,
      },
      {
        text: "Des erreurs humaines coûteuses sur les tâches répétitives sans automatisation",
        icon: PiWarningFill,
      },
    ],
    solutionTitle: "Un logiciel métier conçu pour votre façon de travailler",
    solutionDescription:
      "On développe une application métier taillée pour vos workflows : dashboard centralisé, automatisations sur les tâches répétitives, intégrations directes avec votre stack (CRM, compta, RH, e-mail). IA intégrée sur les workflows qui le justifient.",
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
        q: "Logiciel sur-mesure, SaaS ou ERP : quelle différence ?",
        a: "Un SaaS (Salesforce, HubSpot, Notion) est un logiciel partagé en abonnement, configurable mais pas vraiment personnalisable. Un ERP générique (SAP, Odoo) est un SaaS plus large couvrant plusieurs métiers. Un logiciel sur-mesure est développé spécifiquement pour une entreprise : il peut remplacer un SaaS qui ne suffit plus, compléter un ERP avec des modules métier ou couvrir un besoin niche que personne ne propose.",
      },
      {
        q: "Combien coûte un logiciel métier sur-mesure ?",
        a: "Chaque logiciel métier est sur-mesure : pas de tarif standard. Le pricing dépend du nombre de modules, des intégrations tierces (CRM, compta, e-mail), de la complexité métier et du niveau d'intégration IA. Devis chiffré sous 24h après un cadrage de 30 minutes.",
      },
      {
        q: "Peut-on intégrer de l'IA dans le logiciel ?",
        a: "Oui, c'est souvent là où le sur-mesure prend tout son sens. On intègre OpenAI ou Claude pour extraire des données de PDF (factures, contrats), classifier des e-mails, générer des brouillons de réponse, créer un agent de support N1 ou résumer des dossiers clients.",
      },
      {
        q: "Peut-on connecter le logiciel à nos outils existants ?",
        a: "Oui. On intègre votre logiciel avec votre stack actuel : CRM (HubSpot, Pipedrive, Salesforce), comptabilité (Sage, Pennylane, Quickbooks), e-mail (Google Workspace, Microsoft 365), outils RH, e-commerce (Shopify, WooCommerce). Si l'outil expose une API ou un webhook, on peut le connecter.",
      },
      {
        q: "Le logiciel est-il accessible sur mobile ?",
        a: "Oui. Toutes les applications qu'on développe sont responsive et accessibles depuis un navigateur (desktop, tablette, mobile). Si vous avez besoin d'une vraie app mobile native (iOS/Android) en plus, on peut le faire en React Native sur le même backend.",
      },
    ],
    ctaTitle: "Prêt à remplacer Excel par un vrai outil métier ?",
    ctaDescription:
      "En 30 minutes, on cadre votre projet et on chiffre sous 24h. On regarde vos process actuels et on vous dit si le sur-mesure est la bonne réponse.",
    resources: [
      "saas-pme-exemples-outils-metier",
      "dashboard-sur-mesure-cas-concrets",
      "crm-sur-mesure-vs-hubspot",
    ],
    resourcesTitle: "Lancer son logiciel métier",
    resourcesSubtitle:
      "Quand le sur-mesure est rentable et comment cadrer le projet.",
  },

  // ────────────────────────────────────────────
  // CATÉGORIE : Produits digitaux (suite) + IA & Automatisation
  // ────────────────────────────────────────────
  // ────────────────────────────────────────────
  // Entry 2 — site-ecommerce
  // ────────────────────────────────────────────
  {
    slug: "site-ecommerce",
    title: "Site e-commerce sur mesure : développement custom",
    shortTitle: "Site e-commerce",
    category: "produits-digitaux",
    icon: PiShoppingCartFill,
    iconSrc: "/icons/site-ecommerce.svg",
    iconBg: "bg-rose-400",
    shortDescription: "La boutique sur-mesure que Shopify ne sait pas faire.",
    metaTitle: "Site e-commerce sur mesure : développement custom | Vizion Web",
    metaDescription:
      "Développement de site ecommerce sur mesure (catalogue B2B, marketplace, abonnement). Stack Next.js + Stripe. Devis sous 24h. Livraison 4 à 8 semaines.",
    heroTitle: "Site e-commerce sur-mesure pour boutiques qui sortent du moule",
    heroSubtitle:
      "On développe votre boutique en ligne quand Shopify ou WooCommerce ne suivent plus : catalogue B2B, marketplace, abonnements, prix par client. Performant et SEO-ready à la mise en ligne.",
    problemTitle: "Shopify ne fait pas tout, et vous le payez cher",
    problemDescription:
      "Votre thème ne supporte pas votre catalogue, les apps externes empilent les abonnements mensuels, et chaque évolution demande un freelance qui découvre la plateforme. Au moment de scaler, la simplicité initiale devient un piège.",
    problemPoints: [
      {
        text: "Votre catalogue (variantes, prix par client, devis) ne rentre pas dans un thème standard",
        icon: PiPuzzlePieceFill,
      },
      {
        text: "Chaque fonctionnalité demande une app payante qui multiplie les abonnements mensuels",
        icon: PiCurrencyDollarFill,
      },
      {
        text: "Les performances Core Web Vitals plombent votre référencement et vos conversions",
        icon: PiChartLineDownFill,
      },
      {
        text: "Votre marque ressemble à toutes les autres boutiques sous le même thème",
        icon: PiEyeSlashFill,
      },
    ],
    solutionTitle: "Une boutique custom qui colle à votre business",
    solutionDescription:
      "On développe votre site e-commerce sur-mesure : catalogue branché sur votre vraie source de données, paiements Stripe complets, back-office adapté à votre équipe. SEO propre à la mise en ligne.",
    solutionPoints: [
      {
        text: "Catalogue produits flexible : variantes, prix B2B, stocks multi-entrepôts, devis sur mesure",
        icon: PiListBulletsFill,
      },
      {
        text: "Paiements Stripe complets : cartes, SEPA, abonnements, paiement différé pour le B2B",
        icon: PiCreditCardFill,
      },
      {
        text: "Back-office sur mesure : votre équipe gère commandes et stock sans jongler entre 5 outils",
        icon: PiChartBarFill,
      },
      {
        text: "Performance et SEO : Core Web Vitals optimisés, structure pensée pour Google",
        icon: PiLightningFill,
      },
    ],
    included: [
      {
        title: "Cadrage business & UX",
        description:
          "Analyse du parcours d'achat, modèle de pricing, logique catalogue",
      },
      {
        title: "Design Figma sur mesure",
        description:
          "Identité visuelle adaptée à votre marque, fiches produits, tunnel d'achat",
      },
      {
        title: "Développement front custom",
        description:
          "Boutique Next.js performante, responsive, optimisée Core Web Vitals",
      },
      {
        title: "Paiements & abonnements",
        description:
          "Intégration Stripe complète : cartes, SEPA, abonnements, paiement différé B2B",
      },
      {
        title: "Catalogue & gestion produits",
        description:
          "Système de gestion adapté à votre logique métier (variantes, prix, stocks)",
      },
      {
        title: "Back-office équipe",
        description:
          "Interface dédiée pour gérer commandes, clients, expéditions, factures",
      },
      {
        title: "SEO technique",
        description:
          "Sitemap, balises, données structurées produits, indexation propre",
      },
      {
        title: "Support 90 jours",
        description:
          "Corrections post-lancement et accompagnement sur les premières ventes",
      },
    ],
    deliveryTime: "4 à 8 semaines",
    targetProfiles: [
      {
        title: "Boutique B2B avec catalogue complexe",
        description:
          "Vos prix dépendent du client, votre catalogue a des centaines de variantes, vous gérez des devis.",
        icon: PiBuildingsFill,
      },
      {
        title: "Marketplace deux faces",
        description:
          "Vous mettez en relation vendeurs et acheteurs avec une logique de commissions et de paiements split.",
        icon: PiUsersThreeFill,
      },
      {
        title: "Marque DTC qui veut sortir du lot",
        description:
          "Votre boutique doit traduire votre marque, pas ressembler à toutes les autres sous le même thème.",
        icon: PiPaletteFill,
      },
    ],
    faqs: [
      {
        q: "Sur-mesure ou Shopify : quelle différence ?",
        a: "Shopify est une plateforme SaaS hébergée : rapide à lancer mais limitée par son moteur, ses thèmes et son écosystème d'apps. Un site e-commerce sur-mesure est développé spécifiquement pour votre business : aucune limite produit, logique métier exacte, code à vous. Le sur-mesure devient pertinent quand Shopify coûte plus cher en apps qu'en abonnement, ou quand votre catalogue ne rentre pas.",
      },
      {
        q: "Combien coûte un site e-commerce sur-mesure ?",
        a: "Chaque site e-commerce est sur-mesure : pas de tarif standard. Le pricing dépend du nombre de fonctionnalités, des intégrations (ERP, comptabilité), du volume de produits et de la complexité B2B (prix négociés, paiement différé). Devis chiffré sous 24h après cadrage.",
      },
      {
        q: "Pouvez-vous gérer le B2B (prix par client, paiement différé) ?",
        a: "Oui. On implémente comptes B2B avec prix négociés, validation par administrateur, paiement à 30 ou 60 jours, génération automatique de factures et intégration avec votre comptabilité (Pennylane, Sage). C'est l'un des cas où Shopify atteint ses limites.",
      },
      {
        q: "Pouvez-vous gérer les abonnements et box mensuelles ?",
        a: "Oui, via Stripe Billing. On gère renouvellements automatiques, pause d'abonnement, upgrade et downgrade de plan, et la logique de livraison récurrente côté logistique. Adapté pour box mensuelles, services en abonnement ou licences logicielles.",
      },
      {
        q: "Pouvez-vous connecter le site à mon ERP ou ma compta ?",
        a: "Oui. On intègre les ERP courants (Sage, Cegid, Odoo) et les outils de compta (Pennylane, Quickbooks). Les commandes remontent automatiquement, les stocks se synchronisent, les factures se génèrent sans saisie manuelle.",
      },
    ],
    ctaTitle: "Prêt à passer de Shopify à une vraie boutique sur-mesure ?",
    ctaDescription:
      "En 30 minutes, on cadre votre projet et on chiffre sous 24h. On regarde votre catalogue, votre logique B2B et votre stack, et on vous dit si le sur-mesure tient la route économiquement.",
    resources: [
      "site-vitrine-vs-ecommerce",
      "paiement-en-ligne-stripe-paypal",
      "cout-site-internet",
    ],
    resourcesTitle: "Lancer sa boutique en ligne",
    resourcesSubtitle:
      "Du choix de stack au paiement B2B, les arbitrages qui comptent.",
  },

  // ────────────────────────────────────────────
  // Entry 3 — developpement-web
  // ────────────────────────────────────────────
  {
    slug: "developpement-web",
    title: "Agence développement web sur mesure pour PME et startups",
    shortTitle: "Développement web",
    category: "produits-digitaux",
    icon: PiCodeFill,
    iconSrc: "/icons/developpement-web.svg",
    iconBg: "bg-blue-500",
    shortDescription:
      "Tout le développement web sur-mesure pour startups et PME.",
    metaTitle: "Agence développement web sur mesure | Vizion Web",
    metaDescription:
      "Agence développement web à Montpellier : applications internes, portails, dashboards, refontes d'apps legacy. Devis sous 24h. Livraison 2 à 8 semaines.",
    heroTitle: "Agence de développement web sur-mesure",
    heroSubtitle:
      "SaaS, MVP, logiciel métier, application web : on conçoit et on développe vos produits digitaux sur-mesure. Code documenté, mise en production incluse.",
    problemTitle: "Votre projet web ne rentre dans aucune case standard",
    problemDescription:
      "Portail client, dashboard interne, application métier custom, refonte d'app legacy ou MVP. Vous avez un besoin précis que les solutions packagées (templates, no-code, SaaS génériques) ne couvrent pas. Il faut un produit développé sur-mesure pour votre business.",
    problemPoints: [
      {
        text: "Votre besoin demande une vraie authentification, des permissions et des intégrations API custom",
        icon: PiShieldCheckFill,
      },
      {
        text: "Les templates et thèmes ne couvrent pas votre logique métier ou vos workflows",
        icon: PiPuzzlePieceFill,
      },
      {
        text: "Vous voulez un produit qui tient en production et évolue avec votre business",
        icon: PiRocketLaunchFill,
      },
      {
        text: "Votre app legacy ralentit votre équipe et bloque vos évolutions produit",
        icon: PiArrowsClockwiseFill,
      },
    ],
    solutionTitle: "Tout le développement web sur-mesure, livré clé en main",
    solutionDescription:
      "Vizion Web couvre tout le développement web sur-mesure : SaaS, MVP, logiciel métier, portail client, dashboard, refonte d'app legacy.",
    solutionPoints: [
      {
        text: "Cadrage rapide pour identifier le périmètre minimal qui apporte de la valeur",
        icon: PiTargetFill,
      },
      {
        text: "Authentification, rôles et permissions implémentés proprement",
        icon: PiShieldCheckFill,
      },
      {
        text: "Intégrations API avec vos outils existants (CRM, comptabilité, e-mail, paiement)",
        icon: PiPlugsFill,
      },
      {
        text: "Déploiement Vercel, monitoring, code source remis à la livraison",
        icon: PiRocketLaunchFill,
      },
    ],
    included: [
      {
        title: "Cadrage technique & fonctionnel",
        description:
          "Analyse du besoin, périmètre, choix d'architecture, planning sprint",
      },
      {
        title: "Design UI/UX",
        description:
          "Maquettes Figma, prototype interactif, design system si projet long",
      },
      {
        title: "Développement sur mesure",
        description:
          "Code TypeScript propre et documenté, qui vous appartient à 100%",
      },
      {
        title: "Auth & gestion des rôles",
        description:
          "Comptes utilisateurs, rôles, permissions, sécurité par défaut",
      },
      {
        title: "Intégrations API",
        description:
          "Connexion à vos outils existants (CRM, compta, e-mail, paiement)",
      },
      {
        title: "Déploiement & monitoring",
        description:
          "Mise en production Vercel, domaine, monitoring de base, logs",
      },
      {
        title: "Documentation technique",
        description:
          "README, schéma d'architecture, instructions d'onboarding pour la suite",
      },
      {
        title: "Support 90 jours",
        description:
          "Corrections, ajustements et accompagnement post-livraison",
      },
    ],
    deliveryTime: "2 à 8 semaines",
    targetProfiles: [
      {
        title: "PME en transformation digitale",
        description:
          "Vous remplacez un outil interne vieillissant ou vous créez votre premier produit digital pour vos clients.",
        icon: PiFactoryFill,
      },
      {
        title: "Site pro avec fonctionnalités custom",
        description:
          "Votre activité demande plus qu'un site vitrine : espace client, paiement, dashboard, intégrations.",
        icon: PiBrowserFill,
      },
      {
        title: "Refonte d'app legacy",
        description:
          "Votre application interne actuelle est lente, instable, et personne ne veut la maintenir.",
        icon: PiArrowsClockwiseFill,
      },
    ],
    faqs: [
      {
        q: "Sur-mesure ou template WordPress : quelle différence ?",
        a: "WordPress est rapide à mettre en place mais devient un boulet dès qu'on sort du blog ou du site vitrine : performance, sécurité, fonctionnalités custom. Le développement web sur-mesure est conçu pour votre besoin précis : code minimal, Lighthouse 90+, sécurité maîtrisée. Pertinent dès qu'il y a auth, paiement, données métier ou intégration API.",
      },
      {
        q: "Combien coûte un projet web sur-mesure ?",
        a: "Chaque projet est sur-mesure : pas de tarif standard. Le pricing dépend du périmètre fonctionnel (auth, paiement, dashboard, intégrations API), de la complexité métier et du volume de données. Devis chiffré sous 24h après un appel de cadrage.",
      },
      {
        q: "Quels sont les délais de livraison ?",
        a: "2 à 8 semaines selon le périmètre. Un site pro avec espace membre sort en 2 à 3 semaines. Un portail client avec dashboard et intégrations en 4 à 6 semaines. Une application interne complète en 6 à 8 semaines. Planning détaillé au cadrage.",
      },
      {
        q: "Pouvez-vous reprendre un projet existant ?",
        a: "Oui, sous conditions. On audite le code, on évalue la dette technique et on vous dit honnêtement si la reprise vaut le coup ou s'il vaut mieux refondre. Cas fréquents : projets WordPress lourds, prototypes no-code à industrialiser, apps legacy en PHP ou jQuery.",
      },
      {
        q: "Le code m'appartient-il à 100 % ?",
        a: "Oui. À la livraison, vous récupérez le repository GitHub, les accès Vercel, Supabase et tous les services tiers. Aucune dépendance technique : vous pouvez faire évoluer le projet en interne ou avec un autre prestataire sans friction.",
      },
    ],
    ctaTitle: "Un projet web sur-mesure à concrétiser ?",
    ctaDescription:
      "En 30 minutes, on cadre votre projet et on chiffre sous 24h. SaaS, MVP, application métier, refonte legacy : on vous dit ce qui tient en 2 à 8 semaines.",
    resources: [
      "creer-application-web-etapes",
      "wordpress-vs-webflow-vs-sur-mesure",
      "choisir-agence-web-criteres",
    ],
    resourcesTitle: "Lancer son projet web",
    resourcesSubtitle:
      "Du cahier des charges au choix d'agence, les guides utiles.",
  },

  // ────────────────────────────────────────────
  // Entry 4 — ui-ux-design
  // ────────────────────────────────────────────
  {
    slug: "ui-ux-design",
    title: "Agence UX UI design : interfaces orientées conversion",
    shortTitle: "UI/UX Design",
    category: "produits-digitaux",
    icon: PiPaletteFill,
    iconSrc: "/icons/ui-ux-design.svg",
    iconBg: "bg-purple-500",
    shortDescription: "On conçoit l'interface qui convertit avant de coder.",
    metaTitle: "Agence UX UI design Figma à Montpellier | Vizion Web",
    metaDescription:
      "Agence UX UI design : maquettes Figma, prototypes interactifs, design system. Conversion-first. Devis sous 24h. Livraison 2 à 6 semaines.",
    heroTitle: "Agence UX UI design pour produits digitaux",
    heroSubtitle:
      "On conçoit votre interface en partant des objectifs business : maquettes Figma haute fidélité, prototype interactif cliquable et design system documenté pour vos prochains écrans.",
    problemTitle:
      "Une belle interface ne suffit plus, il faut qu'elle convertisse",
    problemDescription:
      "Votre produit a l'air sympa en screenshot mais le tunnel ne convertit pas, le parcours utilisateur a des trous, et chaque nouvel écran demande de tout redessiner.",
    problemPoints: [
      {
        text: "Vos écrans sont jolis mais le tunnel d'inscription ou d'achat ne convertit pas",
        icon: PiChartLineDownFill,
      },
      {
        text: "Aucun design system : chaque nouvel écran réinvente boutons, formulaires et typographie",
        icon: PiPuzzlePieceFill,
      },
      {
        text: "Pas de prototype interactif pour tester le parcours avant de coder",
        icon: PiCursorClickFill,
      },
      {
        text: "Vos investisseurs voient un produit qui fait amateur en démo",
        icon: PiEyeSlashFill,
      },
    ],
    solutionTitle: "Du design Figma orienté business, pas juste joli",
    solutionDescription:
      "On conçoit votre interface en partant du parcours utilisateur et des objectifs de conversion. Maquettes haute fidélité, prototype interactif, design system documenté. Disponible en prestation seule ou inclus dans les projets de développement.",
    solutionPoints: [
      {
        text: "Audit du parcours utilisateur et identification des points de friction",
        icon: PiMagnifyingGlassFill,
      },
      {
        text: "Maquettes Figma haute fidélité, modifications jusqu'à validation",
        icon: PiPaintBrushFill,
      },
      {
        text: "Prototype interactif cliquable pour tester avant de développer",
        icon: PiCursorClickFill,
      },
      {
        text: "Design system documenté : couleurs, typographie, composants réutilisables",
        icon: PiPaletteFill,
      },
    ],
    included: [
      {
        title: "Atelier UX & user research",
        description:
          "Compréhension de la cible, parcours utilisateur, objectifs de conversion",
      },
      {
        title: "Wireframes basse fidélité",
        description:
          "Structure des écrans, hiérarchie de l'information, parcours validé avant le visuel",
      },
      {
        title: "Maquettes UI haute fidélité",
        description:
          "Écrans finaux Figma, responsive desktop et mobile, modifications illimitées",
      },
      {
        title: "Prototype interactif Figma",
        description:
          "Parcours cliquable pour tests utilisateurs et démos investisseurs",
      },
      {
        title: "Design system documenté",
        description:
          "Composants réutilisables, tokens couleur et typo, guidelines d'usage",
      },
      {
        title: "Handoff développeur",
        description:
          "Specs techniques, exports d'assets, documentation pour intégrer le design",
      },
    ],
    deliveryTime: "2 à 6 semaines",
    targetProfiles: [
      {
        title: "Startup en pre-MVP",
        description:
          "Vous voulez valider visuellement votre produit avec des prospects avant d'investir dans le développement.",
        icon: PiRocketLaunchFill,
      },
      {
        title: "PME qui refond son interface",
        description:
          "Votre application interne ou votre site pro a vieilli, vous voulez le moderniser sans tout recoder.",
        icon: PiArrowsClockwiseFill,
      },
      {
        title: "Founder qui pitch des investisseurs",
        description:
          "Vous avez besoin d'un prototype crédible pour vos rendez-vous de levée et vos demos clients.",
        icon: PiHandshakeFill,
      },
    ],
    faqs: [
      {
        q: "UX ou UI design : quelle différence ?",
        a: "L'UX (User Experience) traite du parcours global et de la logique d'usage : qui sont vos utilisateurs, quelles tâches ils accomplissent, quelles frictions ils rencontrent. L'UI (User Interface) traite du visuel : couleurs, typographie, composants, animations. Un bon design produit gère les deux ensemble, sinon on obtient une interface jolie qui ne convertit pas, ou un parcours fonctionnel qui fait amateur.",
      },
      {
        q: "Combien coûte un projet UX UI ?",
        a: "Chaque projet est sur-mesure : pas de tarif standard. Le pricing dépend du périmètre (landing seule, MVP complet 10-20 écrans, refonte d'app complète), du nombre d'écrans et de la présence ou non d'un design system à construire. Devis chiffré sous 24h après cadrage.",
      },
      {
        q: "Travaillez-vous uniquement sur Figma ?",
        a: "Oui, Figma est l'outil de référence pour le design produit en 2026 : collaboration en temps réel, prototypes interactifs natifs, handoff développeur intégré. Si vous avez déjà des fichiers Sketch ou Adobe XD, on peut les migrer en début de projet.",
      },
      {
        q: "Faut-il un design system avant de développer ?",
        a: "Pour un MVP simple non, on peut démarrer avec des composants Tailwind standards. Pour une application qui va grandir (10+ écrans, plusieurs développeurs ou évolutions fréquentes), oui, le design system évite de redessiner et redévelopper les mêmes boutons et formulaires. On le construit en parallèle des premiers écrans.",
      },
      {
        q: "Le design est-il livré avec les fichiers Figma ?",
        a: "Oui. Vous récupérez le fichier Figma complet, organisé, avec accès en édition. Vous pouvez modifier vous-même, partager avec d'autres designers ou développeurs. Aucune dépendance envers Vizion Web pour les évolutions futures.",
      },
    ],
    ctaTitle: "Une interface à concevoir ou à refondre ?",
    ctaDescription:
      "En 30 minutes, on cadre votre projet et on chiffre sous 24h. On regarde votre tunnel actuel et on vous dit ce qu'on peut livrer en 2 à 6 semaines.",
    resources: [
      "landing-page-qui-convertit",
      "erreurs-conversion-site-web",
      "tendances-web-design-2026",
    ],
    resourcesTitle: "Concevoir une interface qui convertit",
    resourcesSubtitle:
      "Les fondamentaux UX qui font la différence sur votre tunnel.",
  },

  // ────────────────────────────────────────────
  // Entry 5 — ia-generative
  // ────────────────────────────────────────────
  {
    slug: "ia-generative",
    title: "Agence IA générative : intégration sur-mesure",
    shortTitle: "IA générative",
    category: "ia-auto",
    icon: PiLightningFill,
    iconSrc: "/icons/ia-generative.svg",
    iconBg: "bg-emerald-500",
    shortDescription:
      "Intégrez l'IA générative directement dans votre produit.",
    metaTitle: "Agence IA générative : agents IA sur-mesure | Vizion Web",
    metaDescription:
      "Agence IA générative à Montpellier : intégration OpenAI et Claude dans vos apps. Agents IA sur-mesure, RAG, extraction documents. Devis sous 24h.",
    heroTitle: "Agence IA générative pour applications métier et SaaS",
    heroSubtitle:
      "On intègre OpenAI, Claude ou Mistral dans vos workflows : agents conversationnels, RAG sur votre base interne, extraction de PDF et classification automatique.",
    problemTitle: "L'IA est partout, mais pas dans votre produit",
    problemDescription:
      "Vos concurrents annoncent des features IA toutes les semaines, votre équipe technique vous dit que c'est compliqué. Vous avez testé ChatGPT en interne mais le chemin du POC à la feature en production reste flou.",
    problemPoints: [
      {
        text: "Vos concurrents lancent des features IA pendant que votre roadmap stagne",
        icon: PiChartLineDownFill,
      },
      {
        text: "Vos équipes utilisent ChatGPT en mode bricolage, sans intégration produit",
        icon: PiProhibitFill,
      },
      {
        text: "Vous ne savez pas quel modèle choisir entre OpenAI, Claude et Mistral",
        icon: PiPuzzlePieceFill,
      },
      {
        text: "Vos workflows répétitifs (support, qualif lead, extraction doc) coûtent cher en temps humain",
        icon: PiClockFill,
      },
    ],
    solutionTitle:
      "Des features IA intégrées dans votre produit, pas plugées à côté",
    solutionDescription:
      "On intègre l'IA générative dans vos workflows : agent de support, classification automatique, extraction de données documentaires, génération de contenus. Choix du modèle selon le cas d'usage et le budget.",
    solutionPoints: [
      {
        text: "Agents conversationnels avec RAG sur votre base de connaissance interne",
        icon: PiUsersFill,
      },
      {
        text: "Extraction de données structurées depuis PDF, factures, contrats, CV",
        icon: PiFilesFill,
      },
      {
        text: "Classification automatique de tickets, e-mails ou documents entrants",
        icon: PiArrowsClockwiseFill,
      },
      {
        text: "Génération de contenu intégrée à votre produit (résumés, brouillons, descriptions)",
        icon: PiNotePencilFill,
      },
    ],
    included: [
      {
        title: "Cadrage cas d'usage IA",
        description:
          "Identification du workflow, choix du modèle, estimation des coûts en production",
      },
      {
        title: "Prompt engineering",
        description:
          "Conception et test des prompts, optimisation de la qualité des réponses",
      },
      {
        title: "Intégration backend",
        description:
          "Appels API, gestion des erreurs, fallback, rate limiting, mise en cache",
      },
      {
        title: "Interface utilisateur",
        description:
          "Composants UI adaptés au cas d'usage : chat, éditeur, dashboard, formulaire",
      },
      {
        title: "RAG sur base interne",
        description:
          "Indexation vectorielle de vos documents, recherche sémantique, réponses sourcées",
      },
      {
        title: "Monitoring & coûts",
        description:
          "Suivi des appels, alertes coût, dashboard d'usage par utilisateur ou organisation",
      },
      {
        title: "Documentation & handoff",
        description:
          "Documentation des prompts, schéma technique, instructions pour faire évoluer la feature",
      },
    ],
    deliveryTime: "3 à 8 semaines",
    targetProfiles: [
      {
        title: "SaaS qui veut une feature IA",
        description:
          "Vous avez un produit en production et vous voulez ajouter une feature IA différenciante sans casser l'existant.",
        icon: PiCloudFill,
      },
      {
        title: "PME qui automatise un workflow texte",
        description:
          "Votre équipe passe des heures à classifier, résumer ou extraire des données dans des documents.",
        icon: PiFactoryFill,
      },
      {
        title: "Dirigeant qui prototype un agent IA interne",
        description:
          "Vous voulez tester un agent IA sur un cas d'usage métier avant de décider d'industrialiser.",
        icon: PiUserFill,
      },
    ],
    faqs: [
      {
        q: "Agent IA ou chatbot classique : quelle différence ?",
        a: "Un chatbot classique fonctionne sur arbres de décision et règles : il répond à des questions prévues à l'avance. Un agent IA sur-mesure utilise un modèle de langage pour comprendre le contexte, raisonner et utiliser des outils (lire votre base de données, déclencher une action, créer un ticket). Il gère les questions imprévues mais demande un cadrage précis pour rester fiable.",
      },
      {
        q: "Quel modèle choisir entre OpenAI, Claude et Mistral ?",
        a: "Cela dépend du cas d'usage et des contraintes. Les modèles GPT d'OpenAI sont polyvalents et bien documentés. Claude excelle sur le raisonnement long et la qualité du code. Mistral est intéressant pour les contraintes de souveraineté européenne. On évalue ensemble selon votre cas, votre budget et vos contraintes de conformité.",
      },
      {
        q: "Qu'est-ce que le RAG et quand est-il pertinent ?",
        a: "RAG (Retrieval-Augmented Generation) consiste à donner au modèle accès à votre base documentaire au moment de répondre, plutôt que de lui apprendre vos données. Pertinent quand vos données changent souvent, quand vous voulez des réponses sourcées et quand vous voulez éviter le fine-tuning coûteux. Cas typique : agent de support qui répond depuis votre documentation interne.",
      },
      {
        q: "Mes données restent-elles confidentielles ?",
        a: "Oui, sous conditions. OpenAI et Anthropic n'utilisent pas par défaut les données API pour entraîner leurs modèles (à différencier des versions grand public ChatGPT et Claude.ai). Pour des contraintes plus strictes (santé, finance, secteur public), on peut basculer sur Mistral en hébergement européen ou des modèles auto-hébergés.",
      },
      {
        q: "Comment gérez-vous le coût des appels IA en prod ?",
        a: "Plusieurs leviers : choix du modèle adapté (pas besoin du modèle haut de gamme pour classifier des e-mails), mise en cache des réponses récurrentes, prompt engineering pour réduire les tokens, monitoring des appels avec alerte de seuil. On vous remet un dashboard de suivi des coûts à la livraison.",
      },
    ],
    ctaTitle: "Une feature IA à intégrer dans votre produit ?",
    ctaDescription:
      "En 30 minutes, on cadre votre projet et on chiffre sous 24h. On regarde votre cas d'usage et vos contraintes, et on vous dit ce qu'on peut livrer en 3 à 8 semaines.",
    resources: [
      "integrer-ia-application-web",
      "openai-vs-claude-api-quel-choisir",
    ],
    resourcesTitle: "Intégrer l'IA dans votre produit",
    resourcesSubtitle:
      "Choisir le bon modèle, gérer les coûts, livrer en production.",
  },

  // ────────────────────────────────────────────
  // Entry 6 — workflow-n8n
  // ────────────────────────────────────────────
  {
    slug: "workflow-n8n",
    title: "Agence n8n : automatisation de workflows pour PME",
    shortTitle: "Workflow n8n",
    category: "ia-auto",
    icon: PiArrowsClockwiseFill,
    iconSrc: "/icons/workflow-n8n.svg",
    iconBg: "bg-amber-400",
    shortDescription: "Automatisez vos process internes avec n8n.",
    metaTitle: "Agence n8n : automatisation workflows pour PME | Vizion Web",
    metaDescription:
      "Agence n8n à Montpellier : automatisation n8n pour PME. Sync CRM, alertes Slack, scoring lead, orchestration IA. Devis sous 24h. Livraison 1 à 4 semaines.",
    heroTitle: "Agence n8n pour automatiser vos process internes",
    heroSubtitle:
      "On industrialise vos workflows avec n8n, l'alternative open-source à Zapier et Make : sync CRM, alertes Slack, scoring automatique de leads et orchestration IA.",
    problemTitle: "Vos équipes copient-collent entre 5 outils tous les jours",
    problemDescription:
      "Lead saisi dans le CRM, recopié dans la compta, notification manuelle dans Slack, tâche créée dans Notion. Multipliez par 50 leads par semaine et 30 % du temps de votre équipe part en saisie. Zapier scale mal au volume, et vous ne possédez pas les workflows.",
    problemPoints: [
      {
        text: "Vos équipes saisissent les mêmes données dans 3 ou 4 outils différents",
        icon: PiFilesFill,
      },
      {
        text: "Zapier ou Make coûtent plusieurs centaines d'euros par mois quand le volume monte",
        icon: PiCurrencyDollarFill,
      },
      {
        text: "Vos workflows critiques tournent dans un compte SaaS dont vous n'êtes pas propriétaire",
        icon: PiLockKeyFill,
      },
      {
        text: "Vos process internes ne sont pas documentés, juste des Zaps que personne ne maîtrise",
        icon: PiWarningFill,
      },
    ],
    solutionTitle: "Des workflows n8n auto-hébergés ou cloud, à vous",
    solutionDescription:
      "On conçoit, développe et déploie vos workflows n8n : sync CRM, alertes contextuelles, scoring lead, orchestration IA, scraping et enrichissement. Open-source, auto-hébergeable, vous restez propriétaire des workflows et des données.",
    solutionPoints: [
      {
        text: "Sync bidirectionnelle entre CRM, comptabilité, e-mail et outils métier",
        icon: PiArrowsClockwiseFill,
      },
      {
        text: "Alertes Slack ou e-mail contextuelles : nouveau lead chaud, paiement en retard, anomalie",
        icon: PiMegaphoneFill,
      },
      {
        text: "Scraping web et enrichissement de données pour qualifier vos prospects",
        icon: PiMagnifyingGlassFill,
      },
      {
        text: "Orchestration IA : chaîner OpenAI ou Claude avec vos outils dans un workflow visuel",
        icon: PiLightningFill,
      },
    ],
    included: [
      {
        title: "Audit de vos process actuels",
        description:
          "Cartographie des tâches manuelles, identification des workflows à industrialiser",
      },
      {
        title: "Choix d'hébergement",
        description:
          "n8n cloud officiel ou auto-hébergé sur votre serveur, selon vos contraintes",
      },
      {
        title: "Conception des workflows",
        description:
          "Schéma de chaque workflow, gestion des erreurs, retries, alertes",
      },
      {
        title: "Développement & connexions API",
        description:
          "Mise en place des nodes, intégrations CRM, comptabilité, e-mail, IA",
      },
      {
        title: "Tests & mise en production",
        description:
          "Recette sur jeu de données, monitoring, déploiement progressif",
      },
      {
        title: "Documentation & formation",
        description:
          "Guide d'utilisation, formation de votre équipe pour les évolutions courantes",
      },
      {
        title: "Support 90 jours",
        description:
          "Corrections, ajustements et accompagnement post-livraison",
      },
    ],
    deliveryTime: "1 à 4 semaines",
    targetProfiles: [
      {
        title: "PME qui copie-colle entre 5 outils",
        description:
          "Vos équipes saisissent les mêmes infos dans plusieurs outils déconnectés et perdent du temps tous les jours.",
        icon: PiBuildingsFill,
      },
      {
        title: "Équipe ops qui veut industrialiser",
        description:
          "Vous avez des process formalisés mais exécutés à la main, vous cherchez à les automatiser sans embaucher un dev.",
        icon: PiClipboardTextFill,
      },
      {
        title: "Founder solo qui automatise le manuel",
        description:
          "Vous gérez tout seul et chaque heure de saisie est une heure que vous ne consacrez pas à votre business.",
        icon: PiUserFill,
      },
    ],
    faqs: [
      {
        q: "n8n, Zapier ou Make : lequel choisir ?",
        a: "Zapier est le plus simple à prendre en main mais le plus cher au volume. Make (anciennement Integromat) offre plus de flexibilité et un meilleur rapport qualité-prix. n8n est open-source, auto-hébergeable, et propose la flexibilité la plus poussée (code custom, expressions JavaScript, intégrations IA natives). On choisit selon votre volume, vos contraintes de souveraineté et la complexité des workflows.",
      },
      {
        q: "Combien coûte une mission n8n ?",
        a: "Chaque mission est sur-mesure : pas de tarif standard. Le pricing dépend du nombre de workflows, de la complexité des intégrations (CRM, compta, IA) et de la stratégie de gestion d'erreurs. Hors coûts d'hébergement et d'API. Devis chiffré sous 24h après cadrage.",
      },
      {
        q: "Cloud officiel ou auto-hébergé ?",
        a: "Cloud officiel : plus simple, idéal pour démarrer et pour des volumes moyens. Auto-hébergé : moins cher au volume, contrôle complet sur les données, conformité RGPD plus simple à justifier. On vous oriente selon votre volume mensuel, vos contraintes de conformité et l'expertise interne pour la maintenance.",
      },
      {
        q: "Peut-on intégrer l'IA dans les workflows n8n ?",
        a: "Oui, c'est un cas d'usage très courant. n8n a des nodes natifs pour OpenAI, Anthropic et les modèles open-source. Cas typiques : classifier un e-mail entrant avec Claude puis le router vers le bon outil, générer un brouillon de réponse, extraire des données structurées d'un PDF reçu par e-mail.",
      },
      {
        q: "Mon équipe pourra-t-elle modifier les workflows ?",
        a: "Oui, c'est l'intérêt de n8n : l'interface visuelle permet à des profils non-développeurs de comprendre et d'ajuster les workflows. On forme votre équipe sur les évolutions courantes (ajouter une condition, modifier un destinataire) et on documente les workflows complexes.",
      },
    ],
    ctaTitle: "Des process manuels à industrialiser ?",
    ctaDescription:
      "En 30 minutes, on cadre votre projet et on chiffre sous 24h. On cartographie vos workflows manuels et on vous dit ce qu'on peut livrer en 1 à 4 semaines.",
    resources: [
      "automatiser-business-outils-web",
      "integrer-ia-application-web",
    ],
    resourcesTitle: "Automatiser vos workflows",
    resourcesSubtitle: "Quels process automatiser et quels outils choisir.",
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
      id: "produits-digitaux",
      title: "Produits digitaux",
      description: "MVP, SaaS, logiciel métier, site e-commerce & apps web",
      services: getServicesByCategory("produits-digitaux"),
    },
    {
      id: "ia-auto",
      title: "IA & Automatisation",
      description:
        "IA intégrée dans vos workflows, et automatisation des process.",
      services: getServicesByCategory("ia-auto"),
    },
  ];
}
