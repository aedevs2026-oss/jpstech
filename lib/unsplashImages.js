/**
 * Central image registry for Unsplash (and future client) photos.
 * Swap any entry for a local /public asset when client photos arrive.
 */

import {
  clientGateGallery,
  clientImages,
  clientPoolGallery,
} from "./clientAssets";

export const unsplashImages = {
  hero: {
    fabrication: {
      src: "/web-image/mild_steel_fabrication.png",
      alt: "Industrial metal fabrication workshop with steel structures and welding equipment",
    },
    swimmingPools: {
      ...clientImages.ssPoolLedNight,
    },
    dalMill: {
      src: "/web-image/dal_machine.png",
      alt: "Industrial processing machinery inside a steel factory",
      // TODO: replace with client photo of dal mill equipment
    },
    gates: {
      src: "/web-image/modern_sliding_gate.png",
      alt: "Custom sliding gate installation with industrial access hardware",
    },
    piping: {
      src: "/web-image/boiler_pipelines.png",
      alt: "Industrial steel piping and factory infrastructure",
    },
  },

  services: {
    conveyor: {
      src: "/services/belt-js.jpg",
      alt: "Industrial belt conveyor system in a manufacturing facility",
    },
    welding: {
      src: "/web-image/mild-steel-fabrication-stainless.png",
      alt: "Stainless steel welding sparks in a fabrication shop",
    },
    cnc: {
      src: "/web-image/mild_steel_fabrication.png",
      alt: "CNC metal fabrication machine cutting steel components",
    },
    structure: {
      src: "/web-image/mild_steel_fabrication.png",
      alt: "Structural steel construction framework against sky",
    },
    warehouse: {
      src: "/services/dust-collection-js.jpg",
      alt: "Industrial dust collector system installation in a manufacturing facility",
    },
    blower: {
      src: "/web-image/industrial_centrifugal_blower.png",
      alt: "Industrial blower and fan machinery in a plant",
    },
    chimney: {
      src: "/web-image/industrial_chimney.png",
      alt: "Industrial chimney and exhaust system at a manufacturing plant",
    },
    piping: {
      src: "/web-image/boiler_pipelines.png",
      alt: "Industrial pipeline fabrication and installation work",
    },
  },

  products: {
    dalMill: {
      src: "/web-image/dal_machine.png",
      alt: "Dal mill and grain processing equipment in an industrial plant",
      // TODO: replace with client photo of dal mill plant
    },
    ssPool: {
      ...clientImages.ssPoolLedNight,
    },
    poolLadder: {
      ...clientImages.ssPlungePoolWorkshop,
      alt: "Stainless steel pool ladder with anti-slip steps on SS plunge pool",
    },
    gates: {
      src: "/web-image/modern_sliding_gate.png",
      alt: "Industrial gate automation with custom fabricated access structures",
    },
    boilerVacuum: {
      src: "/web-image/industrial_vacuum_clean.png",
      alt: "Boiler steam line and industrial vacuum cleaning system",
      // TODO: replace with client photo of vacuum cleaning system
    },
  },

  gallery: {
    fabrication1: {
      src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
      alt: "Fabrication workshop with steel beams and cutting equipment",
      category: "Fabrication",
    },
    fabrication2: {
      src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      alt: "Welder performing stainless steel fabrication",
      category: "Fabrication",
    },
    fabrication3: {
      src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80",
      alt: "CNC machining of precision metal parts",
      category: "Fabrication",
    },
    fabrication4: {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      alt: "Structural steel framework under construction",
      category: "Fabrication",
    },
    pools1: clientImages.ssPoolLedNight,
    pools2: clientImages.ssPlungePoolWorkshop,
    pools3: {
      src: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=800&q=80",
      alt: "Modern plunge pool with clean geometric lines",
      category: "Swimming Pools",
      // TODO: replace with additional client pool photo
    },
    dalMill1: {
      src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80",
      alt: "Grain and dal processing machinery line",
      category: "Dal Mill",
      // TODO: replace with client photo
    },
    dalMill2: {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
      alt: "Industrial conveyor used in dal mill plant setup",
      category: "Dal Mill",
      // TODO: replace with client photo
    },
    dalMill3: {
      src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
      alt: "Storage hoppers and plant interior for processing",
      category: "Dal Mill",
      // TODO: replace with client photo
    },
    gates1: clientImages.bifoldGateMatteBlack,
    gates2: clientImages.slidingGateWoodMetal,
    gates3: clientImages.bifoldGateLaserCut,
    gates4: clientImages.bifoldGatePedestrian,
    gates5: clientImages.slidingGateNavyAccent,
    gates6: clientImages.rollingShutterAccess,
  },

  about: {
    workshop: {
      src: "/web-image/mild_steel_fabrication.png",
      alt: "JAYAM TECH ENGINEERING fabrication workshop environment",
    },
    team: {
      src: "/web-image/firefighting_steel.png",
      alt: "Industrial engineers reviewing fabrication equipment",
    },
  },

  cta: {
    src: "/web-image/boiler_pipelines.png",
    alt: "Industrial plant exterior representing engineering capability",
  },
};

/** Gallery grid: client project photos first, Unsplash as filler where needed */
export const galleryItems = [
  ...clientGateGallery,
  ...clientPoolGallery,
  unsplashImages.gallery.fabrication1,
  unsplashImages.gallery.fabrication2,
  unsplashImages.gallery.fabrication3,
  unsplashImages.gallery.fabrication4,
  unsplashImages.gallery.dalMill1,
  unsplashImages.gallery.dalMill2,
  unsplashImages.gallery.dalMill3,
  unsplashImages.gallery.pools3,
];
