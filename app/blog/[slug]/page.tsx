import type { Metadata } from "next";
import { blogPosts, getBlogPost, blogCategories } from "@/data/blog";
import {
  buildBlogPostingSchema,
  buildBlogBreadcrumbSchema,
} from "@/lib/seo/blog";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import MDXContent from "@/components/mdx-content";
import { PageHero } from "@/components/ui/page-hero";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Blog Vizion Web`,
    description: post.description,
    alternates: {
      canonical: `https://vizionweb.fr/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://vizionweb.fr/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      ...(post.image && {
        images: [
          {
            url: `https://vizionweb.fr${post.image}`,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const category = blogCategories[post.category];
  const postSchema = buildBlogPostingSchema(post);
  const breadcrumbSchema = buildBlogBreadcrumbSchema(post);

  return (
    <>
      <main>
        <PageHero bg="white">
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
                  <Link href="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">
                  {post.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="pb-2 text-center">
            <div className="flex justify-center items-center gap-3 mt-10 sm:mt-16 mb-2">
              <span className="text-xs font-medium text-primary-blue bg-primary-dark px-2.5 py-1 rounded-full">
                {category.label}
              </span>
              <time
                dateTime={post.date}
                className="flex items-center gap-1.5 text-sm text-gray-dark capitalize"
              >
                <CalendarDays className="size-3.5" />
                {new Date(post.date)
                  .toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                  .replace(/[a-zà-ÿ]+\./i, (m) => m.slice(0, 3))}
              </time>
              <span className="flex items-center gap-1.5 text-sm text-gray-dark">
                <Clock className="size-3.5" />
                {post.readingTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-dark text-balance max-w-2xl mx-auto">
              {post.title}
            </h1>
          </header>

          <Image
            src="/projets/chefkit.jpg"
            alt={post.title}
            width={1200}
            height={630}
            className="w-full rounded-2xl object-cover aspect-[2/1] mt-6"
            priority
          />
        </PageHero>

        <article className="max-w-[1000px] mx-auto px-5">
          <MDXContent file={`blog/${post.slug}.md`} stripTitle />

          <footer className="pt-8 mt-8 border-t border-gray-lighter">
            <Link
              href="/blog"
              className="text-sm font-medium text-secondary-dark hover:text-gray-dark transition-colors"
            >
              &larr; Retour au blog
            </Link>
          </footer>
        </article>
      </main>

      <Script
        id="blog-posting-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(postSchema)}
      </Script>
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
