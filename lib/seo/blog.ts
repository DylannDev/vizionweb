import type { BlogPost } from "@/data/blog";

export function buildBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Vizion Web",
      url: "https://vizionweb.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "Vizion Web",
      url: "https://vizionweb.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://vizionweb.fr/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://vizionweb.fr/blog/${post.slug}`,
    },
    ...(post.image && {
      image: {
        "@type": "ImageObject",
        url: `https://vizionweb.fr${post.image}`,
      },
    }),
  };
}

export function buildBlogBreadcrumbSchema(post?: BlogPost) {
  const items = [
    {
      "@type": "ListItem" as const,
      position: 1,
      name: "Accueil",
      item: "https://vizionweb.fr",
    },
    {
      "@type": "ListItem" as const,
      position: 2,
      name: "Blog",
      item: "https://vizionweb.fr/blog",
    },
  ];

  if (post) {
    items.push({
      "@type": "ListItem" as const,
      position: 3,
      name: post.title,
      item: `https://vizionweb.fr/blog/${post.slug}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
