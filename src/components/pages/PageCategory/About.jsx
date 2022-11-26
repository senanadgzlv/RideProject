import React from 'react'
import Banner from './Banner'
import Bikephoto from './Bikesekil'
import Pagenav from './PageNav'
import Bikesekil from './Bikesekil'
import Story from './Story'

const About = () => {
  return (
    <div>
        <Pagenav />
        <Banner title="Homepage → About Us" title2="About Us" />
        <Bikesekil />
        <Story />
    </div>
  )
}

export default About