import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import CallButton from "@/components/call-button";

import type { Service } from "@/data/services";

export function ServiceHero({ service }: { service: Service }) {
  return (
    <div className="text-center">
      <Badge align="center">
        {service.category === "apps" ? "Applications Web" : "Sites Web"}
      </Badge>
      <Typography
        as="h1"
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
      />
      <div className="flex justify-center">
        <CallButton />
      </div>
    </div>
  );
}
