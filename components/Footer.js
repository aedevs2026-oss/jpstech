import Link from "next/link";
import { company } from "@/lib/company";
import { services } from "@/lib/services";
import { products } from "@/lib/products";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="metallic-bg text-steel-light">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="[&_span.font-display]:text-steel-bright [&_span.text-steel-dark]:text-steel">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-steel-light/80">
              {company.tagline}
            </p>
            <p className="text-sm text-steel-light/70">
              Industrial manufacturing & fabrication based in Chennai.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-bold text-steel-bright">Quick Links</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/products", label: "Products" },
                { href: "/gallery", label: "Gallery" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-teal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-base font-bold text-steel-bright">Services</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-teal transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="font-semibold text-teal hover:text-teal-bright">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-base font-bold text-steel-bright">Contact</h2>
            <address className="mt-4 space-y-3 text-sm not-italic text-steel-light/85">
              <p>{company.address.full}</p>
              <p>
                <a
                  href={`tel:${company.phone.primaryTel}`}
                  className="font-semibold text-steel-bright hover:text-teal"
                >
                  {company.phone.primary}
                </a>
              </p>
              {/* TODO: confirm secondary/works cell with client */}
              <p>
                <a
                  href={`tel:${company.phone.secondaryTel}`}
                  className="hover:text-teal"
                >
                  {company.phone.secondary}
                </a>
              </p>
              <p>
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-teal hover:text-teal-bright"
                >
                  WhatsApp us
                </a>
              </p>
            </address>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-steel">Follow</p>
              <ul className="mt-2 flex gap-3 text-sm">
                {/* TODO: add real social profile URLs */}
                <li>
                  <span className="text-steel-light/50">LinkedIn</span>
                </li>
                <li>
                  <span className="text-steel-light/50">Facebook</span>
                </li>
                <li>
                  <span className="text-steel-light/50">Instagram</span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-xs uppercase tracking-wider text-steel">Products</p>
              <ul className="space-y-1 text-sm">
                {products.slice(0, 3).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/products/${p.slug}`} className="hover:text-teal">
                      {p.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex h-px w-full steel-divider opacity-60" aria-hidden="true" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-steel-light/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>Designed & Developed for industrial excellence.</p>
        </div>
      </div>
    </footer>
  );
}
