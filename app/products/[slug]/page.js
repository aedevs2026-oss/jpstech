import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { getProductBySlug, products } from "@/lib/products";
import { company } from "@/lib/company";
import { buildMetaDescription } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found", robots: { index: false, follow: false } };

  const path = `/products/${product.slug}`;
  const title = `${product.title} | JPS Chennai`;
  const description = buildMetaDescription(product.summary, product.summary);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      siteName: company.name,
      images: [{ url: product.heroImage.src, alt: product.heroImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.heroImage.src],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
