import React from 'react'
import Pagenav from './PageNav'
import Banner from './Banner'
import Ourteam from './Ourteam'

const Team = () => {
  return (
    <div>
        <Pagenav />
        <Banner title="Homepage → Our Team" title2=" Our Team" />
        <Ourteam />

    </div>
  )
}

export default Team