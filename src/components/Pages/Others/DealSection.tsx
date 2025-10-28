"use client";
import { useAllProductsQuery } from "@/components/Redux/RTK/productApi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProductCard } from "@/components/ui/product-card";
import { TProduct } from "@/lib/types";
import Link from "next/link";

const DealSection = () => {
  const { data, isLoading } = useAllProductsQuery({ limit: 10 });

  if (isLoading) {
    return <div>Loading . . .</div>;
  }

  const products: TProduct[] = data || [];
  return (
    <section className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Trending Products</h2>
        <Link
          href="/shop"
          className="text-sm md:text-base  bg-blue-400 text-white rounded-sm p-1 hover:underline"
        >
          View All
        </Link>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product: TProduct) => (
            <CarouselItem
              key={product.id}
              className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default DealSection;
