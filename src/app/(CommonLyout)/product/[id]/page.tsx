import ProductDetails from "@/components/Pages/Others/ProductDetails";
import { TProduct } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }: any) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");

  const res = await fetch(`${baseUrl}/products/${params.id}`);
  if (!res.ok) throw new Error("Failed to fetch product");

  const product: TProduct = await res.json();

  return <ProductDetails product={product} />;
}
