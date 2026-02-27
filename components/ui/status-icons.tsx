import { cn } from "@/lib/utils";
import { PiCheckBold, PiMinusBold } from "react-icons/pi";

export function CheckIcon({ light }: { light?: boolean }) {
  return (
    <div
      className={cn(
        "size-7 rounded-full flex items-center justify-center",
        light
          ? "bg-white/20"
          : "bg-gradient-to-b from-primary-blue-dark to-primary-blue-border"
      )}
    >
      <PiCheckBold className="size-3.5 text-white" />
    </div>
  );
}

export function MinusIcon() {
  return (
    <div className="size-7 rounded-full bg-gray-lighter/60 flex items-center justify-center">
      <PiMinusBold className="size-3.5 text-gray-light" />
    </div>
  );
}
