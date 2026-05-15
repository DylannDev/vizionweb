import Image from "next/image";
import type { CitySEO } from "@/data/cities";
import Badge from "@/components/ui/badge";
import { getBlurDataURL } from "@/lib/blur";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface CityValuePropsProps {
  city: CitySEO;
}

const defaultValueProps: NonNullable<CitySEO["valueProps"]> = {
  title: "Pourquoi travailler avec Vizion Web",
  points: [
    {
      title: "Un seul interlocuteur, du devis à la production",
      description:
        "Vous parlez au développeur qui code. Pas de chef de projet qui répète vos messages, pas de junior qui apprend sur votre projet. Les décisions techniques se prennent en temps réel.",
    },
    {
      title: "Devis chiffré sous 24 à 48h",
      description:
        "Un appel de cadrage de 30 minutes suffit pour vous renvoyer un périmètre, un planning et un prix fixe. Pas de devis vague à étages, pas de surprise en cours de route.",
    },
    {
      title: "MVP livré en 3 semaines, pas en 6 mois",
      description:
        "Un produit utilisable dès la troisième semaine, prêt à recevoir vos premiers utilisateurs. La suite se construit par itérations courtes sur ce que vous observez du terrain.",
    },
    {
      title: "Code 100% à vous, sans dépendance technique",
      description:
        "Le repository GitHub, le compte Vercel, la base Supabase : tout est à votre nom dès le premier jour. Vous reprenez la main avec votre équipe ou un autre prestataire quand vous voulez.",
    },
    {
      title: "Stack moderne, faite pour évoluer",
      description:
        "Next.js, TypeScript, Supabase, Vercel : la stack qu'on retrouve chez les SaaS qui montent en charge. Pas de WordPress à réécrire, pas de no-code qui craque à la première feature complexe.",
    },
  ],
};

export function CityValueProps({ city }: CityValuePropsProps) {
  const content = city.valueProps ?? defaultValueProps;
  const badgeLabel = content.badge ?? "Pourquoi nous";

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image à gauche */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter bg-white p-3">
              <Image
                src="/mockups/mockup-2.webp"
                alt={`Travailler avec Vizion Web ${city.preposition} ${city.name}`}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL={getBlurDataURL("/mockups/mockup-2.webp")}
                className="object-cover object-center p-3 bg-white rounded-[40px]"
              />
            </div>
          </div>

          {/* Accordéon à droite */}
          <div>
            <Badge variant="blue" align="left" className="mb-4">
              {badgeLabel}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-6 leading-tight">
              {content.title}
            </h2>
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-2"
            >
              {content.points.map((point, i) => (
                <AccordionItem key={point.title} value={`value-${i}`}>
                  <AccordionTrigger bgColor="bg-primary-blue/5">
                    <span className="flex items-center gap-4">
                      <span className="text-primary-blue font-bold text-xl shrink-0">
                        0{i + 1}
                      </span>
                      <span
                        className={cn(
                          "text-primary-dark font-semibold text-base sm:text-lg text-left",
                        )}
                      >
                        {point.title}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent bgColor="bg-primary-blue/5">
                    <p className="text-gray-dark leading-relaxed">
                      {point.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CityValueProps;
