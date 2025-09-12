import React from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { PiCheckBold } from "react-icons/pi";
import { Server } from "lucide-react";

const TerminalIllustration = () => {
  return (
    <div className="bg-white border border-gray-lighter shadow-md  rounded-3xl">
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
          <div className="h-full w-[72%] rounded-full bg-primary-green" />
        </div>
        <p className="mt-2 text-xs text-gray-dark">Build 72%</p>
      </div>
    </div>
  );
};

export default TerminalIllustration;
