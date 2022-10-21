import React from "react";
import { serviceitems } from "../../../Data/Data";
import ServiceItem from "../Homecomponents/Serviceitem";

const Service = ({ title1, title2 }) => {
  return (
    <section className="service">
      <div className="container-fluid  ">
        <div className="row ">
          <div className="col-12 title ">
            <h2>{title1}</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 title2">
            <h1>{title2}</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="senan">
              <div className="container-fluid">
                <div className="row">
                  {serviceitems.map((servicitems) => (
                    <ServiceItem
                      key={servicitems.id}
                      servicitems={servicitems}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12">
            <a href="">Explore Product</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
