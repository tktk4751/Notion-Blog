import React from "react";
import Navbar from "./Navbar";
import Footer from "@/components/Footer";

function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      {children && children}
      <Footer />
    </div>
  );
}

export default Layout;
