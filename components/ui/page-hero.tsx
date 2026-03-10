import { cn } from "@/lib/utils";

interface PageHeroProps {
  children: React.ReactNode;
  className?: string;
  bg?: "background" | "white";
  outerPadding?: string;
}

export function PageHero({
  children,
  className,
  bg = "background",
  outerPadding = "pt-2 sm:pt-4 pb-10 sm:pb-20 px-2 sm:px-4",
}: PageHeroProps) {
  return (
    <section className={bg === "background" ? "bg-background" : "bg-white"}>
      <div className={cn(outerPadding, "max-w-[1536px] mx-auto w-full")}>
        <div
          className={cn(
            "relative bg-white w-full rounded-3xl sm:rounded-[36px] overflow-hidden px-5",
            className
          )}
        >
          <div className="relative z-10 pt-36 pb-10 sm:pb-20">{children}</div>
        </div>
      </div>
    </section>
  );
}
