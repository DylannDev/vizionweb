import * as React from "react";
import { cn } from "@/lib/utils";

type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type FontSizeToken =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";
type FontWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold";

interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center" | "right";
  variant?: "stacked" | "split";
  as?: TitleTag;
  titleSize?: FontSizeToken;
  titleWeight?: FontWeight;
  subtitleSize?: FontSizeToken;
  subtitleWeight?: FontWeight;
  titleColor?: string;
  subtitleColor?: string;
  titleMaxWidth?: string;
  subtitleMaxWidth?: string;
}

export function Typography({
  title,
  subtitle,
  align = "center",
  variant = "stacked",
  as = "h2",
  titleSize = "5xl",
  titleWeight = 600,
  subtitleSize = "lg",
  subtitleWeight = 400,
  titleColor = "text-primary-dark",
  subtitleColor = "text-gray-dark",
  titleMaxWidth = "max-w-3xl",
  subtitleMaxWidth = "max-w-2xl",
  className = "",
  ...props
}: TypographyProps) {
  const TitleTag = as as any;

  function getMobileMinPx(token: FontSizeToken) {
    switch (token) {
      case "xs":
        return 12;
      case "sm":
        return 14;
      case "base":
        return 16;
      case "lg":
        return 18;
      case "xl":
        return 20;
      case "2xl":
        return 24;
      case "3xl":
        return 28;
      case "4xl":
        return 30;
      case "5xl":
        return 32; // ex: requested 5xl → 32px on mobile
      default:
        return 16;
    }
  }

  function getResponsiveFontSize(token: FontSizeToken) {
    const min = getMobileMinPx(token);
    return `clamp(${min}px, calc(${min}px + 1.2vw), var(--font-size-${token}))`;
  }

  function getFontWeightValue(weight: FontWeight) {
    switch (weight) {
      case "light":
        return 300;
      case "normal":
        return 400;
      case "medium":
        return 500;
      case "semibold":
        return 600;
      case "bold":
        return 700;
      default:
        return weight;
    }
  }

  const titleEl = title ? (
    <TitleTag
      className={cn(
        "font-heading tracking-tight text-balance mx-auto",
        titleMaxWidth,
        titleColor
      )}
      style={{
        fontFamily: "var(--font-family-heading)",
        fontSize: getResponsiveFontSize(titleSize),
        fontWeight: getFontWeightValue(titleWeight),
        lineHeight: "var(--line-height-tight)",
      }}
    >
      {title}
    </TitleTag>
  ) : null;

  const subtitleEl = subtitle ? (
    <p
      className={cn(
        "text-balance",
        variant === "stacked" && `${subtitleMaxWidth} mx-auto`,
        variant === "split" && "md:text-right",
        subtitleColor
      )}
      style={{
        fontFamily: "var(--font-family-sans)",
        fontSize: getResponsiveFontSize(subtitleSize),
        fontWeight: getFontWeightValue(subtitleWeight),
        lineHeight: "var(--line-height-normal)",
      }}
    >
      {subtitle}
    </p>
  ) : null;

  if (variant === "split") {
    return (
      <div
        className={cn("mb-8 sm:mb-12 text-center md:text-left", className)}
        {...props}
      >
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-start">
          {titleEl}
          {subtitleEl}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "space-y-3 sm:space-y-6 mb-8 sm:mb-12",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
      {...props}
    >
      {titleEl}
      {subtitleEl}
    </div>
  );
}

export default Typography;
