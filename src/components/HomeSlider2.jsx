import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import coverImage from "../assets/images/png-cover.png";

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  } 

  const carouselDivs = [
    {
      content: <div className="w-full flex flex-col self-end justify-center lg:w-[70rem] lg:flex-row lg:self-end lg:justify-between lg:items-center ">
      <div className="w-full flex flex-col text-light-text-color items-center self-start mb-8 lg:w-[27rem] lg:items-start">
        <span className="font-semibold">SUMMER 2020</span>
        <span className="w-48 text-4xl font-bold text-center mt-8 lg:w-full lg:text-start">Vita Classic Products</span>
        <span className="w-[16rem] text-xl text-center mt-8 lg:w-full lg:text-start">We know how large objects will act, but things on a small scale.</span>
        <div>
          <span className="text-lg font-bold mt-6">$16.48</span>
          <button className="w-44 leading-[3rem] rounded-md font-semibold bg-success-text-color mt-6 ml-6 lg:ml-6">ADD TO CART</button>
        </div>
      </div>
      <div className="self-center">
        <img src={coverImage} className="w-[90%]" />
      </div>
  </div>
    }
  ];

export default function HomeImageSlider() {
    return (
        <div className="border-b">
            <Slide>
                {carouselDivs.map((carouselDiv, index)=> (
                    <div key={index}>
                    <div className={`flex items-center bg-cover h-[73vh] content-end font-montserrat lg:h-[50vh] lg:content-center lg:items-center lg:justify-center`}>
                        {carouselDiv.content}
                    </div>
                    </div>
                ))} 
            </Slide>
        </div>
    );
}