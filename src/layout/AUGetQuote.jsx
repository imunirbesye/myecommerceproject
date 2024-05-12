import React from "react";

import aboutUs1 from "../assets/images/aboutus1.png";

export default function AUGetQuote() {
  return (
    <div className="w-full flex flex-col items-center px-20 py-10 md:w-[800px] md:flex-row md:justify-between md:px-0 md:self-center lg:w-[900px]">
      <div className="flex flex-col items-center md:items-start">
        <span className="text-sm font-bold">ABOUT COMPANY</span>
        <span className="text-4xl font-bold mt-7">ABOUT US</span>
        <span className="w-[220px] mt-10 mb-7 text-second-text-color text-center md:w-[350px] md:text-start">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </span>
        <form>
          <button className="px-5 py-3 bg-primary-text-color rounded-md mt-3 mb-16 text-light-text-color text-xs font-semibold">
            Get Quote Now
          </button>
        </form>
      </div>
      <img src={`${aboutUs1}`} className="w-[300px] md:w-[400px]" />
    </div>
  );
}
