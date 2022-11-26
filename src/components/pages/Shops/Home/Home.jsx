import React, {useState} from 'react'
import Searchbar from '../HomeComponents/SearchBar/Searchbar';
import FilterPanel from '../HomeComponents/FilterPanel/Filterpanel';
import { dataList } from '../../../../Data/Data';
import List from '../HomeComponents/List/List';
import { useEffect } from 'react';

const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [list, setList]= useState(dataList)
    const [cuisines, setCuisines] = useState([
        { id: 1, checked: false, label: 'Accesories' },
        { id: 2, checked: false, label: 'Gloves' },
        { id: 3, checked: false, label: 'Bikes' },
      ]);
      const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
      const [selectedRating, setSelectedRating] = useState(null);
      const [selectedCategory, setSelectedCategory] = useState(null);

    // const filterResult =(categitem)=>{
    //     const result= dataList.filter((curDate)=>{
    //         return curDate.category ===categitem;
    //     })
    //     setList(result)
    // }

    const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

    const handleChangeChecked = (id) => {
        const cusinesStateList = cuisines;
        const changeCheckedCuisines = cusinesStateList.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        setCuisines(changeCheckedCuisines);
      };

      const handleChangePrice = (event, value) => {
        setSelectedPrice(value);
      };

      const handleSelectRating = (event, value) =>
      !value ? null : setSelectedRating(value);

    const applyFilters=()=>{
        let updatedList=dataList

            // Search Filter
    if (searchInput) {
        updatedList = updatedList.filter(
          (item) =>
            item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
            -1
        );
      }

          // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

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

      // product Filter
      const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }
      setList(updatedList);
    }

    useEffect(()=>{
        applyFilters();
    },[searchInput,selectedPrice,selectedRating,selectedCategory,cuisines])
  return (
    <div className="home">
        <Searchbar
  value={searchInput}
  changeInput={(e) => setSearchInput(e.target.value)}
/>

<div className="home_panelList-wrap">
    <div className="home_panel_wrap">
        <FilterPanel   selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
              cuisines={cuisines}
              changeChecked={handleChangeChecked}
              selectedPrice={selectedPrice}
              changePrice={handleChangePrice}
              selectedRating={selectedRating}
              selectRating={handleSelectRating}
        
        />
    </div>

    <div className="home_list_wrap">
        <List list ={list}/>
    </div>
</div>
    </div>
  )
}

export default Home