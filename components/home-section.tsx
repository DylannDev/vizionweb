import HeroSEO from "./hero-seo";
import Hero from "./hero";
import MiniPortfolio from "../components/mini-portfolio";
import ServicesSection from "@/components/services-section";
import ProcessSteps from "../components/process-steps";
import { Testimonials } from "@/components/testimonials";
import PricingSection from "@/components/pricing-section";
import StickyCtaMobile from "../components/sticky-cta-mobile";
import FAQ from "../components/faq";
import Calendar from "./calendar";

const HomeSection = ({
  locationName,
  preposition,
}: {
  locationName?: string;
  preposition?: "à" | "en";
}) => {
  return (
    <main>
      <div className="max-w-7xl mx-auto w-full">
        {locationName ? (
          <HeroSEO locationName={locationName} preposition={preposition} />
        ) : (
          <Hero />
        )}
        <MiniPortfolio />
        <ServicesSection />
      </div>
      <ProcessSteps />
      <Testimonials />
      <PricingSection />
      <FAQ />
      <Calendar />
      <StickyCtaMobile />
    </main>
  );
};

export default HomeSection;
