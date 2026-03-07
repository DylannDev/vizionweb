export interface CitySEO {
  slug: string;
  name: string;
  type: "city" | "territory";
  preposition: "à" | "en";
  meta: { title: string; description: string; canonical: string };
  hero: { headline: string; subheadline: string };
  images: {
    intro: { src: string; alt: string };
    context: { src: string; alt: string };
  };
  localIntro: { title: string; paragraphs: string[] };
  localContext: {
    population?: string;
    quartiersCles: string[];
    zonesActivite: string[];
    secteursDominants: string[];
    specificites: string;
  };
  localFaqs: Array<{ question: string; answer: string }>;
  globalFaqIndices: number[];
  featuredTestimonial?: {
    name: string;
    role: string;
    text: string;
    image: string;
  };
  cta: { text: string; subtext: string };
  schema: {
    areaServed: string;
    geo?: { latitude: number; longitude: number };
  };
}

function getLocalFaqs(
  cityName: string,
  preposition: "à" | "en",
  extra?:
    | { type: "paris" }
    | { type: "domtom"; territoire: string; adj: string }
): Array<{ question: string; answer: string }> {
  const prep = `${preposition} ${cityName}`;

  const faqs: Array<{ question: string; answer: string }> = [
    {
      question: `Comment se passe la collaboration si vous n'êtes pas ${prep} ?`,
      answer: `Tout se fait en visio et via des outils collaboratifs modernes. On démarre par un appel de cadrage détaillé, puis on avance par itérations avec des points réguliers. Vous avez accès en temps réel aux maquettes et aux environnements de développement pour suivre l'avancement. La distance n'a jamais été un frein pour nos clients.`,
    },
    {
      question: `Pourquoi travailler avec vous plutôt qu'une agence basée ${prep} ?`,
      answer: `Nous offrons la même expertise technique et la même réactivité qu'une agence locale, avec trois avantages : des tarifs généralement plus compétitifs (fonctionnement 100% remote), une spécialisation forte en applications web modernes (React, Next.js, TypeScript), et une vraie flexibilité dans nos méthodes de travail.`,
    },
    {
      question: `Vous travaillez avec quel type d'entreprises ${prep} ?`,
      answer: `Nous accompagnons principalement des startups en phase de lancement (MVP, SaaS) et des PME établies qui veulent digitaliser un processus métier ou refondre leur site web. Nos clients sont issus de secteurs variés : tech, services, retail, santé. Le point commun : ils cherchent une solution technique solide et sur-mesure, pas du template.`,
    },
  ];

  if (extra?.type === "paris") {
    faqs.push({
      question: "Vous travaillez avec des startups parisiennes ?",
      answer:
        "Oui, régulièrement. Nous accompagnons des fondateurs en pré-seed pour construire leur MVP, et des startups post-seed pour développer leur produit SaaS. Notre approche : livraison rapide, itérations fréquentes, et code maintenable pour que vous puissiez recruter une équipe tech plus tard sans repartir de zéro.",
    });
  } else if (extra?.type === "domtom") {
    faqs.push({
      question: `Vous connaissez le marché ${extra.adj} ?`,
      answer: `Oui, nous avons une expérience significative avec des clients en ${extra.territoire}, et nous comprenons les spécificités du marché local : besoins en digitalisation, contraintes budgétaires, et opportunités de niche. Nous sommes sensibles aux particularités culturelles et économiques des territoires d'outre-mer.`,
    });
  }

  return faqs;
}

