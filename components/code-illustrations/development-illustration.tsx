"use client";

import { CodeBlock, CodeBlockCode } from "@/components/ui/code-block";
import { Typewriter } from "@/components/ui/typewriter";
import { motion } from "motion/react";
import Image from "next/image";
import { codeToHtml } from "shiki";

export default function DevelopmentIllustration() {
  const code = `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
     <Image src="/placeholder.svg" />
      <button onClick={() => setCount(count + 1)}>
        Ajouter {count}
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
        <pre className="font-mono text-[11px] sm:text-[12px] leading-6 whitespace-pre-wrap min-h-[290px]">
          <CodeBlockCode code={code} />
        </pre>
      </CodeBlock>

      {/* Small Card Illustration */}
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-15 top-10 flex flex-col gap-3 rounded-3xl border border-gray-lighter shadow-md bg-white p-3 max-w-[120px] max-h-[150px] w-full h-full"
      >
        <div className="bg-gray-lighter rounded-xl h-full flex items-center justify-center">
          <Image
            src="/placeholder.svg"
            alt="Image"
            width={100}
            height={100}
            className="size-8"
          />
        </div>
        <div className="space-y-2 pb-2">
          <motion.div
            className="h-2 w-full bg-gray-lighter rounded-full origin-left"
            aria-hidden
            animate={{ scaleX: [1, 0.95, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="h-2 w-4/5 bg-gray-lighter rounded-full origin-left"
            aria-hidden
            animate={{ scaleX: [1, 0.95, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
