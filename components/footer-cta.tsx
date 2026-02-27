"use client";

import { usePathname } from "next/navigation";
import { DottedGlowBackground } from "./ui/dotted-glow-background";
import Typography from "./typography";
import CallButton from "./call-button";
import { ProjectMarquee } from "./ui/project-marquee";
import { LogoCloud } from "./ui/logo-cloud";
import { portfolioProjects } from "@/data/projets";
import { getService } from "@/data/services";
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

const ctaByPath: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Vous avez un projet en tête ?",
    description:
      "30 minutes, gratuit, sans engagement. On écoute votre besoin, on vous dit si on peut vous aider, et vous repartez avec un plan d'action clair.",
  },
  "/services": {
    title: "Vous ne savez pas quelle offre choisir ?",
    description:
      "Réservez 30 minutes. On fait le point sur votre besoin et on vous oriente vers la solution la plus adaptée.",
  },
  "/a-propos": {
    title: "Envie de travailler ensemble ?",
    description:
      "Réservez un appel de 30 minutes. On échange sur votre projet et on vous dit comment on peut vous aider.",
  },
  "/realisations": {
    title: "Vous voulez un résultat similaire ?",
    description:
      "Réservez 30 minutes pour discuter de votre projet. On vous explique comment on peut vous accompagner.",
  },
  "/blog": {
    title: "Un projet en tête ? Parlons-en.",
    description:
      "30 minutes, gratuit, sans engagement. On écoute votre besoin et on vous propose un plan d'action concret.",
  },
};

const defaultCta = {
  title: "Vous avez un projet en tête ?",
  description:
    "30 minutes, gratuit, sans engagement. On écoute votre besoin, on vous dit si on peut vous aider, et vous repartez avec un plan d'action clair.",
};

function getCtaContent(pathname: string) {
  // Service detail pages
  if (pathname.startsWith("/services/")) {
    const slug = pathname.replace("/services/", "");
    const service = getService(slug);
    if (service) {
      return { title: service.ctaTitle, description: service.ctaDescription };
    }
  }

  return ctaByPath[pathname] ?? defaultCta;
}

export function FooterCta() {
  const pathname = usePathname();
  const { title, description } = getCtaContent(pathname);

  return (
    <section id="calendar" className="relative w-full overflow-hidden">
      <div className="">
        <div className="relative w-full py-12 sm:py-16 px-5 overflow-hidden">
          <DottedGlowBackground
            className={cn(
              "pointer-events-none opacity-20 z-0",
              "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[0%] h-[100%] will-change-transform transform-gpu"
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
          <div className="relative z-10">
            <Typography align="center" title={title} subtitle={description} />

            <div className="flex justify-center">
              <CallButton />
            </div>
          </div>
          <ProjectMarquee
            projects={portfolioProjects.map((p) => ({
              title: p.title,
              src: p.src,
            }))}
            className="relative z-10 mt-10"
          />
          <div className="relative z-10 mt-8">
            <LogoCloud logos={logos} />
          </div>
        </div>
      </div>
    </section>
  );
}
