import React from "react";
import ProductCategories from "../layout/ProductCategories";
import ProductList from "../layout/ProductList";
import ClientList from "../layout/ClientList";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  setCategoryId,
  setFilter,
} from "../actions/productReducerActions";

export default function ProductListPage() {
  const { categoryId, filter } = useParams();
  const dispatch = useDispatch();

  if (categoryId != null) {
    dispatch(setCategoryId(Number(categoryId)));
    dispatch(fetchProducts(dispatch));
  }

  if (filter != null) {
    dispatch(setFilter(filter));
  }

  return (
    <div className="bg-light-gray-1">
      <ProductCategories />
      <ProductList />
      <ClientList />
    </div>
  );
}
