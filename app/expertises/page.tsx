import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import CallButton from "@/components/call-button";
import { PageHero } from "@/components/ui/page-hero";
import { ContentCard } from "@/components/ui/content-card";
import { technos } from "@/data/technos";
import { stackTechs } from "@/data/stack";
import IconIllustration from "@/components/ui/icon-illustration";
import { PiLightningFill, PiSparkleFill, PiCloudFill } from "react-icons/pi";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const nameToLogoId: Record<string, string> = {
  React: "react",
  "Next.js": "nextjs",
  TypeScript: "typescript",
  "Tailwind CSS": "tailwindcss",
  Figma: "figma",
  "Node.js": "nodejs",
  PostgreSQL: "postgresql",
  Supabase: "supabase",
  OpenAI: "openai",
  Claude: "claude",
  n8n: "n8n",
  Vercel: "vercel",
};

const descriptionByName: Record<string, string> = {
  React:
    "Librairie front-end de Meta pour vos SPA, dashboards et modules interactifs embarqués.",
  "Next.js":
    "Framework React de référence avec App Router, Server Components et SEO natif.",
  TypeScript:
    "JavaScript typesafe avec mode strict pour la fiabilité long terme du code.",
  "Tailwind CSS":
    "Système de design utilitaire qui scale sans CSS bloat ni surprises visuelles.",
  Figma:
    "Outil de référence pour les maquettes, prototypes et design system produit.",
  "Node.js":
    "Runtime serveur partagé avec le front pour la cohérence stack et l'embauche dev.",
  PostgreSQL:
    "Base de données relationnelle robuste, accessible via Supabase ou self-hosted.",
  Supabase:
    "Backend Postgres managé avec auth, storage, realtime et pgvector pour le RAG IA.",
  OpenAI:
    "Modèles GPT et raisonnement pour vos agents IA, extraction documentaire et génération.",
  Claude:
    "API Anthropic pour le raisonnement long, l'analyse de code et les agents B2B critiques.",
  n8n: "Automatisation open-source auto-hébergeable, alternative à Zapier et Make.",
  Vercel:
    "Déploiement Next.js avec edge runtime, preview branches et monitoring inclus.",
};

export const metadata: Metadata = {
  title:
    "Expertises techniques : stack moderne pour produits digitaux | Vizion Web",
  description:
    "Nos expertises : OpenAI, Claude, Supabase, Next.js, React + 7 technos complémentaires (TypeScript, Tailwind, Figma, Node.js, PostgreSQL, n8n, Vercel).",
  alternates: {
    canonical: "https://vizionweb.fr/expertises",
  },
  openGraph: {
    title:
      "Expertises techniques : stack moderne pour produits digitaux | Vizion Web",
    description:
      "Stack moderne pour SaaS, MVP et applications métier : OpenAI, Claude, Supabase, Next.js, React, TypeScript, Tailwind, Figma, Node.js, PostgreSQL, n8n, Vercel.",
    url: "https://vizionweb.fr/expertises",
    type: "website",
  },
};

const stackByCategory = {
  "Front-end & Design": [
    { name: "React", techno: technos.find((t) => t.slug === "agence-react") },
    {
      name: "Next.js",
      techno: technos.find((t) => t.slug === "agence-next-js"),
    },
    {
      name: "TypeScript",
      techno: technos.find((t) => t.slug === "agence-typescript"),
    },
    { name: "Tailwind CSS", techno: null },
    { name: "Figma", techno: null },
  ],
  "Back-end & Data": [
    {
      name: "Node.js",
      techno: technos.find((t) => t.slug === "agence-nodejs"),
    },
    { name: "PostgreSQL", techno: null },
    {
      name: "Supabase",
      techno: technos.find((t) => t.slug === "agence-supabase"),
    },
  ],
  "IA & Automatisations": [
    {
      name: "OpenAI",
      techno: technos.find((t) => t.slug === "agence-openai"),
    },
    {
      name: "Claude",
      techno: technos.find((t) => t.slug === "agence-claude-api"),
    },
    {
      name: "n8n",
      techno: technos.find((t) => t.slug === "agence-n8n"),
    },
  ],
  Infra: [{ name: "Vercel", techno: null }],
};

export default function ExpertisesPage() {
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
              <BreadcrumbPage>Expertises</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Badge align="center">Expertises techniques</Badge>
        <Typography
          as="h1"
          title="Une stack moderne pour vos SaaS, MVP et applications métier"
          subtitle="Les technos qu'on utilise tous les jours pour livrer des produits qui tiennent en production."
        />
        <div className="flex justify-center">
          <CallButton />
        </div>
      </PageHero>

      <div className="bg-gradient-to-b from-background from-0% via-white via-30% to-background to-90%">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-16">
          {Object.entries(stackByCategory).map(([category, items]) => (
            <section key={category}>
              <h2 className="text-[22px] sm:text-[28px] font-semibold text-primary-dark leading-tight mb-6">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => {
                  const logoId = nameToLogoId[item.name];
                  const tech = logoId ? stackTechs[logoId] : undefined;
                  const description =
                    descriptionByName[item.name] ??
                    "Tech complémentaire de la stack.";
                  const href = item.techno ? `/${item.techno.slug}` : undefined;
                  return (
                    <ContentCard
                      key={item.name}
                      title={item.name}
                      description={description}
                      logoSrc={tech?.logo}
                      href={href}
                      actionLabel={href ? "Voir l'expertise" : undefined}
                      hover={Boolean(href)}
                    />
                  );
                })}
              </div>
            </section>
          ))}

          <section>
            <Badge align="center">Pourquoi cette stack</Badge>
            <Typography
              as="h2"
              title="Une stack choisie pour la rapidité et la durabilité"
              subtitle="Chaque techno a été retenue pour la vitesse de livraison et la durabilité du code dans le temps."
              titleSize="4xl"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                {
                  icon: PiLightningFill,
                  title: "Rapidité et code durable",
                  description:
                    "Next.js et Supabase permettent de livrer un MVP en 3 semaines sans réinventer l'auth ni le déploiement. TypeScript et Tailwind garantissent un code lisible par n'importe quel développeur qui reprend le projet.",
                },
                {
                  icon: PiSparkleFill,
                  title: "IA intégrée nativement",
                  description:
                    "OpenAI ou Claude intégrés directement dans vos workflows pour piloter agents conversationnels, classification automatique, extraction de données et génération de contenu.",
                },
                {
                  icon: PiCloudFill,
                  title: "Scalabilité sans DevOps",
                  description:
                    "Vercel pour scaler de 10 à 100 000 utilisateurs sans configuration serveur. Déploiement en quelques secondes, monitoring et preview branches inclus.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="h-full rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter bg-white p-3 w-full"
                >
                  <div className="h-full rounded-[32px] p-6 flex flex-col gap-4">
                    <IconIllustration
                      icon={card.icon}
                      variant="blue"
                      size={42}
                      radius="rounded-xl"
                    />
                    <h3 className="font-semibold text-primary-dark text-xl">
                      {card.title}
                    </h3>
                    <p className="text-lg text-gray-dark leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
