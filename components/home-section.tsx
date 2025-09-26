import Hero from "./hero";
import MiniPortfolio from "../components/mini-portfolio";
import ServicesSection from "@/components/services-section";
import ProcessSteps from "../components/process-steps";
import { Testimonials } from "@/components/testimonials";
import PricingSection from "@/components/pricing-section";
import FAQ from "../components/faq";
import Calendar from "./calendar";
import { WhatsappNav } from "./ui/whatsapp-nav";

const HomeSection = ({
  locationName,
  preposition,
}: {
  locationName?: string;
  preposition?: "à" | "en";
}) => {
  return (
    <main>
      <Hero locationName={locationName} preposition={preposition} />
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <MiniPortfolio />
        <ServicesSection />
      </div>
      <ProcessSteps />
      <Testimonials />
      <PricingSection />
      <FAQ />
      <Calendar />
      <WhatsappNav />
    </main>
  );
};

export default HomeSection;
