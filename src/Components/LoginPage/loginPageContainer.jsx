import { connect } from 'react-redux';
import { thunk, setErrorAC } from '../../Redux/userReducer';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { Input, Alert } from 'antd';
import { useHistory } from "react-router-dom";
import cls from './login.module.scss';
import { getName } from '../../helpers/token';

const LoginPage = (props) => {
    const { status, error, thunk, setErrorAC, loggedIn } = props;
    let history = useHistory(); 

    if( loggedIn === true && getName() !== null) {
        history.push("/forum/articles");
    }

    const resetErrors = () => {
        setErrorAC('')
    }

    if (status < 300 && status > 199) {
        loggedIn === true && history.push("/forum/articles")
        return 'redirecting...'
        }
        const redirectToArticles = () => {
            history.push("/forum/articles");
        }
    return (
        <div className={cls.wrapper}>
           <button 
           onClick={redirectToArticles}
           className={cls.articles}> <p> Atricles</p></button>
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
                            {error !== '' && error !== 'undefined' && (
                                <div className={cls.errors}>
                                <Alert message={`email or password ${error["email or password"]}`} type="error" showIcon />
                                </div>
                            )}
                            <div className={cls.buttonsArea}>
                                <NavLink to='/forum/Registration'>Register</NavLink>
                                <div>
                                    <button
                                        type="button"
                                        className="outline"
                                        onClick={() => { 
                                            handleReset()
                                            resetErrors()
                                        }}
                                        disabled={!dirty || isSubmitting}
                                    >
                                        Reset
                                    </button>
                                    <button
                                        type="submit" disabled={isSubmitting}
                                        >
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
    status: state.userData.status,
    loggedIn : state.userData.loggedIn
})

const LoginPageContainer = connect(mapStateToProps, { thunk, setErrorAC })(LoginPage)

export default LoginPageContainer;