import React, { useState, useEffect, useRef } from "react";

import { aboutImage } from "../assets";
import { aboutContent } from "../constants";
import "../style/about.css";

export default function About() {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <>
      <div
        className={`flex flex-col w-full lg:flex-row items-center justify-start md:justify-center  bg-pink-600`}
      >
        <div
          ref={domRef}
          className={`
          md:fade-in-section ${isVisible ? `is-visible` : ``}
          lg:w-1/2 flex m-auto md:px-20 px-5 pb-10 h-[800px] items-center`}
        >
          <p className="text-lg text-white mt-20 text-center">
            <span className="text-5xl font-bold">About Us</span>
            <br />
            <br />
            {aboutContent}
          </p>
        </div>
        <div
          ref={domRef}
          className={`md:fade-in-image ${
            isVisible ? `is-visible` : ``
          } md:w-1/2 md:h-[800px] h-[500px] w-full flex flex-col items-center justify-center`}
        >
          <img src={aboutImage} alt="" />
        </div>
      </div>
    </>
  );
}
