
import Typography from "@/components/typography";
import Badge from "@/components/ui/badge";
import { PiCheckBold } from "react-icons/pi";
import type { Service } from "@/data/services";

export function ServiceIncluded({ service }: { service: Service }) {
  return (
    <section className="py-16 md:py-24 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Badge variant="blue" align="center">
          Ce qui est inclus
        </Badge>
        <Typography
          titleColor="text-white"
          subtitleColor="text-gray-light"
          title="Tout ce dont vous avez besoin, rien de superflu"
          subtitle={`Livré en ${service.deliveryTime}`}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {service.included.map((item, i) => (
              <div key={item.title} className="bg-secondary-dark rounded-4xl p-6 h-full">
                <div className="flex items-start gap-3">
                  <PiCheckBold className="size-5 text-primary-blue shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold text-xl">
                      {item.title}
                    </h3>
                    <p className="text-gray-light text-lg mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
