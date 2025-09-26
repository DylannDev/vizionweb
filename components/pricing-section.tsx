import Typography from "@/components/typography";
import PricingCard from "./ui/pricing-card";
import { PiCheckBold } from "react-icons/pi";
import Badge from "./ui/badge";
import FadeIn from "./ui/fade-in";
import { included, plans } from "@/data";

export default function PricingSection() {
  return (
    <section id="offres" className="py-16 md:py-24 bg-primary-dark">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Badge variant="dark" align="center">
          Offres
        </Badge>
        <Typography
          titleColor="text-white"
          subtitleColor="text-gray-light"
          align="center"
          title="Des offres claires et adaptées à votre projet"
          subtitle="Que vous ayez besoin d’une landing page, d’un site complet ou d’une application sur-mesure, nos formules s’adaptent à vos objectifs et à votre budget."
        />

        <div className="grid max-lg:place-items-center grid-cols-1 lg:grid-cols-3 gap-5 pt-6 sm:pt-16">
          {plans.map((plan, index) => (
            <FadeIn
              key={plan.name}
              delay={0.2 * (index + 1)}
              className="flex justify-center"
            >
              <PricingCard plan={plan} />
            </FadeIn>
          ))}
        </div>

        {/* Included in all offers */}
        <div className="mt-10 rounded-3xl flex flex-col w-full">
          <h4 className="text-white text-xl font-semibold text-center mb-4">
            Inclus dans toutes les offres
          </h4>
          <div className="text-gray-light text-sm">
            <ul className="mt-4 text-gray-light grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:max-w-2xl lg:max-w-full mx-auto w-fit sm:justify-items-center gap-2">
              {included.map((it) => (
                <li key={it} className="flex items-center gap-1">
                  <PiCheckBold className="size-3 text-primary-green" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
