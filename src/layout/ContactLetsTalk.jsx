import React from "react";

import arrow2 from "../assets/images/arrow2.png";

export default function ContactLetsTalk() {
  return (
    <div className="w-full flex flex-col items-center mb-5">
      <img src={`${arrow2}`} className="w-[50px] mb-2" />
      <span className="font-bold">WE CAN'T WAIT TO MEET YOU</span>
      <span className="text-5xl mt-3 font-bold">Let's Talk</span>
      <form>
        <button className="px-5 py-3 bg-primary-text-color rounded-md mt-4 mb-10 text-light-text-color text-xs font-semibold">
          Submit Request
        </button>
      </form>
    </div>
  );
}
