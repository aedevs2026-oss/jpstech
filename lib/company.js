export const company = {
  name: "JAYAM TECH ENGINEERING",
  shortName: "JPS",
  parentBrand: "JAYAM ENGINEERING",
  tagline: "Quality Fabrication • Reliable Engineering • On-Time Delivery",
  address: {
    line1: "117, 1st St, Shanmuga Puram",
    line2: "Tiruvottiyur, Chennai",
    city: "Greater Chennai",
    state: "Tamil Nadu",
    pincode: "600057",
    country: "India",
    full: "117, 1st St, Shanmuga Puram, Tiruvottiyur, Chennai, Greater Chennai, Tamil Nadu 600057",
  },
  phone: {
    primary: "+91 99624 62163",
    primaryTel: "+919962462163",
    // TODO: confirm secondary/works cell with client
    secondary: "+91 98439 62163",
    secondaryTel: "+919843962163",
  },
  whatsapp: "919962462163",
  whatsappUrl: "https://wa.me/919962462163",
  email: "info@jayamtechengineering.com", // TODO: confirm email with client
  mapEmbedUrl:
    "https://maps.google.com/maps?q=117,+1st+St,+Shanmuga+Puram,+Tiruvottiyur,+Chennai,+Tamil+Nadu+600057&output=embed",
  siteUrl: "https://jayamtechengineering.com", // TODO: confirm production domain
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/products", label: "Products", hasDropdown: true },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
