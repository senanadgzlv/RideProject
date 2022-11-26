import React from "react";
import { useState } from "react";
import { useCart } from "react-use-cart";

const Listitem = (props) => {
  const { addItem } = useCart();
  const [open, setOpen] = useState("sidemenu");

  const Togglesidebar = () => {
    open === "sidemenu" ? setOpen("active") : setOpen("sidemenu");
  };
  return (
    <div className="col-12 col-md-4 mt-5">
      <div className="box">
        <div className="img-box">
          <img src={props.img} alt="" />
          {/* <img src={img1} alt="" className="second" /> */}
          <div className="bottom" onClick={() => addItem(props.products)}>
            <p>Add to Card</p>
            <div className="in">
              <i className="fa-solid fa-cart-shopping"></i>
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
          <div className="box-text">
            <div className="div d-flex">
              <h5>
                {props.rating}
                <span>🌟</span>
              </h5>
              {/* <h6>{title}</h6> */}
            </div>
            {/* <h5>{price}$</h5> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listitem;
