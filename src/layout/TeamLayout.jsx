import React from "react";

import teamImage1 from "../assets/images/erhanFirat.jpg";
import teamImage2 from "../assets/images/gokhanOzdemir.jpg";
import teamImage3 from "../assets/images/munirBesye.jpg";

export default function TeamLayout() {
  return (
    <>
      <div className="w-full px-20 flex flex-col items-center bg-light-background-color lg:h-[62vh]">
        <span className="text-5xl font-bold text-center mt-10 mb-5 lg:w-[83rem]">
          Meet Our Team
        </span>
        <span className="font-semibold text-center text-secondary-text-color mb-10 lg:w-[40rem]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </span>
        <ul className="w-full flex flex-col lg:w-[83rem] lg:flex-row lg:justify-between">
          <li className="w-full flex flex-col mb-7 lg:w-[20rem]">
            <div
              className="w-full h-[24rem] rounded-lg mb-5"
              style={{
                backgroundImage: `url(${teamImage1})`,
                backgroundSize: "cover",
              }}
            ></div>
            <span className="text-lg font-semibold ml-2 mb-2">Erhan FIRAT</span>
            <span className="text-sm font-semibold text-second-text-color ml-2">
              IBM
            </span>
          </li>
          <li className="w-full flex flex-col mb-7 lg:w-[20rem]">
            <div
              className="w-full h-[24rem] bg-secondary-color-2 rounded-lg mb-5"
              style={{
                backgroundImage: `url(${teamImage2})`,
                backgroundSize: "cover",
              }}
            ></div>
            <span className="text-lg font-semibold ml-2 mb-2">
              Gökhan ÖZDEMİR
            </span>
            <span className="text-sm font-semibold text-second-text-color ml-2">
              IBM
            </span>
          </li>
          <li className="w-full flex flex-col mb-7 lg:w-[20rem]">
            <div
              className="w-full h-[24rem] bg-secondary-color-2 rounded-lg mb-5"
              style={{
                backgroundImage: `url(${teamImage3})`,
                backgroundSize: "cover",
              }}
            ></div>
            <span className="text-lg font-semibold ml-2 mb-2">Münir BESYE</span>
            <span className="text-sm font-semibold text-second-text-color ml-2">
              IBM
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
