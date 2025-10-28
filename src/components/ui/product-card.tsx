"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TProduct } from "@/lib/types";
import { ShoppingCart, Star } from "lucide-react";
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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <Link href={`/product/${product.id}`} className="flex-1">
        <div className="relative w-full h-48 bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-contain p-4"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col gap-3 flex-1">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold line-clamp-2 hover:text-primary transition">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating.rate}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.rating.count})
          </span>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <Button size="sm" onClick={() => handleAddToCart()} className="gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
}
