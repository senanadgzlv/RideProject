import React from "react";
import { Link } from "react-router-dom";

const DiscoverItem = ({
  bikeitem: {
    id,
    img,
    title1,
    desc1,
    desc2,
    title2,
    trialdesc1,
    trialdesc2,
    trialtitle,
    roadtitle,
    roaddesc1,
    roaddesc2,
    link,
  },
}) => {
  return (
    <div className="col-12 col-sd-12 col-md-4">
      <div className="mainbox">
        <div className="box">
          <img src={img} alt="" />
          <h1>
            {title1} <br />
            {title2}{" "}
          </h1>
          <h1 className="trialtitle">{trialtitle}</h1>
          <p>
            <span>{desc1}</span> {desc2}
          </p>
          <p className="trial">
            {" "}
            <span>{trialdesc1}</span> {trialdesc2}
          </p>
          <h1>{roadtitle}</h1>
          <p className="road">
            <span>{roaddesc1}</span>
            {roaddesc2}
          </p>

          {/* <p>{desc}</p> */}
          <Link to="/shop">{link}</Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverItem;
