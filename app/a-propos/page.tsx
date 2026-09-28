import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlurDataURL } from "@/lib/blur";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";

import IconIllustration from "@/components/ui/icon-illustration";
import { ImQuotesRight } from "react-icons/im";
import { PiPenNibFill, PiCodeFill, PiHandshakeFill } from "react-icons/pi";
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
import { ServiceStack } from "@/components/service-detail/service-stack";

export const metadata: Metadata = {
  title: "À propos : méthode, stack et expertise SaaS | Vizion Web",
  description:
    "Vizion Web, agence produit présente en Guyane et à Montpellier. Méthode pour livrer un MVP en quelques semaines, expertise SaaS, applications métier et intégration IA. Devis sous 24h.",
  alternates: {
    canonical: "https://vizionweb.fr/a-propos",
  },
  openGraph: {
    title: "À propos : méthode, stack et expertise SaaS | Vizion Web",
    description:
      "Méthode pour livrer un MVP en quelques semaines, expertise SaaS et apps métier sur-mesure. Stack Next.js et IA en production. Direct, sans intermédiaire.",
    url: "https://vizionweb.fr/a-propos",
    type: "website",
  },
};

const promiseParagraphs = [
  {
    title: "Un MVP livré en quelques semaines",
    content:
      "Pas en six mois. Le cadrage prend une trentaine de minutes, le devis tombe sous 24 à 48 heures, et la première démo arrive à la fin de la première semaine. Les sprints courts forcent à arbitrer le superflu et à concentrer chaque jour sur ce qui apporte vraiment de la valeur côté utilisateur.",
  },
  {
    title: "Un devis chiffré sous 24 à 48 heures",
    content:
      "Un appel de cadrage suffit pour vous renvoyer un périmètre, un planning et un prix fixe. Vous savez ce que vous payez avant de signer, et le périmètre tient jusqu'à la livraison. Aucune surprise sur la facture, aucun ajout caché.",
  },
  {
    title: "Un code 100% à vous dès le premier jour",
    content:
      "Le repository GitHub, le compte Vercel, la base Supabase, le domaine : tout est à votre nom. Vous reprenez la main avec votre équipe ou un autre prestataire sans avoir à renégocier la propriété du code, des données ou de l'infrastructure.",
  },
  {
    title: "Un seul interlocuteur, du devis à la production",
    content:
      "Vous parlez à la personne qui code. Les décisions techniques et produit se prennent en temps réel, sans rond-point ni intermédiaire qui ralentit la boucle. Les démos hebdo gardent la direction calée semaine après semaine.",
  },
];

const pillars = [
  {
    icon: PiPenNibFill,
    title: "Design avant le code",
    description:
      "Chaque projet démarre par les maquettes Figma, validées avec vous avant la première ligne de code. Vous voyez le produit avant qu'il existe. Modifications illimitées jusqu'à validation.",
  },
  {
    icon: PiCodeFill,
    title: "Stack moderne, code 100% à vous",
    description:
      "Next.js, TypeScript, Supabase, Vercel. Une stack qui suit dans la durée et qui encaisse les fonctionnalités complexes sans s'effondrer. Code source à vous à la livraison.",
  },
  {
    icon: PiHandshakeFill,
    title: "Direct, sans intermédiaire",
    description:
      "Vous parlez avec le développeur qui code. Devis chiffré sous 24h, planning précis à la semaine, démo en fin de chaque sprint. Les décisions techniques et produit se prennent en temps réel, sans rond-point.",
  },
];

