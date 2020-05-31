import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://conduit.productionready.io',
});

export const register = registerData =>
instance.post('/api/users', registerData)

export const login = (loginData) => 
  instance.post('/api/users/login', loginData)
