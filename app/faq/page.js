import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";
import { faqs } from "@/lib/faq";
import { company } from "@/lib/company";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about lead times, materials (SS 304 vs MS), installation, AMC, warranty, and requesting a quote from JAYAM TECH ENGINEERING.",
  openGraph: {
    title: `FAQ | ${company.name}`,
    description: "Answers about fabrication, materials, and project process.",
  },
};

export default function FaqPage() {
  return (
    <>
      <section className="metallic-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">FAQ</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            Common questions
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-light/90">
            Lead times, materials, installation support, service areas, and how to get a quote.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Help"
          title="Before you enquire"
          description="If your question is not listed, call or WhatsApp us — we respond with project-specific guidance."
        />
        <div className="mt-8 max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CTASection title="Still have a question?" description="Call, WhatsApp, or send a short enquiry — we will clarify scope quickly." />
    </>
  );
}
