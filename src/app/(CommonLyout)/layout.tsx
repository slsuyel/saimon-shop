import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import { MobileNav } from "@/components/Common/MobileNav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <MobileNav />
      <Footer />
    </div>
  );
};

export default layout;
