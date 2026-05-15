export type GlossaryCategory =
  | "ia-llm"
  | "architecture-web"
  | "frontend-design"
  | "backend-infra"
  | "auth-securite"
  | "seo-performance"
  | "business"
  | "automatisation"
  | "reglementaire";

export type GlossaryArticleParagraph =
  | string
  | { title: string; content: string };

export interface GlossaryTerm {
  term: string;
  slug: string;
  category: GlossaryCategory;
  definition: string;
  article?: GlossaryArticleParagraph[];
}

export const glossaryCategories: Record<
  GlossaryCategory,
  { label: string; description: string }
> = {
  "ia-llm": {
    label: "IA & LLM",
    description:
      "Modèles de langage, agents, RAG et concepts liés à l'intelligence artificielle générative.",
  },
  "architecture-web": {
    label: "Architecture web & API",
    description:
      "Patterns d'architecture, formats d'application, types d'API et SDK.",
  },
  "frontend-design": {
    label: "Frontend & Design",
    description:
      "Frameworks JavaScript, outils de design et concepts d'interface.",
  },
  "backend-infra": {
    label: "Backend, Data & Infra",
    description:
      "Bases de données, déploiement, infrastructure et services managés.",
  },
  "auth-securite": {
    label: "Auth & Sécurité",
    description:
      "Authentification, gestion des permissions et protocoles de sécurité.",
  },
  "seo-performance": {
    label: "SEO & Performance",
    description:
      "Référencement naturel, métriques de performance et balisage technique.",
  },
  business: {
    label: "Business & Métiers",
    description:
      "Modèles d'affaires, indicateurs et vocabulaire des projets digitaux.",
  },
  automatisation: {
    label: "Automatisation",
    description:
      "Outils et concepts pour automatiser les workflows et synchroniser les données.",
  },
  reglementaire: {
    label: "Réglementaire",
    description:
      "Normes, accords et obligations légales liés au web et aux données.",
  },
};

