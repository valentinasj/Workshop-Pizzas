import React, {useContext, useEffect} from "react";
import "./NavBar.scss";
import {
  faBookOpen,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import openBook from "../../imgs/open-book.svg";
import search from "../../imgs/buscar.svg";
import basket from "../../imgs/basket.svg";
import { Link } from "react-router-dom";


const NavBar = () => {


  return (
    <nav className="navBar">
        <Link to="/home">
      <div className="navBar__bookContainer">
        <img src={openBook} alt="libro" className="navBar__book" />
        <span>Home</span>
      </div>
        </Link>
      <Link to="/payment">
      <div className="navBar__basketContainer">
        <img src={basket} alt="" className="navBar__basket" />
      </div>
      </Link>
        <Link to="/search">
        <div className="navBar__searchContainer">
            <img src={search} alt="buscar" className="navBar__search" />
            <span>Buscar</span>
        </div>
        </Link>

    </nav>
  );
};

export default NavBar;
