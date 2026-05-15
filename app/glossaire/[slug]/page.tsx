import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  glossaryCategories,
  glossaryTerms,
  getGlossaryByCategory,
} from "@/data/glossaire";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = glossaryTerms.find((t) => t.slug === slug);
  if (!term) return {};

  const categoryLabel = glossaryCategories[term.category].label;
  return {
    title: `${term.term} : définition | Glossaire Vizion Web`,
    description: term.definition.slice(0, 155),
    alternates: {
      canonical: `https://vizionweb.fr/glossaire/${term.slug}`,
    },
    openGraph: {
      title: `${term.term} : définition (${categoryLabel})`,
      description: term.definition.slice(0, 200),
      url: `https://vizionweb.fr/glossaire/${term.slug}`,
      type: "article",
    },
  };
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { slug } = await params;
  const term = glossaryTerms.find((t) => t.slug === slug);
  if (!term) notFound();

  const category = glossaryCategories[term.category];
  const sameCategoryTerms = getGlossaryByCategory(term.category)
    .filter((t) => t.slug !== term.slug)
    .sort((a, b) => a.term.localeCompare(b.term, "fr"))
    .slice(0, 6);

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    url: `https://vizionweb.fr/glossaire/${term.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Glossaire Vizion Web",
      url: "https://vizionweb.fr/glossaire",
    },
    termCode: term.slug,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://vizionweb.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Glossaire",
        item: "https://vizionweb.fr/glossaire",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: term.term,
        item: `https://vizionweb.fr/glossaire/${term.slug}`,
      },
    ],
  };

  return (
    <>
      <main>
        <PageHero bg="white" showImgBg={false}>
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
                  <Link href="/glossaire">Glossaire</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{term.term}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Badge align="center">{category.label}</Badge>
          <Typography as="h1" title={term.term} />
        </PageHero>

        <section className="-mt-10 md:-mt-20 pb-12 md:pb-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary-dark">
              Définition
            </h2>
            <p className="text-gray-dark text-base sm:text-lg leading-relaxed">
              {term.definition}
            </p>
            {term.article && term.article.length > 0 && (
              <div className="mt-10 space-y-8">
                {term.article.map((paragraph, i) =>
                  typeof paragraph === "string" ? (
                    <p
                      key={i}
                      className="text-gray-dark text-base sm:text-lg leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ) : (
                    <div key={i}>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-primary-dark">
                        {paragraph.title}
                      </h2>
                      <p className="text-gray-dark text-base sm:text-lg leading-relaxed">
                        {paragraph.content}
                      </p>
                    </div>
                  ),
                )}
              </div>
            )}
            <div className="mt-10 flex">
              <Button
                variant="blue"
                size="md"
                className="h-auto py-1.5 px-4 text-xs sm:text-sm shadow-none hover:shadow-none"
                asChild
              >
                <Link href="/glossaire">
                  <ArrowRight className="size-4 rotate-180" />
                  Retour au glossaire
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {sameCategoryTerms.length > 0 && (
          <section className="relative py-16 md:py-24 bg-white">
            <div className="h-40 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-white z-0" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
              <Typography
                align="left"
                as="h2"
                title={`Autres termes de la catégorie ${category.label}`}
                titleSize="4xl"
                className="mx-0"
                noMargin
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
                {sameCategoryTerms.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/glossaire/${other.slug}`}
                    className="group flex items-center justify-between gap-3 bg-white shadow-[0_4px_20px_0] shadow-gray-lighter sm:bg-transparent sm:shadow-none sm:hover:bg-white sm:hover:shadow-[0_4px_20px_0] sm:hover:shadow-gray-lighter rounded-2xl p-5 cursor-pointer transition-all hover:scale-[1.01]"
                  >
                    <span className="text-2xl font-semibold text-primary-dark group-hover:text-primary-blue transition-colors">
                      {other.term}
                    </span>
                    <span className="size-8 flex items-center justify-center rounded-md bg-gradient-to-b from-primary-blue-dark to-primary-blue-border opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      <ArrowRight
                        className="size-4 text-white"
                        strokeWidth={2.5}
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Script
        id="glossary-term-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(definedTermSchema)}
      </Script>
      <Script
        id="glossary-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </>
  );
}
