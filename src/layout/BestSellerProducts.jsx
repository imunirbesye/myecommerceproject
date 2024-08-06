import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";

export default function BestSellerProducts() {
  const fetchState = useSelector((store) => store.product.fetchState);
  const products = useSelector((store) => store.product.productList);
  products.sort((a, b) => b.sell_count - a.sell_count);
  return (
    <section className="w-full bg-light-background-color flex flex-col items-center py-16  font-montserrat">
      <span className="text-second-text-color text-xl">Featured Products</span>
      <span className="text-2xl font-bold w-56 text-center mt-4 lg:w-[80rem]">
        BESTSELLER PRODUCTS
      </span>
      <span className="w-64 text-center mt-4 font-semibold text-second-text-color lg:w-[80rem]">
        Problems trying to resolve the conflict between
      </span>
      <div className="w-full flex flex-col items-center lg:w-[83rem] lg:flex lg:flex-row lg:justify-between lg:flex-wrap">
        {fetchState === "FETCHING" ? (
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
          products.slice(0, 8).map((prdct) => <ProductCard prdct={prdct} />)
        )}
      </div>
    </section>
  );
}
