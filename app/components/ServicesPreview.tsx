import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function ServicesPreview() {
  const items = [
    {
      title: "Site vitrine",
      desc: "Pour être trouvé, compris et choisi : pages essentielles, message clair, CTA efficaces.",
    },
    {
      title: "Site web avec fonctionnalités",
      desc: "Pour réserver, payer, gérer : prise de RDV, paiement en ligne, zone client, intégrations.",
    },
    {
      title: "Application web sur-mesure",
      desc: "Pour transformer vos process : SaaS, dashboard métier, intranet, MVP.",
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Nos offres</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <Card key={it.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{it.title}</CardTitle>
              </CardHeader>
              <CardContent>{it.desc}</CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild>
            <Link href="/services">Voir nos services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
