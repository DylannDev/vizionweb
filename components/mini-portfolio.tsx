import Badge from "./ui/badge";
import Typography from "./typography";
import PortfolioCard from "@/components/ui/portfolio-card";

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
      <div className="mx-auto max-w-6xl px-4">
        <Badge align="center">réalisations</Badge>
        <Typography
          title={<>Des projets qui parlent d’eux-mêmes</>}
          subtitle="Chaque réalisation est pensée pour générer de la valeur concrète."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <PortfolioCard key={it.title} {...it} />
          ))}
        </div>
        {/* <div className="mt-6">
          <Button asChild>
            <Link href="/realisations">Voir toutes les réalisations</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}

export default MiniPortfolio;
