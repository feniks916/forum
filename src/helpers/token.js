export const getJwt = () => {
    return localStorage.getItem('cool-jwt');
  };

  export const isAuth = () => {
    return localStorage.getItem('cool-jwt') !== null;
  };

  export const removeJwt = () => {
      return localStorage.removeItem('cool-jwt');
  }