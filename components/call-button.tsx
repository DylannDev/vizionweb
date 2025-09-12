import Link from "next/link";
import React from "react";
import { PiArrowUpRight } from "react-icons/pi";
import Button from "./ui/button";

interface CallButtonProps {
  size?: "lg" | "md" | "sm";
  className?: string;
}

const CallButton = ({ size = "lg", className }: CallButtonProps) => {
  return (
    <Button className={className} variant="dark" size={size}>
      <Link href="/contact">Réserver un appel</Link>
      <PiArrowUpRight className="group-hover:rotate-45 transition-all duration-300 ease-in-out" />
    </Button>
  );
};

export default CallButton;
