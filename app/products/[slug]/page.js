import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { getProductBySlug, products } from "@/lib/products";
import { getProductPageMetadata, createBreadcrumbSchema } from "@/lib/seo";

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

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.title, path: `/products/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <ProductPage product={product} />
    </>
  );
}
