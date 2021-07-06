import { connect } from 'react-redux';
import { fetchRestaurantsByCuisine, fetchFavoriteRestaurant, removeFavoriteRestaurant } from '../../actions/restaurant_actions';   
import Restaurants from './restaurants';
// import { receiveLocation, receiveCuisine } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        region: state.session.location,
        cuisine: state.session.cuisine,
        currentUser: state.session.user
    };
};

const mDTP = (dispatch) => {
    return {
      fetchRestaurantsByCuisine: (restaurantData) => dispatch(fetchRestaurantsByCuisine(restaurantData)),
      fetchFavoriteRestaurant: (user) => dispatch(fetchFavoriteRestaurant(user)),
      removeFavoriteRestaurant: (restaurantId) => dispatch(removeFavoriteRestaurant(restaurantId)),
    };
};

export default connect(mSTP, mDTP)(Restaurants)