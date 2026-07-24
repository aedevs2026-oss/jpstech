import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/company";

export const metadata = {
  title: "Contact",
  description:
    "Contact JAYAM TECH ENGINEERING in Tiruvottiyur, Chennai — call, WhatsApp, or send an enquiry for fabrication and product quotations.",
  openGraph: {
    title: `Contact | ${company.name}`,
    description: `Reach us at ${company.phone.primary} or visit our Tiruvottiyur works.`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="metallic-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            Request a quotation
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel-light/90">
            Share your requirement — material, approximate size, and site location — and we will
            respond with clarification questions and a quotation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Reach Us"
              title="Works & contact"
              description="Based in Shanmuga Puram, Tiruvottiyur — serving Greater Chennai and Tamil Nadu."
            />

            <address className="mt-8 space-y-5 text-sm not-italic text-ink-muted sm:text-base">
              <div>
                <p className="font-semibold text-navy">Address</p>
                <p className="mt-1">{company.address.full}</p>
              </div>
              <div>
                <p className="font-semibold text-navy">Phone (primary)</p>
                <p className="mt-1">
                  <a
                    href={`tel:${company.phone.primaryTel}`}
                    className="font-semibold text-teal hover:text-teal-dark"
                  >
                    {company.phone.primary}
                  </a>
                </p>
              </div>
              <div>
                {/* TODO: confirm secondary/works cell with client */}
                <p className="font-semibold text-navy">Phone (works cell)</p>
                <p className="mt-1">
                  <a
                    href={`tel:${company.phone.secondaryTel}`}
                    className="hover:text-teal"
                  >
                    {company.phone.secondary}
                  </a>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:${company.phone.primaryTel}`}
                  className="rounded-sm bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >
                  Call now
                </a>
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm bg-teal px-4 py-2.5 text-sm font-semibold text-navy hover:bg-teal-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  WhatsApp
                </a>
              </div>
            </address>

            <div className="mt-8 overflow-hidden border border-steel/20">
              <iframe
                title="JAYAM TECH ENGINEERING location map"
                src={company.mapEmbedUrl}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Enquiry Form"
              title="Send a message"
              description="Client-side form with API stub — plug Resend or another email provider when ready."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
