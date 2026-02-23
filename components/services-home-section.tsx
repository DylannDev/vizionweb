import Link from "next/link";
import Typography from "./typography";
import Badge from "./ui/badge";
import FadeIn from "./ui/fade-in";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import IconIllustration from "./ui/icon-illustration";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const cardDescriptions: Record<string, string> = {
  "mvp-proof-of-concept":
    "Validez votre idée rapidement avec un produit fonctionnel. Livré en 4-6 semaines, prêt à tester avec vos premiers utilisateurs.",
  "saas-sur-mesure":
    "Une application SaaS complète avec gestion utilisateurs, paiements et tableau de bord. De l'architecture à la mise en ligne.",
  "application-metier":
    "Automatisez vos processus internes avec un outil de gestion pensé pour votre workflow. Gain de temps et réduction d'erreurs.",
  "landing-page":
    "Une page web optimisée pour convertir vos visiteurs. Design moderne, copywriting efficace, livrée en 2-3 semaines.",
  "site-vitrine":
    "Un site professionnel qui renforce votre crédibilité. 6-10 pages, SEO optimisé, design sur-mesure.",
  "site-web-avance":
    "Un site avec fonctionnalités métier spécifiques : espace membre, réservation, intégrations API. Sur-mesure de A à Z.",
};

export function ServicesHomeSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <Badge align="center">Services</Badge>

      <Typography
        title="Les projets que nous réalisons"
        subtitle="Applications web, SaaS, outils métier et sites professionnels. Chaque projet est développé sur-mesure en React/Next.js et livré clé en main."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <FadeIn
            key={service.slug}
            delay={0.15 * (i + 1)}
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
                  {cardDescriptions[service.slug] || service.shortDescription}
                </CardContent>
              </Card>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.8} className="flex justify-center mt-10">
        <Link href="/services">
          <Button variant="black" size="md">
            Voir tous nos services
            <ArrowRight className="size-4" strokeWidth={2.5} />
          </Button>
        </Link>
      </FadeIn>
    </section>
  );
}

export default ServicesHomeSection;
