import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import CallButton from "@/components/call-button";
import FadeIn from "@/components/ui/fade-in";
import { getServiceCategories } from "@/data/services";
import { ServiceCategorySection } from "@/components/services-hub-section";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title:
    "Nos Services — Applications Web & Sites sur-mesure | Vizion Web",
  description:
    "Découvrez nos services : MVP, SaaS, applications métier, landing pages, sites vitrines et sites avancés. Solutions sur-mesure en React/Next.js.",
  alternates: {
    canonical: "https://vizionweb.fr/services",
  },
  openGraph: {
    title:
      "Nos Services — Applications Web & Sites sur-mesure | Vizion Web",
    description:
      "MVP, SaaS, applications métier, landing pages, sites vitrines et sites avancés. Solutions sur-mesure pour startups et entreprises.",
    url: "https://vizionweb.fr/services",
    type: "website",
  },
};

export default function ServicesPage() {
  const categories = getServiceCategories();

  return (
    <main>
      <div className="pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Badge align="center">Services</Badge>
          <Typography
            as="h1"
            title="Applications web et sites professionnels sur-mesure"
            subtitle="Vous lancez un SaaS, vous avez besoin d'un outil métier ou d'un site qui convertit ? Nous concevons et développons votre projet de A à Z."
          />
        </div>
      </section>

      {categories.map((cat, catIdx) => (
        <ServiceCategorySection
          key={cat.id}
          category={cat}
          index={catIdx}
        />
      ))}

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <Typography
            title="Vous ne savez pas par où commencer ?"
            subtitle="Réservez un appel de 30 minutes. On fait le point sur votre projet et on vous dit quel format est le plus adapté."
          />
          <FadeIn delay={0.3} className="flex justify-center">
            <CallButton />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
