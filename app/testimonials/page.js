import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { testimonials } from "@/lib/testimonials";
import { company } from "@/lib/company";

export const metadata = {
  title: "Testimonials",
  description:
    "Client feedback for JAYAM TECH ENGINEERING projects — dal mill plants, SS pools, gates, and industrial fabrication.",
  openGraph: {
    title: `Testimonials | ${company.name}`,
    description: "What industrial and commercial clients say about our work.",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="metallic-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Testimonials
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            Client feedback
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-light/90">
            {/* TODO: replace placeholder testimonials with real client quotes */}
            Placeholder reviews for layout — replace with verified client quotes before launch.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="Projects across industries"
          description="Dal mill plants, SS pools, automated gates, piping, and structural fabrication."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      <CTASection title="Ready to start your project?" />
    </>
  );
}
