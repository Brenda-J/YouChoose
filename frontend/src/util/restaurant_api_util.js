import axios from 'axios';

export const getRestaurants = () => {
    return axios.get('/api/restaurants');
}

export const getRestaurant = (restaurantId) => {
    return axios.get(`/api/restaurants/${restaurantId}`);
}

export const getRestaurantsByCuisine = (restaurantData) => {
    return axios.post(`/api/restaurants/search`, restaurantData)
}

export const getFavoriteRestaurant = (user) => {
    return axios.post(`/api/users/favorites`, user)
}

export const removeFavoriteRestaurant = (restaurantId) => {
    return axios.delete(`/api/users/favorites/${restaurantId}`);
}
