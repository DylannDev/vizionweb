import FadeIn from "@/components/ui/fade-in";
import Typography from "@/components/typography";
import Badge from "@/components/ui/badge";
import type { Service } from "@/data/services";

export function ServiceProcess({ service }: { service: Service }) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Badge align="center">Process</Badge>
        <Typography
          title="Comment se déroule votre projet"
          subtitle="Chaque étape est cadrée, avec des points de validation pour que vous gardiez le contrôle."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {service.process.map((step, i) => (
            <FadeIn key={step.title} delay={0.2 * (i + 1)}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center size-10 rounded-full bg-primary-blue text-white font-semibold text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-primary-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-dark text-sm">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
