import React from "react";

import videoCard from "../assets/images/videoCard1.png";

export default function AUVideoCard() {
  const url = "https://youtu.be/qF1FMTT17tQ";

  return (
    <div className="w-full flex flex-col items-center px-20 py-10 md:w-[800px] md:flex-row md:justify-between md:px-0 md:self-center lg:w-[900px]">
      <div className="w-full flex flex-col items-center">
        <img src={`${videoCard}`} className="" />
      </div>
    </div>
  );
}
