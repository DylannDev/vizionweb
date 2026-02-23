import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import CallButton from "@/components/call-button";
import FadeIn from "@/components/ui/fade-in";
import type { Service } from "@/data/services";

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <Badge align="center">
          {service.category === "apps"
            ? "Applications Web"
            : "Sites Web"}
        </Badge>
        <Typography
          as="h1"
          title={service.heroTitle}
          subtitle={service.heroSubtitle}
        />
        <FadeIn delay={0.3} className="flex justify-center">
          <CallButton />
        </FadeIn>
      </div>
    </section>
  );
}
