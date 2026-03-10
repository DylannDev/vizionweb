import type { Metadata } from "next";
import MDXContent from "@/components/mdx-content";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Vizion Web",
  description:
    "Politique de confidentialité de Vizion Web. Informations sur la collecte, le traitement et la protection de vos données personnelles.",
  alternates: {
    canonical: "https://vizionweb.fr/politique-confidentialite",
  },
};

export default function Page() {
  return (
    <main className="max-w-[900px] mx-auto px-5 sm:px-8 py-16 md:py-40">
      <MDXContent file="politique-confidentialite.md" />
    </main>
  );
}
