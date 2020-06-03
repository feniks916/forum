export const getJwt = () => {
    return sessionStorage.getItem('cool-jwt');
  };

  export const getName = () => {
    return sessionStorage.getItem('cool-name');
  }

  export const isAuth = (value = false) => {
    return getJwt() !== null
  };

  export const removeJwt = () => {
      return sessionStorage.removeItem('cool-jwt');
  }



