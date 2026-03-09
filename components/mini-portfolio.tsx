import Badge from "./ui/badge";
import Typography from "./typography";
import PortfolioCard from "@/components/ui/portfolio-card";

import { portfolioProjects } from "@/data/projets";
import { ArrowButton } from "./ui/arrow-button";

interface MiniPortfolioProps {
  className?: string;
}

export function MiniPortfolio({ className }: MiniPortfolioProps = {}) {
  const items = portfolioProjects.slice(0, 4);

  return (
    <section
      id="realisations"
      className={className ?? "py-16 md:py-24 bg-white"}
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        {/* Titre sticky — reste visible derrière les cards */}
        <div className="sm:sticky z-0 sm:top-[110px]">
          <Badge align="center">Réalisations</Badge>

          <Typography
            title="Ce qu'on a construit pour nos clients"
            subtitle="Applications web, outils de gestion, sites web avancés. Voici un aperçu de nos derniers projets livrés."
            titleMaxWidth="max-4xl"
            subtitleMaxWidth="max-3xl"
          />
        </div>

        {/* Cards — z-10 au-dessus du titre, pb pour le temps d'empilement */}
        <div className="relative z-10 flex flex-col gap-6">
          {items.map((it, index) => (
            <div key={it.title} className="sm:sticky sm:top-[300px]">
              <PortfolioCard {...it} reverse={index % 2 !== 0} />
            </div>
          ))}
        </div>
      </div>

      {/* Bouton — z-20 au-dessus de tout */}
      <div className="relative z-20">
        <div className="flex justify-center mt-10">
          <ArrowButton href="/realisations" variant="black">
            Voir toutes nos réalisations
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}

export default MiniPortfolio;
