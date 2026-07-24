import { unsplashImages } from "./unsplashImages";
import { clientGateGallery, clientPoolGallery, clientVideo } from "./clientAssets";

const commonFeatures = [
  "High Efficiency",
  "Low Power Consumption",
  "Easy Installation & Maintenance",
  "Long Life & Durable",
  "Suitable for All Types of Dal Processing",
];

export const products = [
  {
    slug: "dal-mill-equipment",
    title: "Dal Mill Equipment",
    shortTitle: "Dal Mill Equipment",
    summary:
      "Complete dal mill plant machinery — from pre-cleaning and de-stoning to polishing, grading, conveying, and storage.",
    heroImage: unsplashImages.products.dalMill,
    // TODO: replace with client photo of dal mill equipment
    categories: ["Processing", "Conveying", "Storage"],
    equipment: [
      {
        name: "Pre-Cleaner",
        purpose: "Dust removal and primary cleaning of raw dal / pulses",
      },
      {
        name: "De-Stoner",
        purpose: "Stone and heavy impurity separation",
      },
      {
        name: "Dal Dryer",
        purpose: "Moisture reduction for consistent processing quality",
      },
      {
        name: "Dal Splitter",
        purpose: "Precise splitting of whole dal",
      },
      {
        name: "Dal Polisher",
        purpose: "Surface polishing for finished appearance and market grade",
      },
      {
        name: "Dal Grader",
        purpose: "Size grading and quality classification",
      },
      {
        name: "Vibro Separator",
        purpose: "Vibratory separation of fines and foreign matter",
      },
      {
        name: "Bucket Elevator",
        purpose: "Vertical conveying between process stages",
      },
      {
        name: "Screw Conveyor",
        purpose: "Enclosed conveying of dal and by-products",
      },
      {
        name: "Belt Conveyor",
        purpose: "Horizontal material transfer across the plant",
      },
      {
        name: "Peas Conveyor",
        purpose: "Specialized conveying for peas and similar pulses",
      },
      {
        name: "Storage Hopper",
        purpose: "Interim and finished product storage",
      },
      {
        name: "Full Dal Mill Plant Setup",
        purpose: "Turnkey plant layout, fabrication, and commissioning",
      },
    ],
    processCapabilities: [
      "Dust removal",
      "Moisture reduction",
      "Splitting",
      "Polishing",
      "Grading",
      "Conveying",
      "Storage",
    ],
    features: commonFeatures,
    specRows: [
      { label: "Material of Construction", value: "MS / SS as per process requirement" },
      { label: "Plant Scope", value: "Individual machines or full plant setup" },
      { label: "Applications", value: "All types of dal & pulse processing" },
      { label: "Drive", value: "Energy-efficient motors sized to load" },
      { label: "Installation", value: "Site fabrication, erection & commissioning support" },
      { label: "Maintenance", value: "Designed for easy access and low downtime" },
    ],
    gallery: [
      unsplashImages.gallery.dalMill1,
      unsplashImages.gallery.dalMill2,
      unsplashImages.gallery.dalMill3,
    ],
    related: ["ss-swimming-pools", "boiler-steam-vacuum-systems", "sliding-swing-gates"],
  },
  {
    slug: "ss-swimming-pools",
    title: "Stainless Steel Swimming Pools",
    shortTitle: "SS Swimming Pools",
    summary:
      "SS 304 grade portable and custom swimming pools — rectangular, round, and plunge formats with engineered fittings.",
    heroImage: unsplashImages.products.ssPool,
    // TODO: replace with client photo of SS pools
    categories: ["SS 304", "Portable", "Custom"],
    poolOptions: {
      rectangular: [
        "4,000 LTR",
        "8,000 LTR",
        "9,000 LTR",
        "10,000 LTR",
        "12,000 LTR",
        "Custom rectangular 10ft × 5ft × 4ft",
      ],
      round: ["4,000 LTR", "6,000 LTR", "8,000 LTR", "10,000 LTR", "12,000 LTR"],
      plunge: ["Custom plunge pool sizes on request"],
    },
    features: [
      "SS 304 food-grade stainless construction",
      "Portable & site-installable designs",
      "Custom sizing available",
      "Corrosion-resistant finish",
      "Engineered inlet, outlet & filtration points",
    ],
    // Spec table template reusable per capacity — base specs shown; capacity rows below
    specRows: [
      { label: "Material", value: "SS 304 grade stainless steel" },
      { label: "Wall Thickness", value: "As per capacity design (client chart)" }, // TODO: confirm with client chart
      { label: "Base Thickness", value: "As per capacity design (client chart)" }, // TODO: confirm with client chart
      { label: "Frame", value: "Reinforced SS / MS support frame as specified" },
      { label: "Finish", value: "Polished / brushed stainless finish" },
      { label: "Inlet / Outlet", value: "Provisioned per design" },
      { label: "Filtration Outlets", value: "Multiple outlets as per capacity" },
      { label: "Inlet Jets", value: "Configured per pool size" },
      { label: "Overflow", value: "Overflow arrangement included where specified" },
    ],
    capacitySpecs: [
      {
        capacity: "4,000 LTR",
        rows: [
          { label: "Capacity", value: "4,000 LTR" },
          { label: "Material", value: "SS 304" },
          { label: "Shape Options", value: "Rectangular / Round" },
          { label: "Filtration Outlets", value: "As per design" }, // TODO: confirm exact counts with client chart
          { label: "Inlet Jets", value: "As per design" },
        ],
      },
      {
        capacity: "8,000 LTR",
        rows: [
          { label: "Capacity", value: "8,000 LTR" },
          { label: "Material", value: "SS 304" },
          { label: "Shape Options", value: "Rectangular / Round" },
          { label: "Filtration Outlets", value: "As per design" },
          { label: "Inlet Jets", value: "As per design" },
        ],
      },
      {
        capacity: "9,000 LTR",
        rows: [
          { label: "Capacity", value: "9,000 LTR" },
          { label: "Material", value: "SS 304" },
          { label: "Shape Options", value: "Rectangular" },
          { label: "Filtration Outlets", value: "As per design" },
          { label: "Inlet Jets", value: "As per design" },
        ],
      },
      {
        capacity: "10,000 LTR",
        rows: [
          { label: "Capacity", value: "10,000 LTR" },
          { label: "Material", value: "SS 304" },
          { label: "Shape Options", value: "Rectangular / Round" },
          { label: "Custom Option", value: "10ft × 5ft × 4ft rectangular available" },
          { label: "Filtration Outlets", value: "As per design" },
        ],
      },
      {
        capacity: "12,000 LTR",
        rows: [
          { label: "Capacity", value: "12,000 LTR" },
          { label: "Material", value: "SS 304" },
          { label: "Shape Options", value: "Rectangular / Round" },
          { label: "Filtration Outlets", value: "As per design" },
          { label: "Inlet Jets", value: "As per design" },
        ],
      },
    ],
    gallery: [...clientPoolGallery, unsplashImages.gallery.pools3],
    related: ["swimming-pool-ladders", "sliding-swing-gates", "dal-mill-equipment"],
  },
  {
    slug: "swimming-pool-ladders",
    title: "Swimming Pool Ladders",
    shortTitle: "Pool Ladders",
    summary:
      "SS 304 swimming pool ladders with both-side access, anti-slip steps, heavy-duty flange, and complete fixing kit.",
    heroImage: unsplashImages.products.poolLadder,
    categories: ["SS 304", "Accessories"],
    features: [
      "SS 304 construction",
      "Both-side access design",
      "Anti-slip steps for safe entry/exit",
      "Heavy-duty flange mounting",
      "Complete fixing kit included",
    ],
    specRows: [
      { label: "Material", value: "SS 304 stainless steel" },
      { label: "Access", value: "Both-side access" },
      { label: "Steps", value: "Anti-slip tread steps" },
      { label: "Mounting", value: "Heavy-duty flange" },
      { label: "Kit", value: "Complete fixing kit supplied" },
      { label: "Finish", value: "Polished stainless" },
    ],
    gallery: [...clientPoolGallery],
    related: ["ss-swimming-pools", "sliding-swing-gates"],
  },
  {
    slug: "sliding-swing-gates",
    title: "Sliding, Swing & Bi-Folding Gates",
    shortTitle: "Automated Gates",
    summary:
      "Sliding, swing, and bi-folding gates with remote/automated access and optional shelter or canopy.",
    heroImage: unsplashImages.products.gates,
    categories: ["Automation", "Security", "Access"],
    features: [
      "Sliding, swing & bi-folding configurations",
      "Remote / automated access",
      "Optional shelter & canopy",
      "Heavy-duty MS / SS fabrication",
      "Site measurement & custom design",
    ],
    specRows: [
      { label: "Gate Types", value: "Sliding, Swing, Bi-folding" },
      { label: "Automation", value: "Motorized with remote access" },
      { label: "Material", value: "MS / SS as specified" },
      { label: "Options", value: "Shelter / canopy available" },
      { label: "Applications", value: "Industrial, commercial & residential" },
      { label: "Finish", value: "Painted / powder-coated / polished SS" },
    ],
    gallery: clientGateGallery,
    video: clientVideo,
    related: ["ss-swimming-pools", "dal-mill-equipment", "boiler-steam-vacuum-systems"],
  },
  {
    slug: "boiler-steam-vacuum-systems",
    title: "Boiler Steam Line & Vacuum Cleaning Systems",
    shortTitle: "Boiler & Vacuum Systems",
    summary:
      "Boiler steam-line fabrication and vacuum cleaning systems engineered for industrial plant maintenance.",
    heroImage: unsplashImages.products.boilerVacuum,
    // TODO: replace with client photo of vacuum / steam line systems
    categories: ["Boiler", "Steam Line", "Vacuum"],
    features: [
      "Steam-line boiler piping fabrication",
      "Vacuum cleaning for boiler steam lines",
      "Dust & ash extraction capability",
      "Custom sizing for plant layout",
      "Installation & commissioning support",
    ],
    specRows: [
      { label: "System Types", value: "Steam line piping & vacuum cleaning" },
      { label: "Application", value: "Boiler houses & industrial plants" },
      { label: "Material", value: "MS / SS as per process temperature" },
      { label: "Scope", value: "Design, fabrication, installation" },
      { label: "Support", value: "AMC & maintenance options available" }, // TODO: confirm AMC terms with client
    ],
    gallery: [
      unsplashImages.services.piping,
      unsplashImages.services.blower,
      unsplashImages.services.chimney,
    ],
    related: ["dal-mill-equipment", "sliding-swing-gates"],
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slugs = []) {
  return products.filter((p) => slugs.includes(p.slug));
}

export const featuredProductSlugs = [
  "dal-mill-equipment",
  "ss-swimming-pools",
  "sliding-swing-gates",
];
