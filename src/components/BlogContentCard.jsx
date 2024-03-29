import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import blog1Image from "../assets/images/unsplash1.png";

export default function BlogContentCard() { 
    
    return (
        <Link to="/blog/1" className="min-w-[20rem] w-[85%] max-w-[35rem] flex flex-col items-center self-center">
            <div className="min-w-[20rem] w-full h-[40rem] bg-red-800 lg:w-[20rem] lg:ml-0 flex flex-col items-center shadow-xl mb-10 font-montserrat">
                <div className="w-full h-[20rem] flex items-start bg-no-repeat bg-cover bg-top"  style={{backgroundImage: `url(${blog1Image})`}}>
                    <span className="px-5 py-1 rounded-md m-3 bg-[#E74040] text-light-text-color font-bold">NEW</span>
                </div>
                <div className="w-full h-[20rem] p-5 flex flex-col bg-light-background-color">
                    <ul className="flex flex-row text-second-text-color">
                        <li className="py-2 pr-4 text-sm">Google</li>
                        <li className="py-2 pr-4 text-sm">Trending</li>
                        <li className="py-2 text-sm">New</li>
                    </ul>
                    <span className="text-2xl mt-2">Loudest à la Madison #1 (L'integral)</span>
                    <span className="text-second-text-color mt-3">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</span>
                    <div className="flex flex-row justify-between mt-4">
                    <span className="text-second-text-color"><i className="fa-regular fa-clock text-primary-text-color" /> 22 April 2021</span>
                    <span className="text-second-text-color"><i className="fa-solid fa-chart-area text-secondary-text-color-1" /> 10 comments</span>
                    </div>
                    <span className="mt-5 text-lg font-bold text-second-text-color">Learn More &nbsp;<i class="fa-solid fa-angle-right fa-lg text-blue-500" /></span>
                </div>
            </div>
        </Link>
    );
}