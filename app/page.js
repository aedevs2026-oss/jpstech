import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/company";
import { services } from "@/lib/services";
import { products, featuredProductSlugs } from "@/lib/products";
import { unsplashImages } from "@/lib/unsplashImages";
import { homeTestimonials } from "@/lib/testimonials";
import { stats } from "@/lib/stats";
import { clientVideo } from "@/lib/clientAssets";

export const metadata = {
  title: { absolute: "Industrial Fabrication & Engineering | JPS Chennai" },
  description:
    "JAYAM TECH ENGINEERING fabricates industrial conveyors, dal mill machinery, SS 304 pools, automated gates and custom metal structures from Tiruvottiyur, Chennai.",
  alternates: { canonical: "/" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Industrial Fabrication & Engineering | JPS Chennai",
    description:
      "Industrial equipment, SS/MS fabrication and engineered product lines from JAYAM TECH ENGINEERING in Chennai.",
    url: "/",
    images: [{ url: "/logo.png", alt: "JAYAM TECH ENGINEERING JPS logo" }],
  },
};

const heroSlides = [
  {
    id: "fabrication",
    eyebrow: company.name,
    title: "Heavy Engineering. Precise Fabrication.",
    description:
      "SS & MS fabrication, structural steel, piping, and custom plant solutions — built for serious industrial clients.",
    ctaHref: "/services",
    ctaLabel: "Our Services",
    image: unsplashImages.hero.fabrication,
  },
  {
    id: "pools",
    eyebrow: "SS 304 Swimming Pools",
    title: "Stainless Steel Pools, Engineered to Last",
    description:
      "Portable and custom rectangular, round, and plunge pools with precision fittings and durable finish.",
    ctaHref: "/products/ss-swimming-pools",
    ctaLabel: "View SS Pools",
    image: unsplashImages.hero.swimmingPools,
  },
  {
    id: "dal-mill",
    eyebrow: "Dal Mill Equipment",
    title: "Complete Dal Mill Plant Machinery",
    description:
      "From pre-cleaner to polisher, grader, conveyors, and storage — individual machines or full plant setup.",
    ctaHref: "/products/dal-mill-equipment",
    ctaLabel: "View Equipment",
    image: unsplashImages.hero.dalMill,
  },
  {
    id: "gates",
    eyebrow: "Gate Automation",
    title: "Sliding, Swing & Bi-Folding Gates",
    description:
      "Custom fabricated gates with remote access, automation, and optional shelter or canopy.",
    ctaHref: "/products/sliding-swing-gates",
    ctaLabel: "View Gates",
    image: unsplashImages.hero.gates,
  },
  {
    id: "piping",
    eyebrow: "Industrial Systems",
    title: "Boiler Piping, Blowers & Plant Systems",
    description:
      "Steam-line fabrication, vacuum cleaning systems, dust collectors, and industrial airflow equipment.",
    ctaHref: "/products/boiler-steam-vacuum-systems",
    ctaLabel: "View Systems",
    image: unsplashImages.hero.piping,
  },
];

export default function HomePage() {
  const featured = products.filter((p) => featuredProductSlugs.includes(p.slug));

  return (
    <>
      <HeroCarousel slides={heroSlides} />

      <section className="relative overflow-hidden border-b border-steel/25 bg-gradient-to-r from-charcoal via-navy to-gunmetal">
        <div className="absolute inset-0 metallic-band opacity-20" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-display text-sm font-bold text-steel-bright sm:text-base">
            {company.tagline}
          </p>
          <a
            href={`tel:${company.phone.primaryTel}`}
            className="text-sm font-semibold text-teal transition hover:text-teal-bright"
          >
            Call {company.phone.primary}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Services overview"
            description="End-to-end manufacturing and fabrication across conveyors, gates, SS/MS works, piping, and custom plant solutions."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.slice(0, 8).map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) + 1}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center" delay={2}>
          <Link
            href="/services"
            className="inline-flex rounded-sm border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition duration-300 hover:bg-navy hover:text-steel-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            View all {services.length} services →
          </Link>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-surface-warm py-16">
        <div
          className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-steel/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Products"
              title="Built for industrial & premium sites"
              description="Dal mill lines, SS 304 swimming pools, and automated gates — engineered in Chennai."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((product, i) => (
              <Reveal key={product.slug} delay={i + 1}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden metallic-bg py-14">
        <Reveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              light
              align="center"
              eyebrow="Why Choose Us"
              title="Reliability you can measure"
              description="Placeholder figures pending client confirmation — replace with verified metrics."
            />
            <dl className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-lift border border-steel/20 bg-white/5 px-4 py-6 text-center backdrop-blur-sm"
                >
                  {/* TODO: confirm with client */}
                  <dt className="text-xs font-semibold uppercase tracking-wider text-teal">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-bold text-steel-bright sm:text-4xl">
                    <span className="steel-shimmer-text">{stat.value}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Completed Projects"
              title="Remote-access gate automation"
              description="Watch a completed automated door project demonstrating remote access — fabricated and installed by our team."
            />
            <Link
              href="/products/sliding-swing-gates"
              className="mt-6 inline-flex text-sm font-semibold text-teal transition hover:translate-x-1 hover:text-teal-dark"
            >
              Explore automated gates →
            </Link>
          </Reveal>
          <Reveal delay={2}>
            <div className="overflow-hidden border border-steel/25 bg-navy shadow-xl shadow-charcoal/20 transition duration-500 hover:shadow-2xl hover:shadow-teal/10">
              <video
                className="aspect-video w-full"
                controls
                playsInline
                preload="metadata"
                poster={clientVideo.poster}
                title={clientVideo.title}
              >
                <source src={clientVideo.src} type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Testimonials"
                title="What clients say"
                description="Placeholder quotes — replace with verified client feedback."
              />
              <Link
                href="/testimonials"
                className="shrink-0 text-sm font-semibold text-teal hover:text-teal-dark"
              >
                All testimonials →
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeTestimonials.map((t, i) => (
              <Reveal key={t.id} delay={i + 1}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="card-lift grid items-center gap-0 overflow-hidden border border-steel/25 bg-white lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[360px]">
              <Image
                src={unsplashImages.about.workshop.src}
                alt={unsplashImages.about.workshop.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="p-8 sm:p-10">
              <SectionHeading
                eyebrow="About JPS"
                title="Chennai-based industrial fabricators"
                description="From Tiruvottiyur we design, fabricate, and install equipment and structures for process plants, commercial sites, and premium residences."
              />
              <Link
                href="/about"
                className="btn-metal mt-6 inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                Our story →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
