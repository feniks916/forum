import React from 'react';
import './App.module.scss';
import RegistrationPageContainer from './Components/RegistrationPage/RegistrationPageContainer';
import LoginPageContainer from './Components/LoginPage/loginPageContainer';
import mainPageContainer from './Components/MainPage/MainPageContainer'
import {Switch, Route} from 'react-router-dom';
import { ProtectedRoute } from './helpers/protectedRoute';

const App = () => {
  return (
    <Switch>
      <Route path='/forum/LoginPage' component={LoginPageContainer} />
      <Route path='/forum/Registration' component={RegistrationPageContainer}/>
      <ProtectedRoute exact path='/forum/' component={mainPageContainer} />
    </Switch>
  ) 
};

export default App;
