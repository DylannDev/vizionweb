import Link from "next/link";
import { Button } from "@/components/ui/button";
import Badge from "./ui/badge";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { PiCodeFill, PiPenNibFill } from "react-icons/pi";
import { IconIllustration } from "@/components/ui/icon-illustration";
import CallButton from "./call-button";
import CustomerSatisfactionBanner from "@/components/customer-satisfaction-banner";
import { LogoCarousel } from "./ui/logo-carousel";

interface HeroSEOProps {
  locationName?: string;
  preposition?: "à" | "en";
}

export function Hero({ locationName, preposition = "à" }: HeroSEOProps) {
  return (
    <section className="pt-30 sm:pt-40 md:pb-4 relative min-h-[100dvh] flex flex-col justify-between gap-16">
      <AnimatedGridPattern
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-81%] h-[200%] bg-white"
        )}
      />
      <div className="relative max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col gap-6 items-center justify-center text-center">
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

            <h1 className="space-y-1 font-semibold text-balance text-5xl sm:text-6xl bg-gradient-to-b from-primary-dark from-60% to-secondary-dark/80 to-90% bg-clip-text text-transparent">
              {locationName ? (
                `Agence de création de sites et applications web ${preposition} ${locationName}`
              ) : (
                <>
                  {/* Mobile */}
                  <span className="block lg:hidden">
                    On crée des sites et applications web modernes sur-mesure
                  </span>

                  {/* Desktop */}
                  <span className="hidden lg:block">
                    <span className="flex items-center justify-center gap-4">
                      On crée des sites
                      <IconIllustration
                        aria-hidden
                        icon={PiCodeFill}
                        className="hidden sm:flex"
                      />{" "}
                      et applications
                    </span>
                    <span className="flex items-center justify-center gap-4">
                      web modernes sur-mesure{" "}
                      <IconIllustration
                        aria-hidden
                        icon={PiPenNibFill}
                        className="hidden sm:flex"
                      />
                    </span>
                  </span>
                </>
              )}
            </h1>
          </div>

          {locationName ? (
            <h2 className="text-sm sm:text-base text-secondary-dark text-balance font-normal font-text tracking-normal -mt-2">
              On crée des solutions sur-mesure, conçus pour convertir vos
              visiteurs et booster votre croissance: <br />
              <span className="font-semibold text-secondary-dark">
                Sites Internet, Landing Pages, Apps Web & SaaS
              </span>
            </h2>
          ) : (
            <p className="text-sm sm:text-base text-secondary-dark font-normal -mt-2">
              Copywriting, Design, Développement & Publication : on gère votre
              projet de A à Z.
              <br />
              <span className="font-semibold text-secondary-dark">
                Livré en 30 jours en moyenne.
              </span>
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            <CallButton size="md" />
            <Button
              size="md"
              variant="white"
              className="min-w-[174.5px]"
              asChild
            >
              <Link href="/#realisations">Voir nos réalisations</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <CustomerSatisfactionBanner stars={5} />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mb-6 overflow-hidden">
        <p className="text-center text-xs font-semibold text-gray-light uppercase font-heading mb-2">
          ils nous font confiance
        </p>
        <div className="hidden lg:block">
          <LogoCarousel columnCount={4} />
        </div>
        <div className="block max-[375px]:hidden lg:hidden">
          <LogoCarousel columnCount={3} />
        </div>
        <div className="block min-[375px]:hidden">
          <LogoCarousel columnCount={2} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
