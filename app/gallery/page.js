import SectionHeading from "@/components/SectionHeading";
import GalleryFilter from "@/components/GalleryFilter";
import CTASection from "@/components/CTASection";
import { galleryItems } from "@/lib/unsplashImages";

export const metadata = {
  title: { absolute: "Project Gallery | JAYAM TECH ENGINEERING JPS" },
  description:
    "View project images of automated gates, stainless steel swimming pools, fabrication works and industrial equipment from JAYAM TECH ENGINEERING.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    type: "website",
    title: "Project Gallery | JAYAM TECH ENGINEERING JPS",
    description: "Images of fabrication and product projects.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <section className="metallic-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Gallery</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            Project & product visuals
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-light/90">
            Client project photos for gates and SS pools, with Unsplash fillers for fabrication and
            dal mill until additional client assets arrive.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Filter"
          title="Browse by category"
          description="Fabrication, Swimming Pools, Dal Mill, and Gates."
        />
        <div className="mt-8">
          <GalleryFilter items={galleryItems} />
        </div>
      </section>

      <CTASection title="Want your project featured here?" />
    </>
  );
}
