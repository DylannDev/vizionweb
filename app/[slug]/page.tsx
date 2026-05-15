import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, COUNTRIES, faqs } from "@/data";
import { getCity } from "@/data/cities";
import { getTechno, getAllTechnoSlugs } from "@/data/technos";
import { CityHero } from "@/components/city/city-hero";
import { CityIntro } from "@/components/city/city-intro";
import { CityFaq } from "@/components/city/city-faq";
import { CityValueProps } from "@/components/city/city-value-props";
import { CityUseCases } from "@/components/city/city-use-cases";
import { CityApproach } from "@/components/city/city-approach";
import { ServicesHomeSection } from "@/components/services-home-section";
import { ServiceStack } from "@/components/service-detail/service-stack";
import { Testimonials } from "@/components/testimonials";
import MiniPortfolio from "@/components/mini-portfolio";
import { TechnoPage } from "@/components/techno/techno-page";
import {
  buildCityServiceSchema,
  buildCityBreadcrumbSchema,
  buildCityFaqSchema,
} from "@/lib/seo/city";
import {
  buildTechnoServiceSchema,
  buildTechnoBreadcrumbSchema,
  buildTechnoFaqSchema,
} from "@/lib/seo/techno";

export function generateStaticParams() {
  const cityParams = [...CITIES, ...COUNTRIES].map((c) => ({ slug: c.slug }));
  const technoParams = getAllTechnoSlugs().map((slug) => ({ slug }));
  return [...cityParams, ...technoParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (city) {
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

  const techno = getTechno(slug);
  if (techno) {
    return {
      title: techno.meta.title,
      description: techno.meta.description,
      alternates: { canonical: techno.meta.canonical },
      openGraph: {
        title: techno.meta.title,
        description: techno.meta.description,
        type: "website",
        url: techno.meta.canonical,
      },
    };
  }

  return { title: "Page non trouvée | Vizion Web" };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. City page
  const city = getCity(slug);
  if (city) {
    const globalFaqs = city.globalFaqIndices
      .map((i) => faqs[i])
      .filter(Boolean);
    return (
      <>
        <CityHero city={city} />
        <CityIntro city={city} />
        <ServicesHomeSection
          className="pt-8 pb-16 md:pb-24 md:pt-16 bg-white"
          titleOverride={`Nos terrains de jeu ${city.preposition} ${city.name}`}
          subtitleOverride={`SaaS sur-mesure, MVP, applications métier et intégrations IA. Chaque projet livré en quelques semaines, devis chiffré sous 24h.`}
        />
        <MiniPortfolio className="py-16 md:py-24 bg-white" />
        <CityValueProps city={city} />
        <CityApproach city={city} />
        <CityUseCases city={city} />
        <ServiceStack />
        <Testimonials />
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

  // 2. Techno page
  const techno = getTechno(slug);
  if (techno) {
    return (
      <>
        <TechnoPage techno={techno} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildTechnoServiceSchema(techno)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildTechnoBreadcrumbSchema(techno)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildTechnoFaqSchema(techno)),
          }}
        />
      </>
    );
  }

  // 3. 404
  notFound();
}
