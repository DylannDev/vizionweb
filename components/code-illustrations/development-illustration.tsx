"use client";

import { CodeBlock } from "@/components/ui/code-block";
import { Typewriter } from "@/components/ui/typewriter";
import { motion } from "motion/react";

export default function DevelopmentIllustration() {
  const code = `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}`;

  return (
    <section
      aria-labelledby="dev-illustration-heading"
      className="relative w-full h-full flex items-center justify-center"
    >
      <h2 id="dev-illustration-heading" className="sr-only">
        Illustration: Développement
      </h2>

      <CodeBlock className="bg-white border border-gray-lighter shadow-md rounded-3xl p-4 w-full max-w-[400px] mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-green-100 text-green-700 rounded-[6px] px-3 py-1 text-xs font-medium">
            React
          </div>
          <span className="text-gray-dark text-sm">counter.tsx</span>
        </div>
        <hr className="border-gray-lighter my-4" />

        <pre className="font-mono text-[11px] sm:text-[12px] leading-6 whitespace-pre-wrap">
          <Typewriter
            text={code}
            speed={18}
            initialDelay={200}
            waitTime={1200}
            deleteSpeed={30}
            loop={true}
            showCursor={true}
            cursorChar="|"
            className=""
          />
        </pre>
      </CodeBlock>
    </section>
  );
}
