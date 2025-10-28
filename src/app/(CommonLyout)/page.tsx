import HeroSlider from "@/components/Pages/HomePage/HeroSlider";
import { ProductSection } from "@/components/Pages/HomePage/ProductSection";
import { TProduct } from "@/lib/types";

export default async function Home() {
  // SSR fetch – avoids CORS
  const res = await fetch("https://fakestoreapi.com/products?limit=20", {
    cache: "no-store",
  });
  const products: TProduct[] = await res.json();

  return (
    <div className="">
      <HeroSlider />
      <ProductSection products={products} />
    </div>
  );
}
