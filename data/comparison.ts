export type CellValue = boolean | string;
export type ColumnKey = "vizion" | "freelance" | "agence";

export interface ComparisonColumn {
  key: ColumnKey;
  label: string;
  headerLabel?: string;
  highlighted?: boolean;
  logo?: string;
}

export interface ComparisonRow {
  label: string;
  vizion: CellValue;
  freelance: CellValue;
  agence: CellValue;
}

export const comparisonSection = {
  badge: "Comparatif",
  title: "Freelance, agence ou Vizion Web",
  subtitle:
    "Trois options, des résultats très différents. Comparez ce que chacune vous offre concrètement.",
} as const;

export const comparisonColumns: ComparisonColumn[] = [
  {
    key: "vizion",
    label: "Vizion Web",
    highlighted: true,
    logo: "/logo-off-white.svg",
  },
  { key: "freelance", label: "Freelance", headerLabel: "Freelances" },
  { key: "agence", label: "Agence", headerLabel: "Agences classiques" },
];

export const comparisonRows: ComparisonRow[] = [
  {
    label: "Devis et tarification",
    vizion: "Prix fixe, devis en 24h",
    freelance: "Taux horaire, budget flou",
    agence: "Budgets élevés, devis en semaines",
  },
  {
    label: "Délai de livraison",
    vizion: "2 à 8 semaines",
    freelance: "Variable, souvent décalé",
    agence: "3 à 6 mois",
  },
  {
    label: "Design intégré",
    vizion: true,
    freelance: false,
    agence: "Facturé en supplément",
  },
  {
    label: "Chef de projet dédié",
    vizion: true,
    freelance: false,
    agence: "Rotation fréquente",
  },
  {
    label: "Support post-livraison",
    vizion: "30-90 jours inclus",
    freelance: "Rarement inclus",
    agence: "Contrat séparé",
  },
  {
    label: "Propriété du projet",
    vizion: "100 % à vous",
    freelance: "Selon le contrat",
    agence: "Souvent restreinte",
  },
  {
    label: "Révisions",
    vizion: "Illimitées",
    freelance: "Facturées à l'heure",
    agence: "Nombre limité",
  },
];
