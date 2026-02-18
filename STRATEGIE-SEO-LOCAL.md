# Stratégie SEO Local Programmatique - Vizion Web

## Objectif

Transformer les 19 pages locales (actuellement dupliquées à 95%) en pages à contenu unique, optimisées pour le référencement local et les moteurs de réponse (AEO).

---

## 1. Architecture des Templates Programmatiques

### 1.1. Structure de données par ville

Chaque localité doit disposer de son propre objet de données enrichi. Le fichier `data/cities-seo.ts` remplace la logique actuelle.

```typescript
// data/cities-seo.ts

export interface CitySEO {
  slug: string;
  name: string;
  type: "city" | "territory";
  preposition: "à" | "en";

  // SEO Metadata
  meta: {
    title: string;       // Unique par ville, max 60 chars
    description: string; // Unique par ville, max 160 chars
    canonical: string;
  };

  // Contenu Hero unique
  hero: {
    headline: string;    // H1 unique
    subheadline: string; // H2 unique
    badges: string[];    // Spécialités mises en avant
  };

  // Accroche locale (section introductive)
  localIntro: {
    title: string;
    paragraphs: string[];  // 2-3 paragraphes uniques
  };

  // Données économiques locales
  localContext: {
    population?: string;
    quartiersCles: string[];
    zonesActivite: string[];
    secteursDominants: string[];
    specificites: string; // Phrase unique sur le tissu économique
  };

  // FAQ locale (2-3 questions spécifiques à la ville)
  localFaqs: Array<{
    question: string;
    answer: string;
  }>;

  // Témoignage local mis en avant (si applicable)
  featuredTestimonial?: {
    name: string;
    role: string;
    text: string;
    image: string;
  };

  // CTA local
  cta: {
    text: string;
    subtext: string;
  };

  // Schema LocalBusiness
  schema: {
    areaServed: string;
    geo?: { latitude: number; longitude: number };
  };
}
```

### 1.2. Nouveau template de page locale

Le composant `HomeSection` actuel est remplacé par `CityPageTemplate` pour les pages `/[slug]` :

```
┌──────────────────────────────────────┐
│  HERO (H1 + H2 uniques par ville)   │
│  + Badge localité + CTA             │
├──────────────────────────────────────┤
│  INTRO LOCALE (2-3 §, contenu       │
│  unique sur le contexte business     │
│  de la ville)                        │
├──────────────────────────────────────┤
│  SERVICES (6 cartes, identiques     │
│  MAIS avec un titre de section       │
│  contextualisé par ville)            │
├──────────────────────────────────────┤
│  CONTEXTE LOCAL (quartiers, zones   │
│  d'activité, secteurs dominants)     │
│  → Section 100% unique par ville     │
├──────────────────────────────────────┤
│  PORTFOLIO (4 projets, identiques   │
│  → acceptable car réalisations       │
│  réelles de l'agence)                │
├──────────────────────────────────────┤
│  FAQ LOCALE (2-3 questions           │
│  spécifiques à la ville              │
│  + 3 FAQ générales sélectionnées)    │
├──────────────────────────────────────┤
│  CTA LOCAL + CALENDRIER             │
├──────────────────────────────────────┤
│  BREADCRUMB (Accueil > Ville)        │
└──────────────────────────────────────┘
```

### 1.3. Sections partagées vs. uniques

| Section | Partagée | Unique | Stratégie |
|---------|----------|--------|-----------|
| Hero (H1, H2) | | X | Titre et accroche réécrits par ville |
| Intro locale | | X | 2-3 paragraphes sur le tissu économique local |
| Services | Partiel | Partiel | Cartes identiques, titre de section contextualisé |
| Contexte local | | X | Quartiers, zones d'activité, spécificités |
| Portfolio | X | | Réalisations réelles, pas de faux contenu local |
| Process | Supprimé | | Retiré des pages locales (reste sur homepage) |
| Témoignages | Supprimé | | Retiré (sauf si testimonial local) |
| Pricing | Supprimé | | Retiré des pages locales (reste sur homepage) |
| FAQ | Partiel | Partiel | 2-3 FAQ locales + 3 FAQ générales (sélection) |
| CTA | | X | Message contextualisé par ville |

**Ratio de contenu unique visé : 60-70% par page** (vs. 5% actuellement).

---

## 2. Exemples de Contenu pour 3 Villes

### 2.1. Paris

