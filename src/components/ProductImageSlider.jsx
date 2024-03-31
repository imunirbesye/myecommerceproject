import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import coverImage from "../assets/images/singleProductCover.jpg";

const slideImages = [
  {
    url: "../assets/images/image1.jpg",
  },
  {
    url: "../assets/images/image1.jpg",
  },
  {
    url: "../assets/images/image1.jpg",
  },
];

export default function ProductImageSlider() {
  return (
    <div className="">
      <Slide>
        <div
          className="flex items-center bg-slate-600 bg-cover h-[25vh] content-end font-montserrat lg:h-[30vh] lg:content-center lg:items-center lg:justify-center bg-top"
          style={{ backgroundImage: `url(${coverImage})` }}
        ></div>
      </Slide>
    </div>
  );
}
