const validBreakfast = require('./valid-breakfast');

module.exports = function validateBreakfast(data) {
    let errors = {};

    data.title = validBreakfast(data) ? data : {};

    if(data.title === {}){
        errors.title = 'This is not a Breakfast place'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};