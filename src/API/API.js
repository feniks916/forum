import * as axios from 'axios';
import { getJwt } from '../helpers/token';

const instance = axios.create({
  baseURL: 'https://conduit.productionready.io',
});

instance.interceptors.request.use(config => {
  console.log(config)
  const jwt = getJwt()
  if (jwt) {
  config.headers['Authorization'] = jwt
  console.log('hello')
  }
  return config
  }, err => {
    console.log('mistake')
    return Promise.reject(err)
  })

  axios.interceptors.response.use(function (response) {
    console.log(response)
    return response;
  }, function (error) {
    console.log(error)
    return Promise.reject(error);
  });

export const register = registerData =>
instance.post('/api/users', registerData)

export const login = (loginData) => 
  instance.post('/api/users/login', loginData)
