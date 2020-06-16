import { connect } from 'react-redux';
import { thunk } from '../../Redux/mainPageReducer';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { Input } from 'antd';
import { useHistory } from "react-router-dom";
import cls from './login.module.scss';
import { isAuth, getName } from '../../helpers/token';

const LoginPage = (props) => {
    const { status, error, thunk } = props;
    let history = useHistory(); 

    if(isAuth() && getName() !== null) {
        history.push("/forum/articles");
    }

    if (status < 300 && status > 199) {
        setTimeout(() => isAuth() && history.push("/forum/articles"), 10);
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
    status: state.userData.status
})

const LoginPageContainer = connect(mapStateToProps, { thunk })(LoginPage)

export default LoginPageContainer;