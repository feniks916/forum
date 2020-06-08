import { connect } from 'react-redux';
import { setStatusAC } from '../../Redux/mainPageReducer';
import React, { useState, useEffect } from 'react';
import cls from './main.module.scss';
import { removeJwt, getJwt, getName } from '../../helpers/token';
import { useHistory, NavLink } from "react-router-dom";
import instance from '../../API/API';

const MainPage = (props) => {
  const [name, setName] = useState(null)

  useEffect(() => {
    const key = getJwt()
    const fetchData = async () => {
      if (key !== null) {
        try {
          const result = await instance.get('/api/user')
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
  }, [name, props ])

  const deleteToken = () => {
    removeJwt('cool-jwt')
    props.history.push('/forum/LoginPage');
    return props.setStatusAC({data: 401});
  }

  return (
        <div className={cls.wrapper}>
          <h3> {name} </h3>
          <NavLink to='/forum/articles'>All Articles</NavLink>
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