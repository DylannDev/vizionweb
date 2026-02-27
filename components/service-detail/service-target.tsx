import FadeIn from "@/components/ui/fade-in";
import Typography from "@/components/typography";
import Badge from "@/components/ui/badge";
import IconIllustration from "@/components/ui/icon-illustration";
import type { Service } from "@/data/services";

export function ServiceTarget({ service }: { service: Service }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Badge align="center">Pour qui ?</Badge>
        <Typography
          title="Nos clients types"
          subtitle="Un accompagnement pensé pour répondre à ces situations précises."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {service.targetProfiles.map((profile, i) => (
            <FadeIn
              key={profile.title}
              delay={0.2 * (i + 1)}
              className="h-full flex w-full"
            >
              <div className="h-full rounded-[40px] shadow-[0_4px_20px_0] shadow-gray-lighter bg-white p-3 w-full">
                <div className="h-full rounded-[32px] p-6 flex flex-col gap-4">
                  <IconIllustration
                    icon={profile.icon}
                    variant="blue"
                    size={42}
                    radius="rounded-xl"
                  />
                  <h3 className="font-semibold text-primary-dark text-xl">
                    {profile.title}
                  </h3>
                  <p className="text-lg text-gray-dark">
                    {profile.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
