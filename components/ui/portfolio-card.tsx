import Image from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  badge: string[];
  src: string;
  link?: string;
}

export function PortfolioCard({
  title,
  subtitle,
  badge,
  src,
  link,
}: PortfolioCardProps) {
  return (
    <Link
      href={link || ""}
      target={link ? "_blank" : "_self"}
      className="flex group rounded-3xl bg-white p-4 cursor-pointer shadow-lg"
    >
      <div className="flex flex-col">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={src}
            alt={`${title} — ${subtitle}`}
            width={600}
            height={400}
            quality={100}
            loading="eager"
            priority={true}
            className="w-full h-[350px] rounded-2xl group-hover:scale-102 transition-all duration-300"
          />
        </div>
        <div className="pt-4 flex flex-col justify-between gap-3 flex-1">
          <div className="space-y-3">
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-dark">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2 mt-3">
            {badge.map((b) => (
              <div
                className="text-sm text-[#82888C] px-3 py-1 border border-gray-lighter rounded-full"
                key={b}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PortfolioCard;
