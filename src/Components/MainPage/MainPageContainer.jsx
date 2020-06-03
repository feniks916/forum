import { connect } from 'react-redux';
import { setStatusAC } from '../../Redux/mainPageReducer';
import React, { useState, useEffect } from 'react';
import cls from './main.module.scss';
import { removeJwt, getJwt, getName, isAuth } from '../../helpers/token';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const MainPage = (props) => {
  const [name, setName] = useState(null)
  console.log(getJwt())
  let history = useHistory(); 

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
                'Authorization': `Token ${key}`,
              }
            })
          setName(getName())
        } catch (error) {
          if (error) {
            removeJwt('cool-jwt')
            props.setStatusAC({data: 401});
            props.history.push('/forum/LoginPage')
          }
        }
      }
    }
    if (name === null) {
      fetchData();
    }
  }, [name, props, isAuth() ])

  const deleteToken = () => {
    removeJwt('cool-jwt')
    props.history.push('/forum/LoginPage');
    return props.setStatusAC({data: 401});
  }

  return (
        <div className={cls.wrapper}>
          <h3> {name} </h3>
          <button
            onClick={deleteToken}
          > Выйти </button>
        </div>
  )
}

let mapStateToProps = (state) => (
  {
    username: state.userData.username,
    token: state.userData.token,
    status: state.userData.status
  }
)

const mainPageContainer = connect(mapStateToProps, { setStatusAC })(MainPage);

export default mainPageContainer;