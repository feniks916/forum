import { connect } from 'react-redux';
import { setTokenAC } from '../../Redux/mainPageReducer';
import React, { useState, useEffect } from 'react';
import cls from './main.module.scss';
import { removeJwt, getJwt } from '../../helpers/token';
import axios from 'axios';
import { Redirect } from "react-router-dom";

const MainPage = (props) => {
  const [name, setName] = useState(null)

  useEffect(() => {
    const key = getJwt()
    const fetchData = async () => {
      if (key !== null) {
        try {
          const result = await axios.get('https://conduit.productionready.io/api/user',
            {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `bearer ${key}`,
              }
            })
          setName(result.data)
        } catch (error) {
          if (error.response.status) {
            setName(error.response.status)
          }
        }
      }
    }
    if (name === null) {
      fetchData();
    }
  }, [name, props.username ])

  const deleteToken = () => {
    removeJwt()
    props.history.push('/forum/LoginPage')
  }
  return (
        <div className={cls.wrapper}>
          <h3>{name} </h3>
          <button
            onClick={() => deleteToken()}
          > Выйти </button>
        </div>
  )
}

let mapStateToProps = (state) => (
  {
    username: state.mainPage.username,
    token: state.mainPage.token,
  }
)

const mainPageContainer = connect(mapStateToProps, { setTokenAC })(MainPage);

export default mainPageContainer;