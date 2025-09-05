import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "Combien de temps pour livrer ?",
      a: "Landing/vitrine : 1–2 semaines. Fonctionnel : 2–4 semaines. App : 4–8 semaines selon la portée.",
    },
    {
      q: "Qui s’occupe du contenu ?",
      a: "On vous guide avec un kit simple. Possibilité de prise en charge (option).",
    },
    {
      q: "Qui possède le site / l’app ?",
      a: "Vous. Propriété du code et accès complets.",
    },
    {
      q: "Y a-t-il un support après lancement ?",
      a: "Oui, 30 jours inclus. Packs de suivi disponibles.",
    },
    {
      q: "Et le budget ?",
      a: "Fourchettes affichées. Un devis précis vous est envoyé sous 24h.",
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, idx) => (
            <AccordionItem key={f.q} value={`faq-${idx}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
