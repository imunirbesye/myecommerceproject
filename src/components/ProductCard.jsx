import React from "react";

import productImage from "../assets/images/product-cover-5.png";
import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <Link to="/product/1" className="w-[85%] max-w-[35rem] lg:w-auto">
      <div className="min-w-[20rem] w-full max-w-[35rem] h-[38rem] lg:w-[20rem] mt-8 flex flex-col items-center font-montserrat">
        <img
          src={productImage}
          className="min-w-[20rem] w-full lg:w-[20rem] h-[27rem]"
        />
        <span className="font-bold text-xl mt-6">Graphic Design</span>
        <span className="text-second-text-color font-semibold text-lg mt-2">
          English Department
        </span>
        <span className="text-muted-text-color font-bold text-lg mt-3">
          $16.48 <span className="text-[#23856D]">$6.48</span>
        </span>
        <div>
          <ul className="w-20 items-center justify-between flex flex-row mt-4">
            <li className="w-4 h-4 rounded-full bg-primary-color"></li>
            <li className="w-4 h-4 rounded-full bg-secondary-color-1"></li>
            <li className="w-4 h-4 rounded-full bg-alert-color"></li>
            <li className="w-4 h-4 rounded-full bg-dark-background-color"></li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
