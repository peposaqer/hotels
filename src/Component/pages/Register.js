import React, {useState} from "react";
import LoginForm from "../Forms/loginForm";
import RegisterForm from "../Forms/registerForm";

function Register() {
    return (
        <>
            <div className="container">
                <div className="register">
                    <div>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </>
);
}

export default Register;