import { connect } from 'react-redux';
import { setValueAC } from '../../Redux/mainPageReducer';
import React, { useState, useEffect } from 'react';
import cls from './main.module.scss';
import { removeJwt, getJwt, getName } from '../../helpers/token';
import axios from 'axios';

const MainPage = (props) => {
  const [name, setName] = useState(null)

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
            props.setValueAC({data: 401});
            props.history.push('/forum/LoginPage')
          }
        }
      }
    }
    if (name === null) {
      fetchData();
    }
  }, [name, props ])

  const deleteToken = () => {
    props.history.push('/forum/LoginPage');
    return props.setValueAC({data: 401});
  }

  return (
        <div className={cls.wrapper}>
          <h3> {name} </h3>
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