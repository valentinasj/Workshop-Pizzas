import React from "react";
import LoginForm from "../../components/login/loginForm/LoginForm";
import "./Login.scss";
import Logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";

export const Login = () => {
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
          <h5 className="mainLogin__maintitle">Inicia sesión en tu cuenta</h5>
          <br />
          <p className="mainLogin__text">
            Disfruta de la mejor Pizza creada para las personas amantes del Código.
          </p>
        </div>
        <div>
          <LoginForm />
        </div>
        <div className="mainLogin__footer">
          <span className="mainLogin__footerText">¿No tienes una cuenta?</span>
          <Link to="/register">
          <span className="mainLogin__footerLink">Regístrate aquí</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

