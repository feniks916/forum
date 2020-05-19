import React from 'react';
import {Redirect} from "react-router-dom";

const mainPage = (props) => {
  console.log(props)
  if(props.token.length === 0)
  {
    return <Redirect to={"/forum/LoginPage"} /> ;
  }
  const deleteToken = () => {
    return props.setTokenAC({
      user: {
        token: '',
        username: '',
      }
    });
  }
    return (
        <div>
          <h3>{props.username} </h3>
          <button onClick={() => deleteToken()}> Выйти </button> 
        </div>
    )
}

export default mainPage;