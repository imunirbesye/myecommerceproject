import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import image1 from "../assets/images/technology1.png";

export default function ContactLayout() {
  return (
    <div className="w-full flex flex-col items-center px-20 py-10 mt-5 mb-5 md:w-[800px] md:flex-row md:justify-between md:px-0 md:self-center lg:w-[900px]">
      <div className="w-[300px] flex flex-col items-center md:items-start">
        <span className="text-sm font-bold mb-10">CONTACT US</span>
        <span className="text-4xl font-bold text-center mb-6 md:mb-10 md:text-start">
          Get in touch today!
        </span>
        <span className="text-second-text-color text-center font-semibold text-lg mb-3 md:mb-5 md:text-start">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics.
        </span>
        <span className="font-bold mt-5 leading-8 text-center md:text-start">
          Phone: +451 215 215
          <br />
          Fax: +451 215 215
        </span>
        <div className="w-[58%] flex flex-row justify-between text-black mt-8 mb-8 md:w-[200px]">
          <Link to="">
            <i class="fa-brands fa-twitter fa-2xl" />
          </Link>
          <Link to="">
            <i class="fa-brands fa-facebook fa-2xl" />
          </Link>
          <Link to="">
            <i class="fa-brands fa-instagram fa-2xl" />
          </Link>
          <Link to="">
            <i class="fa-brands fa-linkedin fa-2xl" />
          </Link>
        </div>
      </div>
      <img src={`${image1}`} />
    </div>
  );
}
