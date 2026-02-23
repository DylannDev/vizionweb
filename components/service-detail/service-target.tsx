import FadeIn from "@/components/ui/fade-in";
import Typography from "@/components/typography";
import Badge from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Service } from "@/data/services";

export function ServiceTarget({ service }: { service: Service }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Badge align="center">Pour qui ?</Badge>
        <Typography
          title="Ce service est fait pour vous si..."
          subtitle="Voici les profils de clients avec qui nous travaillons le plus souvent sur ce type de projet."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {service.targetProfiles.map((profile, i) => (
            <FadeIn key={profile.title} delay={0.2 * (i + 1)} className="h-full flex">
              <Card radius="2xl" className="h-full">
                <CardHeader>
                  <CardTitle className="text-primary-dark">
                    {profile.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{profile.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
