import Link from "next/link";
import Image from "next/image";
import type { TechnoSEO } from "@/data/technos";
import { portfolioProjects } from "@/data/projets";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import CallButton from "@/components/call-button";
import { PageHero } from "@/components/ui/page-hero";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { ServiceStack } from "@/components/service-detail/service-stack";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface TechnoPageProps {
  techno: TechnoSEO;
}

const technoProjectsMap: Record<string, string[]> = {
  "agence-next-js": ["Get Easy", "Zen Lounge"],
  "agence-react": ["Get Easy", "Zen Lounge"],
  "agence-supabase": ["Get Easy", "Zen Lounge"],
  "agence-openai": [],
  "agence-claude-api": [],
  "agence-n8n": [],
  "agence-typescript": [],
  "agence-nodejs": [],
};

const technoLogos: Record<string, string> = {
  "agence-next-js": "/logos/stack/nextjs.svg",
  "agence-react": "/logos/stack/react.svg",
  "agence-supabase": "/logos/stack/supabase.svg",
  "agence-openai": "/logos/stack/openai.svg",
  "agence-claude-api": "/logos/stack/claude.svg",
  "agence-n8n": "/logos/stack/n8n.svg",
  "agence-typescript": "/logos/stack/typescript.svg",
  "agence-nodejs": "/logos/stack/nodejs.svg",
};

// Distribution équilibrée des 5 mockups sur 8 technos × 2 sections (use / avoid)
// Total 16 slots : mockup-1 ×4, mockup-2/3/4/5 ×3 chacun.
// Use et avoid utilisent toujours deux mockups différents par techno.
const technoUseIllustration: Record<string, string> = {
  "agence-next-js": "/mockups/mockup-1.webp",
  "agence-react": "/mockups/mockup-3.webp",
  "agence-supabase": "/mockups/mockup-5.webp",
  "agence-openai": "/mockups/mockup-2.webp",
  "agence-claude-api": "/mockups/mockup-4.webp",
  "agence-n8n": "/mockups/mockup-1.webp",
  "agence-typescript": "/mockups/mockup-3.webp",
  "agence-nodejs": "/mockups/mockup-5.webp",
};

const technoAvoidIllustration: Record<string, string> = {
  "agence-next-js": "/mockups/mockup-2.webp",
  "agence-react": "/mockups/mockup-4.webp",
  "agence-supabase": "/mockups/mockup-1.webp",
  "agence-openai": "/mockups/mockup-3.webp",
  "agence-claude-api": "/mockups/mockup-5.webp",
  "agence-n8n": "/mockups/mockup-2.webp",
  "agence-typescript": "/mockups/mockup-4.webp",
  "agence-nodejs": "/mockups/mockup-1.webp",
};

function getRealisations(slug: string) {
  const titles = technoProjectsMap[slug] ?? [];
  return titles
    .map((t) => portfolioProjects.find((p) => p.title === t))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
}

function normalizePoint(
  point: string | { title: string; description: string },
  index: number,
) {
  if (typeof point === "string") {
    return { title: `Cas ${index + 1}`, description: point };
  }
  return point;
}

function getApproachPhases(techno: TechnoSEO) {
  if (techno.ourApproach.phases && techno.ourApproach.phases.length > 0) {
    return techno.ourApproach.phases;
  }
  return techno.ourApproach.description
    .split("\n\n")
    .map((p, i) => ({ title: `Étape ${i + 1}`, description: p }));
}

