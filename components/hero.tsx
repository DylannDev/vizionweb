import Link from "next/link";
import { Button } from "@/components/ui/button";
import Badge from "./ui/badge";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { PiCodeFill, PiPenNibFill } from "react-icons/pi";
import { IconIllustration } from "@/components/ui/icon-illustration";
import CallButton from "./call-button";
import CustomerSatisfactionBanner from "@/components/customer-satisfaction-banner";
import { LogoCloud } from "./ui/logo-cloud";
import { ProjectMarquee } from "./ui/project-marquee";
import { portfolioProjects } from "@/data/projets";
import { cn } from "@/lib/utils";

const logos = [
  { src: "/logos/academy.svg", alt: "Amazonia Academy" },
  { src: "/logos/geteasy.svg", alt: "Get Easy Location" },
  { src: "/logos/hippokom.svg", alt: "Hippo'kom Agency" },
  { src: "/logos/chefkit.svg", alt: "ChefKit SaaS" },
  { src: "/logos/mrkicks.svg", alt: "Mr. Kicks" },
  { src: "/logos/investing.svg", alt: "Amazonian Investing" },
  { src: "/logos/pygmalion.svg", alt: "Pygmalion Conseil" },
  { src: "/logos/zenlounge.svg", alt: "Zen Lounge" },
];

interface HeroSEOProps {
  locationName?: string;
  preposition?: "à" | "en";
}

export function Hero({ locationName, preposition = "à" }: HeroSEOProps) {
  return (
    <section className="bg-background">
      <div className="pt-4 md:pb-20 px-4 flex flex-col justify-between gap-16 max-w-[1536px] mx-auto w-full">
        <div className="relative bg-white w-full rounded-[36px] pb-16 pt-32 px-5">
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
          <div className="relative flex flex-col gap-6 items-center justify-center text-center z-10">
            <div className="space-y-4">
              {/* <Badge
              align="left"
              className="space-x-1 shadow-sm"
              variant="white"
              uppercase={false}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-blue opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary-blue"></span>
              </span>
              <p className="text-xs font-semibold">2 créneaux disponibles</p>
            </Badge> */}

              <h1 className="space-y-1 font-semibold text-balance text-5xl sm:text-6xl text-primary-dark">
                {locationName ? (
                  `Agence de création de sites et applications web ${preposition} ${locationName}`
                ) : (
                  <>
                    <span className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                      On conçoit
                      <IconIllustration aria-hidden icon={PiPenNibFill} />
                      et développe
                      <IconIllustration aria-hidden icon={PiCodeFill} />
                    </span>
                    <span>vos projets web sur-mesure</span>
                  </>
                )}
              </h1>
            </div>

            <p className="text-base sm:text-xl text-gray-dark font-normal -mt-2 text-balance">
              Vous avez une idée de SaaS, un outil métier à créer ou un site web
              à lancer ? <br className="hidden min-[718px]:flex" />
              Nous le développons sur-mesure et vous le livrons en quelques
              semaines.
            </p>

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

          <div className="max-w-7xl mx-auto">
            <ProjectMarquee
              projects={portfolioProjects.map((p) => ({
                title: p.title,
                src: p.src,
              }))}
              className="relative z-10 mt-10 mx-4 md:mx-8"
            />
          </div>
          <div className="w-full relative z-10 mt-8 max-w-7xl mx-auto px-4 md:px-8">
            <LogoCloud logos={logos} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
