import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-1 text-sm font-medium gap-1",
  {
    variants: {
      variant: {
        white: "border border-white bg-white/60 text-text backdrop-blur-sm",
        primary: "border border-primary bg-transparent text-primary",
      },
    },
    defaultVariants: {
      variant: "white",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className = "", variant, ...props }: BadgeProps) {
  return (
    <span
      className={twMerge(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export default Badge;
