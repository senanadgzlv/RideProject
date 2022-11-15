import React from "react";
import FilterListToggle from "../../common/FilterListToggle";
import { categorylist, ratingList} from "../../../../../Data/Data";
import CheckboxProton from "../../common/CheckboxProton"
import SliderProton from "../../common/SliderProton";


const Filter = ({selectedCategory,  selectCategory, selectedRating, selectRating, bikes, changeChecked,  selectedPrice,   changePrice}) => {
  return (
    <div>
      {/* Category */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categorylist}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </div>
      {/* Bikes */}

      <div className="input-group ">
        <p className="label">Products</p>
   
     {
          bikes.map((product)=>(
            <CheckboxProton   key={product.id} product={product} changeChecked={changeChecked} />
          ))
        }
    
      </div>
      {/* Price Range */}

      <div className='input-group'>
      <p className='label-range'>Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>

  
      {/* Rating */}
<div className="input-group">
  <p className="label">Star Rating</p>
  <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />

</div>
      
    </div>
  );
};

export default Filter;
