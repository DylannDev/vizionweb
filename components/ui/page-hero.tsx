import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  children: React.ReactNode;
  className?: string;
  bg?: "background" | "white";
  outerPadding?: string;
}

export function PageHero({
  children,
  className,
  bg = "background",
  outerPadding = "pt-2 sm:pt-4 pb-10 sm:pb-20 px-2 sm:px-4",
}: PageHeroProps) {
  return (
    <section className={bg === "background" ? "bg-background" : "bg-white"}>
      <div className={cn(outerPadding, "max-w-[1536px] mx-auto w-full")}>
        <div
          className={cn(
            "relative bg-white w-full rounded-3xl sm:rounded-[36px] overflow-hidden px-5",
            className
          )}
        >
          <DottedGlowBackground
            className={cn(
              "pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 z-0",
              "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(700px_circle_at_top,white,transparent)] inset-x-0 inset-y-[0%] pointer-events-none will-change-transform transform-gpu z-0"
            )}
            opacity={0.3}
            gap={12}
            radius={4}
            colorLightVar="--color-primary-blue"
            glowColorLightVar="--color-primary-blue-border"
            backgroundOpacity={0}
            speedMin={0.3}
            speedMax={0.6}
            speedScale={1}
          />
          <div className="relative z-10 pt-36 pb-10 sm:pb-20">{children}</div>
        </div>
      </div>
    </section>
  );
}
