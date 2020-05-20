import { connect } from 'react-redux';
import LoginPage from './loginPage'
import {setTokenAC} from '../../Redux/mainPageReducer';
import {thunkCreator} from '../../Redux/mainPageReducer';

const mapStateToProps = (state) => ({
    error: state.mainPage.error,
    status: state.mainPage.status
})

const LoginPageContainer = connect(mapStateToProps,{setTokenAC, thunkCreator})(LoginPage)

export default LoginPageContainer;