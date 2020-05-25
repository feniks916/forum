import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://conduit.productionready.io',
});


export const postData = data =>
instance.post('/api/users', data)
.then(response => {
  return response
})


export const loginData = (data) => 
  instance.post('/api/users/login', data)
  .then(response => {
    return response
  })


export const authData = (data) => 
  instance.get('/api/user', {
    withCredentials: true,
    headers: {
      Authorization: data
    }
  })