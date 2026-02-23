import { MetadataRoute } from "next";
import { CITIES, COUNTRIES } from "@/data";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vizionweb.fr";

  const uniqueSlugs = new Set<string>();
  for (const city of CITIES) uniqueSlugs.add(city.slug);
  for (const country of COUNTRIES) uniqueSlugs.add(country.slug);

  const dynamicRoutes = Array.from(uniqueSlugs).map(function toPath(slug) {
    return `/${slug}`;
  });

  const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`);

  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // Homepage
  entries.push({
    url: baseUrl,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  });

  // Services hub
  entries.push({
    url: `${baseUrl}/services`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  });

  // Service detail pages
  for (const service of services) {
    entries.push({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Réalisations
  entries.push({
    url: `${baseUrl}/realisations`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  });

  // À propos
  entries.push({
    url: `${baseUrl}/a-propos`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  });

  // City/country pages
  for (const path of dynamicRoutes) {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Blog listing
  if (blogPosts.length > 0) {
    entries.push({
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Blog posts
  for (const path of blogRoutes) {
    const post = blogPosts.find((p) => `/blog/${p.slug}` === path);
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: post ? new Date(post.date) : now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
