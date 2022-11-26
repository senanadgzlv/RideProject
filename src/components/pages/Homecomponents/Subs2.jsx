import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../../assets/img/banner1.png";

const Subs2 = () => {
  const options = {
    // margin: 40,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    
    items: 1,
    // navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  const styleObj = {
    fontSize: 20,
    color: "white",
 
}


  return (
    <section className="subs2">
      <div className="image">
        <img src={img1} alt="" />
      </div>

      <div className="contentler">
        <div className="content">
        <OwlCarousel   className="slider-items owl-carousel" {...options} >
        <h2  style={styleObj} >
              “Good selection of bikes and cycling accessories <br /> and great
              service with professional staff. I always <br /> enjoy visiting
              the store.”
            </h2>
            <h2 style={styleObj} >
              “Good selection of bikes and cycling accessories <br /> and great
              service with professional staff. I always <br /> enjoy visiting
              the store.”
            </h2>
            <h2 style={styleObj}>
              “Good selection of bikes and cycling accessories <br /> and great
              service with professional staff. I always <br /> enjoy visiting
              the store.”
            </h2>
        </OwlCarousel>
          
   
        </div>
      </div>
    </section>
  );
};

export default Subs2;
