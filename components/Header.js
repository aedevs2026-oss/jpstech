"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { company } from "@/lib/company";
import { services } from "@/lib/services";
import { products } from "@/lib/products";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const servicesId = useId();
  const productsId = useId();
  const headerRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setProductsOpen(false);
    setMobileServicesOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
        setProductsOpen(false);
      }
    }
    function onClickOutside(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setServicesOpen(false);
        setProductsOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  const linkClass = (href) =>
    `rounded-sm px-2 py-1 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
      pathname === href
        ? "text-teal"
        : "text-navy/80 hover:text-teal"
    }`;

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-steel/25 bg-surface/90 shadow-sm shadow-charcoal/5 backdrop-blur-xl transition-shadow duration-300"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>

          <div className="relative">
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-sm px-2 py-1 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
                pathname.startsWith("/services")
                  ? "text-teal"
                  : "text-navy/80 hover:text-teal"
              }`}
              aria-expanded={servicesOpen}
              aria-controls={servicesId}
              onClick={() => {
                setServicesOpen((v) => !v);
                setProductsOpen(false);
              }}
            >
              Services
              <Chevron open={servicesOpen} />
            </button>
            {servicesOpen && (
              <div
                id={servicesId}
                className="absolute left-0 top-full z-50 mt-2 max-h-[70vh] w-80 overflow-y-auto rounded-md border border-steel/20 bg-white p-2 shadow-xl"
                role="menu"
              >
                <Link
                  href="/services"
                  className="block rounded px-3 py-2 text-sm font-semibold text-navy hover:bg-surface"
                  role="menuitem"
                >
                  All Services
                </Link>
                <div className="my-1 h-px bg-steel/20" />
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block rounded px-3 py-2 text-sm text-ink-muted hover:bg-surface hover:text-navy"
                    role="menuitem"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-sm px-2 py-1 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
                pathname.startsWith("/products")
                  ? "text-teal"
                  : "text-navy/80 hover:text-teal"
              }`}
              aria-expanded={productsOpen}
              aria-controls={productsId}
              onClick={() => {
                setProductsOpen((v) => !v);
                setServicesOpen(false);
              }}
            >
              Products
              <Chevron open={productsOpen} />
            </button>
            {productsOpen && (
              <div
                id={productsId}
                className="absolute left-0 top-full z-50 mt-2 w-72 rounded-md border border-steel/20 bg-white p-2 shadow-xl"
                role="menu"
              >
                <Link
                  href="/products"
                  className="block rounded px-3 py-2 text-sm font-semibold text-navy hover:bg-surface"
                  role="menuitem"
                >
                  All Products
                </Link>
                <div className="my-1 h-px bg-steel/20" />
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="block rounded px-3 py-2 text-sm text-ink-muted hover:bg-surface hover:text-navy"
                    role="menuitem"
                  >
                    {p.shortTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {primaryLinks.slice(2).map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phone.primaryTel}`}
            className="text-sm font-semibold text-navy hover:text-teal"
          >
            {company.phone.primary}
          </a>
          <Link
            href="/contact"
            className="btn-teal px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-steel/30 p-2 text-navy lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-steel/20 bg-white lg:hidden"
          aria-label="Mobile"
        >
          <div className="space-y-1 px-4 py-4">
            <Link href="/" className="block rounded px-3 py-2 text-base font-medium text-navy hover:bg-surface">
              Home
            </Link>
            <Link href="/about" className="block rounded px-3 py-2 text-base font-medium text-navy hover:bg-surface">
              About
            </Link>

            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded px-3 py-2 text-base font-medium text-navy hover:bg-surface"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                Services
                <Chevron open={mobileServicesOpen} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-3 space-y-1 border-l border-steel/20 pl-3">
                  <Link href="/services" className="block rounded px-3 py-2 text-sm font-semibold text-navy">
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block rounded px-3 py-2 text-sm text-ink-muted"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded px-3 py-2 text-base font-medium text-navy hover:bg-surface"
                aria-expanded={mobileProductsOpen}
                onClick={() => setMobileProductsOpen((v) => !v)}
              >
                Products
                <Chevron open={mobileProductsOpen} />
              </button>
              {mobileProductsOpen && (
                <div className="ml-3 space-y-1 border-l border-steel/20 pl-3">
                  <Link href="/products" className="block rounded px-3 py-2 text-sm font-semibold text-navy">
                    All Products
                  </Link>
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="block rounded px-3 py-2 text-sm text-ink-muted"
                    >
                      {p.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {primaryLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded px-3 py-2 text-base font-medium text-navy hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 space-y-3 border-t border-steel/20 pt-4">
              <a
                href={`tel:${company.phone.primaryTel}`}
                className="block px-3 text-sm font-semibold text-teal"
              >
                {company.phone.primary}
              </a>
              <Link
                href="/contact"
                className="mx-3 block rounded-sm bg-teal px-4 py-3 text-center text-sm font-semibold text-navy"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

function Chevron({ open }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
