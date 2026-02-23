import Hero from "./hero";
import { ServicesHomeSection } from "@/components/services-home-section";
import MiniPortfolio from "../components/mini-portfolio";
import { WhyVizionWeb } from "@/components/why-vizion-web";
import ProcessSteps from "../components/process-steps";
import { Testimonials } from "@/components/testimonials";
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
      <Hero locationName={locationName} preposition={preposition} />
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <ServicesHomeSection />
        <MiniPortfolio />
      </div>
      <WhyVizionWeb />
      <ProcessSteps />
      <Testimonials />
      <FAQ />
      <Calendar />
    </main>
  );
};

export default HomeSection;
