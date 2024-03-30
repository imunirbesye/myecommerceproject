import React from "react";
import Header from "../layout/Header";
import AboutProduct from "../layout/AboutProduct";
import ProductMoreDetail from "../layout/ProductMoreDetail";
import BestSellerProduct from "../layout/BestSellerProducts";

export default function ProductPage() {
  return (
    <div className="bg-light-gray-1">
      <Header />
      <AboutProduct />
      <ProductMoreDetail />
      <BestSellerProduct />
    </div>
  );
}
