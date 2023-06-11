import React from "react";
import FoodCard from "../../components/foodCard/FoodCard";
import "./Home.scss";
import PizzaOne from "../../imgs/pizza-one.jpg";
import Cupon from "../../components/cupon/Cupon";
export const Home = () => {
    return (
        <main className="mainHome">
            <div className="foodCards__container">
                <section className="mainHome__section">
                    <div className="mainHome__pizzas">
                        <span>Pizzas disponibles</span>
                        <span className="seeAll">Ver todas</span>
                    </div>
                    <div className="mainHome__coupons">
                        <Cupon
                            name="Cupon para Front Ends"
                            discount="45% OFF"
                        />
                        <Cupon name="Cupon Pizza CSS" discount="25% OFF" />
                        <Cupon
                            name="Cupon Pizza JavaScript"
                            discount="10% OFF"
                        />
                    </div>
                </section>
                <section className="mainHome__foodCards">
                    <FoodCard />
                </section>
            </div>
        </main>
    );
};
