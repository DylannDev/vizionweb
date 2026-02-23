"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-lg text-lg font-semibold transition-all duration-200 ease-in-out group active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 disabled:opacity-60 disabled:pointer-events-none gap-2 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        blue: "bg-gradient-to-b from-primary-blue-dark to-primary-blue-border border border-primary-blue text-white shadow-[0_4px_16px_0] shadow-primary-blue-border/50 hover:shadow-[0_6px_20px_0] hover:shadow-primary-blue-border/60",
        black:
          "bg-gradient-to-b from-primary-dark to-secondary-dark text-white border border-primary-dark shadow-[0_4px_16px_0] shadow-primary-dark/50 hover:shadow-[0_6px_20px_0] hover:shadow-primary-dark/60",
        white:
          "bg-white text-primary-dark border border-gray-lighter backdrop-blur-sm",
      },
      size: {
        md: "h-12 px-5 text-base [&>svg]:text-base",
        lg: "h-14.5 px-6 rounded-xl [&>svg]:text-lg",
      },
    },
    defaultVariants: {
      variant: "blue",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  IconLeft?: React.ReactNode;
  IconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size = "lg",
      asChild,
      IconLeft,
      IconRight,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? (Slot as any) : "button";

    // When using asChild, consumers must pass a single React element (e.g., Link).
    // We do not inject icons in asChild mode to avoid Slot single-child issues.
    if (asChild) {
      return (
        <Comp
          ref={ref}
          className={twMerge(buttonVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        ref={ref}
        className={twMerge(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {IconLeft}
        {children}
        {IconRight}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export default Button;
