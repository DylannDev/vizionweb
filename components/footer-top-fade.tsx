"use client";

import { usePathname } from "next/navigation";

export function FooterTopFade() {
  const pathname = usePathname();
  const hiddenOn = ["/", "/a-propos"];
  if (hiddenOn.includes(pathname)) return null;
  return (
    <div className="bg-gradient-to-t from-background from-0% to-white to-70% h-12 sm:h-24" />
  );
}
