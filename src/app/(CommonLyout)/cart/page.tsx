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
    }, 1200);
  };

  return (
    <main className="container mx-auto px-2 md:px-4 py-20 lg:py-28">
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

      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <Card className="p-8 text-center rounded-xl shadow-md">
          <ShoppingCart className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-50" />
          <h2 className="text-lg font-semibold mb-1">Your cart is empty</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Add products to get started!
          </p>
          <Link href="/">
            <Button size="sm">Start Shopping</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="lg:col-span-2 space-y-2">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-1 md:p-3 rounded-md  transition">
                <div className="flex gap-3 items-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name || "img"}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <Link href={`/product/${item.id}`}>
                        <h3 className="font-semibold text-sm hover:text-primary transition line-clamp-2">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-muted-foreground mt-1">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded overflow-hidden">
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: String(item.id),
                                quantity: Math.max(item.quantity - 1, 1),
                              })
                            )
                          }
                          className="px-2 py-0.5 hover:bg-gray-200 transition"
                        >
                          −
                        </button>
                        <span className="px-2 py-0.5 font-medium">
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
                          className="px-2 py-0.5 hover:bg-gray-200 transition"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-sm font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() =>
                          dispatch(removeFromCart(String(item.id)))
                        }
                        className="text-red-600 hover:bg-red-100 p-1 rounded transition"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Card className="p-3 rounded-lg shadow">
              <h2 className="text-base font-bold mb-2">Order Summary</h2>
              <div className="space-y-1 mb-3 border-b pb-2">
                <div className="flex justify-between text-muted-foreground text-sm">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-sm">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-sm">
                  <span>Tax (10%)</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-primary">
                <span>Total</span>
                <span>${(total * 1.1).toFixed(2)}</span>
              </div>
            </Card>

            <Card className="p-3 rounded-lg shadow">
              <h2 className="text-base font-bold mb-2">Checkout Details</h2>
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
                  className="w-full border rounded p-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border rounded p-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition"
                />
                <textarea
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border rounded p-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition resize-none h-20"
                />
                <Button type="submit" className="w-full text-sm">
                  Proceed to Checkout
                </Button>
              </form>
            </Card>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-2">
          <Card className="p-4 w-full max-w-md text-center rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-2">Order Placed!</h2>
            <p className="mb-4 text-sm">
              Thank you <span className="font-semibold">{name}</span>, your
              order has been successfully placed.
            </p>
            <Button onClick={() => setShowSuccess(false)} className="w-full">
              Close
            </Button>
          </Card>
        </div>
      )}
    </main>
  );
}
