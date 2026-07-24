import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="card-lift group flex h-full flex-col overflow-hidden border border-steel/25 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-navy">
        <Image
          src={product.heroImage.src}
          alt={product.heroImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent transition duration-500 group-hover:from-charcoal/90" />
        <div
          className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-steel-bright/20 to-transparent transition duration-700 group-hover:translate-x-[120%]"
          aria-hidden="true"
        />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {product.categories?.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="bg-charcoal/75 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal backdrop-blur-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t border-steel/15 p-5">
        <h3 className="font-display text-xl font-bold text-navy transition group-hover:text-gunmetal">
          {product.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-ink-muted">{product.summary}</p>
        <span className="mt-auto pt-3 text-sm font-semibold text-teal transition group-hover:translate-x-1">
          View details →
        </span>
      </div>
    </Link>
  );
}
