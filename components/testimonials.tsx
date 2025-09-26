import React from "react";
import Badge from "./ui/badge";
import Typography from "./typography";
import { Marquee } from "./ui/marquee";
import { TestimonialCard } from "./ui/testimonial-card";
import { testimonials } from "@/data";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
const smTwoColA = testimonials.filter((_, i) => i % 2 === 0);
const smTwoColB = testimonials.filter((_, i) => i % 2 !== 0);

export const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
          <Badge>Avis</Badge>
          <Typography
            title="Des résultats concrets racontés par nos clients"
            subtitle="Chaque projet est unique, mais tous ont un point commun : la satisfaction de nos clients."
          />
        </div>

        {/* Mobile: single column (<sm) */}
        <div className="sm:hidden w-full mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:80s]">
            {testimonials.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
        </div>

        {/* sm-only: two columns (sm ≤ width < md) */}
        <div className="hidden sm:flex lg:hidden justify-center gap-1 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:60s]">
            {smTwoColA.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:60s]">
            {smTwoColB.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
        </div>

        {/* md and above: three columns */}
        <div className="hidden lg:flex justify-center gap-1 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:40s]">
            {firstColumn.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:40s]">
            {secondColumn.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:40s]">
            {thirdColumn.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
