import React, { useEffect, useState, useContext } from "react";

import "./FoodCard.scss";
import ButtonPrice from "../buttonPrice/ButtonPrice";
import axios from "axios";
import { UserContext } from "../../routes/AppRouter";

const API_FOOD = "https://pizza-api-production.up.railway.app/pizzas";

const FoodCard = ({ imageUrl }) => {
  const [currentIndexArray, setCurrentIndexArray] = useState([]);
  const { pizzaValues, setPizzaValues } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(API_FOOD)
      .then((response) => {
        setPizzaValues(response.data);
        setCurrentIndexArray(Array(response.data.length).fill(0));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleImageChange = (index, cardIndex) => {
    setCurrentIndexArray((prevState) => {
      const newArray = [...prevState];
      newArray[cardIndex] = index;
      return newArray;
    });
  };

  return (
    <section>
      {pizzaValues.map((pizza, index) => {
        const images = pizza.imgs;

        return (
          <section
            className="foodCard"
            style={{
              backgroundImage: `url(${images[currentIndexArray[index]]})`,
            }}
            key={index}
          >
            <div className="foodCard__info">
              <span className="foodCard__title">{pizza.name}</span>
              <ButtonPrice
                className="foodCard__price"
                price={`$${pizza.price}`}
                currency={"MXN"}
                pizzaId={pizza.id}
              ></ButtonPrice>
            </div>
            <div className="foodCard__dots">
              {images.map((image, imageIndex) => (
                <span
                  key={imageIndex}
                  className={`foodCard__dot ${
                    currentIndexArray[index] === imageIndex ? "active" : ""
                  }`}
                  onClick={() => handleImageChange(imageIndex, index)}
                />
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default FoodCard;
