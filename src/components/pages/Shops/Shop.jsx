import React from 'react'
import Header from "./Header"
import Banner from './Banner'
import Home from './Home/Home'


const Shop = () => {
  return (
    <div>
        <Header />
        <Banner title="Homepage → Shop" title2="Shop"  />
        <Home />
      
    </div>
  )
}

export default Shop