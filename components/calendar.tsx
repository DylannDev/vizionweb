"use client";

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Typography from "./typography";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const Calendar = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#181c1d" },
          dark: { "cal-brand": "#181c1d" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

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
          "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-90%] h-[200%] opacity-50"
        )}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <Typography
          align="center"
          title={
            <>
              Ensemble, créons la solution <br /> digitale dont vous rêvez
            </>
          }
          subtitle="Présentez-nous votre projet lors d'un appel de 30 minutes. Pas de blabla, vous repartez avec une vision claire, un devis transparent et des actions concrètes pour avancer."
        />
        <Cal
          namespace="30min"
          calLink="dylann/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </section>
  );
};

export default Calendar;
