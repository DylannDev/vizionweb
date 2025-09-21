import Link from "next/link";
import { Button } from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import CallButton from "@/components/call-button";
import CustomerSatisfactionBanner from "./customer-satisfaction-banner";
import { LogoCarousel } from "./ui/logo-carousel";

interface HeroSEOProps {
  locationName?: string;
  preposition?: "à" | "en";
}

export default function HeroSEO({
  locationName,
  preposition = "à",
}: HeroSEOProps) {
  return (
    <section className="pt-16 md:pt-40 md:pb-4 relative overflow-hidden min-h-screen flex flex-col justify-between gap-16">
      <AnimatedGridPattern
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] -inset-x-2 inset-y-[-81%] h-[200%] bg-white"
        )}
      />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="space-y-6 text-center">
          <div className="space-y-4">
            <Badge
              align="left"
              className="space-x-1 shadow-sm"
              variant="hero"
              uppercase={false}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-green opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary-green"></span>
              </span>
              <p className="text-xs font-semibold">
                SaaS, Apps Web & Sites Internet
              </p>
            </Badge>
            <h1 className="space-y-1 font-semibold text-balance text-6xl bg-gradient-to-b from-primary-dark from-60% to-secondary-dark/80 to-90% bg-clip-text text-transparent">
              {locationName
                ? `Agence de création de sites et applications web ${preposition} ${locationName}`
                : "Agence de création de sites et applications web"}
            </h1>
          </div>
          <h2 className="text-base text-secondary-dark font-normal font-text tracking-normal">
            On crée des solutions sur-mesure, conçus pour convertir vos
            visiteurs et booster votre croissance : <br />
            <span className="font-semibold">
              Applications Web, SaaS, Sites Internet & Landing Pages.
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <CallButton size="md" />
            <Button
              size="md"
              variant="white"
              className="min-w-[174.5px]"
              asChild
            >
              <Link href="/realisations">Voir nos réalisations</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <CustomerSatisfactionBanner className="mt-4" stars={5} />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold text-gray-light uppercase font-heading">
          ils nous font confiance
        </p>
        <LogoCarousel columnCount={4} />
      </div>
    </section>
  );
}
