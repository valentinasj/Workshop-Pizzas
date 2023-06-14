import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import "./Search.scss";
import SearchBar from "../../components/searchBar/SearchBar";
import FoodSearchCard from "../../components/foodCard/FoodSearchCard";


export const Search = () => {

  const [results, setResults] = useState([]);

  return (
    <>
      <section className="mainSearchBar">
        <SearchBar setResults={setResults}/>
        <main className="mainSearchBar__container">
          <div className="mainSearchBar__cards">
            <span className="mainSearchBar__resultados " >{`${results.length} Resultados`}</span>
            {
        
           <FoodSearchCard results={results}/> }</div>
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
