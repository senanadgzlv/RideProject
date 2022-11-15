import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <AiOutlineSearch className="searchBar-icon" />
      <input
        type="text"
        placeholder="Search Product"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default Searchbar;
