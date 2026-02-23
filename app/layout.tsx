import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/footer";
import Navbar from "@/components/navbar";
import { WhatsappNav } from "@/components/ui/whatsapp-nav";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agence Web — Développement Sites & Applications | Vizion Web",
  description:
    "L'agence Vizion Web est spécialisé dans la création de sites internet, landing pages et applications / SaaS sur-mesure.",
  keywords:
    "Agence web, Développement web, Next.js, React, Création site internet, Application web, SaaS, E-commerce, SEO, Performance",
  authors: [{ name: "Vizion Web", url: "https://vizionweb.fr" }],
  openGraph: {
    title: "Vizion Web - Création de Sites & Applications Web",
    description:
      "Experts en développement de sites internet, landing pages et applications / SaaS sur-mesure.",
    url: "https://vizionweb.fr",
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
    title: "Vizion Web - Création de Sites & Applications Web",
    description:
      "Experts en développement de sites internet, landing pages et applications / SaaS sur-mesure.",
    images: ["https://vizionweb.fr/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${satoshi.className} antialiased`}>
        <Navbar />
        <div>{children}</div>
        <Footer />
        <WhatsappNav />
      </body>
    </html>
  );
}
