import Badge from "./ui/badge";
import Typography from "./typography";
import PortfolioCard from "@/components/ui/portfolio-card";
import { FadeIn } from "@/components/ui/fade-in";
import { portfolioProjects } from "@/data/projets";
import { ArrowButton } from "./ui/arrow-button";

export function MiniPortfolio() {
  const items = portfolioProjects.slice(0, 4);

  return (
    <section
      id="realisations"
      className="py-16 md:py-24 bg-gradient-to-t from-background from-0% to-white to-10%"
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        {/* Titre sticky — reste visible derrière les cards */}
        <div className="sticky z-0" style={{ top: "110px" }}>
          <Badge align="center">réalisations</Badge>

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
            <div key={it.title} className="sticky top-[300px]">
              {/* <FadeIn delay={0.1 * (index + 1)}> */}
              <PortfolioCard {...it} reverse={index % 2 !== 0} />
              {/* </FadeIn> */}
            </div>
          ))}
        </div>
      </div>

      {/* Bouton — z-20 au-dessus de tout */}
      <div className="relative z-20">
        <FadeIn delay={0.4} className="flex justify-center mt-10">
          <ArrowButton href="/realisations" variant="black">
            Voir toutes les réalisations
          </ArrowButton>
        </FadeIn>
      </div>
    </section>
  );
}

export default MiniPortfolio;
