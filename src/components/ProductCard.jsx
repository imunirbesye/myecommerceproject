import React from "react";

import productImage from "../assets/images/product-cover-5.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductCard(props) {
  const { prdct } = props;
  const categories = useSelector((store) => store.product.categories);
  const currentCat = categories.filter((ctg) => ctg.id === prdct.category_id);
  return (
    <Link
      to={`/product/${prdct.id}`}
      className="w-[85%] max-w-[35rem] lg:w-auto"
    >
      <div className="min-w-[20rem] w-full max-w-[35rem] h-[38rem] lg:w-[20rem] mt-8 flex flex-col items-center font-montserrat">
        <img
          src={prdct.images[0].url}
          className="min-w-[20rem] w-full lg:w-[20rem] h-[27rem]"
        />
        <span className="font-bold text-xl mt-6">{prdct.name}</span>
        <span className="text-second-text-color font-semibold text-lg mt-2">
          {currentCat[0].title}
        </span>
        <span className="text-muted-text-color font-bold text-lg mt-3">
          ${prdct.price} <span className="text-[#23856D]"></span>
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
