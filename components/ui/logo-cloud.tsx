import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",
        className
      )}
    >
      <Marquee
        vertical={false}
        reverse
        pauseOnHover
        className="[--duration:60s] [--gap:2.5rem]"
      >
        {logos.map((logo) => (
          <Image
            alt={logo.alt}
            className="pointer-events-none max-h-5 max-w-[100px] md:max-h-6 md:max-w-[120px] w-auto h-auto select-none object-contain"
            height={24}
            width={120}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
          />
        ))}
      </Marquee>
    </div>
  );
}
