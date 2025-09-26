import Typography from "./typography";
import Badge from "./ui/badge";
import DiscoveryIllustration from "@/components/code-illustrations/discovery-illustration";
import PrototypeIllustration from "@/components/code-illustrations/prototype-illustration";
import DevelopmentIllustration from "@/components/code-illustrations/development-illustration";
import LaunchIllustration from "@/components/code-illustrations/launch-illustration";
import FadeIn from "./ui/fade-in";

export function ProcessSteps() {
  const steps = [
    {
      title: "Découverte & cadrage",
      desc: "Nous commençons par un appel de 30 minutes pour comprendre vos objectifs, votre activité et les fonctionnalités essentielles à votre projet.",
      className: "lg:col-span-3 gap-16",
      illustration: <DiscoveryIllustration />,
    },
    {
      title: "UI/UX Design",
      desc: "Nous créons une maquette sur Figma pour valider l'interface et le parcours utilisateur avant d’écrire une seule ligne de code, les modifications sont illimitées.",
      className: "lg:col-span-4 gap-6",
      illustration: <PrototypeIllustration />,
    },
    {
      title: "Développement & intégrations",
      desc: "Nous développons votre site ou application avec du code sur-mesure, en y intégrant les fonctionnalités clés si besoin.",
      className: "lg:col-span-4 gap-20",
      illustration: <DevelopmentIllustration />,
    },
    {
      title: "Lancement & suivi",
      desc: "Votre site ou application est mis en ligne avec une check-list complète (performance, sécurité, responsive).",
      className: "lg:col-span-3 gap-16",
      illustration: <LaunchIllustration />,
    },
  ];
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Badge>Process</Badge>

        <Typography
          align="center"
          title={
            <>Chez Vizion Web, un process simple pour des résultats concrets</>
          }
          subtitle="Notre méthode éprouvée transforme votre vision en un projet digital efficace et rentable, avec un accompagnement clair et sans perte de temps."
        />

        <div className="grid grid-cols-1 lg:grid-cols-7 sm:gap-6 gap-4">
          {steps.map((s, i) => (
            <FadeIn
              key={s.title}
              delay={0.2 * (i + 1)}
              className={`flex flex-col items-start bg-background rounded-3xl sm:rounded-4xl p-6 sm:p-8 relative ${s.className}`}
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">
                  {i + 1}. {s.title}
                </h3>
                <p className="text-[15px] text-gray-dark">{s.desc}</p>
              </div>
              <div className="w-full h-full">{s.illustration}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
