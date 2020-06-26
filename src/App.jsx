import React from 'react';
import { connect } from 'react-redux';
import RegistrationPageContainer from './Components/RegistrationPage/RegistrationPageContainer';
import LoginPageContainer from './Components/LoginPage/loginPageContainer';
import AllArticlesContainer from './Components/AllArticles/AllArticles'
import {Switch, Route} from 'react-router-dom';
import { ProtectedRoute } from './helpers/protectedRoute';
import ArticleContainer from './Components/CurrentArticle/CurrentArticle';
import EditArticleContainer from './Components/AddEditArticle/AddArticle';

const Routes = (props) => {
  return (
    <Switch>
      <Route path='/forum/LoginPage' component={LoginPageContainer} />
      <Route path='/forum/articles' component={AllArticlesContainer} />
      <Route path='/forum/Registration' component={RegistrationPageContainer}/>
      <Route path='/forum/developmentPage' component={EditArticleContainer}/>
      <Route path='/forum/article' component={ArticleContainer}/>
      <Route path='/forum/editPage' component={EditArticleContainer}/>
      <ProtectedRoute exact path='/forum/' component={AllArticlesContainer} loggedIn={props.loggedIn} />
    </Switch>
  ) 
};

const mapStateToProps = (state) => ({
  loggedIn: state.userData.loggedIn,
})

const App = connect(mapStateToProps)(Routes)

export default App;
