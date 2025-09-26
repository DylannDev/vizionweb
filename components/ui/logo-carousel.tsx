"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
// Define the structure for our logo objects
interface Logo {
  id: number;
  src: string;
  alt: string;
  className?: string;
}
// Utility function to randomly shuffle an array
// This is used to mix up the order of logos for a more dynamic display
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
// Utility function to distribute logos across multiple columns
// This ensures each column has a balanced number of logos
const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos);
  const columns: Logo[][] = Array.from({ length: columnCount }, () => []);
  // Distribute logos evenly across columns
  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });
  // Ensure all columns have the same number of logos by filling shorter columns
  const maxLength = Math.max(...columns.map((col) => col.length));
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });
  return columns;
};
// Props for the LogoColumn component
interface LogoColumnProps {
  logos: Logo[];
  index: number;
  currentTime: number;
}
// LogoColumn component: Displays a single column of animated logos
const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 5000; // Time each logo is displayed (in milliseconds)
    const columnDelay = index * 200; // Stagger the start of each column's animation
    // Calculate which logo should be displayed based on the current time
    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length);
    const currentIndex = Math.floor(adjustedTime / cycleInterval);
    // Memoize the current logo to prevent unnecessary re-renders
    const currentLogo = useMemo(
      () => logos[currentIndex],
      [logos, currentIndex]
    );
    return (
      // Framer Motion component for the column container
      <motion.div
        className="w-28 h-14 md:w-48 md:h-24 overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }} // Start invisible and below final position
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and final position
        transition={{
          delay: index * 0.1, // Stagger the animation of each column
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {/* AnimatePresence enables animation of components that are removed from the DOM */}
        <AnimatePresence mode="wait">
          {/* Framer Motion component for each logo */}
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className={`w-full h-full relative flex items-center justify-center ${
              currentLogo.className ? currentLogo.className : "max-h-[25px]"
            }`}
            // Animation for when the logo enters
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            // Animation for when the logo is displayed
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            // Animation for when the logo exits
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            {(() => {
              const src =
                currentLogo.src.startsWith("/") ||
                currentLogo.src.startsWith("http")
                  ? currentLogo.src
                  : `/logos/${currentLogo.src}`;
              return (
                <Image
                  src={src}
                  alt={currentLogo.alt}
                  fill
                  priority
                  className={`object-contain`}
                />
              );
            })()}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  }
);
// Main LogoCarousel component
export function LogoCarousel({ columnCount = 2 }: { columnCount?: number }) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([]);
  const [currentTime, setCurrentTime] = useState(0);
  // Memoize the array of logos to prevent unnecessary re-renders
  const allLogos: Logo[] = useMemo(
    () => [
      { id: 1, src: "academy.svg", alt: "Amazonia Academy" },
      { id: 2, src: "geteasy.svg", alt: "Get Easy Location" },
      { id: 3, src: "hippokom.svg", alt: "Hippo'kom Agency" },
      {
        id: 4,
        src: "chefkit.svg",
        alt: "ChefKit SaaS",
        className: "max-h-[18px]",
      },
      {
        id: 5,
        src: "mrkicks.svg",
        alt: "Mr. Kicks",
        className: "max-h-[25px] mb-1",
      },
      { id: 6, src: "investing.svg", alt: "Amazonian Investing" },
      {
        id: 7,
        src: "pygmalion.svg",
        alt: "Pygmalion Conseil",
        className: "max-h-[22px]",
      },
      { id: 8, src: "zenlounge.svg", alt: "Zen Lounge" },
    ],
    []
  );
  // Distribute logos across columns when the component mounts
  useEffect(() => {
    const distributedLogos = distributeLogos(allLogos, columnCount);
    setLogoSets(distributedLogos);
  }, [allLogos]);
  // Function to update the current time (used for logo cycling)
  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);
  // Set up an interval to update the time every 100ms
  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);
  // Render the logo columns
  return (
    <div className="flex space-x-4 max-w-7xl mx-auto">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
}
