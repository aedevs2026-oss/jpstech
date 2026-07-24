import { unsplashImages } from "./unsplashImages";
import { clientImages } from "./clientAssets";

const img = unsplashImages.services;

export const services = [
  {
    slug: "belt-conveyor-manufacturing",
    title: "Belt Conveyor Manufacturing",
    description:
      "Custom belt conveyors engineered for efficient material handling across industrial plants.",
    details:
      "We design and fabricate belt conveyor systems sized to your throughput, layout, and duty cycle. From plant transfer lines to packing and storage links, each conveyor is built for reliable continuous operation with easy maintenance access.",
    icon: "conveyor",
    image: {
      src: img.conveyor.src,
      alt: "Industrial belt conveyor system for material handling in a manufacturing plant",
    },
    features: [
      "Custom length, width & incline",
      "Heavy-duty frames & idlers",
      "Energy-efficient drive sizing",
      "Site erection & commissioning support",
    ],
    applications: ["Dal mills", "Warehouses", "Process plants", "Packaging lines"],
  },
  {
    slug: "screw-conveyor-manufacturing",
    title: "Screw Conveyor Manufacturing",
    description:
      "Precision screw conveyors for powders, grains, and bulk solids with reliable throughput.",
    details:
      "Screw (auger) conveyors move powders, grains, and bulk solids in a controlled, enclosed path. Ideal where dust containment and consistent feed rates matter — including dal mill and process plant layouts.",
    icon: "screw",
    image: {
      // TODO: replace with client screw conveyor photo
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      alt: "Industrial screw conveyor and bulk material handling equipment",
    },
    features: [
      "Enclosed conveying for dusty materials",
      "MS / SS construction options",
      "Variable pitch & diameter designs",
      "Horizontal or inclined configurations",
    ],
    applications: ["Grain & dal processing", "Powders", "By-product transfer"],
  },
  {
    slug: "sliding-gate-fabrication-automation",
    title: "Sliding Gate Fabrication & Automation",
    description:
      "Heavy-duty sliding gates with motorized automation for secure industrial access.",
    details:
      "Custom sliding gates fabricated in MS or SS with motorized automation, track systems, and remote access. Built for industrial yards, commercial sites, and premium residences that need durable daily operation.",
    icon: "gate",
    image: {
      src: clientImages.slidingGateNavyAccent.src,
      alt: clientImages.slidingGateNavyAccent.alt,
    },
    features: [
      "Motorized sliding mechanism",
      "Remote / access-control ready",
      "Custom panel & finish options",
      "Shelter / canopy available",
    ],
    applications: ["Factories", "Warehouses", "Residential driveways"],
    relatedProduct: "sliding-swing-gates",
  },
  {
    slug: "swing-gate-bifolding-automation",
    title: "Swing Gate / Bi-folding Gate Fabrication & Automation",
    description:
      "Swing and bi-folding gates with remote access for residential and industrial sites.",
    details:
      "Space-saving bi-folding and classic swing gates with heavy-duty hinges, finishes, and optional automation. We measure on site and fabricate to exact opening widths — including pedestrian side gates.",
    icon: "gateSwing",
    image: {
      src: clientImages.bifoldGateMatteBlack.src,
      alt: clientImages.bifoldGateMatteBlack.alt,
    },
    features: [
      "Swing & bi-folding configurations",
      "Remote access automation",
      "Pedestrian gate options",
      "Wood-finish / powder-coat / SS accents",
    ],
    applications: ["Residences", "Commercial entrances", "Parking areas"],
    relatedProduct: "sliding-swing-gates",
  },
  {
    slug: "ss-fabrication-works",
    title: "Stainless Steel (SS) Fabrication Works",
    description:
      "SS 304 / food-grade and industrial stainless fabrication for tanks, structures, and fittings.",
    details:
      "Precision stainless fabrication for hygienic and corrosion-critical applications — tanks, platforms, fittings, pool shells, and custom assemblies in SS 304 (and grades as specified).",
    icon: "ss",
    image: {
      src: img.welding.src,
      alt: "Stainless steel welding and fabrication work in an industrial shop",
    },
    features: [
      "SS 304 and specified grades",
      "Food-grade finish options",
      "TIG / MIG welding expertise",
      "Custom drawings to finished product",
    ],
    applications: ["Food plants", "SS pools", "Process equipment"],
  },
  {
    slug: "ms-fabrication-works",
    title: "Mild Steel (MS) Fabrication Works",
    description:
      "Robust MS fabrication for platforms, frames, supports, and custom industrial assemblies.",
    details:
      "Mild steel fabrication for structural frames, machine bases, supports, guards, and general industrial assemblies — painted or powder-coated for site durability.",
    icon: "ms",
    image: {
      src: img.cnc.src,
      alt: "Mild steel CNC and workshop fabrication of industrial components",
    },
    features: [
      "Heavy-duty MS sections",
      "Cutting, welding & assembly",
      "Paint / powder-coat finish",
      "Prototype to production runs",
    ],
    applications: ["Plant structures", "Machine frames", "Guards & supports"],
  },
  {
    slug: "fire-fighting-pipeline",
    title: "Fire Fighting Pipeline Installation",
    description:
      "Compliant fire-fighting pipeline networks designed for safety and code adherence.",
    details:
      "Fire-fighting pipeline fabrication and installation for industrial and commercial facilities. We work to project specifications for hydrant lines, risers, and distribution networks with proper supports and testing readiness.",
    icon: "fire",
    image: {
      src: img.piping.src,
      alt: "Industrial fire-fighting and utility pipeline installation work",
    },
    features: [
      "Hydrant & distribution lines",
      "Supported routing & hangers",
      "Pressure-test ready joints",
      "Site coordination with MEP teams",
    ],
    applications: ["Factories", "Warehouses", "Commercial buildings"],
  },
  {
    slug: "boiler-pipeline-fabrication",
    title: "Boiler Pipeline Fabrication & Installation",
    description:
      "Steam-line boiler piping fabricated and installed for reliable high-temperature operation.",
    details:
      "Boiler steam-line fabrication and installation engineered for temperature, pressure, and layout constraints. From spool fabrication to site welding and support systems.",
    icon: "boiler",
    image: {
      src: unsplashImages.products.boilerVacuum.src,
      alt: "Boiler steam-line piping and industrial plant infrastructure",
    },
    features: [
      "Steam-line spool fabrication",
      "High-temperature material selection",
      "Insulation-ready routing",
      "Installation & commissioning support",
    ],
    applications: ["Boiler houses", "Process steam", "Utility plants"],
    relatedProduct: "boiler-steam-vacuum-systems",
  },
  {
    slug: "industrial-blower-manufacturing",
    title: "Industrial Blower Manufacturing",
    description:
      "Custom industrial blowers built for airflow performance in demanding plant environments.",
    details:
      "Industrial blowers manufactured to airflow and static-pressure requirements for ventilation, process air, and dust-handling systems. Robust housings and impeller designs for continuous plant duty.",
    icon: "blower",
    image: {
      src: img.blower.src,
      alt: "Industrial blower machinery installed in a manufacturing plant",
    },
    features: [
      "Custom CFM / pressure design",
      "Heavy-duty housings",
      "Balanced impeller assemblies",
      "MS / SS material options",
    ],
    applications: ["Ventilation", "Process air", "Dust systems"],
  },
  {
    slug: "industrial-fan-manufacturing",
    title: "Industrial Fan Manufacturing (All Types)",
    description:
      "Axial, centrifugal, and process fans manufactured to specification for every application.",
    details:
      "Axial, centrifugal, and specialty process fans fabricated for plant ventilation and process duties. We size fans to duct layouts and duty points for efficient, reliable airflow.",
    icon: "fan",
    image: {
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
      alt: "Industrial fan and airflow equipment in a factory environment",
    },
    features: [
      "Axial & centrifugal types",
      "Custom impeller & casing",
      "Quiet / high-static options",
      "Mounting & drive packages",
    ],
    applications: ["HVAC plants", "Process exhaust", "Cooling air"],
  },
  {
    slug: "chimney-fabrication-installation",
    title: "Chimney Fabrication & Installation",
    description:
      "Industrial chimneys and exhaust stacks fabricated for durability and proper draft.",
    details:
      "Industrial chimneys and exhaust stacks fabricated and erected for boilers and process exhaust. Designed for structural stability, draft performance, and site access constraints.",
    icon: "chimney",
    image: {
      src: img.chimney.src,
      alt: "Industrial chimney and exhaust stack at a manufacturing facility",
    },
    features: [
      "Self-supported / guyed options",
      "MS fabrication with protective finish",
      "Access ladders & platforms",
      "Site erection expertise",
    ],
    applications: ["Boilers", "Process exhaust", "Industrial stacks"],
  },
  {
    slug: "vacuum-cleaning-system",
    title: "Vacuum Cleaning System Manufacturing",
    description:
      "Boiler steam-line vacuum cleaning systems for efficient ash and debris extraction.",
    details:
      "Vacuum cleaning systems for boiler steam lines and plant maintenance — engineered to extract ash, soot, and debris safely and efficiently during shutdowns and routine cleaning.",
    icon: "vacuum",
    image: {
      src: unsplashImages.products.boilerVacuum.src,
      alt: "Industrial vacuum cleaning system for boiler and plant maintenance",
    },
    features: [
      "Boiler steam-line cleaning focus",
      "Custom hose & nozzle kits",
      "Portable or fixed setups",
      "AMC options available", // TODO: confirm AMC with client
    ],
    applications: ["Boiler houses", "Ash handling", "Plant maintenance"],
    relatedProduct: "boiler-steam-vacuum-systems",
  },
  {
    slug: "dust-collector-system",
    title: "Dust Collector System Manufacturing",
    description:
      "Dust collection systems that keep plant air cleaner and equipment protected.",
    details:
      "Dust collector systems designed to capture airborne particles at source — protecting workers, product quality, and equipment. Fabricated housings, ducting interfaces, and filter arrangements as per process needs.",
    icon: "dust",
    image: {
      src: img.warehouse.src,
      alt: "Industrial dust collection and plant air-handling equipment area",
    },
    features: [
      "Source-capture layouts",
      "Filter / cyclone configurations",
      "Duct fabrication interfaces",
      "Maintenance-friendly access",
    ],
    applications: ["Grinding areas", "Grain plants", "Fabrication shops"],
  },
  {
    slug: "structural-steel-fabrication",
    title: "Structural Steel Fabrication",
    description:
      "Beams, columns, and structural assemblies fabricated to exact engineering drawings.",
    details:
      "Structural steel fabrication for buildings, plant mezzanines, and industrial frameworks. We work from approved drawings with accurate cutting, fit-up, welding, and finish.",
    icon: "structure",
    image: {
      src: img.structure.src,
      alt: "Structural steel framework beams and columns under construction",
    },
    features: [
      "Beams, columns & trusses",
      "Drawing-based accuracy",
      "Shop fabrication & site assembly",
      "Protective coatings",
    ],
    applications: ["Industrial buildings", "Mezzanines", "Plant structures"],
  },
  {
    slug: "industrial-piping-works",
    title: "Industrial Piping Works",
    description:
      "End-to-end industrial piping for process, utility, and plant utility networks.",
    details:
      "Complete industrial piping for process fluids, utilities, and plant networks — from isometric understanding to spool fabrication, installation, and support systems.",
    icon: "piping",
    image: {
      src: unsplashImages.hero.piping.src,
      alt: "Industrial steel piping network inside a process plant",
    },
    features: [
      "Process & utility piping",
      "MS / SS material options",
      "Supports, hangers & anchors",
      "Leak-test ready workmanship",
    ],
    applications: ["Process plants", "Utilities", "Cooling / compressed air"],
  },
  {
    slug: "tank-fabrication",
    title: "Tank Fabrication",
    description:
      "SS and MS tanks fabricated for storage, process, and utility applications.",
    details:
      "Storage and process tanks fabricated in SS or MS — cylindrical, rectangular, or custom geometries with nozzles, manholes, and supports as specified.",
    icon: "tank",
    image: {
      src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
      alt: "Industrial tank and vessel fabrication in a metal workshop",
    },
    features: [
      "SS 304 / MS construction",
      "Custom capacity & nozzles",
      "Supports & ladders as needed",
      "Surface finish per duty",
    ],
    applications: ["Storage", "Process vessels", "Water / chemical service"],
  },
  {
    slug: "platform-staircase-fabrication",
    title: "Platform & Staircase Fabrication",
    description:
      "Safe industrial platforms, walkways, and staircases built for heavy plant use.",
    details:
      "Industrial platforms, walkways, and staircases fabricated for safe plant access — with grating, handrails, and load-rated structures designed for daily industrial use.",
    icon: "stairs",
    image: {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      alt: "Industrial steel platform and staircase fabrication structure",
    },
    features: [
      "Load-rated platforms",
      "Staircases & ladders",
      "Handrails & toe plates",
      "Chequered plate / grating floors",
    ],
    applications: ["Machine access", "Mezzanines", "Maintenance walkways"],
  },
  {
    slug: "custom-engineering-fabrication",
    title: "Custom Engineering & Fabrication Solutions",
    description:
      "Bespoke engineering solutions from concept through fabrication and site installation.",
    details:
      "When standard products do not fit, we engineer custom fabrication solutions — from concept sketches and site measurement through fabrication, finish, and installation.",
    icon: "custom",
    image: {
      src: unsplashImages.hero.fabrication.src,
      alt: "Custom industrial fabrication and engineering workshop environment",
    },
    features: [
      "Concept to commissioning",
      "Site measurement & design support",
      "Prototype & one-off builds",
      "Cross-discipline fabrication",
    ],
    applications: ["Special machines", "Unique site constraints", "OEM support"],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
