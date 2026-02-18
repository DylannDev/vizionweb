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
import MDXContent from "@/components/mdx-content";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";

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
        <div className="pt-24 pb-4">
          <div className="max-w-3xl mx-auto px-5">
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
          </div>
        </div>

        <article className="pb-16 md:pb-24">
          <header className="max-w-3xl mx-auto px-5 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-primary-green bg-primary-dark px-2.5 py-1 rounded-full">
                {category.label}
              </span>
              <time dateTime={post.date} className="text-sm text-gray-light">
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="text-sm text-gray-light">
                {post.readingTime}
              </span>
            </div>
          </header>

          <MDXContent file={`blog/${post.slug}.md`} />

          <footer className="max-w-3xl mx-auto px-5 pt-8 mt-8 border-t border-gray-lighter">
            <Link
              href="/blog"
              className="text-sm font-medium text-secondary-dark hover:text-gray-light transition-colors"
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
