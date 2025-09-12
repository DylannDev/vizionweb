import type { Metadata } from "next";
import { Geist, Inter_Tight } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import CtaSection from "@/components/cta-section";
import Navbar from "@/components/navbar";
import PricingSection from "@/components/pricing-section";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vizion Web - Agence Web & Développement Digital",
  description:
    "Création de sites web, applications web et e-commerce performants avec Next.js. Boostez votre présence en ligne avec Vizion Web.",
  keywords:
    "Agence web, Développement web, Next.js, Création site internet, Application web, E-commerce, SEO, Performance",
  authors: [{ name: "Vizion Web", url: "https://vizionweb.fr" }],
  openGraph: {
    title: "Vizion Web - Création de Sites & Applications Web",
    description:
      "Experts en développement de sites web, e-commerce et applications performantes. Développez votre présence digitale avec Next.js et les meilleures technologies.",
    url: "https://vizion-web.fr",
    siteName: "Vizion Web",
    images: [
      {
        url: "https://vizionweb.fr/logo.svg",
        width: 1200,
        height: 630,
        alt: "Vizion Web - Agence digitale",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vizion Web - Agence Web & Développement Digital",
    description:
      "Développement de sites web et e-commerce performants avec Next.js. Maximisez votre visibilité en ligne.",
    images: ["https://vizionweb.fr/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geist.variable} ${interTight.variable}`}>
      <body className={`antialiased`}>
        <Navbar />
        <div>{children}</div>
        <CtaSection />
        <Footer />
      </body>
    </html>
  );
}
