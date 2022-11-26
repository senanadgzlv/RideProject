import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo-2.svg";
import { useCart } from "react-use-cart";
import Cart from "../../Cart";
import { useState } from "react";

const Pagenav = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const { totalItems } = useCart();
  return (
    <>
      <header className="pagenavvvv">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li> 
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="icons">
          <ul>
            <li>
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
            <li>
              <i className="fa-solid fa-user"></i>
            </li>
            <li>
              <i className="fa-solid fa-heart"></i>
            </li>
            <li>
              <i className="fa-solid fa-bag-shopping" onClick={ToggleSidebar}></i> 
              <p>{totalItems}</p>
            </li>
          </ul>
        </div>
      </header>


      <div className={`sidemenu ${isOpen == true ? "active" : ""}`}>
        <div className="all">
          <div className="head">
            <p>Shopping Cart</p>
            <i className="fa-solid fa-xmark" onClick={ToggleSidebar}></i>
          </div>
          <Cart />
        </div>
      </div>

      <div
        className={`overlay ${isOpen == true ? "activ" : ""}`}
        onClick={ToggleSidebar}
      ></div>
    </>
  );
};

export default Pagenav;