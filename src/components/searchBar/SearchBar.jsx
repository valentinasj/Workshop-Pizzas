import React, { useEffect, useState } from "react";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    axios
      .get("https://pizza-api-production.up.railway.app/pizzas")
      .then((response) => {
        const results = response.data.filter((pizza) => {
          return (
            value &&
            pizza &&
            pizza.name &&
            pizza.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="input"
          placeholder="Pizza de pepperoni, mexicana, hawaiana..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
