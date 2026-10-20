import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { products } from "@/lib/products";
import { company } from "@/lib/company";

export const metadata = {
  title: { absolute: "Industrial Products & Machinery | JPS Chennai" },
  description:
    "Explore dal mill equipment, SS 304 swimming pools, pool ladders, automated gates and boiler steam-line vacuum systems from JAYAM TECH ENGINEERING.",
  alternates: { canonical: "/products" },
  alternates: { canonical: "/products" },
  openGraph: {
    type: "website",
    title: "Industrial Products & Machinery | JPS Chennai",
    description: "Browse engineered products and request specifications or a project quotation.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="metallic-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Products</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            Engineered product lines
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-light/90">
            Select a product for specifications, gallery, and enquiry options.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Catalogue"
          title="Our products"
          description="Dal mill plants, stainless steel pools, ladders, automated gates, and boiler steam-line systems."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <CTASection title="Looking for a custom product configuration?" />
    </>
  );
}
