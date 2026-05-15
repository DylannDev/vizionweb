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
  | "lancer-son-projet"
  | "applications"
  | "fonctionnalites"
  | "sites-et-conversion"
  | "technique"
  | "ia"
  | "automatisation"
  | "tendances"
  | "comparatif";

export const blogCategories: Record<
  BlogCategory,
  { label: string; description: string }
> = {
  "lancer-son-projet": {
    label: "Lancer son projet",
    description:
      "Budget, cahier des charges et premiers pas pour votre projet web",
  },
  applications: {
    label: "Applications & SaaS",
    description:
      "Créer, lancer et faire évoluer une application web ou un SaaS",
  },
  fonctionnalites: {
    label: "Fonctionnalités web",
    description:
      "Réservation, paiement, espace client et outils métier intégrés",
  },
  "sites-et-conversion": {
    label: "Sites & Conversion",
    description:
      "Créer un site qui attire des visiteurs et les transforme en clients",
  },
  technique: {
    label: "Technique & Performance",
    description: "SEO, performance, frameworks et hébergement",
  },
  ia: {
    label: "IA",
    description:
      "Intégrer OpenAI, Claude ou Mistral dans vos applications métier ou SaaS",
  },
  automatisation: {
    label: "Automatisation",
    description:
      "Automatiser vos process internes avec n8n, Zapier ou des workflows custom",
  },
  tendances: {
    label: "Tendances & Innovation",
    description: "Design, nouvelles pratiques et évolutions du web",
  },
  comparatif: {
    label: "Comparatifs",
    description:
      "Comparatifs honnêtes pour vous aider à choisir entre deux solutions",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cout-site-internet",
    title: "Combien coûte un site internet en 2026 ? Tarifs et budget réaliste",
    description:
      "Fourchettes de prix par type de projet, facteurs qui influencent le coût et méthode pour définir votre budget web sans mauvaise surprise.",
    date: "2025-12-18",
    category: "lancer-son-projet",
    readingTime: "10 min",
    image: "/blog/combien-coute-un-site-internet.webp",
  },
  {
    slug: "application-sur-mesure-vs-saas",
    title: "Application web sur-mesure ou solution SaaS : comment choisir ?",
    description:
      "Cadre de décision pour trancher entre acheter un outil SaaS existant et faire développer votre propre application. Comparaison des coûts sur 3 ans.",
    date: "2025-12-20",
    category: "applications",
    readingTime: "9 min",
    image: "/blog/application-sur-mesure-vs-saas.webp",
  },
  {
    slug: "cahier-des-charges-site-web",
    title: "Comment rédiger un cahier des charges pour un site web",
    description:
      "Les 7 sections essentielles de votre brief web, avec exemples de bonne et mauvaise formulation. Guide pratique pour obtenir des devis pertinents.",
    date: "2025-12-22",
    category: "lancer-son-projet",
    readingTime: "12 min",
    image: "/blog/cahier-des-charges-site-web.webp",
  },
  {
    slug: "landing-page-qui-convertit",
    title: "Landing page qui convertit : les 7 éléments indispensables",
    description:
      "Les 7 ingrédients qui séparent une landing page qui génère des leads d'une page qui fait fuir les visiteurs. Principes testés et erreurs courantes.",
    date: "2025-12-24",
    category: "sites-et-conversion",
    readingTime: "9 min",
    image: "/blog/landing-page-qui-convertit.webp",
  },
  {
    slug: "wordpress-vs-webflow-vs-sur-mesure",
    title:
      "WordPress, Webflow ou code sur-mesure : quel choix pour votre projet ?",
    description:
      "Comparaison honnête de WordPress, Webflow et du développement sur-mesure. Forces, faiblesses, coûts et recommandations selon votre type de projet.",
    date: "2025-12-26",
    category: "sites-et-conversion",
    readingTime: "11 min",
    image: "/blog/wordpress-vs-webflow-vs-sur-mesure.webp",
  },
  {
    slug: "site-ne-genere-pas-clients",
    title: "Pourquoi votre site ne génère pas de clients (et comment corriger)",
    description:
      "Les raisons les plus fréquentes pour lesquelles un site web ne convertit pas, et le plan d'action concret pour transformer vos visiteurs en prospects.",
    date: "2025-12-28",
    category: "sites-et-conversion",
    readingTime: "8 min",
    image: "/blog/pourquoi-votre-site-ne-genere-pas-de-clients.webp",
  },
  {
    slug: "creer-application-web-etapes",
    title: "Créer une application web : les étapes de A à Z",
    description:
      "Du premier échange à la mise en production : les 9 étapes concrètes d'un projet d'application web, avec les décisions clés et les délais réalistes.",
    date: "2025-12-30",
    category: "applications",
    readingTime: "10 min",
    image: "/blog/creer-une-application-web.webp",
  },
  {
    slug: "refonte-site-web-quand-pourquoi",
    title: "Refonte de site web : quand et pourquoi refaire son site ?",
    description:
      "Les signaux qui montrent qu'il est temps de refondre votre site, les étapes d'une refonte réussie et les erreurs qui transforment le projet en cauchemar.",
    date: "2026-01-01",
    category: "sites-et-conversion",
    readingTime: "8 min",
    image: "/blog/refonte-site-web.webp",
  },
  {
    slug: "site-vitrine-vs-ecommerce",
    title: "Site vitrine ou site e-commerce : lequel vous faut-il ?",
    description:
      "Les différences concrètes entre site vitrine et e-commerce, les coûts associés et les critères pour choisir la bonne formule selon votre activité.",
    date: "2026-01-03",
    category: "sites-et-conversion",
    readingTime: "8 min",
    image: "/blog/site-vitrine-vs-e-commerce.webp",
  },
  {
    slug: "erreurs-conversion-site-web",
    title: "5 erreurs qui plombent la conversion de votre site web",
    description:
      "Les 5 erreurs de conception les plus courantes qui empêchent votre site de convertir ses visiteurs en clients, avec les corrections à appliquer.",
    date: "2026-01-05",
    category: "sites-et-conversion",
    readingTime: "8 min",
    image: "/blog/5-erreurs-qui-plombent-la-conversion.webp",
  },
  {
    slug: "choisir-agence-web-criteres",
    title: "Comment choisir son agence web : 8 critères qui comptent",
    description:
      "Les 8 critères concrets pour évaluer une agence web avant de signer. Comment repérer les bons prestataires et éviter les mauvaises surprises.",
    date: "2026-01-07",
    category: "lancer-son-projet",
    readingTime: "10 min",
    image: "/blog/choisir-son-agence-web.webp",
  },
  {
    slug: "saas-pme-exemples-outils-metier",
    title: "SaaS pour PME : 6 exemples d'outils métier sur-mesure",
    description:
      "6 exemples d'outils métier sur-mesure qui ont transformé le quotidien de PME. Retours d'expérience concrets et enseignements.",
    date: "2026-01-09",
    category: "applications",
    readingTime: "8 min",
    image: "/blog/saas-pour-pme.webp",
  },
  {
    slug: "seo-technique-nextjs",
    title: "SEO technique pour un site Next.js : le guide complet",
    description:
      "Guide technique pour optimiser le référencement d'un site Next.js : métadonnées, sitemap, performance, rendu serveur et bonnes pratiques SEO.",
    date: "2026-01-11",
    category: "technique",
    readingTime: "10 min",
    image: "/blog/seo-technique-pour-nextjs.webp",
  },
  {
    slug: "budget-site-web-maitriser-cout",
    title: "Budget site web : comment ne pas dépasser le devis initial",
    description:
      "Les causes fréquentes de dépassement de budget sur un projet web et les méthodes concrètes pour garder le contrôle des coûts.",
    date: "2026-01-13",
    category: "lancer-son-projet",
    readingTime: "9 min",
    image: "/blog/budget-site-web.webp",
  },
  {
    slug: "reservation-en-ligne-solution",
    title:
      "Réservation en ligne pour restaurants, salons et coachs : quelle solution ?",
    description:
      "Comparaison des solutions de réservation en ligne pour restaurants, salons et coachs. Critères de choix, coûts et retours d'expérience.",
    date: "2026-01-15",
    category: "fonctionnalites",
    readingTime: "8 min",
    image: "/blog/reservation-en-ligne.webp",
  },
  {
    slug: "quest-ce-quun-mvp",
    title: "MVP : définition, méthode agile et exemples concrets en 2026",
    description:
      "MVP (Minimum Viable Product) : définition simple, méthode agile, exemples concrets (Airbnb, Dropbox, Buffer) et budget. Le guide complet pour lancer ton produit.",
    date: "2026-01-17",
    category: "lancer-son-projet",
    readingTime: "9 min",
    image: "/blog/qu-est-ce-qu-un-mvp.webp",
  },
  {
    slug: "react-vs-vue-vs-angular",
    title: "React vs Vue vs Angular : quel framework pour votre projet web ?",
    description:
      "Comparaison objective de React, Vue et Angular pour vous aider à choisir le bon framework selon votre projet, votre équipe et vos ambitions.",
    date: "2026-01-19",
    category: "technique",
    readingTime: "10 min",
    image: "/blog/react-vs-vue-vs-angular.webp",
  },
  {
    slug: "dashboard-sur-mesure-cas-concrets",
    title: "Dashboard sur-mesure : 5 cas où il change la donne",
    description:
      "5 cas concrets où un dashboard sur-mesure a remplacé les tableaux Excel et transformé la prise de décision en entreprise.",
    date: "2026-01-21",
    category: "fonctionnalites",
    readingTime: "9 min",
    image: "/blog/dashboard-sur-mesure.webp",
  },
  {
    slug: "fixer-prix-saas-strategie",
    title: "Comment fixer le prix d'un SaaS : modèles et stratégie",
    description:
      "Les modèles de tarification SaaS qui fonctionnent, comment fixer votre prix de lancement et les erreurs de pricing à éviter.",
    date: "2026-01-23",
    category: "applications",
    readingTime: "10 min",
    image: "/blog/fixer-le-prix-d-un-saas.webp",
  },
  {
    slug: "espace-client-site-web",
    title: "Espace client sur votre site web : pourquoi et comment l'intégrer",
    description:
      "Pourquoi intégrer un espace client à votre site web, ce qu'il doit contenir et comment le mettre en place sans exploser le budget.",
    date: "2026-01-25",
    category: "fonctionnalites",
    readingTime: "9 min",
    image: "/blog/espace-client-sur-votre-site.webp",
  },
  {
    slug: "hebergement-vercel-netlify-vps",
    title: "Hébergement web : Vercel, Netlify ou VPS classique ?",
    description:
      "Comparaison de Vercel, Netlify et d'un VPS classique pour héberger votre site ou application web. Performances, coûts et cas d'usage.",
    date: "2026-01-27",
    category: "technique",
    readingTime: "10 min",
    image: "/blog/hebergement-vercel-netlify-ou-vps.webp",
  },
  {
    slug: "paiement-en-ligne-stripe-paypal",
    title: "Paiement en ligne sur votre site : Stripe, PayPal ou autre ?",
    description:
      "Comparaison de Stripe, PayPal et des alternatives pour intégrer le paiement en ligne sur votre site. Frais, fonctionnalités et recommandations.",
    date: "2026-01-29",
    category: "fonctionnalites",
    readingTime: "10 min",
    image: "/blog/paiement-en-ligne-stripe-paypal.webp",
  },
  {
    slug: "de-idee-a-application-saas",
    title: "De l'idée à l'application : journal d'un projet SaaS",
    description:
      "Le parcours complet d'un projet SaaS, de l'idée initiale au lancement : choix techniques, erreurs évitées et leçons apprises en chemin.",
    date: "2026-01-31",
    category: "applications",
    readingTime: "10 min",
    image: "/blog/de-l-idee-a-l-application-saas.webp",
  },
  {
    slug: "performance-web-vitesse-ventes",
    title:
      "Performance web : pourquoi la vitesse de votre site impacte vos ventes",
    description:
      "L'impact mesurable de la vitesse de chargement sur vos ventes et votre référencement, avec les optimisations concrètes à mettre en place.",
    date: "2026-02-02",
    category: "technique",
    readingTime: "9 min",
    image: "/blog/performance-web-et-vitesse.webp",
  },
  {
    slug: "crm-sur-mesure-vs-hubspot",
    title: "CRM sur-mesure vs Hubspot/Salesforce : quand développer le vôtre",
    description:
      "Quand un CRM sur-mesure devient plus rentable que HubSpot ou Salesforce. Critères de décision, coûts comparés et cas concrets.",
    date: "2026-02-04",
    category: "applications",
    readingTime: "9 min",
    image: "/blog/crm-sur-mesure-vs-hubspot.webp",
  },
  {
    slug: "integrer-ia-application-web",
    title:
      "Intégrer l'IA et les APIs OpenAI dans votre application web : guide pratique",
    description:
      "Comment intégrer l'IA (OpenAI, Claude) dans une application web pour PME : APIs OpenAI, cas d'usage concrets (chatbot, classification, extraction), coûts réels.",
    date: "2026-02-06",
    category: "ia",
    readingTime: "10 min",
    image: "/blog/integrer-l-ia-dans-votre-app.webp",
  },
  {
    slug: "migration-wordpress-nextjs",
    title: "Migration WordPress vers Next.js : pourquoi et comment",
    description:
      "Pourquoi et comment migrer de WordPress vers Next.js. Avantages, étapes de migration, pièges à éviter et retour d'expérience.",
    date: "2026-02-08",
    category: "technique",
    readingTime: "9 min",
    image: "/blog/migration-wordpress-vers-nextjs.webp",
  },
  {
    slug: "accessibilite-web-obligations",
    title: "Accessibilité web : obligations légales et bonnes pratiques",
    description:
      "Les obligations légales en matière d'accessibilité web (RGAA, WCAG), les bonnes pratiques techniques et les bénéfices concrets pour votre activité.",
    date: "2026-02-11",
    category: "tendances",
    readingTime: "10 min",
    image: "/blog/accessibilite-web.webp",
  },
  {
    slug: "automatiser-business-outils-web",
    title: "Automatiser son business avec des outils web internes",
    description:
      "Comment des outils web internes sur-mesure peuvent automatiser vos tâches répétitives, réduire les erreurs et libérer du temps pour votre équipe.",
    date: "2026-02-14",
    category: "automatisation",
    readingTime: "10 min",
    image: "/blog/automatiser-business.webp",
  },
  {
    slug: "tendances-web-design-2026",
    title: "Les tendances web design 2026 qui comptent vraiment",
    description:
      "Les tendances web design 2026 qui ont un vrai impact sur la conversion et l'expérience utilisateur, au-delà des effets de mode.",
    date: "2026-02-18",
    category: "tendances",
    readingTime: "10 min",
    image: "/blog/tendances-webdesign.webp",
  },
  {
    slug: "next-js-vs-wordpress-pour-le-seo",
    title: "Next.js vs WordPress pour le SEO : quel choix en 2026 ?",
    description:
      "Comparatif honnête Next.js vs WordPress pour le SEO : Core Web Vitals, sécurité, coûts et cas d'usage. Le verdict par profil de projet.",
    date: "2026-05-03",
    category: "comparatif",
    readingTime: "11 min",
    image: "/blog/next-vs-wordpress.webp",
  },
  {
    slug: "openai-vs-claude-api-quel-choisir",
    title: "OpenAI vs Claude : quel modèle choisir en 2026 ?",
    description:
      "Comparatif OpenAI vs Claude : pricing, qualité du code, multimodalité, contexte long. Le verdict par cas d'usage.",
    date: "2026-05-03",
    category: "ia",
    readingTime: "11 min",
    image: "/blog/claude-vs-chatgpt.webp",
  },
  {
    slug: "saas-vs-developpement-sur-mesure",
    title: "SaaS vs application sur-mesure : quel choix pour votre outil ?",
    description:
      "SaaS générique ou sur-mesure : comparatif coûts, délais, propriété et scalabilité. Les seuils chiffrés pour décider sans hésiter.",
    date: "2026-05-03",
    category: "comparatif",
    readingTime: "11 min",
    image: "/blog/saas-vs-app-custom.webp",
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

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const post = getBlogPost(slug);
  if (!post) return [];
  return blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
