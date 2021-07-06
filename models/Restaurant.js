const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,
    },
    category: {
        type: String,
    },
    ratings: {
        type: Number
    },
    isFavorited: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
        required: true
    }
});

const Restaurant = mongoose.model('restaurant', RestaurantSchema);
module.exports = Restaurant;