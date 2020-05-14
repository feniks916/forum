import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import {Input, Button} from 'antd';
import * as Yup from 'yup';
import {postData} from '../../API/API';

const RegistrationPage = props => {
  const [reqData, setreqData] = useState('');
  console.log(reqData)
return (
  <div>
    <NavLink to='/forum/LoginPage'> Login page</NavLink>
    <Formik
        initialValues={{
          email: '',
          name: '',
          age: '',
          password: '',
          repeatPassword: '',
          acceptTerms: false,
          skills: [{ id: 0, value: '' }],
        }}
        onSubmit={ values => {
          console.log('hello')
          postData({
            email: values.email,
            name: values.name,
            password: values.password,
          }).then(response => setreqData(response.data));
          
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Поле обязательно'),
          name: Yup.string().required('Поле обязательно'),
          age: Yup.number().required('Поле обязательно'),
          password: Yup.string()
            .required('Поле обязательно')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .max(40, 'Password is too long - should be 40 chars maximum.')
            .matches(
              /(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])/,
              'Исплользуй 1 цифру 1 заглавную и одну строчную букву',
            ),
          repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Пароли не совпадают'),
          acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
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
                <h3>Registration Form</h3>
              <span>name</span>
              <Input
                id="name"
                placeholder="Enter your name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && <div >{errors.name}</div>}
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
                Submit
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
export default RegistrationPage;
