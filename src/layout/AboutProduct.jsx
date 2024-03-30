import React from "react";
import ProductImageSlider from "../components/ProductImageSlider";

export default function AboutProduct() {
  return (
    <div className="w-full flex flex-col items-center">
      <span className="mt-10 mb-10">
        <span className="font-bold">Home </span>{" "}
        <i class="fa-solid fa-chevron-right" /> Shop
      </span>
      <ProductImageSlider />
      <div className="w-[80%] flex flex-col pb-8">
        <span className="font-semibold text-lg">Floating Phone</span>
        <div className="w-full flex flex-row items-center mt-3">
          <i class="fa-solid fa-star text-secondary"></i>
          <i class="fa-solid fa-star text-secondary"></i>
          <i class="fa-solid fa-star text-secondary"></i>
          <i class="fa-solid fa-star text-secondary"></i>
          <i class="fa-regular fa-star text-secondary"></i>
          <span className="text-second-text-color font-bold">
            &nbsp;10 Reviews
          </span>
        </div>
        <span className="mt-3 text-lg font-bold">$1,139.33</span>
        <span className="mt-1 font-bold text-second-text-color">
          Availability :{" "}
          <span className="text-primary-text-color">In Stock</span>
        </span>
        <span className="mt-5 text-[#858585]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </span>
        <div className="w-[94%] h-14 flex flex-row border-t-2 border-muted-text-color mt-4 ml-[3%] mb-4 items-center">
          <div className="w-8 h-8 bg-primary-color rounded-full" />
          <div className="w-8 h-8 bg-success-color rounded-full ml-2" />
          <div className="w-8 h-8 bg-alert-color rounded-full ml-2" />
          <div className="w-8 h-8 bg-dark-background-color rounded-full ml-2" />
        </div>
        <div className="w-full flex flex-row items-center mt-3 mb-8">
          <form>
            <button className="w-36 h-12 text-sm bg-primary-color text-light-text-color font-semibold rounded-md">
              Select Options
            </button>
          </form>
          <div className="w-8 h-8 bg-light-background-color flex flex-col items-center py-2 rounded-full ml-3">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div className="w-8 h-8 bg-light-background-color flex flex-col items-center py-2 rounded-full ml-3">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="w-8 h-8 bg-light-background-color flex flex-col items-center py-2 rounded-full ml-3">
            <i class="fa-solid fa-eye"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
