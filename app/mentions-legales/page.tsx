import type { Metadata } from "next";
import MDXContent from "@/components/mdx-content";

export const metadata: Metadata = {
  title: "Mentions légales | Vizion Web",
  description:
    "Mentions légales du site Vizion Web. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
  alternates: { canonical: "https://vizionweb.fr/mentions-legales" },
};

export default function Page() {
  return (
    <main className="max-w-[900px] mx-auto px-5 sm:px-8 py-16 md:py-40">
      <MDXContent file="mentions-legales.md" />
    </main>
  );
}
