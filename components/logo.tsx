import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  withLink?: boolean;
  variant?: "dark" | "white";
}

export function Logo({
  width = 28,
  height = 28,
  className,
  withLink = true,
  variant = "dark",
}: LogoProps) {
  const img = (
    <Image
      src={variant === "dark" ? "/logo.svg" : "/logo-white.svg"}
      alt="Vizion Web"
      width={width}
      height={height}
      priority
    />
  );

  if (withLink) {
    return (
      <Link href="/" className={cn(className)} aria-label="Accueil Vizion Web">
        {img}
      </Link>
    );
  }

  return <span className={className}>{img}</span>;
}
