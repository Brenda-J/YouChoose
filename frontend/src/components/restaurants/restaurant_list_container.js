import { connect } from "react-redux";
import { fetchRestaurantsByCuisine } from "../../actions/restaurant_actions";
import RestaurantList from "./restaurant_list";

const mSTP = (state) => {
  return {
    cuisine: state.session.cuisine,
    region: state.session.location,
    restaurants: state.restaurants.data,
    favoriteRestaurants: state.session.user.favorites,
    currentUser: state.session.user
  };
  
};

const mDTP = (dispatch) => {
  return {
    fetchRestaurantsByCuisine: (cuisine) => dispatch(fetchRestaurantsByCuisine(cuisine)),
  };
};

export default connect(mSTP, mDTP)(RestaurantList);
