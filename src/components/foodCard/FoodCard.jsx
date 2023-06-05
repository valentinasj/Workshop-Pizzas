import React, { useState } from 'react';
import PizzaOne from '../../imgs/pizza-one.jpg';
import PizzaTwo from '../../imgs/pizza-two.jpg';
import PizzaThree from '../../imgs/pizza-three.jpg';
import './FoodCard.scss';
import ButtonPrice from '../buttonPrice/ButtonPrice';

const images = [PizzaOne, PizzaTwo, PizzaThree]; // Agrega aquí todas las imágenes del carrusel
// const images2 = [PizzaFour, PizzaFive, PizzaSix]; // Agrega aquí todas las imágenes del carrusel
// const images3 = [PizzaSeven, PizzaEight, PizzaNine]; // Agrega aquí todas las imágenes del carrusel

const FoodCard = ({ imageUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className='foodCard' style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <div className='foodCard__info'>
        <span className='foodCard__title'>Pizza Super especial para FrontEnds</span>
        <ButtonPrice className='foodCard__price' price={'$99'} currency={'MXN'}></ButtonPrice>
      </div>
      <div className="foodCard__dots">
        {images.map((image, index) => (
          <span
            key={index}
            className={`foodCard__dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleImageChange(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FoodCard;
