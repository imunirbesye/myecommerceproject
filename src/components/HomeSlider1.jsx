import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import coverImage from "../assets/images/image1.jpg";

  const slideImages = [
    {
      url: "../assets/images/image1.jpg",
      content: <div className="w-full flex flex-col justify-center lg:w-[70rem] lg:flex-row lg:self-center lg:justify-between lg:items-center">
      <div className="w-full flex flex-col text-light-text-color items-center self-start mb-8 lg:w-[27rem] lg:items-start">
        <span className="font-semibold">SUMMER 2020</span>
        <span className="w-48 text-4xl font-bold text-center mt-8 lg:w-full lg:text-start">NEW COLLECTION</span>
        <span className="w-[16rem] text-xl text-center mt-8 lg:w-full lg:text-start">We know how large objects will act, but things on a small scale.</span>
        <div>
          <button className="w-44 leading-[3rem] rounded-md font-semibold bg-success-text-color mt-6 lg:ml-6">ADD TO CART</button>
        </div>
      </div> 
  </div>
    },
    {
      url: "../assets/images/image1.jpg",
      content: <div className="w-full flex flex-col justify-center lg:w-[70rem] lg:flex-row lg:self-center lg:justify-between lg:items-center ">
      <div className="w-full flex flex-col text-light-text-color items-center self-start mb-8 lg:w-[27rem] lg:items-start">
        <span className="font-semibold">SUMMER 2020</span>
        <span className="w-48 text-4xl font-bold text-center mt-8 lg:w-full lg:text-start">NEW COLLECTION</span>
        <span className="w-[16rem] text-xl text-center mt-8 lg:w-full lg:text-start">We know how large objects will act, but things on a small scale.</span>
        <div>
          <button className="w-44 leading-[3rem] rounded-md font-semibold bg-success-text-color mt-6 lg:ml-6">ADD TO CART</button>
        </div>
      </div> 
  </div>
    },
    {
      url: "../assets/images/image1.jpg",
      content: <div className="w-full flex flex-col justify-center lg:w-[70rem] lg:flex-row lg:self-center lg:justify-between lg:items-center ">
      <div className="w-full flex flex-col text-light-text-color items-center self-start mb-8 lg:w-[27rem] lg:items-start">
        <span className="font-semibold">SUMMER 2020</span>
        <span className="w-48 text-4xl font-bold text-center mt-8 lg:w-full lg:text-start">NEW COLLECTION</span>
        <span className="w-[16rem] text-xl text-center mt-8 lg:w-full lg:text-start">We know how large objects will act, but things on a small scale.</span>
        <div>
          <button className="w-44 leading-[3rem] rounded-md font-semibold bg-success-text-color mt-6 lg:ml-6">ADD TO CART</button>
        </div>
      </div> 
  </div>
    },
  ]; 

export default function HomeImageSlider() {
    return (
        <div className="">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                      <div className={`flex items-center bg-slate-600 bg-cover h-[55vh] content-end font-montserrat lg:h-[70vh] lg:content-center lg:items-center lg:justify-center bg-top`} style={{backgroundImage: `url(${coverImage})`}}>
                          {slideImage.content}
                      </div>
                    </div>
                ))} 
            </Slide>
        </div>
    );
}