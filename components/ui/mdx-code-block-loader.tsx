"use client";

import dynamic from "next/dynamic";

export const MdxCodeBlock = dynamic(
  () =>
    import("./mdx-code-block").then((m) => ({ default: m.MdxCodeBlock })),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full rounded-lg bg-slate-900 p-4 my-4 h-32 animate-pulse" />
    ),
  }
);

export default MdxCodeBlock;
