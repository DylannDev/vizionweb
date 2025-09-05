import Link from "next/link";
import { Button } from "./ui/button";
import Badge from "./ui/badge";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { PiCodeFill, PiPenNibFill } from "react-icons/pi";
import { IconIllustration } from "@/components/ui/icon-illustration";

export function Hero() {
  return (
    <section className="py-16 md:py-40 relative">
      <AnimatedGridPattern
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-80%] h-[200%]"
        )}
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="space-y-6 text-center">
          <div className="space-y-3">
            <Badge className="space-x-1" variant="white">
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
          <p className="text-lg text-gray-dark">
            On gère le copywriting, le design, le développement et la mise en
            ligne. <br />
            <span className="font-medium">Livraison en 30 jours.</span>
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button asChild>
              <Link href="/contact">
                Réserver un appel{" "}
                <ArrowRight
                  strokeWidth={1.75}
                  className="group-hover:translate-x-1 transition-transform duration-150 ease-in-out"
                />
              </Link>
            </Button>
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
