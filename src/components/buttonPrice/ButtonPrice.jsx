
import React from 'react';
import './ButtonPrice.scss';

const ButtonPrice = ({price, currency}) => {
  return (
    <button className='buttonPrice'>
      <span className='buttonPrice__price'>
        {price}
        </span>
        <span className='buttonPrice__currency'>
        {currency}
        </span>
      </button>
  )
}

export default ButtonPrice