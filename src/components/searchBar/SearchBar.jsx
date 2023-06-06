import React from "react";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <>
      <div class="search">
        <input type="text" class="input" placeholder="Pizza de pepperoni, mexicana, hawaiana..." />
        <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
