import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://conduit.productionready.io',
});

instance.interceptors.request.use(config => {
  const token = sessionStorage.getItem('cool-jwt');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config
  })

export default instance;

export const register = registerData =>
instance.post('/api/users', registerData)

export const updateArticle = updatedData =>
instance.put(`/api/articles/${sessionStorage.getItem('slug')}`, updatedData)

export const login = (loginData) => 
  instance.post('/api/users/login', loginData)

export const createArticle = (articleData) => 
  instance.post('/api/articles' ,articleData)
