import fs from "node:fs/promises";
import path from "node:path";
import { MDXRemote } from "next-mdx-remote/rsc";

interface MDXContentProps {
  file: string;
}

export async function MDXContent({ file }: MDXContentProps) {
  const filePath = path.join(process.cwd(), "content", file);
  const source = await fs.readFile(filePath, "utf8");
  return (
    <article className="mdx-content">
      <MDXRemote source={source} />
    </article>
  );
}

export default MDXContent;
