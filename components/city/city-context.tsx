import Image from "next/image";
import type { CitySEO } from "@/data/cities";
import Badge from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CityContextProps {
  city: CitySEO;
}

export function CityContext({ city }: CityContextProps) {
  const accordionItems = [
    { title: "Quartiers clés", items: city.localContext.quartiersCles },
    { title: "Zones d'activité", items: city.localContext.zonesActivite },
    { title: "Secteurs dominants", items: city.localContext.secteursDominants },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <FadeIn>
            <div className="lg:sticky lg:top-8">
              <div className="relative aspect-square sm:aspect-video lg:aspect-[3/4] overflow-hidden rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter">
                <Image
                  src={city.images.context.src}
                  alt={city.images.context.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center p-3 bg-white rounded-[40px]"
                />
              </div>
            </div>
          </FadeIn>

          {/* Contenu */}
          <div>
            <FadeIn>
              <Badge align="left">Contexte local</Badge>
              <h2 className="text-[22px] sm:text-[28px] font-semibold text-primary-dark leading-tight mt-4 mb-6">
                Pourquoi {city.name} est un terrain stratégique pour votre
                projet web
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg text-gray-dark leading-relaxed mb-6">
                {city.localContext.specificites}
              </p>
            </FadeIn>

            {city.localContext.population && (
              <FadeIn delay={0.3}>
                <p className="text-lg sm:text-xl font-semibold text-primary-dark mb-8">
                  Population : {city.localContext.population}
                </p>
              </FadeIn>
            )}

            <FadeIn delay={0.4}>
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-2"
              >
                {accordionItems.map((block, idx) => (
                  <AccordionItem key={block.title} value={`context-${idx}`}>
                    <AccordionTrigger bgColor="bg-background">
                      {block.title}
                    </AccordionTrigger>
                    <AccordionContent bgColor="bg-background">
                      <ul className="space-y-2">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="text-gray-dark flex items-start gap-2"
                          >
                            <span className="text-primary-blue shrink-0">
                              •
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CityContext;
