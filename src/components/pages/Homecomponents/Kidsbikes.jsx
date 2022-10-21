import React from 'react'
import { kidsitems } from '../../../Data/Data'
import Kidsbikesitem from './Kidsbikesitem'

const Kidsbikes = () => {
  return (
    <section className="kidsbikes">
<div className="row">
    {
        kidsitems.map((kidboxitems)=>(
            <Kidsbikesitem key={kidboxitems.id} kidboxitem={kidboxitems} />
        ))
    }
</div>
    </section>
  )
}

export default Kidsbikes