function slugify(term: string): string {
  return term
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const rawTerms: Omit<GlossaryTerm, "slug">[] = [
  // ── IA & LLM ──────────────────────────────────────────────────────
  {
    term: "LLM",
    category: "ia-llm",
    definition:
      "Large Language Model. Modèle d'intelligence artificielle entraîné sur d'énormes volumes de texte pour comprendre et générer du langage naturel. Exemples : GPT, Claude, Gemini, Mistral.",
  },
  {
    term: "Agent IA",
    category: "ia-llm",
    definition:
      "Programme qui utilise un LLM pour comprendre une demande, planifier des actions et appeler des outils (recherche, calculs, API) pour accomplir une tâche complète, sans intervention humaine à chaque étape.",
  },
  {
    term: "RAG",
    category: "ia-llm",
    definition:
      "Retrieval-Augmented Generation. Technique qui donne au LLM accès à votre base documentaire au moment de répondre, plutôt que de lui apprendre vos données. Permet des réponses sourcées et à jour.",
  },
  {
    term: "Prompt caching",
    category: "ia-llm",
    definition:
      "Mise en cache des parties stables d'un prompt (instructions système, documentation répétée) pour réduire fortement le coût et la latence des appels suivants. Disponible chez Anthropic et OpenAI.",
  },
  {
    term: "Tool use",
    category: "ia-llm",
    definition:
      "Capacité d'un LLM à appeler des fonctions ou outils définis par le développeur : lire une base, déclencher une action, faire une recherche web. Base du fonctionnement des agents.",
  },
  {
    term: "Function calling",
    category: "ia-llm",
    definition:
      "Mécanisme par lequel le LLM renvoie un appel de fonction structuré (nom + arguments JSON) au lieu d'un texte libre. Permet d'intégrer l'IA dans des workflows métier de façon fiable.",
  },
  {
    term: "Embeddings",
    category: "ia-llm",
    definition:
      "Représentation vectorielle d'un texte (suite de nombres) qui capture son sens. Permet de comparer la similarité sémantique de deux textes pour la recherche sémantique ou le RAG.",
  },
  {
    term: "Context window",
    category: "ia-llm",
    definition:
      "Quantité maximale de tokens (texte) qu'un LLM peut traiter en une seule fois. Claude propose 200 000 tokens en standard (1 million en mode étendu), assez pour ingérer un livre entier.",
  },
  {
    term: "Token",
    category: "ia-llm",
    definition:
      "Unité de découpage du texte pour un LLM (≈ 3/4 de mot en français). Les tarifs API sont facturés au nombre de tokens en entrée et en sortie.",
  },
  {
    term: "Hallucination",
    category: "ia-llm",
    definition:
      "Réponse plausible mais factuellement fausse générée par un LLM. Risque inhérent qu'on limite via RAG, validation côté serveur et garde-fous métier sur les actions critiques.",
  },
  {
    term: "Streaming SSE",
    category: "ia-llm",
    definition:
      "Server-Sent Events. Protocole qui permet d'afficher les tokens du LLM au fur et à mesure de leur génération côté client, plutôt qu'attendre la réponse complète. Améliore drastiquement le ressenti utilisateur.",
  },
  {
    term: "OCR",
    category: "ia-llm",
    definition:
      "Optical Character Recognition. Extraction automatique de texte depuis une image ou un PDF scanné. Les modèles vision modernes (GPT vision, Claude vision) gèrent l'OCR avancé avec contexte.",
  },
  {
    term: "Multimodal",
    category: "ia-llm",
    definition:
      "Modèle capable de traiter plusieurs types d'entrées (texte, image, audio) dans un même prompt. Les modèles GPT et Claude récents sont multimodaux sur texte + image.",
  },
  {
    term: "Sortie structurée",
    category: "ia-llm",
    definition:
      "Mode dans lequel le LLM renvoie une réponse au format JSON respectant un schéma défini à l'avance. Indispensable pour l'extraction de données fiable et l'intégration dans un produit.",
  },
  {
    term: "Fine-tuning",
    category: "ia-llm",
    definition:
      "Spécialisation d'un LLM existant sur vos données pour qu'il réponde dans votre ton ou maîtrise votre domaine métier. Plus coûteux que le RAG, à réserver aux cas où le prompting ne suffit plus.",
  },
  {
    term: "pgvector",
    category: "ia-llm",
    definition:
      "Extension PostgreSQL qui permet de stocker des embeddings et de faire de la recherche vectorielle directement dans la base. Inclus par défaut dans Supabase.",
  },
  {
    term: "GPT",
    category: "ia-llm",
    definition:
      "Generative Pre-trained Transformer. Famille de modèles de langage d'OpenAI : versions généralistes multimodales, version économique pour le volume, série o pour le raisonnement complexe.",
  },
  {
    term: "Whisper",
    category: "ia-llm",
    definition:
      "Modèle d'OpenAI pour la transcription audio multilingue. Très fiable pour transformer un enregistrement vocal ou une réunion en texte structuré.",
  },

  // ── Architecture web & API ────────────────────────────────────────
  {
    term: "SaaS",
    category: "architecture-web",
    definition:
      "Software as a Service. Logiciel hébergé dans le cloud, accessible par abonnement via un navigateur. Exemples : Slack, Notion, HubSpot. Vizion Web développe des SaaS sur-mesure pour B2B.",
  },
  {
    term: "MVP",
    category: "architecture-web",
    definition:
      "Minimum Viable Product. Version simplifiée d'un produit avec uniquement les fonctionnalités essentielles, lancée rapidement pour valider une hypothèse marché avec de vrais utilisateurs.",
  },
  {
    term: "POC",
    category: "architecture-web",
    definition:
      "Proof of Concept. Démonstration technique courte qui valide qu'une approche fonctionne avant d'investir dans un produit complet. Souvent isolé, sans interface ni mise en production.",
  },
  {
    term: "SPA",
    category: "architecture-web",
    definition:
      "Single Page Application. Application web qui charge une seule page HTML puis met à jour le contenu dynamiquement via JavaScript. Idéal pour les dashboards et apps internes, moins pour le SEO public.",
  },
  {
    term: "SSR",
    category: "architecture-web",
    definition:
      "Server-Side Rendering. Le HTML est généré côté serveur à chaque requête, puis envoyé prêt à l'emploi au navigateur. Améliore le SEO et le temps de premier affichage.",
  },
  {
    term: "ISR",
    category: "architecture-web",
    definition:
      "Incremental Static Regeneration. Pattern Next.js qui sert des pages statiques rapides tout en les régénérant en arrière-plan à intervalle régulier. Combine vitesse de site statique et données à jour.",
  },
  {
    term: "SSG",
    category: "architecture-web",
    definition:
      "Static Site Generation. Génération des pages HTML au moment du build, puis service en pur statique. Maximum de performance, idéal pour les sites dont le contenu change peu.",
  },
  {
    term: "App Router",
    category: "architecture-web",
    definition:
      "Nouveau système de routing de Next.js basé sur des dossiers, avec Server Components, layouts imbriqués et Server Actions. Remplace le Pages Router historique sur tous nos nouveaux projets.",
  },
  {
    term: "Server Components",
    category: "architecture-web",
    definition:
      "Composants React rendus côté serveur uniquement. Permettent d'aller chercher des données directement dans le composant sans envoyer de JavaScript au client, ce qui allège fortement le bundle.",
  },
  {
    term: "Server Actions",
    category: "architecture-web",
    definition:
      "Fonctions Next.js exécutées côté serveur appelées directement depuis un composant React. Évitent d'écrire une route API séparée pour les mutations simples (formulaires, paiements).",
  },
  {
    term: "API REST",
    category: "architecture-web",
    definition:
      "Style d'API basé sur des URL pour des ressources (GET, POST, PUT, DELETE). Le plus courant pour exposer un backend à un frontend ou à un partenaire.",
  },
  {
    term: "GraphQL",
    category: "architecture-web",
    definition:
      "Alternative à REST où le client définit précisément les données qu'il veut récupérer en une seule requête. Plus complexe à mettre en place mais évite le sur-fetching sur les écrans riches.",
  },
  {
    term: "Webhook",
    category: "architecture-web",
    definition:
      "URL exposée par votre application pour recevoir des événements en temps réel depuis un service tiers (paiement Stripe, formulaire, n8n). L'inverse d'une API classique : c'est le service qui appelle votre URL.",
  },
  {
    term: "SDK",
    category: "architecture-web",
    definition:
      "Software Development Kit. Bibliothèque officielle fournie par un éditeur pour intégrer son service plus facilement. Vizion Web privilégie les SDK officiels (Stripe, OpenAI, Supabase) pour la fiabilité.",
  },

  // ── Frontend & Design ─────────────────────────────────────────────
  {
    term: "React",
    category: "frontend-design",
    definition:
      "Bibliothèque JavaScript open-source maintenue par Meta pour construire des interfaces utilisateur à base de composants. Standard du marché front-end.",
  },
  {
    term: "Next.js",
    category: "frontend-design",
    definition:
      "Framework React de référence pour la production : routing par fichiers, SSR/SSG/ISR, optimisation des images, SEO natif. Maintenu par Vercel.",
  },
  {
    term: "TypeScript",
    category: "frontend-design",
    definition:
      "Surcouche typée à JavaScript. Le compilateur attrape les erreurs avant la production. Standard de facto sur les projets web professionnels en 2026.",
  },
  {
    term: "Tailwind CSS",
    category: "frontend-design",
    definition:
      "Framework CSS utilitaire qui permet de styler les composants via des classes directement dans le HTML. Évite le CSS bloat et accélère le développement sans sacrifier la cohérence visuelle.",
  },
  {
    term: "Figma",
    category: "frontend-design",
    definition:
      "Outil de design collaboratif en ligne, référence pour les maquettes, prototypes interactifs et design systems. Permet le handoff propre entre designers et développeurs.",
  },
  {
    term: "Design system",
    category: "frontend-design",
    definition:
      "Bibliothèque cohérente de composants visuels réutilisables (boutons, formulaires, cards, typographie). Évite de redessiner les mêmes éléments à chaque écran et garantit la cohérence du produit.",
  },
  {
    term: "Wireframe",
    category: "frontend-design",
    definition:
      "Schéma basse fidélité d'un écran qui structure le contenu et les zones d'interaction, sans entrer dans le visuel final. Étape de cadrage avant les maquettes UI.",
  },
  {
    term: "Prototype",
    category: "frontend-design",
    definition:
      "Version cliquable des maquettes qui simule les parcours utilisateur sans code. Permet de tester l'expérience avec des prospects ou des investisseurs avant le développement.",
  },
  {
    term: "Composant",
    category: "frontend-design",
    definition:
      "Brique réutilisable d'une interface (bouton, card, formulaire) qui contient son propre rendu et sa logique. Base de l'architecture React et de tout design system moderne.",
  },
  {
    term: "Hooks",
    category: "frontend-design",
    definition:
      "Fonctions React qui permettent d'ajouter de la logique aux composants (état local, effets, contexte). useState, useEffect, useMemo sont les hooks les plus utilisés.",
  },
  {
    term: "MDX",
    category: "frontend-design",
    definition:
      "Format de fichier qui combine Markdown et composants React dans un même document. Idéal pour les articles de blog qui ont besoin de blocs interactifs ou customisés.",
  },

  // ── Backend, Data & Infra ─────────────────────────────────────────
  {
    term: "PostgreSQL",
    category: "backend-infra",
    definition:
      "Base de données relationnelle open-source robuste, standard du marché pour les applications web modernes. Supporte SQL complet, JSON natif et de nombreuses extensions (pgvector, PostGIS).",
  },
  {
    term: "Supabase",
    category: "backend-infra",
    definition:
      "Backend-as-a-Service open-source bâti sur PostgreSQL : authentification, stockage, realtime, edge functions et pgvector pour le RAG. Alternative à Firebase, auto-hébergeable.",
  },
  {
    term: "Vercel",
    category: "backend-infra",
    definition:
      "Plateforme de déploiement créée par les auteurs de Next.js : edge runtime mondial, preview URL automatique par pull request, monitoring inclus, scalabilité sans configuration serveur.",
  },
  {
    term: "BaaS",
    category: "backend-infra",
    definition:
      "Backend-as-a-Service. Service tout-en-un qui couvre auth, base de données, storage et fonctions serveur, pour démarrer vite sans monter son infra. Exemples : Supabase, Firebase.",
  },
  {
    term: "ORM",
    category: "backend-infra",
    definition:
      "Object-Relational Mapping. Bibliothèque qui permet d'interagir avec la base de données via des objets typés plutôt qu'en SQL brut. Exemples : Drizzle, Prisma.",
  },
  {
    term: "Edge runtime",
    category: "backend-infra",
    definition:
      "Exécution du code serveur sur un réseau mondial de points de présence (CDN), au plus près de l'utilisateur. Latence très faible, idéal pour les routes critiques d'une app globale.",
  },
  {
    term: "Edge functions",
    category: "backend-infra",
    definition:
      "Fonctions serveur exécutées sur le edge runtime. Chez Supabase, écrites en Deno/TypeScript. Pratiques pour la logique sensible qui ne doit pas tourner côté client.",
  },
  {
    term: "Self-hosted",
    category: "backend-infra",
    definition:
      "Solution déployée sur votre propre serveur ou cloud privé, plutôt que sur l'infrastructure managée du fournisseur. Donne plus de contrôle et de portabilité, demande plus d'expertise DevOps.",
  },
  {
    term: "Serverless",
    category: "backend-infra",
    definition:
      "Modèle d'hébergement où les fonctions sont exécutées à la demande sans gérer de serveur. Facturation à l'usage, scalabilité automatique. Exemples : Vercel Functions, AWS Lambda.",
  },
  {
    term: "CI/CD",
    category: "backend-infra",
    definition:
      "Continuous Integration / Continuous Deployment. Pipeline automatisé qui lance les tests, build le projet et déploie en production à chaque commit. Standard via GitHub Actions ou GitLab CI.",
  },
  {
    term: "Multi-tenant",
    category: "backend-infra",
    definition:
      "Architecture SaaS où plusieurs entreprises clientes partagent la même infrastructure, avec des données strictement isolées entre elles. Modèle classique pour un SaaS B2B.",
  },
  {
    term: "Headless CMS",
    category: "backend-infra",
    definition:
      "Système de gestion de contenu sans interface publique, qui expose son contenu via une API. Le front-end (Next.js par exemple) consomme ces données pour les afficher comme il veut. Exemples : Sanity, Strapi.",
  },
  {
    term: "Cron job",
    category: "backend-infra",
    definition:
      "Tâche programmée pour s'exécuter automatiquement à des horaires définis (chaque heure, chaque nuit, le 1er du mois). Utile pour des rapports, des synchronisations ou des nettoyages de base.",
  },
  {
    term: "VPS",
    category: "backend-infra",
    definition:
      "Virtual Private Server. Serveur virtuel dédié loué chez un hébergeur (OVH, Scaleway, Hetzner). Plus de contrôle qu'un serveur managé, à un coût modéré, mais demande des compétences DevOps.",
  },

  // ── Auth & Sécurité ───────────────────────────────────────────────
  {
    term: "JWT",
    category: "auth-securite",
    definition:
      "JSON Web Token. Format de jeton signé qui contient l'identité d'un utilisateur. Permet à un client de prouver son identité à chaque appel API sans repasser par la base de données.",
  },
  {
    term: "OAuth",
    category: "auth-securite",
    definition:
      "Protocole standard qui permet à votre application d'authentifier un utilisateur via un fournisseur tiers (Google, GitHub, LinkedIn) sans manipuler ses identifiants.",
  },
  {
    term: "SAML",
    category: "auth-securite",
    definition:
      "Security Assertion Markup Language. Protocole de SSO utilisé par les grandes entreprises pour fédérer leurs comptes employés vers les SaaS internes. Indispensable pour cibler des clients ETI ou groupes.",
  },
  {
    term: "SSO",
    category: "auth-securite",
    definition:
      "Single Sign-On. Mécanisme qui permet à un utilisateur de se connecter une seule fois et d'accéder à plusieurs applications. Repose souvent sur SAML ou OpenID Connect en entreprise.",
  },
  {
    term: "RLS",
    category: "auth-securite",
    definition:
      "Row Level Security. Mécanisme PostgreSQL qui filtre automatiquement les lignes d'une table selon l'utilisateur connecté. Pierre angulaire d'un multi-tenant sécurisé sur Supabase.",
  },
  {
    term: "Magic link",
    category: "auth-securite",
    definition:
      "Lien de connexion à usage unique envoyé par e-mail. L'utilisateur clique et il est authentifié, sans mot de passe à mémoriser. Plus simple et plus sécurisé qu'un classique email/password.",
  },
  {
    term: "RGPD",
    category: "auth-securite",
    definition:
      "Règlement Général sur la Protection des Données. Réglementation européenne qui encadre la collecte et l'usage des données personnelles. Conformité obligatoire pour tout site avec utilisateurs européens.",
  },

  // ── SEO & Performance ─────────────────────────────────────────────
  {
    term: "SEO technique",
    category: "seo-performance",
    definition:
      "Optimisation du référencement naturel sur les aspects techniques : performance, balises meta, données structurées, sitemap, indexabilité. Pré-requis à toute stratégie SEO contenu.",
  },
  {
    term: "Core Web Vitals",
    category: "seo-performance",
    definition:
      "Ensemble de métriques Google qui mesurent l'expérience utilisateur d'un site : vitesse de chargement (LCP), réactivité (INP) et stabilité visuelle (CLS). Critère officiel de classement.",
  },
  {
    term: "LCP",
    category: "seo-performance",
    definition:
      "Largest Contentful Paint. Temps mis pour afficher le plus grand élément visible de la page. Objectif : sous 2,5 secondes pour passer au vert sur Lighthouse.",
  },
  {
    term: "CLS",
    category: "seo-performance",
    definition:
      "Cumulative Layout Shift. Mesure des décalages visuels imprévus pendant le chargement de la page. Objectif : sous 0,1. Souvent dégradé par des images sans dimensions ou des polices mal chargées.",
  },
  {
    term: "FID",
    category: "seo-performance",
    definition:
      "First Input Delay. Temps de latence entre le premier clic de l'utilisateur et la réponse du navigateur. Remplacé par INP dans les Core Web Vitals depuis 2024.",
  },
  {
    term: "INP",
    category: "seo-performance",
    definition:
      "Interaction to Next Paint. Métrique qui mesure la réactivité globale du site lors des interactions utilisateur. Objectif : sous 200 ms.",
  },
  {
    term: "TTFB",
    category: "seo-performance",
    definition:
      "Time To First Byte. Délai entre la requête HTTP et le premier octet de réponse du serveur. Indicateur de la performance backend et de l'infrastructure.",
  },
  {
    term: "Lighthouse",
    category: "seo-performance",
    definition:
      "Outil Google intégré à Chrome qui audite une page sur la performance, l'accessibilité, le SEO et les bonnes pratiques. Référence pour valider la qualité technique d'un site.",
  },
  {
    term: "Schema.org",
    category: "seo-performance",
    definition:
      "Vocabulaire de balisage sémantique qui aide Google à comprendre le contenu d'une page (article, produit, FAQ, événement). Active les Rich Results dans la SERP.",
  },
  {
    term: "JSON-LD",
    category: "seo-performance",
    definition:
      "JSON Linked Data. Format recommandé par Google pour intégrer du balisage Schema.org dans une page sous forme de script JSON. Plus simple à maintenir que les microdonnées HTML.",
  },
  {
    term: "Sitemap",
    category: "seo-performance",
    definition:
      "Fichier XML qui liste toutes les URL importantes d'un site pour aider les moteurs de recherche à les découvrir. Généré dynamiquement chez Vizion Web via la sitemap API Next.js.",
  },
  {
    term: "Open Graph",
    category: "seo-performance",
    definition:
      "Balises meta qui définissent comment une page apparaît quand elle est partagée sur les réseaux sociaux (titre, description, image). Indispensable pour les partages soignés.",
  },

  // ── Business & Métiers ────────────────────────────────────────────
  {
    term: "B2B",
    category: "business",
    definition:
      "Business-to-Business. Modèle où l'on vend à des entreprises (et non à des particuliers). La majorité des SaaS et applications métier que Vizion Web développe sont B2B.",
  },
  {
    term: "B2C",
    category: "business",
    definition:
      "Business-to-Consumer. Modèle où l'on vend à des particuliers. Sites e-commerce grand public, applications de bien-être, marketplaces DTC.",
  },
  {
    term: "DTC",
    category: "business",
    definition:
      "Direct-to-Consumer. Marque qui vend directement au consommateur final sans distributeur intermédiaire. Souvent associé à un site e-commerce custom et à une identité forte.",
  },
  {
    term: "E-commerce",
    category: "business",
    definition:
      "Vente de produits ou services en ligne via un site web ou une marketplace. Va du simple catalogue Shopify à la marketplace B2B custom avec prix négociés et paiements différés.",
  },
  {
    term: "Marketplace",
    category: "business",
    definition:
      "Plateforme qui met en relation des acheteurs et des vendeurs tiers, en prenant une commission sur chaque transaction. Exemples : Airbnb, Vinted. Architecture plus complexe qu'un e-commerce classique.",
  },
  {
    term: "CRM",
    category: "business",
    definition:
      "Customer Relationship Management. Logiciel de gestion des relations clients : suivi des prospects, opportunités, historique d'échanges. Exemples : HubSpot, Pipedrive, Salesforce.",
  },
  {
    term: "ERP",
    category: "business",
    definition:
      "Enterprise Resource Planning. Logiciel global de gestion d'entreprise qui couvre comptabilité, RH, stocks, ventes. Exemples : SAP, Odoo, Sage.",
  },
  {
    term: "ROI",
    category: "business",
    definition:
      "Return On Investment. Retour sur investissement : combien votre projet rapporte par rapport à ce qu'il a coûté. Critère clé pour décider d'un investissement digital.",
  },
  {
    term: "MRR",
    category: "business",
    definition:
      "Monthly Recurring Revenue. Revenu récurrent mensuel généré par les abonnements d'un SaaS. Indicateur clé pour mesurer la santé et la croissance d'un produit B2B.",
  },
  {
    term: "LTV",
    category: "business",
    definition:
      "Lifetime Value. Revenu total qu'un client va générer sur toute la durée de sa relation avec votre produit. Comparée au CAC, donne la rentabilité de l'acquisition.",
  },
  {
    term: "Time-to-market",
    category: "business",
    definition:
      "Temps écoulé entre l'idée d'un produit et sa mise sur le marché. Critique pour les startups : un MVP livré en 3 semaines au lieu de 6 mois change le rapport au marché.",
  },
  {
    term: "Cadrage",
    category: "business",
    definition:
      "Phase préliminaire d'un projet où l'on définit le périmètre, les fonctionnalités prioritaires, le planning et le budget. Vizion Web cadre en 30 minutes pour repartir avec un devis sous 24-48h.",
  },
  {
    term: "KPI",
    category: "business",
    definition:
      "Key Performance Indicator. Indicateur clé de performance, mesurable, qui suit l'avancée vers un objectif business. Exemples pour un SaaS : MRR, churn, NPS, taux d'activation.",
  },

  // ── Automatisation ────────────────────────────────────────────────
  {
    term: "Workflow",
    category: "automatisation",
    definition:
      "Suite d'étapes automatisées qui exécutent un processus métier de bout en bout : recevoir un lead, l'enrichir, le router vers le bon outil, alerter une équipe.",
  },
  {
    term: "n8n",
    category: "automatisation",
    definition:
      "Outil d'automatisation de workflows open-source, alternative à Zapier et Make. Auto-hébergeable, vous restez propriétaire des workflows et des données. Idéal pour les volumes importants.",
  },
  {
    term: "Zapier",
    category: "automatisation",
    definition:
      "Plateforme cloud d'automatisation grand public. Très simple à prendre en main pour des cas légers, mais coûteuse au volume et fermée (vous ne possédez pas vos workflows).",
  },
  {
    term: "Make",
    category: "automatisation",
    definition:
      "Anciennement Integromat. Alternative à Zapier avec plus de flexibilité (boucles, conditions complexes) et un meilleur rapport qualité/prix. Reste un service SaaS fermé.",
  },
  {
    term: "Trigger",
    category: "automatisation",
    definition:
      "Événement qui démarre un workflow : nouveau formulaire reçu, nouveau lead dans le CRM, horaire de cron, webhook entrant. Toutes les automatisations commencent par un trigger.",
  },
  {
    term: "Sync bidirectionnelle",
    category: "automatisation",
    definition:
      "Synchronisation dans les deux sens entre deux outils : un changement dans le CRM met à jour la base, et inversement. Plus complexe qu'une sync simple, à cadrer pour éviter les conflits.",
  },

  // ── Réglementaire ─────────────────────────────────────────────────
  {
    term: "RGAA",
    category: "reglementaire",
    definition:
      "Référentiel Général d'Amélioration de l'Accessibilité. Norme française qui définit les exigences d'accessibilité numérique pour les sites publics et certaines entreprises privées.",
  },
  {
    term: "WCAG",
    category: "reglementaire",
    definition:
      "Web Content Accessibility Guidelines. Standard international d'accessibilité web maintenu par le W3C. Base du RGAA et de la directive européenne accessibilité.",
  },
  {
    term: "SecNumCloud",
    category: "reglementaire",
    definition:
      "Qualification française délivrée par l'ANSSI pour les services cloud qui répondent à des exigences strictes de sécurité et de souveraineté. Requise pour certains secteurs publics et sensibles.",
  },
  {
    term: "BAA",
    category: "reglementaire",
    definition:
      "Business Associate Agreement. Contrat de protection des données de santé requis par la HIPAA aux États-Unis. OpenAI et Anthropic en proposent pour les usages santé US.",
  },
  {
    term: "DPA",
    category: "reglementaire",
    definition:
      "Data Processing Agreement. Contrat conforme RGPD signé entre vous et un sous-traitant qui traite des données personnelles pour votre compte. Obligatoire avec chaque fournisseur cloud européen.",
  },
];

import { glossaryArticles } from "./glossaire-articles";

export const glossaryTerms: GlossaryTerm[] = rawTerms.map((t) => {
  const slug = slugify(t.term);
  return {
    ...t,
    slug,
    article: glossaryArticles[slug],
  };
});

export function getGlossaryByCategory(category: GlossaryCategory): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}

export function getAllGlossaryCategories(): GlossaryCategory[] {
  return Object.keys(glossaryCategories) as GlossaryCategory[];
}
