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
      className={`group cursor-pointer bg-background rounded-3xl flex w-full items-center justify-between p-5 text-left text-base sm:text-lg font-semibold text-primary-dark hover:opacity-90 focus:outline-none transition-colors ${className}`}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className="relative ml-3 flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center"
      >
        {/* Vertical bar: rotates to horizontal then fades when open */}
        <span className="absolute w-[2px] h-3.5 bg-primary-dark rounded-full transition-all duration-300 ease-in-out group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
        {/* Horizontal bar: always visible */}
        <span className="absolute w-3.5 h-[2px] bg-primary-dark rounded-full" />
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
    className={`bg-background rounded-3xl p-5 mt-2 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-gray-dark ${className}`}
    {...props}
  >
    <div className="pt-2 pb-4">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
