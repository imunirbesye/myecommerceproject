import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center bg-light-background-color font-montserrat lg:flex lg:flex-col lg:items-center lg:h-[28rem]">
      <div className="w-[25rem] h-[7rem] pt-6 pl-8 lg:w-[78rem] lg:h-[5rem] lg:pr-5 lg:flex lg:flex-row lg:justify-between lg:border-b-[1px]">
        <span className="text-xl font-bold">Bandage</span>
        <ul className="flex flex-row mt-3 mb lg:mt-0">
          <li>
            <i className="fa-brands fa-facebook text-primary-text-color text-2xl mr-4" />
          </li>
          <li>
            <i className="fa-brands fa-instagram text-primary-text-color text-2xl mr-4" />
          </li>
          <li>
            <i className="fa-brands fa-twitter text-primary-text-color text-2xl" />
          </li>
        </ul>
      </div>
      <div className="w-full h-[58rem] flex flex-col items-center bg-light-background-color lg:flex lg:flex-col lg:items-center lg:h-[15rem]">
        <div className="w-[25rem] h-[58rem] flex flex-col lg:flex-row py-8 px-8 lg:w-[70rem] lg:px-0">
          <ul className="flex flex-col mt-3 lg:mr-16">
            <li className="font-bold mb-4">Company Info</li>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                About Us
              </li>
            </Link>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                Carrier
              </li>
            </Link>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                We are hiring
              </li>
            </Link>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                Blog
              </li>
            </Link>
          </ul>
          <ul className="flex flex-col mt-3 lg:mr-16">
            <li className="font-bold mb-4">Legal</li>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                About Us
              </li>
            </Link>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                Carrier
              </li>
            </Link>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                We are hiring
              </li>
            </Link>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                Blog
              </li>
            </Link>
          </ul>
          <ul className="flex flex-col mt-3 lg:mr-16">
            <li className="font-bold mb-4">Features</li>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                Business Marketing
              </li>
            </Link>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                User Analytic
              </li>
            </Link>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                Live Chat
              </li>
            </Link>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                Unlimited Support
              </li>
            </Link>
          </ul>
          <ul className="flex flex-col mt-3 lg:mr-16">
            <li className="font-bold mb-4">Resources</li>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                IOS & Anddroid
              </li>
            </Link>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                Watch a Demo
              </li>
            </Link>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                Customers
              </li>
            </Link>
            <Link to="">
              <li className="text-sm font-bold text-second-text-color mb-2 lg:mb-3">
                API
              </li>
            </Link>
          </ul>
          <div className="mt-4 flex flex-col">
            <span className="font-bold">Get In Touch</span>
            <div className="flex flex-row mt-6">
              <form>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="py-4 px-4 border-[1px] rounded-s-md text-sm font-bold"
                />
                <button className="py-4 px-5 bg-primary-color text-white rounded-e-md text-sm">
                  Subscribe
                </button>
              </form>
            </div>
            <span className="text-sm text-second-text-color m-2">
              Lore imp sum dolor Amit
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-[7rem] flex flex-row text-center justify-center bg-light-gray-1">
        <span className="w-60 font-bold text-second-text-color self-center lg:w-[26rem]">
          Made With Love By Finland All Right Reserved
        </span>
      </div>
    </div>
  );
}
