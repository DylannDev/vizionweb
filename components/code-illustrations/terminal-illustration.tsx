"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { PiCheckBold } from "react-icons/pi";
import { Server } from "lucide-react";

const TerminalIllustration = () => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef as React.RefObject<Element>, {
    amount: 0.3,
    once: true,
  });
  const [noTransition, setNoTransition] = useState(false);
  const phaseRef = useRef<"ramp" | "hold">("ramp");
  const phaseStartRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;
    const rampMs = 4000; // 0 -> 100% in 4s
    const holdMs = 1000; // hold at 100% for 1s

    // init cycle
    phaseRef.current = "ramp";
    phaseStartRef.current = Date.now();
    setProgress(0);

    const id = window.setInterval(() => {
      const now = Date.now();
      const elapsed = now - phaseStartRef.current;

      if (phaseRef.current === "ramp") {
        if (elapsed >= rampMs) {
          setProgress(100);
          phaseRef.current = "hold";
          phaseStartRef.current = now;
        } else {
          setProgress((elapsed / rampMs) * 100);
        }
      } else {
        // hold phase
        if (elapsed >= holdMs) {
          // snap to 0 without reverse animation
          setNoTransition(true);
          setProgress(0);
          // re-enable transition on next frame
          requestAnimationFrame(() => setNoTransition(false));
          phaseRef.current = "ramp";
          phaseStartRef.current = now;
        } else {
          setProgress(100);
        }
      }
    }, 40);

    return () => clearInterval(id);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="bg-white border border-gray-lighter shadow-[0_4px_12px_0_rgba(239,68,68,0.15)]  rounded-3xl"
    >
      <Terminal>
        <TypingAnimation className="text-secondary-dark mb-2">
          $ pnpm run build
        </TypingAnimation>

        <AnimatedSpan className="text-green-500">
          <span className="flex items-center">
            <PiCheckBold className="size-3" /> Compiling project...
          </span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span className="flex items-center">
            <PiCheckBold className="size-3" /> Dependencies installed
          </span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span className="flex items-center">
            <PiCheckBold className="size-3" /> Build successful
          </span>
        </AnimatedSpan>

        <AnimatedSpan className="text-blue-500 mt-2">
          <span className="flex items-center">
            <Server strokeWidth={2} className="size-3" /> Server running at:
          </span>
          <span className="pl-5">http://localhost:3000</span>
        </AnimatedSpan>

        <TypingAnimation className="text-gray-dark mt-2">
          Project ready ✅ 🚀
        </TypingAnimation>
      </Terminal>

      {/* Barre de progression */}
      <div className="px-3 pt-3 pb-5">
        <div className="h-2 w-full rounded-full bg-background overflow-hidden">
          <div
            className={`h-full rounded-full bg-red-400 ${
              noTransition ? "" : "transition-[width]"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-gray-dark">
          Build {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};

export default TerminalIllustration;
