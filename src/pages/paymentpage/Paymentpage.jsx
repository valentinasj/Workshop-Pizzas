import "./PayMent.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const api = "https://pizza-api-production.up.railway.app/pucharses";

export const Paymentpage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [pizzas, setPizzas] = useState(
        "forPay" in localStorage && JSON.parse(localStorage.getItem("forPay"))
    );
    const [payed, setPayed] = useState(false);
    const onSubmit = (data) => {
        const forSend = {
            user: data,
            pizza: JSON.parse(localStorage.getItem("forPay")),
        };
        axios
            .post(api, forSend)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        setPayed(true);
    };
    function removePizza(deleteP) {
        let deleted = pizzas.filter((obj, index) => {
            return index !== parseInt(deleteP);
        });
        setPizzas(deleted);
        const forPay = JSON.stringify(deleted);
        localStorage.setItem("forPay", forPay);
    }
    // const payPizza = () => {
    //     const forSend = {
    //         user: JSON.parse(localStorage.getItem("activeUser")).user,
    //         pizza: JSON.parse(localStorage.getItem("forPay")),
    //     };
    //     axios
    //         .post(api, forSend)
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };
    return (
        <div className="pay-container">
            {!payed ? (
                <>
                    <p className="title-back">
                        {" "}
                        <Link
                            to={"/details/" + localStorage.getItem("lastPizza")}
                            className="go-back"
                        >
                            <FontAwesomeIcon
                                className="icon"
                                icon={faChevronLeft}
                            />{" "}
                        </Link>
                        Carrito de compras
                    </p>
                    {pizzas.map((pizza, i) => {
                        return (
                            <div key={i} className="info-card">
                                <img
                                    className="image"
                                    src={pizza.image}
                                    alt="Deliciosa Pizza"
                                />
                                <div className="data">
                                    <p className="pizza-name">
                                        {pizza.name}
                                        <button
                                            onClick={() => {
                                                removePizza(i);
                                            }}
                                            className="remove-item"
                                        >
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faTrashCan}
                                            />{" "}
                                        </button>
                                    </p>
                                    <div className="info">
                                        <p>X{pizza.amount}</p>
                                        <p className="amount">
                                            ${pizza.price * pizza.amount}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="pay-form">
                        <p className="title">Información de pago</p>
                        <form
                            className="form"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="each-inp">
                                <label htmlFor="name"> Nombre completo</label>
                                {errors.name && (
                                    <span>Este campo es requerido</span>
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
                                    <span>Este campo es requerido</span>
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
                                        <span>Este campo es requerido</span>
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
                                        <span>Este campo es requerido</span>
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
                                    <span>Este campo es requerido</span>
                                )}
                                <input
                                    placeholder="Av.morelos #123"
                                    id="address"
                                    {...register("address", { required: true })}
                                />
                            </div>
                            {pizzas.length > 0 ? (
                                <input type="submit" />
                            ) : (
                                <>
                                    <Player
                                        autoplay
                                        loop
                                        src="https://assets2.lottiefiles.com/packages/lf20_WpDG3calyJ.json"
                                        style={{
                                            height: "200px",
                                            width: "200px",
                                        }}
                                    >
                                        <Controls
                                            visible={false}
                                            buttons={[
                                                "play",
                                                "repeat",
                                                "frame",
                                                "debug",
                                            ]}
                                        />
                                    </Player>
                                    <h5 className="no-pizzas">
                                        Selecciona Las Pizzas Que Deseas Comprar
                                    </h5>
                                </>
                            )}
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
                    <button
                        onClick={localStorage.removeItem("forPay")}
                        className="accept-btn"
                    >
                        <Link to={"/home"}>ACEPTAR</Link>
                    </button>
                </div>
            )}
        </div>
    );
};
