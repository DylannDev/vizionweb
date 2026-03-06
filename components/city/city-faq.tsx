import type { CitySEO } from "@/data/cities";
import type { FaqItem } from "@/lib/seo/faq";
import Typography from "@/components/typography";
import Badge from "@/components/ui/badge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CityFaqProps {
  city: CitySEO;
  globalFaqs: FaqItem[];
}

export function CityFaq({ city, globalFaqs }: CityFaqProps) {
  const localFaqs = city.localFaqs.map((f) => ({
    q: f.question,
    a: f.answer,
  }));

  const allFaqs = [...localFaqs, ...globalFaqs];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-t from-background from-60% to-white">
      <div className="mx-auto max-w-7xl px-4">
        <Badge align="center">FAQ</Badge>
        <Typography
          title={`Questions fréquentes ${city.preposition} ${city.name}`}
          subtitle={`Tout ce que vous devez savoir avant de lancer votre projet web ${city.preposition} ${city.name}`}
        />

        <div className="flex flex-col gap-2 items-center">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-2 w-full max-w-2xl"
          >
            {allFaqs.map((f, idx) => (
              <div key={f.q} className="h-full">
                <AccordionItem value={`faq-${idx}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>
                    <div
                      dangerouslySetInnerHTML={{ __html: f.a }}
                      className="faq-answer"
                    />
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default CityFaq;
