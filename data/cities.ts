export interface CitySEO {
  slug: string;
  name: string;
  type: "city" | "territory";
  preposition: "à" | "en";
  meta: { title: string; description: string; canonical: string };
  hero: { headline: string; subheadline: string };
  localAccent: {
    introMention: string;
    ctaMention: string;
  };
  /**
   * Paragraphes longs pour la section CityIntro.
   * Chaque paragraphe a un titre h3 et un contenu.
   * Si présent, remplace le rendu fallback basé sur localAccent.introMention.
   */
  introContent?: {
    badge?: string;
    title: string;
    paragraphs: Array<{ title: string; content: string }>;
  };
  /**
   * Section accordéon "Pourquoi travailler avec nous" (image à gauche).
   */
  valueProps?: {
    badge?: string;
    title: string;
    points: Array<{ title: string; description: string }>;
  };
  /**
   * Section accordéon "Cas d'usage / Domaines d'application" (image à droite).
   * Sert à donner des exemples concrets de projets qu'on porte, différent du process.
   */
  useCases?: {
    badge?: string;
    title: string;
    points: Array<{ title: string; description: string }>;
  };
  /**
   * Section "Notre approche" sur fond sombre (4 phases).
   */
  approach?: {
    title: string;
    subtitle?: string;
    phases: Array<{ title: string; description: string }>;
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
    | { type: "domtom"; territoire: string; adj: string },
): Array<{ question: string; answer: string }> {
  const prep = `${preposition} ${cityName}`;

  const faqs: Array<{ question: string; answer: string }> = [
    {
      question: `Comment se passe la collaboration si vous n'êtes pas ${prep} ?`,
      answer: `Tout se fait en visio et via des outils collaboratifs modernes. On démarre par un appel de cadrage détaillé, puis on avance par sprints courts d'une semaine. Vous avez accès en temps réel aux maquettes Figma et à l'environnement de développement pour suivre l'avancement.`,
    },
    {
      question: `Pourquoi travailler avec vous plutôt qu'une agence basée ${prep} ?`,
      answer: `Vous obtenez la même expertise technique qu'une agence locale, avec trois avantages : tarifs plus compétitifs (fonctionnement 100% remote), spécialisation forte en SaaS, MVP et applications métier (React, Next.js, TypeScript, Supabase), et intégration IA (OpenAI, Claude). Si vous cherchez un template prêt à l'emploi ou du no-code, on n'est pas le bon partenaire.`,
    },
    {
      question: `Vous travaillez avec quel type d'entreprises ${prep} ?`,
      answer: `On accompagne principalement des startups en lancement (MVP, SaaS), des PME qui digitalisent un processus métier (dashboard, ERP custom, automatisation), et des dirigeants qui intègrent de l'IA dans leurs outils. Le point commun : ils veulent une solution sur-mesure, scalable, livrée en 3 semaines pour un MVP.`,
    },
  ];

  if (extra?.type === "domtom") {
    faqs.push({
      question: `Vous connaissez le marché ${extra.adj} ?`,
      answer: `Oui, on accompagne des clients en ${extra.territoire} et on comprend les spécificités du marché : faible densité de prestataires tech qualifiés, besoins de digitalisation forte des PME, sites locaux souvent vieillissants. Une stack moderne (Next.js, Supabase, IA intégrée) crée un avantage concurrentiel direct.`,
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
      title: "Agence web à Paris : SaaS, MVP & apps métier | Vizion Web",
      description:
        "Agence web à Paris : développement de SaaS, MVP en 3 semaines et applications métier sur-mesure. Devis chiffré sous 24h. Stack Next.js, Supabase, IA. 100% remote.",
      canonical: "https://vizionweb.fr/paris",
    },
    hero: {
      headline: "Agence web à Paris : SaaS, MVP et applications métier",
      subheadline:
        "Vous lancez un SaaS, un MVP ou une app métier à Paris. Vous voulez un produit qui fonctionne en 3 semaines, pas 6 mois. On chiffre votre projet sous 24h, on conçoit, on développe, on livre. Solo, transparent, sans intermédiaire.",
    },
    localAccent: {
      introMention:
        "Paris concentre l'écosystème tech le plus dense d'Europe continentale : Station F, Silicon Sentier, La Défense. Les founders et dirigeants parisiens y cherchent un partenaire technique qui livre vite et qui comprend l'enjeu produit, pas juste le code.",
      ctaMention:
        "Réservez un appel de 30 minutes. On cadre votre besoin, on chiffre une solution sur-mesure et on définit un planning. Sans engagement.",
    },
    introContent: {
      title: "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché parisien qui demande du produit",
          content:
            "Paris réunit la densité d'écosystème tech la plus forte d'Europe continentale. Les founders y construisent des SaaS B2B qui visent l'international, les scale-ups y industrialisent leurs outils, les corporates y ouvrent des chantiers produit en parallèle de leur SI legacy. Sur tous ces fronts, la demande va vers des équipes qui livrent du logiciel utile, pas vers des prestataires qui vendent du temps. On se positionne précisément sur cette attente produit, avec un format léger et un rythme de mise en marché tenu.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders post-amorçage que les directions métier de grands groupes qui veulent moderniser un back-office vieillissant sans relancer un appel d'offres à un million d'euros. Le point commun reste le même : un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets se construisent par itérations courtes, validées chaque semaine, plutôt que par un cahier des charges figé à l'avance qui ne tient jamais face au terrain.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, à Paris comme ailleurs. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la majorité des projets produit, sans déplacement à coordonner, sans agenda à caler entre quatre interlocuteurs, sans temps perdu en logistique de réunion.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Paris", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Lancez votre SaaS ou MVP à Paris",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% à distance, code 100% à vous.",
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
      title: "Agence web à Lyon : SaaS, MVP & apps métier | Vizion Web",
      description:
        "Agence web à Lyon : développement de SaaS, MVP en 3 semaines et applications métier sur-mesure. Devis chiffré sous 24h. Stack Next.js, Supabase, IA. 100% remote.",
      canonical: "https://vizionweb.fr/lyon",
    },
    hero: {
      headline: "Agence web à Lyon : SaaS, MVP et applications métier",
      subheadline:
        "Vous portez un projet SaaS, un MVP ou une app métier à Lyon. Vous voulez un produit livré en 3 semaines, chiffré en 48h, et un développeur qui parle business autant que tech. C'est ce que Vizion Web fait, en solo et en remote.",
    },
    localAccent: {
      introMention:
        "Lyon est le 2e pôle tech français : 2 500+ entreprises tech, FrenchTech One Lyon, éditeurs SaaS de Vaise, MedTech de Gerland. Les dirigeants lyonnais cherchent un partenaire qui livre vite, sans surcoût d'agence locale.",
      ctaMention:
        "30 minutes en visio pour cadrer votre projet, chiffrer une proposition sur-mesure et définir un planning clair.",
    },
    introContent: {
      title: "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché lyonnais qui demande du produit",
          content:
            "Lyon est le deuxième pôle tech français, avec une concentration forte d'éditeurs SaaS B2B, de groupes industriels en transformation et d'acteurs MedTech qui ont besoin de logiciel métier solide. Les founders lyonnais cherchent un partenaire capable de tenir un rythme de release sur un marché concurrentiel. Les directions opérationnelles, elles, veulent moderniser leurs outils sans tomber dans un projet à un million d'euros. Sur ces deux profils, le format Vizion Web colle exactement à la demande.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders qui industrialisent leur SaaS que les directions métier qui veulent moderniser un back-office d'entreprise vieillissant. Le point commun reste un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets se construisent par itérations courtes, validées chaque semaine, plutôt que par un cahier des charges figé à l'avance qui ne tient jamais face au retour terrain de vos premiers utilisateurs.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, depuis la région lyonnaise comme partout en France. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni temps perdu en logistique de réunion.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Lyon", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet SaaS ou MVP à Lyon",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% à distance, code 100% à vous.",
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
      title: "Agence web à Marseille : SaaS, MVP & apps métier | Vizion Web",
      description:
        "Agence web à Marseille : SaaS, MVP en 3 semaines, applications métier. Euroméditerranée, FrenchTech Aix-Marseille. Devis 24h. Stack Next.js, Supabase, IA.",
      canonical: "https://vizionweb.fr/marseille",
    },
    hero: {
      headline: "Agence web à Marseille : SaaS, MVP et applications métier",
      subheadline:
        "Vous lancez un SaaS, un MVP ou une app métier à Marseille. On chiffre votre projet sous 24h, on livre un MVP en 3 semaines et on travaille en sprints courts. Solo, en remote, sans frais d'agence locale gonflés.",
    },
    localAccent: {
      introMention:
        "Marseille devient un pôle tech sérieux : Euroméditerranée (3,5 Md€ d'investissement), FrenchTech Aix-Marseille, La Coque, The Camp. Les startups et PME locales cherchent un dev qui livre vite et qui comprend la réalité produit.",
      ctaMention:
        "30 minutes pour comprendre votre besoin produit et construire une proposition chiffrée sur-mesure.",
    },
    introContent: {
      title:
        "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché marseillais qui demande du produit",
          content:
            "Marseille monte vite côté tech, portée par un tissu de startups méditerranéennes, un écosystème logistique et portuaire qui se digitalise, et des PME en transformation outillage. Les founders cherchent un partenaire technique qui avance au rythme de leur traction. Les directions opérationnelles veulent moderniser leurs outils sans embarquer dans un projet à un million d'euros pour deux cents utilisateurs. Sur ces deux profils, l'offre Vizion Web colle directement à la demande terrain.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders sortis d'amorçage que les directions métier qui veulent moderniser un back-office vieillissant côté logistique, port ou services. Le point commun reste un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets avancent par itérations courtes, validées chaque semaine, plutôt que par un cahier des charges figé qui ne tient jamais face au terrain réel de vos équipes.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, à Marseille comme ailleurs sur le pourtour méditerranéen. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni temps perdu en logistique.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Marseille", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre SaaS ou MVP à Marseille",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
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
      title: "Agence web à Toulouse : SaaS, MVP & apps métier | Vizion Web",
      description:
        "Agence web à Toulouse : SaaS, MVP en 3 semaines, apps métier. FrenchTech Toulouse, Aerospace Valley, IoT Valley. Devis 24h. Stack Next.js, Supabase, IA.",
      canonical: "https://vizionweb.fr/toulouse",
    },
    hero: {
      headline: "Agence web à Toulouse : SaaS, MVP et applications métier",
      subheadline:
        "Vous portez un projet SaaS, un MVP ou une app métier à Toulouse. Devis sous 24h, MVP livré en 3 semaines, code 100% à vous. Stack moderne, intégration IA si pertinent, sprints courts pour itérer vite.",
    },
    localAccent: {
      introMention:
        "Toulouse est le 2e pôle de R&D français : Aerospace Valley, IoT Valley (350 entreprises Internet des Objets), FrenchTech Toulouse, Oncopole. Les sous-traitants industriels et startups locales cherchent des outils sur-mesure qui collent à leurs process.",
      ctaMention:
        "Un appel de 30 minutes pour cadrer votre besoin produit et chiffrer une solution adaptée.",
    },
    introContent: {
      title:
        "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché toulousain qui demande du produit",
          content:
            "Toulouse concentre un tissu rare en France : industrie aéronautique, sous-traitants techniques, éditeurs de software embarqué, SaaS B2B. Les founders y portent souvent des produits exigeants côté ingénierie. Les directions métier des sous-traitants industriels veulent moderniser des outils internes qui ont vieilli en silence depuis dix ans, sans embarquer dans un projet à un million d'euros. Sur ces deux profils, le format Vizion Web répond précisément à la demande.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders qui sortent d'incubation que les directions métier des PME industrielles qui veulent moderniser un back-office vieillissant. Le point commun reste un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets avancent par itérations courtes, validées chaque semaine, plutôt que par un cahier des charges figé qui ne tient jamais face au retour des équipes terrain qui utilisent l'outil au quotidien.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, à Toulouse comme partout en France. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni temps perdu à caler quatre agendas pour un point d'une heure.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Toulouse", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Lancez votre SaaS ou MVP à Toulouse",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
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
      title: "Agence web Bordeaux : SaaS, MVP & apps métier | Vizion Web",
      description:
        "Agence web à Bordeaux : SaaS, MVP en 3 semaines, apps métier. FrenchTech Bordeaux, Bassins à flot, Darwin. Devis 24h. Stack Next.js, Supabase, IA.",
      canonical: "https://vizionweb.fr/bordeaux",
    },
    hero: {
      headline: "Agence web à Bordeaux : SaaS, MVP et applications métier",
      subheadline:
        "Vizion Web est votre agence web sur Bordeaux et la métropole bordelaise pour le développement de SaaS, MVP et applications métier. Devis chiffré sous 24h, MVP livré en 3 semaines. Solo, remote, code 100% à vous.",
    },
    localAccent: {
      introMention:
        "Bordeaux est le 1er hub tech du sud-ouest : 35 000 emplois numérique, FrenchTech Bordeaux, Bassins à flot (250 entreprises numériques), Darwin Écosystème. La demande est forte côté SaaS et apps métier custom, peu côté simple vitrine.",
      ctaMention:
        "Réservez un appel de 30 minutes. On cadre, on chiffre, on définit un planning. Sans engagement.",
    },
    introContent: {
      title:
        "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché bordelais qui demande du produit",
          content:
            "Bordeaux concentre un tissu actif de startups produit et de PME en transformation digitale. Les founders cherchent un partenaire technique capable d'avancer au rythme du marché. Les directions opérationnelles, elles, veulent moderniser leurs outils sans tomber dans un projet à un million d'euros pour 200 utilisateurs. Sur ces deux profils, on est en plein dedans.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders qui sortent d'incubation que les directions métier qui veulent moderniser un back-office vieillissant. Le point commun : un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets se construisent par itérations courtes, validées chaque semaine, plutôt que par un cahier des charges figé à l'avance.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni temps perdu en logistique.",
        },
      ],
    },
    valueProps: {
      title: "Pourquoi travailler avec Vizion Web sur votre projet bordelais",
      points: [
        {
          title: "Un seul interlocuteur, du devis à la production",
          description:
            "Vous parlez au développeur qui code. Pas de chef de projet qui répète vos messages, pas de junior qui apprend sur votre projet. Les décisions techniques et produit se prennent en temps réel, sans rond-point ni intermédiaire qui ralentit la boucle.",
        },
        {
          title: "Devis chiffré sous 24 à 48h",
          description:
            "Un appel de cadrage de 30 minutes suffit pour vous renvoyer un périmètre clair, un planning, et un prix fixe. Pas de devis vague à étages, pas de surprise en cours de route. Vous savez exactement ce que vous achetez avant de signer.",
        },
        {
          title: "MVP livré en 3 semaines, pas en 6 mois",
          description:
            "Un produit utilisable dès la troisième semaine, prêt à recevoir vos premiers utilisateurs. La suite se construit par itérations courtes, sur ce que vous observez du terrain, pas sur des hypothèses cadrées à l'avance qui ne tiennent jamais 100%.",
        },
        {
          title: "Code 100% à vous, sans dépendance technique",
          description:
            "Le repository GitHub, le compte Vercel, la base Supabase : tout est à votre nom dès le premier jour. Vous pouvez reprendre la main avec votre équipe ou changer de prestataire sans renégocier la propriété du code ou des données.",
        },
        {
          title: "Stack moderne, faite pour évoluer",
          description:
            "Next.js, TypeScript, Supabase, Vercel : la stack qu'on retrouve aujourd'hui chez les SaaS qui montent en charge. Une stack qui vous suit dans la durée et qui encaisse les fonctionnalités complexes sans s'effondrer.",
        },
        {
          title: "Intégration IA quand elle apporte de la valeur",
          description:
            "OpenAI, Claude, Whisper, embeddings, RAG : on intègre ces briques quand elles transforment l'usage, pas comme couche marketing. La couche serveur (validation, garde-fous, logs) compte autant que le modèle pour livrer un produit fiable en production.",
        },
      ],
    },
    useCases: {
      badge: "Cas d'usage",
      title: "Les projets qu'on porte le mieux à Bordeaux",
      points: [
        {
          title: "SaaS",
          description:
            "Plateforme accessible par abonnement, avec espaces clients, parcours d'inscription, facturation récurrente et tableau de bord par utilisateur. Cas typique : un éditeur qui veut atteindre ses premiers comptes payants, ou une scale-up qui sort un nouveau module à monétiser séparément.",
        },
        {
          title: "Applications métier internes",
          description:
            "Outils sur-mesure pour vos équipes : pilotage commercial, suivi de production, gestion de planning, validation de devis ou de commandes. Remplace les Excel partagés et les Notion mal taggés qui freinent vos opérations sans que personne ne le mesure.",
        },
        {
          title: "Site e-commerce custom",
          description:
            "Boutique en ligne sur-mesure quand Shopify ou WooCommerce coincent : catalogue complexe, tarification par client, intégration ERP, devis en ligne, paiements différés, espace revendeur. On bâtit autour de votre métier, pas autour des templates d'une plateforme.",
        },
        {
          title: "Intégration IA dans un produit existant",
          description:
            "Ajout d'un copilote, d'un assistant conversationnel ou d'un moteur de recherche sémantique sur votre base documentaire. La fonctionnalité s'intègre dans l'app que vous avez déjà, sans tout refondre, avec les garde-fous serveur qui vont avec.",
        },
        {
          title: "Migration depuis WordPress ou app legacy",
          description:
            "Refonte d'un site WordPress vieillissant ou d'une app legacy vers une stack qui scale, garde le SEO et reste évolutive. Migration progressive sans coupure, redirections gérées, transition transparente pour vos utilisateurs et pour Google.",
        },
        {
          title: "MVP pour valider une idée",
          description:
            "Version minimale fonctionnelle d'un concept produit, livrée en 2 à 3 semaines pour tester avec de vrais utilisateurs avant l'investissement complet. Idéal pour valider une hypothèse marché, cadrer un projet plus large ou convaincre les premiers investisseurs.",
        },
      ],
    },
    approach: {
      title: "Du cadrage à la mise en production en 4 étapes",
      subtitle:
        "Un rythme calé sur ce que vous voyez à l'écran, pas sur des promesses dans un devis.",
      phases: [
        {
          title: "Cadrage produit",
          description:
            "Un appel de 30 minutes pour comprendre le problème métier et le contexte business. On en sort avec un périmètre clair, un devis chiffré et un planning sous 24 à 48h.",
        },
        {
          title: "Design Figma",
          description:
            "Maquettes complètes du parcours principal, validées avec vous. Le produit prend forme avant le code, ce qui évite les retours en arrière coûteux en phase de développement.",
        },
        {
          title: "Sprints de développement",
          description:
            "Stack Next.js, Supabase, Vercel. Démos chaque vendredi, URLs de preview en continu. Vous voyez le produit grandir et donnez votre avis avant chaque jalon.",
        },
        {
          title: "Mise en production et support",
          description:
            "Déploiement sur votre domaine, monitoring en place, support de 30 à 90 jours inclus. Au-delà, on continue ensemble ou votre équipe reprend la main avec une codebase propre.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Bordeaux", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre projet SaaS ou MVP à Bordeaux",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
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
      title: "Agence web à Lille : SaaS, MVP & apps métier | Vizion Web",
      description:
        "Agence web à Lille : SaaS, MVP en 3 semaines, apps métier. EuraTechnologies, Plaine Images, Eurasanté. Devis 24h. Stack Next.js, Supabase, IA.",
      canonical: "https://vizionweb.fr/lille",
    },
    hero: {
      headline: "Agence web à Lille : SaaS, MVP et applications métier",
      subheadline:
        "Vous lancez un SaaS, un MVP ou une app métier à Lille. Devis sous 24h, MVP livré en 3 semaines, sprints courts pour itérer. Solo, remote, code 100% à vous, intégration IA possible.",
    },
    localAccent: {
      introMention:
        "Lille concentre EuraTechnologies (300+ startups, plus grand incubateur d'Europe), Plaine Images et Eurasanté. La proximité Bruxelles-Londres en fait un nœud stratégique pour les SaaS européens.",
      ctaMention:
        "30 minutes pour échanger sur votre projet produit et construire une proposition chiffrée.",
    },
    introContent: {
      title: "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché lillois qui demande du produit",
          content:
            "Lille joue un rôle de hub frontalier entre Paris, Bruxelles et Londres, avec un tissu fort côté e-commerce, retail, SaaS santé et SaaS éducation. Les founders y portent des projets qui visent vite l'Europe du Nord. Les directions métier des distributeurs et industriels du Nord veulent moderniser des outils internes sans embarquer dans un projet à un million d'euros pour deux cents utilisateurs. Sur ces deux profils, le format Vizion Web répond directement à la demande.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders post-amorçage que les directions métier des retailers et industriels du Nord qui veulent moderniser un back-office vieillissant. Le point commun reste un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets avancent par itérations courtes, validées chaque semaine, plutôt que par un cahier des charges figé qui ne tient jamais face aux retours du terrain, surtout sur des usages e-commerce ou supply à fort volume.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, à Lille comme partout en Europe du Nord. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni temps perdu en logistique de réunion entre quatre interlocuteurs.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Lille", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre SaaS ou MVP à Lille",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
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
      title: "Agence web à Nantes : SaaS, MVP & apps métier | Vizion Web",
      description:
        "Agence web à Nantes : SaaS, MVP en 3 semaines, apps métier. FrenchTech Nantes (top 5 français), Île de Nantes. Devis 24h. Stack Next.js, Supabase, IA.",
      canonical: "https://vizionweb.fr/nantes",
    },
    hero: {
      headline: "Agence web à Nantes : SaaS, MVP et applications métier",
      subheadline:
        "Vous portez un projet SaaS, un MVP ou une app métier à Nantes. Devis chiffré sous 24h, MVP livré en 3 semaines. Solo, remote, code 100% à vous, intégration IA si pertinent.",
    },
    localAccent: {
      introMention:
        "Nantes est dans le top 5 français des hubs tech : FrenchTech Nantes (1 200 startups), Île de Nantes, Quartier de la Création. Akeneo, iAdvize, Lengow sont nés ici : la culture SaaS y est dense.",
      ctaMention:
        "Un appel de 30 minutes pour cadrer votre besoin et chiffrer une solution adaptée à votre marché.",
    },
    introContent: {
      title: "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché nantais qui demande du produit",
          content:
            "Nantes figure dans le top 5 des hubs tech français, avec un tissu rare d'éditeurs SaaS B2B, de scale-ups produit et d'agences spécialisées qui maillent l'ouest. La culture produit y est dense, les founders savent ce qu'ils achètent et exigent un partenaire capable de tenir le rythme. Les directions métier des PME ligériennes veulent moderniser leurs outils sans tomber dans un projet à un million d'euros. Sur ces deux profils, le format Vizion Web répond à la demande.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders qui sortent d'amorçage que les directions métier qui veulent moderniser un back-office vieillissant côté logistique, retail ou services. Le point commun reste un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets avancent par itérations courtes, validées chaque semaine, plutôt que par un cahier des charges figé qui ne tient jamais face au retour des premiers utilisateurs réels du produit.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, à Nantes comme partout dans le grand ouest. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni temps perdu à caler quatre agendas pour un point hebdo.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Nantes", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre SaaS ou MVP à Nantes",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
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
      title: "Agence web à Nice : SaaS, MVP & apps métier | Vizion Web",
      description:
        "Agence web à Nice et Sophia Antipolis : SaaS, MVP en 3 semaines, apps métier. 1ère technopole d'Europe. Devis 24h. Stack Next.js, Supabase, IA.",
      canonical: "https://vizionweb.fr/nice",
    },
    hero: {
      headline: "Agence web à Nice : SaaS, MVP et applications métier",
      subheadline:
        "Vous lancez un SaaS, un MVP ou une app métier à Nice ou Sophia Antipolis. Devis chiffré sous 24h, MVP livré en 3 semaines. Stack moderne, sprints courts, code 100% à vous. Solo, remote.",
    },
    localAccent: {
      introMention:
        "Sophia Antipolis est la 1ère technopole d'Europe (2 500 entreprises tech, 38 000 emplois). Densité forte de scientifiques, éditeurs SaaS et filiales R&D internationales (Amadeus, IBM, Air France-KLM).",
      ctaMention:
        "Réservez un appel de 30 minutes pour comprendre votre besoin produit et obtenir une proposition chiffrée.",
    },
    introContent: {
      title: "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché niçois qui demande du produit",
          content:
            "Nice et son arrière-pays concentrent un écosystème tech méditerranéen en croissance, avec une densité forte côté SaaS B2B, tourisme tech, filiales R&D internationales et services aux entreprises du sud-est. Les founders cherchent un partenaire capable de livrer un produit utilisable rapidement. Les directions métier des acteurs du tourisme, de l'événementiel ou des services veulent moderniser leurs outils sans embarquer dans un projet à un million d'euros. Sur ces deux profils, le format Vizion Web colle à la demande.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders post-amorçage que les directions métier des acteurs du tourisme, des services et du retail du sud-est qui veulent moderniser un back-office vieillissant. Le point commun reste un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets avancent par itérations courtes, validées chaque semaine, plutôt que par un cahier des charges figé qui ne tient jamais face au retour des équipes terrain.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, à Nice comme partout sur la côte d'Azur. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni temps perdu à caler les agendas entre plusieurs interlocuteurs.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Nice", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre SaaS ou MVP à Nice",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
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
      title: "Agence web à Strasbourg : SaaS, MVP & apps métier | Vizion Web",
      description:
        "Agence web à Strasbourg : SaaS, MVP en 3 semaines, apps métier. Parc d'Innovation Illkirch, FrenchTech Alsace. Devis 24h. Stack Next.js, Supabase, IA.",
      canonical: "https://vizionweb.fr/strasbourg",
    },
    hero: {
      headline: "Agence web à Strasbourg : SaaS, MVP et applications métier",
      subheadline:
        "Vous portez un SaaS, un MVP ou une app métier transfrontalière à Strasbourg. Devis sous 24h, MVP en 3 semaines. Stack moderne, intégration IA, code 100% à vous. Remote, sprints courts.",
    },
    localAccent: {
      introMention:
        "Strasbourg est le seul hub B2B franco-allemand de France : flux d'affaires permanent avec Karlsruhe, Stuttgart, Francfort. La demande locale est forte côté SaaS multilingues et portails B2B transfrontaliers.",
      ctaMention:
        "30 minutes pour échanger sur votre projet et vous proposer une solution adaptée à votre marché transfrontalier.",
    },
    introContent: {
      title:
        "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché strasbourgeois qui demande du produit",
          content:
            "Strasbourg occupe une position européenne unique en France, avec un tissu actif côté biotech, services aux entreprises et SaaS B2B qui exportent vers l'Allemagne et la Suisse. Les founders y portent souvent des projets multilingues à fort enjeu réglementaire. Les directions métier des PME du Grand Est veulent moderniser leurs outils internes sans embarquer dans un projet à un million d'euros pour deux cents utilisateurs. Sur ces deux profils, le format Vizion Web répond à la demande.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders qui industrialisent leur SaaS transfrontalier que les directions métier des PME alsaciennes qui veulent moderniser un back-office vieillissant. Le point commun reste un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets avancent par itérations courtes, validées chaque semaine, plutôt que par un cahier des charges figé qui ne tient jamais face au retour des équipes terrain qui utilisent l'outil au quotidien.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, à Strasbourg comme partout dans le Grand Est. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni temps perdu à organiser des points entre interlocuteurs français et germanophones.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Strasbourg", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre SaaS ou MVP à Strasbourg",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
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
      title: "Agence web à Rennes : SaaS, MVP & apps métier | Vizion Web",
      description:
        "Agence web à Rennes : SaaS, MVP en 3 semaines, apps métier. FrenchTech Rennes Saint-Malo, Cyber Campus, Atalante. Devis 24h. Stack Next.js, Supabase, IA.",
      canonical: "https://vizionweb.fr/rennes",
    },
    hero: {
      headline: "Agence web à Rennes : SaaS, MVP et applications métier",
      subheadline:
        "Vous lancez un SaaS, un MVP ou une app métier à Rennes. Devis chiffré sous 24h, MVP livré en 3 semaines. Stack moderne, sprints courts, code 100% à vous. Solo, remote, intégration IA si pertinent.",
    },
    localAccent: {
      introMention:
        "Rennes concentre le 1er pôle cybersécurité européen (Cyber Campus, 2 000 emplois) + FrenchTech Rennes Saint-Malo + Atalante (600 entreprises tech). Marché exigeant pour les apps B2B custom avec besoins sécurité.",
      ctaMention:
        "30 minutes pour cadrer votre besoin et construire une proposition technique adaptée.",
    },
    introContent: {
      title: "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché rennais qui demande du produit",
          content:
            "Rennes joue le rôle de hub tech du grand ouest, avec un tissu fort côté télécoms, cybersécurité, SaaS B2B et services numériques. Le marché local est exigeant côté logiciel métier, surtout sur les applications qui demandent un niveau de sécurité sérieux. Les founders cherchent un partenaire capable de livrer vite. Les directions métier des PME bretonnes veulent moderniser leurs outils sans embarquer dans un projet à un million d'euros. Sur ces deux profils, le format Vizion Web répond à la demande.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders post-amorçage que les directions métier des PME bretonnes qui veulent moderniser un back-office vieillissant côté agroalimentaire, services ou industrie. Le point commun reste un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets avancent par itérations courtes, validées chaque semaine, plutôt que par un cahier des charges figé qui ne tient jamais face au retour des équipes terrain.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, à Rennes comme partout dans le grand ouest. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni temps perdu à caler quatre agendas pour un point d'une heure.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Rennes", "à"),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre SaaS ou MVP à Rennes",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
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
      title: "Agence web Montpellier : SaaS, MVP & apps métier IA | Vizion Web",
      description:
        "Agence web à Montpellier : SaaS, MVP en 3 semaines, apps métier avec IA. FrenchTech Méditerranée, BIC, MIBI. Devis chiffré sous 24h.",
      canonical: "https://vizionweb.fr/montpellier",
    },
    hero: {
      headline: "Agence web à Montpellier : SaaS, MVP et applications métier",
      subheadline:
        "Vizion Web est basé à Montpellier. On conçoit et développe vos SaaS, MVP et apps métier sur-mesure. Devis chiffré sous 24h, MVP livré en 3 semaines. Sprints courts, stack moderne, intégration IA si pertinent.",
    },
    localAccent: {
      introMention:
        "Montpellier est notre QG. On connaît bien l'écosystème : BIC (1er incubateur public de France), MIBI (200 entreprises santé/biotech), Cap Oméga, FrenchTech Méditerranée. Si vous préférez un café avant de cadrer un projet, c'est possible.",
      ctaMention:
        "Un appel de 30 minutes (visio ou café à Montpellier). On cadre, on chiffre, on définit un planning.",
    },
    introContent: {
      title:
        "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché montpelliérain qui demande du produit",
          content:
            "Montpellier concentre un tissu actif de startups produit côté health, biotech, agritech et SaaS B2B, doublé d'un écosystème de PME en transformation digitale qui maillent l'Occitanie. Les founders y portent souvent des projets à forte composante scientifique ou réglementaire. Les directions métier veulent moderniser leurs outils sans embarquer dans un projet à un million d'euros pour deux cents utilisateurs. Sur ces deux profils, le format Vizion Web colle directement à la demande du marché local.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders qui sortent d'incubation côté health, biotech ou agritech que les directions métier des PME régionales qui veulent moderniser un back-office vieillissant. Le point commun reste un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets avancent par itérations courtes, validées chaque semaine, plutôt que par un cahier des charges figé qui ne tient jamais face au retour des équipes terrain.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web a son siège à Montpellier mais fonctionne en remote intégral, y compris avec les clients locaux. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni temps perdu à caler des agendas pour un point d'une heure.",
        },
      ],
    },
    localFaqs: [
      {
        question: "Vous êtes basés à Montpellier ?",
        answer:
          "Oui, Vizion Web est basé à Montpellier. La majorité des clients préfèrent travailler en visio (rapidité, flexibilité), mais on est dispo pour un café de cadrage initial sur Montpellier si vous préférez qu'on se rencontre avant de démarrer.",
      },
      {
        question:
          "Pourquoi Vizion Web plutôt qu'une autre agence montpelliéraine ?",
        answer:
          "On est spécialisés en SaaS, applications web modernes (React, Next.js, TypeScript, Supabase) et en intégration IA (OpenAI, Claude). Concrètement : solutions sur-mesure qui montent en charge, livraison MVP en 3 semaines, code 100% à vous. Si vous cherchez du template ou du no-code, on n'est pas l'option.",
      },
      {
        question:
          "Vous travaillez avec quel type d'entreprises à Montpellier ?",
        answer:
          "Principalement : startups MedTech / SaaS du BIC ou MIBI en phase de MVP/Series A, PME en transformation digitale qui ont besoin d'apps métier internes (dashboards, ERP custom, automatisations IA), et dirigeants qui intègrent de l'IA dans leurs outils.",
      },
    ],
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre SaaS ou MVP à Montpellier",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. Visio ou café sur Montpellier.",
    },
    schema: {
      areaServed: "Montpellier, Hérault, Occitanie, France",
      geo: { latitude: 43.6108, longitude: 3.8767 },
    },
  },

  // ─────────────────────────────────────────────
  // 12. POINTE-À-PITRE (DOM-TOM : préserver KW "création site web" + "agence web")
  // ─────────────────────────────────────────────
  {
    slug: "pointe-a-pitre",
    name: "Pointe-à-Pitre",
    type: "city",
    preposition: "à",
    meta: {
      title: "Agence web & création site web à Pointe-à-Pitre | Vizion Web",
      description:
        "Agence web à Pointe-à-Pitre et Guadeloupe : création site web, SaaS, applications métier. Devis chiffré sous 24h. Stack moderne Next.js. 100% remote.",
      canonical: "https://vizionweb.fr/pointe-a-pitre",
    },
    hero: {
      headline: "Agence web à Pointe-à-Pitre : SaaS, MVP et apps métier",
      subheadline:
        "Vous lancez un projet web à Pointe-à-Pitre ou en Guadeloupe : SaaS, MVP ou application métier sur-mesure. Devis chiffré sous 24h, MVP livré en 3 semaines. Stack moderne, intégration IA si pertinent.",
    },
    localAccent: {
      introMention:
        "Pointe-à-Pitre est le centre économique de la Guadeloupe : Port Autonome, Jarry (1 800 entreprises, plus grande zone d'activité Antilles-Guyane). Marché tech sous-équipé : opportunité directe pour qui investit dans des outils modernes.",
      ctaMention:
        "30 minutes en visio (on s'adapte au décalage horaire). On cadre, on chiffre une solution adaptée au marché antillais.",
    },
    introContent: {
      title:
        "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché pointois qui demande du produit",
          content:
            "Pointe-à-Pitre concentre le tissu B2B le plus dense des Antilles : logistique, import-export, services aux entreprises, distribution. La plupart des sociétés tournent avec des outils vieillissants, des sites en ligne laissés à l'abandon ou des Excel partagés qui freinent la croissance. Les dirigeants qui veulent passer à l'étape suivante cherchent un partenaire produit capable de livrer une vraie application métier. Sur ce besoin précis, on est en plein dedans.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders guadeloupéens qui montent un projet régional caribéen que les directions opérationnelles qui veulent moderniser un back-office vieillissant. Le point commun : un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets se construisent par itérations courtes, validées chaque semaine en visio, plutôt que par un cahier des charges figé six mois à l'avance qui ne tient jamais la réalité du terrain.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, ce qui colle bien à la configuration des Antilles. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio sur des créneaux qui prennent en compte le décalage horaire : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni temps perdu en logistique.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Pointe-à-Pitre", "à", {
      type: "domtom",
      territoire: "Guadeloupe",
      adj: "guadeloupéen",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre site web ou SaaS à Pointe-à-Pitre",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
    },
    schema: {
      areaServed: "Pointe-à-Pitre, Guadeloupe, France",
      geo: { latitude: 16.2415, longitude: -61.5328 },
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
      title: "Agence web & création site web à Fort-de-France | Vizion Web",
      description:
        "Agence web à Fort-de-France et Martinique : création site web, SaaS, applications métier. Devis chiffré sous 24h. Stack moderne Next.js. 100% remote.",
      canonical: "https://vizionweb.fr/fort-de-france",
    },
    hero: {
      headline: "Agence web à Fort-de-France : SaaS, MVP et apps métier",
      subheadline:
        "Vous portez un projet web à Fort-de-France ou en Martinique : SaaS, MVP ou application métier sur-mesure. Devis chiffré sous 24h, MVP livré en 3 semaines. Stack moderne, intégration IA si pertinent.",
    },
    localAccent: {
      introMention:
        "Fort-de-France est la capitale économique de la Martinique : sièges régionaux, Port Autonome, zone du Lamentin (1ère zone d'activité). Marché compact mais peu équipé en outils numériques modernes : opportunité pour les entreprises qui investissent.",
      ctaMention:
        "30 minutes en visio (on s'adapte au décalage horaire). On cadre votre besoin produit, on chiffre.",
    },
    introContent: {
      title:
        "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché foyalais qui demande du produit",
          content:
            "Fort-de-France concentre les sièges régionaux des Antilles, un tissu B2B varié (services, agro-industrie export, distribution, logistique portuaire) et une demande de modernisation forte côté PME. La plupart des outils internes datent d'une décennie, et les sites en ligne ressemblent à des vitrines figées qui ne génèrent ni leads ni efficacité. Les dirigeants qui veulent une vraie application métier ou un produit numérique cherchent un partenaire capable d'aller vite et droit, sans détour. C'est là qu'on intervient.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders martiniquais qui lancent un projet régional caribéen que les directions opérationnelles qui veulent moderniser un back-office vieillissant. Le point commun : un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets se construisent par itérations courtes, validées chaque semaine en visio, plutôt que par un cahier des charges figé en début de mission qui ne survit jamais aux premiers retours du terrain.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, ce qui colle bien à la configuration des Antilles. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio sur des créneaux qui prennent en compte le décalage horaire : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni temps perdu en logistique.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Fort-de-France", "à", {
      type: "domtom",
      territoire: "Martinique",
      adj: "martiniquais",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre site web ou SaaS à Fort-de-France",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
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
      title: "Agence web & création site web à Cayenne | Vizion Web",
      description:
        "Agence web à Cayenne et Guyane : création site web, SaaS, applications métier. Sous-traitance Centre Spatial Guyanais. Devis 24h. 100% remote.",
      canonical: "https://vizionweb.fr/cayenne",
    },
    hero: {
      headline: "Agence web à Cayenne : SaaS, MVP et apps métier",
      subheadline:
        "Vous lancez un projet web à Cayenne ou en Guyane : SaaS, MVP ou application métier sur-mesure. Devis chiffré sous 24h, MVP livré en 3 semaines. Stack moderne, intégration IA si pertinent.",
    },
    localAccent: {
      introMention:
        "Cayenne est la capitale économique de la Guyane : spatial à Kourou (CSG, 1 200 emplois directs, 9 000 indirects), industries extractives, BTP. Faible densité de prestataires tech qualifiés : fenêtre ouverte pour des outils modernes.",
      ctaMention:
        "30 minutes en visio (décalage 4-5h, on s'adapte). On cadre votre besoin et on chiffre une solution adaptée.",
    },
    introContent: {
      title: "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché cayennais qui demande du produit",
          content:
            "Cayenne concentre l'activité tertiaire de la Guyane autour des industries lourdes, du BTP, de la logistique et des services aux entreprises. Le tissu local est exigeant côté process opérationnels mais sous-équipé côté outils numériques. Les sous-traitants industriels et les PME en croissance cherchent des applications métier qui parlent à leur réalité : gestion de chantier, suivi logistique, pilotage commercial, automatisation de tâches répétitives. C'est exactement le type de problèmes qu'on prend en charge avec un partenaire produit dédié.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders guyanais qui montent un projet régional que les directions opérationnelles qui veulent moderniser un back-office vieillissant. Le point commun : un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets se construisent par itérations courtes, validées chaque semaine en visio, plutôt que par un cahier des charges figé six mois à l'avance qui ne tient jamais face aux premiers retours du terrain.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, ce qui colle bien à la géographie de la Guyane et au décalage horaire de quatre à cinq heures avec la métropole. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio sur des créneaux adaptés : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Cayenne", "à", {
      type: "domtom",
      territoire: "Guyane",
      adj: "guyanais",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre site web ou SaaS à Cayenne",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
    },
    schema: {
      areaServed: "Cayenne, Guyane française, France",
      geo: { latitude: 4.9333, longitude: -52.3333 },
    },
  },

  // ─────────────────────────────────────────────
  // 15. SAINT-DENIS (RÉUNION)
  // ─────────────────────────────────────────────
  {
    slug: "saint-denis",
    name: "Saint-Denis",
    type: "city",
    preposition: "à",
    meta: {
      title:
        "Agence web & création site web à Saint-Denis (Réunion) | Vizion Web",
      description:
        "Agence web à Saint-Denis de La Réunion : création site web, SaaS, applications métier. Technopôle, FrenchTech Run'Up. Devis 24h. 100% remote.",
      canonical: "https://vizionweb.fr/saint-denis",
    },
    hero: {
      headline: "Agence web à Saint-Denis (Réunion) : SaaS, MVP et apps métier",
      subheadline:
        "Vous portez un projet web à Saint-Denis de La Réunion : SaaS, MVP ou application métier sur-mesure. Devis chiffré sous 24h, MVP livré en 3 semaines. Stack moderne, intégration IA si pertinent.",
    },
    localAccent: {
      introMention:
        "Saint-Denis est la capitale économique de La Réunion (870 000 habitants, marché captif océan Indien). Le Technopôle concentre les startups numériques locales et la FrenchTech Run'Up. Marché plus mature qu'aux Antilles côté tech mais encore en sous-équipement vs métropole.",
      ctaMention:
        "30 minutes en visio (décalage 3-4h, on s'adapte). On cadre votre besoin produit et on chiffre.",
    },
    introContent: {
      title:
        "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché dionysien qui demande du produit",
          content:
            "Saint-Denis concentre l'essentiel de l'activité économique réunionnaise : services aux entreprises, distribution, tourisme, agro-industrie, écosystème numérique en croissance. Le marché est plus mature qu'aux Antilles côté digital, avec des founders qui visent l'océan Indien et des PME qui veulent vraiment moderniser leurs outils internes. Sur ces deux profils, la demande dépasse l'offre locale en prestataires capables de livrer du produit. On adresse cette demande de front.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders réunionnais qui montent un SaaS pour l'océan Indien que les directions opérationnelles qui veulent moderniser un back-office vieillissant. Le point commun : un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets se construisent par itérations courtes, validées chaque semaine en visio, plutôt que par un cahier des charges figé six mois à l'avance qui ne tient jamais face à la réalité du terrain.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, ce qui colle bien à la position de La Réunion et au décalage horaire de trois à quatre heures avec la métropole. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio sur des créneaux adaptés : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni logistique inutile.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Saint-Denis", "à", {
      type: "domtom",
      territoire: "La Réunion",
      adj: "réunionnais",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre site web ou SaaS à Saint-Denis",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
    },
    schema: {
      areaServed: "Saint-Denis, La Réunion, France",
      geo: { latitude: -20.8789, longitude: 55.4481 },
    },
  },

  // ─────────────────────────────────────────────
  // 16. GUADELOUPE (territoire : préserver KW "agence web guadeloupe" + "création site web guadeloupe")
  // ─────────────────────────────────────────────
  {
    slug: "guadeloupe",
    name: "Guadeloupe",
    type: "territory",
    preposition: "en",
    meta: {
      title: "Agence web & création site web en Guadeloupe | Vizion Web",
      description:
        "Agence web en Guadeloupe : création site web, SaaS, applications métier sur-mesure. Stack moderne Next.js, intégration IA. Devis chiffré sous 24h. 100% remote.",
      canonical: "https://vizionweb.fr/guadeloupe",
    },
    hero: {
      headline: "Agence web en Guadeloupe : SaaS, MVP et apps métier",
      subheadline:
        "Vous portez un projet web en Guadeloupe : SaaS, MVP ou application métier sur-mesure. Devis chiffré sous 24h, MVP livré en 3 semaines. Stack moderne, intégration IA si pertinent.",
    },
    localAccent: {
      introMention:
        "La Guadeloupe (400 000 habitants) concentre Jarry (plus grande zone d'activité Antilles-Guyane, 1 800 entreprises) et le Port Autonome. Marché peu équipé en outils numériques modernes : opportunité directe pour les entreprises qui investissent.",
      ctaMention:
        "30 minutes en visio (on s'adapte au décalage horaire). On cadre votre besoin produit, on chiffre une solution adaptée au marché antillais.",
    },
    introContent: {
      title:
        "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché guadeloupéen qui demande du produit",
          content:
            "La Guadeloupe rassemble un tissu B2B dense : import-export, logistique, distribution, services aux entreprises, agro-industrie, tourisme professionnel. Le marché tourne encore largement sur des outils internes vieillissants et des sites en ligne laissés à l'abandon. Les dirigeants qui veulent franchir un cap cherchent un partenaire produit capable de livrer une vraie application métier, pas un site générique de plus. Sur ces besoins précis, on est en plein dedans, avec des projets calibrés pour le rythme antillais.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders guadeloupéens qui montent un projet caribéen que les directions opérationnelles qui veulent moderniser un back-office vieillissant. Le point commun : un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets se construisent par itérations courtes, validées chaque semaine en visio, plutôt que par un cahier des charges figé en début de mission qui finit toujours par déraper face aux retours du terrain.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, ce qui colle bien à la géographie de l'archipel guadeloupéen. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio sur des créneaux qui prennent en compte le décalage horaire : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni logistique inutile.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Guadeloupe", "en", {
      type: "domtom",
      territoire: "Guadeloupe",
      adj: "guadeloupéen",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre site web ou SaaS en Guadeloupe",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
    },
    schema: {
      areaServed: "Guadeloupe, France",
      geo: { latitude: 16.265, longitude: -61.551 },
    },
  },

  // ─────────────────────────────────────────────
  // 17. MARTINIQUE
  // ─────────────────────────────────────────────
  {
    slug: "martinique",
    name: "Martinique",
    type: "territory",
    preposition: "en",
    meta: {
      title: "Agence web & création site web en Martinique | Vizion Web",
      description:
        "Agence web en Martinique : création site web, SaaS, applications métier sur-mesure. Stack moderne Next.js. Devis chiffré sous 24h. 100% remote.",
      canonical: "https://vizionweb.fr/martinique",
    },
    hero: {
      headline: "Agence web en Martinique : SaaS, MVP et apps métier",
      subheadline:
        "Vous portez un projet web en Martinique : SaaS, MVP ou application métier sur-mesure. Devis chiffré sous 24h, MVP livré en 3 semaines. Stack moderne, intégration IA si pertinent.",
    },
    localAccent: {
      introMention:
        "La Martinique (360 000 habitants) concentre Fort-de-France et le Lamentin (1ère zone d'activité). Tissu B2B local solide (services aux entreprises, logistique, agro-industrie export). Faible densité de prestataires tech qualifiés.",
      ctaMention:
        "30 minutes en visio (on s'adapte au décalage horaire). On cadre votre besoin produit et on chiffre.",
    },
    introContent: {
      title:
        "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché martiniquais qui demande du produit",
          content:
            "La Martinique réunit un tissu B2B solide autour des services aux entreprises, de la logistique, de l'agro-industrie d'export et de la distribution. Le marché reste compact, mais la demande de modernisation est réelle côté outils internes et applications métier. Beaucoup d'entreprises locales font tourner des process avec des Excel partagés ou des logiciels qui n'évoluent plus depuis dix ans. Les dirigeants qui veulent passer à l'étape suivante cherchent un partenaire produit capable d'aller vite et de livrer du concret.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders martiniquais qui ciblent le bassin caribéen que les directions opérationnelles qui veulent moderniser un back-office vieillissant. Le point commun : un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets se construisent par itérations courtes, validées chaque semaine en visio, plutôt que par un cahier des charges figé en début de mission qui ne survit jamais aux premiers retours du terrain.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, ce qui colle bien à la géographie de la Martinique. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio sur des créneaux qui prennent en compte le décalage horaire : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni logistique inutile à gérer.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Martinique", "en", {
      type: "domtom",
      territoire: "Martinique",
      adj: "martiniquais",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre site web ou SaaS en Martinique",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
    },
    schema: {
      areaServed: "Martinique, France",
      geo: { latitude: 14.6415, longitude: -61.0242 },
    },
  },

  // ─────────────────────────────────────────────
  // 18. GUYANE (territoire : préserver KW "agence web guyane" pos 14)
  // ─────────────────────────────────────────────
  {
    slug: "guyane",
    name: "Guyane",
    type: "territory",
    preposition: "en",
    meta: {
      title: "Agence web & création site web en Guyane | Vizion Web",
      description:
        "Agence web en Guyane : création site web, SaaS, applications métier. Sous-traitance Centre Spatial Guyanais. Devis 24h. Stack moderne. 100% remote.",
      canonical: "https://vizionweb.fr/guyane",
    },
    hero: {
      headline: "Agence web en Guyane : SaaS, MVP et apps métier",
      subheadline:
        "Vous portez un projet web en Guyane (Cayenne, Kourou, Saint-Laurent-du-Maroni) : SaaS, MVP ou application métier sur-mesure. Devis chiffré sous 24h, MVP livré en 3 semaines. Stack moderne, intégration IA si pertinent.",
    },
    localAccent: {
      introMention:
        "La Guyane française (300 000 habitants, en forte croissance) combine spatial à Kourou (CSG : 1 200 emplois directs, 9 000 indirects), industries extractives et services tertiaires de Cayenne. Très faible densité de prestataires tech qualifiés.",
      ctaMention:
        "30 minutes en visio (décalage 4-5h, on s'adapte). On cadre votre besoin, on chiffre une solution adaptée au contexte guyanais.",
    },
    introContent: {
      title: "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché guyanais qui demande du produit",
          content:
            "La Guyane combine une économie portée par l'industrie spatiale, les industries extractives, le BTP, la logistique et les services tertiaires en croissance. Le marché est en pleine montée mais reste sous-équipé en outils numériques modernes côté entreprises. Les sous-traitants industriels et les PME en développement cherchent des applications métier qui correspondent à leur réalité opérationnelle : suivi de chantier, pilotage logistique, gestion commerciale, automatisation de tâches répétitives. C'est exactement le type de problèmes qu'on prend en charge.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders guyanais qui montent un projet régional que les directions opérationnelles qui veulent moderniser un back-office vieillissant. Le point commun : un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets se construisent par itérations courtes, validées chaque semaine en visio, plutôt que par un cahier des charges figé en début de mission qui finit toujours par dériver face aux retours du terrain.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, ce qui colle bien à la géographie de la Guyane et au décalage horaire de quatre à cinq heures avec la métropole. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio sur des créneaux adaptés : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner.",
        },
      ],
    },
    localFaqs: getLocalFaqs("Guyane", "en", {
      type: "domtom",
      territoire: "Guyane",
      adj: "guyanais",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre site web ou SaaS en Guyane",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
    },
    schema: {
      areaServed: "Guyane française, France",
      geo: { latitude: 3.9339, longitude: -53.1258 },
    },
  },

  // ─────────────────────────────────────────────
  // 19. LA RÉUNION
  // ─────────────────────────────────────────────
  {
    slug: "la-reunion",
    name: "La Réunion",
    type: "territory",
    preposition: "en",
    meta: {
      title: "Agence web & création site web à La Réunion | Vizion Web",
      description:
        "Agence web à La Réunion : création site web, SaaS, applications métier. Technopôle, FrenchTech Run'Up. Devis chiffré sous 24h. 100% remote.",
      canonical: "https://vizionweb.fr/la-reunion",
    },
    hero: {
      headline: "Agence web à La Réunion : SaaS, MVP et apps métier",
      subheadline:
        "Vous portez un projet web à La Réunion : SaaS, MVP ou application métier sur-mesure. Devis chiffré sous 24h, MVP livré en 3 semaines. Stack moderne, intégration IA si pertinent.",
    },
    localAccent: {
      introMention:
        "La Réunion (870 000 habitants) est le DOM-TOM le plus peuplé et le plus connecté. Marché captif océan Indien, 40% de population sous 25 ans, taux d'équipement smartphone parmi les plus élevés de France. Technopôle Saint-Denis et FrenchTech Run'Up.",
      ctaMention:
        "30 minutes en visio (décalage 3-4h, on s'adapte). On cadre votre besoin produit, on chiffre une solution adaptée.",
    },
    introContent: {
      title:
        "Agence produit pour startups et PME en transformation digitale",
      paragraphs: [
        {
          title: "Un marché réunionnais qui demande du produit",
          content:
            "La Réunion est le territoire d'outre-mer le plus mature côté tech : population jeune, taux d'équipement mobile élevé, écosystème numérique structuré et marché captif qui rayonne sur l'océan Indien. La demande dépasse l'offre côté prestataires capables de livrer du produit. Les founders qui visent l'océan Indien et les PME qui veulent moderniser leurs outils internes cherchent un partenaire capable d'aller vite et droit. C'est exactement le terrain sur lequel on intervient.",
        },
        {
          title: "Trois engagements simples, tenus à chaque projet",
          content:
            "Notre modèle tient sur trois engagements simples : un MVP livré en quelques semaines, un devis chiffré sous 24 à 48 heures, un code 100% à vous dès le premier jour. Le cadrage va à l'essentiel, les démos arrivent chaque semaine, et vous récupérez un produit que vous pouvez faire évoluer avec votre équipe ou un autre prestataire quand vous le souhaitez.",
        },
        {
          title: "Founders et directions métier, même posture produit",
          content:
            "On accompagne autant les founders réunionnais qui montent un SaaS pour l'océan Indien que les directions opérationnelles qui veulent moderniser un back-office vieillissant. Le point commun : un besoin de produit utilisable rapidement, sans tunnel de six mois ni dette technique qui s'accumule. Les projets se construisent par itérations courtes, validées chaque semaine en visio, plutôt que par un cahier des charges figé six mois à l'avance qui ne survit jamais aux premiers retours du terrain.",
        },
        {
          title: "Une collaboration full remote, où que vous soyez",
          content:
            "Vizion Web fonctionne en remote intégral, ce qui colle bien à la géographie de La Réunion et au décalage horaire de trois à quatre heures avec la métropole. Maquettes Figma partagées en direct, sprints d'une semaine, démos hebdo en visio sur des créneaux adaptés : vous voyez l'avancement à chaque étape et vous arbitrez sans attendre. Le format remote rend la collaboration plus rapide que le présentiel sur la grande majorité des projets produit, sans déplacement à coordonner ni logistique inutile.",
        },
      ],
    },
    localFaqs: getLocalFaqs("La Réunion", "en", {
      type: "domtom",
      territoire: "La Réunion",
      adj: "réunionnais",
    }),
    globalFaqIndices: [0, 1, 2],
    cta: {
      text: "Votre site web ou SaaS à La Réunion",
      subtext:
        "Devis chiffré sous 24h. MVP livré en 3 semaines. 100% remote, code 100% à vous.",
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
