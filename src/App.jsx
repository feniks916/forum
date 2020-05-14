import React from 'react';
import './App.module.scss';
import Registration from './Components/RegistrationPage/Registration';
import LoginPage from './Components/LoginPage/loginPage';
import MainPage from './Components/MainPage/MainPage'
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/forum/LoginPage' component={LoginPage} />
      <Route path='/forum/Registration' component={Registration}/>
      <Route exact path='/forum/' component={MainPage} />
    </BrowserRouter>
  ) 
};

export default App;
