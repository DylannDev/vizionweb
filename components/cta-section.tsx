import Typography from "@/components/typography";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import CallButton from "./call-button";

export function CtaSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white w-full overflow-hidden">
      <AnimatedGridPattern
        maxOpacity={0.25}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-50%] h-[200%]"
        )}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <Typography
          align="center"
          title={
            <>
              Ensemble, créons la solution <br /> digitale dont vous rêvez
            </>
          }
          subtitle="Expliquez-nous votre projet lors d'un appel de 30 minutes. Nous vous donnons un retour clair, un devis transparent et voyons comment transformer vos idées en résultats concrets."
        />
        <div className="flex items-center justify-center -mt-4">
          <CallButton size="md" />
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
