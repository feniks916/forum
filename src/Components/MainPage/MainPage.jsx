import React from 'react';
import {Redirect} from "react-router-dom";
import cls from './main.module.scss'

const mainPage = (props) => {
  console.log(props)
  if(props.token.length === 0)
  {
    return <Redirect to={"/forum/loginPage"} />  ;
  }
  const deleteToken = () => {
    return props.setTokenAC({
      data: {
      user: {
        token: '',
        username: '',
      }
    },
    request: {
      status: 401
    }
    });
  }
    return (
        <div className={cls.wrapper}>
          <h3>{props.username} </h3>
          <button 
          onClick={() => deleteToken()}
          > Выйти </button> 
        </div>
    )
}

export default mainPage;