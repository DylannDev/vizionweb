import Typography from "@/components/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import type { Service } from "@/data/services";

export function ServiceFaq({ service }: { service: Service }) {
  if (service.faqs.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <Typography
          align="center"
          title="Questions fréquentes"
          subtitle={`Tout ce que vous devez savoir sur notre service ${service.shortTitle}`}
        />
        <div className="flex flex-col gap-2 items-center">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-2 w-full max-w-2xl"
          >
            {service.faqs.map((f, idx) => (
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
