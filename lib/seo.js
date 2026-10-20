import { company } from "@/lib/company";

export function createBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${company.siteUrl}${item.path}`,
    })),
  };
}

export function buildMetaDescription(subject, details) {
  const ending = " Based in Chennai, India. Request specifications and a project quote.";
  const first = (details || subject || "").replace(/\s+/g, " ").trim();
  const maxIntro = Math.max(45, 155 - ending.length);
  const trimmed = first.length > maxIntro
    ? `${first.slice(0, maxIntro - 1).replace(/[ ,;:-]+$/, "")}…`
    : first;
  const result = `${trimmed}${ending}`;
  return result.length <= 160 ? result : `${result.slice(0, 157).replace(/[ ,;:-]+$/, "")}…`;
}
