import Link from "next/link";
import Typography from "./typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Badge from "./ui/badge";
import Button from "./ui/button";
import Card from "./ui/card";
import { RiWhatsappLine } from "react-icons/ri";
import WhatsappButton from "./ui/whatsapp-button";

export function FAQ() {
  const faqs = [
    {
      q: "Quel est le délai de livraison d’un projet ?",
      a: `
      <p>Nos délais varient selon la complexité du projet :</p>
      <ul>
        <li><strong>Landing page / site vitrine :</strong> 1 à 3 semaines</li>
        <li><strong>Site web avec fonctionnalités :</strong> 2 à 4 semaines</li>
        <li><strong>SaaS / Application web sur-mesure :</strong> 4 à 8 semaines</li>
      </ul>
      <p>Pourquoi ces délais ? Parce que chaque projet suit un <strong>processus clair en 4 étapes</strong> : cadrage, design, développement, lancement + suivi. Cela garantit un résultat professionnel.</p>
      `,
    },
    {
      q: "Combien coûte un projet chez Vizion Web ?",
      a: `
      <p>Nos tarifs sont réalistes, ajustés à la complexité et à la valeur générée :</p>
      <ul>
        <li><strong>Vizion Start</strong> – à partir de 3 500 €
            <br />Landing Pages ou Sites vitrines (3 - 5 pages).</li>
        <li><strong>Vizion Pro</strong> – de 5 000 € à +15 000 €
            <br />Sites web avec fonctionnalités avancées : prise de RDV, paiement, espace client, etc (5 - 10 pages).</li>
        <li><strong>Vizion Enterprise</strong> – 10 000 € à +30 000 €
            <br />Applications web (SaaS, dashboards, intranet…), découpables en MVP évolutif.</li>
      </ul>
      <p><strong>Pourquoi ces tarifs ?</strong> Parce que chaque projet Vizion Web inclut :</p>
      <ul>
        <li>UI/UX Design réfléchi, optimisé pour les conversions</li>
        <li>Copywriting adapté à votre positionnement</li>
        <li>Développement 100% sur-mesure (React / Next.js)</li>
        <li>Optimisations techniques SEO & performance dès la livraison</li>
        <li>Formation rapide + support 30 jours après mise en ligne</li>
      </ul>
      `,
    },

    {
      q: "Puis-je demander des modifications ?",
      a: "Oui, les modifications sont illimitées jusqu’à la livraison finale du projet. On ne s’arrête pas tant que vous n’êtes pas satisfait.",
    },
    {
      q: "Qui possède le site / l’application une fois livré ?",
      a: "Vous. Le code, les accès et les fichiers vous appartiennent à 100%. Pas de dépendance, pas d’abonnement caché.",
    },
    {
      q: "Y a-t-il un support après lancement ?",
      a: "Oui, un suivi de 30 jours est inclus après la mise en ligne pour faire des ajustements si nécessaire. Après ce délai, nous proposons des forfaits de maintenance. La plupart de nos clients reviennent pour des améliorations ou pour développer de nouvelles fonctionnalités",
    },
    {
      q: "Comment se déroule un projet chez Vizion Web ?",
      a: `
      <p>Notre méthode en 4 étapes, simple et transparente :</p>
      <ol>
        <li>
          <strong>Découverte & cadrage (1–2 jours)</strong>
          <ul>
            <li>Appel de 30 min pour clarifier objectifs et priorités</li>
            <li>Audit express de l’existant et benchmark concurrentiel ciblé</li>
            <li>Définition du périmètre, des livrables et du planning</li>
          </ul>
        </li>
        <li>
          <strong>Prototypage & design (1–2 semaines)</strong>
          <ul>
            <li>Wireframes et architecture des pages/écrans</li>
            <li>Maquettes Figma haute fidélité + micro-copy</li>
            <li><em>Modifications illimitées</em> jusqu’à validation</li>
          </ul>
        </li>
        <li>
          <strong>Développement & intégrations (2–4 semaines pour un site / 4–8 semaines pour une app)</strong>
          <ul>
            <li>Implémentation en code sur-mesure (React/Next.js/TypeScript)</li>
            <li>Fonctionnalités clés : formulaires, paiement, prise de RDV, espace client, CRM</li>
            <li>Responsive, accessibilité et tests de qualité continus</li>
          </ul>
        </li>
        <li>
          <strong>Lancement & optimisation (2–3 jours)</strong>
          <ul>
            <li>Check-list de mise en ligne : performance, sécurité, Core Web Vitals</li>
            <li>SEO on-site de base (balises, structure, tracking)</li>
            <li>Formation rapide + <strong>suivi 30 jours</strong> avec correctifs inclus</li>
          </ul>
        </li>
      </ol>
      <p><strong>Vous êtes impliqué à chaque étape</strong>, avec des points de validation clairs. <strong>Propriété du code</strong> garantie.</p>
      `,
    },
    {
      q: "Quels outils utilisez-vous ?",
      a: "Chez Vizion Web, nous créons du code sur-mesure avec des technologies modernes comme React et Next.js (les mêmes utilisées par des entreprises comme Netflix, Uber ou Airbnb). Concrètement, cela signifie un site ou une application plus rapide, plus sécurisé, totalement adapté à vos besoins, et qui n’est pas limité par les contraintes de CMS comme WordPress ou Webflow.",
    },
    {
      q: "Le copywriting est-il inclus dans l’offre ?",
      a: "Oui il est inclus car un bon site ne repose pas que sur le design et la technique : le message compte autant. Nous rédigeons vos textes en fonction de votre positionnement, de vos offres et de votre ton de marque, pour maximiser l’impact et les conversions.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className=" mx-auto max-w-6xl px-4">
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
              <AccordionItem key={f.q} value={`faq-${idx}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>
                  <div
                    dangerouslySetInnerHTML={{ __html: f.a }}
                    className="faq-answer"
                  ></div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card
            radius="xl"
            className="p-8 max-w-2xl w-full relative overflow-hidden"
          >
            <div className="space-y-3 text-center z-10 relative">
              <h3 className="text-xl font-semibold text-primary-dark">
                Vous avez encore des questions ?
              </h3>
              <p className="text-gray-dark text-base leading-relaxed">
                Discutons-en. Que vous soyez au stade de l’idée ou prêt à
                <br />
                lancer votre projet, nous sommes là pour vous accompagner.
              </p>
              <WhatsappButton />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
