import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { services, getService } from "@/data/services";
import {
  buildServiceSchema,
  buildServiceBreadcrumbSchema,
} from "@/lib/seo/services";
import { buildFaqJsonLd } from "@/lib/seo/faq";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceProblemSolution } from "@/components/service-detail/service-problem-solution";
import { ServiceIncluded } from "@/components/service-detail/service-included";
import { ServiceTarget } from "@/components/service-detail/service-target";
import { ServiceProcess } from "@/components/service-detail/service-process";
import { ServiceFaq } from "@/components/service-detail/service-faq";
import { ServiceCta } from "@/components/service-detail/service-cta";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://vizionweb.fr/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://vizionweb.fr/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceSchema = buildServiceSchema(service);
  const breadcrumbSchema = buildServiceBreadcrumbSchema(service);
  const faqSchema = buildFaqJsonLd(service.faqs);

  return (
    <>
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
                  <BreadcrumbLink asChild>
                    <Link href="/services">Services</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{service.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <ServiceHero service={service} />
        <ServiceProblemSolution service={service} />
        <ServiceIncluded service={service} />
        <ServiceTarget service={service} />
        <ServiceProcess service={service} />
        <ServiceFaq service={service} />
        <ServiceCta title={service.ctaTitle} description={service.ctaDescription} />
      </main>

      <Script
        id="service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script
        id="service-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      {service.faqs.length > 0 && (
        <Script
          id="service-faq-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(faqSchema)}
        </Script>
      )}
    </>
  );
}
