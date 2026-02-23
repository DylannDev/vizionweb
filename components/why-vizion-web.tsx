import Typography from "./typography";
import Badge from "./ui/badge";
import FadeIn from "./ui/fade-in";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import IconIllustration from "./ui/icon-illustration";
import {
  PiLightningFill,
  PiWrenchFill,
  PiHandshakeFill,
} from "react-icons/pi";

const pillars = [
  {
    icon: PiLightningFill,
    title: "Des projets livrés en semaines, pas en mois",
    description:
      "Un MVP en 4 à 6 semaines. Un site vitrine en 3 semaines. Nous avançons vite parce que le process est rodé : cadrage serré, validations fréquentes, zéro aller-retour inutile.",
  },
  {
    icon: PiWrenchFill,
    title: "Du code solide, pas un assemblage de plugins",
    description:
      "Connexion paiement Stripe, espace client sécurisé, gestion multi-utilisateurs, branchement à vos outils existants. Tout est codé en dur pour tenir la charge et évoluer avec votre activité.",
  },
  {
    icon: PiHandshakeFill,
    title: "On comprend votre métier, pas juste votre cahier des charges",
    description:
      "Avant de coder, on creuse. Qui sont vos utilisateurs ? Quel problème vous réglez ? Résultat : vous recevez un produit pensé pour votre marché, pas un livrable technique déconnecté du terrain.",
  },
];

export function WhyVizionWeb() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Badge align="center">Pourquoi nous</Badge>

        <Typography
          title="Pourquoi choisir Vizion Web pour votre projet ?"
          subtitle="Pas d'équipe pléthorique, pas de process à rallonge. Un interlocuteur unique qui maîtrise le design, le code et la stratégie produit."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => (
            <FadeIn
              key={pillar.title}
              delay={0.2 * (i + 1)}
              className="h-full flex"
            >
              <Card radius="2xl" className="h-full">
                <CardHeader className="space-y-8">
                  <IconIllustration icon={pillar.icon} />
                  <CardTitle className="text-primary-dark">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>{pillar.description}</CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyVizionWeb;
