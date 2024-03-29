import React from "react";
import BlogContentCard from "../components/BlogContentCard";

export default function PracticeAdvice() {
    return (
        <div className="w-full flex flex-col items-center font-montserrat">
            <span className="text-lg font-bold text-primary-text-color mt-16">Practice Advice</span>
            <span className="w-52 text-5xl text-center font-bold mt-4 lg:w-[80rem]">Featured Products</span>
            <span className="w-64 text-center mt-4 font-semibold text-second-text-color mb-20 lg:w-[85rem]">Problems trying to resolve the conflict between the two major</span> 
            <div className="w-full flex flex-col justify-center lg:w-[62rem] lg:justify-between lg:flex-row">
                <BlogContentCard />
                <BlogContentCard />
                <BlogContentCard />
            </div>
        </div>
    );
}