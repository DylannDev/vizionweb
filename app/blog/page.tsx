import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { buildBlogBreadcrumbSchema } from "@/lib/seo/blog";
import BlogFilter from "@/components/blog-filter";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import { PageHero } from "@/components/ui/page-hero";
import Script from "next/script";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Blog — Conseils web, apps et stratégie digitale | Vizion Web",
  description:
    "Articles pratiques sur la création de sites web, applications SaaS, stratégie digitale et choix technologiques. Guides, comparaisons et retours d'expérience.",
  alternates: {
    canonical: "https://vizionweb.fr/blog",
  },
  openGraph: {
    title: "Blog — Conseils web, apps et stratégie digitale | Vizion Web",
    description:
      "Articles pratiques sur la création de sites web, applications SaaS, stratégie digitale et choix technologiques.",
    url: "https://vizionweb.fr/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const breadcrumbSchema = buildBlogBreadcrumbSchema();
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
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
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Badge align="center">Blog</Badge>
          <Typography
            title="Ressources pour vos projets web"
            subtitle="Guides pratiques, retours d'expérience et conseils pour créer des sites et applications qui génèrent des résultats."
          />
        </PageHero>

        <section className="bg-gradient-to-b from-background from-0% to-white to-10%">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {<BlogFilter posts={sortedPosts} />}
          </div>
        </section>
      </main>

      <Script
        id="blog-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </>
  );
}
