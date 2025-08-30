export function ResultsStrip() {
  const items = [
    "+62% de demandes qualifiées en 90 jours — cabinet de conseil",
    "2h/j économisées grâce à l’automatisation des RDV — centre de soins",
    "MVP livré en 5 semaines, premiers abonnés le mois suivant — startup B2B",
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <ul className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
          {items.map((t) => (
            <li key={t} className="rounded-lg bg-muted p-4">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ResultsStrip;
