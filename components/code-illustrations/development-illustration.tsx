"use client";

import { CodeBlock, CodeBlockStatic } from "@/components/ui/code-block";
import { motion } from "motion/react";
import Image from "next/image";

const preRenderedHtml = `<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> Counter</span><span style="color:#24292E">() {</span></span>
<span class="line"><span style="color:#D73A49">  const</span><span style="color:#24292E"> [</span><span style="color:#005CC5">count</span><span style="color:#24292E">, </span><span style="color:#005CC5">setCount</span><span style="color:#24292E">] </span><span style="color:#D73A49">=</span><span style="color:#6F42C1"> useState</span><span style="color:#24292E">(</span><span style="color:#005CC5">0</span><span style="color:#24292E">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">  return</span><span style="color:#24292E"> (</span></span>
<span class="line"><span style="color:#24292E">    &#x3C;</span><span style="color:#22863A">div</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">     &#x3C;</span><span style="color:#005CC5">Image</span><span style="color:#6F42C1"> src</span><span style="color:#D73A49">=</span><span style="color:#032F62">"/placeholder.svg"</span><span style="color:#24292E"> /></span></span>
<span class="line"><span style="color:#24292E">      &#x3C;</span><span style="color:#22863A">button</span><span style="color:#6F42C1"> onClick</span><span style="color:#D73A49">=</span><span style="color:#24292E">{() </span><span style="color:#D73A49">=></span><span style="color:#6F42C1"> setCount</span><span style="color:#24292E">(count </span><span style="color:#D73A49">+</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">)}></span></span>
<span class="line"><span style="color:#24292E">        Ajouter {count}</span></span>
<span class="line"><span style="color:#24292E">      &#x3C;/</span><span style="color:#22863A">button</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">    &#x3C;/</span><span style="color:#22863A">div</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">  );</span></span>
<span class="line"><span style="color:#24292E">}</span></span></code></pre>`;

export default function DevelopmentIllustration() {
  return (
    <section
      aria-labelledby="dev-illustration-heading"
      className="relative w-full h-full flex items-center justify-center"
    >
      <h2 id="dev-illustration-heading" className="sr-only">
        Illustration: Développement
      </h2>

      <div className="relative">
        <CodeBlock className="bg-white border border-gray-lighter shadow-[0_4px_12px_0_rgba(234,179,8,0.2)] rounded-3xl p-4 w-full max-w-[400px] mx-auto">
          <div className="flex items-center gap-2">
            <div className="bg-green-100 text-green-700 rounded-[6px] px-3 py-1 text-xs font-medium">
              React
            </div>
            <span className="text-gray-dark text-sm">counter.tsx</span>
          </div>
          <hr className="border-gray-lighter my-4" />
          <pre className="font-mono leading-6 whitespace-pre-wrap min-h-[290px]">
            <CodeBlockStatic html={preRenderedHtml} />
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
          className="absolute right-5 sm:-right-15 bottom-5 sm:top-10 flex flex-col gap-3 rounded-2xl sm:rounded-3xl border border-gray-lighter shadow-[0_4px_12px_0_rgba(234,179,8,0.2)] bg-white p-3 max-w-[120px] max-h-[150px] w-full h-full"
        >
          <div className="bg-amber-400 rounded-xl h-full flex items-center justify-center">
            <Image
              src="/placeholder.svg"
              alt="Image"
              width={100}
              height={100}
              sizes="32px"
              loading="lazy"
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
      </div>
    </section>
  );
}
