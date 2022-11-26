import React from 'react'
import { Link } from 'react-router-dom';
import img1 from "../../../assets/img/about_02.png";

const Bikesekil = () => {
  return (
 <>
 <div className="container-fluid">
    <div className="row">
        <div className="col-12 col-md-6">
            <div className="img">
                <img src={img1} alt="" width="800" />
            </div>

        </div>

        <div className="col-12 col-md-6 mt-5 ">
            <div className="content ">
                <p id='p1'>WHO WE ARE</p>
                <h2>The Best <br /> Bicycling <br /> Experience</h2>
                <p>Shop and buy from our huge selection of mountain bike parts <br /> and accessories all with free shipping to the US and cheap <br /> worldwide shipping.</p>
                <Link to="/contact">CONTACT US</Link>
            </div>
        </div>
    </div>
 </div>
 
 
 </>
  )
}

export default Bikesekil