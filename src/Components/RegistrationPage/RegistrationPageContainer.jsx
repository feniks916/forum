import { connect } from 'react-redux';
import RegistrationPage from './Registration'
import {setTokenAC} from '../../Redux/mainPageReducer'

const RegistrationPageContainer = connect(null,{setTokenAC})(RegistrationPage)

export default RegistrationPageContainer;