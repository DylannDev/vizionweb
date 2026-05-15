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
import FAQ from "@/components/faq";

export const metadata: Metadata = {
  title: "Tous nos services | applications - IA - automatisation | Vizion Web",
  description:
    "MVP, SaaS, application métier, e-commerce, dev web, UI/UX, IA générative, n8n. Devis chiffré sous 24h.",
  alternates: {
    canonical: "https://vizionweb.fr/services",
  },
  openGraph: {
    title: "Services : produits digitaux + IA & automatisation | Vizion Web",
    description:
      "MVP, SaaS, application métier, e-commerce, dev web, UI/UX, IA générative, automatisation n8n.",
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
          title="On conçoit et on développe vos produits digitaux sur-mesure"
          subtitle="SaaS, MVP, application métier, e-commerce, intégration IA, automatisation. On mets tout en oeuvre pour passer d'une idée à un produit fini."
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
        <FAQ />
      </div>
    </main>
  );
}
