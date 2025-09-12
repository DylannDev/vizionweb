"use client";

import { cn } from "@/lib/utils";
import { Type, PenTool, Brush, VectorSquare } from "lucide-react";
import Image from "next/image";
import { FiFigma } from "react-icons/fi";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Typewriter } from "@/components/ui/typewriter";

export default function PrototypeIllustration() {
  const [activeTool, setActiveTool] = useState<"pen" | "text">("pen");
  const [showHeadline, setShowHeadline] = useState(false);
  const [cycle, setCycle] = useState(0);

  // Timeline controller (~8s cycle)
  useEffect(() => {
    const reset = () => {
      setActiveTool("pen");
      setShowHeadline(false);
    };

    reset();

    const t1 = setTimeout(() => setActiveTool("text"), 1600); // 1,6s: select Text tool
    const t2 = setTimeout(() => setShowHeadline(true), 3200); // 3,2s: start typing Headline
    const tEnd = setTimeout(() => setCycle((c) => c + 1), 8000); // loop

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(tEnd);
    };
  }, [cycle]);
  return (
    <section
      aria-labelledby="prototype-illustration-title"
      className="relative flex flex-col items-center justify-center gap-3 w-full h-full rounded-3xl"
    >
      <h2 id="prototype-illustration-title" className="sr-only">
        Illustration: Prototype & design
      </h2>

      {/* Main window */}
      <div className="relative z-70 w-full max-w-[400px] h-[230px] rounded-3xl border border-gray-lighter shadow-md  bg-white p-4">
        {/* 2-column mock layout */}
        <div className="grid grid-cols-2 h-full gap-4">
          {/* Left: Headline + skeletons */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="relative w-full max-w-[165px] mx-auto h-10 flex items-center justify-center border-2 border-primary-dark py-7">
              {showHeadline ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Typewriter
                    text={["Headline"]}
                    speed={140}
                    initialDelay={0}
                    waitTime={2000}
                    deleteSpeed={60}
                    loop={true}
                    showCursor={true}
                    className="text-primary-green text-2xl font-semibold font-heading"
                  />
                </div>
              ) : null}
              <div className="absolute -bottom-0 left-0 -translate-x-1/2 translate-y-1/2 h-3.5 w-3.5 bg-white border-2 border-primary-dark rounded-[2px]" />
              <div className="absolute -bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-3.5 w-3.5 bg-white border-2 border-primary-dark rounded-[2px]" />
              <div className="absolute -top-0 right-0 translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 bg-white border-2 border-primary-dark rounded-[2px]" />
              <div className="absolute -top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 bg-white border-2 border-primary-dark rounded-[2px]" />
            </div>
            <div className="space-y-2">
              <motion.div
                className="h-2 w-full bg-gray-lighter rounded-full origin-left"
                aria-hidden
                animate={{ scaleX: [1, 0.95, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="h-2 w-4/5 bg-gray-lighter rounded-full origin-left"
                aria-hidden
                animate={{ scaleX: [1, 0.95, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              <div className="flex gap-2">
                <motion.div
                  className="h-2 w-1/5 bg-gray-lighter rounded-full origin-left"
                  aria-hidden
                  animate={{ scaleX: [1, 1.08, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                />
                <motion.div
                  className="h-2 w-1/5 bg-gray-lighter rounded-full origin-left"
                  aria-hidden
                  animate={{ scaleX: [1, 1.08, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Image placeholder */}
          <div
            className="bg-gray-lighter rounded-xl h-full flex items-center justify-center"
            role="img"
            aria-label="Placeholder visuel"
          >
            <Image
              src="/placeholder.svg"
              alt="Image"
              width={100}
              height={100}
              className="size-10"
            />
          </div>
        </div>

        {/* Cursor + tag */}
        <motion.div
          className="absolute -right-[5%] bottom-[15%] flex items-center gap-2"
          animate={{
            x: [0, -165, -165, -165, -230, -230, -230, 0],
            y: [0, 115, 115, 115, -90, -90, -90, 0],
            scale: [1, 1, 1, 0.9, 1, 0.9, 1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.16, 0.18, 0.2, 0.36, 0.38, 0.4, 0.56],
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/cursor.svg"
              alt="Cursor"
              width={12}
              height={12}
              className="absolute -left-1.5 -top-1.5"
            />
            <div className="rounded-full bg-primary-green text-primary-dark font-medium px-3 py-2 text-[12px] shadow-sm ">
              Designer
            </div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal tool rail */}
      <div className="flex items-center gap-3">
        {/* Figma */}
        <div className="rounded-2xl bg-white border border-gray-lighter flex items-center justify-center shadow-md  h-[58px] w-[58px]">
          <FiFigma className="text-primary-green text-3xl" />
        </div>

        <div
          aria-hidden
          className="bg-white border border-gray-lighter rounded-2xl p-3 shadow-md  flex gap-3"
        >
          {[PenTool, Type, Brush, VectorSquare].map((Icon, idx) => (
            <div key={idx} className="relative">
              {((activeTool === "pen" && idx === 0) ||
                (activeTool === "text" && idx === 1)) && (
                <motion.div
                  layoutId="toolHighlight"
                  className="absolute inset-0 rounded-lg bg-primary-green"
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              )}
              <div
                className={cn(
                  "relative inline-flex items-center justify-center size-8 rounded-lg text-secondary-dark hover:bg-background z-10",
                  (activeTool === "pen" && idx === 0) ||
                    (activeTool === "text" && idx === 1)
                    ? "text-primary-dark"
                    : ""
                )}
                aria-hidden
              >
                <Icon className="size-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Color wheel / palette */}
        <div
          aria-hidden
          className="flex items-center p-3 bg-white border border-gray-lighter rounded-2xl shadow-md "
        >
          <div
            className="relative size-8 rounded-full"
            style={{
              background:
                "conic-gradient(oklch(63.7% 0.237 25.331), oklch(82.8% 0.189 84.429), oklch(72.3% 0.219 149.579), oklch(71.5% 0.143 215.221), oklch(60.6% 0.25 292.717), oklch(70.4% 0.191 22.216))",
            }}
          >
            <div className="absolute size-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
