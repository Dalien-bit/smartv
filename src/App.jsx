import {
  Navbar,
  Home,
  About,  
  Service,
  Product,
  Contact,
} from "./components";
import React, { useState, useRef, useEffect } from "react";

import "./style/App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="product">
        <Product />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
