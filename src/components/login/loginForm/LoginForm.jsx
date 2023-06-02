import React from 'react'
import './LoginForm.scss'
const LoginForm = () => {
  return (
  
    <div className='main'>
      <form className='main__form'>
        <input type="text" name="" id="" placeholder='Username' />
        <input type="password" name="" id="" placeholder='Password'/>
      </form>
      <span className='main__restablecer'>Restablecer contrasena</span>
    </div>
  )
}

export default LoginForm