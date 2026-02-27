export const CITIES = [
  { slug: "paris", name: "Paris" },
  { slug: "lyon", name: "Lyon" },
  { slug: "marseille", name: "Marseille" },
  { slug: "toulouse", name: "Toulouse" },
  { slug: "bordeaux", name: "Bordeaux" },
  { slug: "lille", name: "Lille" },
  { slug: "nantes", name: "Nantes" },
  { slug: "nice", name: "Nice" },
  { slug: "strasbourg", name: "Strasbourg" },
  { slug: "rennes", name: "Rennes" },
  { slug: "montpellier", name: "Montpellier" },
  { slug: "pointe-a-pitre", name: "Pointe-à-Pitre" },
  { slug: "fort-de-france", name: "Fort-de-France" },
  { slug: "cayenne", name: "Cayenne" },
  { slug: "saint-denis", name: "Saint-Denis" },
];

export const COUNTRIES = [
  { slug: "guadeloupe", name: "Guadeloupe" },
  { slug: "martinique", name: "Martinique" },
  { slug: "guyane", name: "Guyane" },
  { slug: "la-reunion", name: "La Réunion" },
];

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
];

export const plans = [
  {
    name: "Vizion Start",
    price: "2 000€",
    description: "Landing page rapide et prête à convertir.",
    features: [
      "Livraison en 2–3 semaines",
      "1–2 pages",
      "UI/UX Design Figma sur-mesure",
      "Développement sur-mesure (React/Next.js)",
      "Copywriting premium",
      "SEO technique de base",
      "Optimisation conversion (CRO)",
      "Responsive Design",
      "Animations simples",
      "Révisions illimitées avant livraison",
      "Support 30 jours",
    ],
    highlight: false,
    icon: "/bars-1.svg",
    category: "web",
  },
  {
    name: "Vizion Boost",
    price: "3 500€",
    description: "Site vitrine complet qui capte vos clients.",
    features: [
      "Livraison en 3–4 semaines",
      "3–5 pages",
      "UI/UX Design Figma sur-mesure",
      "Développement sur-mesure (React/Next.js)",
      "Copywriting premium",
      "SEO technique renforcé",
      "Optimisation conversion (CRO)",
      "Responsive Design",
      "Animations complètes",
      "Révisions illimitées avant livraison",
      "Support 60 jours",
      "Intégrations simples",
    ],
    highlight: false,
    icon: "/bars-2.svg",
    category: "web",
  },
  {
    name: "Vizion Pro",
    price: "5 000€",
    description: "Site web avec fonctionnalités sur-mesure.",
    features: [
      "Livraison en 4–6 semaines",
      "6–10+ pages",
      "UI/UX Design Figma sur-mesure",
      "Développement sur-mesure (React/Next.js)",
      "Copywriting avancé",
      "SEO technique avancé",
      "Optimisation conversion (CRO)",
      "Responsive Design",
      "Animations avancées",
      "Révisions illimitées avant livraison",
      "Support 90 jours",
      "Intégrations CMS avancées",
      "Fonctionnalités sur-mesure",
    ],
    highlight: true,
    icon: "/bars-3.svg",
    category: "web",
  },
  {
    name: "Vizion Enterprise",
    price: "10 000€ - 30 000€+",
    description:
      "Application web / SaaS sur-mesure pour scaler votre business.",
    features: [
      "Livraison en 4–8 semaines",
      "Roadmap par étapes (MVP → V2 → V3)",
      "Développement sur-mesure (React/Next.js)",
      "Responsive Design",
      "Révisions illimitées avant livraison",
      "Dashboard administration sur-mesure",
      "Tests, optimisation renforcées",
      "Déploiement & hébergement inclus",
      "Support illimité",
      "Intégrations sur-mesure",
      "Fonctionnalités avancées sur-mesure",
      "Modifications après livraison sur devis",
    ],
    highlight: false,
    icon: "/vizion-enterprise.svg",
    category: "saas",
  },
];

export const included = [
  "Propriété totale du code et des accès",
  "Optimisations techniques dès le lancement",
  "Formation rapide pour être autonome",
  "Support 30 jours minimum dès publication",
];

