"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { WhatsappNav } from "./ui/whatsapp-nav";
import CallButton from "./call-button";
import { navLinks } from "@/data";
import { cn } from "@/lib/utils";
import { PiList, PiX } from "react-icons/pi";

function NavDesktop({ pathname }: { pathname: string }) {
  return (
    <div className="hidden lg:flex px-5 h-18 items-center justify-between gap-3">
      <Logo className="inline-flex items-center w-[180px] h-[40px]" />
      <div className="text-gray-dark">
        {navLinks.slice(0, 5).map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={pathname === l.href ? "page" : undefined}
            className={`text-gray-dark hover:text-secondary-dark hover:bg-background py-1 px-2 rounded-md transition-all duration-150 ease-in-out`}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <CallButton size="md" />
        <WhatsappNav isNavbar />
      </div>
    </div>
  );
}

function NavMobile({
  pathname,
  isOpen,
  onToggle,
  onClose,
}: {
  pathname: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative lg:hidden">
      <div className="relative z-100 px-4 sm:px-5 h-16 sm:h-18 flex items-center justify-between gap-3">
        <Logo className="inline-flex items-center w-[160px] h-[36px]" />
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={onToggle}
            className="inline-flex items-center justify-center rounded-md cursor-pointer p-1.5 text-secondary-dark bg-background hover:text-secondary-dark hover:bg-gray-lighter transition-colors"
          >
            {isOpen ? <PiX size={22} /> : <PiList size={22} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || 0;
      const goingDown = y > lastY.current;
      const threshold = 80;
      if (goingDown) {
        if (y > threshold) setHidden(true);
        if (menuOpen) setMenuOpen(false);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close on click outside of header and mobile menu
  useEffect(() => {
    function onDocumentClick(e: MouseEvent) {
      if (!menuOpen) return;
      const target = e.target as Node | null;
      const clickedInHeader = headerRef.current?.contains(target as Node);
      const clickedInMenu = menuRef.current?.contains(target as Node);
      if (!clickedInHeader && !clickedInMenu) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocumentClick);
    return () => document.removeEventListener("mousedown", onDocumentClick);
  }, [menuOpen]);

  return (
    <div className="relative">
      <header
        ref={headerRef}
        className={`fixed top-0 inset-x-0 z-100 pt-4 px-4 md:px-8 transition-transform duration-300 ease-out ${
          hidden ? "-translate-y-24" : "translate-y-0"
        }`}
      >
        <nav
          aria-label="Navigation principale"
          className={cn(
            "relative mx-auto max-w-7xl bg-white/90 backdrop-blur-sm rounded-full",
            hidden ? "" : "shadow-sm",
            menuOpen && "shadow-none"
          )}
        >
          <NavDesktop pathname={pathname} />
          <NavMobile
            pathname={pathname}
            isOpen={menuOpen}
            onToggle={() => setMenuOpen((v) => !v)}
            onClose={() => setMenuOpen(false)}
          />
        </nav>
      </header>

      {/* Animated collapse outside NavMobile */}
      <div
        className={cn(
          "fixed top-0 inset-x-0 z-90 pt-2 sm:pt-4 px-4 md:px-8",
          !menuOpen && "h-0"
        )}
      >
        <nav
          id="mobile-menu"
          aria-label="Navigation mobile"
          ref={menuRef}
          className={cn(
            "lg:hidden p-4 overflow-hidden transition-all duration-300 ease-out grid bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg will-change-transform",
            menuOpen && !hidden
              ? "translate-y-20 opacity-100 pointer-events-auto"
              : "-translate-y-full opacity-0 pointer-events-none"
          )}
        >
          <ul className="flex flex-col gap-3 no-scrollbar">
            {navLinks.map((l) => (
              <li key={l.href} className="py-2">
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`shrink-0 text-sm ${
                    pathname === l.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <hr className="mt-4 mb-8 border-gray-lighter" />
          <CallButton size="md" />
        </nav>
      </div>
    </div>
  );
}
