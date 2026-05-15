import Badge from "@/components/ui/badge";
import Typography from "@/components/typography";
import IconIllustration from "@/components/ui/icon-illustration";
import CallButton from "@/components/call-button";
import type { Service } from "@/data/services";

export function ServiceProblemSolution({ service }: { service: Service }) {
  return (
    <>
      {/* Problem */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background from-0% to-white to-20%">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-24 text-center lg:text-left">
              <Badge variant="red" className="mb-4 mx-auto lg:mx-0">
                Le problème
              </Badge>
              <Typography
                title={service.problemTitle}
                subtitle={service.problemDescription}
                as="h2"
                align="left"
                titleSize="4xl"
                titleMaxWidth="max-w-none"
                subtitleMaxWidth="max-w-none"
                noMargin
                className="text-center lg:text-left"
              />
              <div className="mt-6 hidden lg:block">
                <CallButton size="md" variant="black" />
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 gap-4">
              {service.problemPoints.map((point) => (
                <div
                  key={point.text}
                  className="flex items-center gap-4 bg-red-50 rounded-4xl p-6 h-full"
                >
                  <IconIllustration
                    icon={point.icon}
                    variant="red"
                    size={42}
                    radius="rounded-xl"
                  />
                  <span className="text-gray-dark text-base sm:text-lg">
                    {point.text}
                  </span>
                </div>
              ))}
              <div className="mt-2 lg:hidden">
                <CallButton size="md" variant="black" className="w-full justify-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2 lg:order-last lg:sticky lg:top-24 text-center lg:text-left">
              <Badge variant="blue" className="mb-4 mx-auto lg:mx-0">
                La solution
              </Badge>
              <Typography
                title={service.solutionTitle}
                subtitle={service.solutionDescription}
                as="h2"
                align="left"
                titleSize="4xl"
                titleMaxWidth="max-w-none"
                subtitleMaxWidth="max-w-none"
                noMargin
                className="text-center lg:text-left"
              />
              <div className="mt-6 hidden lg:block">
                <CallButton size="md" variant="black" />
              </div>
            </div>
            <div className="lg:col-span-2 lg:order-first grid grid-cols-1 gap-4">
              {service.solutionPoints.map((point) => (
                <div
                  key={point.text}
                  className="flex items-center gap-4 bg-primary-blue/5 rounded-4xl p-6 h-full"
                >
                  <IconIllustration
                    icon={point.icon}
                    variant="blue"
                    size={42}
                    radius="rounded-xl"
                  />
                  <span className="text-gray-dark text-base sm:text-lg">
                    {point.text}
                  </span>
                </div>
              ))}
              <div className="mt-2 lg:hidden">
                <CallButton size="md" variant="black" className="w-full justify-center" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
