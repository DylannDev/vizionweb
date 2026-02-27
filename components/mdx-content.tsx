import fs from "node:fs/promises";
import path from "node:path";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

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
        options={{ mdxOptions: { remarkPlugins } }}
      />
    </div>
  );
}

export default MDXContent;
