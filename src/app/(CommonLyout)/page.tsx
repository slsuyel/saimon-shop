import HeroSlider from "@/components/Pages/HomePage/HeroSlider";
import { ProductSection } from "@/components/Pages/HomePage/ProductSection";
import { TProduct } from "@/lib/types";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");

  const res = await fetch(`${baseUrl}/products?limit=20`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");

  const products: TProduct[] = await res.json();

  return (
    <div>
      <HeroSlider />
      <ProductSection products={products} />
    </div>
  );
}
