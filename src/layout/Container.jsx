import React from "react";

import summer2020 from "../assets/images/asian-woman-man-with-winter-clothes.png";

export default function Container() {
    return (
        <div className="w-full flex flex-col  items-stretch font-montserrat lg:flex-row-reverse lg:w-[83rem] lg:items-center lg:justify-end lg:m-auto">
            <div className="flex flex-col items-center lg:items-start lg:ml-28">
                <span className="text-muted-text-color font-semibold mt-16">SUMMER 2020</span>
                <span className="w-48 text-5xl font-bold text-center mt-6 lg:text-start lg:w-[26rem]">Part of the Neural Unviverse</span>
                <span className="w-60 text-2xl text-second-text-color text-center font-[300] mt-6 lg:text-start lg:w-[23rem]">We know how large objects will act, but things on a small scale.</span>
                <div className=" flex flex-col lg:flex-row">
                    <button className="w-48 h-12 rounded-md bg-primary-color text-light-text-color font-bold mt-8 lg:mt-6 lg:bg-success-color">BUY NOW</button>
                    <button className="w-52 h-12 text-primary-text-color border-[1px] border-primary-color rounded-md font-bold mt-6 lg:ml-3 lg:border-success-text-color lg:text-success-text-color">Learn More</button>
                </div>
            </div>
            <div className="mt-6 lg:w-1/2 lg:mt-0">
                <img src={summer2020} className="w-full"/>
            </div>
        </div>
    );
}