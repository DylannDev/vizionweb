import Badge from "@/components/ui/badge";

interface MethodSummaryProps {
  className?: string;
}

const steps = [
  {
    title: "Cadrage produit",
    description:
      "Un appel de 30 minutes pour comprendre le problème métier, pas seulement les specs. On en sort avec un périmètre clair et un devis chiffré sous 24h.",
  },
  {
    title: "Design Figma",
    description:
      "Maquettes orientées conversion, validées avec vous avant la première ligne de code. Modifications illimitées jusqu'à validation.",
  },
  {
    title: "Sprints d'une semaine",
    description:
      "Développement itératif avec démo à chaque fin de sprint. Vous voyez l'avancement en temps réel, pas après 3 mois de tunnel.",
  },
  {
    title: "MVP livré en 3 semaines",
    description:
      "Un produit utilisable, propre et prêt à recevoir vos premiers utilisateurs. Code 100% à vous, déployé sur Vercel.",
  },
  {
    title: "Itération + scale",
    description:
      "90 jours de support post-lancement. Ensuite on continue ensemble pour faire évoluer le produit, ou vous reprenez la main avec votre équipe.",
  },
];

export function MethodSummary({ className = "" }: MethodSummaryProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <Badge align="center">Méthode</Badge>
          <h2 className="text-[22px] sm:text-[28px] font-semibold text-primary-dark leading-tight mt-4">
            Du cadrage au MVP livré en 3 semaines
          </h2>
          <p className="text-base sm:text-lg text-gray-dark mt-3 max-w-2xl mx-auto">
            Une méthode agile, transparente, sans surprise. Sprints courts,
            démos régulières, code 100% à vous.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <li
              key={step.title}
              className="bg-background rounded-2xl p-6 flex flex-col gap-3"
            >
              <span className="text-primary-blue font-bold text-2xl">
                0{idx + 1}
              </span>
              <h3 className="text-lg font-semibold text-primary-dark">
                {step.title}
              </h3>
              <p className="text-sm text-gray-dark leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default MethodSummary;
