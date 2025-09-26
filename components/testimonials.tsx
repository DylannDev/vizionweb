"use client";

import React from "react";
import Badge from "./ui/badge";
import Typography from "./typography";
import { Marquee } from "./ui/marquee";
import { TestimonialCard } from "./ui/testimonial-card";

export const testimonials = [
  {
    text: "Avec Vizion Web, on a enfin une landing page efficace et un dashboard sur-mesure simple à utiliser pour gérer nos investisseurs. Vizion Web a su transformer une idée complexe en outil efficace.",
    image: "/clients/lory.jpg",
    name: "Lory Othily",
    role: "CEO Amazonia Investing",
  },
  {
    text: "J’avais besoin d’un site vitrine moderne qui reflète l’identité de mon agence. Dylann a tout de suite compris l’univers que je voulais et le résultat a dépassé mes attentes.",
    image: "/clients/aurelie.jpg",
    name: "Aurélie Ciril",
    role: "Fondatrice Hippô’Kom",
  },
  {
    text: "Mon site intègre désormais un espace client, la réservation en ligne et les paiements. Tout est fluide et simple, mes clientes adorent. Merci Dylann pour ton écoute et ta réactivité.",
    image: "/clients/jeanne.jpg",
    name: "Jeanne Auguste",
    role: "Dirigeante Zen Lounge",
  },
  {
    text: "Dylann a été d’une aide très précieuse. Il est réactif, rapide et sérieux. Nous avions des délais courts à respecter pour la création de notre application et il a su les tenir.",
    image: "/clients/yohan.jpg",
    name: "Yohan Beauséjour",
    role: "CEO The Moriarty",
  },
  {
    text: "Grâce au nouveau site, mes clients trouvent mes services beaucoup plus facilement. Vizion Web a su rendre le site clair, professionnel et efficace. Un vrai plus pour mon activité.",
    image: "/clients/fezayi.jpg",
    name: "Filiz Fezayi",
    role: "Dirigeant TCS Plomberie",
  },
  {
    text: "L’identité visuelle créée pour ma société de location de voitures correspond parfaitement à ce que je voulais transmettre. Simple, moderne et impactant. Merci Dylann pour ton professionnalisme.",
    image: "/clients/emeraude.jpg",
    name: "Emeraude Bruant",
    role: "Dirigeante Get Easy",
  },
  {
    text: "Un branding qui reflète parfaitement l’esprit de ma boutique e-commerce. L'agence Vizion Web a trouvé un style qui attire et qui marque les esprits. Je suis très satisfait du résultat.",
    image: "/clients/youri.jpg",
    name: "Youri Petit",
    role: "CEO Mr. Kicks",
  },
  {
    text: "L'application Chefkit nous fait gagner un temps fou. Je gère mes menus, mes commandes et mes réservations en ligne facilement. C’est devenu un outil indispensable pour mon restaurant.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Karim Haddad",
    role: "Restaurateur",
  },
  {
    text: "Vizion Web nous a aidés à repenser totalement notre présence en ligne. Plus qu’un site, c’est devenu un vrai levier pour générer des prospects et développer notre activité.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Sophie Benoît",
    role: "CEO GreenPulse",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
const smTwoColA = testimonials.filter((_, i) => i % 2 === 0);
const smTwoColB = testimonials.filter((_, i) => i % 2 !== 0);

export const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
          <Badge>Avis</Badge>
          <Typography
            title="Des résultats concrets racontés par nos clients"
            subtitle="Chaque projet est unique, mais tous ont un point commun : la satisfaction de nos clients."
          />
        </div>

        {/* Mobile: single column (<sm) */}
        <div className="sm:hidden w-full mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:80s]">
            {testimonials.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
        </div>

        {/* sm-only: two columns (sm ≤ width < md) */}
        <div className="hidden sm:flex lg:hidden justify-center gap-1 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:60s]">
            {smTwoColA.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:60s]">
            {smTwoColB.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
        </div>

        {/* md and above: three columns */}
        <div className="hidden lg:flex justify-center gap-1 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:40s]">
            {firstColumn.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:40s]">
            {secondColumn.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:40s]">
            {thirdColumn.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
