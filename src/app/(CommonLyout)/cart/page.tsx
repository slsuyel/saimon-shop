"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { useAppDispatch, useAppSelector } from "@/components/Redux/hooks";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "@/components/Redux/Slice/cartSlice";
import { ArrowLeft, ShoppingCart, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    showAlert();
  };

  const showAlert = () => {
    toast.warning(`This features is coming soon`);
  };

  return (
    <main className=" container mx-auto px-2 md:px-4 py-20 lg:py-28">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Continue shopping
      </Link>

      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <Card className="p-12 text-center ">
          <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Add some products to get started!
          </p>
          <Link href="/">
            <Button>Start Shopping</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex gap-4">
                  <div className="relative w-24 h-24 bg-muted rounded-lg flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name || "img"}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/product/${item.id}`}>
                        <h3 className="font-semibold hover:text-primary transition line-clamp-2">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: String(item.id),
                                quantity: Math.max(item.quantity - 1, 1),
                              })
                            )
                          }
                          className="px-3 py-1 hover:bg-muted"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: String(item.id),
                                quantity: item.quantity + 1,
                              })
                            )
                          }
                          className="px-3 py-1 hover:bg-muted"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          dispatch(removeFromCart(String(item.id)))
                        }
                        className="text-destructive hover:bg-destructive/10 p-2 rounded transition"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="font-bold">Total</span>
                <span className="text-2xl font-bold text-primary">
                  ${(total * 1.1).toFixed(2)}
                </span>
              </div>

              <Button onClick={handleCheckout} className="w-full" size="lg">
                Proceed to Checkout
              </Button>

              <Button
                onClick={() => dispatch(clearCart())}
                variant="outline"
                className="w-full mt-3 bg-transparent"
              >
                Clear Cart
              </Button>
            </Card>
          </div>
        </div>
      )}
    </main>
  );
}
