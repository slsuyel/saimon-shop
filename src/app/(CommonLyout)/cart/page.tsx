"use client";

import { useAppDispatch, useAppSelector } from "@/components/Redux/hooks";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "@/components/Redux/Slice/cartSlice";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (!name || !phone || !address)
      return toast.warning("Please fill all the fields!");
    if (cartItems.length === 0) return toast.warning("Your cart is empty!");

    const loadingToastId = toast.loading("Processing your order...");

    setTimeout(() => {
      dispatch(clearCart());
      setShowSuccess(true);
      toast.dismiss(loadingToastId);
      toast.success("Checkout successful!");
    }, 1500);
  };

  return (
    <main className="container mx-auto px-2 lg:px-4 py-20 lg:py-28">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-primary font-medium hover:underline mb-4 sm:mb-6 text-sm sm:text-base"
      >
        <ArrowLeft className="w-4 h-4" />
        Continue Shopping
      </Link>

      <h1 className="text-lg sm:text-xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <Card className="p-8 sm:p-12 text-center rounded-xl shadow-lg">
          <ShoppingCart className="w-14 h-14 mx-auto mb-3 text-muted-foreground opacity-50" />
          <h2 className="text-lg sm:text-xl font-semibold mb-1">
            Your cart is empty
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            Add some products to get started!
          </p>
          <Link href="/">
            <Button>Start Shopping</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-5">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-2">
            {cartItems.map((item) => (
              <Card
                key={item.id}
                className="p-2 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-2 sm:gap-3">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-muted rounded-lg flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name || "img"}
                      fill
                      className="object-contain p-1 sm:p-2"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/product/${item.id}`}>
                        <h3 className="font-semibold text-sm sm:text-base hover:text-primary transition line-clamp-2">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2 sm:mt-3">
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: String(item.id),
                                quantity: Math.max(item.quantity - 1, 1),
                              })
                            )
                          }
                          className="px-2 py-1 sm:px-3 sm:py-1.5 hover:bg-gray-200 transition"
                        >
                          −
                        </button>
                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 font-medium">
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
                          className="px-2 py-1 sm:px-3 sm:py-1.5 hover:bg-gray-200 transition"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-sm sm:text-base font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() =>
                          dispatch(removeFromCart(String(item.id)))
                        }
                        className="text-destructive hover:bg-destructive/10 p-1 sm:p-2 rounded transition"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary & Checkout */}
          <div className="lg:col-span-1 flex flex-col gap-2 sm:gap-4">
            <Card className="p-2 sm:p-4 rounded-md sm:rounded-lg shadow-sm">
              <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">
                Order Summary
              </h2>
              <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-3 border-b pb-2 sm:pb-3">
                <div className="flex justify-between text-muted-foreground text-sm sm:text-base">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-sm sm:text-base">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-sm sm:text-base">
                  <span>Tax</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-lg sm:text-xl font-bold text-primary">
                <span>Total</span>
                <span>${(total * 1.1).toFixed(2)}</span>
              </div>
            </Card>

            <Card className="p-2 sm:p-4 rounded-lg shadow-sm">
              <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">
                Checkout Details
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCheckout();
                }}
                className="space-y-2"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition"
                />
                <textarea
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition"
                />
                <Button
                  type="submit"
                  className="w-full mt-1 sm:mt-2 text-sm sm:text-base"
                >
                  Proceed to Checkout
                </Button>
              </form>
            </Card>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-2">
          <Card className="p-6 sm:p-8 w-full max-w-md text-center rounded-xl shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              Order Placed!
            </h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              Thank you <span className="font-semibold">{name}</span>, your
              order has been successfully placed.
            </p>
            <Button
              onClick={() => setShowSuccess(false)}
              className="w-full text-sm sm:text-base"
            >
              Close
            </Button>
          </Card>
        </div>
      )}
    </main>
  );
}
