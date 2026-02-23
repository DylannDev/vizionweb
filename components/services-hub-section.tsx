import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import IconIllustration from "./ui/icon-illustration";
import FadeIn from "./ui/fade-in";
import Typography from "./typography";
import { ArrowRight } from "lucide-react";
import type { ServiceCategoryGroup } from "@/data/services";

interface Props {
  category: ServiceCategoryGroup;
  index: number;
}

export function ServiceCategorySection({ category, index }: Props) {
  return (
    <section
      className={
        index % 2 === 0 ? "py-16 md:py-24" : "py-16 md:py-24 bg-background"
      }
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Typography
          title={category.title}
          subtitle={category.description}
          as="h2"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.services.map((service, i) => (
            <FadeIn
              key={service.slug}
              delay={0.2 * (i + 1)}
              className="h-full flex"
            >
              <Link
                href={`/services/${service.slug}`}
                className="flex h-full w-full"
              >
                <Card
                  radius="2xl"
                  className="group hover:ring-6 ring-gray-lighter transition-all duration-300 w-full"
                >
                  <CardHeader className="space-y-8">
                    <IconIllustration icon={service.icon} />
                    <CardTitle className="text-gray-light group-hover:text-primary-dark transition-colors duration-300">
                      {service.shortTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.shortDescription}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary-blue group-hover:gap-2 transition-all duration-200">
                      En savoir plus{" "}
                      <ArrowRight className="size-3.5" strokeWidth={2.5} />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
