const dinner = {
  cheeseburger: 1200,
  steak: 2000,
  soup: 800,
  macnCheese: 1400,
  soupSaladCombo: 1600
}


// Create an array of the meals eaten
const foodEaten = Object.keys(dinner);

const foodEatenOtherWay = [];
for(const food in dinner){
  foodEatenOtherWay.push(food);
}

console.log(foodEaten);
console.log(foodEatenOtherWay);

// Create an array of the prices of the meals
const mealPrices = Object.values(dinner);

const mealPricesSecondWay = [];
let sum = 0;
for(const price in dinner){
  mealPricesSecondWay.push(dinner[price]);
  sum += dinner[price];
}

console.log(mealPrices);
console.log(mealPricesSecondWay);
console.log(sum);