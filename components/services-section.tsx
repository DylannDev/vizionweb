import Typography from "./typography";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  PiMegaphoneFill,
  PiMagnifyingGlassFill,
  PiTextTFill,
  PiLinkFill,
  PiCodeFill,
  PiLayoutFill,
  PiClipboardTextFill,
} from "react-icons/pi";
import IconIllustration from "./ui/icon-illustration";
import Badge from "./ui/badge";

export function ServicesSection() {
  const services = [
    {
      icon: PiLayoutFill,
      title: "UI/UX Design",
      desc: "Nous créons des designs modernes et intuitifs qui retiennent l'attention. Chaque parcours est pensé pour la simplicité, la lisibilité et/ou la conversion.",
    },
    {
      icon: PiCodeFill,
      title: "Développement Web",
      desc: "Un code sur-mesure, rapide et robuste. Nous construisons des sites et applications web performants, évolutifs et sécurisés.",
    },
    {
      icon: PiMegaphoneFill,
      title: "Marketing",
      desc: "Votre site n’est pas un simple outil digital, c’est un levier de croissance. Nous définissons la stratégie marketing dès la conception pour booster vos conversions, ventes et prises de rendez-vous.",
    },
    {
      icon: PiMagnifyingGlassFill,
      title: "Optimisation SEO",
      desc: "Chaque projet est optimisé techniquement et structurellement pour être compris par Google et gagner en visibilité, dès le lancement..",
    },
    {
      icon: PiTextTFill,
      title: "Copywriting",
      desc: "Un message clair et impactant : titres accrocheurs, micro-textes persuasifs et appels à l’action précis qui transforment vos visiteurs en clients.",
    },
    {
      icon: PiClipboardTextFill,
      title: "Gestion de projet",
      desc: "Un projet web ne se résume pas au code. Nous cadrons les étapes, respectons les délais et assurons une communication fluide pour avancer avec sérénité.",
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Badge align="center">Services</Badge>
        <Typography
          title={
            <>
              Nous développons des <br />
              solutions web sur-mesure
            </>
          }
          subtitle="On combine stratégie, design et développement sur-mesure, pour créer des sites et applications au service de vos objectifs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="group hover:ring-6 ring-gray-lighter transition-all duration-300"
              radius="2xl"
            >
              <CardHeader className="space-y-8">
                <IconIllustration icon={Icon} />
                <CardTitle className="text-gray-light group-hover:text-primary-dark transition-colors duration-300">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>{desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
