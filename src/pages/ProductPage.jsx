import React from "react";

import Header from "../layout/Header";
import AboutProduct from "../layout/AboutProduct";
import ProductMoreDetail from "../layout/ProductMoreDetail";
import BestSellerProduct from "../layout/BestSellerProducts";
import Footer from "../layout/Footer";

export default function ProductPage() {
  return (
    <div className="bg-light-gray-1 flex flex-col items-center">
      <Header />
      <AboutProduct />
      <ProductMoreDetail />
      <BestSellerProduct />
      <Footer />
    </div>
  );
}
