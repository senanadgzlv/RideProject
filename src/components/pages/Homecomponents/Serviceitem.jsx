import React from "react";

const ServiceItem = ({ servicitems: { id, title, reqem, desc1, desc2 } }) => {
  return (
    <div className="col-lg-6 col-12 h-100 bike">
      <div className="contents ">
        <h2>
          <span>0{reqem}.</span>
          {title}
        </h2>
        <p>
          {desc1} <br /> {desc2}
        </p>
      </div>
    </div>
  );
};

export default ServiceItem;
