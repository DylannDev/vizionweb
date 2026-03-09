import Typography from "./typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Badge from "./ui/badge";

import { faqs } from "@/data";
import Card from "./ui/card";
import WhatsappButton from "./ui/whatsapp-button";

export function FAQ() {
  return (
    <section className="pt-16 md:pt-24 z-10 bg-gradient-to-t from-background from-60% to-white">
      <div className=" mx-auto max-w-7xl px-4">
        <Badge align="center">FAQ</Badge>
        <Typography
          align="center"
          title={
            <>
              Vos questions
              <br /> nos réponses claires
            </>
          }
          subtitle="Tout ce que vous devez savoir avant de vous lancer"
        />
        <div className="flex flex-col gap-2 items-center">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-2 w-full max-w-2xl"
          >
            {faqs.map((f, idx) => (
              <div key={f.q} className="h-full">
                <AccordionItem key={f.q} value={`faq-${idx}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>
                    <div
                      dangerouslySetInnerHTML={{ __html: f.a }}
                      className="faq-answer"
                    ></div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>

          <div className="flex justify-center w-full">
            <Card
              radius="4xl"
              bgColor="bg-background"
              className="p-8 max-w-2xl w-full relative overflow-hidden bg-white"
            >
              <div className="space-y-3 text-center z-10 relative">
                <h3 className="text-xl sm:text-2xl font-semibold text-primary-dark">
                  Vous avez encore des questions ?
                </h3>
                <p className="text-gray-dark text-base sm:text-lg text-balance">
                  Écrivez-nous directement sur WhatsApp. On répond rapidement,
                  même pour une simple question.
                </p>
                <WhatsappButton />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
