import type { Metadata } from "next";
import { CITIES, COUNTRIES } from "@/data";
import HomeSection from "@/components/home-section";
import NotFound from "../not-found";

export function generateStaticParams() {
  return [...CITIES, ...COUNTRIES].map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  const country = COUNTRIES.find((c) => c.slug === slug);
  const locationName = city?.name || country?.name;
  const isCountry = Boolean(country && !city);
  const preposition = isCountry && locationName !== "La Réunion" ? "en" : "à";
  const title = `Agence web ${preposition} ${locationName} — Sites & applications | Vizion Web`;
  const description = `L'agence Vizion Web est spécialisée dans la création de sites internet, landing pages et applications / SaaS sur-mesure ${preposition} ${locationName}.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  const country = COUNTRIES.find((c) => c.slug === slug);
  const locationName = city?.name || country?.name;
  const isCountry = Boolean(country && !city);
  const preposition = isCountry && locationName !== "La Réunion" ? "en" : "à";

  if (!locationName) {
    return <NotFound />;
  }
  return <HomeSection locationName={locationName} preposition={preposition} />;
}
