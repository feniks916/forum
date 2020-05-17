import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://conduit.productionready.io',
});


export const postData = data =>
instance.post('/api/users', data)


export const loginData = (data) => 
  instance.post('/api/users/login', data)
