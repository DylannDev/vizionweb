import { testimonials } from "./index";

export interface Project {
  title: string;
  subtitle: string;
  badge: string[];
  src: string;
  link?: string;
  testimonial?: { text: string; image: string; name: string; role: string };
}

function findTestimonial(roleKeyword: string) {
  return testimonials.find((t) => t.role.includes(roleKeyword));
}

export const portfolioProjects: Project[] = [
  {
    title: "Get Easy",
    subtitle:
      "Système de réservation complet pour agence de location de voitures avec back-office de gestion et tableau de bord.",
    badge: ["SaaS", "App Web", "Dashboard / CRM"],
    src: "/projets/get-easy.jpg",
    link: "https://geteasylocation.com/",
    testimonial: findTestimonial("Get Easy"),
  },
  {
    title: "Amazonia Investing",
    subtitle:
      "Landing page performante couplée à un blog éducatif et un dashboard CRM. Résultat : un outil complet pour informer, convertir et gérer les investisseurs au même endroit.",
    badge: ["Landing page", "Blog", "Dashboard / CRM"],
    src: "/projets/investing.jpg",
    link: "https://amazonia-investing.com",
    testimonial: findTestimonial("Amazonia Investing"),
  },
  {
    title: "Hippô'Kom",
    subtitle:
      "Site vitrine élégant et moderne pour une agence de communication. Design inspiré de l'univers marin, pensé pour refléter leur identité et attirer de nouveaux clients.",
    badge: ["Site Vitrine", "Blog"],
    src: "/projets/hippokom.jpg",
    link: "https://hippokomagency.fr",
    testimonial: findTestimonial("Hippô’Kom"),
  },
  {
    title: "Zen Lounge",
    subtitle:
      "Site web complet pour un salon de bien-être. Espace client, paiement en ligne et réservation intégrée pour une expérience fluide et professionnelle. Dashboard pour la gestion des réservations.",
    badge: ["Site Web Complet", "Dashboard / CRM"],
    src: "/projets/zenlounge.jpg",
    link: "https://zenlounge-guyane.fr",
    testimonial: findTestimonial("Zen Lounge"),
  },
  {
    title: "Eden Glass",
    subtitle:
      "Site vitrine moderne pour un expert en vitrage automobile spécialisé dans le remplacement de pare-brise à Montpellier.",
    badge: ["Site Vitrine", "Blog"],
    src: "/projets/eden-glass.jpg",
    link: "https://edenglass.fr/",
    testimonial: findTestimonial("GreenPulse"),
  },
  {
    title: "TCS Plomberie",
    subtitle:
      "Site vitrine professionnel pour un plombier-chauffagiste avec prise de rendez-vous en ligne et présentation des services.",
    badge: ["Site Vitrine"],
    src: "/projets/tcs-plomberie.jpg",
    link: "https://tcs-plomberie-montpellier.fr/",
    testimonial: findTestimonial("TCS Plomberie"),
  },
  // {
  //   title: "ChefKit",
  //   subtitle:
  //     "Application SaaS pour restaurateurs et traiteurs. Gestion des menus, réservations : une solution clé en main pour digitaliser leur activité.",
  //   badge: ["SaaS", "App Web", "Landing page"],
  //   src: "/projets/chefkit.jpg",
  //   testimonial: findTestimonial("Restaurateur"),
  // },
];
