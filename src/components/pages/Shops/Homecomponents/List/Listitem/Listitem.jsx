import React from 'react'

const Listitem = ({item:{title, img,img1, price,rating}}) => {
  return (
 
        <div className="col-12 col-md-4 mt-5">
        <div className="box">
          <div className="img-box">
            <img src={img} alt="" />
            <img src={img1} alt="" className="second" />
            <div className="bottom" >
              <p>Add to Card</p>
              <div className="in">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
            <div className="box-text">
            <div className="div d-flex">
            <h5>{rating}<span>🌟</span></h5>
              <h6>{title}</h6>
            </div>
              <h5>{price}$</h5>
     
            </div>
          </div>
        </div>
        </div>
 
   
  
  )
}

export default Listitem