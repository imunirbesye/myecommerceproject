import React from "react";

import category1 from "../assets/images/media-bg-cover.png"; 
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ProductCategories() {
    return (
        <div className="w-full px-7 py-2 flex flex-col items-center">
            <div className="w-full flex flex-col lg:w-[83rem]">
                <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:px-10 lg:py-5">
                    <span className="font-bold text-2xl">Shop</span>
                    <span className="mt-14 mb-10 lg:mt-0 lg:mb-0"><span className="font-bold"><Link to="/">Home</Link></span> <i class="fa-solid fa-chevron-right" /> Shop</span>
                </div>
                <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between">
                    <Link to="/shop/cloths" className="w-full flex flex-col items-center">
                        <div className="w-full max-w-[22rem] min-h-[15rem] h-[22rem] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-light-text-color font-bold mb-5 lg:w-[16rem] lg:h-[16rem]" style={{backgroundImage: `url(${category1})`}}>
                            <span className="mb-4">CLOTHS</span>
                            <span>5 Items</span>
                        </div>
                    </Link>
                    <Link to="/shop/cloths" className="w-full flex flex-col items-center">
                        <div className="w-full max-w-[22rem] min-h-[15rem] h-[22rem] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-light-text-color font-bold mb-5 lg:w-[16rem] lg:h-[16rem]" style={{backgroundImage: `url(${category1})`}}>
                            <span className="mb-4">CLOTHS</span>
                            <span>5 Items</span>
                        </div>
                    </Link>
                    <Link to="/shop/cloths" className="w-full flex flex-col items-center">
                        <div className="w-full max-w-[22rem] min-h-[15rem] h-[22rem] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-light-text-color font-bold mb-5 lg:w-[16rem] lg:h-[16rem]" style={{backgroundImage: `url(${category1})`}}>
                            <span className="mb-4">CLOTHS</span>
                            <span>5 Items</span>
                        </div>
                    </Link>
                    <Link to="/shop/cloths" className="w-full flex flex-col items-center">
                        <div className="w-full max-w-[22rem] min-h-[15rem] h-[22rem] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-light-text-color font-bold mb-5 lg:w-[16rem] lg:h-[16rem]" style={{backgroundImage: `url(${category1})`}}>
                            <span className="mb-4">CLOTHS</span>
                            <span>5 Items</span>
                        </div>
                    </Link>
                    <Link to="/shop/cloths" className="w-full flex flex-col items-center">
                        <div className="w-full max-w-[22rem] min-h-[15rem] h-[22rem] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-light-text-color font-bold mb-5 lg:w-[16rem] lg:h-[16rem]" style={{backgroundImage: `url(${category1})`}}>
                            <span className="mb-4">CLOTHS</span>
                            <span>5 Items</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}