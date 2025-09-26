import Badge from "./ui/badge";
import Typography from "./typography";
import PortfolioCard from "@/components/ui/portfolio-card";
import { FadeIn } from "@/components/ui/fade-in";

export function MiniPortfolio() {
  const items = [
    {
      title: "Amazonia Investing",
      subtitle:
        "Landing page performante couplée à un blog éducatif et un dashboard CRM. Résultat : un outil complet pour informer, convertir et gérer les investisseurs au même endroit.",
      badge: ["Landing page", "Blog", "Dashboard / CRM"],
      src: "/investing.jpg",
      link: "https://amazonia-investing.com",
    },
    {
      title: "ChefKit",
      subtitle:
        "Application SaaS pour restaurateurs et traiteurs. Gestion des menus, réservations : une solution clé en main pour digitaliser leur activité.",
      badge: ["SaaS", "App Web", "Landing page"],
      src: "/chefkit.jpg",
    },
    {
      title: "Zen Lounge",
      subtitle:
        "Site web complet pour un salon de bien-être. Espace client, paiement en ligne et réservation intégrée pour une expérience fluide et professionnelle. Dashboard pour la gestion des réservations.",
      badge: ["Site Web Complet", "Dashboard / CRM"],
      src: "/zenlounge.jpg",
      link: "https://zenlounge-guyane.fr",
    },
    {
      title: "Hippokom",
      subtitle:
        "Site vitrine élégant et moderne pour une agence de communication. Design inspiré de l’univers marin, pensé pour refléter leur identité et attirer de nouveaux clients.",
      badge: ["Site Vitrine", "Blog"],
      src: "/hippokom.jpg",
    },
  ];
  return (
    <section id="realisations" className="py-16 md:py-24">
      <Badge align="center">réalisations</Badge>

      <Typography
        title="Des projets qui parlent d’eux-mêmes"
        subtitle="Chaque réalisation est pensée pour générer de la valeur concrète."
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
    </section>
  );
}

export default MiniPortfolio;
