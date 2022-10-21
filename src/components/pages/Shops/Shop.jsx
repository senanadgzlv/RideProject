import React from 'react'
import Pagenav from './Pagenav'
import Banner from './Banner'
import Categories from './Categories'

const Shop = () => {
  return (
    <div>

      <Pagenav />
      <Banner title="Homepage → Shop" title2="Shop" />
      <Categories />
    </div>
  )
}

export default Shop