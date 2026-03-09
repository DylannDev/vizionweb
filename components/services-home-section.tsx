import Badge from "./ui/badge";
import Typography from "./typography";

import { ContentCard } from "./ui/content-card";
import { ArrowButton } from "./ui/arrow-button";
import { services } from "@/data/services";
import { PiCheckBold } from "react-icons/pi";

const sellingPoints = [
  "Livré en quelques semaines",
  "Chef de projet dédié",
  "30-90 jours de support inclus",
];

interface ServicesHomeSectionProps {
  titleOverride?: string;
  subtitleOverride?: string;
  className?: string;
}

export function ServicesHomeSection({
  titleOverride,
  subtitleOverride,
  className,
}: ServicesHomeSectionProps = {}) {
  return (
    <section
      id="services"
      className={
        className ??
        "pt-8 pb-16 md:pb-24 md:pt-16 bg-gradient-to-b from-background from-0% to-white to-10%"
      }
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <Badge align="center" className="mb-4 md:mx-0">
          Services
        </Badge>
        <Typography
          variant="split"
          title={titleOverride ?? "Les projets que nous réalisons"}
          subtitle={
            subtitleOverride ??
            "Applications web, SaaS, outils métier et sites professionnels. Chaque projet est développé sur-mesure et livré clé en main."
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className="h-full flex max-sm:sticky top-[100px]"
            >
              <ContentCard
                title={service.shortTitle}
                description={service.shortDescription}
                iconSrc={service.iconSrc}
                iconBg={service.iconBg}
                watermarkVariant={i}
                href={`/services/${service.slug}`}
                actionLabel="En savoir plus"
                centered
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 sm:gap-y-3 mt-8 mb-6 sm:mt-12 sm:mb-10">
          {sellingPoints.map((point) => (
            <div key={point} className="flex items-center gap-1.5 py-2">
              <div className="rounded-full bg-gradient-to-b from-primary-blue-dark to-primary-blue-border p-1">
                <PiCheckBold className="size-3 text-white" />
              </div>
              <span className="text-base font-medium text-primary-dark">
                {point}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <ArrowButton href="/services" variant="black">
            Voir tous nos services
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}

export default ServicesHomeSection;
