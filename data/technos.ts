// ============================================================================
// Vizion Web - TechnoSEO data (Phase C)
// 5 pages techno : OpenAI, Supabase, Claude, Next.js, React
// Aucun import externe : type + data + helpers self-contained
// ============================================================================

export interface TechnoSEO {
  slug: string;
  technoName: string;
  category: "frontend" | "backend" | "ia" | "infra";
  meta: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    headline: string;
    subheadline: string;
  };
  whyTechno: {
    title: string;
    paragraphs: string[];
  };
  whenToUse: {
    title: string;
    points: (string | { title: string; description: string })[];
  };
  whenNotToUse: {
    title: string;
    points: (string | { title: string; description: string })[];
  };
  ourApproach: {
    title: string;
    description: string;
    phases?: { title: string; description: string }[];
  };
  fullStackContext: {
    title: string;
    description: string;
  };
  examples: {
    title: string;
    items: { title: string; description: string }[];
  };
  limits: {
    title: string;
    points: string[];
  };
  performance: {
    title: string;
    description: string;
  };
  cost: {
    title: string;
    description: string;
  };
  faqs: { q: string; a: string }[];
  cta: {
    title: string;
    description: string;
  };
}

// ============================================================================
// DATA
// ============================================================================

export const technos: TechnoSEO[] = [
  // ==========================================================================
  // 1. OPENAI
  // ==========================================================================
  {
    slug: "agence-openai",
    technoName: "OpenAI",
    category: "ia",
    meta: {
      title:
        "Agence OpenAI : intégration GPT, raisonnement et GPT Image | Vizion Web",
      description:
        "Agence OpenAI à Montpellier. Intégration des modèles GPT, série o (raisonnement), GPT Image et Whisper dans vos apps SaaS et métier. Devis chiffré sous 24h.",
      canonical: "https://vizionweb.fr/agence-openai",
    },
    hero: {
      headline: "Agence OpenAI : intégration de l'IA dans vos applications",
      subheadline:
        "On intègre les modèles OpenAI dans vos applications SaaS, métier ou clients : agent conversationnel, extraction documentaire, génération de contenu et d'images.",
    },
    whyTechno: {
      title: "Pourquoi OpenAI pour vos applications IA",
      paragraphs: [
        "OpenAI propose le catalogue de modèles le plus complet du marché. Les modèles GPT pour la conversation et l'analyse de texte. La série o pour le raisonnement complexe (code, planification, analyse). GPT Image pour la génération d'images. Whisper pour la transcription audio. Cette diversité permet de choisir le bon modèle pour chaque tâche, plutôt que de tout faire passer par le même.",
        "L'API OpenAI bénéficie de la documentation la plus mature du marché : SDK Node.js et Python stables, function calling natif, sorties structurées en JSON, outils Assistants. Le time-to-market est court et vos utilisateurs comprennent déjà ce qu'est un chatbot type ChatGPT.",
      ],
    },
    whenToUse: {
      title: "Quand utiliser OpenAI",
      points: [
        {
          title: "Agent conversationnel ou assistant métier",
          description:
            "Vous voulez ajouter un agent conversationnel ou un assistant métier dans votre SaaS.",
        },
        {
          title: "Extraction documentaire à grand volume",
          description:
            "Vous traitez des volumes de documents (factures, contrats, CV) à classifier ou à extraire automatiquement.",
        },
        {
          title: "Génération de contenu structuré",
          description:
            "Vous avez besoin de générer du contenu structuré : descriptions produits e-commerce, fiches SEO, emails personnalisés.",
        },
        {
          title: "MVP IA avec budget maîtrisé",
          description:
            "Vous lancez un MVP IA pour valider une hypothèse marché avec un budget API maîtrisé grâce aux modèles économiques de la famille GPT.",
        },
        {
          title: "Vision multimodale et OCR",
          description:
            "Vous travaillez sur de la vision multimodale : analyse de photos, OCR avancé, extraction de données depuis des PDF scannés.",
        },
      ],
    },
    whenNotToUse: {
      title: "Quand OpenAI n'est pas adapté",
      points: [
        {
          title: "Données strictement souveraines",
          description:
            "Vos données sont strictement souveraines (santé hospitalière, défense) et vous ne pouvez pas sortir du cloud européen : regardez Mistral ou un modèle open-source self-hosted.",
        },
        {
          title: "Raisonnement long et code complexe",
          description:
            "Vous avez besoin d'un raisonnement très long et structuré sur du code complexe : Claude reste souvent supérieur sur ces tâches.",
        },
        {
          title: "Cas d'usage offline ou embarqué",
          description:
            "Votre cas d'usage est offline ou embarqué : les modèles OpenAI nécessitent une connexion API, ce n'est pas une solution edge.",
        },
        {
          title: "Fine-tuning massif sur un domaine",
          description:
            "Vous voulez fine-tuner massivement sur un domaine vertical : les coûts de fine-tuning chez OpenAI deviennent vite prohibitifs face à un Llama self-hosted.",
        },
      ],
    },
    ourApproach: {
      title: "Notre approche OpenAI",
      description:
        "On démarre par un cadrage d'une heure pour identifier le bon modèle selon votre cas : un modèle GPT économique pour les volumes massifs, un GPT généraliste pour les tâches courantes, un modèle de la série o pour le raisonnement complexe. Le bon choix se joue dès les premières heures.\n\nLe développement se fait en sprints d'1 à 2 semaines. Vous avez une URL de preview après chaque sprint, avec les logs d'appels API et les coûts réels. Aucune surprise sur la facture mensuelle. Pour le RAG, on utilise Supabase pgvector ou Pinecone selon le volume.\n\nÀ la livraison, vous récupérez le code source, la documentation des prompts versionnés et les dashboards de monitoring (taux d'erreur, latence p95, coût par utilisateur).",
      phases: [
        {
          title: "Cadrage modèle et cas d'usage",
          description:
            "Une heure pour identifier le bon modèle selon votre cas : GPT économique pour les volumes massifs, GPT généraliste pour les tâches courantes, série o pour le raisonnement complexe.",
        },
        {
          title: "Architecture et prompt engineering",
          description:
            "Conception des prompts versionnés, choix RAG si pertinent (Supabase pgvector ou Pinecone), validation côté serveur des sorties structurées.",
        },
        {
          title: "Développement par sprints",
          description:
            "Sprints d'1 à 2 semaines avec URL de preview, logs d'appels API et coûts réels visibles. Aucune surprise sur la facture mensuelle.",
        },
        {
          title: "Livraison et monitoring",
          description:
            "Code source, prompts versionnés et dashboards de monitoring (taux d'erreur, latence p95, coût par utilisateur).",
        },
      ],
    },
    fullStackContext: {
      title: "OpenAI dans la stack Vizion Web",
      description:
        "L'API OpenAI s'appelle depuis nos backends Node.js (souvent Next.js Server Actions ou routes API), avec stockage des conversations dans PostgreSQL via Supabase. Pour le RAG, nous combinons OpenAI embeddings + Supabase pgvector. Le front React/Next.js consomme les réponses en streaming via Server-Sent Events. Le tout est hébergé sur Vercel pour bénéficier de l'edge runtime sur les routes critiques.",
    },
    examples: {
      title: "Exemples de projets OpenAI",
      items: [
        {
          title: "Agent commercial pour un éditeur SaaS",
          description:
            "Un éditeur SaaS de gestion de stock voulait offrir un assistant IA capable de répondre aux questions métier de ses utilisateurs (clôture mensuelle, écritures d'inventaire). Intégration d'un modèle GPT avec RAG sur la documentation produit et function calling pour exécuter des actions dans l'app. Livré en 4 semaines.",
        },
        {
          title: "Extraction automatique de factures fournisseurs",
          description:
            "Une PME industrielle recevait 200 factures PDF par mois en saisie manuelle. Pipeline GPT vision qui extrait les lignes, totaux et numéros de TVA, push direct dans leur ERP via API. ROI atteint en 2 mois sur le temps comptable économisé.",
        },
        {
          title:
            "Génération de fiches produits multilingues pour un e-commerce",
          description:
            "Un e-commerçant avec 8 000 références voulait générer des descriptions SEO en français, anglais et espagnol. Pipeline GPT économique avec contraintes de longueur, mots-clés imposés et ton de marque. Coût API maîtrisé grâce au modèle léger et au prompt caching.",
        },
      ],
    },
    limits: {
      title: "Limites et pièges courants",
      points: [
        "Les coûts API peuvent grimper vite si le volume explose : un agent conversationnel à fort trafic sans cache prompt voit sa facture mensuelle s'envoler. Prévoir le caching et le monitoring des coûts dès le départ.",
        "La latence reste un sujet : les modèles GPT tournent en 2 à 4 secondes sur des prompts longs, les modèles de la série o peuvent prendre 30 secondes à 2 minutes. Pas adapté au temps réel sub-seconde.",
        "Dépendance fournisseur : OpenAI peut changer de pricing, déprécier un modèle ou imposer du rate limiting. Prévoir une couche d'abstraction pour basculer vers Claude ou Mistral si besoin.",
        "Hallucinations résiduelles : même avec du RAG bien fait, les modèles peuvent inventer. Toute action critique doit avoir un humain dans la boucle ou des garde-fous métier.",
      ],
    },
    performance: {
      title: "Performance et SEO",
      description:
        "Côté performance applicative, le streaming SSE permet d'afficher les premiers tokens en moins d'une seconde, ce qui améliore drastiquement le ressenti utilisateur. Pour le SEO, attention à ne pas exposer du contenu généré par IA non relu sur des pages indexables : Google sanctionne le contenu massivement automatisé sans valeur ajoutée. Notre approche : génération assistée + relecture humaine sur les pages clés.",
    },
    cost: {
      title: "Combien coûte un projet OpenAI ?",
      description:
        "Chaque projet OpenAI est conçu sur-mesure : pas de tarif standard. Le pricing dépend du périmètre (chatbot simple, RAG sur base documentaire, extraction vision, multi-agents), du modèle choisi, du volume mensuel attendu et du niveau d'intégration aux outils existants. Hors coûts d'API qui restent à votre charge en production. Devis chiffré sous 24h après cadrage.",
    },
    faqs: [
      {
        q: "Quels modèles OpenAI utilisez-vous concrètement ?",
        a: "On choisit selon le cas d'usage. Les modèles GPT généralistes (multimodaux texte/image/audio) couvrent 80 % des besoins : chatbots, extraction, résumés, génération de contenu. Les modèles GPT économiques servent pour les volumes massifs à coût réduit. La série o (modèles de raisonnement) est réservée au code complexe, à l'analyse profonde et à la planification multi-étapes. GPT Image pour la génération d'images, Whisper pour la transcription.",
      },
      {
        q: "GPT ou série o : quelle différence ?",
        a: "Les modèles GPT répondent vite (1 à 4 secondes), sont multimodaux et conviennent à la majorité des usages produits. La série o est conçue pour le raisonnement complexe : elle « réfléchit » plus longtemps (10 secondes à 2 minutes), coûte plus cher au token mais surperforme sur le code, les maths, la planification. On utilise GPT pour 80 % du flux et on bascule sur la série o quand c'est nécessaire.",
      },
      {
        q: "Combien coûte une intégration OpenAI ?",
        a: "Chaque intégration est sur-mesure : pas de tarif standard. Le pricing dépend du périmètre (chatbot simple, RAG sur base interne, extraction documentaire), du volume d'appels API mensuel et du niveau d'intégration aux outils existants. Devis chiffré sous 24h après cadrage.",
      },
      {
        q: "Mes données sont-elles utilisées pour entraîner les modèles ?",
        a: "Non, par défaut sur l'API OpenAI les données ne sont pas utilisées pour l'entraînement (à différencier de ChatGPT grand public). Vous pouvez aussi signer un BAA pour les usages santé US ou utiliser Azure OpenAI pour un hébergement européen.",
      },
      {
        q: "Comment éviter que les coûts API explosent ?",
        a: "Trois leviers. Router les requêtes simples vers les modèles GPT économiques (jusqu'à 30 fois moins chers que les modèles haut de gamme). Activer le prompt caching sur les contextes répétés. Mettre en place des quotas par utilisateur ou par mois. Un dashboard de coûts est livré avec chaque projet.",
      },
    ],
    cta: {
      title: "Un cas d'usage avec un LLM à valider ?",
      description:
        "En 30 minutes, on cadre votre projet et on chiffre sous 24h. On regarde votre cas d'usage et on vous dit ce qu'on peut livrer en 3 à 8 semaines.",
    },
  },

  // ==========================================================================
  // 2. SUPABASE
  // ==========================================================================
  {
    slug: "agence-supabase",
    technoName: "Supabase",
    category: "backend",
    meta: {
      title:
        "Agence Supabase : Auth, Postgres, Realtime, pgvector | Vizion Web",
      description:
        "Agence Supabase à Montpellier. Auth, PostgreSQL managé, storage, realtime, edge functions. Stack moderne SaaS. Devis sous 24h, MVP en 3 semaines.",
      canonical: "https://vizionweb.fr/agence-supabase",
    },
    hero: {
      headline:
        "Agence Supabase : backend Postgres, Auth et Realtime pour vos SaaS",
      subheadline:
        "On développe vos applications SaaS sur Supabase : Postgres managé, auth, storage, realtime et pgvector pour le RAG.",
    },
    whyTechno: {
      title: "Pourquoi Supabase pour votre backend",
      paragraphs: [
        "Supabase est l'alternative open-source à Firebase, avec un vrai PostgreSQL en dessous. Vous récupérez l'écosystème SQL complet (jointures, triggers, vues, extensions) sans renoncer à la rapidité d'un BaaS.",
        "Tout ce qu'il faut pour un SaaS moderne est inclus : auth (email, magic link, OAuth), Row Level Security pour le multi-tenant, storage S3-compatible, realtime sur les changements de table, edge functions Deno et pgvector pour les embeddings IA. Supabase est aussi self-hostable, ce qui sécurise la portabilité du backend pour les projets B2B.",
      ],
    },
    whenToUse: {
      title: "Quand utiliser Supabase",
      points: [
        {
          title: "SaaS avec auth et multi-tenant",
          description:
            "Vous lancez un SaaS et vous voulez aller vite sur l'authentification, les permissions multi-tenant et la base de données.",
        },
        {
          title: "Fonctionnalités realtime",
          description:
            "Vous avez besoin de fonctionnalités realtime : collaboration live, dashboards qui se mettent à jour, notifications push.",
        },
        {
          title: "RAG et recherche sémantique",
          description:
            "Votre application IA nécessite un stockage vectoriel pour du RAG ou de la recherche sémantique : pgvector est intégré.",
        },
        {
          title: "Postgres managé avec portabilité",
          description:
            "Vous voulez un backend Postgres managé sans gérer un Heroku ou un RDS, avec la possibilité de récupérer la base à tout moment.",
        },
        {
          title: "MVP sans surinvestir en DevOps",
          description:
            "Vous bâtissez un MVP et vous cherchez à valider sans surinvestir en infra DevOps.",
        },
      ],
    },
    whenNotToUse: {
      title: "Quand Supabase n'est pas adapté",
      points: [
        {
          title: "Souveraineté ultra-stricte",
          description:
            "Vous avez des contraintes type SecNumCloud ou hébergement de données de santé françaises : regardez OVH Cloud Postgres ou Scaleway.",
        },
        {
          title: "Volumes ultra-massifs et SLA 99,99 %",
          description:
            "Vous attendez plusieurs millions de requêtes par seconde avec des SLA 99,99 % : une infra cloud dédiée AWS/GCP avec équipe SRE dédiée fait plus de sens.",
        },
        {
          title: "Application statique sans base",
          description:
            "Votre application est purement statique et n'a pas besoin de base de données : Supabase serait du sur-engineering.",
        },
        {
          title: "Data warehouse en place",
          description:
            "Vous êtes une grande entreprise avec un Snowflake ou BigQuery déjà déployé : Supabase ne remplace pas un data warehouse.",
        },
      ],
    },
    ourApproach: {
      title: "Notre approche Supabase",
      description:
        "Nous démarrons par un schéma de base de données pensé multi-tenant dès le jour 1. Row Level Security activé sur toutes les tables, policies écrites en SQL versionné, migrations gérées via la CLI Supabase. Pas de schéma improvisé qu'il faudra refaire dans 6 mois.\n\nL'authentification est mise en place avec les providers que vous voulez (email, Google, GitHub, SAML pour l'entreprise). Pour le multi-tenant B2B, nous structurons les organisations, rôles et invitations dès le MVP. Les edge functions sont utilisées pour la logique sensible qui ne doit pas tourner côté client.\n\nÀ la livraison, vous avez accès complet au projet Supabase, aux migrations SQL, à la documentation des policies RLS et à un script de seed pour les environnements de staging.",
      phases: [
        {
          title: "Schéma multi-tenant dès le jour 1",
          description:
            "Conception de la base pensée multi-tenant, Row Level Security activé sur toutes les tables, policies SQL versionnées et migrations gérées via la CLI Supabase.",
        },
        {
          title: "Authentification et organisations",
          description:
            "Mise en place des providers (email, Google, GitHub, SAML), structure organisations + rôles + invitations dès le MVP pour le multi-tenant B2B.",
        },
        {
          title: "Logique serveur sensible",
          description:
            "Edge functions Deno pour la logique métier qui ne doit pas tourner côté client : webhooks Stripe, traitement de fichiers, appels IA sécurisés.",
        },
        {
          title: "Livraison et handoff",
          description:
            "Accès complet au projet Supabase, migrations SQL, documentation des policies RLS, script de seed pour les environnements de staging.",
        },
      ],
    },
    fullStackContext: {
      title: "Supabase dans la stack Vizion Web",
      description:
        "Supabase est notre backend par défaut sur les projets SaaS. Le front Next.js consomme Supabase via le SDK officiel ou en SSR avec les Server Components. Pour les fonctionnalités IA, nous combinons Supabase pgvector + OpenAI ou Claude embeddings. Hébergement front sur Vercel, backend Supabase sur leur cloud (région Europe). TypeScript de bout en bout avec types générés automatiquement depuis le schéma Postgres.",
    },
    examples: {
      title: "Exemples de projets Supabase",
      items: [
        {
          title: "MVP SaaS pour une startup HR-Tech",
          description:
            "Une startup RH lançait un outil de suivi d'onboarding salarié. Setup Supabase complet en semaine 1 (auth, schéma multi-tenant, RLS), front Next.js en semaines 2-3. MVP livré en 3 semaines, 50 entreprises utilisatrices au bout de 4 mois.",
        },
        {
          title: "Outil interne collaboratif avec realtime",
          description:
            "Une PME du BTP voulait remplacer un tableur partagé par un outil de planning chantier multi-utilisateurs. Realtime Supabase pour la synchro live, RLS pour cloisonner par chantier, storage pour les photos terrain. Adoption immédiate par les équipes.",
        },
        {
          title: "Moteur de recherche sémantique pour un éditeur SaaS",
          description:
            "Un éditeur SaaS juridique voulait offrir une recherche sémantique sur sa base documentaire. Pipeline OpenAI embeddings + Supabase pgvector + UI Next.js. 200 000 documents indexés, recherche sub-200ms.",
        },
      ],
    },
    limits: {
      title: "Limites et pièges courants",
      points: [
        "Les performances de pgvector sont bonnes jusqu'à quelques millions de vecteurs. Au-delà, il faut envisager Pinecone, Qdrant ou Weaviate.",
        "Le tier gratuit met en pause les projets après une semaine d'inactivité. Pas un souci en prod, mais à connaître pour les environnements de staging peu utilisés.",
        "Les edge functions Supabase tournent sur Deno, pas Node. Certains packages npm ne sont pas compatibles directement.",
        "Le support standard Supabase répond en 24-48h. Pour des SLA serrés, il faut passer en plan Team ou Enterprise.",
      ],
    },
    performance: {
      title: "Performance et SEO",
      description:
        "Avec Supabase + Next.js, vous avez une stack rapide nativement : le SDK Supabase tourne côté Server Components, les pages sont rendues HTML côté serveur et indexables sans souci par Google. Pour les apps avec beaucoup de contenu public, l'ISR de Next.js combiné aux requêtes Supabase permet d'afficher des pages en moins de 200ms tout en gardant la donnée fraîche. Côté Core Web Vitals, le LCP descend facilement sous 1,5s.",
    },
    cost: {
      title: "Combien coûte un projet Supabase ?",
      description:
        "Chaque projet Supabase est conçu sur-mesure : pas de tarif standard. Le pricing dépend du périmètre (MVP SaaS, app interne collaborative, RAG sur pgvector), du modèle multi-tenant éventuel et du niveau d'intégration aux outils existants. Hors coûts d'hébergement Supabase qui restent à votre charge en production. Devis chiffré sous 24h après cadrage.",
    },
    faqs: [
      {
        q: "Supabase ou Firebase : lequel choisir ?",
        a: "Supabase si vous voulez du SQL standard, des jointures, du RLS et la possibilité de récupérer votre base. Firebase si vous restez dans l'écosystème Google et que le NoSQL vous convient. Pour un SaaS avec données relationnelles, Supabase est en général le bon choix.",
      },
      {
        q: "Supabase est-il hébergé en Europe ?",
        a: "Oui, vous pouvez choisir la région Frankfurt ou Paris à la création du projet. Les données restent dans l'Union européenne. Pour les exigences SecNumCloud en revanche, il faut s'orienter vers OVH ou Scaleway.",
      },
      {
        q: "Peut-on faire du temps réel avec Supabase ?",
        a: "Oui. Supabase Realtime expose les changements de tables Postgres via websockets. Vous pouvez écouter les INSERT/UPDATE/DELETE et synchroniser plusieurs clients en moins de 100 ms. Idéal pour collaboration, dashboards live, notifications.",
      },
      {
        q: "Supabase peut-il servir un SaaS multi-tenant ?",
        a: "Oui, c'est l'un de ses points forts. Avec Row Level Security, vous écrivez des policies SQL qui filtrent automatiquement par organisation ou utilisateur. Pas de risque de fuite entre tenants si les policies sont bien écrites.",
      },
      {
        q: "Que se passe-t-il si je veux quitter Supabase ?",
        a: "Vous exportez votre base Postgres en standard pg_dump et vous la rejouez sur OVH, Scaleway, AWS RDS ou un Postgres self-hosté. Le code applicatif demande quelques ajustements (auth notamment), mais rien d'irréversible.",
      },
    ],
    cta: {
      title: "Un projet SaaS sur Supabase ?",
      description:
        "En 30 minutes, on cadre votre projet et on chiffre sous 24h. On regarde votre besoin backend et on vous dit ce qu'on peut livrer en 3 à 8 semaines.",
    },
  },

  // ==========================================================================
  // 3. CLAUDE API
  // ==========================================================================
  {
    slug: "agence-claude-api",
    technoName: "Claude",
    category: "ia",
    meta: {
      title: "Agence Claude : intégration Claude | Vizion Web",
      description:
        "Agence Claude à Montpellier. Intégration Claude et Opus dans vos apps métier B2B. Devis sous 24h, MVP livré en 3 semaines.",
      canonical: "https://vizionweb.fr/agence-claude-api",
    },
    hero: {
      headline:
        "Agence spécialisée en LLM : intégration de Claude dans vos apps web",
      subheadline:
        "On intègre l'API Claude dans vos applications métier critiques : raisonnement long, génération de code, agents avec tools, extraction documentaire.",
    },
    whyTechno: {
      title: "Pourquoi Claude pour vos applications IA",
      paragraphs: [
        "Claude (la famille de modèles d'Anthropic) s'est imposée comme la référence sur les tâches de raisonnement long, l'analyse de code et les agents B2B critiques. Les modèles Claude surperforment régulièrement les modèles GPT sur les benchmarks de coding (SWE-bench) et les tâches structurées en plusieurs étapes. Trois sous-familles : Claude Opus pour les cas les plus complexes, Claude Sonnet pour l'équilibre performance/coût, Claude Haiku pour la vitesse et le volume.",
        "L'API Anthropic propose des features qui font la différence en production : prompt caching natif (jusqu'à 90% d'économie sur les contextes répétés), context window de 200 000 tokens (jusqu'à 1 million en mode étendu), tool use stable et sortie structurée fiable. Pour les agents qui orchestrent plusieurs outils, c'est aujourd'hui la stack la plus fiable du marché.",
      ],
    },
    whenToUse: {
      title: "Quand utiliser Claude",
      points: [
        {
          title: "Agent qui raisonne en plusieurs étapes",
          description:
            "Vous bâtissez un agent qui doit raisonner sur des tâches complexes en plusieurs étapes : revue de contrat, audit de code, analyse financière.",
        },
        {
          title: "Documents longs sans découpage",
          description:
            "Vous traitez des documents longs (rapports 100+ pages, codes sources entiers) et vous avez besoin d'un context window large sans découper artificiellement.",
        },
        {
          title: "Agents avec tool use intensif",
          description:
            "Vous développez des agents avec tool use intensif : recherche, calculs, appels d'API métier orchestrés par le modèle.",
        },
        {
          title: "Raisonnement structuré et fiable",
          description:
            "Votre cas d'usage demande un raisonnement structuré et fiable : génération de code production, extraction de clauses juridiques, classification fine.",
        },
        {
          title: "Stratégie multi-modèles",
          description:
            "Vous avez déjà des modèles GPT en place et vous voulez du multi-modèle : Claude pour le raisonnement et le code, GPT économique pour les tâches simples massives.",
        },
      ],
    },
    whenNotToUse: {
      title: "Quand Claude n'est pas adapté",
      points: [
        {
          title: "Vision multimodale poussée",
          description:
            "Votre cas d'usage demande de la vision multimodale poussée (analyse vidéo temps réel) : les modèles GPT ou Gemini sont mieux outillés sur ce terrain.",
        },
        {
          title: "Génération d'image ou audio",
          description:
            "Vous avez besoin de génération d'image ou audio : Claude ne le fait pas, il faut un autre fournisseur (GPT Image pour les images, Whisper pour la transcription).",
        },
        {
          title: "Coût par token le plus bas",
          description:
            "Vous cherchez le coût absolu le plus bas par token : les modèles GPT économiques ou Mistral sont moins chers sur les tâches simples à fort volume.",
        },
        {
          title: "Fine-tuning custom",
          description:
            "Vous voulez du fine-tuning custom : Anthropic ne propose pas de fine-tuning ouvert au public, uniquement du prompting et du caching.",
        },
      ],
    },
    ourApproach: {
      title: "Notre approche Claude",
      description:
        "On commence par benchmarker votre cas d'usage sur Claude et au moins un modèle alternatif (souvent GPT). Le but : choisir avec des données réelles, pas avec un avis de blog tech. Sur les tâches de raisonnement et de code, Claude gagne souvent. Sur les tâches simples massives, c'est moins clair.\n\nLe développement utilise systématiquement le prompt caching d'Anthropic dès qu'il y a un contexte stable (system prompt long, base documentaire répétée). Cela divise la facture par 5 à 10 sur les usages typiques d'agent. Tool use géré via le SDK officiel Anthropic, avec validation des schémas JSON côté serveur.\n\nÀ la livraison, vous avez le code source, les prompts versionnés en markdown, le monitoring des coûts par feature et la documentation des outils exposés à l'agent.",
      phases: [
        {
          title: "Benchmark sur votre cas d'usage",
          description:
            "Comparaison Claude vs au moins un modèle alternatif (souvent un modèle GPT) sur vos données réelles. Le choix se fait sur des résultats mesurés, pas sur un avis de blog tech.",
        },
        {
          title: "Prompt caching systématique",
          description:
            "Mise en cache des contextes stables (system prompt long, base documentaire répétée) pour diviser la facture par 5 à 10 sur les usages typiques d'agent.",
        },
        {
          title: "Tool use et validation serveur",
          description:
            "Tool use géré via le SDK officiel Anthropic, validation des schémas JSON côté serveur pour fiabiliser les appels d'outils.",
        },
        {
          title: "Livraison et monitoring",
          description:
            "Code source, prompts versionnés en markdown, monitoring des coûts par feature et documentation des outils exposés à l'agent.",
        },
      ],
    },
    fullStackContext: {
      title: "Claude dans la stack Vizion Web",
      description:
        "L'API Anthropic s'appelle depuis nos backends Node.js/TypeScript, généralement dans des routes Next.js ou des edge functions Supabase. Le streaming est consommé en SSE côté client React. Pour les agents avec mémoire, nous stockons les conversations dans PostgreSQL (Supabase) et utilisons pgvector pour les recherches sémantiques entre sessions. Hébergement Vercel pour bénéficier de l'edge runtime sur les routes IA.",
    },
    examples: {
      title: "Exemples de projets Claude",
      items: [
        {
          title: "Assistant juridique pour un cabinet d'avocats",
          description:
            "Un cabinet d'avocats voulait un assistant capable de relire des contrats commerciaux et de pointer les clauses à risque. Claude + RAG sur la jurisprudence interne, prompt caching activé. 80% du temps de pré-revue économisé sur les contrats standards.",
        },
        {
          title: "Agent de revue de code pour une startup SaaS",
          description:
            "Une startup éditeur SaaS voulait automatiser la première passe de code review sur ses pull requests. Claude branché sur l'API GitHub, avec tools pour lire les fichiers, vérifier les tests et commenter directement la PR. Adoption immédiate par les devs.",
        },
        {
          title:
            "Extraction d'indicateurs financiers depuis des rapports annuels",
          description:
            "Un cabinet de M&A traitait manuellement des rapports annuels de 200+ pages. Pipeline Claude avec context window large pour ingérer le rapport entier et extraire les KPI structurés en JSON. Précision validée à 96% sur 50 rapports tests.",
        },
      ],
    },
    limits: {
      title: "Limites et pièges courants",
      points: [
        "Coût supérieur aux modèles GPT économiques sur les tâches simples : pour de la classification basique en volume, un modèle GPT léger reste plus économique.",
        "Latence plus élevée sur les très longs contextes : un prompt de 150 000 tokens peut prendre 15 à 30 secondes en réponse complète.",
        "Pas de génération d'image, d'audio ou de vidéo. Claude est text-first (avec vision sur images en input uniquement).",
        "Rate limits initiaux assez bas sur les comptes neufs : prévoir le ramp-up auprès du support Anthropic si vous lancez du volume.",
      ],
    },
    performance: {
      title: "Performance et SEO",
      description:
        "Claude délivre du streaming token par token, ce qui permet d'afficher les premiers mots en moins d'une seconde côté front. Avec le prompt caching, la latence sur les requêtes répétées chute drastiquement (jusqu'à 85% plus rapide selon les benchmarks Anthropic). Côté SEO, les mêmes règles s'appliquent que pour les autres modèles : tout contenu généré indexé doit être relu par un humain et apporter une valeur réelle par rapport à ce qui existe déjà sur le web.",
    },
    cost: {
      title: "Combien coûte un projet Claude ?",
      description:
        "Chaque projet Claude est conçu sur-mesure : pas de tarif standard. Le pricing dépend du périmètre (agent métier simple, agent avec tool use et RAG, extraction documentaire industrielle), du volume mensuel attendu et du niveau d'intégration aux outils existants. Hors coûts d'API qui restent à votre charge en production. Devis chiffré sous 24h après cadrage.",
    },
    faqs: [
      {
        q: "Quels modèles Claude utilisez-vous concrètement ?",
        a: "On choisit selon le cas d'usage. Claude Opus pour les tâches les plus complexes : raisonnement multi-étapes, analyse juridique fine, code critique. Claude Sonnet pour l'équilibre performance/coût : agents B2B, extraction documentaire, génération structurée. Claude Haiku pour les tâches simples à fort volume où la vitesse compte.",
      },
      {
        q: "Claude ou GPT : lequel choisir ?",
        a: "Claude excelle sur le raisonnement long, le code et les agents B2B critiques. Les modèles GPT d'OpenAI couvrent un périmètre plus large (vision, audio, image, écosystème) et sont souvent moins chers sur les tâches simples. Beaucoup de projets sérieux utilisent les deux : Claude pour le raisonnement, un GPT économique pour le volume.",
      },
      {
        q: "Combien coûte une intégration Claude ?",
        a: "Chaque intégration est sur-mesure : pas de tarif standard. Le pricing dépend du périmètre (agent simple, agent avec tools et RAG, extraction documentaire), du volume d'appels API mensuel et du niveau d'intégration aux outils existants. Devis chiffré sous 24h après cadrage.",
      },
      {
        q: "Comment fonctionne le prompt caching ?",
        a: "Vous marquez les blocs de prompt qui ne changent pas (system prompt, documentation, exemples) avec un cache_control. Anthropic les met en cache 5 minutes par défaut (1h en option). Les hits coûtent 10 % du prix normal. Sur un agent typique, cela divise la facture par 5 à 10.",
      },
      {
        q: "Mes données entraînent-elles les modèles ?",
        a: "Non, par défaut sur l'API Anthropic les données ne sont pas utilisées pour l'entraînement. Anthropic propose aussi des accords de confidentialité spécifiques et un déploiement via AWS Bedrock ou Google Vertex pour la résidence de données.",
      },
    ],
    cta: {
      title: "Un projet IA qui demande du raisonnement solide ?",
      description:
        "En 30 minutes, on cadre votre projet et on chiffre sous 24h. Agent, code review, analyse documentaire ou tool use : on vous dit ce qui tient en 3 à 8 semaines.",
    },
  },

  // ==========================================================================
  // 4. NEXT.JS
  // ==========================================================================
  {
    slug: "agence-next-js",
    technoName: "Next.js",
    category: "frontend",
    meta: {
      title:
        "Agence Next.js : sites et apps performants App Router | Vizion Web",
      description:
        "Agence Next.js à Montpellier. Sites web et apps SaaS sur Next.js App Router, Server Components, Vercel. Devis sous 24h, MVP livré en 3 semaines.",
      canonical: "https://vizionweb.fr/agence-next-js",
    },
    hero: {
      headline: "Agence Next.js : sites et apps performants en App Router",
      subheadline:
        "On développe vos sites et applications web sur Next.js : App Router, Server Components, SEO natif et déploiement Vercel.",
    },
    whyTechno: {
      title: "Pourquoi Next.js pour votre site ou application",
      paragraphs: [
        "Next.js est le framework React de référence pour la production. App Router, Server Components, Server Actions et streaming SSR permettent de construire des applications rapides nativement, sans empiler 5 librairies pour l'auth, le routing et le data-fetching.",
        "Côté SEO, Next.js est un cran au-dessus des SPA classiques. Le HTML est rendu côté serveur, indexable immédiatement, avec des Core Web Vitals qui passent au vert sans bricolage. Le déploiement Vercel ajoute preview URL par PR, edge runtime mondial et ISR pour scaler sans équipe DevOps.",
      ],
    },
    whenToUse: {
      title: "Quand utiliser Next.js",
      points: [
        {
          title: "Site vitrine ou e-commerce à fort SEO",
          description:
            "Vous avez besoin d'un site vitrine ou e-commerce qui doit ranker fort en SEO et tenir des pics de trafic.",
        },
        {
          title: "SaaS avec marketing et app dans le même repo",
          description:
            "Vous lancez un SaaS et vous voulez la même base de code pour le marketing public et l'app authentifiée.",
        },
        {
          title: "Beaucoup de contenu dynamique",
          description:
            "Votre projet a beaucoup de contenu dynamique (blog, catalogue produit, marketplace) et vous voulez tirer parti de l'ISR.",
        },
        {
          title: "Framework moderne avec écosystème mature",
          description:
            "Vous voulez un framework moderne avec un écosystème mature : auth, ORM, paiement, analytics, le tout intégré.",
        },
        {
          title: "Projet qui doit scaler dans le temps",
          description:
            "Vous prévoyez de scaler progressivement et vous ne voulez pas réécrire dans 18 mois.",
        },
      ],
    },
    whenNotToUse: {
      title: "Quand Next.js n'est pas adapté",
      points: [
        {
          title: "Site statique de quelques pages",
          description:
            "Vous avez un site purement statique de 5 pages sans contenu dynamique : un Astro ou même un site HTML/CSS classique sera plus simple.",
        },
        {
          title: "Dashboard SaaS lourd sans SEO",
          description:
            "Vous bâtissez un dashboard 100% derrière login, sans aucun besoin SEO : un setup React + Vite + backend séparé peut être plus rapide à itérer.",
        },
        {
          title: "Équipe formée à un autre framework",
          description:
            "Votre équipe interne maîtrise déjà Vue, Svelte ou Angular et n'a pas la bande passante pour apprendre l'écosystème React.",
        },
        {
          title: "Besoin d'une app mobile native",
          description:
            "Vous avez besoin d'une app mobile native : Next.js est pour le web. Pour mobile, regardez React Native ou Flutter.",
        },
      ],
    },
    ourApproach: {
      title: "Notre approche Next.js",
      description:
        "Nous démarrons sur Next.js avec l'App Router par défaut. Server Components partout où c'est pertinent, Client Components uniquement où l'interactivité l'exige. Cette discipline garde le bundle JavaScript léger et le LCP sous la seconde sur la majorité des pages.\n\nLe SEO est traité dès le sprint 1 : metadata API, sitemap dynamique, balises Open Graph, Schema.org structuré, redirections 301 propres. Le tout testé sur Lighthouse et PageSpeed Insights avant chaque release. Pour le contenu, nous utilisons soit MDX local, soit un CMS headless (Sanity, Contentlayer, Strapi) selon la volumétrie.\n\nDéploiement sur Vercel avec preview URL automatique par PR. Vous validez chaque feature en pré-prod avant merge. À la livraison, vous récupérez le repo Git complet, la doc d'architecture et les credentials Vercel.",
      phases: [
        {
          title: "App Router et Server Components par défaut",
          description:
            "On démarre sur l'App Router. Server Components partout où c'est pertinent, Client Components uniquement où l'interactivité l'exige. Bundle JavaScript léger, LCP sous la seconde sur la majorité des pages.",
        },
        {
          title: "SEO traité dès le sprint 1",
          description:
            "Metadata API, sitemap dynamique, balises Open Graph, Schema.org structuré, redirections 301 propres. Le tout testé sur Lighthouse et PageSpeed Insights avant chaque release.",
        },
        {
          title: "Contenu et CMS adaptés au volume",
          description:
            "MDX local pour le contenu statique, ou CMS headless (Sanity, Contentlayer, Strapi) selon la volumétrie et qui édite. On vous oriente au cadrage selon votre équipe.",
        },
        {
          title: "Déploiement Vercel et handoff complet",
          description:
            "Preview URL automatique par pull request, validation en pré-prod avant merge. À la livraison : repo Git, documentation d'architecture, credentials Vercel.",
        },
      ],
    },
    fullStackContext: {
      title: "Next.js dans la stack Vizion Web",
      description:
        "Next.js est notre framework front par défaut. Il s'interface avec Supabase pour l'auth et la base de données, avec OpenAI ou Claude pour les fonctionnalités IA, et avec Stripe pour le paiement. TypeScript de bout en bout, Tailwind CSS pour le styling, hébergement Vercel. Pour les apps complexes, nous combinons Next.js (marketing + app) et un backend Node.js séparé via Server Actions.",
    },
    examples: {
      title: "Exemples de projets Next.js",
      items: [
        {
          title: "Site vitrine + blog SEO pour une PME industrielle",
          description:
            "Une PME industrielle voulait remplacer son WordPress lent par un site rapide et bien rankeur. Migration vers Next.js + Sanity CMS, Lighthouse à 98, trafic SEO multiplié par 2,3 en 8 mois sans changer la stratégie de contenu.",
        },
        {
          title: "MVP SaaS HR-Tech",
          description:
            "Une startup HR-Tech a lancé son MVP en 3 semaines : Next.js App Router pour le front public + l'app authentifiée, Supabase en backend, Stripe pour le paiement. Premier client signé deux semaines après la mise en ligne.",
        },
        {
          title: "Marketplace B2B avec catalogue dynamique",
          description:
            "Un éditeur lançait une marketplace B2B avec 5 000 fiches produits. Next.js + ISR pour la fraîcheur des prix, recherche full-text sur Postgres, paiement intégré. Pages produits indexées en 48h après la mise en ligne.",
        },
      ],
    },
    limits: {
      title: "Limites et pièges courants",
      points: [
        "L'App Router introduit une courbe d'apprentissage non triviale : Server Components vs Client Components, caching agressif par défaut, mental model différent du Pages Router historique.",
        "Le caching Next.js peut devenir un casse-tête : data stale, invalidations à gérer manuellement avec revalidateTag/revalidatePath. À cadrer dès le départ.",
        "Vercel peut devenir cher au-delà de 1M de requêtes/mois. Pour les projets à fort trafic, regarder l'auto-hébergement ou Cloudflare Pages.",
        "Pour des apps purement client lourdes (éditeur 3D, IDE web), un setup Vite + React peut être plus performant et plus simple à débugger.",
      ],
    },
    performance: {
      title: "Performance et SEO",
      description:
        "Next.js bien configuré atteint des scores Lighthouse 95+ sans difficulté. Le LCP descend sous 1,5s grâce au streaming SSR et à l'optimisation automatique des images via le composant next/image. Pour le SEO, le HTML rendu côté serveur est crawlé immédiatement par Googlebot, contrairement aux SPA pure-client qui dépendent du JS rendering.\n\nL'ISR permet de servir des pages quasi-statiques avec une fraîcheur maîtrisée (revalidation toutes les X minutes ou à la demande), ce qui combine vitesse de site statique et données à jour.",
    },
    cost: {
      title: "Combien coûte un projet Next.js ?",
      description:
        "Chaque projet Next.js est conçu sur-mesure : pas de tarif standard. Le pricing dépend du périmètre (site vitrine + blog + SEO, app authentifiée avec paiement, SaaS multi-tenant), du nombre de fonctionnalités custom et du niveau d'intégration aux outils existants. Hors coûts d'hébergement (Vercel ou autre) qui restent à votre charge en production. Devis chiffré sous 24h après cadrage.",
    },
    faqs: [
      {
        q: "Next.js ou Webflow : lequel choisir ?",
        a: "Webflow pour un site vitrine simple à éditer par une équipe non-tech, sans contraintes de perf extrême. Next.js dès que vous avez du contenu dynamique, des fonctionnalités custom (auth, paiement, IA) ou des objectifs SEO ambitieux. Next.js demande un développeur, Webflow non.",
      },
      {
        q: "Quelles performances et quel SEO attendre ?",
        a: "Next.js bien configuré atteint des scores Lighthouse 95+ sans difficulté. Le LCP descend sous 1,5 s grâce au streaming SSR et à l'optimisation automatique des images via next/image. Le HTML rendu côté serveur est crawlé immédiatement par Googlebot, contrairement aux SPA pure-client. L'ISR permet de servir des pages quasi-statiques avec une fraîcheur maîtrisée.",
      },
      {
        q: "Combien coûte un projet Next.js ?",
        a: "Chaque projet est sur-mesure : pas de tarif standard. Le pricing dépend du périmètre (site vitrine + blog + SEO, app authentifiée avec paiement, SaaS multi-tenant), du nombre de fonctionnalités custom et du niveau d'intégration aux outils existants. Hors coûts d'hébergement Vercel ou autre. Devis chiffré sous 24h après cadrage.",
      },
      {
        q: "App Router ou Pages Router : quelle différence ?",
        a: "Pages Router est l'ancien système, basé sur des routes fichiers et getServerSideProps/getStaticProps. App Router est le nouveau système avec Server Components, layouts imbriqués, streaming et Server Actions. Tous nos nouveaux projets utilisent l'App Router.",
      },
      {
        q: "Peut-on héberger Next.js ailleurs que sur Vercel ?",
        a: "Oui. Next.js tourne sur AWS, Cloudflare Pages, Netlify ou en self-hosted via Docker. Vercel reste le plus simple et le plus optimisé, mais aucun verrouillage technique ne vous force à y rester.",
      },
    ],
    cta: {
      title: "Un projet web qui demande de la performance ?",
      description:
        "En 30 minutes, on cadre votre projet et on chiffre sous 24h. Site vitrine SEO, MVP SaaS, marketplace B2B : on vous dit ce qui tient en 2 à 8 semaines.",
    },
  },

  // ==========================================================================
  // 5. REACT
  // ==========================================================================
  {
    slug: "agence-react",
    technoName: "React",
    category: "frontend",
    meta: {
      title: "Agence React JS : développement apps et dashboards | Vizion Web",
      description:
        "Agence React JS à Montpellier. Développement d'applications React, dashboards complexes, SPA. Devis chiffré sous 24h, MVP livré en 3 semaines.",
      canonical: "https://vizionweb.fr/agence-react",
    },
    hero: {
      headline: "Agence React JS : applications web, dashboards et SPA",
      subheadline:
        "On développe vos apps React, la librairie JavaScript de Meta : SPA, dashboards complexes, hooks avancés, Suspense.",
    },
    whyTechno: {
      title: "Pourquoi React pour votre application",
      paragraphs: [
        "React (la librairie JavaScript maintenue par Meta) reste la techno front la plus utilisée au monde. Son écosystème est immense : composants UI, gestion d'état, formulaires, charts, tables avancées. Pour recruter ou faire évoluer une équipe dev, c'est aussi le profil le plus disponible sur le marché français.",
        "React excelle sur les applications interactives complexes : dashboards de pilotage, éditeurs, interfaces métier. Vous trouvez tout l'outillage moderne : Zustand pour le state, TanStack Query pour le data-fetching, Tailwind pour le styling, Radix UI ou shadcn/ui pour les composants accessibles, Vite pour le build.",
      ],
    },
    whenToUse: {
      title: "Quand utiliser React (sans Next.js)",
      points: [
        {
          title: "Dashboard SaaS interne sans SEO",
          description:
            "Vous bâtissez un dashboard SaaS interne, 100% derrière authentification, sans besoin SEO : React + Vite suffit.",
        },
        {
          title: "Application métier interactive",
          description:
            "Vous développez une application métier complexe (éditeur, outil de configuration, interface industrielle) où l'interactivité prime.",
        },
        {
          title: "Module embarqué dans un legacy",
          description:
            "Vous embarquez React dans une application existante (Rails, Django, .NET) pour ajouter des modules interactifs progressifs.",
        },
        {
          title: "SPA pure consommant des APIs",
          description:
            "Vous voulez une SPA pure consommant des APIs REST ou GraphQL, avec un build léger et des temps de dev courts.",
        },
        {
          title: "Équipe déjà formée à React",
          description:
            "Votre équipe maîtrise déjà React et n'a pas besoin de la couche serveur de Next.js.",
        },
      ],
    },
    whenNotToUse: {
      title: "Quand React seul n'est pas adapté",
      points: [
        {
          title: "Projet avec besoin SEO fort",
          description:
            "Votre projet a un besoin SEO fort (site vitrine, blog, e-commerce public) : utilisez plutôt Next.js qui rend le HTML côté serveur.",
        },
        {
          title: "Contenu statique simple",
          description:
            "Vous voulez du contenu statique simple (5-10 pages, peu d'interactivité) : Astro ou un site HTML/CSS classique sera plus rapide.",
        },
        {
          title: "Besoin de Server Components ou ISR",
          description:
            "Vous avez besoin de Server Components, Server Actions ou ISR : c'est Next.js, pas React seul.",
        },
        {
          title: "Nouveau projet web public ambitieux",
          description:
            "Vous démarrez un nouveau projet web public ambitieux : Next.js est en général le meilleur point de départ, sauf cas particulier.",
        },
      ],
    },
    ourApproach: {
      title: "Notre approche React",
      description:
        "Sur les projets React pure (sans Next.js), nous partons sur Vite pour le build, TypeScript strict, Tailwind CSS et un router moderne (TanStack Router ou React Router 7). Pour la gestion d'état, nous évitons Redux sur les nouveaux projets et privilégions Zustand ou TanStack Query selon le besoin (état serveur vs état UI).\n\nLes composants sont structurés en feature-folders, avec une séparation claire entre composants présentationnels et logique métier. Nous utilisons Radix UI ou shadcn/ui comme socle accessible, puis customisons avec Tailwind. Tests unitaires Vitest sur la logique critique, tests d'intégration Playwright sur les parcours clés.\n\nLivraison continue via GitHub Actions, déploiement sur Vercel, Netlify ou Cloudflare Pages selon vos contraintes. Vous récupérez le repo, la doc d'architecture et un environnement de staging.",
      phases: [
        {
          title: "Stack moderne et typesafe",
          description:
            "Vite pour le build, TypeScript strict, Tailwind CSS, router moderne (TanStack Router ou React Router 7). Zustand ou TanStack Query selon le besoin d'état.",
        },
        {
          title: "Architecture en feature-folders",
          description:
            "Séparation claire entre composants présentationnels et logique métier. Socle accessible avec Radix UI ou shadcn/ui, customisé avec Tailwind.",
        },
        {
          title: "Tests unitaires et intégration",
          description:
            "Tests Vitest sur la logique critique, tests d'intégration Playwright sur les parcours clés pour fiabiliser les évolutions.",
        },
        {
          title: "Livraison continue",
          description:
            "GitHub Actions, déploiement sur Vercel, Netlify ou Cloudflare Pages selon vos contraintes. Repo, doc d'architecture et environnement de staging livrés.",
        },
      ],
    },
    fullStackContext: {
      title: "React dans la stack Vizion Web",
      description:
        "React est utilisé soit via Next.js (cas le plus fréquent), soit en SPA pure pour les apps internes. La stack typique : React + TypeScript + Tailwind + Supabase pour le backend + Vercel pour l'hébergement. Pour les fonctionnalités IA (assistants, agents), nous branchons OpenAI ou Claude. TanStack Query gère le data-fetching et le cache côté client.",
    },
    examples: {
      title: "Exemples de projets React",
      items: [
        {
          title: "Dashboard de pilotage pour une PME logistique",
          description:
            "Une PME logistique voulait visualiser ses tournées en temps réel. Dashboard React + TanStack Query + carte Mapbox + Supabase realtime. Adoption immédiate par les exploitants, gain de 30% sur le temps de réorganisation des tournées.",
        },
        {
          title: "Outil de configuration produit pour un industriel",
          description:
            "Un industriel voulait remplacer un Excel partagé par un configurateur produit interactif. App React (Vite) + Zustand pour le state, calculs de prix en temps réel, export PDF. Mise en prod en 6 semaines, utilisé quotidiennement par 40 commerciaux.",
        },
        {
          title: "Module React intégré dans un Symfony existant",
          description:
            "Un éditeur SaaS legacy voulait moderniser son module de planning sans tout réécrire. Composant React standalone embarqué dans l'app Symfony existante, communication via API REST. Livraison en 4 semaines, sans toucher au reste du back.",
        },
      ],
    },
    limits: {
      title: "Limites et pièges courants",
      points: [
        "React seul est purement client-side : sans rendu serveur, le SEO est difficile et le LCP initial plus lent. Pour le web public, partir sur Next.js dès le départ.",
        "Le choix d'écosystème peut être un piège : trop d'options (Redux, Zustand, MobX, Recoil, Jotai...), il faut trancher tôt sans s'éparpiller.",
        "Sans framework, vous gérez vous-même le routing, le data-fetching, le code splitting. Sur un MVP rapide, Next.js fait gagner 1-2 semaines.",
        "React Concurrent Features (Suspense, transitions) sont puissantes mais demandent une discipline pour ne pas créer de bugs subtils.",
      ],
    },
    performance: {
      title: "Performance et SEO",
      description:
        "Une SPA React pure pose des défis SEO réels : Googlebot exécute le JS mais avec une latence et des limites. Si votre app a des pages publiques à indexer, Next.js est meilleur. Côté performance applicative, en revanche, React + Vite produit des bundles légers, hot reload sub-100ms en dev, et des Core Web Vitals excellents une fois optimisé (code splitting, lazy loading, memoization ciblée).",
    },
    cost: {
      title: "Combien coûte un projet React ?",
      description:
        "Chaque projet React est conçu sur-mesure : pas de tarif standard. Le pricing dépend du périmètre (SPA + auth + dashboard, dashboard complexe avec charts et real-time, module embarqué dans un legacy), du niveau de complexité métier et de l'intégration aux outils existants. Devis chiffré sous 24h après cadrage.",
    },
    faqs: [
      {
        q: "React ou Next.js : lequel choisir ?",
        a: "Next.js pour tout projet web public ambitieux (site, e-commerce, SaaS marketing + app). React seul pour les dashboards 100 % authentifiés, les modules intégrés dans une app existante ou les outils internes sans contrainte SEO.",
      },
      {
        q: "Combien coûte une application React ?",
        a: "Chaque projet est sur-mesure : pas de tarif standard. Le pricing dépend du périmètre (SPA + auth + dashboard, dashboard complexe avec charts et real-time) et du niveau de complexité métier. Devis chiffré sous 24h après cadrage.",
      },
      {
        q: "React est-il bon pour le SEO ?",
        a: "Pas nativement. Une SPA React pure dépend du JavaScript rendering côté Googlebot, ce qui pose des soucis de latence et de couverture. Pour un projet SEO, partez sur Next.js qui rend le HTML côté serveur.",
      },
      {
        q: "React ou React Native : quelle différence ?",
        a: "React est la librairie pour le web (navigateur). React Native utilise les mêmes concepts mais cible mobile (iOS/Android natif). Le code n'est pas directement réutilisable entre les deux, mais les compétences le sont largement.",
      },
      {
        q: "Peut-on intégrer React dans une app existante ?",
        a: "Oui, c'est un usage très fréquent. Vous pouvez embarquer un composant React dans une page Symfony, Rails ou .NET sans tout réécrire. Idéal pour moderniser progressivement un legacy.",
      },
    ],
    cta: {
      title: "Une app React à développer ?",
      description:
        "En 30 minutes, on cadre votre projet et on chiffre sous 24h. Dashboard SaaS, outil métier ou module intégré dans un legacy : on vous dit ce qui tient en 2 à 8 semaines.",
    },
  },

  // ==========================================================================
  // 6. N8N
  // ==========================================================================
  {
    slug: "agence-n8n",
    technoName: "n8n",
    category: "ia",
    meta: {
      title:
        "Agence n8n : automatisation de workflows pour PME et startups | Vizion Web",
      description:
        "Agence n8n à Montpellier. Automatisation des process internes, sync CRM, alertes Slack, orchestration IA. Devis chiffré sous 24h.",
      canonical: "https://vizionweb.fr/agence-n8n",
    },
    hero: {
      headline: "Agence n8n : automatisation de vos workflows internes",
      subheadline:
        "On industrialise vos process avec n8n, l'alternative open-source à Zapier et Make : sync CRM, alertes Slack, scoring de leads, orchestration IA.",
    },
    whyTechno: {
      title: "Pourquoi n8n pour vos automatisations",
      paragraphs: [
        "n8n est l'alternative open-source à Zapier et Make. La grosse différence : vous pouvez l'auto-héberger sur votre serveur, ce qui rend la conformité RGPD plus simple, le pricing prévisible au volume et garantit que vous restez propriétaire de vos workflows.",
        "L'interface visuelle permet de chaîner des centaines d'outils (CRM, comptabilité, e-mail, IA) sans écrire de code, tout en gardant la possibilité d'ajouter des étapes JavaScript custom. Plus de 400 intégrations natives, dont OpenAI et Anthropic pour l'orchestration IA.",
      ],
    },
    whenToUse: {
      title: "Quand utiliser n8n",
      points: [
        {
          title: "Sync de données entre outils",
          description:
            "Vous synchronisez des données entre plusieurs outils (CRM, compta, e-mail, Slack) et la saisie manuelle pèse sur votre équipe.",
        },
        {
          title: "Qualification automatique de leads",
          description:
            "Vous voulez qualifier ou scorer vos leads automatiquement à partir d'un formulaire ou d'un appel d'API.",
        },
        {
          title: "Volume qui rend Zapier trop cher",
          description:
            "Vous gérez un volume d'automatisations qui rend Zapier ou Make trop chers au mois.",
        },
        {
          title: "Contraintes RGPD et auto-hébergement",
          description:
            "Vous avez des contraintes RGPD strictes et voulez auto-héberger vos workflows en France ou en Europe.",
        },
        {
          title: "Orchestration IA dans des workflows",
          description:
            "Vous voulez orchestrer des appels IA (classification, génération, extraction) dans un workflow visuel et lisible par toute l'équipe.",
        },
      ],
    },
    whenNotToUse: {
      title: "Quand n8n n'est pas adapté",
      points: [
        {
          title: "Seulement 1 ou 2 workflows simples",
          description:
            "Vous avez seulement 1 ou 2 workflows simples : Zapier reste plus rapide à mettre en place et plus pertinent à ce volume.",
        },
        {
          title: "Latence sub-seconde temps réel",
          description:
            "Vos automatisations demandent une latence sub-seconde temps réel : n8n n'est pas conçu pour ça, regardez un broker de messages.",
        },
        {
          title: "Aucune compétence technique en interne",
          description:
            "Votre équipe n'a aucune compétence technique et personne ne maintiendra l'instance auto-hébergée à long terme.",
        },
        {
          title: "Logique métier très complexe",
          description:
            "Vos workflows nécessitent une logique métier très complexe qui mérite un vrai backend custom plutôt qu'un outil low-code.",
        },
      ],
    },
    ourApproach: {
      title: "Notre approche n8n",
      description:
        "On démarre par un audit de vos process actuels : quels outils, quelles tâches répétitives, quels volumes mensuels. Cette cartographie permet de prioriser ce qui mérite vraiment d'être automatisé et de décider entre cloud officiel ou auto-hébergement.\n\nLe développement se fait workflow par workflow, avec des tests sur jeu de données réelles. Chaque workflow critique a une gestion d'erreurs explicite : retry automatique, alerte Slack ou e-mail en cas d'échec, log détaillé pour le debug. On forme votre équipe au fur et à mesure pour qu'elle puisse ajuster les workflows simples sans nous solliciter.\n\nÀ la livraison, vous avez accès complet à l'instance n8n (cloud ou serveur), la documentation des workflows, les credentials API et un dashboard de monitoring pour suivre l'exécution dans le temps.",
      phases: [
        {
          title: "Audit et cartographie des process",
          description:
            "Inventaire des outils, tâches répétitives, volumes mensuels. Priorisation de ce qui mérite vraiment d'être automatisé et choix entre cloud officiel ou auto-hébergement.",
        },
        {
          title: "Développement workflow par workflow",
          description:
            "Chaque workflow est conçu, testé sur jeu de données réelles, puis mis en preview. Pas de bascule en prod sans validation.",
        },
        {
          title: "Gestion d'erreurs et monitoring",
          description:
            "Retry automatique, alerte Slack ou e-mail en cas d'échec, logs détaillés pour le debug. Monitoring qui détecte les workflows en panne.",
        },
        {
          title: "Formation et autonomie",
          description:
            "Accès complet à l'instance n8n, documentation des workflows, credentials API et formation de votre équipe pour ajuster les workflows simples sans nous solliciter.",
        },
      ],
    },
    fullStackContext: {
      title: "n8n dans la stack Vizion Web",
      description:
        "n8n s'intègre avec les SaaS et outils métier qu'on développe : un webhook depuis votre app Next.js déclenche un workflow n8n, qui appelle Stripe ou Supabase, push un message Slack et envoie un e-mail via Brevo. Pour les workflows IA, on chaîne OpenAI ou Claude depuis n8n avec des entrées structurées (PDF, e-mails, formulaires) et on remonte les réponses dans votre CRM ou base de données.",
    },
    examples: {
      title: "Exemples de projets n8n",
      items: [
        {
          title: "Qualification automatique de leads pour un éditeur SaaS",
          description:
            "Un éditeur SaaS recevait 200 leads/mois via formulaire. Workflow n8n qui enrichit le lead via une API d'enrichissement, score automatiquement avec OpenAI, route vers HubSpot et envoie une alerte Slack aux commerciaux pour les leads chauds.",
        },
        {
          title: "Sync comptabilité pour un e-commerce B2B",
          description:
            "Un e-commerçant générait 300 commandes/mois et perdait 10h en saisie comptable. Workflow n8n qui récupère les commandes Shopify, génère les factures dans Pennylane et envoie un récap mensuel à l'expert-comptable.",
        },
        {
          title: "Extraction de PDF pour une PME industrielle",
          description:
            "Une PME recevait 150 factures fournisseurs PDF par mois. Workflow n8n qui détecte les nouveaux PDF dans Google Drive, passe le contenu à OpenAI Vision pour extraction structurée, push dans l'ERP via API et envoie un récap au responsable achats.",
        },
      ],
    },
    limits: {
      title: "Limites et pièges courants",
      points: [
        "L'auto-hébergement demande un minimum d'expertise DevOps : configuration, sauvegardes, mises à jour. Sans ça, le cloud officiel reste préférable pour démarrer.",
        "Les workflows complexes (50+ nodes) deviennent difficiles à débugger visuellement. Mieux vaut découper en sous-workflows réutilisables ou basculer sur un vrai backend custom.",
        "Le pricing du cloud n8n grimpe vite au-dessus de 5 000 exécutions par mois : c'est souvent le moment de basculer sur de l'auto-hébergement.",
        "Les coûts des API tierces (OpenAI, services d'enrichissement) restent à votre charge en plus du coût n8n. Prévoir le monitoring de ces coûts dès le départ.",
      ],
    },
    performance: {
      title: "Performance et fiabilité",
      description:
        "n8n auto-hébergé sur un serveur dédié traite plusieurs milliers d'exécutions par jour sans bronche. La fiabilité dépend surtout de la qualité de gestion des erreurs : retry exponentiel, dead letter queue, alertes Slack en cas d'échec critique. On configure aussi un monitoring (Sentry ou équivalent) pour les workflows qui ne tournent plus depuis X heures.",
    },
    cost: {
      title: "Combien coûte un projet n8n ?",
      description:
        "Chaque projet n8n est sur-mesure : pas de tarif standard. Le pricing dépend du nombre de workflows, de la complexité des intégrations (CRM, compta, IA), de la stratégie d'hébergement (cloud ou auto-hébergé) et du niveau de gestion d'erreurs souhaité. Hors coûts d'hébergement et d'API qui restent à votre charge en production. Devis chiffré sous 24h après cadrage.",
    },
    faqs: [
      {
        q: "n8n cloud ou auto-hébergé : lequel choisir ?",
        a: "Le cloud officiel est plus simple à démarrer : un compte, une URL, des workflows tournent. L'auto-hébergement demande un serveur (VPS, Docker, Kubernetes) mais devient moins cher au volume et permet de garder vos données en France ou en Europe pour la conformité RGPD. On vous oriente selon votre volume mensuel et vos contraintes.",
      },
      {
        q: "n8n peut-il remplacer Zapier ou Make ?",
        a: "Oui sur la plupart des cas d'usage. Zapier reste plus simple pour des automatisations triviales (1 ou 2 workflows). Au-delà de 10 workflows ou de quelques milliers d'exécutions par mois, n8n devient nettement plus rentable et flexible.",
      },
      {
        q: "Peut-on intégrer l'IA dans des workflows n8n ?",
        a: "Oui, c'est l'un des cas d'usage les plus courants. n8n a des nodes natifs pour OpenAI et Anthropic, qu'on chaîne avec des entrées (e-mails, PDF, formulaires) pour faire de la classification, de l'extraction ou de la génération automatique.",
      },
      {
        q: "Comment gérez-vous les erreurs et les pannes ?",
        a: "Chaque workflow critique a une gestion d'erreurs explicite : retry exponentiel, alerte Slack ou e-mail en cas d'échec, log détaillé pour le debug. On met aussi en place un monitoring qui détecte les workflows qui ne tournent plus depuis X heures.",
      },
      {
        q: "Mon équipe pourra-t-elle modifier les workflows ?",
        a: "Oui. L'interface visuelle de n8n permet à des profils non-développeurs de comprendre et d'ajuster les workflows simples. On forme votre équipe pendant le projet et on documente les workflows complexes.",
      },
    ],
    cta: {
      title: "Des process manuels à industrialiser ?",
      description:
        "En 30 minutes, on cadre votre projet et on chiffre sous 24h. On cartographie vos workflows manuels et on vous dit ce qu'on peut livrer en 1 à 4 semaines.",
    },
  },

  // ==========================================================================
  // 7. TYPESCRIPT
  // ==========================================================================
  {
    slug: "agence-typescript",
    technoName: "TypeScript",
    category: "frontend",
    meta: {
      title:
        "Agence TypeScript : développement typesafe pour startups et PME | Vizion Web",
      description:
        "Agence TypeScript à Montpellier. Développement SaaS, MVP et applications métier en TypeScript strict. Devis chiffré sous 24h.",
      canonical: "https://vizionweb.fr/agence-typescript",
    },
    hero: {
      headline: "Agence TypeScript : développement typesafe pour vos apps",
      subheadline:
        "On développe vos SaaS, MVP et applications métier en TypeScript strict : front-end React, backend Node.js, code maintenable et reprenable par n'importe quelle équipe.",
    },
    whyTechno: {
      title: "Pourquoi TypeScript pour vos applications",
      paragraphs: [
        "TypeScript ajoute un système de types à JavaScript : le compilateur attrape les erreurs avant qu'elles ne soient en production. Sur un MVP qui doit scaler, c'est la différence entre un produit qui tient en charge et un produit où chaque release casse trois features.",
        "L'écosystème front (React, Next.js, Vue) et back (Node.js, Bun, Deno) est intégralement typé. TypeScript est devenu le standard de facto en 2026. Le code écrit aujourd'hui en TS reste lisible et reprenable par n'importe quel développeur senior dans 3 ans.",
      ],
    },
    whenToUse: {
      title: "Quand utiliser TypeScript",
      points: [
        {
          title: "MVP qui doit pouvoir scaler",
          description:
            "Vous lancez un MVP qui doit pouvoir scaler en V1 et V2 sans tout réécrire.",
        },
        {
          title: "Logique métier complexe",
          description:
            "Votre application a une logique métier complexe avec des règles qui doivent rester cohérentes (calculs, droits, validations).",
        },
        {
          title: "Plusieurs développeurs dans la durée",
          description:
            "Vous prévoyez d'intégrer plusieurs développeurs et voulez une base de code lisible et auto-documentée.",
        },
        {
          title: "Consommation d'APIs externes",
          description:
            "Vous consommez des APIs externes (Stripe, Supabase, OpenAI) et voulez la sécurité des types à chaque appel.",
        },
        {
          title: "Migration d'un legacy JavaScript",
          description:
            "Vous reprenez un projet JavaScript legacy qui accumule des bugs récurrents : la migration progressive vers TypeScript est souvent rentable.",
        },
      ],
    },
    whenNotToUse: {
      title: "Quand TypeScript n'est pas indispensable",
      points: [
        {
          title: "Prototype jetable d'une semaine",
          description:
            "Vous lancez un prototype jetable d'une semaine qui ne verra jamais la production : JavaScript suffit.",
        },
        {
          title: "Équipe JavaScript et projet court",
          description:
            "Votre équipe ne connaît que JavaScript et le projet ne durera pas plus de 2 ou 3 mois.",
        },
        {
          title: "Script d'automatisation 100 lignes",
          description:
            "Votre application est un script d'automatisation 100 lignes lancé une fois par mois.",
        },
      ],
    },
    ourApproach: {
      title: "Notre approche TypeScript",
      description:
        "On part de TypeScript strict dès le sprint 1 : strictNullChecks, noImplicitAny, noUncheckedIndexedAccess. C'est inconfortable au début mais ça évite 80% des bugs qu'on voit en prod sur les projets non-typés.\n\nLes types sont partagés entre le front et le back via un package commun ou un schéma Zod. Les appels d'API renvoient des types inférés, pas des any. Pour les bases de données, on utilise des ORM typés (Drizzle, Prisma) qui génèrent les types depuis le schéma.\n\nÀ la livraison, vous récupérez un repo où tsc --noEmit passe sans erreur, avec des conventions documentées dans un guide pour les futurs développeurs.",
      phases: [
        {
          title: "Mode strict dès le sprint 1",
          description:
            "TypeScript strict activé d'entrée : strictNullChecks, noImplicitAny, noUncheckedIndexedAccess. Inconfortable au début, mais ça évite 80% des bugs de prod.",
        },
        {
          title: "Types partagés front et back",
          description:
            "Schéma Zod ou package commun pour partager les types entre le frontend et le backend. Appels d'API typés de bout en bout, pas de any.",
        },
        {
          title: "ORM typés sur la base",
          description:
            "Drizzle ou Prisma génèrent les types directement depuis le schéma de base. Modifier le schéma met à jour les types partout, le compilateur attrape les ruptures.",
        },
        {
          title: "Livraison et conventions documentées",
          description:
            "Repo où tsc --noEmit passe sans erreur, conventions documentées dans un guide pour les futurs développeurs qui reprennent le projet.",
        },
      ],
    },
    fullStackContext: {
      title: "TypeScript dans la stack Vizion Web",
      description:
        "On écrit tout en TypeScript : front React et Next.js, backend Node.js (routes API ou Server Actions), validation Zod, ORM Drizzle ou Prisma, tests Vitest. Les types sont partagés via un workspace npm pour garder une seule source de vérité. Quand on intègre OpenAI ou Claude, les SDK officiels sont typés nativement.",
    },
    examples: {
      title: "Exemples de projets TypeScript",
      items: [
        {
          title: "Migration d'une API legacy JavaScript vers TypeScript",
          description:
            "Une PME avait une API Node.js de 30 000 lignes en JS pur, avec des bugs récurrents en prod. Migration progressive vers TypeScript strict en 6 semaines : 200 bugs corrigés au passage, dont 12 erreurs métier critiques jamais remontées par les tests.",
        },
        {
          title: "MVP SaaS B2B avec types partagés front et back",
          description:
            "Un éditeur SaaS lançait son MVP avec front Next.js et backend Node.js. Types partagés via Zod entre les deux, validation côté serveur et côté client à partir du même schéma. Zéro bug de désynchronisation API en 3 mois de prod.",
        },
        {
          title: "Application interne avec ORM typé",
          description:
            "Une PME industrielle développait son ERP interne. Stack TypeScript + Drizzle ORM + Supabase : les types remontent du schéma DB jusqu'aux composants React. Modifier le schéma met à jour les types partout, le compilateur attrape les ruptures avant le déploiement.",
        },
      ],
    },
    limits: {
      title: "Limites et pièges courants",
      points: [
        "La courbe d'apprentissage est réelle pour un développeur qui vient du JavaScript pur. Compter 2 à 3 semaines de productivité réduite avant que les types deviennent un accélérateur plutôt qu'un frein.",
        "TypeScript ne remplace pas les tests : il attrape les erreurs de types, pas les erreurs métier. On garde Vitest ou Jest sur la logique critique.",
        "Les types trop génériques deviennent vite illisibles. Préférer des types simples et concrets, quitte à les dupliquer un peu, plutôt que des helpers génériques avec 5 niveaux d'imbrication.",
      ],
    },
    performance: {
      title: "Performance et tooling",
      description:
        "TypeScript en lui-même n'impacte pas la performance runtime : il compile vers du JavaScript standard. Côté DX, les serveurs de langage modernes (tsc, swc, esbuild) compilent un projet de 50 000 lignes en moins de 5 secondes. Le coût en pratique : un peu plus de temps en CI pour le typecheck (1 à 2 min sur un projet moyen).",
    },
    cost: {
      title: "Combien coûte un projet TypeScript ?",
      description:
        "TypeScript n'ajoute pas de coût direct : c'est du JavaScript avec des types. Chaque projet est conçu sur-mesure, le pricing dépend du périmètre fonctionnel, de la complexité métier et du niveau de testing. Devis chiffré sous 24h après cadrage.",
    },
    faqs: [
      {
        q: "TypeScript ou JavaScript : que choisir ?",
        a: "TypeScript pour tout projet qui doit durer plus de 6 mois ou être maintenu par plusieurs développeurs. JavaScript reste OK pour des scripts ponctuels ou des prototypes très courts. Au-delà, le gain de fiabilité de TypeScript compense largement le coût d'apprentissage.",
      },
      {
        q: "TypeScript ralentit-il le développement ?",
        a: "Au début oui, le temps que l'équipe s'habitue. Ensuite TypeScript accélère le développement : autocomplétion fiable, refactoring sans peur, erreurs détectées avant la prod.",
      },
      {
        q: "Peut-on migrer un projet JavaScript existant ?",
        a: "Oui, progressivement. On commence par renommer les fichiers en .ts en mode lax, puis on renforce les options strict une à une. Compter quelques semaines à quelques mois selon la taille du projet.",
      },
      {
        q: "Quelle stack TypeScript utilisez-vous ?",
        a: "Côté front : React et Next.js avec TypeScript strict, Zod pour la validation, Tailwind CSS. Côté back : Node.js avec Next.js Server Actions ou routes API, Drizzle ORM, Supabase. Tests avec Vitest.",
      },
      {
        q: "Combien coûte un projet TypeScript ?",
        a: "Le pricing dépend du périmètre, pas du choix du langage. Devis chiffré sous 24h après cadrage.",
      },
    ],
    cta: {
      title: "Un projet web qui demande de la fiabilité ?",
      description:
        "En 30 minutes, on cadre votre projet et on chiffre sous 24h. MVP, SaaS, application métier : on vous dit ce qui tient en 3 à 8 semaines avec TypeScript strict.",
    },
  },

  // ==========================================================================
  // 8. NODE.JS
  // ==========================================================================
  {
    slug: "agence-nodejs",
    technoName: "Node.js",
    category: "backend",
    meta: {
      title:
        "Agence Node.js : développement backend pour vos SaaS et apps métier | Vizion Web",
      description:
        "Agence Node.js à Montpellier. Backend TypeScript, APIs REST et GraphQL, intégrations Stripe, Supabase, OpenAI. Devis chiffré sous 24h.",
      canonical: "https://vizionweb.fr/agence-nodejs",
    },
    hero: {
      headline: "Agence Node.js : développement backend pour vos applications",
      subheadline:
        "On développe vos APIs et backends en Node.js + TypeScript : routes Next.js, edge functions Supabase, intégrations Stripe et OpenAI, hébergement Vercel.",
    },
    whyTechno: {
      title: "Pourquoi Node.js pour votre backend",
      paragraphs: [
        "Node.js permet d'utiliser le même langage côté front et côté back, ce qui simplifie la stack et l'embauche : un développeur full-stack JavaScript ou TypeScript couvre les deux. Pour une startup ou une PME, c'est un gain réel en time-to-market et en cohérence de code.",
        "L'écosystème npm est de loin le plus complet du marché : authentification, paiements, ORMs, services IA, queues, monitoring. Pour la majorité des backends web modernes, il existe un package mature qui couvre 80% du besoin.",
      ],
    },
    whenToUse: {
      title: "Quand utiliser Node.js",
      points: [
        {
          title: "API REST ou GraphQL pour un SaaS",
          description:
            "Vous développez une API REST ou GraphQL pour un SaaS, une app mobile ou un site web.",
        },
        {
          title: "Cohérence stack front et back",
          description:
            "Votre stack frontend est déjà en JavaScript ou TypeScript et vous voulez la cohérence entre front et back.",
        },
        {
          title: "Intégration de SaaS modernes",
          description:
            "Vous intégrez des SaaS modernes (Stripe, Supabase, OpenAI) qui ont leur SDK officiel en Node.js.",
        },
        {
          title: "Déploiement serverless ou edge",
          description:
            "Vous voulez déployer en serverless ou edge runtime sans maintenir d'infra dédiée.",
        },
        {
          title: "I/O concurrent et streaming",
          description:
            "Votre backend gère beaucoup de I/O concurrent (appels API, websockets, streaming IA) : Node excelle sur ce modèle.",
        },
      ],
    },
    whenNotToUse: {
      title: "Quand Node.js n'est pas adapté",
      points: [
        {
          title: "Calcul intensif CPU-bound",
          description:
            "Votre backend fait du calcul intensif CPU-bound (data science, traitement d'images lourd) : Python ou Go restent supérieurs.",
        },
        {
          title: "Équipe Java ou .NET en place",
          description:
            "Vous avez une équipe Java ou .NET expérimentée et un SI déjà dans cet écosystème : la cohérence vaut plus que le changement de stack.",
        },
        {
          title: "Secteur ultra-réglementé",
          description:
            "Vous travaillez dans un secteur très réglementé (banque, défense) où la stack imposée est Java ou C#.",
        },
      ],
    },
    ourApproach: {
      title: "Notre approche Node.js",
      description:
        "On démarre par cadrer l'architecture : routes Next.js (intégrées au front) pour un MVP rapide, ou backend Node.js séparé pour les projets plus complexes. Choix de framework selon le contexte : Express et Fastify pour les APIs classiques, Hono pour l'edge, NestJS si la complexité métier le justifie.\n\nLe développement suit les bonnes pratiques modernes : TypeScript strict, validation Zod en entrée et sortie, ORM typé (Drizzle ou Prisma) sur PostgreSQL, tests Vitest sur la logique critique. Les SDK officiels sont privilégiés pour Stripe, Supabase, OpenAI et Anthropic.\n\nÀ la livraison, vous récupérez un repo Node.js documenté, le schéma de base de données, les variables d'environnement, et le déploiement Vercel ou Docker prêt à l'emploi.",
      phases: [
        {
          title: "Cadrage de l'architecture",
          description:
            "Routes Next.js intégrées au front pour un MVP rapide, ou backend Node.js séparé pour les projets complexes. Choix de framework selon le contexte : Express, Fastify, Hono ou NestJS.",
        },
        {
          title: "Validation et typage strict",
          description:
            "TypeScript strict de bout en bout, validation Zod en entrée et sortie, SDK officiels privilégiés pour Stripe, Supabase, OpenAI et Anthropic.",
        },
        {
          title: "ORM typé et tests",
          description:
            "Drizzle ou Prisma sur PostgreSQL pour des requêtes typées, tests Vitest sur la logique critique pour fiabiliser les évolutions.",
        },
        {
          title: "Livraison et déploiement",
          description:
            "Repo documenté, schéma de base de données, variables d'environnement et déploiement Vercel ou Docker prêt à l'emploi.",
        },
      ],
    },
    fullStackContext: {
      title: "Node.js dans la stack Vizion Web",
      description:
        "Node.js est notre runtime backend par défaut. Pour les projets web, on utilise les Server Actions Next.js et les routes API directement intégrées au front. Pour les projets plus larges, on monte un backend Node.js séparé avec Fastify ou Hono, connecté à Supabase pour PostgreSQL et à Vercel pour le déploiement. Tout est en TypeScript strict, des routes au schéma de base.",
    },
    examples: {
      title: "Exemples de projets Node.js",
      items: [
        {
          title: "Backend API pour un SaaS B2B multi-tenant",
          description:
            "Un éditeur SaaS lançait une plateforme multi-tenant pour 50 entreprises. Backend Node.js + Fastify + PostgreSQL via Supabase, gestion des organisations, rôles et permissions par tenant, paiements Stripe. Livré en 5 semaines.",
        },
        {
          title: "Intégration Stripe et Supabase pour un e-commerce custom",
          description:
            "Une boutique B2B avait besoin d'un backend pour gérer paiements à crédit, factures et synchronisation avec Pennylane. Routes Next.js + SDK Stripe + Supabase pour la persistance. Mise en prod en 3 semaines.",
        },
        {
          title: "Backend IA streaming pour un assistant de support",
          description:
            "Un éditeur SaaS voulait un assistant IA dans son produit. Backend Node.js qui appelle OpenAI en streaming SSE, stocke les conversations dans Supabase, gère les coûts par organisation. Latence sub-seconde sur les premiers tokens.",
        },
      ],
    },
    limits: {
      title: "Limites et pièges courants",
      points: [
        "Node.js est mono-threaded sur les opérations CPU. Si votre backend doit faire du calcul lourd (traitement vidéo, ML), il faut décharger vers Python ou un worker dédié.",
        "L'écosystème npm est massif mais inégal : il faut savoir trier les packages maintenus des packages abandonnés. On privilégie toujours les SDK officiels et les libs avec maintenance active.",
        "Les memory leaks en Node.js sont subtils et nécessitent du monitoring en prod. On installe systématiquement un APM (Sentry, Datadog) sur les projets en production.",
      ],
    },
    performance: {
      title: "Performance et scalabilité",
      description:
        "Node.js scale très bien horizontalement sur les charges I/O-bound (APIs web, websockets, streaming IA). En serverless Vercel ou edge, on bénéficie de l'autoscaling automatique. Pour les charges importantes, on couple avec une base PostgreSQL bien indexée et un cache Redis sur les requêtes lourdes. Les temps de réponse typiques pour une API SaaS B2B : 50 à 200 ms en p95.",
    },
    cost: {
      title: "Combien coûte un projet Node.js ?",
      description:
        "Chaque projet backend est sur-mesure : pas de tarif standard. Le pricing dépend du périmètre fonctionnel, de la complexité métier (multi-tenant, rôles, intégrations API), du volume de données et du niveau de testing. Devis chiffré sous 24h après cadrage.",
    },
    faqs: [
      {
        q: "Node.js ou Python : que choisir pour mon backend ?",
        a: "Node.js si votre front est en JavaScript ou TypeScript : la cohérence stack apporte un gain réel. Python si vous faites du machine learning, du data engineering ou si votre équipe est déjà Python. Pour un backend web classique B2B, les deux fonctionnent. On privilégie Node pour la cohérence avec le front Next.js.",
      },
      {
        q: "Express, Fastify, NestJS ou Next.js : quel framework ?",
        a: "Next.js (Server Actions + routes API) pour les MVP et les projets web où le backend reste léger. Fastify ou Hono pour les APIs plus structurées et performantes. NestJS si la complexité métier justifie une architecture en modules et qu'il faut imposer une discipline d'équipe.",
      },
      {
        q: "Peut-on héberger Node.js ailleurs que sur Vercel ?",
        a: "Oui. On peut déployer sur n'importe quelle infra qui supporte Node : OVH, Scaleway, AWS, Fly.io, Railway. Vercel reste notre défaut pour la simplicité, mais le code est portable.",
      },
      {
        q: "Quelle base de données utilisez-vous avec Node.js ?",
        a: "PostgreSQL via Supabase pour la majorité des projets : auth, storage et realtime inclus. Pour des besoins très spécifiques on peut basculer sur Postgres self-hosté ou ajouter Redis pour le cache.",
      },
      {
        q: "Mon backend Node.js sera-t-il sécurisé ?",
        a: "Oui : authentification gérée par Supabase Auth ou Auth.js, validation Zod en entrée et sortie, rate limiting sur les routes sensibles, secrets versionnés dans Vercel ou Doppler. On audite la sécurité avant la mise en prod.",
      },
    ],
    cta: {
      title: "Un backend Node.js à développer ?",
      description:
        "En 30 minutes, on cadre votre projet et on chiffre sous 24h. API REST, GraphQL, intégrations SaaS : on vous dit ce qui tient en 3 à 8 semaines.",
    },
  },
];

// ============================================================================
// HELPERS
// ============================================================================

export function getTechno(slug: string): TechnoSEO | undefined {
  return technos.find((t) => t.slug === slug);
}

export function getAllTechnoSlugs(): string[] {
  return technos.map((t) => t.slug);
}

export function getTechnosByCategory(
  category: TechnoSEO["category"],
): TechnoSEO[] {
  return technos.filter((t) => t.category === category);
}
