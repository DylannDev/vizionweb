"use client";

import { useState } from "react";
import { blogCategories, type BlogCategory, type BlogPost } from "@/data/blog";
import BlogCard from "@/components/ui/blog-card";
import FadeIn from "@/components/ui/fade-in";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface BlogFilterProps {
  posts: BlogPost[];
  postsPerPage?: number;
}

const allCategories = Object.entries(blogCategories) as [
  BlogCategory,
  (typeof blogCategories)[BlogCategory],
][];

const POSTS_PER_PAGE = 9;

function getPageNumbers(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [1];

  if (current > 3) {
    pages.push("ellipsis");
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push("ellipsis");
  }

  pages.push(total);

  return pages;
}

export default function BlogFilter({ posts, postsPerPage = POSTS_PER_PAGE }: BlogFilterProps) {
  const [active, setActive] = useState<BlogCategory | "all">("all");
  const [page, setPage] = useState(1);

  const filtered =
    active === "all" ? posts : posts.filter((p) => p.category === active);

  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const safeCurrentPage = Math.min(page, totalPages);
  const startIndex = (safeCurrentPage - 1) * postsPerPage;
  const paginatedPosts = filtered.slice(startIndex, startIndex + postsPerPage);

  function handleCategoryChange(category: BlogCategory | "all") {
    setActive(category);
    setPage(1);
  }

  function handlePageChange(newPage: number) {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const pageNumbers = getPageNumbers(safeCurrentPage, totalPages);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
            active === "all"
              ? "bg-primary-dark text-white"
              : "bg-white text-gray-dark ring-1 ring-gray-lighter hover:ring-gray-light"
          }`}
        >
          Tous
        </button>
        {allCategories.map(([key, cat]) => {
          const hasArticles = posts.some((p) => p.category === key);
          if (!hasArticles) return null;
          return (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                active === key
                  ? "bg-primary-dark text-white"
                  : "bg-white text-gray-dark ring-1 ring-gray-lighter hover:ring-gray-light"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map((post, index) => (
          <FadeIn
            key={post.slug}
            delay={0.05 * (index + 1)}
            className="h-full flex"
          >
            <BlogCard post={post} />
          </FadeIn>
        ))}
      </div>

      {totalPages > 1 && (
        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-sm text-gray-light">
              {startIndex + 1}-{Math.min(startIndex + postsPerPage, filtered.length)} sur {filtered.length} article{filtered.length > 1 ? "s" : ""}
            </p>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(safeCurrentPage - 1)}
                    disabled={safeCurrentPage === 1}
                  />
                </PaginationItem>

                {pageNumbers.map((p, i) =>
                  p === "ellipsis" ? (
                    <PaginationItem key={`ellipsis-${i}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={p}>
                      <PaginationLink
                        isActive={p === safeCurrentPage}
                        onClick={() => handlePageChange(p)}
                      >
                        {p}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(safeCurrentPage + 1)}
                    disabled={safeCurrentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </FadeIn>
      )}
    </>
  );
}
