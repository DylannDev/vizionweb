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

const emeraudeTestimonial = findTestimonial("Get Easy");

export const portfolioProjects: Project[] = [
  {
    title: "Rollie (Marketplace)",
    subtitle:
      "Plateforme de réservation de voitures auprès de loueurs indépendants d'outre-mer, avec recherche par destination, disponibilités et réservation en ligne.",
    badge: ["Plateforme web", "Réservation en ligne"],
    src: "/projets/rollie-mkt.avif",
    link: "https://getrollie.app/",
  },
  {
    title: "Rollie (Logiciel)",
    subtitle:
      "Logiciel de gestion pour loueurs de véhicules : site de réservation, paiements, caution à distance, états des lieux numériques, contrats et planning au même endroit.",
    badge: ["SaaS", "Logiciel métier"],
    src: "/projets/rollie-software.avif",
    link: "https://pro.getrollie.app/",
    testimonial: emeraudeTestimonial,
  },
  {
    title: "Zen Lounge",
    subtitle:
      "Site web complet pour un salon de bien-être. Espace client, paiement en ligne et réservation intégrée pour une expérience fluide et professionnelle. Dashboard pour la gestion des réservations.",
    badge: ["Site Web Avancé", "Dashboard / CRM"],
    src: "/projets/zenlounge.webp",
    link: "https://zenlounge-guyane.fr",
    testimonial: findTestimonial("Zen Lounge"),
  },
  {
    title: "Hippô'Kom",
    subtitle:
      "Site vitrine élégant et moderne pour une agence de communication. Design inspiré de l'univers marin, pensé pour refléter leur identité et attirer de nouveaux clients.",
    badge: ["Site Vitrine", "Blog"],
    src: "/projets/hippokom.webp",
    link: "https://hippokomagency.fr",
    testimonial: findTestimonial("Hippô'Kom"),
  },
  {
    title: "Get Easy",
    subtitle:
      "Système de réservation complet pour agence de location de voitures avec back-office de gestion et tableau de bord.",
    badge: ["App Web", "Dashboard / CRM"],
    src: "/projets/get-easy.avif",
    link: "https://geteasylocation.com/",
    testimonial: emeraudeTestimonial,
  },
  {
    title: "Eden Glass",
    subtitle:
      "Site vitrine moderne pour un expert en vitrage automobile spécialisé dans le remplacement de pare-brise à Montpellier.",
    badge: ["Site Vitrine", "Blog"],
    src: "/projets/eden-glass.webp",
    link: "https://edenglass.fr/",
    testimonial: findTestimonial("Eden Glass"),
  },
  {
    title: "TCS Plomberie",
    subtitle:
      "Site vitrine professionnel pour un plombier-chauffagiste avec prise de rendez-vous en ligne et présentation des services.",
    badge: ["Site Vitrine", "Blog"],
    src: "/projets/tcs-plomberie.webp",
    link: "https://tcs-plomberie-montpellier.fr/",
    testimonial: findTestimonial("TCS Plomberie"),
  },
  // {
  //   title: "ChefKit",
  //   subtitle:
  //     "Application SaaS pour restaurateurs et traiteurs. Gestion des menus, réservations : une solution clé en main pour digitaliser leur activité.",
  //   badge: ["SaaS", "App Web", "Landing page"],
  //   src: "/projets/chefkit.webp",
  //   testimonial: findTestimonial("Restaurateur"),
  // },
];

// Visuels affichés dans les bandes défilantes (hero, footer, villes).
// Uniquement décoratif : titre + image, sans fiche projet ni avis client.
export const marqueeProjects: { title: string; src: string }[] = [
  ...portfolioProjects.map((p) => ({ title: p.title, src: p.src })),
  { title: "Amazonia Investing", src: "/projets/investing.webp" },
];
