import React, {useState} from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Logo from "../img/231079790_2311509662314955_1834368032630282179_n.jpg"

function RegisterForm() {

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.number()
            .min(8, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        phone: Yup.number()
            .min(0, 'Too Short!')
            .max(11, 'Too Long!')
            .required('Required'),
    });

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phone: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => { console.log(values);}}
            
            >
            {({ errors, touched }) => (
                <Form className="register-form">
                <img src={Logo} />
                <h2>Register Now</h2>
                    <Field name="firstName" placeholder="First Name" />
                    {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                    ) : null}
                    <Field name="lastName" placeholder="Last Name" />
                    {errors.lastName && touched.lastName ? (
                        <div>{errors.lastName}</div>
                    ) : null}
                    <Field name="email" placeholder="E-mail" type="email" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <Field name="phone" placeholder="Phone" type="number" />
                    {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
                    <Field name="password" placeholder="password" type="password" />
                    {errors.password && touched.password ? <div>{errors.password}</div> : null}
                    <button type="submit" className="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}

export default RegisterForm;