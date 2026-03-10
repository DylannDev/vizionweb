import dynamic from "next/dynamic";
import Hero from "./hero";
import { ServicesHomeSection } from "@/components/services-home-section";
import MiniPortfolio from "../components/mini-portfolio";
import FAQ from "../components/faq";

const HighlightsSection = dynamic(() =>
  import("./highlights-section").then((m) => ({ default: m.HighlightsSection }))
);
const ComparisonTable = dynamic(() =>
  import("./comparison-table").then((m) => ({ default: m.ComparisonTable }))
);
const ProcessSteps = dynamic(() => import("./process-steps"));
const Testimonials = dynamic(() =>
  import("./testimonials").then((m) => ({ default: m.Testimonials }))
);

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
      {/* <HighlightsSection /> */}
      <ComparisonTable />
      {/* <ProcessSteps /> */}
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default HomeSection;
