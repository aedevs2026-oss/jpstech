import { Libre_Baskerville, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { company } from "@/lib/company";
import { services } from "@/lib/services";
import "./globals.css";

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} | Industrial Fabrication Chennai`,
    template: `%s | ${company.name}`,
  },
  description:
    "JAYAM TECH ENGINEERING — quality fabrication, reliable engineering, and on-time delivery. SS pools, dal mill equipment, automated gates, and industrial fabrication in Chennai.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: company.name,
    title: company.name,
    description: company.tagline,
    images: [{ url: "/logo.png", width: 512, height: 512, alt: company.name }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  alternateName: [company.shortName, company.parentBrand],
  description: company.tagline,
  url: company.siteUrl,
  telephone: company.phone.primary,
  image: `${company.siteUrl}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.line1,
    addressLocality: "Tiruvottiyur, Chennai",
    addressRegion: company.address.state,
    postalCode: company.address.pincode,
    addressCountry: "IN",
  },

  areaServed: {
    "@type": "AdministrativeArea",
    name: "Greater Chennai, Tamil Nadu",
  },

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fabrication & Engineering Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
