"use client";

import Image from "next/image";
import { cn, difference, pickRandom } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface LogosSectionProps {
  title?: string;
  className?: string;
}

const ALL_LOGOS = [
  { src: "academy.svg", alt: "Amazonia Academy" },
  { src: "geteasy.svg", alt: "Get Easy Location" },
  { src: "hippokom.svg", alt: "Hippo'kom Agency" },
  { src: "investing.svg", alt: "Amazonian Investing" },
  { src: "pygmalion.svg", alt: "Pygmalion Conseil" },
  { src: "zenlounge.svg", alt: "Zen Lounge" },
];

export function LogosSection({
  title = "Ils nous font confiance",
  className,
}: LogosSectionProps) {
  // 👇 Etat initial DÉTERMINISTE (pas de random en SSR)
  const [visible, setVisible] = useState(() => ALL_LOGOS.slice(0, 4));
  const cycleRef = useRef(0);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    // Démarre la rotation SEULEMENT après le mount (client)
    const rotate = () => {
      setVisible((prev) => {
        const hidden = difference(ALL_LOGOS, prev, (x) => x.src); // 2 non affichés
        const keep = pickRandom(prev, Math.max(0, 4 - hidden.length)); // 2 choisis dans les visibles
        // recomposer (inclut toujours les hidden)
        let next = [...hidden, ...keep];
        // léger shuffle
        next = pickRandom(next, next.length);
        cycleRef.current += 1;
        return next;
      });
    };

    // 1er changement après 5s, puis toutes les 5s
    const id = setInterval(rotate, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className={cn("w-full", className)}
      aria-label={title || "Logos de nos partenaires"}
    >
      <div className="mx-auto max-w-7xl">
        {title ? (
          <h2 className="sr-only">{title}</h2>
        ) : (
          <h2 className="sr-only">Logos de nos partenaires</h2>
        )}

        {/* Optionnel : éviter toute animation côté SSR */}
        {/* <div suppressHydrationWarning> */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((item, index) => (
              <motion.div
                // key stable par cycle pour forcer enter/exit après mount, mais constant au 1er SSR
                key={`${item.src}-${cycleRef.current}`}
                initial={{ opacity: 0, scale: 0.95, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                  delay: 0.1 * index,
                }}
                className="bg-white rounded-2xl p-4 sm:p-5 flex items-center justify-center h-[100px]"
                role="img"
                aria-label={item.alt}
                layout
              >
                <Image
                  src={`/logos/${item.src}`}
                  alt={item.alt}
                  width={160}
                  height={80}
                  className="w-[100px] sm:w-[140px] h-auto"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* </div> */}
      </div>
    </section>
  );
}

export default LogosSection;
