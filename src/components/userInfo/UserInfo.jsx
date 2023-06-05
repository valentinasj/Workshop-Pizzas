import React from 'react';
import './UserInfo.scss';
import Person from '../../imgs/person2.png';

const UserInfo = ({user}) => {
  return (
    <div className='mainUser'>
        <div className='mainUser__title'>
            <h5 className='mainUser__page'>Home</h5>
            <span className='mainUser__userSalute'>Que bueno verte {user}!</span>
        </div>
        <div className='mainUser__profile'>
            <figure>
                <img src={Person}/>
            </figure>
        </div>
    </div>
  )
}

export default UserInfo