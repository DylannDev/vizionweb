"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { PiStarFill } from "react-icons/pi";
import { AvatarsTooltip } from "@/components/ui/avatars-tooltip";

interface CustomerSatisfactionBannerProps {
  stars?: number; // 0..5
  className?: string;
}

const avatars = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export function CustomerSatisfactionBanner({
  stars = 5,
  className,
}: CustomerSatisfactionBannerProps) {
  const clampedStars = Math.max(0, Math.min(5, stars));

  return (
    <motion.div
      aria-label="Satisfaction client"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "flex flex-col justify-center items-center gap-3",
        className
      )}
    >
      <div className="shrink-0" aria-label="Photos de clients satisfaits">
        <div className="flex justify-center mr-5">
          <AvatarsTooltip
            items={avatars.map((a, idx) => ({
              id: idx,
              name: a.name || `Client ${idx + 1}`,
              designation: "Client",
              image: a.image,
            }))}
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
        <div className="text-xs font-normal text-gray-dark">
          100% de satisfaction client
        </div>
      </div>
    </motion.div>
  );
}

export default CustomerSatisfactionBanner;
