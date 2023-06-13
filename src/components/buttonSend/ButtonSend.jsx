import React from 'react';
import './ButtonSend.scss';
const ButtonSend = ({label}) => {
  return (
    <div>
        <button className='button'>{label}</button>
    </div>
  )
}

export default ButtonSend