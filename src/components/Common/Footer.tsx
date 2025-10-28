import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-200">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto py-10 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-xl font-bold text-white mb-2">
                Join our newsletter
              </h3>
              <p className="text-gray-400">
                Get exclusive offers, new product alerts and 10% off your first
                order
              </p>
            </div>
            <div className="w-full md:w-auto flex-1 max-w-md">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 focus:border-gray-600 text-white"
                />
                <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">
                Saimon<span className="text-rose-500">Shop</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Your one-stop destination for premium products with exceptional
              quality and unbeatable prices.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5 text-gray-300" />
              </Link>
              <Link
                href="/"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5 text-gray-300" />
              </Link>
              <Link
                href="/"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5 text-gray-300" />
              </Link>
              <Link
                href="/"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5 text-gray-300" />
              </Link>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Commerce Street, Shopping District, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-400">support@saimonshop.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h6 className="text-white font-semibold uppercase tracking-wider">
              Shop
            </h6>
            <ul className="space-y-3">
              {[
                "New Arrivals",
                "Best Sellers",
                "Trending Now",
                "Summer Collection",
                "Winter Essentials",
                "Accessories",
                "Gift Cards",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-rose-500 transition-colors mr-1" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div className="space-y-4">
            <h6 className="text-white font-semibold uppercase tracking-wider">
              Account
            </h6>
            <ul className="space-y-3">
              {[
                "My Account",
                "Orders History",
                "Wishlist",
                "Returns",
                "Track Order",
                "Shipping Info",
                "Gift Cards",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-rose-500 transition-colors mr-1" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h6 className="text-white font-semibold uppercase tracking-wider">
              Company
            </h6>
            <ul className="space-y-3">
              {[
                "About Us",
                "Careers",
                "Press",
                "Affiliates",
                "Terms & Conditions",
                "Privacy Policy",
                "Cookie Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-rose-500 transition-colors mr-1" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SaimonShop. All rights reserved.
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://gadgetbd.com/wp-content/uploads/2020/03/SSLCommerz-Pay-With-logo-All-Size-01.png"
                width={600}
                height={100}
                alt="Payment methods"
                className=" w-auto"
              />
            </div>
            <div className="text-gray-500 text-sm">
              <Link href="/" className="hover:text-white">
                Terms
              </Link>
              <span className="mx-2">•</span>
              <Link href="/" className="hover:text-white">
                Privacy
              </Link>
              <span className="mx-2">•</span>
              <Link href="/" className="hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
