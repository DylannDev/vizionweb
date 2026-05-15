export interface StackTech {
  id: string;
  name: string;
  logo: string;
  href?: string;
}

export const stackTechs: Record<string, StackTech> = {
  nextjs: {
    id: "nextjs",
    name: "Next.js",
    logo: "/logos/stack/nextjs.svg",
    href: "/agence-next-js",
  },
  react: {
    id: "react",
    name: "React",
    logo: "/logos/stack/react.svg",
    href: "/agence-react",
  },
  supabase: {
    id: "supabase",
    name: "Supabase",
    logo: "/logos/stack/supabase.svg",
    href: "/agence-supabase",
  },
  openai: {
    id: "openai",
    name: "OpenAI",
    logo: "/logos/stack/openai.svg",
    href: "/agence-openai",
  },
  claude: {
    id: "claude",
    name: "Claude",
    logo: "/logos/stack/claude.svg",
    href: "/agence-claude-api",
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    logo: "/logos/stack/typescript.svg",
  },
  tailwindcss: {
    id: "tailwindcss",
    name: "Tailwind CSS",
    logo: "/logos/stack/tailwindcss.svg",
  },
  vercel: {
    id: "vercel",
    name: "Vercel",
    logo: "/logos/stack/vercel.svg",
  },
  nodejs: {
    id: "nodejs",
    name: "Node.js",
    logo: "/logos/stack/nodejs.svg",
  },
  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    logo: "/logos/stack/postgresql.svg",
  },
  figma: {
    id: "figma",
    name: "Figma",
    logo: "/logos/stack/figma.svg",
  },
  n8n: {
    id: "n8n",
    name: "n8n",
    logo: "/logos/stack/n8n.svg",
  },
};

