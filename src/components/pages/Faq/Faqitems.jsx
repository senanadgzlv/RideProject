import React from 'react'
import { useState } from 'react';
import faq, { faqitems } from "../../../Data/Data"

const Faqitems = () => {

    const [selected, setSelected]=useState(null);

    const toggle = (i)=>{
        if(selected== i){
            return setSelected(null)
        }
        setSelected(i)
    }

  return (
  <div className="wrapper">
    <div className="accordion">
        {
faqitems.map((items,i )=>(
    <div className="item">
        <div className="title d-flex justify-content-between align-items-center" onClick={()=>toggle(i)}>
            <h2>{items.question}</h2>
            <span > {selected === i ? "-":'+'}</span>
        </div>
        <div className={selected===i ? "content-show" : "content"}>
            {items.answer}
        </div>
    </div>
))
        }
    </div>
  </div>
  )
}

export default Faqitems