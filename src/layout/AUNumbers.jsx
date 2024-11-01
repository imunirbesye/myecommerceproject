import React from "react";

import aboutUs1 from "../assets/images/aboutus1.png";

export default function AUGetQuote() {
  return (
    <div className="w-full flex flex-col items-center px-20 py-10 md:w-[800px] md:flex-row md:justify-between md:px-0 md:self-center lg:w-[900px]">
      <div className="flex flex-col items-center mb-16">
        <span className="text-4xl font-bold">15K</span>
        <span className="text-xs text-second-text-color font-bold">
          Happy Customers
        </span>
      </div>
      <div className="flex flex-col items-center mb-16">
        <span className="text-4xl font-bold">150K</span>
        <span className="text-xs text-second-text-color font-bold">
          Monthly Visitors
        </span>
      </div>
      <div className="flex flex-col items-center mb-16">
        <span className="text-4xl font-bold">15</span>
        <span className="text-xs text-second-text-color font-bold">
          Countries Worldwide
        </span>
      </div>
      <div className="flex flex-col items-center mb-16">
        <span className="text-4xl font-bold">100+</span>
        <span className="text-xs text-second-text-color font-bold">
          Top Partners
        </span>
      </div>
    </div>
  );
}
