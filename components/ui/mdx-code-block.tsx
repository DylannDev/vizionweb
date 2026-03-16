"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";

type MdxCodeBlockProps = {
  language: string;
  filename?: string;
  highlightLines?: number[];
  code: string;
};

export function MdxCodeBlock({
  language,
  filename,
  code,
  highlightLines = [],
}: MdxCodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full rounded-lg bg-slate-900 p-4 font-mono text-sm my-4">
      <div className="flex justify-between items-center py-2">
        {filename && (
          <div className="text-xs text-zinc-400">{filename}</div>
        )}
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans ml-auto"
        >
          {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: 0,
          background: "transparent",
          fontSize: "0.875rem",
        }}
        wrapLines={true}
        showLineNumbers={true}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: highlightLines.includes(lineNumber)
              ? "rgba(255,255,255,0.1)"
              : "transparent",
            display: "block",
            width: "100%",
          },
        })}
        PreTag="div"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
