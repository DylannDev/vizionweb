import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function MiniPortfolio() {
  const items = [
    {
      title: "Conseil B2B",
      subtitle: "site vitrine clair",
      result: "+62% de prises de contact",
      src: "https://placehold.co/600x400/webp",
    },
    {
      title: "Studio bien-être",
      subtitle: "site + RDV en ligne",
      result: "agenda rempli 3 semaines à l’avance",
      src: "https://placehold.co/600x400/webp",
    },
    {
      title: "SaaS RH",
      subtitle: "MVP web",
      result: "1ers clients payants en 30 jours",
      src: "https://placehold.co/600x400/webp",
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Mini-portfolio
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-xl overflow-hidden border border-border bg-muted/20"
            >
              <Image
                src={it.src}
                alt={`${it.title} — ${it.subtitle}`}
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-medium">{it.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {it.subtitle} → {it.result}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild>
            <Link href="/realisations">Voir toutes les réalisations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default MiniPortfolio;
