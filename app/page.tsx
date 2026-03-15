import HomeSection from "@/components/home-section";
import { faqs, testimonials } from "@/data";
import { buildFaqJsonLd } from "@/lib/seo/faq";
import Script from "next/script";

export default function Page() {
  const faqSchema = buildFaqJsonLd(faqs);
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
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
          description:
            "Agence web spécialisée dans le développement d'applications web sur-mesure (MVP, SaaS, outils métier) et de sites professionnels (landing pages, sites vitrines, sites avancés).",
          sameAs: [
            "https://www.linkedin.com/in/dylann-xavero-349765a4/",
            "https://www.instagram.com/vizionweb",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "contact@vizionweb.fr",
              availableLanguage: ["French"],
            },
          ],
          areaServed: {
            "@type": "Country",
            name: "France",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: avgRating.toFixed(1),
            bestRating: "5",
            worstRating: "1",
            ratingCount: testimonials.length,
          },
        })}
      </Script>
    </>
  );
}
