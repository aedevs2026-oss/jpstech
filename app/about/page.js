import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { company } from "@/lib/company";
import { stats } from "@/lib/stats";
import { unsplashImages } from "@/lib/unsplashImages";
import { services } from "@/lib/services";

export const metadata = {
  title: { absolute: "About JAYAM TECH ENGINEERING | JPS Chennai" },
  description:
    "Learn about JAYAM TECH ENGINEERING, a Tiruvottiyur Chennai engineering and fabrication company working on industrial equipment, SS/MS fabrication, gates and plant systems.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: "About JAYAM TECH ENGINEERING | JPS Chennai",
    description: "Company background, engineering capabilities and fabrication services in Chennai, Tamil Nadu.",
    url: "/about",
  },
};

const capabilities = [
  {
    title: "Design & Detailing",
    text: "From client drawings or site measurements to fabrication-ready layouts.",
  },
  {
    title: "Precision Fabrication",
    text: "SS 304 and MS fabrication with attention to fit-up, finish, and durability.",
  },
  {
    title: "Automation & Access",
    text: "Motorized gates and remote-access systems for industrial and residential sites.",
  },
  {
    title: "Installation Support",
    text: "Erection, commissioning, and ongoing support for plant and site systems.",
  },
];

const timeline = [
  {
    label: "Foundation",
    text: "Established as a fabrication partner focused on reliable industrial workmanship in Chennai.",
    // TODO: confirm founding year with client
  },
  {
    label: "Capability Growth",
    text: "Expanded into dal mill equipment, SS swimming pools, automated gates, and plant systems.",
  },
  {
    label: "Today",
    text: "Delivering custom engineering solutions across Greater Chennai and Tamil Nadu.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="metallic-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">About</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            {company.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-light/90">{company.tagline}</p>
          <p className="mt-3 text-sm text-steel-light/70">
            Sister brand / parent identity: {company.parentBrand} ({company.shortName})
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Fabrication built for serious clients"
              description="We combine workshop craftsmanship with modern engineering practice — delivering equipment and structures that perform on site, not just on paper."
            />
            <p className="mt-6 text-sm leading-relaxed text-ink-muted sm:text-base">
              Based at {company.address.full}, our team fabricates and installs conveyors, SS and
              MS assemblies, swimming pools, automated gates, boiler piping, blowers, chimneys, and
              custom plant solutions. Every project is driven by clear communication, durable
              materials, and on-time delivery.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-steel/20">
            <Image
              src={unsplashImages.about.workshop.src}
              alt={unsplashImages.about.workshop.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-warm py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Mission"
            title="Quality. Reliability. Delivery."
            description="We exist to fabricate industrial and premium products that clients trust for performance and longevity."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <div key={item.title} className="border border-steel/20 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="Capability timeline"
          description="A high-level view of how our offering has grown — dates to be confirmed with the client."
        />
        <ol className="mt-10 space-y-6 border-l border-steel/30 pl-6">
          {timeline.map((item) => (
            <li key={item.label} className="relative">
              <span
                className="absolute -left-[1.9rem] top-1 h-3 w-3 rounded-full bg-teal ring-4 ring-surface"
                aria-hidden="true"
              />
              <h3 className="font-display text-xl font-bold text-navy">{item.label}</h3>
              <p className="mt-2 text-sm text-ink-muted sm:text-base">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="metallic-bg py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                {/* TODO: confirm with client */}
                <dt className="text-xs font-semibold uppercase tracking-wider text-teal">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-display text-3xl font-bold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quality Commitment"
          title="Standards we work to"
          description="Material selection, fabrication practice, and site finish are treated as non-negotiables."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "SS 304 for hygienic / corrosion-critical applications",
            "MS fabrication for structural and general industrial use",
            "Fit-up checks before dispatch and installation",
            "Clear quotation scope — materials, dimensions, and finish",
            "Installation & commissioning support where required",
            // TODO: confirm certifications / ISO / vendor approvals with client
            "Certifications & formal QA docs available on request",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 border border-steel/20 bg-white px-4 py-3 text-sm text-ink-muted"
            >
              <span className="text-teal" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-ink-muted">
          Service coverage includes {services.length} fabrication and engineering offerings — see
          the full list on our services page.
        </p>
      </section>

      <CTASection title="Partner with JAYAM TECH ENGINEERING" />
    </>
  );
}
