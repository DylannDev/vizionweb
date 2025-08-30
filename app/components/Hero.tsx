import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Des sites qui convertissent. Des apps qui font gagner du temps.
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Sites vitrines, sites web avec fonctionnalités et applications web
            sur-mesure. Objectif : plus de demandes, moins de frictions, une
            image claire et crédible.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button asChild>
              <Link href="/contact">Obtenir un devis en 24h</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/realisations">Voir des réalisations</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            ✓ Délais rapides ✓ Prix clairs ✓ Propriété du code ✓ Support après
            lancement
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
