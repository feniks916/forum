export const getJwt = () => {
    return localStorage.getItem('cool-jwt');
  };

  export const getName = () => {
    return localStorage.getItem('cool-name');
  }

  export const isAuth = (value = false) => {
    return getJwt() !== null
  };

  export const removeJwt = () => {
      return localStorage.removeItem('cool-jwt');
  }


  export const getSlug = () => {
    return localStorage.getItem('slug');
  }


