"use client";

import { useAppDispatch } from "@/components/Redux/hooks";
import { addToCart } from "@/components/Redux/Slice/cartSlice";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/lib/types";
import { ArrowLeft, ChevronDown, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import DealSection from "./DealSection";

interface ProductDetailsProps {
  product: TProduct;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [accordionOpen, setAccordionOpen] = useState<Record<string, boolean>>({
    details: true,
    return: false,
  });

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity,
        image: product.image,
      })
    );
    toast.success("Product added to cart!");
  };

  const toggleAccordion = (key: string) => {
    setAccordionOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className=" py-20 lg:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-2 md:px-4">
        <nav className="text-sm mb-4 flex items-center gap-1 text-muted-foreground">
          <Link
            href="/"
            className="hover:text-primary transition flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Home
          </Link>
          <span>/</span>
          <span className="font-medium">Shopping Cart</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div className="w-full lg:sticky lg:top-20">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full max-h-[500px] object-contain border rounded-lg p-3 dark:border-gray-700"
            />
          </div>

          <div className="w-full flex flex-col gap-6">
            <div>
              <h1 className=" text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {product.title}
              </h1>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">
                {product.description.slice(0, 120)}...
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center gap-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                  {product.rating.rate} <Star className="w-3 h-3 fill-white" />
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {product.rating.count} ratings
              </p>
            </div>

            <div className="flex gap-3 mt-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all"
              >
                <ShoppingCart size={16} /> Add to Cart
              </Button>
              <Button
                onClick={() => toast.warning("Feature coming soon")}
                className="flex-1 bg-primary text-white hover:bg-primary/90 transition-all"
              >
                Buy Now
              </Button>
            </div>

            <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
              {[
                {
                  key: "details",
                  title: "Product Details",
                  content: product.description,
                },
                {
                  key: "return",
                  title: "Return & Exchange Policy",
                  content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
                },
              ].map((section) => (
                <div key={section.key} className="mb-2">
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="w-full flex justify-between items-center px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    {section.title}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        accordionOpen[section.key] ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {accordionOpen[section.key] && (
                    <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                Customer Reviews
              </h2>
              <div className="flex items-center mt-2 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(product.rating.rate)
                        ? "fill-yellow-400"
                        : "fill-gray-300 dark:fill-gray-600"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {product.rating.rate.toFixed(1)} / 5
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Based on {product.rating.count} ratings
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 hidden md:block">
          <DealSection />
        </div>
      </div>
    </div>
  );
}
