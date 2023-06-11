import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Details.scss";
import { faStar, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../imgs/profile.png";

const API_FOOD = "https://pizza-api-production.up.railway.app/pizzas/";

export const Details = () => {
    const { id } = useParams();
    const currency = "MXN";
    const [pizzaData, setPizzaData] = useState({});
    const [pizzasCount, setPizzasCount] = useState(1);
    useEffect(() => {
        axios
            .get(API_FOOD + id)
            .then((response) => {
                setPizzaData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    function addOrRemove(txt) {
        if (txt === "add") {
            setPizzasCount(pizzasCount + 1);
        } else {
            if (pizzasCount > 0) {
                setPizzasCount(pizzasCount - 1);
            }
        }
    }
    function saveData() {
        const forPay = JSON.stringify({
            amount: pizzasCount,
            price: pizzaData.price,
            id: id,
            image: pizzaData.imgs[0],
        });
        localStorage.setItem("forPay", forPay);
    }
    return (
        <div className="detail--container">
            <Slider {...settings}>
                {pizzaData.imgs &&
                    pizzaData.imgs.map((img) => {
                        return (
                            <img className="carousel-img" src={img} alt="" />
                        );
                    })}
            </Slider>
            <div className="pizza-info">
                <h3 className="pizza-name">{pizzaData.name}</h3>
                <div className="info-buttons">
                    <button className="detailPrice">
                        <span className="detailPrice__price">
                            {pizzaData.price}
                        </span>
                        <span className="detailPrice__currency">
                            {currency}
                        </span>
                    </button>
                    <button className="buttonRev">
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        {pizzaData.reviews} Reviews
                    </button>
                </div>
                <div className="pizza-desc">
                    <p className="desc-head">Description</p>
                    <p className="desc">{pizzaData.description}</p>
                </div>
                <div className="pizza-comments">
                    <p className="time-ago">4D ago</p>
                    <img src={profile} alt="" />
                    <div className="comments-rate">
                        <h5 className="name">Random Name</h5>
                        <div className="rated">
                            <FontAwesomeIcon className="icon" icon={faStar} />
                            <FontAwesomeIcon className="icon" icon={faStar} />
                            <FontAwesomeIcon className="icon" icon={faStar} />
                        </div>
                        <p className="comment">
                            De las mejores pizzas que he probado, recomendado
                        </p>
                    </div>
                </div>
            </div>
            <div className="pizza-pay">
                <div className="pizzas-amount">
                    <button
                        onClick={() => {
                            addOrRemove("remove");
                        }}
                        className="amount buy-but"
                    >
                        <p>-</p>
                    </button>
                    <p className="amount-select">{pizzasCount}</p>
                    <button
                        onClick={() => {
                            addOrRemove("add");
                        }}
                        className="amount buy-but"
                    >
                        <p>+</p>
                    </button>
                </div>
                <div className="buttons-pay">
                    <button onClick={saveData} className="basket buy-but">
                        <Link to="/payment">
                            <FontAwesomeIcon
                                className="icon"
                                icon={faBasketShopping}
                            />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
