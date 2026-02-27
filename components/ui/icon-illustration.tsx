import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ColorVariant = "blue" | "red";

const variantStyles: Record<ColorVariant, string> = {
  blue: "bg-gradient-to-b from-primary-blue-dark to-primary-blue-border border-primary-blue shadow-primary-blue",
  red: "bg-gradient-to-b from-red-800 to-red-500 border-red-600 shadow-red-500/40",
};

interface IconIllustrationProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ReactNode;
  img?: string;
  imgSize?: number;
  string?: string;
  size?: number | string;
  radius?: "rounded-lg" | "rounded-xl" | "rounded-2xl" | "rounded-full";
  variant?: ColorVariant;
}

export function IconIllustration({
  radius = "rounded-2xl",
  icon: Icon,
  img,
  imgSize = 20,
  string,
  size = 50,
  variant = "blue",
  className = "",
  ...props
}: IconIllustrationProps) {
  const dimension = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className={cn(
        `${radius} border flex items-center justify-center shadow-lg w-fit relative z-10 shrink-0`,
        variantStyles[variant],
        className
      )}
      style={{ width: dimension, height: dimension }}
      {...props}
    >
      {typeof Icon === "function" && (
        <Icon aria-hidden className="text-white text-2xl" />
      )}
      {typeof Icon === "object" && Icon}
      {img && <Image src={img} alt="" width={imgSize} height={imgSize} />}
      {string && <span className="text-primary-blue text-base">{string}</span>}
    </div>
  );
}

export default IconIllustration;
