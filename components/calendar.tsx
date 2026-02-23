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
          title="Vous avez un projet en tête ?"
          subtitle="30 minutes, gratuit, sans engagement. On écoute votre besoin, on vous dit si on peut vous aider, et vous repartez avec un plan d'action clair."
        />

        <div className="flex justify-center">
          <CallButton />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
