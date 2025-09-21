import Typography from "@/components/typography";
import PricingCard from "./ui/pricing-card";
import { PiCheckBold } from "react-icons/pi";
import Button from "./ui/button";
import { RiWhatsappLine } from "react-icons/ri";
import Badge from "./ui/badge";

export default function PricingSection() {
  const plans = [
    {
      name: "Vizion Start",
      price: "3 500 €",
      description:
        "Landing page / site vitrine (3–5 pages) optimisé et prêt à convertir vos visiteurs en clients.",
      features: [
        "UI/UX Design sur-mesure Figma",
        "Copywriting sur-mesure",
        "Optimisation conversion (CRO)",
        "Optimisation technique (vitesse, SEO)",
        "Révisions illimitées",
        "Livraison en 2-3 semaines",
        "Support 30 jours",
      ],
      highlight: false,
      icon: "/bars-1.svg",
    },
    {
      name: "Vizion Pro",
      price: "5 000 € - 15 000 €+",
      description:
        "Site web complet avec fonctionnalités sur-mesure (5–10+ pages), conçu pour développer votre activité.",
      features: [
        "Fonctionnalités sur-mesure",
        "UI/UX Design sur-mesure Figma",
        "Copywriting sur-mesure",
        "Optimisation technique (vitesse, SEO)",
        "Code sur-mesure (React / Next.js)",
        "Architecture claire pour évoluer",
        "Révisions illimitées",
        "Livraison en 3–4 semaines",
        "Support 30 jours",
      ],
      highlight: true,
      icon: "/bars-2.svg",
    },
    {
      name: "Vizion Enterprise",
      price: "10 000 € - 30 000 €+",
      description:
        "SaaS / Application Web, pensé pour vos utilisateurs et booster la croissance de votre business.",
      features: [
        "Roadmap par étapes (MVP → V2 → V3)",
        "Code sur-mesure (React / Next.js)",
        "Interface claire & efficace",
        "Gestion utilisateurs & accès",
        "Paiements & abonnements",
        "Tests, optimisation et suivi renforcé",
        "Déploiement (Vercel)",
        "Livraison en 4-8 semaines",
        "Support renforcé",
      ],
      highlight: false,
      icon: "/bars-3.svg",
    },
  ];

  const included = [
    "Propriété totale du code et des accès",
    "Optimisations techniques dès le lancement",
    "Formation rapide pour être autonome",
    "Support 30 jours inclus après mise en ligne",
  ];

  return (
    <section id="offres" className="py-16 md:py-24 bg-primary-dark">
      <div className="mx-auto max-w-7xl px-4">
        <Badge variant="dark" align="center">
          Offres
        </Badge>
        <Typography
          titleColor="text-white"
          subtitleColor="text-gray-light"
          align="center"
          title="Des offres claires et adaptées à votre projet"
          subtitle="Que vous ayez besoin d’une landing page, d’un site complet ou d’une application sur-mesure, nos formules s’adaptent à vos objectifs et à votre budget."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-16">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Included in all offers */}
        <div className="mt-10 rounded-3xl flex flex-col w-full">
          <h4 className="text-white text-xl font-semibold text-center mb-4">
            Inclus dans toutes les offres
          </h4>
          <div className="text-gray-light text-sm">
            <ul className="mt-4 text-gray-light flex justify-between items-center gap-2 w-full">
              {included.map((it) => (
                <li key={it} className="flex items-center gap-1">
                  <PiCheckBold className="size-3 text-primary-green" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