```typescript
{
  slug: "paris",
  name: "Paris",
  type: "city",
  preposition: "à",

  meta: {
    title: "Création de sites web et applications à Paris | Vizion Web",
    description: "Agence web à Paris spécialisée en sites internet, landing pages et applications SaaS sur-mesure. Code moderne, design orienté conversion.",
    canonical: "https://vizionweb.fr/paris",
  },

  hero: {
    headline: "Votre agence web à Paris pour des sites et applications qui convertissent",
    subheadline: "Sites internet, landing pages et applications SaaS développés sur-mesure en React et Next.js. De la maquette au déploiement, livrés en 30 jours.",
    badges: ["Sites Web", "SaaS", "Landing Pages"],
  },

  localIntro: {
    title: "Développement web sur-mesure pour les entreprises parisiennes",
    paragraphs: [
      "Paris concentre plus de 40% des startups françaises et des milliers de PME en recherche de solutions digitales performantes. Dans un marché aussi concurrentiel, un site web générique ne suffit plus. Les entreprises parisiennes ont besoin d'outils numériques taillés pour leur réalité : conversion rapide, image professionnelle, fonctionnalités métier intégrées.",
      "Vizion Web accompagne les entreprises d'Île-de-France dans la création de sites internet, landing pages et applications web. Chaque projet est construit sur-mesure avec des technologies modernes (React, Next.js) pour garantir performance, sécurité et évolutivité. Pas de templates, pas de CMS limitant : du code pensé pour vos objectifs business.",
      "Que vous soyez une startup du Sentier cherchant un MVP, une agence du 8e arrondissement qui refond son site vitrine, ou un commerce de Belleville qui digitalise ses services, notre approche reste la même : comprendre votre métier, concevoir une solution adaptée, livrer dans les délais.",
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
    specificites: "Capitale économique française, Paris représente à elle seule 30% du PIB national. La densité d'entreprises et la concurrence digitale y sont parmi les plus fortes d'Europe, rendant la qualité du web un facteur différenciant majeur.",
  },

  localFaqs: [
    {
      question: "Pourquoi choisir une agence web à Paris plutôt qu'un freelance ?",
      answer: "Une agence réunit plusieurs compétences (design, développement, copywriting, SEO) dans un cadre structuré. Chez Vizion Web, chaque projet bénéficie d'un processus en 4 étapes avec des livrables clairs, des délais tenus et un interlocuteur dédié. Un freelance isolé peut difficilement couvrir tous ces aspects avec le même niveau de qualité et de fiabilité.",
    },
    {
      question: "Travaillez-vous avec des startups parisiennes en phase de lancement ?",
      answer: "Oui, une part importante de nos clients sont des startups et jeunes entreprises parisiennes. Notre offre Vizion Start (à partir de 2 000 euros) est pensée pour les lancements rapides : une landing page performante livrée en 2 à 3 semaines, avec copywriting et SEO technique inclus. Pour les projets plus ambitieux, notre formule Enterprise permet de construire un MVP évolutif.",
    },
    {
      question: "Quel est le coût moyen d'un site web à Paris ?",
      answer: "Le marché parisien affiche des tarifs très variables : de 1 500 euros pour une landing page à plus de 50 000 euros pour une application complexe. Chez Vizion Web, nos tarifs commencent à 2 000 euros pour une landing page et vont jusqu'à 30 000 euros et plus pour une application SaaS complète. Ces prix incluent le design, le développement sur-mesure, le copywriting et l'optimisation SEO.",
    },
  ],

  featuredTestimonial: undefined, // Pas de client parisien identifié

  cta: {
    text: "Discutons de votre projet web à Paris",
    subtext: "Prenez rendez-vous pour un appel de 30 minutes. Nous évaluerons ensemble la meilleure approche pour votre entreprise.",
  },

  schema: {
    areaServed: "Paris, Île-de-France, France",
    geo: { latitude: 48.8566, longitude: 2.3522 },
  },
}
```

---

### 2.2. Toulouse

