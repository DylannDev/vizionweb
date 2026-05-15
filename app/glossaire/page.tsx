import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import { PageHero } from "@/components/ui/page-hero";
import GlossaireFilter from "@/components/glossaire-filter";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { glossaryTerms } from "@/data/glossaire";

export const metadata: Metadata = {
  title:
    "Glossaire web, IA et SaaS : tous les termes techniques expliqués | Vizion Web",
  description:
    "Glossaire complet des termes utilisés par Vizion Web : MVP, SaaS, RAG, LLM, Server Components, RGPD et 75 autres. Définitions claires et accessibles.",
  alternates: {
    canonical: "https://vizionweb.fr/glossaire",
  },
  openGraph: {
    title:
      "Glossaire web, IA et SaaS : tous les termes techniques expliqués | Vizion Web",
    description:
      "Plus de 80 termes définis : IA et LLM, architecture web, frontend, backend, SEO, business et automatisation.",
    url: "https://vizionweb.fr/glossaire",
    type: "website",
  },
};

export default function GlossairePage() {
  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossaire Vizion Web",
    description:
      "Glossaire des termes techniques utilisés par Vizion Web : IA, LLM, SaaS, architecture web, SEO et plus.",
    url: "https://vizionweb.fr/glossaire",
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: `https://vizionweb.fr/glossaire/${t.slug}`,
      inDefinedTermSet: "https://vizionweb.fr/glossaire",
    })),
  };

  return (
    <>
      <main>
        <PageHero>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Glossaire</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Badge align="center">Glossaire</Badge>
          <Typography
            as="h1"
            title="Le vocabulaire web, IA et SaaS expliqué simplement"
            subtitle={`${glossaryTerms.length} termes définis en français, classés par catégorie. Pour comprendre les mots qu'on utilise sur le site.`}
          />
        </PageHero>

        <div className="relative bg-white">
          <div className="h-40 absolute top-0 left-0 right-0 bg-gradient-to-b from-background to-white z-0" />
          <div className="h-40 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-white z-0" />
          <div className="relative max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-16 z-10">
            <GlossaireFilter terms={glossaryTerms} />
          </div>
        </div>
      </main>

      <Script
        id="glossary-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(definedTermSetSchema)}
      </Script>
    </>
  );
}
