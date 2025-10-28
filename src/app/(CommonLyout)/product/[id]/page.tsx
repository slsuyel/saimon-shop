import ProductDetails from "@/components/Pages/Others/ProductDetails";
import { TProduct } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }: any) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product: TProduct = await res.json();

  return <ProductDetails product={product} />;
}
