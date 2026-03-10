"use client";

import Hero from "./hero";
import { ServicesHomeSection } from "@/components/services-home-section";
import MiniPortfolio from "../components/mini-portfolio";
import FAQ from "../components/faq";
import { lazyVisible } from "@/components/ui/lazy-section";

const HighlightsSection = lazyVisible(
  () => import("./highlights-section").then((m) => ({ default: m.HighlightsSection })),
  "600px"
);
const ComparisonTable = lazyVisible(
  () => import("./comparison-table").then((m) => ({ default: m.ComparisonTable })),
  "500px"
);
const ProcessSteps = lazyVisible(
  () => import("./process-steps"),
  "600px"
);
const Testimonials = lazyVisible(
  () => import("./testimonials").then((m) => ({ default: m.Testimonials })),
  "400px"
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
      <HighlightsSection />
      <ComparisonTable />
      <ProcessSteps />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default HomeSection;
