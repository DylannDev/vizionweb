import Image from "next/image";
import { getBlurDataURL } from "@/lib/blur";
import { GoStarFill } from "react-icons/go";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  rating: number;
}

export const TestimonialCard = ({
  text,
  image,
  name,
  role,
  rating,
}: Testimonial) => {
  return (
    <div className="p-2 rounded-4xl bg-background w-full sm:max-w-xs">
      <div className="bg-white p-2 rounded-3xl flex items-center gap-2 mb-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-2xl shrink-0">
          <Image
            src={`/clients/${image}`}
            alt={`${name} — ${role}`}
            fill
            sizes="60px"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            placeholder="blur"
            blurDataURL={getBlurDataURL(`/clients/${image}`)}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5">{name}</div>
          <div className="leading-5 tracking-tight text-secondary-dark opacity-80 text-sm">
            {role}
          </div>
          <div className="flex items-center gap-0.5 mb-1">
            {Array.from({ length: rating }).map((_, i) => (
              <GoStarFill key={i} className="size-3.5 text-amber-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="px-4 pb-4 text-base font-medium text-primary-dark">
        "{text}"
      </p>
    </div>
  );
};
