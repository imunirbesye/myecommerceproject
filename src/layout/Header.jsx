import React from "react";
import { Link } from "react-router-dom";

import NavbarMobile from "../components/NavbarMobile";

export default function Header() {
  return (
    <div className="font-montserrat">
      <NavbarMobile />
      <div className="w-full flex flex-col mt-6 hidden bg-light-background-color">
        <ul className="menu ">
          <Link to="/">
            <li className="w-full h-12 text-center leading-12 text-xl">Home</li>
          </Link>
          <Link to="/shop">
            <li className="w-full h-12 text-center leading-12 text-xl">
              Product
            </li>
          </Link>
          <Link to="/shop">
            <li className="w-full h-12 text-center leading-12 text-xl">
              Pricing
            </li>
          </Link>
          <Link to="/contact">
            <li className="w-full h-12 text-center leading-12 text-xl">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="hidden md:flex flex-row justify-center w-full h-20 bg-white items-center px-10">
        <div className="w-[90rem] flex flex-row justify-between items-center">
          <div className="flex h-20 items-center">
            <span className="text-2xl font-bold">MBStore</span>
            <ul className="flex md:ml-7 lg:ml-24">
              <Link to="/">
                <li className="font-bold mr-4 md:mr-3">Home</li>
              </Link>
              <Link to="/shop">
                <li className="font-bold text-second-text-color mr-4 md:mr-3">
                  Shop <i className="" />
                </li>
              </Link>
              <Link to="/aboutUs">
                <li className="font-bold text-second-text-color mr-4 md:mr-3">
                  About
                </li>
              </Link>
              <Link to="/blog">
                <li className="font-bold text-second-text-color mr-4 md:mr-3">
                  Blog
                </li>
              </Link>
              <Link to="/contact">
                <li className="font-bold text-second-text-color mr-4 md:mr-3">
                  Contact
                </li>
              </Link>
              <Link to="/products">
                <li className="font-bold text-second-text-color">Pages</li>
              </Link>
            </ul>
          </div>
          <div className="flex">
            <span className="text-primary-text-color font-bold md:mr-4">
              <i className="fa-regular fa-user" /> Login / Register
            </span>
            <span className="text-primary-text-color md:mr-4">
              <i className="fa-solid fa-search" />
            </span>
            <span className="text-primary-text-color md:mr-4">
              <i className="fa-solid fa-shopping-cart" /> 1
            </span>
            <span className="text-primary-text-color md:mr-4">
              <i className="fa-regular fa-heart" /> 1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
