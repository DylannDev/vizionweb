import { cn } from "@/lib/utils";
import React from "react";

export type CodeBlockProps = {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}

export type CodeBlockGroupProps = React.HTMLAttributes<HTMLDivElement>;

function CodeBlockGroup({
  children,
  className,
  ...props
}: CodeBlockGroupProps) {
  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export type CodeBlockStaticProps = {
  html: string;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

function CodeBlockStatic({ html, className, ...props }: CodeBlockStaticProps) {
  return (
    <div
      className={cn("w-full overflow-x-auto text-[9px] sm:text-[12px]", className)}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  );
}

export { CodeBlockGroup, CodeBlock, CodeBlockStatic };
