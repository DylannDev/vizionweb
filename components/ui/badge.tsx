import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-3 py-1.5 text-sm font-medium gap-1 mb-4 ring-4",
  {
    variants: {
      variant: {
        white: "bg-white text-secondary-dark ring-gray-lighter",
        dark: "bg-secondary-dark text-white ring-1 ring-gray-dark",
        green: "bg-primary-green text-white ring-0",
        hero: "bg-background text-secondary-dark ring-1 ring-white",
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
  variant,
  align = "center",
  uppercase = true,
  ...props
}: BadgeProps) {
  const alignmentClass = align === "center" ? "block w-fit mx-auto" : "";
  return (
    <span
      className={twMerge(
        badgeVariants({ variant }),
        alignmentClass,
        uppercase && "uppercase",
        className
      )}
      {...props}
    />
  );
}

export default Badge;
