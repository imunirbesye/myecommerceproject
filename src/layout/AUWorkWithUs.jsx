import React from "react";

import image from "../assets/images/aboutus5.png";

export default function AUWorkWithUs() {
  return (
    <div className="w-full flex flex-col items-center bg-hover-color text-light-text-color">
      <div className="w-full flex flex-col items-center px-20 py-16 md:w-[800px] md:flex-row md:justify-between md:px-0 md:py-0 md:self-center lg:w-[900px] bg-hover-color text-light-text-color">
        <div className="flex flex-col items-center text-center md:items-start md:text-start md:px-16">
          <span className="text-sm font-bold">WORK WITH US</span>
          <span className="w-[200px] text-3xl font-bold mt-4 md:w-auto">
            Now Let's grow Yours
          </span>
          <span className="w-[200px] text-xs mt-4 md:w-auto">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </span>
          <form>
            <button className="px-7 py-2 border-2 border-light-text-color rounded-md mt-4">
              Button
            </button>
          </form>
        </div>
        <img src={`${image}`} className="h-[30vh] hidden md:block" />
      </div>
    </div>
  );
}
