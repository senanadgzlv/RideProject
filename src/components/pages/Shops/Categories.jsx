import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { categoriesItems } from "../../../Data/Data";
import Productitem from "../Homecomponents/Productitem";
const Categories = () => {

  const [item, setProductitem]=useState(categoriesItems);

  const filteritem=(categoryitem)=>{
    const updateditem=item.filter((curelemt)=>{
      return curelemt.category === categoryitem
    })

    setProductitem(updateditem)
  }
  return (
    <>
      {/* <h2 className='mt-5'>Product Categories</h2> */}

      <section className="categ">

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <h4>Product Categories</h4>
              <div className="d-flex flex-column align-items-start mt-3">
                <button className="mb-3 " onClick={()=>filteritem("Accessories")}>Accessories</button>
                <button className="mb-3 " onClick={()=>filteritem("BestSeller")}>BestSeller</button>
                <button className="mb-3 ">BikeCycle</button>
                <button className="mb-3 ">Gloves</button>
                <button className="mb-3 ">Helmets</button>
                <button className="mb-3">Clothing</button>
                <button>Boots</button>

                <div className="d-flex flex-column align-items-start mt-3">
                  <h4>Colors</h4>
                  <div className="green mb-3">Green</div>
                  <div className="purple mb-3">Purple</div>
                  <div className="red mb-3">Red</div>
                  <div className="yellow mb-3">Yellow</div>
                </div>
                <div className="d-flex flex-column align-items-start mt-3">
                  <h4>Sizes</h4>
                  <button className="mb-3">S</button>
                  <button className="mb-3">M</button>
                  <button className="mb-3">L</button>
                  <button className="mb-3">Xl</button>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="container">
                <div className="row d-flex ">
                  {/* {categoriesItems.map((i, index) => (
              
              <div className="col-lg-4" key={index}>

                      
              <NavLink to={`/product/${i.id}`}>
              <div className="box1 ">
        <div className="img-box1  ">
          <img src={i.img} alt="" />
          <img src={i.img1} alt="" className="second" />
          <div className="bottom">
          <p>Add to Card</p>
      <div className="in">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
          </div>
          <div className="box-text">
            <h6>{i.title}</h6>
            <h5>{i.price}</h5>
          </div>
        </div>
       </div>
              </NavLink>

            </div>
                    
                  
                  ))} */}

{
  categoriesItems.map((elem)=>{
    const {id, img, img1, title, price}=elem
    return(
      <div className="col-lg-4" key={id}>

                      
      <NavLink to={`/product/${elem.id}`}>
      <div className="box1 ">
  <div className="img-box1  ">
  <img src={img} alt="" />
  <img src={img1} alt="" className="second" />
  <div className="bottom">
  <p>Add to Card</p>
  <div className="in">
  <i class="fa-solid fa-cart-shopping"></i>
  </div>
  </div>
  <div className="box-text">
    <h6>{title}</h6>
    <h5>{price}</h5>
  </div>
  </div>
  </div>
      </NavLink>
  
    </div>
    )

  })
}
            
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
