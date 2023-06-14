import React, {useEffect, useState} from 'react'
import ButtonPrice from '../buttonPrice/ButtonPrice';

const FoodSearchCard = ({results}) => {
  const [currentIndexArray, setCurrentIndexArray] = useState(
    Array(results.length).fill(0)
  );

  useEffect(() => {
    setCurrentIndexArray(Array(results.length).fill(0));
  }, [results]);


  const handleImageChange = (index, cardIndex) => {
    setCurrentIndexArray((prevState) => {
      const newArray = [...prevState];
      newArray[cardIndex] = index;
      return newArray;
    });
  };
  return (
    <>
        {
            results.map((result, id)=> {
                const images = result.imgs;
                return (
                  <section key={id}>
                      <section className='foodCard' style={{ backgroundImage: `url(${result.imgs[currentIndexArray[id]]})` }} key={id}>
                        <div className='foodCard__info'>
                          <span className='foodCard__title'>{result.name}</span>
                          <ButtonPrice
                                className="foodCard__price"
                                price={`$${result.price}`}
                                currency={"MXN"}
                                pizzaId={result.id}
                            ></ButtonPrice>
                        </div>
                        <div className='foodCard__dots'>
                    
                          {images.map((image, imageIndex) => (
                            <span
                              key={imageIndex}
                              className={`foodCard__dot ${currentIndexArray[id] === imageIndex ? 'active' : ''}`}
                              onClick={() => handleImageChange(imageIndex, id)}
                            />
                          ))}
                        </div>
                      </section>
                </section>
                )
                
            })
        }
    </>
  )
}

export default FoodSearchCard