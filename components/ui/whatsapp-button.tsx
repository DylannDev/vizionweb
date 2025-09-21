import Link from "next/link";
import React from "react";
import Button from "./button";
import { RiWhatsappLine } from "react-icons/ri";

const WhatsappButton = () => {
  return (
    <Link
      href="https://wa.me/+33666847402"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <Button
        variant="dark"
        size="md"
        className="w-fit inline-flex items-center justify-center gap-2 mt-3"
      >
        Discutons maintenant
        <RiWhatsappLine className="h-5 w-5 text-primary-green" />
      </Button>
    </Link>
  );
};

export default WhatsappButton;
