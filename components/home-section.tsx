import dynamic from "next/dynamic";
import Hero from "./hero";
import { ServicesHomeSection } from "@/components/services-home-section";
import MiniPortfolio from "../components/mini-portfolio";
import FAQ from "../components/faq";

const ComparisonTable = dynamic(() =>
  import("./comparison-table").then((m) => ({ default: m.ComparisonTable }))
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
      <ComparisonTable />
      <FAQ />
    </main>
  );
};

export default HomeSection;
