"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.Item;
export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className = "", children, ...props }, ref) => (
  <AccordionPrimitive.Header className="m-0">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={`group cursor-pointer bg-white rounded-xl flex w-full items-center justify-between p-5 text-left text-base sm:text-lg font-medium hover:opacity-90 focus:outline-none ${className}`}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className="ml-2 transition-transform group-data-[state=open]:rotate-45 bg-primary-dark rounded-full p-2"
      >
        <Plus strokeWidth={2.5} className="w-4 h-4 text-primary-green" />
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
    className={`bg-white rounded-xl p-5 mt-2 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-gray-dark ${className}`}
    {...props}
  >
    <div className="pt-2 pb-4">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
