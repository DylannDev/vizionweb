import type { Metadata } from "next";
import { portfolioProjects } from "@/data/projets";
import PortfolioCard from "@/components/ui/portfolio-card";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import CallButton from "@/components/call-button";
import FadeIn from "@/components/ui/fade-in";
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

      <section className="pb-16 md:pb-24 bg-gradient-to-b from-background from-0% to-white to-10%">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Mobile: below 850px */}
          <div className="grid gap-6 min-[850px]:hidden">
            {portfolioProjects.map((it) => (
              <FadeIn key={it.title} delay={0.2} className="h-full flex">
                <PortfolioCard {...it} />
              </FadeIn>
            ))}
          </div>

          {/* Desktop: >= 850px */}
          <div className="hidden min-[850px]:grid min-[850px]:grid-cols-2 gap-6">
            {portfolioProjects.map((it, index) => (
              <FadeIn
                key={it.title}
                delay={0.1 * (Math.floor(index / 2) + 1)}
                className="h-full flex"
              >
                <PortfolioCard {...it} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
