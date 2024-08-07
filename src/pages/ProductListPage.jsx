import React from "react";
import ProductCategories from "../layout/ProductCategories";
import ProductList from "../layout/ProductList";
import ClientList from "../layout/ClientList";
import { useParams } from "react-router-dom";

export default function ProductListPage() {
  let { page, gender, filter, category } = useParams();

  console.log(page + " " + gender + " " + filter + " " + category);

  return (
    <div className="bg-light-gray-1">
      <ProductCategories />
      <ProductList />
      <ClientList />
    </div>
  );
}
