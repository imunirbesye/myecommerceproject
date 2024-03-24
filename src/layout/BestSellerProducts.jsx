import React from "react";
import ProductCard from "../components/ProductCard";

export default function BestSellerProducts() {
    return (
        <section className="w-full bg-light-background-color flex flex-col items-center py-16  font-montserrat">
            <span className="text-second-text-color text-xl">Featured Products</span>
            <span className="text-2xl font-bold w-56 text-center mt-4">BESTSELLER PRODUCTS</span>
            <span className="w-64 text-center mt-4 font-semibold text-second-text-color">Problems trying to resolve the conflict between</span>
            <div className="lg:w-[83rem] lg:flex lg:flex-row lg:justify-between lg:flex-wrap">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
}