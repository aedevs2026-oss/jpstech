import Image from "next/image";
import Link from "next/link";
import ServiceIcon from "./ServiceIcon";

export default function ServiceCard({ service, href }) {
  const link = href || `/services/${service.slug}`;

  return (
    <Link
      href={link}
      className="card-lift group flex h-full flex-col overflow-hidden border border-steel/25 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy">
        {service.image && (
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent" />
        <span className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-charcoal/70 text-teal backdrop-blur-sm transition duration-500 group-hover:bg-teal group-hover:text-charcoal">
          <ServiceIcon name={service.icon} className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-bold text-navy transition group-hover:text-gunmetal">
          {service.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-ink-muted">
          {service.description}
        </p>
        <span className="mt-auto pt-2 text-sm font-semibold text-teal transition group-hover:translate-x-1">
          View service →
        </span>
      </div>
    </Link>
  );
}
