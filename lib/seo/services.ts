import type { Service } from "@/data/services";

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Vizion Web",
      url: "https://vizionweb.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://vizionweb.fr/logo.svg",
      },
    },
    areaServed: "FR",
    url: `https://vizionweb.fr/services/${service.slug}`,
  };
}

export function buildServiceBreadcrumbSchema(service?: Service) {
  const items = [
    {
      "@type": "ListItem" as const,
      position: 1,
      name: "Accueil",
      item: "https://vizionweb.fr",
    },
    {
      "@type": "ListItem" as const,
      position: 2,
      name: "Services",
      item: "https://vizionweb.fr/services",
    },
  ];

  if (service) {
    items.push({
      "@type": "ListItem" as const,
      position: 3,
      name: service.title,
      item: `https://vizionweb.fr/services/${service.slug}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
