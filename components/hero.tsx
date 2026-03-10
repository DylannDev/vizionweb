import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PiCodeFill, PiPenNibFill } from "react-icons/pi";
import { IconIllustration } from "@/components/ui/icon-illustration";
import CallButton from "./call-button";
import CustomerSatisfactionBanner from "@/components/customer-satisfaction-banner";
import { LogoCloud } from "./ui/logo-cloud";
import { ProjectMarquee } from "./ui/project-marquee";
import { portfolioProjects } from "@/data/projets";
import { logos } from "@/data";
import { PageHero } from "./ui/page-hero";

interface HeroSEOProps {
  locationName?: string;
  preposition?: "à" | "en";
}

export function Hero({ locationName, preposition = "à" }: HeroSEOProps) {
  return (
    <PageHero>
      <div className="relative flex flex-col gap-6 -mt-10 sm:m-0 items-center justify-center text-center z-10">
        <div className="">
          <h1 className="space-y-1 font-semibold text-balance max-w-5xl mx-auto text-5xl min-[820px]:text-6xl text-primary-dark">
            {locationName ? (
              `Agence de création de sites et applications web ${preposition} ${locationName}`
            ) : (
              <>
                <span className="flex items-center justify-center gap-y-1 gap-x-3 sm:gap-4 flex-wrap">
                  On conçoit
                  <IconIllustration
                    aria-hidden
                    icon={PiPenNibFill}
                    imgSize={16}
                    size={45}
                    className="sm:hidden"
                  />
                  <IconIllustration
                    aria-hidden
                    icon={PiPenNibFill}
                    size={50}
                    className="hidden sm:flex"
                  />
                  et développe
                  <IconIllustration
                    aria-hidden
                    icon={PiCodeFill}
                    imgSize={16}
                    size={45}
                    className="sm:hidden"
                  />
                  <IconIllustration
                    aria-hidden
                    icon={PiCodeFill}
                    size={50}
                    className="hidden sm:flex"
                  />
                  vos projets web sur-mesure
                </span>
              </>
            )}
          </h1>
        </div>

        <p className="text-base sm:text-xl text-gray-dark font-normal -mt-2 max-w-4xl mx-auto text-balance">
          Site web, application métier ou SaaS à créer ? On le construit pour
          vous, prêt à lancer en quelques semaines.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <CallButton className="min-w-[200px]" />
          <Button variant="black" className="min-w-[200px]" asChild>
            <Link href="/realisations">Voir nos réalisations</Link>
          </Button>
        </div>

        <div className="flex max-[510px]:hidden items-center justify-center">
          <CustomerSatisfactionBanner stars={5} />
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto">
        <ProjectMarquee
          projects={portfolioProjects.map((p) => ({
            title: p.title,
            src: p.src,
          }))}
          className="relative z-10 mt-5 sm:mt-10 mx-4 md:mx-8"
        />
      </div>
      <div className="w-full relative z-10 mt-4 sm:mt-8 max-w-7xl mx-auto px-4 md:px-8">
        <LogoCloud logos={logos} />
      </div> */}
    </PageHero>
  );
}

export default Hero;