```typescript
{
  slug: "toulouse",
  name: "Toulouse",
  type: "city",
  preposition: "à",

  meta: {
    title: "Agence web à Toulouse — Sites et apps sur-mesure | Vizion Web",
    description: "Création de sites internet et applications web à Toulouse. Design, développement React/Next.js et copywriting inclus. Devis en 48h.",
    canonical: "https://vizionweb.fr/toulouse",
  },

  hero: {
    headline: "Création de sites web et applications sur-mesure à Toulouse",
    subheadline: "Design, développement et copywriting réunis pour des projets web qui génèrent des résultats. Du site vitrine à l'application SaaS, livrés clé en main.",
    badges: ["Applications Web", "Sites Vitrine", "SaaS"],
  },

  localIntro: {
    title: "Des solutions web pensées pour le dynamisme toulousain",
    paragraphs: [
      "Toulouse est la quatrième ville de France par sa population et l'une des plus dynamiques en matière de création d'entreprises. Entre l'écosystème aéronautique et spatial, les biotechnologies et le numérique, la Ville Rose attire des profils variés : ingénieurs, entrepreneurs, commerçants, professions libérales. Tous partagent un besoin commun : une présence en ligne à la hauteur de leur activité.",
      "Vizion Web conçoit des sites internet et applications web pour les entreprises toulousaines qui refusent les solutions génériques. Notre méthode : comprendre votre métier, concevoir un design sur-mesure orienté conversion, développer avec des technologies fiables (React, Next.js), et livrer un produit fini avec copywriting et SEO inclus.",
      "Que vous soyez un cabinet de conseil à Compans-Caffarelli, une startup de la French Tech Toulouse, un restaurant du quartier Saint-Étienne ou un prestataire de services à Blagnac, nous adaptons chaque projet à vos contraintes et vos objectifs de croissance.",
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
    specificites: "Deuxième pôle de recherche en France, Toulouse combine industrie de pointe et tissu de PME/TPE dense. L'écosystème numérique local est en forte croissance, porté par la French Tech et la proximité avec les grands donneurs d'ordre aéronautiques.",
  },

  localFaqs: [
    {
      question: "Faut-il être basé à Toulouse pour travailler avec Vizion Web ?",
      answer: "Non. Nous travaillons à distance avec des entreprises partout en France, et nos clients toulousains ne font pas exception. Les échanges se font par visioconférence, les maquettes sont validées sur Figma, et les livrables sont accessibles en ligne. Si vous préférez un rendez-vous en présentiel, nous pouvons organiser des rencontres ponctuelles à Toulouse.",
    },
    {
      question: "Créez-vous des applications métier pour les sous-traitants aéronautiques ?",
      answer: "Oui. Nous développons des applications web sur-mesure (dashboards, outils de suivi, intranets) adaptées aux besoins des entreprises industrielles et de services. Notre offre Vizion Enterprise couvre ce type de projets, avec un développement par étapes (MVP puis itérations) et un budget à partir de 10 000 euros.",
    },
    {
      question: "Combien de temps faut-il pour créer un site web à Toulouse ?",
      answer: "Les délais dépendent du type de projet. Une landing page est livrée en 2 à 3 semaines, un site vitrine en 3 à 4 semaines, et une application web sur-mesure en 4 à 8 semaines. Nous fixons un planning clair dès le premier appel et tenons nos engagements.",
    },
  ],

  featuredTestimonial: undefined,

  cta: {
    text: "Lancez votre projet web à Toulouse",
    subtext: "Un appel de 30 minutes pour définir ensemble la solution adaptée à votre entreprise toulousaine.",
  },

  schema: {
    areaServed: "Toulouse, Haute-Garonne, Occitanie, France",
    geo: { latitude: 43.6047, longitude: 1.4442 },
  },
}
```

---

### 2.3. Fort-de-France (Martinique)

