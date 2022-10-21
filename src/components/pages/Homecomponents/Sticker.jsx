import React from "react";
import brand1 from "../../../assets/img/brand1.svg";
import brand2 from "../../../assets/img/brand2.svg";
import brand3 from "../../../assets/img/brand3.svg";
import brand4 from "../../../assets/img/brand4.svg";
import brand5 from "../../../assets/img/brand5.svg";

const Sticker = () => {
  return (
    <section className="stiker mt-5 ">
      <div className="container-fluid">
        <div className="grid-item">
          <img src={brand1} alt="" />
        </div>
        <div className="grid-item">
          <img src={brand2} alt="" />
        </div>
        <div className="grid-item">
          <img src={brand3} alt="" />
        </div>
        <div className="grid-item">
          <img src={brand4} alt="" />
        </div>
        <div className="grid-item">
          <img src={brand5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Sticker;
