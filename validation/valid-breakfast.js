const validBreakfast = restaurant => {
   return restaurant.categories.title.includes("Breakfast & Brunch");
}

module.exports = validBreakfast;