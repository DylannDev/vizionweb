import { ContentCard } from "./content-card";

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
    <ContentCard
      title={title}
      description={subtitle}
      image={src}
      imageAlt={`${title} — ${subtitle}`}
      badges={badge}
      href={link}
      external={!!link}
    />
  );
}

export default PortfolioCard;
