import React from "react";
import ProductCategories from "../layout/ProductCategories";
import ProductList from "../layout/ProductList";
import ClientList from "../layout/ClientList";

export default function ProductListPage() {
  return (
    <div className="bg-light-gray-1">
      <ProductCategories />
      <ProductList />
      <ClientList />
    </div>
  );
}
