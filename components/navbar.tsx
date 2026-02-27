"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CallButton from "./call-button";
import { navLinks } from "@/data";
import {
  Navbar as NavbarWrapper,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarWrapper>
      {/* Desktop */}
      <NavBody>
        <Logo
          className="inline-flex items-center w-[180px] h-[40px] shrink-0"
          variant="white"
        />
        <div className="flex items-center gap-3 text-white text-lg font-semibold">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className="hover:bg-background/10 py-1 px-2 rounded-sm transition-all duration-150 ease-in-out whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <CallButton size="md" variant="white" />
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <Logo className="inline-flex items-center w-[160px] h-[36px]" />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <ul className="flex flex-col gap-3 w-full">
            {navLinks.map((l) => (
              <li key={l.href} className="py-2">
                <Link
                  href={l.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-gray-dark"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <hr className="mt-4 mb-4 border-gray-lighter w-full" />
          <CallButton size="md" />
        </MobileNavMenu>
      </MobileNav>
    </NavbarWrapper>
  );
}
