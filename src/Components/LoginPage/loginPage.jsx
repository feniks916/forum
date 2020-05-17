import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { Input } from 'antd';
import { loginData } from '../../API/API';

const LoginPage = () => {
    const [reqData, setreqData] = useState('');
    console.log(reqData)
    return (
        <div>
            <NavLink to='/forum/Registration'> Registration page</NavLink>
            <Formik
                initialValues={{ email: "1", password: "" }}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    loginData({
                        user: {
                            email: values.email,
                            password: values.password,
                        }
                    }).then(response => setreqData(response.status))
                        .catch(error => setreqData(error.response.data.errors['email or password']))
                }}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            {reqData === 422 && <label htmlFor="email" style={{ display: "block" }}>
                                Неверное имя пользователя или пароль
                             </label>}
                            <label htmlFor="email" style={{ display: "block" }}>
                                Email
                             </label>
                            <Input
                                id="email"
                                placeholder="Enter your email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.email && touched.email
                                        ? "text-input error"
                                        : "text-input"
                                }
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                            <label htmlFor="email" style={{ display: "block" }}>
                                password
                                </label>
                            <Input
                                id="password"
                                placeholder="Enter your name"
                                type="password"
                                value={values.email2}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.email2 && touched.email2
                                        ? "text-input error"
                                        : "text-input"
                                }
                            />
                            {errors.email2 && touched.email2 && (
                                <div className="input-feedback">{errors.email2}</div>
                            )}
                            {reqData.length > 0 && (
                                <div>{`Email or Password ${String(reqData)}`}</div>
                            )}
                            <button
                                type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >
                                Reset
                                 </button>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
            </button>
                        </form>
                    );
                }}
            </Formik>
        </div>
    )
}

export default LoginPage;