```typescript
{
  slug: "fort-de-france",
  name: "Fort-de-France",
  type: "city",
  preposition: "à",

  meta: {
    title: "Agence web à Fort-de-France — Sites et apps | Vizion Web",
    description: "Création de sites internet et applications web à Fort-de-France, Martinique. Développement sur-mesure, design et copywriting inclus.",
    canonical: "https://vizionweb.fr/fort-de-france",
  },

  hero: {
    headline: "Création de sites et applications web à Fort-de-France",
    subheadline: "Sites internet, landing pages et applications SaaS pour les entreprises martiniquaises. Développement sur-mesure, livré clé en main avec design et copywriting.",
    badges: ["Sites Internet", "Apps Web", "Landing Pages"],
  },

  localIntro: {
    title: "Des outils web performants pour les entreprises martiniquaises",
    paragraphs: [
      "Fort-de-France est le poumon économique de la Martinique. La ville concentre la majorité des entreprises de services, des commerces et des institutions du département. Pourtant, beaucoup d'entrepreneurs martiniquais peinent à trouver un prestataire web capable de livrer un site professionnel, rapide et réellement adapté à leur activité. Les solutions WordPress standard ou les templates prêts à l'emploi ne suffisent plus face aux attentes des clients connectés.",
      "Vizion Web travaille avec des entreprises martiniquaises pour créer des sites internet et applications web qui dépassent le simple affichage en ligne. Chaque projet est développé sur-mesure (React, Next.js) avec un objectif clair : générer des prises de contact, des réservations ou des ventes. Le design, le copywriting et le SEO sont intégrés dès le départ, pas en option.",
      "Du centre-ville de Fort-de-France aux zones commerciales du Lamentin, en passant par les Trois-Îlets et Schoelcher, nous comprenons les réalités du marché local : saisonnalité touristique, clientèle mixte (locale et métropolitaine), et besoin de se démarquer dans un territoire où le bouche-à-oreille digital prend de plus en plus de place.",
    ],
  },

  localContext: {
    population: "78 000 habitants (Fort-de-France), 350 000 habitants (Martinique)",
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
    specificites: "L'économie martiniquaise repose sur le tourisme, les services et le commerce. Le marché est compact mais concurrentiel : se démarquer en ligne est devenu un vrai levier de croissance, notamment pour capter la clientèle touristique qui planifie tout depuis son téléphone.",
  },

  localFaqs: [
    {
      question: "Travaillez-vous avec des entreprises en Martinique depuis la métropole ?",
      answer: "Oui. Vizion Web collabore avec des clients dans toute la France, y compris en Martinique. Les échanges se font par visioconférence, les maquettes sont partagées sur Figma et les validations sont rapides malgré le décalage horaire. Plusieurs de nos clients sont basés aux Antilles et en Guyane.",
    },
    {
      question: "Pouvez-vous créer un site de réservation pour un hébergement touristique en Martinique ?",
      answer: "Tout à fait. Nous développons des sites avec réservation en ligne, paiement intégré et gestion des disponibilités. Notre offre Vizion Pro (à partir de 5 000 euros) couvre ce type de projet avec un espace d'administration pour gérer vos réservations sans dépendre d'une plateforme tierce.",
    },
    {
      question: "Un site web est-il vraiment utile pour une petite entreprise à Fort-de-France ?",
      answer: "Plus que jamais. En Martinique, 75% des recherches de services locaux passent par Google. Un site professionnel, rapide et bien référencé permet de capter des clients qui cherchent un prestataire en ligne, que ce soit des habitants ou des touristes. C'est un investissement qui travaille pour vous 24h/24.",
    },
  ],

  featuredTestimonial: undefined,

  cta: {
    text: "Parlons de votre projet web en Martinique",
    subtext: "Un appel de 30 minutes pour comprendre vos besoins et vous proposer une solution adaptée au marché martiniquais.",
  },

  schema: {
    areaServed: "Fort-de-France, Martinique, France",
    geo: { latitude: 14.6161, longitude: -61.0588 },
  },
}
```

---

## 3. Guide d'Implémentation Technique

### 3.1. Fichiers à créer / modifier

```
data/
  cities-seo.ts          ← NOUVEAU : données enrichies par ville (19 objets)

app/
  [slug]/
    page.tsx             ← MODIFIER : utiliser CityPageTemplate au lieu de HomeSection

components/
  city-page-template.tsx ← NOUVEAU : template principal des pages locales
  city-hero.tsx          ← NOUVEAU : hero avec H1/H2 uniques
  city-intro.tsx         ← NOUVEAU : section intro locale
  city-context.tsx       ← NOUVEAU : section contexte local (quartiers, zones)
  city-faq.tsx           ← NOUVEAU : FAQ mixte (locale + sélection globale)
  city-cta.tsx           ← NOUVEAU : CTA contextualisé
  breadcrumb.tsx         ← NOUVEAU : fil d'Ariane

lib/
  seo/
    city-schema.ts       ← NOUVEAU : générateur de schema LocalBusiness
    breadcrumb-schema.ts ← NOUVEAU : générateur de schema BreadcrumbList
```

### 3.2. Modification de `app/[slug]/page.tsx`

