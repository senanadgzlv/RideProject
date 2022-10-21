import React from "react";

const FeaturesItem = ({ featuresitem: { id, icon, title, desc } }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-4 ">
        <div className="commonbox" data-aos="zoom-in">
          <a href="">
            <span></span>
            {icon}{" "}
          </a>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default FeaturesItem;
