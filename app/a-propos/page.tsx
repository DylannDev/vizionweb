import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import FadeIn from "@/components/ui/fade-in";
import IconIllustration from "@/components/ui/icon-illustration";
import { ImQuotesRight } from "react-icons/im";
import {
  PiPenNibFill,
  PiCodeFill,
  PiHandshakeFill,
  PiRocketLaunchFill,
  PiShieldCheckFill,
  PiLightningFill,
} from "react-icons/pi";
import { PageHero } from "@/components/ui/page-hero";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CallButton from "@/components/call-button";

export const metadata: Metadata = {
  title: "À propos — Notre approche et notre expertise | Vizion Web",
  description:
    "Découvrez l'approche, les valeurs et l'expertise technique de Vizion Web. Nous développons des applications web et sites sur-mesure pour startups et entreprises.",
  alternates: {
    canonical: "https://vizionweb.fr/a-propos",
  },
  openGraph: {
    title: "À propos — Notre approche et notre expertise | Vizion Web",
    description:
      "Solutions web sur-mesure en React/Next.js pour startups et entreprises. Découvrez notre méthode.",
    url: "https://vizionweb.fr/a-propos",
    type: "website",
  },
};

const pillars = [
  {
    icon: PiPenNibFill,
    title: "Design-driven",
    description:
      "Chaque projet commence par le design. Nous concevons des interfaces sur Figma, validées avec vous, avant d'écrire une seule ligne de code. Le résultat : un produit intuitif que vos utilisateurs adoptent sans effort.",
  },
  {
    icon: PiCodeFill,
    title: "Code sur-mesure",
    description:
      "Pas de templates, pas de WordPress. Nous développons avec React, Next.js et TypeScript, les mêmes technologies utilisées par Netflix, Uber ou Airbnb. Votre projet est plus rapide, plus sécurisé et évolutif.",
  },
  {
    icon: PiHandshakeFill,
    title: "Accompagnement complet",
    description:
      "Du premier appel au support post-lancement, nous sommes votre partenaire technique. Copywriting, design, développement, déploiement : vous avez un interlocuteur unique pour tout votre projet.",
  },
];

const expertise = [
  {
    icon: PiRocketLaunchFill,
    title: "Applications web",
    items: [
      "MVP & Proof of Concept",
      "SaaS multi-tenant",
      "Outils métier & dashboards",
      "Systèmes d'authentification",
      "Intégrations paiement (Stripe)",
    ],
  },
  {
    icon: PiShieldCheckFill,
    title: "Stack technique",
    items: [
      "React & Next.js",
      "TypeScript",
      "PostgreSQL & Prisma",
      "Tailwind CSS",
      "Vercel & AWS",
    ],
  },
  {
    icon: PiLightningFill,
    title: "Compétences intégrées",
    items: [
      "UI/UX Design (Figma)",
      "Copywriting conversion",
      "SEO technique",
      "Performance & Core Web Vitals",
      "Responsive & accessibilité",
    ],
  },
];

