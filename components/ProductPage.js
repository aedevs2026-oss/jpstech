import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import ProductSpecTable from "./ProductSpecTable";
import ProductCard from "./ProductCard";
import CTASection from "./CTASection";
import { getRelatedProducts } from "@/lib/products";
import JsonLd from "@/components/JsonLd";
import { createBreadcrumbSchema } from "@/lib/seo";

export default function ProductPage({ product }) {
  const related = getRelatedProducts(product.related || []);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "" },
    { name: "Products", path: "/products" },
    { name: product.title, path: `/products/${product.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="relative isolate overflow-hidden metallic-bg">
        <div className="absolute inset-0">
          <Image
            src={product.heroImage.src}
            alt={product.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40 ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-navy/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="spark-pulse text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Products
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-steel-bright sm:text-5xl">
            <span className="steel-shimmer-text">{product.title}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel-light/90 sm:text-lg">
            {product.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {product.categories?.map((cat) => (
              <span
                key={cat}
                className="border border-steel/40 bg-charcoal/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal backdrop-blur-sm transition hover:border-teal"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-steel/20 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 text-sm leading-relaxed text-ink-muted sm:px-6 lg:px-8">
          JAYAM TECH ENGINEERING is based in Tiruvottiyur, Chennai and supplies engineered product
          solutions for industrial and commercial requirements. Contact us to discuss specifications,
          customization, and project coverage across Tamil Nadu.
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Specifications"
              title="Technical overview"
              description="Key construction and performance details for this product line."
            />
            <div className="mt-8">
              <ProductSpecTable rows={product.specRows} caption={`${product.shortTitle} Specs`} />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Advantages"
              title="Why this line"
              description="Engineered for industrial reliability and long service life."
            />
            <ul className="mt-8 space-y-3">
              {product.features?.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 border border-steel/15 bg-white px-4 py-3 text-sm text-ink-muted"
                >
                  <span className="mt-0.5 text-teal" aria-hidden="true">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {product.equipment?.length > 0 && (
          <div className="mt-16">
            <SectionHeading
              eyebrow="Equipment Range"
              title="Machines & plant modules"
              description="Individual units or complete plant setups available."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.equipment.map((item) => (
                <div
                  key={item.name}
                  className="border border-steel/20 bg-white p-5"
                >
                  <h3 className="font-display text-lg font-bold text-navy">{item.name}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{item.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.processCapabilities?.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-xl font-bold text-navy">Process capabilities</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {product.processCapabilities.map((cap) => (
                <li
                  key={cap}
                  className="bg-navy px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal"
                >
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.poolOptions && (
          <div className="mt-16">
            <SectionHeading
              eyebrow="Capacity Options"
              title="SS pool formats & sizes"
              description="Rectangular, round, and plunge configurations — including custom sizes."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <OptionList title="Rectangular" items={product.poolOptions.rectangular} />
              <OptionList title="Round" items={product.poolOptions.round} />
              <OptionList title="Plunge" items={product.poolOptions.plunge} />
            </div>
            {product.capacitySpecs?.length > 0 && (
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {product.capacitySpecs.map((spec) => (
                  <ProductSpecTable
                    key={spec.capacity}
                    rows={spec.rows}
                    caption={`${spec.capacity} — Spec Sheet`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {product.gallery?.length > 0 && (
          <div className="mt-16">
            <SectionHeading eyebrow="Gallery" title="Product visuals" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.gallery.map((img, i) => (
                <div key={`${img.src}-${i}`} className="relative aspect-[4/3] overflow-hidden bg-navy">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {product.video && (
          <div className="mt-16">
            <SectionHeading
              eyebrow="Demonstration"
              title="Remote access in action"
              description="Watch a completed automated door project with remote access."
            />
            <div className="mt-8 overflow-hidden border border-steel/20 bg-navy">
              <video
                className="aspect-video w-full"
                controls
                playsInline
                preload="metadata"
                poster={product.video.poster}
                title={product.video.title}
              >
                <source src={product.video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-16">
            <SectionHeading eyebrow="Explore More" title="Related products" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-muted">
              Looking for something else?{" "}
              <Link href="/products" className="font-semibold text-teal hover:text-teal-dark">
                Browse all products →
              </Link>
            </p>
          </div>
        )}
      </section>

      <CTASection
        title={`Enquire about ${product.shortTitle}`}
        description="Share dimensions, material preference, and site location for a tailored quotation."
      />
    </>
  );
}

function OptionList({ title, items }) {
  return (
    <div className="border border-steel/20 bg-white p-5">
      <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-ink-muted">
            <span className="text-teal" aria-hidden="true">
              •
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
