import React from "react";
import { Link } from "react-router-dom";

const Kidsbikesitem = ({ kidboxitem: { id, title, desc, link, img } }) => {
  return (
    <div className="col-12 col-md-6">
      <div className="kidsbox">
        <div className="contentbox">
          <img src={img} alt="" />
          <h2>{title}</h2>
          <p>{desc}</p>
          <Link to="/shop">{link}</Link>
        </div>
      </div>
    </div>
  );
};

export default Kidsbikesitem;
