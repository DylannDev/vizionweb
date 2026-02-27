import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { blogCategories } from "@/data/blog";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import Badge from "./badge";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const category = blogCategories[post.category];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex group rounded-3xl bg-white p-5 cursor-pointer shadow-lg"
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-3">
          <Badge variant="black" className="m-0 text-xs shadow-none">
            {category.label}
          </Badge>
          <span className="flex items-center gap-1 text-xs text-gray-dark">
            <Clock className="size-3" />
            {post.readingTime}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium text-primary-dark group-hover:text-primary-blue transition-colors duration-200">
            {post.title}
          </h3>
          <p className="text-sm text-gray-dark line-clamp-2">
            {post.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <time
            dateTime={post.date}
            className="flex items-center gap-1 text-xs text-gray-dark capitalize"
          >
            <CalendarDays className="size-3" />
            {new Date(post.date)
              .toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
              .replace(/[a-zà-ÿ]+\./i, (m) => m.slice(0, 3))}
          </time>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue">
            Lire
            <span className="size-6 flex items-center justify-center rounded-md bg-gradient-to-b from-primary-blue-dark to-primary-blue-border">
              <ArrowRight
                className="size-3.5 text-white group-hover:-rotate-45 transition-all duration-300 ease-in-out"
                strokeWidth={2.5}
              />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
