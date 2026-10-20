import { company } from "@/lib/company";
import { products } from "@/lib/products";
import { services } from "@/lib/services";

export default function sitemap() {
  const base = company.siteUrl;

  // Do not stamp every URL with the current time: lastModified should reflect
  // the actual content update date when that information is available.
  const staticRoutes = [
    { path: "", frequency: "weekly", priority: 1 },
    { path: "/about", frequency: "monthly", priority: 0.8 },
    { path: "/services", frequency: "weekly", priority: 0.9 },
    { path: "/products", frequency: "weekly", priority: 0.9 },
    { path: "/gallery", frequency: "monthly", priority: 0.6 },
    { path: "/faq", frequency: "monthly", priority: 0.6 },
    { path: "/contact", frequency: "monthly", priority: 0.8 },
  ].map(({ path, frequency, priority }) => ({
    url: `${base}${path}`,
    changeFrequency: frequency,
    priority,
  }));

  const productRoutes = products.map((product) => ({
    url: `${base}/products/${product.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes];
}