```tsx
// app/[slug]/page.tsx
import type { Metadata } from "next";
import { getCitySEOData } from "@/data/cities-seo";
import CityPageTemplate from "@/components/city-page-template";
import { buildCitySchema } from "@/lib/seo/city-schema";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb-schema";
import Script from "next/script";
import NotFound from "../not-found";

export function generateStaticParams() {
  // Importer tous les slugs depuis cities-seo.ts
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCitySEOData(slug);
  if (!city) return {};

  return {
    title: city.meta.title,
    description: city.meta.description,
    alternates: {
      canonical: city.meta.canonical,
    },
    openGraph: {
      title: city.meta.title,
      description: city.meta.description,
      url: city.meta.canonical,
      type: "website",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCitySEOData(slug);

  if (!city) return <NotFound />;

  const citySchema = buildCitySchema(city);
  const breadcrumbSchema = buildBreadcrumbSchema(city);

  return (
    <>
      <CityPageTemplate city={city} />
      <Script id={`city-schema-${slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(citySchema)}
      </Script>
      <Script id={`breadcrumb-schema-${slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </>
  );
}
```

### 3.3. Schema LocalBusiness par ville

```typescript
// lib/seo/city-schema.ts
import type { CitySEO } from "@/data/cities-seo";

export function buildCitySchema(city: CitySEO) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Vizion Web — ${city.name}`,
    description: city.meta.description,
    url: city.meta.canonical,
    provider: {
      "@type": "Organization",
      name: "Vizion Web",
      url: "https://vizionweb.fr",
      logo: "https://vizionweb.fr/logo.svg",
    },
    areaServed: {
      "@type": "Place",
      name: city.schema.areaServed,
      ...(city.schema.geo && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: city.schema.geo.latitude,
          longitude: city.schema.geo.longitude,
        },
      }),
    },
    serviceType: [
      "Création de sites internet",
      "Développement d'applications web",
      "Développement SaaS",
      "Landing pages",
    ],
    priceRange: "2000€ - 30000€+",
  };
}
```

### 3.4. Schema BreadcrumbList

```typescript
// lib/seo/breadcrumb-schema.ts
import type { CitySEO } from "@/data/cities-seo";

export function buildBreadcrumbSchema(city: CitySEO) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://vizionweb.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Agence web ${city.preposition} ${city.name}`,
        item: city.meta.canonical,
      },
    ],
  };
}
```

### 3.5. Structure du composant CityPageTemplate

```tsx
// components/city-page-template.tsx
import type { CitySEO } from "@/data/cities-seo";
import CityHero from "./city-hero";
import CityIntro from "./city-intro";
import ServicesSection from "./services-section";
import CityContext from "./city-context";
import MiniPortfolio from "./mini-portfolio";
import CityFAQ from "./city-faq";
import CityCTA from "./city-cta";
import Breadcrumb from "./breadcrumb";
import { WhatsappNav } from "./ui/whatsapp-nav";

interface Props {
  city: CitySEO;
}

