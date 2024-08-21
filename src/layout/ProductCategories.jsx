import React from "react";

import category1 from "../assets/images/media-bg-cover.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductCategories() {
  const categories = useSelector((store) => store.product.categories);
  categories.sort((a, b) => b.rating - a.rating);
  return (
    <div className="w-full px-2 py-2 flex flex-col items-center">
      <div className="w-full flex flex-col lg:w-[83rem]">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:px-10 lg:py-5">
          <span className="font-bold text-2xl">Shop</span>
          <span className="mt-14 mb-10 lg:mt-0 lg:mb-0">
            <span className="font-bold">
              <NavLink to="/">Home</NavLink>
            </span>{" "}
            <i className="fa-solid fa-chevron-right" /> Shop
          </span>
        </div>
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between">
          {categories.slice(0, 5).map((cat) => (
            <NavLink
              to={
                cat.gender == "k"
                  ? `shop/kadin/${cat.code.substring(2, cat.code.length)}/${
                      cat.id
                    }`
                  : `shop/erkek/${cat.code.substring(2, cat.code.length)}/${
                      cat.id
                    }`
              }
              className="w-full flex flex-col items-center"
            >
              <div
                className="w-full min-h-[15rem] max-w-[35rem] h-[22rem] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-2xl text-light-text-color font-bold mb-5 lg:w-[16rem] lg:h-[16rem]"
                style={{ backgroundImage: `url(${cat.img})` }}
              >
                <span className="">{cat.title}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
