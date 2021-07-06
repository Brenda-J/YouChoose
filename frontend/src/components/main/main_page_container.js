
import { fetchRestaurantsByCuisine } from '../../actions/restaurant_actions';
import MainPage from './main_page';
import { connect } from 'react-redux';
import { receiveTag } from '../../actions/session_actions';

const mSTP = (state) => ({
    tag: state.session.tag
})


const mDTP = dispatch => ({
    fetchRestaurantsByCuisine: (restaurantData) => dispatch(fetchRestaurantsByCuisine(restaurantData)),
    receiveTag: (tag) => dispatch(receiveTag(tag))
})

export default connect(mSTP, mDTP)(MainPage);