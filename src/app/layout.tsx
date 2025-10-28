import Provider from "@/components/Provider/MainProvider";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Saimon Shop | Online Store in Bangladesh",
  description:
    "Saimon Shop offers the best online shopping experience in Bangladesh. Discover top-quality products, exclusive deals, and fast delivery!",
  keywords: [
    "Saimon Shop",
    "Online Shopping Bangladesh",
    "Buy Products Online",
    "E-commerce BD",
    "Best Deals",
  ],
  authors: [{ name: "Suyel Haque" }],
  openGraph: {
    title: "Saimon Shop | Online Store in Bangladesh",
    description:
      "Shop top-quality products with great discounts and fast delivery across Bangladesh.",
    url: "https://saimon-shop.vercel.app",
    siteName: "Saimon Shop",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} font-sans antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
