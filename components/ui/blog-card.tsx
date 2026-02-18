import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { blogCategories } from "@/data/blog";

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
          <span className="text-xs font-medium text-primary-green bg-primary-dark px-2.5 py-1 rounded-full">
            {category.label}
          </span>
          <span className="text-xs text-gray-light">{post.readingTime}</span>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium text-primary-dark group-hover:text-gray-dark transition-colors duration-200">
            {post.title}
          </h3>
          <p className="text-sm text-gray-dark line-clamp-2">
            {post.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <time
            dateTime={post.date}
            className="text-xs text-gray-light"
          >
            {new Date(post.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span className="text-sm font-medium text-primary-dark group-hover:translate-x-1 transition-transform duration-200">
            Lire &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
