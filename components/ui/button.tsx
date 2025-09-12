"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-full ring-offset-1 text-sm font-medium transition-all duration-150 ease-in-out group active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60 disabled:pointer-events-none gap-2 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        dark: "bg-gradient-to-r from-secondary-dark to-gray-dark text-white hover:opacity-95 ring-primary-dark ring-offset-gray-dark",
        white:
          "bg-white text-primary-dark hover:bg-background hover:ring-offset-white hover:opacity-90 ring-gray-lighter ring-offset-background",
        carousel:
          "rounded-full bg-primary-dark flex items-center justify-center shadow-lg shadow-primary-dark/50 text-primary-green ring-0 ring-offset-0 hover:opacity-90",
      },
      size: {
        sm: "h-7 px-3 ring-3 [&>svg]:text-sm",
        md: "h-8.5 px-4 ring-3 [&>svg]:text-base",
        lg: "h-10 px-5 text-base ring-4 [&>svg]:text-lg",
        carousel: "h-10 w-10 [&>svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "md",
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
