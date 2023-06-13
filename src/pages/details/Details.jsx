import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Details.scss";
import {
    faStar,
    faBasketShopping,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../imgs/profile.png";
import Swal from "sweetalert2";

const API_FOOD = "https://pizza-api-production.up.railway.app/pizzas/";

export const Details = () => {
    const { id } = useParams();
    const currency = "MXN";
    const [pizzaData, setPizzaData] = useState({});
    const [pizzasCount, setPizzasCount] = useState(1);
    const [cart, setCart] = useState(
        "forPay" in localStorage
            ? JSON.parse(localStorage.getItem("forPay"))
            : []
    );
    const navigate = useNavigate();
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
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    function addOrRemove(txt) {
        if (txt === "add") {
            setPizzasCount(pizzasCount + 1);
        } else {
            if (pizzasCount > 1) {
                setPizzasCount(pizzasCount - 1);
            }
        }
    }
    function saveData(butt) {
        localStorage.setItem("lastPizza", id);
        if (butt === "pay") {
            if (
                "forPay" in localStorage === false ||
                JSON.parse(localStorage.getItem("forPay")).length <= 0
            ) {
                const forPay = JSON.stringify([
                    {
                        amount: pizzasCount,
                        price: pizzaData.price,
                        id: id,
                        image: pizzaData.imgs[0],
                        name: pizzaData.name,
                    },
                ]);
                localStorage.setItem("forPay", forPay);
                navigate("/payment");
            } else {
                navigate("/payment");
            }
        } else if (butt === "basket") {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });
            Toast.fire({
                icon: "success",
                title: pizzasCount <= 1 ? "Pizza Añadida" : "Pizzas Añadidas",
            });
            if ("forPay" in localStorage === false) {
                setCart([
                    {
                        amount: pizzasCount,
                        price: pizzaData.price,
                        id: id,
                        image: pizzaData.imgs[0],
                        name: pizzaData.name,
                    },
                ]);
                const forPay = JSON.stringify([
                    {
                        amount: pizzasCount,
                        price: pizzaData.price,
                        id: id,
                        image: pizzaData.imgs[0],
                        name: pizzaData.name,
                    },
                ]);
                localStorage.setItem("forPay", forPay);
            } else {
                const i = JSON.parse(localStorage.getItem("forPay")).findIndex(
                    (objeto) => objeto.id === id.toString()
                );
                if (i === -1) {
                    setCart([
                        ...cart,
                        {
                            amount: pizzasCount,
                            price: pizzaData.price,
                            id: id,
                            image: pizzaData.imgs[0],
                            name: pizzaData.name,
                        },
                    ]);
                    const save = JSON.parse(localStorage.getItem("forPay"));
                    save.push({
                        amount: pizzasCount,
                        price: pizzaData.price,
                        id: id,
                        image: pizzaData.imgs[0],
                        name: pizzaData.name,
                    });
                    const forPay = JSON.stringify(save);
                    localStorage.setItem("forPay", forPay);
                } else {
                    const save = cart;
                    save[i].amount += pizzasCount;
                    const forPay = JSON.stringify(save);
                    localStorage.setItem("forPay", forPay);
                    setCart(save);
                }
            }
        }
    }
    return (
        <div className="detail--container">
            <p className="title-back">
                {" "}
                <Link className="go-back" to={"/home"}>
                    <FontAwesomeIcon className="icon" icon={faChevronLeft} />{" "}
                </Link>
                Todas Las Pizzas
            </p>
            <Slider {...settings}>
                {pizzaData.imgs &&
                    pizzaData.imgs.map((img) => {
                        return (
                            <div className="imgs-cont">
                                <div className="fade"></div>
                                <img
                                    className="carousel-img"
                                    src={img}
                                    alt=""
                                />
                            </div>
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
                    <button
                        onClick={() => {
                            saveData("basket");
                        }}
                        className="basket buy-but"
                    >
                        <FontAwesomeIcon
                            className="icon"
                            icon={faBasketShopping}
                        />
                        Añadir
                    </button>
                    <button
                        onClick={() => {
                            saveData("pay");
                        }}
                        className="pay buy-but"
                    >
                        Pagar
                    </button>
                </div>
            </div>
        </div>
    );
};
