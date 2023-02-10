export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isoDateFormatter(iso: string) {
  if (iso) {
    return iso.split("T").join(" ").split("Z")[0]
  }
  return iso;
}
