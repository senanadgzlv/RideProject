import React from 'react'
import Listitem from './Listitem/Listitem'

const index = ({list}) => {
  return (
    <div className='row' >
      {list.map((item)=>(
        <Listitem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default index