import React from 'react'
import Banner from './Banner'
import Faqitems from './Faqitems'
import PageNav from './PageNav'

const Faq = () => {
  return (
    <div>

        <PageNav />
        <Banner title="Homepage → Faq" title2="FAQ" />
        <Faqitems />
    </div>
  )
}

export default Faq