const approachPhases = [
  {
    title: "Cadrage produit",
    description:
      "Un appel de 30 minutes pour comprendre le problème métier et le contexte business. On en sort avec un périmètre clair, un devis chiffré et un planning sous 24 à 48h.",
  },
  {
    title: "Design Figma",
    description:
      "Maquettes complètes du parcours principal, validées avec vous. Le produit prend forme avant le code, ce qui évite les retours en arrière coûteux en développement.",
  },
  {
    title: "Sprints de développement",
    description:
      "Stack Next.js, Supabase, Vercel. Démos chaque vendredi, URLs de preview en continu. Vous voyez le produit grandir et donnez votre avis avant chaque jalon.",
  },
  {
    title: "Mise en production et support",
    description:
      "Déploiement sur votre domaine, monitoring en place, support de 30 à 90 jours inclus. Au-delà, on continue ensemble ou votre équipe reprend la main proprement.",
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
          title="On livre des produits web, vite et bien"
          subtitle="Agence produit pour startups et PME en transformation digitale. Devis sous 24h, code 100% à vous."
        />
        <div className="flex justify-center">
          <CallButton />
        </div>
      </PageHero>

      {/* Notre promesse : liste numérotée, structure Bordeaux */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background from-0% to-white to-10%">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <Badge align="center">Notre promesse</Badge>
            <h2 className="text-[22px] sm:text-[28px] md:text-5xl font-semibold text-primary-dark leading-tight mt-4">
              Quatre engagements tenus à chaque projet
            </h2>
          </div>

          <div className="divide-y divide-gray-lighter">
            {promiseParagraphs.map((p, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 md:gap-8 py-8 lg:py-10 first:pt-0"
              >
                <h3 className="font-semibold text-balance text-xl lg:text-2xl text-primary-dark flex items-baseline gap-3">
                  <span className="text-primary-blue font-bold shrink-0">
                    0{i + 1}
                  </span>
                  <span>{p.title}</span>
                </h3>
                <div className="text-gray-dark leading-7">
                  <p>{p.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fondateur */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center">
            {/* Photo */}
            <div className="relative group order-last lg:order-first">
              <div className="relative aspect-square overflow-hidden rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter">
                <Image
                  src="/founder.webp"
                  alt="Fondateur de Vizion Web"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={getBlurDataURL("/founder.webp")}
                  className="object-cover object-center p-3 bg-white rounded-[40px]"
                />
              </div>
            </div>

            {/* Texte */}
            <div className="flex flex-col gap-0 sm:gap-4 text-gray-dark">
              <Badge align="left" className="w-fit mb-0">
                L'origine
              </Badge>
              <h3 className="text-[22px] sm:text-[28px] md:text-4xl font-semibold text-primary-dark leading-tight">
                Pourquoi Vizion Web existe ?
              </h3>

              <div className="text-base sm:text-lg space-y-4">
                <p>
                  Cinq ans de développement et de design produit avant de monter
                  Vizion Web, avec le même constat sur chaque projet repris :
                  trop d'intermédiaires, trop de tunnels qui s'étirent sur six
                  mois pour ce qui devait tenir en trois semaines. Le modèle ici
                  prend le contrepied. Une agence solo présente en Guyane, avec
                  un pied à terre à Montpellier, où vous parlez directement à la
                  personne qui conçoit et qui code.
                </p>

                <p>
                  Quand un projet demande une expertise pointue ou plus de
                  mains, on s'appuie sur un réseau de freelances talentueux : un
                  designer sur un parcours complexe, un dev pour un back-end
                  complexe, un copywriter pour un site qui doit convertir.
                  L'équipe se monte au besoin et se défait après livraison, sans
                  couche d'intermédiaires à facturer. Vous gardez le même
                  interlocuteur du devis au déploiement.
                </p>
              </div>

              <div className="relative px-6 py-6 sm:py-10 rounded-3xl bg-background">
                <ImQuotesRight className="absolute bottom-4 right-4 text-2xl sm:text-3xl text-primary-blue" />
                <p className="text-base sm:text-lg font-semibold text-primary-dark relative z-10">
                  "Un produit qui tourne en prod, livré en 3 semaines, sans
                  surprise sur le devis, sans dépendance après la livraison."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre approche : dark bg, 4 phases (pattern expertises) */}
      <section className="py-16 md:py-24 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Badge variant="blue" align="center">
            Notre approche
          </Badge>
          <Typography
            as="h2"
            title="Du cadrage à la mise en production en 4 étapes"
            subtitle="Un rythme calé sur ce que vous voyez à l'écran, pas sur des promesses dans un devis."
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

      {/* Nos principes : 3 piliers */}
      <section className="py-16 md:py-24 bg-gradient-to-t from-background from-0% to-white to-95%">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Badge align="center">Nos principes</Badge>
          <h2 className="text-[22px] sm:text-[28px] md:text-5xl font-semibold text-primary-dark leading-tight mt-4 mb-8 text-center">
            Trois principes, lisibles dès le devis
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="h-full flex">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack technique */}
      <ServiceStack />
    </main>
  );
}
