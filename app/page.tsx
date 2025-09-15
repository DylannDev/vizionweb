import type { Metadata } from "next";
import Hero from "../components/hero";
import ProcessSteps from "../components/process-steps";
import MiniPortfolio from "../components/mini-portfolio";
import { Testimonials } from "@/components/testimonials";
import FAQ from "../components/faq";
import StickyCtaMobile from "../components/sticky-cta-mobile";
import ServicesSection from "@/components/services-section";
import PricingSection from "@/components/pricing-section";
import LogosSection from "@/components/logos-section";

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
      <div className="max-w-7xl mx-auto w-full">
        <Hero />
        <LogosSection />
        <MiniPortfolio />
        <ServicesSection />
      </div>
      <ProcessSteps />
      <Testimonials />
      <PricingSection />
      <div className="max-w-7xl mx-auto w-full">
        <FAQ />
      </div>
      <StickyCtaMobile />
    </main>
  );
}
