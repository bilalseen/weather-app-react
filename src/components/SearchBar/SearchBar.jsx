import React, { useState } from "react";
import "./SearchBar.css";
import search_icon from "../../assets/icons/search.png";

export const SearchBar = (props) => {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search City/Town"
        value={props.search}
        onChange={props.onChange}
      ></input>

      <img
        src={search_icon}
        className="search-icon"
        alt="search icon"
        onClick={props.onClick}
      />
    </div>
  );
};
