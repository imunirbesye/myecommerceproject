import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function ContactLayout() {
  return (
    <div className="w-full flex flex-col items-center px-20 py-10 mt-16 mb-20 md:w-[700px] md:h-[49vh] md:justify-center md:m-auto md:mt-20 md:mb-20">
      <span className="text-4xl font-bold text-center mb-5 md:mb-10">
        Get answers to all your questions.
      </span>
      <span className="text-second-text-color text-center font-semibold text-lg mb-3 md:mb-5">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics.
      </span>
      <form>
        <button className="bg-primary-color px-10 py-5 rounded-md text-light-text-color font-semibold mb-8 md:mb-10">
          CONTACT OUR COMPANY
        </button>
      </form>
      <div className="w-[55%] flex flex-row justify-between text-second-text-color md:w-[200px]">
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
  );
}
