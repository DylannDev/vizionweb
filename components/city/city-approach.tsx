import type { CitySEO } from "@/data/cities";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import CallButton from "@/components/call-button";

interface CityApproachProps {
  city: CitySEO;
}

const defaultApproach = {
  title: "Du cadrage à la mise en production en 4 étapes",
  subtitle:
    "Un rythme calé sur ce que vous voyez à l'écran, pas sur des promesses dans un devis.",
  phases: [
    {
      title: "Cadrage produit",
      description:
        "Un appel de 30 minutes pour comprendre le problème métier et le contexte business. On en sort avec un périmètre clair, un devis chiffré et un planning sous 24 à 48h.",
    },
    {
      title: "Design Figma",
      description:
        "Maquettes complètes du parcours principal, validées avec vous. Le produit prend forme avant le code, ce qui évite les retours en arrière coûteux en développement.",
    },
    {
      title: "Sprints de développement",
      description:
        "Stack Next.js, Supabase, Vercel. Démos chaque vendredi, URLs de preview en continu. Vous voyez le produit grandir et donnez votre avis avant chaque jalon.",
    },
    {
      title: "Mise en production et support",
      description:
        "Déploiement sur votre domaine, monitoring en place, support de 30 à 90 jours inclus. Au-delà, on continue ensemble ou votre équipe reprend la main proprement.",
    },
  ],
};

export function CityApproach({ city }: CityApproachProps) {
  const content = city.approach ?? defaultApproach;

  return (
    <section className="py-16 md:py-24 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Badge variant="blue" align="center">
          Notre approche
        </Badge>
        <Typography
          as="h2"
          title={content.title}
          subtitle={content.subtitle}
          titleColor="text-white"
          subtitleColor="text-gray-light"
          titleSize="4xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {content.phases.map((phase, i) => (
            <div key={i} className="bg-secondary-dark rounded-4xl p-6 h-full">
              <div className="flex items-start gap-4">
                <span className="text-primary-blue font-bold text-2xl shrink-0 leading-none mt-1">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-xl">
                    {phase.title}
                  </h3>
                  <p className="text-gray-light text-lg mt-1 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 md:mt-12">
          <CallButton variant="blue" />
        </div>
      </div>
    </section>
  );
}

export default CityApproach;
