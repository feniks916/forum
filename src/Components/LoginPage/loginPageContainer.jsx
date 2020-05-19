import { connect } from 'react-redux';
import LoginPage from './loginPage'
import {setTokenAC} from '../../Redux/mainPageReducer'

const LoginPageContainer = connect(null,{setTokenAC})(LoginPage)

export default LoginPageContainer;