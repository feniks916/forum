import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import {Input, Button} from 'antd';
import * as Yup from 'yup';
import {loginData} from '../../API/API';

const LoginPage = () => {
    const [reqData, setreqData] = useState('');
    console.log(reqData)
    return (
        <div>
        <NavLink to='/forum/Registration'> Registration page</NavLink>
        <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          loginData({
            email: values.email,
            password: values.password,
          }).then(response => setreqData(response));
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Поле обязательно'),
          password: Yup.string()
            .required('Поле обязательно')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .max(40, 'Password is too long - should be 40 chars maximum.')
            .matches(
              /(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])/,
              'Исплользуй 1 цифру 1 заглавную и одну строчную букву',
            )
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
                <h3>Login Form</h3>

              <span>email</span>
              <Input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <div>{errors.email}</div>
              )}
              <span>Password</span>
              <Input
                id="password"
                placeholder="Enter password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
                <button type="submit" disabled={isSubmitting}>
                  <NavLink to='/forum/'> Submit</NavLink>
                </button>
                <Button type="reset" onClick={handleReset}>
                  Reset
                </Button>
            </form>
          );
        }}
      </Formik>
        </div>
    )
}

export default LoginPage;