import "./PayMent.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const API_FOOD = "https://pizza-api-production.up.railway.app/pizzas/";

export const Paymentpage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [pizzaData, setPizzaData] = useState({});
    const [pizzaImg, setPizzaImg] = useState("");
    const loc = JSON.parse(localStorage.getItem("forPay"));
    const [payed, setPayed] = useState(false);
    useEffect(() => {
        setAmount(loc.amount);
        setPrice(loc.amount * loc.price);
        axios
            .get(API_FOOD + loc.id)
            .then((response) => {
                setPizzaData(response.data);
                setPizzaImg(loc.image);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const onSubmit = (data) => {
        setPayed(true);
    };
    return (
        <div className="pay-container">
            {!payed ? (
                <>
                    <p className="title-back">
                        {" "}
                        <Link className="go-back" to={`/details/${loc.id}`}>
                            <FontAwesomeIcon
                                className="icon"
                                icon={faChevronLeft}
                            />{" "}
                        </Link>
                        Carrito de compras
                    </p>
                    <div className="info-card">
                        <img
                            className="image"
                            src={pizzaImg}
                            alt="Deliciosa Pizza"
                        />
                        <div className="data">
                            <p>{pizzaData.name}</p>
                            <div className="info">
                                <p>X{amount}</p>
                                <p>${price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="pay-form">
                        <p className="title">Información de pago</p>
                        <form
                            className="form"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="each-inp">
                                <label htmlFor="name"> Nombre completo</label>
                                {errors.name && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    autoComplete="off"
                                    placeholder="Ingresa tu nombre"
                                    id="name"
                                    {...register("name", { required: true })}
                                />
                            </div>
                            <div className="each-inp">
                                <label htmlFor="card">
                                    Número de Tarjeta de Crédito
                                </label>
                                {errors.card && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    placeholder="1234 1234 1234 1234"
                                    id="card"
                                    {...register("card", { required: true })}
                                />
                            </div>
                            <div className="double">
                                <div className="each-inp left">
                                    <label htmlFor="date">
                                        Fecha de vencimiento
                                    </label>
                                    {errors.date && (
                                        <span>This field is required</span>
                                    )}
                                    <input
                                        placeholder="MM/YY"
                                        id="date"
                                        {...register("date", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div className="each-inp right">
                                    <label htmlFor="code">CVV</label>
                                    {errors.code && (
                                        <span>This field is required</span>
                                    )}
                                    <input
                                        placeholder="***"
                                        id="code"
                                        {...register("code", {
                                            required: true,
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="each-inp">
                                <label htmlFor="address">Dirección</label>
                                {errors.address && (
                                    <span>This field is required</span>
                                )}
                                <input
                                    placeholder="Av.morelos #123"
                                    id="address"
                                    {...register("address", { required: true })}
                                />
                            </div>
                            <input type="submit" />
                        </form>
                    </div>
                </>
            ) : (
                <div className="payment-succ">
                    <Player
                        autoplay
                        loop
                        src="https://assets3.lottiefiles.com/packages/lf20_7W0ppe.json"
                        style={{ height: "300px", width: "300px" }}
                    >
                        <Controls
                            visible={false}
                            buttons={["play", "repeat", "frame", "debug"]}
                        />
                    </Player>
                    <h5>Tu pedido está en proceso</h5>
                    <p>Serás notificado cuando llegue el repartidor</p>
                    <button className="accept-btn">
                        <Link to={"/home"}>ACEPTAR</Link>
                    </button>
                </div>
            )}
        </div>
    );
};
