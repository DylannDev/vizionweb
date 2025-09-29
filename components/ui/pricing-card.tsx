import React from "react";
import Card, { CardHeader } from "./card";
import CallButton from "../call-button";
import Badge from "./badge";
import IconIllustration from "./icon-illustration";
import { PiCheckBold } from "react-icons/pi";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlight: boolean;
    icon: string;
    category: "web" | "saas";
  };
}

interface FeatureProps {
  items: string[];
}

function Features({ items }: FeatureProps) {
  return (
    <ul className="space-y-2 text-gray-dark text-[15px]">
      {items.map((it) => (
        <li key={it} className="flex items-center gap-2">
          <PiCheckBold className="size-3 text-primary-green" />

          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative max-w-lg w-full",
        plan.highlight && "mt-10 lg:mt-0"
      )}
    >
      {plan.highlight && (
        <div className="absolute inset-x-0 -top-10 w-full bg-primary-green text-secondary-dark h-10 rounded-t-3xl flex items-center justify-center uppercase text-sm font-semibold tracking-widest">
          Offre Populaire
        </div>
      )}
      <Card
        radius={plan.highlight ? "highlighted" : "3xl"}
        className={`p-8 h-full flex flex-col relative ${
          plan.highlight ? "" : ""
        }`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-3">
            <IconIllustration
              radius="rounded-xl"
              size={45}
              imgSize={plan.category === "saas" ? 25 : 20}
              img={plan.icon}
              shadow=""
            />
            <h3 className="text-2xl font-semibold text-gray-light">
              {plan.name}
            </h3>
          </div>
          <p className="text-primary-dark text-[15px] font-medium">
            {plan.description}
          </p>
          <div className="flex flex-col">
            <span className="text-sm text-gray-dark">À partir de</span>
            <span className="text-3xl font-bold text-secondary-dark font-heading">
              {plan.price}
            </span>
          </div>
        </div>
        <hr className="border-gray-lighter my-6" />
        <div className="flex flex-col justify-between flex-1">
          <Features items={plan.features} />
          <div className="mt-6">
            <CallButton size="md" className="w-full" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PricingCard;
