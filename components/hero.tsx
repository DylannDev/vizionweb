import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PiCodeFill, PiPenNibFill } from "react-icons/pi";
import { IconIllustration } from "@/components/ui/icon-illustration";
import Badge from "@/components/ui/badge";
import CallButton from "./call-button";
import CustomerSatisfactionBanner from "@/components/customer-satisfaction-banner";
import { LogoCloud } from "./ui/logo-cloud";
import { ProjectMarquee } from "./ui/project-marquee";
import { marqueeProjects } from "@/data/projets";
import { logos } from "@/data";
import { PageHero } from "./ui/page-hero";

const heroMarqueeProjects = [...marqueeProjects];

function moveProjectAfter(title: string, precedingTitle: string) {
  const projectIndex = heroMarqueeProjects.findIndex(
    (project) => project.title === title
  );
  if (projectIndex === -1) return;

  const [project] = heroMarqueeProjects.splice(projectIndex, 1);
  const precedingIndex = heroMarqueeProjects.findIndex(
    (item) => item.title === precedingTitle
  );
  heroMarqueeProjects.splice(precedingIndex + 1, 0, project);
}

moveProjectAfter("Rollie (Marketplace)", "Zen Lounge");
moveProjectAfter("Rollie (Logiciel)", "Get Easy");

export function Hero() {
  return (
    <PageHero>
      <div className="relative flex flex-col gap-6 -mt-10 sm:m-0 items-center justify-center text-center z-10">
        <Badge
          variant="black"
          className="mb-0 max-w-full whitespace-nowrap px-2 py-2 text-[clamp(9px,2.8vw,14px)] leading-none sm:px-3 sm:py-1.5 sm:text-sm sm:leading-normal"
        >
          <span
            aria-hidden="true"
            className="relative mr-2 inline-flex size-2 align-middle"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-blue opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary-blue" />
          </span>
          Pour entrepreneurs, startups & PME ambitieuses
        </Badge>
        <div className="">
          <h1 className="space-y-1 font-semibold text-balance max-w-5xl mx-auto text-5xl min-[820px]:text-6xl text-primary-dark">
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
              vos SaaS & applications sur-mesure
            </span>
          </h1>
        </div>

        <p className="text-base sm:text-xl text-gray-dark font-normal -mt-2 max-w-4xl mx-auto text-balance">
          Votre SaaS prêt à encaisser, votre application métier prête à
          automatiser. <br />
          <span className="font-medium text-primary-dark">
            MVP livré en 3 semaines. Devis sous 24h.
          </span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <CallButton className="min-w-[200px]" />
          <Button variant="black" className="min-w-[200px]" asChild>
            <Link href="/realisations">Voir les réalisations</Link>
          </Button>
        </div>

        <div className="flex max-[510px]:hidden items-center justify-center">
          <CustomerSatisfactionBanner stars={5} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <ProjectMarquee
          projects={heroMarqueeProjects}
          className="relative z-10 mt-5 sm:mt-10 mx-4 md:mx-8"
        />
      </div>
      <div className="w-full relative z-10 mt-4 sm:mt-8 max-w-7xl mx-auto px-4 md:px-8">
        <LogoCloud logos={logos} />
      </div>
    </PageHero>
  );
}

export default Hero;
