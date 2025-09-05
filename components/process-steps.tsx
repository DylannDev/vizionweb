import { CheckCircle2 } from "lucide-react";

export function ProcessSteps() {
  const steps = [
    {
      title: "Diagnostic express (30 min)",
      desc: "on clarifie objectifs et portée.",
    },
    {
      title: "Prototype cliquable",
      desc: "vous validez avant production.",
    },
    {
      title: "Production & branchements",
      desc: "formulaires, paiement, RDV, espace client.",
    },
    {
      title: "Lancement & ajustements",
      desc: "check-list, suivi 30 jours, micro-améliorations.",
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Notre méthode
        </h2>
        <ol className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-1 h-5 w-5 text-green-500"
                aria-hidden
              />
              <div>
                <h3 className="font-medium">
                  {i + 1}. {s.title}
                </h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ProcessSteps;
