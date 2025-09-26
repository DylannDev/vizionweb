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
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#offres", label: "Offres" },
];

export const plans = [
  {
    name: "Vizion Start",
    price: "3 500 €",
    description:
      "Landing page / site vitrine (3–5 pages) optimisé et prêt à convertir vos visiteurs en clients.",
    features: [
      "UI/UX Design sur-mesure Figma",
      "Copywriting sur-mesure",
      "Optimisation conversion (CRO)",
      "Optimisation technique (vitesse, SEO)",
      "Révisions illimitées",
      "Livraison en 2-3 semaines",
      "Support 30 jours",
    ],
    highlight: false,
    icon: "/bars-1.svg",
  },
  {
    name: "Vizion Pro",
    price: "5 000 € - 15 000 €+",
    description:
      "Site web complet avec fonctionnalités sur-mesure (5–10+ pages), conçu pour développer votre activité.",
    features: [
      "Fonctionnalités sur-mesure",
      "UI/UX Design sur-mesure Figma",
      "Copywriting sur-mesure",
      "Optimisation technique (vitesse, SEO)",
      "Code sur-mesure (React / Next.js)",
      "Architecture claire pour évoluer",
      "Révisions illimitées",
      "Livraison en 3–4 semaines",
      "Support 30 jours",
    ],
    highlight: true,
    icon: "/bars-2.svg",
  },
  {
    name: "Vizion Enterprise",
    price: "10 000 € - 30 000 €+",
    description:
      "SaaS / Application Web, pensé pour vos utilisateurs et booster la croissance de votre business.",
    features: [
      "Roadmap par étapes (MVP → V2 → V3)",
      "Code sur-mesure (React / Next.js)",
      "Interface claire & efficace",
      "Gestion utilisateurs & accès",
      "Paiements & abonnements",
      "Tests, optimisation et suivi renforcé",
      "Déploiement (Vercel)",
      "Livraison en 4-8 semaines",
      "Support renforcé",
    ],
    highlight: false,
    icon: "/bars-3.svg",
  },
];

export const included = [
  "Propriété totale du code et des accès",
  "Optimisations techniques dès le lancement",
  "Formation rapide pour être autonome",
  "Support 30 jours inclus après mise en ligne",
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
    q: "Quel est le délai de livraison d’un projet ?",
    a: `
    <p>Nos délais varient selon la complexité du projet :</p>
    <ul>
      <li><strong>Landing page / site vitrine :</strong> 1 à 3 semaines</li>
      <li><strong>Site web avec fonctionnalités :</strong> 2 à 4 semaines</li>
      <li><strong>SaaS / Application web sur-mesure :</strong> 4 à 8 semaines</li>
    </ul>
    <p>Pourquoi ces délais ? Parce que chaque projet suit un <strong>processus clair en 4 étapes</strong> : cadrage, design, développement, lancement + suivi. Cela garantit un résultat professionnel.</p>
    `,
  },
  {
    q: "Combien coûte un projet chez Vizion Web ?",
    a: `
    <p>Nos tarifs sont réalistes, ajustés à la complexité et à la valeur générée :</p>
    <ul>
      <li><strong>Vizion Start</strong> – à partir de 3 500 €
          <br />Landing Pages ou Sites vitrines (3 - 5 pages).</li>
      <li><strong>Vizion Pro</strong> – de 5 000 € à +15 000 €
          <br />Sites web avec fonctionnalités avancées : prise de RDV, paiement, espace client, etc (5 - 10 pages).</li>
      <li><strong>Vizion Enterprise</strong> – 10 000 € à +30 000 €
          <br />Applications web (SaaS, dashboards, intranet…), découpables en MVP évolutif.</li>
    </ul>
    <p><strong>Pourquoi ces tarifs ?</strong> Parce que chaque projet Vizion Web inclut :</p>
    <ul>
      <li>UI/UX Design réfléchi, optimisé pour les conversions</li>
      <li>Copywriting adapté à votre positionnement</li>
      <li>Développement 100% sur-mesure (React / Next.js)</li>
      <li>Optimisations techniques SEO & performance dès la livraison</li>
      <li>Formation rapide + support 30 jours après mise en ligne</li>
    </ul>
    `,
  },

  {
    q: "Puis-je demander des modifications ?",
    a: "Oui, les modifications sont illimitées jusqu’à la livraison finale du projet. On ne s’arrête pas tant que vous n’êtes pas satisfait.",
  },
  {
    q: "Qui possède le site / l’appli une fois livré ?",
    a: "Vous. Le code, les accès et les fichiers vous appartiennent à 100%. Pas de dépendance, pas d’abonnement caché.",
  },
  {
    q: "Y a-t-il un support après lancement ?",
    a: "Oui, un suivi de 30 jours est inclus après la mise en ligne pour faire des ajustements si nécessaire. Après ce délai, nous proposons des forfaits de maintenance. La plupart de nos clients reviennent pour des améliorations ou pour développer de nouvelles fonctionnalités",
  },
  {
    q: "Comment se déroule un projet chez Vizion Web ?",
    a: `
    <p>Notre méthode en 4 étapes, simple et transparente :</p>
    <ol>
      <li>
        <strong>Découverte & cadrage (1–2 jours)</strong>
        <ul>
          <li>Appel de 30 min pour clarifier objectifs et priorités</li>
          <li>Audit express de l’existant et benchmark concurrentiel ciblé</li>
          <li>Définition du périmètre, des livrables et du planning</li>
        </ul>
      </li>
      <li>
        <strong>Prototypage & design (1–2 semaines)</strong>
        <ul>
          <li>Wireframes et architecture des pages/écrans</li>
          <li>Maquettes Figma haute fidélité + micro-copy</li>
          <li><em>Modifications illimitées</em> jusqu’à validation</li>
        </ul>
      </li>
      <li>
        <strong>Développement & intégrations (2–4 semaines pour un site / 4–8 semaines pour une app)</strong>
        <ul>
          <li>Implémentation en code sur-mesure (React/Next.js/TypeScript)</li>
          <li>Fonctionnalités clés : formulaires, paiement, prise de RDV, espace client, CRM</li>
          <li>Responsive, accessibilité et tests de qualité continus</li>
        </ul>
      </li>
      <li>
        <strong>Lancement & optimisation (2–3 jours)</strong>
        <ul>
          <li>Check-list de mise en ligne : performance, sécurité, Core Web Vitals</li>
          <li>SEO on-site de base (balises, structure, tracking)</li>
          <li>Formation rapide + <strong>suivi 30 jours</strong> avec correctifs inclus</li>
        </ul>
      </li>
    </ol>
    <p><strong>Vous êtes impliqué à chaque étape</strong>, avec des points de validation clairs. <strong>Propriété du code</strong> garantie.</p>
    `,
  },
  {
    q: "Quels outils utilisez-vous ?",
    a: "Chez Vizion Web, nous créons du code sur-mesure avec des technologies modernes comme React et Next.js (les mêmes utilisées par des entreprises comme Netflix, Uber ou Airbnb). Concrètement, cela signifie un site ou une application plus rapide, plus sécurisé, totalement adapté à vos besoins, et qui n’est pas limité par les contraintes de CMS comme WordPress ou Webflow.",
  },
  {
    q: "Le copywriting est-il inclus dans l’offre ?",
    a: "Oui il est inclus car un bon site ne repose pas que sur le design et la technique : le message compte autant. Nous rédigeons vos textes en fonction de votre positionnement, de vos offres et de votre ton de marque, pour maximiser l’impact et les conversions.",
  },
];
