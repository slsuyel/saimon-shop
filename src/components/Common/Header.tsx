"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, ShoppingCart, User2, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { toast } from "sonner";
import { useAppSelector } from "../Redux/hooks";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const items = useAppSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  const showAlert = () => {
    toast.warning(`This features is coming soon`);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300  ",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4 border-b bg-white dark:bg-background/90"
      )}
    >
      <nav className="container mx-auto px-2 flex items-center justify-between ">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Marketpro Logo"
                height={100}
                width={300}
                className="object-contain w-[120px] sm:w-[160px] rounded-md"
              />
            </div>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-2 group",
                pathname === item.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  pathname === item.href ? "w-full" : "w-0"
                )}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-medium">
                {items.length}
              </span>
            )}
          </Link>
          <ThemeToggle />
          {/* <Link href="/my-account" className="hidden md:block"> */}
          <Button onClick={showAlert} size="sm" className="font-medium">
            <User2 />
          </Button>
          {/* </Link> */}

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b"
          >
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block py-3 text-base font-medium transition-colors hover:text-primary border-b border-muted last:border-0",
                    pathname === item.href
                      ? "text-primary"
                      : "text-foreground/80"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/my-account">
                  <Button className="w-full">My Account</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
