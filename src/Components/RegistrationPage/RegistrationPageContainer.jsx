import { connect } from 'react-redux';
import RegistrationPage from './Registration'
import {RegistrationThunkCreator} from '../../Redux/mainPageReducer';

const mapStateToProps = (state) => ({
    error: state.mainPage.error,
    status: state.mainPage.status
})

const RegistrationPageContainer = connect(mapStateToProps,{RegistrationThunkCreator})(RegistrationPage)

export default RegistrationPageContainer;