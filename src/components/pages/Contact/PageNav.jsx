import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo-2.svg";

const Pagenav = () => {
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
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
            <li>
              <i class="fa-solid fa-user"></i>
            </li>
            <li>
              <i class="fa-solid fa-heart"></i>
            </li>
            <li>
              <i class="fa-solid fa-bag-shopping"></i>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Pagenav;