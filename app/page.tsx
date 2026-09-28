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
            "Agence web basée en Guyane et toujours présente à Montpellier, spécialisée dans le développement de SaaS, MVP et applications métier sur-mesure, avec intégration IA (OpenAI, Claude). Devis chiffré sous 24h. MVP livré en 3 semaines.",
          knowsAbout: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Figma",
            "Node.js",
            "PostgreSQL",
            "Supabase",
            "OpenAI",
            "Claude",
            "Vercel",
            "SaaS",
            "MVP",
            "Application métier",
            "Intégration IA",
          ],
          sameAs: [
            "https://www.linkedin.com/in/dylann-xavero-349765a4/",
            "https://www.instagram.com/vizionweb_agence",
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
