import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { Input } from 'antd';
import { Redirect } from "react-router-dom";
import * as Yup from 'yup';
import cls from './registration.module.scss';

const RegistrationPage = props => {
  const { status, error, RegistrationThunkCreator } = props;
  console.log(error)
  if (status === 200) {
    return <Redirect to={"/forum"} />
  }

  return (
    <div className={cls.wrapper}>
      <NavLink to='/forum/LoginPage'> Login page</NavLink>
      <Formik
        initialValues={{ email: "", name: "", password: "", confirm_password: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(resolve => setTimeout(resolve, 1000));
          setSubmitting(false);
          RegistrationThunkCreator({
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
              {error !== null && error.email !== undefined && (
                <div>{`Email ${String(error.email)}`}</div>
              )}
              <label htmlFor="email" style={{ display: "block" }}>
                Name
            </label>
              <Input
                id="name"
                placeholder="Enter your name"
                type="text"
                value={values.email2}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cls.input}
              />
              {error !== null && error.username !== undefined && (
                <div>{`Name ${String(error.username)}`}</div>
              )}
              <label htmlFor="email" style={{ display: "block" }}>
                Password
            </label>
              <Input
                id="password"
                placeholder="Enter your name"
                type="password"
                value={values.email2}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cls.input}
              />
              {error !== null && error.password !== undefined && (
                <div>{`Password ${String(error.password)}`}</div>
              )}
              <label htmlFor="email" style={{ display: "block" }}>
                Repeat Password
            </label>
              <Input
                id="confirm_password"
                placeholder="Enter your name"
                type="password"
                value={values.email2}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cls.input}
              />
              {errors.confirm_password && touched.confirm_password && (
                <div>{errors.confirm_password}</div>
              )}
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
            </form>
          );
        }}
      </Formik>
    </div>
  )
}
export default RegistrationPage;
