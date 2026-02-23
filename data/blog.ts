export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  readingTime: string;
  image?: string;
}

export type BlogCategory =
  | "guides"
  | "cas-usage"
  | "comparaisons"
  | "strategie"
  | "tendances";

export const blogCategories: Record<
  BlogCategory,
  { label: string; description: string }
> = {
  guides: {
    label: "Guides",
    description: "Tutoriels et guides pratiques",
  },
  "cas-usage": {
    label: "Cas d'usage",
    description: "Exemples concrets et retours d'expérience",
  },
  comparaisons: {
    label: "Comparaisons",
    description: "Analyses comparatives d'outils et de solutions",
  },
  strategie: {
    label: "Stratégie",
    description: "Conseils pour décider et investir",
  },
  tendances: {
    label: "Tendances",
    description: "Veille technologique et innovations",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cout-site-internet",
    title: "Combien coûte un site internet en 2026 ? Tarifs et budget réaliste",
    description:
      "Fourchettes de prix par type de projet, facteurs qui influencent le coût et méthode pour définir votre budget web sans mauvaise surprise.",
    date: "2025-12-18",
    category: "strategie",
    readingTime: "10 min",
  },
  {
    slug: "application-sur-mesure-vs-saas",
    title: "Application web sur-mesure ou solution SaaS : comment choisir ?",
    description:
      "Cadre de décision pour trancher entre acheter un outil SaaS existant et faire développer votre propre application. Comparaison des coûts sur 3 ans.",
    date: "2025-12-20",
    category: "comparaisons",
    readingTime: "9 min",
  },
  {
    slug: "cahier-des-charges-site-web",
    title: "Comment rédiger un cahier des charges pour un site web",
    description:
      "Les 7 sections essentielles de votre brief web, avec exemples de bonne et mauvaise formulation. Guide pratique pour obtenir des devis pertinents.",
    date: "2025-12-22",
    category: "guides",
    readingTime: "12 min",
  },
  {
    slug: "landing-page-qui-convertit",
    title: "Landing page qui convertit : les 7 éléments indispensables",
    description:
      "Les 7 ingrédients qui séparent une landing page qui génère des leads d'une page qui fait fuir les visiteurs. Principes testés et erreurs courantes.",
    date: "2025-12-24",
    category: "guides",
    readingTime: "9 min",
  },
  {
    slug: "wordpress-vs-webflow-vs-sur-mesure",
    title:
      "WordPress, Webflow ou code sur-mesure : quel choix pour votre projet ?",
    description:
      "Comparaison honnête de WordPress, Webflow et du développement sur-mesure. Forces, faiblesses, coûts et recommandations selon votre type de projet.",
    date: "2025-12-26",
    category: "comparaisons",
    readingTime: "11 min",
  },
  {
    slug: "site-ne-genere-pas-clients",
    title:
      "Pourquoi votre site ne génère pas de clients (et comment corriger)",
    description:
      "Les raisons les plus fréquentes pour lesquelles un site web ne convertit pas, et le plan d'action concret pour transformer vos visiteurs en prospects.",
    date: "2025-12-28",
    category: "strategie",
    readingTime: "8 min",
  },
  {
    slug: "creer-application-web-etapes",
    title: "Créer une application web : les étapes de A à Z",
    description:
      "Du premier échange à la mise en production : les 9 étapes concrètes d'un projet d'application web, avec les décisions clés et les délais réalistes.",
    date: "2025-12-30",
    category: "guides",
    readingTime: "10 min",
  },
  {
    slug: "refonte-site-web-quand-pourquoi",
    title: "Refonte de site web : quand et pourquoi refaire son site ?",
    description:
      "Les signaux qui montrent qu'il est temps de refondre votre site, les étapes d'une refonte réussie et les erreurs qui transforment le projet en cauchemar.",
    date: "2026-01-01",
    category: "strategie",
    readingTime: "8 min",
  },
  {
    slug: "site-vitrine-vs-ecommerce",
    title: "Site vitrine ou site e-commerce : lequel vous faut-il ?",
    description:
      "Les différences concrètes entre site vitrine et e-commerce, les coûts associés et les critères pour choisir la bonne formule selon votre activité.",
    date: "2026-01-03",
    category: "comparaisons",
    readingTime: "8 min",
  },
  {
    slug: "erreurs-conversion-site-web",
    title: "5 erreurs qui plombent la conversion de votre site web",
    description:
      "Les 5 erreurs de conception les plus courantes qui empêchent votre site de convertir ses visiteurs en clients, avec les corrections à appliquer.",
    date: "2026-01-05",
    category: "strategie",
    readingTime: "8 min",
  },
  {
    slug: "choisir-agence-web-criteres",
    title: "Comment choisir son agence web : 8 critères qui comptent",
    description:
      "Les 8 critères concrets pour évaluer une agence web avant de signer. Comment repérer les bons prestataires et éviter les mauvaises surprises.",
    date: "2026-01-07",
    category: "strategie",
    readingTime: "10 min",
  },
  {
    slug: "saas-pme-exemples-outils-metier",
    title: "SaaS pour PME : 6 exemples d'outils métier sur-mesure",
    description:
      "6 exemples d'outils métier sur-mesure qui ont transformé le quotidien de PME. Retours d'expérience concrets et enseignements.",
    date: "2026-01-09",
    category: "cas-usage",
    readingTime: "8 min",
  },
  {
    slug: "seo-technique-nextjs",
    title: "SEO technique pour un site Next.js : le guide complet",
    description:
      "Guide technique pour optimiser le référencement d'un site Next.js : métadonnées, sitemap, performance, rendu serveur et bonnes pratiques SEO.",
    date: "2026-01-11",
    category: "guides",
    readingTime: "10 min",
  },
  {
    slug: "budget-site-web-maitriser-cout",
    title: "Budget site web : comment ne pas dépasser le devis initial",
    description:
      "Les causes fréquentes de dépassement de budget sur un projet web et les méthodes concrètes pour garder le contrôle des coûts.",
    date: "2026-01-13",
    category: "strategie",
    readingTime: "9 min",
  },
  {
    slug: "reservation-en-ligne-solution",
    title:
      "Réservation en ligne pour restaurants, salons et coachs : quelle solution ?",
    description:
      "Comparaison des solutions de réservation en ligne pour restaurants, salons et coachs. Critères de choix, coûts et retours d'expérience.",
    date: "2026-01-15",
    category: "cas-usage",
    readingTime: "8 min",
  },
  {
    slug: "quest-ce-quun-mvp",
    title: "Qu'est-ce qu'un MVP et pourquoi commencer par là ?",
    description:
      "Ce qu'est un MVP, pourquoi c'est la meilleure façon de lancer un produit digital et comment définir le périmètre de votre version minimale.",
    date: "2026-01-17",
    category: "guides",
    readingTime: "9 min",
  },
  {
    slug: "react-vs-vue-vs-angular",
    title:
      "React vs Vue vs Angular : quel framework pour votre projet web ?",
    description:
      "Comparaison objective de React, Vue et Angular pour vous aider à choisir le bon framework selon votre projet, votre équipe et vos ambitions.",
    date: "2026-01-19",
    category: "comparaisons",
    readingTime: "10 min",
  },
  {
    slug: "dashboard-sur-mesure-cas-concrets",
    title: "Dashboard sur-mesure : 5 cas où il change la donne",
    description:
      "5 cas concrets où un dashboard sur-mesure a remplacé les tableaux Excel et transformé la prise de décision en entreprise.",
    date: "2026-01-21",
    category: "cas-usage",
    readingTime: "9 min",
  },
  {
    slug: "fixer-prix-saas-strategie",
    title: "Comment fixer le prix d'un SaaS : modèles et stratégie",
    description:
      "Les modèles de tarification SaaS qui fonctionnent, comment fixer votre prix de lancement et les erreurs de pricing à éviter.",
    date: "2026-01-23",
    category: "strategie",
    readingTime: "10 min",
  },
  {
    slug: "espace-client-site-web",
    title:
      "Espace client sur votre site web : pourquoi et comment l'intégrer",
    description:
      "Pourquoi intégrer un espace client à votre site web, ce qu'il doit contenir et comment le mettre en place sans exploser le budget.",
    date: "2026-01-25",
    category: "cas-usage",
    readingTime: "9 min",
  },
  {
    slug: "hebergement-vercel-netlify-vps",
    title: "Hébergement web : Vercel, Netlify ou VPS classique ?",
    description:
      "Comparaison de Vercel, Netlify et d'un VPS classique pour héberger votre site ou application web. Performances, coûts et cas d'usage.",
    date: "2026-01-27",
    category: "comparaisons",
    readingTime: "10 min",
  },
  {
    slug: "paiement-en-ligne-stripe-paypal",
    title:
      "Paiement en ligne sur votre site : Stripe, PayPal ou autre ?",
    description:
      "Comparaison de Stripe, PayPal et des alternatives pour intégrer le paiement en ligne sur votre site. Frais, fonctionnalités et recommandations.",
    date: "2026-01-29",
    category: "comparaisons",
    readingTime: "10 min",
  },
  {
    slug: "de-idee-a-application-saas",
    title: "De l'idée à l'application : journal d'un projet SaaS",
    description:
      "Le parcours complet d'un projet SaaS, de l'idée initiale au lancement : choix techniques, erreurs évitées et leçons apprises en chemin.",
    date: "2026-01-31",
    category: "cas-usage",
    readingTime: "10 min",
  },
  {
    slug: "performance-web-vitesse-ventes",
    title:
      "Performance web : pourquoi la vitesse de votre site impacte vos ventes",
    description:
      "L'impact mesurable de la vitesse de chargement sur vos ventes et votre référencement, avec les optimisations concrètes à mettre en place.",
    date: "2026-02-02",
    category: "guides",
    readingTime: "9 min",
  },
  {
    slug: "crm-sur-mesure-vs-hubspot",
    title:
      "CRM sur-mesure vs Hubspot/Salesforce : quand développer le vôtre",
    description:
      "Quand un CRM sur-mesure devient plus rentable que HubSpot ou Salesforce. Critères de décision, coûts comparés et cas concrets.",
    date: "2026-02-04",
    category: "comparaisons",
    readingTime: "9 min",
  },
  {
    slug: "integrer-ia-application-web",
    title: "Intégrer l'IA dans votre application web : cas pratiques",
    description:
      "Cas pratiques d'intégration de l'intelligence artificielle dans des applications web : chatbots, recommandations, automatisation et analyse de données.",
    date: "2026-02-06",
    category: "tendances",
    readingTime: "10 min",
  },
  {
    slug: "migration-wordpress-nextjs",
    title: "Migration WordPress vers Next.js : pourquoi et comment",
    description:
      "Pourquoi et comment migrer de WordPress vers Next.js. Avantages, étapes de migration, pièges à éviter et retour d'expérience.",
    date: "2026-02-08",
    category: "guides",
    readingTime: "9 min",
  },
  {
    slug: "accessibilite-web-obligations",
    title: "Accessibilité web : obligations légales et bonnes pratiques",
    description:
      "Les obligations légales en matière d'accessibilité web (RGAA, WCAG), les bonnes pratiques techniques et les bénéfices concrets pour votre activité.",
    date: "2026-02-11",
    category: "guides",
    readingTime: "10 min",
  },
  {
    slug: "automatiser-business-outils-web",
    title: "Automatiser son business avec des outils web internes",
    description:
      "Comment des outils web internes sur-mesure peuvent automatiser vos tâches répétitives, réduire les erreurs et libérer du temps pour votre équipe.",
    date: "2026-02-14",
    category: "cas-usage",
    readingTime: "10 min",
  },
  {
    slug: "tendances-web-design-2026",
    title: "Les tendances web design 2026 qui comptent vraiment",
    description:
      "Les tendances web design 2026 qui ont un vrai impact sur la conversion et l'expérience utilisateur, au-delà des effets de mode.",
    date: "2026-02-18",
    category: "tendances",
    readingTime: "10 min",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getRecentBlogPosts(count: number): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
