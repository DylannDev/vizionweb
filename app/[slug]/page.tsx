import type { Metadata } from "next";
import { CITIES, COUNTRIES, faqs } from "@/data";
import { getCity } from "@/data/cities";
import NotFound from "../not-found";
import { CityHero } from "@/components/city/city-hero";
import { CityIntro } from "@/components/city/city-intro";
import { CityContext } from "@/components/city/city-context";
import { CityFaq } from "@/components/city/city-faq";
import { ServicesHomeSection } from "@/components/services-home-section";
import MiniPortfolio from "@/components/mini-portfolio";
import {
  buildCityServiceSchema,
  buildCityBreadcrumbSchema,
  buildCityFaqSchema,
} from "@/lib/seo/city";

export function generateStaticParams() {
  return [...CITIES, ...COUNTRIES].map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);

  if (!city) {
    return { title: "Page non trouvée | Vizion Web" };
  }

  return {
    title: city.meta.title,
    description: city.meta.description,
    alternates: { canonical: city.meta.canonical },
    openGraph: {
      title: city.meta.title,
      description: city.meta.description,
      type: "website",
      url: city.meta.canonical,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCity(slug);

  if (!city) {
    return <NotFound />;
  }

  const globalFaqs = city.globalFaqIndices.map((i) => faqs[i]).filter(Boolean);

  return (
    <>
      <CityHero city={city} />
      <CityIntro city={city} />
      <ServicesHomeSection
        className="pt-8 pb-16 md:pb-24 md:pt-16 bg-white"
        titleOverride={`Nos services web ${city.preposition} ${city.name}`}
        subtitleOverride={`Applications web, SaaS, outils métier et sites professionnels. Chaque projet est développé sur-mesure pour les entreprises ${city.preposition} ${city.name}.`}
      />
      <CityContext city={city} />
      <MiniPortfolio className="py-16 md:py-24 bg-white" />
      <CityFaq city={city} globalFaqs={globalFaqs} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildCityServiceSchema(city)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildCityBreadcrumbSchema(city)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildCityFaqSchema(city, globalFaqs)),
        }}
      />
    </>
  );
}
