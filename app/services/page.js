import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ServiceDetailSection from "@/components/ServiceDetailSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";
import { company } from "@/lib/company";

export const metadata = {
  title: { absolute: "Industrial Fabrication Services | JPS Chennai" },
  description:
    "Browse conveyor manufacturing, SS/MS fabrication, automated gates, piping, blowers, dust collectors, chimneys, tanks and custom engineering services in Chennai.",
  alternates: { canonical: "/services" },
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    title: "Industrial Fabrication Services | JPS Chennai",
    description: "Industrial manufacturing, fabrication and site installation services from JAYAM TECH ENGINEERING.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="metallic-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="spark-pulse text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-steel-bright sm:text-5xl">
            <span className="steel-shimmer-text">Industrial manufacturing & fabrication</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-light/90">
            From conveyors and automated gates to SS/MS works, piping, and custom plant solutions —
            each service below includes visuals and scope detail.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Quick Browse"
            title="All service lines"
            description={`${services.length} offerings — tap a card for the full image-led detail page.`}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) + 1}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-steel/20 bg-surface-warm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="In Depth"
            title="Service catalogue with visuals"
            description="Scroll each capability — photos explain the work, features list what you get."
          />
          <div className="mt-4">
            {services.map((service, index) => (
              <ServiceDetailSection key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need a custom fabrication quote?" />
    </>
  );
}
