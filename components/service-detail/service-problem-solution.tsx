import FadeIn from "@/components/ui/fade-in";
import { PiXCircleFill, PiCheckCircleFill } from "react-icons/pi";
import type { Service } from "@/data/services";

export function ServiceProblemSolution({ service }: { service: Service }) {
  return (
    <>
      {/* Problem */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="text-center">{service.problemTitle}</h2>
              <p className="text-gray-dark text-center mt-4">
                {service.problemDescription}
              </p>
            </FadeIn>
            <ul className="mt-8 space-y-4">
              {service.problemPoints.map((point, i) => (
                <FadeIn key={point} delay={0.1 * (i + 1)}>
                  <li className="flex items-start gap-3 bg-white rounded-2xl p-4">
                    <PiXCircleFill className="size-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-gray-dark">{point}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <h2 className="text-center">{service.solutionTitle}</h2>
              <p className="text-gray-dark text-center mt-4">
                {service.solutionDescription}
              </p>
            </FadeIn>
            <ul className="mt-8 space-y-4">
              {service.solutionPoints.map((point, i) => (
                <FadeIn key={point} delay={0.1 * (i + 1)}>
                  <li className="flex items-start gap-3 bg-background rounded-2xl p-4">
                    <PiCheckCircleFill className="size-5 text-primary-blue shrink-0 mt-0.5" />
                    <span className="text-gray-dark">{point}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
