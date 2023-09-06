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
        className={`flex flex-col w-full lg:flex-row items-center justify-start md:justify-center mt-20 bg-pink-600`}
      >
        <div
          ref={domRef}
          className={`
          fade-in-section ${isVisible ? `is-visible` : ``}
          lg:w-1/2 flex m-auto px-20 pb-10 h-[800px] items-center`}
        >
          <p className="text-lg text-white">
            <span className="text-5xl font-bold">About Us</span>
            <br />
            <br />
            {aboutContent}
          </p>
        </div>
        <div
          ref={domRef}
          className={`fade-in-image ${
            isVisible ? `is-visible` : ``
          } md:w-1/2 h-[800px] w-full flex flex-col items-center justify-center`}
        >
          <img src={aboutImage} alt="" />
        </div>
      </div>
    </>
  );
}
