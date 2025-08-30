import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function PricingSimple() {
  const tiers = [
    {
      title: "Site vitrine",
      price: "à partir de 2 490€",
      desc: "5–7 pages, message & structure clairs, formulaires, suivi des conversions.",
    },
    {
      title: "Site avec fonctionnalités",
      price: "à partir de 4 900€",
      desc: "Prise de RDV, paiement, zone client, intégrations (ex : Stripe, agenda).",
    },
    {
      title: "Application web sur-mesure",
      price: "à partir de 9 900€",
      desc: "SaaS, outils métier, dashboards, MVP. Découpage en étapes (V1 → V2).",
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Fourchettes de prix
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <Card key={t.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {t.title} <Badge>à partir de</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">{t.price}</p>
                <p className="mt-2 text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Propriété du code, hébergement conseillé, support 30 jours inclus.
        </p>
      </div>
    </section>
  );
}

export default PricingSimple;
