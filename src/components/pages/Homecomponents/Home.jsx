import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Discover from "./Discover";
import Feapro from "./Feapro";
import Features from "./Features";

import Header from "./Header";
import Kidsbikes from "./Kidsbikes";
import Products from "./Products";
import Service from "./Service";
import Slider from "./Slider";
import Sticker from "./Sticker";
import Subs from "./Subs";
import Subs2 from "./Subs2";

export const ThemeContext = createContext(null);

const Home = () => {



  return (


<div >
      <Header />
      <Slider />
      <Discover />
      <Features
        title1="YOUR RIDE START HERE"
        title2="Our Facilities & Features"
      />
      <Kidsbikes />
      <Service title1="YOUR RIDE START HERE" title2="Bike Services & Repair" />
      <Products />
      <Subs />
      <Subs2 />
      <Feapro />
      <Sticker />
      {/* <Footer /> */}
    </div>

  );
};

export default Home;
