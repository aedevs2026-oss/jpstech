import Image from "next/image";
import Link from "next/link";
import ServiceIcon from "./ServiceIcon";
import Reveal from "./Reveal";

/** Elaborate alternating image + copy blocks for the services catalogue */
export default function ServiceDetailSection({ service, index = 0 }) {
  const imageLeft = index % 2 === 0;

  return (
    <article
      id={service.slug}
      className="scroll-mt-28 border-b border-steel/20 py-12 last:border-b-0 sm:py-16"
    >
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
          imageLeft ? "" : "lg:[&>*:first-child]:order-2"
        }`}
      >
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden border border-steel/25 bg-navy shadow-lg shadow-charcoal/10">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-charcoal/75 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal backdrop-blur-sm">
              <ServiceIcon name={service.icon} className="h-4 w-4" />
              Service
            </span>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">
              {String(index + 1).padStart(2, "0")} / Capability
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              {service.details || service.description}
            </p>

            {service.features?.length > 0 && (
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 border border-steel/15 bg-surface/80 px-3 py-2 text-sm text-ink-muted"
                  >
                    <span className="text-teal" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {service.applications?.length > 0 && (
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-steel-dark">
                  Typical applications
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {service.applications.map((app) => (
                    <li
                      key={app}
                      className="bg-navy px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-teal"
                    >
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`/services/${service.slug}`}
                className="btn-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                Full details
              </Link>
              <Link
                href="/contact"
                className="rounded-sm border border-navy px-5 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-steel-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                Enquire
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
