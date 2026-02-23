import Typography from "./typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Badge from "./ui/badge";
import Card from "./ui/card";
import WhatsappButton from "./ui/whatsapp-button";
import FadeIn from "./ui/fade-in";
import { faqs } from "@/data";

export function FAQ() {
  return (
    <section className="py-16 md:py-24">
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
              <FadeIn key={f.q} delay={0.2 * (idx + 1)} className="h-full">
                <AccordionItem key={f.q} value={`faq-${idx}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>
                    <div
                      dangerouslySetInnerHTML={{ __html: f.a }}
                      className="faq-answer"
                    ></div>
                  </AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>

          <FadeIn key="card" delay={1.8} className="flex justify-center w-full">
            <Card
              radius="4xl"
              bgColor="bg-background"
              className="p-8 max-w-2xl w-full relative overflow-hidden"
            >
              <div className="space-y-3 text-center z-10 relative">
                <h3 className="text-xl font-semibold text-primary-dark">
                  Vous avez encore des questions ?
                </h3>
                <p className="text-gray-dark text-sm sm:text-base">
                  Écrivez-nous directement sur WhatsApp. On répond
                  <br className="hidden sm:block" />
                  en quelques heures, même pour une question rapide.
                </p>
                <WhatsappButton />
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
