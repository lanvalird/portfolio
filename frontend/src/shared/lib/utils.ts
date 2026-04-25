import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function humanizeDate(date: Date) {
  function whenZero(num: number) {
    return num.toString().length === 2 ? num : `0${num}`;
  }
  const day = whenZero(date.getUTCDate());
  const month = whenZero(date.getUTCMonth() + 1);

  return `${day}.${month}.${date.getUTCFullYear()}`;
}
