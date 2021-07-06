import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { receiveCuisine } from "../../actions/session_actions";
import Wheel from './wheel'

const mapDispatchToProps = dispatch => ({
    receiveCuisine: cuisine => dispatch(receiveCuisine(cuisine))
})

export default withRouter(connect(null, mapDispatchToProps)(Wheel));
