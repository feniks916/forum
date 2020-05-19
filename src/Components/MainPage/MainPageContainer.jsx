import { connect } from 'react-redux';
import mainPage from './MainPage';
import {setTokenAC} from '../../Redux/mainPageReducer'

let mapStateToProps = (state) => (
  {
    username: state.mainPage.username,
    token: state.mainPage.token,
  }
)



const mainPageContainer = connect(mapStateToProps, {setTokenAC})(mainPage);

export default mainPageContainer;