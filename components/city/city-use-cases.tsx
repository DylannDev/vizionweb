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

interface CityUseCasesProps {
  city: CitySEO;
}

const defaultUseCases: NonNullable<CitySEO["useCases"]> = {
  title: "Les projets qu'on porte le mieux",
  points: [
    {
      title: "SaaS",
      description:
        "Plateforme accessible par abonnement, avec espaces clients, parcours d'inscription, facturation récurrente. Pour un éditeur qui veut atteindre ses premiers comptes payants ou une scale-up qui sort un nouveau module.",
    },
    {
      title: "Applications métier internes",
      description:
        "Outils sur-mesure pour vos équipes : pilotage commercial, suivi de production, gestion de planning, validation de devis. Remplace les Excel partagés qui freinent vos opérations.",
    },
    {
      title: "Site e-commerce custom",
      description:
        "Boutique en ligne sur-mesure quand Shopify ou WooCommerce coincent : catalogue complexe, tarification par client, intégration ERP, paiements différés. On bâtit autour de votre métier.",
    },
    {
      title: "Intégration IA dans un produit existant",
      description:
        "Ajout d'un copilote, d'un assistant conversationnel ou d'un moteur de recherche sémantique sur votre base. La fonctionnalité s'intègre dans l'app que vous avez déjà.",
    },
    {
      title: "Migration depuis WordPress ou app legacy",
      description:
        "Refonte d'un site WordPress vieillissant ou d'une app legacy vers une stack qui scale, garde le SEO et reste évolutive. Migration progressive, sans coupure ni perte de référencement.",
    },
    {
      title: "MVP pour valider une idée",
      description:
        "Version minimale fonctionnelle d'un concept produit, livrée en 2 à 3 semaines pour tester avec de vrais utilisateurs avant l'investissement complet.",
    },
  ],
};

export function CityUseCases({ city }: CityUseCasesProps) {
  const content = city.useCases ?? defaultUseCases;
  const badgeLabel = content.badge ?? "Cas d'usage";

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Accordéon à gauche */}
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
                <AccordionItem key={point.title} value={`usecase-${i}`}>
                  <AccordionTrigger bgColor="bg-primary-blue/5">
                    <span className="flex items-center gap-4">
                      <span className="text-primary-blue font-bold text-xl shrink-0">
                        0{i + 1}
                      </span>
                      <span className="text-primary-dark font-semibold text-base sm:text-lg text-left">
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

          {/* Image à droite */}
          <div className="order-first lg:order-last">
            <div className="relative aspect-square overflow-hidden rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter bg-white p-3">
              <Image
                src="/mockups/mockup-3.webp"
                alt={`Cas d'usage produit Vizion Web ${city.preposition} ${city.name}`}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL={getBlurDataURL("/mockups/mockup-3.webp")}
                className="object-cover object-center p-3 bg-white rounded-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CityUseCases;
