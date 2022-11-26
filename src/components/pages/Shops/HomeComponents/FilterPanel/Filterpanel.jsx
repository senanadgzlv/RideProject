import React from 'react'
import FilterList from '../../common/FilterListToggle/filterlist'
import CheckboxProton from '../../common/ChechBoxProton/chechkbox'
import SliderProton from '../../common/SliderProton/slider'
import { categorylist, ratinglist} from '../../../../../Data/Data'
const Filterpanel = ({selectCategory, selectedCategory, cuisines, changeChecked,   selectedPrice, changePrice,selectRating,selectedRating}) => {
  return (
    <div>
         <div className='input-group'>
      <p className='label'>Category</p>
      <FilterList
        options={categorylist}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
    </div>

        <div className='input-group'>
      <p className='label'>Cuisine</p>
      {cuisines.map((cuisine) => (
        <CheckboxProton
          key={cuisine.id}
          cuisine={cuisine}
          changeChecked={changeChecked}

        />
      ))}
    </div>

    <div className='input-group'>
      <p className='label-range'>Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>

    <div className='input-group'>
      <p className='label'>Star Rating</p>
      <FilterList
        options={ratinglist}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
    </div>
  )
}

export default Filterpanel