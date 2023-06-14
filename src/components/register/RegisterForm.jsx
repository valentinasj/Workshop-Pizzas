import React, { useContext } from "react";
import "./RegisterForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ButtonSend from "../buttonSend/ButtonSend";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../routes/AppRouter";

const API_USER = "https://pizza-api-production.up.railway.app/users";

const RegisterForm = () => {
    const navigate = useNavigate();
    const { setUserValues } = useContext(UserContext);

    const schema = Yup.object().shape({
        email: Yup.string()
            .required("El email es requerido para este campo")
            .email("Formato incorrecto"),
        username: Yup.string()
            .required("Un usuario debe ser suministrado")
            .min(5, "El usuario debe tener al menos 5 caracteres"),
        password: Yup.string()
            .required("La contraseña es un campo obligatorio")
            .min(8, "La contraseña debe tener al menos 8 caracteres"),
    });

    const handleRegister = (values) => {
        axios
            .post(API_USER, values)
            .then((response) => {
                setUserValues(values);
                
                navigate("/home"); 
            })
            .catch((error) => {
                // Manejar el error aquí
                console.error(error);
            });
    };

    return (
        <div className="main">
            <Formik
                validationSchema={schema}
                initialValues={{ username: "", email: "", password: "" }}
                onSubmit={handleRegister}
            >
                <Form className="main__form">
                    <div className="main__formUser">
                        <FontAwesomeIcon icon={faUser} />
                        <Field
                            type="text"
                            name="username"
                            placeholder="Usuario"
                        />
                        <ErrorMessage
                            name="username"
                            component="p"
                            className="error"
                        />
                    </div>
                    <div className="main__formUser">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <Field type="email" name="email" placeholder="Correo" />
                        <ErrorMessage
                            name="email"
                            component="p"
                            className="error"
                        />
                    </div>
                    <div className="main__formPassword">
                        <FontAwesomeIcon icon={faLock} />
                        <Field
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                        />
                        <ErrorMessage
                            name="password"
                            component="p"
                            className="error"
                        />
                    </div>
                    <ButtonSend label="Registrarse" type="submit" />
                    <span className="main__restablecer">
                        Restablecer contraseña
                    </span>
                </Form>
            </Formik>
        </div>
    );
};

export default RegisterForm;
