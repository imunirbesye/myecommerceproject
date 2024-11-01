import React from "react";

import aboutUs1 from "../assets/images/aboutus1.png";

export default function AUProblemsT() {
  return (
    <div className="w-full flex flex-col items-center px-20 py-10 md:w-[800px] md:flex-row md:justify-between md:px-0 md:self-center lg:w-[900px]">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex flex-col">
          <span className="text-sm text-center text-danger-text-color font-bold mt-7 md:text-start">
            Problems trying
          </span>
          <span className="w-[220px] text-center mt-5 mb-12 font-bold md:text-start md:w-auto">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </span>
        </div>
        <span className="text-xs text-second-text-color font-semibold">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </span>
      </div>
    </div>
  );
}
