"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CallButton from "./call-button";
import { services, type ServiceCategory } from "@/data/services";
import { technos, type TechnoSEO } from "@/data/technos";
import { stackTechs } from "@/data/stack";
import IconIllustration from "@/components/ui/icon-illustration";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { PiArticleFill, PiBookOpenFill } from "react-icons/pi";
import type { IconType } from "react-icons";
import {
  Navbar as NavbarWrapper,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

// ── Configuration ──────────────────────────────────────────────────

const technoOrder = [
  "agence-react",
  "agence-next-js",
  "agence-typescript",
  "agence-nodejs",
  "agence-openai",
  "agence-claude-api",
  "agence-supabase",
  "agence-n8n",
];

const serviceCategoryLabels: Record<ServiceCategory, string> = {
  "produits-digitaux": "Produits digitaux",
  "ia-auto": "IA & Automatisation",
};

const technoLogoBySlug: Record<string, string> = {
  "agence-react": "/logos/stack/react.svg",
  "agence-next-js": "/logos/stack/nextjs.svg",
  "agence-typescript": "/logos/stack/typescript.svg",
  "agence-nodejs": "/logos/stack/nodejs.svg",
  "agence-openai": "/logos/stack/openai.svg",
  "agence-claude-api": "/logos/stack/claude.svg",
  "agence-supabase": "/logos/stack/supabase.svg",
  "agence-n8n": "/logos/stack/n8n.svg",
};

const technoCategoryLabels: Record<TechnoSEO["category"], string> = {
  frontend: "Front-end & Design",
  backend: "Back-end & Data",
  ia: "IA & Automatisations",
  infra: "Infra",
};

// ── Types ──────────────────────────────────────────────────────────

type NavChild = {
  label: string;
  href: string;
  icon?: IconType;
  logoSrc?: string;
  category?: string;
};

type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
  /**
   * If provided, the dropdown groups its children by category
   * and displays them as N columns on desktop.
   */
  groupBy?: {
    columns: number;
    categoryOrder: string[];
    categoryLabels: Record<string, string>;
  };
};

// ── Data builder ───────────────────────────────────────────────────

