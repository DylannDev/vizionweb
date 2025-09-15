import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pickRandom<T>(arr: T[], n: number): T[] {
  const pool = [...arr];
  const out: T[] = [];
  while (out.length < n && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}

export function difference<T>(
  all: T[],
  subset: T[],
  getKey: (t: T) => string
): T[] {
  const keys = new Set(subset.map(getKey));
  return all.filter((x) => !keys.has(getKey(x)));
}
