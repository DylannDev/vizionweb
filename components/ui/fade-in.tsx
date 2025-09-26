"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { motion } from "framer-motion";

interface FadeInProps extends React.ComponentProps<typeof motion.div> {
  delay?: number;
  duration?: number;
}

export function FadeIn({
  delay = 0,
  duration = 0.5,
  className,
  children,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration, ease: "easeInOut" }}
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
