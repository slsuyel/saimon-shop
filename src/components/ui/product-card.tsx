"use client";

import { Button } from "@/components/ui/button";
import { TProduct } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "../Redux/hooks";
import { addToCart } from "../Redux/Slice/cartSlice";

interface ProductCardProps {
  product: TProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
        image: product.image,
      })
    );
  };

  return (
    <div className="group relative flex h-full flex-col rounded-xl border bg-white dark:bg-gray-900 p-1.5 md:p-3 transition-all duration-300 hover:border-primary hover:shadow-lg dark:hover:border-primary/60">
      {/* Product Image */}
      <Link
        href={`/product/${product.id}`}
        className="relative mb-4 overflow-hidden rounded-lg"
      >
        <div className="aspect-square overflow-hidden rounded-lg">
          <Image
            src={
              product.image ||
              "/placeholder.svg?height=300&width=300&query=product"
            }
            alt={product.title || "Product Image"}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex flex-1 flex-col">
        <Link
          href={`/product/${product.id}`}
          className="group-hover:text-primary"
        >
          <h3 className="mb-1 line-clamp-2 text-sm font-medium text-gray-900 dark:text-gray-100 transition-colors md:text-base">
            {product.title || "Untitled Product"}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mb-2 flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3.5 w-3.5 md:h-4 md:w-4",
                  i < product.rating.rate
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            ({product.rating.count})
          </span>
        </div>

        <div className="flex-1"></div>

        {/* Price */}
        <div className="mb-3 flex items-baseline gap-2">
          <span className="text-base  text-primary md:text-lg">
            ${product.price || 0}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-1 md:gap-2 justify-between">
          <Button
            onClick={handleAddToCart}
            className="flex-1 rounded-full bg-white dark:bg-gray-800 border-primary border text-primary dark:text-primary px-3 py-2 shadow-sm transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:shadow-md hover:scale-105 md:py-2"
            size="sm"
          >
            <ShoppingCart size={16} className="" />
            Cart
          </Button>
          <Button
            className="flex-1 rounded-full bg-primary px-3 py-2 text-white dark:text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:scale-105 md:py-2"
            size="sm"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
