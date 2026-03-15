"use client";

import { type BlogPost } from "@/data/blog";
import BlogCard from "@/components/ui/blog-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface RelatedArticlesProps {
  posts: BlogPost[];
}

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-24 max-w-7xl mx-auto bg-gradient-to-t from-background from-0% to-white to-70%">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between px-6">
          <h2 className="text-4xl font-semibold text-primary-dark">
            Articles similaires
          </h2>
          <div
            className={`flex items-center gap-2 mb-2 sm:mb-0 ${
              posts.length <= 3 ? " lg:hidden" : ""
            }`}
          >
            <CarouselPrevious className="static translate-y-0 size-10 flex items-center justify-center rounded-xl bg-gradient-to-b from-primary-dark to-secondary-dark border border-primary-dark cursor-pointer" />
            <CarouselNext className="static translate-y-0 size-10 flex items-center justify-center rounded-xl bg-gradient-to-b from-primary-dark to-secondary-dark border border-primary-dark cursor-pointer" />
          </div>
        </div>

        <div className="overflow-visible">
          <CarouselContent className="mr-0 sm:mr-5 lg:mr-6">
            {posts.map((post) => (
              <CarouselItem
                key={post.slug}
                className="pl-4 sm:pl-5 lg:pl-6 py-6 basis-[90%] sm:basis-1/2 lg:basis-1/3"
              >
                <BlogCard post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
}

export default RelatedArticles;
