import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import CallButton from "@/components/call-button";
import { PageHero } from "@/components/ui/page-hero";
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
  title: "Nos Services — Applications Web & Sites sur-mesure | Vizion Web",
  description:
    "Découvrez nos services : MVP, SaaS, applications métier, landing pages, sites vitrines et sites avancés. Solutions sur-mesure en React/Next.js.",
  alternates: {
    canonical: "https://vizionweb.fr/services",
  },
  openGraph: {
    title: "Nos Services — Applications Web & Sites sur-mesure | Vizion Web",
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
      <PageHero>
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

        <Badge align="center">Services</Badge>
        <Typography
          as="h1"
          title="Applications web et sites professionnels sur-mesure"
          subtitle="Vous lancez un SaaS, vous avez besoin d'un outil métier ou d'un site qui convertit ? Nous concevons et développons votre projet de A à Z."
        />
        <div className="flex justify-center">
          <CallButton />
        </div>
      </PageHero>

      <div className="bg-gradient-to-b from-background from-0% via-white via-50% to-background to-100%">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {categories.map((cat, catIdx) => (
            <ServiceCategorySection
              key={cat.id}
              category={cat}
              index={catIdx}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
