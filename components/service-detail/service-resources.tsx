import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import BlogCard from "@/components/ui/blog-card";
import { getBlogPost } from "@/data/blog";
import type { Service } from "@/data/services";

export function ServiceResources({ service }: { service: Service }) {
  if (!service.resources || service.resources.length === 0) return null;
  const posts = service.resources
    .map((slug) => getBlogPost(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-t from-background from-0% to-white to-30%">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Badge align="center">Ressources</Badge>
        <Typography
          title={service.resourcesTitle ?? "À lire sur le sujet"}
          subtitle={
            service.resourcesSubtitle ??
            "Quelques articles du blog pour aller plus loin."
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceResources;
