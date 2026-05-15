import type { CitySEO } from "@/data/cities";
import Badge from "@/components/ui/badge";

interface CityIntroProps {
  city: CitySEO;
}

function getIntroContent(city: CitySEO) {
  if (city.introContent) {
    return {
      badge:
        city.introContent.badge ??
        `Agence web ${city.preposition} ${city.name}`,
      title: city.introContent.title,
      paragraphs: city.introContent.paragraphs,
    };
  }
  return {
    badge: `Agence web ${city.preposition} ${city.name}`,
    title: "SaaS, MVP et apps métier livrés en 3 semaines",
    paragraphs: [
      {
        title: "Le contexte local",
        content: city.localAccent.introMention,
      },
    ],
  };
}

export function CityIntro({ city }: CityIntroProps) {
  const intro = getIntroContent(city);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background from-0% to-white to-10%">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header centré */}
        <div className="text-center mb-10 md:mb-14">
          <Badge align="center">{intro.badge}</Badge>
          <h2 className="text-[22px] sm:text-[28px] md:text-5xl font-semibold text-primary-dark leading-tight mt-4">
            {intro.title}
          </h2>
        </div>

        {/* Liste divisée — texte sur toute la largeur */}
        <div className="divide-y divide-gray-lighter">
          {intro.paragraphs.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 md:gap-8 py-8 lg:py-10 first:pt-0"
            >
              <h3 className="font-semibold text-balance text-xl lg:text-2xl text-primary-dark flex items-baseline gap-3">
                <span className="text-primary-blue font-bold shrink-0">
                  0{i + 1}
                </span>
                <span>{p.title}</span>
              </h3>
              <div className="text-gray-dark leading-7">
                <p>{p.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CityIntro;
