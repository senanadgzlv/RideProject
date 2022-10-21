import React from "react";
import { productItems } from "../../../Data/Data";
import ProductItem from "./Productitem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Products = () => {
  const options = {
    margin: 40,
    responsiveClass: true,
    // nav: true,
    autoplay: true,
    items: 3,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <section className="products">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <h2>CHECK IT OUT</h2>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center ">
            <h1>BEST SELLER</h1>
          </div>
        </div>

        <OwlCarousel className="slider-items owl-carousel" {...options}>
          {productItems.map((item, acar) => {
            return (
              <ProductItem
                img={item.img}
                img1={item.img1}
                title={item.title}
                price1={item.price}
                products={item}
                key={acar}
              />
            );
          })}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Products;
