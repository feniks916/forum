export const getJwt = () => {
    return sessionStorage.getItem('cool-jwt');
  };

  export const getName = () => {
    return sessionStorage.getItem('cool-name');
  }

  export const isAuth = () => {
    return sessionStorage.getItem('cool-jwt') !== null;
  };

  export const removeJwt = () => {
      return sessionStorage.removeItem('cool-jwt');
  }
