import React from "react";
import "./ButtonPrice.scss";
import { Link } from "react-router-dom";

const ButtonPrice = ({ price, currency, pizzaId }) => {
    return (
        <button className="buttonPrice">
            <Link className="details" to={`/details/${pizzaId}`}>
                <span className="buttonPrice__price">{price}</span>
                <span className="buttonPrice__currency">{currency}</span>
            </Link>
        </button>
    );
};

export default ButtonPrice;
