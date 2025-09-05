"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Card from "./ui/card";
import { WhatsappButton } from "./ui/whatsapp-button";
import { Calendar1 } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/process", label: "Process" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-4 z-50 py-4">
      <nav aria-label="Navigation principale" className="mx-auto max-w-7xl">
        <div className="px-4 h-14 flex items-center justify-between gap-3">
          <Logo width={200} height={40} className="inline-flex items-center" />
          <Card
            radius="xl"
            className="hidden md:flex items-center gap-10 px-8 text-gray-dark"
          >
            {links.slice(0, 4).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`hover:text-primary-dark transition-all duration-150 ease-in-out ${
                  pathname === l.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </Card>
          <div className="flex items-center gap-3">
            <Button>
              <Calendar1 strokeWidth={1.75} />
              <Link href="/contact">Réserver un appel</Link>
            </Button>
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
  );
}
