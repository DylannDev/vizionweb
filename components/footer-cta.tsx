"use client";

import { usePathname } from "next/navigation";
import Typography from "./typography";
import CallButton from "./call-button";
import { ProjectMarquee } from "./ui/project-marquee";
import { LogoCloud } from "./ui/logo-cloud";
import { portfolioProjects } from "@/data/projets";
import { getService } from "@/data/services";
import { getCity } from "@/data/cities";
import { logos } from "@/data";

const ctaByPath: Record<string, { title: string; description: string }> = {
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
};

const defaultCta = {
  title: "Vous avez un projet en tête ?",
  description:
    "Réservez un appel découverte de 30 minutes. C'est gratuit et vous repartez avec une vision claire de votre projet.",
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

  // City pages (/<slug>)
  const citySlug = pathname.replace("/", "");
  if (citySlug && !citySlug.includes("/")) {
    const city = getCity(citySlug);
    if (city) {
      return { title: city.cta.text, description: city.cta.subtext };
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
