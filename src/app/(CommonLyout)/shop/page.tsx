import { ProductSection } from "@/components/Pages/HomePage/ProductSection";
import { TProduct } from "@/lib/types";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products?limit=20", {
    cache: "no-store",
  });
  const products: TProduct[] = await res.json();

  return (
    <div className="container mx-auto px-2 lg:px-4 py-20 lg:py-28">
      <ProductSection products={products} />
    </div>
  );
}
