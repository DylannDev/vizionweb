"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { WhatsappButton } from "./ui/whatsapp-button";
import CallButton from "./call-button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/process", label: "Process" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || 0;
      const goingDown = y > lastY.current;
      const threshold = 80;
      if (goingDown && y > threshold) setHidden(true);
      else if (!goingDown) setHidden(false);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      <header
        className={`fixed top-0 inset-x-0 z-100 pt-4 max-[1280px]:px-4 transition-transform duration-300 ease-out ${
          hidden ? "-translate-y-24" : "translate-y-0"
        }`}
      >
        <nav
          aria-label="Navigation principale"
          className="relative mx-auto max-w-7xl bg-white rounded-full border border-gray-lighter shadow-lg shadow-gray-lighter/50 backdrop-blur-sm"
        >
          <div className="px-5 h-18 flex items-center justify-between gap-3">
            <Logo
              width={180}
              height={40}
              className="inline-flex items-center"
            />
            <div className="text-gray-dark">
              {links.slice(0, 4).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className={`hover:text-primary-dark hover:bg-background py-1 px-2 rounded-md transition-all duration-150 ease-in-out ${
                    pathname === l.href
                      ? "text-primary-dark"
                      : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <CallButton size="md" />
              <WhatsappButton />
            </div>
          </div>
          <div className="md:hidden px-2 pb-2">
            <div className="flex gap-3 overflow-x-auto no-scrollbar px-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`shrink-0 text-sm py-2 ${
                    pathname === l.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
      {/* <div className="absolute inset-x-0 top-0 z-1 bg-background w-full h-4"></div> */}
    </div>
  );
}
