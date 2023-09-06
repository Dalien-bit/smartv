import React, { useState, useRef, useEffect } from "react";
import { logo, contactUsLogo } from "../assets";

import { navigationItems } from "../constants";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (place) => {
    console.log("cliceked");
    let scroll_to = document.getElementById(place).offsetTop;
    window.scrollTo({ behavior: "smooth", top: scroll_to });
  };
  

  return (
    <div
      className={`
      px-10
      ${isMenuOpen ? `h-screen bg-pink-800` : `bg-pink-200`}
    `}
    >
      <div className={`flex items-center justify-between`}>
        <div className="flex flex-row w-screen items-center justify-start text-3xl">
          <img className="h-16 md:h-24" src={logo} alt="" />
          {navigationItems.map((item) => (
            <div
              key={item}
              className="hidden lg:block text-lg px-5 cursor-pointer"
              onClick={() => navigateTo(item.toLocaleLowerCase())}
            >
              {item}
              {/* <a href="">{item}</a> */}
            </div>
          ))}
        </div>
        <a href="" className="hidden lg:block">
          <img className="h-16" src={contactUsLogo} alt="" />
        </a>
        <div className="lg:hidden md:block sm:block text-3xl px-10">
          <AiOutlineMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
      {isMenuOpen && (
        <div>
          {navigationItems.map((item) => (
            <div
              key={item}
              className="px-10 py-5 text-white cursor-pointer"
              onClick={() => navigateTo(item.toLocaleLowerCase())}
            >
              {item }
            </div>
          ))}
          <a href="" className="absolute bottom-0">
            <img className="h-16" src={contactUsLogo} alt="" />
          </a>
        </div>
      )}
    </div>
  );
}

