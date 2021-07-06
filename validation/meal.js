const validMeal = require("./valid-meal");

module.exports = function validateMeal(data) {
    let errors = {};

    data.title = validMeal(data) ? data : {};

    if (data.title === {}) {
        errors.title = "This is not a Lunch or Dinner place";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};
