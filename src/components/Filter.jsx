import React from "react";

export default function Filter() {
    return(
        <div className="w-full h-60 bg-light-background-color flex flex-col p-5 items-center lg:flex-row lg:justify-center lg:h-28 lg:p-0 lg:align-middle">
            <div className="flex flex-col items-center lg:w-[83rem] lg:flex lg:flex-row lg:justify-between">
                <span className="font-bold text-second-text-color mb-4">Showing all 12 results</span>
                <div className="flex flex-row mb-4">
                    <span className="font-bold text-second-text-color">Views: &nbsp;&nbsp;<i class="fa-solid fa-border-all border-[1px] rounded-md p-3 text-dark-text-color" /><i class="fa-solid fa-list-check border-[1px] rounded-md p-3 ml-3 text-dark-text-color" /></span>
                </div>
                <div className="flex flex-row">
                    <form>
                        <select className="border-[1px] p-4 bg-[#F9F9F9] text-">
                            <option>Popularity</option>
                        </select>
                        <button className="py-4 px-6 bg-primary-color text-light-text-color font-bold rounded-md ml-3">Filter</button>
                    </form>
                </div>
            </div>
        </div>
    );
}