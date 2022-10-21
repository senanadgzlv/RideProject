import React from 'react'
import Banner from './Banner'
import Pagenav from './PageNav'
import Map from './Map'
import Contactfooter from './Contactfooter'

const Contact = () => {
  return (
   <div>
    <Pagenav />
    <Banner title="Homepage → Contact" title2="Contact" />
    <Map />
    <Contactfooter />
   </div>
  )
}

export default Contact