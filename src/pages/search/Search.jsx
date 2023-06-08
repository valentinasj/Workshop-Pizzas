import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import "./Search.scss";
import SearchBar from "../../components/searchBar/SearchBar";
import FoodSearch from "../../components/foodCard/FoodSearch";

export const Search = () => {

  const [results, setResults] = useState([]);

  return (
    <>
      <section className="mainSearchBar">
        <SearchBar setResults={setResults}/>
        <main className="mainSearchBar__container">
          <div className="mainSearchBar__cards">{
           <FoodSearch results={results}/> }</div>
        </main>
      </section>
      <div className="mainSearch">
        <figure className="mainSearch__image">
          <img src={logo} alt="Logo" />
        </figure>
        <span className="mainSearch__words">
          Busca la Pizza que mas te gusta
        </span>
      </div>
    </>
  );
};
