import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { getProductBySlug, products } from "@/lib/products";
import { company } from "@/lib/company";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: product.title,
    description: product.summary,
    openGraph: {
      title: `${product.title} | ${company.name}`,
      description: product.summary,
      images: [{ url: product.heroImage.src, alt: product.heroImage.alt }],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
