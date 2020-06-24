import { connect } from 'react-redux';
import { RegistrationThunk } from '../../Redux/mainPageReducer';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { Input, Alert } from 'antd';
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';
import cls from './registration.module.scss';
import { isAuth, getName } from '../../helpers/token';
import { setErrorAC } from '../../Redux/mainPageReducer';

const RegistrationPage = props => {
  const { status, error, RegistrationThunk, setErrorAC } = props;
  console.log(error)
  let history = useHistory(); 
  if(isAuth() && getName() !== null) {
    history.push("/forum/articles");
}
  if( status < 300 && status > 199) {
      history.push("/forum/articles");
  }

  const resetErrors = () => {
    setErrorAC('')
}

  return (
    <div className={cls.wrapper}>
      <Formik
        initialValues={{ email: "", name: "", password: "", confirm_password: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(resolve => setTimeout(resolve, 1000));
          setSubmitting(false);
          RegistrationThunk({
            email: values.email,
            password: values.password,
            name: values.name
          })
        }}
        validationSchema={Yup.object().shape({
          confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords dont match'),
        })}
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
              {error !== '' && error.email !== undefined && (
                <div className={cls.errors}>
                <Alert message={`Email ${String(error.email[0])}`} type="error" showIcon />
                </div>
              )}
              <label htmlFor="email" style={{ display: "block" }}>
                Name
              </label>
              <Input
                id="name"
                placeholder="Enter your name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cls.input}
              />
              {error !== '' && error.username !== undefined && (
                <div className={cls.errors}>
                <Alert message={`Name ${String(error.username[0])}`} type="error" showIcon />
                </div>
              )}
              <label htmlFor="email" style={{ display: "block" }}>
                Password
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
              {error !== '' && error.password !== undefined && (
                <div className={cls.errors}>
                <Alert message={`Password ${String(error.password[0])}`} type="error" showIcon />
                </div>
              )}
              <label htmlFor="email" style={{ display: "block" }}>
                Repeat Password
              </label>
              <Input
                id="confirm_password"
                placeholder="Enter your name"
                type="password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cls.input}
              />
              {errors.confirm_password && touched.confirm_password && (
                <div className={cls.errors}><p>{errors.confirm_password}</p></div>
              )}
              <div className={cls.buttonsArea}>
              <NavLink to='/forum/LoginPage'> Login page</NavLink>
              <div>
              <button
                type="button"
                className="outline"
                onClick={() => { 
                  handleReset()
                  resetErrors() }}
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

const RegistrationPageContainer = connect(mapStateToProps, { RegistrationThunk, setErrorAC })(RegistrationPage)

export default RegistrationPageContainer;