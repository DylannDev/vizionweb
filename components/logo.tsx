import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  withLink?: boolean;
  variant?: "dark" | "white";
}

export function Logo({
  className,
  withLink = true,
  variant = "dark",
}: LogoProps) {
  const img = (
    <Image
      src={variant === "dark" ? "/logo.svg" : "/logo-white.svg"}
      alt="Vizion Web"
      sizes="100%"
      fill
      priority
    />
  );

  if (withLink) {
    return (
      <Link
        href="/"
        className={cn(className, "relative")}
        aria-label="Accueil Vizion Web"
      >
        {img}
      </Link>
    );
  }

  return <span className={className}>{img}</span>;
}
