"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  glossaryCategories,
  type GlossaryCategory,
  type GlossaryTerm,
} from "@/data/glossaire";

interface GlossaireFilterProps {
  terms: GlossaryTerm[];
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export default function GlossaireFilter({ terms }: GlossaireFilterProps) {
  const [query, setQuery] = useState("");
  const [activeCategories, setActiveCategories] = useState<
    Set<GlossaryCategory>
  >(new Set());

  const allCategories = useMemo(
    () => Object.keys(glossaryCategories) as GlossaryCategory[],
    [],
  );

  function toggleCategory(cat: GlossaryCategory) {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  }

  function clearAll() {
    setActiveCategories(new Set());
  }

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    const byCategory =
      activeCategories.size === 0
        ? terms
        : terms.filter((t) => activeCategories.has(t.category));
    const byQuery = !q
      ? byCategory
      : byCategory.filter((t) => normalize(t.term).startsWith(q));
    return [...byQuery].sort((a, b) =>
      a.term.localeCompare(b.term, "fr", { sensitivity: "base" }),
    );
  }, [terms, query, activeCategories]);

  const groups = useMemo(() => {
    const map = new Map<string, GlossaryTerm[]>();
    for (const t of filtered) {
      const first = t.term[0] ?? "";
      const letter = /[A-Za-z]/.test(first) ? first.toUpperCase() : "#";
      const arr = map.get(letter);
      if (arr) {
        arr.push(t);
      } else {
        map.set(letter, [t]);
      }
    }
    return Array.from(map.entries()).sort(([a], [b]) => {
      if (a === "#") return 1;
      if (b === "#") return -1;
      return a.localeCompare(b, "fr", { sensitivity: "base" });
    });
  }, [filtered]);

  return (
    <>
      {/* Search */}
      <div className="relative mb-6 max-w-2xl mx-auto">
        <Search
          aria-hidden
          className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-dark"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un terme..."
          className="w-full bg-white rounded-full pl-12 pr-4 py-3 shadow-[0_4px_20px_0] shadow-gray-lighter text-primary-dark placeholder:text-gray-dark focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
      </div>

      {/* Category filter buttons (multi-select) */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <Button
          variant={activeCategories.size === 0 ? "blue" : "white"}
          size="md"
          className="h-auto py-1.5 px-4 text-xs sm:text-sm shadow-none hover:shadow-none"
          onClick={clearAll}
        >
          Tous
        </Button>
        {allCategories.map((cat) => {
          const isActive = activeCategories.has(cat);
          return (
            <Button
              key={cat}
              variant={isActive ? "blue" : "white"}
              size="md"
              className="h-auto py-1.5 px-4 text-xs sm:text-sm shadow-none hover:shadow-none"
              onClick={() => toggleCategory(cat)}
            >
              {glossaryCategories[cat].label}
            </Button>
          );
        })}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-dark text-base py-12">
          Aucun terme ne correspond à votre recherche.
        </p>
      ) : (
        <div className="space-y-12">
          {groups.map(([letter, items]) => (
            <div key={letter} className="mt-12 first:mt-0">
              <h2 className="text-2xl font-semibold text-primary-blue border-b border-gray-lighter pb-3 mb-6">
                {letter}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/glossaire/${t.slug}`}
                    className="group flex items-center justify-between gap-3 bg-white shadow-[0_4px_20px_0] shadow-gray-lighter sm:bg-transparent sm:shadow-none sm:hover:bg-white sm:hover:shadow-[0_4px_20px_0] sm:hover:shadow-gray-lighter rounded-2xl p-5 cursor-pointer transition-all hover:scale-[1.01]"
                  >
                    <span className="text-2xl font-semibold text-primary-dark group-hover:text-primary-blue transition-colors">
                      {t.term}
                    </span>
                    <span className="size-8 flex items-center justify-center rounded-md bg-gradient-to-b from-primary-blue-dark to-primary-blue-border opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shrink-0">
                      <ArrowRight
                        className="size-4 text-white"
                        strokeWidth={2.5}
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
