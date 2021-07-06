import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS,
     RECEIVE_FAVORITE_RESTAURANT, DELETE_FAVORITE_RESTAURANT } 
from '../actions/restaurant_actions';

const RestaurantReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    

    switch(action.type){
        case RECEIVE_RESTAURANTS:
            return action.restaurants
        case RECEIVE_RESTAURANT:
            return newState[action.restaurant.id] = action.restaurant
        case RECEIVE_FAVORITE_RESTAURANT:
            // console.log('This is action ');
            // console.log(action);
            // console.log("^^^^^^");
            newState[action.restaurantId.data._id] = action.restaurantId.data
            return newState
        case DELETE_FAVORITE_RESTAURANT:
            newState[action.restaurantId.data._id] = null
        default:
            return state;
    }
}

export default RestaurantReducer;