import Link from "next/link";
import { Button, type ButtonProps } from "./button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowButtonProps extends Omit<ButtonProps, "children"> {
  children: React.ReactNode;
  href?: string;
  target?: string;
}

export function ArrowButton({
  children,
  href,
  target,
  variant = "black",
  size = "lg",
  className,
  ...props
}: ArrowButtonProps) {
  const button = (
    <Button
      variant={variant}
      size={size}
      className={cn(size === "lg" ? "pl-6 pr-3" : "pl-5 pr-2.5", className)}
      {...props}
    >
      {children}
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
            variant === "white" && "text-white",
            variant === "black" && "text-primary-dark",
            variant === "blue" && "text-primary-blue"
          )}
        />
      </span>
    </Button>
  );

  if (href) {
    return (
      <Link href={href} target={target}>
        {button}
      </Link>
    );
  }
  return button;
}

export default ArrowButton;
