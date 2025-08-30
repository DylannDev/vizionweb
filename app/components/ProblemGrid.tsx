import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AlertTriangle, Workflow, ShieldCheck } from "lucide-react";

export function ProblemGrid() {
  const items = [
    {
      icon: AlertTriangle,
      title: "Zéro résultat",
      line1: "Votre site est joli mais ne génère pas de demandes ?",
      line2:
        "Nous structurons votre message et vos appels à l’action pour convertir.",
    },
    {
      icon: Workflow,
      title: "Processus compliqués",
      line1:
        "Prendre un RDV, encaisser, traiter les demandes… c’est chronophage ?",
      line2:
        "Nous automatisons ce qui peut l’être (RDV, paiement, formulaires, espace client).",
    },
    {
      icon: ShieldCheck,
      title: "Image floue",
      line1: "Votre présence en ligne n’inspire pas confiance ?",
      line2:
        "Nous créons un site clair, rapide et crédible qui reflète votre niveau.",
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Problèmes que l’on résout
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, line1, line2 }) => (
            <Card key={title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-blue-500" aria-hidden /> {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{line1}</p>
                <p className="mt-2">{line2}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemGrid;
