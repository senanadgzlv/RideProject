import React from 'react'

const Nav = () => {
  return (
    <header className='contact'>
    <ul>
      <li>Shipping</li>
      <li>FAQ</li>
      <li>Contact</li>
      <li>Track Order</li>
    </ul>

    <ul className='follow' >
      <li id='us' >Follow Us:</li>
      <li><i className="fa-brands fa-facebook-f"></i></li>
      <li><i className="fa-brands fa-twitter"></i></li>
      <li><i className="fa-brands fa-instagram"></i></li>
      <li><i className="fa-brands fa-youtube"></i></li>
      <li><i className="fa-brands fa-pinterest"></i></li>

    </ul>
  </header>
  )
}

export default Nav