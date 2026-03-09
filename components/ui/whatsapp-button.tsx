import Link from "next/link";
import Button from "./button";
import { RiWhatsappFill } from "react-icons/ri";

const WhatsappButton = () => {
  return (
    <Link
      href="https://wa.me/+33666847402"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <Button
        variant="blue"
        className="w-fit inline-flex items-center justify-center gap-2 mt-3"
      >
        Discutons maintenant
        <RiWhatsappFill className="h-6 w-6" />
      </Button>
    </Link>
  );
};

export default WhatsappButton;
