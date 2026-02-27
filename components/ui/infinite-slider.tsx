"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  speed?: number;
  speedOnHover?: number;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  speed,
  speedOnHover,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  const measure = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    }
  }, []);

  useEffect(() => {
    measure();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  const { width, height } = size;

  useEffect(() => {
    let controls;
    const dim = direction === "horizontal" ? width : height;
    const contentSize = dim + gap;
    if (contentSize <= gap) return;

    const from = reverse ? -contentSize / 4 : 0;
    const to = reverse ? 0 : -contentSize / 4;

    const effectiveDuration =
      speed && contentSize > 0 ? contentSize / speed : currentDuration;

    if (isTransitioning) {
      const hoverSpeed =
        speedOnHover && contentSize > 0
          ? contentSize / speedOnHover
          : effectiveDuration;

      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: hoverSpeed * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: effectiveDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
    speed,
    speedOnHover,
  ]);

  const hoverProps =
    durationOnHover || speedOnHover
      ? {
          onHoverStart: () => {
            setIsTransitioning(true);
            if (durationOnHover) setCurrentDuration(durationOnHover);
          },
          onHoverEnd: () => {
            setIsTransitioning(true);
            setCurrentDuration(duration);
          },
        }
      : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
