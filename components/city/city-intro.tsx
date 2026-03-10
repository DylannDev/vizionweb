import Image from "next/image";
import type { CitySEO } from "@/data/cities";
import Badge from "@/components/ui/badge";
import { getBlurDataURL } from "@/lib/blur";


interface CityIntroProps {
  city: CitySEO;
}

export function CityIntro({ city }: CityIntroProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background from-0% to-white to-10%">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texte */}
          <div>
              <Badge align="left">
                Agence web {city.preposition} {city.name}
              </Badge>
              <h2 className="text-[22px] sm:text-[28px] font-semibold text-primary-dark leading-tight mt-4 mb-6">
                {city.localIntro.title}
              </h2>
            <div className="space-y-4 text-gray-dark text-base sm:text-lg">
              {city.localIntro.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Image */}
            <div className="relative aspect-square sm:aspect-video lg:aspect-[3/4] overflow-hidden rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter">
              <Image
                src={city.images.intro.src}
                alt={city.images.intro.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL={getBlurDataURL(city.images.intro.src)}
                className="object-cover object-center p-3 bg-white rounded-[40px]"
              />
            </div>
        </div>
      </div>
    </section>
  );
}

export default CityIntro;
