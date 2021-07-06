import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  //RECEIVE_USER_SIGN_IN,
  RECEIVE_LOCATION,
  RECEIVE_CUISINE,
  RECEIVE_TAG,
} from "../actions/session_actions";

const initialState = {
    isAuthenticated: false,
    user: {},
    location: "sanfrancisco"
};

export default function sessionApiReducer (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            return {
              isAuthenticated: false,
              user: undefined,
              location: "sanfrancisco"
            };
        case RECEIVE_LOCATION:
            return {
                ...state,
                location: action.location
            };
        case RECEIVE_CUISINE:
            return {
                ...state,
                cuisine: action.cuisine
            };
        case RECEIVE_TAG:
            return {
                ...state,
                tag: action.tag
            };
        default:
            return state;
    }
}