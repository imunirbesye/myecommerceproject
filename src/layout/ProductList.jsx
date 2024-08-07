import React from "react";

import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import ContentLoader from "react-content-loader";
import PaginationC from "../components/PaginationC";

export default function ProductList() {
  const fetchState = useSelector((store) => store.product.fetchState);
  let products = new Array();
  products = useSelector((store) => store.product.productList);
  products.sort((a, b) => a.id - b.id);

  return (
        <div className="flex flex-col items-center bg-light-background-color">
            <Filter />
            <div className="w-full flex flex-col items-center lg:w-[83rem] lg:flex-row lg:flex-wrap lg:justify-between">
        {fetchState == "FETCHING" ? (
          <ContentLoader
            speed={1}
            width={300}
            height={608}
            viewBox="0 0 300 608"
            backgroundColor="#d1cccc"
            foregroundColor="#ecebeb"
            className=""
          >
            <rect x="0" y="0" rx="3" ry="3" width="400" height="432" />
            <rect x="100" y="450" rx="3" ry="3" width="100" height="20" />
            <rect x="95" y="480" rx="3" ry="3" width="110" height="20" />
            <rect x="90" y="510" rx="3" ry="3" width="125" height="20" />
            <circle cx="127" cy="545" r="8" />
            <circle cx="144" cy="545" r="8" />
            <circle cx="161" cy="545" r="8" />
            <circle cx="178" cy="545" r="8" />
          </ContentLoader>
        ) : (
          products.map((product) => <ProductCard prdct={product} />)
        )}
            </div>
            <div className="flex flex-row items-center justify-center my-12 mb-20">
        <PaginationC />
            </div>
        </div>
    );
}
