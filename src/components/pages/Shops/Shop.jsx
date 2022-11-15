import React from 'react'
import Pagenav from './Pagenav'
import Banner from './Banner'
import Home from "./Homepage"



const Shop = () => {
  return (
    <div>

      <Pagenav />
      <Banner title="Homepage → Shop" title2="Shop" />
   <Home />

    </div>
  )
}

export default Shop