export default function CityPageTemplate({ city }: Props) {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: `Agence web ${city.preposition} ${city.name}` },
        ]}
      />
      <CityHero city={city} />
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <CityIntro city={city} />
        <ServicesSection
          titleOverride={`Nos services web ${city.preposition} ${city.name}`}
        />
        <CityContext city={city} />
        <MiniPortfolio />
      </div>
      <CityFAQ city={city} />
      <CityCTA city={city} />
      <WhatsappNav />
    </main>
  );
}
```

---

## 4. Checklist Anti-Duplication

### 4.1. Contenu unique par page

| Critère | Vérification | Seuil minimum |
|---------|-------------|---------------|
| H1 unique | Aucun H1 ne doit se répéter entre les pages | 100% unique |
| Meta title unique | Vérifier via sitemap ou crawl | 100% unique |
| Meta description unique | Chaque description doit être différente | 100% unique |
| Intro locale | 2-3 paragraphes propres à la ville | Min. 150 mots uniques |
| FAQ locales | 2-3 questions spécifiques à la ville | Min. 200 mots uniques |
| Contexte local | Quartiers, zones, secteurs économiques | Min. 100 mots uniques |
| CTA local | Texte d'appel à l'action contextualisé | 100% unique |

### 4.2. Ratio de contenu unique

**Objectif : 60-70% de contenu unique par page locale**

Calcul approximatif par page :
- Intro locale : ~200 mots (unique)
- Contexte local : ~150 mots (unique)
- FAQ locales : ~300 mots (unique)
- Hero + CTA : ~80 mots (unique)
- **Total unique : ~730 mots**
- Services (partagé) : ~200 mots
- Portfolio (partagé) : ~150 mots
- **Total partagé : ~350 mots**
- **Ratio : ~730 / 1080 = 67% unique**

### 4.3. Variations sémantiques

Pour éviter que les sections partagées ne créent des signaux de duplication :

| Section Services | Variation par ville |
|------------------|---------------------|
| Titre de section | "Nos services web à [Ville]" au lieu du titre fixe |
| Sous-titre | Contextualiser : "Nous accompagnons les entreprises [adjectif local] dans..." |

| FAQ globales | Stratégie |
|-------------|-----------|
| Sélection | 3 FAQ sur 8 sélectionnées par ville (rotation) |
| Ordre | Différent selon la ville |
| Jamais les mêmes 3 | Chaque ville affiche une combinaison différente |

### 4.4. Signaux techniques anti-duplication

- [x] Balise `<link rel="canonical">` pointant vers l'URL propre de chaque page
- [x] Schema `BreadcrumbList` par page
- [x] Schema `ProfessionalService` avec `areaServed` unique
- [x] Meta title et description 100% uniques
- [x] OpenGraph `url` unique par page
- [x] Sitemap avec toutes les URLs listées individuellement

### 4.5. Ce qu'il ne faut PAS faire

| Piège | Pourquoi |
|-------|----------|
| Changer juste le nom de ville dans les mêmes phrases | Google détecte les patterns "mad-lib" (remplissage de trous) |
| Utiliser du contenu généré par IA sans réécriture | Patterns détectables (voir ai-writing-detection.md) |
| Créer des FAQ "locales" qui ne sont pas vraiment locales | "Quel est le prix d'un site à [Ville] ?" avec la même réponse partout = duplication |
| Dupliquer les données de contexte local entre villes proches | Toulouse et Montpellier doivent avoir des contenus réellement distincts |
| Ajouter des villes sans données locales pertinentes | Mieux vaut 10 pages solides que 19 pages moyennes |

---

## 5. Patterns AEO Intégrés

### 5.1. Pattern "Definition Block" (dans l'intro locale)

Chaque intro locale commence par une réponse directe à la requête implicite "agence web à [Ville]" :

```
## Développement web sur-mesure pour les entreprises [adjectif ville]

[Ville] concentre [fait spécifique]. [Contexte économique en 1 phrase].
Vizion Web accompagne les entreprises [de la région / du département]
dans la création de [services]. [Différenciation en 1 phrase].
```

Ce format permet à Google d'extraire un featured snippet pour "agence web [ville]".

### 5.2. Pattern "FAQ Block" (dans les FAQ locales)

Les questions locales sont formulées exactement comme les utilisateurs les recherchent :

```
### Combien coûte un site web à [Ville] ?

[Réponse directe en 1 phrase avec fourchette de prix].
[2-3 phrases de contexte avec détails des offres].
```

### 5.3. Pattern "Self-Contained Answer Block" (dans le contexte local)

Chaque section de contexte local contient des paragraphes autonomes que les moteurs de réponse peuvent extraire :

```
**Créer un site web à [Ville]** : [Ville] est [fait économique clé].
Les entreprises locales des secteurs [secteur 1], [secteur 2] et [secteur 3]
investissent de plus en plus dans des solutions web sur-mesure pour
[objectif business]. [Statistique ou fait différenciant].
```

---

## 6. Priorisation de la Mise en Œuvre

### Phase 1 : Infrastructure (Semaine 1)
1. Créer `data/cities-seo.ts` avec l'interface et les données pour Paris, Toulouse, Fort-de-France
2. Créer les composants `CityPageTemplate`, `CityHero`, `CityIntro`, `CityContext`, `CityFAQ`, `CityCTA`, `Breadcrumb`
3. Créer les builders de schema (`city-schema.ts`, `breadcrumb-schema.ts`)
4. Modifier `app/[slug]/page.tsx` pour utiliser le nouveau template

### Phase 2 : Contenu (Semaines 2-3)
5. Rédiger les données SEO pour les 16 villes restantes
6. Valider chaque page avec la checklist anti-duplication
7. Relire avec les critères ai-writing-detection.md

### Phase 3 : Validation (Semaine 4)
8. Crawl complet avec Screaming Frog ou équivalent
9. Vérifier l'indexation via Google Search Console
10. Tester les schemas avec le Rich Results Test
11. Mesurer le ratio de contenu unique par page
