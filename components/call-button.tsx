import Link from "next/link";
import React from "react";
import { PiArrowUpRight } from "react-icons/pi";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CallButtonProps {
  size?: "lg" | "md";
  className?: string;
  variant?: "blue" | "black" | "white";
}

const CallButton = ({
  size = "lg",
  className,
  variant = "blue",
}: CallButtonProps) => {
  return (
    <Link href="https://cal.com/dylann/30min" target="_blank">
      <Button
        className={cn(className, size === "lg" ? "pl-6 pr-3" : "pl-5 pr-2.5")}
        variant={variant}
        size={size}
      >
        Réserver un appel
        <span
          className={cn(
            size === "lg" ? "size-7" : "size-6",
            "flex items-center justify-center rounded-md",
            variant === "white"
              ? "bg-gradient-to-b from-primary-blue-dark to-primary-blue-border"
              : "bg-white"
          )}
        >
          <ArrowRight
            strokeWidth={2.5}
            className={cn(
              size === "lg" ? "size-4" : "size-3.5",
              "group-hover:-rotate-45 transition-all duration-300 ease-in-out",
              variant === "white" ? "text-white" : "text-primary-blue"
            )}
          />
        </span>
      </Button>
    </Link>
  );
};

export default CallButton;
