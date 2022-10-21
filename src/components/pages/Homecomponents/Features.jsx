import React, { useEffect } from "react";
import FeaturesItem from "./Featuresitem";
import AOS from "aos";
import "aos/dist/aos.css";
import { featuresitem } from "../../../Data/Data";

const Features = ({ title1, title2 }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section className="features">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 d-flex justify-content-around align-items-center flex-column senan ">
            <div className="content text-center  ">
              <h2 className="title1" data-aos="fade-up">
                {title1}
              </h2>
              <h1 className="title2" data-aos="fade-up">
                {title2}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {featuresitem.map((item) => (
            <FeaturesItem key={item.id} featuresitem={item} />
          ))}
        </div>
      </div>
      <div className="line"></div>
      <div className="line1"></div>
    </section>
  );
};

export default Features;
