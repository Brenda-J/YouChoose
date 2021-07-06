import { getRestaurant, getRestaurants, getRestaurantsByCuisine, getFavoriteRestaurant } from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_FAVORITE_RESTAURANT = "RECEIVE_FAVORITE_RESTAURANT";
export const DELETE_FAVORITE_RESTAURANT = "DELETE_FAVORITE_RESTAURANT";

export const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants,
});

export const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant,
});

export const receiveFavoriteRestaurant = (restaurantId) => ({
    type: RECEIVE_FAVORITE_RESTAURANT,
    restaurantId
})

export const deleteFavoriteRestaurant = (restaurantId) => ({
    type: DELETE_FAVORITE_RESTAURANT,
    restaurantId
});

export const fetchRestaurants = () => (dispatch) =>
  getRestaurants()
    .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
    .catch((err) => console.log(err));

export const fetchRestaurant = (restaurantId) => (dispatch) =>
  getRestaurant(restaurantId)
    .then((restaurant) => dispatch(receiveRestaurant(restaurant)))
    .catch((err) => console.log(err));

export const fetchRestaurantsByCuisine = (restaurantData) => (dispatch) => 
    getRestaurantsByCuisine(restaurantData)
        .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
        .catch((err) => console.log(err));

export const fetchFavoriteRestaurant = (user) => dispatch => 
    getFavoriteRestaurant(user)
        .then((restaurantId) => dispatch(receiveFavoriteRestaurant(restaurantId)))
        .catch((err) => console.log(err));

export const removeFavoriteRestaurant = (restaurantId) => (dispatch) =>
  removeFavoriteRestaurant(restaurantId)
    .then((restaurantId) => dispatch(deleteFavoriteRestaurant(restaurantId)))
    .catch((err) => console.log(err));


