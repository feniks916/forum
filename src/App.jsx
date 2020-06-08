import React from 'react';
import './App.module.scss';
import RegistrationPageContainer from './Components/RegistrationPage/RegistrationPageContainer';
import LoginPageContainer from './Components/LoginPage/loginPageContainer';
import mainPageContainer from './Components/MainPage/MainPageContainer'
import AllArticlesContainer from './Components/ArticlesPAge/AllArticles'
import {Switch, Route} from 'react-router-dom';
import { ProtectedRoute } from './helpers/protectedRoute';
import SingleArticleContainer from './Components/CurrentArticlePage/CurrentArticle';
import DevelopmentPageContainer from './Components/AddNewArticlePage/AddArticle';
import EditPageContainer from './Components/EditingPage/EditingPage';

const App = () => {
  return (
    <Switch>
      <Route path='/forum/LoginPage' component={LoginPageContainer} />
      <Route path='/forum/articles' component={AllArticlesContainer} />
      <Route path='/forum/Registration' component={RegistrationPageContainer}/>
      <Route path='/forum/developmentPage' component={DevelopmentPageContainer}/>
      <Route path='/forum/article' component={SingleArticleContainer}/>
      <Route path='/forum/editPage' component={EditPageContainer}/>
      <ProtectedRoute exact path='/forum/' component={mainPageContainer} />
    </Switch>
  ) 
};

export default App;
