import React, {useState} from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function BookForm() {

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
        adult: Yup.number()
            .min(0, 'Too Short!')
            .max(2, 'Too Long!')
            .required('Required'),
        Children: Yup.number()
            .min(0, 'Too Short!')
            .max(2, 'Too Long!')
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
                adult: '',
                Children: '',
                phone: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => { console.log(values);}}
            className="book-form"
            >
            {({ errors, touched }) => (
                <Form>
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
                    <div className="text-start ">
                        <label>Enter a date from</label>
                    </div>
                    <Field name="from" placeholder="from" type="date"/>
                    <div className="text-start ">
                        <label>Enter a date to</label>
                    </div>
                    <Field name="to" placeholder="to" type="date" />
                    <Field name="adult" placeholder="Number of Adult" type="number" />
                    {errors.adult && touched.adult ? <div>{errors.adult}</div> : null}
                    <Field name="Children" placeholder="Number of Children" type="number" />
                    {errors.Children && touched.Children ? <div>{errors.Children}</div> : null}
                    <div className="form-radio">
                        <label className="radio">
                        <Field type="radio" name="picked" value="One" /> Cash
                        </label>
                        <label className="radio">
                        <Field type="radio" name="picked" value="Two" /> On Home
                        </label>
                    </div>
                    <button type="submit" className="submit">Confirm</button>
                </Form>
            )}
        </Formik>
    );
}

export default BookForm;