import Image from "next/image";
import { getBlurDataURL } from "@/lib/blur";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialCard = ({ text, image, name, role }: Testimonial) => {
  return (
    <div className="p-2 rounded-4xl bg-background w-full sm:max-w-xs">
      <div className="bg-white p-4 rounded-3xl flex items-center gap-2 mb-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full shrink-0">
          <Image
            src={`/clients/${image}`}
            alt={`${name} — ${role}`}
            fill
            sizes="40px"
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
        </div>
      </div>
      <p className="p-4 text-base font-medium text-primary-dark">"{text}"</p>
    </div>
  );
};
