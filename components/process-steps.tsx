import Badge from "./ui/badge";
import Typography from "./typography";
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
      className: "lg:col-span-4 gap-4",
      containerClassName: "bg-bg-violet pt-16 pb-8",
      illustration: <DiscoveryIllustration />,
    },
    {
      title: "UI/UX Design",
      desc: "Nous créons une maquette sur Figma pour valider l'interface et le parcours utilisateur avant d'écrire une seule ligne de code, les modifications sont illimitées.",
      className: "lg:col-span-5 gap-4",
      containerClassName: "bg-bg-blue p-8 max-h-[414px]",
      illustration: <PrototypeIllustration />,
    },
    {
      title: "Développement & intégrations",
      desc: "Votre site ou application prend forme en code React/Next.js. Paiements, espace client, formulaires, intégrations : on construit ce dont vous avez besoin, avec des points d'avancement réguliers.",
      className: "lg:col-span-5 gap-6",
      containerClassName: "bg-bg-yellow p-8",
      illustration: <DevelopmentIllustration />,
    },
    {
      title: "Lancement & suivi",
      desc: "Mise en ligne, vérification performance et sécurité, formation rapide pour que vous soyez autonome. Plus 30 jours de support inclus pour ajuster ce qui doit l'être.",
      className: "lg:col-span-4 gap-6",
      containerClassName: "bg-bg-rose p-8",
      illustration: <LaunchIllustration />,
    },
  ];
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Badge align="center" className="mb-4">
          Process
        </Badge>
        <Typography
          variant="stacked"
          title="4 étapes, un projet livré"
          subtitle="De l'appel découverte à la mise en ligne, voici comment se déroule chaque projet chez nous."
        />

        <div className="grid grid-cols-1 lg:grid-cols-9 sm:gap-6 gap-4">
          {steps.map((s, i) => (
            <FadeIn
              key={s.title}
              delay={0.2 * (i + 1)}
              className={`bg-white shadow-[0_4px_20px_0] shadow-gray-lighter flex flex-col justify-between rounded-3xl sm:rounded-4xl p-2 relative ${s.className}`}
            >
              <div className="flex flex-col gap-2 p-4">
                <h3 className="font-semibold">
                  {i + 1}. {s.title}
                </h3>
                <p className="text-gray-dark">{s.desc}</p>
              </div>
              <div
                className={`w-full h-full rounded-3xl overflow-hidden ${s.containerClassName}`}
              >
                {s.illustration}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
