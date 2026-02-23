import Link from "next/link";
import { Button } from "@/components/ui/button";
import Badge from "./ui/badge";
// import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { PiCodeFill, PiPenNibFill } from "react-icons/pi";
import { IconIllustration } from "@/components/ui/icon-illustration";
import CallButton from "./call-button";
import CustomerSatisfactionBanner from "@/components/customer-satisfaction-banner";
import { LogoCarousel } from "./ui/logo-carousel";
import { cn } from "@/lib/utils";

interface HeroSEOProps {
  locationName?: string;
  preposition?: "à" | "en";
}

export function Hero({ locationName, preposition = "à" }: HeroSEOProps) {
  return (
    <section className="relative pt-30 sm:pt-40 md:pb-4 min-h-[100dvh] flex flex-col justify-between gap-16">
      {/* <AnimatedGridPattern
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-81%] h-[200%] bg-blue-border pointer-events-none will-change-transform transform-gpu z-0"
        )}
      /> */}
      <DottedGlowBackground
        className={cn(
          "pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 z-0",
          "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(700px_circle_at_top,white,transparent)] inset-x-0 inset-y-[50%] h-[50%] bg-blue-border pointer-events-none will-change-transform transform-gpu z-0"
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

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 z-10">
        <div className="flex flex-col gap-6 items-center justify-center text-center z-10">
          <div className="space-y-4">
            <Badge
              align="left"
              className="space-x-1 shadow-sm"
              variant="hero"
              uppercase={false}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-blue opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary-blue"></span>
              </span>
              <p className="text-xs font-semibold">2 créneaux disponibles</p>
            </Badge>

            <h1 className="space-y-1 font-semibold text-balance text-5xl sm:text-6xl text-primary-dark">
              {locationName ? (
                `Agence de création de sites et applications web ${preposition} ${locationName}`
              ) : (
                <>
                  {/* Mobile */}
                  <span className="block lg:hidden">
                    Nous transformons vos idées et vos processus en applications web opérationnelles
                  </span>

                  {/* Desktop */}
                  <span className="hidden lg:block">
                    <span className="flex items-center justify-center gap-4">
                      Nous transformons vos idées
                      <IconIllustration
                        aria-hidden
                        icon={PiCodeFill}
                        className="hidden sm:flex"
                      />
                    </span>
                    <span className="flex items-center justify-center gap-4">
                      et vos processus en applications
                      <IconIllustration
                        aria-hidden
                        icon={PiPenNibFill}
                        className="hidden sm:flex"
                      />{" "}
                      web opérationnelles
                    </span>
                  </span>
                </>
              )}
            </h1>
          </div>

          {locationName ? (
            <h2 className="text-base sm:text-xl text-gray-dark text-balance font-normal tracking-normal -mt-2">
              Nous créons des sites et applications sur-mesure, conçues pour
              convertir vos visiteurs et développer votre activité : <br />
              <span className="font-semibold text-gray-dark">
                Sites Internet, Landing Pages, Apps Web & SaaS
              </span>
            </h2>
          ) : (
            <p className="text-base sm:text-xl text-gray-dark font-normal -mt-2 text-balance">
              Vous avez une idée de SaaS, un outil métier à créer ou un site web
              à lancer ? Nous le développons sur-mesure et vous le livrons en
              quelques semaines.
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            <CallButton />
            <Button variant="black" className="min-w-[174.5px]" asChild>
              <Link href="/realisations">Voir nos réalisations</Link>
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
