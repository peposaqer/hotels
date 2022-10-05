import React, {useState} from "react";
import { Formik, Form, Field } from 'formik';
import Logo from "../img/231079790_2311509662314955_1834368032630282179_n.jpg"

function LoginForm() {
    return (
        <Formik
            >
            {({ errors, touched }) => (
                <Form className="login-form">
                    <img src={Logo} /> 
                    <Field name="firstName" placeholder="User Name" />
                    <Field name="password" placeholder="password" type="password" />
                    <button type="submit" className="submit">Log In</button>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;