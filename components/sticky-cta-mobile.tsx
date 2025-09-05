"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function StickyCtaMobile() {
  return (
    <div className="fixed bottom-4 inset-x-4 z-50 sm:hidden">
      <Button asChild className="w-full h-12 shadow-lg rounded-xl">
        <Link href="/contact">Obtenir un devis en 24h</Link>
      </Button>
    </div>
  );
}

export default StickyCtaMobile;
