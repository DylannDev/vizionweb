import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowButton } from "./arrow-button";
import Badge from "./badge";

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  badge: string[];
  src: string;
  link?: string;
  testimonial?: { text: string; image: string; name: string; role: string };
  reverse?: boolean;
}

export function PortfolioCard({
  title,
  subtitle,
  badge,
  src,
  link,
  testimonial,
  reverse,
}: PortfolioCardProps) {
  return (
    <div
      className={cn(
        "rounded-4xl bg-white p-2 shadow-[0_4px_20px_0] shadow-gray-lighter",
        "flex flex-col min-[900px]:flex-row min-[900px]:items-stretch",
        reverse && "lg:flex-row-reverse"
      )}
    >
      {/* Image */}
      <div className="relative aspect-[3/2] min-[900px]:aspect-auto min-[900px]:w-1/2 shrink-0 rounded-3xl overflow-hidden">
        <Image
          src={src}
          alt={`${title} — ${subtitle}`}
          loading="lazy"
          decoding="async"
          quality={100}
          fetchPriority="low"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top-left min-[900px]:object-center rounded-3xl"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center gap-4 flex-1 p-4 md:p-6">
        <h3 className="font-semibold text-primary-dark text-3xl">{title}</h3>

        <div className="flex flex-wrap items-center gap-2">
          {badge.map((b) => (
            <Badge
              key={b}
              className="m-0 font-normal rounded-full py-1"
              variant="transparent"
            >
              {b}
            </Badge>
          ))}
        </div>

        <p className="text-base text-gray-dark">{subtitle}</p>

        {testimonial && (
          <div className="flex flex-col gap-3 rounded-3xl bg-background p-2">
            <div className="flex items-center gap-2 p-1">
              <div className="relative h-10 w-10 overflow-hidden rounded-full shrink-0">
                <Image
                  src={`/clients/${testimonial.image}`}
                  alt={`${testimonial.name} — ${testimonial.role}`}
                  fill
                  sizes="40px"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-medium tracking-tight leading-5">
                  {testimonial.name}
                </span>
                <span className="leading-5 opacity-60 tracking-tight text-gray-dark text-sm">
                  {testimonial.role}
                </span>
              </div>
            </div>
            <p className="text-sm font-medium text-primary-dark bg-white rounded-2xl p-4">
              &ldquo;{testimonial.text}&rdquo;
            </p>
          </div>
        )}

        {link && (
          <div>
            <ArrowButton href={link} target="_blank" variant="black" size="md">
              Voir le projet
            </ArrowButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioCard;
