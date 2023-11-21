import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function CN(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}