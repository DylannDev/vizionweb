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

interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  as?: TitleTag;
  titleSize?: FontSizeToken;
  titleWeight?: FontWeight;
  subtitleSize?: FontSizeToken;
  subtitleWeight?: FontWeight;
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
  className = "",
  ...props
}: TypographyProps) {
  const TitleTag = as as any;

  function getFontSizeVar(token: FontSizeToken) {
    return `var(--font-size-${token})`;
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
        "space-y-6 mb-12",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
      {...props}
    >
      {title ? (
        <TitleTag
          className="font-heading text-primary-dark tracking-tight text-balance"
          style={{
            fontFamily: "var(--font-family-heading)",
            fontSize: getFontSizeVar(titleSize),
            fontWeight: getFontWeightValue(titleWeight),
            lineHeight: "var(--line-height-tight)",
          }}
        >
          {title}
        </TitleTag>
      ) : null}
      {subtitle ? (
        <p
          className="text-gray-dark text-balance max-w-2xl mx-auto"
          style={{
            fontFamily: "var(--font-family-sans)",
            fontSize: getFontSizeVar(subtitleSize),
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
