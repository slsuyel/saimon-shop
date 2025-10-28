"use client";

import { useAppDispatch } from "@/components/Redux/hooks";
import { addToCart } from "@/components/Redux/Slice/cartSlice";
import { TProduct } from "@/lib/types";
import { ChevronDown, ChevronRight, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import DealSection from "./DealSection";

interface ProductDetailsProps {
  product: TProduct;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);

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
  const router = useRouter();
  const handleBuyNow = () => {
    handleAddToCart();
    toast.warning(`Feature coming soon`);
  };

  return (
    <div className="relative py-20 lg:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8 mb-8">
          <div className="w-full lg:sticky top-0">
            <div className="flex flex-row gap-2">
              <div className="flex-1">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt="Product"
                  className="w-full max-h-[500px] object-contain border p-4 dark:border-gray-700"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">
                {product.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                {product.description.slice(0, 150)}
              </p>
              <div className="flex items-center flex-wrap gap-4 mt-6">
                <h4 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-semibold">
                  ${product.price}
                </h4>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-lg px-2.5 bg-green-600 text-white rounded-full">
                  <p>{product.rating.rate}</p>
                  <Star className="w-3 h-3 fill-white" />
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {product.rating.count} ratings and 27 reviews
                </p>
              </div>
            </div>

            <hr className="  my-2 lg:my-4 border-slate-300 dark:border-gray-700" />

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">
                Variants
              </h3>
              <div className="flex flex-wrap gap-4 mt-4 dark:text-slate-300">
                No Variants
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="px-4 py-3 w-[45%] cursor-pointer border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium"
                >
                  Add to cart
                </button>

                <button
                  onClick={handleBuyNow}
                  type="button"
                  className="px-4 py-3 w-[45%] cursor-pointer border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-medium dark:bg-gray-800 dark:border-gray-700 dark:text-slate-100 dark:hover:bg-gray-700"
                >
                  Buy Now
                </button>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">
                Product Information
              </h3>
              <div className="mt-4" role="accordion">
                <div className="hover:bg-slate-100 dark:hover:bg-gray-800 transition-all">
                  <button
                    type="button"
                    className="w-full text-sm font-semibold cursor-pointer text-left px-4 py-2.5 text-slate-900 dark:text-slate-100 flex items-center"
                  >
                    <span className="mr-4">Product details</span>
                    <ChevronDown className="w-3 h-3 ml-auto shrink-0 -rotate-180" />
                  </button>
                  <div className="pb-4 px-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="hover:bg-slate-100 dark:hover:bg-gray-800 transition-all">
                  <button
                    type="button"
                    className="w-full text-sm font-semibold cursor-pointer text-left px-4 py-2.5 text-slate-900 dark:text-slate-100 flex items-center"
                  >
                    <span className="mr-4">Return and exchange policy</span>
                    <ChevronRight className="w-3 h-3 ml-auto shrink-0 -rotate-90" />
                  </button>
                  <div className="pb-4 px-4 hidden">
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="  my-2 lg:my-4 border-slate-300 dark:border-gray-700" />

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">
                Customer Reviews
              </h3>
              <div className="flex items-center gap-1.5 mt-2 lg:mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(product.rating.rate)
                        ? "fill-orange-200"
                        : "fill-[#CED5D8] dark:fill-gray-600"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center flex-wrap gap-4 mt-4">
                <h4 className="text-2xl sm:text-3xl text-slate-900 dark:text-slate-100 font-semibold">
                  4.0 / 5
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Based on {product.rating.count} ratings
                </p>
              </div>
            </div>
          </div>
        </div>

        <DealSection />
      </div>
    </div>
  );
}
