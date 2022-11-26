import React from 'react';
import ListItem from './Listitem';


const List = ({ list }) => (

<div className='row'>
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </div>

);

export default List;
