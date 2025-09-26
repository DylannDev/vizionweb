"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

export function WhatsappNav({ isNavbar = false }: { isNavbar?: boolean }) {
  return (
    <Link
      href="https://wa.me/+33666847402"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
      className={cn(
        "group flex flex-col items-end",
        !isNavbar && "fixed lg:hidden bottom-4 right-4 z-100"
      )}
    >
      <div className="relative flex">
        <span className="relative inline-flex bg-radial from-gray-dark from-40% to-secondary-dark to-75% hover:opacity-90 ring-3 ring-offset-1 ring-primary-dark ring-offset-gray-dark rounded-full items-center justify-center w-10 h-10 transition-all duration-200">
          <RiWhatsappFill className="w-6.5 h-6.5 text-primary-green" />
          <span className="absolute flex size-7">
            <span className=" inline-flex h-full w-full rounded-full bg-primary-green opacity-30 animate-[ping_2.5s_linear_infinite]"></span>
          </span>
        </span>
      </div>
    </Link>
  );
}
