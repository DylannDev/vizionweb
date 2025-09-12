import Link from "next/link";
import { Button } from "@/components/ui/button";
import Badge from "./ui/badge";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { PiCodeFill, PiPenNibFill } from "react-icons/pi";
import { IconIllustration } from "@/components/ui/icon-illustration";
import CallButton from "./call-button";

export function Hero() {
  return (
    <section className="py-16 md:py-40 relative overflow-hidden">
      <AnimatedGridPattern
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-79%] h-[200%] bg-white"
        )}
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="space-y-6 text-center">
          <div className="space-y-4">
            <Badge
              align="left"
              className="space-x-1 border-gray-lighter"
              variant="white"
              uppercase={false}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-green opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary-green"></span>
              </span>
              <span>SaaS, Apps Web, Sites & Landing Pages</span>
            </Badge>
            <h1 className="space-y-1 font-semibold text-balance text-6xl bg-gradient-to-b from-primary-dark from-60% to-secondary-dark/80 to-90% bg-clip-text text-transparent">
              <span className="flex items-center justify-center gap-4">
                On crée des sites
                <IconIllustration icon={PiCodeFill} className="" /> et
                applications{" "}
              </span>
              <span className="flex items-center justify-center gap-4">
                web modernes sur-mesure <IconIllustration icon={PiPenNibFill} />
              </span>
            </h1>
          </div>
          <p className="text-lg text-gray-dark font-medium">
            Copywriting, Design, Développement & Publication : on gère votre
            projet de A à Z.
            <br />
            <span className="font-normal">Livré en 30 jours en moyenne.</span>
          </p>
          <div className="flex items-center justify-center gap-4">
            <CallButton />
            <Button variant="white" className="min-w-[174.5px]" asChild>
              <Link href="/realisations">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
