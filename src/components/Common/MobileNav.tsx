"use client";

import { Button } from "@/components/ui/button";
import { Home, ListTodo, ShoppingCart, Store, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../Redux/hooks";

export function MobileNav() {
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 border-t bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300 md:hidden">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        <Link
          href="/"
          className="inline-flex flex-col items-center justify-center px-5 py-1 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors duration-300"
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="#"
          className="inline-flex flex-col items-center justify-center px-5 py-1 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors duration-300"
        >
          <ListTodo className="w-6 h-6" />
          <span className="text-xs">Category</span>
        </Link>
        <Link
          href="/shop"
          className="inline-flex flex-col items-center justify-center px-5 py-1 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors duration-300"
        >
          <Store className="w-6 h-6" />
          <span className="text-xs">Shop</span>
        </Link>
        <Link
          href="#"
          className="inline-flex flex-col items-center justify-center px-5 py-1 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors duration-300"
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Account</span>
        </Link>
      </div>

      {/* Floating Cart Button */}
      <Button
        onClick={() => router.push(`/cart`)}
        className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full w-12 h-12 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 transition-colors duration-300"
        size="icon"
        aria-label="Shopping cart"
      >
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-white dark:text-black" />
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
            {cartItems.length}
          </span>
        </div>
      </Button>
    </div>
  );
}
