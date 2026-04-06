import fs from "node:fs/promises";
import path from "node:path";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { MdxCodeBlock } from "@/components/ui/mdx-code-block-loader";

const mdxComponents = {
  table: (props: React.ComponentProps<"table">) => (
    <div className="table-wrapper">
      <table {...props} />
    </div>
  ),
  pre: (props: React.ComponentProps<"pre">) => {
    const child = props.children as React.ReactElement<{
      className?: string;
      children?: string;
    }>;
    if (child?.props) {
      const className = child.props.className || "";
      const language = className.replace("language-", "") || "text";
      const code = typeof child.props.children === "string"
        ? child.props.children.replace(/\n$/, "")
        : "";
      return <MdxCodeBlock language={language} code={code} />;
    }
    return <pre {...props} />;
  },
};

function remarkStripTitle() {
  return (tree: { children: { type: string; depth?: number }[] }) => {
    const idx = tree.children.findIndex(
      (n) => n.type === "heading" && n.depth === 1
    );
    if (idx !== -1) tree.children.splice(idx, 1);
  };
}

interface MDXContentProps {
  file: string;
  stripTitle?: boolean;
}

export async function MDXContent({ file, stripTitle }: MDXContentProps) {
  const filePath = path.join(process.cwd(), "content", file);
  const source = await fs.readFile(filePath, "utf8");
  const remarkPlugins = stripTitle
    ? [remarkGfm, remarkStripTitle]
    : [remarkGfm];
  return (
    <div className="mdx-content">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{ mdxOptions: { remarkPlugins } }}
      />
    </div>
  );
}

export default MDXContent;
