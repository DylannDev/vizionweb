
import Typography from "@/components/typography";
import IconIllustration from "@/components/ui/icon-illustration";
import type { Service } from "@/data/services";

export function ServiceProblemSolution({ service }: { service: Service }) {
  return (
    <>
      {/* Problem */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Typography
              title={service.problemTitle}
              subtitle={service.problemDescription}
              as="h2"
              titleSize="3xl"
              subtitleMaxWidth="max-w-5xl"
            />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {service.problemPoints.map((point, i) => (
                <div key={point.text} className="flex items-center gap-4 bg-white rounded-4xl p-8 h-full">
                  <IconIllustration
                    icon={point.icon}
                    variant="red"
                    size={42}
                    radius="rounded-xl"
                  />
                  <span className="text-gray-dark text-lg">{point.text}</span>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background from-0% to-white to-20%">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Typography
              title={service.solutionTitle}
              subtitle={service.solutionDescription}
              as="h2"
              titleSize="3xl"
              subtitleMaxWidth="max-w-5xl"
            />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {service.solutionPoints.map((point, i) => (
                <div key={point.text} className="flex items-center gap-4 bg-background rounded-4xl p-8 h-full">
                  <IconIllustration
                    icon={point.icon}
                    variant="blue"
                    size={42}
                    radius="rounded-xl"
                  />
                  <span className="text-gray-dark text-lg">{point.text}</span>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
