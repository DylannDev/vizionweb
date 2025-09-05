import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  withLink?: boolean;
}

export function Logo({
  width = 28,
  height = 28,
  className,
  withLink = true,
}: LogoProps) {
  const img = (
    <Image
      src="/logo.svg"
      alt="Vizion Web"
      width={width}
      height={height}
      priority
    />
  );

  if (withLink) {
    return (
      <Link
        href="/"
        className={cn(className, "py-3")}
        aria-label="Accueil Vizion Web"
      >
        {img}
      </Link>
    );
  }

  return <span className={className}>{img}</span>;
}
