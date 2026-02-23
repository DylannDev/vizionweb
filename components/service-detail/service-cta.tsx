"use client";

import Typography from "@/components/typography";
import CallButton from "@/components/call-button";
import FadeIn from "@/components/ui/fade-in";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

interface ServiceCtaProps {
  title: string;
  description: string;
}

export function ServiceCta({ title, description }: ServiceCtaProps) {
  return (
    <section className="relative py-16 md:py-24 bg-white w-full overflow-hidden">
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
          title={title}
          subtitle={description}
        />
        <FadeIn delay={0.3} className="flex justify-center">
          <CallButton />
        </FadeIn>
      </div>
    </section>
  );
}
