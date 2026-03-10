"use client";

import { usePathname } from "next/navigation";

export function FooterTopFade() {
  const pathname = usePathname();
  const fadeRoutes = [
    "/blog/",
    "/cgv",
    "/politique-confidentialite",
    "/mentions-legales",
  ];
  if (
    fadeRoutes.some((route) => pathname.startsWith(route) || pathname === route)
  )
    return (
      <div className="bg-gradient-to-t from-background from-0% to-white to-70% h-12 sm:h-24" />
    );
  return null;
}
