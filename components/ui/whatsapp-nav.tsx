"use client";

import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

export function WhatsappNav() {
  return (
    <Link
      href="https://wa.me/+33666847402"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
      className="group fixed bottom-4 md:bottom-6 right-4 md:right-6 z-100"
    >
      <div className="relative flex">
        <span className="relative inline-flex bg-gradient-to-b from-primary-blue-dark to-primary-blue-border border border-primary-blue rounded-full items-center justify-center w-11 md:w-13 h-11 md:h-13 shadow-[0_4px_16px_0] shadow-primary-blue-border/50 hover:shadow-[0_6px_20px_0] hover:shadow-primary-blue-border/60 transition-all duration-200">
          <span className="absolute flex size-7 md:size-9 -z-10">
            <span className="inline-flex h-full w-full rounded-full bg-primary-blue opacity-60 animate-[ping_2.5s_linear_infinite]"></span>
          </span>
          <RiWhatsappFill className="w-6 md:w-7 h-6 md:h-7 text-white" />
        </span>
      </div>
    </Link>
  );
}
