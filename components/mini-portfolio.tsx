import Badge from "./ui/badge";
import Typography from "./typography";
import PortfolioCard from "@/components/ui/portfolio-card";
import { FadeIn } from "@/components/ui/fade-in";
import { portfolioProjects } from "@/data/projets";
import Link from "next/link";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";

export function MiniPortfolio() {
  const items = portfolioProjects.slice(0, 4);

  return (
    <section id="realisations" className="py-16 md:py-24">
      <Badge align="center">réalisations</Badge>

      <Typography
        title="Ce qu'on a construit pour nos clients"
        subtitle="SaaS, outils de gestion, sites vitrines. Voici un aperçu de nos derniers projets livrés."
      />

      {/* Mobile: below 850px, uniform delay */}
      <div className="grid gap-6 min-[850px]:hidden">
        {items.map((it) => (
          <FadeIn key={it.title} delay={0.2} className="h-full flex">
            <PortfolioCard {...it} />
          </FadeIn>
        ))}
      </div>

      {/* Desktop: >= 850px, delays grouped by pairs */}
      <div className="hidden min-[850px]:grid min-[850px]:grid-cols-2 gap-6">
        {items.map((it, index) => (
          <FadeIn
            key={it.title}
            delay={0.1 * (Math.floor(index / 2) + 1)}
            className="h-full flex"
          >
            <PortfolioCard {...it} />
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} className="flex justify-center mt-10">
        <Link href="/realisations">
          <Button variant="black" size="md">
            Voir toutes les réalisations
            <ArrowRight className="size-4" strokeWidth={2.5} />
          </Button>
        </Link>
      </FadeIn>
    </section>
  );
}

export default MiniPortfolio;
