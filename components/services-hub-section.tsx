import FadeIn from "./ui/fade-in";
import { ContentCard } from "./ui/content-card";
import type { ServiceCategoryGroup } from "@/data/services";

interface Props {
  category: ServiceCategoryGroup;
  index: number;
}

export function ServiceCategorySection({ category, index }: Props) {
  return (
    <section className="py-8 md:py-12">
      <div className="mb-10 max-w-lg">
        <h2 className="font-semibold">{category.title}</h2>
        <p className="text-gray-dark">{category.description}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.services.map((service, i) => (
          <FadeIn
            key={service.slug}
            delay={0.2 * (i + 1)}
            className="h-full flex"
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
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
