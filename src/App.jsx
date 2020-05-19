import React from 'react';
import './App.module.scss';
import RegistrationPageContainer from './Components/RegistrationPage/RegistrationPageContainer';
import LoginPageContainer from './Components/LoginPage/loginPageContainer';
import mainPageContainer from './Components/MainPage/MainPageContainer'
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/forum/LoginPage' component={LoginPageContainer} />
      <Route path='/forum/Registration' component={RegistrationPageContainer}/>
      <Route exact path='/forum/' component={mainPageContainer} />
    </BrowserRouter>
  ) 
};

export default App;
