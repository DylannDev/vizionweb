"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function lazyVisible<P = Record<string, never>>(
  importFn: () => Promise<{ default: ComponentType<any> }>,
  fallbackHeight = "400px"
) {
  function LazyWrapper(props: P) {
    const ref = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [Component, setComponent] = useState<ComponentType<any> | null>(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            importFn().then((mod) => setComponent(() => mod.default));
          }
        },
        { rootMargin: "200px" }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    if (Component) return <Component {...props} />;

    return <div ref={ref} style={{ minHeight: fallbackHeight }} />;
  }

  LazyWrapper.displayName = `LazyVisible`;
  return LazyWrapper;
}
