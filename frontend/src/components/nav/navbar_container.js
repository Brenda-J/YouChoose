import { connect } from 'react-redux';
import { logout, receiveLocation } from '../../actions/session_actions';


import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    location: state.session.location
});

const mapDispatchToProps = dispatch => ({
    receiveLocation: location => dispatch(receiveLocation(location)),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);