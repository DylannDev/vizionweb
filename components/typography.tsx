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
  as?: TitleTag;
  titleSize?: FontSizeToken;
  titleWeight?: FontWeight;
  subtitleSize?: FontSizeToken;
  subtitleWeight?: FontWeight;
  titleColor?: string;
  subtitleColor?: string;
}

export function Typography({
  title,
  subtitle,
  align = "center",
  as = "h2",
  titleSize = "5xl",
  titleWeight = 600,
  subtitleSize = "base",
  subtitleWeight = 400,
  titleColor = "text-primary-dark",
  subtitleColor = "text-gray-dark",
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
        return 14;
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
    return `clamp(${min}px, ${min}px, var(--font-size-${token}))`;
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
      {title ? (
        <TitleTag
          className={cn("font-heading tracking-tight text-balance", titleColor)}
          style={{
            fontFamily: "var(--font-family-heading)",
            fontSize: getResponsiveFontSize(titleSize),
            fontWeight: getFontWeightValue(titleWeight),
            lineHeight: "var(--line-height-tight)",
          }}
        >
          {title}
        </TitleTag>
      ) : null}
      {subtitle ? (
        <p
          className={cn("text-balance max-w-2xl mx-auto", subtitleColor)}
          style={{
            fontFamily: "var(--font-family-sans)",
            fontSize: getResponsiveFontSize(subtitleSize),
            fontWeight: getFontWeightValue(subtitleWeight),
            lineHeight: "var(--line-height-normal)",
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default Typography;