export function TechnoPage({ techno }: TechnoPageProps) {
  const realisations = getRealisations(techno.slug);
  const logoSrc = technoLogos[techno.slug];
  const useIllustrationSrc = technoUseIllustration[techno.slug];
  const avoidIllustrationSrc = technoAvoidIllustration[techno.slug];
  const approachPhases = getApproachPhases(techno);

  return (
    <main>
      {/* Hero */}
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
              <BreadcrumbLink asChild>
                <Link href="/expertises">Expertises</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{techno.technoName}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Badge align="center">Technologie {techno.technoName}</Badge>
        <Typography
          as="h1"
          title={techno.hero.headline}
          subtitle={techno.hero.subheadline}
        />
        <div className="flex justify-center">
          <CallButton />
        </div>
      </PageHero>

      {/* Pourquoi cette techno — texte gauche + logo card droite */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <Badge align="left" className="mb-4">
                Pourquoi {techno.technoName}
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-6 leading-tight">
                {techno.whyTechno.title}
              </h2>
              <div className="space-y-4 text-gray-dark text-base sm:text-lg leading-relaxed">
                {techno.whyTechno.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            {logoSrc && (
              <div className="lg:col-span-2">
                <div className="relative aspect-square overflow-hidden rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter bg-white p-3">
                  <div className="relative h-full w-full rounded-[32px] bg-background flex items-center justify-center p-10">
                    <Image
                      src={logoSrc}
                      alt={`Logo ${techno.technoName}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, 80vw"
                      className="object-contain p-12"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quand utiliser — collapsibles à gauche, image à droite */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {useIllustrationSrc && (
              <div className="lg:sticky lg:top-24">
                <div className="relative aspect-square overflow-hidden rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter bg-white p-3">
                  <Image
                    src={useIllustrationSrc}
                    alt={`Réalisation avec ${techno.technoName}`}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-center p-3 bg-white rounded-[40px]"
                  />
                </div>
              </div>
            )}
            <div className={cn(!useIllustrationSrc && "lg:col-span-2")}>
              <Badge variant="blue" align="left" className="mb-4">
                Cas d&apos;usage
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-6 leading-tight">
                {techno.whenToUse.title}
              </h2>
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-2"
              >
                {techno.whenToUse.points.map((point, i) => {
                  const p = normalizePoint(point, i);
                  return (
                    <AccordionItem key={p.title} value={`use-${i}`}>
                      <AccordionTrigger bgColor="bg-primary-blue/5">
                        <span className="flex items-center gap-4">
                          <span className="text-primary-blue font-bold text-xl shrink-0">
                            0{i + 1}
                          </span>
                          <span className="text-primary-dark font-semibold text-base sm:text-lg text-left">
                            {p.title}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent bgColor="bg-primary-blue/5">
                        <p className="text-gray-dark leading-relaxed">
                          {p.description}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Quand ne pas utiliser — collapsibles à gauche, image à droite (inverse) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <Badge variant="red" align="left" className="mb-4">
                À éviter
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-6 leading-tight">
                {techno.whenNotToUse.title}
              </h2>
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-2"
              >
                {techno.whenNotToUse.points.map((point, i) => {
                  const p = normalizePoint(point, i);
                  return (
                    <AccordionItem key={p.title} value={`avoid-${i}`}>
                      <AccordionTrigger
                        bgColor="bg-red-50"
                        iconBgClass="bg-gradient-to-b from-red-800 to-red-500"
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-red-700 font-bold text-xl shrink-0">
                            0{i + 1}
                          </span>
                          <span className="text-primary-dark font-semibold text-base sm:text-lg text-left">
                            {p.title}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent bgColor="bg-red-50">
                        <p className="text-gray-dark leading-relaxed">
                          {p.description}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
            {avoidIllustrationSrc && (
              <div className="lg:sticky lg:top-24 order-first lg:order-last">
                <div className="relative aspect-square overflow-hidden rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter bg-white p-3">
                  <Image
                    src={avoidIllustrationSrc}
                    alt={`Cas d'usage ${techno.technoName}`}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-center p-3 bg-white rounded-[40px]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Notre approche — style "Ce qui est inclus" sur fond sombre */}
      <section className="py-16 md:py-24 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Badge variant="blue" align="center">
            Notre approche
          </Badge>
          <Typography
            as="h2"
            title={techno.ourApproach.title}
            subtitle={`Du cadrage à la mise en production, voici comment on travaille avec ${techno.technoName}.`}
            titleColor="text-white"
            subtitleColor="text-gray-light"
            titleSize="4xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {approachPhases.map((phase, i) => (
              <div key={i} className="bg-secondary-dark rounded-4xl p-6 h-full">
                <div className="flex items-start gap-4">
                  <span className="text-primary-blue font-bold text-2xl shrink-0 leading-none mt-1">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-xl">
                      {phase.title}
                    </h3>
                    <p className="text-gray-light text-lg mt-1 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10 md:mt-12">
            <CallButton variant="blue" />
          </div>
        </div>
      </section>

      {/* Réalisations — projets portfolio */}
      {realisations.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-t from-background from-0% to-white to-30%">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Badge align="center">Réalisations</Badge>
            <Typography
              as="h2"
              title={`Projets livrés avec ${techno.technoName}`}
              subtitle="Quelques produits qu'on a conçus et développés."
              titleSize="4xl"
            />
            <div
              className={cn(
                "grid gap-4 mt-8",
                realisations.length === 1
                  ? "max-w-2xl mx-auto"
                  : "grid-cols-1 md:grid-cols-2",
              )}
            >
              {realisations.map((proj) => (
                <PortfolioCard key={proj.title} {...proj} vertical />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stack technique — reuse */}
      <ServiceStack />

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Badge align="center">FAQ</Badge>
          <Typography
            as="h2"
            title={`Questions fréquentes sur ${techno.technoName}`}
            titleSize="4xl"
          />
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-2 mt-8"
          >
            {techno.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger bgColor="bg-white">{faq.q}</AccordionTrigger>
                <AccordionContent bgColor="bg-white">
                  <p className="text-gray-dark leading-relaxed">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}

export default TechnoPage;
