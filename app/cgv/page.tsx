import type { Metadata } from "next";
import MDXContent from "@/components/mdx-content";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Vizion Web",
  description:
    "Conditions Générales de Vente de Vizion Web. Tarifs, modalités de paiement, délais, propriété intellectuelle et garanties.",
  alternates: { canonical: "https://vizionweb.fr/cgv" },
};

export default function Page() {
  return (
    <main className="max-w-[900px] mx-auto px-5 sm:px-8 py-16 md:py-40">
      <MDXContent file="cgv.md" />
    </main>
  );
}
