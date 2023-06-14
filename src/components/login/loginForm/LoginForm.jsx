import React, { useEffect, useContext } from "react";
import "./LoginForm.scss";
import ButtonSend from "../../buttonSend/ButtonSend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../../routes/AppRouter";

const API_USER = "https://pizza-api-production.up.railway.app/users";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUserValues } = useContext(UserContext);
  const schema = Yup.object().shape({
    username: Yup.string()
      .required("Un usuario debe ser suministrado")
      .min(5, "El usuario debe tener al menos 5 caracteres"),
    password: Yup.string()
      .required("La contraseña es un campo obligatorio")
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
  });

  const handleLogin = (values) => {
    axios
      .get(API_USER)
      .then((response) => {
        const foundUser = response.data.find((user) => {
          return (
            user.username === values.username &&
            user.password === values.password
          );
        });
        if (foundUser) {
          const user = response.data.find((user) => {
            if (user.username === values.username) {
              return user.email;
            } else {
              return 0;
            }
          });
          delete user.password;
          console.log("This is - user = ", user);
          localStorage.setItem(
            "activeUser",
            JSON.stringify({
              user: user,
            })
          );
          Swal.fire(
            "Datos correctos!",
            "Iniciaste sesion correctamente!",
            "success"
          );
          setUserValues(values);
          navigate("/home");
        } else {
          Swal.fire(
            "Datos incorrectos :(",
            "Verifica tu usuario y contrasena",
            "error"
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main">
      <Formik
        validationSchema={schema}
        initialValues={{ username: "", password: "" }}
        onSubmit={handleLogin}
      >
        <Form className="main__form">
          <div className="main__formUser">
            <FontAwesomeIcon icon={faUser} />
            <Field type="text" name="username" placeholder="Usuario" />
            <ErrorMessage name="username" component="p" className="error" />
          </div>
          <div className="main__formPassword">
            <FontAwesomeIcon icon={faLock} />
            <Field type="password" name="password" placeholder="Contraseña" />
            <ErrorMessage name="password" component="p" className="error" />
          </div>
          <ButtonSend label="Iniciar Sesion" type="submit" />
          <span className="main__restablecer">Restablecer contraseña</span>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
