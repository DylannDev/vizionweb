import { MetadataRoute } from "next";
import { CITIES, COUNTRIES } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vizionweb.fr";

  const staticRoutes = ["/"];

  const uniqueSlugs = new Set<string>();
  for (const city of CITIES) uniqueSlugs.add(city.slug);
  for (const country of COUNTRIES) uniqueSlugs.add(country.slug);

  const dynamicRoutes = Array.from(uniqueSlugs).map(function toPath(slug) {
    return `/${slug}`;
  });

  const allRoutes = [...staticRoutes, ...dynamicRoutes];
  const now = new Date();

  return allRoutes.map(function toSitemapEntry(
    path
  ): MetadataRoute.Sitemap[number] {
    return {
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "/" ? 1 : 0.9,
    };
  });
}