function buildNavItems(): NavItem[] {
  const orderedTechnos = technoOrder
    .map((slug) => technos.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const serviceChildren: NavChild[] = services.map((s) => ({
    label: s.shortTitle,
    href: `/services/${s.slug}`,
    icon: s.icon,
    category: s.category,
  }));

  const technoChildren: NavChild[] = orderedTechnos.map((t) => ({
    label: t.technoName,
    href: `/${t.slug}`,
    logoSrc:
      technoLogoBySlug[t.slug] ?? stackTechs[t.technoName.toLowerCase()]?.logo,
    category: t.category,
  }));

  // Only show techno categories that contain at least one item
  const populatedTechnoCategories = (
    Object.keys(technoCategoryLabels) as TechnoSEO["category"][]
  ).filter((cat) => technoChildren.some((t) => t.category === cat));

  return [
    {
      label: "Services",
      href: "/services",
      children: serviceChildren,
      groupBy: {
        columns: 2,
        categoryOrder: ["produits-digitaux", "ia-auto"],
        categoryLabels: serviceCategoryLabels,
      },
    },
    {
      label: "Expertises",
      href: "/expertises",
      children: technoChildren,
      groupBy: {
        columns: populatedTechnoCategories.length,
        categoryOrder: populatedTechnoCategories,
        categoryLabels: technoCategoryLabels,
      },
    },
    { label: "Réalisations", href: "/realisations" },
    { label: "À propos", href: "/a-propos" },
    {
      label: "Ressources",
      children: [
        { label: "Blog", href: "/blog", icon: PiArticleFill },
        { label: "Glossaire", href: "/glossaire", icon: PiBookOpenFill },
      ],
    },
  ];
}

// ── Sub-components ─────────────────────────────────────────────────

function ChildIcon({ child }: { child: NavChild }) {
  if (child.logoSrc) {
    return (
      <span className="shrink-0 size-9 rounded-lg bg-gradient-to-b from-background to-white border border-gray-lighter shadow-[0_4px_12px_0] shadow-primary-dark/10 flex items-center justify-center">
        <Image
          src={child.logoSrc}
          alt=""
          width={22}
          height={22}
          className="size-5 object-contain"
        />
      </span>
    );
  }
  if (child.icon) {
    return (
      <IconIllustration
        icon={child.icon}
        variant="blue"
        size={36}
        radius="rounded-lg"
      />
    );
  }
  return null;
}

function ChildLink({
  child,
  onClick,
}: {
  child: NavChild;
  onClick?: () => void;
}) {
  return (
    <Link
      href={child.href}
      onClick={onClick}
      className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium text-primary-dark hover:bg-background hover:text-primary-blue transition-colors"
    >
      <ChildIcon child={child} />
      <span>{child.label}</span>
    </Link>
  );
}

function DropdownPanel({ item }: { item: NavItem }) {
  const children = item.children ?? [];
  const group = item.groupBy;

  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-4 relative">
      {/* Triangle pointing up to the trigger */}
      <span
        aria-hidden
        className="absolute -top-1.5 left-1/2 -translate-x-1/2 size-3 bg-white rotate-45 rounded-tl-[3px]"
      />
      {group ? (
        <div
          className="grid gap-x-6 gap-y-3 relative"
          style={{
            gridTemplateColumns: `repeat(${group.columns}, minmax(180px, 1fr))`,
          }}
        >
          {group.categoryOrder.map((cat) => {
            const items = children.filter((c) => c.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} className="flex flex-col">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-dark px-2 mb-1">
                  {group.categoryLabels[cat] ?? cat}
                </div>
                <ul className="flex flex-col">
                  {items.map((c) => (
                    <li key={c.href}>
                      <ChildLink child={c} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <ul className="flex flex-col min-w-[240px] relative">
          {children.map((c) => (
            <li key={c.href}>
              <ChildLink child={c} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null,
  );
  const navItems = buildNavItems();

  return (
    <NavbarWrapper>
      {/* Desktop */}
      <NavBody>
        <Logo
          className="inline-flex items-center w-[180px] h-[40px] shrink-0"
          variant="white"
        />
        <div className="flex items-center gap-3 text-white text-lg font-semibold">
          {navItems.map((item) => {
            const hasChildren = !!item.children?.length;
            if (!hasChildren && item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="hover:bg-background/10 py-1 px-2 rounded-sm transition-all duration-150 ease-in-out whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            }
            const triggerContent = (
              <span className="inline-flex items-center gap-1 whitespace-nowrap">
                {item.label}
                <ChevronDown
                  aria-hidden
                  className="size-4 transition-transform duration-200 group-hover:rotate-180"
                />
              </span>
            );
            return (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="inline-flex items-center hover:bg-background/10 py-1 px-2 rounded-sm transition-all duration-150 ease-in-out leading-none"
                  >
                    {triggerContent}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center appearance-none bg-transparent border-0 text-inherit font-inherit hover:bg-background/10 py-1 px-2 rounded-sm transition-all duration-150 ease-in-out cursor-default leading-none"
                  >
                    {triggerContent}
                  </button>
                )}
                {/* Dropdown : 4px below trigger */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-7 hidden group-hover:block z-50">
                  <DropdownPanel item={item} />
                </div>
              </div>
            );
          })}
        </div>
        <CallButton size="md" variant="white" />
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <Logo
            className="inline-flex items-center w-[160px] h-[32px]"
            variant="white"
          />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <ul className="flex flex-col gap-2 w-full">
            {navItems.map((item) => {
              const hasChildren = !!item.children?.length;
              const isOpen = openMobileSection === item.label;
              if (!hasChildren && item.href) {
                return (
                  <li key={item.label} className="py-2">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base sm:text-lg font-medium text-background"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.label} className="py-1 w-full">
                  <div className="flex items-center justify-between gap-2 w-full">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1 text-base sm:text-lg font-medium text-background"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="flex-1 text-base sm:text-lg font-medium text-background">
                        {item.label}
                      </span>
                    )}
                    <button
                      type="button"
                      aria-label={
                        isOpen
                          ? `Replier ${item.label}`
                          : `Déplier ${item.label}`
                      }
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenMobileSection(isOpen ? null : item.label)
                      }
                      className="p-2 rounded-lg text-background hover:bg-background/10"
                    >
                      <ChevronDown
                        className={`size-5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {isOpen && (
                    <ul className="flex flex-col gap-1 mt-2 pl-4 border-l border-background/30">
                      {item.children!.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-1.5 text-sm text-background/80 hover:text-background"
                          >
                            <ChildIcon child={child} />
                            <span>{child.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <hr className="mt-4 mb-6 border-gray-dark w-full" />
          <div className="w-full">
            <CallButton variant="white" size="md" className="w-full" />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </NavbarWrapper>
  );
}
