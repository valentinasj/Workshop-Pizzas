import React from 'react';
import './Cupon.scss';

const Cupon = () => {
  return (
    <section className='cuponBg'>
    <div className='cupon'>
        <div className='cupon__info'>
            <span className='cupon__name'>Cupon para Frontends</span>
            <span className='cupon__discount'>45% OFF</span>
        </div>
    </div>
    </section>
  )
}

export default Cupon