import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import { stackTechs } from "@/data/stack";

export function ServiceStack() {
  const techs = Object.values(stackTechs);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Badge align="center">Stack technique</Badge>
        <Typography
          title="Les technologies qu'on utilise"
          subtitle="Stack moderne, éprouvée et alignée avec les standards 2026."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 mt-8">
          {techs.map((tech) => {
            const inner = (
              <div className="aspect-square flex flex-col items-center justify-center gap-3 bg-white rounded-3xl p-4 shadow-[0_4px_20px_0] shadow-gray-lighter h-full transition-transform hover:scale-[1.02]">
                <Image
                  src={tech.logo}
                  alt={`Logo ${tech.name}`}
                  width={48}
                  height={48}
                  className="size-10 sm:size-12 object-contain"
                />
                <span className="font-semibold text-primary-dark text-sm sm:text-base text-center">
                  {tech.name}
                </span>
              </div>
            );
            return tech.href ? (
              <Link
                key={tech.id}
                href={tech.href}
                className="block group cursor-pointer"
                aria-label={`En savoir plus sur ${tech.name}`}
              >
                {inner}
              </Link>
            ) : (
              <div key={tech.id}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceStack;
