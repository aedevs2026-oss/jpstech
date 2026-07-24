/**
 * Local client project photos & video from /public.
 * Prefer these over Unsplash wherever product realism matters.
 */

export const clientLogo = {
  src: "/logo.png",
  alt: "JAYAM TECH ENGINEERING logo — brushed steel gear badge with JPS wordmark",
};

export const clientVideo = {
  // Remote-access automated door demonstration
  src: "/1000262687.mp4",
  poster: "/1000262643.jpg",
  title: "Remote access automated door demonstration",
};

export const clientImages = {
  rollingShutterAccess: {
    src: "/1000262643.jpg",
    alt: "Installed white automated rolling shutter with electronic access control by Jayam Tech Engineering",
    category: "Gates",
  },
  ssPlungePoolWorkshop: {
    src: "/1000262666.jpg",
    alt: "Stainless steel plunge pool with anti-slip steps fabricated in the workshop",
    category: "Swimming Pools",
    // TODO: replace if client prefers finished on-site pool photo only
  },
  ssPoolLedNight: {
    src: "/1000262669.jpg",
    alt: "SS 304 rectangular stainless steel swimming pool with underwater LED lighting and ladder",
    category: "Swimming Pools",
  },
  slidingGateWoodMetal: {
    src: "/1000262689.jpg",
    alt: "Automated sliding gate with gunmetal steel frame and wood-finish panels",
    category: "Gates",
  },
  bifoldGateLaserCut: {
    src: "/1000262690.jpg",
    alt: "Custom stainless steel and wood-finish bi-folding driveway gate with laser-cut panels",
    category: "Gates",
  },
  bifoldGatePedestrian: {
    src: "/1000262693.jpg",
    alt: "Modern bi-folding main gate with matching pedestrian entrance in wood and black metal",
    category: "Gates",
  },
  bifoldGateMatteBlack: {
    src: "/1000262695.jpg",
    alt: "Matte black bi-folding industrial security gate with vertical slats and stainless handle",
    category: "Gates",
  },
  slidingGateNavyAccent: {
    src: "/1000262698.jpg",
    alt: "Custom sliding gate with wood-finish panels and navy blue geometric accents",
    category: "Gates",
  },
};

export const clientGateGallery = [
  clientImages.bifoldGateMatteBlack,
  clientImages.slidingGateNavyAccent,
  clientImages.slidingGateWoodMetal,
  clientImages.bifoldGateLaserCut,
  clientImages.bifoldGatePedestrian,
  clientImages.rollingShutterAccess,
];

export const clientPoolGallery = [
  clientImages.ssPoolLedNight,
  clientImages.ssPlungePoolWorkshop,
];
