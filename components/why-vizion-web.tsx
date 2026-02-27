import Badge from "./ui/badge";
import FadeIn from "./ui/fade-in";
import { ContentCard } from "./ui/content-card";
import CallButton from "./call-button";

const pillars = [
  {
    iconSrc: "/icons/calendar.svg",
    iconBg: "bg-violet-500",
    title: "Des projets livrés en semaines, pas en mois",
    description:
      "Un MVP en 2 à 4 semaines. Un site vitrine en 1 à 2 semaines. Nous avançons vite parce que le process est rodé : cadrage serré, validations fréquentes, zéro aller-retour inutile.",
  },
  {
    iconSrc: "/icons/code.svg",
    iconBg: "bg-blue-500",
    title: "Du code robuste, pas un assemblage de plugins",
    description:
      "Chaque fonctionnalité est développée sur-mesure, sans dépendance à des plugins tiers. Le résultat : un produit stable, performant et pensé pour évoluer avec votre activité.",
  },
  {
    iconSrc: "/icons/business.svg",
    iconBg: "bg-amber-400",
    title: "On comprend votre métier, pas juste votre cahier des charges",
    description:
      "Avant de construire, on creuse. Qui sont vos utilisateurs ? Quel problème vous réglez ? Résultat : vous recevez un produit pensé pour votre marché, pas un livrable technique déconnecté du terrain.",
  },
];

export function WhyVizionWeb() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left — sticky text */}
          <div className="lg:sticky lg:top-24 lg:self-start lg:col-span-6 space-y-6">
            <Badge align="center" className="lg:mx-0">
              Pourquoi nous
            </Badge>
            <h2 className="font-heading font-semibold tracking-tight text-balance text-primary-dark text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left">
              Pourquoi choisir Vizion Web pour votre projet ?
            </h2>
            <p className="text-base sm:text-lg text-gray-dark text-balance text-center lg:text-left">
              Chez nous, pas d&apos;équipe surchargée, ni de process à rallonge.
              On combine design, développement et stratégie produit pour faire
              de votre projet un succès.
            </p>
            <div className="flex justify-center lg:justify-start">
              <CallButton />
            </div>
          </div>

          {/* Right — cards */}
          <div className="space-y-4 lg:col-span-6">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={0.2 * (i + 1)}>
                <ContentCard
                  layout="horizontal"
                  reverse={i % 2 !== 0}
                  title={pillar.title}
                  description={pillar.description}
                  iconSrc={pillar.iconSrc}
                  iconBg={pillar.iconBg}
                  watermarkVariant={i + 6}
                  hover={false}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyVizionWeb;
