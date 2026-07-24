# JAYAM TECH ENGINEERING — Marketing Website

Premium multi-page marketing site for **JAYAM TECH ENGINEERING** (JPS), Chennai.

## Stack

- Next.js (App Router) — JavaScript only
- Tailwind CSS v4
- `next/image` + Unsplash remote images
- Client project photos & video in `/public`

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` — pages, layout, SEO (`sitemap.js`, `robots.js`), contact API stub
- `components/` — Header, Footer, HeroCarousel, ProductPage, forms, cards
- `lib/` — company data, products, services, gallery, testimonials, FAQ
- `public/` — `logo.jpg`, completed gate/door photos, remote-access demo video

## Notes for client handoff

Search the codebase for `// TODO:` to find placeholders that need confirmation:

- Stats numbers
- Testimonials
- Secondary phone / email / domain
- AMC & warranty terms
- Additional dal mill product photos
