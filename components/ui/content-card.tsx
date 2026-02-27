import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const watermarkVariants = [
  "scale-125 rotate-12",
  "scale-130 -rotate-6",
  "scale-135 rotate-15",
  "scale-140 -rotate-12",
  "scale-140 rotate-8",
  "scale-150 -rotate-15",
  "scale-135 rotate-6",
  "scale-145 -rotate-10",
  "scale-140 rotate-12",
];

interface ContentCardProps {
  title: string;
  description: string;
  iconSrc?: string;
  iconBg?: string;
  watermarkVariant?: number;
  image?: string;
  imageAlt?: string;
  badges?: string[];
  actionLabel?: string;
  href?: string;
  external?: boolean;
  hover?: boolean;
  centered?: boolean;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
  className?: string;
}

export function ContentCard({
  title,
  description,
  iconSrc,
  iconBg = "bg-violet-500",
  watermarkVariant = 0,
  image,
  imageAlt,
  badges,
  actionLabel,
  href,
  external,
  hover = true,
  centered = false,
  layout = "vertical",
  reverse = false,
  className,
}: ContentCardProps) {
  const iconBlock = iconSrc && (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden flex items-center justify-center",
        layout === "horizontal"
          ? "aspect-video md:w-2/5 shrink-0 md:aspect-square"
          : "aspect-video"
      )}
    >
      <div className={cn("absolute inset-0 opacity-50", iconBg)} />
      <Image
        src="/icons/logo-watermark.svg"
        alt=""
        width={1000}
        height={1000}
        className={cn(
          "absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20",
          watermarkVariants[watermarkVariant % watermarkVariants.length]
        )}
      />
      <Image
        src={iconSrc}
        alt=""
        width={300}
        height={300}
        className={cn(
          "relative z-10 object-contain transition-transform duration-300 group-hover:scale-[1.02] w-full h-full max-h-[50%]"
        )}
      />
    </div>
  );

  const imageBlock = image && (
    <div className="relative aspect-[3/2] rounded-3xl overflow-hidden">
      <Image
        src={image}
        alt={imageAlt || title}
        loading="lazy"
        decoding="async"
        quality={100}
        fetchPriority="low"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover object-top-left transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </div>
  );

  const textBlock = (
    <div
      className={cn(
        "flex flex-col justify-between gap-3 flex-1",
        layout === "horizontal" ? "py-2 px-4 md:py-4" : "pt-4 px-3 pb-3",
        centered && "text-center"
      )}
    >
      <div className="space-y-3 flex-1">
        <h3
          className={cn(
            "font-semibold",
            iconSrc && "text-xl",
            hover
              ? "text-primary-dark group-hover:text-primary-blue transition-colors duration-300"
              : "text-primary-dark"
          )}
        >
          {title}
        </h3>
        <p className="text-base text-gray-dark">{description}</p>
      </div>

      {actionLabel && (
        <span
          className={cn(
            "inline-flex items-center gap-2 mt-1 text-sm font-semibold text-primary-blue",
            centered && "justify-center"
          )}
        >
          {actionLabel}
          <span className="size-6 flex items-center justify-center rounded-md bg-gradient-to-b from-primary-blue-dark to-primary-blue-border">
            <ArrowRight
              className="size-3.5 text-white group-hover:-rotate-45 transition-all duration-300 ease-in-out"
              strokeWidth={2.5}
            />
          </span>
        </span>
      )}

      {badges && badges.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-1">
          {badges.map((b) => (
            <span
              key={b}
              className="text-sm text-gray-dark px-3 py-1 border border-gray-lighter rounded-full"
            >
              {b}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  const card = (
    <div
      className={cn(
        "rounded-4xl bg-white p-2 h-full w-full group shadow-[0_4px_20px_0] shadow-gray-lighter",
        layout === "horizontal"
          ? cn(
              "flex flex-col md:flex-row md:items-stretch md:max-h-[230px] lg:max-h-[300px] overflow-hidden",
              reverse && "md:flex-row-reverse"
            )
          : "flex flex-col",
        hover && "cursor-pointer",
        className
      )}
    >
      {imageBlock}
      {iconBlock}
      {textBlock}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex h-full w-full"
      >
        {card}
      </Link>
    );
  }

  return card;
}

export default ContentCard;
