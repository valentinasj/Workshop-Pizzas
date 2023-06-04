import React from 'react'
import './RegisterForm.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ButtonSend from '../buttonSend/ButtonSend'
const RegisterForm = () => {
  return (
  
    <div className='main'>
      <form className='main__form'>
        <div className='main__formUser'>
      <FontAwesomeIcon icon={faUser} />
        <input type="text" name="" id="" placeholder='Usuario' />
        </div>
        <div className='main__formUser'>
        <FontAwesomeIcon icon={faEnvelope} />
        <input type="text" name="" id="" placeholder='Correo' />
        </div>
        <div className='main__formPassword'>
        <FontAwesomeIcon icon={faLock} />
        <input type="password" name="" id="" placeholder='Contraseña'/>
        </div>
      </form>
      <ButtonSend label="Registrarse"/>
      <span className='main__restablecer'>Restablecer contraseña</span>
    </div>
  )
}

export default RegisterForm;