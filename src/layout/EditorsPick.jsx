import React from "react";

import menBgImage from "../assets/images/men-bg-image.png";
import womenBgImage from "../assets/images/women-bg-image.jpg";
import kidsBgImage from "../assets/images/kids-bg-image.png";
import accessoriesBgImage from "../assets/images/accessories-bg-image.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function EditorsPick() {
    return(
        <section className="w-full py-16 flex flex-col items-center bg-light-gray-1 font-montserrat">
            <div className="w-full flex flex-col items-center">
                <span className="text-xl font-bold">EDITOR'S PICK</span>
                <span className="text-sm text-center text-secondary-text-color-2 w-44 md:w-80 mt-2">Problems trying to resolve the coflict between</span>

                <div className="w-[85%] max-w-[35rem] flex flex-col justify-center lg:flex-row">
                    <Link to="/shop/men">
                        <div className={`min-w-[20rem] w-full min-h-[31rem] bg-no-repeat bg-cover bg-left-top border-2 mt-10 flex lg:mt-6 lg:w-[25rem]`} style={{backgroundImage: `url(${menBgImage})`}}>
                            <div className="bg-light-background-color w-36 h-11 leading-10 text-center self-end ml-4 mb-4">MEN</div>
                        </div>
                    </Link>
                    <Link to="/shop/women">
                        <div className={`min-w-[20rem] w-full h-[31rem] bg-no-repeat bg-cover bg-left-top border-2 mt-6 flex lg:w-[15rem] lg:ml-5`} style={{backgroundImage: `url(${womenBgImage})`}}>
                            <div className="bg-light-background-color w-36 h-11 leading-10 text-center self-end ml-4 mb-4">WOMEN</div>
                        </div>
                    </Link>
                    <div>
                        <Link to="/shop/accessories">
                            <div className={`min-w-[20rem] w-full h-[15rem] bg-no-repeat bg-cover bg-left-top border-2 mt-6 flex basis-1 lg:w-[15rem] lg:ml-5`} style={{backgroundImage: `url(${kidsBgImage})`}}>
                                <div className="bg-light-background-color w-36 h-11 leading-10 text-center self-end ml-4 mb-4">ACCESSORIES</div>
                            </div>
                        </Link>
                        <Link to="/shop/kids">
                            <div className={`min-w-[20rem] w-full h-[15rem] bg-no-repeat bg-cover bg-left-top border-2 mt-6 flex basis-1 lg:w-[15rem] lg:mt-4 lg:ml-5`} style={{backgroundImage: `url(${accessoriesBgImage})`}}>
                                <div className="bg-light-background-color w-36 h-11 leading-10 text-center self-end ml-4 mb-4">KIDS</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div> 
        </section>
    );
}