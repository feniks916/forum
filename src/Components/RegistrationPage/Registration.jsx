import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { Input, Button } from 'antd';
import * as Yup from 'yup';
import { postData } from '../../API/API';

const RegistrationPage = props => {
  const [reqData, setreqData] = useState('');
  console.log(reqData)
  return (
    <div>
      <NavLink to='/forum/LoginPage'> Login page</NavLink>
      <Formik
        initialValues={{ email: "1", name: "2", password: ""}}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
          postData({
            user: {
            email: values.email,
            password: values.password,
            name: values.name,
        }}).then(response => setreqData(response.data))
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
              <label htmlFor="email" style={{ display: "block" }}>
                Email
            </label>
              <input
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
                Name
            </label>
              <input
                id="name"
                placeholder="Enter your name"
                type="text"
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
              <label htmlFor="email" style={{ display: "block" }}>
                Password
            </label>
              <input
                id="password"
                placeholder="Enter your name"
                type="text"
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
export default RegistrationPage;
