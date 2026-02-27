import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold gap-1 mb-4 shadow-[0_8px_16px_0]",
  {
    variants: {
      variant: {
        white:
          "bg-background border border-white text-secondary-dark shadow-gray-lighter/20",
        black:
          "bg-gradient-to-b from-primary-dark to-secondary-dark text-white border border-primary-dark shadow-secondary-dark/40",
        blue: "bg-gradient-to-b from-primary-blue-dark to-primary-blue-border border border-primary-blue text-white shadow-primary-blue/40",
        transparent:
          "bg-transparent border border-gray-light text-gray-dark shadow-none",
      },
    },
    defaultVariants: {
      variant: "white",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  align?: "left" | "center";
  uppercase?: boolean;
}

export function Badge({
  className = "",
  variant = "black",
  align = "center",
  uppercase = false,
  ...props
}: BadgeProps) {
  const alignmentClass = align === "center" ? "block w-fit mx-auto" : "";
  return (
    <span
      className={twMerge(
        badgeVariants({ variant }),
        alignmentClass,
        uppercase ? "uppercase" : "capitalize",

        className
      )}
      {...props}
    />
  );
}

export default Badge;