export const testimonials = [
  {
    text: "Avec Vizion Web, on a enfin une landing page efficace et un dashboard sur-mesure simple à utiliser pour gérer nos investisseurs. Vizion Web a su transformer une idée complexe en outil efficace.",
    image: "lory.jpg",
    name: "Lory Othily",
    role: "CEO Amazonia Investing",
  },
  {
    text: "J’avais besoin d’un site vitrine moderne qui reflète l’identité de mon agence. Dylann a tout de suite compris l’univers que je voulais et le résultat a dépassé mes attentes.",
    image: "aurelie.jpg",
    name: "Aurélie Ciril",
    role: "Fondatrice Hippô’Kom",
  },
  {
    text: "Mon site intègre désormais un espace client, la réservation en ligne et les paiements. Tout est fluide et simple, mes clientes adorent. Merci Dylann pour ton écoute et ta réactivité.",
    image: "jeanne.jpg",
    name: "Jeanne Auguste",
    role: "Dirigeante Zen Lounge",
  },
  {
    text: "Dylann a été d’une aide très précieuse. Il est réactif, rapide et sérieux. Nous avions des délais courts à respecter pour la création de notre application et il a su les tenir.",
    image: "yohan.jpg",
    name: "Yohan Beauséjour",
    role: "CEO The Moriarty",
  },
  {
    text: "Grâce au nouveau site, mes clients trouvent mes services beaucoup plus facilement. Vizion Web a su rendre le site clair, professionnel et efficace. Un vrai plus pour mon activité.",
    image: "fezayi.jpg",
    name: "Filiz Fezayi",
    role: "Dirigeant TCS Plomberie",
  },
  {
    text: "L’identité visuelle créée pour ma société de location de voitures correspond parfaitement à ce que je voulais transmettre. Simple, moderne et impactant. Merci Dylann pour ton professionnalisme.",
    image: "emeraude.jpg",
    name: "Emeraude Bruant",
    role: "Dirigeante Get Easy",
  },
  {
    text: "Un branding qui reflète parfaitement l’esprit de ma boutique e-commerce. L'agence Vizion Web a trouvé un style qui attire et qui marque les esprits. Je suis très satisfait du résultat.",
    image: "youri.jpg",
    name: "Youri Petit",
    role: "CEO Mr. Kicks",
  },
  {
    text: "L'application Chefkit nous fait gagner un temps fou. Je gère mes menus, mes commandes et mes réservations en ligne facilement. C’est devenu un outil indispensable pour mon restaurant.",
    image: "karim.jpg",
    name: "Karim Haddad",
    role: "Restaurateur",
  },
  {
    text: "Vizion Web nous a aidés à repenser totalement notre présence en ligne. Plus qu’un site, c’est devenu un vrai levier pour générer des prospects et développer notre activité.",
    image: "sophie.jpg",
    name: "Sophie Benoît",
    role: "CEO GreenPulse",
  },
];

export const faqs = [
  {
    q: "Combien coûte un projet chez Vizion Web ?",
    a: "Chaque projet est unique. Nous établissons un devis sur-mesure après un appel découverte gratuit où nous analysons vos besoins précis. Nos projets démarrent à partir de 1 800 € pour une landing page et peuvent aller jusqu'à 30 000 €+ pour des SaaS complexes.",
  },
  {
    q: "Combien de temps prend un projet ?",
    a: `
    <p>Cela dépend de la complexité :</p>
    <ul>
      <li><strong>Landing page :</strong> 2-3 semaines</li>
      <li><strong>Site vitrine :</strong> 3-5 semaines</li>
      <li><strong>MVP ou SaaS :</strong> 4-10 semaines</li>
    </ul>
    <p>Nous vous donnons un planning précis dès le devis.</p>
    `,
  },
  {
    q: "Est-ce que vous gérez l'hébergement et la maintenance ?",
    a: "Oui. Nous déployons votre projet sur une infrastructure fiable et incluons un support post-livraison (30 à 90 jours selon le projet). La maintenance continue est disponible sur devis.",
  },
  {
    q: "Travaillez-vous avec des startups sans financement ?",
    a: "Oui, si le projet a un scope MVP réaliste. Nous aidons les fondateurs à lancer une première version fonctionnelle pour tester leur marché ou pitcher des investisseurs.",
  },
  {
    q: "Pouvez-vous reprendre un projet existant ?",
    a: "Oui. Nous auditons le code existant, identifions les points de friction, et proposons un plan de refonte ou d'amélioration.",
  },
  {
    q: "Quelle est votre zone géographique ?",
    a: "Nous travaillons avec des clients partout en France (métropole et DOM-TOM) et à l'international. Tous nos projets se gèrent à distance, avec des points réguliers en visio.",
  },
];
