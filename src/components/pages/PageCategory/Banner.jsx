import React from 'react'

const Banner = (props) => {
  return (
    <section className="banner">
    <p>{props.title}</p>
       <h3>{props.title2}</h3>

       <h2>About</h2>
 </section>
  )
}

export default Banner