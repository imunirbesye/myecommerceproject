import React from "react";

import menBgImage from "../assets/images/men-bg-image.png";
import womenBgImage from "../assets/images/women-bg-image.jpg";
import kidsBgImage from "../assets/images/kids-bg-image.png";
import accessoriesBgImage from "../assets/images/accessories-bg-image.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function EditorsPick() {
    return(
        <section className="w-full py-16 px-3 flex flex-col items-center bg-light-gray-1 font-montserrat">
            <div className="flex flex-col items-center">
                <span className="text-xl font-bold">EDITOR'S PICK</span>
                <span className="text-sm text-center text-secondary-text-color-2 w-44 md:w-80 mt-2">Problems trying to resolve the coflict between</span>

                <div className="flex flex-col lg:flex-row">
                    <Link to="/produts/men">
                        <div className={`bg-[url('${menBgImage}')] w-[20rem] h-[31rem] border-2 mt-10 flex lg:mt-6 lg:w-[25rem]`}>
                            <div className="bg-light-background-color w-36 h-11 leading-10 text-center self-end ml-4 mb-4">MEN</div>
                        </div>
                    </Link>
                    <Link to="/produts/women">
                        <div className={`bg-[url('${menBgImage}')] w-[20rem] h-[31rem] border-2 mt-6 flex lg:w-[15rem] lg:ml-5`}>
                            <div className="bg-light-background-color w-36 h-11 leading-10 text-center self-end ml-4 mb-4">WOMEN</div>
                        </div>
                    </Link>
                    <div>
                        <Link to="/produts/accessories">
                            <div className={`bg-[url('${menBgImage}')] w-[20rem] h-[15rem] border-2 mt-6 flex basis-1 lg:w-[15rem] lg:ml-5`}>
                                <div className="bg-light-background-color w-36 h-11 leading-10 text-center self-end ml-4 mb-4">ACCESSORIES</div>
                            </div>
                        </Link>
                        <Link to="/produts/kids">
                            <div className={`bg-[url('${menBgImage}')] w-[20rem] h-[15rem] border-2 mt-6 flex basis-1 lg:w-[15rem] lg:mt-4 lg:ml-5`}>
                                <div className="bg-light-background-color w-36 h-11 leading-10 text-center self-end ml-4 mb-4">KIDS</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div> 
        </section>
    );
}