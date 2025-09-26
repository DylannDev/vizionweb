"use client";

import React from "react";
import Typography from "./typography";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import CallButton from "./call-button";

const Calendar = () => {
  return (
    <section
      id="calendar"
      className="relative py-16 md:py-24 bg-white w-full overflow-hidden"
    >
      <AnimatedGridPattern
        maxOpacity={0.25}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-50%] h-[200%] opacity-50"
        )}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <Typography
          align="center"
          title={
            <>
              Créons la solution <br /> digitale dont vous rêvez
            </>
          }
          subtitle="Présentez-nous votre projet lors d'un appel de 30 minutes. Pas de blabla, vous repartez avec une vision claire, un devis transparent et des actions concrètes pour avancer."
        />

        <div className="flex justify-center">
          <CallButton size="md" />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
