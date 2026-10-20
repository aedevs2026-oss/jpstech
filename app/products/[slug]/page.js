import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { getProductBySlug, products } from "@/lib/products";
import { getProductPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found", robots: { index: false, follow: false } };
  return getProductPageMetadata(product);
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
