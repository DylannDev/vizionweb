import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Typography from "./typography";
import { TestimonialsCard } from "./ui/testimonials-card";
import Badge from "./ui/badge";

const testimonials = [
  {
    name: "Claire Malvaud",
    job: "CEO agence de communication",
    body: "Vizion Web a totalement transformé notre présence en ligne. Nous recevons plus de demandes qualifiées qu’avant et nos clients nous perçoivent comme beaucoup plus professionnels.",
    img: "https://avatar.vercel.sh/claire",
  },
  {
    name: "Marc Malvaud",
    job: "Coach sportif",
    body: "Un site clair, rapide et facile à utiliser pour mes clients. Mes réservations sont maintenant automatisées, ce qui me fait gagner du temps chaque semaine.",
    img: "https://avatar.vercel.sh/marc",
  },
  {
    name: "Sophie Malvaud",
    job: "Créatrice de bijoux",
    body: "Grâce à leur travail, j’ai enfin un e-commerce simple à gérer et qui reflète ma marque. Les ventes en ligne ont démarré dès la première semaine.",
    img: "https://avatar.vercel.sh/sophie",
  },
  {
    name: "Yohan Malvaud",
    job: "Consultant fiscal",
    body: "Mon ancien site ne générait aucune demande. Avec Vizion Web, je reçois régulièrement des prospects via mon nouveau site vitrine. Le retour sur investissement est clair.",
    img: "https://avatar.vercel.sh/yohan",
  },
  {
    name: "Isabelle Malvaud",
    job: "Gérante d’un salon de beauté",
    body: "Les clientes peuvent réserver directement en ligne et recevoir des confirmations automatiques. Résultat : mon agenda est rempli sans que je perde du temps au téléphone.",
    img: "https://avatar.vercel.sh/isabelle",
  },
  {
    name: "Thomas Malvaud",
    job: "Fondateur d’une startup SaaS",
    body: "Ils ont livré notre MVP en quelques semaines seulement. Cela nous a permis de tester le marché rapidement et de signer nos premiers clients sans attendre.",
    img: "https://avatar.vercel.sh/thomas",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="pt-20 pb-10 md:pt-32 md:pb-16">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
            <div>
              <Badge align="left">Avis</Badge>
              <Typography
                title={
                  <>
                    Ils nous ont fait confiance <br /> voici leurs retours
                  </>
                }
                align="left"
                className="mb-0"
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-12">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>

          <CarouselContent className="mb-6 lg:mb-12 mt-3">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 flex justify-center w-full"
              >
                <TestimonialsCard key={testimonial.name} {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* 
          <div className="flex flex-col-reverse min-[500px]:flex-row items-center gap-6 justify-center min-[500px]:justify-between lg:justify-center">
            <div className="flex lg:hidden justify-center items-center gap-4">
              <CarouselPrevious className="rounded-2xl bg-primary-dark flex items-center justify-center shadow-lg shadow-primary-dark/50 w-fit" />
              <CarouselNext className="rounded-2xl bg-primary-dark flex items-center justify-center shadow-lg shadow-primary-dark/50 w-fit" />
            </div>
          </div> */}
        </Carousel>
      </div>
    </section>
  );
}
