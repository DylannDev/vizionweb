import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  radius?:
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "full"
    | "highlighted";
  bgColor?: string;
}

function getRadiusClass(radius: CardProps["radius"] = "lg") {
  switch (radius) {
    case "none":
      return "rounded-none";
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    case "xl":
      return "rounded-xl";
    case "2xl":
      return "rounded-2xl";
    case "3xl":
      return "rounded-3xl";
    case "4xl":
      return "rounded-4xl";
    case "full":
      return "rounded-full";
    case "highlighted":
      return "rounded-b-3xl";
    default:
      return "rounded-lg";
  }
}

export function Card({
  className = "",
  radius = "lg",
  bgColor = "bg-white",
  ...props
}: CardProps) {
  return (
    <div
      className={`${getRadiusClass(radius)} border border-white ${
        bgColor ? bgColor : "bg-white"
      } p-4 ${className}`}
      {...props}
    />
  );
}

export function CardHeader({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 pb-3 ${className}`} {...props} />;
}

export function CardTitle({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  );
}

export function CardContent({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`p-6 pt-0 text-sm text-muted-foreground ${className}`}
      {...props}
    />
  );
}

export default Card;
