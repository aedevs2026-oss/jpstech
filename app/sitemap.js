import { company } from "@/lib/company";
import { products } from "@/lib/products";
import { services } from "@/lib/services";

export default function sitemap() {
  const base = company.siteUrl;
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/products",
    "/gallery",
    "/testimonials",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes];
}
