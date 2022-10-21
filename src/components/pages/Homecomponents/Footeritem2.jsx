import React from "react";
import card1 from "../../../assets/img/card1.png";

const FooterItem2 = () => {
  return (
    <>
      <div className="col-6 col-md-2 ">
        <h4 className="text-center">Useful Links</h4>
        <ul className="mt-3 ms-2">
          <li>
            <a href="">Legal&Privacy</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Gift Card</a>
          </li>
          <li>
            <a href="">Customer Service</a>
          </li>
          <li>
            <a href="">My Account</a>
          </li>
          <li>
            <a href="">Find A Store</a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md-2">
        <h4 className="text-center">My Account</h4>
        <ul className="mt-3 ms-3">
          <li>
            <a href="">My Profile</a>
          </li>
          <li>
            <a href="">My Order History</a>
          </li>
          <li>
            <a href="">My Wish List</a>
          </li>
          <li>
            <a href="">Order Tracking</a>
          </li>
          <li>
            <a href="">Shopping Card</a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md-2">
        <h4 className="text-center me-2">Company</h4>
        <ul className="ms-4 mt-3">
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Affiliate</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md-2">
        <h4 className="text-center">Shop</h4>
        <ul className="ms-5 mt-3">
          <li>
            <a href="">Televisions</a>
          </li>
          <li>
            <a href="">Fridges</a>
          </li>
          <li>
            <a href="">DishWasher</a>
          </li>
          <li>
            <a href="">Fans</a>
          </li>
          <li>
            <a href="">Air Conditioners</a>
          </li>
          <li>
            <a href="">Laptops</a>
          </li>
        </ul>
      </div>

      <div className="col-12 col-md-4 text-center">
        <h4 className="d-flex justify-content-end me-3">Connect With Us</h4>
        <div className="icons  me-3   ">
          <i className="fa-brands fa-facebook-f ms-5"></i>

          <i className="fa-brands fa-twitter ms-5"></i>

          <i className="fa-brands fa-instagram ms-5"></i>

          <i className="fa-brands fa-pinterest ms-5"></i>
        </div>
        <div className="method mt-5">
          <h4 className="d-flex justify-content-end me-3 ">Payment Method</h4>
          <img className="ms-5" src={card1} alt="" />
        </div>
      </div>
      <hr style={{ color: "white" }} />
      <div className="row">
        <div className="col-12 mt-2 ">
          <p>
            Copyright © 2022 <span className="ridez">Ridez</span>. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterItem2;
