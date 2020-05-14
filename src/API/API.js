import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://conduit.productionready.io',
  headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'token',
}
});


export const postData = data =>
  instance.post('/api/users', data).then(response => console.log(response.data));


export const loginData = (data) => 
  instance.post('/api/users/login', data).then(response => console.log(response.data));
