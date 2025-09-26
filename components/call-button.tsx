import Link from "next/link";
import React from "react";
import { PiArrowUpRight } from "react-icons/pi";
import Button from "./ui/button";

interface CallButtonProps {
  size?: "lg" | "md" | "sm";
  className?: string;
  variant?: "dark" | "white";
}

const CallButton = ({
  size = "lg",
  className,
  variant = "dark",
}: CallButtonProps) => {
  return (
    <Link href="/#calendar">
      <Button className={className} variant={variant} size={size}>
        Réserver un appel
        <PiArrowUpRight className="group-hover:rotate-45 transition-all duration-300 ease-in-out" />
      </Button>
    </Link>
  );
};

export default CallButton;
