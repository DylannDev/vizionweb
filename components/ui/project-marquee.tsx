import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

type ProjectMarqueeProps = React.ComponentProps<"div"> & {
  projects: { title: string; src: string }[];
  reverse?: boolean;
};

export function ProjectMarquee({
  className,
  projects,
  reverse = false,
  ...props
}: ProjectMarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <Marquee
        vertical={false}
        reverse={reverse}
        pauseOnHover
        className="py-6 [--duration:60s] [--gap:1rem]"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className={cn(
              "bg-white p-2 shrink-0 rounded-4xl",
              "shadow-[0_4px_20px_0] shadow-gray-lighter"
            )}
          >
            <Image
              src={project.src}
              alt={project.title}
              width={355}
              height={246}
              sizes="(min-width: 640px) 355px, 220px"
              className="h-[140px] sm:h-[220px] w-auto object-cover pointer-events-none select-none rounded-3xl"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
