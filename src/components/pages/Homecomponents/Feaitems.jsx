import React from "react";
import { useState } from "react";
import { useCart } from "react-use-cart";

const Feaitems = (props) => {
  const { addItem } = useCart();
  const [open, setOpen] = useState("sidemenu");

  const Togglesidebar = () => {
    open === "sidemenu" ? setOpen("active") : setOpen("sidemenu");
  };

  return (
    <>
      <div className="col-12 col-md-3 mt-5">
        <div className="box">
          <div className="img-box">
            <img src={props.img} alt="" />
            <img src={props.img1} alt="" className="second" />
            <div className="bottom" onClick={() => addItem(props.products)}>
              <p>Add to Card</p>
              <div className="in">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
            <div className="box-text">
              <h6>{props.title}</h6>
              <h5>{props.price1}$</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feaitems;
