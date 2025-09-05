"use client";

import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

export function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/+33666847402"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
      className="group flex flex-col items-end"
    >
      <div className="relative flex">
        {/* <div
          className="absolute right-18 bottom-1 z-[-1] block py-3 px-4 bg-black border-2 border-white rounded-xl shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-150 ease-in-out"
          style={{ minWidth: "180px" }}
        >
          <Typography
            as="span"
            variant="base"
            weight="medium"
            className="text-white text-center whitespace-nowrap"
          >
            Discuter de votre investissement
          </Typography>
        </div> */}

        <span className="relative inline-flex bg-radial from-gray-dark from-40% to-secondary-dark to-75% hover:opacity-90 ring-3 ring-offset-1 ring-primary-dark ring-offset-gray-dark rounded-full items-center justify-center w-11 h-11 transition-all duration-200">
          <RiWhatsappFill className="w-7 h-7 text-primary-green" />
          <span className="absolute flex size-7">
            <span className=" inline-flex h-full w-full rounded-full bg-primary-green opacity-30 animate-[ping_2.5s_linear_infinite]"></span>
          </span>
        </span>
      </div>
    </Link>
  );
}
