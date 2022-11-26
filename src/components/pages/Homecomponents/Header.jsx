import React from "react";
import logo from "../../../assets/img/logo-1.svg";
import { useState } from "react";
import { useCart } from "react-use-cart";
import Cart from "../../Cart";
import { Link } from "react-router-dom";
import DarkMode from "../../DarkMode";
import { useTranslation } from "react-i18next";
import Lang from "../../Lang/Lang";

 
const Header = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const { totalItems } = useCart();

  const { t } = useTranslation();

  return (
    <>
      <header className="mainheader">
        <nav>
          <ul>
            <li>
              <Link to="/">{t("nav.0")}</Link>
            </li>
            <li className="shopmenu">
              <Link to="/shop">{t("nav.1")} </Link>{" "}
           
            </li>
            <li className="page">
              <Link to="pages">{t("nav.2")}</Link>{" "}
           <ul className="page-submenu">
            <li><Link to="/about">About Us</Link></li>
            <div className="line"></div>
            <li><Link to="/team" >Our Team</Link></li>
            <div className="line"></div>
            <li><Link to="/faq" >Faq</Link></li>
            <div className="line"></div>
            <li><Link>404</Link></li>
           </ul>
            </li>
            <li>
              <Link to="/blog">{t("nav.3")}</Link>
            </li>
            <li>
              <Link to="contact">{t("nav.4")}</Link>
            </li>
         <li><Lang /> </li>
          </ul>
        </nav>
        <div className="logo">
          <img src={logo} alt="" />
       
        </div>
      
        <div className="icons">
          <ul>
            <li>  <DarkMode /></li>
            <li>
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
            <li>
             <Link to="/admin" > <i className="fa-solid fa-user"></i></Link>
            </li>
            <li>
              <i className="fa-solid fa-heart"></i>
            </li>
            <li className="d-flex">
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

export default Header;
