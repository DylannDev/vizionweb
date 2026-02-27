"use client";
import { Mic, PhoneOff, Video } from "lucide-react";
import { FaUser } from "react-icons/fa6";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function DiscoveryIllustration() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentSpeaker((prev) => (prev + 1) % 4);
    }, 2500);
    return () => window.clearInterval(id);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center relative max-w-[400px] mx-auto">
      {/* Window */}
      <motion.div
        className="w-full rounded-3xl border border-gray-lighter shadow-[0_4px_12px_0_rgba(139,92,246,0.15)]  bg-white p-3 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
      >
        {/* button bar */}
        <div className="flex items-center gap-2 rounded-t-3xl px-2 pb-4 pt-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-gray-lighter" />
          <div className="h-2.5 w-2.5 rounded-full bg-violet-500" />
        </div>

        {/* <hr className="border-gray-lighter" /> */}

        {/* Grid of participants */}

        <div className="p-3 grid grid-cols-2 gap-3 rounded-xl bg-background">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="rounded-xl bg-white p-4 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3 * i + 1.3,
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <motion.div
                className={cn(
                  "flex items-center justify-center size-12 rounded-full bg-violet-500 text-white",
                  `rounded-full ${
                    i === currentSpeaker
                      ? "ring-2 ring-violet-500 ring-offset-2 ring-offset-white"
                      : ""
                  }`
                )}
                animate={
                  i === currentSpeaker ? { scale: [1, 1.06, 1] } : undefined
                }
                transition={
                  i === currentSpeaker
                    ? {
                        delay: 0.1 * i,
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : undefined
                }
              >
                <FaUser className="size-5" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Action bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 2.5, ease: "easeOut" }}
        className="mt-3 flex items-center justify-center gap-3 bg-white rounded-3xl p-2 border border-gray-lighter shadow-[0_4px_12px_0_rgba(139,92,246,0.15)] w-fit"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-flex items-center justify-center size-8 rounded-full bg-gray-light text-white"
        >
          <Video className="size-4" strokeWidth={1.75} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-flex items-center justify-center size-8 rounded-full bg-red-500 text-white"
        >
          <PhoneOff className="size-4" strokeWidth={1.75} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-flex items-center justify-center size-8 rounded-full bg-violet-500 text-white"
        >
          <Mic className="size-4" strokeWidth={1.75} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        className="absolute -top-5 h-[150px] w-[90%] mx-auto bg-white border border-gray-lighter rounded-2xl shadow-[0_4px_12px_0_rgba(139,92,246,0.15)] z-1"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute -top-9 h-[150px] w-[80%] mx-auto bg-gray-lighter rounded-2xl shadow-[0_4px_12px_0_rgba(139,92,246,0.15)] z-0"
      ></motion.div>
    </div>
  );
}
