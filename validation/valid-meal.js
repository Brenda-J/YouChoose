const validMeal = (restaurant) => {
  return !restaurant.categories.title.includes("Breakfast & Brunch");
};

module.exports = validMeal;
