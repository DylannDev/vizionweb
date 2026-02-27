import Hero from "./hero";
import { ServicesHomeSection } from "@/components/services-home-section";
import MiniPortfolio from "../components/mini-portfolio";
import { WhyVizionWeb } from "@/components/why-vizion-web";
import { ComparisonTable } from "@/components/comparison-table";
import ProcessSteps from "../components/process-steps";
import { Testimonials } from "@/components/testimonials";
import FAQ from "../components/faq";

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
      <ServicesHomeSection />
      <MiniPortfolio />
      <WhyVizionWeb />
      <ComparisonTable />
      <ProcessSteps />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default HomeSection;
