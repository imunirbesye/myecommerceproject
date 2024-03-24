import React from "react";

import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
    return(
        <div className="flex flex-col items-center bg-light-background-color">
            <Filter />
            <div className="flex flex-col items-center lg:w-[83rem] lg:flex-row lg:flex-wrap lg:justify-between">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="flex flex-row items-center justify-center my-12 mb-20">
                <ul className="flex flex-row">
                    <li className="px-6 py-5 text-muted-text-color font-bold bg-[#F3F3F3] border-[1px] border-muted-text-color rounded-l-md">First</li>
                    <li className="px-4 py-5 text-primary-text-color font-bold bg-light-background-color border-[1px] border-l-[0px] border-muted-text-color">1</li>
                    <li className="px-4 py-5 text-primary-text-color font-bold bg-light-background-color border-[1px] border-l-[0px] border-muted-text-color">2</li>
                    <li className="px-4 py-5 text-primary-text-color font-bold bg-light-background-color border-[1px] border-l-[0px] border-muted-text-color">3</li>
                    <li className="px-6 py-5 text-muted-text-color font-bold bg-[#F3F3F3] border-[1px] border-l-0 border-muted-text-color rounded-r-md">Next</li>
                </ul>
            </div>
        </div>
    );
}