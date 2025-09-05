import * as React from "react";
import { cn } from "@/lib/utils";

interface IconIllustrationProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number | string;
}

export function IconIllustration({
  icon: Icon,
  size = 50,
  className = "",
  ...props
}: IconIllustrationProps) {
  const dimension = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className={cn(
        "rounded-2xl bg-primary-dark flex items-center justify-center shadow-lg shadow-primary-dark/50 w-fit",
        className
      )}
      style={{ width: dimension, height: dimension }}
      {...props}
    >
      <Icon aria-hidden className="text-primary-green text-2xl" />
    </div>
  );
}

export default IconIllustration;
