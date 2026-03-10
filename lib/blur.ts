import blurData from "@/data/blur-data.json";

const data = blurData as Record<string, string>;

export function getBlurDataURL(src: string): string | undefined {
  return data[src];
}
