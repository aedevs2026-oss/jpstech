# Cursor Build Prompt — JAYAM TECH ENGINEERING Website

Paste this whole block into Cursor as your initial project prompt.

---

## Project Brief

Build a **premium, multi-page, fully responsive marketing website** for **JAYAM TECH ENGINEERING**, an industrial manufacturing & fabrication company based in Chennai, India.

### Company Identity
- **Brand name:** JAYAM TECH ENGINEERING (parent/sister brand: JAYAM ENGINEERING / "JPS")
- **Tagline:** "Quality Fabrication • Reliable Engineering • On-Time Delivery"
- **Logo:** Brushed steel gear-shaped badge with "JAYAM" (top arc), "JPS" (center, bold serif), "ENGINEERING" (bottom arc), and a phone number underneath. Use this as visual DNA: **gunmetal / brushed-steel gray, deep navy blue, teal/cyan accent, black text on metal.**
- **Address:** 117, 1st St, Shanmuga Puram, Tiruvottiyur, Chennai, Greater Chennai, Tamil Nadu 600057
- **Phone (primary):** +91 99624 62163
- **Phone (secondary/works cell, confirm with client):** +91 98439 62163

### Design Direction
- Industrial-premium aesthetic — think "heavy engineering meets modern SaaS." Not playful, not generic corporate-blue-and-white.
- Color palette (derive from logo): brushed steel gray (#8b8f94 range), deep navy (#0b1f3a / #10284a range), teal accent (#0fb5ba / #14b8bd range), near-black text, off-white background (#f5f6f7).
- Typography: strong serif or slab-serif for headings (echoing the engraved "JPS" wordmark), clean sans-serif for body (Inter, or similar via next/font).
- Use subtle metallic/gradient textures on hero sections and section dividers (CSS gradients, not images) to nod to the brushed-steel logo without looking kitschy.
- Generous whitespace, large imagery, confident typography — this should read like a company that fabricates for serious industrial clients, not a template site.

---

## Tech Stack (STRICT)

- **Next.js** (latest stable, **App Router**)
- **JavaScript only — NO TypeScript.** All files `.js` / `.jsx`, no `.ts` / `.tsx`, no `tsconfig.json`.
- **Tailwind CSS only** for all styling. **No inline `style={{}}` props, no CSS Modules, no styled-components, no plain `.css` files beyond `globals.css` (base/reset + Tailwind directives + `@font-face` if needed).**
- Images via `next/image`.
- Deploy target: Vercel-compatible (no server-only Node APIs that break edge/serverless).
- Use `next/font` for font loading (no external `<link>` font tags in `<head>`).

---

## Image Sourcing (Unsplash)

Use high-quality, thematically accurate Unsplash photos for every visual — no stock-photo-obviously-fake vibes, no people unless clearly professional/industrial context.

- Use Unsplash **Source** or direct photo URLs (`https://images.unsplash.com/photo-...`) via `next/image` with `remotePatterns` for `images.unsplash.com` configured in `next.config.js`.
- Search themes to pull from: *industrial fabrication workshop*, *stainless steel welding*, *steel factory machinery*, *CNC metal fabrication*, *industrial conveyor belt*, *steel pipe factory*, *rooftop swimming pool*, *modern swimming pool blue water*, *industrial gate automation*, *steel structure construction*, *factory warehouse interior*, *industrial blower fan machine*, *chimney industrial exhaust*.
- Every image needs a real, descriptive `alt` tag for SEO/accessibility.
- Build a small `lib/unsplashImages.js` constants file mapping section → curated image URL + alt text, so images are centrally managed and easy to swap for real client photos later (the client already has real product photos — leave clear `// TODO: replace with client photo` comments where product-specific realism matters, e.g. dal mill equipment, SS pools).

---

## Site Structure / Pages

Use the App Router with a shared layout (`app/layout.js`) containing the header/nav and footer.

1. **Home (`/`)**
   - Responsive **hero banner slider** (auto-playing, swipeable on mobile, pausable, with dot/arrow controls) — 3–5 slides covering: fabrication works, SS swimming pools, dal mill equipment, gate automation. Built with plain React state + Tailwind transitions (no heavy carousel dependency needed, but `embla-carousel-react` is acceptable if it speeds things up).
   - Services overview grid (icon + title + 1-line description) covering all services below.
   - Featured products strip (Dal Mill Equipment / Stainless Steel Swimming Pools / Sliding & Swing Gates).
   - "Why Choose Us" stats bar (years of experience, projects completed, on-time delivery %, etc. — use placeholder numbers marked `// TODO: confirm with client`).
   - Testimonials preview (3 cards).
   - CTA banner → Contact.

2. **About (`/about`)**
   - Company story, mission, capabilities, certifications/quality commitments.
   - Timeline or capability icons.

3. **Services (`/services`)** — overview page linking to each service, listing ALL of:
   - Belt Conveyor Manufacturing
   - Screw Conveyor Manufacturing
   - Sliding Gate Fabrication & Automation
   - Swing Gate / Bi-folding Gate Fabrication & Automation (with remote access)
   - Stainless Steel (SS) Fabrication Works
   - Mild Steel (MS) Fabrication Works
   - Fire Fighting Pipeline Installation
   - Boiler Pipeline Fabrication & Installation (steam line)
   - Industrial Blower Manufacturing
   - Industrial Fan Manufacturing (All Types)
   - Chimney Fabrication & Installation
   - Vacuum Cleaning System Manufacturing (boiler steam line vacuum cleaner)
   - Dust Collector System Manufacturing
   - Structural Steel Fabrication
   - Industrial Piping Works
   - Tank Fabrication
   - Platform & Staircase Fabrication
   - Custom Engineering & Fabrication Solutions

4. **Products (`/products`)** — grid linking to individual product detail pages. Each product below gets its own **dynamic route** `app/products/[slug]/page.js` with a shared `ProductPage` template component (hero image, spec table, gallery, features, related products, CTA):
   - **Dal Mill Equipment** (Pre-Cleaner, De-Stoner, Dal Dryer, Dal Splitter, Dal Polisher, Dal Grader, Vibro Separator, Bucket Elevator, Screw Conveyor, Belt Conveyor, Peas Conveyor, Storage Hopper, full Dal Mill Plant Setup) — pull spec/feature copy structure from client's equipment chart (dust removal, moisture reduction, splitting, polishing, grading, conveying, storage; features: High Efficiency, Low Power Consumption, Easy Installation & Maintenance, Long Life & Durable, Suitable for All Types of Dal Processing).
   - **Stainless Steel Swimming Pools** (SS 304 grade) — rectangular portable pools (4,000 / 8,000 / 9,000 / 10,000 / 12,000 LTR options + custom rectangular 10ft×5ft×4ft), round pools (4,000–12,000 LTR), plunge pools. Include a spec table component reusable per capacity (material, wall/base thickness, frame, finish, inlet/outlet, filtration outlet count, inlet jets, overflow).
   - **Swimming Pool Ladders** (SS 304, both-side access, anti-slip steps, heavy-duty flange, complete fixing kit).
   - **Sliding, Swing & Bi-Folding Gates** with remote/automated access and shelter/canopy options.
   - **Boiler Steam Line & Vacuum Cleaning Systems.**
   - Reuse one `ProductSpecTable` component (props: rows array) across product pages rather than duplicating markup.

5. **Gallery (`/gallery`)**
   - Filterable image grid (tabs: Fabrication / Swimming Pools / Dal Mill / Gates) using client's real product photos where available; Unsplash as filler only where no client photo exists.

6. **Testimonials (`/testimonials`)**
   - Full testimonial list, card layout, star ratings, client name + company + project type. Mark copy as `// TODO: replace placeholder testimonials with real client quotes`.

7. **FAQ (`/faq`)**
   - Accordion component (built with plain React state + Tailwind, no extra dependency needed) covering: lead times, custom fabrication, materials used (SS 304 vs MS), installation & AMC support, service areas, warranty, how to request a quote.

8. **Contact (`/contact`)**
   - Address, both phone numbers, a `tel:` and `wa.me` (WhatsApp) link, an embedded Google Map iframe using the address, and a contact form (client-side only — wire to a `mailto:` fallback or a simple API route stub at `app/api/contact/route.js` that logs/returns success; note in a comment where to plug a real email service like Resend).

### Global Components
- `Header` — sticky nav, logo, dropdown for Services, dropdown for Products, mobile hamburger menu (Tailwind + React state, fully accessible with `aria-expanded`).
- `Footer` — address, phone, quick links, services list, social placeholders, "Designed & Developed" line optional.
- `Slider` / `HeroCarousel`
- `SectionHeading`
- `ProductCard`
- `ServiceCard`
- `ProductSpecTable`
- `TestimonialCard`
- `FaqAccordion`
- `CTASection`
- `WhatsAppFloatButton` (fixed floating button, links to `https://wa.me/919962462163`)

---

## Responsiveness & Accessibility
- Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).
- All interactive elements keyboard-navigable, proper `alt` text, semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Lighthouse targets: Performance 90+, Accessibility 95+, SEO 95+.

## SEO Basics (build in now)
- Per-page `metadata` exports in each `page.js` (title, description, OpenGraph).
- `app/sitemap.js` and `app/robots.js`.
- JSON-LD `LocalBusiness` schema in the root layout with the company name, address, phone, and service list.

---

## Deliverable Instructions for Cursor
1. Scaffold the Next.js JS project with Tailwind configured.
2. Build shared layout, design tokens (colors/fonts in `tailwind.config.js`), and global components first.
3. Build Home page with hero slider.
4. Build Services, Products (including dynamic product routes), Gallery, Testimonials, FAQ, About, Contact.
5. Wire up the LocalBusiness JSON-LD, sitemap, robots.
6. Do a final responsive QA pass at 375px / 768px / 1280px / 1536px widths.
7. Leave clear `// TODO:` comments anywhere a placeholder (stat number, testimonial, phone number) needs client confirmation.

Ask me before installing any dependency beyond: `next`, `react`, `react-dom`, `tailwindcss`, `postcss`, `autoprefixer`, and (optionally) `embla-carousel-react` for the slider.