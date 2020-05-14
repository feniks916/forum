import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
          <button> <NavLink to='/forum/LoginPage'> Выйти</NavLink> </button> 
        </div>
    )
}

export default LoginPage;