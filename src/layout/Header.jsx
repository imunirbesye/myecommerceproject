import React from "react";
import { useSelector, useDispatch } from "react-redux";
import md5 from "md5";

import NavbarMobile from "../components/NavbarMobile";
import { NavLink } from "react-router-dom";

export default function Header() {
  const user = useSelector((store) => store.client.user);
  const categories = useSelector((store) => store.product.categories);

  const gravatarUrl = user.email
    ? `https://www.gravatar.com/avatar/${md5(user.email)}`
    : "";

  return (
    <div className="font-montserrat">
      <NavbarMobile />
      <div className="w-full flex flex-col mt-6 hidden bg-light-background-color">
        <ul className="menu ">
          <NavLink
            to="/"
            className="w-full h-12 text-center leading-12 text-xl"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="w-full h-12 text-center leading-12 text-xl"
          >
            Product
          </NavLink>
          <NavLink
            to="/shop"
            className="w-full h-12 text-center leading-12 text-xl"
          >
            Pricing
          </NavLink>
          <NavLink
            to="/contact"
            className="w-full h-12 text-center leading-12 text-xl"
          >
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="hidden md:flex flex-row justify-center w-full h-20 bg-white items-center px-10">
        <div className="w-[90rem] flex flex-row justify-between items-center">
          <div className="flex h-20 items-center">
            <span className="text-2xl font-bold">MBStore</span>
            <ul className="flex md:ml-7 lg:ml-24">
              <NavLink to="/" className="font-bold mr-4 md:mr-3">
                Home
              </NavLink>
              <div className="group ">
                <NavLink
                  to="/shop"
                  className="font-bold text-second-text-color mr-4 md:mr-3"
                >
                  Shop <i className="" />
                </NavLink>
                <div className="hidden flex-col absolute z-10 bg-light-background-color group-hover:flex">
                  <span className="px-5 py-2 mt-1 font-bold">Erkek</span>
                  {categories.map(
                    (cat) =>
                      cat.gender == "e" && (
                        <NavLink
                          to={
                            cat.gender == "k"
                              ? `shop/kadin/${cat.code.substring(
                                  2,
                                  cat.code.length
                                )}/${cat.id}`
                              : `shop/erkek/${cat.code.substring(
                                  2,
                                  cat.code.length
                                )}/${cat.id}`
                          }
                          className="px-5 py-2 font-semibold text-second-text-color hover:bg-slate-700 hover:text-light-text-color"
                        >
                          &nbsp;&nbsp;{cat.title}
                        </NavLink>
                      )
                  )}
                  <span className="px-5 py-2 mt-1 font-bold">Kadın</span>
                  {categories.map(
                    (cat) =>
                      cat.gender == "k" && (
                        <NavLink
                          to={
                            cat.gender == "k"
                              ? `shop/kadin/${cat.code.substring(
                                  2,
                                  cat.code.length
                                )}/${cat.id}`
                              : `shop/erkek/${cat.code.substring(
                                  2,
                                  cat.code.length
                                )}/${cat.id}`
                          }
                          className="px-5 py-2 font-semibold text-second-text-color hover:bg-slate-700 hover:text-light-text-color"
                        >
                          &nbsp;&nbsp;{cat.title}
                        </NavLink>
                      )
                  )}
                </div>
              </div>
              <NavLink
                to="/aboutUs"
                className="font-bold text-second-text-color mr-4 md:mr-3"
              >
                About
              </NavLink>
              <NavLink
                to="/blog"
                className="font-bold text-second-text-color mr-4 md:mr-3"
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className="font-bold text-second-text-color mr-4 md:mr-3"
              >
                Contact
              </NavLink>
              <NavLink
                to="/products"
                className="font-bold text-second-text-color mr-4 md:mr-3"
              >
                Pages
              </NavLink>
            </ul>
          </div>
          <div className="flex flex-row items-center">
            {user.email ? (
              <div className=" flex flex-row items-center mr-4">
                <img
                  src={gravatarUrl}
                  className="w-8 h-8 mr-2"
                  alt="User Avatar"
                />
                <span className="font-bold">{user.name}</span>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="text-primary-text-color font-bold md:mr-4"
              >
                <i className="fa-regular fa-user" /> Login / Register
              </NavLink>
            )}
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
