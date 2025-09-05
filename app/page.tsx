import type { Metadata } from "next";
import Hero from "../components/hero";
import ProblemGrid from "../components/problem-grid";
import ServicesPreview from "../components/services-preview";
import ResultsStrip from "../components/results-strip";
import ProcessSteps from "../components/process-steps";
import PricingSimple from "../components/pricing-simple";
import MiniPortfolio from "../components/mini-portfolio";
import Testimonials from "../components/testimonials";
import FAQ from "../components/faq";
import StickyCtaMobile from "../components/sticky-cta-mobile";
import ServicesSection from "@/components/services-section";

export const metadata: Metadata = {
  title: "Vizion Web — Sites & applications web qui convertissent",
  description:
    "Sites vitrines, sites web avec fonctionnalités et applications web sur-mesure. Conçus pour convertir, livrés vite, support après lancement. Devis en 24h.",
  openGraph: {
    title: "Vizion Web — Sites & applications web qui convertissent",
    description:
      "Sites vitrines, sites web avec fonctionnalités et applications web sur-mesure. Objectif : plus de demandes, moins de frictions.",
    url: "https://vizion-web.com",
    siteName: "Vizion Web",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vizion Web — Sites & apps web qui convertissent",
    description:
      "Des sites et applications qui servent vos objectifs : plus de demandes, moins de frictions.",
  },
};

export default function Page() {
  return (
    <main>
      <Hero />

      {/* <ProblemGrid />
      <ServicesPreview />
      <ResultsStrip />
      <ProcessSteps /> */}
      <ServicesSection />
      {/* <PricingSimple />
      <MiniPortfolio />
      <Testimonials /> */}
      <FAQ />
      <StickyCtaMobile />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Combien de temps pour livrer ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Landing/vitrine : 1–2 semaines. Fonctionnel : 2–4 semaines. App : 4–8 semaines.",
                },
              },
              {
                "@type": "Question",
                name: "Qui s’occupe du contenu ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On vous guide avec un kit simple. Possibilité de prise en charge (option).",
                },
              },
              {
                "@type": "Question",
                name: "Qui possède le site / l’app ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vous. Propriété du code et accès complets.",
                },
              },
              {
                "@type": "Question",
                name: "Y a-t-il un support après lancement ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, 30 jours inclus. Packs de suivi disponibles.",
                },
              },
              {
                "@type": "Question",
                name: "Et le budget ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fourchettes affichées. Un devis précis sous 24h.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
