import type { Metadata } from "next";
import { portfolioProjects } from "@/data/projets";
import PortfolioCard from "@/components/ui/portfolio-card";
import CallButton from "@/components/call-button";
import { PageHero } from "@/components/ui/page-hero";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import FAQ from "@/components/faq";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import { HighlightsSection } from "@/components/highlights-section";

export const metadata: Metadata = {
  title: "Nos Réalisations — Sites & Applications sur-mesure | Vizion Web",
  description:
    "Découvrez nos projets : sites vitrines, landing pages, applications web et SaaS. Chaque réalisation est pensée pour générer de la valeur concrète.",
  alternates: {
    canonical: "https://vizionweb.fr/realisations",
  },
  openGraph: {
    title: "Nos Réalisations — Sites & Applications sur-mesure | Vizion Web",
    description:
      "Découvrez nos projets : sites vitrines, landing pages, applications web et SaaS.",
    url: "https://vizionweb.fr/realisations",
    type: "website",
  },
};

export default function RealisationsPage() {
  return (
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
              <BreadcrumbPage>Réalisations</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Badge align="center">réalisations</Badge>
        <Typography
          title="Des projets qui parlent d'eux-mêmes"
          subtitle="Chaque réalisation est pensée pour générer de la valeur concrète. Découvrez l'ensemble de nos projets."
        />
        <div className="flex justify-center">
          <CallButton />
        </div>
      </PageHero>

      <section className="bg-gradient-to-b from-background from-0% to-white to-10%">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioProjects.map((it) => (
              <PortfolioCard key={it.title} {...it} vertical />
            ))}
          </div>
        </div>
      </section>

      <HighlightsSection />

      <section>
        <FAQ />
      </section>
    </main>
  );
}
