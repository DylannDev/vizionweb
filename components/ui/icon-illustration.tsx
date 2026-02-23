import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IconIllustrationProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ReactNode;
  img?: string;
  imgSize?: number;
  string?: string;
  size?: number | string;
  radius?: "rounded-lg" | "rounded-xl" | "rounded-2xl" | "rounded-full";
}

export function IconIllustration({
  radius = "rounded-2xl",
  icon: Icon,
  img,
  imgSize = 20,
  string,
  size = 50,
  className = "",
  ...props
}: IconIllustrationProps) {
  const dimension = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className={cn(
        `${radius} bg-white flex items-center justify-center shadow-lg shadow-primary-blue w-fit relative z-10`,
        `${className}`
      )}
      style={{ width: dimension, height: dimension }}
      {...props}
    >
      {typeof Icon === "function" && (
        <Icon aria-hidden className="text-primary-blue text-2xl" />
      )}
      {typeof Icon === "object" && Icon}
      {img && <Image src={img} alt="" width={imgSize} height={imgSize} />}
      {string && <span className="text-primary-blue text-base">{string}</span>}
    </div>
  );
}

export default IconIllustration;