export default function AProposPage() {
  return (
    <main>
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
              <BreadcrumbPage>À propos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Badge align="center">À propos</Badge>
        <Typography
          as="h1"
          title="Votre projet mérite notre expertise"
          subtitle="Nous concevons et développons des applications web et sites sur-mesure pour les entreprises qui veulent un produit à la hauteur de leurs ambitions."
        />
        <div className="flex justify-center">
          <CallButton />
        </div>
      </PageHero>

      {/* Notre mission */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background from-0% to-white to-30%">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Texte */}
            <div>
              <FadeIn>
                <Badge align="left">Notre mission</Badge>
                <h2 className="text-[22px] sm:text-[28px] font-semibold text-primary-dark leading-tight mt-4 mb-6">
                  Une agence partenaire, pas un prestataire
                </h2>
              </FadeIn>
              <div className="space-y-4 text-gray-dark text-base sm:text-lg">
                <FadeIn delay={0.2}>
                  <p>
                    Chaque projet est conçu pour vos objectifs et votre marché.
                    Pas de templates recyclés, pas de compromis. Du code
                    sur-mesure, pensé pour durer et évoluer avec votre activité.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p>
                    Stratégie, design, copywriting, développement, déploiement :
                    nous gérons tout. Un interlocuteur unique du début à la fin,
                    un processus transparent, et un résultat qui génère de la
                    valeur dès le premier jour.
                  </p>
                </FadeIn>
              </div>
              <div className="flex justify-center lg:justify-start mt-8">
                <CallButton size="md" />
              </div>
            </div>

            {/* Mockup */}
            <FadeIn delay={0.3}>
              <div className="relative aspect-square overflow-hidden rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter">
                <Image
                  src="/mockup-1.jpg"
                  alt="Exemple de projet livré par Vizion Web"
                  width={1500}
                  height={1500}
                  className="object-cover object-center p-3 bg-white rounded-[40px]"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Fondateur */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center">
            {/* Photo */}
            <FadeIn>
              <div className="relative group">
                <div className="relative aspect-square overflow-hidden rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter">
                  <Image
                    src="/founder.jpg"
                    alt="Dylann, fondateur de Vizion Web"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center p-3 bg-white rounded-[40px]"
                  />
                </div>
                <FadeIn delay={0.3}></FadeIn>
              </div>
            </FadeIn>

            {/* Texte */}
            <div className="flex flex-col gap-4 text-gray-dark">
              <FadeIn delay={0.2}>
                <Badge align="left">Le fondateur</Badge>
                <h3 className="text-[22px] sm:text-[28px] font-semibold text-primary-dark leading-tight mt-4 mb-6">
                  Pourquoi j'ai créé Vizion Web ?
                </h3>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-base sm:text-lg">
                  Développeur et designer depuis plus de 5 ans, j'ai créé Vizion
                  Web pour proposer un modèle différent : une agence 100 %
                  remote, sans structure lourde, qui s'entoure des meilleurs
                  freelances pour chaque projet.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-base sm:text-lg">
                  Je pilote chaque mission de A à Z. Quand un projet demande une
                  expertise pointue (design UI, SEO poussé, dev backend), je
                  fais appel à des indépendants seniors avec qui je travaille
                  régulièrement. Vous gardez un seul interlocuteur, avec une
                  équipe complète derrière.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="relative px-6 py-10 rounded-3xl mt-2 bg-background">
                  <ImQuotesRight className="absolute bottom-4 right-4 text-3xl text-primary-blue" />
                  <p className="text-base sm:text-lg font-semibold text-primary-dark relative z-10">
                    "Mon objectif : vous donner accès à une équipe solide, sans
                    la complexité et le coût d'une agence traditionnelle."
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Notre approche — 3 piliers */}
      <section className="py-16 md:py-24 bg-gradient-to-t from-background from-0% to-white to-95%">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Badge align="center">Notre approche</Badge>
          <h2 className="text-[22px] sm:text-[28px] font-semibold text-primary-dark leading-tight mt-4 mb-8 text-center">
            Trois piliers pour des projets qui livrent des résultats
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((pillar, i) => (
              <FadeIn
                key={pillar.title}
                delay={0.2 * (i + 1)}
                className="h-full flex"
              >
                <div className="h-full rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter bg-white p-3">
                  <div className="h-full rounded-[32px] p-6 flex flex-col gap-4">
                    <IconIllustration icon={pillar.icon} />
                    <h3 className="font-semibold text-primary-dark text-xl">
                      {pillar.title}
                    </h3>
                    <p className="text-lg text-gray-dark">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise technique */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Badge align="center">Notre expertise</Badge>
          <h2 className="text-[22px] sm:text-[28px] font-semibold text-primary-dark leading-tight mt-4 mb-8 text-center">
            Les technologies et compétences derrière chaque projet
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((block, i) => (
              <FadeIn
                key={block.title}
                delay={0.2 * (i + 1)}
                className="h-full w-full flex"
              >
                <div className="h-full w-full rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter bg-white p-3">
                  <div className="h-full rounded-[32px] p-4 flex flex-col gap-4">
                    <IconIllustration icon={block.icon} />
                    <h3 className="font-semibold text-primary-dark text-xl">
                      {block.title}
                    </h3>
                    <ul className="space-y-2 pl-1">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="text-gray-dark text-lg flex items-center gap-2"
                        >
                          <span className="size-1.5 rounded-full bg-primary-blue shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
