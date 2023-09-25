import { categories } from "src/constants/config";

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const selectOptions = categories.map((category) => ({
  value: category,
  label: capitalize(category),
}));

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
