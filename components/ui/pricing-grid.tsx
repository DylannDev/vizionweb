"use client";

import React, { useState } from "react";
import FadeIn from "./fade-in";
import PricingCard from "./pricing-card";
import { cn } from "@/lib/utils";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight: boolean;
  icon: string;
  category: "web" | "saas";
}

interface PricingGridProps {
  plans: Plan[];
  defaultCategory?: "web" | "saas";
}

export function PricingGrid({
  plans,
  defaultCategory = "web",
}: PricingGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const filteredPlans = plans.filter((plan) => {
    return plan.category === selectedCategory;
  });

  return (
    <div className="w-full">
      <div className="hidden lg:flex lg:flex-nowrap items-center justify-center pb-12 font-medium divide-x-2 divide-gray-dark">
        <button
          aria-pressed={selectedCategory === "web"}
          onClick={() => {
            setSelectedCategory("web");
          }}
          className={cn(
            "min-w-[125px] px-4 py-3 bg-white rounded-tl-xl rounded-bl-xl text-primary-dark hover:bg-background cursor-pointer",
            selectedCategory === "web" &&
              "bg-primary-green hover:bg-primary-green"
          )}
        >
          Sites Web
        </button>
        <button
          aria-pressed={selectedCategory === "saas"}
          onClick={() => {
            setSelectedCategory("saas");
          }}
          className={cn(
            "min-w-[125px] px-4 py-3 bg-white rounded-tr-xl rounded-br-xl text-primary-dark hover:bg-background cursor-pointer",
            selectedCategory === "saas" &&
              "bg-primary-green hover:bg-primary-green"
          )}
        >
          Apps / SaaS
        </button>
      </div>

      {/* Mobile & tablet: show all offers stacked; no filtering */}
      <div className="grid lg:hidden grid-cols-1 gap-4 pt-6 sm:pt-10">
        {plans.map((plan, index) => {
          return (
            <FadeIn
              key={plan.name}
              delay={0.2 * (index + 1)}
              className="flex justify-center"
            >
              <PricingCard plan={plan} />
            </FadeIn>
          );
        })}
      </div>

      {/* Desktop: filtered by category; center single card */}
      <div
        className={
          filteredPlans.length === 1
            ? "hidden lg:grid grid-cols-1 gap-5 pt-6 sm:pt-10 lg:place-items-center"
            : "hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-4 pt-6 sm:pt-10"
        }
      >
        {filteredPlans.map((plan, index) => {
          return (
            <FadeIn
              key={plan.name}
              delay={0.2 * (index + 1)}
              className="flex justify-center"
            >
              <PricingCard plan={plan} />
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}

export default PricingGrid;
