"use client";

import { usePathname } from "next/navigation";

export function FooterTopFade() {
  const pathname = usePathname();
  if (!pathname.startsWith("/blog/")) return null;
  return (
    <div className="bg-gradient-to-t from-background from-0% to-white to-70% h-12 sm:h-24" />
  );
}
