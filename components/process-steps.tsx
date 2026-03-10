import Badge from "./ui/badge";
import Typography from "./typography";
import DiscoveryIllustration from "@/components/code-illustrations/discovery-illustration";
import PrototypeIllustration from "@/components/code-illustrations/prototype-illustration";
import DevelopmentIllustration from "@/components/code-illustrations/development-illustration";
import LaunchIllustration from "@/components/code-illustrations/launch-illustration";

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
      desc: "Vous voyez et testez chaque écran avant qu'une seule ligne de code soit écrite. On ajuste jusqu'à ce que ce soit exactement ce que vous vouliez.",
      className: "lg:col-span-5 gap-4",
      containerClassName: "bg-bg-blue p-4 max-h-[414px]",
      illustration: <PrototypeIllustration />,
    },
    {
      title: "Développement & intégrations",
      desc: "Votre site ou appli prend forme, brique par brique. Paiements, espace client, formulaires : vous validez chaque avancée en temps réel, rien n'avance sans votre feu vert. ",
      className: "lg:col-span-5 gap-6",
      containerClassName: "bg-bg-yellow p-4",
      illustration: <DevelopmentIllustration />,
    },
    {
      title: "Lancement & suivi",
      desc: "On vérifie la performance, la sécurité, et on vous forme pour que vous soyez autonome. Vous bénéficiez d'un support de 30 à 90 jours si quelque chose doit être ajusté.",
      className: "lg:col-span-4 gap-6",
      containerClassName: "bg-bg-rose p-4",
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
            <div
              key={s.title}
              className={`bg-white shadow-[0_4px_20px_0] shadow-gray-lighter flex flex-col justify-between rounded-4xl sm:rounded-[40px] p-2 relative ${s.className}`}
            >
              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-semibold">
                  {i + 1}. {s.title}
                </h3>
                <p className="text-gray-dark">{s.desc}</p>
              </div>
              <div
                className={`w-full h-full rounded-3xl sm:rounded-4xl overflow-hidden ${s.containerClassName}`}
              >
                {s.illustration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
