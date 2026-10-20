import { company } from "@/lib/company";

const productSearchCopy = {
  "dal-mill-equipment": {
    title: "Dal Mill Machinery in Chennai",
    description:
      "Explore dal mill plant machinery including pre-cleaners, de-stoners, polishers, graders, conveyors and turnkey setup options from JAYAM TECH ENGINEERING in Chennai.",
  },
  "ss-swimming-pools": {
    title: "SS 304 Swimming Pools in Chennai",
    description:
      "Explore custom SS 304 stainless steel swimming pools in rectangular, round and plunge formats. Ask JAYAM TECH ENGINEERING in Chennai about sizes and specifications.",
  },
  "swimming-pool-ladders": {
    title: "SS 304 Swimming Pool Ladders",
    description:
      "SS 304 swimming pool ladders with anti-slip steps, double-sided access and heavy-duty flange mounting. Request specifications from JAYAM TECH ENGINEERING.",
  },
  "sliding-swing-gates": {
    title: "Sliding & Swing Gates in Chennai",
    description:
      "Explore custom sliding, swing and bi-folding gates with remote access and automation options. Contact JAYAM TECH ENGINEERING in Chennai for a site-specific quote.",
  },
  "boiler-steam-vacuum-systems": {
    title: "Boiler Steam Line & Vacuum Systems",
    description:
      "Industrial boiler steam-line piping and vacuum cleaning systems for plant maintenance. Review configurations and request a project-specific quote from our Chennai team.",
  },
};

const serviceSearchTitles = {
  "belt-conveyor-manufacturing": "Belt Conveyor Manufacturing in Chennai",
  "screw-conveyor-manufacturing": "Screw Conveyor Manufacturing in Chennai",
  "sliding-gate-fabrication-automation": "Automatic Sliding Gate Fabrication",
  "swing-gate-bifolding-automation": "Swing & Bi-Fold Gate Automation",
  "ss-fabrication-works": "Stainless Steel Fabrication in Chennai",
  "ms-fabrication-works": "Mild Steel Fabrication in Chennai",
  "fire-fighting-pipeline": "Fire Fighting Pipeline Installation",
  "boiler-pipeline-fabrication": "Boiler Steam Pipeline Fabrication",
  "industrial-blower-manufacturing": "Industrial Blower Manufacturing",
  "industrial-fan-manufacturing": "Industrial Fan Manufacturing",
  "chimney-fabrication-installation": "Industrial Chimney Fabrication",
  "vacuum-cleaning-system": "Industrial Vacuum Cleaning Systems",
  "dust-collector-system": "Industrial Dust Collector Manufacturing",
  "structural-steel-fabrication": "Structural Steel Fabrication in Chennai",
  "industrial-piping-works": "Industrial Piping Works in Chennai",
  "tank-fabrication": "Industrial Tank Fabrication in Chennai",
  "platform-staircase-fabrication": "Steel Platform & Staircase Fabrication",
  "custom-engineering-fabrication": "Custom Engineering & Fabrication",
};

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
  const suffix = " Based in Chennai, India. Request specifications and a project quote.";
  const text = (details || subject || "").replace(/\s+/g, " ").trim();
  const limit = 160 - suffix.length;
  const intro =
    text.length > limit
      ? `${text.slice(0, limit - 1).replace(/[ ,;:-]+$/, "")}…`
      : text;
  const result = `${intro}${suffix}`;
  return result.length <= 160 ? result : result.slice(0, 157).replace(/[ ,;:-]+$/, "") + "…";
}

export function getProductPageMetadata(product) {
  const copy = productSearchCopy[product.slug] || {
    title: product.title,
    description: buildMetaDescription(product.title, product.summary),
  };
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${copy.title} | ${company.name}`,
      description: copy.description,
      type: "website",
      images: [{ url: product.heroImage.src, alt: product.heroImage.alt }],
    },
  };
}

export function getServicePageMetadata(service) {
  const title = serviceSearchTitles[service.slug] || service.title;
  const description = buildMetaDescription(title, service.description);
  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${title} | ${company.name}`,
      description,
      type: "website",
      images: [{ url: service.image.src, alt: service.image.alt }],
    },
  };
}

export function createServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: company.name,
      url: company.siteUrl,
    },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
    ],
    url: `${company.siteUrl}/services/${service.slug}`,
  };
}
