import Link from "next/link";
import type { CitySEO } from "@/data/cities";
import { PageHero } from "@/components/ui/page-hero";
import Typography from "@/components/typography";
import CallButton from "@/components/call-button";
import CustomerSatisfactionBanner from "@/components/customer-satisfaction-banner";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ProjectMarquee } from "../ui/project-marquee";
import { LogoCloud } from "../ui/logo-cloud";
import { portfolioProjects } from "@/data/projets";
import { logos } from "@/data";

interface CityHeroProps {
  city: CitySEO;
}

export function CityHero({ city }: CityHeroProps) {
  return (
    <PageHero>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Accueil</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              Agence web {city.preposition} {city.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Typography
        as="h1"
        title={city.hero.headline}
        subtitle={city.hero.subheadline}
      />

      <div className="flex flex-wrap items-center justify-center gap-4">
        <CallButton />
        <Button variant="black" className="min-w-[174.5px]" asChild>
          <Link href="/realisations">Voir nos réalisations</Link>
        </Button>
      </div>

      <div className="flex items-center justify-center mt-4">
        <CustomerSatisfactionBanner stars={5} />
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
    </PageHero>
  );
}

export default CityHero;
