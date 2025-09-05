"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.Item;
export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className = "", children, ...props }, ref) => (
  <AccordionPrimitive.Header className="m-0">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={`group flex w-full items-center justify-between py-3 text-left text-base font-medium hover:opacity-90 focus:outline-none ${className}`}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className="ml-2 transition-transform group-data-[state=open]:rotate-180"
      >
        ▾
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className = "", children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={`overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-muted-foreground ${className}`}
    {...props}
  >
    <div className="pt-2 pb-4">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
