import Link from "next/link";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] md:min-h-screen flex items-center justify-center px-4">
      <AnimatedGridPattern
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] -inset-x-2 inset-y-[-60%] h-[200%] bg-white"
        )}
      />
      <div className="relative z-10 text-center max-w-xl mx-auto">
        <Badge variant="white" align="center" className="mb-6">
          Oups…
        </Badge>
        <h1 className="text-7xl sm:text-8xl font-semibold text-primary-dark">
          404
        </h1>
        <h2 className="mt-3 text-lg sm:text-2xl font-semibold text-secondary-dark">
          Page introuvable
        </h2>
        <p className="mt-4 text-sm text-gray-dark text-balance">
          On dirait que vous vous êtes égaré. La page que vous recherchez
          n’existe pas ou a été déplacée.
        </p>
        <div className="mt-8">
          <Button size="md" variant="dark" asChild>
            <Link href="/">Retourner à l'accueil</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
