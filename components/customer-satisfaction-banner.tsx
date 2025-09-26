"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { PiStarFill } from "react-icons/pi";
import { AvatarsTooltip } from "@/components/ui/avatars-tooltip";
import { testimonials } from "./testimonials";

interface CustomerSatisfactionBannerProps {
  stars?: number; // 0..5
  className?: string;
  avatarIndexes?: number[]; // custom order, e.g., [3,0,1,6]
}

export function CustomerSatisfactionBanner({
  stars = 5,
  className,
  avatarIndexes = [3, 0, 4, 6],
}: CustomerSatisfactionBannerProps) {
  const clampedStars = Math.max(0, Math.min(5, stars));

  return (
    <motion.div
      aria-label="Satisfaction client"
      className={cn(
        "flex flex-col-reverse justify-center items-center gap-3",
        className
      )}
    >
      <div className="shrink-0" aria-label="Photos de clients satisfaits">
        <div className="flex justify-center mr-3.5">
          <AvatarsTooltip
            items={avatarIndexes
              .filter((i) => i >= 0 && i < testimonials.length)
              .slice(0, 4)
              .map((i, idx) => {
                const a = testimonials[i];
                return {
                  id: idx,
                  name: a.name || `Client ${i + 1}`,
                  role: a.role,
                  image: a.image,
                };
              })}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <div
          role="img"
          aria-label={`Note: ${clampedStars} sur 5`}
          className="flex items-center gap-1"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <PiStarFill key={i} className="text-secondary-dark" aria-hidden />
          ))}
        </div>
        <div className="text-sm font-normal text-secondary-dark">
          100% de satisfaction client
        </div>
      </div>
    </motion.div>
  );
}

export default CustomerSatisfactionBanner;
