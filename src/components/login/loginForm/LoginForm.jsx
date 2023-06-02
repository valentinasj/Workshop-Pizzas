import React from 'react'
import './LoginForm.scss'
import ButtonSend from '../../buttonSend/ButtonSend' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
const LoginForm = () => {
  return (
  
    <div className='main'>
      <form className='main__form'>
        <div className='main__formUser'>
      <FontAwesomeIcon icon={faUser} />
        <input type="text" name="" id="" placeholder='Usuario' />
        </div>
        <div className='main__formPassword'>
        <FontAwesomeIcon icon={faLock} />
        <input type="password" name="" id="" placeholder='Contraseña'/>
        </div>
      </form>
      <ButtonSend/>
      <span className='main__restablecer'>Restablecer contraseña</span>
    </div>
  )
}

export default LoginForm