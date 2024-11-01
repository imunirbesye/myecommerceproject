import React from "react";

import unsplash from "../assets/images/unsplash.png";

export default function ProductPage() {
  return (
    <div className=" bg-light-background-color flex flex-col items-center lg:w-full">
      <div className="flex flex-col items-center justify-center lg:w-[80rem]">
        <ul className="w-full flex flex-row font-bold text-second-text-color lg:w-[80rem] lg:justify-center lg:border-b-2">
          <li className="w-32 h-14 text-center leading-[4rem] hover:font-semibold hover:underline">
            Description
          </li>
          <li className="w-48 h-14 text-center leading-[4rem] hover:font-semibold hover:underline">
            Additional Information
          </li>
          <li className="w-32 h-14 text-center leading-[4rem] hover:font-semibold hover:underline">
            Reviews <span className="text-success-text-color">(0)</span>
          </li>
        </ul>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-[80%] flex flex-col bg-[#C4C4C4] mt-10 rounded-md lg:w-[34rem] lg:h-[28rem] lg:ml-[1rem]">
            <img src={`${unsplash}`} className="mt-[-1rem] ml-[-1rem]" />
          </div>
          <div className="w-[85%] flex flex-col mt-10 lg:flex-row lg:w-[46rem]">
            <div className="w-full flex flex-col lg:w-[45%] lg:ml-7">
              <span className="text-2xl font-bold">
                the quick fox jumps over
              </span>
              <p className="mt-4 text-second-text-color">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className="mt-3 text-second-text-color">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className="mt-3 text-second-text-color">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="flex flex-col lg:ml-5 lg:mt-[-2rem] lg:mb-16">
              <ul className="mt-8">
                <span className="text-2xl font-bold">
                  the quick fox jumps over
                </span>
                <li className="text-lg mt-4 font-semibold text-second-text-color">
                  <i className="fa-solid fa-chevron-right text-xl" />
                  &nbsp;&nbsp;&nbsp; the quick fox jumps over lazy dog
                </li>
                <li className="text-lg mt-4 font-semibold text-second-text-color">
                  <i className="fa-solid fa-chevron-right text-xl" />
                  &nbsp;&nbsp;&nbsp; the quick fox jumps over lazy dog
                </li>
                <li className="text-lg mt-4 font-semibold text-second-text-color">
                  <i className="fa-solid fa-chevron-right text-xl" />
                  &nbsp;&nbsp;&nbsp; the quick fox jumps over lazy dog
                </li>
                <li className="text-lg mt-4 font-semibold text-second-text-color">
                  <i className="fa-solid fa-chevron-right text-xl" />
                  &nbsp;&nbsp;&nbsp; the quick fox jumps over lazy dog
                </li>
              </ul>
              <ul className="mt-8">
                <span className="text-2xl font-bold">
                  the quick fox jumps over
                </span>
                <li className="text-lg mt-4 font-semibold text-second-text-color">
                  <i className="fa-solid fa-chevron-right text-xl" />
                  &nbsp;&nbsp;&nbsp; the quick fox jumps over lazy dog
                </li>
                <li className="text-lg mt-4 font-semibold text-second-text-color">
                  <i className="fa-solid fa-chevron-right text-xl" />
                  &nbsp;&nbsp;&nbsp; the quick fox jumps over lazy dog
                </li>
                <li className="text-lg mt-4 font-semibold text-second-text-color">
                  <i className="fa-solid fa-chevron-right text-xl" />
                  &nbsp;&nbsp;&nbsp; the quick fox jumps over lazy dog
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
