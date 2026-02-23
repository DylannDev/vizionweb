import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import FadeIn from "@/components/ui/fade-in";
import CallButton from "@/components/call-button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import IconIllustration from "@/components/ui/icon-illustration";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import {
  PiPenNibFill,
  PiCodeFill,
  PiHandshakeFill,
  PiRocketLaunchFill,
  PiShieldCheckFill,
  PiLightningFill,
} from "react-icons/pi";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
      "Chaque projet commence par le design. Nous concevons des interfaces sur Figma, validées avec vous, avant d'écrire une seule ligne de code. Le résultat : un produit intuitif que vos utilisateurs adoptent naturellement.",
  },
  {
    icon: PiCodeFill,
    title: "Code sur-mesure",
    description:
      "Pas de templates, pas de WordPress. Nous développons avec React, Next.js et TypeScript — les mêmes technologies utilisées par Netflix, Uber ou Airbnb. Votre projet est plus rapide, plus sécurisé et évolutif.",
  },
  {
    icon: PiHandshakeFill,
    title: "Accompagnement complet",
    description:
      "Du premier appel au support post-lancement, nous sommes votre partenaire technique. Copywriting, design, développement, déploiement — vous avez un interlocuteur unique pour tout votre projet.",
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
      <div className="pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
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
        </div>
      </div>

      {/* Hero / Mission */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Badge align="center">À propos</Badge>
          <Typography
            as="h1"
            title="Nous transformons vos idées en solutions digitales opérationnelles"
            subtitle="Vizion Web est une agence de développement web spécialisée dans la création d'applications et de sites sur-mesure pour startups et entreprises."
          />

          <FadeIn delay={0.3}>
            <div className="max-w-3xl mx-auto text-center space-y-4 text-gray-dark">
              <p>
                Notre mission est simple : vous donner les outils digitaux dont
                vous avez besoin pour développer votre activité. Pas de solutions
                génériques, pas de compromis sur la qualité — chaque projet est
                conçu spécifiquement pour vos objectifs et votre marché.
              </p>
              <p>
                Nous accompagnons nos clients de l'idée au lancement, en prenant
                en charge l'intégralité du projet : stratégie, design, copywriting,
                développement et déploiement. Un interlocuteur unique, un processus
                clair, et un résultat à la hauteur de vos ambitions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Notre approche — 3 piliers */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Typography
            title="Notre approche"
            subtitle="Trois piliers pour des projets qui livrent des résultats concrets."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((pillar, i) => (
              <FadeIn
                key={pillar.title}
                delay={0.2 * (i + 1)}
                className="h-full flex"
              >
                <Card radius="2xl" className="h-full">
                  <CardHeader className="space-y-8">
                    <IconIllustration icon={pillar.icon} />
                    <CardTitle className="text-primary-dark">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>{pillar.description}</CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise technique */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Typography
            title="Notre expertise technique"
            subtitle="Les technologies et compétences que nous mobilisons pour chaque projet."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {expertise.map((block, i) => (
              <FadeIn key={block.title} delay={0.2 * (i + 1)}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <IconIllustration icon={block.icon} size={40} />
                    <h3 className="font-semibold text-primary-dark text-lg">
                      {block.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 pl-1">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="text-gray-dark text-sm flex items-center gap-2"
                      >
                        <span className="size-1.5 rounded-full bg-primary-blue shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Nos clients */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Typography
            title="Ils nous font confiance"
            subtitle="Startups, PME et entreprises établies — nous accompagnons des profils variés avec un objectif commun : créer de la valeur."
          />

          <div className="max-w-5xl mx-auto">
            <div className="hidden lg:block">
              <LogoCarousel columnCount={4} />
            </div>
            <div className="block lg:hidden">
              <LogoCarousel columnCount={3} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <Typography
            title="Vous avez un projet ? Parlons-en"
            subtitle="Réservez un appel de 30 minutes. Nous discutons de vos objectifs et vous donnons une vision claire des prochaines étapes."
          />
          <FadeIn delay={0.3} className="flex justify-center">
            <CallButton />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
