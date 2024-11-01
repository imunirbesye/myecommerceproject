import React from "react";

import phoneIcon from "../assets/images/phoneIcon.png";
import locationIcon from "../assets/images/locationIcon.png";
import messageIcon from "../assets/images/mailIcon.png";

export default function ContactInformations() {
  return (
    <div className="w-full flex flex-col items-center px-10 py-10 mt-16 mb-5 md:w-[800px] md:self-center lg:w-[900px]">
      <span className="text-sm font-bold mb-5">VISIT OUR OFFICE</span>
      <span className="text-4xl font-bold text-center mb-6 md:mb-0 md:w-[500px]">
        We help small businesses with big ideas
      </span>
      <div className="w-[90%] flex flex-col mb-5 md:flex-row md:w-[100%] md:mt-14">
        <div className="w-full flex flex-col items-center p-3 text-center text-sm font-semibold justify-center">
          <img src={`${phoneIcon}`} className="w-[50px] mt-[4.5rem]" />
          <span className="mt-4">
            georgia.young@example.com <br /> georgia.young@pie.com
          </span>
          <span className="mt-3">Get Support</span>
          <form>
            <button className="px-4 py-2 border-2 border-primary-text-color rounded-md mt-3 mb-16 text-primary-text-color text-sm">
              Submit Request
            </button>
          </form>
        </div>
        <div className="w-full flex flex-col items-center p-3 text-center text-sm font-semibold justify-center bg-dark-background-color">
          <img src={`${locationIcon}`} className="w-[50px] mt-14" />
          <span className="mt-4 text-light-text-color">
            georgia.young@example.com <br /> georgia.young@pie.com
          </span>
          <span className="mt-3 text-light-text-color">Get Support</span>
          <form>
            <button className="px-4 py-2 border-2 border-primary-text-color rounded-md mt-3 mb-16 text-primary-text-color text-sm">
              Submit Request
            </button>
          </form>
        </div>
        <div className="w-full flex flex-col items-center p-3 text-center text-sm font-semibold justify-center">
          <img src={`${messageIcon}`} className="w-[50px] mt-[5rem]" />
          <span className="mt-4">
            georgia.young@example.com <br /> georgia.young@pie.com
          </span>
          <span className="mt-3">Get Support</span>
          <form>
            <button className="px-4 py-2 border-2 border-primary-text-color rounded-md mt-3 mb-16 text-primary-text-color text-sm">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
