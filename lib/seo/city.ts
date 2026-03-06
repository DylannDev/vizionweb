import type { CitySEO } from "@/data/cities";
import type { FaqItem } from "./faq";
import { buildFaqJsonLd } from "./faq";

export function buildCityServiceSchema(city: CitySEO) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Vizion Web — Agence web ${city.preposition} ${city.name}`,
    description: city.meta.description,
    url: city.meta.canonical,
    provider: {
      "@type": "Organization",
      name: "Vizion Web",
      url: "https://vizionweb.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://vizionweb.fr/logo.svg",
      },
    },
    areaServed: {
      "@type": city.type === "city" ? "City" : "AdministrativeArea",
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

export function buildCityBreadcrumbSchema(city: CitySEO) {
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
        name: `Agence web ${city.preposition} ${city.name}`,
        item: city.meta.canonical,
      },
    ],
  };
}

export function buildCityFaqSchema(
  city: CitySEO,
  globalFaqs: FaqItem[]
) {
  const allFaqs: FaqItem[] = [
    ...city.localFaqs.map((f) => ({ q: f.question, a: f.answer })),
    ...globalFaqs,
  ];
  return buildFaqJsonLd(allFaqs);
}
