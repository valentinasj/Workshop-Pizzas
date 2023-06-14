import React from 'react'
import RegisterForm from '../../components/register/RegisterForm';
import Logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main>
    <div className="mainLogin">
      <div className="mainLogin__logo">
        <figure>
          <img src={Logo} alt="Logo" />
        </figure>
        <span className="mainLogin__logoName">PiSassScript</span>
      </div>
      <div className="mainLogin__maintext">
        <h5 className="mainLogin__maintitle">Crea una nueva cuenta</h5>
        <br />
        <p className="mainLogin__text">
          Disfruta de la mejor Pizza creada para las personas amantes del Código.
        </p>
      </div>
      <div>
        <RegisterForm/>
      </div>
      <div className="mainLogin__footer">
        <span className="mainLogin__footerText">¿Ya tienes una cuenta?</span>
        <Link to="/">
        <span className="mainLogin__footerLink">Inicia aquí</span>
        </Link>
      </div>
    </div>
  </main>
  )
}

export default Register