const cities: CitySEO[] = [
  // ─────────────────────────────────────────────
  // 1. PARIS
  // ─────────────────────────────────────────────
  {
    slug: "paris",
    name: "Paris",
    type: "city",
    preposition: "à",
    meta: {
      title: "Création de sites web et applications à Paris | Vizion Web",
      description:
        "Sites internet, landing pages et applications SaaS pour les entreprises parisiennes. Développement sur-mesure, design et SEO inclus. Intervention 100% à distance.",
      canonical: "https://vizionweb.fr/paris",
    },
    hero: {
      headline:
        "Sites et applications sur-mesure pour les entreprises de Paris",
      subheadline:
        "Nous concevons des sites internet, landing pages et applications SaaS sur-mesure pour les entreprises parisiennes. Design, copywriting et SEO inclus. Livraison en 30 jours, intervention 100% à distance.",
    },
    images: {
      intro: {
        src: "/cities/paris-intro.webp",
        alt: "Tour Eiffel et skyline de Paris",
      },
      context: {
        src: "/cities/paris-context.webp",
        alt: "Quartier d'affaires de La Défense à Paris",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises parisiennes",
      paragraphs: [
        "Paris concentre plus de 40% des startups françaises et des milliers de PME qui se battent pour capter l'attention en ligne. Un site générique ne suffit plus. Vos prospects comparent, jugent en 3 secondes, et passent au concurrent si votre site est lent ou mal conçu. Pour exister sur ce marché, il faut des outils numériques taillés pour la conversion : rapides, professionnels, pensés pour votre activité.",
        "Vizion Web intervient à distance auprès des entreprises d'Île-de-France pour créer des sites internet, landing pages et applications web. Chaque projet est construit sur-mesure, sans template ni CMS limitant. Ce fonctionnement 100% remote nous permet de proposer des tarifs compétitifs par rapport aux agences parisiennes avec pignon sur rue, tout en gardant la même rigueur sur les livrables.",
        "Une startup de Station F qui a besoin d'un MVP en 3 semaines, un cabinet du 8e qui refond son site vitrine, un commerce de Belleville qui lance la réservation en ligne : chaque projet démarre par un appel de cadrage, puis avance avec des points réguliers sur Figma et en visio. Pas besoin de se déplacer. Le résultat parle de lui-même.",
      ],
    },
    localContext: {
      population: "2,1 millions d'habitants (12,2M en Île-de-France)",
      quartiersCles: [
        "Le Sentier / Silicon Sentier (startups tech)",
        "La Défense (grands comptes, consulting)",
        "Opéra / 8e-9e (services, agences)",
        "Bastille / 11e (commerces, restauration)",
        "13e arrondissement (Station F, incubateurs)",
      ],
      zonesActivite: [
        "Station F et les incubateurs du 13e",
        "La Défense et le quartier d'affaires",
        "Le Marais (e-commerce, mode, design)",
        "Montmartre / Pigalle (tourisme, hôtellerie)",
      ],
      secteursDominants: [
        "Tech et startups",
        "Services aux entreprises",
        "Tourisme et hôtellerie",
        "Commerce et retail",
        "Finance et assurance",
      ],
      specificites:
        "Paris représente 30% du PIB national et compte plus de 500 000 entreprises. La concurrence digitale y est parmi les plus fortes d'Europe : 73% des consommateurs parisiens recherchent un prestataire en ligne avant tout contact. Un site performant n'est pas un luxe, c'est une condition de survie commerciale.",
    },
    localFaqs: getLocalFaqs("Paris", "à", { type: "paris" }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web parisien commence ici",
      subtext:
        "Réservez un appel de 30 minutes. On analyse vos objectifs, on vous propose une solution chiffrée et un planning. Sans engagement.",
    },
    schema: {
      areaServed: "Paris, Île-de-France, France",
      geo: { latitude: 48.8566, longitude: 2.3522 },
    },
  },

  // ─────────────────────────────────────────────
  // 2. LYON
  // ─────────────────────────────────────────────
  {
    slug: "lyon",
    name: "Lyon",
    type: "city",
    preposition: "à",
    meta: {
      title: "Agence web à Lyon — Sites et applications | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises lyonnaises. Développement sur-mesure, design et copywriting inclus. Intervention à distance, livraison en 30 jours.",
      canonical: "https://vizionweb.fr/lyon",
    },
    hero: {
      headline: "Sites web et applications conçus pour les entreprises de Lyon",
      subheadline:
        "Nous créons des sites internet, landing pages et applications SaaS sur-mesure pour les entreprises lyonnaises. Design, développement sur-mesure et copywriting inclus. Nous intervenons à distance dans toute la métropole.",
    },
    images: {
      intro: {
        src: "/cities/lyon-intro.webp",
        alt: "Place Bellecour au cœur de Lyon",
      },
      context: {
        src: "/cities/lyon-context.webp",
        alt: "Quartier de la Confluence à Lyon",
      },
    },
    localIntro: {
      title: "Développement web sur-mesure pour les entreprises de Lyon",
      paragraphs: [
        "Lyon est le deuxième pôle économique français. La métropole compte plus de 150 000 entreprises, entre grands groupes industriels de la chimie, éditeurs logiciels de Vaise et startups de la FrenchTech One Lyon. Sur ce marché dense, un site web lent ou mal conçu coûte des clients chaque jour. Les entreprises lyonnaises qui performent en ligne investissent dans des outils numériques adaptés à leur réalité.",
        "Vizion Web intervient à distance auprès des entreprises de Lyon et sa métropole pour concevoir des sites internet, landing pages et applications web. Notre approche : design orienté conversion, développement sur-mesure, copywriting professionnel. Travailler à distance nous permet de servir aussi bien un client de la Part-Dieu qu'un autre à Écully ou Limonest, avec la même rapidité d'exécution et des tarifs allégés des frais de bureau.",
        "Les éditeurs logiciels du quartier de Vaise nous confient leurs landing pages de génération de leads. Les cabinets de conseil de la Part-Dieu nous demandent des sites vitrines qui inspirent confiance. Les restaurateurs des pentes de la Croix-Rousse veulent un site qui remplit leurs réservations. À chaque métier, sa solution web.",
      ],
    },
    localContext: {
      population: "522 000 habitants (1,7M dans la métropole)",
      quartiersCles: [
        "Part-Dieu (quartier d'affaires, tertiaire)",
        "Confluence (innovation, médias, culture)",
        "Vaise / Industrie (tech, éditeurs logiciels)",
        "Presqu'île / Bellecour (commerces, luxe)",
        "Gerland (biotech, sciences de la vie)",
      ],
      zonesActivite: [
        "Lyon Part-Dieu (premier quartier d'affaires régional)",
        "Confluence et le pôle Pixel (industries créatives)",
        "Biodistrict de Gerland (biotech, pharma)",
        "Techlid / Limonest (pôle tertiaire ouest)",
      ],
      secteursDominants: [
        "Industrie et chimie",
        "Sciences de la vie et santé",
        "Numérique et édition logicielle",
        "Gastronomie et tourisme",
        "Finance et services aux entreprises",
      ],
      specificites:
        "Lyon concentre des clusters comme Lyonbiopôle et Imaginove, et héberge plus de 2 500 entreprises tech dans la métropole. La ville combine puissance industrielle historique et un écosystème startup solide, ce qui crée une demande forte pour des sites web performants et des applications métier sur-mesure.",
    },
    localFaqs: getLocalFaqs("Lyon", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Un projet web pour votre entreprise lyonnaise ?",
      subtext:
        "Réservez 30 minutes d'échange. On définit vos objectifs, on vous propose une solution chiffrée avec un planning clair.",
    },
    schema: {
      areaServed: "Lyon, Rhône, Auvergne-Rhône-Alpes, France",
      geo: { latitude: 45.764, longitude: 4.8357 },
    },
  },

  // ─────────────────────────────────────────────
  // 3. MARSEILLE
  // ─────────────────────────────────────────────
  {
    slug: "marseille",
    name: "Marseille",
    type: "city",
    preposition: "à",
    meta: {
      title: "Création de sites web à Marseille | Vizion Web",
      description:
        "Sites internet, landing pages et applications web pour les entreprises de Marseille. Développement sur-mesure, design et copywriting inclus. Devis gratuit, intervention à distance.",
      canonical: "https://vizionweb.fr/marseille",
    },
    hero: {
      headline:
        "Des sites et applications qui performent pour les entreprises marseillaises",
      subheadline:
        "Sites internet, landing pages et applications web développés sur-mesure pour les entreprises de Marseille et sa métropole. Design, copywriting et SEO inclus. Nous intervenons à distance.",
    },
    images: {
      intro: {
        src: "/cities/marseille-intro.jpg",
        alt: "Vieux-Port de Marseille au coucher du soleil",
      },
      context: {
        src: "/cities/marseille-context.jpg",
        alt: "Panorama de Marseille depuis Notre-Dame de la Garde",
      },
    },
    localIntro: {
      title: "Création web sur-mesure pour les entreprises de Marseille",
      paragraphs: [
        "Marseille est la deuxième ville de France et le premier port de Méditerranée. Le quartier d'Euroméditerranée, plus grand projet de rénovation urbaine d'Europe du Sud, a attiré des centaines d'entreprises tertiaires et tech ces dernières années. En parallèle, le tourisme génère plus de 5 millions de visiteurs par an. Pour les entreprises marseillaises, la présence en ligne n'est plus optionnelle : c'est le premier point de contact avec vos futurs clients.",
        "Vizion Web intervient à distance auprès des entreprises de Marseille et de sa métropole. Notre méthode : un design pensé pour convertir, un développement sur-mesure, et un copywriting professionnel qui parle à vos clients. Travailler sans bureau local nous permet de proposer des tarifs plus accessibles que les agences marseillaises traditionnelles, avec le même niveau d'exigence.",
        "Les hôteliers du Vieux-Port nous confient leurs sites de réservation directe. Les startups de la Belle de Mai nous demandent des MVP rapides. Les prestataires B2B d'Euroméditerranée veulent des sites qui génèrent des leads qualifiés. Chaque projet est différent, mais notre process reste le même : cadrage, maquette, développement, livraison. Le tout piloté en visio et sur Figma.",
      ],
    },
    localContext: {
      population: "873 000 habitants (1,9M dans la métropole)",
      quartiersCles: [
        "Euroméditerranée (quartier d'affaires, innovation)",
        "Vieux-Port / Canebière (tourisme, commerces)",
        "Castellane / Prado (services, professions libérales)",
        "La Joliette (logistique, tertiaire)",
        "Belle de Mai (industries créatives, médias)",
      ],
      zonesActivite: [
        "Euroméditerranée (tertiaire supérieur, tech)",
        "Technopôle de Château-Gombert (recherche, deeptech)",
        "Zone commerciale de Plan de Campagne (retail)",
        "Grand Port Maritime de Marseille (logistique, commerce)",
      ],
      secteursDominants: [
        "Commerce maritime et logistique",
        "Tourisme et hôtellerie",
        "Numérique et industries créatives",
        "Services aux entreprises",
        "Santé et recherche",
      ],
      specificites:
        "Marseille combine économie portuaire historique et renouveau tertiaire porté par le projet Euroméditerranée (3,5 milliards d'euros d'investissement). Le coût de la vie inférieur de 20% à Paris attire de plus en plus de créateurs d'entreprises, ce qui intensifie la concurrence en ligne dans des secteurs clés comme le tourisme, la restauration et les services B2B.",
    },
    localFaqs: getLocalFaqs("Marseille", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web à Marseille, on en parle ?",
      subtext:
        "30 minutes pour comprendre vos objectifs et construire une proposition adaptée à votre marché. Sans engagement.",
    },
    schema: {
      areaServed:
        "Marseille, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur, France",
      geo: { latitude: 43.2965, longitude: 5.3698 },
    },
  },

  // ─────────────────────────────────────────────
  // 4. TOULOUSE
  // ─────────────────────────────────────────────
  {
    slug: "toulouse",
    name: "Toulouse",
    type: "city",
    preposition: "à",
    meta: {
      title: "Agence web à Toulouse — Sites et apps sur-mesure | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Toulouse. Design, développement sur-mesure et copywriting inclus. Intervention à distance, devis en 48h.",
      canonical: "https://vizionweb.fr/toulouse",
    },
    hero: {
      headline:
        "Sites web et applications sur-mesure pour les entreprises de Toulouse",
      subheadline:
        "Du site vitrine à l'application SaaS, nous concevons des outils web sur-mesure pour les entreprises toulousaines. Design, développement sur-mesure et copywriting inclus. Nous intervenons à distance, partout dans la métropole.",
    },
    images: {
      intro: {
        src: "/cities/toulouse-intro.webp",
        alt: "Place du Capitole à Toulouse",
      },
      context: {
        src: "/cities/toulouse-context.webp",
        alt: "Vue panoramique de Toulouse",
      },
    },
    localIntro: {
      title: "Création web sur-mesure pour les entreprises toulousaines",
      paragraphs: [
        "Toulouse est la quatrième ville de France et l'une des premières pour la création d'entreprises. L'écosystème aéronautique et spatial (Airbus, Thales, 1 200 sous-traitants), les biotechnologies de l'Oncopole et les startups de la French Tech Toulouse génèrent une demande forte en sites web et applications métier. Un site générique ne reflète pas le niveau d'exigence de ce marché.",
        "Vizion Web intervient à distance auprès des entreprises de Toulouse et de sa métropole. Notre méthode : comprendre votre activité, concevoir un design orienté conversion, développer sur-mesure, livrer un produit fini avec copywriting et SEO inclus. Ce fonctionnement remote nous rend accessibles à Compans-Caffarelli comme à Blagnac ou Labège, sans surcoût lié à un bureau en centre-ville.",
        "Un sous-traitant aéronautique de Colomiers a besoin d'un dashboard de suivi de production. Une startup de l'Innopole de Labège veut une landing page qui convertit en 3 semaines. Un restaurant du quartier Saint-Étienne cherche un site avec réservation intégrée. Chaque projet part de vos contraintes réelles, pas d'un template prédécoupé.",
      ],
    },
    localContext: {
      population: "504 000 habitants (1,4M dans l'aire urbaine)",
      quartiersCles: [
        "Compans-Caffarelli (tertiaire, bureaux)",
        "Labège / Innopole (technopole, startups)",
        "Capitole / Centre-ville (commerces, services)",
        "Saint-Étienne / Carmes (restauration, artisanat)",
        "Blagnac / Colomiers (aéronautique, sous-traitance)",
      ],
      zonesActivite: [
        "Aerospace Valley (aéronautique et spatial)",
        "Toulouse Tech Transfer / Oncopole (biotech, santé)",
        "French Tech Toulouse (startups numériques)",
        "Zone de Basso Cambo (commerce, logistique)",
      ],
      secteursDominants: [
        "Aéronautique et spatial (Airbus, Thales)",
        "Technologies et numérique",
        "Biotechnologies et santé",
        "Services aux entreprises",
        "Commerce et restauration",
      ],
      specificites:
        "Deuxième pôle de recherche en France, Toulouse regroupe 120 000 emplois dans l'aéronautique et le spatial. La French Tech Toulouse et l'Innopole de Labège concentrent des centaines de startups numériques. Cette densité d'entreprises tech et industrielles crée un marché exigeant où la qualité du web reflète le sérieux du prestataire.",
    },
    localFaqs: getLocalFaqs("Toulouse", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Lancez votre projet web à Toulouse",
      subtext:
        "Un appel de 30 minutes pour définir ensemble la solution adaptée à votre entreprise toulousaine.",
    },
    schema: {
      areaServed: "Toulouse, Haute-Garonne, Occitanie, France",
      geo: { latitude: 43.6047, longitude: 1.4442 },
    },
  },

  // ─────────────────────────────────────────────
  // 5. BORDEAUX
  // ─────────────────────────────────────────────
  {
    slug: "bordeaux",
    name: "Bordeaux",
    type: "city",
    preposition: "à",
    meta: {
      title: "Agence web à Bordeaux — Design et code sur-mesure | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Bordeaux. Développement sur-mesure, design et copywriting inclus. Livraison en 30 jours, intervention à distance.",
      canonical: "https://vizionweb.fr/bordeaux",
    },
    hero: {
      headline:
        "Sites et applications sur-mesure pour les entreprises de Bordeaux",
      subheadline:
        "Landing pages, sites vitrines et applications SaaS développés sur-mesure pour les entreprises bordelaises. Design, copywriting et SEO inclus. Nous intervenons à distance dans toute la métropole.",
    },
    images: {
      intro: {
        src: "/cities/bordeaux-intro.webp",
        alt: "Architecture moderne de Bordeaux",
      },
      context: {
        src: "/cities/bordeaux-context.jpg",
        alt: "Architecture de Bordeaux au coucher du soleil",
      },
    },
    localIntro: {
      title: "Création web sur-mesure pour les entreprises bordelaises",
      paragraphs: [
        "Bordeaux attire chaque année des milliers d'entrepreneurs. Depuis l'arrivée de la LGV en 2017, la métropole a gagné plus de 100 000 habitants et des dizaines de sièges sociaux. La filière numérique emploie 35 000 personnes, le quartier Euratlantique accueille des startups fintech, et les Chartrons concentrent les créatifs et e-commerçants. Dans ce marché concurrentiel, un site web générique ne suffit plus pour capter l'attention.",
        "Vizion Web intervient à distance auprès des entreprises de Bordeaux et de sa métropole. Nous combinons design orienté conversion, développement sur-mesure, et copywriting professionnel. Ce fonctionnement 100% remote nous permet de proposer des tarifs compétitifs par rapport aux agences bordelaises avec pignon sur rue, tout en livrant des projets complets et sans compromis.",
        "Un château du Médoc veut vendre son vin en ligne. Une startup fintech d'Euratlantique lance son MVP. Une agence immobilière du Triangle d'Or refond sa vitrine. Chaque projet part d'un appel de cadrage, avance sur Figma et en visio, et aboutit à un livrable prêt à convertir. Pas besoin d'être dans la même rue pour bien travailler ensemble.",
      ],
    },
    localContext: {
      population: "260 000 habitants (1,3M dans la métropole)",
      quartiersCles: [
        "Euratlantique (quartier d'affaires, innovation)",
        "Les Chartrons (startups, créatifs, e-commerce)",
        "Mériadeck (tertiaire, administrations)",
        "Bassins à flot (nouvelles entreprises, coworking)",
        "Centre-ville / Triangle d'Or (commerces, luxe)",
      ],
      zonesActivite: [
        "Bordeaux Euratlantique (gare TGV, tertiaire supérieur)",
        "Bordeaux Technowest (incubateur, startups)",
        "Zone aéronautique de Mérignac (aéronautique, défense)",
        "Darwin Écosystème (économie alternative, créatifs)",
      ],
      secteursDominants: [
        "Vin et oenotourisme",
        "Aéronautique et défense (Dassault, Thales)",
        "Numérique et startups",
        "Tourisme et hôtellerie",
        "Immobilier et BTP",
      ],
      specificites:
        "Bordeaux conjugue patrimoine UNESCO et dynamisme économique. La LGV a mis Paris à 2h et accéléré l'arrivée d'entreprises nationales et internationales. Le numérique est le premier créateur d'emplois de la métropole, avec plus de 35 000 postes et une croissance annuelle supérieure à 10%.",
    },
    localFaqs: getLocalFaqs("Bordeaux", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web bordelais commence ici",
      subtext:
        "Réservez un appel de 30 minutes. On analyse vos objectifs, on vous propose une solution chiffrée et un planning. Sans engagement, 100% à distance.",
    },
    schema: {
      areaServed: "Bordeaux, Gironde, Nouvelle-Aquitaine, France",
      geo: { latitude: 44.8378, longitude: -0.5792 },
    },
  },

  // ─────────────────────────────────────────────
  // 6. LILLE
  // ─────────────────────────────────────────────
  {
    slug: "lille",
    name: "Lille",
    type: "city",
    preposition: "à",
    meta: {
      title: "Développement web à Lille — Sites et apps | Vizion Web",
      description:
        "Sites internet, landing pages et applications web pour les entreprises lilloises. Développement sur-mesure, design et SEO inclus. Intervention à distance, devis sous 48h.",
      canonical: "https://vizionweb.fr/lille",
    },
    hero: {
      headline:
        "Sites et applications web sur-mesure pour les entreprises de Lille",
      subheadline:
        "Vizion Web conçoit des sites internet, landing pages et applications SaaS sur-mesure pour les entreprises de la métropole lilloise. Design, copywriting et SEO inclus. Intervention 100% à distance.",
    },
    images: {
      intro: { src: "/cities/lille-intro.webp", alt: "Grand'Place de Lille" },
      context: {
        src: "/cities/lille-context.jpg",
        alt: "Rues historiques du Vieux-Lille",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises lilloises",
      paragraphs: [
        "Lille est le centre économique des Hauts-de-France et une métropole connectée à trois capitales européennes en moins d'une heure. La MEL regroupe 1,2 million d'habitants, des géants de la grande distribution comme Auchan et Decathlon, un pôle e-commerce porté par OVHcloud et Showroomprivé, et plus de 300 startups accélérées par EuraTechnologies. Sur ce marché dense, un site lent ou générique vous coûte des clients chaque semaine.",
        "Vizion Web intervient à distance auprès des entreprises lilloises pour créer des sites internet, landing pages et applications web sur-mesure. Chaque projet est développé sur-mesure, avec un design orienté conversion et du copywriting professionnel. Ce fonctionnement 100% remote nous permet de proposer des tarifs plus compétitifs qu'une agence avec des bureaux à Euralille, sans rien sacrifier sur la qualité des livrables.",
        "Les e-commerçants de Roubaix nous confient leurs landing pages de conversion. Les startups d'EuraTechnologies nous demandent des MVP livrés en 3 semaines. Les prestataires du quartier Vauban refondent leur vitrine pour capter plus de leads. À chaque activité, une solution web calibrée sur vos objectifs.",
      ],
    },
    localContext: {
      population: "236 000 habitants (1,2M dans la MEL)",
      quartiersCles: [
        "EuraTechnologies (startups, numérique)",
        "Euralille (tertiaire, quartier d'affaires)",
        "Vieux-Lille (commerces, restauration haut de gamme)",
        "Vauban / Esquermes (services, professions libérales)",
        "Roubaix / Tourcoing (e-commerce, textile, industrie créative)",
      ],
      zonesActivite: [
        "EuraTechnologies (troisième incubateur mondial)",
        "Euralille (premier quartier d'affaires régional)",
        "Plaine Images à Tourcoing (jeu vidéo, animation)",
        "Zone de l'Union à Roubaix-Tourcoing (éco-quartier, entreprises)",
      ],
      secteursDominants: [
        "Grande distribution et e-commerce (Auchan, Decathlon, OVHcloud)",
        "Numérique et tech",
        "Services aux entreprises",
        "Textile et mode",
        "Agroalimentaire",
      ],
      specificites:
        "Lille est le berceau de la grande distribution française et un pôle e-commerce majeur avec les sièges d'OVHcloud et Showroomprivé. EuraTechnologies, classé parmi les meilleurs incubateurs au monde, a accéléré plus de 300 startups. La métropole attire aussi 120 000 étudiants par an, ce qui en fait un terrain fertile pour les projets numériques et les recrutements tech.",
    },
    localFaqs: getLocalFaqs("Lille", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web lillois commence ici",
      subtext:
        "Réservez un appel de 30 minutes. On analyse vos objectifs, on vous propose une solution chiffrée et un planning. Sans engagement, 100% à distance.",
    },
    schema: {
      areaServed: "Lille, Nord, Hauts-de-France, France",
      geo: { latitude: 50.6292, longitude: 3.0573 },
    },
  },

  // ─────────────────────────────────────────────
  // 7. NANTES
  // ─────────────────────────────────────────────
  {
    slug: "nantes",
    name: "Nantes",
    type: "city",
    preposition: "à",
    meta: {
      title: "Agence web à Nantes — Création de sites web | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Nantes et de sa métropole. Développement sur-mesure, design et copywriting inclus. Intervention à distance, livraison en 30 jours.",
      canonical: "https://vizionweb.fr/nantes",
    },
    hero: {
      headline:
        "Agence web à Nantes : des projets digitaux qui font la différence",
      subheadline:
        "Sites vitrines, landing pages et applications SaaS conçus et développés sur-mesure pour les entreprises nantaises. Technologies modernes, livrés avec design et copywriting.",
    },
    images: {
      intro: {
        src: "/cities/nantes-intro.webp",
        alt: "Machines de l'île de Nantes",
      },
      context: {
        src: "/cities/nantes-context.webp",
        alt: "Port de plaisance de Nantes",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises nantaises",
      paragraphs: [
        "Nantes compte plus de 50 000 entreprises et une filière numérique de 30 000 emplois. Le quartier de la Création sur l'île de Nantes, la technopole Atlanpole et le pôle Euronantes attirent des startups et des PME qui ont besoin d'outils web performants pour recruter, vendre et se faire connaître. Un site générique ne suffit plus face à cette concurrence.",
        "Vizion Web intervient à distance auprès des entreprises de Nantes et de sa métropole. Chaque projet est construit de zéro, avec un design conçu pour convertir et un copywriting qui parle à vos clients. Ce fonctionnement 100% remote nous permet de proposer des tarifs compétitifs par rapport aux agences nantaises avec pignon sur rue.",
        "Une startup du Quartier de la Création prépare son lancement. Un cabinet du quartier Graslin refond son site vitrine. Un restaurateur du passage Pommeraye veut la réservation en ligne. Chaque projet démarre par un appel de cadrage, avance sur Figma et en visio, et aboutit à un livrable prêt à convertir.",
      ],
    },
    localContext: {
      population: "320 000 habitants (1M dans la métropole)",
      quartiersCles: [
        "Île de Nantes / Quartier de la Création (industries créatives, tech)",
        "Euronantes (quartier d'affaires, services)",
        "Centre-ville / Commerce (retail, professions libérales)",
        "Chantenay / Bellevue (artisanat, nouvelles entreprises)",
        "Saint-Herblain / Orvault (zones commerciales, tertiaire)",
      ],
      zonesActivite: [
        "Quartier de la Création (design, numérique, médias)",
        "Atlanpole (technopole, 400+ entreprises innovantes)",
        "Euronantes (tertiaire supérieur, sièges sociaux)",
        "Zone Atlantis à Saint-Herblain (commerce, services)",
      ],
      secteursDominants: [
        "Industries créatives et numériques",
        "Agroalimentaire (LU, BN, Fleury Michon)",
        "Construction navale et nautisme",
        "Services aux entreprises",
        "Santé et biotechnologies",
      ],
      specificites:
        "Nantes a été élue Capitale verte de l'Europe en 2013. La métropole est première en France pour la création nette d'emplois et affiche un coût du foncier inférieur à Lyon ou Bordeaux. Pour les entreprises qui s'y installent, un site web professionnel est souvent le premier levier d'acquisition clients.",
    },
    localFaqs: getLocalFaqs("Nantes", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web nantais commence ici",
      subtext:
        "Réservez un appel de 30 minutes. On analyse vos objectifs, on vous propose une solution chiffrée et un planning. Sans engagement, 100% à distance.",
    },
    schema: {
      areaServed: "Nantes, Loire-Atlantique, Pays de la Loire, France",
      geo: { latitude: 47.2184, longitude: -1.5536 },
    },
  },

  // ─────────────────────────────────────────────
  // 8. NICE
  // ─────────────────────────────────────────────
  {
    slug: "nice",
    name: "Nice",
    type: "city",
    preposition: "à",
    meta: {
      title: "Création de sites et apps web à Nice | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Nice et de la Côte d'Azur. Développement sur-mesure, design et SEO inclus. Intervention à distance, livraison en 30 jours.",
      canonical: "https://vizionweb.fr/nice",
    },
    hero: {
      headline:
        "Sites web et applications performants pour les entreprises niçoises",
      subheadline:
        "Nous concevons des solutions web sur-mesure pour les entreprises de Nice et de la Côte d'Azur. Landing pages, sites vitrines et apps SaaS livrés avec design, copywriting et SEO.",
    },
    images: {
      intro: {
        src: "/cities/nice-intro.webp",
        alt: "Promenade dans les rues de Nice",
      },
      context: {
        src: "/cities/nice-context.jpg",
        alt: "Vue aérienne de Nice depuis la colline du Château",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises niçoises",
      paragraphs: [
        "Nice est la cinquième ville de France et le coeur économique de la Côte d'Azur. La métropole concentre 2 500 entreprises tech à Sophia Antipolis, un secteur hôtelier parmi les plus exigeants d'Europe, et un marché immobilier haut de gamme où l'image en ligne fait la différence. Les entreprises niçoises qui n'investissent pas dans un site professionnel perdent des clients au profit de concurrents mieux positionnés sur Google.",
        "Vizion Web intervient à distance auprès des entreprises de Nice et des Alpes-Maritimes. Chaque projet est développé sur-mesure, avec un design premium et un copywriting professionnel. Ce fonctionnement 100% remote nous permet de proposer des tarifs compétitifs par rapport aux agences de la Promenade des Anglais, tout en gardant le même niveau d'exigence.",
        "Un hôtel 4 étoiles du Negresco veut des réservations directes. Une startup de Sophia Antipolis lance son produit SaaS. Une agence immobilière du Carré d'Or refond sa vitrine pour une clientèle internationale. Chaque projet démarre par un appel de cadrage, avance sur Figma et en visio, et aboutit à un livrable prêt à convertir.",
      ],
    },
    localContext: {
      population: "342 000 habitants (540 000 dans la métropole)",
      quartiersCles: [
        "Carré d'Or / Promenade des Anglais (tourisme, luxe, hôtellerie)",
        "Nice Éco-Vallée (innovation, développement durable)",
        "Vieux-Nice (restauration, commerces, artisanat)",
        "Sophia Antipolis (technopole, R&D, startups)",
        "Arenas / Aéroport (tertiaire, logistique)",
      ],
      zonesActivite: [
        "Sophia Antipolis (première technopole d'Europe, 2 500 entreprises)",
        "Nice Éco-Vallée (développement urbain et économique)",
        "CEEI Nice (incubateur de startups innovantes)",
        "Zone franche urbaine de l'Ariane (TPE/PME)",
      ],
      secteursDominants: [
        "Tourisme et hôtellerie de luxe",
        "Technologies et R&D (Sophia Antipolis)",
        "Santé, biotech et medtech",
        "Immobilier haut de gamme",
        "Commerce international",
      ],
      specificites:
        "Nice bénéficie de Sophia Antipolis, première technopole d'Europe (2 500 entreprises, 38 000 emplois). Cette combinaison entre tourisme haut de gamme et innovation technologique crée un marché où la qualité du site web est un marqueur de crédibilité. Les entreprises niçoises à clientèle internationale ont besoin d'un site multilingue, rapide et bien référencé.",
    },
    localFaqs: getLocalFaqs("Nice", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web niçois commence ici",
      subtext:
        "Réservez un appel de 30 minutes. On analyse vos objectifs, on vous propose une solution chiffrée et un planning. Sans engagement, 100% à distance.",
    },
    schema: {
      areaServed: "Nice, Alpes-Maritimes, Provence-Alpes-Côte d'Azur, France",
      geo: { latitude: 43.7102, longitude: 7.262 },
    },
  },

  // ─────────────────────────────────────────────
  // 9. STRASBOURG
  // ─────────────────────────────────────────────
  {
    slug: "strasbourg",
    name: "Strasbourg",
    type: "city",
    preposition: "à",
    meta: {
      title: "Agence web à Strasbourg — Sites sur-mesure | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Strasbourg et de l'Eurométropole. Développement sur-mesure, design et copywriting inclus. Intervention à distance, livraison en 30 jours.",
      canonical: "https://vizionweb.fr/strasbourg",
    },
    hero: {
      headline:
        "Création de sites et applications web à Strasbourg, capitale européenne",
      subheadline:
        "Solutions digitales sur-mesure pour les entreprises strasbourgeoises : sites vitrines, landing pages et applications SaaS. Design, développement et SEO réunis dans chaque projet.",
    },
    images: {
      intro: {
        src: "/cities/strasbourg-intro.jpg",
        alt: "Cathédrale de Strasbourg",
      },
      context: {
        src: "/cities/strasbourg-context.jpg",
        alt: "Quartier de la Petite France à Strasbourg",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises strasbourgeoises",
      paragraphs: [
        "Strasbourg est le siège du Parlement européen et la porte d'entrée vers les marchés allemand et suisse. L'Eurométropole rassemble 500 000 habitants, un pôle biotech de premier plan (BioValley) et plus de 30 000 travailleurs frontaliers. Cette position transfrontalière crée des besoins spécifiques : sites multilingues, référencement international, interfaces adaptées à une clientèle franco-allemande.",
        "Vizion Web intervient à distance auprès des entreprises de Strasbourg et de l'Eurométropole. Chaque projet combine design professionnel, développement sur-mesure, et copywriting adapté à votre cible. Ce fonctionnement 100% remote nous permet de proposer des tarifs compétitifs par rapport aux agences strasbourgeoises, avec la même rigueur sur les livrables.",
        "Une institution du quartier européen a besoin d'un portail multilingue. Une biotech d'Illkirch lance son site de recrutement. Un restaurateur de la Petite France veut des réservations en ligne pour sa clientèle touristique. Chaque projet démarre par un appel de cadrage, avance sur Figma et en visio, et se livre clé en main.",
      ],
    },
    localContext: {
      population: "287 000 habitants (512 000 dans l'Eurométropole)",
      quartiersCles: [
        "Quartier Européen / Wacken (institutions, organisations internationales)",
        "Presqu'île Malraux (numérique, startups, co-working)",
        "Petite France / Grande Île (tourisme, commerces, patrimoine)",
        "Espace Européen de l'Entreprise à Schiltigheim (tertiaire, PME)",
        "Hautepierre / Cronenbourg (industrie, recherche)",
      ],
      zonesActivite: [
        "Parc d'innovation d'Illkirch (biotech, santé)",
        "Espace Européen de l'Entreprise (tertiaire, services)",
        "CESCOM et incubateurs du centre (numérique, startups)",
        "Port autonome de Strasbourg (logistique, industrie)",
      ],
      secteursDominants: [
        "Institutions européennes et organisations internationales",
        "Sciences de la vie et biotechnologies",
        "Industrie (automobile, mécanique)",
        "Tourisme et hôtellerie",
        "Services transfrontaliers",
      ],
      specificites:
        "Strasbourg se distingue par sa dimension internationale et transfrontalière. Le pôle BioValley, le parc d'innovation d'Illkirch et le marché du travail bilingue franco-allemand créent un écosystème où les entreprises ont besoin d'une présence web adaptée à plusieurs marchés simultanément.",
    },
    localFaqs: getLocalFaqs("Strasbourg", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web strasbourgeois commence ici",
      subtext:
        "Réservez un appel de 30 minutes. On analyse vos objectifs, on vous propose une solution chiffrée et un planning. Sans engagement, 100% à distance.",
    },
    schema: {
      areaServed: "Strasbourg, Bas-Rhin, Grand Est, France",
      geo: { latitude: 48.5734, longitude: 7.7521 },
    },
  },

  // ─────────────────────────────────────────────
  // 10. RENNES
  // ─────────────────────────────────────────────
  {
    slug: "rennes",
    name: "Rennes",
    type: "city",
    preposition: "à",
    meta: {
      title: "Développement de sites web à Rennes | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Rennes et de Bretagne. Développement sur-mesure, design et copywriting inclus. Intervention à distance, livraison en 30 jours.",
      canonical: "https://vizionweb.fr/rennes",
    },
    hero: {
      headline:
        "Votre agence web à Rennes pour des projets numériques ambitieux",
      subheadline:
        "Sites internet, landing pages et applications web développés sur-mesure pour les entreprises rennaises. Design, code et rédaction professionnelle inclus dans chaque projet.",
    },
    images: {
      intro: {
        src: "/cities/rennes-intro.jpg",
        alt: "Maisons à colombages du centre historique de Rennes",
      },
      context: {
        src: "/cities/rennes-context.jpg",
        alt: "Hôtel de ville de Rennes",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises rennaises",
      paragraphs: [
        "Rennes concentre plus de 20 000 emplois dans le numérique et la cybersécurité. La technopole Atalante, la French Tech Rennes-Saint-Malo et un réseau d'écoles d'ingénieurs (ENS, INSA, ISTIC) alimentent un marché où la barre est haute en matière de qualité web. Pour se démarquer dans cet écosystème tech, un site générique ne suffit pas.",
        "Vizion Web intervient à distance auprès des entreprises rennaises. Chaque projet associe design pensé pour convertir, développement sur-mesure, et copywriting professionnel. Ce fonctionnement 100% remote nous permet de proposer des tarifs compétitifs par rapport aux agences installées place de la République, tout en livrant des projets complets.",
        "Une startup de Digital Square prépare son lancement produit. Un cabinet de la Courrouze refond son site vitrine. Un commerce de la rue Saint-Georges veut la commande en ligne. Chaque projet démarre par un appel de cadrage, avance sur Figma et en visio, et aboutit à un livrable prêt à convertir.",
      ],
    },
    localContext: {
      population: "222 000 habitants (460 000 dans la métropole)",
      quartiersCles: [
        "EuroRennes / Gare (quartier d'affaires, tertiaire)",
        "Digital Square / Beaulieu (numérique, tech)",
        "Centre-ville / République (commerces, services)",
        "La Courrouze (écoquartier, nouvelles entreprises)",
        "Villejean / Pontchaillou (santé, recherche, universités)",
      ],
      zonesActivite: [
        "Rennes Atalante (technopole, 350+ entreprises)",
        "Digital Square (campus numérique, French Tech)",
        "Zone de la Route de Lorient (tertiaire, PME)",
        "Chantepie / Cesson-Sévigné (tech, services)",
      ],
      secteursDominants: [
        "Numérique et cybersécurité",
        "Agroalimentaire (premier pôle français)",
        "Télécommunications (Orange, pôle Images & Réseaux)",
        "Santé et biotechnologies",
        "Enseignement supérieur et recherche",
      ],
      specificites:
        "Premier pôle de cybersécurité en France, Rennes est aussi l'un des principaux hubs numériques de l'ouest. La technopole Atalante regroupe 350 entreprises innovantes. Dans ce contexte, les entreprises rennaises qui veulent être prises au sérieux ont besoin d'un site à la hauteur de leur écosystème.",
    },
    localFaqs: getLocalFaqs("Rennes", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web rennais commence ici",
      subtext:
        "Réservez un appel de 30 minutes. On analyse vos objectifs, on vous propose une solution chiffrée et un planning. Sans engagement, 100% à distance.",
    },
    schema: {
      areaServed: "Rennes, Ille-et-Vilaine, Bretagne, France",
      geo: { latitude: 48.1173, longitude: -1.6778 },
    },
  },

  // ─────────────────────────────────────────────
  // 11. MONTPELLIER
  // ─────────────────────────────────────────────
  {
    slug: "montpellier",
    name: "Montpellier",
    type: "city",
    preposition: "à",
    meta: {
      title: "Sites web et apps à Montpellier — Sur-mesure | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Montpellier. Développement sur-mesure, design et copywriting inclus. Intervention 100% à distance, livraison en 30 jours.",
      canonical: "https://vizionweb.fr/montpellier",
    },
    hero: {
      headline:
        "Sites et applications sur-mesure pour les entreprises de Montpellier",
      subheadline:
        "Nous concevons des sites internet, landing pages et applications SaaS sur-mesure pour les entreprises montpelliéraines. Design, copywriting et SEO inclus. Intervention 100% à distance.",
    },
    images: {
      intro: {
        src: "/cities/montpellier-intro.jpg",
        alt: "Architecture du centre-ville de Montpellier",
      },
      context: {
        src: "/cities/montpellier-context.jpg",
        alt: "Place de la Comédie à Montpellier",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises montpelliéraines",
      paragraphs: [
        "Montpellier connaît la plus forte croissance démographique de France depuis 20 ans. Le BIC a accompagné plus de 1 000 startups, le pôle Euromédecine concentre 200 entreprises de santé-biotech, et la French Tech Méditerranée attire chaque année de nouveaux acteurs du numérique et de l'IA. Dans ce marché en accélération, un site web générique ne suffit plus pour capter l'attention.",
        "Vizion Web intervient à distance auprès des entreprises de Montpellier et de sa métropole. Chaque projet allie design orienté conversion, développement sur-mesure, et copywriting professionnel. Ce fonctionnement 100% remote nous permet de proposer des tarifs compétitifs par rapport aux agences montpelliéraines, tout en gardant la même exigence.",
        "Une startup medtech du BIC prépare sa levée de fonds et a besoin d'un site crédible en 3 semaines. Un commerce de l'Écusson veut la commande en ligne. Un prestataire de la zone du Millénaire refond sa vitrine. Chaque projet démarre par un appel de cadrage, avance sur Figma et en visio, et aboutit à un livrable prêt à convertir.",
      ],
    },
    localContext: {
      population: "300 000 habitants (500 000 dans la métropole)",
      quartiersCles: [
        "Antigone / Port Marianne (tertiaire, services modernes)",
        "L'Écusson / Centre historique (commerces, restauration)",
        "Millénaire / Odysseum (pôle commercial et de loisirs)",
        "Euromédecine (santé, biotech, université)",
        "Castelnau-le-Lez / Jacou (zones d'activité résidentielles)",
      ],
      zonesActivite: [
        "BIC de Montpellier (incubateur, startups innovantes)",
        "Euromédecine / CHU (santé, recherche biomédicale)",
        "French Tech Méditerranée (numérique, IA)",
        "Parc Eurêka (technopole, 200+ entreprises)",
      ],
      secteursDominants: [
        "Santé, biotech et medtech",
        "Numérique et intelligence artificielle",
        "Tourisme et oenotourisme",
        "Enseignement supérieur et recherche",
        "Commerce et services",
      ],
      specificites:
        "Montpellier est un pôle d'excellence en santé et biotechnologies (200 entreprises, un CHU majeur) et se positionne sur l'IA et le numérique. Le faible coût de la vie par rapport à Paris ou Lyon attire des entrepreneurs qui veulent maximiser leur budget, y compris leur budget web.",
    },
    localFaqs: [
      {
        question: "Vous êtes basés à Montpellier ?",
        answer:
          "Oui, notre agence est basée à Montpellier. Nous pouvons organiser des rencontres en personne si nécessaire, mais la plupart de nos clients montpelliérains préfèrent travailler en visio pour plus de flexibilité. Nous restons disponibles pour un café de cadrage initial si vous préférez nous rencontrer avant de démarrer.",
      },
      {
        question:
          "Pourquoi choisir Vizion Web plutôt qu'une autre agence montpelliéraine ?",
        answer:
          "Nous sommes spécialisés en applications web modernes (React, Next.js, TypeScript), là où beaucoup d'agences locales se concentrent sur WordPress ou des CMS classiques. Notre force : des solutions techniques sur-mesure, évolutives, avec une vraie expertise en MVP et SaaS. Si vous cherchez du template ou du no-code, ce n'est pas notre approche.",
      },
      {
        question:
          "Vous travaillez avec quel type d'entreprises à Montpellier ?",
        answer:
          "Nous accompagnons principalement des startups en phase de lancement (MVP, SaaS) et des PME établies qui veulent digitaliser un processus métier ou refondre leur site web. Nos clients viennent de secteurs variés : tech, services, retail, santé. Le point commun : ils cherchent une solution technique solide et sur-mesure.",
      },
    ],
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web montpelliérain commence ici",
      subtext:
        "Réservez un appel de 30 minutes. On analyse vos objectifs, on vous propose une solution chiffrée et un planning. Sans engagement, 100% à distance.",
    },
    schema: {
      areaServed: "Montpellier, Hérault, Occitanie, France",
      geo: { latitude: 43.6108, longitude: 3.8767 },
    },
  },

  // ─────────────────────────────────────────────
  // 12. POINTE-À-PITRE
  // ─────────────────────────────────────────────
  {
    slug: "pointe-a-pitre",
    name: "Pointe-à-Pitre",
    type: "city",
    preposition: "à",
    meta: {
      title: "Agence web à Pointe-à-Pitre — Guadeloupe | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Pointe-à-Pitre et de Guadeloupe. Développement sur-mesure, design et SEO inclus. Intervention à distance depuis la métropole.",
      canonical: "https://vizionweb.fr/pointe-a-pitre",
    },
    hero: {
      headline:
        "Votre agence web à Pointe-à-Pitre pour conquérir le marché guadeloupéen",
      subheadline:
        "Sites internet, landing pages et applications web conçus pour les entreprises de Guadeloupe. Développement sur-mesure, design professionnel et copywriting adaptés au marché caribéen.",
    },
    images: {
      intro: {
        src: "/cities/guadeloupe-intro.webp",
        alt: "Plage tropicale de Guadeloupe",
      },
      context: {
        src: "/cities/guadeloupe-context.webp",
        alt: "Eaux turquoise de Guadeloupe",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises de Guadeloupe",
      paragraphs: [
        "Pointe-à-Pitre et la zone de Jarry concentrent la majorité de l'activité économique de la Guadeloupe. Pourtant, beaucoup d'entreprises locales n'ont pas de site web, ou utilisent des solutions obsolètes qui ne reflètent pas la qualité de leurs services. Dans un marché où les touristes (800 000 par an) planifient tout en ligne, cette absence de présence web est un manque à gagner direct.",
        "Vizion Web intervient depuis la métropole auprès des entreprises guadeloupéennes. Chaque projet est développé sur-mesure, avec un design professionnel, un copywriting adapté au marché local et un SEO qui vous positionne sur Google. Ce fonctionnement à distance nous permet de proposer des tarifs compétitifs tout en livrant un niveau de qualité identique à nos projets métropolitains.",
        "Un gîte de Deshaies veut des réservations directes (sans passer par Airbnb). Un artisan de Baie-Mahault a besoin d'une vitrine professionnelle. Un restaurant du Gosier veut capter les touristes en recherche active. Chaque projet démarre par un appel de cadrage (on s'adapte au décalage horaire), avance sur Figma et en visio, et se livre clé en main.",
      ],
    },
    localContext: {
      population:
        "15 000 habitants (Pointe-à-Pitre), 390 000 habitants (Guadeloupe)",
      quartiersCles: [
        "Centre-ville de Pointe-à-Pitre (commerces, services)",
        "Les Abymes / Raizet (zone résidentielle et commerciale)",
        "Baie-Mahault / Jarry (zone industrielle et commerciale principale)",
        "Gosier (tourisme, hôtellerie)",
      ],
      zonesActivite: [
        "Zone industrielle de Jarry (première zone d'activité des Antilles)",
        "Destrelland / Baie-Mahault (grande distribution, commerces)",
        "Zone aéroportuaire de Raizet (logistique, services)",
        "Marina de Bas-du-Fort (tourisme nautique)",
      ],
      secteursDominants: [
        "Tourisme et hôtellerie",
        "Commerce et grande distribution",
        "BTP et artisanat",
        "Agriculture (banane, canne à sucre, rhum)",
        "Services aux entreprises",
      ],
      specificites:
        "Le marché guadeloupéen est compact mais en forte demande de digitalisation. Les entreprises qui investissent dans un site professionnel prennent une avance directe sur leurs concurrents encore absents du web. C'est particulièrement vrai dans le tourisme, où les voyageurs comparent et réservent en ligne avant même d'atterrir à Pôle Caraïbes.",
    },
    localFaqs: getLocalFaqs("Pointe-à-Pitre", "à", {
      type: "domtom",
      territoire: "Guadeloupe",
      adj: "guadeloupéen",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web guadeloupéen commence ici",
      subtext:
        "Réservez un appel de 30 minutes (on s'adapte au décalage horaire). On analyse vos objectifs, on vous propose une solution chiffrée. Sans engagement.",
    },
    schema: {
      areaServed: "Pointe-à-Pitre, Guadeloupe, France",
      geo: { latitude: 16.2411, longitude: -61.5331 },
    },
  },

  // ─────────────────────────────────────────────
  // 13. FORT-DE-FRANCE
  // ─────────────────────────────────────────────
  {
    slug: "fort-de-france",
    name: "Fort-de-France",
    type: "city",
    preposition: "à",
    meta: {
      title: "Agence web à Fort-de-France — Sites et apps | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Fort-de-France et de Martinique. Développement sur-mesure, design et SEO inclus. Intervention à distance depuis la métropole.",
      canonical: "https://vizionweb.fr/fort-de-france",
    },
    hero: {
      headline: "Création de sites et applications web à Fort-de-France",
      subheadline:
        "Sites internet, landing pages et applications SaaS pour les entreprises martiniquaises. Développement sur-mesure, livré clé en main avec design et copywriting.",
    },
    images: {
      intro: {
        src: "/cities/martinique-intro.webp",
        alt: "Baie du Vauclin en Martinique",
      },
      context: {
        src: "/cities/martinique-context.webp",
        alt: "Plage de palmiers en Martinique",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises martiniquaises",
      paragraphs: [
        "Fort-de-France concentre la majorité des entreprises de services, des commerces et des institutions de la Martinique. Pourtant, beaucoup d'entrepreneurs peinent à trouver un prestataire web capable de livrer un site rapide, professionnel et adapté à leur activité. Les solutions WordPress ou les templates ne suffisent plus face aux attentes des clients qui comparent en ligne avant de se déplacer.",
        "Vizion Web intervient depuis la métropole auprès des entreprises martiniquaises. Chaque projet est développé sur-mesure, avec un objectif clair : générer des prises de contact, des réservations ou des ventes. Design, copywriting et SEO sont intégrés dès le départ. Ce fonctionnement à distance nous permet de proposer des tarifs compétitifs tout en livrant un niveau de qualité identique à nos projets métropolitains.",
        "Un hôtel des Trois-Îlets veut des réservations directes sans passer par Booking. Un artisan du Lamentin a besoin d'une vitrine professionnelle. Un cabinet de conseil de Fort-de-France refond son site. Chaque projet démarre par un appel (on s'adapte au décalage horaire), avance sur Figma et en visio, et se livre clé en main.",
      ],
    },
    localContext: {
      population:
        "78 000 habitants (Fort-de-France), 350 000 habitants (Martinique)",
      quartiersCles: [
        "Centre-ville / Bord de mer (commerces, services)",
        "Didier / Bellevue (professions libérales)",
        "La Pointe Simon (quartier d'affaires rénové)",
        "Route de Balata (artisanat, bien-être)",
      ],
      zonesActivite: [
        "Le Lamentin (zone commerciale et industrielle principale)",
        "Pointe Simon / Centre d'affaires (tertiaire)",
        "Zone de Californie (commerces, restauration)",
        "Les Trois-Îlets / Pointe du Bout (tourisme, hôtellerie)",
      ],
      secteursDominants: [
        "Tourisme et hôtellerie",
        "Commerce et distribution",
        "BTP et artisanat",
        "Services aux entreprises",
        "Restauration et événementiel",
      ],
      specificites:
        "Le marché martiniquais est compact mais concurrentiel. Les touristes planifient et réservent depuis leur téléphone avant d'arriver, et les habitants utilisent de plus en plus Google pour trouver un prestataire. Les entreprises qui investissent dans un site professionnel captent cette clientèle. Les autres la perdent au profit d'une page Facebook ou d'un concurrent mieux référencé.",
    },
    localFaqs: getLocalFaqs("Fort-de-France", "à", {
      type: "domtom",
      territoire: "Martinique",
      adj: "martiniquais",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web martiniquais commence ici",
      subtext:
        "Réservez un appel de 30 minutes (on s'adapte au décalage horaire). On analyse vos objectifs, on vous propose une solution chiffrée. Sans engagement.",
    },
    schema: {
      areaServed: "Fort-de-France, Martinique, France",
      geo: { latitude: 14.6161, longitude: -61.0588 },
    },
  },

  // ─────────────────────────────────────────────
  // 14. CAYENNE
  // ─────────────────────────────────────────────
  {
    slug: "cayenne",
    name: "Cayenne",
    type: "city",
    preposition: "à",
    meta: {
      title: "Création de sites web à Cayenne, Guyane | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Cayenne et de Guyane. Développement sur-mesure, design et SEO inclus. Intervention à distance depuis la métropole.",
      canonical: "https://vizionweb.fr/cayenne",
    },
    hero: {
      headline:
        "Développement web sur-mesure à Cayenne pour les entreprises guyanaises",
      subheadline:
        "Sites internet, landing pages et applications web professionnels pour les entreprises de Cayenne et de Guyane. Technologies modernes, design et copywriting adaptés au marché local.",
    },
    images: {
      intro: {
        src: "/cities/guyane-intro.webp",
        alt: "Cascade en forêt tropicale de Guyane",
      },
      context: {
        src: "/cities/guyane-context.webp",
        alt: "Forêt tropicale et rivière en Guyane",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises guyanaises",
      paragraphs: [
        "Cayenne est la capitale économique de la Guyane, un département en forte croissance porté par le spatial (Centre Spatial Guyanais de Kourou), l'exploitation aurifère et le tourisme vert. Pourtant, la présence web des entreprises guyanaises reste en retard : peu de sites professionnels, des solutions obsolètes, et un manque de prestataires locaux qualifiés en développement web.",
        "Vizion Web intervient depuis la métropole pour combler ce manque. Chaque projet est développé sur-mesure, avec un design professionnel, un copywriting adapté à votre marché et un SEO qui vous positionne sur Google. Ce fonctionnement à distance nous permet de livrer un niveau de qualité identique à nos projets métropolitains, sans surcoût lié à la distance.",
        "Un sous-traitant du Centre Spatial de Kourou a besoin d'un portail professionnel. Un lodge d'écotourisme à Cacao veut des réservations en ligne. Un commerce de Cayenne cherche plus de visibilité. Chaque projet démarre par un appel (on s'adapte au décalage horaire de 4 à 5h), avance sur Figma et en visio, et se livre clé en main.",
      ],
    },
    localContext: {
      population: "65 000 habitants (Cayenne), 300 000 habitants (Guyane)",
      quartiersCles: [
        "Centre-ville de Cayenne (commerces, administrations)",
        "Rémire-Montjoly (résidentiel, services)",
        "Matoury (zone commerciale, logistique)",
        "Kourou (Centre Spatial, tourisme spatial)",
      ],
      zonesActivite: [
        "Zone de Dégrad-des-Cannes (port, logistique, industrie)",
        "Zone commerciale de Matoury (distribution, services)",
        "Centre Spatial Guyanais à Kourou (aérospatial)",
        "Zone artisanale de Cayenne (TPE, artisanat)",
      ],
      secteursDominants: [
        "Spatial et aérospatial (CSG, ArianeGroup)",
        "Commerce et distribution",
        "BTP et construction",
        "Tourisme vert et écotourisme",
        "Pêche et agroalimentaire",
      ],
      specificites:
        "Le Centre Spatial Guyanais représente 15% du PIB local et fait rayonner le territoire à l'international. L'économie guyanaise est portée par la démographie et les investissements publics. Le faible taux de digitalisation des entreprises locales crée une fenêtre d'opportunité : les entreprises qui investissent maintenant dans un site professionnel prennent une avance directe sur leurs concurrents.",
    },
    localFaqs: [
      {
        question:
          "Comment se passe la collaboration si vous êtes basés en métropole ?",
        answer:
          "Tous nos projets se gèrent en visio avec des points réguliers. Vous avez accès en temps réel aux maquettes et aux environnements de développement pour suivre l'avancement. Et si besoin, nous pouvons organiser une rencontre en personne lors d'un passage de Dylann (fondateur) en Guyane.",
      },
      {
        question: "Vous connaissez vraiment le marché guyanais ?",
        answer:
          "Oui, le fondateur de l'agence est originaire de Guyane, avec de la famille sur place et des passages réguliers sur le territoire. Nous comprenons les spécificités du marché local : les besoins en digitalisation, les contraintes budgétaires et les particularités culturelles et économiques du territoire. Nous tenons à contribuer au développement du digital sur le territoire guyanais.",
      },
      {
        question:
          "Pourquoi travailler avec vous plutôt qu'une agence locale à Cayenne ?",
        answer:
          "Nous offrons un double avantage : la proximité culturelle et la connaissance du territoire (origines guyanaises), combinées à une expertise technique pointue acquise en métropole (Développement d'applications modernes). Vous bénéficiez d'une qualité de livraison métropolitaine avec une vraie compréhension des enjeux guyanais.",
      },
      {
        question: "Vous travaillez avec quel type d'entreprises à Cayenne ?",
        answer:
          "Nous accompagnons principalement des startups, PME guyanaises ou entrepreneurs qui veulent lancer un produit digital (MVP, SaaS) ou automatiser un processus métier. Nos clients viennent de secteurs variés : services, commerce, tourisme, santé. Le point commun : ils cherchent une solution technique fiable et adaptée au contexte local.",
      },
    ],
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web guyanais commence ici",
      subtext:
        "Réservez un appel de 30 minutes (on s'adapte au décalage horaire). On analyse vos objectifs, on vous propose une solution chiffrée. Sans engagement.",
    },
    schema: {
      areaServed: "Cayenne, Guyane, France",
      geo: { latitude: 4.9372, longitude: -52.326 },
    },
  },

  // ─────────────────────────────────────────────
  // 15. SAINT-DENIS (La Réunion)
  // ─────────────────────────────────────────────
  {
    slug: "saint-denis",
    name: "Saint-Denis",
    type: "city",
    preposition: "à",
    meta: {
      title: "Agence web à Saint-Denis de La Réunion | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Saint-Denis et de La Réunion. Développement sur-mesure, design et SEO inclus. Intervention à distance depuis la métropole.",
      canonical: "https://vizionweb.fr/saint-denis",
    },
    hero: {
      headline: "Votre partenaire web à Saint-Denis pour le marché réunionnais",
      subheadline:
        "Sites internet, landing pages et applications web développés sur-mesure pour les entreprises de La Réunion. Design premium, copywriting et SEO inclus dans chaque projet.",
    },
    images: {
      intro: {
        src: "/cities/reunion-intro.webp",
        alt: "Piton de la Fournaise à La Réunion",
      },
      context: {
        src: "/cities/reunion-context.webp",
        alt: "Cascade et montagne à La Réunion",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises réunionnaises",
      paragraphs: [
        "Saint-Denis est la plus grande ville de l'outre-mer français et le coeur économique de La Réunion. Le chef-lieu concentre les sièges sociaux, les administrations et une part croissante de startups numériques. Avec 40% de la population sous 25 ans et un taux d'équipement smartphone parmi les plus élevés de France, les Réunionnais achètent et comparent en ligne. Les entreprises sans site professionnel perdent cette clientèle.",
        "Vizion Web intervient depuis la métropole auprès des entreprises réunionnaises. Chaque projet est développé sur-mesure, avec un design mobile-first (70% du trafic à La Réunion se fait sur mobile), un copywriting adapté au contexte local et un SEO ciblé. Le décalage horaire de 2 à 3h est facile à gérer : les points projet se planifient en fin de matinée heure de La Réunion.",
        "Un hôtel de Saint-Gilles-les-Bains veut des réservations directes. Un prestataire BTP de Saint-Pierre a besoin d'une vitrine crédible. Une startup du Technopôle de Saint-Denis lance son produit. Chaque projet démarre par un appel de cadrage, avance sur Figma et en visio, et se livre clé en main.",
      ],
    },
    localContext: {
      population:
        "155 000 habitants (Saint-Denis), 870 000 habitants (La Réunion)",
      quartiersCles: [
        "Centre-ville / Barachois (commerces, services, tourisme)",
        "Sainte-Clotilde (zone commerciale, résidentiel)",
        "Le Chaudron (quartier populaire, commerces de proximité)",
        "Technopôle de Saint-Denis (numérique, innovation)",
        "Le Moufia (université, enseignement supérieur)",
      ],
      zonesActivite: [
        "Technor / Technopôle de Saint-Denis (tech, innovation)",
        "Zone commerciale de Sainte-Clotilde (distribution, services)",
        "Zone artisanale du Chaudron (TPE, artisanat)",
        "Le Port (zone industrialo-portuaire, logistique)",
      ],
      secteursDominants: [
        "Tourisme et hôtellerie",
        "Commerce et grande distribution",
        "BTP et aménagement",
        "Agriculture (canne à sucre, vanille, rhum)",
        "Numérique et services",
      ],
      specificites:
        "La Réunion est le département d'outre-mer le plus peuplé (870 000 habitants) et le plus dynamique économiquement. L'insularité crée un marché captif où la visibilité en ligne est un facteur clé de succès. Pour les entreprises réunionnaises, un site rapide et bien référencé est le moyen le plus direct de capter la clientèle locale et touristique.",
    },
    localFaqs: getLocalFaqs("Saint-Denis", "à", {
      type: "domtom",
      territoire: "La Réunion",
      adj: "réunionnais",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web réunionnais commence ici",
      subtext:
        "Réservez un appel de 30 minutes (décalage horaire facile à gérer). On analyse vos objectifs, on vous propose une solution chiffrée. Sans engagement.",
    },
    schema: {
      areaServed: "Saint-Denis, La Réunion, France",
      geo: { latitude: -20.8823, longitude: 55.4504 },
    },
  },

  // ─────────────────────────────────────────────
  // 16. GUADELOUPE (territory)
  // ─────────────────────────────────────────────
  {
    slug: "guadeloupe",
    name: "Guadeloupe",
    type: "territory",
    preposition: "en",
    meta: {
      title: "Agence web en Guadeloupe — Sites sur-mesure | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Guadeloupe. Développement sur-mesure, design et SEO inclus. Intervention à distance depuis la métropole, livraison en 30 jours.",
      canonical: "https://vizionweb.fr/guadeloupe",
    },
    hero: {
      headline:
        "Des sites web et applications sur-mesure pour les entreprises de Guadeloupe",
      subheadline:
        "Landing pages, sites vitrines et applications SaaS développés avec des technologies modernes pour les entrepreneurs guadeloupéens. Design, copywriting et référencement inclus.",
    },
    images: {
      intro: {
        src: "/cities/guadeloupe-intro.webp",
        alt: "Plage tropicale de Guadeloupe",
      },
      context: {
        src: "/cities/guadeloupe-context.webp",
        alt: "Eaux turquoise de Guadeloupe",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises guadeloupéennes",
      paragraphs: [
        "La Guadeloupe accueille 800 000 visiteurs par an, et la grande majorité d'entre eux planifient leur séjour en ligne. Pourtant, beaucoup d'entreprises locales n'ont pas de site web ou utilisent des solutions dépassées. Un hébergement sans site propre dépend d'Airbnb (et de ses commissions). Un restaurant sans vitrine en ligne perd les touristes qui recherchent sur Google. Ce décalage entre l'offre locale et les habitudes numériques des clients est une opportunité pour ceux qui investissent maintenant.",
        "Vizion Web intervient depuis la métropole pour créer des sites internet et applications web adaptés au marché guadeloupéen. Chaque projet est développé sur-mesure, avec un design orienté conversion, un copywriting professionnel et un SEO local ciblé. Ce fonctionnement à distance nous permet de livrer un niveau de qualité identique à nos projets métropolitains, sans surcoût lié à la distance.",
        "Un gîte de Deshaies veut ses propres réservations en ligne. Une entreprise BTP de Baie-Mahault a besoin d'une vitrine crédible pour décrocher des marchés publics. Un restaurant de Sainte-Anne cherche à capter les touristes en recherche active. Chaque projet démarre par un appel (on s'adapte au décalage horaire), avance sur Figma et en visio, et se livre clé en main.",
      ],
    },
    localContext: {
      population: "390 000 habitants",
      quartiersCles: [
        "Pointe-à-Pitre / Les Abymes (pôle économique principal)",
        "Baie-Mahault / Jarry (zone industrielle et commerciale)",
        "Basse-Terre (administration, services publics)",
        "Sainte-Anne / Saint-François (tourisme, hôtellerie)",
        "Le Gosier (tourisme, restauration)",
      ],
      zonesActivite: [
        "Zone de Jarry (première zone d'activité des Antilles françaises)",
        "Zone de Destrelland (grande distribution, commerces)",
        "Port autonome de la Guadeloupe (commerce maritime)",
        "Zones touristiques du sud Grande-Terre (hôtellerie, loisirs)",
      ],
      secteursDominants: [
        "Tourisme balnéaire et culturel",
        "Commerce et grande distribution",
        "Agriculture d'exportation (banane, rhum)",
        "BTP et construction",
        "Services aux entreprises et aux particuliers",
      ],
      specificites:
        "Premier département d'outre-mer pour le tourisme (800 000 visiteurs par an), la Guadeloupe dépend fortement de la consommation intérieure et du tourisme. Dans ces deux secteurs, la présence web est un facteur de différenciation direct : les entreprises avec un site professionnel captent les clients que leurs concurrents sans site laissent passer.",
    },
    localFaqs: getLocalFaqs("Guadeloupe", "en", {
      type: "domtom",
      territoire: "Guadeloupe",
      adj: "guadeloupéen",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web guadeloupéen commence ici",
      subtext:
        "Réservez un appel de 30 minutes (on s'adapte au décalage horaire). On analyse vos objectifs, on vous propose une solution chiffrée. Sans engagement.",
    },
    schema: {
      areaServed: "Guadeloupe, France",
      geo: { latitude: 16.265, longitude: -61.551 },
    },
  },

  // ─────────────────────────────────────────────
  // 17. MARTINIQUE (territory)
  // ─────────────────────────────────────────────
  {
    slug: "martinique",
    name: "Martinique",
    type: "territory",
    preposition: "en",
    meta: {
      title: "Création de sites web en Martinique | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Martinique. Développement sur-mesure, design et SEO inclus. Intervention à distance depuis la métropole, livraison en 30 jours.",
      canonical: "https://vizionweb.fr/martinique",
    },
    hero: {
      headline:
        "Agence web en Martinique : des sites et applications qui font la différence",
      subheadline:
        "Développement web sur-mesure pour les entreprises martiniquaises. Sites vitrines, landing pages et applications SaaS livrés avec design, copywriting et optimisation SEO.",
    },
    images: {
      intro: {
        src: "/cities/martinique-intro.webp",
        alt: "Baie du Vauclin en Martinique",
      },
      context: {
        src: "/cities/martinique-context.webp",
        alt: "Plage de palmiers en Martinique",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises martiniquaises",
      paragraphs: [
        "La Martinique compte 350 000 habitants et un marché où le bouche-à-oreille se fait de plus en plus en ligne. Le rhum AOC martiniquais s'exporte, les touristes planifient leur séjour sur Google, et les habitants comparent les prestataires sur leur téléphone. Dans ce contexte, un site web professionnel n'est plus un luxe : c'est le socle de la crédibilité pour toute entreprise qui veut grandir.",
        "Vizion Web intervient depuis la métropole pour créer des sites et applications web adaptés au marché martiniquais. Chaque projet est développé sur-mesure (pas de WordPress ni de templates), avec un design pensé pour convertir, un copywriting professionnel et un SEO local optimisé. Ce fonctionnement à distance nous permet de livrer un niveau de qualité identique à nos projets métropolitains.",
        "Une distillerie du nord veut vendre son rhum en ligne au-delà de l'île. Un hôtel des Trois-Îlets cherche des réservations directes sans passer par Booking. Un artisan du Lamentin a besoin d'une vitrine crédible. Chaque projet démarre par un appel (on s'adapte au décalage horaire), avance sur Figma et en visio, et se livre clé en main.",
      ],
    },
    localContext: {
      population: "350 000 habitants",
      quartiersCles: [
        "Fort-de-France centre (commerces, services, administration)",
        "Le Lamentin (zone industrielle et commerciale)",
        "Les Trois-Îlets (tourisme, hôtellerie)",
        "Le Robert / Le François (agriculture, pêche)",
        "Schoelcher (résidentiel, université)",
      ],
      zonesActivite: [
        "Zone industrielle du Lamentin (principale zone d'activité)",
        "Zone touristique des Trois-Îlets (hôtels, loisirs)",
        "Centre d'affaires de Pointe Simon (tertiaire)",
        "Zone artisanale de Rivière-Salée (TPE, artisanat)",
      ],
      secteursDominants: [
        "Tourisme et hôtellerie-restauration",
        "Agriculture et agroalimentaire (rhum, banane)",
        "Commerce et distribution",
        "BTP et artisanat",
        "Services et professions libérales",
      ],
      specificites:
        "La Martinique se distingue par son label Rhum AOC (unique en France) et par un tourisme qui se réinvente autour de la culture créole et de la gastronomie. Le marché local est compact et concurrentiel : les entreprises avec un site professionnel et un bon référencement local captent les clients en premier. Les autres dépendent du bouche-à-oreille et des réseaux sociaux.",
    },
    localFaqs: getLocalFaqs("Martinique", "en", {
      type: "domtom",
      territoire: "Martinique",
      adj: "martiniquais",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web martiniquais commence ici",
      subtext:
        "Réservez un appel de 30 minutes (on s'adapte au décalage horaire). On analyse vos objectifs, on vous propose une solution chiffrée. Sans engagement.",
    },
    schema: {
      areaServed: "Martinique, France",
      geo: { latitude: 14.6415, longitude: -61.0242 },
    },
  },

  // ─────────────────────────────────────────────
  // 18. GUYANE (territory)
  // ─────────────────────────────────────────────
  {
    slug: "guyane",
    name: "Guyane",
    type: "territory",
    preposition: "en",
    meta: {
      title: "Agence web en Guyane — Sites et apps web | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de Guyane. Développement sur-mesure, design et SEO inclus. Intervention à distance depuis la métropole, livraison en 30 jours.",
      canonical: "https://vizionweb.fr/guyane",
    },
    hero: {
      headline:
        "Développement web professionnel pour les entreprises de Guyane",
      subheadline:
        "Sites internet, landing pages et applications SaaS développés sur-mesure pour le marché guyanais. Technologies modernes, design premium et SEO local intégrés.",
    },
    images: {
      intro: {
        src: "/cities/guyane-intro.webp",
        alt: "Cascade en forêt tropicale de Guyane",
      },
      context: {
        src: "/cities/guyane-context.webp",
        alt: "Forêt tropicale et rivière en Guyane",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises guyanaises",
      paragraphs: [
        "La Guyane connaît une croissance démographique parmi les plus fortes de France et reçoit des investissements massifs dans les infrastructures. Pourtant, la présence digitale des entreprises guyanaises reste en retard par rapport à la métropole : sites absents ou dépassés, dépendance aux réseaux sociaux, manque de visibilité sur Google. Ce décalage crée une fenêtre d'opportunité pour les entreprises qui investissent maintenant dans un site professionnel.",
        "Vizion Web intervient depuis la métropole pour créer des sites et applications web adaptés au marché guyanais. Chaque projet est développé sur-mesure, avec un design adapté à votre image, un copywriting qui parle à vos clients et un SEO local ciblé. Ce fonctionnement à distance nous permet de livrer un niveau de qualité que peu de prestataires locaux peuvent proposer, sans surcoût.",
        "Un lodge d'écotourisme à Cacao veut des réservations en ligne. Un sous-traitant du Centre Spatial de Kourou a besoin d'un portail professionnel. Un commerce de Saint-Laurent-du-Maroni cherche plus de visibilité. Chaque projet démarre par un appel (on s'adapte au décalage horaire de 4 à 5h), avance sur Figma et en visio, et se livre clé en main.",
      ],
    },
    localContext: {
      population: "300 000 habitants",
      quartiersCles: [
        "Cayenne centre (commerces, administration, services)",
        "Rémire-Montjoly (résidentiel, professions libérales)",
        "Matoury (zone commerciale, logistique)",
        "Kourou (spatial, tourisme scientifique)",
        "Saint-Laurent-du-Maroni (commerce frontalier, services)",
      ],
      zonesActivite: [
        "Zone de Dégrad-des-Cannes (port, industrie)",
        "Centre Spatial Guyanais de Kourou (aérospatial)",
        "Zone commerciale de Matoury-Cogneau (distribution)",
        "Zone d'activité de Pariacabo à Kourou (sous-traitance spatiale)",
      ],
      secteursDominants: [
        "Spatial et aérospatial",
        "BTP et aménagement du territoire",
        "Commerce et distribution",
        "Exploitation forestière et minière",
        "Tourisme vert et écotourisme",
      ],
      specificites:
        "Plus grand département français (83 000 km2), la Guyane combine forêt amazonienne et haute technologie spatiale. Son économie est portée par la démographie et les investissements publics. Le faible taux de digitalisation des entreprises locales signifie qu'un site professionnel et bien référencé vous place immédiatement devant vos concurrents absents du web.",
    },
    localFaqs: [
      {
        question:
          "Comment se passe la collaboration si vous êtes basés en métropole ?",
        answer:
          "Tous nos projets se gèrent en visio avec des points réguliers. Vous avez accès en temps réel aux maquettes et aux environnements de développement pour suivre l'avancement. Et si besoin, nous pouvons organiser une rencontre en personne lors d'un passage de Dylann (fondateur) en Guyane.",
      },
      {
        question: "Vous connaissez vraiment le marché guyanais ?",
        answer:
          "Oui, le fondateur de l'agence est originaire de Guyane, avec de la famille sur place et des passages réguliers sur le territoire. Nous comprenons les spécificités du marché local : les besoins en digitalisation, les contraintes budgétaires et les particularités culturelles et économiques du territoire. Nous tenons à contribuer au développement du digital sur le territoire guyanais.",
      },
      {
        question:
          "Pourquoi travailler avec vous plutôt qu'une agence locale en Guyane ?",
        answer:
          "Nous offrons un double avantage : la proximité culturelle et la connaissance du territoire (origines guyanaises), combinées à une expertise technique pointue acquise en métropole (Développement d'applications modernes). Vous bénéficiez d'une qualité de livraison métropolitaine avec une vraie compréhension des enjeux guyanais.",
      },
      {
        question: "Vous travaillez avec quel type d'entreprises en Guyane ?",
        answer:
          "Nous accompagnons principalement des startups, PME guyanaises ou entrepreneurs qui veulent lancer un produit digital (MVP, SaaS) ou automatiser un processus métier. Nos clients viennent de secteurs variés : services, commerce, tourisme, santé. Le point commun : ils cherchent une solution technique fiable et adaptée au contexte local.",
      },
    ],
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web guyanais commence ici",
      subtext:
        "Réservez un appel de 30 minutes (on s'adapte au décalage horaire). On analyse vos objectifs, on vous propose une solution chiffrée. Sans engagement.",
    },
    schema: {
      areaServed: "Guyane, France",
      geo: { latitude: 4.9372, longitude: -52.326 },
    },
  },

  // ─────────────────────────────────────────────
  // 19. LA RÉUNION (territory)
  // ─────────────────────────────────────────────
  {
    slug: "la-reunion",
    name: "La Réunion",
    type: "territory",
    preposition: "à",
    meta: {
      title: "Création web à La Réunion — Sites et apps | Vizion Web",
      description:
        "Sites internet et applications web pour les entreprises de La Réunion. Développement sur-mesure, design et SEO inclus. Intervention à distance depuis la métropole, livraison en 30 jours.",
      canonical: "https://vizionweb.fr/la-reunion",
    },
    hero: {
      headline: "Sites internet et applications web sur-mesure à La Réunion",
      subheadline:
        "Nous concevons des solutions digitales performantes pour les entreprises réunionnaises. Du site vitrine au SaaS, chaque projet est développé sur-mesure avec design, copywriting et SEO intégrés.",
    },
    images: {
      intro: {
        src: "/cities/reunion-intro.webp",
        alt: "Piton de la Fournaise à La Réunion",
      },
      context: {
        src: "/cities/reunion-context.webp",
        alt: "Cascade et montagne à La Réunion",
      },
    },
    localIntro: {
      title:
        "Création de sites web et applications pour les entreprises réunionnaises",
      paragraphs: [
        "La Réunion compte 870 000 habitants et un taux d'équipement smartphone parmi les plus élevés de France. Plus de 70% du trafic web se fait sur mobile, et les Réunionnais comparent, achètent et réservent en ligne. Au-delà du tourisme et de l'agriculture, l'île développe des filières d'avenir : énergies renouvelables, numérique, économie bleue. Pour les entreprises de l'île, un site web performant n'est plus optionnel.",
        "Vizion Web intervient depuis la métropole pour créer des sites et applications web adaptés au marché réunionnais. Chaque projet est développé sur-mesure, avec un design mobile-first, un copywriting adapté au contexte local et un SEO ciblé. Le décalage horaire de 2 à 3h est facile à gérer, et ce fonctionnement à distance nous permet de proposer des tarifs compétitifs.",
        "Un hôtel de Saint-Gilles-les-Bains veut des réservations directes sans passer par Booking. Un artisan de Saint-Paul a besoin d'une vitrine crédible. Une startup du Technopôle de Saint-Denis lance son application. Chaque projet démarre par un appel de cadrage, avance sur Figma et en visio, et se livre clé en main.",
      ],
    },
    localContext: {
      population: "870 000 habitants",
      quartiersCles: [
        "Saint-Denis centre (chef-lieu, services, administrations)",
        "Saint-Pierre (pôle économique du sud, commerces)",
        "Saint-Paul / Le Port (logistique, industrie, commerce)",
        "Saint-Gilles-les-Bains (tourisme balnéaire, hôtellerie)",
        "Le Tampon / Saint-Louis (agriculture, services)",
      ],
      zonesActivite: [
        "Technopôle de Saint-Denis (numérique, innovation)",
        "ZAC 2000 au Port (industrie, logistique)",
        "Zone commerciale de Savanna à Saint-Paul (distribution)",
        "Pôle d'activités de Pierrefonds à Saint-Pierre (tertiaire, PME)",
      ],
      secteursDominants: [
        "Tourisme et hôtellerie-restauration",
        "Commerce et grande distribution",
        "BTP et aménagement",
        "Agriculture et agroalimentaire (canne, vanille, rhum)",
        "Énergies renouvelables et développement durable",
      ],
      specificites:
        "La Réunion combine insularité et dynamisme économique : PIB en croissance régulière, population jeune très connectée, et un objectif d'autonomie énergétique à horizon 2030. L'écosystème numérique autour du Technopôle de Saint-Denis grandit vite. Pour les entreprises réunionnaises, un site rapide et bien référencé est le moyen le plus direct de capter la clientèle locale et touristique.",
    },
    localFaqs: getLocalFaqs("La Réunion", "à", {
      type: "domtom",
      territoire: "La Réunion",
      adj: "réunionnais",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet web réunionnais commence ici",
      subtext:
        "Réservez un appel de 30 minutes (décalage horaire facile à gérer). On analyse vos objectifs, on vous propose une solution chiffrée. Sans engagement.",
    },
    schema: {
      areaServed: "La Réunion, France",
      geo: { latitude: -21.1151, longitude: 55.5364 },
    },
  },
];

export function getCity(slug: string): CitySEO | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
