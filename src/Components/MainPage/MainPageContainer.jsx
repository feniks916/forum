import { connect } from 'react-redux';
import { setValueAC } from '../../Redux/mainPageReducer';
import React, { useState, useEffect } from 'react';
import cls from './main.module.scss';
import { removeJwt, getJwt } from '../../helpers/token';
import axios from 'axios';
import { Redirect } from "react-router-dom";

const MainPage = (props) => {
  const [name, setName] = useState(null)
  console.log(props.status)

  useEffect(() => {
    const key = getJwt()
    const fetchData = async () => {
      if (key !== null) {
        try {
          const result = await axios.get(`https://conduit.productionready.io/api/user`,
            {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${key}`,
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
    return props.setValueAC({data: 401});
  }
  if(props.status === 401) {
    return <Redirect to={"/forum/loginPage"} />
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
    status: state.mainPage.status
  }
)

const mainPageContainer = connect(mapStateToProps, { setValueAC })(MainPage);

export default mainPageContainer;