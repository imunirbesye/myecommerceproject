import React from "react";

export default function ClientList() {
    return(
        <div className="w-full flex flex-col bg-[#FAFAFA] text-second-text-color items-center py-16 lg:flex-row lg:justify-center">
            <div className="flex flex-col lg:w-[83rem] lg:flex-row lg:items-center lg:justify-between"> 
                <i className="fa-brands fa-hooli text-9xl" />
                <i className="fa-brands fa-lyft text-9xl" />
                <i className="fa-brands fa-pied-piper-hat text-9xl" />
                <i className="fa-brands fa-stripe text-9xl" />
                <i className="fa-brands fa-aws text-9xl" />
                <i className="fa-brands fa-reddit-alien text-9xl" />
            </div>
        </div>
    );
}