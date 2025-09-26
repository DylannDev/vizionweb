import HomeSection from "@/components/home-section";
import { faqs } from "@/data";
import { buildFaqJsonLd } from "@/lib/seo/faq";
import Script from "next/script";

export default function Page() {
  const faqSchema = buildFaqJsonLd(faqs);
  return (
    <>
      <HomeSection />

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      <Script
        id="service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Création de sites & applications web",
          provider: {
            "@type": "Organization",
            name: "Vizion Web",
            url: "https://vizionweb.fr",
          },
          areaServed: "FR",
          serviceType: [
            "Sites web",
            "Sites internet",
            "Site vitrine",
            "Landing page",
            "Applications web",
            "SaaS",
          ],
        })}
      </Script>

      <Script
        id="org-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vizion Web",
          url: "https://vizionweb.fr",
          logo: "https://vizionweb.fr/logo.svg",
          sameAs: ["https://www.linkedin.com/company/vizionweb"],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "contact@vizionweb.fr",
            },
          ],
        })}
      </Script>
    </>
  );
}
