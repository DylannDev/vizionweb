"use client";

import {
  ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

export interface AnimatedGridPatternProps
  extends ComponentPropsWithoutRef<"svg"> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

export function AnimatedGridPattern({
  width = 60,
  height = 60,
  x = -1,
  y = -1,
  strokeDasharray = 1,
  numSquares = 30,
  className,
  maxOpacity = 0.9,
  duration = 4,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<{ id: number; pos: number[] }[]>([]);

  const getPos = useCallback(() => {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }, [dimensions.width, dimensions.height, width, height]);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(
        Array.from({ length: numSquares }, (_, i) => ({
          id: i,
          pos: getPos(),
        }))
      );
    }
  }, [dimensions, numSquares, getPos]);

  // Reposition square after animation ends
  const handleAnimationEnd = useCallback(
    (squareId: number) => {
      setSquares((current) =>
        current.map((sq) =>
          sq.id === squareId ? { ...sq, pos: getPos() } : sq
        )
      );
    },
    [getPos]
  );

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 w-full h-full fill-gray-dark/30 stroke-gray-dark/30 opacity-100",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [sx, sy], id: squareId }, index) => (
          <rect
            key={`${sx}-${sy}-${index}`}
            width={width - 1}
            height={height - 1}
            x={sx * width + 1}
            y={sy * height + 1}
            fill="#0057fa"
            strokeWidth="0"
            style={{
              opacity: 0,
              animation: `gridFade ${duration}s ease ${index * 0.1}s 1 alternate forwards`,
            }}
            onAnimationEnd={() => handleAnimationEnd(squareId)}
          />
        ))}
      </svg>
      <style>{`
        @keyframes gridFade {
          from { opacity: 0; }
          to { opacity: ${maxOpacity}; }
        }
      `}</style>
    </svg>
  );
}
