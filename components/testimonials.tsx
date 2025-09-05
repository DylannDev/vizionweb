export function Testimonials() {
  const items = [
    "“Simple, rapide, efficace. On a enfin un site qui travaille pour nous.” — Claire, dirigeante",
    "“L’app interne nous fait gagner des heures chaque semaine.” — Sami, responsable ops",
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Témoignages</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {items.map((t) => (
            <li
              key={t}
              className="rounded-xl border border-border bg-card p-6 text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
