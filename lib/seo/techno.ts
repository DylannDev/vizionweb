import type { TechnoSEO } from "@/data/technos";
import { buildFaqJsonLd } from "./faq";

export function buildTechnoServiceSchema(techno: TechnoSEO) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Vizion Web — Agence ${techno.technoName}`,
    description: techno.meta.description,
    url: techno.meta.canonical,
    provider: {
      "@type": "Organization",
      name: "Vizion Web",
      url: "https://vizionweb.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://vizionweb.fr/logo.svg",
      },
    },
    serviceType: [
      `Développement avec ${techno.technoName}`,
      "Applications web sur-mesure",
      "SaaS sur-mesure",
      "Intégration IA",
    ],
    knowsAbout: [techno.technoName],
    priceRange: "$$$",
  };
}

export function buildTechnoBreadcrumbSchema(techno: TechnoSEO) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem" as const,
        position: 1,
        name: "Accueil",
        item: "https://vizionweb.fr",
      },
      {
        "@type": "ListItem" as const,
        position: 2,
        name: "Expertises",
        item: "https://vizionweb.fr/expertises",
      },
      {
        "@type": "ListItem" as const,
        position: 3,
        name: techno.technoName,
        item: techno.meta.canonical,
      },
    ],
  };
}

export function buildTechnoFaqSchema(techno: TechnoSEO) {
  return buildFaqJsonLd(techno.faqs);
}
