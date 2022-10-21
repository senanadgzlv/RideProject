import React from "react";
import { feaproItems } from "../../../Data/Data";
import Feaitems from "./Feaitems";

const Feapro = () => {
  return (
    <section className="feapro mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h2>TRY OUR BIKE</h2>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h1> Featured Products </h1>
          </div>
        </div>

        <div className="row">
          {feaproItems.map((item, acar) => {
            return (
              <Feaitems
                img={item.img}
                img1={item.img1}
                title={item.title}
                price1={item.price}
                products={item}
                key={acar}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feapro;
