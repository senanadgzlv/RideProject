import React from 'react'
import { useState } from 'react';
import aboutimg from "../../../assets/img/about_03.jpg";
import { storyitem } from '../../../Data/Data';

const Story = () => {

    const [items, setItems]=useState(storyitem);

    const filteritems=(categitem)=>{
        const updateditems=storyitem.filter((curelem)=>{

            return curelem.category === categitem;
        })
        setItems(updateditems)
    }
  return (
  <section className="story">
     
     <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-md-6">
<div className="image mt-5">
    <img src={aboutimg} alt="" />
</div>
            </div>

            <div className="col-12 col-md-6">
                <div className="content">
                    <p>Our Story</p>
                    <h2>A Humble Beginning</h2>
                    <div className="buttons ">
                <button className='' onClick={()=> filteritems(1983)} >1983</button>
                <button  className='ms-3' onClick={()=> filteritems(1995)} >1995</button>
                <button className='ms-3' onClick={()=>filteritems(2007)} >2007</button>
                <button className='ms-3' onClick={()=>filteritems(2015)} >2015</button>
            </div> 
            <br />
{
    items.map((elem)=>{
        const {id,desc}=elem;
        return(
            <div className="desc">
                <p>{desc}</p>
            </div>
        )
    })
}
            
                </div>

            </div>




        </div>
     </div>
  </section>
  )
}

export default Story