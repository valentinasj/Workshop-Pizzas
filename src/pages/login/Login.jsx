import React from "react";
import LoginForm from "../../components/login/loginForm/LoginForm";
import "./Login.scss";
import Logo from "../../imgs/logo.png";

export const Login = () => {
  return (
    <>
     <div className="mainLogin">
        <div className="mainLogin__logo">
         <figure>
           <img src={Logo}></img>
         </figure>
         <span>PiSassScript</span>
        </div>
        <div className="mainLogin__maintext">
          <h5 className="mainLogin__maintitle">Inicia sesión en tu cuenta</h5>
          <p className="mainLogin__text">Disfruta de la mejor Pizza creada para las personas amantes del Código. </p>
        </div>
        <div>
          <LoginForm/>
        </div>
      </div>
    </>
  );
};
