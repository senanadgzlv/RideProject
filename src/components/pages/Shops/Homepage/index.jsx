import React from "react";

import SearchBar from "../Homecomponents/SearchBar";
import FilterPanel from "../Homecomponents/FilterPanel";
import List from "../Homecomponents/List";
import { useState, useEffect } from "react";
import { dataList } from "../../../../Data/Data";

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [product, setProduct]=useState([
    { id: 1, checked: false, label: 'Accessories' },
    { id: 2, checked: false, label: 'Gloves' },
    { id: 3, checked: false, label: 'Bikes' },
    { id: 4, checked: false, label: 'Helmets' },
    { id: 5, checked: false, label: 'Boots' }
  ])

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectCategory = (event, value) => 
    !value ? null : setSelectedCategory(value);

    const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

    const handleChangeChecked = (id) => {
      const productStateList = product;
      const changeCheckedproduct = productStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setProduct(changeCheckedproduct);
    };

    const handleChangePrice = (event, value) => {
      setSelectedPrice(value);
    };

    const applyFilters=()=>{
      let updatedList = dataList;

         // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

  //   const productChecked = product
  //   .filter((item) => item.checked)
  //   .map((item) => item.label.toLowerCase());

  // if (productChecked.length) {
  //   updatedList = updatedList.filter((item) =>
  //     productChecked.includes(item.product));
  // };

 //Product filter
 const productChecked= product.filter(item=>item.checked)
 .map((item)=>item.label.toLowerCase())

 if(productChecked.length){
  updatedList = updatedList.filter((item) =>
  productChecked.includes(item.product)
);
 }


     // Price Filter
     const minPrice = selectedPrice[0];
     const maxPrice = selectedPrice[1];
 
     updatedList = updatedList.filter(
       (item) => item.price >= minPrice && item.price <= maxPrice
     );

         // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }
    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    }

  

    useEffect(() => {
      applyFilters();
    }, [selectedRating,selectedCategory,product,selectedPrice,searchInput]);
  return (
    <div className="home">
      {/* Search Bar */}
      <SearchBar    value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)} />

      <div className="home_panelList-wrap">
        {/* FilterPanel */}
        <div className="home_panel_wrap">
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedRating={selectedRating}
            selectRating={handleSelectRating}
            bikes ={product}
            changeChecked={handleChangeChecked}
            changePrice={handleChangePrice}
            selectedprice={selectedPrice}
          />
        </div>
        {/* List */}
        <div className="home_list_wrap">
          <List list={list} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
