import { connect } from 'react-redux';
import { thunk } from '../../Redux/mainPageReducer';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { Input } from 'antd';
import { Redirect } from "react-router-dom";
import cls from './login.module.scss';

const LoginPage = (props) => {
    const { status, error, thunk } = props;
    if (status < 300 && status > 199) {
        return <Redirect to={"/forum"} />
    }

    return (
        <div className={cls.wrapper}>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    thunk({
                        email: values.email,
                        password: values.password
                    })
                }}
            >
                {props => {
                    const {
                        values,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <form onSubmit={handleSubmit} className={cls.form}>
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
                                className={cls.input}
                            />
                            <label htmlFor="email" style={{ display: "block" }}>
                                password
                                </label>
                            <Input
                                id="password"
                                placeholder="Enter your name"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={cls.input}
                            />
                            {error !== null && error !== 'undefined' && (
                                <div className={cls.errors}><p>{`email or password ${error["email or password"]}`}</p></div>
                            )}
                            <div className={cls.buttonsArea}>
                                <NavLink to='/forum/Registration'>Register</NavLink>
                                <div>
                                    <button
                                        type="button"
                                        className="outline"
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}
                                    >
                                        Reset
                                    </button>
                                    <button
                                        type="submit" disabled={isSubmitting}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => ({
    error: state.userData.error,
    status: state.userData.status
})

const LoginPageContainer = connect(mapStateToProps, { thunk })(LoginPage)

export default LoginPageContainer;