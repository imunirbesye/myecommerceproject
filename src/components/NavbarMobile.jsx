import React from "react";

export default function NavbarMobile() {
  return (
    <section className="w-full px-6 py-4 flex flex-row justify-between font-montserrat md:hidden bg-light-background-color">
      <span className="text-2xl font-bold text-dark-text-color">MB Store</span>
      <div className="mt-1 md:hidden">
        <i className="fa-solid fa-search fa-xl mr-3" />
        <i className="fa-solid fa-cart-shopping fa-xl mr-4" />      
        <i className="fa-solid fa-bars fa-xl" />      
      </div>
    </section>
  );
}
