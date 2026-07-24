import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/company";
import { getServiceBySlug, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.details || service.description,
    openGraph: {
      title: `${service.title} | ${company.name}`,
      description: service.description,
      images: [{ url: service.image.src, alt: service.image.alt }],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden metallic-bg">
        <div className="absolute inset-0">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45 ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-navy/65" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/services"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-teal transition hover:text-teal-bright"
          >
            ← All services
          </Link>
          <div className="mt-4 flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-teal text-charcoal">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <div>
              <h1 className="font-display text-3xl font-bold text-steel-bright sm:text-5xl">
                <span className="steel-shimmer-text">{service.title}</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base text-steel-light/90 sm:text-lg">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden border border-steel/25 bg-navy">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div>
              <SectionHeading
                eyebrow="Overview"
                title="What this service covers"
                description={service.details}
              />
              {service.relatedProduct && (
                <Link
                  href={`/products/${service.relatedProduct}`}
                  className="mt-6 inline-flex text-sm font-semibold text-teal hover:text-teal-dark"
                >
                  Related product line →
                </Link>
              )}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="border border-steel/25 bg-white p-6">
              <h2 className="font-display text-xl font-bold text-navy">Key features</h2>
              <ul className="mt-4 space-y-3">
                {service.features?.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-ink-muted">
                    <span className="text-teal" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="border border-steel/25 bg-white p-6">
              <h2 className="font-display text-xl font-bold text-navy">Applications</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.applications?.map((app) => (
                  <li
                    key={app}
                    className="border border-steel/25 bg-surface px-3 py-1.5 text-sm text-ink-muted"
                  >
                    {app}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-teal">
                  Request a quote
                </Link>
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm border border-navy px-5 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-steel-bright"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Explore More" title="Other services" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Enquire about ${service.title}`}
        description="Share drawings, site photos, or approximate dimensions — we will respond with a clear quotation."
      />
    </>
  );
}
