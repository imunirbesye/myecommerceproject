import React from "react";
import { Link } from "react-router-dom";

import image1 from "../assets/images/aboutus2.jpg";
import image2 from "../assets/images/aboutus3.jpg";
import image3 from "../assets/images/aboutus4.png";

export default function AUTeam() {
  return (
    <div className="w-full flex flex-col items-center px-20 py-10 md:w-[800px] md:justify-between md:px-0 md:self-center lg:w-[900px]">
      <div className="flex flex-col text-center">
        <span className="text-4xl font-bold">Meet Our Team</span>
        <span className="text-sm font-semibold text-second-text-color mt-2 md:w-[500px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </span>
      </div>
      <div className="flex flex-col mt-8 md:flex-row">
        <div className="flex flex-col items-center text-center md:mt-12 md:mx-3">
          <img src={`${image1}`} />
          <span className="text-md font-bold mt-4">Username</span>
          <span className="text-md font-semibold text-second-text-color mt-2">
            Profession
          </span>
          <div className="w-[125px] flex flex-row justify-between mt-5 text-primary-text-color">
            <Link to="">
              <i className="fa-brands fa-facebook fa-2xl" />
            </Link>
            <Link to="">
              <i className="fa-brands fa-instagram fa-2xl" />
            </Link>
            <Link to="">
              <i className="fa-brands fa-twitter fa-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center text-center mt-12 md:mx-3">
          <img src={`${image2}`} />
          <span className="text-md font-bold mt-4">Username</span>
          <span className="text-md font-semibold text-second-text-color mt-2">
            Profession
          </span>
          <div className="w-[125px] flex flex-row justify-between mt-5 text-primary-text-color">
            <Link to="">
              <i className="fa-brands fa-facebook fa-2xl" />
            </Link>
            <Link to="">
              <i className="fa-brands fa-instagram fa-2xl" />
            </Link>
            <Link to="">
              <i className="fa-brands fa-twitter fa-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center text-center mt-12 md:mx-3">
          <img src={`${image3}`} />
          <span className="text-md font-bold mt-4">Username</span>
          <span className="text-md font-semibold text-second-text-color mt-2">
            Profession
          </span>
          <div className="w-[125px] flex flex-row justify-between mt-5 text-primary-text-color">
            <Link to="">
              <i className="fa-brands fa-facebook fa-2xl" />
            </Link>
            <Link to="">
              <i className="fa-brands fa-instagram fa-2xl" />
            </Link>
            <Link to="">
              <i className="fa-brands fa-twitter fa-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
