import React, { useState } from 'react';
import {MDBTabs,MDBTabsItem,MDBTabsLink,MDBTabsContent,MDBTabsPane,MDBBtn,MDBIcon,} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Logo from "../img/231079790_2311509662314955_1834368032630282179_n.jpg"

function Register() {
    const SignupSchema = Yup.object().shape({
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
    });

    const SignupSchema2 = Yup.object().shape({
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
        phone: Yup.number()
            .min(0, 'Too Short!')
            .max(11, 'Too Long!')
            .required('Required'),
    });

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div className='page'>
        <div className='container'>
        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                Login
            </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                Register
            </MDBTabsLink>
            </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>

            <MDBTabsPane show={justifyActive === 'tab1'}>

            <div className="text-center mb-3">
                <p>Sign in with:</p>

                <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                <MDBBtn tag='a' color='none' className='m-1 icons' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1 icons' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1 icons' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1 icons' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
            </div>

            <Formik
                initialValues={{
                    firstName: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => { console.log(values);}}
                >
                {({ errors, touched }) => (
                    <Form className="login-form">
                        <img src={Logo} />
                        <Field name="email" placeholder="E-mail" type="email" />
                        {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
                        <Field name="password" type="password" placeholder="password" />
                        {errors.password && touched.password ? (
                            <div className='error'>{errors.password}</div>
                        ) : null}
                        <button type="submit" className="submit">Confirm</button>
                    </Form>
                )}
            </Formik>

            <p className="text-center">Not a member? <Link to="#!" onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Register</Link></p>

            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === 'tab2'}>

            <div className="text-center mb-3">
                <p>Sign un with:</p>

                <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                <MDBBtn tag='a' color='none' className='m-1 icons' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1 icons' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1 icons' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-1 icons' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
            </div>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                }}
                validationSchema={SignupSchema2}
                onSubmit={values => { console.log(values);}}
                >
                {({ errors, touched }) => (
                    <Form className="login-form">
                        <img src={Logo} />
                        <Field name="firstName" placeholder="First Name" />
                        {errors.firstName && touched.firstName ? (
                            <div className='error'>{errors.firstName}</div>
                        ) : null}
                        <Field name="lastName" placeholder="Last Name" />
                        {errors.lastName && touched.lastName ? (
                            <div className='error'>{errors.lastName}</div>
                        ) : null}
                        <Field name="email" placeholder="E-mail" type="email" />
                        {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
                        <Field name="phone" placeholder="Phone" type="number" />
                        {errors.phone && touched.phone ? <div className='error'>{errors.phone}</div> : null}
                        <div className="text-start ">
                            <label>Birthday</label>
                        </div>
                        <Field name="from" placeholder="from" type="date"/>
                        <button type="submit" className="submit">Confirm</button>
                    </Form>
                )}
            </Formik>

            </MDBTabsPane>

        </MDBTabsContent>
        </div>
    </div>

  );
}

export default Register;