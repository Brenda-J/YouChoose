import SplashPage from "./splash";
import { connect } from "react-redux";

const mSTP = state => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session,
    };
}

// const mDTP = dispatch => {
//     return {
        
//     }
// }

export default connect(mSTP, null)(SplashPage)