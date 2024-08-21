import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, setSort } from "../actions/productReducerActions";

export default function Filter() {
  const dispatch = useDispatch();

  const onChange = (evnt) => {
    dispatch(setSort(evnt.target.value));
    dispatch(fetchProducts(dispatch));
  };

  return (
    <div className="w-full h-60 bg-light-background-color flex flex-col p-5 items-center lg:flex-row lg:justify-center lg:h-28 lg:p-0 lg:align-middle">
      <div className="flex flex-col items-center lg:w-[83rem] lg:flex lg:flex-row lg:justify-between">
        <span className="font-bold text-second-text-color mb-4">
          Showing all 12 results
        </span>
        <div className="flex flex-row mb-4">
          <span className="font-bold text-second-text-color">
            Views: &nbsp;&nbsp;
            <i className="fa-solid fa-border-all border-[1px] rounded-md p-3 text-dark-text-color" />
            <i className="fa-solid fa-list-check border-[1px] rounded-md p-3 ml-3 text-dark-text-color" />
          </span>
        </div>
        <div className="flex flex-row">
          <form>
            <select
              onChange={onChange}
              className="border-[1px] p-4 bg-[#F9F9F9] text-"
            >
              <option>Sort</option>
              <option value="price:asc">Lowest first by price</option>
              <option value="price:desc">Highest first by price</option>
              <option value="rating:asc">Lowest first by rating</option>
              <option value="rating:desc">Highest first by rating</option>
            </select>
            <button className="py-4 px-6 bg-primary-color text-light-text-color font-bold rounded-md ml-3">
              Filter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
